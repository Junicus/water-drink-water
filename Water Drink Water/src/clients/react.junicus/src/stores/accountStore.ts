import { makeAutoObservable, runInAction } from "mobx";
import { CurrentUser, UserLogin } from "lib/types";
import agent from "api/agent.ts";
import { store } from "./store.ts";
import router from "router";

export default class AccountStore {
  currentUser: CurrentUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.currentUser;
  }

  login = async (creds: UserLogin) => {
    try {
      const response = await agent.Account.login(creds);
      // if (!response.succeeded) throw new Error(response.messages[0])
      store.authStore.setToken(response.token);
      // const user = await agent.Account.current();
      runInAction(() => (this.currentUser = { firstName: creds.email }));
      router.navigate("/wdw");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getCurrentUser = async () => {
    try {
      runInAction(() => {});
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
