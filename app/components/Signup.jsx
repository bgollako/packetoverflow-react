let React = require('react');
let ReactDOM = require('react-dom');
let api = require('api');
let {connect} = require('react-redux');
let {Checkbox,Panel,Form,FormGroup,InputGroup,Glyphicon,FormControl,Button} = require('react-bootstrap');

let Signup = React.createClass({

    getInitialState(){
      return {
        mainError:'',
        username:{hasError:false,errorMessage:''},
        email:{hasError:false,errorMessage:''},
        password:{hasError:false,errorMessage:''}
      };
    },

    getDummyState: () =>{
      return {
        mainError:'',
        username:{hasError:false,errorMessage:''},
        email:{hasError:false,errorMessage:''},
        password:{hasError:false,errorMessage:''}
      }
    },
    

    onFormSubmit(e){
      e.preventDefault();
      let username = this.refs.username.value.trim();
      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();
      let hasError = false;
      let state = this.getDummyState();      
      if(username.length == 0)
        state.username.hasError = true;
      else{
        if(username.includes(' ') || username.includes('  ')){
          state.username.hasError = true;
          state.username.errorMessage = 'No white spaces allowed';
        }else{
          state.username.hasError = false;
          state.username.errorMessage = '';
        }
      }
      if(email.length == 0)
        state.email.hasError = true;
      else{
        if(!email.includes('@')){
          state.email.hasError = true;
          state.email.errorMessage = 'Specify proper email address';
        }else{
          state.email.hasError = false;
          state.email.errorMessage = '';
        }
      }
      if(password.length == 0)
        state.password.hasError = true;
      else{
        if(password.length < 8){
          state.password.hasError = true;
          state.password.errorMessage = 'Password must have atleast 8 characters';
        }else{
          state.password.hasError = false;
          state.password.errorMessage = '';
        }
      }
      this.setState(state);
      if(!state.username.hasError && !state.email.hasError && !state.password.hasError){
        //place axios call for signup
        api.signup(username,email,password,'Bengaluru').then(response=>{
          console.log(response);
        }).catch(error=>{
          console.log(error);
        });
        //if it fails update respective messages
      }
    },

    getInputStyles(refId){
      let currentState = this.state;
      if(currentState[refId].hasError){
        return 'form-group input-group has-error';
      }else{
        return 'form-group input-group';
      }
    },

    displayErrorMessage(refId){
      let currentState = this.state;
      if(currentState[refId].hasError){
        if(currentState[refId].errorMessage.length>0){
          return (
            <div style={{color:'#d60c0c',fontStyle:'italic',fontSize:'12px'}}>
              {currentState[refId].errorMessage}
            </div> 
          );
        }
      }
    },

    render(){
        return (
          <div style={{marginTop:'5%',marginLeft:'20%',marginRight:'30%'}}>
            <div className="panel panel-info">
              <div className="panel-heading">
                <span className="panel-title" style={{fontSize:'24px',fontStyle:'bold'}}>Join the community</span>
              </div>
              <div className="panel-body">
                <form role="form" onSubmit={this.onFormSubmit}>

                  {this.displayErrorMessage('username')}
                  <div className={this.getInputStyles('username')}>
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input type="text" className="form-control" ref="username" placeholder="Username"/>
                  </div>
                  
                  {this.displayErrorMessage('email')}
                  <div className={this.getInputStyles('email')}>
                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                    <input type="text" className="form-control" ref="email" placeholder="Email"/>
                  </div>

                  {this.displayErrorMessage('password')}
                  <div className={this.getInputStyles('password')}>
                    <span className="input-group-addon"><i className="glyphicon glyphicon-eye-open"></i></span>
                    <input type="password" className="form-control" ref="password" placeholder="Password"/>
                  </div>

                  <button type="submit" className="btn btn-info"> Sign up</button>
                </form>
              </div>
            </div>          
          </div>
        )
    }
});

module.exports = Signup;