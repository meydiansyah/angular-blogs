import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../me.component.scss']
})
export class DetailComponent implements OnInit {

  listParagraph: string[] = [];
  data: any = {};
  dataUser: any = {};
  
  showParagraph: boolean = false;
  loading: boolean = true;

  now: number = Date.now();
  idBlogs?: string;

  constructor(
    private fire: AngularFirestore,
    private router: Router,
    private auth: AngularFireAuth,
    private datePipe: DatePipe,
    route: ActivatedRoute
  ) { 
    this.checkUser();
    this.idBlogs = route.snapshot.queryParams.id;
    this.getData(); 
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
          })
        })
      }
    })
  }

  addParagraph() {
   this.showParagraph = true; 
  }

  getData() {
    if(this.idBlogs != null) {
      this.fire.collection('blogs').doc(this.idBlogs).get().subscribe((resp) => {
        this.data = resp.data();
        this.listParagraph = this.data.paragraph;
        this.loading = false;
      })
    } else this.loading = false;

  }

  saveParagraph(arg: any) {
    this.listParagraph.push(arg.target.value);
    this.showParagraph = false;
  }

  changeListParagraph(arg: any, index: any) {
    this.listParagraph[index] = arg.target.value;
  }

  saveForm() {
    this.loading = true;
    this.data['created_at'] = this.datePipe.transform(this.now, 'MMM d, y, h:mm:ss a');
    
    this.data['paragraph'] = this.listParagraph;
    this.data['author'] = this.dataUser.username;
    
    if(this.idBlogs == null) {
      this.fire.collection('blogs').add(this.data).then((resp) => {
        this.loading = false;
        this.router.navigateByUrl('/me');
      });
    } else {
      this.fire.collection('blogs').doc(this.idBlogs).update(this.data).then((resp) => {
        this.loading = false;
        this.router.navigateByUrl('/me');
      })
    }
  }

}
