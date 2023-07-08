const Service = require("egg").Service;
class HomeService extends Service {
  async user() {
    //从数据库获取数据
    const { ctx, app } = this;
    const QUERY_STR = "id,name";
    let sql = `select ${QUERY_STR} from list`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  //添加用户
  async adduser(name) {
    const { ctx, app } = this;
    try {
      const result = await app.mysql.insert("list", { name });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async edituser(id, name) {
    const { ctx, app } = this;
    try {
      const result = await app.mysql.update(
        "list",
        { name },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  //删除接口
  async deleteuser(id) {
    const { app } = this;
    try {
      const result = app.mysql.delete("list", { id });
      return result;
    } catch (error) {
      return null;
    }
  }
}
module.exports = HomeService;
