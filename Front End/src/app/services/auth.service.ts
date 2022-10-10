import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseserverurl = "https://localhost:44390/api/";

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

}
