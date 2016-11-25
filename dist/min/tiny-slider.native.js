var tns=function(){"use strict";function t(t){function i(){return"gallery"===Lt||"page"===t.slideBy?Rt:t.slideBy}function f(){if(Gt<=Rt){Ut=!1;var n;mn="gallery"===Lt?0:nn,mn!==n&&T.emit("indexChanged",yt()),un&&c(un),sn&&c(sn),Tn&&c(Tn)}else Ut=t.arrowKeys,cn&&u(un),on&&u(sn),xn&&u(Tn)}function p(){if(o(St,{"data-tns-role":"wrapper"}),o(Wt,{"data-tns-role":"content-wrapper"}),"vertical"===Ot?o(Wt,{"data-tns-hidden":"y"}):o(St,{"data-tns-hidden":"x"}),"carousel"===Lt){var t=Xt&&Ft?B():Ft?Ft+qt:0;Wt.style.cssText="horizontal"===Ot?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+Ft+"px; height: "+j()+"px;"}}function y(){At=Rn(),Rt=Hn(),Tt=en-Rt-yn,"horizontal"!==Ot||Xt||(_t=Bn()),Mt=Gn(),jt=i()}function A(){if(""===Ht.id&&(Ht.id=$t),o(Ht,{"data-tns-role":"content","data-tns-mode":Lt,"data-tns-axis":Ot}),"carousel"===Lt){Jt&&o(Ht,{"data-tns-hidden":"y"});var t,n=m,e="left",a="translate",i="",r="",l="X";if("horizontal"===Ot){var s=(_t+1)*en+"px";Ht.style.width=s,t=-mn*_t}else t=-xt[mn],l="Y",e="top";m?(i=a+l+"(",r=")"):n=e,Ht.style[n]=i+t+"px"+r}}function D(){navigator.msMaxTouchPoints&&(St.classList.add("ms-touch"),h(St,["scroll",st]))}function k(){for(var t=0;t<Gt;t++){var n=Bt[t];n.id=$t+"-item"+t,"gallery"===Lt&&On&&n.classList.add(On),o(n,{"aria-hidden":"true"});var e="horizontal"===Ot?"right":"bottom",a="";"carousel"===Lt&&(a="margin-"+e+": "+qt+"px;"),"horizontal"===Ot&&(a="width: "+(_t-qt)+"px; "+a),n.style.cssText+=a}if(Vt||Ft){for(var i=document.createDocumentFragment(),r=document.createDocumentFragment(),s=nn;s--;){var c=s%Gt,u=Bt[c].cloneNode(!0);if(l(u,"id"),r.insertBefore(u,r.firstChild),"carousel"===Lt){var d=Bt[Gt-1-c].cloneNode(!0);l(d,"id"),i.appendChild(d)}}Ht.insertBefore(i,Ht.firstChild),Ht.appendChild(r),Bt=Ht.children}}function N(){on&&(t.controlsContainer?(wt=sn.children[0],Et=sn.children[1],o(sn,{"aria-label":"Carousel Navigation"}),o(wt,{"data-controls":"prev"}),o(Et,{"data-controls":"next"}),o(sn.children,{"aria-controls":$t,tabindex:"-1"})):(gn.append(St,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+$t+'" type="button">'+ln[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+$t+'" type="button">'+ln[1]+"</button></div>"),sn=St.querySelector('[data-tns-role="controls"]'),wt=sn.children[0],Et=sn.children[1]))}function P(){if(cn)if(t.navContainer){o(un,{"aria-label":"Carousel Pagination"}),Ct=un.children;for(var n=Ct.length;n--;)o(Ct[n],{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":$t+"-item"+n})}else{for(var e="",a=0;a<Gt;a++)e+='<button data-nav="'+a+'" tabindex="-1" aria-selected="false" aria-controls="'+$t+"-item"+a+'" type="button"></button>';e='<div data-tns-role="nav" aria-label="Carousel Pagination">'+e+"</div>",gn.append(St,e),un=St.querySelector('[data-tns-role="nav"]'),Ct=un.children;for(var i=Mt;i<Gt;i++)o(Ct[i],{hidden:""});dn=Mt}}function I(){xn&&(Tn?o(Tn,{"data-action":"stop"}):(un||(gn.append(St,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),un=St.querySelector('[data-tns-role="nav"]')),gn.append(un,'<button data-action="stop" type="button">'+kn+Cn[0]+"</button>"),Tn=un.querySelector("[data-action]")),nt())}function z(){for(var t=mn;t<mn+Rt;t++){var n=Bt[t];o(n,{"aria-hidden":"false"}),"gallery"===Lt&&(n.style.left=_t*(t-mn)+"px",n.classList.remove(On),n.classList.add(zn))}on&&(o(Et,{tabindex:"0"}),(mn===bn&&!Vt||Kt)&&(wt.disabled=!0)),cn&&o(Ct[0],{tabindex:"0","aria-selected":"true"})}function L(){if("carousel"===Lt&&(x&&h(Ht,[x,J]),Nn&&h(Ht,[["touchstart",ct],["touchmove",ut],["touchend",dt],["touchcancel",dt]])),cn)for(var t=0;t<Gt;t++)h(Ct[t],[["click",tt],["keydown",lt]]);on&&(h(wt,[["click",$],["keydown",ot]]),h(Et,[["click",_],["keydown",ot]])),xn&&(h(Tn,["click",at]),Mn&&(h(Ht,["mouseover",function(){An&&(et(),Dn=!0)}]),h(Ht,["mouseout",function(){!An&&Dn&&(nt(),Dn=!1)}]))),Ut&&h(document,["keydown",it]),h(window,[["resize",gt],["scroll",bt]])}function O(){if(Zt&&gn.isInViewport(Ht)){for(var t=[],n=mn-1;n<mn+Rt+1;n++){for(var e=Bt[n].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;t.unshift(e[a]));t.unshift()}for(var i=t.length;i--;){var o=t[i];o.classList.contains("loaded")||(o.src=r(o,"data-src"),o.classList.add("loaded"))}}}function S(){if(Jt){for(var t=[],n=mn;n<mn+Rt;n++)for(var e=Bt[n].querySelectorAll("img"),a=e.length;a--;)t.push(e[a]);0===t.length?G():W(t)}}function W(t){for(var n=t.length;n--;)d(t[n])&&t.splice(n,1);0===t.length?G():setTimeout(function(){W(t)},16)}function H(){gn.wrap(Ht,Wt),gn.wrap(Wt,St),y(),k(),"vertical"===Ot&&R(),p(),A(),D(),N(),P(),I(),z(),L(),f(),O(),S(),T.emit("initialized",yt())}function B(){return(At%_t+qt)/2}function G(){for(var t,n=[],e=mn;e<mn+Rt;e++)n.push(Bt[e].offsetHeight);t=Math.max.apply(null,n),Ht.style.height!==t&&(g&&Y(1),Ht.style.height=t+"px")}function R(){xt=[0];for(var t,n=Bt[0].getBoundingClientRect().top,e=1;e<en;e++)t=Bt[e].getBoundingClientRect().top,xt.push(t-n)}function j(){return xt[mn+Rt]-xt[mn]}function q(){St.style.msScrollSnapPointsX="snapInterval(0%, "+_t+")"}function F(){var t,n,e,a;mn!==pn&&(mn>pn?(t=pn,n=Math.min(pn+Rt,mn),e=Math.max(pn+Rt,mn),a=mn+Rt):(t=Math.max(mn+Rt,pn),n=pn+Rt,e=mn,a=Math.min(mn+Rt,pn))),jt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var i=t;i<n;i++)o(Bt[i],{"aria-hidden":"true"});for(var r=e;r<a;r++)o(Bt[r],{"aria-hidden":"false"})}function X(){cn&&(fn===-1?t.navContainer?hn=mn%Gt:(hn=Math.floor(mn%Gt/Rt),Vt||Gt%Rt===0||mn!==Tt||(hn+=1)):(hn=fn,fn=-1),hn!==vn&&(o(Ct[vn],{tabindex:"-1","aria-selected":"false"}),o(Ct[hn],{tabindex:"0","aria-selected":"true"}),vn=hn))}function U(){if(on&&!Vt){var t=[],n=[];if(mn===bn?(t.push(wt),n.push(Et),rt(wt,Et)):Kt||mn!==Tt?n.push(wt,Et):(t.push(Et),n.push(wt),rt(Et,wt)),t.length>0)for(var e=t.length;e--;){var a=t[e];a.disabled||(a.disabled=!0,o(a,{tabindex:"-1"}))}if(n.length>0)for(var i=n.length;i--;){var r=n[i];r.disabled&&(r.disabled=!1,o(r,{tabindex:"0"}))}}}function Y(t,n){t=0===t?"":Yt/1e3+"s",n=n||Ht,n.style[g]=t,"gallery"===Lt&&(n.style[w]=t),"vertical"===Ot&&(Wt.style[g]=t)}function K(t,n){g&&Y(t),jn(n)}function V(){x&&o(Ht,{"aria-busy":"true"}),rn&&qn(),mn!==pn&&T.emit("indexChanged",yt()),m&&T.emit("transitionStart",yt()),K(),x||J()}function J(t){if(x&&T.emit("transitionEnd",yt(t)),"gallery"===Lt&&tn.length>0)for(var n=0;n<Rt;n++){var e=tn[n];g&&Y(0,e),Sn&&b&&(e.style[b]=e.style[E]=""),e.classList.remove(Ln),e.classList.add(On),e.style.left=""}if(!x||t&&"height"!==t.propertyName){if(!rn){var a=mn;qn(),mn!==a&&(K(0),T.emit("indexChanged",yt()))}F(),X(),U(),O(),S(),x&&l(Ht,"aria-busy"),Q()}}function Q(){pn=mn}function Z(t){"true"!==r(Ht,"aria-busy")&&(mn+=t*jt,V())}function $(){Z(-1)}function _(){Z(Kt&&mn===Tt?-(Tt-bn)/jt:1)}function tt(n){if("true"!==r(Ht,"aria-busy")){for(var e,a=n.target||n.srcElement;gn.indexOf(Ct,a)===-1;)a=a.parentNode;e=fn=Number(r(a,"data-nav"));var i="gallery"===Lt?0:nn;mn=t.navContainer?e+i:e*Rt+i,mn!==pn&&V()}}function nt(){Dt=setInterval(function(){Z(En)},wn),o(Tn,{"data-action":"stop"}),Tn.innerHTML=kn+Cn[1],An=!0}function et(){clearInterval(Dt),o(Tn,{"data-action":"start"}),Tn.innerHTML=kn.replace("Stop","Start")+Cn[0],An=!1}function at(){An?et():nt()}function it(t){switch(t=t||window.event,t.keyCode){case M.LEFT:$();break;case M.RIGHT:_()}}function rt(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function ot(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case M.LEFT:case M.UP:case M.HOME:case M.PAGEUP:e!==wt&&wt.disabled!==!0&&rt(e,wt);break;case M.RIGHT:case M.DOWN:case M.END:case M.PAGEDOWN:e!==Et&&Et.disabled!==!0&&rt(e,Et);break;case M.ENTER:case M.SPACE:e===Et?_():$()}}function lt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,a=r(e,"data-nav");switch(n){case M.LEFT:case M.PAGEUP:a>0&&rt(e,e.previousElementSibling);break;case M.UP:case M.HOME:0!==a&&rt(e,Ct[0]);break;case M.RIGHT:case M.PAGEDOWN:a<Mt-1&&rt(e,e.nextElementSibling);break;case M.DOWN:case M.END:a<Mt-1&&rt(e,Ct[Mt-1]);break;case M.ENTER:case M.SPACE:tt(t)}}function st(){K(0,Ht.scrollLeft()),Q()}function ct(t){var n=t.changedTouches[0];Pn=parseInt(n.clientX),In=parseInt(n.clientY),kt=Number(Ht.style[m].slice(11,-3)),T.emit("touchStart",yt(t))}function ut(t){var n=t.changedTouches[0];if(Nt=parseInt(n.clientX)-Pn,Pt=parseInt(n.clientY)-In,a(e(Pt,Nt),15)===Ot){It=!0,t.preventDefault(),T.emit("touchMove",yt(t));var i="horizontal"===Ot?"X("+(kt+Nt):"Y("+(kt+Pt);Y(0),Ht.style[m]="translate"+i+"px)"}}function dt(t){var n=t.changedTouches[0];if(Nt=parseInt(n.clientX)-Pn,Pt=parseInt(n.clientY)-In,T.emit("touchEnd",yt(t)),It){if(It=!1,t.preventDefault(),"horizontal"===Ot)mn=-(kt+Nt)/_t,mn=Nt>0?Math.floor(mn):Math.ceil(mn);else{var e=-(kt+Pt);if(e<=0)mn=bn;else if(e>=xt[xt.length-1])mn=Tt;else{var a=0;do a++,mn=Pt<0?a+1:a;while(a<en&&e>=Math.round(xt[a+1]))}}V()}}function ft(){Ht.style.width=(_t+1)*en+"px";for(var t=en;t--;)Bt[t].style.width=_t-qt+"px"}function ht(){for(var t=mn+1,n=mn+Rt;t<n;t++)Bt[t].style.left=_t*(t-mn)+"px"}function vt(){Wt.style.cssText="margin: 0px "+B()+"px"}function mt(){Wt.style.height=j()+"px"}function pt(){if(Mt!==dn)if(Mt>dn)for(var t=dn;t<Mt;t++)l(Ct[t],"hidden");else for(var n=Mt;n<dn;n++)o(Ct[n],{hidden:""});dn=Mt}function yt(t){return{container:Ht,slideItems:Bt,navItems:Ct,prevButton:wt,nextButton:Et,items:Rt,index:mn,indexCached:pn,navCurrent:hn,navCurrentCached:vn,slideCount:Gt,cloneCount:nn,slideCountNew:en,event:t||{}}}function gt(){clearTimeout(zt),zt=setTimeout(function(){if(At!==Rn()){var n=mn,e=Rt;y(),f(),qn(),"horizontal"===Ot?Xt&&Ft?vt():(ft(),"gallery"===Lt&&ht()):(R(),mt()),mn!==n&&(T.emit("indexChanged",yt()),F(),Vt||U()),Rt===e||t.navContainer||(pt(),X()),(mn!==n||"carousel"===Lt&&!Xt)&&K(0),Jt&&S(),(Zt&&mn!==n||Rt!==e)&&O(),navigator.msMaxTouchPoints&&q()}},100)}function bt(){Wn||window.requestAnimationFrame(function(){O(),Wn=!1}),Wn=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{destory:function(){},events:T};var xt,wt,Et,Ct,Mt,Tt,At,Dt,kt,Nt,Pt,It,zt,Lt=t.mode,Ot=t.axis,St=document.createElement("div"),Wt=document.createElement("div"),Ht=t.container,Bt=Ht.children,Gt=Bt.length,Rt=t.items,jt=i(),qt=t.gutter,Ft="gallery"!==Lt&&t.edgePadding,Xt=t.fixedWidth,Ut=t.arrowKeys,Yt=t.speed,Kt=t.rewind,Vt="gallery"===Lt||!t.rewind&&t.loop,Jt="gallery"===Lt||t.autoHeight,Qt=!Xt&&t.responsive,Zt=t.lazyload,$t=Ht.id||n(),_t=Xt?Xt+qt:0,tn=[],nn=Vt?2*Gt:Ft?1:0,en="gallery"===Lt?Gt+nn:Gt+2*nn,an=!(!Xt||Vt||Ft),rn="gallery"===Lt||!Vt,on=t.controls,ln=t.controlsText,sn=!!t.controlsContainer&&t.controlsContainer,cn=t.nav,un=t.navContainer||!1,dn=Gt,fn=-1,hn=0,vn=0,mn="gallery"===Lt?0:nn,pn=mn,yn=Ft?1:0,bn=yn,xn=t.autoplay,wn=t.autoplayTimeout,En="forward"===t.autoplayDirection?1:-1,Cn=t.autoplayText,Mn=t.autoplayHoverPause,Tn=t.autoplayButton,An=!1,Dn=!1,kn="<span hidden>Stop Animation</span>",Nn=t.touch,Pn=0,In=0,zn=w?t.animateIn:"tns-fadeIn",Ln=w?t.animateOut:"tns-fadeOut",On=w?t.animateNormal:"tns-normal",Sn=!!w&&t.animateDelay,Wn=!1,Hn=function(){return Xt?function(){return Math.max(1,Math.min(Gt,Math.floor(At/Xt)))}:function(){var n=t.items,e="object"==typeof Qt&&Object.keys(Qt);if(e)for(var a=0;a<e.length;a++)At>=e[a]&&(n=Qt[e[a]]);return Math.max(1,Math.min(Gt,n))}}(),Bn=function(){return Math.round((At+qt)/Rt)},Gn=function(){return t.navContainer?function(){return Gt}:function(){return Math.ceil(Gt/Rt)}}(),Rn=function(){return"horizontal"===Ot&&!Xt&&Ft?function(){return St.clientWidth-2*(Ft+qt)}:function(){return St.clientWidth}}();H();var jn=function(){return"carousel"===Lt?function(t){t||(t="horizontal"===Ot?-_t*mn:-xt[mn]),an&&mn===Tt&&(t=Math.max(t,-en*_t+At+qt));var n=m,e="left",a="translate",i="",r="",o="X";"vertical"===Ot&&(o="Y",e="top"),m?(i=a+o+"(",r=")"):n=e,Ht.style[n]=i+t+"px"+r,"vertical"===Ot&&(Wt.style.height=j()+"px")}:function(){tn=[],v(Bt[pn],[[x,J],[C,J]]),h(Bt[mn],[[x,J],[C,J]]),function(){for(var t=pn,n=pn+Rt;t<n;t++){var e=Bt[t];if(g&&Y(1,e),Sn&&b){var a=Sn*(t-pn)/1e3;e.style[b]=a+"s",e.style[E]=a+"s"}e.classList.remove(zn),e.classList.add(Ln),tn.push(e)}}(),function(){for(var t=mn,n=mn+Rt;t<n;t++){var e=Bt[t];if(g&&Y(1,e),Sn&&b){var a=Sn*(t-mn)/1e3;e.style[b]=a+"s",e.style[E]=a+"s"}e.classList.remove(On),e.classList.add(zn),t>mn&&(e.style.left=(t-mn)*_t+"px")}}()}}(),qn=function(){return Vt?function(){var t="carousel"===Lt?jt+bn:bn,n="carousel"===Lt?Tt-jt:Tt;if(Xt&&At%_t!==0&&(n-=1),mn>n)for(;mn>=t+Gt;)mn-=Gt;else if(mn<t)for(;mn<=n-Gt;)mn+=Gt}:function(){mn=Math.max(bn,Math.min(Tt,mn))}}();return{getInfo:yt,events:T,destory:function(){if(gn.unwrap(St),gn.unwrap(Wt),St=Wt=null,l(Ht,["id","style","data-tns-role","data-tns-features"]),Vt)for(var n=nn;n--;)Bt[0].remove(),Bt[Bt.length-1].remove();l(Bt,["id","style","aria-hidden"]),$t=Gt=null,on&&(t.controlsContainer?(l(sn,["aria-label"]),l(sn.children,["aria-controls","tabindex"]),s(sn)):(sn.remove(),sn=wt=Et=null)),cn&&(t.navContainer?(l(un,["aria-label"]),l(Ct,["aria-selected","aria-controls","tabindex"]),s(un)):(un.remove(),un=null),Ct=null),xn&&(t.navContainer||null===un?s(Tn):(un.remove(),un=null)),s(Ht),Ut&&v(document,["keydown",it]),v(window,[["resize",gt],["scroll",bt]])}}}function n(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function a(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function i(t,n){return t.hasAttribute(n)}function r(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function l(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,a=t.length;a--;)for(var i=e;i--;)t[a].removeAttribute(n[i])}function s(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function c(t){i(t,"hidden")||o(t,{hidden:""})}function u(t){i(t,"hidden")&&l(t,"hidden")}function d(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n][0],t[n][1]];return!1}function h(t,n){function e(n){t.addEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}function v(t,n){function e(n){t.removeEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}var m=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),p={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},y={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},g=f(p)[0],b=f(p)[1],x=f(p)[2],w=f(y)[0],E=f(y)[1],C=f(y)[2],M={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},T={events:{},on:function(t,n){this.events[t]=this.events[t]||[],this.events[t].push(n)},off:function(t,n){if(this.events[t])for(var e=0;e<this.events[t].length;e++)if(this.events[t][e]===n){this.events[t].splice(e,1);break}},emit:function(t,n){this.events[t]&&this.events[t].forEach(function(t){t(n)})}};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
