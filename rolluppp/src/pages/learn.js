import React from 'react'
import {Row, Card, Container} from 'react-bootstrap'
import Layout from '../components/layout'
import { Link, graphql } from "gatsby"
import ReactPlayer from 'react-player'
// import '../css/index.css'; // add some style if you want!
export default function Learn({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
    <Container>
    <div className="content blog-posts">
      <Row className="centerContent" id="center">
        <ReactPlayer 
          url='videos/learn_vid.MP4'
          controls={true}
          />
      </Row>
      <h1 id="spaceAbove">Watch Our Videos</h1>
      <Row>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Card className="blog-post-preview" key={post.id}>
              <Card.Body>
                <Card.Title href={post.frontmatter.path}>{post.frontmatter.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post.frontmatter.date}</Card.Subtitle>
                <Card.Text>
                  {post.excerpt}
                </Card.Text>
                <Card.Link id="linkBottom" href={post.frontmatter.path}>Watch Now</Card.Link>
              </Card.Body>
            </Card>
          )
        })}
        </Row>
    </div>
    </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`