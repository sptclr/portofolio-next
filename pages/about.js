import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <BasePage>
          <h1>ABout Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
