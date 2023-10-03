import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comentarios : any;
  constructor(
    public comment: CommentsService,
  ) { }

  ngOnInit(): void {
    this.getAllComments()
  }

   getAllComments(){
    // Obtener documtos
    this.comment.getComments().subscribe(data => {
      this.comentarios = data;
      console.log(this.comentarios);
    });
  }

}
