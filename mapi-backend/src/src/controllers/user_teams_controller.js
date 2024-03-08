const { response, request } = require("express");
const CustomError = require("../config/errors");
const UserTeamModel = require("../database/models/user_team_model");

class UserTeamsController {
   static limit = 12;
    static #handleError = (error, res = response) => {
        if (error instanceof CustomError) {
          return res
            .status(error.statusCode)
            .json({ status: false, data: null, error: error.message });
        }
        console.error(error);
        return res
          .status(500)
          .json({ status: false, data: null, error: "Internal Server Error" });
      };

      static getListTeams = async (req = request , res = response)=> {
        try{
            const { id } = req.params;
            const orderBy = req.query.orderBy || "DESC";
            const page = parseInt(req.query.page) || 1;
            const offset = (page - 1) * this.limit;
            const listUser = await UserTeamModel.listTeams(
                this.limit,
                offset,
                orderBy,
                id
            );
            const {total} = await UserTeamModel.getTotalListUserTeam();
            const totalPages = Math.ceil(total/this.limit);
            return res.status(200).json ({
                status: true,
                data: {totalPages,listUser},
                error: null,
              });

        }catch (error) {
            this.#handleError(error, res);
          }


      };

      static getDetailUserTeam = async (req = request , res = response) => {

        try {
          const { id } = req.params;
          const details = await UserTeamModel.detailsUserTeam(id);
          const photos = await UserTeamModel.photos();
       
          return res.status(200).json({
            status: true,
            data: details,photos,
            error: null,
          });

        } catch (error) {
          this.#handleError(error, res);
        }


      };

      static getSearch = async (req = request , res = response) => {
        try {
          const data = req.body;
          const userteam_found =
            await UserTeamModel.search(data);
          const { total } = await UserTeamModel.searchCount(data);
          const last_page = Math.ceil(total / 10);
    
          return res.status(200).json({
            status: true,
            data: {
              last_page,
              user_team: userteam_found ?? null,
            },
            error: null,
          });
        } catch (error) {
          this.#handleError(error, res);
        }
      }
}

module.exports = UserTeamsController;