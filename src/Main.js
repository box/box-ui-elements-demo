// Not needed unless working with non "en" locales
// import { addLocaleData } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';

import React from 'react';
import ContentExplorer from 'box-ui-elements/lib/components/ContentExplorer';
import messages from 'box-ui-elements/i18n/en-US';
import App from './App';
import 'box-ui-elements/dist/explorer.css';

// Not needed unless working with non "en" locales
// addLocaleData(enLocaleData);

const Main = ({ token }) => (
    <App>
        <ContentExplorer
            language='en-US'
            messages={messages}
            token={token}
        />
    </App>
);

export default Main;
