import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit {
  
  showRegistration = false;
  
  loginForm: FormGroup;
  signupForm: FormGroup;
  
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private service: ApiService,
  
  ) { }



  ngOnInit() {
    this.initLoginForm();

  }

  initLoginForm() {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    })
  }
  initRegForm() {
    this.signupForm = this.formbuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      userId: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    })
  }

  showRegBtnFn(){
    this.showRegistration = true;
    this.initRegForm();
  }

  loginBtn(){
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe(resData => {
      console.log("Login success...");
      this.router.navigate(['/dashboard'])
    })
  }
  signupBtn(){
    console.log(this.signupForm.value);
    if(this.signupForm.value.password != this.signupForm.value.confirmPassword){
      alert("Password not matched");
      return;
    }
    this.service.signup(this.loginForm.value).subscribe(resData => {
      console.log("Registration success...");
      alert("Your account created successfully.. Please login..")
      this.cancelReg();
    })
  }

  cancelReg(){
    this.initLoginForm();
    this.showRegistration = false;
  }
}
