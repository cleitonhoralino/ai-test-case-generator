console.log("✅ testCaseRoutes carregado");

const express = require("express");

const router = express.Router();

const { generateTestCases } = require("../services/geminiService");

router.post("/generate", async (req, res) => {

    try {

        const { requirement } = req.body;

        console.log("Requisito recebido:");
        console.log(requirement);

        const bdd = await generateTestCases(requirement);

        return res.json({

            success: true,

            bdd

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Erro ao gerar casos de teste."

        });

    }

});

module.exports = router;