import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {
  blogs: any = {}
  dataUser: any = []

  isEmpty: boolean = true;
  loading: boolean = true;

  constructor(
    private fire: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router
  ) { 
    this.checkUser();
  }

  ngOnInit(): void {
  }


  checkUser() {
    this.auth.authState.subscribe(resp => {
      if (!resp) {
        this.router.navigateByUrl('/auth')
      } else {
        this.fire.collection('user').ref.where('email', '==', resp!.email).onSnapshot(snapshot => {
          snapshot.forEach(ref => {
            this.dataUser = ref.data();

            this.getData();
          })
        })
      }
    })
  }

  getData() {
    this.fire.collection('blogs', ref => ref.where('author', '==', this.dataUser.username)).snapshotChanges().subscribe((resp) => {
      this.blogs = resp
      if (this.blogs.length === 0) this.isEmpty = true;
      else this.isEmpty = false;
      this.loading = false;
    })
  }

  delete(id: any) {
    var _confirm = confirm("Yakin menghapus data ?");

    this.loading = true;
    
    if(_confirm) {
      this.fire
      .collection("blogs")
      .doc(id)
      .delete().then(mod => {
        this.loading = false;
      });
    } else {
      this.loading = true;
    }
  }



}
