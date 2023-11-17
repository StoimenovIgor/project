import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MobileHeader = () => {
  const { t } = useTranslation();
   const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <a href="farmers" className="active">
          {t('seeds')}
          </a>
          <ul className="sub-menu" style={activeLi("home")}>
            <li>
             <Link href="hibridniSeminja">{t('HybridSeeds')}</Link>
            </li>
            <li>
            <Link href="treva">{t('Grass')}</Link>
            </li>
            <li>
            <Link href="arpadjik">{t('Arpadzhik')}</Link>
            </li>
            <li>
            <Link href="pcenka">{t('Corn')}</Link>
            </li>
            <li>
            <Link href="lucerka">{t('Lucerka')}</Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        
        <li className="menu-item has-children">
        <a href="pesticidi">{t('pesticides')}</a>
          <ul className="sub-menu" style={activeLi("Services")}>
            <li>
            <Link href="fungicidi">{t('Fungicides')}</Link>
            </li>
            <li>
            <Link href="insekticidi">{t('Insecticides')}</Link>
            </li>
            <li>
            <Link href="akaricidi">{t('Acaricides')}</Link>
            </li>
            <li>
            <Link href="herbicidi">{t('Herbicides')}</Link>
            </li>
            <li>
            <Link href="nematocidi">{t('Nematodes')}</Link>
            </li>
          </ul>
          <span
            className="dd-trigger"
            onClick={() => activeMenuSet("Services")}
          >
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
        <a href="gjubrivo">{t('fertilizer')}</a>
          <ul className="sub-menu" style={activeLi("Portfolio")}>
            <li>
            <Link href="organskiGjubriva">{t('OrganicFertilizers')}</Link>
            </li>
            <li>
            <Link href="kristalniGjubriva">{t('CrystalFertilizers')}</Link>
            </li>
          </ul>
          <span
            className="dd-trigger"
            onClick={() => activeMenuSet("Portfolio")}
          >
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
        <a href="repro">{t('repro')}</a>
          <ul className="sub-menu" style={activeLi("Shop")}>
            <li>
            <Link href="treset">{t('Peat')}</Link>
            </li>
            <li>
            <Link href="folija">{t('Foil')}</Link>
            </li>
            <li>
            <Link href="vrekji">{t('PPBags')}</Link>
            </li>
            <li>
            <Link href="filc">{t('Felt')}</Link>
            </li>
            <li>
            <Link href="crnaFolija">{t('BlackFoil')}</Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("Shop")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
        <a href="programi-za-zastita">{t('PPG')}</a>
          <ul className="sub-menu" style={activeLi("Blog")}>
            <li>
            <Link href="vinovaLoza">{t('Vineyard')}</Link>
            </li>
            <li>
            <Link href="jabolcestoOvosje">{t('AppleFruits')}</Link>
            </li>
            <li>
            <Link href="koskestoOvosje">{t('FruitStone')}</Link>
            </li>
            <li>
            <Link href="jagodestoOvosje">{t('StrawberryFruits')}</Link>
            </li>
            <li>
            <Link href="kompir">{t('NutsFruits')}</Link>
            </li>
            <li>
            <Link href="gradinarskiKulturi">{t('GardenCorps')}</Link>
            </li>
            <li>
            <Link href="morkov">{t('Carrots')}</Link>
            </li>
            <li>
            <Link href="zitarici">{t('Cereals')}</Link>
            </li>
            <li>
            <Link href="pcenka">{t('Corn')}</Link>
            </li>
            <li>
            <Link href="tutun">{t('Tobacco')}</Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("Blog")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li>
          <Link href="/about">За Нас</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MobileHeader;
