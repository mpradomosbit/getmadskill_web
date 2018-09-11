import React,{Component} from 'react';
import {PropTypes} from 'prop-types';

class  Button extends Component{
  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired

  };constructor(props){
    super(props);
    this.state={
      isClicked:false
    };
    this.logFormDataToConsole= this.logFormDataToConsole.bind(this);
  }

  logFormDataToConsole(event){
    console.log(this.props.formData);
  }
  render(){
    const recipient = `mailto:${this.props.email}`;
    const subject = '?subject=MadSkill%20Marketing%20-%20Contact%20request';
    const body = `?&body= \n      Name: ${this.props.formValues.name} \n    - <br/> Message: ${this.props.formValues.message}  \n    - Phone: ${this.props.formValues.phone}\n    - Email: ${this.props.formValues.email}\n    `;
    return(
      <a
      href={`${recipient}${subject}${body}`}
      onClick={this.logFormDataToConsole}
      >
        <button type="submit" className="btn btn-primary">Submit</button>
      </a>
    );
  }
}

export default Button;