import React from 'react';
import { ContentExplorer } from 'box-ui-elements';
import getLocalizedMessage from './messages';
import App from './App';
import 'box-ui-elements/dist/explorer.css';

const Main = ({ token }) => (
    <App>
        <ContentExplorer
            token={token}
            getLocalizedMessage={getLocalizedMessage}
        />
    </App>
);

export default Main;
