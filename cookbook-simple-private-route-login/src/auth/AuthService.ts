import { StoreManager } from "./StoreManager";
import { signInSlient } from "./MockApi";

export class AuthService extends StoreManager{

    private authenticated: boolean = false;

    async signIn(){
        this.authenticated = (await signInSlient()).data;
        console.log("sign in");
        this.notifySubscribers();
    }

    async isAuthenticated() {
        await this.signIn();
        return this.authenticated;
    }

}

const authService = new AuthService();
export default authService;