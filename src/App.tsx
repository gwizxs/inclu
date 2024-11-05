import React from 'react';
import Counter from "./components/Counter";
import './index.scss';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>
            asdasdASFASFa
            <Counter />
        </div>
    );
};

export default App;
