import React, { Component } from 'react'


export class Dashboard extends Component {

    state ={
        data:{}
    }

    componentDidMount=()=>{
        console.log("componentmount")
        this.getData();
    }

    getData= async()=>{
        const response = await fetch('/api/user',{
        credentials:"include"
        });
        const data =await response.json();
        console.log(data.displayName)
        this.setState({data : data})
    }
    
 


    render() {

        
        return (
            <div>
                <h3>Profile</h3>
                <ul style={{ listStyle:"none"}}>
                        <li>
                            <img style={{width:"80px", height: "80px"}} src={this.state.data.photo} alt=""></img>
                        </li>
                        <li>
                            {this.state.data.firstName}
                        </li>
                        <li>
                            {this.state.data.lastName}
                        </li>
                        <li>
                            {this.state.data.displayName}
                        </li>
                    </ul>
    
                    <div>
                    <a href='/api/logout'><button >logout</button></a>
                    </div>
            </div>
        )
    }
}

export default Dashboard

