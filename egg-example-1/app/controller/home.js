'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getinfo(){
    this.ctx.status = 200;
    this.ctx.body = {
      content:'yeeeeeeee'
    }
    console.log("hihi");
  }

}

module.exports = HomeController;
