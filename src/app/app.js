import { createStore} from "redux";
import { getInputAction } from "./actions";
import { getInputReducer } from "./reducers";

export default function Main() {
    console.log('%cHello Redux!!!', 'color: orange; border:1px solid orange; padding: 5px');

    let store = createStore(getInputReducer);
    let inputEl = document.querySelector('.input-wrapper input');
    let btn = document.querySelector('.input-wrapper button');
    let msgWrapper = document.querySelector('.msg-wrapper');

    btn.addEventListener('click', (e) => {
        store.dispatch(getInputAction(inputEl.value));

        let msg = `<p>${store.getState()}</p>`;
        msgWrapper.insertAdjacentHTML('afterbegin', msg);
        console.log(`%c${store.getState()}`, 'color: orangered; border:1px solid orangered; padding: 5px');
    });
}
