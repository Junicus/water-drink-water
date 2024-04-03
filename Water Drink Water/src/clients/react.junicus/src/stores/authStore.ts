import {makeAutoObservable, reaction, runInAction} from "mobx";

export default class AuthStore {
    token: string | null = window.localStorage.getItem('jwt');
    appLoaded: boolean = false;

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.token,
            (token) => {
                if (token) {
                    window.localStorage.setItem('jwt', token);
                } else {
                    window.localStorage.removeItem('jwt')
                }
            }
        )
    }

    setAppLoaded = () => {
        runInAction(() => {
            this.appLoaded = true;
        })
    }

    setToken = (token: string | null) => {
        runInAction(() => {
            this.token = token;
        })
    }
}