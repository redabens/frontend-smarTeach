import {v4 as uuid} from "uuid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../styles/Layout.css";
import { Navigate, Outlet } from "react-router-dom";
import ChatBox from "../components/ChatBox";

export default function Layout() {
    // const [bubbles, setBubbles] = useState(["Un ensemble est une collection bien définie d'objets distincts, appelés éléments.",
    //     "Un élément d'un ensemble est un objet qui appartient à cet ensemble.",
    //     "L'union de deux ensembles A et B est l'ensemble des éléments qui appartiennent à A, ou à B, ou aux deux.",
    //     "L'intersection de deux ensembles A et B est l'ensemble des éléments qui appartiennent à la fois à A et à B.",
    //     "La différence de deux ensembles A et B est l'ensemble des éléments qui appartiennent à A mais pas à B.",
    //     "Le complémentaire d'un ensemble A est l'ensemble des éléments qui n'appartiennent pas à A.",
    //     "Deux ensembles sont égaux s'ils ont les mêmes éléments.",
    //     "Un ensemble est inclus dans un autre ensemble si tous les éléments du premier appartiennent au second.",
    //     "L'ensemble vide est un ensemble qui ne contient aucun élément.",
    //     "L'ensemble universel est l'ensemble de tous les objets possibles.",
    //     "Un ensemble est fini s'il contient un nombre fini d'éléments.",
    //     "Un ensemble est infini s'il contient un nombre infini d'éléments.",
    //     "Un ensemble est dénombrable s'il peut être mis en correspondance avec les entiers positifs.",
    //     "Un ensemble est infini non dénombrable s'il ne peut pas être mis en correspondance avec les entiers positifs.",
    //     "Un ensemble est un sous-ensemble d'un autre ensemble si tous ses éléments appartiennent à cet autre ensemble.",
    //     "L'ensemble des parties d'un ensemble est l'ensemble de tous ses sous-ensembles.",]);
    const [bubbles, setBubbles] = useState([]);
    const [typingQuestion, setTypingQuestion] = useState("");
    const [disabled, setDisabled] = useState(false);
    // const [question, setQuestion] = useState("");
    const setTyping = (event) => {
        event.preventDefault();
        setTypingQuestion(event.target.value);
    }
    const get_answer= async(question)=>{
        const response = await axios.post("https://localhost:8000/backend/models/model",question)
            .then((response) => {
                console.log(response.data);
                const answer = response.data;   
                setBubbles((prevBubbles) => [...prevBubbles, answer]);
                setDisabled(false);
            });
    }
    const btn = useRef();
    return (
        <div className="layout">
            <div className="navbar">
                <div className="pp">
                    <img src="/assets/account_circle.svg" alt="pp" style={{width:"40px",height:"40px"}}/>
                </div>
            </div>
            <div className="chat-bubbles">
                {bubbles.length > 0 ? (
                    <div className="bubbles">
                        {bubbles.map((bubble, index) => (
                            <div key={index} className="bubble" style={index %2 === 0? {justifyContent: "flex-end"} : {justifyContent: "flex-start"}}>
                                { index % 2 === 0 ? (
                                    <div key={uuid()} className="bubble-chat" style={{justifyContent: "flex-end"}}>
                                        <ChatBox answer={bubble} />
                                        <img src="/assets/account_circle.svg" alt="pp" style={{width:"40px",height:"40px"}}/>
                                    </div>
                                ) : (
                                    <div key={uuid()} className="bubble-chat" style={{justifyContent: "flex-start"}}>
                                        <img src="/assets/account_circle.svg" alt="pp" style={{width:"40px",height:"40px"}}/>
                                        <ChatBox answer={bubble} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="base">
                        <div className="title">
                            <h1>Welcome, your mentor is here for you success!</h1>
                        </div>
                        <div className="image">
                            <img src="/assets/AI assistant in educational program.svg" alt="pp" style={{width:"300px",height:"180px"}}/>
                        </div>
                        <div className="boxes">
                            <div className="box" style={{backgroundColor:"#F7F7F7"}} onClick={() => (alert("Curriculum Page!"))}>
                                <img src="/assets/Graduation Cap.svg" alt="pp" style={{width:"60px",height:"60px"}}/>
                                <h3>Curriculum</h3>
                            </div>
                            <div className="box" style={{backgroundColor:"#F7F7F7"}} onClick={() => (alert("Carreer Guidance Page!"))}>
                                <img src="/assets/Job Seeker.svg" alt="pp" style={{width:"60px",height:"60px"}}/>
                                <h3>Carreer Guidance</h3>
                            </div>
                            <div className="box" style={{backgroundColor:"#F7F7F7"}} onClick={() => (alert("Strengths and weaknesses track Page!"))}>    
                                <img src="/assets/Total Sales.svg" alt="pp" style={{width:"60px",height:"60px"}}/>
                                <span>
                                    <h3>Strengths and</h3>
                                    <h3>weaknesses track</h3>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="chat">
                <div className="ib">
                    <textarea 
                        className="input-chat" 
                        placeholder="Type a question..." 
                        value={typingQuestion}
                        onInput={setTyping}
                    />
                    <button
                        className="send-button"
                        disabled={disabled}
                        onClick={() => {
                            setDisabled(true);
                            get_answer(typingQuestion);
                            setBubbles((prevBubbles) => [...prevBubbles, typingQuestion]);
                            setTypingQuestion("");
                        }}
                    >
                        <img src="/assets/near_me.svg" alt="search" style={{height:'32px',width:'32px'}}/>
                    </button>
                </div>
            </div>
        </div>
    );
}