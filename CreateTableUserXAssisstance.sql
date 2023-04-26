CREATE TABLE userxAssisstance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  event_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users_people(id),
  FOREIGN KEY (event_id) REFERENCES user_events(id)
);