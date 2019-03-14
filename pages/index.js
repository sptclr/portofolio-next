import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';


import { Button, Col, Container, Row } from 'reactstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.roles = ['developer', 'tech lover', 'team player', 'course creator', 'react.js', 'angular']
  }

  render() {
    return (
      <BaseLayout className="cover">
        <div className="cover main-section">
          <div className="cover background-image">
            <img src="/static/img/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/img/section-1.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Filip Jerga. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={this.roles}
                  smartBackspace
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;

//functional component
//dumb component
//get data
//return data
// const Index = () => (
//     <div>
//       <p>Hello Next.js</p>
//     </div>
// )

//Class component
//more functionality
//more stuff
//user lifecycle function

/**
 * perbedaan <div></div> dengan <React.fragment></React.fragment>
 * <div> membungkus element return dengan div lain
 * <react.fragment> tidak membungkus element itu pada struktur html
 */
/**
 * <Header title={'Halo i\'m props header'}>
            <h1>i'm children props from header</h1>
    </Header>
 */
