import express from 'express';
import session from "express-session";
import cors from "cors";
import "dotenv/config";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-cs5610-fa23"
mongoose.connect(CONNECTION_STRING);
const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        sameSite: 'none',
        secure: true,
        maxAge: 10000000000

    }
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxu = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}

app.use(
    session(sessionOptions)
);

app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app)

app.listen(process.env.PORT || 4000)