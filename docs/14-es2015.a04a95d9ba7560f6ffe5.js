(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"ct+p":function(t,n,e){"use strict";e.r(n);var c=e("ofXK"),r=e("c7TG"),b=e("3Pt+"),o=e("tyNb"),a=e("fXoL");let i=(()=>{class t{constructor(t){this.ngControl=t}onModelChange(t){this.onInputChange(t.target.value,!1)}onInputChange(t,n){let e=t.replace(/\D/g,"");this.ngControl.control.setValue(e),this.ngControl.valueAccessor.writeValue(e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))}}return t.\u0275fac=function(n){return new(n||t)(a.Wb(b.c))},t.\u0275dir=a.Rb({type:t,selectors:[["","appMaskNumber",""]],hostBindings:function(t,n){1&t&&a.gc("ionChange",(function(t){return n.onModelChange(t)}))}}),t})();function s(t,n){if(1&t&&(a.Zb(0,"tr"),a.Zb(1,"th"),a.rc(2),a.ic(3,"number"),a.Yb(),a.Zb(4,"td"),a.rc(5),a.ic(6,"number"),a.Yb(),a.Zb(7,"td"),a.rc(8),a.ic(9,"number"),a.Yb(),a.Zb(10,"td"),a.rc(11),a.ic(12,"number"),a.Yb(),a.Zb(13,"td"),a.rc(14),a.ic(15,"number"),a.Yb(),a.Zb(16,"td"),a.rc(17),a.ic(18,"number"),a.Yb(),a.Zb(19,"td"),a.rc(20),a.ic(21,"number"),a.Yb(),a.Zb(22,"td"),a.rc(23),a.ic(24,"number"),a.Yb(),a.Yb()),2&t){const t=n.$implicit;a.Mb(2),a.sc(a.jc(3,8,t.year)),a.Mb(3),a.sc(a.jc(6,10,t.remaining)),a.Mb(3),a.sc(a.jc(9,12,t.paymentRate)),a.Mb(3),a.sc(a.jc(12,14,t.principle)),a.Mb(3),a.sc(a.jc(15,16,t.interestAmount)),a.Mb(3),a.sc(a.jc(18,18,t.sum)),a.Mb(3),a.sc(a.jc(21,20,t.payPerDay)),a.Mb(3),a.sc(a.jc(24,22,t.payPerMonth))}}const l=(t,n)=>t+n;let u=(()=>{class t{constructor(){this.balance=0,this.year=15,this.paymentRate=[1.5,2.5,3,3.5,4,4.5,5,6,7,8,9,10,11,12,13],this.data=[]}ngOnInit(){setTimeout(()=>{this.balance=1e5,this.calculate()},300)}calculate(){let t=this.balance;this.data=this.paymentRate.map((n,e)=>{const c=e+1,r=Math.round(1===c?0:.01*t),b=Math.round(this.balance*(n/100)),o=Math.round(b+r),a={year:c,remaining:t,paymentRate:n,principle:b,interestAmount:r,sum:o,payPerDay:Math.round(o/365),payPerMonth:Math.round(o/12)};return t=Math.round(t-a.principle),a})}get sumPaymentRate(){return this.paymentRate.reduce(l,0)}get sumPrinciple(){return this.data.map(t=>t.principle).reduce(l,0)}get sumInterestRate(){return this.data.map(t=>t.interestAmount).reduce(l,0)}get sumAll(){return this.data.map(t=>t.sum).reduce(l,0)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Qb({type:t,selectors:[["app-home"]],decls:62,vars:14,consts:[[1,"balance-input","card"],["position","stacked"],["type","tel","appMaskNumber","",3,"ngModel","ngModelChange","keyup"],["slot","end",1,"baht-symbol"],[1,"responsive-table","card"],[1,"table"],[4,"ngFor","ngForOf"],["colspan","2"],["href","https://www.studentloan.or.th/th/highlight/1547359402","rel","noopener"]],template:function(t,n){1&t&&(a.Zb(0,"ion-content"),a.Zb(1,"ion-grid"),a.Zb(2,"ion-row"),a.Zb(3,"ion-col"),a.Zb(4,"h1"),a.rc(5,"\u0e04\u0e33\u0e19\u0e27\u0e13\u0e2b\u0e19\u0e35\u0e49 \u0e01\u0e22\u0e28."),a.Yb(),a.Yb(),a.Yb(),a.Zb(6,"ion-row"),a.Zb(7,"ion-col"),a.Zb(8,"ion-item",0),a.Zb(9,"ion-label",1),a.rc(10,"\u0e22\u0e2d\u0e14\u0e2b\u0e19\u0e35\u0e49"),a.Yb(),a.Zb(11,"ion-input",2),a.gc("ngModelChange",(function(t){return n.balance=t}))("keyup",(function(t){return n.calculate()})),a.Yb(),a.Zb(12,"div",3),a.rc(13,"\u0e3f"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(14,"ion-row"),a.Zb(15,"ion-col"),a.Zb(16,"div",4),a.Zb(17,"table",5),a.Zb(18,"thead"),a.Zb(19,"th"),a.rc(20,"\u0e1b\u0e35\u0e17\u0e35\u0e48"),a.Yb(),a.Zb(21,"th"),a.rc(22,"\u0e2b\u0e19\u0e35\u0e49\u0e15\u0e32\u0e21\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e04\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d"),a.Yb(),a.Zb(23,"th"),a.rc(24,"\u0e2d\u0e31\u0e15\u0e23\u0e32\u0e1c\u0e48\u0e2d\u0e19\u0e0a\u0e33\u0e23\u0e30 "),a.Xb(25,"br"),a.rc(26," (\u0e23\u0e49\u0e2d\u0e22\u0e25\u0e30\u0e02\u0e2d\u0e07\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e07\u0e34\u0e19\u0e01\u0e39\u0e49\u0e22\u0e37\u0e21)"),a.Yb(),a.Zb(27,"th"),a.rc(28,"\u0e40\u0e07\u0e34\u0e19\u0e15\u0e49\u0e19"),a.Yb(),a.Zb(29,"th"),a.rc(30,"\u0e14\u0e2d\u0e01\u0e40\u0e1a\u0e35\u0e49\u0e22 "),a.Xb(31,"br"),a.rc(32," (1% \u0e02\u0e2d\u0e07\u0e40\u0e07\u0e34\u0e19\u0e15\u0e49\u0e19\u0e04\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d)"),a.Yb(),a.Zb(33,"th"),a.rc(34,"\u0e22\u0e2d\u0e14\u0e23\u0e27\u0e21\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e0a\u0e33\u0e23\u0e30"),a.Yb(),a.Zb(35,"th"),a.rc(36,"\u0e22\u0e2d\u0e14\u0e0a\u0e33\u0e23\u0e30\u0e27\u0e31\u0e19"),a.Yb(),a.Zb(37,"th"),a.rc(38,"\u0e22\u0e2d\u0e14\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e14\u0e37\u0e2d\u0e19"),a.Yb(),a.Yb(),a.Zb(39,"tbody"),a.qc(40,s,25,24,"tr",6),a.Zb(41,"tr"),a.Zb(42,"td",7),a.rc(43," \u0e23\u0e27\u0e21 "),a.Yb(),a.Zb(44,"td"),a.rc(45),a.ic(46,"number"),a.Yb(),a.Zb(47,"td"),a.rc(48),a.ic(49,"number"),a.Yb(),a.Zb(50,"td"),a.rc(51),a.ic(52,"number"),a.Yb(),a.Zb(53,"td"),a.rc(54),a.ic(55,"number"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(56,"ion-row"),a.Zb(57,"ion-col"),a.Zb(58,"p"),a.rc(59," Reference: "),a.Zb(60,"a",8),a.rc(61,"https://www.studentloan.or.th/th/highlight/1547359402"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb()),2&t&&(a.Mb(11),a.mc("ngModel",n.balance),a.Mb(29),a.mc("ngForOf",n.data),a.Mb(5),a.tc(" ",a.jc(46,6,n.sumPaymentRate)," "),a.Mb(3),a.tc(" ",a.jc(49,8,n.sumPrinciple)," "),a.Mb(3),a.tc(" ",a.jc(52,10,n.sumInterestRate)," "),a.Mb(3),a.tc(" ",a.jc(55,12,n.sumAll)," "))},directives:[r.c,r.d,r.i,r.b,r.f,r.g,r.e,r.m,i,b.d,b.e,c.i],pipes:[c.d],styles:[".balance-input[_ngcontent-%COMP%]   .baht-symbol[_ngcontent-%COMP%]{margin-top:25px}.card[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 4px 6px 0 rgba(0,0,0,.2);border-radius:.5em}.responsive-table[_ngcontent-%COMP%]{overflow-x:auto;position:relative}.responsive-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#f2f5f7}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 5px;border-bottom:1px solid #ebeff1}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:nowrap;background-color:#f2f5f7}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{position:-webkit-sticky;position:sticky;left:0}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center}"]}),t})();e.d(n,"HomePageModule",(function(){return d}));let d=(()=>{class t{}return t.\u0275mod=a.Ub({type:t}),t.\u0275inj=a.Tb({factory:function(n){return new(n||t)},imports:[[c.b,b.a,r.j,o.i.forChild([{path:"",component:u}])]]}),t})()}}]);