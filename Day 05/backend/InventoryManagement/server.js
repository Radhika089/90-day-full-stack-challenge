import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDb } from "./src/config/db.js";

dotenv.config();

connectDb();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hii");
});

app.listen(PORT, () => {
  console.log("Server is running ar port:", PORT);
});
