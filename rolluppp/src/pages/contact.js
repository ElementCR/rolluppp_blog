import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import Layout from '../components/layout'


class Contact extends React.Component {
  render() {
    return(
    <Layout>
      <div className="content">
        <h1>Contact Us</h1>
        <Container>
        <div>
          <h2>Want to Participate? Want more stories? Show case your art! </h2>
          <h3>Email: <a href="rollupp.blm@gmail.com"> rollupp.blm@gmail.com</a></h3>
        </div>
        </Container>
      </div>  
    </Layout>)
  }
}
export default Contact