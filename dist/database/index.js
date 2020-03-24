"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _User = require('../app/models/User'); var _User2 = _interopRequireDefault(_User);
var _Department = require('../app/models/Department'); var _Department2 = _interopRequireDefault(_Department);
var _TaskType = require('../app/models/TaskType'); var _TaskType2 = _interopRequireDefault(_TaskType);
var _TaskStatu = require('../app/models/TaskStatu'); var _TaskStatu2 = _interopRequireDefault(_TaskStatu);
var _Task = require('../app/models/Task'); var _Task2 = _interopRequireDefault(_Task);
var _Activity = require('../app/models/Activity'); var _Activity2 = _interopRequireDefault(_Activity);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [_User2.default, _Department2.default, _TaskType2.default, _TaskStatu2.default, _Task2.default, _Activity2.default];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

exports. default = new Database();
