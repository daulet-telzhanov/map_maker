(this.webpackJsonprpg_map=this.webpackJsonprpg_map||[]).push([[0],[,,function(e,t,n){var o={"./fall.png":14,"./flower.png":15,"./spring.png":16,"./winter.png":17};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=2},,,,,function(e,t,n){e.exports=n(20)},,,,,,,function(e,t,n){e.exports=n.p+"static/media/fall.29cbe0d4.png"},function(e,t,n){e.exports=n.p+"static/media/flower.f00a854a.png"},function(e,t,n){e.exports=n.p+"static/media/spring.4ad9d4a2.png"},function(e,t,n){e.exports=n.p+"static/media/winter.a1cf1d29.png"},function(e){e.exports=JSON.parse('{"map-sprites":{"variants":["spring","fall","winter","flower"],"size":{"height":288,"width":640}}}')},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),c=n(1);var l=function(e){var t=Object(o.useState)({x:50,y:0}),n=Object(c.a)(t,2),a=n[0],r=n[1];Object(o.useEffect)((function(){var t=document.getElementById(e);return t.addEventListener("mousedown",(function(e){e.preventDefault(),t.style.pointerEvents="none",document.body.addEventListener("mousemove",i),document.body.addEventListener("mouseup",(function(){document.body.removeEventListener("mousemove",i),t.style.pointerEvents="initial"}))})),function(){document.body.removeEventListener("mousedown",i),document.body.removeEventListener("mouseup",i),document.body.removeEventListener("mousemove",i)}}),[]);var i=function(e){var t={x:e.clientX,y:e.clientY};r(t)};return{position:a}},s=n(6),d=n.n(s),u=(n(13),n(3)),p=function(e){Object(o.useEffect)((function(){return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[e])},b=function(e){var t=e.tiles,r=e.tileset,i=e.size,l=e.activeTile,s=e.setTiles,d=e.backgroundTile,b=e.zIndex,f=e.setzIndex,m=e.boolSwap,v=e.setBackgroundTile,g=function(e){for(var t=new Array(e.length),n=0;n<e.length;++n)t[n]=e[n].slice(0);return t},x=Object(o.useState)({tiles:[],background:{}}),y=Object(c.a)(x,2),h=y[0],k=y[1];p((function(e){var n;"k"===(n=e.key.toLowerCase())?k({tiles:t,background:d}):"l"===n&&(s(h.tiles),v(h.background)),e.preventDefault()})),Object(o.useEffect)((function(){f(m?{front:1,back:2}:{front:2,back:1})}),[m]);var w=Object(o.useState)(""),E=Object(c.a)(w,2),O=E[0],j=E[1];return Object(o.useEffect)((function(){j("url("+n(2)("./".concat(r,".png"))+") "+"-".concat(d.x,"px -").concat(d.y,"px no-repeat"))}),[d]),a.a.createElement("div",{style:{boxSizing:"border-box",backgroundColor:"white",width:i.width}},a.a.createElement("div",{style:{position:"absolute",zIndex:1}},t.map((function(e,t){return a.a.createElement("div",{style:{display:"flex"}},e.map((function(e,t){return a.a.createElement("div",{style:{borderTop:"1px solid black",borderRight:"1px solid black",borderBottom:"1px solid black",background:O,width:32,height:32}})})))}))),a.a.createElement("div",{style:{position:"absolute",zIndex:b.back}},t.map((function(e,t){return a.a.createElement("div",{style:{display:"flex"}},e.map((function(e,o){return a.a.createElement("div",{className:"box back",onClick:function(){return function(e){var t=e.x,n=e.y,o=e.tileset;s((function(e){var a=g(e),r=Object(u.a)(Object(u.a)({},a[n][t]),{},{b:l,season_back:o});return a[n][t]=r,console.log("dropBack",a),a}))}({x:o,y:t,tileset:r})},style:{borderTop:"1px solid black",borderRight:"1px solid black",borderBottom:"1px solid black",background:"url("+n(2)("./".concat(e.season_back,".png"))+") "+"-".concat(e.b.x,"px -").concat(e.b.y,"px no-repeat"),width:32,height:32}})})))}))),a.a.createElement("div",{style:{position:"absolute",zIndex:b.front}},t.map((function(e,t){return a.a.createElement("div",{style:{display:"flex"}},e.map((function(e,o){return a.a.createElement("div",{className:"box front",onClick:function(){return function(e){var t=e.x,n=e.y,o=e.tileset;s((function(e){var a=g(e),r=Object(u.a)(Object(u.a)({},a[n][t]),{},{v:l,season_front:o});return a[n][t]=r,console.log(a),a}))}({x:o,y:t,tileset:r})},style:{borderTop:"1px solid black",borderRight:"1px solid black",borderBottom:"1px solid black",background:"url("+n(2)("./".concat(e.season_front,".png"))+") "+"-".concat(e.v.x,"px -").concat(e.v.y,"px no-repeat"),width:32,height:32}})})))}))))},f=function(e){for(var t=e.tileset,o=e.position,r=e.activeTile,i=e.setActiveTile,c=e.setTileset,l=e.setBackgroundTile,s=e.setBoolSwap,u=n(18),p=Object.keys(u).map((function(e){return{type:"group",name:e.replace(/-/g," "),items:u[e].variants.map((function(e){return{value:"".concat(e),label:e}}))}})),b=u["map-sprites"].size,f=b.width,m=b.height,v=[],g=0,x=0;x<m;x+=32){for(var y=[],h=0;h<f;h+=32)y.push({x:h,y:x,id:g++});v.push(y)}return a.a.createElement("div",{id:"palette",style:{position:"absolute",border:"1px solid black",top:o.y,left:o.x,zIndex:10,backgroundColor:"white"}},a.a.createElement("div",{style:{display:"flex",marginBottom:4,marginTop:4}},a.a.createElement("img",{id:"handle",src:"/img/drag-handle.png",alt:"handle"}),a.a.createElement("div",{style:{background:"url("+n(2)("./".concat(t,".png"))+") "+"-".concat(r.x,"px -").concat(r.y,"px no-repeat"),width:32,height:32,border:"2px solid red"}}),a.a.createElement("div",{style:{width:200,marginLeft:8}},a.a.createElement(d.a,{value:t,options:p,onChange:function(e){return c(e.value)}})),a.a.createElement("div",{style:{marginLeft:8}},a.a.createElement("button",{onClick:function(){return l(r)},style:{padding:"6px 20px",fontSize:14}},"FILL")),a.a.createElement("div",{style:{marginLeft:8}},a.a.createElement("button",{onClick:function(){return s((function(e){return!e}))},style:{padding:"6px 20px",fontSize:14}},"SWAP"))),a.a.createElement("div",{style:{position:"absolute",zIndex:10,opacity:.55}},v.map((function(e,t){return a.a.createElement("div",{style:{display:"flex"}},e.map((function(e,n){return a.a.createElement("div",{className:"box",onClick:function(){return i({x:32*n,y:32*t})},style:{borderTop:"1px solid black",borderRight:"1px solid black",width:32,height:32}})})))}))),a.a.createElement("div",null,v.map((function(e,o){return a.a.createElement("div",{style:{display:"flex"}},e.map((function(e,r){return a.a.createElement("div",{style:{borderTop:"1px solid black",borderRight:"1px solid black",background:"url("+n(2)("./".concat(t,".png"))+") "+"-".concat(32*r,"px -").concat(32*o,"px no-repeat"),width:32,height:32}})})))}))))};n(19);var m=function(){var e=Object(o.useState)("spring"),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)({x:32,y:128}),s=Object(c.a)(i,2),d=s[0],u=s[1],p=Object(o.useState)([]),m=Object(c.a)(p,2),v=m[0],g=m[1],x=Object(o.useState)({x:-32,y:-32}),y=Object(c.a)(x,2),h=y[0],k=y[1],w=Object(o.useState)({width:600,height:600}),E=Object(c.a)(w,2),O=E[0],j=(E[1],Object(o.useState)(!1)),T=Object(c.a)(j,2),S=T[0],z=T[1],L=Object(o.useState)({front:3,back:2}),B=Object(c.a)(L,2),I=B[0],C=B[1],_=Object(o.useRef)(1),R=l("handle").position;return Object(o.useEffect)((function(){_.current++,console.log("Rendered:",_.current);for(var e=[],t=0,n=0;n<O.height;n+=32){for(var o=[],a=0;a<O.width;a+=32)o.push({x:a,y:n,id:t++,v:{x:160,y:0},season_front:"spring",season_back:"spring",b:{x:-32,y:-32}});e.push(o)}g(e)}),[]),a.a.createElement("div",{style:{position:"relative",width:window.innerWidth,height:window.innerHeight,backgroundColor:"grey",overflow:"hidden",border:"1px solid black"}},a.a.createElement(f,{position:R,tileset:n,activeTile:d,setActiveTile:u,setTileset:r,setBackgroundTile:k,setBoolSwap:z}),a.a.createElement(b,{tiles:v,tileset:n,size:O,activeTile:d,setTiles:g,setTileset:r,backgroundTile:h,zIndex:I,setzIndex:C,boolSwap:S,setBackgroundTile:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.bd04ea63.chunk.js.map