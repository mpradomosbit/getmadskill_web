//dependnecies
import React ,{Component} from 'react';

//imports
import Field from './components/Field';
import Button from './components/Button';

class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      name: '',
      message: '',

    };
    //To ensure 'this' when calling 'this._updateField' refers to form and not field, we do:
    this._updateField = this._updateField.bind(this);
  }

  //Fiel could be 'name contact','phone','message' adn 'email,
  //values is whatever the user types into the input field
  _updateField(field,value){
    this.setState({
      [field]: value
    });
  };
  render(){
    return(

      <div className={"container"}>
        <br/><br/>

        <h1>Contacto US</h1>
        <div className={"card"}>
          {/* name contact field*/}
          <Field onChange={(event)=> this._updateField('name', event.target.value)}
                 value={this.state.name}
                 label={"Name"}
          />
          {/* phone contact field*/}
          <Field onChange={(event)=> this._updateField('phone', event.target.value)}
                 value={this.state.phone}
                 label={"phone"}
          />
          {/*  message contact*/}
          <Field onChange={(event)=> this._updateField('message', event.target.value)}
            /*this shoul be written like 'textarea'
            * */
                 textarea={true}
                 value={this.state.message}
                 label={"message"}
          />
          {/* emali contact field*/}
          <Field onChange={(event)=> this._updateField('email', event.target.value)}
                 value={this.state.email}
                 label={"email"}
          />
          {/* submit button*/}
          <Button formValues={this.state} email={"mprado@mosbit.com"}/>

        </div>
        <br/><br/>

      </div>

    );
  }

}
export default Contact;