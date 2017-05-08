import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
const container = document.querySelector('.container');


const API_KEY = 'AIzaSyC-mL3U0mJd9zMUvI0th7igveOzxbyyoFU';


const App = () => {
    return (
        <div>   
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, container);