const createTags = `
CREATE TABLE IF NOT EXISTS tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  note_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  name VARCHAR NOT NULL,
  FOREIGN KEY(note_id) REFERENCES notes(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);
`

module.exports = createTags