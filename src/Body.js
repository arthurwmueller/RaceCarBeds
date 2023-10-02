import App from "./App"
import Login from "./Login"
import React from "react";

class Body extends React.Component{

    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
        this.state ={loggedIn:false};
    }

    login
    (){
        this.setState({loggedIn:true})
    }

    logout(){
        this.setState({loggedIn:false})
    }
    
    render(){

        const loggedIn=this.state.loggedIn;

        if(this.props.loggedIn===true){
      return (
        <App />
        )
    
    } else {
    
        return (
      <Login />
    
      );
  
    }

}

}

export default Body