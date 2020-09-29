import React from "react";
import { useAlert } from "./Alert/AlertContext";

export default function Main() {
    const { show } = useAlert();

    return (
        <>
            <h1>Context example</h1>
            <button className="btn btn-secondary" onClick={() => show(" Text from Main.js")} >Show alert</button>
        </>
    )
}