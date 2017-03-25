import React from 'react';

const action = (type) => (value) => console.log(type, value)

export default {
  title: "Button",
  "with text": () => (
      <button onClick={action('clicked')}>Hello Button</button>
  ),
  "with some emoji": () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ),
}
