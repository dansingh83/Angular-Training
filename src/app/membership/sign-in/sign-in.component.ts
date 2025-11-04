import { Component, Input, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ListComponent } from '../../catalog/products/list/list.component';


export class Credential  {
  constructor(public  email:string,public  password:string){  }
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule,ListComponent],
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
    if (this.loginData.email === 'dan' && this.loginData.password === 'abc') {
      this.isList=true;
      this.router.navigate(['/app-list']);
      
    } else {
      alert('Invalid credentials.');
    }
  }
}