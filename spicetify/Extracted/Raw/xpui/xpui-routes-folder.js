"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9124],{40771:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(87462),a=n(45987),l=n(67294),i=n(67892),o=["href","children"],c=function(e){var t=e.href,n=e.children,c=(0,a.Z)(e,o);return l.createElement(i.Z,(0,r.Z)({to:t},c),n)}},22578:(e,t,n)=>{n.d(t,{$:()=>d});n(26699),n(32023),n(69600),n(68309),n(21249);var r=n(67294),a=n(64593),l=n(96206),i=n(69691),o=n(8341),c=n(89952),s=n(51615),u=n(24183);function m(e){return e.includes("Spotify")?e:"Spotify – ".concat(e)}var d=function(e){var t,n,d,f,g,v,p,E=e.children,y=e.usePlayingItem,h=m(E);t=E,f=(0,u.Oh)().mainLandmarkRef,g=(0,s.k6)(),v=null===(n=g.location)||void 0===n||null===(d=n.state)||void 0===d?void 0:d.preventMoveFocus,(p=(0,r.useRef)(g.length<2)).current=g.length<2,(0,r.useEffect)((function(){var e=f.current;!v&&!p.current&&e&&t&&(e.setAttribute("aria-label",t),e.focus())}),[t,f,v]);var k=(0,i.IK)().isPlaying,b=(0,o.Y)((function(e){return null==e?void 0:e.item}));return b&&(k||y)&&((0,c.G_)(b)?h=[b.name,b.artists.map((function(e){return e.name})).join(l.ag.getSeparator())].join(" • "):(0,c.iw)(b)?h=[b.name,b.show.name].join(" • "):(0,c.k6)(b)&&(h=m(l.ag.get("ad-formats.advertisement")))),r.createElement(a.q,{defaultTitle:"Spotify",defer:!1},r.createElement("title",null,h))}},70369:(e,t,n)=>{n.d(t,{$:()=>r.$});var r=n(22578)},30731:(e,t,n)=>{n.d(t,{u:()=>p});var r=n(4942),a=n(67294),l=n(94184),i=n.n(l),o=n(32667),c=n(34011),s=n(6330),u=n(40771);const m="FvfvGU3jvHRskUU9v9_8",d="Q9AlbZn2EGzy3MTWXa8X",f="mxmxS0y8LiwSs5nueKPT",g="GXxVAveNFStY3pBI_NO4",v="eHcXC2s97InYP7rMNT0H";var p=a.memo((function(e){var t=e.children,n=e.message,l=e.title,p=e.linkTitle,E=e.linkTo,y=e.onClick,h=e.renderInline,k=void 0!==h&&h,b=(0,s.e)(),P=b.isXSOnly,U=b.isSMOnly,N=P||U;return a.createElement("section",{className:i()(m,(0,r.Z)({},d,k))},t,a.createElement(o.D,{as:"h1",variant:N?"cello":"alto",className:g},l),a.createElement(o.D,{variant:N?"mesto":"ballad",className:v},n),p&&(E||y)&&a.createElement(c.D,{colorSet:"invertedLight",className:f,href:E,onClick:y,component:u.Z},p))}))},25409:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});n(85827),n(41539),n(92222),n(68309),n(21249),n(82526),n(41817);var r=n(67294),a=n(86706),l=n(51615),i=n(69518),o=n.n(i),c=n(96206),s=n(46309),u=n(70369),m=n(30731),d=n(6158),f=n(48817),g=n(42922),v=n(84242),p=n(99013),E=n(9659),y=n(18270),h=n(55120),k=function(e){var t=e.folderUri,n=e.hasPlaylists,a=e.onClick,l=e.playing,i=e.supportsFolderPlayback;return r.createElement(y.o,null,r.createElement(y.F,null,i&&r.createElement(h.$,{onClick:a,isPlaying:l,size:"lg",disabled:!n,uri:t})))},b=n(60289),P=n(59482),U=n(72907),N=function(e){var t=e.folderName,n=e.folderUri;return r.createElement(b.gF,null,r.createElement(P.W,null,r.createElement(U.i,{text:t,dragUri:n,dragLabel:t})),r.createElement(b.sP,null,r.createElement(b.dy,{small:!0,uppercase:!0},c.ag.get("folder.title")),r.createElement(b.xd,{dragUri:n,dragLabel:t},t)))};const I="folder-folderPage-sectionWrapper";var S=function(e){var t=e.id,n=(0,a.v9)((function(e){var t,n=e.session;return null==n||null===(t=n.user)||void 0===t?void 0:t.id}))||null,l=o().folderURI(n,t).toURI(),i=(0,p.C)({folderUri:l,decorateImagesAndOwner:!0}),y=(0,a.v9)((function(e){return e.platform.isDesktop})),h=(0,v.n)({uri:l},{featureIdentifier:"folder"}),b=h.isPlaying,P=h.togglePlay,U=(0,r.useMemo)((function(){return i?function e(t){return t.items.reduce((function(t,n){return(0,E.lU)(n)?t.concat(e(n)):((0,E.no)(n)&&t.push(n),t)}),[])}(i):[]}),[i]),S=U.length>0;return i?r.createElement("section",{className:I},r.createElement(u.$,null,c.ag.get("playlist.page-title",i.name)),r.createElement(N,{folderName:i.name,folderUri:l}),r.createElement(k,{supportsFolderPlayback:y,onClick:function(){return P()},playing:b,hasPlaylists:S,folderUri:l}),r.createElement("div",{className:"contentSpacing"},S?r.createElement(g.ZP,{value:"EntitiesGrid"},r.createElement(f.T,{render:function(){return U.map((function(e,t){return r.createElement(g.ZP,{key:e.uri,value:"card",index:t},r.createElement(s.Z,{index:t,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:e.owner.displayName}))}))}})):r.createElement(m.u,{title:c.ag.get("folder.empty.title"),message:c.ag.get("folder.empty.subtitle"),renderInline:!0}))):r.createElement(d.h,{hasError:!1,errorMessage:c.ag.get("error.generic")})};const C=r.memo((function(){var e=(0,l.UO)().folderId;return r.createElement(S,{id:e})}))}}]);
//# sourceMappingURL=xpui-routes-folder.js.map