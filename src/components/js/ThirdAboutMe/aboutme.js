import {Canvas} from "@react-three/fiber";
import React, { useState, useRef, useEffect} from 'react';

import "assets/style/aboutme.css";
import aboutmeJSON from "JSON/aboutme.json";
import data from "./imgImports";

import Oyster from "components/JSXobj/Oyster";
import Creator from "components/JSXobj/Creator";

import BubbleImg from "assets/img/img/bubble.png"
import GitHub from "assets/img/logo/GitHub.svg"
import Gmail from "assets/img/logo/Gmail.svg"
import Twitter from "assets/img/logo/Twitter.svg"


const AboutMe = (props) => {

    const div1ref = useRef(null);
    const div2ref = useRef(null);
    const div3ref = useRef(null);
    let listDivRef = [div1ref, div2ref, div3ref];
    const [nbDiv, setNbDiv] = useState(0);
    const [clickPearl, setClickPearl] = useState(true);

    function changeDiv(){
        let findIndex = (x) => {return (3/2)*x**2+(-7/2)*x+2}; // fonction qui trouve l'index de la div à cacher : interpolation
        setNbDiv((nbDiv+1)%3);
        listDivRef[findIndex(nbDiv)].current.classList.remove("visible");
        listDivRef[findIndex(nbDiv)].current.classList.add("invisible");

        listDivRef[nbDiv].current.classList.remove("invisible");
        listDivRef[nbDiv].current.classList.add("visible");

        if(nbDiv==2){
            setClickPearl(!clickPearl);
        }
    }
  
    let langSelect = (props.idiom==="FR") ? "fr" : "en";

    const [position, setPosition] = useState({a:0,b:0,c:0});

    useEffect(() => {
        setInterval(() => {
            setPosition({
                a: 2*(Math.random()-1),
                b: 2*(Math.random()-1),
                c: 2*(Math.random()-1),
                
            });
            }, 2000);
        }, []);


    const moveStyle1 = {
        transform: "translateY("+position.a+"vh)",
    }
    const moveStyle2 = {
        transform: "translateY("+position.b+"vh)",
    }
    const moveStyle3 = {
        transform: "translateY("+position.c+"vh)"
    }


    return (  
        <>
        <Canvas style={{ backgroundImage: 'linear-gradient(#020036, #00A6E0)'}} layers={1}>
            <Oyster  position={[0, -2.7,-1]} rotation={[-0.2,1.57,0]} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[-1, 1, 1]} intensity={0.5} />

            <mesh position={[0, -3, -3]} onClick={() => {changeDiv()}}>
                <sphereBufferGeometry args={[0.9, 30, 30]} />
                <meshStandardMaterial color={"white"} />
            </mesh>

            <Creator scale={[4,4,4]} position={[10 ,-4, -5]} rotation={[0,-0.7,0]} event={clickPearl}/>

        </Canvas>

        <div ref={div1ref} className="aboutDiv visible">
            <div className="titleAbout">
                {(props.idiom==="EN") ?
                    <React.Fragment>
                        <h2>SKILLS</h2>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <h2>COMPETENCES</h2>
                    </React.Fragment>
                }
                <div className="divSkill">
                    {(props.idiom==="EN") ?
                    <React.Fragment>
                        <span>Languages</span>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <span>Langages</span>
                    </React.Fragment>
                }
                    <div className="moduleSkill">
                        {
                            aboutmeJSON.skill.lang.map( (langItem, index) => {
                                return (
                                <div className="containerSkill" key={index}>
                                    <a href={langItem.url} target="_blank" rel="noreferrer"><img src={data.find(item=>item.name===langItem.name).img} alt={"Logo_"+langItem.name} /></a>
                                    {langItem.lib != null ? 
                                        <div className="infoSkill">
                                            <div  className="textCenter">
                                                {
                                                langItem.lib.map((item, index)=> (
                                                    <p className="infoSkillp" key={index}>{item}</p>
                                                ))
                                                }
                                            </div>
                                        </div> : null}
                                </div>
                            )})
                        }
                    </div>
                </div>
                <div className="divSkill">
                    {(props.idiom==="EN") ?
                        <React.Fragment>
                            <span>Softwares</span>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <span>Logiciels</span>
                        </React.Fragment>
                    }
                    <div className="moduleSkill">
                        {
                            aboutmeJSON.skill.software.map( (softwareItem, index) => (
                                <div className="containerSkill" key={index}>
                                    <a href={softwareItem.link} target="_blank" rel="noreferrer"><img src={data.find(item=>item.name===softwareItem.name).img} alt={"Logo_"+softwareItem.name} /></a>
                                    {softwareItem.url != null ? 
                                        <div className="infoSkill">
                                            <div className="iconCenter">
                                                <a href={softwareItem.url} target="_blank" rel="noreferrer">
                                                    <img src={data.find(item=>item.name==="YouTube").img} alt={softwareItem.name}/>
                                                </a>
                                            </div>
                                        </div> : null
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="divSkill">
                    <span>Passions</span>
                    <div className="moduleSkill">
                        <div className="containerSkill">
                            <a href={aboutmeJSON.skill.passion[0].url} target="_blank" rel="noreferrer"><img src={data.find(item=>item.name==="Chess").img} alt={"Logo_Chess"} /></a>
                            <div className="infoSkill">
                                <div className="iconCenter">
                                    <a className="linkSkill" href={aboutmeJSON.skill.passion[0].url} target="_blank" rel="noreferrer">
                                        <p> <span style={{"TextDecoration":"none"}}> Elo : </span> {aboutmeJSON.skill.passion[0].val}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="containerSkill">
                            <a href={aboutmeJSON.skill.passion[1].url} target="_blank" rel="noreferrer"><img src={data.find(item=>item.name==="Mathraining").img} alt={"Logo_Mathraining"} /></a>
                            <div className="infoSkill">
                                <div className="iconCenter">
                                    <a className="linkSkill" href={aboutmeJSON.skill.passion[1].url} target="_blank" rel="noreferrer">
                                        <p> <span style={{"TextDecoration":"none"}}> Top : </span> {aboutmeJSON.skill.passion[1].val}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="containerSkill">
                            <a href={aboutmeJSON.skill.passion[2].url} target="_blank" rel="noreferrer"><img src={data.find(item=>item.name==="Kaggle").img} alt={"Logo_Kaggle"} /></a>
                            <div className="infoSkill">
                                <div className="iconCenter">
                                    <a className="linkSkill" href={aboutmeJSON.skill.passion[2].url} target="_blank" rel="noreferrer">
                                        <p>{aboutmeJSON.skill.passion[2].val}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref={div2ref} className="aboutDiv invisible">
            <div className="titleAbout">
                <h2>CURRICULUM</h2>
                <div className="divCurriculum">
                    {(props.idiom==="EN") ?
                    <React.Fragment>
                        <span>Professional</span>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <span>Professionnel</span>
                    </React.Fragment>
                }
                <p style={{"fontSize" : "2vh"}}>Soon ...</p>
                </div>
                <div className="divCurriculum">
                    {(props.idiom==="EN") ?
                    <React.Fragment>
                        <span>Studies</span>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <span>Etudes</span>
                    </React.Fragment>
                }

                        {
                            aboutmeJSON.curriculum.studies.map( (studyItem, index) => (
                                <div className="inlineCur" key={index}>
                                    <div id="titleStudy">
                                        <p className="studyTitle">{studyItem[langSelect].name}</p>
                                    </div>
                                    <div id="speStudy">
                                        <p className="studySpan">{studyItem[langSelect].spe}</p>
                                        {
                                            (studyItem[langSelect].mention != null) ? <p className="studySpan"><strong>- Mention : </strong>{studyItem[langSelect].mention}</p> : null
                                        }
                                    </div>
                                    <div id="loadStudy">
                                        <div className="progressCircle" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{"--value":studyItem[langSelect].finish_p }}>
                                        </div> 
                                    </div>
                                </div>
                                
                            ))
                        }
                </div>
                <div className="divCurriculum">
                    {(props.idiom==="EN") ?
                    <React.Fragment>
                        <span>Others</span>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <span>Autres</span>
                    </React.Fragment>
                }
                {
                    aboutmeJSON.curriculum.others.map( (othersItem, index) => (
                        <div key={index} className="inlineOthers">
                            <p>{othersItem[langSelect].name}</p>
                            <a href={othersItem[langSelect].url} target="_blank" rel="noreferrer" className="infoCurp"><p>{othersItem[langSelect].text}</p></a>
                        </div>
                    ))
                }
                </div>


            </div>
        </div>
        <div ref={div3ref} className="aboutDiv invisible">
            <div id="curiculum">
                {
                    aboutmeJSON.desc[langSelect].split('\n').map((textAbout, index) => (
                        <p key={index} className="textAbout">{textAbout}</p>
                    ))
                }
            </div>
        </div>

        <div className="spinnerDiv" onClick={() => {changeDiv()}}></div>

        <div id="parentBubble">
            <a href="https://twitter.com/sala_reaper" target="_blank" rel="noreferrer" >
                <div className="bubble" style={moveStyle1}>
                    <img src={BubbleImg} className="imgBubble" alt="bubble"/>
                    <img src={Twitter} href="https://twitter.com/sala_reaper" target="_blank" rel="noreferrer" className="svgBubble" alt="logo_twitter"/>
                </div>
            </a>
            <a href="mailto: contact.r.sala@gmail.com" target="_blank" rel="noreferrer" >
                    <div className="bubble" style={moveStyle2}>
                    <img src={BubbleImg} className="imgBubble" alt="bubble"/>
                    <img src={Gmail} href = "mailto: contact.r.sala@gmail.com" target="_blank" rel="noreferrer" className="svgBubble" alt="logo_gmail"/>
                </div>
            </a>
            <a href="https://github.com/Sala2Code" target="_blank" rel="noreferrer" >
                <div className="bubble" style={moveStyle3}>
                    <img src={BubbleImg} className="imgBubble" alt="bubble"/>
                    <img src={GitHub} className="svgBubble" alt="logo_GitHub"/>
                </div>
            </a>


        </div>


        </>  

    );
}

export default AboutMe;
