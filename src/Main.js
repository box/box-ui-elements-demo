// Box Elements uses react-intl for internationalization of its text strings and dates.
// If you are not using a modern browser, you will have to polyfill parts of Intl.
// See https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md#runtime-requirements
// for more details on how to conditionally polyfill. One approach is below.

// Polyfill Intl.PluralRules by uncommenting the following line
// import '@formatjs/intl-pluralrules/dist-es6/polyfill';
// Polyfill Intl.RelativeTimeFormat by uncommenting the following line
// import '@formatjs/intl-relativetimeformat/dist-es6/polyfill';

import * as React from 'react';
import { IntlProvider } from 'react-intl';
// The Content Explorer element. Others can be imported similarly
import ContentExplorer from 'box-ui-elements/es/elements/content-explorer';
// We ship multiple language bundles, importing en-US below.
import messages from 'box-ui-elements/i18n/en-US';
import App from './App';
// Importing css related to the content explorer. More can be seen under the dist folder.
import 'box-ui-elements/dist/explorer.css';

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

// ------------------ OR with your own IntlProvider context -----------------
// const Main = ({ token }) => (
//     <App>
//         <IntlProvider locale="en-US" messages={messages}>
//             <ContentExplorer
//                 token={token}
//                 contentPreviewProps={{
//                     contentSidebarProps: {
//                         hasActivityFeed: true,
//                         hasSkills: true,
//                         hasMetadata: true,
//                         detailsSidebarProps: {
//                             hasProperties: true,
//                             hasNotices: true,
//                             hasAccessStats: true,
//                             hasVersions: true,
//                         },
//                     },
//                 }}
//             />
//         </IntlProvider>
//     </App>
// );

export default Main;
