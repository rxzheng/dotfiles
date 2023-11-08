"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5835],{40771:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(87462),r=n(45987),o=n(67294),c=n(67892),i=["href","children"],l=function(e){var t=e.href,n=e.children,l=(0,r.Z)(e,i);return o.createElement(c.Z,(0,a.Z)({to:t},l),n)}},22578:(e,t,n)=>{n.d(t,{$:()=>d});n(26699),n(32023),n(69600),n(68309),n(21249);var a=n(67294),r=n(64593),o=n(96206),c=n(69691),i=n(8341),l=n(89952),s=n(51615),u=n(24183);function m(e){return e.includes("Spotify")?e:"Spotify – ".concat(e)}var d=function(e){var t,n,d,g,v,f,p,h=e.children,E=e.usePlayingItem,y=m(h);t=h,g=(0,u.Oh)().mainLandmarkRef,v=(0,s.k6)(),f=null===(n=v.location)||void 0===n||null===(d=n.state)||void 0===d?void 0:d.preventMoveFocus,(p=(0,a.useRef)(v.length<2)).current=v.length<2,(0,a.useEffect)((function(){var e=g.current;!f&&!p.current&&e&&t&&(e.setAttribute("aria-label",t),e.focus())}),[t,g,f]);var b=(0,c.IK)().isPlaying,_=(0,i.Y)((function(e){return null==e?void 0:e.item}));return _&&(b||E)&&((0,l.G_)(_)?y=[_.name,_.artists.map((function(e){return e.name})).join(o.ag.getSeparator())].join(" • "):(0,l.iw)(_)?y=[_.name,_.show.name].join(" • "):(0,l.k6)(_)&&(y=m(o.ag.get("ad-formats.advertisement")))),a.createElement(r.q,{defaultTitle:"Spotify",defer:!1},a.createElement("title",null,y))}},70369:(e,t,n)=>{n.d(t,{$:()=>a.$});var a=n(22578)},30731:(e,t,n)=>{n.d(t,{u:()=>p});var a=n(4942),r=n(67294),o=n(94184),c=n.n(o),i=n(32667),l=n(34011),s=n(6330),u=n(40771);const m="FvfvGU3jvHRskUU9v9_8",d="Q9AlbZn2EGzy3MTWXa8X",g="mxmxS0y8LiwSs5nueKPT",v="GXxVAveNFStY3pBI_NO4",f="eHcXC2s97InYP7rMNT0H";var p=r.memo((function(e){var t=e.children,n=e.message,o=e.title,p=e.linkTitle,h=e.linkTo,E=e.onClick,y=e.renderInline,b=void 0!==y&&y,_=(0,s.e)(),S=_.isXSOnly,C=_.isSMOnly,N=S||C;return r.createElement("section",{className:c()(m,(0,a.Z)({},d,b))},t,r.createElement(i.D,{as:"h1",variant:N?"cello":"alto",className:v},o),r.createElement(i.D,{variant:N?"mesto":"ballad",className:f},n),p&&(h||E)&&r.createElement(l.D,{colorSet:"invertedLight",className:g,href:h,onClick:E,component:u.Z},p))}))},59504:(e,t,n)=>{n.d(t,{k:()=>_});n(68309),n(83710),n(92222);var a=n(67294),r=n(31667),o=n(47778),c=n(32667),i=n(67892),l=n(40169),s=n(43315),u=n(9339);const m="wedRUk4eiBo9n9vqXLhU",d="HYVIJaYYiCTgSCHie70L",g="InXSbaoh8emJn09fWs3U",v="SPbe_Q1wtiZQCmo0QKUy",f="TRp4tgG7_cymGIXDevIP",p="tC1Y_nwyyly7cpIGqF5K",h="gY_xUHOSpAn6TPdU23t7",E="l93AfoV_qHnMQSQBB5GK",y="MTTf1Lotynwu3QKhr9uY",b="EkGb0ZzhswreSvpZoioY";var _=a.memo((function(e){var t=e.entity,n=e.isVirtual,_=e.shouldCombineRecs,S=e.onClick,C=t.venue,N=C.name,k=C.location.name,D=t.artists[0],w=(0,u.ij)(t),I=new Date(t.date.isoString),Z=n?r.F:o.n;return a.createElement(i.r,{to:"/concert/".concat(t.id),className:m,onClick:S},D.imageUri?a.createElement(l.Z,null,a.createElement("div",{"data-testid":"image-container",className:b,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(".concat(D.imageUri,")")}})):null,a.createElement("time",{className:d,dateTime:t.date.isoString},a.createElement(c.D,{as:"h5",variant:"minuetBold",className:g},"".concat((0,u.lJ)(I)," ").concat(I.getDate()))),a.createElement("div",{className:v,dir:"auto"},a.createElement(c.D,{as:"h2",className:y,variant:"minuetBold"},(0,s.FO)(I)," • ",(0,u.b8)(I)),a.createElement(c.D,{as:"h2",variant:"cello",weight:"bold",className:f},w),a.createElement("div",{className:p},_?a.createElement(Z,{className:h,"aria-label":n?"Virtual Event":"In-Person Event",iconSize:16}):null,a.createElement(c.D,{as:"h2",className:E,variant:"mesto","data-testid":"location-name"},n?N:"".concat(N,", ").concat(k)))))}))},51915:(e,t,n)=>{n.d(t,{Z:()=>R});var a=n(29439),r=n(4942),o=(n(73210),n(96647),n(83710),n(41539),n(39714),n(82772),n(21249),n(67294)),c=n(94184),i=n.n(c),l=n(73727),s=n(44295),u=n(74410),m=n(32667),d=n(21317),g=n(96206),v=n(87961),f=n(6024),p=n(15852);const h="mVOFnq7zSPRV_LEgGpDs",E="C27SqjLS1_s0rqa7OD7c",y="hdK8yppl_sXZMSQmtZtV",b="r81fr26QaEERPXCPrPVm",_="zwc2XkLWpR92crAJXL21",S="eIoX7T2txqK2JqzJ7cli",C="gTFbh_EVVEzUrviFjNKF",N="xVCe2YqliS5UBuqjBTDK",k="aZ5OJAP9JwXgm4pJq7UH",D="H1g1Ro1PNCH7OgfgaHkN",w="SjJTvKcJyhdrzQP74cfK",I="KsT9JzIhvL6lWg8uKQf5",Z="VrqtBC4aYTinEAL4iLO7";var U,F="location_no_results",L="location_fetch_error",T=(U={},(0,r.Z)(U,F,(function(){return g.ag.get("concert.error.no_locations_found_subtitle")})),(0,r.Z)(U,L,(function(){return g.ag.get("concert.error.general_error_title")})),U),M=function(e){var t=(0,o.useRef)(null),n=(0,o.useRef)(null),r=(0,o.useState)(""),c=(0,a.Z)(r,2),h=c[0],E=c[1],U=(0,o.useState)(-1),M=(0,a.Z)(U,2),R=M[0],G=M[1],O=(0,o.useState)([]),P=(0,a.Z)(O,2),A=P[0],K=P[1],x=(0,o.useState)(),J=(0,a.Z)(x,2),X=J[0],Y=J[1],z=e.placeholder,V=e.onSelectLocation,B=e.hideLocationSelector,H=e.spec,j=(0,o.useMemo)((function(){if(!H)return{};var e=H.changeLocationFormFactory();return{resultsSpec:H.locationsResponseFactory(),inputSpec:e.changeLocationInputFactory(),clearSpec:e.changeLocationClearFactory()}}),[H]),q=j.resultsSpec,W=j.inputSpec,Q=j.clearSpec,$=(0,p.$P)(),ee=h.trim();(0,o.useEffect)((function(){if(G(-1),Y(void 0),ee.length<=1)return K([]),void(W&&$.logInteraction(W.keyStrokeUiHide()));W&&$.logInteraction(W.keyStrokeTextEdit({fieldToBeChanged:"loction"}));var e=!0;return f.LH.fetchLocationQuery(v.b.getInstance(),ee).then((function(t){if(e){var n=t.body.results||[];K(n),n.length?Y(void 0):Y(F)}}),(function(){e&&(K([]),Y(L))})),function(){e=!1}}),[W,$,ee]);var te=function(e,t){var n;if(V(e),q){var a=q.locationResultFactory({identifier:e.location||(null===(n=e.geonameId)||void 0===n?void 0:n.toString(10))||"",position:t}).hitUiHide();$.logInteraction(a)}},ne=i()(y,b);return(A&&A.length||X===F)&&(ne=y),o.createElement("div",{className:_,"data-interaction-context":"location-selector"},o.createElement("div",{className:S,onKeyDown:function(e){var a="ArrowUp",r="ArrowDown",o="Escape",c="Tab",i=e.key,l=R;switch([o,r,a,c].indexOf(i)>-1&&e.preventDefault(),i){default:return;case o:return void V(void 0);case a:l=Math.max(R-1,-1);break;case r:case c:l=Math.min(R+1,A.length-1);break;case"Enter":te(A[R],R)}if(l<0){var s;null===(s=t.current)||void 0===s||s.focus()}else{var u,m=null===(u=n.current)||void 0===u?void 0:u.childNodes[l];m&&m.focus()}G(l)},role:"searchbox",onBlur:function(e){e.relatedTarget||(E(""),B())}},o.createElement("div",null,o.createElement("div",{className:N},o.createElement(s.j,{className:k,iconSize:16}),o.createElement("input",{className:C,type:"search",id:"change-location-input",placeholder:z,value:h,onChange:function(e){return E(e.target.value)},ref:t,"aria-label":z,autoFocus:!0}),o.createElement("button",{className:ne,"aria-label":g.ag.get("search.a11y.clear-input"),onClick:function(){E(""),Q&&$.logInteraction(Q.hitTextClear())}},o.createElement(u.k,{iconSize:16})))),o.createElement("ol",{className:D,ref:n},X&&o.createElement(m.D,{as:"li",variant:"ballad",className:w},o.createElement(d.l,{iconSize:16}),T[X]()),A&&A.length&&A.map((function(e,t){return o.createElement(m.D,{as:"li",variant:"ballad",weight:"book",key:t,className:Z,tabIndex:t+1},o.createElement(l.rU,{to:"#",className:I,onClick:function(){return te(e,t)},role:"button"},e.location))}))||null)))};const R=function(e){var t=e.handleLocationChange,n=e.locationStr,r=e.headerSpec,c=(0,o.useState)(!1),i=(0,a.Z)(c,2),l=i[0],s=i[1],u=(0,o.useMemo)((function(){return null==r?void 0:r.changeLocationButtonFactory()}),[r]),d=(0,o.useMemo)((function(){return null==r?void 0:r.changeLocationUiFactory({identifier:n})}),[r,n]),v=(0,p.$P)();return o.createElement("div",{className:h},o.createElement(m.D,{as:"h1",variant:"alto"},g.ag.get("concerts_shows_in")),o.createElement("span",null,l&&o.createElement(M,{placeholder:g.ag.get("concerts.input.search_placeholder"),onSelectLocation:function(e){t(e),s(!1)},hideLocationSelector:function(){return s(!1)},spec:d}),!l&&o.createElement(m.D,{as:"h2",variant:"alto",className:E,dir:"auto",onClick:function(){s(!0),u&&v.logImpression(u.hitUiReveal())},role:"button"},n)))}},50543:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(29439),r=(n(83710),n(21249),n(68309),n(92222),n(47042),n(41539),n(91038),n(78783),n(74916),n(77601),n(82526),n(41817),n(32165),n(66992),n(33948),n(79753),n(21703),n(96647),n(67294)),o=n(86706),c=n(73012),i=n(32667),l=n(87577),s=n(67983),u=n(96206),m=n(6581),d=n(95888),g=n(70369),v=n(30731),f=n(60289),p=n(59482),h=n(72907),E=n(6158),y=n(19480),b=n(56802),_=n(37081),S=n(49207),C=n(29255),N=n(42922),k=n(15852),D=n(59504),w=n(86025),I=n(40169),Z=n(9339);const U="F7MwywVorrNKOgt7CEGy",F="r4aK7GGCTY1vrPuSoGy6",L="RX2kdQC6Fgc9h04mEgXx",T="JpGXFGtOfmKH5mKCOMQw",M="pN88b8jrYtBCrYGu35Al",R="amTa2euxioUd0vU2jMf5",G="Ko142eYEnV1xtSP5Vjk3";var O=r.memo((function(e){var t=e.entity,n=e.onClick,a=e.openingDate,o=e.closingDate,c=e.concertsCount,l=t.artists[0],s=(0,Z.ij)(t);return r.createElement(w.oM,{onClick:n,className:U,component:"div"},l.imageUri?r.createElement(I.Z,null,r.createElement("div",{"data-testid":"image-container",className:G,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(".concat(l.imageUri,")")}})):null,r.createElement("time",{className:F,dateTime:t.date.isoString},r.createElement(i.D,{as:"h5",variant:"minuetBold",className:L},a.getMonth()===o.getMonth()?"".concat((0,Z.lJ)(a)," ").concat(a.getDate(),"-").concat(o.getDate()):"".concat((0,Z.lJ)(a)," ").concat(a.getDate()," - ").concat((0,Z.lJ)(o)," ").concat(o.getDate()))),r.createElement("div",{className:T,dir:"auto"},r.createElement(i.D,{as:"h2",variant:"cello",weight:"bold",className:M},s),r.createElement("div",{className:R},r.createElement(i.D,{as:"h2",variant:"mesto","data-testid":"concerts-count"},"".concat(u.ag.get("concerts.count",c))))))})),P=n(51915),A=n(38205),K=n(74410),x=n(92877),J=n(84465),X=n(67892);const Y="_HSbKteV9dfeHwGxcNg_",z="aWBUVnORYXxsyYkhLwA9",V="my32elFymTSFRhPKDaLo",B="YAGZg56IvTunyhaur40H",H="vmevmDz8WM9VvMmgoaWe",j="ac36K8GtTBXhfFPRfGTo",q="hz2yJw4parzL0WK0rMng",W="p_yAxEy29Xzm0fTvIg8T",Q="wC2qUh2SJBX1UEe9aQtV",$="sUzcAnZ86exG3LZrvpf2",ee="Ou1Z3dcAWteEuTiYJlkB",te="EtOrJwt_4yhkrHWbxXy4",ne="M680KWddHfIaTZCTyULM",ae="NjDfI7zPhvTXV8SjKcqq",re="OEdqJZzUG2K9iXIn9RtC";var oe=r.memo((function(e){var t=e.concert,n=e.position,a=e.modalSpec,o=t.date.isoString,c=new Date(Date.parse(o)),l="ONLINE"===t.category,s=t.venue.name,u=t.venue.location.name,m=l?s:"".concat(s,", ").concat(u),d=(0,r.useMemo)((function(){return null==a?void 0:a.eventRowFactory({position:n,uri:t.uri})}),[a,n,t]),g=(0,k.$P)();return r.createElement(X.r,{key:t.id,to:"/concert/".concat(t.id),className:W,onClick:function(){d&&g.logInteraction(d.hitUiNavigate({destination:"/concert/".concat(t.id)}))}},r.createElement("time",{className:Q,dateTime:o},r.createElement(i.D,{as:"h5",variant:"minuetBold",className:$},(0,Z.lJ)(c)),r.createElement(i.D,{as:"h1",variant:"cello",className:ee},c.getDate())),r.createElement("div",{className:te},r.createElement(i.D,{as:"div",variant:"violaBold",className:ne,"data-testid":"event-title"},(0,Z.Yl)(t)),r.createElement(i.D,{as:"div",variant:"viola",className:ae},"".concat((0,Z.cd)(c)," • ").concat((0,Z.b8)(c))),r.createElement(i.D,{as:"div",variant:"viola",className:re,"data-testid":"event-venue"},m)))})),ce=r.memo((function(e){var t,n=e.concerts,a=e.onClose,o=e.location,c=e.feedSpec,l=null===(t=n[0])||void 0===t?void 0:t.artists[0],s=(0,r.useMemo)((function(){return null==c?void 0:c.groupedEventModalFactory({uri:(null==l?void 0:l.uri)||""})}),[c,l]),m=(0,k.$P)(),d=(0,k.Wi)(s);if(!l)return null;var g=function(){if(s){var e=s.closeButtonFactory().hitUiHide();m.logInteraction(e)}a()};return r.createElement(J.Z,{contentLabel:u.ag.get("live_events.label"),isOpen:!0,className:Y,onRequestClose:g},r.createElement("section",{className:z,ref:d},r.createElement("div",{className:V},r.createElement(ie,{"aria-label":u.ag.get("close"),iconOnly:K.k,buttonSize:"sm",onClick:g})),r.createElement("div",{className:B},r.createElement(x.E,{height:"48",width:"48",className:H,src:l.imageUri}),r.createElement("div",{className:j},r.createElement(i.D,{as:"h3",variant:"cello",className:q,"data-testid":"event-venue"},l.name),r.createElement(i.D,{as:"h3",variant:"mesto","data-testid":"event-venue"},"".concat(u.ag.get("concerts.count_near_location",n.length,o))))),n.map((function(e,t){return r.createElement(oe,{key:e.uri,concert:e,position:t,modalSpec:s})}))))})),ie=(0,A.ZP)(w.oM).withConfig({displayName:"GroupedConcerts___StyledButtonTertiary",componentId:"sc-1c9dnr3-0"})({color:"#FFFFFF",backgroundColor:"#000000",cursor:"pointer"});const le="wIVpEJ_zYWGyFUrvX08g",se="hSZRbryPAMeTRaXuUSlM",ue="NrsEgNsURvcsSkUnT8yN";function me(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ge=r.memo((function(e){var t,n=e.entity,a=e.position,o=e.shouldCombineRecs,c=e.sectionSpec,i=e.onOpenGroupedConcert,l=null===(t=n.concerts)||void 0===t?void 0:t[0],s=(0,r.useMemo)((function(){var e,t;return c.eventCardFactory({identifier:null!==(e=null==l?void 0:l.id)&&void 0!==e?e:"",position:a,uri:null!==(t=null==l?void 0:l.uri)&&void 0!==t?t:""})}),[c,l,a]),u=(0,k.$P)();return n.concerts.length>1?r.createElement(O,{key:l.uri,entity:l,openingDate:new Date(n.openingDate),closingDate:new Date(n.closingDate),concertsCount:n.concerts.length,onClick:function(){i(n.concerts),u.logInteraction(s.hitUiReveal())}}):r.createElement(D.k,{key:l.uri,entity:l,isVirtual:o?"ONLINE"===l.category:"online"===n.source,shouldCombineRecs:o,onClick:function(){u.logInteraction(s.hitUiNavigate({destination:l.uri}))}})})),ve=r.memo((function(e){var t=e.title,n=e.identifier,a=e.position,o=e.eventEntities,c=e.shouldCombineRecs,i=e.feedSpec,l=e.onOpenGroupedConcert,s=(0,r.useMemo)((function(){return i.eventSectionFactory({identifier:n,position:a})}),[i,n,a]),u=(0,k.Wi)(s);return 0===o.length?null:r.createElement("div",{className:le,ref:u},r.createElement(N.ZP,{value:"headered-grid",index:a},r.createElement(y.P,{total:o.length,title:t,showAll:!0},o.map((function(e,t){return r.createElement(ge,{key:e.concerts[0].id,entity:e,position:t,shouldCombineRecs:c,sectionSpec:s,onOpenGroupedConcert:l})})))))})),fe=r.memo((function(e){var t=e.eventEntities,n=e.location,a=e.shouldCombineRecs,o=e.spec,c=e.onOpenGroupedConcert;if(!t.length)return r.createElement(v.u,{title:u.ag.get("concerts.error.no_concerts_found_title"),message:u.ag.get("concerts.error.no_concerts_found_message",n),renderInline:!0});var i=function(e){var t,n={online:[],recommended:[],popular:[]},a=me(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;"recommendation"===r.source?n.recommended.push(r):"popular"===r.source?n.popular.push(r):"online"===r.source&&n.online.push(r)}}catch(e){a.e(e)}finally{a.f()}return n}(t);return r.createElement(r.Fragment,null,r.createElement(ve,{title:u.ag.get("concerts_upcoming_virtual_events"),identifier:"online",position:0,eventEntities:i.online,shouldCombineRecs:a,feedSpec:o,onOpenGroupedConcert:c}),r.createElement(ve,{title:u.ag.get("concerts_recommended_for_you"),identifier:"recommended",position:1,eventEntities:i.recommended,shouldCombineRecs:a,feedSpec:o,onOpenGroupedConcert:c}),r.createElement(ve,{title:u.ag.get("concerts_popular_near_you"),identifier:"popular",position:2,eventEntities:i.popular,shouldCombineRecs:a,feedSpec:o,onOpenGroupedConcert:c}))})),pe=c.vI0,he={url:"https://tickets.spotifycdn.com/partner-assets/Hub%20header%20image/Desktop%20header%20IMG.png",width:2736,height:720},Ee=function(e){var t=e.collection,n=e.concertMetadata,a=e.shouldCombineRecs,o=e.spec,c=e.handleLocationChange,l=e.onOpenGroupedConcert,s=(0,r.useMemo)((function(){return o.headerFactory()}),[o]),m=(null==t?void 0:t.items)||[],d=null==t?void 0:t.isFetching,g=n.userLocation.name||u.ag.get("concerts.default_location");return d?r.createElement(E.h,{hasError:!1,errorMessage:u.ag.get("error.request-browse-concerts-failure")}):r.createElement("div",{className:ue},r.createElement("div",{className:le,"data-testid":"location-selector"},r.createElement(P.Z,{handleLocationChange:c,locationStr:g,headerSpec:s})),r.createElement(fe,{eventEntities:m,location:g,shouldCombineRecs:a,spec:o,onOpenGroupedConcert:l}),r.createElement(i.D,{variant:"finale",semanticColor:"textSubdued"},u.ag.get("live_events.disclaimer")))},ye=r.memo((function(){var e=(0,o.I0)(),t=(0,b.o)(),n=(0,l.W6)(S.AW),c=(0,o.v9)(C.Gg).isAnonymous,i=(0,k.fU)(s.createDesktopLiveeventsFeedEventFactory,{}).spec,v=(0,o.v9)((function(e){return e.concerts.collection})),E=(0,o.v9)((function(e){return e.concerts})),y=E.userLocation.name||u.ag.get("concerts.default_location"),N=E.userLocation.geonameId;(0,r.useEffect)((function(){e((0,m.AJ)(null!=N?N:null,c))}),[e,c,N]);var D=(0,_.Y)(pe),w=(0,r.useState)([]),I=(0,a.Z)(w,2),Z=I[0],U=I[1];return r.createElement("section",{className:se},r.createElement(g.$,null,"".concat(u.ag.get("concerts_shows_in")," ").concat(y)),r.createElement(f.gF,{size:f.fR.SMALL,backgroundColor:pe,backgroundImages:[he]},r.createElement(f.sP,null,r.createElement(f.xd,null,u.ag.get("live_events.label"))),r.createElement(p.W,null,r.createElement(h.i,{text:u.ag.get("live_events.label")}))),r.createElement(d.I,{backgroundColor:D}),r.createElement(Ee,{collection:v,concertMetadata:E,shouldCombineRecs:n,spec:i,handleLocationChange:function(n){n&&n.geonameId&&(e((0,m.kz)(n)),e((0,m.AJ)(n.geonameId,c)),t({type:"click",intent:"change-live-events-location"}))},onOpenGroupedConcert:function(e){var n,a;U(e),t({type:"click",intent:"open-grouped-live-event",targetUri:null===(n=e[0])||void 0===n||null===(a=n.artists[0])||void 0===a?void 0:a.uri})}}),r.createElement(ce,{location:y,concerts:Z,feedSpec:i,onClose:function(){return U([])}}))}));const be=function(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(ye,e))}},9339:(e,t,n)=>{n.d(t,{Ms:()=>o,NL:()=>l,O1:()=>u,Yl:()=>g,b8:()=>c,cd:()=>s,ij:()=>v,lJ:()=>i});var a=n(93433),r=(n(83710),n(21249),n(68309),n(92222),n(96206)),o=function(e){return r.ag.formatDate(e,{weekday:"short",month:"short",day:"numeric"})},c=function(e){return r.ag.formatDate(e,{hour:"numeric",minute:"numeric"})},i=function(e){return r.ag.formatDate(e,{month:"short"}).toUpperCase()},l=function(e){return r.ag.formatDate(e,{month:"short",day:"numeric"}).toUpperCase()},s=function(e){return r.ag.formatDate(e,{weekday:"short"})},u=function(e){return e<new Date},m={row:{1:function(e){return r.ag.get.apply(r.ag,["concert.header.entity_title_1"].concat((0,a.Z)(e)))},2:function(e){return r.ag.get.apply(r.ag,["concert.header.entity_title_2"].concat((0,a.Z)(e)))},3:function(e){return r.ag.get.apply(r.ag,["concert.header.entity_title_3"].concat((0,a.Z)(e)))},4:function(e){return r.ag.get.apply(r.ag,["concert.header.entity_title_4"].concat((0,a.Z)(e)))},more:function(e){return r.ag.get.apply(r.ag,["concert.header.entity_title_more"].concat((0,a.Z)(e)))}},entity:{1:function(e){return r.ag.get.apply(r.ag,["concert.header.upcoming_concert_title_1"].concat((0,a.Z)(e)))},2:function(e){return r.ag.get.apply(r.ag,["concert.header.upcoming_concert_title_2"].concat((0,a.Z)(e)))},3:function(e){return r.ag.get.apply(r.ag,["concert.header.upcoming_concert_title_3"].concat((0,a.Z)(e)))},4:function(e){return r.ag.get.apply(r.ag,["concert.header.upcoming_concert_title_4"].concat((0,a.Z)(e)))},more:function(e){return r.ag.get.apply(r.ag,["concert.header.upcoming_concert_title_more"].concat((0,a.Z)(e)))}}},d=function(e,t){var n=m[t],a=function(e){try{var t;return!e.title||!e.festival&&null!==(t=e.artists)&&void 0!==t&&t.length?{artists:e.artists.map((function(e){return e.name||e.profile.name}))}:{title:e.title}}catch(e){return null}}(e);if(a){if(a.title)return a.title;if(a.artists)return a.artists.length>4?n.more(a.artists):n[a.artists.length](a.artists)}return""},g=function(e){return d(e,"row")},v=function(e){return d(e,"entity")}}}]);
//# sourceMappingURL=xpui-routes-collection-concerts.js.map