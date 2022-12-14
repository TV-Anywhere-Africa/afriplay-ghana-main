import axios from "axios";
import { refresh_token } from "../GLOBAL/constants/refreshToken";
import { processLog } from "../GLOBAL/logger";

let index = 0

const interceptResponse = () => {

    index += 1
    processLog("refreshing token", index)

    // refresh_token()

    axios.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        if (error.response.status === 401) await refresh_token()
        return Promise.reject(error);
    });
}

export default interceptResponse