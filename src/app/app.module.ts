import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UploaderComponent } from "./uploader/uploader.component";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomMaterialModule } from "./uploader/material.module";
import { AuthService } from "./login/auth.service";
import { AuthGuardService } from "./login/auth-guard.service";
import { AppRoutingModule } from "./app-routing.module";
import { TemplateService } from "./template/TemplateService/template.service";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  declarations: [AppComponent, LoginComponent, MenuComponent],
  providers: [AuthService, AuthGuardService, TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
