import React from 'react'
import "../Style/SkillStyle.css"
import Target from "../Assets/img/target.svg"
import Energy from "../Assets/img/energy.svg"
import Brush from "../Assets/img/brush.svg"

const Skill = () => {
    return (
      <>
        <section class="skill" id="skill">
          <div class="items">
            <div class="sub-box">
              <div class="sub-img">
                <img src={Target} alt="" />
              </div>
              <h3>Data Analyst</h3>
              <p>
                A data analyst is a professional who is responsible for
                collecting, processing, and performing statistical analyses of
                data.
              </p>
            </div>

            <div class="sub-box">
              <div class="sub-img">
                <img src={Energy} alt="" />
              </div>
              <h3>Data Scientist</h3>
              <p>
                A data scientist is a professional who is responsible for
                collecting, processing, and performing statistical analyses of
                data.
              </p>
            </div>

            <div class="sub-box">
              <div class="sub-img">
                <img src={Brush} alt="" />
              </div>
              <h3>Data Structure</h3>
              <p>
                A data structure is a professional who is responsible for
                collecting, processing, and performing statistical analyses of
                data.
              </p>
            </div>
          </div>
        </section>
      </>
    );
}

export default Skill