import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"]
})
export class CreatePostComponent implements OnInit {
  @Output() itemCreated = new EventEmitter<{
    id: number;
    title: string;
    body: string;
  }>();

  constructor() {}

  ngOnInit() {}

  onSubmit(submittedForm) {
    console.log(submittedForm);
    if (submittedForm.invalid) {
      return;
    }
    this.itemCreated.emit({
      id: 101,
      title: submittedForm.value.title,
      body: submittedForm.value.body
    });
  }
}
