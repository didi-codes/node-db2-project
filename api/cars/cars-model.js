const db = require('../../data/db-config');

const getAll = () => {
  return db('cars');
};

const getById = () => {
  // DO YOUR MAGIC
};

const create = (cars) => {
  return db('cars')
    .insert(cars)
    .then(([id]) => {
      return db('cars').where('id', id).first();
    });
};

module.exports = {
  getAll,
  getById,
  create,
};
