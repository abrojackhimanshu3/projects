import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  baseserverurl = "https://localhost:44390/api/";

  jwtHelperService = new JwtHelperService();

  registerUser(user: Array<string>)
  {
    return this.http.post
    (
      this.baseserverurl+ 'User/CreateUser',
    {
      FirstName:user[0],
      LastName:user[1],
      Email:user[2],
      Pwd:user[3],
    },
    {
      responseType:'text',
    }
  );
  }

  loginUser(loginInfo: Array<string>)
  {
    return this.http.post(this.baseserverurl+'User/LoginUser',{
      Email: loginInfo[0],
      Pwd: loginInfo[1],
    },
    {
      responseType: 'text',
    }
    );
  }

  setToken(token:string)
  {
    localStorage.setItem("access_token",token);
    this.loadCurrentUser();
  }

  loadCurrentUser()
  {
      const token = localStorage.getItem("access_token");
      const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;

      const data = userInfo ? {
        id: userInfo.id,
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        email: userInfo.email
      }: null;

      this.currentUser.next(data);
  }

  isLoggedin(): boolean {
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken()
  {
    localStorage.removeItem("access_token");
  }

  submitsurvey(sur:Array<string|number>)
  {
    return this.http.post(this.baseserverurl+ "User/surveysubmit",
    {
        Emp_id: sur[0],
        Email: sur[1],
        Attending: sur[2],
        PickupLocation:sur[3],
        PickupTime:sur[4],
    }, 
    {
      responseType: 'text'
    }
    );
  }

  getSurveyData()
  {
    return this.http.get(this.baseserverurl+"User/getSurveyData");

  }

}
