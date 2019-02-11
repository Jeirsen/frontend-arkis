import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PostListComponent } from "./post-list/post-list.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { PostsService } from "./posts.service";
import { CardItemComponent } from "./card-item/card-item.component";
import { DetailPostComponent } from "./detail-post/detail-post.component";

const routes = [
  { path: "posts", component: PostListComponent },
  { path: "detail-post/:id", component: DetailPostComponent },
  { path: "**", redirectTo: "/" }
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    CreatePostComponent,
    CardItemComponent,
    DetailPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
