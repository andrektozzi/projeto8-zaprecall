import React from "react";

import Home from "./Components/Home";
import Content from "./Components/Content"

import "./Components/assets/reset.css";
import "./Components/assets/style.css";

export default function App(){

    const [visible, setVisible] = React.useState(true);

    return (
        <>
        {visible ? <Home setVisible={setVisible} /> : <Content />}
        </>
    );
}