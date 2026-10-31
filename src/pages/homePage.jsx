import React from 'react'
import SearchBar from '../components/searchBar.jsx';
import Tab from '../components/tabs.jsx';
import ResultGrid from '../components/resultGrid.jsx';

const homePage = () => {
    return (
        <div>
            <SearchBar />
            <Tab />
            <ResultGrid />
        </div>
    )
}

export default homePage
