import express from "express";
import cors from 'cors';

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger";

import "reflect-metadata";
import { AppDataSource } from "./database/db";
import appRouter from "./routes/index";

import 'dotenv/config';

const app = express();
app.use(express.json());

app.use(cors({
  origin: process.env.PUBLIC_FRONT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE','OPTION'],
  credentials: true
}));

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", appRouter);

const port = 3001;

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
  app.listen(3001, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => console.log(error));
