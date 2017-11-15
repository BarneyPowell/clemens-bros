import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

import './shared/globalStyles';

WebFont.load({
    google: {
        families: ['Lato', 'Quicksand']
    }
});

render(<App />, document.getElementById('root'));
registerServiceWorker();
