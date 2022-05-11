import React from 'react';

function Question(props) {

    const [stage, setStage] = React.useState("1");

    if(stage === "1") {
      return (
      <>
        <div className="flashcards">
            <div className="flashcard-fechado" onClick={() => setStage("2")}>
                <div>
                    <p>Pergunta {props.id+1}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
        </div>        
      </>
      )
    }

    if(stage === "2") {
      return (
       <>
          <div className="flashcard-aberto-frente">
            <p>{props.question}</p>
            <img src="images/setinha.png" onClick={() => setStage("3")} />
        </div>
       </> 
        
      )
    }

    if(stage === "3") {
      return (
        <>
          <div className="flashcard-aberto-tras" onClick={() => setStage("4")}>
            <p>{props.answer}</p>
            <div>
              <button className="button1">Não lembrei</button>
              <button className="button2">Quase não lembrei</button>
              <button className="button3">Zap!</button>
            </div>
          </div>
        </>         
      )
    }

}

function RandomQuestions () {
    return Math.random() - 0.5
}

export default function Questions () {
    const items = [
        { question: "O que é JSX?",
          answer:"Uma extensão de linguagem do JavaScript"
        },
        { question: "O React é __",
          answer:"uma biblioteca JavaScript para construção de interfaces"
        },
        { question: "Componentes devem iniciar com __",
          answer:"letra maiúscula"
        },
        { question: " Podemos colocar __ dentro do JSX",
          answer:"expressões"
        },
        { question: "O ReactDOM nos ajuda __",
          answer:"interagindo com a DOM para colocar componentes React na mesma"
        },
        { question: "Usamos o npm para __ ",
          answer:"gerenciar os pacotes necessários e suas dependências"
        },
        { question: "Usamos props para __",
          answer:"passar diferentes informações para componentes"
        },
        { question: "Usamos estado (state) para __ ",
          answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]

    const questions = items
    .sort (RandomQuestions)
    .map ((item, index) => (<Question key={index} id={index} question={item.question} answer={item.answer} />)
    )

    return (
        <>
        {questions}
        </>
    )
}

