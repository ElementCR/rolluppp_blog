import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootswatch/dist/materia/bootstrap.min.css';
import { Row, Col, Container} from 'react-bootstrap'
import motivate from '../res/home/motivate.png'
import graffiti from '../res/home/brian-wertheim-AX6mFEv6mpY-unsplash.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <div class="no-padding">     
        <img src={motivate} class="img-responsive" id="max-image"/>       
      </div>
      <Container className="point-box">
        <Row>
          <Col sm>
            <h3>Learn Tech.</h3>
            <p className="paragraph">We want to equip our communities with skills to leverage technology to maintain and drive momentem for change.</p>
          </Col>
          <Col sm>
            <h3>Discover Yourself.</h3>
            <p className="paragraph">Whether through knowledge of history, art, or action, this is portal to help discover yourself in our community.</p>
          </Col>
          <Col sm>
            <h3>Help Others.</h3>
            <p className="paragraph">We aim to provide a <b>PLATFORM</b> for the true creators of our city, by rolling up our sleeves bringing truth to the front.</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="bottomPad">
          <Col className="no-padding" md={4}>
            <div class="no-padding">     
              <img src={graffiti} class="img-responsive" id="max-image"/>       
            </div>
          </Col>
          <Col md={4}>
            <h3>Speak Up. Speak Out.</h3>
            <p class="paragraph">Whether through tech, history, or literature, you can find your space to express yourself, to call out the bullshit, and to bring consciousness to your community in a way most others can't.</p>
          </Col>
          <Col md={4}>
            <h3>Our philosophy?</h3>
            <p class="paragraph">Move. Do. Learn. Just do it all in love, and for the purpose of truth. We'll find a way to get you on a platform, and get you rolling.</p>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
