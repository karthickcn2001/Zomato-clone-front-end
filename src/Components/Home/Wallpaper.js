import React from 'react';
/* import HomePageHeader from '../../Components/Home/HomePageHeader'; */
import Header from '../Filter/Header'
import '../../Styles/Home/home.css';


class WallPaper extends React.Component {

  // This is a constructor function that initializes the state of a React component.
  constructor(props) {
    // The 'super' keyword is used to call the constructor of the parent class. In this case, it calls the constructor of the 'React.Component' class, which is the base class for all React components.
    super(props);
    // The 'state' object is used to store the state of the component. It is initialized with the following properties:
    this.state = {
      // An empty array to hold suggestions
      suggestions: [],
      // An empty array to hold the original data
      originalData: [],
      // An empty array to hold the filtered suggestions
      filteredSuggestions: [],
      // An empty string to hold the user input
      userInput: "",
      // A boolean value to indicate whether to show suggestions or not
      showSuggestions: false,
      // A boolean value to indicate whether any record is found or not
      noRecordFound: false,
      // An integer value to keep track of the currently selected index of the suggestion list
      selectedIndex: -1,
      // A boolean value to indicate whether to redirect to a new page or not
      redirect: false,

      matchedObj: null
    };

  }

  // This is an arrow function that is assigned to a property 'handleSuggestions' of a React component. It takes an event 'e' as an argument.
  handleSuggestions = (e) => {
    // Update the component state with new values of 'filteredSuggestions', 'showSuggestions', 'userInput', 'noRecordFound', and 'suggestions'.
    this.setState({
      filteredSuggestions: [], // Clear the 'filteredSuggestions' array.
      showSuggestions: false, // Set 'showSuggestions' to 'false' to hide the suggestions list.
      userInput: e.currentTarget.innerText, // Set the 'userInput' to the selected suggestion.
      noRecordFound: false, // Set 'noRecordFound' to 'false'.
      suggestions: this.state.originalData, // Reset 'suggestions' to the original data.
    });
    console.log("{handleSuggestions Current state} ==>", this.state);
  };

  // This is an arrow function that takes a string 'suggestion' as an argument.
  formatSuggestion = (suggestion) => {
    // Split the suggestion string into an array of words separated by commas.
    const words = suggestion.split(',');
    console.log("words {formatSuggestion} ==>", words);
    // Create an array of CSS classes to apply to each word in the suggestion.
    const styles = ['first-word', 'second-word', 'third-word'];
    console.log("styles {formatSuggestion} ==>", styles);
    // Return a JSX element that displays each word in the suggestion with alternating CSS classes.
    return (
      <span>
        {words.map((word, index) => (
          <span key={index} className={styles[index % styles.length]}>{word}</span>
        )).reduce((prev, curr) => [prev, ', ', curr])}
      </span>
    );
  };

  // This is an arrow function that is assigned to a property 'handleLocation' of a React component. It takes an event 'event' as an argument.
  handleLocation = (event) => {
    // Get the value of the selected location from the event target and convert it to lowercase.
    const selectedLocation = event.target.value.toLowerCase().trim();
    console.log("selectedLocation {handleLocation} ==> ", selectedLocation);
    const { restaurantsData } = this.props; // Destructure the 'restaurantsData' property from the component props.
    console.log("restaurantsData {handleLocation} ==>", restaurantsData);
    // Filter the restaurantsData to find the matching ones based on the selected location.
    const matchingRestaurants = restaurantsData.filter(
      (restaurant) =>
        `${restaurant.locality}, ${restaurant.city}`.toLowerCase() ===
        selectedLocation
    );
    console.log("matchingRestaurants {handleLocation} ==>", matchingRestaurants);
    if (matchingRestaurants.length === 0) { // If no matching restaurants found,
      // Update the component state with 'suggestions', 'originalData', 'filteredSuggestions', 'showSuggestions', 'userInput', and 'noRecordFound'.
      this.setState({
        suggestions: [],
        originalData: [],
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: "",
        noRecordFound: true,
        matchingRestaurants: []
      });
    } else {
      // Create an array of restaurant names, locality and city for the matching restaurants.
      const suggestions = matchingRestaurants.map(
        (restaurant) => `${restaurant.name}, ${restaurant.locality}, ${restaurant.city}`
      );
      console.log("suggestions {handleLocation} ==>", suggestions);
      // Update the component state with 'suggestions', 'originalData', 'filteredSuggestions', 'showSuggestions', 'userInput', and 'noRecordFound'.
      this.setState({
        suggestions,
        originalData: suggestions,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: "",
        noRecordFound: false,
        matchingRestaurants
      });
    }
    console.log("{handleLocation Current state} ==> ", this.state);
  };

