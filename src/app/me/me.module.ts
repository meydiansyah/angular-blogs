import { environment } from './../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MeComponent } from './me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailComponent } from './detail/detail.component';
import { UserComponent } from './user/user.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MeComponent,
    children: [
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
      },
      {
        path: '',
        redirectTo: '/me/home/drafts',
        pathMatch: 'full'
      },
    ]
  },
]


@NgModule({
  declarations: [
    MeComponent,
    NavbarComponent,
    DetailComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    TextareaAutosizeModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    DatePipe
  ],
})
export class MeModule { }
