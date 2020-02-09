function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var c=n[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"ct+p":function(t,n,e){"use strict";e.r(n);var c=e("ofXK"),r=e("c7TG"),i=e("3Pt+"),b=e("tyNb"),o=e("fXoL");function a(t,n){if(1&t&&(o.Zb(0,"tr"),o.Zb(1,"th"),o.rc(2),o.ic(3,"number"),o.Yb(),o.Zb(4,"td"),o.rc(5),o.ic(6,"number"),o.Yb(),o.Zb(7,"td"),o.rc(8),o.ic(9,"number"),o.Yb(),o.Zb(10,"td"),o.rc(11),o.ic(12,"number"),o.Yb(),o.Zb(13,"td"),o.rc(14),o.ic(15,"number"),o.Yb(),o.Zb(16,"td"),o.rc(17),o.ic(18,"number"),o.Yb(),o.Yb()),2&t){var e=n.$implicit;o.Mb(2),o.sc(o.jc(3,6,e.year)),o.Mb(3),o.sc(o.jc(6,8,e.remaining)),o.Mb(3),o.sc(o.jc(9,10,e.paymentRate)),o.Mb(3),o.sc(o.jc(12,12,e.principle)),o.Mb(3),o.sc(o.jc(15,14,e.interestAmount)),o.Mb(3),o.sc(o.jc(18,16,e.sum))}}var u,s=((u=function(){function t(){_classCallCheck(this,t),this.balance=1e5,this.year=15,this.paymentRate=[1.5,2.5,3,3.5,4,4.5,5,6,7,8,9,10,11,12,13],this.data=[]}return _createClass(t,[{key:"ngOnInit",value:function(){this.calculate()}},{key:"calculate",value:function(){var t=this,n=this.balance;this.data=this.paymentRate.map((function(e,c){var r=c+1,i=Math.round(1===r?0:.01*n),b=Math.round(t.balance*(e/100)),o={year:r,remaining:n,paymentRate:e,principle:b,interestAmount:i,sum:Math.round(b+i)};return n=Math.round(n-o.principle),o}))}},{key:"sumPaymentRate",get:function(){return this.paymentRate.reduce((function(t,n){return t+n}))}},{key:"sumPrinciple",get:function(){return this.data.map((function(t){return t.principle})).reduce((function(t,n){return t+n}))}},{key:"sumInterestRate",get:function(){return this.data.map((function(t){return t.interestAmount})).reduce((function(t,n){return t+n}))}},{key:"sumAll",get:function(){return this.data.map((function(t){return t.sum})).reduce((function(t,n){return t+n}))}}]),t}()).\u0275fac=function(t){return new(t||u)},u.\u0275cmp=o.Qb({type:u,selectors:[["app-home"]],decls:53,vars:14,consts:[[1,"balance-input"],["position","stacked"],["type","number",3,"ngModel","ngModelChange","keyup"],["slot","end",1,"baht-symbol"],[1,"responsive-table"],[1,"table"],[4,"ngFor","ngForOf"],["colspan","2"],["href","https://www.studentloan.or.th/th/highlight/1547359402","rel","noopener"]],template:function(t,n){1&t&&(o.Zb(0,"ion-content"),o.Zb(1,"ion-grid"),o.Zb(2,"ion-row"),o.Zb(3,"ion-col"),o.Zb(4,"ion-item",0),o.Zb(5,"ion-label",1),o.rc(6,"\u0e22\u0e2d\u0e14\u0e2b\u0e19\u0e35\u0e49"),o.Yb(),o.Zb(7,"ion-input",2),o.gc("ngModelChange",(function(t){return n.balance=t}))("keyup",(function(t){return n.calculate()})),o.Yb(),o.Zb(8,"div",3),o.rc(9,"\u0e3f"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(10,"ion-row"),o.Zb(11,"ion-col"),o.Zb(12,"div",4),o.Zb(13,"table",5),o.Zb(14,"thead"),o.Zb(15,"th"),o.rc(16,"\u0e1b\u0e35\u0e17\u0e35\u0e48"),o.Yb(),o.Zb(17,"th"),o.rc(18,"\u0e2b\u0e19\u0e35\u0e49\u0e15\u0e32\u0e21\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e04\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d"),o.Yb(),o.Zb(19,"th"),o.rc(20,"\u0e2d\u0e31\u0e15\u0e23\u0e32\u0e1c\u0e48\u0e2d\u0e19\u0e0a\u0e33\u0e23\u0e30 "),o.Xb(21,"br"),o.rc(22," (\u0e23\u0e49\u0e2d\u0e22\u0e25\u0e30\u0e02\u0e2d\u0e07\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e07\u0e34\u0e19\u0e01\u0e39\u0e49\u0e22\u0e37\u0e21)"),o.Yb(),o.Zb(23,"th"),o.rc(24,"\u0e40\u0e07\u0e34\u0e19\u0e15\u0e49\u0e19"),o.Yb(),o.Zb(25,"th"),o.rc(26,"\u0e14\u0e2d\u0e01\u0e40\u0e1a\u0e35\u0e49\u0e22 "),o.Xb(27,"br"),o.rc(28," (1% \u0e02\u0e2d\u0e07\u0e40\u0e07\u0e34\u0e19\u0e15\u0e49\u0e19\u0e04\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d)"),o.Yb(),o.Zb(29,"th"),o.rc(30,"\u0e22\u0e2d\u0e14\u0e23\u0e27\u0e21\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e0a\u0e33\u0e23\u0e30"),o.Yb(),o.Yb(),o.Zb(31,"tbody"),o.qc(32,a,19,18,"tr",6),o.Zb(33,"tr"),o.Zb(34,"td",7),o.rc(35," \u0e23\u0e27\u0e21 "),o.Yb(),o.Zb(36,"td"),o.rc(37),o.ic(38,"number"),o.Yb(),o.Zb(39,"td"),o.rc(40),o.ic(41,"number"),o.Yb(),o.Zb(42,"td"),o.rc(43),o.ic(44,"number"),o.Yb(),o.Zb(45,"td"),o.rc(46),o.ic(47,"number"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(48,"ion-row"),o.Zb(49,"ion-col"),o.rc(50," Reference: "),o.Zb(51,"a",8),o.rc(52,"https://www.studentloan.or.th/th/highlight/1547359402"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb()),2&t&&(o.Mb(7),o.mc("ngModel",n.balance),o.Mb(25),o.mc("ngForOf",n.data),o.Mb(5),o.tc(" ",o.jc(38,6,n.sumPaymentRate)," "),o.Mb(3),o.tc(" ",o.jc(41,8,n.sumPrinciple)," "),o.Mb(3),o.tc(" ",o.jc(44,10,n.sumInterestRate)," "),o.Mb(3),o.tc(" ",o.jc(47,12,n.sumAll)," "))},directives:[r.c,r.d,r.i,r.b,r.f,r.g,r.e,r.l,i.c,i.d,c.i],pipes:[c.d],styles:[".balance-input[_ngcontent-%COMP%]   .baht-symbol[_ngcontent-%COMP%]{margin-top:25px}.responsive-table[_ngcontent-%COMP%]{overflow-x:auto;position:relative}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:#f2f5f7}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px 5px;border-bottom:1px solid #ebeff1}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{white-space:nowrap;background-color:#f2f5f7}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{position:-webkit-sticky;position:sticky;left:0}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center}"]}),u);e.d(n,"HomePageModule",(function(){return p}));var l,p=((l=function t(){_classCallCheck(this,t)}).\u0275mod=o.Ub({type:l}),l.\u0275inj=o.Tb({factory:function(t){return new(t||l)},imports:[[c.b,i.a,r.j,b.i.forChild([{path:"",component:s}])]]}),l)}}]);