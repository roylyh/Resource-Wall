-- Drop and recreate Topics table

DROP TABLE IF EXISTS topics CASCADE;
CREATE TABLE topics (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
