import React, {Suspense, useEffect, useState} from "react";
import { Sky} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

import Land from "components/JSXobj/Land";
import Island from "components/JSXobj/Island";

import "assets/style/welcome.css";

const Welcome = (props) => {
   
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

    return (  
        <>
        <Canvas id="mycanvas" shadows>
            <Suspense fallback={null}>
                <Sky
                    sunPosition={[5, 4, -6]}
                    mieCoefficient={0.1}
                    mieDirectionalG={0.995}
                    turbidity={0.1}
                />
                <Land position={[-0.3*mousePos.x/window.innerWidth,-0.5*mousePos.y/window.innerHeight + 0.3,0]} />
                <Island position={[-0.3*mousePos.x/window.innerWidth,-0.5*mousePos.y/window.innerHeight + 0.3,0]} receiveShadow castShadow/>
                <spotLight
                    position={[20, 30, -30]}
                    intensity={1.2}    
                    castShadow 
                    angle={3*Math.PI / 4}   
                    distance={2000}
                    decay={2}/>
                <ambientLight intensity={0.4} />
                <directionalLight position={[0, -5, 10]} intensity={0.5}  />
            </Suspense>
        </Canvas>
        <div className="welcomediv">
            {(props.idiom==="EN") ?
            <React.Fragment>
                <h1>Hi !</h1>
                <h2>Welcome to my portfolio, showcasing my skills and experiences.</h2>
            </React.Fragment>
            :
            <React.Fragment>
                <h1>Salut !</h1>
                <h2>Bienvenue sur mon portfolio, où je présente mes compétences et expériences.</h2>
            </React.Fragment>
            }
        </div>
        
        </>  

    );
}

export default Welcome;

// Ocean police
// https://codepen.io/lbebber/pen/EVxvWN/