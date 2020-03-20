module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('task', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: { model: 'departments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: { model: 'tasktype', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: { model: 'taskstatus', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('task');
  }
};
