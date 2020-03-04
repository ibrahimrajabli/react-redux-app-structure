import {createStore} from "redux";
import reducers from "./index"

export default function configStore() {
    return createStore(reducers);
}
