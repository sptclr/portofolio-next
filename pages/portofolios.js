import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Axios from 'axios';
import { Link } from '../routes'; //next-routes
import BasePage from '../components/BasePage';

class Portofolio extends React.Component {
  static async getInitialProps() { //mengambil data utk dijadikan props
    let posts = [];
    try {
      const response = await Axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      posts = response.data.slice(0, 10);
      //   console.log(posts)
    } catch (err) {
      console.error(err);
    }
    return { posts }; //return harus object utk getInitialProps
  }

  updateData = posts => { //3. data di eksekusi fungsi updateData
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link route={`/portofolio/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      );
    });
  };

  render() {
    const { posts } = this.props; // 1. ambil data dari getinitialprops
    return (
      <BaseLayout className="cover">
      <BasePage>
        <h1>Hello from Portofolios class component</h1>
        <ul>
          {/* 2. data dari props masukan ke argument updateData(props) */}
          {this.updateData(posts)}
        </ul>
      </BasePage>
      </BaseLayout>
    );
  }
}

export default Portofolio;
