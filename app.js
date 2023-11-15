import express from 'express';
import cors from "cors";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";

const app = express()
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app)
app.listen(4000)