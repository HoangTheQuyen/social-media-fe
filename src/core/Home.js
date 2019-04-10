import React, { Component } from 'react';
import PropTypes from 'prop-types';
import seashellImg from '../assets/images/seashell.jpg';
import { Card } from 'antd';
import './Home.css'
const { Meta } = Card;


class Home extends Component {
    render() {
        return (
            <Card
            hoverable
            style={{ width: 240 }}
            title="Home Page"
            cover={<img alt="example" src={seashellImg} />}
          >
            <Meta
              description=" Welcome to the SOCIAL MEDIA home page"
            />
          </Card>
        );
    }
}

export default Home;
