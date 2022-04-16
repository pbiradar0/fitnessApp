import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "../_models/auth-data.model";

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: any;

  constructor(private router: Router ) {

  }
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.successfullyLogin();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.successfullyLogin();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private successfullyLogin(){
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
