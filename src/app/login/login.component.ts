import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  model: any = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   document.body.classList.add('test');
   
  }

  ngOnDestroy(){

    document.body.classList.remove('test');

  }


  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
