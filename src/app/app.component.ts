import { Component } from "@angular/core";
import { AuthService } from "./login/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isLoggeded() {
    return this.authService.isUserLoggedIn();
  }
}
