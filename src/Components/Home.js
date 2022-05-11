import React from 'react';

export default function Home() {

    const [escondido, setEscondido] = React.useState(false)

    return (
        <div className={escondido ? "escondido" : "tela-inicial"}>
            <div>
                <img src="images/logo.png" alt="logo"/>
                <h1>ZapRecall</h1>
                <button onClick={() => setEscondido(!escondido)}>Iniciar Recall!</button>
            </div>
        </div>
    )
}