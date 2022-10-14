import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private authservice: AuthService,private router: Router,private http: HttpClient) { }

  surveydata: any;

  ngOnInit(): void {
    this.authservice.getSurveyData().pipe(
      tap(result => {
        console.log(result);
        this.surveydata = result;
      },)

    ).subscribe();
  }

  

  logOut()
  {
    this.router.navigateByUrl("/admin");
  }
  

}
