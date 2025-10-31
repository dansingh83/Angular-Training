import { Component, Input, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export class Credential  {
  constructor(public  email:string,public  password:string){  }
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

 

export class SignInComponent {

  isValidUser:boolean=false;

 loginData = {
    email: '',
    password: ''
  };
 @Input() isList:boolean=false;
  constructor(private svc:AuthService,private router: Router) {    }  //DI

  onSubmit() {
    console.log(this.loginData);
    debugger;
    
    // Example login logic
    if (this.loginData.email === 'dan.singh@nihilent.com' && this.loginData.password === 'abc123') {
      this.isList=true;
      alert('Login successful!');
    } else {
      alert('Invalid credentials.');
    }
  }
}