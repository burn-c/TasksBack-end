import Sequelize from 'sequelize';

import User from '../app/models/User';
import Department from '../app/models/Department';
import TaskType from '../app/models/TaskType';
import TaskStatu from '../app/models/TaskStatu';

import databaseConfig from '../config/database';

const models = [User, Department, TaskType, TaskStatu];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
