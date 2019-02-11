import { Component } from "@angular/core";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts = [];

  constructor(private pService: PostsService) {
    this.fetchPosts();
  }

  fetchPosts() {
    this.pService.fetchPosts().subscribe(
      response => {
        this.posts = response.posts.slice(0, 10);
      },
      error => {
        console.log(error);
      }
    );
  }

  onItemAdded(newItem) {
    console.log(newItem);
    const pos = this.posts.findIndex(post => {
      return post.title === newItem.title;
    });

    if (pos !== -1) {
      return;
    }
    const newPost = {
      id: newItem.id,
      title: newItem.title,
      body: newItem.body
    };

    this.pService.createPost(newPost).subscribe(
      response => {
        this.posts.push(newPost);
      },
      error => {
        console.log(error);
      }
    );
  }
}
