(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jTNt:function(t,e,n){"use strict";n.r(e),n.d(e,"ApodModule",function(){return Q});var a=n("PCNd"),o=n("tyNb"),c=n("0MNC"),i=n("3Pt+"),r=n("FKr1"),s=n("rW8v"),b=n("pM24");const l="date";var p=n("2Vo4"),d=n("Cfvw"),u=n("EY2u"),g=n("LRne"),f=n("pLZG"),h=n("lJxs"),m=n("vkgz"),O=n("eIep"),w=n("JIr8"),x=n("CqXF"),C=n("fXoL"),_=n("dJ3e"),v=n("1ua0"),P=n("XiUz"),y=n("ofXK"),M=n("/t3+"),j=n("kmnG"),$=n("qFsG"),L=n("iadO"),I=n("Xa2L"),A=n("Wp6s"),k=n("GYBK"),S=n("1HaN"),Y=n("KLmx");function D(t,e){if(1&t&&C.Lb(0,"app-image",5),2&t){const t=C.ac(2);C.fc("src",t.apod.url)("title",t.apod.imageTitle)}}function N(t,e){if(1&t&&C.Lb(0,"app-youtube-player",6),2&t){const t=C.ac(2);C.fc("videoId",t.apod.youtubeVideoId)}}function K(t,e){if(1&t&&(C.Pb(0,"mat-card"),C.Pb(1,"mat-card-header"),C.Pb(2,"mat-card-title"),C.tc(3),C.Ob(),C.Pb(4,"mat-card-subtitle"),C.tc(5),C.bc(6,"date"),C.Ob(),C.Ob(),C.Pb(7,"mat-card-content",1),C.Nb(8,2),C.sc(9,D,1,2,"app-image",3),C.sc(10,N,1,1,"app-youtube-player",4),C.Mb(),C.Pb(11,"p"),C.tc(12),C.Ob(),C.Ob(),C.Ob()),2&t){const t=C.ac();C.Ab(3),C.vc(" ",t.apod.title," "),C.Ab(2),C.vc(" ",C.cc(6,6,t.apod.date)," "),C.Ab(3),C.fc("ngSwitch",t.apod.media_type),C.Ab(1),C.fc("ngSwitchCase","image"),C.Ab(1),C.fc("ngSwitchCase","video"),C.Ab(2),C.uc(t.apod.explanation)}}let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Eb({type:t,selectors:[["app-apod-card"]],inputs:{apod:"apod"},decls:1,vars:1,consts:[[4,"ngIf"],["id","content"],[3,"ngSwitch"],["id","picture","appImageLightbox","",3,"src","title",4,"ngSwitchCase"],[3,"videoId",4,"ngSwitchCase"],["id","picture","appImageLightbox","",3,"src","title"],[3,"videoId"]],template:function(t,e){1&t&&C.sc(0,K,13,8,"mat-card",0),2&t&&C.fc("ngIf",e.apod)},directives:[y.l,A.a,A.c,A.f,A.e,A.b,y.n,y.o,k.a,S.a,Y.a],pipes:[y.e],styles:["app-apod-card #content{display:flex;flex-direction:column;gap:1rem}app-apod-card #content #picture img{max-height:75vh;object-fit:contain}"],encapsulation:2,changeDetection:0}),t})();var T=n("bTqV"),X=n("NFeN");function q(t,e){1&t&&C.Lb(0,"mat-spinner",14)}function E(t,e){if(1&t&&(C.Lb(0,"app-apod-card",15),C.bc(1,"async")),2&t){const t=C.ac();C.fc("apod",C.cc(1,1,t.apod$))}}function G(t,e){if(1&t){const t=C.Qb();C.Pb(0,"button",16),C.Xb("click",function(){C.jc(t);const n=e.ngIf;return C.ac().next(n)}),C.Pb(1,"mat-icon",17),C.tc(2,"navigate_before"),C.Ob(),C.Ob()}2&t&&(C.Ab(1),C.fc("inline",!0))}function J(t,e){if(1&t){const t=C.Qb();C.Pb(0,"button",16),C.Xb("click",function(){C.jc(t);const n=e.ngIf;return C.ac().next(n)}),C.Pb(1,"mat-icon",17),C.tc(2,"navigate_next"),C.Ob(),C.Ob()}2&t&&(C.Ab(1),C.fc("inline",!0))}const V={parse:{dateInput:"LL"},display:{dateInput:"YYYY-MM-DD",monthYearLabel:"YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY"}},z=[{path:"",component:(()=>{class t{constructor(t,e,n,a,o,c){this.route=t,this.router=e,this.store=n,this.errorService=a,this.layout=o,this.logger=c,this.readonlyTextInput=!0}get apod$(){return this._apod$.asObservable()}get dateControl(){return this._dateControl}get small$(){return this._small$}get loading$(){return this._loading$.asObservable()}get backward$(){return this._backward$.asObservable().pipe(Object(f.a)(t=>null!=t))}get forward$(){return this._forward$.asObservable().pipe(Object(f.a)(t=>null!=t))}ngOnInit(){this._apod$=new p.a(null),this._forward$=new p.a(null),this._backward$=new p.a(null),this._loading$=new p.a(!1),this._small$=this.layout.observe([c.b.XSmall,c.b.XSmall]).pipe(Object(h.a)(t=>t.matches)),this._dateControl=new i.c(null,[i.l.required]),this._dateControl.valueChanges.pipe(Object(f.a)(t=>this._dateControl.valid),Object(h.a)(t=>new Date(t)),Object(m.a)(t=>{var e;return null===(e=this.logger)||void 0===e?void 0:e.trace("Date formcontrol value: "+Object(b.a)(t))})).subscribe({next:t=>this.next(t)}),this.route.queryParams.pipe(Object(m.a)(t=>this._apod$.next(null)),Object(m.a)(t=>this._loading$.next(!0)),function(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return n=>Object(h.a)(function(t,e){return n=>{let a=n;for(let o=0;o<e;o++){const e=null!=a?a[t[o]]:void 0;if(void 0===e)return;a=e}return a}}(t,e))(n)}(l),Object(m.a)(t=>{var e;return null===(e=this.logger)||void 0===e?void 0:e.trace("date route param: "+t)}),Object(h.a)(t=>new Date(t)),Object(O.a)(t=>{return isNaN(t.getTime())?Object(d.a)(this.next(new Date)).pipe((e=u.a,Object(O.a)(()=>e))):Object(g.a)(t);var e}),Object(m.a)(t=>this._dateControl.setValue(t,{emitEvent:!1})),Object(m.a)(t=>{this._forward$.next(new Date(t.getFullYear(),t.getMonth(),t.getDate()+1)),this._backward$.next(new Date(t.getFullYear(),t.getMonth(),t.getDate()-1))}),Object(O.a)(t=>this.store.dispatchApod(t).pipe(Object(m.a)(t=>this._loading$.next(!1)),Object(w.a)(e=>{let n;switch(this._loading$.next(!1),e.status){case 400:n={message:`No image for ${t.toLocaleDateString()} yet ${String.fromCodePoint(128546)}`,name:e.statusText};break;case 429:n={message:"This site requests data from Nasa, which is rate limited "+String.fromCodePoint(128546),name:e.statusText}}return this.errorService.showErrorInDialog(n).pipe(Object(m.a)(t=>this.next(new Date)),Object(x.a)(null))})))).subscribe({next:t=>this._apod$.next(t)})}next(t){return e=this,void 0,a=function*(){return this.router.navigate([],{queryParams:{[l]:Object(b.a)(t)}})},new((n=void 0)||(n=Promise))(function(t,o){function c(t){try{r(a.next(t))}catch(e){o(e)}}function i(t){try{r(a.throw(t))}catch(e){o(e)}}function r(e){var a;e.done?t(e.value):(a=e.value,a instanceof n?a:new n(function(t){t(a)})).then(c,i)}r((a=a.apply(e,[])).next())});var e,n,a}}return t.\u0275fac=function(e){return new(e||t)(C.Kb(o.a),C.Kb(o.b),C.Kb(_.c),C.Kb(v.a),C.Kb(c.a),C.Kb(s.d,8))},t.\u0275cmp=C.Eb({type:t,selectors:[["app-apod"]],features:[C.zb([{provide:r.c,useValue:V}])],decls:18,vars:15,consts:[["fxLayout","column",1,"page"],["fxFlex","1 1 auto","fxLayout","column","fxLayoutAlign","start center",1,"content-container"],[1,"content"],[3,"ngSwitch"],["color","accent","class","center-abs-xy",4,"ngSwitchCase"],["class","apod-card",3,"apod",4,"ngSwitchCase"],["fxFlex","0 0 auto"],["fxLayoutAlign","center center","fxLayoutGap","1rem","color","accent"],["mat-icon-button","",3,"click",4,"ngIf"],["fxFlex","1 1 140px"],["autocomplete","off","matInput","",3,"readonly","matDatepicker","formControl"],["matSuffix","",3,"for"],["color","accent"],["picker",""],["color","accent",1,"center-abs-xy"],[1,"apod-card",3,"apod"],["mat-icon-button","",3,"click"],[3,"inline"]],template:function(t,e){if(1&t&&(C.Pb(0,"section",0),C.Pb(1,"div",1),C.Pb(2,"section",2),C.Nb(3,3),C.bc(4,"async"),C.sc(5,q,1,0,"mat-spinner",4),C.sc(6,E,2,3,"app-apod-card",5),C.Mb(),C.Ob(),C.Ob(),C.Pb(7,"footer",6),C.Pb(8,"mat-toolbar",7),C.sc(9,G,3,1,"button",8),C.bc(10,"async"),C.Pb(11,"mat-form-field",9),C.Lb(12,"input",10),C.Lb(13,"mat-datepicker-toggle",11),C.Lb(14,"mat-datepicker",12,13),C.Ob(),C.sc(16,J,3,1,"button",8),C.bc(17,"async"),C.Ob(),C.Ob(),C.Ob()),2&t){const t=C.hc(15);C.Ab(3),C.fc("ngSwitch",C.cc(4,9,e.loading$)),C.Ab(2),C.fc("ngSwitchCase",!0),C.Ab(1),C.fc("ngSwitchCase",!1),C.Ab(3),C.fc("ngIf",C.cc(10,11,e.backward$)),C.Ab(3),C.fc("readonly",e.readonlyTextInput)("matDatepicker",t)("formControl",e.dateControl),C.Ab(1),C.fc("for",t),C.Ab(3),C.fc("ngIf",C.cc(17,13,e.forward$))}},directives:[P.c,P.a,P.b,y.n,y.o,M.a,P.d,y.l,j.b,$.b,L.b,i.b,i.i,i.d,L.d,j.e,L.a,I.b,F,T.b,X.a],pipes:[y.b],styles:["[_nghost-%COMP%] > .page[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0}[_nghost-%COMP%] > .page[_ngcontent-%COMP%] > .content-container[_ngcontent-%COMP%]{overflow:auto}[_nghost-%COMP%] > .page[_ngcontent-%COMP%] > .content-container[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{padding:1rem}[_nghost-%COMP%] > .page[_ngcontent-%COMP%] > .content-container[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%] > .apod-card[_ngcontent-%COMP%]{display:block;max-width:960px}[_nghost-%COMP%] > .page[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]{overflow:hidden}[_nghost-%COMP%] > .page[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{width:50px;height:50px;line-height:50px}[_nghost-%COMP%] > .page[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:50px;width:50px;height:50px;line-height:50px}"]}),t})()}];let H=(()=>{class t{}return t.\u0275mod=C.Ib({type:t}),t.\u0275inj=C.Hb({factory:function(e){return new(e||t)},imports:[[o.d.forChild(z)],o.d]}),t})(),Q=(()=>{class t{}return t.\u0275mod=C.Ib({type:t}),t.\u0275inj=C.Hb({factory:function(e){return new(e||t)},imports:[[a.a,H]]}),t})()}}]);