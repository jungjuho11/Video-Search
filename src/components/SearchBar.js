import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  //we want to put 'event' as the Searchterm
  onInputChange = (event) => {
    //console.log(event);
    this.setState({searchTerm: event.target.value});
  };

  //making sure the browser does not automatically submits the form when the user hits enter
  onFormSubmit = (event) => {
    event.preventDefault(); //makes it so when the user hits enter, the entire page does not refresh

    //TODO: Make sure we call callback from parent component
    this.props.callMeWhenSubmitted(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            {/* the 'value' will come from this.state.Searchterm */}
            <input 
            type="text" 
            value={this.state.searchTerm} 
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
