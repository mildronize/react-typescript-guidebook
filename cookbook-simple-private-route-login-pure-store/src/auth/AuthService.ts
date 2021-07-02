import createStore from "pure-store";
import { signInSlient } from "./MockApi";

export const store = createStore({
  authenticated: false
});

export const signIn = async (username: string, password: string) => {
  if (!store.state.authenticated) {
    const authenticated = (await signInSlient({ username, password })).data;
    store.update(s => {
      s.authenticated = authenticated;
    });
    return authenticated;
  }
  return false;
}

export const signOut = () => {
  store.update(s => {
    s.authenticated = false;
  });
}