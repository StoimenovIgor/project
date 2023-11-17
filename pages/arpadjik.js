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
      <PageBanner pageName={"Арпаџик"} />
      <section className="farmers-team_page pt-170 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                {/* <span className="sub-title">Our Farmers</span> */}
                <h2>АРПАЏИК</h2>
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
                      <a>Birnformige</a>
                    </Link>
                  </h3>
                  <p className="position">Арпаџик</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-60 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/img-2.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">
                      <a>Biztro</a>
                    </Link>
                  </h3>
                  <p className="position">Арпаџик</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-60 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/img-3.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">
                      <a>Red Karmen</a>
                    </Link>
                  </h3>
                  <p className="position">Арпаџик</p>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-60 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/img-4.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">
                      <a>Red Karmen</a>
                    </Link>
                  </h3>
                  <p className="position">Арпаџик</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-60 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/img-5.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">
                      <a>Rosanna</a>
                    </Link>
                  </h3>
                  <p className="position">Арпаџик</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-60 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/img-6.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">Snowball</Link>
                  </h3>
                  <p className="position">Арпаџик</p> 
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-60 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/img-7.jpg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/farmers">Stuttgarter Riesen</Link>
                  </h3>
                  <p className="position">Арпаџик</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Farmers Section ======*/}
       {/*====== Start Skill Section ======*/}
       <section className="skill-section pb-130">
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
    </Layout>
  );
};
export default Farmers;
