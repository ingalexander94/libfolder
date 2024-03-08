const { response, request } = require("express");
const CustomError = require("../config/errors");
const OperationsExpensivesModel = require("../database/models/operations_expensives_model");

class OperationsExpensivesController {

    static limit = 10;
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
      
      static getListOperatingTeamsPage = async (req = request , res = response)=> {
        try { 
        
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * this.limit;
        const dbConnection = req.clientConnection;
        const operationsExpensivesModel = new OperationsExpensivesModel(dbConnection);

        const listOperation = await operationsExpensivesModel.listOperationsExpensivesTeams(
            this.limit,
            offset
        );
        const { total } = await operationsExpensivesModel.totalOperationExpensivePage();
        const totalPages = Math.ceil(total/this.limit);
        return res.status(200).json ({
            status: true,
            data: {totalPages,listOperation},
            error: null,
          });

        }catch (error) {
          this.#handleError(error, res);
        } finally {
            if (req.clientConnection) {
              await req.clientConnection.destroy();
            }
          }



      };

      static getListOperatingPlatePage = async (req = request, res = response)=> {
        try {
          const { id } = req.params;
          const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * this.limit;
        const dbConnection = req.clientConnection;
        const operationsExpensivesModel = new OperationsExpensivesModel(dbConnection);
        const listPlate = await operationsExpensivesModel.listOperationsExpensivesPlate(
          this.limit,
            offset,
            id
        );
        const { total } = await operationsExpensivesModel.totalOperationExpensivePlate();
        const totalPages = Math.ceil(total/this.limit);
        return res.status(200).json ({
            status: true,
            data: {totalPages,listPlate},
            error: null,
          });
        }catch (error) {
          this.#handleError(error, res);
        } finally {
            if (req.clientConnection) {
              await req.clientConnection.destroy();
            }
          }

      };

      static getListOperatingPlateTeamPage = async (req = request, res = response)=> {
        try{
          const { car_plate } = req.params;
          const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * this.limit;
        const dbConnection = req.clientConnection;
        const operationsExpensivesModel = new OperationsExpensivesModel(dbConnection);
        const listOperation = await operationsExpensivesModel.listInfoOperationsExpensives(
          this.limit,
            offset,
           car_plate
        );
        const { total } = await operationsExpensivesModel.totalListOperationsExpensives();
        const totalPages = Math.ceil(total/this.limit);
        return res.status(200).json ({
          status: true,
          data: {totalPages,listOperation},
          error: null,
        });
        }catch (error) {
          this.#handleError(error, res);
        } finally {
            if (req.clientConnection) {
              await req.clientConnection.destroy();
            }
          }

      };

      static getDetailsOperatingExpenses = async (req = request, res = response)=> {
        try {
          const {id} = req.params;
          const dbConnection = req.clientConnection;
          const operationsExpensivesModel = new OperationsExpensivesModel(dbConnection);
          const detail = await operationsExpensivesModel.detailsOperationExpensives(id);
          const expenses = await operationsExpensivesModel.expensesDetailOperations(id);
          return res.status(200).json ({
            status: true,
            data: {detail,expenses},
            error: null,
          });

        }catch (error) {
          this.#handleError(error, res);
        } finally {
            if (req.clientConnection) {
              await req.clientConnection.destroy();
            }
          }
      };
} 

module.exports = OperationsExpensivesController;