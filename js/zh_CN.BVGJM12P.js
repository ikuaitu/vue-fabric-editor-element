import{g as Z,__tla as $}from"./index.lfLdklIi.js";let U,ee=Promise.all([(()=>{try{return $}catch(e){}})()]).then(async()=>{let e,t,o,l,M,D,r,i,a,V,L,n,s,c,d,u,p,g,m,_,b,h,y,f,S,x,T,v,C,j,z,R,X,Y,B,w,q,A,k,H,J,K,W,O,P,N,F,G,I,E,Q;e="\u9ED1\u6697\u4E3B\u9898",t="\u4EAE\u8272\u4E3B\u9898",o="\u52A0\u8F7D\u4E2D...",l={account:{settings:""}},M={selectPlaceholder:"\u8BF7\u9009\u62E9",ok:"\u786E\u8BA4",cancel:"\u53D6\u6D88",back:"\u8FD4\u56DE",chooseText:"\u8BF7\u9009\u62E9",closeText:"\u5173\u95ED",dark:e,delText:"\u5220\u9664",inputText:"\u8BF7\u8F93\u5165",light:t,loadingText:o,okText:"\u786E\u8BA4",queryText:"\u67E5\u8BE2",redo:"\u5237\u65B0",resetText:"\u91CD\u7F6E",routes:l,saveText:"\u4FDD\u5B58",searchText:"\u641C\u7D22"},D=Object.freeze(Object.defineProperty({__proto__:null,back:"\u8FD4\u56DE",cancel:"\u53D6\u6D88",chooseText:"\u8BF7\u9009\u62E9",closeText:"\u5173\u95ED",dark:e,default:M,delText:"\u5220\u9664",inputText:"\u8BF7\u8F93\u5165",light:t,loadingText:o,ok:"\u786E\u8BA4",okText:"\u786E\u8BA4",queryText:"\u67E5\u8BE2",redo:"\u5237\u65B0",resetText:"\u91CD\u7F6E",routes:l,saveText:"\u4FDD\u5B58",searchText:"\u641C\u7D22",selectPlaceholder:"\u8BF7\u9009\u62E9"},Symbol.toStringTag,{value:"Module"})),r={exportModalTitle:"\u5BFC\u51FA\u6570\u636E",fileType:"\u6587\u4EF6\u7C7B\u578B",fileName:"\u6587\u4EF6\u540D"},i={putAway:"\u6536\u8D77",unfold:"\u5C55\u5F00",maxTip:"\u5B57\u7B26\u6570\u5E94\u5C0F\u4E8E{0}\u4F4D",apiSelectNotFound:"\u8BF7\u7B49\u5F85\u6570\u636E\u52A0\u8F7D\u5B8C\u6210..."},a={settingDens:"\u5BC6\u5EA6",settingDensDefault:"\u9ED8\u8BA4",settingDensMiddle:"\u4E2D\u7B49",settingDensSmall:"\u7D27\u51D1",settingColumn:"\u5217\u8BBE\u7F6E",settingColumnShow:"\u5217\u5C55\u793A",settingIndexColumnShow:"\u5E8F\u53F7\u5217",settingFixedLeft:"\u56FA\u5B9A\u5230\u5DE6\u4FA7",settingFixedRight:"\u56FA\u5B9A\u5230\u53F3\u4FA7",settingFullScreen:"\u5168\u5C4F",settingBordered:"\u8FB9\u6846",index:"\u5E8F\u53F7",total:"\u5171 {total} \u6761\u6570\u636E"},V={excel:r,form:i,table:a},L=Object.freeze(Object.defineProperty({__proto__:null,default:V,excel:r,form:i,table:a},Symbol.toStringTag,{value:"Module"})),n="\u66FF\u6362\u56FE\u7247",s="\u6DFB\u52A0\u88C1\u5207",c="\u79FB\u9664\u88C1\u5207",d="\u8C03\u6574\u753B\u5E03\u5C3A\u5BF8",u="\u591A\u8FB9\u5F62\u3010\u53CD\u3011",p="\u77E9\u5F62\u3010\u53CD\u3011",g="\u5706\u3010\u53CD\u3011",m="\u4E09\u89D2\u5F62\u3010\u53CD\u3011",_="\u57FA\u7840\u8981\u7D20",b="\u7ED8\u5236\u5143\u7D20",h="\u6761\u7801\u56FE\u7247",y={empty:"\u6E05\u7A7A",download:"\u4E0B\u8F7D",save_my_spase:"\u4FDD\u5B58\u5230\u6211\u7684\u7A7A\u95F4",save_as_picture:"PNG\u56FE\u7247",save_as_svg:"SVG\u56FE\u7247",copy_to_clipboard:"\u590D\u5236\u5230\u526A\u5207\u677F",copy_to_clipboardstr:"\u590D\u5236\u5B57\u7B26\u4E32\u526A\u5207\u677F",save_as_json:"\u4FDD\u5B58\u4E3AJSON"},f={file:"\u6587\u4EF6",createDesign:{title:"\u521B\u5EFA\u8BBE\u8BA1",customSize:"\u81EA\u5B9A\u4E49\u5C3A\u5BF8",systemSize:"\u7CFB\u7EDF\u63A8\u8350\u5C3A\u5BF8",width:"\u5BBD\u5EA6",height:"\u9AD8\u5EA6",create:"\u786E\u5B9A"},importFiles:"\u5BFC\u5165\u6587\u4EF6"},S={insert:"\u63D2\u5165",insert_picture:"\u63D2\u5165\u56FE\u7247",insert_SVG:"\u63D2\u5165SVG\u5143\u7D20",insert_SVGStr:"\u63D2\u5165SVG\u5B57\u7B26",insert_PSD:"\u63D2\u5165PSD",insert_SVGStr_placeholder:"\u8BF7\u8F93\u5165SVG\u5B57\u7B26\u4E32",modal_tittle:"\u8BF7\u8F93\u5165"},x={del:"\u5220\u9664",copy:"\u590D\u5236",lock:"\u9501\u5B9A",hide:"\u9690\u85CF",editPoly:"\u7F16\u8F91\u591A\u8FB9\u5F62"},T={simple:"\u7B80\u5355\u6EE4\u955C",complex:"\u590D\u6742\u6EE4\u955C",Invert:"\u53CD\u5411",Sepia:"\u4E4C\u9ED1",BlackWhite:"\u9ED1\u767D",Brownie:"\u5DE7\u514B\u529B",Vintage:"\u590D\u53E4",Kodachrome:"\u80F6\u7247",technicolor:"\u9C9C\u8273",Polaroid:"\u9AD8\u5149",Grayscale:"\u7070\u5EA6",GrayscaleList:{average:"\u4E00\u822C",lightness:"\u4E2D\u5EA6",luminosity:"\u660E\u4EAE"},RemoveColor:"\u53BB\u9664\u989C\u8272",Brightness:"\u4EAE\u5EA6",Contrast:"\u5BF9\u6BD4\u5EA6",Saturation:"\u9971\u548C\u5EA6",Vibrance:"\u632F\u52A8",HueRotation:"\u8272\u8C03",Noise:"\u566A\u97F3",Pixelate:"\u50CF\u7D20\u5316",Blur:"\u6A21\u7CCA",Gamma:"\u8C03\u6574"},v={undo:"\u64A4\u9500",redo:"\u91CD\u505A"},C={group:"\u6210\u7EC4",unGroup:"\u62C6\u5206\u7EC4",flip:{name:"\u7FFB\u8F6C",x:"\u6C34\u5E73\u7FFB\u8F6C",y:"\u5782\u76F4\u7FFB\u8F6C"},align:{name:"\u5BF9\u9F50",left:"\u5DE6\u5BF9\u9F50",centerX:"\u6C34\u5E73\u5C45\u4E2D\u5BF9\u9F50",right:"\u53F3\u5BF9\u9F50",top:"\u4E0A\u5BF9\u9F50",bottom:"\u4E0B\u5BF9\u9F50",centerY:"\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50",averageX:"\u6C34\u5E73\u5206\u5E03",averageY:"\u5782\u76F4\u5206\u5E03"},centerAlign:{name:"\u5C45\u4E2D",centerX:"\u6C34\u5E73\u5C45\u4E2D",center:"\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D",centerY:"\u5782\u76F4\u5C45\u4E2D"}},j={size:"\u5C3A\u5BF8",color:"\u989C\u8272",colorMacthing:"\u914D\u8272",width:"\u5BBD\u5EA6",height:"\u9AD8\u5EA6"},z={id:"\u6807\u8BC6",linkData:"\u5173\u8054",font:"\u5B57\u4F53",align:"\u5BF9\u9F50",bold:"\u52A0\u7C97:",italic:"\u659C\u4F53:",underline:"\u4E0B\u5212:",stroke:"\u8FB9\u6846",swipe_up:"\u4E0A\u5212:",line_height:"\u884C\u9AD8",char_spacing:"\u95F4\u8DDD",exterior:"\u5916\u89C2",angle:"\u65CB\u8F6C",left:"X\u8F74",top:"Y\u8F74",opacity:"\u900F\u660E",shadow:"\u9634\u5F71",blur:"\u6A21\u7CCA",offset_x:"X\u8F74",offset_y:"Y\u8F74",borderRadiusX:"\u5706\u89D2\u6C34\u5E73\u534A\u5F84",borderRadiusY:"\u5706\u89D2\u5782\u76F4\u534A\u5F84",rx_ry:"\u534A\u5F84"},R={color:"\u989C\u8272",width:"\u5BBD\u5EA6",background:"\u80CC\u666F",textFloat:"\u5C0F\u6570",repleaceImg:n,createClip:s,removeClip:c,setSizeTip:d,polygonClip:"\u591A\u8FB9\u5F62",rectClip:"\u77E9\u5F62",circleClip:"\u5706",triangleClip:"\u4E09\u89D2\u5F62",polygonClipInverted:u,rectClipInverted:p,circleClipInverted:g,triangleClipInverted:m,placeholder:"\u8BF7\u8F93\u5165",common_elements:_,draw_elements:b,code_img:h,preview:"\u9884\u89C8",save:y,importFiles:f,insertFile:S,quick:x,filters:T,history:v,attrSetting:C,bgSeting:j,attributes:z},X=Object.freeze(Object.defineProperty({__proto__:null,attrSetting:C,attributes:z,background:"\u80CC\u666F",bgSeting:j,circleClip:"\u5706",circleClipInverted:g,code_img:h,color:"\u989C\u8272",common_elements:_,createClip:s,default:R,draw_elements:b,filters:T,history:v,importFiles:f,insertFile:S,placeholder:"\u8BF7\u8F93\u5165",polygonClip:"\u591A\u8FB9\u5F62",polygonClipInverted:u,preview:"\u9884\u89C8",quick:x,rectClip:"\u77E9\u5F62",rectClipInverted:p,removeClip:c,repleaceImg:n,save:y,setSizeTip:d,textFloat:"\u5C0F\u6570",triangleClip:"\u4E09\u89D2\u5F62",triangleClipInverted:m,width:"\u5BBD\u5EA6"},Symbol.toStringTag,{value:"Module"})),Y={home:"\u9996\u9875",download:"\u4E0B\u8F7D"},B=Object.freeze(Object.defineProperty({__proto__:null,default:Y,download:"\u4E0B\u8F7D",home:"\u9996\u9875"},Symbol.toStringTag,{value:"Module"})),w="\u4E2A\u4EBA\u8BBE\u7F6E",q={settings:w,about:"\u5173\u4E8E"},A=Object.freeze(Object.defineProperty({__proto__:null,about:"\u5173\u4E8E",default:q,settings:w},Symbol.toStringTag,{value:"Module"})),k="\u9519\u8BEF\u65E5\u5FD7\u5217\u8868",H={login:"\u767B\u5F55",errorLogList:k},J=Object.freeze(Object.defineProperty({__proto__:null,default:H,errorLogList:k,login:"\u767B\u5F55"},Symbol.toStringTag,{value:"Module"})),K={dashboard:"\u4EEA\u8868\u76D8",about:"\u5173\u4E8E",workbench:"\u5DE5\u4F5C\u53F0",analysis:"\u5206\u6790\u9875"},W=Object.freeze(Object.defineProperty({__proto__:null,about:"\u5173\u4E8E",analysis:"\u5206\u6790\u9875",dashboard:"\u4EEA\u8868\u76D8",default:K,workbench:"\u5DE5\u4F5C\u53F0"},Symbol.toStringTag,{value:"Module"})),O="demo\u6F14\u793A",P="\u6309\u94AE\u7684\u6269\u5C55",N="\u53EF\u62D6\u62FD\u5F39\u7A97",F={demo:"\u8868\u5355\u6F14\u793A",basic:"\u57FA\u7840\u8868\u5355",rule:"\u8868\u5355\u6821\u9A8C",dynamic:"\u52A8\u6001\u8868\u5355",customForm:"\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6"},G={demo:"\u8868\u683C\u6F14\u793A",searchTable:"\u67E5\u8BE2\u8868\u683C",editRowTable:"\u53EF\u7F16\u8F91\u884C",wzry:"\u738B\u8005\u8363\u8000",lol:"\u82F1\u96C4\u8054\u76DF"},I="\u81EA\u5B9A\u4E49\u56FE\u6807",E={demo:O,button:P,modal:N,form:F,table:G,icon:I},Q=Object.freeze(Object.defineProperty({__proto__:null,button:P,default:E,demo:O,form:F,icon:I,modal:N,table:G},Symbol.toStringTag,{value:"Module"})),U={message:{...Z(Object.assign({"./zh-CN/common.json":D,"./zh-CN/component.json":L,"./zh-CN/editor.json":X,"./zh-CN/layout.json":B,"./zh-CN/routes/account.json":A,"./zh-CN/routes/basic.json":J,"./zh-CN/routes/dashboard.json":W,"./zh-CN/routes/demo.json":Q}),"zh-CN")}}});export{ee as __tla,U as default};