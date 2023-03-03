  // swagger
  const swaggerUi = require('swagger-ui-express');
  const swaggerJsdoc = require('swagger-jsdoc');
  // swagger config
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Proyecto final desafio Latam",
        version: "1.0.0",
        description: "API Desafio Final",
      },
      servers: [
        {
          url: "http://localhost:3000/api/",
        },
      ],
    },
    apis: ["./server.js"],
  };
  
  const swaggerSpec = swaggerJsdoc(options);

const swaggerJsdocs = (app, port) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(
        `Swagger docs available at http://localhost:${port}/api/docs`
    );
};

module.exports = { swaggerJsdocs };