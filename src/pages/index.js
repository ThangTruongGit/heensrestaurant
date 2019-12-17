import React from 'react';
import { Container } from 'reactstrap';

import Layout from '../components/layout';
import Carousel from '../components/carousel';

const IndexPage = () => {
    return (
        <Layout>
            <Container>
                <Carousel />
                <h1>Heen's Restaurant Chinese Oriental Cuisine</h1>
            </Container>
        </Layout>
    );
}

export default IndexPage; 