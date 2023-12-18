"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1289],{78749:(e,t,a)=>{a.d(t,{$:()=>o,Q:()=>n});var r=a(59496),l=a(39440),i=a(87082),s=a(4637);const n=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:i.oT.ADDED_AT}),o=r.memo((function({uri:e,children:t,defaultSortOption:a}){return(0,s.jsx)(l.r,{uri:e,defaultState:a,sortContext:n,children:t})}))},87082:(e,t,a)=>{a.d(t,{Aq:()=>u,Bf:()=>x,EY:()=>D,G5:()=>p,JV:()=>S,MY:()=>o,Ru:()=>A,ZP:()=>h,a6:()=>T,aY:()=>P,e3:()=>g,ei:()=>n,o$:()=>d,oT:()=>s,pT:()=>m,rJ:()=>b,u3:()=>f,w0:()=>y});var r=a(63840),l=a(1849),i=a(34251);let s=function(e){return e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER",e}({});const n={"show-alphabetical":s.SHOW_ALPHABETICAL,"book-alphabetical":s.BOOK_ALPHABETICAL,"episode-alphabetical":s.EPISODE_ALPHABETICAL,"playlist-alphabetical":s.PLAYLIST_ALPHABETICAL,"album-alphabetical":s.ALBUM_ALPHABETICAL,"recently-added":s.ADDED_AT,"creator-name":s.CREATOR_NAME,"creator-name-alphabetical":s.CREATOR_NAME_ALPHABETICAL,"album-creator-name":s.ALBUM_CREATOR_NAME,"recently-played":s.RECENTLY_PLAYED,"playlist-most-relevant":s.MOST_RELEVANT,"playlist-custom-order":s.CUSTOM_ORDER},o={[s.RECENTLY_PLAYED]:{key:"recently-played",get value(){return r.ag.get("collection.sort.recently-played")}},[s.ADDED_AT]:{key:"recently-added",get value(){return r.ag.get("collection.sort.recently-added")}},[s.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[s.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[s.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[s.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[s.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return r.ag.get("collection.sort.creator")}},[s.CREATOR_NAME]:{key:"creator-name",get value(){return r.ag.get("collection.sort.creator")}},[s.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[s.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return r.ag.get("collection.sort.alphabetical")}},[s.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return r.ag.get("collection.sort.most-relevant")}},[s.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return r.ag.get("collection.sort.custom-order")}}},A=[s.ADDED_AT,s.ALBUM_ALPHABETICAL,s.CREATOR_NAME],c={[s.ADDED_AT]:{field:l.lY.ADDED_AT,order:l.As.DESC},[s.ALBUM_ALPHABETICAL]:{field:l.lY.NAME,order:l.As.ASC},[s.CREATOR_NAME]:{field:l.lY.ARTIST_NAME,order:l.As.ASC}};const u=e=>{if(function(e){return A.includes(e)}(e))return c[e]},d=[s.ADDED_AT,s.CREATOR_NAME_ALPHABETICAL],E={[s.ADDED_AT]:{field:l.hx.ADDED_AT,order:l.As.DESC},[s.CREATOR_NAME_ALPHABETICAL]:{field:l.hx.NAME,order:l.As.ASC}};const g=e=>{if(function(e){return d.includes(e)}(e))return E[e]},T=[s.ADDED_AT,s.SHOW_ALPHABETICAL],L={[s.ADDED_AT]:{field:l.aW.ADDED_AT,order:l.As.DESC},[s.SHOW_ALPHABETICAL]:{field:l.aW.NAME,order:l.As.ASC}};const D=e=>{if(function(e){return T.includes(e)}(e))return L[e]},h=[s.ADDED_AT,s.BOOK_ALPHABETICAL],C={[s.ADDED_AT]:l.VN.ADDED_AT,[s.BOOK_ALPHABETICAL]:l.VN.NAME};const p=e=>{if(function(e){return h.includes(e)}(e))return C[e]},y=[s.MOST_RELEVANT,s.RECENTLY_PLAYED,s.ADDED_AT,s.PLAYLIST_ALPHABETICAL,s.CUSTOM_ORDER],_={[s.ADDED_AT]:{field:i.bD.ADDED_AT,order:i.As.DESC},[s.RECENTLY_PLAYED]:{field:i.bD.RECENTLY_PLAYED,order:i.As.ASC},[s.PLAYLIST_ALPHABETICAL]:{field:i.bD.NAME,order:i.As.ASC},[s.MOST_RELEVANT]:{field:i.bD.RELEVANCE,order:i.As.DESC},[s.CUSTOM_ORDER]:void 0};const m=e=>{if(function(e){return y.includes(e)}(e))return _[e]},P=s.ADDED_AT,f=s.ADDED_AT,b=s.ADDED_AT,x=s.MOST_RELEVANT,S=s.ADDED_AT},9191:(e,t,a)=>{a.d(t,{h:()=>E});var r=a(59496),l=a(18933),i=a(45100),s=a(67966),n=(a(99692),a(25980)),o=a(78749),A=a(87082),c=a(4637);const u=r.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:l}=(0,r.useContext)(o.Q),i=(0,r.useCallback)((e=>{const a=A.ei[e];t?.(a),l(a)}),[t,l]),s=e.map((e=>A.MY[e])),u=A.MY[a];return(0,c.jsx)(n.A,{options:s,onSelect:i,selected:u})})),d="collection-searchBar-searchBar",E=r.memo((function({canSort:e,canFilter:t,filterPlaceholder:a,sortOptions:n}){const{spec:o,logger:A}=(0,s.fU)(l.createDesktopSearchBarEventFactory,{}),E=(0,r.useCallback)((()=>{A.logInteraction(o.filterFieldFactory().keyStrokeFilter())}),[A,o]),g=(0,r.useCallback)((()=>{A.logInteraction(o.filterFieldFactory().hitClearFilter())}),[A,o]);return(0,c.jsxs)("div",{className:d,children:[t?(0,c.jsx)(r.Suspense,{fallback:null,children:(0,c.jsx)(i.K,{placeholder:a,onFilter:E,onClear:g})}):null,e?(0,c.jsx)(u,{sortOptions:n}):null]})}))},75211:(e,t,a)=>{a.d(t,{$:()=>r.$,Q:()=>r.Q});var r=a(78749)},90044:(e,t,a)=>{a.d(t,{Aq:()=>r.Aq,Bf:()=>r.Bf,EY:()=>r.EY,G5:()=>r.G5,JV:()=>r.JV,Ru:()=>r.Ru,ZP:()=>r.ZP,a6:()=>r.a6,aY:()=>r.aY,e3:()=>r.e3,o$:()=>r.o$,oT:()=>r.oT,pT:()=>r.pT,rJ:()=>r.rJ,u3:()=>r.u3,w0:()=>r.w0});var r=a(87082)},79357:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Te});a(95101),a(32548);var r=a(59496),l=a(46399),i=a(63840),s=a(30900),n=a(11021),o=a(49634),A=a(99957),c=a(75211),u=a(90044),d=a(65926),E=a(67314),g=a(73799),T=a(4722),L=a(907),D=a(245),h=a(50425),C=a(9191),p=a(96754),y=(a(99692),a(1849));const _={[y.yW.NAME]:o.hI.TITLE,[y.yW.SHOW_NAME]:o.hI.SHOW,[y.yW.ADDED_AT]:o.hI.ADDED_AT},m=[u.oT.ADDED_AT,u.oT.CREATOR_NAME,u.oT.EPISODE_ALPHABETICAL],P={[u.oT.ADDED_AT]:{field:y.yW.ADDED_AT,order:y.As.DESC},[u.oT.CREATOR_NAME]:{field:y.yW.SHOW_NAME,order:y.As.ASC},[u.oT.EPISODE_ALPHABETICAL]:{field:y.yW.NAME,order:y.As.ASC}};const f=e=>{if(function(e){return m.includes(e)}(e))return P[e]},b=e=>{if(!m.includes(e))return;const t=f(e);if(!t?.field)return;const a=_[t.field];if(!a)return;return o.Vd[a].map((e=>t.order?`${e} ${t.order}`:e)).join(",")};var x=a(33088);const S="m9xwK71Ieq9cySIq4FAP",O="PkEMTu8sGqJeQWJ7HvEs",I="DbH2KkRA8yVWWpXGaNSW";var R=a(4637);const M=({metadata:e,canSort:t,backgroundColor:a,isPlaying:r,isOnline:l,togglePlay:s})=>{const n=(0,p.y)(),{uri:o,name:A}=e,c=e.totalLength>0,u=(0,x.j)();return(0,R.jsx)(D.o,{backgroundColor:a,children:(0,R.jsxs)(D.F,{children:[c&&(0,R.jsx)(h.$,{onClick:()=>s(),isPlaying:r,size:u,uri:o,disabled:!l,ariaPlayLabel:i.ag.get("playlist.a11y.play",A),ariaPauseLabel:i.ag.get("playlist.a11y.pause",A)}),t&&(0,R.jsx)("div",{className:I,children:(0,R.jsx)(C.h,{canSort:n.getCapabilities().canSort,canFilter:n.getCapabilities().canFilter,filterPlaceholder:i.ag.get("playlist.search_in_playlist"),sortOptions:m})})]})})};var N=a(80760),k=a(5788),j=a(36085),B=a(64342),v=a(13645),H=a(75692),w=a(28256),U=a(26687),Y=a(61377);const W="p6DKqBcwmVtxmHt8ju43",V="_OxEpxzAgJiTENfolVUN";var $=a(2622),F=a(55742),K=a(55272),q=a(46304),J=a(98226),G=a(50183),z=a(32872),Q=a(96791),Z=a(70216),X=a(85624),ee=a(74714),te=a(39293);const ae={small:64,standard:300,large:640,xlarge:1024},re=r.memo((function({index:e,contextUri:t,episode:a,onRemove:l,usePlayContextItem:i}){const s=(0,r.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),n=a.uri,[o,c]=(0,r.useState)(0===a.timeLeft.milliseconds),{filter:u}=(0,r.useContext)(A.fo),E=(0,$.O)(),g=(0,j.jh)(),L=(0,F.o)(),[D]=(0,p.Z)(n,!0),h=(0,ee.k)(a.uri,a.isPlayable),C=(0,d.k)(),y=(0,G.Y)((e=>{if(e?.item?.uri===a.uri){const t=(0,z.k)(e)??0;return s.current=t,t}return 0})),{isPlaying:_,isActive:m,togglePlay:P}=i({uri:n,index:e}),{isPlaying:f,isActive:b,togglePlay:x}=(0,T.n)({uri:n,pages:[{items:[{type:Q.p.EPISODE,uri:n,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,r.useEffect)((()=>{D||l()}),[D,l]),(0,r.useEffect)((()=>{_||a.duration.milliseconds<=s.current&&c(!0)}),[_,a.duration.milliseconds]);const S=(0,r.useCallback)((e=>{e||(s.current=0),c(e)}),[]),O=e=>{if(e.target!==e.currentTarget)return;let r=`${a.name}`;a.show&&(r+=` • ${a.show.name}`),E(e,[n],r,t)},I=(0,r.useCallback)((()=>{L({type:"click",targetUri:n,intent:"navigate"})}),[n,L]),M=(0,r.useCallback)((()=>{C?(L({type:"click",intent:_?"pause":"play"}),P()):(L({type:"click",intent:f?"pause":"play"}),x())}),[C,_,f,L,P,x]),N=(0,r.useCallback)((e=>(0,R.jsx)(X.o,{searchWords:[u],textToHighlight:e})),[u]),V=a.podcastSubscription?.isPaywalled??!1,re=a.podcastSubscription?.isUserSubscribed??!1,{badges:le}=(0,Z.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:V});let ie=!1;(m||!C&&b)&&(ie=!0);const se=(0,B.W6)(te.eli,{loadingValue:!1});return D?(0,R.jsxs)(k.JL,{value:"row",index:e,children:[(0,R.jsx)("hr",{className:W,"aria-hidden":!0}),(0,R.jsx)(K._,{menu:(0,R.jsx)(v.k,{uri:n,contextUri:t,showUri:a.show?.uri,isPlayed:o,onMarkAsPlayed:S}),children:se?(0,R.jsx)(w.k,{requestId:a.requestId,index:e,uri:n,uid:n,size:g,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?ae[e.label]:null),height:e.height||(e.label?ae[e.label]:null)}))),isPaywalled:V,isUserSubscribed:re,name:a.name,highlightText:N,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:h,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:O,handlePlaybackClick:M,handleClick:I,isCurrentlyPlaying:ie,isPlaying:C?_:f,position:ie?y:void 0,episodeSharingInfo:null,onMarkAsPlayed:S,badges:(0,R.jsxs)(R.Fragment,{children:[le.explicit&&(0,R.jsx)(q.N,{}),le.paid&&(0,R.jsx)(Y.g,{}),le.nineteen&&(0,R.jsx)(J.X,{size:16})]}),playButtonWrapper:e=>(0,R.jsx)(U.l,{enabled:V&&!re,showUri:a.show?.uri||void 0,children:e})}):(0,R.jsx)(H.X,{requestId:a.requestId,index:e,uri:n,uid:n,size:g,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?ae[e.label]:null),height:e.height||(e.label?ae[e.label]:null)}))),isPaywalled:V,isUserSubscribed:re,name:a.name,highlightText:N,showName:a.show?.name,showUri:a.show?.uri,description:a.description,isPlayable:h,fullyPlayed:o,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:s.current,handleDragStart:O,handlePlaybackClick:M,handleClick:I,isCurrentlyPlaying:ie,isPlaying:C?_:f,position:ie?y:void 0,episodeSharingInfo:null,onMarkAsPlayed:S,badges:(0,R.jsxs)(R.Fragment,{children:[le.explicit&&(0,R.jsx)(q.N,{}),le.paid&&(0,R.jsx)(Y.g,{}),le.nineteen&&(0,R.jsx)(J.X,{size:16})]}),playButtonWrapper:e=>(0,R.jsx)(U.l,{enabled:V&&!re,showUri:a.show?.uri||void 0,children:e})})})]}):null})),le=r.memo((function({contextUri:e,usePlayContextItem:t}){const a=(0,r.useContext)(g.H),{sortState:l}=(0,r.useContext)(c.Q),[i,s]=(0,r.useState)({totalLength:0,unfilteredTotalLength:0,offset:0,items:[],limit:50}),n=(0,r.useRef)(!1),o=(0,r.useRef)(0),u=(0,r.useRef)(0),{filter:d}=(0,r.useContext)(A.fo),E=(0,r.useCallback)((()=>{u.current++}),[]),{ref:T,breakpoint:L}=(0,j.Db)({[j.Uo.MEDIUM]:0,[j.Uo.LARGE]:600}),D=(0,r.useCallback)(((e=!1)=>{const t=o.current;null!==t&&(n.current||(n.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-u.current,limit:50,sort:f(l),filter:d});return u.current=0,t})(Number(t)).then((a=>{s((r=>{const l=Number(a.offset)+a.items.length,i=e?[]:[...r.items];return i.splice(Number(t),a.items.length,...a.items),o.current=l<a.totalLength?l:null,{...a,items:i}})),n.current=!1}))))}),[d,a,l]);return(0,r.useEffect)((()=>{o.current=0,D(!0)}),[D]),(0,R.jsx)(j.ZU.Provider,{value:L,children:(0,R.jsx)(k.JL,{value:"track-list",children:(0,R.jsx)("div",{ref:T,children:(0,R.jsx)(N.C,{onReachBottom:D,triggerOnInitialLoad:!0,children:i.items.map(((a,r)=>(0,R.jsx)("div",{className:V,children:(0,R.jsx)(re,{index:r,episode:a,contextUri:e,onRemove:E,usePlayContextItem:t},`${a.uri}/${r}`)},`${r}${a.uri}`)))})})})})}));var ie=a(94),se=a(47166),ne=a(55085),oe=a(31926),Ae=a(46474),ce=a(93742);const ue=({metadata:e,backgroundColor:t,isPlaying:a,isOnline:l,togglePlay:s})=>{const{uri:n,name:o,images:A,totalLength:c,owner:u}=e,d=(0,r.useMemo)((()=>({id:u.username,uri:u.uri,name:u.username,displayName:u.displayName||void 0,images:u.images||[]})),[u]);return(0,R.jsxs)(se.gF,{backgroundColor:t,children:[(0,R.jsxs)(ne.W,{children:[(0,R.jsx)(h.$,{size:"medium",onClick:()=>s(),isPlaying:a,uri:n,disabled:!l,ariaPlayLabel:i.ag.get("playlist.a11y.play",o),ariaPauseLabel:i.ag.get("playlist.a11y.pause",o)}),(0,R.jsx)(oe.i,{text:o})]}),(0,R.jsx)(se.Oz,{images:A,name:o,shape:Ae.K.ROUNDED_CORNERS,renderImage:()=>(0,R.jsx)(ce.$,{})}),(0,R.jsxs)(se.sP,{children:[(0,R.jsx)(ie.D,{variant:"mestoBold",children:i.ag.get("playlist")}),(0,R.jsx)(se.xd,{canEdit:!1,onClick:()=>{},children:o}),(0,R.jsx)(se.QS,{creators:[d],totalItems:c,hasEpisodes:!0})]})]})};var de=a(27293),Ee=a(49693);const ge=({metadata:e,canSort:t})=>{const a=(0,E.Y5)("#006450"),n=(0,d.k)(),{sortState:u}=(0,r.useContext)(c.Q),{filter:g}=(0,r.useContext)(A.fo),{isPlaying:D,togglePlay:h,usePlayContextItem:C}=(0,T.n)({uri:e.uri,metadata:{[L.sb.SORTING_CRITERIA]:b(u),[L.sb.FILTERING_PREDICATE]:(0,o.aK)(g)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});return(0,R.jsxs)("section",{className:O,"data-testid":"your-episodes-page",children:[(0,R.jsx)(de.$,{children:i.ag.get("sidebar.your_episodes")}),(0,R.jsx)(ue,{metadata:e,backgroundColor:a,isPlaying:D,isOnline:n,togglePlay:h}),(0,R.jsxs)("div",{className:S,children:[(0,R.jsx)(M,{metadata:e,backgroundColor:a,isPlaying:D,isOnline:n,togglePlay:h,canSort:t}),(0,R.jsx)("div",{className:"contentSpacing",children:e.totalLength>0?(0,R.jsx)(le,{contextUri:e.uri,usePlayContextItem:C}):(0,R.jsx)(s.u,{message:i.ag.get("collection.empty-page.episodes-subtitle"),title:i.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:i.ag.get("collection.empty-page.shows-cta"),renderInline:!0,children:(0,R.jsx)(l.G,{"aria-hidden":"true"})})})]})]})},Te=(0,r.memo)((function(){const e=(0,r.useContext)(g.H).getCapabilities(),t=(0,Ee.x)();return t?(0,R.jsx)(c.$,{uri:t.uri,defaultSortOption:u.oT.ADDED_AT,children:(0,R.jsx)(A.hz,{uri:t.uri,children:(0,R.jsx)(ge,{metadata:t,canSort:e.canSortTracksAndEpisodes&&t.totalLength>0})})}):(0,R.jsx)(n.h,{hasError:!1,errorMessage:i.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map