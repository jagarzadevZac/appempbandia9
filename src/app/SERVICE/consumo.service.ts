import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ConsumoService {

  private readonly URI = 'https://empresarialappdemo.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get<userInterface>(this.URI+'user/list');
  }


  addUser(user:userInterface){
    console.log("service->",user);
    return this.httpClient.post<userInterface>(this.URI+'user/create',user);
  }
  
  deleteUser(id:number){
    return this.httpClient.delete(this.URI+'user/delete/'+id);
  }

  getDetailById(id:number){
    return this.httpClient.get<userInterface>(this.URI+'user/detail/'+id);
  }

  udpateUser(id:number,user:userInterface){
    return this.httpClient.put(this.URI+'user/update/'+id,user);
  }

 /*  upload(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('files', file);
   
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  } */
}


export interface userInterface{
 
  brm?: String,
  foto?: String,
  nombre?: String,
  puesto?: String,
  id?: number,
}

export interface userInterfaceFetch{
 
  brm?: String,
  puesto?: String,
  id?: number,
  nombre?: String,
  foto?: String,
  results?: Result[]
}


export interface Result{
  name: String;
  url:String;
}

export interface user{
  brm: String;
  puesto: String;
  id: number;
  nombre: String;
  foto: String;
}
