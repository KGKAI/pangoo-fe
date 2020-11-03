import axios from "axios";
import { message } from "antd";

const isDev = process.env.NODE_ENV === "development";
const instance = axios.create({
	baseURL: isDev ? "http://10.106.158.41:3000" : "http://localhost:3000",
	timeout: 6000,
	// withCredentials: true,
});

instance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const { response } = error;

		if (response) {
			if (response.status === 404) {
				message.error("请求资源未发现");
			} else if (response.status === 403) {
				message.error(response.data.msg, () => {
					window.location.href = "/admin/login";
				});
			} else {
				message.error(response.data.msg);
			}
		}

		return Promise.reject(error);
	}
);

export default instance;
