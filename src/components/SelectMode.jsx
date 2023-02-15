import React from "react";

import OptionButton from "./OptionButton";

const SelectMode = (props) =>{
    return(
        <section className="select-mode">
            <button className="button-choose">Challenge Diario</button>
            <button className="button-choose">Maratón</button>
        </section>
    )
};

export default SelectMode;