import app from "./app.js";
import pool from "./config/dbConnection.js";

pool.query("SELECT 1")
  .then(() => console.log("PostgreSQL connected successfully!"))
  .catch(console.error);

app.listen(5000, () => console.log("Server running on port 5000"));
