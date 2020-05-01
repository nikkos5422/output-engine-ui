import { Component, OnInit } from "@angular/core";
import { JasperFile } from "../Model/file.model";
import { Router } from "@angular/router";
import { TemplateService } from "../template/TemplateService/template.service";
import { AuthService } from "../login/auth.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  files: JasperFile[];

  constructor(
    private router: Router,
    private fileService: TemplateService,
    private authService: AuthService
  ) {}

  addFile(): void {
    this.router.navigate(["/template/addfile"]);
  }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.fileService.getAll().subscribe(data => {
      this.files = data;
    });
  }

  logout() {
    this.authService.setLoggedIn(false);
    this.router.navigate(["login"]);
  }
}
