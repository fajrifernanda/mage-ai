"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7815],{45838:function(n,e,t){t.d(e,{GZ:function(){return s},Vq:function(){return d},cE:function(){return p},cl:function(){return l},kA:function(){return a}});var o=t(38626),r=t(23831),i=t(37391),c=t(49125),l=o.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-1wzfyed-0"})(["position:relative;overflow:auto;"," "," "," "," ",""],i.w5,(function(n){return n.includePadding&&"\n    padding: ".concat(2*c.iI,"px;\n  ")}),(function(n){return n.maxHeight&&"\n    max-height: ".concat(n.maxHeight,";\n  ")}),(function(n){return n.minHeight&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")}),(function(n){return n.overflowVisible&&"\n    overflow: visible;\n  "})),a=o.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-1"})(["contain:size;width:100%;",""],(function(n){return(n.columnBorders||n.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),d=o.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-2"})([""," ",""],(function(n){return n.highlightOnHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||r.Z.interactive).rowHoverBackground,";\n    }\n  ")}),(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||r.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),u=(0,o.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(c.iI/2,"px ").concat(c.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(c.iI,"px ").concat(2*c.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),s=o.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-3"})([""," "," "," ",""],u,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||r.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||r.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||r.Z).background.panel,";\n    border-bottom: 1px solid ").concat((n.theme.borders||r.Z.borders).medium,";\n    z-index: 2;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),p=o.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-4"})([""," "," "," "," "," "," ",""],u,(function(n){return n.rowVerticalPadding&&"\n    padding-top: ".concat(n.rowVerticalPadding,"px;\n    padding-bottom: ").concat(n.rowVerticalPadding,"px;\n  ")}),(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||r.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||r.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||r.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||r.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "}))},87815:function(n,e,t){var o=t(82394),r=t(12691),i=t.n(r),c=t(82684),l=t(44182),a=t(25880),d=t(67971),u=t(62084),s=t(10919),p=t(86673),h=t(19711),f=t(46261),g=t(45838),v=t(49125),b=t(28598);function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var w=20*v.iI;function y(n,e){var t=n.alignTop,o=n.borderCollapseSeparate,r=n.buildLinkProps,m=n.buildRowProps,y=n.columnBorders,j=n.columnFlex,k=n.columnMaxWidth,C=n.columns,O=void 0===C?[]:C,P=n.compact,Z=n.highlightRowOnHover,I=n.isSelectedRow,H=n.noBorder,_=n.noHeader,S=n.onClickRow,B=n.onDoubleClickRow,E=n.onRightClickRow,D=n.renderRightClickMenu,M=n.renderRightClickMenuItems,R=n.rowGroupHeaders,N=n.rowVerticalPadding,A=n.rows,T=n.rowsGroupedByIndex,V=n.stickyFirstColumn,z=n.stickyHeader,F=n.uuid,X=n.wrapColumns,W=(0,c.useState)(null),G=W[0],q=W[1],L=(0,c.useState)(null),K=L[0],U=L[1],Y=(0,c.useMemo)((function(){return j.reduce((function(n,e){return n+(e||0)}),0)}),[j]),J=(0,c.useCallback)((function(n){if(j[n]){var e=Math.round(j[n]/Y*100);return"".concat(e,"%")}return null}),[j,Y]),Q=(0,c.useCallback)((function(){return q(null)}),[q]);(0,c.useEffect)((function(){var n;return null===(n=document)||void 0===n||n.addEventListener("click",Q),function(){var n;null===(n=document)||void 0===n||n.removeEventListener("click",Q)}}),[Q]);var $=(0,c.useMemo)((function(){return D||M}),[D,M]),nn=(0,c.useMemo)((function(){var n;if(!$)return null;var t=(null===e||void 0===e||null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect())||{},o=t.x,r=t.width,i=G||{},c=i.x,l=void 0===c?0:c,a=i.y,d=void 0===a?0:a,s=l;return l+w>=o+r&&(s=o+r-(w+v.iI)),s<0&&(s=0),(0,b.jsxs)("div",{style:{left:s,position:"fixed",top:d+v.iI/2,zIndex:100},children:[null===D||void 0===D?void 0:D(K),M&&(0,b.jsx)(u.Z,{items:M(K)||[],open:!0,parentRef:void 0,uuid:"FileBrowser/ContextMenu",width:w})]})}),[G,K,$,e,D,M]),en=(0,c.useMemo)((function(){return null===A||void 0===A?void 0:A.map((function(n,e){var o,l=null===r||void 0===r?void 0:r(e),a=(null===m||void 0===m?void 0:m(e))||{renderCell:null,renderRow:null},d=a.renderCell,u=a.renderRow,p=[];if(n.forEach((function(o,r){var i;d&&(i=d(o,r)),i||(i=(0,b.jsx)(g.cE,{alignTop:t,columnBorders:y,compact:P,last:r===n.length-1,maxWidth:null===k||void 0===k?void 0:k(r),noBorder:H,rowVerticalPadding:N,selected:null===I||void 0===I?void 0:I(e),stickyFirstColumn:V&&0===r,width:J(r),wrapColumns:X,children:o},"".concat(F,"-row-").concat(e,"-cell-").concat(r))),p.push(i)})),u)o=u(p);else{o=(0,b.jsx)(g.Vq,{highlightOnHover:Z,noHover:!(l||S),onClick:S?function(n){return function(n,e){1===(null===e||void 0===e?void 0:e.detail)?S(n):B&&2===(null===e||void 0===e?void 0:e.detail)&&B(n)}(e,n)}:null,onContextMenu:$?function(n){n.preventDefault(),q({x:n.pageX,y:n.pageY}),U(e),null===E||void 0===E||E(e,n)}:null,children:p},"".concat(F,"-row-").concat(e))}return l?(0,c.createElement)(i(),x(x({},l),{},{key:"".concat(F,"-row-link-").concat(e),passHref:!0}),(0,b.jsx)(s.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:o})):o}))}),[t,r,m,J,y,k,P,$,Z,I,H,S,B,E,N,A,U,V,F,X]),tn=(0,c.useMemo)((function(){return(0,b.jsx)(g.Vq,{noHover:!0,children:null===O||void 0===O?void 0:O.map((function(n,e){return(0,b.jsx)(g.GZ,{columnBorders:y,compact:P,last:e===O.length-1,noBorder:H,sticky:z,children:(0,b.jsxs)(d.Z,{alignItems:"center",justifyContent:n.center?"center":"flex-start",children:[(0,b.jsx)(h.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,b.jsx)(p.Z,{ml:"4px",children:(0,b.jsx)(f.Z,{appearBefore:!0,label:(0,b.jsx)(h.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(F,"-col-").concat(n.uuid,"-").concat(e))}))})}),[y,O,P,H,z,F]),on=(0,c.useMemo)((function(){return(null===R||void 0===R?void 0:R.length)>=1&&(null===T||void 0===T?void 0:T.length)>=1?null===T||void 0===T?void 0:T.reduce((function(n,e,t){var r=null===e||void 0===e?void 0:e.map((function(n){return null===en||void 0===en?void 0:en[n]}));if((null===r||void 0===r?void 0:r.length)>=1){var i=R[t];n.push((0,b.jsx)(p.Z,{mt:t>=1?2:0,children:(0,b.jsx)(l.Z,{visibleMapping:{0:!0},children:(0,b.jsx)(a.Z,{noPaddingContent:!0,title:i,children:(0,b.jsx)(g.kA,{borderCollapseSeparate:o,columnBorders:y,children:(0,b.jsxs)(b.Fragment,{children:[(null===O||void 0===O?void 0:O.length)>=1&&!_&&tn,r]})})})})},"table-group-".concat(t)))}return n}),[]):(0,b.jsxs)(g.kA,{borderCollapseSeparate:o,columnBorders:y,children:[(null===O||void 0===O?void 0:O.length)>=1&&!_&&tn,en]})}),[o,y,null===O||void 0===O?void 0:O.length,tn,_,en,R,T]);return(0,b.jsxs)("div",{style:{position:"relative"},children:[on,$&&G&&nn]})}e.Z=c.forwardRef(y)},25880:function(n,e,t){var o=t(82394),r=t(26304),i=t(82684),c=t(38626),l=t(16910),a=t(93461),d=t(67971),u=t(86673),s=t(19711),p=t(23831),h=t(10503),f=t(73942),g=t(37391),v=t(10919),b=t(49125),m=t(90880),x=t(28598),w=["beforeTitleElement","children","contentOverflowVisible","first","hideScrollbar","highlighted","last","maxHeight","noBackground","noPaddingContent","onClick","onEntered","onExited","singlePanel","smallTitle","title","titleXPadding","visible","visibleCount","visibleHighlightDisabled"];function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function j(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k=c.default.div.withConfig({displayName:"AccordionPanel__AccordionPanelStyle",componentId:"sc-sf242a-0"})([".accordion-panel-chevron-down-exit-done{transform:rotate(0deg);transition:all 200ms;}.accordion-panel-chevron-down-enter-active{transform:rotate(180deg);transition:all 200ms;}.accordion-panel-chevron-down-enter-done,.accordion-panel-chevron-down-enter-done-visible{transform:rotate(180deg);transition:all 300ms;}.accordion-panel-chevron-down-exit{transform:rotate(0deg);transition:all 300ms;}.accordion-panel-content-enter{display:block;max-height:0px;overflow:hidden;transition:max-height 400ms ease-in-out;}.accordion-panel-content-enter-active{max-height:100vh;","}.accordion-panel-content-enter-done{display:block;}.accordion-panel-content-exit{display:block;max-height:100vh;"," overflow:hidden;}.accordion-panel-content-exit-active{max-height:0px;transition:max-height 300ms cubic-bezier(0,1,0,1);}.accordion-panel-content-exit-done{display:none;}"],(function(n){return n.maxHeight&&"\n      max-height: ".concat(n.maxHeight,"px;\n    ")}),(function(n){return n.maxHeight&&"\n      max-height: ".concat(n.maxHeight,"px;\n    ")})),C=c.default.a.withConfig({displayName:"AccordionPanel__TitleStyle",componentId:"sc-sf242a-1"})([""," display:block;position:relative;padding:","px ","px;z-index:1;"," "," "," "," "," ",""],v.R,2*b.iI,2*b.iI,(function(n){return"\n    &:hover,\n    &:focus {\n      outline: none;\n    }\n    ".concat((0,m.Kl)(n),"\n\n    background-color: ").concat((n.theme.background||p.Z.background).table,";\n\n    &:hover {\n      background-color: ").concat((n.theme||p.Z).background.page,";\n    }\n\n    &:active {\n      background-color: ").concat((n.theme||p.Z).background.page,";\n    }\n  ")}),(function(n){return n.visible&&"\n    border-bottom: 1px solid ".concat((n.theme||p.Z).borders.medium2,";\n  ")}),(function(n){return!n.first&&n.visible&&"\n    border-top: 1px solid ".concat((n.theme||p.Z).borders.medium2,";\n  ")}),(function(n){return n.first&&"\n    border-top-left-radius: ".concat(f.n_,"px;\n    border-top-right-radius: ").concat(f.n_,"px;\n  ")}),(function(n){return(n.last||n.singlePanel)&&!n.visible&&"\n    border-bottom-left-radius: ".concat(f.n_,"px;\n    border-bottom-right-radius: ").concat(f.n_,"px;\n  ")}),(function(n){return n.titleXPadding&&"\n    padding-left: ".concat(n.titleXPadding,"px;\n    padding-right: ").concat(n.titleXPadding,"px;\n  ")})),O=c.default.div.withConfig({displayName:"AccordionPanel__ContentStyle",componentId:"sc-sf242a-2"})(["padding-left:","px;padding-right:","px;"," "," "," "," "," "," ",""],2*b.iI,2*b.iI,g.w5,(function(n){return n.hideScrollbar&&"\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  "}),(function(n){return!n.visible&&"\n    display: none;\n  "}),(function(n){return!n.contentOverflowVisible&&"\n    overflow-y: auto;\n  "}),(function(n){return n.contentOverflowVisible&&"\n    overflow-y: visible;\n  "}),(function(n){return n.maxHeight&&"\n    max-height: ".concat(n.maxHeight,"px;\n  ")}),(function(n){return n.noPaddingContent&&"\n    padding: 0;\n  "})),P=c.default.div.withConfig({displayName:"AccordionPanel__ContentInnerStyle",componentId:"sc-sf242a-3"})(["padding-bottom:","px;padding-top:","px;",""],2*b.iI,2*b.iI,(function(n){return n.noPaddingContent&&"\n    padding: 0;\n  "})),Z=function(n,e){var t=n.beforeTitleElement,o=n.children,i=n.contentOverflowVisible,c=n.first,p=n.hideScrollbar,f=n.highlighted,g=n.last,v=n.maxHeight,m=n.noBackground,y=n.noPaddingContent,Z=n.onClick,I=n.onEntered,H=n.onExited,_=n.singlePanel,S=n.smallTitle,B=n.title,E=n.titleXPadding,D=n.visible,M=n.visibleCount,R=n.visibleHighlightDisabled,N=(0,r.Z)(n,w);return(0,x.jsxs)(k,j(j({},N),{},{maxHeight:v,children:[(0,x.jsx)(C,{first:c,href:"#",last:g,noHoverUnderline:!0,onClick:function(n){n.preventDefault(),Z&&Z(n)},onKeyPress:function(n){" "===n.key&&Z&&Z(n)},singlePanel:_,titleXPadding:E,visible:D&&!R,children:(0,x.jsxs)(d.Z,{alignItems:"center",children:[(0,x.jsx)(u.Z,{mr:1,children:(0,x.jsxs)(d.Z,{alignItems:"center",children:[t,t&&(0,x.jsx)(u.Z,{ml:1}),"string"!==typeof B&&B,"string"===typeof B&&(0,x.jsx)(s.ZP,{bold:!0,default:!D,large:!S,wind:f,children:B})]})}),(0,x.jsx)(l.Z,{classNames:"accordion-panel-chevron-down",in:D,timeout:400,children:(0,x.jsx)(a.Z,{className:D&&0===M&&"accordion-panel-chevron-down-enter-done-visible",children:(0,x.jsx)(h._M,{default:!0,size:2*b.iI})})})]})}),(0,x.jsx)(l.Z,{classNames:"accordion-panel-content",in:D,onEntered:function(n){return I&&I(n)},onExited:function(n){return H&&H(n)},timeout:300,children:(0,x.jsx)(O,{contentOverflowVisible:i,hideScrollbar:p,maxHeight:v,noBackground:m,noPaddingContent:y,visible:D,children:(0,x.jsx)(P,{noPaddingContent:y,ref:e,children:o})})})]}))};e.Z=i.forwardRef(Z)},44182:function(n,e,t){var o=t(82394),r=t(26304),i=t(82684),c=t(38626),l=(t(25880),t(34744)),a=t(23831),d=t(73942),u=t(28598),s=["activeItemIndex","children","onClick","showDividers","visibleMapping","visibleMappingForced"];function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var f=c.default.div.withConfig({displayName:"Accordion__AccordionStyle",componentId:"sc-1xr4nou-0"})(["border-radius:","px;overflow:hidden;border-width:","px;border-style:",";"," "," ",""],d.n_,d.YF,d.M8,(function(n){return"\n    background-color: ".concat((n.theme.background||a.Z.background).content,";\n    box-shadow: ").concat((n.theme||a.Z).shadow.frame,";\n  ")}),(function(n){return!n.highlighted&&"\n    border-color: ".concat((n.theme||a.Z).background.panel,";\n  ")}),(function(n){return n.highlighted&&"\n    border-color: ".concat((n.theme||a.Z).brand.wind400,";\n  ")})),g=c.default.div.withConfig({displayName:"Accordion__AccordionPanelContainerStyle",componentId:"sc-1xr4nou-1"})([""]);e.Z=function(n){var e=n.activeItemIndex,t=n.children,c=n.onClick,a=n.showDividers,d=n.visibleMapping,p=n.visibleMappingForced,v=(0,r.Z)(n,s),b=(0,i.useState)(d||{}),m=b[0],x=b[1],w=(0,i.useState)({}),y=w[0],j=w[1],k=h(h({},m),p);return(0,u.jsx)(f,h(h({},v),{},{children:i.Children.map(t,(function(n,r){var d=i.Children.count(t),s=r===d-1,p=k[r];return(0,u.jsxs)("div",{children:[(0,u.jsx)(g,{index:r,showDividers:a,children:i.cloneElement(n,h(h({},v),{},{first:0===r,last:s,onClick:function(){var n;j(h(h({},y),{},(0,o.Z)({},r,y[r]?y[r]+1:1))),n=h(h({},k),{},(0,o.Z)({},r,!p)),x(n),c&&c(n)},singlePanel:1===d,visible:p,visibleCount:y[r]||0,visibleHighlightDisabled:"undefined"!==typeof e&&r!==e}))}),a&&(0,u.jsx)(l.Z,{})]},r)}))}))}}}]);