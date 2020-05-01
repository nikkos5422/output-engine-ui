import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService {
  private redirectUrl: string = "/";
  private loginUrl: string = "/login";
  private isloggedIn: boolean = false;

  url: string = environment.authApiUrl;

  constructor(private http: HttpClient) {}

  authenticateUser(username: string, password: string): Observable<boolean> {
    return this.http
      .post<boolean>(this.url, {
        username: username,
        password: password
      })
      .pipe(tap(result => (this.isloggedIn = result)));
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  setLoggedIn(value: boolean) {
    this.isloggedIn = value;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  getLoginUrl(): string {
    return this.loginUrl;
  }
}
