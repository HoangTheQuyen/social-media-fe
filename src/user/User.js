
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'

import {
    List, message, Avatar, Spin,Button
  } from 'antd';
import {list} from './api-user'

class Users extends Component{
    state = {
        users: []
    }

    componentDidMount(){
        list()
        .then(data =>{
           this.setState({
               users: data
           })
           console.log(this.state.users)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render(){
        return (
            <div className="demo-infinite-container">
                <List
                    dataSource={this.state.users}
                    renderItem={item => (
                        <Link to={"/user/" + item._id}>
                            <List.Item key={item._id}>
                            <List.Item.Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.name}</a>}
                                description={item.email}
                            />
                            <div>
                            <Button type="primary">
                                View
                            </Button>
                            </div>
                            </List.Item>
                        </Link>  
                    )}
                    >
                </List>
        </div>
        )
    }

}



  
  export default Users;
  