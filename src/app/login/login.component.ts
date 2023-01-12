import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  get f(){
    return this.loginForm.controls;
  }
  seConnecter(e: any){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    let isConnected = this.authService.signIn(this.loginForm.value);
    this.router.navigate(['dashboard']);
  }

}



