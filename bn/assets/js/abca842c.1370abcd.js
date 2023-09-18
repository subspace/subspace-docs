"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9899],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),l=a(7294),r=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),p=a(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=k({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=s??m;return c({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var b=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(m(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:d},o,{className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return l.createElement(w,(0,n.Z)({key:String(t)},e))}},4522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),o=a(5162),i=a(9960),s=a(1207);const u={title:"Pulsar (Recommended)",sidebar_position:2,description:"Farming on the Subspace Network",keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},p=void 0,m={unversionedId:"protocol/pulsar",id:"version-latest/protocol/pulsar",title:"Pulsar (Recommended)",description:"Farming on the Subspace Network",source:"@site/i18n/bn/docusaurus-plugin-content-docs/version-latest/protocol/pulsar.mdx",sourceDirName:"protocol",slug:"/protocol/pulsar",permalink:"/bn/docs/protocol/pulsar",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/bn/docusaurus-plugin-content-docs/current/protocol/pulsar.mdx",tags:[],version:"latest",sidebarPosition:2,frontMatter:{title:"Pulsar (Recommended)",sidebar_position:2,description:"Farming on the Subspace Network",keywords:["Farmer","Farming","CLI","Binaries","GitHub"]},sidebar:"tutorialSidebar",previous:{title:"Polkadot.js",permalink:"/bn/docs/protocol/wallets/polkadot"},next:{title:"Advanced CLI",permalink:"/bn/docs/protocol/substrate-cli"}},d={},c=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Getting A Crypto Wallet",id:"getting-a-crypto-wallet",level:3},{value:"Required ports",id:"required-ports",level:3},{value:"Installation",id:"installation",level:2},{value:"Download Binaries",id:"download-binaries",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Gemini 3 Testnet",id:"gemini-3-testnet",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Farming",id:"farming",level:2},{value:"Moving the Farming Process to the Background",id:"moving-the-farming-process-to-the-background",level:4},{value:"Having Trouble?",id:"having-trouble",level:2},{value:"Wipe Node &amp; Farmer",id:"wipe-node--farmer",level:3},{value:"View your Logs",id:"view-your-logs",level:3},{value:"Enable Rust Backtrace",id:"enable-rust-backtrace",level:3},{value:"Enabling RUST_BACKTRACE on Windows (PowerShell)",id:"enabling-rust_backtrace-on-windows-powershell",level:4},{value:"Enabling RUST_BACKTRACE on macOS",id:"enabling-rust_backtrace-on-macos",level:4},{value:"Enabling RUST_BACKTRACE on Linux",id:"enabling-rust_backtrace-on-linux",level:4}],k={toc:c},h="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Recommended",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/subspace/pulsar"},"Pulsar")," (previously Subspace CLI or Simple CLI) is the recommended way to farm on the Subspace Network. To get started, follow the guide below. For more information, you can check out the project ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/subspace/pulsar/blob/main/README.md"},"README on GitHub"),".")),(0,l.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,l.kt)("admonition",{title:"Farming can be Network Intensive.",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Make sure you have a stable network connection. During the plotting phase of farming, it can be network intensive."),(0,l.kt)("p",{parentName:"admonition"},"This may impact your network usage so please check your network connection if you have a hard data limit.")),(0,l.kt)("p",null,"Pulsar requires commodity hardware specs to operate. At a ",(0,l.kt)("strong",{parentName:"p"},"minimum"),", it is recommended to have:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Hardware"),(0,l.kt)("th",{parentName:"tr",align:null},"Specs"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CPU"),(0,l.kt)("td",{parentName:"tr",align:null},"4 Core+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAM"),(0,l.kt)("td",{parentName:"tr",align:null},"8GB+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SWAP"),(0,l.kt)("td",{parentName:"tr",align:null},"4GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"100GB SSD")))),(0,l.kt)("admonition",{title:"SWAP Warning",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"A swap is only necessary if you have a low amount of RAM. ")),(0,l.kt)("admonition",{title:"CoW Filesystems Warning",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If BTRFS is used with Subspace, the directory/whole file system must be CoW disabled with the following command prior to starting Subspace, because it only applies to newly created files."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Command to Disable CoW on BTRFS")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"sudo chattr +C path/to/data/dir\n")),(0,l.kt)("p",{parentName:"admonition"},"Alternatively, non-CoW file systems like ext4 or XFS can be used instead.")),(0,l.kt)("admonition",{title:"Redundancy",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Using redundancy (RAID1/5/6, RAIDZ and others) on a filesystem with plot makes no sense, as the farmer uses checksums to verify the integrity of the plot, and is able to recover corrupted blocks if necessary in most cases. See ",(0,l.kt)("inlineCode",{parentName:"p"},"scrub")," command below.")),(0,l.kt)("admonition",{title:"Filesystem chunk size",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"XFS")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo mkfs.xfs -d su=32k,sw=1 /path/to/dev\n")),(0,l.kt)("p",{parentName:"admonition"},"Then use ",(0,l.kt)("inlineCode",{parentName:"p"},"largeio")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"swalloc")," mount options."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"ext4")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo mkfs.ext4 -E stride=8,stripe-width=8 /path/to/dev\n")),(0,l.kt)("p",{parentName:"admonition"},"You can change these settings for an existing file system:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo tune2fs -E stride=8,stripe-width=8 /path/to/dev\n"))),(0,l.kt)("h3",{id:"getting-a-crypto-wallet"},"Getting A Crypto Wallet"),(0,l.kt)("p",null,"Before running anything you need to have a wallet where you'll receive testnet coins.\nFollow our how-to guides in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/category/wallets/"},"Wallets section")," of the documentation for steps on how to get your wallet setup."),(0,l.kt)("h3",{id:"required-ports"},"Required ports"),(0,l.kt)("p",null,"Currently, a few ports need to be exposed for node to work properly."),(0,l.kt)("p",null,"If you have a server with no firewall, there is nothing to be done, but otherwise make sure to open the following TCP ports for incoming connections."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"30333")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"30433")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"30533"))),(0,l.kt)("p",null,"On the desktop side if you have a router in front of your computer, you'll need to forward TCP ports to the machine on which your node is running (how this is done varies from router to router, but there is always a feature like this, refer to ",(0,l.kt)("a",{parentName:"p",href:"/bn/docs/protocol/port-forwarding"},"How to Forward Ports")," for a more in-depth tutorial).\nIf you're connected directly without any router, then again nothing needs to be done in such case."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("admonition",{title:"ALPHA SOFTWARE",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Pulsar is in ",(0,l.kt)("strong",{parentName:"p"},"alpha"),".\nPlease feel free to file bug reports on our GitHub issues.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Prefer A video? Expand for our installation video"),(0,l.kt)("div",null,(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h1-CX7lGl2w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),(0,l.kt)("h3",{id:"download-binaries"},"Download Binaries"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Precompiled versions of the Pulsar is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/subspace/pulsar/releases"},"hosted on GitHub"),". This is the recommended way to install the application. Please find the appropriate binary for your operating system."),(0,l.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the Release Binary below.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand for Version 2 - For older processors since ~2009 and some old VMs"),(0,l.kt)("div",{className:s.Z.buttons},(0,l.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/pulsar/releases/download/v0.6.8-alpha/pulsar-windows-x86_64-v2-v0.6.5-alpha.exe",mdxType:"Link"},"Windows CLI Executable"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand for Version 3 - For newer processors since ~2015"),(0,l.kt)("div",{className:s.Z.buttons},(0,l.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/pulsar/releases/download/v0.6.5-alpha/pulsar-windows-x86_64-skylake-v0.6.5-alpha.exe",mdxType:"Link"},"Windows CLI Executable"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Open Powershell, type ",(0,l.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),").")),(0,l.kt)("admonition",{title:"Warning",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"The warning below may appear because the application is trying to access the internet. This is expected as it is how the farmer talks to other farmers on the network. Please select 'Allow access' to continue farming."))),(0,l.kt)(o.Z,{value:"macos",label:"\ud83c\udf4emacOS",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download your Release Binary below.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Mac CLI Executable (Intel)"),(0,l.kt)("div",{className:s.Z.buttons},(0,l.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/pulsar/releases/download/v0.6.8-alpha/pulsar-macos-x86_64-v0.6.8-alpha.zip",mdxType:"Link"},"Mac CLI Executable (Intel)"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Mac CLI Executable (Apple M Series)"),(0,l.kt)("div",{className:s.Z.buttons},(0,l.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/pulsar/releases/download/v0.6.8-alpha/pulsar-macos-aarch64-v0.6.8-alpha.zip",mdxType:"Link"},"Mac CLI Executable (Apple M Series)"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Extract the ",(0,l.kt)("inlineCode",{parentName:"li"},".zip")," file."),(0,l.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,l.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,l.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod +x pulsar-macos-x86_64-v0.6.8-alpha")," (Intel Chip)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod +x pulsar-macos-aarch64-v0.6.8-alpha")," (Apple M Series)")))),(0,l.kt)("admonition",{title:"null",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Your Mac may not let you open/initialize the file because of unidentified developer restrictions. To resolve this, go to Settings-> Security&Privacy -> General -> Allow"))),(0,l.kt)(o.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Some older processors/VMs are no longer supported by official releases, but can still be compiled manually if desired")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download your Release Binary below.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand for Ubuntu Executable"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Version 2 - for older processors since ~2009 and some old VMs"),(0,l.kt)("div",{className:s.Z.buttons},(0,l.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/pulsar/releases/download/v0.6.8-alpha/pulsar-ubuntu-x86_64-v2-v0.6.8-alpha",mdxType:"Link"},"Ubuntu Executable"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Version 3 - For newer processors since ~2015"),(0,l.kt)("div",{className:s.Z.buttons},(0,l.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/pulsar/releases/download/v0.6.8-alpha/pulsar-ubuntu-x86_64-skylake-v0.6.8-alpha",mdxType:"Link"},"Ubuntu Executable")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand for Aarch64/64-bit Raspberry Pi Executables"),(0,l.kt)("div",{className:s.Z.buttons},(0,l.kt)(i.Z,{className:"button button--secondary button",to:"https://github.com/subspace/pulsar/releases/download/v0.6.8-alpha/pulsar-ubuntu-aarch64-v0.6.8-alpha",mdxType:"Link"},"Ubuntu Executable (aarch64)"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Open Terminal, type ",(0,l.kt)("inlineCode",{parentName:"li"},"cd Downloads")," (or ",(0,l.kt)("inlineCode",{parentName:"li"},"cd Your-File-Location"),")."),(0,l.kt)("li",{parentName:"ol"},"Make the binary executable by running:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod +x pulsar-ubuntu-x86_64-skylake-v0.6.8-alpha")," (Ubuntu)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"chmod +x pulsar-ubuntu-aarch64-v0.6.8-alpha")," (Ubuntu aarch64)")))))),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"To start we have to initialize our Farmer, this can be done with:"),(0,l.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"./pulsar-windows-x86_64-skylake-v0.6.5-alpha.exe init\n")),(0,l.kt)("admonition",{title:"High RAM consumption",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"  Operating systems, such as Windows, allocate memory for both visible tasks and behind-the-scenes processes.\nWhile this memory can be readily freed when necessary, Windows occasionally may not display these allocations accurately due to certain system nuances.\nHigh RAM consumption should not be a cause for concern."))),(0,l.kt)(o.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},"Intel Chip:",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-macos-x86_64-v0.6.8-alpha  init\n")),(0,l.kt)("p",null,"Apple M Series:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-macos-aarch64-v0.6.8-alpha init\n"))),(0,l.kt)(o.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},"Ubuntu:",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-ubuntu-x86_64-skylake-v0.6.8-alpha  init\n")),(0,l.kt)("p",null,"Ubuntu Executable (aarch64):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-ubuntu-aarch64-v0.6.8-alpha  init\n")))),(0,l.kt)("p",null,"This will prompt you to setup your Pulsar configurations to begin farming. You should see a similar prompt like so (some info might be different than shown here w.r.t your OS):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},'version: 0.6.0\n\nConfiguration creation process has started...\nDo you have an existing farmer/reward address? [y/n]: y\nEnter your farmer/reward address: REDACTED_ADDRESS\nEnter your node name to be identified on the network(defaults to `subspace`, press enter to use the default):\nSpecify a path for storing plot files (press enter to use the default: `"/home/username/.local/share/pulsar/farms"`):\nSpecify a path for storing node files (press enter to use the default: `"/home/username/.local/share/pulsar/node"`):\nSpecify a plot size (defaults to `2.0 GB`, press enter to use the default):\nSpecify the chain to farm. Available options are: [Gemini3f, Dev, DevNet].\nDefaults to `Gemini3f`, press enter to use the default:\nConfiguration has been generated at /home/username/.config/pulsar\nReady for lift off! Run the follow command to begin: `"path/to/executable" farm`\n')),(0,l.kt)("admonition",{title:"Finding your settings.toml",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"After running ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar init"),", the prompt will display where the ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.toml")," is generated. However in case you missed it, you can find the file based on your operating system:"),(0,l.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,l.kt)("inlineCode",{parentName:"p"},"$FOLDERID_RoamingAppData/pulsar/settings.toml"))),(0,l.kt)(o.Z,{value:"macos",label:"\ud83c\udf4emacOS",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/Library/Application Support/pulsar/settings.toml"))),(0,l.kt)(o.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.toml")," will be found in ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.config/pulsar/settings.toml"))))),(0,l.kt)("h3",{id:"gemini-3-testnet"},"Gemini 3 Testnet"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"If you are using the default configurations from Pulsar, you are ready to go with the Gemini 3 Testnet. Alternatively, you can ensure this occurs by manually setting the network like so."),(0,l.kt)("p",null,"Open your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.toml")," directory and ensure your ",(0,l.kt)("inlineCode",{parentName:"p"},"chain")," is correctly specified to ",(0,l.kt)("inlineCode",{parentName:"p"},"gemini-3f")," as so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},"# settings.toml\n[node]\nchain = 'gemini-3f'\n# ... redacted ...\n")),(0,l.kt)("h3",{id:"local-development"},"Local Development"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"To run Pulsar in a local development mode, modify your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.toml")," and ensure your ",(0,l.kt)("inlineCode",{parentName:"p"},"chain")," points to ",(0,l.kt)("inlineCode",{parentName:"p"},"dev"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},"# settings.toml\n[node]\nchain = 'dev'\n# ... redacted ...\n")),(0,l.kt)("h2",{id:"farming"},"Farming"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"To begin farming on the network, just run the ",(0,l.kt)("inlineCode",{parentName:"p"},"farm")," command with the CLI like so:"),(0,l.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"./pulsar-windows-x86_64-skylake-v0.6.8-alpha.exe farm\n"))),(0,l.kt)(o.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},(0,l.kt)("p",null,"Intel Chip:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-macos-x86_64-v0.6.8-alpha farm\n")),(0,l.kt)("p",null,"Apple M1 Chip:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-macos-aarch64-v0.6.8-alpha farm\n"))),(0,l.kt)(o.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},(0,l.kt)("p",null,"Ubuntu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-ubuntu-x86_64-skylake-v0.6.8-alpha farm\n")),(0,l.kt)("p",null,"Ubuntu Executable (aarch64):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-ubuntu-aarch64-v0.6.8-alpha farm\n")))),(0,l.kt)("p",null,"You should see the farmer and node start successfully and begin syncing, plotting, and then farming:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Starting node ... (this might take up to couple of minutes)\nNode started successfully!\nStarting farmer ...\nFarmer started successfully!\nInitial plotting for plot: #0 (/home/username/.local/share/pulsar/farms)\n\u2801 [00:00:00] 3% [=>                                      ]\n      (31.00 MiB/953.67 MiB) 157.35 GiB/s, plotting, ETA: 0s\n")),(0,l.kt)("p",null,"That's it! Enjoy and Happy Farming!"),(0,l.kt)("h4",{id:"moving-the-farming-process-to-the-background"},"Moving the Farming Process to the Background"),(0,l.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"tmux",label:"Tmux",default:!0,mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Learn More about Tmux",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you want to learn more about Tmux and its options check out their Repo ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tmux/tmux/wiki"},"here"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a new tmux session using a socket file named farming")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ tmux -S farming\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Move process to background by detaching")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"Ctrl+b d OR \u2318+b d (Mac)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To re-attach")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ tmux -S farming attach\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Alternatively, you can use the following single command to both create (if not exists already) and attach to a session:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ tmux new-session -A -D -s farming\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To delete farming session")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ tmux kill-session -t farming\n"))),(0,l.kt)(o.Z,{value:"screen",label:"Screen",mdxType:"TabItem"},(0,l.kt)("admonition",{title:"Learn More about Screen",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you want to learn more about Screen and its options check out their Webpage ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/screen/"},"here"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create new screen using a socket file named farming")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ screen -S farming\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Move process to background by detaching")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"Ctrl+d a OR \u2318+d a (Mac)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To re-attach")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ screen -r farming\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Alternatively, you can use the following single command to both create (if not exists already) and attach to a session:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ screen -D -R -S farming\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To delete farming session")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ screen -S farming -X quit\n")))),(0,l.kt)("h2",{id:"having-trouble"},"Having Trouble?"),(0,l.kt)("p",null,"If you are facing issues with your node/farmer you can try a few of the following things below, if you are unable to get your issue resolved please check our ",(0,l.kt)("a",{parentName:"p",href:"https://forums.subspace.network"},"Forums")," to see if your issue may have been solved, if its a new one feel free to post it! You can also join our ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/subspace-network"},"Discord")," for additional Peer to Peer help."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"We have included a few tutorials below that may help you in your support journey, this is not an all inclusive list but we welcome contributions")),(0,l.kt)("h3",{id:"wipe-node--farmer"},"Wipe Node & Farmer"),(0,l.kt)("admonition",{title:"Updated from a previous version and now having issues?",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Occasionally after updating to a new version of the Pulsar you will need to wipe your node and farmer, generally this should not be required but can be attempted if your farmer is having issues after having had worked fine previously.")),(0,l.kt)("p",null,"To simply restart the node, go to the terminal where you started the ",(0,l.kt)("inlineCode",{parentName:"p"},"farm")," command, and press ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," you should see a shutdown message appear and the application will attempt a simple shutdown, if you dont see the message press ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl + C")," again to force shutdown. You can then simply start the farmer again with the ",(0,l.kt)("inlineCode",{parentName:"p"},"farm")," command you used prior."),(0,l.kt)("p",null,"Use the same file name as the previous init and farm steps, then add the wipe command to free the previous storage that was being used. Generally, only do this if you have severe errors and are prompted by a staff member."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"./pulsar-file-name wipe\n")),(0,l.kt)("p",null,"After wiping, follow the ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"farm")," steps above to start farming again!"),(0,l.kt)("h3",{id:"view-your-logs"},"View your Logs"),(0,l.kt)("p",null,"A good place to start if you are facing trouble is by viewing your logs and seeing if there are any errors or insights that might be available. You can find the location for your logs below"),(0,l.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Your Logs will be found in ",(0,l.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%/AppData/Local/pulsar/logs"))),(0,l.kt)(o.Z,{value:"macos",label:"\ud83c\udf4emacOS",mdxType:"TabItem"},(0,l.kt)("p",null,"Your Logs will be found in ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/Library/Logs/pulsar/"))),(0,l.kt)(o.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,l.kt)("p",null,"Your Logs will be found in ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.local/share/pulsar/logs")))),(0,l.kt)("h3",{id:"enable-rust-backtrace"},"Enable Rust Backtrace"),(0,l.kt)("p",null,"When running the Subspace Network Farmer & Node, sometimes you may encounter an error message that includes a line similar to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Backtrace omitted. Run with RUST_BACKTRACE=1 environment variable to display it.\n")),(0,l.kt)("p",null,"This error message means that Rust (the programming language that Subspace Network Farmer & Node is written in) has encountered a problem and has provided a diagnostic backtrace that can help diagnose the issue. However, by default, the backtrace is not displayed. To see the backtrace, you need to enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable."),(0,l.kt)("p",null,"In this section, we will show you how to enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable on Linux, macOS, and Windows (PowerShell)."),(0,l.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"enabling-rust_backtrace-on-windows-powershell"},"Enabling RUST_BACKTRACE on Windows (PowerShell)"),(0,l.kt)("p",null,"To enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable on Windows using PowerShell, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a PowerShell window.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Type the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"$Env:RUST_BACKTRACE=1\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Press Enter.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After exporting the environment variable, run the Pulsar as usual, and any errors encountered will display the backtrace.")))),(0,l.kt)(o.Z,{value:"macos",label:"\ud83c\udf4emacOS",mdxType:"TabItem"},(0,l.kt)("h4",{id:"enabling-rust_backtrace-on-macos"},"Enabling RUST_BACKTRACE on macOS"),(0,l.kt)("p",null,"To enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable on macOS, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a terminal window.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Type the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"export RUST_BACKTRACE=1\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Press Enter.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After exporting the environment variable, run the Pulsar as usual, and any errors encountered will display the backtrace.")))),(0,l.kt)(o.Z,{value:"linux",label:"\ud83d\udc27Ubuntu",mdxType:"TabItem"},(0,l.kt)("h4",{id:"enabling-rust_backtrace-on-linux"},"Enabling RUST_BACKTRACE on Linux"),(0,l.kt)("p",null,"To enable the ",(0,l.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE")," environment variable on Linux, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a terminal window.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Type the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"export RUST_BACKTRACE=1\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Press Enter.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After exporting the environment variable, run the Pulsar as usual, and any errors encountered will display the backtrace."))))))}b.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);