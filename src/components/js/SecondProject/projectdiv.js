import React, {useEffect, useState} from "react";

import "assets/style/project.css";
import data from "./imgImports";
import projectJSON from "JSON/projects.json"
import GitHub from "assets/img/logo/GitHub.svg"


const ProjectDiv = (props) => {

    let i = ((props.i % projectJSON.length) + projectJSON.length) % projectJSON.length;
    // I get the pos to rotate slightly the div
    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    let decayY = 20*(window.innerWidth/2-mousePos.x) / window.innerWidth;
    let decayX = 20*(window.innerHeight/2-mousePos.y) / window.innerHeight;

    const styles = {
        backgroundColor: "#000547",
        width:"70vh",
        height: "50vh",
        borderRadius : "5%",
        position: "absolute",
        top: "43%",
        left: "50%",
        transform: "translate(-50%, -50%) rotateY("+decayY+"deg) rotateX("+decayX+"deg)"
    };

    return <div style={styles} className="containerProj">
        <div className="itemProj" id="titleProj">{projectJSON[i].name}</div>
        <div className="itemProj" id="descProj">{projectJSON[i].desc[(props.idiom==="EN") ? 0 : 1]}</div> 
        <div className="itemProj" id="imgProj">
            <img src={data.find(item => item.name === projectJSON[i].name).img} alt={projectJSON[i].name} style={{width:"100%"}}/>
        </div>
        <div className="itemProj" id="linkProj">
            <div id="LogoGithub">
                <img src={GitHub} alt="LogoGitHub" style={{width:"100%"}}/>
            </div>
            <div id="ButtonGithub">
                <a href={"https://github.com/Sala2Code/"+projectJSON[i].name} target="_blank" rel="noreferrer">
                    {(props.idiom==="EN") ?
                    <React.Fragment>
                        <p>SEE THE PROJECT</p>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <p>VOIR LE PROJET</p>
                    </React.Fragment>
                    }
                </a>
            </div>
        </div>
        <div className="itemProj" id="langProj">
            <div id="infoProj">
                <span>{projectJSON[i].date}</span>
                <span>{projectJSON[i].type}</span>
            </div>
            <div id="listLang">
                {
                    projectJSON[i].lang.map((lang, index) => (
                        <div className="divLang" key={index}>{lang}</div>
                    ))
                }
            </div>
        </div>
    </div>  
}

export default ProjectDiv;