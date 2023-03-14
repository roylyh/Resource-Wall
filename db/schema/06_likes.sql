-- Drop and recreate Likes table

DROP TABLE IF EXISTS likes CASCADE;
CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  liked BOOLEAN NOT NULL DEFAULT TRUE,
  CONSTRAINT unique_likes_user_resource UNIQUE (user_id, resource_id)
);
