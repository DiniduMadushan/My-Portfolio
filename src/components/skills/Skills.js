
import React from 'react'
import './skills.css';
import UIDesign from '../../assests/ui-design.png';
import WebDesign from '../../assests/website-design.png';
import AppDesign from '../../assests/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">What i do</span>
        <span className="skillsDesc">I am a skilled and passionate web designer with experience This is a demo This is a demo This is a demo This is a demo This is a demo This is a demo This is a demo</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p>This is a demo This is a demo This is a demo This is a demo This is a demo This is a demo This is a demo</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>This is a demo This is a demo This is a demo This is a demo This is a demo This is a demo This is a demo</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo This is a demo This is a demo This is a demo This is a demo This is a demo This is a demo</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
