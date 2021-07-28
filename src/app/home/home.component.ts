import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogs: any = {}

  isEmpty: boolean = true;
  loading: boolean = true;

  constructor(
    private fire: AngularFirestore,
  ) {
    this.getData();
   }

  ngOnInit(): void {
  }

  getData() {
    this.fire.collection('blogs', ref => ref.where('status', '==', 'published')).snapshotChanges().subscribe((resp) => {
      this.blogs = resp
      if (this.blogs.length === 0) this.isEmpty = true;
      else this.isEmpty = false;
      this.loading = false;
    })
  }
}
