import React from 'react';
import ReactDOM from 'react-dom';
import ListMyPokemon from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListMyPokemon />, div);
  ReactDOM.unmountComponentAtNode(div);
});
