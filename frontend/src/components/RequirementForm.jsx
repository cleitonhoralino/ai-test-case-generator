import { useState } from "react";

function RequirementForm({ requirement, setRequirement, setBdd }) {

    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {

        if (!requirement.trim()) {
            alert("Informe um requisito.");
            return;
        }

        setLoading(true);

        try {

            const response = await fetch("http://localhost:3000/api/test-cases/generate", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    requirement
                })

            });

            const data = await response.json();

            setBdd(data.bdd);

        } catch (error) {

            console.error(error);
            alert("Erro ao gerar os casos de teste.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-header">
                <h5 className="mb-0">
                    Requisito do Sistema
                </h5>
            </div>

            <div className="card-body">

                <p className="text-muted">
                    Informe abaixo o requisito funcional para gerar os casos de teste no padrão BDD.
                </p>

                <textarea
                    className="form-control"
                    rows="8"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    placeholder="Exemplo: O sistema deve permitir login utilizando e-mail e senha..."
                    disabled={loading}
                />

                <div className="d-grid mt-4">

                    <button
                        className="btn btn-primary"
                        onClick={handleGenerate}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                                Gerando casos de teste...
                            </>
                        ) : (
                            "Gerar Casos de Teste"
                        )}
                    </button>

                </div>

                {loading && (
                    <div className="alert alert-info mt-3 mb-0">
                        Aguarde... A IA está analisando o requisito e gerando os casos de teste.
                    </div>
                )}

            </div>

        </div>

    );

}

export default RequirementForm;