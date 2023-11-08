"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5786],{61348:(e,t,r)=>{r.d(t,{w:()=>v});r(23157);var n=r(67294),a=r(65598),l=r.n(a),c=r(32667),i=(r(69600),r(21249),r(74916),r(23123),r(4723),r(15306),/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g);var u=r(99027),o=r(67892);const s="playlist-playlist-playlistDescription",m="playlist-playlist-heading",d="playlist-playlist-list",f="playlist-playlist-listItem",p="playlist-playlist-paragraph";var v=n.memo((function(e){var t=e.html,r=e.onTimeStampClick,a=e.enableTimestamps,c=void 0!==a&&a,u=e.semanticColor,o=void 0===u?"textSubdued":u,m=(0,n.useMemo)((function(){var e,n=c?t.split(i).map((function(e){if(e.match(i)){var t=e.replace("(","").replace(")","");return"(<time>".concat(t,"</time>)")}return e})).join(""):t;try{e=l()(n,{transform:h(r,o),dangerouslySetChildren:[]})}catch(r){e=t}return e}),[c,t,r,o]);return n.createElement("div",{className:s},m)}));function h(e,t){var r=0;return{p:function(e){return n.createElement(c.D,{as:"p",variant:"ballad",semanticColor:t,className:p},e.children)},a:function(t){var r;return null!==(r=t.href)&&void 0!==r&&r.startsWith("#t=")?n.createElement(u.E,{onClick:e},t.children):t.href?n.createElement(o.r,{to:t.href},t.children):n.createElement(n.Fragment,null,t.children)},ul:function(e){return n.createElement("ul",{className:d},e.children)},ol:function(e){return n.createElement("ol",{className:d},e.children)},li:function(e){return n.createElement(c.D,{as:"li",variant:"ballad",semanticColor:t,className:f},e.children)},br:function(){return n.createElement("br",null)},h1:function(e){return n.createElement(c.D,{as:"h1",variant:"balladBold",semanticColor:t,className:m},e.children)},h2:function(e){return n.createElement(c.D,{as:"h2",variant:"balladBold",semanticColor:t,className:m},e.children)},h3:function(e){return n.createElement(c.D,{as:"h3",variant:"balladBold",semanticColor:t,className:m},e.children)},h4:function(e){return n.createElement(c.D,{as:"h4",variant:"balladBold",semanticColor:t,className:m},e.children)},h5:function(e){return n.createElement(c.D,{as:"h5",variant:"balladBold",semanticColor:t,className:m},e.children)},h6:function(e){return n.createElement(c.D,{as:"h6",variant:"balladBold",semanticColor:t,className:m},e.children)},time:function(t){return n.createElement(u.E,{onClick:e},t.children)},_:function(e,t,a){var l=void 0===t?e:a;return n.createElement(n.Fragment,{key:"fragment".concat(r++)},l)}}}},95562:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(29439),a=(r(85827),r(41539),r(21249),r(69720),r(67294)),l=r(96206),c=r(6158),i=r(86706),u=r(69518),o=r.n(u),s=r(32667),m=r(61348);const d="nV_0UjulnuGnBYzXiFRd",f="F2fw42rcgQCHUh82jc3U";var p=function(){var e=(0,i.v9)((function(e){var t;return null===(t=e.session.user)||void 0===t?void 0:t.uri})),t=o().from(e).toURLPath(!0);return a.createElement("div",{className:d},a.createElement(s.D,{variant:"forte",semanticColor:"textBase",dir:"auto"},l.ag.get("web-player.soundtrap.title")),a.createElement(s.D,{variant:"ballad",semanticColor:"textBase",dir:"auto"},l.ag.get("web-player.soundtrap.subtitle.text")),a.createElement(s.D,{variant:"ballad",semanticColor:"textBase",dir:"auto"},l.ag.get("web-player.soundtrap.confidential")),a.createElement(m.w,{html:l.ag.get("web-player.soundtrap.subtitle.link",t),semanticColor:"textBase",onTimeStampClick:function(){}}))},v=r(53027),h=r(15861),g=r(87757),b=r.n(g),k=(r(92222),r(51615)),E=r(67448);var y=r(11643);var C=r(36590),w=r(8498),x=r(19480),N=r(75032),_=function(e){var t=e.templates,r=e.title,n=e.onClick;return a.createElement(x.P,{title:r,className:f},t.map((function(e,t){return a.createElement(C.C,{key:"template-".concat(t),index:t,onClick:function(){return n(e.key)},headerText:e.title,featureIdentifier:"make_music",uri:e.originalTrackUri,delegateNavigation:!0,renderCardImage:function(){return a.createElement(w.x,{images:[{url:e.imageUri}]})},renderSubHeaderContent:function(){return a.createElement(N.NB,{source:e.templateDescription})}})})))};const j=a.memo((function(){var e=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],l=t[1],c=(0,E.z)(),i=(0,a.useCallback)((0,h.Z)(b().mark((function e(){var t;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getTemplates({query:"",page_number:0,result_per_page:6,sort_by:""});case 2:t=e.sent,l(t.projects);case 4:case"end":return e.stop()}}),e)}))),[c]);return(0,a.useEffect)((function(){i()}),[i]),{templates:r}}(),t=e.templates,r=(0,y.u)().playlists,i=function(){var e=(0,k.k6)(),t=(0,a.useState)(null),r=(0,n.Z)(t,2),l=r[0],c=r[1],i=(0,a.useState)(!1),u=(0,n.Z)(i,2),o=u[0],s=u[1],m=(0,E.z)(),d=(0,a.useCallback)(function(){var t=(0,h.Z)(b().mark((function t(r){var n,a;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,m.forkProject({projectKey:r});case 4:n=t.sent,a=n.project,e.push("/make-music/studio/".concat(a.originalTrackUri,"/").concat(a.soundtrapProjectId)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c("Could not navigate to project, forking failed");case 12:s(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),[e,c,m]);return{forkAndNavigate:d,error:l,loading:o}}(),u=i.forkAndNavigate,o=i.error,s=i.loading;if(!t||o||s||!r)return a.createElement(c.h,{hasError:!!o,errorMessage:null!=o?o:l.ag.get("web-player.soundtrap.error.request-templates-failure")});var m=t.reduce((function(e,t){var r,n;return null!==(n=e[r=t.genre])&&void 0!==n||(e[r]=[]),e[t.genre].push(t),e}),{});return a.createElement("div",{className:"contentSpacing",id:"makeMusicPage"},a.createElement(p,null),Object.entries(m).map((function(e){var t=(0,n.Z)(e,2),r=t[0],l=t[1];return a.createElement(_,{key:"template-shelf-".concat(r),templates:l,title:r,onClick:u})})),a.createElement(v.W,{playlists:r,title:"Hear what others are creating"}))}))},53027:(e,t,r)=>{r.d(t,{W:()=>c});r(21249),r(82526),r(41817);var n=r(67294),a=r(46309),l=r(19480),c=function(e){var t=e.playlists,r=e.title,c=e.showAll,i=void 0!==c&&c;return n.createElement(l.P,{total:t.length,title:r,seeAllUri:"/make-music/playlists",showSeeAll:!0,showAll:i},t.map((function(e,t){return n.createElement(a.Z,{key:e.playlistUri,uri:e.playlistUri,name:e.title,images:[{url:e.imageUri}],description:e.description,authorName:e.author,index:t})})))}},11643:(e,t,r)=>{r.d(t,{u:()=>o});var n=r(15861),a=r(29439),l=r(87757),c=r.n(l),i=r(67294),u=r(67448),o=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),r=t[0],l=t[1],o=(0,i.useRef)(!1),s=(0,u.z)(),m=(0,i.useCallback)((0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getPlaylists({query:"",page_number:0,result_per_page:6,sort_by:""});case 2:if(t=e.sent,o.current){e.next=5;break}return e.abrupt("return");case 5:l(t.playlists);case 6:case"end":return e.stop()}}),e)}))),[s]);return(0,i.useEffect)((function(){return o.current=!0,m(),function(){o.current=!1}}),[m]),{playlists:r,fetchPlaylists:m}}}}]);
//# sourceMappingURL=xpui-routes-make-music.js.map