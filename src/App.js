import React from 'react';

import { Ownerinfo, Maps, Header} from './containers';
import { Navbar} from './components'; 
import './App.css';

const app = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
                <Ownerinfo />
                <Maps />
            </div>
        </div>
    )
}

export default app
