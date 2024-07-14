import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './frontend/app/App';

const bootstrap = () => {
    const root = createRoot(document.getElementById('root'));

    root.render(<App />);

    return Promise.resolve({
        willBeRemoved: () => {
            root.unmount();
        },
    });
};

global.startupProductCatalogueApp = bootstrap;
