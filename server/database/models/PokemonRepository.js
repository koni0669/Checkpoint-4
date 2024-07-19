const AbstractRepository = require("./AbstractRepository");

class PokemonRepository extends AbstractRepository {
  constructor() {
    super({ table: "pokemon" });
  }

  async create(pokemon) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, type) VALUES (?, ?)`,
      [pokemon.name, pokemon.type]
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
}

module.exports = PokemonRepository;
