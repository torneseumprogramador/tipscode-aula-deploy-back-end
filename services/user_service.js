const db = require('../config/db');
const User = require('../entities/user');

const create = async (user) => {
  const sql = "INSERT INTO users (name, phone, obs) VALUES (?, ?, ?)";
  const params = [user.name, user.phone, user.obs];

  const result = await db.query(sql, params);
  return result.insertId;
};

const update = async (user) => {
  const sql = "UPDATE users SET name = ?, phone = ?, obs = ? WHERE id = ?";
  const params = [user.name, user.phone, user.obs, user.id];

  const result = await db.query(sql, params);
  return result.affectedRows;
};

const delete_by_id = async (id) => {
  const sql = "DELETE FROM users WHERE id = ?";

  const result = await db.query(sql, id);
  return result.affectedRows;
};

const find_by_id = async (id) => {
  const sql = "SELECT * FROM users WHERE id = ?";

  const results = await db.query(sql, id);
  const users = results.map(result => new User(result.id, result.name, result.phone, result.obs));
  return users[0]; // Retorna o primeiro usuário (deve ser único)
};

const all = async () => {
  const sql = "SELECT * FROM users";

  const results = await db.query(sql);
  const users = results.map(result => new User(result.id, result.name, result.phone, result.obs));
  return users;
};

module.exports = {
  create,
  update,
  delete_by_id,
  find_by_id,
  all,
};
