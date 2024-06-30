import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

import Home from './Home';
import RSVP from './RSVP';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/RSVP' element={<RSVP/>}></Route>
        </Routes>
    );
}

export default Main;