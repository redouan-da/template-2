(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[51],{7051:(e,t,a)=>{"use strict";a.r(t),a.d(t,{FollowersModule:()=>T,routes:()=>v});var i=a(1116),o=a(3464),r=a(7666),s=a(9282),n=a(9007),l=a(5366),g=a(2935),m=a(2797),d=a(5965),c=a(6278),p=a(4369),u=a(4311),f=a(7307),Z=a(9459);function w(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"div",9),l.TgZ(1,"div",10),l._UZ(2,"img",11),l.qZA(),l.TgZ(3,"div",12),l._uU(4),l.qZA(),l.TgZ(5,"div",12),l._uU(6),l.ALo(7,"filterById"),l.qZA(),l.TgZ(8,"div",12),l.TgZ(9,"div",13),l.TgZ(10,"button",14),l.NdJ("click",function(){const t=l.CHM(e).$implicit;return l.oxw().remove(t)}),l.TgZ(11,"mat-icon"),l._uU(12,"delete"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=t.$implicit,a=l.oxw();let i;l.xp6(2),l.Q6J("src",e.image,l.LSH),l.xp6(2),l.Oqu(e.name),l.xp6(2),l.Oqu(null==(i=l.xi3(7,3,a.stores,e.storeId))?null:i.name)}}function h(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"div",15),l.TgZ(1,"div",16),l.TgZ(2,"mat-card",17),l.TgZ(3,"pagination-controls",18),l.NdJ("pageChange",function(t){return l.CHM(e),l.oxw().onPageChanged(t)}),l.qZA(),l.qZA(),l.qZA(),l.qZA()}}const A=function(e,t){return{itemsPerPage:e,currentPage:t}},v=[{path:"",component:(()=>{class e{constructor(e){this.dialog=e,this.followers=[{id:1,image:"assets/images/profile/michael.jpg",name:"Michael Blair",storeId:1},{id:2,image:"assets/images/profile/tereza.jpg",name:"Tereza Stiles",storeId:2},{id:3,image:"assets/images/profile/adam.jpg",name:"Adam Sandler",storeId:1},{id:4,image:"assets/images/profile/julia.jpg",name:"Julia Aniston",storeId:2},{id:5,image:"assets/images/profile/bruno.jpg",name:"Bruno Vespa",storeId:2},{id:6,image:"assets/images/profile/ashley.jpg",name:"Ashley Ahlberg",storeId:1},{id:7,image:"assets/images/avatars/avatar-5.png",name:"Michelle Ormond",storeId:1}],this.stores=[{id:1,name:"Store 1"},{id:2,name:"Store 2"}],this.count=6}ngOnInit(){}onPageChanged(e){this.page=e,window.scrollTo(0,0)}remove(e){this.dialog.open(n.$,{maxWidth:"400px",data:{title:"Confirm Action",message:"Are you sure you want remove this follower?"}}).afterClosed().subscribe(t=>{if(t){const t=this.followers.indexOf(e);-1!==t&&this.followers.splice(t,1)}})}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(g.uw))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-followers"]],decls:18,vars:8,consts:[[1,"p-1"],[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-2"],[1,"mat-table","admin-table"],[1,"mat-header-row"],[1,"mat-header-cell","image"],[1,"mat-header-cell"],["class","mat-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],[1,"mat-row"],[1,"mat-cell","image"],["alt","","width","50",3,"src"],[1,"mat-cell"],[1,"p-1","actions"],["mat-mini-fab","","color","warn","matTooltip","Delete",1,"mx-1",3,"click"],["fxLayout","row wrap"],["fxFlex","100"],[1,"p-0","text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"mat-card",1),l.TgZ(2,"div",2),l.TgZ(3,"h2"),l._uU(4,"Followers List"),l.qZA(),l.qZA(),l._UZ(5,"mat-divider"),l.TgZ(6,"div",3),l.TgZ(7,"div",4),l.TgZ(8,"div",5),l._uU(9,"Image"),l.qZA(),l.TgZ(10,"div",6),l._uU(11,"Name"),l.qZA(),l.TgZ(12,"div",6),l._uU(13,"Store"),l.qZA(),l._UZ(14,"div",6),l.qZA(),l.YNc(15,w,13,6,"div",7),l.ALo(16,"paginate"),l.qZA(),l.qZA(),l.YNc(17,h,4,0,"div",8),l.qZA()),2&e&&(l.xp6(15),l.Q6J("ngForOf",l.xi3(16,2,t.followers,l.WLB(5,A,t.count,t.page))),l.xp6(2),l.Q6J("ngIf",t.followers.length>0))},directives:[m.a8,d.xw,d.Wh,c.d,i.sg,i.O5,p.lW,u.gM,f.Hw,d.yH,s.LS],pipes:[s._s,Z.H],styles:[""]}),e})(),pathMatch:"full"}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez,o.Bz.forChild(v),r.m,s.JX]]}),e})()},9459:(e,t,a)=>{"use strict";a.d(t,{H:()=>o});var i=a(5366);let o=(()=>{class e{transform(e,t){return e.filter(e=>e.id==t)[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.Yjl({name:"filterById",type:e,pure:!0}),e})()}}]);