import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDb } from "./src/config/db.js";

dotenv.config();

connectDb();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hii");
});

//  centralized error handler
app.use((err, _req, res, _next) => {
  console.error(`Error ${err.message}`);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log("Server is running ar port:", PORT);
});
