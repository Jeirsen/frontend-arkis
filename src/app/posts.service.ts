import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}
  fetchPosts() {
    return this.http.get("https://arkis-api.herokuapp.com/posts");
  }

  getPost(id) {
    return this.http.get(`https://arkis-api.herokuapp.com/posts/${id}`);
  }

  createPost(newPost) {
    return this.http.post("https://arkis-api.herokuapp.com/posts/", newPost);
  }
}