  // This is an arrow function that is assigned to a property 'handleUserInput' of a React component. It takes an event 'e' as an argument.
  handleUserInput = (e) => {
    // Extract the value of the input field from the event and assign it to a constant 'userInput'.
    const userInput = e.currentTarget.value;
    console.log("userInput {handleUserInput} ==>", userInput);
    // Extract the 'originalData' property from the component state and assign it to a constant.
    const { originalData } = this.state;
    console.log("originalData {handleUserInput} ==>", originalData);
    // Filter the 'originalData' array based on whether each element contains the 'userInput' as a substring (ignoring case) and assign the result to a constant 'filteredSuggestions'.
    const filteredSuggestions = originalData.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    console.log("filteredSuggestions {handleUserInput} ==>", filteredSuggestions);
    // Update the component state with the new values of 'filteredSuggestions', 'showSuggestions', 'userInput', and 'noRecordFound'.
    this.setState({
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value, //target
      noRecordFound: filteredSuggestions.length === 0 && userInput !== ""
    });
    console.log("{handleUserInput Current state} ==> ", this.state);
  };

  // This is an arrow function that is assigned to a property 'handleKeyDown' of a React component. It takes an event 'e' as an argument.
  handleKeyDown = (e) => {
    const { selectedIndex, filteredSuggestions } = this.state; // Destructure 'selectedIndex' and 'filteredSuggestions' from the component state.
    console.log("selectedIndex {handleKeyDown} ==> ", selectedIndex);
    console.log("filteredSuggestions {handleKeyDown} ==> ", filteredSuggestions);
    // If the user presses the up arrow key and the currently selected suggestion is not the first one,
    if (e.keyCode === 38 && selectedIndex > 0) {
      this.setState({ selectedIndex: selectedIndex - 1 }); // Update the selected index in the component state to the previous one.
      console.log("if (e.keyCode === 38 && selectedIndex > 0) selectedIndex: selectedIndex - 1", this.state.selectedIndex);
    }
    // If the user presses the down arrow key and the currently selected suggestion is not the last one,
    else if (e.keyCode === 40 && selectedIndex < filteredSuggestions.length - 1) {
      this.setState({ selectedIndex: selectedIndex + 1 }); // Update the selected index in the component state to the next one.
      console.log("else if (e.keyCode === 40 && selectedIndex < filteredSuggestions.length - 1) selectedIndex: selectedIndex + 1", this.state.selectedIndex);
    }
    // If the user presses the enter key and there are suggestions to choose from,
    else if (e.keyCode === 13 && filteredSuggestions.length > 0) {
      // Update the component state with 'filteredSuggestions', 'showSuggestions', 'userInput', and 'selectedIndex'.


      this.setState({
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: filteredSuggestions[selectedIndex],
        selectedIndex: -1,
      });
      console.log("this.state.userInput {} ==> ", this.state.userInput);
      console.log("else if (e.keyCode === 13 && filteredSuggestions.length > 0) selectedIndex: selectedIndex atlast", this.state.selectedIndex);
    }

  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userInput !== this.state.userInput) {
      const selectedValue = this.state.userInput;
      const suggestions = this.state.suggestions;
      const matchingRestaurants = this.state.matchingRestaurants;
      const isMatch = suggestions.some((suggestion) => {
        return suggestion === selectedValue;
      });

      if (isMatch) {
        const matchingRestaurant = matchingRestaurants.find((restaurant) => {
          return `${restaurant.name}, ${restaurant.locality}, ${restaurant.city}` === selectedValue;
        });
        if (matchingRestaurant) {
          this.setState({
            matchedObj: matchingRestaurant // set the matched object in the state
          });
        }
      }
    }
  }
  render() {
    // Extracting locationsData and redirect property from props and state respectively
    const { locationsData } = this.props;
    const { matchedObj } = this.state;
    const { restaurantsData } = this.props;

    const handleButtonClick = () => {
      const selectedValue = userInput.trim().toLowerCase();
      const matchingRestaurant = restaurantsData.find((restaurant) => {
        return `${restaurant.name}, ${restaurant.locality}, ${restaurant.city}`.toLowerCase() === selectedValue;
      });

      if (selectedValue === "" || !matchingRestaurant) {
        // invalid input, do nothing
        return;
      }

      // redirect to details page with matchedObj passed as a URL parameter
      const restaurantId = matchedObj._id;
      window.location.href = `http://localhost:3000/details?restaurant_id=${restaurantId}`;
    };

    // Extracting methods and relevant properties from the state
    const {
      handleUserInput,
      handleSuggestions,
      state: {
        filteredSuggestions,
        showSuggestions,
        userInput,
        noRecordFound,
      }
    } = this;

    /* console.log(userInput); */

    // Initializing a variable that will hold the suggestions list component
    let suggestionsListComponent;

    // Check if showSuggestions is true and userInput is not empty
    if (showSuggestions && userInput) {
      // If there are filtered suggestions, create an unordered list with each suggestion as a list item
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={handleSuggestions}
                className={this.state.selectedIndex === index ? "selected" : ""}
              >

                {/* Display an image with each suggestion */}
                <img src='../../Assets/Filter/bake1.jpg' alt='img not found' width='30px' height='30px' style={{ borderRadius: "10px" }}></img>

                {/* Format the suggestion and display it */}
                {this.formatSuggestion(suggestion)}
              </li>
            ))}
          </ul>
        );
      }
      // If there are no filtered suggestions, display a message indicating no records were found
      else if (noRecordFound) {
        suggestionsListComponent = (
          <div className="no-suggestions">No records found :( </div>
        );
      }
    }
    return (
      <div>
        <div className="container-fluid">
          <div className="bgimg">
            <Header />
            <div className="circle mt-5">e!</div>
            <h1 className="text-white text-center" style={{ marginTop: '150px' }}>
              Find the best restaurant, cafes, and bars
            </h1>
            <div className="dd-sb row mt-5 mt-lg-2">
              <div className="col-md-6"> {/* // This code is rendering a div element with a class "col-md-6" */}
                {/* // This code is rendering an input element with the following attributes:
// type: text, name: location, id: locations, placeholder: "Please select your location"
// class: "form-control text-secondary"
// When user types into this input field, the handleLocation method is called */}
                <input
                  type="text"
                  list="cities"
                  name="location"
                  id="locations"
                  placeholder="Please select your location"
                  className="form-control text-secondary"
                  onInput={this.handleLocation}
                />
                {/* / This code is rendering a datalist element with an id of "cities"
// The datalist element contains option elements for each location in the locationsData array
// The value of each option is the name of the location and the city separated by a comma */}
                <datalist id='cities'>
                  {locationsData.map((item) => (
                    <option key={item._id} value={`${item.name}, ${item.city}`} className="option-style" />
                  ))}
                </datalist>
              </div>

              <div className="col-md-6 mt-3 mt-md-0">
                <div className="search-bar">
                  <div className="input-group">
                    <input
                      // sets the id for the input field
                      id="userInput"
                      // sets the class for the input field
                      className="form-control text-secondary"
                      // sets the aria label for the input field
                      aria-label="Search"
                      // sets the type of the input field
                      type="text"
                      // sets the function to call on change of input value
                      onChange={handleUserInput}
                      // sets the current value of the input field
                      value={this.state.userInput}
                      // sets the function to call on key down event
                      onKeyDown={this.handleKeyDown}
                      // sets the placeholder for the input field
                      placeholder="Search for restaurant"

                    />
                    <div className="input-group-append">
                      {userInput < 0 ? (
                        // If userInput is less than 0, disable the button and display a search icon
                        <button className="btn btn-danger" type="button" disabled>
                          <i className="fa fa-search"></i>
                        </button>
                      ) : (
                        // Otherwise, enable the button and display a search icon along with the value of userInput
                        <button className="btn btn-danger" type="button" onClick={handleButtonClick}>

                          <i className="fa fa-search"></i>
                        </button>
                      )}
                    </div>

                  </div>
                  {/* This code renders a <div> element with class name "suggestions-container". It also includes the suggestionsListComponent which is a list of suggestions that appear when the user types something in the search bar. If there are no suggestions, this will be an empty container. */}
                  <div className="suggestions-container">
                    {suggestionsListComponent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WallPaper;