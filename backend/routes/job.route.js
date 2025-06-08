import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const jobRouter = express.Router();

jobRouter.route("/post").post(isAuthenticated, postJob);
jobRouter.route("/get").get(isAuthenticated, getAllJobs);
jobRouter.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
jobRouter.route("/get/:id").get(isAuthenticated, getJobById);

export default jobRouter;
