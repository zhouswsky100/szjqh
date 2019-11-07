import * as types from '../mutation-types.js'
import util from '../../utils/util'

const state = {
  userNav: [
    {
      "menuId": "101",
      "menuName": "基础管理",
      "functionLevel": 1,
      "url": "",
      "isMenu": "Y",
      "isValid": "Y",
      "accessType": "Y",
      "leaf": false,
      "expanded": true,
      "children": [{
        "menuId": "10101",
        "menuName": "预约记录",
        "functionLevel": 2,
        "url": "seek",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      },{
        "menuId": "10189",
        "menuName": "新闻管理",
        "functionLevel": 2,
        "url": "news",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      },  {
        "menuId": "10103",
        "menuName": "banner管理",
        "functionLevel": 2,
        "url": "banner",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }, {
        "menuId": "10105",
        "menuName": "网站基础配置管理",
        "functionLevel": 2,
        "url": "webtit",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      },{
        "menuId": "10108",
        "menuName": "栏目管理",
        "functionLevel": 2,
        "url": "lanmu",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }, {
        "menuId": "10209",
        "menuName": "合作商管理",
        "functionLevel": 2,
        "url": "hezuoshang",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      },{
        "menuId": "10109",
        "menuName": "友链管理",
        "functionLevel": 2,
        "url": "youqing",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }, {
        "menuId": "10110",
        "menuName": "底部管理",
        "functionLevel": 2,
        "url": "foot",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }],
      "parentFunctionList": null
   
    },  {
      "menuId": "102",
      "menuName": "教育管理",
      "functionLevel": 1,
      "url": "",
      "isMenu": "Y",
      "isValid": "Y",
      "accessType": "Y",
      "leaf": false,
      "expanded": true,
      "children": [{
        "menuId": "10401",
        "menuName": "课程管理",
        "functionLevel": 2,
        "url": "kechen",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }, {
        "menuId": "10402",
        "menuName": "讲师管理",
        "functionLevel": 2,
        "url": "jiangshi",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }, {
        "menuId": "10403",
        "menuName": "往期课程管理",
        "functionLevel": 2,
        "url": "wangqikecheng",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }],
      "parentFunctionList": null
   
    }, {
      "menuId": "106",
      "menuName": "其他管理",
      "functionLevel": 1,
      "url": "",
      "isMenu": "Y",
      "isValid": "Y",
      "accessType": "Y",
      "leaf": false,
      "expanded": true,
      "children": [{
        "menuId": "10509",
        "menuName": "服务器信息",
        "functionLevel": 2,
        "url": "server",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }, {
        "menuId": "10508",
        "menuName": "数据库备份",
        "functionLevel": 2,
        "url": "db",
        "isMenu": "Y",
        "isValid": "Y",
        "accessType": "Y",
        "leaf": true,
        "expanded": true,
        "children": null,
        "parentFunctionList": null
      }],
      "parentFunctionList": null
   
    }],
  funTree: [],
  funList: [],
};

// getters
const getters = {
  getUserNav: state => state.userNav,
};

const actions = {
  userNav({
    commit
  }, opt) {
    let params = {
      type: opt.type,
      url: opt.url,
      data: opt.data,
      success: opt.success,
      fail: opt.fail
    }
    // state.userNav = []
    // util.getMyrequest(params).then(function(resp) {
    //   commit(types.USER_NAV, resp.children || [])
    // })
  }
};

const mutations = {
  [types.USER_NAV](state, data) {
    state.userNav = data
  }
};

export default {
  state,
  actions,
  getters,
  mutations
}
