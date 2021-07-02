import { StoreManager } from "./StoreManager";
import { signInSlient } from "./MockApi";

export class AuthService extends StoreManager {

  private authenticated: boolean = false;

  async signIn(username: string, password: string) {
    if (!this.authenticated) {
      this.authenticated = (await signInSlient({ username, password})).data;
      this.notifySubscribers();

      return this.authenticated;
    }
  }

  async isAuthenticated() {
    return this.authenticated;
  }

  signOut(){
    this.authenticated = false;
    this.notifySubscribers();
  }

}

const authService = new AuthService();
export default authService;
