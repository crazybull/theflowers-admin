import React from 'react'
import './login.scss'
import LoginForm from './login'
import RegForm from './reg'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
        type:'login'
    };
    this.switchForm=this.switchForm.bind(this)
  }
  switchForm(value){
      this.setState({
        type:value||'login'
      })
  }
  render(){
    return(
        this.state.type==='login'?<LoginForm siwtchformtype={this.switchForm}></LoginForm>:<RegForm siwtchformtype={this.switchForm}></RegForm>
    )
  }
}

export default Login;