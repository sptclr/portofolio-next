import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {withRouter} from 'next/router';
import Axios from 'axios';
import BasePage from '../components/BasePage';


class Portofolio extends React.Component {
  static async getInitialProps({query}) {
    const portofolioId = query.id;
    console.log(portofolioId);
    
    let portofolio = [];

    try {
      const response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${portofolioId}`);
      portofolio = response.data;
      
    } catch (err) { 
      console.error(err)
    }

    return {portofolio}
  }
  render() {
    const {portofolio} = this.props
    return (
      <BaseLayout className="cover">
      <BasePage>
        <h1>{portofolio.title}</h1>
        <h2>ID: {portofolio.id}</h2>
        <p>Body: {portofolio.body}</p>
      </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portofolio);
