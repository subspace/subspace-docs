"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},i=void 0,s={unversionedId:"farming-&-staking/farming/advanced-cli/cli-troubleshooting",id:"farming-&-staking/farming/advanced-cli/cli-troubleshooting",title:"Troubleshooting",description:"How to run a Subspace Network Farmer with the Substrate CLI",source:"@site/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting.mdx",sourceDirName:"farming-&-staking/farming/advanced-cli",slug:"/farming-&-staking/farming/advanced-cli/cli-troubleshooting",permalink:"/bn/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-troubleshooting",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/farming/advanced-cli/cli-troubleshooting.mdx",tags:[],version:"current",lastUpdatedBy:"W",lastUpdatedAt:1701448455,formattedLastUpdatedAt:"\u09e7 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0, \u09e8\u09e6\u09e8\u09e9",sidebarPosition:4,frontMatter:{title:"Troubleshooting",sidebar_position:4,description:"How to run a Subspace Network Farmer with the Substrate CLI",keywords:["Farmer","Farming","CLI","Binaries","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/bn/docs/pre-release/farming-&-staking/farming/advanced-cli/cli-tips"},next:{title:"Additional Guides",permalink:"/bn/docs/pre-release/category/additional-guides"}},l={},u=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Wipe &amp; Purge",id:"wipe--purge",level:3},{value:"Docker Wipe &amp; Purge",id:"docker-wipe--purge",level:3},{value:"- Forums",id:"--forums",level:3},{value:"- Discord",id:"--discord",level:3},{value:"Enable Rust Backtrace",id:"enable-rust-backtrace",level:3},{value:"Common Problems",id:"common-problems",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,o.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We have included a few tutorials below that may help you in your support journey, this is not an all inclusive list but we welcome contributions")),(0,o.kt)("h3",{id:"wipe--purge"},"Wipe & Purge"),(0,o.kt)("p",null,"If you were running a node previously, and want to switch to a new snapshot, please perform these steps and then follow the guideline again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace `FARMER_FILE_NAME` with the name of the node file you downloaded from releases\n./FARMER_FILE_NAME wipe PATH_TO_FARM\n# Replace `NODE_FILE_NAME` with the name of the node file you downloaded from releases\n./NODE_FILE_NAME purge-chain --chain gemini-3g\n")),(0,o.kt)("p",null,"Does not matter if the node/farmer executable is the previous one or from the new snapshot, both will work :)\nThe reason we require this is, with every snapshot change, the network might get partitioned, and you may be on a different genesis than the current one.\nIn plain English, these commands are like a ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," button for snapshot changes."),(0,o.kt)("p",null,"Now follow installation guide."),(0,o.kt)("h3",{id:"docker-wipe--purge"},"Docker Wipe & Purge"),(0,o.kt)("p",null,"In case of Docker setup run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose down -v")," (and manually delete custom directories if you have specified them)."),(0,o.kt)("p",null,"Now follow installation guide."),(0,o.kt)("p",null,"If you are having some issues with running the node or the farmer for the subspace network, feel free to join our Discord or even better you can take a look at our Forums and review and existing questions or post a new one if needed!"),(0,o.kt)("h3",{id:"--forums"},"- ",(0,o.kt)("a",{parentName:"h3",href:"https://forum.subspace.network"},"Forums")),(0,o.kt)("h3",{id:"--discord"},"- ",(0,o.kt)("a",{parentName:"h3",href:"https://discord.gg/subspace-network"},"Discord")),(0,o.kt)("h3",{id:"enable-rust-backtrace"},"Enable Rust Backtrace"),(0,o.kt)("p",null,"When running the Subspace Network Farmer & Node, you might encounter an error message indicating the need for a Rust backtrace to diagnose issues:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.\n")),(0,o.kt)("p",null,"This message suggests that Rust, the programming language used in Subspace Network Farmer & Node, has encountered a problem. By default, the backtrace is not displayed. To enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable and view detailed error information, use the following commands based on your operating system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\uddbc\ufe0f Windows")," (PowerShell): Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"$Env:RUST_BACKTRACE=1")," in PowerShell and rerun the application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83c\udf4e macOS"),": Type ",(0,o.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")," in the terminal and rerun the application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\udc27 Ubuntu"),": Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"export RUST_BACKTRACE=1")," in the terminal and rerun the application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u2699 Service (Linux)"),": For services, use ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl edit subspace-node")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl edit subspace-farmer"),", add ",(0,o.kt)("inlineCode",{parentName:"li"},"[Service]")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Environment=RUST_BACKTRACE=1")," between the warning comments, reload with ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl daemon-reload"),", and restart services using ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl restart subspace-{node,farmer}"),".")),(0,o.kt)("p",null,"By enabling ",(0,o.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE"),", you can obtain additional diagnostic information to help resolve any errors encountered during operation."),(0,o.kt)("h3",{id:"common-problems"},"Common Problems"),(0,o.kt)("p",null,"Looking for solutions to other common issues? "),(0,o.kt)("p",null,"Check out our Common Problems page. This resource covers a range of frequently encountered challenges, offering practical solutions to help you overcome them. Please note that while this page addresses many common issues, it is not an all-inclusive list. For issues not covered, you can visit our forums or Discord for additional support."))}d.isMDXComponent=!0}}]);