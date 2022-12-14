import axios from "axios";
import Cookies from "universal-cookie";
import { processLog } from "../logger";
const cookies = new Cookies();

export const refresh_token = async () => {
  const refresh_token_result = await axios.post(
    "https://ott.tvanywhereafrica.com:28182/api/client/v1/global/refresh",
    {
      refresh_token: cookies.get("user_info").data.data.refresh_token
    }
  );
  cookies.set("user_info", refresh_token_result, { path: "/" });
  processLog("new token generated", refresh_token_result)
  // window.location.reload();
  // window.location.href = window.location.href;
};