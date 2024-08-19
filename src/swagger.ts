import { SwaggerDefinition, Options } from "swagger-jsdoc";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Rural Producer API",
    version: "1.0.0",
    description: "API handler's rural producers",
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "server",
    },
  ],
  tags: [
    {
      name: "Producer",
      description: "API handler's rural producers",
    },
  ],
};

export const swaggerOptions: Options = {
  swaggerDefinition,
  apis: ["./src/controllers/**/*.ts"], 
};
