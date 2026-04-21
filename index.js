import express from "express"
const app = express();
import contactRoutes from "./routes/contacts.routes.js";
import {connectDB} from "./config/database.js"

const PORT = process.env.PORT
// DataBase connection
connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(contactRoutes)

app.listen(PORT, () => {
  console.log(`localhost running on port ${PORT}`);
});
