import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./login/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuardService],
    redirectTo: "template",
    pathMatch: "full"
  },
  {
    path: "template",
    canActivate: [AuthGuardService],
    loadChildren: "./template/template.module#TemplateModule"
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
