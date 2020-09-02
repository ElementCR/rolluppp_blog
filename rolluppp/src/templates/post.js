import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import ReactPlayer from "react-player"
import { Row, Col, Button, Container } from "react-bootstrap"
import { Link } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  // const post = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <div className="content">
          <h1 id="center">{post.frontmatter.title}</h1>
          <Row className="spacebetween">
            { 
            (post.frontmatter.back) &&
                <Button variant="dark" href={post.frontmatter.back}>
                    Last Lesson
                </Button>
            }
            <Button variant="dark" href={post.frontmatter.next}>
              Next Lesson
            </Button>{" "}
          </Row>
          <Row className="player-wrapper" id="center">
            <ReactPlayer
              url={post.frontmatter.featureVideo}
              controls={true}
            />
          </Row>
          <p id="center">We do not own the materials in the video displayed above.</p>

          <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        featureVideo
        next
        back
      }
    }
  }
`
