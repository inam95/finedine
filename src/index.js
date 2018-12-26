import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './app/store/configureStore'
import ScrollToTop from './app/common/util/ScrollToTop';
import { loadRestaurants } from './features/restaurant/restaurantAction'

const store = configureStore();
store.dispatch(loadRestaurants())

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    
    , rootEl)
}

if(module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    })
}

render();

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
