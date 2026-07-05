require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function generateTestCases(requirement) {

    const prompt = `
Você é um Analista de Qualidade de Software (QA) especializado em testes baseados em BDD (Behavior-Driven Development).

Analise o requisito informado e gere casos de teste utilizando a sintaxe Gherkin.

Siga obrigatoriamente estas regras:

- Escreva em português.
- Utilize apenas a estrutura:
  Feature
  Scenario
  Given
  When
  Then
- Gere casos de teste claros, objetivos e de fácil compreensão.
- Inclua pelo menos um cenário de sucesso.
- Inclua cenários de erro quando fizer sentido.
- Considere validações e campos obrigatórios, caso sejam mencionados no requisito.
- Não explique o que é BDD.
- Não escreva comentários, observações ou textos fora dos casos de teste.
- Não invente funcionalidades que não estejam descritas no requisito.

Requisito:
${requirement}
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text;
}

module.exports = {
    generateTestCases,
};