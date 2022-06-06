const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mongodb = require ("mongodb")
import credentials from "./credentials";
import MONGO_URL from credentials


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URL)

