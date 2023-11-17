import Link from "next/link";
import { useTranslation } from "react-i18next";

const PageBanner = ({ pageName, pageTitle }) => {
  const { t } = useTranslation();
  return (
    <section
      className="page-banner bg_cover position-relative z-1"
      style={{ backgroundImage: "url(assets/images/bg/page-bg-1.jpg)" }}
    >
      <div className="brand-card   text-center">
        <img src="assets/images/icon/bannerLogo.jpg" alt="icon" />
        <h3>{t('agrohemija')}</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="page-title">
              <h1>{pageTitle ? pageTitle : pageName}</h1>
              <ul className="breadcrumbs-link">
                <li>
                  <Link href="/">{t('home')}</Link>
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
