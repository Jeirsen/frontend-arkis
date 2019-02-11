import { Component, OnInit } from "@angular/core";
import { PostsService } from "../posts.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-post",
  templateUrl: "./detail-post.component.html",
  styleUrls: ["./detail-post.component.css"]
})
export class DetailPostComponent implements OnInit {
  post;
  activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute, private pService: PostsService) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getSinglePost(params.id);
    });
  }

  getSinglePost(id) {
    this.pService.getPost(id).subscribe(
      response => {
        console.log(response);
        this.post = response.post;
      },
      error => {
        console.log(error);
      }
    );
  }
}
