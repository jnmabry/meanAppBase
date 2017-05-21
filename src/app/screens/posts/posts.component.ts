import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../app/models/posts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  allPosts;
  postForm: FormGroup;

  constructor(private _postsService: PostsService,
    private _fb: FormBuilder) { 
    this.postForm = _fb.group({
        type: [''],
        age: [''],
        color: ['']
      });
    }

ngOnInit() {
  this.getAllPosts();
}

getAllPosts() {
  this._postsService.getAllPosts()
    .then(posts => {
      this.allPosts = posts;
      console.log(posts);
      return posts;
    });
}

createPost(postObject: any) {
  this._postsService.createPost(postObject)
    .then(response => {
      console.log(response);
    });
}

getInputValue(){
  var inputValue = (<HTMLInputElement>document.getElementById("animal-type")).value;
  this.createPost(inputValue);
  console.log(inputValue);
}
}
