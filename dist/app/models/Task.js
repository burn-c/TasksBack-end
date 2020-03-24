"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Task extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        description: _sequelize2.default.STRING,
        start_date: _sequelize2.default.DATE,
        end_date: _sequelize2.default.DATE
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    this.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department'
    });

    this.belongsTo(models.TaskType, {
      foreignKey: 'task_type_id',
      as: 'task_type'
    });

    this.belongsTo(models.TaskStatu, {
      foreignKey: 'task_status_id',
      as: 'task_status'
    });
  }
}

exports. default = Task;
