function ResultPanel({ bdd, setBdd, setRequirement }) {

    const copiarCasos = async () => {

        if (!bdd) return;

        try {

            await navigator.clipboard.writeText(bdd);

            alert("Casos de teste copiados com sucesso!");

        } catch (error) {

            alert("Não foi possível copiar os casos de teste.");

        }

    };

    const exportarFeature = () => {

        if (!bdd) return;

        const blob = new Blob([bdd], {
            type: "text/plain;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "casos_de_teste.feature";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    };

    const limparTudo = () => {

        setRequirement("");
        setBdd("");

    };

    return (
        <div className="card shadow-sm mt-4">

            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">

                <h5 className="mb-0">
                    Casos de Teste Gerados
                </h5>

                <div className="d-flex gap-2">

                    <button
                        className="btn btn-sm btn-light"
                        onClick={copiarCasos}
                        disabled={!bdd}
                    >
                        📋 Copiar
                    </button>

                    <button
                        className="btn btn-sm btn-success"
                        onClick={exportarFeature}
                        disabled={!bdd}
                    >
                        📄 Exportar
                    </button>

                    <button
                        className="btn btn-sm btn-danger"
                        onClick={limparTudo}
                        disabled={!bdd}
                    >
                        🧹 Limpar
                    </button>

                </div>

            </div>

            <div className="card-body">

                <pre
                    className="bg-light border rounded p-3 mb-0"
                    style={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        maxHeight: "500px",
                        overflowY: "auto",
                        fontFamily: "Consolas, monospace",
                        fontSize: "14px"
                    }}
                >
                    {bdd || "Os casos de teste serão exibidos aqui."}
                </pre>

            </div>

        </div>
    );
}

export default ResultPanel;