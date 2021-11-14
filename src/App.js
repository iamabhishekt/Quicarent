import React from 'react';

import { Footer, Blog, Possibility,Ownerinfo, Features, Maps, Header} from './containers';
import { CTA, Navbar} from './components'; 
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
