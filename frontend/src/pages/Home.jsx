import { useState } from "react";

import Header from "../components/Header";
import RequirementForm from "../components/RequirementForm";
import ResultPanel from "../components/ResultPanel";

function Home() {

    const [requirement, setRequirement] = useState("");
    const [bdd, setBdd] = useState("");

    return (
        <div className="container mt-5">

            <Header />

            <RequirementForm
                requirement={requirement}
                setRequirement={setRequirement}
                setBdd={setBdd}
            />

            <ResultPanel
                bdd={bdd}
                setBdd={setBdd}
                setRequirement={setRequirement}
            />

        </div>
    );
}

export default Home;