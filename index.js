const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express();

app.use(cors())
dotenv.config();

const urlRoutes = require("./routes/urlRoutes")
// app.get("/", (req, res) => {
//   res.send("API is working");
// });

const connectDB = require("./config/db")
connectDB();
app.use(cors({
  origin: "http://localhost:5174",
  methods: ["GET", "POST", "PUT", "DELETE"],
}))


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/url",urlRoutes)


app.listen(7000,()=>{console.log("server is running on the port http://localhost:7000")})