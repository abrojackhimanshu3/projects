import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loginAuth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  AdminForm = new FormGroup(

    {
  
      email: new FormControl("",[Validators.required, Validators.email]),
  
      pwd: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),

    });

    isUserValid: boolean =false;



  loginsubmitted()

  {

    this.loginAuth.loginUser([this.AdminForm.value.email, this.AdminForm.value.pwd])

    .subscribe( res => {

      if (res == 'Failure')

      {

        this.isUserValid = false;

        alert ('Login Unsuccessful');

      }

      else

      {

        this.isUserValid =true;

        this.loginAuth.setToken(res);

        this.router.navigateByUrl('survey')

      }

    });

  } 
  
  get Email(): FormControl

  {

    return this.AdminForm.get('email') as FormControl;

  }

  get Pwd(): FormControl

  {

    return this.AdminForm.get('pwd') as FormControl;

  }

  onlogin(){

    console.log(this.AdminForm.value);

    if("admin@admin.com"===this.AdminForm.value.email && "admin#admin.com"===this.AdminForm.value.pwd){

      this.router.navigate(["/AdminPanel"]);

    }


  }

  
 

}
