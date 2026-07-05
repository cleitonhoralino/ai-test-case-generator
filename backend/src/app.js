const express = require("express");
const cors = require("cors");

const testCaseRoutes = require("./routes/testCaseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Rotas da API
app.use("/api/test-cases", testCaseRoutes);

// Rota inicial
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API do Gerador de Casos de Teste está funcionando!"
    });
});

module.exports = app;