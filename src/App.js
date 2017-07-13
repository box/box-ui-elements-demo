import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './app.scss';

const App = ({ className, children }) => (
    <div className='app'>
        <Header />
        <div className='body'>
            <main className={className}>{ children }</main>
            <Nav />
        </div>
        <Footer />
    </div>
);

export default App;
