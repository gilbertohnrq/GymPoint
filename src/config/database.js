module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  user: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true,
  },
};
