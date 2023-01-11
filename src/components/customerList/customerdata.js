import axios from "axios";
// setTimeout(function () { 
//     window.location.reload();
//   }, 12 *1000);
const fetch_logins = async () => {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/yourbuckets")
    return res.data;
}

const logins = fetch_logins()


export { logins };