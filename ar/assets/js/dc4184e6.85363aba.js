"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6767],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},i=void 0,s={unversionedId:"farming-&-staking/farming/pulsar/pulsar-troubleshooting",id:"version-latest/farming-&-staking/farming/pulsar/pulsar-troubleshooting",title:"Troubleshooting",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/versioned_docs/version-latest/farming-&-staking/farming/pulsar/pulsar-troubleshooting.mdx",sourceDirName:"farming-&-staking/farming/pulsar",slug:"/farming-&-staking/farming/pulsar/pulsar-troubleshooting",permalink:"/ar/docs/farming-&-staking/farming/pulsar/pulsar-troubleshooting",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/farming/pulsar/pulsar-troubleshooting.mdx",tags:[],version:"latest",lastUpdatedBy:"Justin",lastUpdatedAt:1702315597,formattedLastUpdatedAt:"\u0661\u0661 \u062f\u064a\u0633\u0645\u0628\u0631 \u0662\u0660\u0662\u0663",sidebarPosition:4,frontMatter:{title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/ar/docs/farming-&-staking/farming/pulsar/pulsar-tips"},next:{title:"Advanced CLI",permalink:"/ar/docs/category/advanced-cli"}},l={},u=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Wipe Node &amp; Farmer",id:"wipe-node--farmer",level:3},{value:"View your Logs",id:"view-your-logs",level:3},{value:"Enable Rust Backtrace",id:"enable-rust-backtrace",level:3},{value:"Common Problems",id:"common-problems",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,n.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We have included a few tutorials below that may help you in your support journey, this is not an all inclusive list but we welcome contributions")),(0,n.kt)("h3",{id:"wipe-node--farmer"},"Wipe Node & Farmer"),(0,n.kt)("admonition",{title:"Updated from a previous version and now having issues?",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Occasionally after updating to a new version of the Pulsar you will need to wipe your node and farmer, generally this should not be required but can be attempted if your farmer is having issues after having had worked fine previously.")),(0,n.kt)("p",null,"To simply restart the node, go to the terminal where you started the ",(0,n.kt)("inlineCode",{parentName:"p"},"farm")," command, and press ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," you should see a shutdown message appear and the application will attempt a simple shutdown, if you dont see the message press ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," again to force shutdown. You can then simply start the farmer again with the ",(0,n.kt)("inlineCode",{parentName:"p"},"farm")," command you used prior."),(0,n.kt)("p",null,"Use the same file name as the previous init and farm steps, then add the wipe command to free the previous storage that was being used. Generally, only do this if you have severe errors and are prompted by a staff member."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-file-name wipe\n")),(0,n.kt)("p",null,"After wiping, follow the ",(0,n.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"farm")," steps above to start farming again!"),(0,n.kt)("h3",{id:"view-your-logs"},"View your Logs"),(0,n.kt)("p",null,"A good place to start if you are facing trouble is by viewing your logs and seeing if there are any errors or insights that might be available. You can find the location for your logs below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%/AppData/Local/pulsar/logs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Logs/pulsar/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"$HOME/.local/share/pulsar/logs"))),(0,n.kt)("h3",{id:"enable-rust-backtrace"},"Enable Rust Backtrace"),(0,n.kt)("p",null,"When running the Subspace Network Farmer & Node, sometimes you may encounter an error message that includes a line similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.\n")),(0,n.kt)("p",null,"This error message means that Rust (the programming language that Subspace Network Farmer & Node is written in) has encountered a problem and has provided a diagnostic backtrace that can help diagnose the issue. However, by default, the backtrace is not displayed. To see the backtrace, you need to enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable."),(0,n.kt)("p",null,"To enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," enter the following into your terminal:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows"),"(PowerShell): ",(0,n.kt)("inlineCode",{parentName:"li"},"$Env:RUST_BACKTRACE=1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1"))),(0,n.kt)("p",null,"Once you have enabled the RUST_BACKTRACE simply rerun the application and you will get additional info upon any errors. "),(0,n.kt)("h3",{id:"common-problems"},"Common Problems"),(0,n.kt)("p",null,"Looking for solutions to other common issues? "),(0,n.kt)("p",null,"Check out our Common Problems page. This resource covers a range of frequently encountered challenges, offering practical solutions to help you overcome them. Please note that while this page addresses many common issues, it is not an all-inclusive list. For issues not covered, you can visit our forums or Discord for additional support."))}c.isMDXComponent=!0}}]);