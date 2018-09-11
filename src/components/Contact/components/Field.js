//Dependencies
import React from 'react';
import {PropTypes} from 'prop-types';

//stateless component / functional component
const Field = (props)=> (
  <div className={"form-group"}>
    <label form={"exampleInputEmail1"}>{props.label}</label>
    <input type={props.textarea ? 'textarea': 'text'}
           onChange={props.onChange}
           className={"form-control"}
           value={props.value}
    />
  </div>

);

// propTypes is a way the ensure we are expecting
// certain props that will enable the component to
// function properly
Field.propTypes ={
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired,

};
Field.defaultProps ={
  textarea: false
};
export default  Field;
