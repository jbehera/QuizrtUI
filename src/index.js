import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import client from './apollo/client';

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>, 
    document.getElementById('root')
);
registerServiceWorker();
