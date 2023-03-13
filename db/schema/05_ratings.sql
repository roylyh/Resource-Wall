-- Drop and recreate Ratings table

DROP TABLE IF EXISTS ratings CASCADE;
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  rating SMALLINT NOT NULL DEFAULT 0,
  CONSTRAINT unique_rating_user_resource UNIQUE (user_id, resource_id)
);
