"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/user", controller.home.user); //占位符params
  router.post("/adduser", controller.home.adduser);
  router.post("/edior", controller.home.ediruser);
  router.delete("/deleteuser", controller.home.deleteuser);
};
