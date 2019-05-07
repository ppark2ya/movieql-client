import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './globalStyles';

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <App />
    </React.Fragment>, 
    document.getElementById('root')
);