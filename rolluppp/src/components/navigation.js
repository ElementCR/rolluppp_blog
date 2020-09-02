/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, Link } from "gatsby"
import 'bootswatch/dist/materia/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function navigation({ description, lang, meta, title }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="sticky">
    <Navbar.Brand href="/">RollUPPP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" id="navparent">
        <Nav.Link>
            <Link id="nlink" to="/learn">Learn</Link>
        </Nav.Link>
        <Nav.Link>
            <Link id="nlink" to="/tech">Tech</Link>
        </Nav.Link>
        <Nav.Link>
            <Link id="nlink" to="/art">Art</Link>
        </Nav.Link>
        <Nav.Link>
            <Link id="nlink" to="/about">About</Link>
        </Nav.Link>
        <Nav.Link>
            <Link id="nlink" to="/contact">Contact</Link>
        </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default navigation
