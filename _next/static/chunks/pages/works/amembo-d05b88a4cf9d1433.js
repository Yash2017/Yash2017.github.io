(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{3887:function(e,r,n){"use strict";n.d(r,{Ee:function(){return a}});var i=n(7294),t=n(4315),s=n(4040),c=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r,l=(0,t.Gp)(function(e,r){let{htmlWidth:n,htmlHeight:t,alt:s,...c}=e;return i.createElement("img",{width:n,height:t,ref:r,alt:s,...c})});l.displayName="NativeImage";var a=(0,t.Gp)(function(e,r){let{fallbackSrc:n,fallback:a,src:o,srcSet:$,align:d,fit:h,loading:u,ignoreFallback:m,crossOrigin:x,fallbackStrategy:j="beforeLoadOrError",referrerPolicy:f,...g}=e,p=null!=u||m||!(void 0!==n||void 0!==a),b=function(e){let{loading:r,src:n,srcSet:t,onLoad:c,onError:l,crossOrigin:a,sizes:o,ignoreFallback:$}=e,[d,h]=(0,i.useState)("pending");(0,i.useEffect)(()=>{h(n?"loading":"pending")},[n]);let u=(0,i.useRef)(),m=(0,i.useCallback)(()=>{if(!n)return;x();let e=new Image;e.src=n,a&&(e.crossOrigin=a),t&&(e.srcset=t),o&&(e.sizes=o),r&&(e.loading=r),e.onload=e=>{x(),h("loaded"),null==c||c(e)},e.onerror=e=>{x(),h("failed"),null==l||l(e)},u.current=e},[n,a,t,o,c,l,r]),x=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,s.G)(()=>{if(!$)return"loading"===d&&m(),()=>{x()}},[d,m,$]),$?"loaded":d}({...e,ignoreFallback:p}),w=c(b,j),v={ref:r,objectFit:h,objectPosition:d,...p?g:function(e,r=[]){let n=Object.assign({},e);for(let i of r)i in n&&delete n[i];return n}(g,["onError","onLoad"])};return w?a||i.createElement(t.m$.img,{as:l,className:"chakra-image__placeholder",src:n,...v}):i.createElement(t.m$.img,{as:l,src:o,srcSet:$,crossOrigin:x,loading:u,referrerPolicy:f,className:"chakra-image",...v})});a.displayName="Image",(0,t.Gp)((e,r)=>i.createElement(t.m$.img,{ref:r,as:l,className:"chakra-image",...e}))},491:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/amembo",function(){return n(8196)}])},603:function(e,r,n){"use strict";n.d(r,{Et:function(){return d},P4:function(){return $},Pg:function(){return h}});var i=n(5893),t=n(1664),s=n.n(t),c=n(5675),l=n.n(c),a=n(7927),o=n(917),$=function(e){var r=e.children,n=e.href,t=e.title,s=e.thumbnail;return(0,i.jsx)(a.xu,{w:"100%",textAlign:"center",children:(0,i.jsxs)(a.fG,{cursor:"pointer",children:[(0,i.jsx)(l(),{src:s,alt:t,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,i.jsx)(a.AB,{href:n,target:"_blank",children:(0,i.jsx)(a.xv,{mt:2,children:t})}),(0,i.jsx)(a.xv,{fontSize:14,children:r})]})})},d=function(e){var r=e.children,n=e.id,t=e.title,c=e.thumbnail;return(0,i.jsx)(a.xu,{w:"100%",textAlign:"center",children:(0,i.jsx)(s(),{href:"/works/".concat(n),passHref:!0,scroll:!1,children:(0,i.jsxs)(a.fG,{cursor:"pointer",children:[(0,i.jsx)(l(),{src:c,alt:t,className:"grid-item-thumbnail",placeholder:"blur"}),(0,i.jsx)(a.AB,{href:"/works/".concat(n),children:(0,i.jsx)(a.xv,{mt:2,fontSize:20,children:t})}),(0,i.jsx)(a.xv,{fontSize:14,children:r})]})})})},h=function(){return(0,i.jsx)(o.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(e,r,n){"use strict";var i=n(5893),t=n(1755),s=n(9008),c=n.n(s),l=n(603),a={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},o=function(e){var r=e.children,n=e.title,s="".concat(n," - Takuya Matsuyama");return(0,i.jsx)(t.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:a,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:s}),(0,i.jsx)("meta",{name:"twitter:title",content:s}),(0,i.jsx)("meta",{property:"og:title",content:s})]}),r,(0,i.jsx)(l.Pg,{})]})})};r.Z=o},3562:function(e,r,n){"use strict";var i=n(7297),t=n(6829);function s(){var e=(0,i.Z)(["\n  text-align: justify;\n  text-indent: 1em;\n"]);return s=function(){return e},e}var c=t.Z.p(s());r.Z=c},3922:function(e,r,n){"use strict";n.d(r,{Dx:function(){return o},WZ:function(){return $},h_:function(){return d}});var i=n(5893),t=n(1664),s=n.n(t),c=n(7927),l=n(3887),a=n(3382),o=function(e){var r=e.children;return(0,i.jsxs)(c.xu,{children:[(0,i.jsx)(s(),{href:"/works",passHref:!0,children:(0,i.jsx)(c.rU,{children:"Works"})}),(0,i.jsxs)("span",{children:[" ",(0,i.jsx)(a.XC,{})," "]}),(0,i.jsx)(c.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},$=function(e){var r=e.src,n=e.alt;return(0,i.jsx)(l.Ee,{borderRadius:"lg",w:"full",src:r,alt:n,mb:4})},d=function(e){var r=e.children;return(0,i.jsx)(c.Ct,{colorScheme:"green",mr:2,children:r})}},8196:function(e,r,n){"use strict";n.r(r);var i=n(5893),t=n(7927),s=n(3887),c=n(2857),l=n(3382),a=n(3922),o=n(3562),$=function(){return(0,i.jsx)(c.Z,{title:"amembo",children:(0,i.jsxs)(t.W2,{children:[(0,i.jsxs)(a.Dx,{children:["amembo ",(0,i.jsx)(t.Ct,{children:"2005-2008"})]}),(0,i.jsx)(t.M5,{my:6,children:(0,i.jsx)(s.Ee,{src:"/images/works/amembo_icon.png",alt:"icon"})}),(0,i.jsx)(o.Z,{children:"P2P private file sharing tool with MSN Messenger integration for Windows"}),(0,i.jsx)(o.Z,{children:"「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」"}),(0,i.jsxs)(t.QI,{ml:4,my:4,children:[(0,i.jsx)(t.HC,{children:"ファイル転送がサイズ制限無く高速に出来ます。"}),(0,i.jsx)(t.HC,{children:"複数のコンピュータ間で同時に通信が出来ます。"}),(0,i.jsx)(t.HC,{children:"簡単接続機能により、面倒な接続作業を自動で行います。"}),(0,i.jsx)(t.HC,{children:"一つのポート開放だけで、様々な通信が出来る強力なプロトコル。"}),(0,i.jsx)(t.HC,{children:"IM機能を装備しています。会話中に写真を表示したりもできます。"}),(0,i.jsx)(t.HC,{children:"ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。"}),(0,i.jsx)(t.HC,{children:"MSN/Windowsメッセンジャーからの招待で接続できます。"}),(0,i.jsx)(t.HC,{children:"画面転送機能で、相手に自分のデスクトップを見せることが出来ます。"})]}),(0,i.jsxs)(t.aV,{ml:4,my:4,children:[(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(a.h_,{children:"Platform"}),(0,i.jsx)("span",{children:"Windows 2000/XP"})]}),(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(a.h_,{children:"Stack"}),(0,i.jsx)("span",{children:"Delphi"})]}),(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(a.h_,{children:"Download"}),(0,i.jsx)(t.rU,{href:"http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip",children:"v0.5.15.123"})]}),(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(a.h_,{children:"Last update"}),(0,i.jsx)("span",{children:"2008/03/23"})]}),(0,i.jsxs)(t.HC,{children:[(0,i.jsx)(a.h_,{children:"Manual"}),(0,i.jsx)(t.rU,{href:"https://w.atwiki.jp/amembo/",children:"使い方wiki"})]})]}),(0,i.jsx)(t.X6,{as:"h4",fontSize:16,my:6,children:(0,i.jsx)(t.M5,{children:"Media coverage"})}),(0,i.jsx)(t.QI,{my:4,children:(0,i.jsx)(t.HC,{children:(0,i.jsxs)(t.rU,{href:"https://forest.watch.impress.co.jp/article/2006/01/18/amembo.html",children:[(0,i.jsx)(t.Ct,{mr:2,children:"窓の杜"}),"「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」"," ",(0,i.jsx)(l.h0,{mx:"2px"})]})})}),(0,i.jsxs)(t.MI,{columns:2,gap:2,children:[(0,i.jsx)(a.WZ,{src:"/images/works/amembo_01.gif",alt:"amembo"}),(0,i.jsx)(a.WZ,{src:"/images/works/amembo_02.gif",alt:"amembo"})]}),(0,i.jsx)(a.WZ,{src:"/images/works/amembo_03.jpg",alt:"amembo"}),(0,i.jsx)(a.WZ,{src:"/images/works/amembo_04.jpg",alt:"amembo"})]})})};r.default=$}},function(e){e.O(0,[774,888,179],function(){return e(e.s=491)}),_N_E=e.O()}]);