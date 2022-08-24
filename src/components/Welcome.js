// write code for Welcome component here
import React from 'react';
const Welcome = (props) => {
  return (
    <>
    <div>Hey ! <h1>{props.name}</h1></div>
    <h2>Welcome to Newton School.</h2>
    </>
    )
}
export default Welcome;
// "Hey !" where name is name of the student using h1 tag.

// Also render the "Welcome to Newton School." using h2 tag.

// A prop named "name" will be passed to Welcome component use it in writing greeting text.


