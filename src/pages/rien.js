import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import PageTemplate from '../templates/pageTemplate';
import Markdown from 'react-remarkable'
import RienImage from '../components/IndexPage/rien.jpg';

const Rien = ({ intl }) => {
  const title = intl.formatMessage({ id: 'rien.title' });

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
              {intl.formatMessage({ id: 'rien.title' })}
            </h2>
            <p className='lead'></p>
            <h4 className='mb-3'>Rien Fröhlich</h4>
            <p>1931 - 2021</p>
            <p className='font-italic mt-5 mb-5'>erelid van Krashna Musika sinds 1996 wegens zijn verdienste voor kamermuziek en opera</p>
          </div>
          <div></div>
          <div className='my-auto'>
            <div className='text-center'>
              <img
                src={RienImage}
                className='img-fluid mb-4'
                alt='Rien Fröhlich'
              />
            </div>
            <div className='row justify-content-center'>

              <div className='col-md-8 col-12'>
                <Markdown options={{ html: true }}>{intl.formatMessage({ id: 'rien.body' })}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default injectIntl(Rien);
