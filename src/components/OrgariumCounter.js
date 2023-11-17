import dynamic from "next/dynamic";
import { useTranslation } from 'react-i18next';
const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const OrgariumCounter = () => {
  const { t } = useTranslation(); 
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={15000} />+
            </h2>
            <p>{t('satClients')}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={200} />+
            </h2>
            <p>{t('qualProduct')}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={30} />+
            </h2>
            <p>{t('expirience')}</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 counter-item">
        <div className="counter-inner">
          <div className="text">
            <h2 className="number">
              <Counter end={100} />%
            </h2>
            <p>{t('best')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrgariumCounter;

export const OrgariumCounter2 = () => (
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={3652} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={896} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={945} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={565} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
  </div>
);
