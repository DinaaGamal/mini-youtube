import React, { Component } from 'react';
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				videoSearch: ''
			}
		};
	}
	onInputChange = (e) => {
		this.setState({
			videoSearch: e.target.value
		});
	};
	onSubmitForm = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.videoSearch);
	};
	render() {
		return (
			<div className="search-bar ui segment" mt="10">
				<form className="ui form" onSubmit={this.onSubmitForm}>
					<div className="ui search">
						<div className="field">
							<label>Video search</label>
							<input
								className="prompt"
								type="text"
								placeholder="Search..."
								onChange={this.onInputChange}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
