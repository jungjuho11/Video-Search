import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"; //up into the src folder
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

    componentDidMount () {
        this.onSearchTermSubmit('porsche')
    }

  onSearchTermSubmit = async (searchTerm) => {
    console.log(searchTerm);
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    console.log(response); //all we really care about is response.data.items

    this.setState({ 
        videos: response.data.items,
        selectedVideo: response.data.items[0]
    });
    console.log(this.state.videos);
  };

  onVideoSelect = (video) => {
    console.log("from the app:", video);

    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar callMeWhenSubmitted={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>

        {/* I have {this.state.videos.length} videos. */}
      </div>
    );
  }
}

export default App;
