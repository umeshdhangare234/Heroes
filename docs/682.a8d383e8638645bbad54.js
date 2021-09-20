"use strict";(self.webpackChunkheroes=self.webpackChunkheroes||[]).push([[682],{682:(z,C,s)=>{s.r(C),s.d(C,{CrisisCenterModule:()=>k});var l=s(583),u=s(665),c=s(482),e=s(639);let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-crisis-center-home"]],decls:2,vars:0,template:function(i,r){1&i&&(e.TgZ(0,"h3"),e._uU(1,"Welcome to the Crisis Center"),e.qZA())},styles:[""]}),t})();var g=s(190);const f=[{id:1,name:"Dragon Burning Cities"},{id:2,name:"Sky Rains Great White Sharks"},{id:3,name:"Giant Asteroid Heading For Earth"},{id:4,name:"Procrastinators Meeting Delayed Again"}];var h=s(215),v=s(2);let d=(()=>{class t{constructor(){this.crises$=new h.X(f)}getCrises(){return this.crises$}getCrisis(i){return this.getCrises().pipe((0,v.U)(r=>r.find(o=>o.id===+i)))}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const M=function(t){return[t]};function y(t,n){if(1&t&&(e.TgZ(0,"li"),e.TgZ(1,"a",2),e.TgZ(2,"span",3),e._uU(3),e.qZA(),e._uU(4),e.qZA(),e.qZA()),2&t){const i=n.$implicit,r=e.oxw();e.ekj("selected",i.id===r.selectedId),e.xp6(1),e.Q6J("routerLink",e.VKq(5,M,i.id)),e.xp6(2),e.Oqu(i.id),e.xp6(1),e.hij("",i.name," ")}}let O=(()=>{class t{constructor(i,r){this.service=i,this.route=r,this.selectedId=0}ngOnInit(){this.crises$=this.route.paramMap.pipe((0,g.w)(i=>(this.selectedId=parseInt(i.get("id"),10),this.service.getCrises())))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(d),e.Y36(c.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-crisis-list"]],decls:4,vars:3,consts:[[1,"crises"],[3,"selected",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"badge"]],template:function(i,r){1&i&&(e.TgZ(0,"ul",0),e.YNc(1,y,5,7,"li",1),e.ALo(2,"async"),e.qZA(),e._UZ(3,"router-outlet")),2&i&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,r.crises$)))},directives:[l.sg,c.lC,c.yS],pipes:[l.Ov],styles:[".crises[_ngcontent-%COMP%]{margin:0 0 2em;list-style-type:none;padding:0}.crises[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer}.crises[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{left:.1em}.crises[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none;display:block;background-color:#eee;margin:.5em 0;border-radius:4px;line-height:2rem}@media (min-width: 600px){.crises[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.2rem;padding:.5em 0;line-height:1.4rem}}.crises[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2c3a41;background-color:#e6e6e6;left:.1em}.heroes[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#d6e6f7}.heroes[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#bdd7f5}.crises[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{padding:.5em .6em;color:#fff;background-color:#435b60;min-width:16px;margin-right:.8em;border-radius:4px 0 0 4px}"]}),t})(),Z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-crisis-center"]],decls:3,vars:0,template:function(i,r){1&i&&(e.TgZ(0,"h2"),e._uU(1,"Crisis Center"),e.qZA(),e._UZ(2,"router-outlet"))},directives:[c.lC],styles:[""]}),t})();var m=s(917);let x=(()=>{class t{constructor(){}confirm(i){const r=window.confirm(i||"Is It OK");return(0,m.of)(r)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function D(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"h3"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.TgZ(5,"label",1),e._uU(6,"Crisis name: "),e.qZA(),e.TgZ(7,"input",2),e.NdJ("ngModelChange",function(o){return e.CHM(i),e.oxw().editName=o}),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"button",3),e.NdJ("click",function(){return e.CHM(i),e.oxw().save()}),e._uU(10,"Save"),e.qZA(),e.TgZ(11,"button",3),e.NdJ("click",function(){return e.CHM(i),e.oxw().cancel()}),e._uU(12,"Cancel"),e.qZA(),e.qZA(),e.qZA()}if(2&t){const i=e.oxw();e.xp6(2),e.Oqu(i.editName),e.xp6(2),e.hij("Id: ",i.crisis.id,""),e.xp6(3),e.Q6J("ngModel",i.editName)}}let T=(()=>{class t{constructor(i,r,o){this.route=i,this.router=r,this.dialogService=o,this.editName=""}ngOnInit(){this.route.data.subscribe(i=>{const r=i.crisis;this.editName=r.name,this.crisis=r})}cancel(){this.gotoCrises()}save(){this.crisis.name=this.editName,this.gotoCrises()}canDeactivate(){return!this.crisis||this.crisis.name===this.editName||this.dialogService.confirm("Discard changes?")}gotoCrises(){this.router.navigate(["../",{id:this.crisis?this.crisis.id:null,foo:"foo"}],{relativeTo:this.route})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(c.gz),e.Y36(c.F0),e.Y36(x))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-crisis-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],["for","crisis-name"],["type","text","id","crisis-name","placeholder","name",3,"ngModel","ngModelChange"],[3,"click"]],template:function(i,r){1&i&&e.YNc(0,D,13,3,"div",0),2&i&&e.Q6J("ngIf",r.crisis)},directives:[l.O5,u.Fj,u.JJ,u.On],styles:["h2[_ngcontent-%COMP%]{font-size:1.5rem}input[_ngcontent-%COMP%]{font-size:1rem;margin-top:1rem}"]}),t})(),S=(()=>{class t{canDeactivate(i,r,o,a){return!i.canDeactivate||i.canDeactivate()}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=s(193),P=s(257),F=s(773);const A=[{path:"",component:Z,children:[{path:"",component:O,children:[{path:":id",component:T,canDeactivate:[S],resolve:{crisis:(()=>{class t{constructor(i,r){this.cs=i,this.router=r}resolve(i,r){const o=i.paramMap.get("id");return this.cs.getCrisis(o).pipe((0,P.q)(1),(0,F.zg)(a=>a?(0,m.of)(a):(this.router.navigate(["/crisis-center"]),_.E)))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(d),e.LFG(c.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}},{path:"",component:p}]}]}];let I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(A)],c.Bz]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,u.u5,I]]}),t})()}}]);