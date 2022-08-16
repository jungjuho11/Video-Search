import React from "react";
import VideoItem from "./VideoItem";

//({videos.length}) is the props. but we do it like this so we dont need to repeat 'props' over and over in our code
const VideoList = ({ videos, onVideoSelect }) => {
  //props.videos
  const renderedList = videos.map((video) => {
    //for every video in videos
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
