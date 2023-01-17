import { Component, OnInit } from '@angular/core';
import { DataPostService } from 'src/app/servicios/data-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  tituloApp!:string
  constructor( private datapost:DataPostService){}
  ngOnInit(): void {
    this.tituloApp=this.datapost.nombreAPP;
  }
}
