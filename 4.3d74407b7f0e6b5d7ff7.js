(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Zn4l:function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",function(){return S});var o=n("1kSV"),i=n("fXoL"),a=n("tyNb");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-home"]],decls:16,vars:0,consts:[[1,"container","mt-6"],[1,"row","align-items-center","m-0"],[1,"mb-3"],[1,"ml-auto"],["type","button","routerLink","../detail",1,"btn","btn-sm","btn-outline-dark","btn-create","border","mr-2"],["xmlns","http://www.w3.org/2000/svg","width","22","height","22","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],[1,"my-2","border-bottom"],[1,"nav"],["routerLinkActive","active","routerLink","drafts",1,"nav-link","text-decoration-none","text-dark"],["routerLinkActive","active","routerLink","published",1,"nav-link","text-decoration-none","text-dark"]],template:function(t,e){1&t&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"h1",2),i.Dc(3,"Your Stories"),i.Sb(),i.Tb(4,"div",3),i.Tb(5,"button",4),i.hc(),i.Tb(6,"svg",5),i.Pb(7,"path",6),i.Sb(),i.Dc(8," Write a story "),i.Sb(),i.Sb(),i.Sb(),i.gc(),i.Tb(9,"div",7),i.Tb(10,"nav",8),i.Tb(11,"a",9),i.Dc(12,"Drafts"),i.Sb(),i.Tb(13,"a",10),i.Dc(14,"Published"),i.Sb(),i.Sb(),i.Sb(),i.Pb(15,"router-outlet"),i.Sb())},directives:[a.c,a.e,a.d,a.g],styles:[".mt-6[_ngcontent-%COMP%]{margin-top:5rem!important}h1[_ngcontent-%COMP%]{font-size:34px!important;font-weight:400}.btn-create[_ngcontent-%COMP%]{border-radius:500px!important;padding:7px 16px 9px!important}.border-bottom[_ngcontent-%COMP%]{border-bottom:.9px solid #00000020!important}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px!important;color:#b3b3b3!important}nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#000!important;border-bottom:.9px solid #000!important}h1.muted-text[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:#b3b3b3!important;font-weight:500!important;line-height:2}textarea.title[_ngcontent-%COMP%]{font-size:34px!important;font-weight:500}textarea[_ngcontent-%COMP%]{border:none!important}textarea[_ngcontent-%COMP%]:focus{border-color:#000;box-shadow:0 0 0 .2rem #00000080}"]}),t})();var c=n("ofXK"),s=n("I/3d"),b=n("UbJi");function d(t,e){1&t&&(i.Tb(0,"div",2),i.Pb(1,"div",3),i.Tb(2,"p",4),i.Dc(3,"Please wait a second"),i.Sb(),i.Sb())}function l(t,e){1&t&&(i.Tb(0,"div",6),i.Tb(1,"div",7),i.Dc(2," Data kosong "),i.Sb(),i.Sb())}const h=function(t){return{id:t}};function p(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div",9),i.Tb(1,"div",10),i.Tb(2,"a",11),i.Tb(3,"div",12),i.Dc(4),i.Sb(),i.Tb(5,"div",13),i.Dc(6),i.Sb(),i.Sb(),i.Tb(7,"div",14),i.Tb(8,"button",15),i.ec("click",function(){i.wc(t);const n=e.$implicit;return i.ic(3).delete(n.payload.doc.id)}),i.hc(),i.Tb(9,"svg",16),i.Pb(10,"path",17),i.Pb(11,"path",18),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.gc(),i.Tb(12,"div",19),i.Dc(13),i.Sb(),i.Sb()}if(2&t){const t=e.$implicit;i.Cb(2),i.nc("queryParams",i.rc(4,h,t.payload.doc.id)),i.Cb(2),i.Fc(" ",t.payload.doc.data().title," "),i.Cb(2),i.Fc(" ",t.payload.doc.data().description," "),i.Cb(7),i.Fc(" Last edited \u2022 ",t.payload.doc.data().created_at," ")}}function g(t,e){if(1&t&&(i.Rb(0),i.Bc(1,p,14,6,"div",8),i.Qb()),2&t){const t=i.ic(2);i.Cb(1),i.nc("ngForOf",t.blogs)}}function u(t,e){if(1&t&&(i.Rb(0),i.Bc(1,l,3,0,"div",5),i.Bc(2,g,2,1,"ng-container",1),i.Qb()),2&t){const t=i.ic();i.Cb(1),i.nc("ngIf",t.isEmpty),i.Cb(1),i.nc("ngIf",!t.isEmpty)}}function m(t,e){1&t&&(i.Tb(0,"div",2),i.Pb(1,"div",3),i.Tb(2,"p",4),i.Dc(3,"Please wait a second"),i.Sb(),i.Sb())}function f(t,e){1&t&&(i.Tb(0,"div",6),i.Tb(1,"div",7),i.Dc(2," Data kosong "),i.Sb(),i.Sb())}const v=function(t){return{id:t}};function w(t,e){if(1&t){const t=i.Ub();i.Tb(0,"div",9),i.Tb(1,"div",10),i.Tb(2,"a",11),i.Tb(3,"div",12),i.Dc(4),i.Sb(),i.Tb(5,"div",13),i.Dc(6),i.Sb(),i.Sb(),i.Tb(7,"div",14),i.Tb(8,"button",15),i.ec("click",function(){i.wc(t);const n=e.$implicit;return i.ic(3).delete(n.payload.doc.id)}),i.hc(),i.Tb(9,"svg",16),i.Pb(10,"path",17),i.Pb(11,"path",18),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.gc(),i.Tb(12,"div",19),i.Dc(13),i.Sb(),i.Sb()}if(2&t){const t=e.$implicit;i.Cb(2),i.nc("queryParams",i.rc(4,v,t.payload.doc.id)),i.Cb(2),i.Fc(" ",t.payload.doc.data().title," "),i.Cb(2),i.Fc(" ",t.payload.doc.data().description," "),i.Cb(7),i.Fc(" Last edited \u2022 ",t.payload.doc.data().created_at," ")}}function x(t,e){if(1&t&&(i.Rb(0),i.Bc(1,w,14,6,"div",8),i.Qb()),2&t){const t=i.ic(2);i.Cb(1),i.nc("ngForOf",t.blogs)}}function y(t,e){if(1&t&&(i.Rb(0),i.Bc(1,f,3,0,"div",5),i.Bc(2,x,2,1,"ng-container",1),i.Qb()),2&t){const t=i.ic();i.Cb(1),i.nc("ngIf",t.isEmpty),i.Cb(1),i.nc("ngIf",!t.isEmpty)}}const C=[{path:"",component:r,children:[{path:"drafts",component:(()=>{class t{constructor(t,e,n){this.fire=t,this.auth=e,this.router=n,this.blogs={},this.dataUser=[],this.isEmpty=!0,this.loading=!0,this.checkUser()}ngOnInit(){}checkUser(){this.auth.authState.subscribe(t=>{t?this.fire.collection("user").ref.where("email","==",t.email).onSnapshot(t=>{t.forEach(t=>{this.dataUser=t.data(),this.getData()})}):this.router.navigateByUrl("/auth")})}getData(){this.fire.collection("blogs",t=>t.where("author","==",this.dataUser.username).where("status","==","drafts")).snapshotChanges().subscribe(t=>{this.blogs=t,console.log(this.blogs),this.isEmpty=0===this.blogs.length,this.loading=!1})}delete(t){var e=confirm("Yakin menghapus data ?");this.loading=!0,e?this.fire.collection("blogs").doc(t).delete().then(t=>{this.loading=!1}):this.loading=!0}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(s.a),i.Ob(b.a),i.Ob(a.b))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-drafts"]],decls:2,vars:2,consts:[["class","text-center mt-2",4,"ngIf"],[4,"ngIf"],[1,"text-center","mt-2"],["role","status",1,"spinner-grow"],[1,"muted-text"],["class","py-3 text-center",4,"ngIf"],[1,"py-3","text-center"],[1,"fw-bold","title"],["class","py-3 border-bottom",4,"ngFor","ngForOf"],[1,"py-3","border-bottom"],[1,"row","m-0"],["routerLink","../../detail",1,"text-dark",3,"queryParams"],[1,"title"],[1,"isi-text","mb-2","pr-4"],[1,"ml-auto"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"],["fill-rule","evenodd","d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"],[1,"updated-at"]],template:function(t,e){1&t&&(i.Bc(0,d,4,0,"div",0),i.Bc(1,u,3,2,"ng-container",1)),2&t&&(i.nc("ngIf",e.loading),i.Cb(1),i.nc("ngIf",!e.loading))},directives:[c.m,c.l,a.e],styles:[".title[_ngcontent-%COMP%]{font-size:16px!important;font-weight:700}.isi-text[_ngcontent-%COMP%]{font-size:14px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.updated-at[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.isi-text[_ngcontent-%COMP%], .updated-at[_ngcontent-%COMP%]{color:#b3b3b3!important}.border-bottom[_ngcontent-%COMP%]{border-bottom:.9px solid #00000020!important}"]}),t})()},{path:"published",component:(()=>{class t{constructor(t,e,n){this.fire=t,this.auth=e,this.router=n,this.blogs={},this.dataUser=[],this.isEmpty=!0,this.loading=!0,this.checkUser()}ngOnInit(){}checkUser(){this.auth.authState.subscribe(t=>{t?this.fire.collection("user").ref.where("email","==",t.email).onSnapshot(t=>{t.forEach(t=>{this.dataUser=t.data(),this.getData()})}):this.router.navigateByUrl("/auth")})}getData(){this.fire.collection("blogs",t=>t.where("author","==",this.dataUser.username).where("status","==","published")).snapshotChanges().subscribe(t=>{this.blogs=t,console.log(this.blogs),this.isEmpty=0===this.blogs.length,this.loading=!1})}delete(t){var e=confirm("Yakin menghapus data ?");this.loading=!0,e?this.fire.collection("blogs").doc(t).delete().then(t=>{this.loading=!1}):this.loading=!0}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(s.a),i.Ob(b.a),i.Ob(a.b))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-published"]],decls:2,vars:2,consts:[["class","text-center mt-2",4,"ngIf"],[4,"ngIf"],[1,"text-center","mt-2"],["role","status",1,"spinner-grow"],[1,"muted-text"],["class","py-3 text-center",4,"ngIf"],[1,"py-3","text-center"],[1,"fw-bold","title"],["class","py-3 border-bottom",4,"ngFor","ngForOf"],[1,"py-3","border-bottom"],[1,"row","m-0"],["routerLink","../../detail",1,"text-dark",3,"queryParams"],[1,"title"],[1,"isi-text","mb-2","pr-4"],[1,"ml-auto"],["type","button",1,"btn","btn-sm","btn-danger",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"],["fill-rule","evenodd","d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"],[1,"updated-at"]],template:function(t,e){1&t&&(i.Bc(0,m,4,0,"div",0),i.Bc(1,y,3,2,"ng-container",1)),2&t&&(i.nc("ngIf",e.loading),i.Cb(1),i.nc("ngIf",!e.loading))},directives:[c.m,c.l,a.e],styles:[".title[_ngcontent-%COMP%]{font-size:16px!important;font-weight:700}.isi-text[_ngcontent-%COMP%]{font-size:14px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.updated-at[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.isi-text[_ngcontent-%COMP%], .updated-at[_ngcontent-%COMP%]{color:#b3b3b3!important}.border-bottom[_ngcontent-%COMP%]{border-bottom:.9px solid #00000020!important}"]}),t})()},{path:"",redirectTo:"/me/home/drafts",pathMatch:"full"}]}];let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({imports:[[c.c,a.f.forChild(C),o.a]]}),t})()}}]);