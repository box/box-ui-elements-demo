Demo host app for the [Box UI Elements](https://developer.box.com/docs/box-ui-elements)
===========================================================================================

**This demo app demonstrates how to use a Box UI Element from within a React based application. The UI Elements require an access token to work. This demo however does not demonstrate how to do authentication in your app. For authentication and generating tokens please follow https://developer.box.com/docs/authentication instead.**

Setup
-----
1. Create a new app with Standard OAuth 2.0 (User Authentication) in the [Box Developer Console](https://app.box.com/developers/console).
    1. Use `http://localhost:8080` as your redirect URI on the configuration page.
    2. Whitelist `http://localhost:8080` for CORS on the configuration page.
    3. Note down the Client ID and Client Secret from the configuration page.
2. Clone this repo via `git clone git@github.com:box/box-ui-elements-demo.git`.
3. Run `yarn start` to run the webpack dev server.
4. Navigate to http://localhost:8080.
5. Enter the values from step 2 and then grant access to box on the following page.

**Note: The above instruction steps assume webpack dev server is running on port 8080. If it runs on another port, you will have use that instead in the instructions above.**

Important Files
---------------
[How to import the UI Element - Main.js](src/Main.js)
[Webpack rules - webpack.config.js](webpack.config.js)
[Babel config - babel.config.js](babel.config.js)
[Depedencies - package.json](package.json)

Documentation
-------------
##### [Box Content Pickers](https://developer.box.com/docs/box-content-picker)
##### [Box Content Explorer](https://developer.box.com/docs/box-content-explorer)
##### [Box Content Uploader](https://developer.box.com/docs/box-content-uploader)
##### [Box Content Preview](https://developer.box.com/docs/box-content-preview)
##### [Box Content Sidebar](https://developer.box.com/docs/box-content-sidebar)
##### [Box Content Open With](https://developer.box.com/docs/box-content-open-with)

# Questions
If you have any questions, please visit our [developer forum](https://community.box.com/t5/Box-Developer-Forum/bd-p/DeveloperForum) or contact us via one of our [available support channels](https://community.box.com/t5/Community/ct-p/English).

# Copyright and License
Copyright 2016-present Box, Inc. All Rights Reserved.

Licensed under the Box Software License Agreement v.20170516.
You may not use this file except in compliance with the License.
You may obtain a copy of the License at

   https://developer.box.com/docs/box-sdk-license

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
