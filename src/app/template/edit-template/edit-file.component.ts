import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TemplateService } from "../TemplateService/template.service";
import { JasperFile } from "../../Model/file.model";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-edit-file",
  templateUrl: "./edit-file.component.html",
  styleUrls: ["./edit-file.component.scss"]
})
export class EditFileComponent implements OnInit {
  file: JasperFile;
  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fileService: TemplateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(paramMap =>
          this.fileService.getTemplateById(+paramMap.get("file_id"))
        )
      )
      .subscribe(data => {
        this.editForm.setValue(data);
      });

    this.editForm = this.formBuilder.group({
      id: [],
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  editFile() {
    this.fileService.update(this.editForm.value).subscribe(
      () => {
        this.router.navigate(["template"]);
      },
      error => {
        alert(error);
      }
    );
  }
}
