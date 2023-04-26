CREATE TABLE user_events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  interesados INT NOT NULL,
  categoria VARCHAR(255) NOT NULL,
  ubicacion VARCHAR(255) NOT NULL,
  asistencia INT NOT NULL
);
