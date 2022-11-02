import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';

const rootNode = document.getElementById('root');
if(rootNode){
  createRoot(rootNode).render(
    <Router>
      <App />
    </Router>
  );
}