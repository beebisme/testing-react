import React from "react";
import fotoEllys from "../Assets/img/FotoEllys.png";
import "../Style/HeroStyle.css";


const Hero = () => {
    return (
      <section class="home" id="home">
        <div class="home-text">
          <h3>Hello I'm</h3>
          <h1>Ellys Rahma Putri</h1>
          <h5>
            A Data Analyst <span>From Sidoarjo, East Java</span>
          </h5>
          <p>
            I'm website designer based in Universitas Muhammadiyah Malang based
            in Malang, East Java <br />
            and dedicated to Data Analyst.
          </p>
          <div class="socials">
            <a href="facebook.com">
              <i class="bx bxl-facebook-circle"></i>
            </a>
            <a href="instagram.com">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="twitter.com">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="linkedin.com">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <a href="/about" class="btn">
            About Me
          </a>
        </div>

        <div class="home-img">
          <img src={fotoEllys} alt="profile pict ellys" />
        </div>
      </section>
    );
}

export default Hero;