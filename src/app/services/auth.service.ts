export class AuthService {

  // by default false = user not authentificated
  isAuth = false;

  // sign in and return true
  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  // sign out and return false
  signOut() {
    this.isAuth = false;
  }
}