import Sequelize from 'sequelize';

import User from '../app/models/User';
import Department from '../app/models/Department';
import TaskType from '../app/models/TaskType';
import TaskStatu from '../app/models/TaskStatu';
import Task from '../app/models/Task';

import databaseConfig from '../config/database';

const models = [User, Department, TaskType, TaskStatu, Task];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
