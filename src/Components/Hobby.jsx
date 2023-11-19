import React from "react";
import "../Style/HobbyStyle.css"

// Import Images
import work1 from "../Assets/img/work1.jpg"
import work2 from "../Assets/img/work2.jpg"
import work3 from "../Assets/img/work3.jpg"
import work4 from "../Assets/img/work4.jpg"
import work5 from "../Assets/img/work5.jpg"
import work6 from "../Assets/img/work6.jpg"

const Hobby = () => {
  return (
    <>
      <section class="hobby" id="hobby">
        <div class="heading">
          <h3>Hobby</h3>
          <h2>My Amazing Hobby</h2>
          <p>This is my perfect hobby</p>
        </div>

        <div class="hobby-content">
          <div class="col">
            <img src={work1} alt="" />
            <div class="layer">
              <h3>Learn About Big Data</h3>
              <h5>Popup</h5>
            </div>
          </div>

          <div class="col">
            <img src={work2} alt="" />
            <div class="layer">
              <h3>Swimming</h3>
              <h5>Popup</h5>
            </div>
          </div>

          <div class="col">
            <img src={work3} alt="" />
            <div class="layer">
              <h3>Drawwing</h3>
              <h5>Popup</h5>
            </div>
          </div>

          <div class="col">
            <img src={work4} alt="" />
            <div class="layer">
              <h3>Data Analyst</h3>
              <h5>Popup</h5>
            </div>
          </div>

          <div class="col">
            <img src={work5} alt="" />
            <div class="layer">
              <h3>Data Analyst</h3>
              <h5>Popup</h5>
            </div>
          </div>

          <div class="col">
            <img src={work6} alt="" />
            <div class="layer">
              <h3>Data Analyst</h3>
              <h5>Popup</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hobby;
