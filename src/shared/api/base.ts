import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";
import { DEFAULT_URL } from "shared/constants/main";


export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})