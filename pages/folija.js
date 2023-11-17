import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { testimonialSliderThree } from "../src/sliderProps";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
const Farmers = () => {
  return (
    <Layout>
      <PageBanner pageName={"Фолија"} />
      <section className="farmers-team_page pt-170">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                {/* <span className="sub-title">O</span> */}
                <h2>ФОЛИЈА</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-60 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/img-1.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/portfolio-details">
                      <a>Фолија</a>
                    </Link>
                  </h3>
                  {/* <p className="position">Food Farmers</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="button-box text-center wow fadeInDown">
                <Link href="/farmers">
                  <a className="main-btn bordered-btn bordered-yellow">
                    Become a Member
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/*====== End Farmers Section ======*/}
      {/*====== Start Skill Section ======*/}
      <section className="skill-section  pt-lg-130 pb-130">
        <div className="container-fluid">
          <div
            className="skill-wrapper-one pb-90 bg_cover"
            style={{ backgroundImage: "url(assets/images/bg/skill-bg-1.jpg)" }}
          >
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-5">
                  <div className="skill-one_play-content text-center wow fadeInLeft">
                    <a
                      href="https://www.youtube.com/watch?v=gOZ26jO6iXE"
                      className="video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                    <h2>Watch Latest Videos</h2>
                  </div>
                </div>
                <div className="col-lg-7 mt-50">
                  <div className="skill-one_content-box content-box-gap mb-40 wow fadeInRight">
                    <div className="section-title section-title-left mb-30">
                      <span className="sub-title">Experience</span>
                      <h2>We’re Best Agriculture &amp; Organic Firms</h2>
                    </div>
                    <p>
                      Natus error sit voluptatem accusantium doloremque
                      laudatium, totam rem aperiam, eaque ipsa quae ab illo
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt
                    </p>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>
                          Organic Products<span>75%</span>
                        </h5>
                      </div>
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "75%" }}
                      />
                      <div className="progress" />
                    </div>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>
                          Healthy Foods<span>89%</span>
                        </h5>
                      </div>
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "89%" }}
                      />
                      <div className="progress" />
                    </div>
                    <div className="skill-button">
                      <a href="#" className="main-btn bordered-btn">
                        Learn More Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skill Section ======*/}
      {/* ====== Start Testimonial Section ======
      <section className="testimonial-four pt-130 pb-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Clients Feedback</span>
                <h2>What’s Our Clients Say About Our Organic Foods</h2>
              </div>
            </div>
          </div>
          <Slider
            {...testimonialSliderThree}
            className="testimonial-slider-three"
          >
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-1.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Michael R. Jordan</h4>
                  <p className="position">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-2.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Nathan A. Caswell</h4>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-3.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Somalia D. Silva</h4>
                  <p className="position">Business Manager</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-4.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Michael D. Slaughter</h4>
                  <p className="position">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/img-2.jpg"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “Sit amet consectetu escing elit sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravic darisus comoe”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Nathan A. Caswell</h4>
                  <p className="position">Senior Manager</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
    </Layout>
  );
};
export default Farmers;
