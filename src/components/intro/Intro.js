import React from "react";
import './intro.css';
import bg from '../../assests/image.png';
import { Link } from "react-scroll";
import btnImg from '../../assests/hireme.png';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Dinidu</span><br />Website Developer</span>
                <p className="introPara">I'm a Skilled web developer</p>
                <Link><button className="btn"><img src={btnImg} alt="hireme" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section> 
    )
}
export default Intro;
