const createUsers = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  avatar VARCHAR NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`

module.exports = createUsers