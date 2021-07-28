import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { finalize } from "rxjs/operators";


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
  publish: boolean = false;

  now: number = Date.now();
  idBlogs?: string;

  imgSrc?: string;
  imgUrl?: string;
  selectedImage?: string;

  constructor(
    private fire: AngularFirestore,
    private router: Router,
    private auth: AngularFireAuth,
    private datePipe: DatePipe,
    private storage: AngularFireStorage,
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

  getImage(url: any) {
    if(url.target.files && url.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (u: any) => this.imgSrc = u.target.result;
      reader.readAsDataURL(url.target.files[0]);
      this.selectedImage! = url.target.files[0];
      this.imgUrl = url.target.files[0]['name'];
    } else {
      this.imgSrc!;
      this.imgUrl!;
      this.selectedImage!;
    }
  }

  getData() {
    if(this.idBlogs != null) {
      this.fire.collection('blogs').doc(this.idBlogs).get().subscribe((resp) => {
        this.data = resp.data();
        this.listParagraph = this.data.paragraph;
        this.imgSrc = this.data.image_url;
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

  tapPublished() {
    this.publish = true;
  }

  saveForm() {
    this.loading = true;
    this.data['created_at'] = this.datePipe.transform(this.now, 'MMM d, y, h:mm:ss a');
    
    this.data['paragraph'] = this.listParagraph;
    this.data['author'] = this.dataUser.username;
    this.data['status'] = this.publish ? 'published' : 'drafts';
    
    if(this.imgUrl == null) {
      this.fire.collection('blogs').doc(this.idBlogs).update(this.data).then((resp) => {
        this.loading = false;
        this.router.navigateByUrl('/me');
      })
    } else {
      var filePath = `blogs/${this.imgUrl.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      var fileRef = this.storage.ref(filePath);

      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (
          fileRef.getDownloadURL().subscribe((url) => {
            this.data['image_url'] = url;

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

            this.loading = false;
          })
        ))
      ).subscribe()

    }
  }
}
