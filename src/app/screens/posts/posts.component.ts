import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/models/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  allPosts;

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this._postsService.getAllPosts()
    .then( posts => {
      this.allPosts = posts;
      console.log(posts);
      return posts;
    });
  }

}
