import React from 'react'
import {Container, Row, Col, Card, Image} from 'react-bootstrap'
import Layout from '../components/layout'
import l4blm from '../res/home/latinx4blm.jpg'


class About extends React.Component {
  render() {
    return(
    <Layout>
      
        <Container>
        <div className="content">
        <h1>About</h1>
        <Row>
          <Col>
            <p>

            <h2>This is our digital community center, forum and haven. If you want to get involved contact us.</h2>
            <h3>wtf is RollUPPP?</h3>
                RollUPPP was inspired by the idea of joining various Policies, Platforms, and Procedures (Hence, the three p's) for the purpose of making a lasting impact on how 
                <b><i> "We, The People" </i></b> 
                approach the idea of broadcasting our realities as minorities in the digital frontier. 
                <br/>
                <br/>
                We recognized a gap in technological equity, and are in support for providing insight on how technology can be used to further the movement for
                Equality and Equity in all forms. Be it through our learning section, which is filled with videos to bring blatant disparities to your screen, 
                or through our literature blog, we want to emphasize community awareness using technology as the speakerphone.
                <br/>
                <br/>
            </p>
          </Col>
          <Col>
            <Image src={l4blm}/>
          </Col>
        </Row>
        </div>
        </Container>
    </Layout>)
  }
}
export default About