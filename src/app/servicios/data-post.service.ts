import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPostService {

  //1. variableurl
  urlJSON="https://jsonplaceholder.typicode.com/posts";
  nombreAPP="Bienvenido a la Aplicacion de interceptores-CERTUS";
  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get<any>(this.urlJSON);
  }
}
