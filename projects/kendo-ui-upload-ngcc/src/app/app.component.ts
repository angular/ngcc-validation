import { Component, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpProgressEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FileRestrictions, FileInfo } from '@progress/kendo-angular-upload';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  public myRestrictions: FileRestrictions = {
    allowedExtensions: ['jpg', 'jpeg', 'png']
  };

  public userName: string;
  public userImages: Array<FileInfo> = [];

  public myForm: FormGroup;
  public submitted = false;

  saveTemplateForm(form: any) {
    console.log(form);
  }

  saveReactiveForm(form: any) {
    this.submitted = true;
    console.log(form);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      uName: [this.userName, [Validators.required, Validators.minLength(4)]],
      myUpload: [this.userImages, [Validators.required]]
    });

    this.myForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(_data?: any) {
    // handle model changes
  }
}

@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'saveUrl') {
      const events: Observable<HttpEvent<any>>[] = [0, 30, 60, 100].map((x) => of(<HttpProgressEvent>{
        type: HttpEventType.UploadProgress,
        loaded: x,
        total: 100
      }).pipe(delay(1000)));

      const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
      events.push(success);

      return concat(...events);
    }

    if (req.url === 'removeUrl') {
        return of(new HttpResponse({ status: 200 }));
    }

    return next.handle(req);
  }
}
