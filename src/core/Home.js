import React, { Component } from 'react';
import seashellImg from '../assets/images/seashell.jpg';
import { Card, AutoComplete } from 'antd';

const { Meta } = Card;


class Home extends Component {
    render() {
        return (
             <Card
           hoverable
           style={{maxWidth: 600,  margin: 'auto', minHeight: 330, marginTop: 5}}
           title="Home"
           cover={<img alt="Home" src={seashellImg} />}
         >
           <Meta
            
             description="Welcome to the Mern Skeleton home page"
           />
         </Card>
        );
    }
}


export default Home;
