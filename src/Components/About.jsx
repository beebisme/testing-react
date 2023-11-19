import React from 'react'
import AboutImg from '../Assets/img/about.jpg'
import "../Style/AboutStyle.css"

const About = () => {
    return (
      <>
        <section class="about" id="about">
          <div class="about-img">
            <img
              src={AboutImg}
              alt="about jpg"
            />
          </div>

          <div class="about-text">
            <h3>I'm a Data Analyst</h3>
            <h2>I actually can describe anyone about Data</h2>
            <p>
              My name is Ellys Rahma Putri Bintoro, and I come from Sidoarjo,
              East Java. Currently, I work as a data analyst. I am also pursuing
              my undergraduate studies at the University of Muhammadiyah Malang,
              majoring in computer engineering.
            </p>
            <a href="/contact" class="btn">
              Hire Me
            </a>
          </div>
        </section>
      </>
    );
}

export default About