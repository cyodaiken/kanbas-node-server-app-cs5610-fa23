import express from 'express';
import cors from "cors";
import "dotenv/config";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";

const app = express()
app.use(cors({origin: process.env.FRONTEND_URL}));
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000)