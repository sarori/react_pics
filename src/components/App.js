import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
	onSearchSubmit(term) {
		axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization:
					"Client-ID 19af61cb400939e462bc46f32e3db606f70657fe087fa1450a56179c1736f9a1"
			}
		});
	}
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
