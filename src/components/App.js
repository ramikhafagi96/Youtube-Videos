import React from 'react';
import VideoList from '../components/VideoList';
import SearchBar from './SearchBar';
import youtube from '../api/youtube'
class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items })
    };

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({ selectedVideo: video });
    };
    
    render() {
        return (
        <div  className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
        );
    }
}

export default App;