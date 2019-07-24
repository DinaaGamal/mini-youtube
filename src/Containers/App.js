import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';
import VideoList from '../Components/VideoList';
import VideoDetails from '../Components/VideoDetails';
// import youtubeApi from '../apis/youtubeApi';
const KEY = 'AIzaSyBIsUd_Sg4NbW7cHJz6WPLp3Yq3tsFKrxQ';
class App extends Component {
	state = {
		videos: [],
		selectedVideo: null
	};

	componentDidMount() {
		this.onSubmit('universe');
	}
	onVideoSelected = (video) => {
		this.setState({
			selectedVideo: video
		});
	};
	onSubmit = async (videoSearch) => {
		const results = await axios.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				q: videoSearch,
				chart: 'mostPopular',
				part: 'snippet',
				maxResults: 5,
				key: KEY
			}
		});
		this.setState({
			videos: results.data.items,
			selectedVideo: results.data.items[0]
		});
		console.log(results);
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.onSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetails video={this.state.selectedVideo} />
						</div>

						<div className="five wide column">
							<VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
