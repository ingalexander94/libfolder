const { Router } = require("express");
const AuthMiddleware = require("../../middlewares/validate-token");
const UserTeamsController = require("../../controllers/user_teams_controller");



class UserTeamsRouter {

    static get routes() {
        const router = Router();
        router.use(AuthMiddleware.validateJWT);
        router.get("/listUserTeams/:id", UserTeamsController.getListTeams);
        router.get("/detailUserTeam/:id" , UserTeamsController.getDetailUserTeam);
        router.post("/search/", UserTeamsController.getSearch);
        return router;
    }
}

module.exports = UserTeamsRouter;