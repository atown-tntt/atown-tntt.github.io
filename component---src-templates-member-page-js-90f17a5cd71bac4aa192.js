(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"54fn":function(e,t,n){"use strict";var a,r,i=n("q1tI"),o=n.n(i),c=n("wJ4g"),l=n("MUpH"),d=n("vOnD"),s=n("ibEc"),u=d.c.h1.withConfig({displayName:"styled__TitleElement",componentId:"sc-11l3hyf-0"})(["line-height:140%;font-size:3rem;font-weight:bold;margin-bottom:var(--space-lg);"," ",""],s.a.greaterThan("medium")(a||(a=Object(l.a)(["\n    line-height: 1.1;\n    font-size: 3.5rem;\n  "]))),s.a.greaterThan("large")(r||(r=Object(l.a)(["\n    line-height: 1.1;\n    font-size: 4rem;\n  "]))));t.a=function(e){var t=e.text,n=e.category;return n in c.a?o.a.createElement(u,{className:"p-4",style:{color:"white",backgroundColor:c.a[n]}},t):o.a.createElement(u,null,t)}},"7I57":function(e,t,n){"use strict";var a,r,i,o=n("q1tI"),c=n.n(o),l=n("Wbzz"),d=n("L+ta"),s=n("wJ4g"),u=n("MUpH"),p=n("vOnD"),m=n("ibEc"),f=n("9eSz"),g=n.n(f),h=n("pejg"),b=Object(p.c)(h.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-1ky34fi-0"})(["text-decoration:none;display:block;margin-bottom:var(--space);color:black;"," &:hover{text-decoration:none;color:#222;}"],m.a.greaterThan("small")(a||(a=Object(u.a)(["\n    margin-bottom: 0;\n  "])))),v=p.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-1ky34fi-1"})(["align-items:stretch;display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-light);"]),x=Object(p.c)(g.a).withConfig({displayName:"styled__PostItemImg",componentId:"sc-1ky34fi-2"})(["width:100%;"]),y=p.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-1ky34fi-3"})(["display:flex;flex-direction:column;padding:calc(var(--space) * 1.5) var(--space);position:relative;"]),k=p.c.span.withConfig({displayName:"styled__PostItemTag",componentId:"sc-1ky34fi-4"})(["display:inline-block;align-items:center;background:",";color:#fff;font-size:1.4rem;font-weight:700;text-transform:uppercase;padding:calc(var(--space-sm) / 1.5) var(--space-sm);position:absolute;top:0;left:50%;transform:translate(-50%,-50%);z-index:1;"],(function(e){return e.background?e.background:"red"})),w=p.c.time.withConfig({displayName:"styled__PostItemDate",componentId:"sc-1ky34fi-5"})(["font-size:1.4rem;margin-bottom:var(--space-sm);"]),O=p.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-1ky34fi-6"})(["font-size:2rem;font-weight:700;line-height:140%;"]),E=p.c.p.withConfig({displayName:"styled__PostItemDescription",componentId:"sc-1ky34fi-7"})(["margin-top:var(--space-sm);"]),j=function(e){var t=e.slug,n=e.background,a=e.category,r=e.date,i=(e.timeToRead,e.title),o=e.description,u=e.image,p=(Object(d.a)().toRead,Object(l.useStaticQuery)("3862938538").listImages),m=p.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes("cover")})),f=!!u&&u.split("/")[3],g=!!f&&p.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes(f)}));return c.a.createElement(b,{to:t},c.a.createElement(v,null,g&&c.a.createElement(x,{fluid:g.node.childImageSharp.fluid,alt:i}),!g&&c.a.createElement(x,{fluid:m.node.childImageSharp.fluid,alt:i}),c.a.createElement(y,null,c.a.createElement(k,{background:n||s.a[a]},a),c.a.createElement(w,null,r," "),c.a.createElement(O,null,i),c.a.createElement(E,null,o))))},I=p.c.section.withConfig({displayName:"styled__ListWrapper",componentId:"sc-8jaemb-0"})(["margin-bottom:20px;"," ",""],m.a.greaterThan("small")(r||(r=Object(u.a)(["\n        display: grid;\n        grid-gap: 20px;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    "]))),m.a.greaterThan("large")(i||(i=Object(u.a)(["\n        grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 10px)));\n    "]))));t.a=function(e){var t=e.postList;return c.a.createElement(I,null,t.map((function(e){var t=e.node,n=t.frontmatter,a=n.background,r=n.category,i=n.date,o=n.description,l=n.title,d=n.image,s=t.timeToRead,u=t.fields.slug;return c.a.createElement(j,{slug:"/blog/"+u,background:a,category:r,date:i,timeToRead:s,title:l,description:o,image:d,key:u})})))}},b4To:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("54fn"),o=n("vrFN"),c=n("7I57"),l=n("wx14"),d=n("zLVn"),s=n("ZCiN");var u=function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},p=n("Xyuu"),m=n("XcHJ");function f(e){var t,n,r=(t=e,(n=Object(a.useRef)(t)).current=t,n);Object(a.useEffect)((function(){return function(){return r.current()}}),[])}var g=Math.pow(2,31)-1;function h(){var e=Object(m.a)(),t=Object(a.useRef)();return f((function(){return clearTimeout(t.current)})),Object(a.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=g?t.current=setTimeout(a,r):function e(t,n,a){var r=a-Date.now();t.current=r<=g?setTimeout(n,r):setTimeout((function(){return e(t,n,a)}),g)}(t,a,Date.now()+r))},clear:n}}),[])}var b=n("TSYQ"),v=n.n(b),x=n("xgq2"),y=n("17x9"),k=n.n(y),w=n("y8DL"),O=n("YdCC"),E=Object(O.a)("carousel-caption"),j=n("vUet"),I=r.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,i=e.bsPrefix,o=e.children,c=e.className,s=Object(d.a)(e,["as","bsPrefix","children","className"]),u=v()(c,Object(j.a)(i,"carousel-item"));return r.a.createElement(a,Object(l.a)({ref:t},s,{className:u}),o)}));I.displayName="CarouselItem";var N=I;function C(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}var T=n("dbZe"),S=n("wsUu"),_=n("z+q/"),z={bsPrefix:k.a.string,as:k.a.elementType,slide:k.a.bool,fade:k.a.bool,controls:k.a.bool,indicators:k.a.bool,activeIndex:k.a.number,onSelect:k.a.func,onSlide:k.a.func,onSlid:k.a.func,interval:k.a.number,keyboard:k.a.bool,pause:k.a.oneOf(["hover",!1]),wrap:k.a.bool,touch:k.a.bool,prevIcon:k.a.node,prevLabel:k.a.string,nextIcon:k.a.node,nextLabel:k.a.string},L={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function M(e,t){var n=Object(w.a)(e,{activeIndex:"onSelect"}),i=n.as,o=void 0===i?"div":i,c=n.bsPrefix,m=n.slide,f=n.fade,g=n.controls,b=n.indicators,y=n.activeIndex,k=n.onSelect,O=n.onSlide,E=n.onSlid,I=n.interval,N=n.keyboard,z=n.onKeyDown,L=n.pause,M=n.onMouseOver,R=n.onMouseOut,P=n.wrap,D=n.touch,q=n.onTouchStart,H=n.onTouchMove,A=n.onTouchEnd,J=n.prevIcon,F=n.prevLabel,U=n.nextIcon,X=n.nextLabel,K=n.className,V=n.children,W=Object(d.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),Q=Object(j.a)(c,"carousel"),Y=Object(a.useRef)(null),Z=Object(a.useState)("next"),B=Z[0],G=Z[1],$=Object(a.useState)(!1),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=ne[0],re=ne[1],ie=Object(a.useState)(y||0),oe=ie[0],ce=ie[1];ae||y===oe||(Y.current?G(Y.current):G((y||0)>oe?"next":"prev"),m&&re(!0),ce(y||0)),Object(a.useEffect)((function(){Y.current&&(Y.current=null)}));var le,de=0;!function(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}(V,(function(e,t){++de,t===y&&(le=e.props.interval)}));var se=Object(p.a)(le),ue=Object(a.useCallback)((function(e){if(!ae){var t=oe-1;if(t<0){if(!P)return;t=de-1}Y.current="prev",k&&k(t,e)}}),[ae,oe,k,P,de]),pe=Object(s.a)((function(e){if(!ae){var t=oe+1;if(t>=de){if(!P)return;t=0}Y.current="next",k&&k(t,e)}})),me=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{element:me.current,prev:ue,next:pe}}));var fe=Object(s.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(me.current)&&pe()})),ge="next"===B?"left":"right";u((function(){m||(O&&O(oe,ge),E&&E(oe,ge))}),[oe]);var he=Q+"-item-"+B,be=Q+"-item-"+ge,ve=Object(a.useCallback)((function(e){Object(_.a)(e),O&&O(oe,ge)}),[O,oe,ge]),xe=Object(a.useCallback)((function(){re(!1),E&&E(oe,ge)}),[E,oe,ge]),ye=Object(a.useCallback)((function(e){if(N&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ue(e);case"ArrowRight":return e.preventDefault(),void pe(e)}z&&z(e)}),[N,z,ue,pe]),ke=Object(a.useCallback)((function(e){"hover"===L&&te(!0),M&&M(e)}),[L,M]),we=Object(a.useCallback)((function(e){te(!1),R&&R(e)}),[R]),Oe=Object(a.useRef)(0),Ee=Object(a.useRef)(0),je=h(),Ie=Object(a.useCallback)((function(e){Oe.current=e.touches[0].clientX,Ee.current=0,"hover"===L&&te(!0),q&&q(e)}),[L,q]),Ne=Object(a.useCallback)((function(e){e.touches&&e.touches.length>1?Ee.current=0:Ee.current=e.touches[0].clientX-Oe.current,H&&H(e)}),[H]),Ce=Object(a.useCallback)((function(e){if(D){var t=Ee.current;Math.abs(t)>40&&(t>0?ue(e):pe(e))}"hover"===L&&je.set((function(){te(!1)}),I||void 0),A&&A(e)}),[D,L,ue,pe,je,I,A]),Te=null!=I&&!ee&&!ae,Se=Object(a.useRef)();Object(a.useEffect)((function(){var e,t;if(Te)return Se.current=window.setInterval(document.visibilityState?fe:pe,null!=(e=null!=(t=se.current)?t:I)?e:void 0),function(){null!==Se.current&&clearInterval(Se.current)}}),[Te,pe,se,I,fe]);var _e=Object(a.useMemo)((function(){return b&&Array.from({length:de},(function(e,t){return function(e){k&&k(t,e)}}))}),[b,de,k]);return r.a.createElement(o,Object(l.a)({ref:me},W,{onKeyDown:ye,onMouseOver:ke,onMouseOut:we,onTouchStart:Ie,onTouchMove:Ne,onTouchEnd:Ce,className:v()(K,Q,m&&"slide",f&&Q+"-fade")}),b&&r.a.createElement("ol",{className:Q+"-indicators"},C(V,(function(e,t){return r.a.createElement("li",{key:t,className:t===oe?"active":void 0,onClick:_e?_e[t]:void 0})}))),r.a.createElement("div",{className:Q+"-inner"},C(V,(function(e,t){var n=t===oe;return m?r.a.createElement(x.e,{in:n,onEnter:n?ve:void 0,onEntered:n?xe:void 0,addEndListener:S.a},(function(t){return r.a.cloneElement(e,{className:v()(e.props.className,n&&"entered"!==t&&he,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&be)})})):r.a.cloneElement(e,{className:v()(e.props.className,n&&"active")})}))),g&&r.a.createElement(r.a.Fragment,null,(P||0!==y)&&r.a.createElement(T.a,{className:Q+"-control-prev",onClick:ue},J,F&&r.a.createElement("span",{className:"sr-only"},F)),(P||y!==de-1)&&r.a.createElement(T.a,{className:Q+"-control-next",onClick:pe},U,X&&r.a.createElement("span",{className:"sr-only"},X))))}var R=r.a.forwardRef(M);R.displayName="Carousel",R.propTypes=z,R.defaultProps=L,R.Caption=E,R.Item=N;var P=R,D=n("9eSz"),q=n.n(D),H=n("L+ta"),A=n("uebn");t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter.category,a=e.data.allMarkdownRemark.edges,l=e.data.allFile.edges,d=Object(H.a)(),s=d.gallery,u=d.news;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:t.frontmatter.title,description:t.frontmatter.description,image:t.frontmatter.image}),r.a.createElement(i.a,{text:t.frontmatter.title,category:n}),r.a.createElement(A.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("h1",null,s)),r.a.createElement(P,{className:"w-auto mx-lg-5 mb-5"},l.map((function(e){return r.a.createElement(P.Item,null,r.a.createElement(q.a,{fluid:e.node.childImageSharp.fluid,alt:e.node.base.split(".")[0]}))}))),a.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null,r.a.createElement("h1",null,u)),r.a.createElement(c.a,{postList:a})))}},uebn:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a,r=n("MUpH"),i=n("vOnD"),o=n("ibEc"),c=i.c.section.withConfig({displayName:"styled__Content",componentId:"sc-16bqgjl-0"})(["margin:auto;padding:0 0 var(--space-lg) 0;& > *:first-child{margin-top:0 !important;}& > *:last-child{margin-bottom:0 !important;}iframe{width:100%;","}a{color:var(--link-color);text-decoration:none;transition:0.3s;&:hover{color:var(--link-color-hover);}&.absent{color:#cc0000;}&.anchor{display:block;padding-left:30px;margin-left:-30px;cursor:pointer;position:absolute;top:0;left:0;bottom:0;}}h1,h2,h3,h4,h5,h6{margin:var(--space-lg) 0 var(--space-lg);padding:0;font-weight:bold;-webkit-font-smoothing:antialiased;cursor:text;position:relative;&:first-child{margin-top:0;padding-top:0;}&:hover a.anchor{text-decoration:none;}tt,code{font-size:inherit;}}h1:first-child + h2{margin-top:0;padding-top:0;}h1{font-size:2.8rem;color:black;}h2{font-size:2.4rem;color:black;}h1,h2{padding-bottom:var(--space);border-bottom:1px solid var(--border-light);}h3{font-size:1.8rem;}h4{font-size:1.6rem;}h5{font-size:1.4rem;}h6{color:var(--text-light);font-size:1.4rem;}p,blockquote,ul,ol,dl,li,table,pre{margin:15px 0;}hr{height:0.25em;padding:0;margin:24px 0;background-color:var(--bg-light);border:0;}& > h2:first-child{margin-top:0;padding-top:0;}& > h1:first-child{margin-top:0;padding-top:0;}& > h1:first-child + h2{margin-top:0;padding-top:0;}& > h3:first-child,& > h4:first-child,& > h5:first-child,& > h6:first-child{margin-top:0;padding-top:0;}a:first-child h1,a:first-child h2,a:first-child h3,a:first-child h4,a:first-child h5,a:first-child h6{margin-top:0;padding-top:0;}h1 p,h2 p,h3 p,h4 p,h5 p,h6 p{margin-top:0;}li p.first{display:inline-block;}ul,ol{padding-left:30px;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}ul{list-style:disc;}ol{list-style:decimal;}dl{padding:0;dt{font-size:14px;font-weight:bold;font-style:italic;padding:0;margin:15px 0 5px;&:first-child{padding:0;}& >:first-child{margin-top:0;}& >:last-child{margin-bottom:0;}dd{margin:0 0 15px;padding:0 15px;& >:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}}blockquote{border-left:4px solid #dddddd;padding:0 15px;color:#777777;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}table{padding:0;tr{border-top:1px solid #cccccc;background-color:white;margin:0;padding:0;&:nth-child(2n){background-color:#f8f8f8;}th{font-weight:bold;border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px;}td{border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px;}th:first-child,td:first-child{margin-top:0;}th:last-child,td:last-child{margin-bottom:0;}}}img{max-width:100%;}span.frame{display:block;overflow:hidden;& > span{border:1px solid #dddddd;display:block;float:left;overflow:hidden;margin:13px 0 0;padding:7px;width:auto;img{display:block;float:left;}span{clear:both;color:#333333;display:block;padding:5px 0 0;}}}span.align-center{display:block;overflow:hidden;clear:both;}span.align-center > span{display:block;overflow:hidden;margin:13px auto 0;text-align:center;}span.align-center span img{margin:0 auto;text-align:center;}span.align-right{display:block;overflow:hidden;clear:both;}span.align-right > span{display:block;overflow:hidden;margin:13px 0 0;text-align:right;}span.align-right span img{margin:0;text-align:right;}span.float-left{display:block;margin-right:13px;overflow:hidden;float:left;}span.float-left span{margin:13px 0 0;}span.float-right{display:block;margin-left:13px;overflow:hidden;float:right;}span.float-right > span{display:block;overflow:hidden;margin:13px auto 0;text-align:right;}code,tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px;}pre code{margin:0;padding:0;white-space:pre;border:none;background:transparent;}.highlight pre{background-color:#f8f8f8;border:1px solid #cccccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px;}pre{background-color:#f8f8f8;border:1px solid #cccccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px;code,tt{background-color:transparent;border:none;}}"],o.a.lessThan("large")(a||(a=Object(r.a)(["\n      padding: 0 1rem;\n    "]))))},wJ4g:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={AN:"#32d14a",TN:"#3272bf",NS:"#e6c647",HS:"#874f1e",HT:"#e63125",TT:"#e63125",DTDP:"#9b34eb","Cha.Souer":"#111",Announcements:"#353b48"}}}]);
//# sourceMappingURL=component---src-templates-member-page-js-90f17a5cd71bac4aa192.js.map