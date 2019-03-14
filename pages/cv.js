import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';


class Cv extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
      <BasePage>
        <h1>Hello from CV class component</h1>
      </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;
