"use strict";

const { Controller } = require("egg");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("index.html", {
      title: "我是索尼克",
    });
  }
  //获取用户信息
  async user() {
    const { ctx } = this;
    //查询数据库
    const result = await ctx.service.home.user();
    ctx.body = result;
  }
  //添加用户
  async adduser() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      if (!name) throw new Error("名字不能为空");
      const result = await ctx.service.home.adduser(name);
      ctx.body = {
        code: 200,
        msg: "添加成功",
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: error,
        data: null,
      };
    }
  }
  //更新用户
  async ediruser() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    try {
      const result = await ctx.service.home.edituser(id, name);
      ctx.body = {
        code: 200,
        msg: "更新成功",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: "更新失败",
      };
      console.log(error);
    }
  }
  //删除用户
  async deleteuser() {
    const { ctx } = this;
    const { id } = ctx.query;
    try {
      if (id == null) throw new Error("删除失败");
      await ctx.service.home.deleteuser(id);
      ctx.body = {
        code: 200,
        msg: "删除成功",
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: "删除失败",
      };
    }
  }
}

module.exports = HomeController;
