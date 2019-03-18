import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes:any;
  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.mensajes=this.dataService.getPosts();
    console.log(this.mensajes)
    // .subscribe(posts=>{
    //   this.posts=posts
    // })
  }

  escuchaClick(id){
    console.log('Click en:',id)
  }

}
