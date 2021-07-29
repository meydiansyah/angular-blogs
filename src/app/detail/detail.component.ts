import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  imgSrc: string = "";
  data: any = {};
  dataUser: any = {};
  listParagraph: any = {};
  loading: boolean = true;

  constructor(
    private fire: AngularFirestore,
    route: ActivatedRoute,
  ) { 
    this.getData(route.snapshot.queryParams.id);
  }

  ngOnInit(): void {

  }

  getData(id: string) {
    this.fire.collection('blogs').doc(id).get().subscribe((resp) => {
      this.data = resp.data();
      this.listParagraph = this.data.paragraph;
      this.imgSrc = this.data.image_url;
      this.loading = false;
    })
  }

  

}
