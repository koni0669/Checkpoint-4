const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, email, password) VALUES (?,?,?)`,
      [user.username, user.email, user.password]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async readByUsername(username) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE username = ?`,
      [username]
    );

    return rows[0];
  }
}

module.exports = UserRepository;
