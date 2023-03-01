import {Canvas} from "@react-three/fiber";
import { useState, useRef, useEffect, useMemo} from 'react';
import { EffectComposer, SelectiveBloom, Selection, Bloom} from '@react-three/postprocessing';

import { Layers } from 'three';


import Octopus from "components/JSXobj/Octopus";
import AngelfishRight from "components/JSXobj/AngelfishRight";
import AngelfishLeft from "components/JSXobj/AngelfishLeft";
import Jellyfish from "components/JSXobj/Jellyfish";

import ProjectDiv from "components/js/SecondProject/projectdiv";

const Projects = (props) => {
   const [clickDiv, setClickDiv] = useState("00");
   const [iDiv, setiDiv] = useState(0);

    return (  
        <>
        <Canvas style={{ backgroundImage: 'linear-gradient(#0800e6, #020036)'}}>
            <directionalLight position={[0,5,10]} intensity={0.5} />
            <ambientLight intensity={0.1}/>

            <AngelfishRight position={[1.5,-3.5,-2]}
                    rotation={[0, 1.57, 0]} 
                    scale={[0.5, 0.5, 0.5]}
                    event={clickDiv} 
                    onClick={ () => {
                        setClickDiv("R1"+String(Date.now()));
                        setiDiv(iDiv+1)
                    }}/>

            <AngelfishLeft position={[-1.5,-3.6,-2]}
                                rotation={[0, 1.57, 0]} 
                                scale={[0.5, 0.5, 0.5]}
                                event={clickDiv} 
                                onClick={ () => {
                                    setClickDiv("L3"+String(Date.now()));  
                                    setiDiv(iDiv-1)
                                }}/>

            <Octopus position={[-10,-3.5,-7]}  rotation={[0,-3.14/7,0]} event={clickDiv}/>
            <Jellyfish position={[7, 0, -5]} scale={[0.3, 0.3, 0.3]} layers={1}/>
            <EffectComposer>
                <SelectiveBloom luminanceThreshold={0} intensity={1.5} />
            </EffectComposer>
                
                
        </Canvas>
        
        < ProjectDiv i={iDiv} idiom={props.idiom} />
        </>
    );
}

export default Projects;
