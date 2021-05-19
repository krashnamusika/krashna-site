import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import PageTemplate from '../templates/pageTemplate';
import DaanAdmiraalImage from '../components/IndexPage/daan-admiraal.jpg';

const Daan = ({ intl }) => {
  const title = intl.formatMessage({ id: 'daan.title' });

  return (
    <PageTemplate title={title} useCustomStructure={true}>
      <div className='bg-dark text-white' style={{ minHeight: '100vh' }}>
        <div
          className='container d-flex flex-column align-center h-100'
          style={{
            minHeight: '100vh',
            paddingTop: '50px',
            paddingBottom: '50px',
          }}
        >
          <div className='my-auto text-center'>
            <h2 className='mt-5 mb-3'>
              {intl.formatMessage({ id: 'daan.title' })}
            </h2>
            <p className='lead'>Onverwacht overleden, onze geliefde dirigent</p>
            <h4 className='mb-3'>Daan Admiraal</h4>
            <p>Eindhoven, 11 april 1949 - Müstair, 22 juli 2018</p>
            <p className='font-italic mt-5 mb-5'>Nu is er stilte</p>
          </div>
          <div></div>
          <div className='my-auto'>
            <div className='row justify-content-center'>
              <div className='col-md-4 col-10'>
                <img
                  src={DaanAdmiraalImage}
                  className='img-fluid mb-4'
                  alt='Daan Admiraal'
                />
              </div>
              <div className='col-md-8 col-12'>
                {intl.formatMessage({ id: 'daan.body' })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default injectIntl(Daan);
