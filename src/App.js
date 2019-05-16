import React from 'react';
import BeautySwipe from './components/BeautySwipe';
import ProductFilter from './components/ProductFilter';

import './App.css';

function App() {
    return (
        <div className="App">
            <h1 className="App-title"><span role="img" aria-label="Beauty Swipe">💅</span> BeautySwipe</h1>
            <ProductFilter />
            <BeautySwipe />
        </div>
    );
}

export default App;
