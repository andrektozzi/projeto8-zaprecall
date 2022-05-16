import React from 'react';

export default function Footer(props){

    if(props.arrayResult.length === 8){
        if(!props.arrayResult.includes("close-circle")){
            return(
                <>
                    <div className="footer">
                        <p> &#x1f973; Parabéns!</p>
                        <p> Você não esqueceu de nenhum flashcard!</p>
                        <p> {props.arrayResult.length}/8 CONCLUÍDOS</p>
                        <div className="iconResults">
                        {props.arrayResult.map((item,index) => 
                            <div className={props.arrayStats[index]} > 
                            <ion-icon name={item}></ion-icon>
                            </div>)}
                        </div>
                    </div>
                </> 
            )
        }  
        if(props.arrayResult.includes("close-circle")){
            return (
                <>
                    <div className="footer">
                    <p>	&#128560; Putz...</p>
                        <p> Ainda faltam alguns... Mas não desanime!</p>
                        <p> {props.arrayResult.length}/8 CONCLUÍDOS</p>
                        <div className="iconResults">
                            {props.arrayResult.map((item,index) => 
                            <div className={props.arrayStats[index]} > 
                            <ion-icon name={item}></ion-icon>
                            </div>)}
                        </div>
                    </div>
                </> 
            )
        }
    }
    return (
        <>
            <div className="footer">
                <p> {props.arrayResult.length}/8 CONCLUÍDOS</p>
                <div className="iconResults">
                    {props.arrayResult.map((item,index) => 
                    <div className={props.arrayStats[index]} > 
                        <ion-icon name={item}></ion-icon>
                    </div>)}
                </div>
            </div>
        </> 
    );
}