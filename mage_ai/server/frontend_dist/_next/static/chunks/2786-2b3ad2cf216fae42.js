"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2786],{27125:function(n,e,t){var o=t(75582),u=t(82684),r=t(12691),i=t.n(r),c=t(34376),l=t.n(c),a=t(9518),s=t(83455),d=t(35490),p=t(66050),f=t(60328),v=t(16634),b=t(67971),h=t(10919),m=t(98781),g=t(86673),O=t(58180),j=t(19711),x=t(46261),Z=t(82531),y=t(73828),_=t(94353),k=t(10503),P=t(49125),w=t(44162),L=t(24224),S=t(96510),T=t(43482),C=t(28598);e.Z=function(n){var e=n.blockRuns,t=n.onClickRow,r=n.pipeline,c=n.selectedRun,D=n.setErrors,R=(0,u.useContext)(a.ThemeContext),M=(0,u.useState)(null),E=M[0],N=M[1],I=(0,u.useState)(null),A=I[0],Y=I[1],V=r||{},B=V.uuid,F=V.type,Q=(0,u.useMemo)((function(){return r.blocks||[]}),[r]),U=(0,u.useMemo)((function(){return(0,L.HK)(Q,(function(n){return n.uuid}))}),[Q]),H=(0,u.useMemo)((function(){return m.qL.INTEGRATION===F}),[F]),J=(0,u.useMemo)((function(){return m.qL.PYTHON===F}),[F]),K=(0,u.useMemo)((function(){var n,e;return null===(n=new d.Z)||void 0===n||null===(e=n.decodedToken)||void 0===e?void 0:e.token}),[]),q=(0,s.Db)((function(n){var e=n.blockUUID,t=n.pipelineRunId;return Z.ZP.block_outputs.pipelines.downloads.detailAsync(null===r||void 0===r?void 0:r.uuid,e,{pipeline_run_id:t,token:K},{onDownloadProgress:function(n){return N((Number((null===n||void 0===n?void 0:n.loaded)||0)/1e6).toFixed(3))},responseType:_.E.BLOB})}),{onSuccess:function(n){return(0,S.wD)(n,{callback:function(n){Y(null),(0,T.uS)(n,"block_output.".concat(y.Lu.CSV))},onErrorCallback:function(n,e){return null===D||void 0===D?void 0:D({errors:e,response:n})}})}}),z=(0,o.Z)(q,2),W=z[0],X=z[1].isLoading,G=[{uuid:"Date"},{uuid:"Status"},{uuid:"Trigger"},{uuid:"Block"},{uuid:"Completed"},{uuid:"Logs"}];return J&&G.push({uuid:"Output"}),(0,C.jsx)(O.Z,{columnFlex:[null,1,3,2,null,null,null],columns:G,isSelectedRow:function(n){return e[n].id===(null===c||void 0===c?void 0:c.id)},onClickRow:t,rows:null===e||void 0===e?void 0:e.map((function(n){var e,t,o,u,r=n||{},c=r.block_uuid,a=r.completed_at,s=r.created_at,d=r.id,m=r.pipeline_run_id,O=r.pipeline_schedule_id,Z=r.pipeline_schedule_name,y=r.status,_=c,L=_.split(":"),S=A===d&&X;H&&(_=L[0],o=L[1],u=L[2]);var T=U[_];T||(T=U[L[0]]);var D=[(0,C.jsx)(j.ZP,{default:!0,monospace:!0,children:s},"".concat(d,"_created_at")),(0,C.jsx)(j.ZP,{danger:p.V.FAILED===y,default:p.V.CANCELLED===y,info:p.V.INITIAL===y,monospace:!0,success:p.V.COMPLETED===y,warning:p.V.RUNNING===y,children:y},"".concat(d,"_status")),(0,C.jsx)(i(),{as:"/pipelines/".concat(B,"/triggers/").concat(O),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,C.jsx)(h.Z,{bold:!0,sameColorAsText:!0,children:Z})},"".concat(d,"_trigger")),(0,C.jsx)(i(),{as:"/pipelines/".concat(B,"/edit?block_uuid=").concat(_),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,C.jsxs)(h.Z,{bold:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,C.jsx)(v.Z,{color:(0,w.qn)(null===(e=T)||void 0===e?void 0:e.type,{blockColor:null===(t=T)||void 0===t?void 0:t.color,theme:R}).accent,size:1.5*P.iI,square:!0}),(0,C.jsx)(g.Z,{mr:1}),(0,C.jsxs)(j.ZP,{monospace:!0,children:[_,o&&": ",o&&(0,C.jsx)(j.ZP,{default:!0,inline:!0,monospace:!0,children:o}),u>=0&&": ",u>=0&&(0,C.jsx)(j.ZP,{default:!0,inline:!0,monospace:!0,children:u})]})]})},"".concat(d,"_block_uuid")),(0,C.jsx)(j.ZP,{default:!0,monospace:!0,children:a||"-"},"".concat(d,"_completed_at")),(0,C.jsx)(f.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return l().push("/pipelines/".concat(B,"/logs?block_run_id[]=").concat(d))},children:(0,C.jsx)(k.B4,{default:!0,size:2*P.iI})},"".concat(d,"_logs"))];return J&&D.push((0,C.jsx)(b.Z,{alignItems:"center",justifyContent:"center",children:(0,C.jsx)(x.Z,{appearBefore:!0,autoHide:!S,block:!0,forceVisible:S,label:S?"".concat(E||0,"mb downloaded..."):"Save block run output as CSV file",size:null,widthFitContent:!0,children:(0,C.jsx)(f.Z,{default:!0,disabled:!J||!(p.V.COMPLETED===y)||X,iconOnly:!0,loading:S,noBackground:!0,onClick:function(){N(null),Y(d),W({blockUUID:_,pipelineRunId:m})},children:(0,C.jsx)(k.vc,{default:!0,size:2*P.iI})})})},"".concat(d,"_save_output"))),D})),uuid:"block-runs"})}},43482:function(n,e,t){t.d(e,{Dp:function(){return f},OF:function(){return v},Q9:function(){return h},Rt:function(){return s},h8:function(){return b},k1:function(){return d},uS:function(){return m}});var o=t(21831),u=t(82394),r=t(91427),i=t(24224),c=t(90211);function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,u.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n){var e={},t={};return null===n||void 0===n||n.forEach((function(n){var o=n.content,u=n.outputs,r=n.type,i=n.uuid;(null===u||void 0===u?void 0:u.length)>=1&&(e[i]=u.map((function(n){var e=n||{},t=e.sample_data,o=e.shape,u=e.text_data,r=e.type;return t?{data:a({shape:o},t),type:r}:u&&(0,c.Pb)(u)?JSON.parse(u):u}))),t[r]||(t[r]={}),t[r][i]=o})),{content:t,messages:e}}function d(n,e,t){n.forEach((function(n){(0,r.t8)("".concat(t,"/").concat(n.uuid,"/codeCollapsed"),(0,r.Od)("".concat(e,"/").concat(n.uuid,"/codeCollapsed"))),(0,r.t8)("".concat(t,"/").concat(n.uuid,"/outputCollapsed"),(0,r.Od)("".concat(e,"/").concat(n.uuid,"/outputCollapsed")))}))}function p(n){return"".concat(n,"/").concat(r.kP)}function f(n){return(0,r.U2)(p(n),[])}function v(n,e){var t=f(n);t.includes(e)||(0,r.t8)(p(n),[].concat((0,o.Z)(t),[e]))}function b(n,e){var t=f(n).filter((function(n){return n!==e}));(0,r.t8)(p(n),t)}function h(n,e){var t=(0,i.HK)(e,(function(n){return n.uuid}));return n.map((function(n){return t[n]})).filter((function(n){return!!n}))}var m=function(n,e){var t=window.URL.createObjectURL(n),o=document.createElement("a");o.href=t,o.download=e,document.body.appendChild(o),o.click(),o.remove()}},56681:function(n,e,t){t.d(e,{G7:function(){return Z},ZP:function(){return y},u$:function(){return O}});var o=t(75582),u=t(82394),r=t(26304),i=t(32316),c=t(22673),l=t(73752),a=t(86673),s=t(19711),d=t(58180),p=t(49125),f=t(19395),v=t(7715),b=t(28598),h=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function g(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,u.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var O=76,j={uuid:"Run details"},x={uuid:"Dependency tree"},Z=[x,j];function y(n){var e=n.height,t=n.heightOffset,u=n.pipeline,m=n.selectedRun,y=n.selectedTab,_=n.setSelectedTab,k=g({},(0,r.Z)(n,h));m?k.blockStatus=(0,f.IJ)(null===m||void 0===m?void 0:m.block_runs):k.noStatus=!0;var P=(0,v.Kn)(null===m||void 0===m?void 0:m.variables)?g({},null===m||void 0===m?void 0:m.variables):(null===m||void 0===m?void 0:m.variables)||{},w=null===m||void 0===m?void 0:m.event_variables;if(w&&(0,v.Kn)(w)&&!(0,v.Qr)(w))if((0,v.Kn)(P)&&P.hasOwnProperty("event")){var L=(0,v.Kn)(P.event)?P.event:{};P.event=g(g({},L),w)}else P.event=g({},w);var S=[];P&&JSON.stringify(P,null,2).split("\n").forEach((function(n){S.push("    ".concat(n))}));var T=m&&[["Run ID",null===m||void 0===m?void 0:m.id],["Variables",(0,b.jsx)(c.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],C=m&&(0,b.jsx)(a.Z,{pb:p.cd,px:p.cd,children:(0,b.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(n){return 1===n?"100px":null},rows:T.map((function(n,e){var t=(0,o.Z)(n,2),u=t[0],r=t[1];return[(0,b.jsx)(s.ZP,{monospace:!0,muted:!0,children:u},"key_".concat(e)),(0,b.jsx)(s.ZP,{monospace:!0,textOverflow:!0,children:r},"val_".concat(e))]})),uuid:"LogDetail"})}),D=y&&_;return(0,b.jsxs)(b.Fragment,{children:[D&&(0,b.jsx)(a.Z,{py:p.cd,children:(0,b.jsx)(i.Z,{onClickTab:_,selectedTabUUID:null===y||void 0===y?void 0:y.uuid,tabs:Z})}),(!D||x.uuid===(null===y||void 0===y?void 0:y.uuid))&&(0,b.jsx)(l.Z,g(g({},k),{},{height:e,heightOffset:(t||0)+(D?O:0),pipeline:u})),j.uuid===(null===y||void 0===y?void 0:y.uuid)&&C]})}},73828:function(n,e,t){t.d(e,{JD:function(){return h},Lu:function(){return r},PF:function(){return f},d2:function(){return p},dT:function(){return i},n6:function(){return a},nB:function(){return b},oy:function(){return v},xF:function(){return d}});var o,u,r,i,c=t(82394),l=t(86422);!function(n){n.CSV="csv",n.JSON="json",n.MD="md",n.PY="py",n.R="r",n.SQL="sql",n.TXT="txt",n.YAML="yaml",n.YML="yml"}(r||(r={})),function(n){n.INIT_PY="__init__.py",n.METADATA_YAML="metadata.yaml",n.REQS_TXT="requirements.txt"}(i||(i={}));var a=[r.PY,r.SQL],s=[r.JSON,r.MD,r.PY,r.R,r.SQL,r.TXT,r.YAML,r.YML],d=new RegExp(s.map((function(n){return".".concat(n,"$")})).join("|")),p=new RegExp(s.map((function(n){return".".concat(n,"$")})).join("|")),f="charts",v="pipelines",b=(o={},(0,c.Z)(o,r.MD,l.t6.MARKDOWN),(0,c.Z)(o,r.JSON,r.JSON),(0,c.Z)(o,r.PY,l.t6.PYTHON),(0,c.Z)(o,r.R,l.t6.R),(0,c.Z)(o,r.SQL,l.t6.SQL),(0,c.Z)(o,r.TXT,"text"),(0,c.Z)(o,r.YAML,l.t6.YAML),(0,c.Z)(o,r.YML,l.t6.YAML),o),h=(u={},(0,c.Z)(u,l.t6.MARKDOWN,r.MD),(0,c.Z)(u,l.t6.PYTHON,r.PY),(0,c.Z)(u,l.t6.R,r.R),(0,c.Z)(u,l.t6.SQL,r.SQL),(0,c.Z)(u,l.t6.YAML,r.YAML),(0,c.Z)(u,"text",r.TXT),u)},22673:function(n,e,t){var o=t(82684),u=t(68792),r=t(31811),i=t(9518),c=t(65292),l=t(23831),a=t(2005),s=t(49125),d=t(28598);e.Z=function(n){var e=n.language,t=n.maxWidth,p=n.showLineNumbers,f=n.small,v=n.source,b=n.wrapLines,h=(0,o.useContext)(i.ThemeContext);function m(n){var o=n.value;return(0,d.jsx)(r.Z,{customStyle:{backgroundColor:(h.background||l.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*s.iI,paddingTop:2*s.iI},language:e,lineNumberStyle:{color:(h.content||l.Z.content).muted},showLineNumbers:p,style:c._4,useInlineStyles:!0,wrapLines:b,children:o})}return(0,d.jsx)(u.D,{components:{code:function(n){var e=n.children;return(0,d.jsx)(m,{value:e})}},children:v})}}}]);