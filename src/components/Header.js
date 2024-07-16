import React from 'react';

const Header = ({ onNewVideo }) => (
    <header>
        <h1>ALURAFIX</h1>
        <button onClick={onNewVideo}>Nuevo Video</button>
    </header>
);

export default Header;