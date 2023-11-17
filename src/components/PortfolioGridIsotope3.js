import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import LanguageSwitcher from "../../public/locales/LanguageSwitcher";
import {useTranslation} from "react-i18next";
const PortfolioGridIsotope3 = () => {
  const { t } = useTranslation(); 
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-row", {
        itemSelector: ".project-column",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".project-column",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      {/* <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="portfolio-filter-button text-center mb-60 wow fadeInDown">
            <ul className="filter-btn">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                Show All
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-1")}`}
                onClick={handleFilterKeyChange("cat-1")}
                data-filter=".cat-1"
              >
                ХИБРИДНИ СЕМИЊА
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-2")}`}
                onClick={handleFilterKeyChange("cat-2")}
                data-filter=".cat-2"
              >
                ТРЕВА
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-3")}`}
                onClick={handleFilterKeyChange("cat-3")}
                data-filter=".cat-3"
              >
                СЕМЕНСКИ КОМПИР
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-4")}`}
                onClick={handleFilterKeyChange("cat-4")}
                data-filter=".cat-4"
              >
                АРПАЏИК
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-5")}`}
                onClick={handleFilterKeyChange("cat-5")}
                data-filter=".cat-5"
              >
                ПЧЕНКА
              </li>
              <li
                className={`c-pointer ${activeBtn("cat-6")}`}
                onClick={handleFilterKeyChange("cat-6")}
                data-filter=".cat-6"
              >
                ЛУЦЕРКА
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="row project-row">
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-6 cat-1">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder">
              <img src="assets/images/portfolio/img-9.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-details">
                      <a>{t('OrganicFertilizers')}</a>
                    </Link>
                  </h3>
                  <p>
                    {/* <a href="#">Agriculture</a>,<a href="#">Foods</a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-3 cat-6">
          <div className="project-item-three mb-30 wow fadeInUp">
            <div className="img-holder">
              <img src="assets/images/portfolio/img-10.jpg" alt="" />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-details">
                      <a>{t('CrystalFertilizers')}</a>
                    </Link>
                  </h3>
                  <p>
                    {/* <a href="#">Agriculture</a>,<a href="#">Foods</a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
};
export default PortfolioGridIsotope3;
