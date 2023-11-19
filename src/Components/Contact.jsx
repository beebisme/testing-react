import React from "react";
import "../Style/ContactStyle.css"

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <div class="container">
          <div class="center">
            <h3>Let's talk about everything</h3>
            <p>Don't like forms? Send me an on My Contact.</p>
          </div>

          <div class="action">
            <form>
              <a href="gmail.com">ellysrahma15@gmail.com</a>
              <a href="instagram.com">@ellysrhmptr</a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
