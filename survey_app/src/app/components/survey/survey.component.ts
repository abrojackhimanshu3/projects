import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  displayMsg: string ='';
  isSurveySubmitted: boolean =false;

  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  surveyForm = new FormGroup(
    {
      Emp_id: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      attending: new FormControl(),
      pickuploc: new FormControl(),
      pickuptime: new FormControl()
    }
  );

 surveySubmit()
  {
    this.authservice.submitsurvey([
      this.surveyForm.value.Emp_id,
      this.surveyForm.value.email,
      this.surveyForm.value.attending,
      this.surveyForm.value.pickuploc,
      this.surveyForm.value.pickuptime
    ]).subscribe(res => {
      if (res == 'Sucessfully submitted')
      {
        this.displayMsg = 'Thank you for completing your survey!';
        this.isSurveySubmitted = true;
      }
      else if (res == 'Already submitted')
      {
        this.displayMsg = 'You have Already Completed your Survey!';
        this.isSurveySubmitted = false;
      }
      else 
      {
          this.displayMsg = 'Something went Wrong!';
          this.isSurveySubmitted = false;
      }
    });
    
  }

  logOut()
  {
    this.authservice.removeToken();
    this.router.navigateByUrl("/login");
  }

  get EmpId(): FormControl
{
  return this.surveyForm.get("Emp_id") as FormControl;
}

get Email(): FormControl
{
  return this.surveyForm.get("email") as FormControl;
}

}
