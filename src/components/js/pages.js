import React, { useState } from "react";
import FullPage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import Welcome from "components/js/FirstWelcome/welcome";
import Projects from "components/js/SecondProject/projects";
import AboutMe from "components/js/ThirdAboutMe/aboutme";

import "assets/style/pages.css"



const Pages = ()=> {
    const [idiom, setIdiom] = useState("EN");

 return (
        <FullPage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection className="sectionStyle">
                    <Welcome idiom={idiom}/>
                </FullpageSection>
                <FullpageSection className="sectionStyle">
                    <Projects idiom={idiom}/>
                </FullpageSection>
                <FullpageSection className="sectionStyle">
                    <AboutMe idiom={idiom}/>
                </FullpageSection>
            </FullPageSections>
            <div className="translateButton" onClick={() => {
                setIdiom( (idiom == "FR") ? "EN" : "FR");
            }}>
                <span>{idiom}</span>
            </div>
        </FullPage>
    )
};


export default Pages;