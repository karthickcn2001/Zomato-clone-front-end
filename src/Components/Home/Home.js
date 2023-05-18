import React from 'react';
import axios from "axios";
import WallPaper from '../../Components/Home/Wallpaper';
import QuickSearch from '../../Components/Home/QuickSearch';

class Home extends React.Component {
    // This is the constructor function of a React component.
    constructor() {
        // It calls the constructor of the parent component using super().
        super();
        // It initializes the state of the component with an object that has two empty arrays.
        this.state = {
            locations: [],
            restaurants: [],
            mealtypes: []
        }
    }

    // This is a lifecycle method of a React component that is called after the component has mounted.
    componentDidMount() {
        // It sends a GET request to the specified URL to fetch all locations.
        axios({
            method: 'GET',
            url: "http://localhost:3500/getAllLocations",
            headers: { 'Content-Type': 'application/json' }
        })
            // It logs the response data and updates the state with the fetched locations.
            .then(response => {
                console.log(response.data);
                this.setState({ locations: response.data.locations })
            })
            // It logs any error that occurs while fetching the locations.
            .catch(err => console.log(err))

        // It sends a GET request to the specified URL to fetch all restaurants.
        axios({
            method: 'GET',
            url: "http://localhost:3500/getAllRestaurants",
            headers: { 'Content-Type': 'application/json' }
        })
            // It logs the response data and updates the state with the fetched restaurants.
            .then(response => {
                console.log(response.data);
                this.setState({ restaurants: response.data.restaurants })
            })
            // It logs any error that occurs while fetching the restaurants.
            .catch(err => console.log(err))



        axios({
            method: 'GET',
            url: "http://localhost:3500/getAllMealtypes",
            headers: { 'Content-Type': 'application/json' }
        })
            // It logs the response data and updates the state with the fetched mealtypes.
            .then(response => {
                console.log(response.data);
                this.setState({ mealtypes: response.data.mealtypes })
            })
            // It logs any error that occurs while fetching the mealtypes.
            .catch(err => console.log(err))
    }


    // This is a method of a React component that is responsible for rendering the UI of the component.
    render() {
        // It destructures the locations , restaurants and mealtypes properties from the component state.
        const { locations, restaurants, mealtypes } = this.state

        // It returns a JSX element that includes two child components with props containing the locations and restaurants data.
        return (
            <div>
                <WallPaper locationsData={locations} restaurantsData={restaurants} />
                <QuickSearch mealtypesData={mealtypes} />
            </div>
        )
    }

}

export default Home;