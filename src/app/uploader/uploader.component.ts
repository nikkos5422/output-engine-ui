import { Component, OnInit } from "@angular/core";
import { TemplateService } from "../template/TemplateService/template.service";
import { HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"]
})
export class UploaderComponent implements OnInit {
  selectedFiles: FileList;
  description: string;

  currentFile: File;
  files: Array<any>;
  name: string;
  constructor(private router: Router, private fileService: TemplateService) {}

  setFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFile = this.selectedFiles.item(0);

    if (this.currentFile.size < environment.permittedFileSize) {
      this.fileService
        .create(this.currentFile, this.name, this.description)
        .subscribe(event => {
          if (event instanceof HttpResponse) {
            this.refreshList();
            this.router.navigate([""]);
          }
        });
    }
    this.selectedFiles = undefined;
  }

  ngOnInit(): void {}

  refreshList() {
    this.fileService.getAll().subscribe(data => {
      this.files = data;
    });
  }

  isValid() {
    if (
      this.selectedFiles.length &&
      this.selectedFiles.item(0).size > environment.permittedFileSize
    ) {
      return false;
    } else {
      return true;
    }
  }
}
