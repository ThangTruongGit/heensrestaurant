import React from "react";
import { Container, Row, Col } from "reactstrap";

import Layout from "../components/layout";
import Carousel from "../components/carousel";
import Map from "../components/Map";
import MenuList from "../components/MenuList";

const IndexPage = () => {
  return (
    <Layout>
      <Carousel />
      <Container className="content-wrapper">
        <Row>
          <Col>
            <h1>Welcome to Heens</h1>
            <p className="lead">
              We specialise in Peking and Szechuan cuisine. Our head chef of
              over 30 years experience is proud to create our most popular
              authentic dishes for you in traditional way. We are confident that
              you will these tasteful dishes impossible to resist.
            </p>

            <p className="lead">
              Our chef are very happy to cater for any of your individual tastes
              which are not on the menu. We arrange special party menu for all
              occasions
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>Speical Events</h1>
            <p className="lead">
              With sufficient space to host an event of up to 70 people
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <MenuList />
          </Col>
        </Row>
      </Container>
      <Map />
    </Layout>
  );
};

export default IndexPage;
