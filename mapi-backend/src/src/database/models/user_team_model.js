const { connectCommonDB } = require("../common");

class UserTeamModel {
  static listTeams = async (limit = 0, offset = 0) => {
    let db;
    try {
      db = await connectCommonDB();
      const user = db
        .select(
          "mp_teams.id_team",
          "mp_teams.team_name",
          "mp_brands.id_brand",
          "mp_brands.brand_name",
          "mp_user_team.ut_car_plate",
          "mp_user_team.ut_state",
          "mp_team_photo.id_team_photo",
          "mp_team_photo.tp_photo",
          "mp_user_team.id_user_team",
          db.raw("3245 AS mp_kilometers")
        )
        .from("mp_user_team")
        .leftJoin(
          "mp_brands",
          "mp_user_team.id_user_team",
          "mp_brands.id_brand"
        )
        .leftJoin("mp_teams", "mp_user_team.id_user_team", "mp_teams.id_team")
        .leftJoin(
          "mp_team_photo",
          "mp_team_photo.id_team_photo",
          "mp_user_team.id_user_team"
        )
        .limit(limit)
        .offset(offset);
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static getTotalListUserTeam = async () => {
    let db;
    try {
      db = await connectCommonDB();
      const total = await db
        .from("mp_user_team")
        .count("mp_user_team.id_user_team AS total")
        .first();
      return total;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static detailsUserTeam = async (id_user_team) => {
    let db;
    try {
      db = await connectCommonDB();
      const user = db
        .select(
          "mp_team_photo.id_team_photo",
          "mp_user_team.id_user_team",
          "mp_team_photo.tp_photo",
          "mp_brands.id_brand",
          "mp_brands.brand_name",
          "mp_teams.id_team",
          "mp_teams.team_name",
          "mp_user_team.ut_date_purchased",
          "mp_user_team.ut_year",
          "mp_user_team.ut_application",
          "mp_user_team.ut_car_plate",
          "mp_user_team.ut_vin",
          "mp_user_team.ut_state",
          "mp_users.id_user",
          "mp_users.user_names",
          "mp_users.user_surnames",
          "mp_users.user_photo",
          "mp_users.user_phone",
          "mp_engines.id_engine",
          "mp_engines.engine_model",
          "mp_engines.engine_cylinder_capacity",
          "mp_engines.engine_serial",
          "mp_engines.engine_power",
          "mp_engines.engine_rpm_power",
          "mp_engines.engine_governed_speed",
          "mp_engines.engine_ecm_name",
          "mp_engines.engine_ecm_code",
          db.raw('"3000 KM" AS mp_kilometers'),
          db.raw('"engrase" AS mp_engrase'),
          db.raw('"44 minutos" AS mp_time'),
          db.raw("44000 AS mp_price")
        )
        .from("mp_user_team")
        .leftJoin(
          "mp_team_photo",
          "mp_user_team.id_user_team",
          "mp_team_photo.id_team_photo"
        )
        .leftJoin(
          "mp_brands",
          "mp_user_team.id_user_team",
          "mp_brands.id_brand"
        )
        .leftJoin("mp_teams", "mp_user_team.id_user_team", "mp_teams.id_team")
        .leftJoin("mp_users", "mp_user_team.id_user_team", "mp_users.id_user")
        .leftJoin(
          "mp_engines",
          "mp_user_team.id_user_team",
          "mp_engines.id_engine"
        )
        .where("mp_user_team.ut_user", id_user_team);
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static photos = async () => {
    let db;
    try {
      db = await connectCommonDB();
      const photos = await db
        .select(
          "mp_team_photo.id_team_photo",
          "mp_team_photo.tp_photo",
          "mp_user_team.id_user_team",
          "mp_team_photo.tp_user_team"
        )
        .from("mp_team_photo")
        .leftJoin(
          "mp_user_team",
          "mp_user_team.id_user_team",
          "mp_team_photo.tp_user_team"
        )
        .where("mp_user_team.ut_user", 1);

      return photos;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static search = async (data = {}) => {
    let db;
    let { key, page } = data;
    page = parseInt(page);

    try {
      db = await connectCommonDB();

      const userteam = db
        .select("*")
        .from("mp_user_team")
        .limit(10)
        .offset((page - 1) * 10)
        .whereRaw(`ut_car_plate LIKE '${key}%'`);

      return userteam ?? null;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static searchCount = async (data = {}) => {
    let db;
    let { key, _ } = data;

    try {
      db = await connectCommonDB();
      const count = db
        .count("* as total")
        .from("mp_user_team")
        .whereRaw(`ut_car_plate LIKE '${key}%' `)
        .first();

      return count;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

module.exports = UserTeamModel;
