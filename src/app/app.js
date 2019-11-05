import { createStore} from "redux";
import { getInputAction } from "./actions";
import { getInputReducer } from "./reducers";

export default function Main() {
    console.log('%cHello Redux!!!', 'color: orange; border:1px solid orange; padding: 5px');

    let store = createStore(getInputReducer);

    store.dispatch(getInputAction('Kis cica fasza!!!'));

    console.log(`%c${store.getState()}`, 'color: orangered; border:1px solid orangered; padding: 5px');
}
