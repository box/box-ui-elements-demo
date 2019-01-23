import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Login from './Login';

const container = document.querySelector('.container');
const grantType = 'authorization_code';
const clientId = localStorage.getItem('clientId');
const clientSecret = localStorage.getItem('clientSecret');
const { code } = queryStringToJSON();

function queryStringToJSON() {
    const pairs = location.search.slice(1).split('&');
    const result = {};
    pairs.forEach((pair) => {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return result;
}

function renderLogin() {
    render(
        <Login clientId={clientId} clientSecret={clientSecret} />,
        container
    );
}

function renderApp() {
    fetch('https://api.box.com/oauth2/token', {
        method: 'POST',
        body: `grant_type=${grantType}&code=${code}&client_id=${clientId}&client_secret=${clientSecret}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(({ access_token }) => {
        render(
            <Main token={access_token} />,
            container
        );
    }).catch(() => {
        location.href = '/';
    });
}

if (code) {
    renderApp();
} else {
    renderLogin();
}


