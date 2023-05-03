import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { WigoconfigsService } from 'src/app/shared-services/wigoconfigs.service';
import { FormBuilder, FormGroup } from '@angular/forms';


const options = {
  responseType: 'json' as const,
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  })
};
const optionsPost = {
  responseType: 'json' as const,
  
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    
    
  })
};


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  jsonObject: JSON;
  private json: any = {};
  arrayObj: any = {};
  wigoserv: WigoconfigsService;
  constructor(private http: HttpClient, configservice: WigoconfigsService ) { 
    this.jsonObject = <JSON>this.arrayObj;
    
    this.wigoserv = configservice;

  }

  
  
getLoginType(email: string){
  const url = "http://localhost:8082/loginType/" + this.wigoserv.getMicrotken() + "/" + email;
  this.http.get(url).subscribe((res)=>{
    this.json = res
    console.log("Dumping this.json ====> ", this.json, " === Json success == ", this.json.success);
  });
  return this.http.get(url,options);
}

getHostedJson()
{
  return this.json;
}
  postToLogin(email: string, pwd: string, companytoken: string) : Observable<any>
  {
    
    var formData: any = new FormData();
    console.log(" microtoken ==> ", this.wigoserv.getMicrotken());
    formData.append("microtoken", this.wigoserv.getMicrotken());
    formData.append("loggeduser",1);
    formData.append("companytoken",companytoken);
    formData.append("email",email);
    formData.append("pwd",pwd);
    const url = "http://localhost:8082/userLogin";
    return this.http.post(url,formData,optionsPost);
  }
}
