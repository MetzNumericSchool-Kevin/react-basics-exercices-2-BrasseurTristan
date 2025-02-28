import { useState } from "react";
export function Button() {

    const [changeState, setChangeState] = useState(false);
    console.log(changeState);
    return (
        <button className="btn btn-primary" onClick={() => { setChangeState(!changeState) }}> {changeState === true ? "Fermer Inventoria" : "Ouvrir Inventoria"}</button>
    )
}