(this.webpackJsonp=this.webpackJsonp||[]).push([[4],{2879:function(t,e,a){"use strict";a.r(e),function(t){var n,i=a(10),o=a.n(i),r=a(18),s=a.n(r),l=a(397),m=a(421),f=a(96);a(2880);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var a=[],n=!0,i=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done)&&(a.push(r.value),!e||a.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(t);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},u=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,2892))})),b=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(19),a.e(7)]).then(a.bind(null,2932))})),y=Object(i.lazy)((function(){return a.e(10).then(a.bind(null,2961))}));function g(t){var e=t.channelName,a=c(Object(i.useState)(null),2),n=a[0],r=a[1],s=c(Object(i.useState)(!1),2),p=s[0],d=s[1],g=Object(i.useContext)(m.a),h=g.networkStore,k=g.uiStore,w=c(Object(l.b)(),1)[0],x=o.a.useRef(!0);Object(i.useEffect)((function(){return x.current=!0,function(){x.current=!1}}),[]),Object(i.useEffect)((function(){return r(null),k.setTitle("#".concat(e," | Orbit")),k.setCurrentChannelName(e),h.joinChannel(e).then((function(t){x.current&&r(t)})),function(){k.setCurrentChannelName(null)}}),[e]);var v=o.a.useCallback((function(t){t.preventDefault(),d(!1);var e=[];if(t.dataTransfer.items)for(var a=0;a<t.dataTransfer.items.length;a++){var i=t.dataTransfer.items[a];"file"===i.kind&&e.push(i.getAsFile())}else for(var o=0;o<t.dataTransfer.files.length;o++)e.push(t.dataTransfer.files.item(o));n.sendFiles(e)}),[n]);return o.a.createElement("div",{className:"Channel",onDragOver:function(t){t.preventDefault(),!p&&d(!0)}},p&&o.a.createElement(y,{label:w("channel.file.dropzone.add",{channel:e}),onDragLeave:function(){return d(!1)},onDrop:v}),o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(f.a,null)},n?o.a.createElement(b,{channel:n}):o.a.createElement(f.a,null)),o.a.createElement(u,{channel:n,disabled:!n}))}d(g,"useState{[channel, setChannel](null)}\nuseState{[dragActive, setDragActive](false)}\nuseContext{{ networkStore, uiStore }}\nuseTranslation{[t]}\nuseRef{mounted}\nuseEffect{}\nuseEffect{}\nuseCallback{handleDropFiles}",(function(){return[l.b]})),g.propTypes={channelName:s.a.string.isRequired};var h,k,w=g;e.default=w,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(u,"ChannelControls","/Users/skysbird/workspace/orbit-web/src/containers/Channel.js"),h.register(b,"ChannelMessages","/Users/skysbird/workspace/orbit-web/src/containers/Channel.js"),h.register(y,"DropZone","/Users/skysbird/workspace/orbit-web/src/containers/Channel.js"),h.register(g,"Channel","/Users/skysbird/workspace/orbit-web/src/containers/Channel.js"),h.register(w,"default","/Users/skysbird/workspace/orbit-web/src/containers/Channel.js")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(t)}.call(this,a(52)(t))},2880:function(t,e,a){var n=a(46),i=a(2881);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);t.exports=i.locals||{}},2881:function(t,e,a){(e=a(47)(!1)).push([t.i,"@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn06{0%{opacity:0}100%{opacity:0.6}}@keyframes fadeIn06{0%{opacity:0}100%{opacity:0.6}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;transform:translateY(-5px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInFromBottom{0%{opacity:0;transform:translateY(-5px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeInCircles{0%{opacity:0.2;transform:translate(-20px, 0)}10%{opacity:1}90%{opacity:1}100%{opacity:0.2;transform:translate(20px, 0)}}@keyframes fadeInCircles{0%{opacity:0.2;transform:translate(-20px, 0)}10%{opacity:1}90%{opacity:1}100%{opacity:0.2;transform:translate(20px, 0)}}@-webkit-keyframes fadeInCirclesLoop{0%{opacity:0.2}40%{opacity:0.4}50%{opacity:1}80%{opacity:0.4}100%{opacity:0.2}}@keyframes fadeInCirclesLoop{0%{opacity:0.2}40%{opacity:0.4}50%{opacity:1}80%{opacity:0.4}100%{opacity:0.2}}@-webkit-keyframes pulse1{0%{opacity:0.3}50%{opacity:0.5}100%{opacity:0.3}}@keyframes pulse1{0%{opacity:0.3}50%{opacity:0.5}100%{opacity:0.3}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOutWithHeight{0%{opacity:1}80%{height:100%}100%{opacity:0;height:0%}}@keyframes fadeOutWithHeight{0%{opacity:1}80%{height:100%}100%{opacity:0;height:0%}}@-webkit-keyframes fadeOutUp{0%{opacity:1}100%{opacity:0;height:0}}@keyframes fadeOutUp{0%{opacity:1}100%{opacity:0;height:0}}@-webkit-keyframes fadeOutDown{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(20px)}}@keyframes fadeOutDown{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(20px)}}@-webkit-keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeInUp2{0%{opacity:0;transform:translateY(20px)}50%{opacity:0.3}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInUp2{0%{opacity:0;transform:translateY(20px)}50%{opacity:0.3}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes bounceInLeft{0%{opacity:0;transform:translateX(-200px)}60%{transform:translateX(2px)}80%{transform:translateX(-2px)}100%{opacity:1;transform:translateX(0)}}@keyframes bounceInLeft{0%{opacity:0;transform:translateX(-200px)}60%{transform:translateX(2px)}80%{transform:translateX(-2px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes bounceInRight{0%{opacity:0;transform:translateX(200px)}60%{transform:translateX(2px)}80%{transform:translateX(-2px)}100%{opacity:1;transform:translateX(0)}}@keyframes bounceInRight{0%{opacity:0;transform:translateX(200px)}60%{transform:translateX(2px)}80%{transform:translateX(-2px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes bounceInDown{0%{opacity:0;transform:translateY(-200px)}60%{transform:translateY(2px)}80%{transform:translateY(-2px)}100%{opacity:1;transform:translateY(0)}}@keyframes bounceInDown{0%{opacity:0;transform:translateY(-200px)}60%{transform:translateY(2px)}80%{transform:translateY(-2px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes slideFromRight{0%{opacity:0;transform:translateX(200px)}100%{opacity:1;transform:translateX(0)}}@keyframes slideFromRight{0%{opacity:0;transform:translateX(200px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes slideFromLeft{0%{opacity:0;transform:translateX(-200px)}100%{opacity:1;transform:translateX(0)}}@keyframes slideFromLeft{0%{opacity:0;transform:translateX(-200px)}100%{opacity:1;transform:translateX(0)}}@-webkit-keyframes appearFromTop{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}@keyframes appearFromTop{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeOutRight{0%{opacity:1}100%{opacity:0}}@keyframes fadeOutRight{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}.fadeInAnimation{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}.slideInAnimation.left{-webkit-animation:slideFromLeft;animation:slideFromLeft;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.slideInAnimation.right{-webkit-animation:slideFromRight;animation:slideFromRight;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.bounceInAnimation.left{-webkit-animation:bounceInLeft;animation:bounceInLeft;-webkit-animation-duration:0.6s;animation-duration:0.6s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.bounceInAnimation.right{-webkit-animation:bounceInRight;animation:bounceInRight;-webkit-animation-duration:0.6s;animation-duration:0.6s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.ChannelView{width:100%;height:100%;padding:0;margin:0;color:#fff;overflow:hidden}.Channel{width:100%;height:100%;overflow:hidden;background-color:#202020;display:flex;flex-flow:column nowrap;justify-content:flex-end}.Channel .center{display:flex;justify-content:center;width:100%}.Channel .active{background-color:#783c8c}.Channel .active:hover{background-color:#8c50dc}.newMessagesBar{position:absolute;bottom:2.75em;display:flex;justify-content:center;width:100%;padding:0.2em;font-weight:bold;background-color:rgba(32,32,32,0.8);cursor:s-resize}.newMessagesBar .newMessagesNumber{color:rgba(160,220,90,0.6);padding:0em 0.5em}.ChannelOptions{position:absolute;bottom:2.75em;right:0;padding:1.2em 1.2em;margin:0.5em 0.5em;margin-right:1em;max-width:30em;color:#e4e4e4;background-color:#1a1a1a;display:flex;flex-direction:row}.ChannelOptions .row{display:flex;flex-direction:column;flex:1 1 55%;max-width:55%;margin-right:1em}.ChannelOptions form{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end;flex:1;margin-left:1vw}.ChannelOptions input[type='text']{font-size:0.8em;width:100%}.ChannelOptions input[type='submit']{margin-top:0.2em;font-size:0.8em;align-self:flex-end}.ChannelOptions .headerText{font-size:0.8em;margin-bottom:0.5em;color:#e4e4e4}.ChannelOptions .instructionText{font-size:0.8em;display:flex;color:rgba(228,228,228,0.15);font-style:italic}input[type='button'],.channelOptionsButton{border-top:1px solid rgba(28,28,28,0);border-bottom:1px solid rgba(28,28,28,0);min-width:2em;margin-left:0em;margin-right:0em;height:100%;margin-top:0em;margin-bottom:0.5em;padding-left:0.75em;padding-right:0.75em;font-size:1em}input[type='button'],.addFilesButton{display:block;border-top:1px solid rgba(28,28,28,0);border-bottom:1px solid rgba(28,28,28,0);min-width:2em;height:100%;margin-left:0em;margin-right:0em;margin-top:0em;margin-bottom:0em;padding-left:0.75em;padding-right:0.75em;font-size:1.1em;font-weight:bold}.Controls{background-color:#1e1e1e;box-sizing:border-box;display:flex;justify-content:center;align-items:center;max-height:2.8em;min-height:2.8em;color:gray}.Controls .replyto{min-width:5vw;max-width:30vw;justify-content:flex-start;overflow:hidden;white-space:pre;font-size:0.8em;font-style:italic;margin-right:0.2em}.ChannelStatus{bottom:1.2em;right:1em;margin-right:0.5em;margin-left:0.5em;color:rgba(228,228,228,0.8);font-size:0.6em;font-weight:bold;display:flex;justify-content:center;cursor:default;display:flex;align-items:center;text-transform:uppercase;padding:0.5em 1em;border-radius:16px;letter-spacing:1px;background-color:rgba(48,48,48,0.5)}.Messages{position:relative;box-sizing:border-box;overflow:hidden;background-color:#232323;flex:1 1 auto}.Messages .dateSeparator{display:flex;justify-content:flex-start;margin:4px 0 2px 0;font-size:0.7em;color:#e4e4e4;cursor:default;text-transform:capitalize}.Messages .firstMessage{display:flex;justify-content:center;color:#a0a0a0;font-weight:bold;font-style:italic;font-size:0.7em;padding:0.8em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.Messages .firstMessage.loadMore{cursor:pointer}.Messages.size-normal .dateSeparator{font-size:0.7em;margin-left:0.3em}.Messages.size-large .dateSeparator{font-size:0.8em;margin-left:0.8em}.Messages.font-normal .dateSeparator{font-weight:bold;padding-bottom:0.2em}.Messages.font-monospace .dateSeparator{font-family:'Roboto Mono';font-weight:normal;padding-bottom:0.4em}.Messages:focus,.Messages :focus{outline:none}.Messages .unreadIndicator{position:absolute;bottom:0;height:1px;width:100%;background:rgba(160,220,90,0.6);opacity:0.5}.Messages .progressBar{position:absolute;top:0;height:1px;width:100%;background:#783c8c;opacity:0.5}.Messages .progressBar:before{content:'';position:absolute;background-color:#8c50dc;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}.Messages .progressBar:after{content:'';position:absolute;background-color:#8c50dc;top:0;left:0;bottom:0;will-change:left, right;-webkit-animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}.Messages .MessageList{position:absolute;bottom:0px;width:100%;max-height:100%;overflow-x:hidden;overflow-y:auto;display:flex;flex-direction:column}.controlsAnimation-appear{-webkit-animation:fadeInUp;animation:fadeInUp;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.messagesAnimation-enter{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}\n",""]),t.exports=e}}]);