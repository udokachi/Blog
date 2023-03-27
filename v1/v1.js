
import { Router } from "express";
import userRoutes from "../src/routes/userRoutes.js";
import articleRoutes from '../src/routes/articleRoutes.js'

const v1 = Router()

v1.use("/user", userRoutes)
v1.use("/article", articleRoutes)


export default v1