import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 19af61cb400939e462bc46f32e3db606f70657fe087fa1450a56179c1736f9a1"
	}
});
