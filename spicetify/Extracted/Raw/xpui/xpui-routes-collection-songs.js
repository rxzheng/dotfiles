"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7553],{8294:(e,t,r)=>{r.d(t,{p:()=>D});var n=r(15861),a=r(93433),l=r(29439),o=r(87757),i=r.n(o),c=(r(66992),r(41539),r(70189),r(78783),r(33948),r(57327),r(21249),r(68309),r(67294)),s=r(96206),u=r(1838),m=r(61728),d=r(22423),f=r(28248),g=r(78462),p=r(42922),y=r(45342),b=r(15852),E=r(49961),k=r(39412),v=new Set(g.P0),h=new Set([]),D=c.memo((function(e){var t=e.nrTracks,r=e.collectionUri,o=e.columns,D=e.initialItems,C=e.uri,S=e.sortable,P=void 0===S||S,w=e.scrollToUri,T=e.usePlayContextItem,F=e.outerDomRef,I=e.spec,O=(0,c.useContext)(y.H),R=(0,c.useRef)(null),x=(0,c.useState)(t),L=(0,l.Z)(x,2),A=L[0],_=L[1],U=(0,c.useContext)(d.fo).filter,B=(0,c.useRef)((function(){})),j=(0,c.useState)([]),M=(0,l.Z)(j,2),Q=M[0],N=M[1],Z=(0,c.useContext)(g.Gb),z=Z.sortState,G=Z.setSortState,H=(0,b.$P)(),V=(0,c.useCallback)((function(e,t){e===f.QD.ADDED_AT?G({column:f.QD.ADDED_AT,order:z.order===f.kn.ASC?f.kn.DESC:f.kn.ASC}):G((0,u.VK)(e,z)),I&&H.logInteraction(I.columnHeaderFactory({identifier:e,position:t||0}).hitSort())}),[H,G,z,I]);(0,c.useEffect)((function(){R.current&&R.current.update()}),[z,U]),(0,c.useEffect)((function(){R.current&&""===U&&R.current.scrollToFirstSelected()}),[U,A]),(0,c.useEffect)((function(){_(t)}),[t]),(0,c.useEffect)((function(){R.current&&w&&R.current.scrollToItem({uri:w})}),[w]);var $=(0,c.useCallback)((function(e){var t=e.map((function(e){return e.uri}));B.current(),null==O||O.remove.apply(O,(0,a.Z)(t))}),[O]),q=(0,c.useCallback)((function(e,t){B.current=t,e.length>1?N(e):$(e)}),[$]),K=(0,c.useCallback)(function(){var e=(0,n.Z)(i().mark((function e(t,r){var n,a,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null==O?void 0:O.getTracks({offset:t,limit:r,uri:C,sort:(0,k.w)(z),filter:U});case 2:return n=e.sent,a=null==n?void 0:n.totalLength,l=(null==n?void 0:n.items)||[],"number"==typeof a&&a!==A&&_(a),e.abrupt("return",l);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[U,O,A,z,C]),W=(0,c.useCallback)((function(e,t){var n,a=(0,E.X)(null===(n=e.album)||void 0===n?void 0:n.images,{desiredSize:40,desiredLabel:"small"});return c.createElement(f.dx,{key:t+e.uri,index:t,contextUri:r,uri:e.uri,isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,albumOrShow:e.album,isExplicit:e.isExplicit,isCollaborative:!1,isMixedMedia:!1,isPaywalled:!1,isUserSubscribed:!1,isLocal:e.isLocal,addedBy:[],dateAdded:e.addedAt,hasDecoratedAddedBy:!1,release_date:"",isMOGEFRestricted:e.is19PlusOnly,type:e.type,imgUrl:(null==a?void 0:a.url)||"",onMove:function(){},onInsert:function(){},usePlayContextItem:T,allowedDropTypes:[],isDisliked:!1,playlistName:s.ag.get("sidebar.liked_songs")})}),[r,T]);return c.createElement(c.Fragment,null,c.createElement(p.ZP,{value:"liked-songs-tracklist"},c.createElement(f.Pv,{ariaLabel:s.ag.get("sidebar.liked_songs"),key:r,hasHeaderRow:!0,columns:o,sortableColumns:null!=O&&O.getCapabilities().canSort&&P?v:h,sortState:z,onSort:V,renderRow:W,resolveUri:function(e){return e.uri},resolveUid:function(e){return e.uri},onRemove:q,nrTracks:A,fetchTracks:K,limit:50,canFetchAllTracks:null==O?void 0:O.getCapabilities().canFetchAllTracks,outerRef:R,outerDomRef:F,tracks:D})),c.createElement(m.h,{title:s.ag.get("remove_from_your_liked_songs"),isOpen:Q.length>0,tracks:Q,onClose:function(e){e.stopPropagation(),N([])},onRemove:$}))}))},69003:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var n=r(4942),a=(r(66992),r(41539),r(88674),r(78783),r(33948),r(68309),r(57327),r(41637),r(74916),r(64765),r(47941),r(82526),r(38880),r(89554),r(54747),r(49337),r(33321),r(69070),r(67294)),l=r(86706),o=r(51615),i=r(69518),c=r.n(i),s=r(98983),u=r(93994),m=r(96206),d=r(18270),f=r(43683),g=r(70369),p=r(30731),y=r(6158),b=r(55120),E=r(77834),k=r(22423),v=r(28248),h=r(78462),D=r(61412),C=r(69846),S=r(23232),P=r(61901),w=r(88247),T=r(45342),F=r(26482),I=r(84242),O=r(15852),R=r(29255),x=r(12498),L=r(88767),A=r(62830),_=r(6489),U=r(76391),B=r(8688),j=r(98620);var M=r(39412),Q=r(98816),N=r(98562),Z=r(35213),z=a.memo((function(e){var t=e.tracklistDomRef,r=(0,O.fU)(Q.createDesktopSearchBarEventFactory,{}),n=r.spec,l=r.logger,o=(0,a.useCallback)((function(){l.logInteraction(n.filterFieldFactory().keyStrokeFilter())}),[l,n]),i=(0,a.useCallback)((function(){l.logInteraction(n.filterFieldFactory().hitClearFilter())}),[l,n]),c=(0,a.useCallback)((function(){l.logInteraction(n.sortButtonFactory().hitSort())}),[l,n]);return a.createElement("div",{className:E.Z.searchBoxContainer},a.createElement(a.Suspense,{fallback:null},a.createElement(N.K,{placeholder:m.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:t,onFilter:o,onClear:i})),a.createElement(Z.l,{columns:h.P0,onSort:c}))})),G=r(8294);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=a.lazy((function(){return Promise.all([r.e(1814),r.e(2716),r.e(682)]).then(r.bind(r,82716))})),q=[v.QD.INDEX,v.QD.TITLE,v.QD.ALBUM,v.QD.ADDED_AT,v.QD.DURATION],K="your_library",W=function(e){var t=e.data,r=e.canFilter,n=e.canSort,l=t.metadata,i=l.uri,c=l.name,C=l.totalLength,T=(0,a.useRef)(null),R=C>0,L=C>0,A=(0,P.Y5)("#5038a0"),_=(0,a.useContext)(k.fo).filter,U=(0,a.useContext)(h.Gb),B=U.sortState,j=U.setSortState,Q=(0,O.fU)(u.createDesktopLikedSongsEventFactory,{data:{uri:i}}),N=Q.spec,Z=Q.logger,H=a.useMemo((function(){return N.headerFactory()}),[N]),V=a.useMemo((function(){return N.tracklistFactory()}),[N]);(0,a.useEffect)((function(){null===B.column&&j({column:v.QD.ADDED_AT,order:v.kn.DESC})}),[B,j]);var $=(0,o.k6)(),W="POP"!==$.action?new URLSearchParams($.location.search).get("uri"):null,X=(0,I.n)((0,w.I)(i,(0,M.w)(B),_),{featureIdentifier:K,referrerIdentifier:"your_library"}),Y=X.isPlaying,J=X.togglePlay,ee=X.usePlayContextItem,te=X.isActive,re=function(){var e=N.actionBarFactory().playButtonFactory();te?Y?Z.logInteraction(e.hitPause({itemToBePaused:i})):Z.logInteraction(e.hitResume({itemToBeResumed:i})):Z.logInteraction(e.hitPlay({itemToBePlayed:i})),J()},ne=(0,a.useCallback)((function(e,t){var r=N.actionBarFactory().downloadButtonFactory();t===F.mc.ADD?Z.logInteraction(r.hitDownload({itemToDownload:i})):t===F.mc.REMOVE?Z.logInteraction(r.hitRemoveDownload({itemToRemoveFromDownloads:i})):t===F.mc.NO_PERMISSION&&Z.logInteraction(r.hitUiReveal())}),[Z,N,i]);return a.createElement("section",{role:"presentation",className:E.Z.playlist,"data-testid":"playlist-page"},a.createElement(g.$,null,m.ag.get("playlist.page-title",c)),a.createElement(S.s,{metadata:t.metadata,isPlaying:Y,togglePlay:re,backgroundColor:A,specLikedSongs:H}),a.createElement(d.o,{backgroundColor:A},a.createElement(d.F,null,L?a.createElement(b.$,{onClick:re,isPlaying:Y,size:"lg",uri:i,ariaPauseLabel:m.ag.get("playlist.a11y.pause",c),ariaPlayLabel:m.ag.get("playlist.a11y.play",c)}):null,t.metadata.totalLength>0&&a.createElement(x.v,{uri:i,renderEnabled:function(){return a.createElement(D.v,{uri:i})}}),a.createElement(f.o,{uri:i,canDownload:R,isFollowing:!0,onFollow:function(){},size:f.q.md,onClick:ne}),r&&n&&a.createElement(O.Nh,{spec:N.actionBarFactory()},a.createElement(z,{tracklistDomRef:T})))),a.createElement("div",{className:"contentSpacing"},C>0?a.createElement(a.Suspense,{fallback:a.createElement(y.h,{hasError:!1,errorMessage:m.ag.get("error.request-collection-tracks-failure")})},a.createElement(O.Nh,{spec:V},a.createElement(G.p,{nrTracks:C,columns:q,collectionUri:i,scrollToUri:W,usePlayContextItem:ee,outerDomRef:T,spec:V,initialItems:t.contents.items}))):a.createElement(p.u,{message:m.ag.get("collection.empty-page.songs-subtitle"),title:m.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:m.ag.get("collection.empty-page.songs-cta"),renderInline:!0},a.createElement(s.F,null))))},X=a.memo((function(e){var t=e.user,r=e.uri,n=(0,a.useContext)(k.fo).filter,o=(0,a.useContext)(h.Gb).sortState,i=function(e,t,r){var n=(0,a.useContext)(T.H),l=(0,L.useQueryClient)(),o=(0,A.jP)((function(){return["useLikedSongs",e,r]}),[e,r]),i=(0,L.useQuery)(o(),(function(){return n.getTracks(r)}),{cacheTime:18e5,keepPreviousData:!0,refetchOnWindowFocus:!1}).data,c=(0,a.useCallback)((function(){l.invalidateQueries(o())}),[l,o]);(0,U.b)(_.EW.UPDATE,c);var s=(0,j.I2)(t.id);return s&&i?{metadata:{uri:e,name:s.name,images:s.images,totalLength:null==i?void 0:i.totalLength,unfilteredTotalLength:i.unfilteredTotalLength,owner:(0,B.V3)(t)},contents:i}:null}(r,t,{offset:0,limit:25,sort:(0,M.w)(o),filter:n}),c=(0,a.useContext)(T.H).getCapabilities(),s=(0,l.v9)(R.n5),u=(0,C.U)("spotify:user:".concat(s,":collection")).isEnhanced;if(i){var d=a.createElement(W,{data:i,canFilter:c.canFilter&&i.metadata.unfilteredTotalLength>0,canSort:c.canSort&&i.metadata.unfilteredTotalLength>0});return a.createElement(x.v,{uri:i.metadata.uri,renderEnabled:function(){return u?a.createElement(a.Suspense,{fallback:null},a.createElement(h.kz,{uri:i.metadata.uri},a.createElement($,{metadata:V(V({},i.metadata),{},{collaborators:{count:1,items:[{isOwner:!0,user:i.metadata.owner,tracksAdded:i.metadata.totalLength}]}}),capabilities:c,featureIdentifier:K}))):d},renderDisabled:function(){return d}})}return a.createElement(y.h,{hasError:!1,errorMessage:m.ag.get("error.not_found.title.playlist"),loadOffline:c.canModifyOffline})}));const Y=function(){var e=(0,l.v9)(R.Gg).user;if(null===e)return null;var t=c().collectionURI(e.id).toURI();return a.createElement(h.kz,{uri:t},a.createElement(k.hz,{uri:t},a.createElement(X,{uri:t,user:e})))}},23232:(e,t,r)=>{r.d(t,{s:()=>n.s});var n=r(40786)}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map