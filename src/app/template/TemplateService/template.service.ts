import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { JasperFile } from "../../Model/file.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class TemplateService {
  url: string = environment.templateApiUrl;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<JasperFile[]>(this.url);
  }

  getTemplateById(id: number) {
    return this.http.get<JasperFile>(this.url + id);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }

  create(
    file: File,
    name: string,
    description: string
  ): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append("file", file);
    formdata.append("name", name);
    formdata.append("description", description);
    const req = new HttpRequest("POST", this.url, formdata, {
      reportProgress: true,
      responseType: "text"
    });
    return this.http.request(req);
  }

  update(file: JasperFile) {
    return this.http.put(this.url + file.id, file);
  }
}
