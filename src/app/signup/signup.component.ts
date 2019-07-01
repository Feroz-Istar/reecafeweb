import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AppConstant } from '../appconstant';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  isprofileupload: Boolean;
  public cof: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: AppConstant.Server + 'file/upload',
    acceptedFiles: 'image/*',
    maxFiles: 1,
    clickable: ".uploadprofile",
    previewsContainer: "#previews", // Define the container to display the previews
    previewTemplate: '<div class="preview"><img class="mb-4" data-dz-thumbnail height="60" width="60"/>  <button aria-hidden="true" (click)="removePic()">&times;</button></div>     ',
    init: function () {
      this.on("addedfile", function (event) {
        while (this.files.length > this.options.maxFiles) {
          this.removeFile(this.files[0]);
        }
      });
    }

  };
  constructor() { }

  ngOnInit() {
    this.isprofileupload = false;
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  onUploadError($event) {
    console.log($event)
    this.isprofileupload = false;

  }

  onUploadSuccess($event) {
    console.log($event)
    this.isprofileupload = true;

  }
  removePic() {
    console.log('sss')

    this.isprofileupload = false;

  }
}
