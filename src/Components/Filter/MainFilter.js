import React from 'react';
import Header from "../../Components/Filter/Header"
/* import HomePageHeader from '../Home/HomePageHeader'; */
import Filter from '../../Components/Filter/Filter';

class MainFilter extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Filter />
            </div>
        )
    }
}

export default MainFilter;