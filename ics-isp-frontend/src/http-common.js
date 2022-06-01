import axios from "axios";

export default axios.create({
    baseURL: "https://calm-anchorage-75033.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    }
});