import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditFileComponent } from "./edit-template/edit-file.component";
import { AuthGuardService } from "../login/auth-guard.service";
import { UploaderComponent } from "../uploader/uploader.component";
import { TemplateListComponent } from "./template-list/template-list.component";

const templateRoutes: Routes = [
  {
    path: "",
    component: TemplateListComponent
  },
  {
    path: "addfile",
    // canActivate: [AuthGuardService],
    component: UploaderComponent
  },
  {
    path: ":file_id",
    // canActivate: [AuthGuardService],
    component: EditFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(templateRoutes)],
  exports: [RouterModule]
})
export class FilesRoutingModule {}
