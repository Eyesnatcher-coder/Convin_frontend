import axios from "axios";

const history_of_clicking = async () => {
    // process.env.REACT_APP_API_URL
    const resp = await axios.get(process.env.REACT_APP_API_URL + "/history")
     return resp.data   
}

const storage = history_of_clicking()

export {storage};