import { createContext, useContext } from "react";
import AuthStore from "./authStore";
import AccountStore from "./accountStore";

interface Store {
  authStore: AuthStore;
  accountStore: AccountStore;
}

export const store: Store = {
  authStore: new AuthStore(),
  accountStore: new AccountStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
