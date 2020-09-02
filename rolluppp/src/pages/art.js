import React from 'react'
import Layout from '../components/layout'
import { Col, Row, Container} from 'react-bootstrap'
import {Link} from 'gatsby'


class Art extends React.Component {
  render() {
    return(
    <Layout>
      <div className="content">
        <Container>
          <h1>Art</h1>
          <Row>
            <Col>
            <h2>The Anthem</h2>
            <h6>June 11, 2020</h6>
            For the first time in decades, the funhouse mirrors of the American Dream are being shattered. The grotesque, clownish white grin painted over our history is being scrubbed from the face of our collective consciousness, leaving the scarred and raw skin of a broken grimace, a populace who refuses to fake a smile any longer. The carnival music has stopped, and while some listen for its return, many more listen for the voices and sounds that rise to fill the sudden silence.
            <br/>
            <br/>
            Roll UPPP is a speaker to amplify the many voices, and magnify the sound of change. The rallying chants and tireless organization of those who march in protest; the electronic music of social media notifications pinging new information, encouragement and resistance; the whisper and click of paintbrushes, pens, keyboards and cameras giving silent voice to the artists and writers capturing the new revolution; The symphony of millions screaming for a new and better age, free from the fear, falsehoods, and dehumanization that has defined our nation for the entirety of its existence.
            <br/>
            <br/>
            This Movement is our new National Anthem. The pounding percussion of boots on the ground; a powerful chorus of solidarity repeated as the hook; samples from the Civil Rights movement of generations past mixed with information technology–This is our Freedom Song, and it has no genre. This is the music we continue to prime the nation’s ears for, through education and action. This is humanity’s battle cry against the forces of separation and evil, a song centuries in the making, and those in power will either learn to dance or get off the dancefloor.
            <br/>
            <br/>
            <h3>— <i>Michael “Arche” Twitty</i></h3>
            </Col>
            <Col>
              <h2> Are you an artist? </h2>
              <p> We'll showcase your work and give you a platform to express yourself.</p>
              <Link to="/contact">Contact Us Here</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>)
  }
}
export default Art