// Not needed unless working with non "en" locales
// import { addLocaleData } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';

import React from 'react';
import ContentExplorer from 'box-ui-elements/es/elements/content-explorer';
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
            contentPreviewProps={{
                contentSidebarProps: {
                    hasActivityFeed: true,
                    hasSkills: true,
                    hasMetadata: true,
                    detailsSidebarProps: {
                        hasProperties: true,
                        hasNotices: true,
                        hasAccessStats: true,
                        hasVersions: true,
                    },
                },
            }}
        />
    </App>
);

export default Main;
