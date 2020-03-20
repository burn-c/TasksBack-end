module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'task',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
