(function(){"use strict";var e={1294:function(e,t,r){var n=r(9199);const s={class:"footerfixer"},i={class:"container"},o=(0,n._)("div",{id:"header"},[(0,n._)("h1",null,"Ninja Reaction Timer"),(0,n._)("div",{class:"sourcecode"},[(0,n._)("a",{href:"https://github.com/sericakitty/reaction-timer",class:"sourcecodelink",target:"_blank"},"Source code link")])],-1),a=["disabled"];function l(e,t,r,l,c,u){const d=(0,n.up)("NavBar"),h=(0,n.up)("Block"),f=(0,n.up)("Rank"),m=(0,n.up)("Results"),p=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d),(0,n._)("main",s,[(0,n._)("div",i,[o,(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>u.start&&u.start(...e)),disabled:c.isPlaying},"play",8,a),c.isPlaying?((0,n.wg)(),(0,n.j4)(h,{key:0,delay:c.delay,onTime:u.endGame},null,8,["delay","onTime"])):(0,n.kq)("",!0),c.showResult?((0,n.wg)(),(0,n.j4)(f,{key:1,score:c.score,onRank:u.addResult},null,8,["score","onRank"])):(0,n.kq)("",!0)]),(0,n.Wm)(m,{results:c.results},null,8,["results"])]),(0,n.Wm)(p)],64)}r(7658);const c=(0,n._)("ul",{class:"nav justify-content-center navbar"},[(0,n._)("li",{class:"nav-item"},[(0,n._)("a",{class:"nav-link navtext",href:"https://sericakitty.github.io/"},"Home")])],-1),u=[c];function d(e,t){return(0,n.wg)(),(0,n.iD)("nav",null,u)}var h=r(89);const f={},m=(0,h.Z)(f,[["render",d]]);var p=m;function v(e,t,r,s,i,o){return i.showBlock?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"block",onClick:t[0]||(t[0]=(...e)=>o.stopTimer&&o.stopTimer(...e))},"click me")):(0,n.kq)("",!0)}var k={props:["delay"],data(){return{showBlock:!1,timer:null,reactionTime:0}},mounted(){setTimeout((()=>{this.showBlock=!0,this.startTimer()}),this.delay)},methods:{startTimer(){this.timer=setInterval((()=>{this.reactionTime+=10}),10)},stopTimer(){clearInterval(this.timer),this.$emit("time",this.reactionTime)}}};const y=(0,h.Z)(k,[["render",v]]);var g=y;const w={class:"rankDiv"},b={class:"rank"};function _(e,t,r,s,i,o){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("p",null,"Reaction time - "+(0,n.zw)(r.score)+" ms",1),(0,n._)("p",b,(0,n.zw)(i.rank),1)])}var R={props:["score"],data(){return{rank:null}},mounted(){this.score<250?this.rank="Ninja Fingers":this.score<400?this.rank="Rapid Reflexes":this.rank="Snail pace...",this.$emit("rank",this.rank)}};const T=(0,h.Z)(R,[["render",_]]);var j=T;const O={class:"resultBlock"},D=(0,n._)("h2",null,"Score Board (top 5)",-1),B={class:"index"},P={class:"score"},x=(0,n._)("p",{class:"ms"},"ms -",-1),S={class:"result"};function Z(e,t,r,s,i,o){return(0,n.wg)(),(0,n.iD)("div",O,[D,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.results,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},[(0,n._)("p",B,(0,n.zw)(t+1)+".",1),(0,n._)("p",P,(0,n.zw)(e.score),1),x,(0,n._)("p",S,(0,n.zw)(e.rank),1)])))),128))])])}var z={props:["results"]};const F=(0,h.Z)(z,[["render",Z]]);var q=F;const C={class:"footer"};function N(e,t,r,s,i,o){return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("footer",C,[t[0]||((0,n.qZ)(-1),t[0]=(0,n._)("div",null,[(0,n.Uk)("© 2020 - "+(0,n.zw)(i.year)+" sericakitty.github.io. All Rights Reserved.",1)]),(0,n.qZ)(1),t[0])])])}var H={data(){return{year:(0,n.Fl)((()=>Intl.DateTimeFormat(navigator.language,{year:"numeric"}).format(new Date)))}}};const I=(0,h.Z)(H,[["render",N]]);var M=I,W={name:"App",components:{NavBar:p,Block:g,Rank:j,Results:q,Footer:M},data(){return{isPlaying:!1,delay:null,score:null,showResult:!1,results:[]}},methods:{start(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResult=!1},endGame(e){this.score=e,this.isPlaying=!1,this.showResult=!0},addResult(e){this.results.push({score:this.score,rank:e}),this.results.sort(((e,t)=>e.score-t.score)),this.results.length>5&&this.results.pop()}}};const A=(0,h.Z)(W,[["render",l]]);var G=A;(0,n.ri)(G).mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],i=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(a=!1,i<o&&(o=i));if(a){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,s,i]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,o=n[0],a=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(l)var u=l(r)}for(t&&t(n);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self["webpackChunkreaction_timer"]=self["webpackChunkreaction_timer"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1294)}));n=r.O(n)})();
//# sourceMappingURL=app.0dc2d479.js.map