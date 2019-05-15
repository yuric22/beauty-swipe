import React from 'react';
import BeautySwipe from './BeautySwipe';
import ProductFilter from './ProductFilter';

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
