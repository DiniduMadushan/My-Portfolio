import React from 'react'
import './works.css';
import Portfolio1 from '../../assests/portfolio-1.png';
import Portfolio2 from '../../assests/portfolio-2.png';
import Portfolio3 from '../../assests/portfolio-3.png';
import Portfolio4 from '../../assests/portfolio-4.png';
import Portfolio5 from '../../assests/portfolio-5.png';
import Portfolio6 from '../../assests/portfolio-6.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My portfolio</h2>
        <span className="worksDesc">loremipsum hdkewdhwekhewkhwekdhwekkfkwefhwkfwkwkjefwkjfwbkfwkfwkfwwkfwkewkfwkwkvwkwkwkwkjekwfwwjf</span>
        <div className="workImgs">
            <img src={Portfolio1} alt="portfolio1" className="worksImg" />
            <img src={Portfolio2} alt="portfolio2" className="worksImg" />
            <img src={Portfolio3} alt="portfolio3" className="worksImg" />
            <img src={Portfolio4} alt="portfolio4" className="worksImg" />
            <img src={Portfolio5} alt="portfolio5" className="worksImg" />
            <img src={Portfolio6} alt="portfolio6" className="worksImg" />
        </div>
        <button className="worksBtn">See more</button>
    </section>
  );
}

export default Works;
