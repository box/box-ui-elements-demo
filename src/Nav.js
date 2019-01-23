import React from 'react';

const Nav = () => (
    <nav>
        <div className='menu-title'>Documentation</div>
        <div className='menu'>
            <div className='menu-item'>
                <a target='box' href="//docs.box.com/docs/box-content-explorer">Content Explorer</a>
            </div>
            <div className='menu-item'>
                <a target='box' href="//docs.box.com/docs/box-content-preview">Content Preview</a>
            </div>
            <div className='menu-item'>
                <a target='box' href="//docs.box.com/docs/box-content-picker">Content Picker</a>
            </div>
            <div className='menu-item'>
                <a target='box' href="//docs.box.com/docs/box-content-uploader">Content Uploader</a>
            </div>
            <div className='menu-item'>
                <a target='box' href="//docs.box.com/docs/box-content-sidebar">Content Sidebar</a>
            </div>
            <div className='menu-item'>
                <a target='box' href="//docs.box.com/docs/box-content-open-with">Content Open With</a>
            </div>
        </div>
    </nav>
);

export default Nav;
