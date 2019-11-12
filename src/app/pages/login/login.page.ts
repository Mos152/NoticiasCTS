import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm: FormGroup;
  errorMessage: string = '';
  constructor(private fb:FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }
  ngOnInit() {
  }

}
