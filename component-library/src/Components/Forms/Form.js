import React from 'react';
// import "./Form.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Form = (props) => (
  <form>
    <label htmlFor={props.type}>{props.test}</label>
    <input className={props.type} placeholder={props.value}></input>
  </form>
)

export default Form;