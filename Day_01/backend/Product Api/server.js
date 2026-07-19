import { connectDb } from "./src/config/db.js";
import app from "./src/app.js";

connectDb();

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
