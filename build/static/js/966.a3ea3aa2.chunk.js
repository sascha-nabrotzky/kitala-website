"use strict";(self.webpackChunkkitala_ladbergen_de=self.webpackChunkkitala_ladbergen_de||[]).push([[966],{662:function(t,e){var n=window,i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.msRequestAnimationFrame||function(t){return setTimeout(t,16)},a=window,r=a.cancelAnimationFrame||a.mozCancelAnimationFrame||function(t){clearTimeout(t)};function o(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function u(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n,i){if(i)try{t.setItem(e,n)}catch(a){}return n}function s(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var c=document.documentElement;function f(t){var e="";return t.fake&&(e=c.style.overflow,t.style.background="",t.style.overflow=c.style.overflow="hidden",c.appendChild(t)),e}function d(t,e){t.fake&&(t.remove(),c.style.overflow=e,c.offsetHeight)}function v(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function p(t){return("insertRule"in t?t.cssRules:t.rules).length}function h(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var m="classList"in document.createElement("_"),y=m?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},g=m?function(t,e){y(t,e)||t.classList.add(e)}:function(t,e){y(t,e)||(t.className+=" "+e)},x=m?function(t,e){y(t,e)&&t.classList.remove(e)}:function(t,e){y(t,e)&&(t.className=t.className.replace(e,""))};function b(t,e){return t.hasAttribute(e)}function w(t,e){return t.getAttribute(e)}function C(t){return"undefined"!==typeof t.item}function M(t,e){if(t=C(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function T(t,e){t=C(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function E(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function A(t,e){"none"!==t.style.display&&(t.style.display="none")}function N(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"===typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}var i=document.createElement("fakeelement");t.length;for(var a=0;a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var k=!1;try{var H=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,H)}catch(P){}var O=!!k&&{passive:!0};function D(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&O;t.addEventListener(i,e[i],a)}}function R(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&O;t.removeEventListener(n,e[n],i)}}function I(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});e.W=function t(e){e=o({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},e||{});var n=document,a=window,c={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},m={},C=e.useLocalStorage;if(C){var k=navigator.userAgent,H=new Date;try{(m=a.localStorage)?(m.setItem(H,H),C=m.getItem(H)==H,m.removeItem(H)):C=!1,C||(m={})}catch(P){C=!1}C&&(m.tnsApp&&m.tnsApp!==k&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){m.removeItem(t)})),localStorage.tnsApp=k)}var O=m.tC?u(m.tC):l(m,"tC",function(){var t=document,e=s(),n=f(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(P){}return e.fake?d(e,n):i.remove(),a}(),C),W=m.tPL?u(m.tPL):l(m,"tPL",function(){var t,e=document,n=s(),i=f(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?d(n,i):a.remove(),t}(),C),z=m.tMQ?u(m.tMQ):l(m,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=s(),i=f(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?d(n,i):a.remove(),"absolute"===t}(),C),q=m.tTf?u(m.tTf):l(m,"tTf",B("transform"),C),F=m.t3D?u(m.t3D):l(m,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=s(),a=f(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?d(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(q),C),j=m.tTDu?u(m.tTDu):l(m,"tTDu",B("transitionDuration"),C),V=m.tTDe?u(m.tTDe):l(m,"tTDe",B("transitionDelay"),C),_=m.tADu?u(m.tADu):l(m,"tADu",B("animationDuration"),C),G=m.tADe?u(m.tADe):l(m,"tADe",B("animationDelay"),C),Q=m.tTE?u(m.tTE):l(m,"tTE",S(j,"Transition"),C),X=m.tAE?u(m.tAE):l(m,"tAE",S(_,"Animation"),C),Y=a.console&&"function"===typeof a.console.warn,K=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],J={};if(K.forEach((function(t){if("string"===typeof e[t]){var i=e[t],a=n.querySelector(i);if(J[t]=i,!a||!a.nodeName)return void(Y&&console.warn("Can't find",e[t]));e[t]=a}})),!(e.container.children.length<1)){var U=e.responsive,Z=e.nested,$="carousel"===e.mode;if(U){0 in U&&(e=o(e,U[0]),delete U[0]);var tt={};for(var et in U){var nt=U[et];nt="number"===typeof nt?{items:nt}:nt,tt[et]=nt}U=tt,tt=null}if($||function t(e){for(var n in e)$||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(e),!$){e.axis="horizontal",e.slideBy="page",e.edgePadding=!1;var it=e.animateIn,at=e.animateOut,rt=e.animateDelay,ot=e.animateNormal}var ut,lt,st="horizontal"===e.axis,ct=n.createElement("div"),ft=n.createElement("div"),dt=e.container,vt=dt.parentNode,pt=dt.outerHTML,ht=dt.children,mt=ht.length,yt=Ln(),gt=!1;U&&Kn(),$&&(dt.className+=" tns-vpfix");var xt,bt=e.autoWidth,wt=On("fixedWidth"),Ct=On("edgePadding"),Mt=On("gutter"),Tt=kn(),Et=On("center"),At=bt?1:Math.floor(On("items")),Nt=On("slideBy"),Lt=e.viewportMax||e.fixedWidthViewportWidth,Bt=On("arrowKeys"),St=On("speed"),kt=e.rewind,Ht=!kt&&e.loop,Ot=On("autoHeight"),Dt=On("controls"),Rt=On("controlsText"),It=On("nav"),Pt=On("touch"),Wt=On("mouseDrag"),zt=On("autoplay"),qt=On("autoplayTimeout"),Ft=On("autoplayText"),jt=On("autoplayHoverPause"),Vt=On("autoplayResetOnVisibility"),_t=function(t,e){var n=document.createElement("style");return t&&n.setAttribute("media",t),e&&n.setAttribute("nonce",e),document.querySelector("head").appendChild(n),n.sheet?n.sheet:n.styleSheet}(null,On("nonce")),Gt=e.lazyload,Qt=e.lazyloadSelector,Xt=[],Yt=Ht?function(){var t=function(){if(bt||wt&&!Lt)return mt-1;var t=wt?"fixedWidth":"items",n=[];if((wt||e[t]<mt)&&n.push(e[t]),U)for(var i in U){var a=U[i][t];a&&(wt||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(wt?Lt/Math.min.apply(null,n):Math.max.apply(null,n))}(),n=$?Math.ceil((5*t-mt)/2):4*t-mt;return n=Math.max(t,n),Hn("edgePadding")?n+1:n}():0,Kt=$?mt+2*Yt:mt+Yt,Jt=!(!wt&&!bt||Ht),Ut=wt?wi():null,Zt=!$||!Ht,$t=st?"left":"top",te="",ee="",ne=wt?function(){return Et&&!Ht?mt-1:Math.ceil(-Ut/(wt+Mt))}:bt?function(){for(var t=0;t<Kt;t++)if(xt[t]>=-Ut)return t}:function(){return Et&&$&&!Ht?mt-1:Ht||$?Math.max(0,Kt-Math.ceil(At)):Kt-1},ie=En(On("startIndex")),ae=ie;Tn();var re,oe,ue=0,le=bt?null:ne(),se=e.preventActionWhenRunning,ce=e.swipeAngle,fe=!ce||"?",de=!1,ve=e.onInit,pe=new I,he=" tns-slider tns-"+e.mode,me=dt.id||function(){var t=window.tnsId;return window.tnsId=t?t+1:1,"tns"+window.tnsId}(),ye=On("disable"),ge=!1,xe=e.freezable,be=!(!xe||bt)&&Yn(),we=!1,Ce={click:Si,keydown:function(t){t=Wi(t);var e=[c.LEFT,c.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?_e.disabled||Si(t,-1):Ge.disabled||Si(t,1))}},Me={click:function(t){if(de){if(se)return;Li()}var e=zi(t=Wi(t));for(;e!==Ke&&!b(e,"data-nav");)e=e.parentNode;if(b(e,"data-nav")){var n=$e=Number(w(e,"data-nav")),i=wt||bt?n*mt/Ue:n*At;Bi(ke?n:Math.min(Math.ceil(i),mt-1),t),tn===n&&(un&&Ri(),$e=-1)}},keydown:function(t){t=Wi(t);var e=n.activeElement;if(!b(e,"data-nav"))return;var i=[c.LEFT,c.RIGHT,c.ENTER,c.SPACE].indexOf(t.keyCode),a=Number(w(e,"data-nav"));i>=0&&(0===i?a>0&&Pi(Ye[a-1]):1===i?a<Ue-1&&Pi(Ye[a+1]):($e=a,Bi(a,t)))}},Te={mouseover:function(){un&&(Hi(),ln=!0)},mouseout:function(){ln&&(ki(),ln=!1)}},Ee={visibilitychange:function(){n.hidden?un&&(Hi(),cn=!0):cn&&(ki(),cn=!1)}},Ae={keydown:function(t){t=Wi(t);var e=[c.LEFT,c.RIGHT].indexOf(t.keyCode);e>=0&&Si(t,0===e?-1:1)}},Ne={touchstart:Vi,touchmove:_i,touchend:Qi,touchcancel:Qi},Le={mousedown:Vi,mousemove:_i,mouseup:Qi,mouseleave:Qi},Be=Hn("controls"),Se=Hn("nav"),ke=!!bt||e.navAsThumbnails,He=Hn("autoplay"),Oe=Hn("touch"),De=Hn("mouseDrag"),Re="tns-slide-active",Ie="tns-slide-cloned",Pe="tns-complete",We={load:function(t){ai(zi(t))},error:function(t){e=zi(t),g(e,"failed"),ri(e);var e}},ze="force"===e.preventScrollOnTouch;if(Be)var qe,Fe,je=e.controlsContainer,Ve=e.controlsContainer?e.controlsContainer.outerHTML:"",_e=e.prevButton,Ge=e.nextButton,Qe=e.prevButton?e.prevButton.outerHTML:"",Xe=e.nextButton?e.nextButton.outerHTML:"";if(Se)var Ye,Ke=e.navContainer,Je=e.navContainer?e.navContainer.outerHTML:"",Ue=bt?mt:Yi(),Ze=0,$e=-1,tn=Nn(),en=tn,nn="tns-nav-active",an="Carousel Page ",rn=" (Current Slide)";if(He)var on,un,ln,sn,cn,fn="forward"===e.autoplayDirection?1:-1,dn=e.autoplayButton,vn=e.autoplayButton?e.autoplayButton.outerHTML:"",pn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Oe||De)var hn,mn,yn={},gn={},xn=!1,bn=st?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};bt||Mn(ye||be),q&&($t=q,te="translate",F?(te+=st?"3d(":"3d(0px, ",ee=st?", 0px, 0px)":", 0px)"):(te+=st?"X(":"Y(",ee=")")),$&&(dt.className=dt.className.replace("tns-vpfix","")),function(){Hn("gutter"),ct.className="tns-outer",ft.className="tns-inner",ct.id=me+"-ow",ft.id=me+"-iw",""===dt.id&&(dt.id=me);he+=W||bt?" tns-subpixel":" tns-no-subpixel",he+=O?" tns-calc":" tns-no-calc",bt&&(he+=" tns-autowidth");he+=" tns-"+e.axis,dt.className+=he,$?((ut=n.createElement("div")).id=me+"-mw",ut.className="tns-ovh",ct.appendChild(ut),ut.appendChild(ft)):ct.appendChild(ft);if(Ot){(ut||ft).className+=" tns-ah"}if(vt.insertBefore(ct,dt),ft.appendChild(dt),h(ht,(function(t,e){g(t,"tns-item"),t.id||(t.id=me+"-item"+e),!$&&ot&&g(t,ot),M(t,{"aria-hidden":"true",tabindex:"-1"})})),Yt){for(var t=n.createDocumentFragment(),i=n.createDocumentFragment(),a=Yt;a--;){var r=a%mt,o=ht[r].cloneNode(!0);if(g(o,Ie),T(o,"id"),i.insertBefore(o,i.firstChild),$){var u=ht[mt-1-r].cloneNode(!0);g(u,Ie),T(u,"id"),t.appendChild(u)}}dt.insertBefore(t,dt.firstChild),dt.appendChild(i),ht=dt.children}}(),function(){if(!$)for(var t=ie,n=ie+Math.min(mt,At);t<n;t++){var i=ht[t];i.style.left=100*(t-ie)/At+"%",g(i,it),x(i,ot)}st&&(W||bt?(v(_t,"#"+me+" > .tns-item","font-size:"+a.getComputedStyle(ht[0]).fontSize+";",p(_t)),v(_t,"#"+me,"font-size:0;",p(_t))):$&&h(ht,(function(t,e){t.style.marginLeft=function(t){return O?O+"("+100*t+"% / "+Kt+")":100*t/Kt+"%"}(e)})));if(z){if(j){var r=ut&&e.autoHeight?zn(e.speed):"";v(_t,"#"+me+"-mw",r,p(_t))}r=Dn(e.edgePadding,e.gutter,e.fixedWidth,e.speed,e.autoHeight),v(_t,"#"+me+"-iw",r,p(_t)),$&&(r=st&&!bt?"width:"+Rn(e.fixedWidth,e.gutter,e.items)+";":"",j&&(r+=zn(St)),v(_t,"#"+me,r,p(_t))),r=st&&!bt?In(e.fixedWidth,e.gutter,e.items):"",e.gutter&&(r+=Pn(e.gutter)),$||(j&&(r+=zn(St)),_&&(r+=qn(St))),r&&v(_t,"#"+me+" > .tns-item",r,p(_t))}else{$&&Ot&&(ut.style[j]=St/1e3+"s"),ft.style.cssText=Dn(Ct,Mt,wt,Ot),$&&st&&!bt&&(dt.style.width=Rn(wt,Mt,At));r=st&&!bt?In(wt,Mt,At):"";Mt&&(r+=Pn(Mt)),r&&v(_t,"#"+me+" > .tns-item",r,p(_t))}if(U&&z)for(var o in U){o=parseInt(o);var u=U[o],l=(r="",""),s="",c="",f="",d=bt?null:On("items",o),m=On("fixedWidth",o),y=On("speed",o),b=On("edgePadding",o),w=On("autoHeight",o),C=On("gutter",o);j&&ut&&On("autoHeight",o)&&"speed"in u&&(l="#"+me+"-mw{"+zn(y)+"}"),("edgePadding"in u||"gutter"in u)&&(s="#"+me+"-iw{"+Dn(b,C,m,y,w)+"}"),$&&st&&!bt&&("fixedWidth"in u||"items"in u||wt&&"gutter"in u)&&(c="width:"+Rn(m,C,d)+";"),j&&"speed"in u&&(c+=zn(y)),c&&(c="#"+me+"{"+c+"}"),("fixedWidth"in u||wt&&"gutter"in u||!$&&"items"in u)&&(f+=In(m,C,d)),"gutter"in u&&(f+=Pn(C)),!$&&"speed"in u&&(j&&(f+=zn(y)),_&&(f+=qn(y))),f&&(f="#"+me+" > .tns-item{"+f+"}"),(r=l+s+c+f)&&_t.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",_t.cssRules.length)}}(),Fn();var wn=Ht?$?function(){var t=ue,e=le;t+=Nt,e-=Nt,Ct?(t+=1,e-=1):wt&&(Tt+Mt)%(wt+Mt)&&(e-=1),Yt&&(ie>e?ie-=mt:ie<t&&(ie+=mt))}:function(){if(ie>le)for(;ie>=ue+mt;)ie-=mt;else if(ie<ue)for(;ie<=le-mt;)ie+=mt}:function(){ie=Math.max(ue,Math.min(le,ie))},Cn=$?function(){xi(dt,""),j||!St?(Ti(),St&&L(dt)||Li()):function(t,e,n,i,a,r,o){var u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",s=(a=a.replace(l,""),Number(t.style[e].replace(n,"").replace(i,"").replace(l,""))),c=(a-s)/r*u;setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u)}(dt,$t,te,ee,Ci(),St,Li),st||Xi()}:function(){Xt=[];var t={};t[Q]=t[X]=Li,R(ht[ae],t),D(ht[ie],t),Ei(ae,it,at,!0),Ei(ie,ot,it),Q&&X&&St&&L(dt)||Li()};return{version:"2.9.4",getInfo:Ji,events:pe,goTo:Bi,play:function(){zt&&!un&&(Di(),sn=!1)},pause:function(){un&&(Ri(),sn=!0)},isOn:gt,updateSliderHeight:fi,refresh:Fn,destroy:function(){if(_t.disabled=!0,_t.ownerNode&&_t.ownerNode.remove(),R(a,{resize:Qn}),Bt&&R(n,Ae),je&&R(je,Ce),Ke&&R(Ke,Me),R(dt,Te),R(dt,Ee),dn&&R(dn,{click:Ii}),zt&&clearInterval(on),$&&Q){var t={};t[Q]=Li,R(dt,t)}Pt&&R(dt,Ne),Wt&&R(dt,Le);var i=[pt,Ve,Qe,Xe,Je,vn];for(var r in K.forEach((function(t,n){var a="container"===t?ct:e[t];if("object"===typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],e[t]=r?r.nextElementSibling:o.firstElementChild}})),K=it=at=rt=ot=st=ct=ft=dt=vt=pt=ht=mt=lt=yt=bt=wt=Ct=Mt=Tt=At=Nt=Lt=Bt=St=kt=Ht=Ot=_t=Gt=xt=Xt=Yt=Kt=Jt=Ut=Zt=$t=te=ee=ne=ie=ae=ue=le=ce=fe=de=ve=pe=he=me=ye=ge=xe=be=we=Ce=Me=Te=Ee=Ae=Ne=Le=Be=Se=ke=He=Oe=De=Re=Pe=We=re=Dt=Rt=je=Ve=_e=Ge=qe=Fe=It=Ke=Je=Ye=Ue=Ze=$e=tn=en=nn=an=rn=zt=qt=fn=Ft=jt=dn=vn=Vt=pn=on=un=ln=sn=cn=yn=gn=hn=xn=mn=bn=Pt=Wt=null,this)"rebuild"!==r&&(this[r]=null);gt=!1},rebuild:function(){return t(o(e,J))}}}function Mn(t){t&&(Dt=It=Pt=Wt=Bt=zt=jt=Vt=!1)}function Tn(){for(var t=$?ie-Yt:ie;t<0;)t+=mt;return t%mt+1}function En(t){return t=t?Math.max(0,Math.min(Ht?mt-1:mt-At,t)):0,$?t+Yt:t}function An(t){for(null==t&&(t=ie),$&&(t-=Yt);t<0;)t+=mt;return Math.floor(t%mt)}function Nn(){var t,e=An();return t=ke?e:wt||bt?Math.ceil((e+1)*Ue/mt-1):Math.floor(e/At),!Ht&&$&&ie===le&&(t=Ue-1),t}function Ln(){return a.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Bn(t){return"top"===t?"afterbegin":"beforeend"}function Sn(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||Sn(t.parentNode)}}function kn(){var t=Ct?2*Ct-Mt:0;return Sn(vt)-t}function Hn(t){if(e[t])return!0;if(U)for(var n in U)if(U[n][t])return!0;return!1}function On(t,n){if(null==n&&(n=yt),"items"===t&&wt)return Math.floor((Tt+Mt)/(wt+Mt))||1;var i=e[t];if(U)for(var a in U)n>=parseInt(a)&&t in U[a]&&(i=U[a][t]);return"slideBy"===t&&"page"===i&&(i=On("items")),$||"slideBy"!==t&&"items"!==t||(i=Math.floor(i)),i}function Dn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=st?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(st?u+" 0 0":"0 "+u+" 0")+";"}return!$&&a&&j&&i&&(r+=zn(i)),r}function Rn(t,e,n){return t?(t+e)*Kt+"px":O?O+"("+100*Kt+"% / "+n+")":100*Kt/n+"%"}function In(t,e,n){var i;if(t)i=t+e+"px";else{$||(n=Math.floor(n));var a=$?Kt:n;i=O?O+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==Z?i+";":i+" !important;"}function Pn(t){var e="";!1!==t&&(e=(st?"padding-":"margin-")+(st?"right":"bottom")+": "+t+"px;");return e}function Wn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function zn(t){return Wn(j,18)+"transition-duration:"+t/1e3+"s;"}function qn(t){return Wn(_,17)+"animation-duration:"+t/1e3+"s;"}function Fn(){if(Hn("autoHeight")||bt||!st){var t=dt.querySelectorAll("img");h(t,(function(t){var e=t.src;Gt||(e&&e.indexOf("data:image")<0?(t.src="",D(t,We),g(t,"loading"),t.src=e):ai(t))})),i((function(){li(E(t),(function(){re=!0}))})),Hn("autoHeight")&&(t=oi(ie,Math.min(ie+At-1,Kt-1))),Gt?jn():i((function(){li(E(t),jn)}))}else $&&Mi(),_n(),Gn()}function jn(){if(bt&&mt>1){var t=Ht?ie:mt-1;!function e(){var n=ht[t].getBoundingClientRect().left,i=ht[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Vn():setTimeout((function(){e()}),16)}()}else Vn()}function Vn(){st&&!bt||(di(),bt?(Ut=wi(),xe&&(be=Yn()),le=ne(),Mn(ye||be)):Xi()),$&&Mi(),_n(),Gn()}function _n(){if(vi(),ct.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ei()+"</span>  of "+mt+"</div>"),oe=ct.querySelector(".tns-liveregion .current"),He){var t=zt?"stop":"start";dn?M(dn,{"data-action":t}):e.autoplayButtonOutput&&(ct.insertAdjacentHTML(Bn(e.autoplayPosition),'<button type="button" data-action="'+t+'">'+pn[0]+t+pn[1]+Ft[0]+"</button>"),dn=ct.querySelector("[data-action]")),dn&&D(dn,{click:Ii}),zt&&(Di(),jt&&D(dt,Te),Vt&&D(dt,Ee))}if(Se){if(Ke)M(Ke,{"aria-label":"Carousel Pagination"}),h(Ye=Ke.children,(function(t,e){M(t,{"data-nav":e,tabindex:"-1","aria-label":an+(e+1),"aria-controls":me})}));else{for(var n="",i=ke?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+me+'" '+i+' aria-label="'+an+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ct.insertAdjacentHTML(Bn(e.navPosition),n),Ke=ct.querySelector(".tns-nav"),Ye=Ke.children}if(Ki(),j){var r=j.substring(0,j.length-18).toLowerCase(),o="transition: all "+St/1e3+"s";r&&(o="-"+r+"-"+o),v(_t,"[aria-controls^="+me+"-item]",o,p(_t))}M(Ye[tn],{"aria-label":an+(tn+1)+rn}),T(Ye[tn],"tabindex"),g(Ye[tn],nn),D(Ke,Me)}Be&&(je||_e&&Ge||(ct.insertAdjacentHTML(Bn(e.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+me+'">'+Rt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+me+'">'+Rt[1]+"</button></div>"),je=ct.querySelector(".tns-controls")),_e&&Ge||(_e=je.children[0],Ge=je.children[1]),e.controlsContainer&&M(je,{"aria-label":"Carousel Navigation",tabindex:"0"}),(e.controlsContainer||e.prevButton&&e.nextButton)&&M([_e,Ge],{"aria-controls":me,tabindex:"-1"}),(e.controlsContainer||e.prevButton&&e.nextButton)&&(M(_e,{"data-controls":"prev"}),M(Ge,{"data-controls":"next"})),qe=hi(_e),Fe=hi(Ge),gi(),je?D(je,Ce):(D(_e,Ce),D(Ge,Ce))),Jn()}function Gn(){if($&&Q){var t={};t[Q]=Li,D(dt,t)}Pt&&D(dt,Ne,e.preventScrollOnTouch),Wt&&D(dt,Le),Bt&&D(n,Ae),"inner"===Z?pe.on("outerResized",(function(){Xn(),pe.emit("innerLoaded",Ji())})):(U||wt||bt||Ot||!st)&&D(a,{resize:Qn}),Ot&&("outer"===Z?pe.on("innerLoaded",ui):ye||ui()),ii(),ye?$n():be&&Zn(),pe.on("indexChanged",si),"inner"===Z&&pe.emit("innerLoaded",Ji()),"function"===typeof ve&&ve(Ji()),gt=!0}function Qn(t){i((function(){Xn(Wi(t))}))}function Xn(t){if(gt){"outer"===Z&&pe.emit("outerResized",Ji(t)),yt=Ln();var i,a=lt,r=!1;U&&(Kn(),(i=a!==lt)&&pe.emit("newBreakpointStart",Ji(t)));var o,u,l=At,s=ye,c=be,f=Bt,d=Dt,m=It,y=Pt,b=Wt,w=zt,C=jt,M=Vt,T=ie;if(i){var E=wt,L=Ot,B=Rt,S=Et,k=Ft;if(!z)var H=Mt,O=Ct}if(Bt=On("arrowKeys"),Dt=On("controls"),It=On("nav"),Pt=On("touch"),Et=On("center"),Wt=On("mouseDrag"),zt=On("autoplay"),jt=On("autoplayHoverPause"),Vt=On("autoplayResetOnVisibility"),i&&(ye=On("disable"),wt=On("fixedWidth"),St=On("speed"),Ot=On("autoHeight"),Rt=On("controlsText"),Ft=On("autoplayText"),qt=On("autoplayTimeout"),z||(Ct=On("edgePadding"),Mt=On("gutter"))),Mn(ye),Tt=kn(),st&&!bt||ye||(di(),st||(Xi(),r=!0)),(wt||bt)&&(Ut=wi(),le=ne()),(i||wt)&&(At=On("items"),Nt=On("slideBy"),(u=At!==l)&&(wt||bt||(le=ne()),wn())),i&&ye!==s&&(ye?$n():function(){if(!ge)return;if(_t.disabled=!1,dt.className+=he,Mi(),Ht)for(var t=Yt;t--;)$&&N(ht[t]),N(ht[Kt-t-1]);if(!$)for(var e=ie,n=ie+mt;e<n;e++){var i=ht[e],a=e<ie+At?it:ot;i.style.left=100*(e-ie)/At+"%",g(i,a)}Un(),ge=!1}()),xe&&(i||wt||bt)&&(be=Yn())!==c&&(be?(Ti(Ci(En(0))),Zn()):(!function(){if(!we)return;Ct&&z&&(ft.style.margin="");if(Yt)for(var t="tns-transparent",e=Yt;e--;)$&&x(ht[e],t),x(ht[Kt-e-1],t);Un(),we=!1}(),r=!0)),Mn(ye||be),zt||(jt=Vt=!1),Bt!==f&&(Bt?D(n,Ae):R(n,Ae)),Dt!==d&&(Dt?je?N(je):(_e&&N(_e),Ge&&N(Ge)):je?A(je):(_e&&A(_e),Ge&&A(Ge))),It!==m&&(It?(N(Ke),Ki()):A(Ke)),Pt!==y&&(Pt?D(dt,Ne,e.preventScrollOnTouch):R(dt,Ne)),Wt!==b&&(Wt?D(dt,Le):R(dt,Le)),zt!==w&&(zt?(dn&&N(dn),un||sn||Di()):(dn&&A(dn),un&&Ri())),jt!==C&&(jt?D(dt,Te):R(dt,Te)),Vt!==M&&(Vt?D(n,Ee):R(n,Ee)),i){if(wt===E&&Et===S||(r=!0),Ot!==L&&(Ot||(ft.style.height="")),Dt&&Rt!==B&&(_e.innerHTML=Rt[0],Ge.innerHTML=Rt[1]),dn&&Ft!==k){var I=zt?1:0,P=dn.innerHTML,W=P.length-k[I].length;P.substring(W)===k[I]&&(dn.innerHTML=P.substring(0,W)+Ft[I])}}else Et&&(wt||bt)&&(r=!0);if((u||wt&&!bt)&&(Ue=Yi(),Ki()),(o=ie!==T)?(pe.emit("indexChanged",Ji()),r=!0):u?o||si():(wt||bt)&&(ii(),vi(),ti()),u&&!$&&function(){for(var t=ie+Math.min(mt,At),e=Kt;e--;){var n=ht[e];e>=ie&&e<t?(g(n,"tns-moving"),n.style.left=100*(e-ie)/At+"%",g(n,it),x(n,ot)):n.style.left&&(n.style.left="",g(n,ot),x(n,it)),x(n,at)}setTimeout((function(){h(ht,(function(t){x(t,"tns-moving")}))}),300)}(),!ye&&!be){if(i&&!z&&(Ct===O&&Mt===H||(ft.style.cssText=Dn(Ct,Mt,wt,St,Ot)),st)){$&&(dt.style.width=Rn(wt,Mt,At));var q=In(wt,Mt,At)+Pn(Mt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(_t,p(_t)-1),v(_t,"#"+me+" > .tns-item",q,p(_t))}Ot&&ui(),r&&(Mi(),ae=ie)}i&&pe.emit("newBreakpointEnd",Ji(t))}}function Yn(){if(!wt&&!bt)return mt<=(Et?At-(At-1)/2:At);var t=wt?(wt+Mt)*mt:xt[mt],e=Ct?Tt+2*Ct:Tt+Mt;return Et&&(e-=wt?(Tt-wt)/2:(Tt-(xt[ie+1]-xt[ie]-Mt))/2),t<=e}function Kn(){for(var t in lt=0,U)t=parseInt(t),yt>=t&&(lt=t)}function Jn(){!zt&&dn&&A(dn),!It&&Ke&&A(Ke),Dt||(je?A(je):(_e&&A(_e),Ge&&A(Ge)))}function Un(){zt&&dn&&N(dn),It&&Ke&&N(Ke),Dt&&(je?N(je):(_e&&N(_e),Ge&&N(Ge)))}function Zn(){if(!we){if(Ct&&(ft.style.margin="0px"),Yt)for(var t="tns-transparent",e=Yt;e--;)$&&g(ht[e],t),g(ht[Kt-e-1],t);Jn(),we=!0}}function $n(){if(!ge){if(_t.disabled=!0,dt.className=dt.className.replace(he.substring(1),""),T(dt,["style"]),Ht)for(var t=Yt;t--;)$&&A(ht[t]),A(ht[Kt-t-1]);if(st&&$||T(ft,["style"]),!$)for(var e=ie,n=ie+mt;e<n;e++){var i=ht[e];T(i,["style"]),x(i,it),x(i,ot)}Jn(),ge=!0}}function ti(){var t=ei();oe.innerHTML!==t&&(oe.innerHTML=t)}function ei(){var t=ni(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ni(t){null==t&&(t=Ci());var e,n,i,a=ie;if(Et||Ct?(bt||wt)&&(n=-(parseFloat(t)+Ct),i=n+Tt+2*Ct):bt&&(n=xt[ie],i=n+Tt),bt)xt.forEach((function(t,r){r<Kt&&((Et||Ct)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(wt){var r=wt+Mt;Et||Ct?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Tt/r)-1}else if(Et||Ct){var o=At-1;if(Et?(a-=o/2,e=ie+o/2):e=ie+o,Ct){var u=Ct*At/Tt;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+At-1;a=Math.max(a,0),e=Math.min(e,Kt-1)}return[a,e]}function ii(){if(Gt&&!ye){var t=ni();t.push(Qt),oi.apply(null,t).forEach((function(t){if(!y(t,Pe)){var e={};e[Q]=function(t){t.stopPropagation()},D(t,e),D(t,We),t.src=w(t,"data-src");var n=w(t,"data-srcset");n&&(t.srcset=n),g(t,"loading")}}))}}function ai(t){g(t,"loaded"),ri(t)}function ri(t){g(t,Pe),x(t,"loading"),R(t,We)}function oi(t,e,n){var i=[];for(n||(n="img");t<=e;)h(ht[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function ui(){var t=oi.apply(null,ni());i((function(){li(t,fi)}))}function li(t,e){return re?e():(t.forEach((function(e,n){!Gt&&e.complete&&ri(e),y(e,Pe)&&t.splice(n,1)})),t.length?void i((function(){li(t,e)})):e())}function si(){ii(),vi(),ti(),gi(),function(){if(It&&(tn=$e>=0?$e:Nn(),$e=-1,tn!==en)){var t=Ye[en],e=Ye[tn];M(t,{tabindex:"-1","aria-label":an+(en+1)}),x(t,nn),M(e,{"aria-label":an+(tn+1)+rn}),T(e,"tabindex"),g(e,nn),en=tn}}()}function ci(t,e){for(var n=[],i=t,a=Math.min(t+e,Kt);i<a;i++)n.push(ht[i].offsetHeight);return Math.max.apply(null,n)}function fi(){var t=Ot?ci(ie,At):ci(Yt,mt),e=ut||ft;e.style.height!==t&&(e.style.height=t+"px")}function di(){xt=[0];var t=st?"left":"top",e=st?"right":"bottom",n=ht[0].getBoundingClientRect()[t];h(ht,(function(i,a){a&&xt.push(i.getBoundingClientRect()[t]-n),a===Kt-1&&xt.push(i.getBoundingClientRect()[e]-n)}))}function vi(){var t=ni(),e=t[0],n=t[1];h(ht,(function(t,i){i>=e&&i<=n?b(t,"aria-hidden")&&(T(t,["aria-hidden","tabindex"]),g(t,Re)):b(t,"aria-hidden")||(M(t,{"aria-hidden":"true",tabindex:"-1"}),x(t,Re))}))}function pi(t){return t.nodeName.toLowerCase()}function hi(t){return"button"===pi(t)}function mi(t){return"true"===t.getAttribute("aria-disabled")}function yi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function gi(){if(Dt&&!kt&&!Ht){var t=qe?_e.disabled:mi(_e),e=Fe?Ge.disabled:mi(Ge),n=ie<=ue,i=!kt&&ie>=le;n&&!t&&yi(qe,_e,!0),!n&&t&&yi(qe,_e,!1),i&&!e&&yi(Fe,Ge,!0),!i&&e&&yi(Fe,Ge,!1)}}function xi(t,e){j&&(t.style[j]=e)}function bi(t){return null==t&&(t=ie),bt?(Tt-(Ct?Mt:0)-(xt[t+1]-xt[t]-Mt))/2:wt?(Tt-wt)/2:(At-1)/2}function wi(){var t=Tt+(Ct?Mt:0)-(wt?(wt+Mt)*Kt:xt[Kt]);return Et&&!Ht&&(t=wt?-(wt+Mt)*(Kt-1)-bi():bi(Kt-1)-xt[Kt-1]),t>0&&(t=0),t}function Ci(t){var e;if(null==t&&(t=ie),st&&!bt)if(wt)e=-(wt+Mt)*t,Et&&(e+=bi());else{var n=q?Kt:At;Et&&(t-=bi()),e=100*-t/n}else e=-xt[t],Et&&bt&&(e+=bi());return Jt&&(e=Math.max(e,Ut)),e+=!st||bt||wt?"px":"%"}function Mi(t){xi(dt,"0s"),Ti(t)}function Ti(t){null==t&&(t=Ci()),dt.style[$t]=te+t+ee}function Ei(t,e,n,i){var a=t+At;Ht||(a=Math.min(a,Kt));for(var r=t;r<a;r++){var o=ht[r];i||(o.style.left=100*(r-ie)/At+"%"),rt&&V&&(o.style[V]=o.style[G]=rt*(r-t)/1e3+"s"),x(o,e),g(o,n),i&&Xt.push(o)}}function Ai(t,e){Zt&&wn(),(ie!==ae||e)&&(pe.emit("indexChanged",Ji()),pe.emit("transitionStart",Ji()),Ot&&ui(),un&&t&&["click","keydown"].indexOf(t.type)>=0&&Ri(),de=!0,Cn())}function Ni(t){return t.toLowerCase().replace(/-/g,"")}function Li(t){if($||de){if(pe.emit("transitionEnd",Ji(t)),!$&&Xt.length>0)for(var e=0;e<Xt.length;e++){var n=Xt[e];n.style.left="",G&&V&&(n.style[G]="",n.style[V]=""),x(n,at),g(n,ot)}if(!t||!$&&t.target.parentNode===dt||t.target===dt&&Ni(t.propertyName)===Ni($t)){if(!Zt){var i=ie;wn(),ie!==i&&(pe.emit("indexChanged",Ji()),Mi())}"inner"===Z&&pe.emit("innerLoaded",Ji()),de=!1,ae=ie}}}function Bi(t,e){if(!be)if("prev"===t)Si(e,-1);else if("next"===t)Si(e,1);else{if(de){if(se)return;Li()}var n=An(),i=0;if("first"===t?i=-n:"last"===t?i=$?mt-At-n:mt-1-n:("number"!==typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!$&&i&&Math.abs(i)<At){var a=i>0?1:-1;i+=ie+i-mt>=ue?mt*a:2*mt*a*-1}ie+=i,$&&Ht&&(ie<ue&&(ie+=mt),ie>le&&(ie-=mt)),An(ie)!==An(ae)&&Ai(e)}}function Si(t,e){if(de){if(se)return;Li()}var n;if(!e){for(var i=zi(t=Wi(t));i!==je&&[_e,Ge].indexOf(i)<0;)i=i.parentNode;var a=[_e,Ge].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(kt){if(ie===ue&&-1===e)return void Bi("last",t);if(ie===le&&1===e)return void Bi("first",t)}e&&(ie+=Nt*e,bt&&(ie=Math.floor(ie)),Ai(n||t&&"keydown"===t.type?t:null))}function ki(){on=setInterval((function(){Si(null,fn)}),qt),un=!0}function Hi(){clearInterval(on),un=!1}function Oi(t,e){M(dn,{"data-action":t}),dn.innerHTML=pn[0]+t+pn[1]+e}function Di(){ki(),dn&&Oi("stop",Ft[1])}function Ri(){Hi(),dn&&Oi("start",Ft[0])}function Ii(){un?(Ri(),sn=!0):(Di(),sn=!1)}function Pi(t){t.focus()}function Wi(t){return qi(t=t||a.event)?t.changedTouches[0]:t}function zi(t){return t.target||a.event.srcElement}function qi(t){return t.type.indexOf("touch")>=0}function Fi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function ji(){return function(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return i>=90-e?n="horizontal":i<=e&&(n="vertical"),n}((t=gn.y-yn.y,n=gn.x-yn.x,Math.atan2(t,n)*(180/Math.PI)),ce)===e.axis;var t,n}function Vi(t){if(de){if(se)return;Li()}zt&&un&&Hi(),xn=!0,mn&&(r(mn),mn=null);var e=Wi(t);pe.emit(qi(t)?"touchStart":"dragStart",Ji(t)),!qi(t)&&["img","a"].indexOf(pi(zi(t)))>=0&&Fi(t),gn.x=yn.x=e.clientX,gn.y=yn.y=e.clientY,$&&(hn=parseFloat(dt.style[$t].replace(te,"")),xi(dt,"0s"))}function _i(t){if(xn){var e=Wi(t);gn.x=e.clientX,gn.y=e.clientY,$?mn||(mn=i((function(){Gi(t)}))):("?"===fe&&(fe=ji()),fe&&(ze=!0)),("boolean"!==typeof t.cancelable||t.cancelable)&&ze&&t.preventDefault()}}function Gi(t){if(fe){if(r(mn),xn&&(mn=i((function(){Gi(t)}))),"?"===fe&&(fe=ji()),fe){!ze&&qi(t)&&(ze=!0);try{t.type&&pe.emit(qi(t)?"touchMove":"dragMove",Ji(t))}catch(a){}var e=hn,n=bn(gn,yn);if(!st||wt||bt)e+=n,e+="px";else e+=q?n*At*100/((Tt+Mt)*Kt):100*n/(Tt+Mt),e+="%";dt.style[$t]=te+e+ee}}else xn=!1}function Qi(t){if(xn){mn&&(r(mn),mn=null),$&&xi(dt,""),xn=!1;var n=Wi(t);gn.x=n.clientX,gn.y=n.clientY;var a=bn(gn,yn);if(Math.abs(a)){if(!qi(t)){var o=zi(t);D(o,{click:function t(e){Fi(e),R(o,{click:t})}})}$?mn=i((function(){if(st&&!bt){var e=-a*At/(Tt+Mt);e=a>0?Math.floor(e):Math.ceil(e),ie+=e}else{var n=-(hn+a);if(n<=0)ie=ue;else if(n>=xt[Kt-1])ie=le;else for(var i=0;i<Kt&&n>=xt[i];)ie=i,n>xt[i]&&a<0&&(ie+=1),i++}Ai(t,a),pe.emit(qi(t)?"touchEnd":"dragEnd",Ji(t))})):fe&&Si(t,a>0?-1:1)}}"auto"===e.preventScrollOnTouch&&(ze=!1),ce&&(fe="?"),zt&&!un&&ki()}function Xi(){(ut||ft).style.height=xt[ie+At]-xt[ie]+"px"}function Yi(){var t=wt?(wt+Mt)*mt/Tt:mt/At;return Math.min(Math.ceil(t),mt)}function Ki(){if(It&&!ke&&Ue!==Ze){var t=Ze,e=Ue,n=N;for(Ze>Ue&&(t=Ue,e=Ze,n=A);t<e;)n(Ye[t]),t++;Ze=Ue}}function Ji(t){return{container:dt,slideItems:ht,navContainer:Ke,navItems:Ye,controlsContainer:je,hasControls:Be,prevButton:_e,nextButton:Ge,items:At,slideBy:Nt,cloneCount:Yt,slideCount:mt,slideCountNew:Kt,index:ie,indexCached:ae,displayIndex:Tn(),navCurrentIndex:tn,navCurrentIndexCached:en,pages:Ue,pagesCached:Ze,sheet:_t,isOn:gt,event:t||{}}}Y&&console.warn("No slides found in",e.container)}},219:function(){}}]);
//# sourceMappingURL=966.a3ea3aa2.chunk.js.map