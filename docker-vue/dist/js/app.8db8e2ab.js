(function(){"use strict";var e={4715:function(e,t,l){var i=l(9963),n=l(6252);const o=(0,n._)("div",{id:"title"},[(0,n._)("h1",null,"義大胸腔科")],-1),r={id:"demo"},a=(0,n._)("br",null,null,-1),u={id:"look"},s=["src"],c={id:"look_event"},v=["onClick"],p=["onClick"],d={id:"preview_close"},g=(0,n._)("img",{src:"https://s1.ax1x.com/2022/08/08/vMEBqI.png",alt:"",title:"上一张"},null,-1),f=[g],w=(0,n._)("img",{src:"https://s1.ax1x.com/2022/08/08/vMErZt.png",alt:"",title:"下一张"},null,-1),h=[w],m=["src"];function k(e,t,l,g,w,k){return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n.wy)((0,n._)("div",r,[(0,n._)("input",{type:"file",id:"demo_file",accept:"image/*",multiple:"",onChange:t[0]||(t[0]=e=>g.update(e))},null,32),(0,n.Uk)(" DRAG & DROP "),a,(0,n.Uk)(" Iasdasdaasdasdasdasdasdasdassjdsjasdasds ")],512),[[i.F8,g.uploadnum]]),(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.imgSrc,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{id:"look_img",key:t},[(0,n._)("img",{src:e,alt:""},null,8,s),(0,n._)("div",c,[(0,n._)("img",{src:"https://s1.ax1x.com/2022/08/08/vMEtPO.png",alt:"",title:"点击查看",onClick:e=>g.look(t)},null,8,v),(0,n._)("img",{src:"https://s1.ax1x.com/2022/08/08/vMEaxH.png",alt:"",title:"点击删除",onClick:e=>g.deletes(t)},null,8,p)])])))),128))]),g.show?((0,n.wg)(),(0,n.iD)("div",{key:0,id:"preview",onClick:t[4]||(t[4]=()=>{g.show=!1})},[(0,n._)("div",d,[(0,n._)("img",{src:"https://s1.ax1x.com/2022/08/08/vMEURe.png",alt:"",title:"关闭",onClick:t[1]||(t[1]=()=>{g.show=!1})})]),0!=g.pvwWhere?((0,n.wg)(),(0,n.iD)("div",{key:0,id:"preview_last",onClick:t[2]||(t[2]=(0,i.iM)((e=>g.previewLast()),["stop"]))},f)):(0,n.kq)("",!0),g.pvwWhere!=g.imgSrc.length-1?((0,n.wg)(),(0,n.iD)("div",{key:1,id:"preview_next",onClick:t[3]||(t[3]=(0,i.iM)((e=>g.previewNext()),["stop"]))},h)):(0,n.kq)("",!0),(0,n._)("img",{src:g.pvwSrc,alt:""},null,8,m)])):(0,n.kq)("",!0)],64)}l(7658);var _=l(2262),x={setup(){const e=(0,_.iH)([]),t=(0,_.iH)(1e4),l=(0,_.iH)(!0),i=(0,_.iH)(!1),n=(0,_.iH)(null),o=(0,_.iH)(0),r=l=>{let i=l.target.files;if(console.log("file",i),i){let l=t.value-e.value.length;for(let t=0;t<l;t++){let l=new FileReader;l.onloadend=({target:t})=>{e.value.push(t.result),console.log("target",t.result),console.log("upload success!!"),a()},l.readAsDataURL(i[t])}}},a=()=>{e.value.length>=t.value?l.value=!1:l.value=!0};a();const u=t=>{e.value.splice(t,1),a()},s=t=>{console.log(e.value),o.value=t,i.value=!0,n.value=e.value[o.value],console.log("image:",n)},c=()=>{o.value--,n.value=e.value[o.value]},v=()=>{o.value++,n.value=e.value[o.value]};return{update:r,imgSrc:e,arrLength:t,uploadnum:l,deletes:u,look:s,show:i,pvwSrc:n,pvwWhere:o,previewLast:c,previewNext:v}}},b=l(3744);const y=(0,b.Z)(x,[["render",k]]);var O=y;(0,i.ri)(O).mount("#app")}},t={};function l(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(t,i,n,o){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],o=e[c][2];for(var a=!0,u=0;u<i.length;u++)(!1&o||r>=o)&&Object.keys(l.O).every((function(e){return l.O[e](i[u])}))?i.splice(u--,1):(a=!1,o<r&&(r=o));if(a){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,n,o]}}(),function(){l.d=function(e,t){for(var i in t)l.o(t,i)&&!l.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,r=i[0],a=i[1],u=i[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(n in a)l.o(a,n)&&(l.m[n]=a[n]);if(u)var c=u(l)}for(t&&t(i);s<r.length;s++)o=r[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(c)},i=self["webpackChunkaiweb"]=self["webpackChunkaiweb"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=l.O(void 0,[998],(function(){return l(4715)}));i=l.O(i)})();
//# sourceMappingURL=app.8db8e2ab.js.map