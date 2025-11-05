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
  IsLogin:boolean=true;

 loginData = {
    email: '',
    password: ''
  };
 @Input() isList:boolean=false;
  constructor(private svc:AuthService,private router: Router) {    }  //DI

  onSubmit() {

     let isValidUser=this.svc.validate(this.loginData.email,this.loginData.password);

     if(isValidUser){
            this.router.navigate(['/app-list']);
            this.IsLogin=false;
     }else{
     alert('Invalid credentials.');
     }
     
  }
}