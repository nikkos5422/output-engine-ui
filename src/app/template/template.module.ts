import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilesRoutingModule } from "./template-routing.module";
import { EditFileComponent } from "./edit-template/edit-file.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule } from "@angular/material";
import { CustomMaterialModule } from "../uploader/material.module";
import { UploaderComponent } from "../uploader/uploader.component";
import { RouterModule } from "@angular/router";
import { TemplateListComponent } from "./template-list/template-list.component";

@NgModule({
  declarations: [EditFileComponent, UploaderComponent, TemplateListComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class TemplateModule {}
