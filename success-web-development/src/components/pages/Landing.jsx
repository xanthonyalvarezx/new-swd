import { React, useState } from "react";
import philly from "../../assets/philadelphia.jpg";
import "../../styles/landing.scss";
function Landing() {
  return (
    <>
      <main>
        <div className="parallax_wrapper">
          <div id="intro" className="parallax_group intro">
            <h1>We're a Philadelphia based web development company</h1>
          </div>
          
          <div id="group-1" className="parallax_group">
            <div className="parallax_layer base_layer">BASE</div>
            <div className="parallax_layer mid_layer">
              <div className="parallax_text">
                We bring your every Idea to Life.<br/>
                Wether your design is for a single page application <br/>
                or a large multi-page website. <br />
                We do it all,<br/>
                from prersonal blogs, to enterprise work. <br />
                We'll make sure your vision, <br />
                becomes your product. <br />
                One-hundred percent of the time.
              </div>
            </div>
          </div>

          <div id="group-2" className="parallax_group">
            <div className="parallax_layer mid_layer_2">
            <div className="parallax_text">
              We're a team Of like-minded individuals,<br/> who thrive on producing top tier products to our clients.<br />Our combined experiences make us we'll rounded and capable of tackling any project.
              </div>
            </div>
          </div>

          <div id="outro" className="parallax_group outro">

            <div>
             <h1> We love what we do as much as we love our city.</h1>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
