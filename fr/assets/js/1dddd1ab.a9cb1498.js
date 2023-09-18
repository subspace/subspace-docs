"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,l(l({ref:t},i),{},{components:r})):o.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"Local development",sidebar_position:9,description:"Guide on local development Subspace Node and Farmer",keywords:["local development","subspace network"]},l=void 0,s={unversionedId:"developers/local_development",id:"version-latest/developers/local_development",title:"Local development",description:"Guide on local development Subspace Node and Farmer",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/developers/local_development.md",sourceDirName:"developers",slug:"/developers/local_development",permalink:"/fr/docs/developers/local_development",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/fr/docusaurus-plugin-content-docs/current/developers/local_development.md",tags:[],version:"latest",sidebarPosition:9,frontMatter:{title:"Local development",sidebar_position:9,description:"Guide on local development Subspace Node and Farmer",keywords:["local development","subspace network"]},sidebar:"tutorialSidebar",previous:{title:"Hardhat",permalink:"/fr/docs/developers/hardhat_guide"},next:{title:"Subspace block explorer",permalink:"/fr/docs/developers/block_explorer"}},p={},c=[{value:"Setting up a local development environment",id:"setting-up-a-local-development-environment",level:3}],i={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"setting-up-a-local-development-environment"},"Setting up a local development environment"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can always set up a local network to test and deploy your smart contract!")),(0,n.kt)("p",null,"To establish a full local network, you need to run a local node, a Core-EVM domain, and a farmer."),(0,n.kt)("p",null,"First, visit the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/subspace/subspace/releases"},"Subspace releases"))," page and download the most up-to-date stable versions of the node and farmer."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For each release, there are two versions:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"skylake: for newer processors from around 2015 and onwards"),(0,n.kt)("li",{parentName:"ol"},"x86-64-v2: for older processors from around 2009 and some older VMs")),(0,n.kt)("p",{parentName:"admonition"},"Older processors/VMs are no longer supported by official releases, but they can still be ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/blob/main/docs/development.md"},"compiled manually")," if desired.")),(0,n.kt)("p",null,"After downloading both files that suit your system, start a node using your preferred terminal. If you want to start an EVM domain on your local machine, you need to specify:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your local RPC server port"),(0,n.kt)("li",{parentName:"ul"},"Your local web-socket RPC port You can do this with the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./your_subspace_node_path --dev --alice --rpc-port 9444 -- --domain-id 3 --dev --rpc-port 8545\n")),(0,n.kt)("p",null,"This will create a local RPC on port ",(0,n.kt)("strong",{parentName:"p"},"8545"),"."),(0,n.kt)("p",null,"Secondly, you need to start a farmer by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," ./your_subspace_farmer_path farm --reward-address [YOUR REWARD ADDRESS] path=tmp-farm,size=100M\n")),(0,n.kt)("p",null,"You can specify the desired plot size, but 100M should be sufficient."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And that\u2019s it!")," By starting your ",(0,n.kt)("strong",{parentName:"p"},"local node")," and a ",(0,n.kt)("strong",{parentName:"p"},"farmer"),", you have your ",(0,n.kt)("strong",{parentName:"p"},"local RPC")," ready for testing and deploying your smart contracts! You can easily connect your ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," account to the local development network, as well as use ",(0,n.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,n.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/"},"Foundry")," in order to test and deploy smart contracts on a local network!"))}u.isMDXComponent=!0}}]);