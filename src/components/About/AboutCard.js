import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I'm <span className="purple">Ahmed Najaf</span>.
            <br /><br />
            I'm a passionate student on a journey to master the art of <span className="purple">Data Science</span> and <span className="purple">Machine Learning</span>. Currently, I'm pursuing my MSc in Computer Science with Artificial Intelligence.
            <br />
            <br />
            My goal is to harness the power of data to make a positive impact in the field of Natural Language Processing (NLP).
            <br />
            <br />
            When I'm not diving into data, you'll find me nurturing my love for languages and linguistics. I'm fascinated by how data science and NLP can reshape multilingual learning and teaching.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Language Buff
            </li>
            <li className="about-activity">
              <ImPointRight /> Aspiring Data Scientist
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Seeking knowledge from the cradle to the grave is my guiding principle."{" "}
          </p>
          <footer className="blockquote-footer">Ahmed Najaf</footer>
        </blockquote>
        <div itemscope itemtype='http://schema.org/Person' className='fiverr-seller-widget' style={{display: 'inline-block'}}>
    <a itemprop='url' href='https://www.fiverr.com/ahmednajaf2' rel="nofollow" target="_blank" style={{display: 'inline-block'}}>
        <div className='fiverr-seller-content' id='fiverr-seller-widget-content-2600f161-6fbd-4f29-9a55-c9acc61d40d0' itemprop='contentURL' style={{display: 'none'}}></div>
        <div id='fiverr-widget-seller-data' style={{display: 'none'}}>
            <div itemprop='name'>ahmednajaf2</div>
            <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
            <div itemprop='jobtitle'>Seller</div>
            <div itemprop='description'>Hi! I'm a Computer Science student with a knack for web design and Python development...</div>
        </div>
    </a>
</div>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
