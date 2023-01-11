import axios from "axios";

const fetch_logins = async () => {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/yourbuckets")
    return res.data;
}

const logins = fetch_logins()

export { logins };