import React, { useState }  from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState('');
    return (
    <>
        <div className="container">
            <from>
                <input type="text" value={result} />
            </from>

            <div className="keypad">
                <button>Clear</button>
                <button>C</button>
                <button>÷</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>×</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>0</button>
                <button>.</button>
                <button>=</button>

            </div>
        
        </div>
    </>
    );
}

export default App;