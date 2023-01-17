import { Component, OnInit } from '@angular/core';
import { DataPostService } from 'src/app/servicios/data-post.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
//1.variable
  listaPost:any=[];
//2.constructor
constructor(private datapost:DataPostService){}

ngOnInit():void{
}
//3. funcion
getPost(){
  this.datapost.getPost().subscribe(
    res=>{ 
      this.listaPost=res
     },
    error=>{}
  )
}
}
