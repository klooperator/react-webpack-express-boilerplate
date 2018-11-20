import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './src/App';

const entryPoint = document.getElementById('entry_point');

function renderMain() {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    entryPoint,
  );
}
renderMain();

if (module.hot) {
  /* module.hot.accept(); */
  module.hot.accept('./src/App', () => {
    console.log('Accepting the updated main module!');
    // document.body.removeChild(element);
    renderMain(); // Re-render the "component" to update the click handler
    // document.body.appendChild(element);
  });
}
