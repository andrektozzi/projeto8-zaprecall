import React from 'react';

export default function Content() {
    return (
        <div className="tela-flashcards">
            <div className="header">
                <img src="images/logo.png" />
                <h2>ZapRecall</h2>
            </div>

            <div className="container-flashcards">

                <div className="flashcards">

                    <div className="flashcard">
                        <div className="flashcard-fechado">
                            <div>
                                <p>Pergunta 1</p>
                                <ion-icon name="play-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="flashcard-aberto-frente">
                            <p>O que é JSX?</p>
                            <img src="images/setinha.png" />
                        </div>
                        <div className="flashcard-aberto-tras">
                            <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                            <div>
                                <button className="button1">Não lembrei</button>
                                <button className="button2">Quase não lembrei</button>
                                <button className="button3">Zap!</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flashcards">

                    <div className="flashcard">
                        <div className="flashcard-fechado">
                            <div>
                                <p>Pergunta 2</p>
                                <ion-icon name="play-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="flashcard-aberto-frente">
                            <p>O React é</p>
                            <img src="images/setinha.png" />
                        </div>
                        <div className="flashcard-aberto-tras">
                            <p>Uma biblioteca JavaScript para construção de interfaces</p>
                            <div>
                                <button className="button1">Não lembrei</button>
                                <button className="button2">Quase não lembrei</button>
                                <button className="button3">Zap!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    

        </div>
    )
}