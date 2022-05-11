import React from 'react';
import Questions from './Questions';

export default function Content() {
    return (
        <div className="tela-flashcards">
            <div className="header">
                <img src="images/logo.png" />
                <h2>ZapRecall</h2>
            </div>

            <div className="container-flashcards">
                <div className="flashcards">
                    <Questions />
                </div>
            </div>
        </div>
    )
}