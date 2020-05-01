import { Router } from "@angular/router";
import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Subscription } from "rxjs";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnDestroy {
  invalidCredentialMsg: string;
  private authSubs$: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  validateCredentials() {
    let username = this.loginForm.get("username").value;
    let pswd = this.loginForm.get("password").value;

    this.authSubs$ = this.authService
      .authenticateUser(username, pswd)
      .subscribe(authenticated => {
        if (authenticated) {
          const url = this.authService.getRedirectUrl();
          this.router.navigate([url]);
        } else {
          this.invalidCredentialMsg = "Invalid Credentials. Try again.";
        }
      });
  }

  ngOnDestroy(): void {
    if (this.authSubs$) {
      this.authSubs$.unsubscribe();
    }
  }
}
