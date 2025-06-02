const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const port = 3001;

// Подключение к базе данных
const db = new sqlite3.Database("F:\\SQLite\\TestDB\\VideoCards", (err) => {
  if (err) {
    console.error("Ошибка при подключении к базе данных:", err);
    return;
  }
  console.log("Успешное подключение к базе данных");
});

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Получение всех цен по видеокартам
app.get("/api/cards", (_, res) => {
  db.all(" SELECT * FROM Cards", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Ошибка при получении данных" });
    }

    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
