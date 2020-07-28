import React from 'react';
import { render } from 'react-dom';
import './fake-hmr';

const ExampleComponent = () => {
  return <div>
    <h1>Canada COVID-19HEALTH</h1>
    <p> For the most up to date information regarding COVID-19 in Canada, please consult Canada Deptartment of Health. This site should not be used for life saving information - instead, rather, a source for numbers and statistics. `client/index.js`.</p>
  </div>
}

render(<ExampleComponent />, document.getElementById('app'));
