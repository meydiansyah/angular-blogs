import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftsComponent } from './drafts/drafts.component';
import { PublishedComponent } from './published/published.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'drafts',
        component: DraftsComponent
      },
      {
        path: 'published',
        component: PublishedComponent,
      },
      {
        path: '',
        redirectTo: '/me/home/drafts',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    DraftsComponent,
    PublishedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class HomeModule { }
