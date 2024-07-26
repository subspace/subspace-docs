"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4148],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1180:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["subspace network","quickstart"]},i=void 0,s={unversionedId:"develop/nova/quick_start",id:"version-latest/develop/nova/quick_start",title:"Quick start",description:"Quick start one-pager",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-latest/develop/nova/quick_start.md",sourceDirName:"develop/nova",slug:"/develop/nova/quick_start",permalink:"/uk/docs/develop/nova/quick_start",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/quick_start.md",tags:[],version:"latest",sidebarPosition:2,frontMatter:{title:"Quick start",sidebar_position:2,description:"Quick start one-pager",keywords:["subspace network","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/uk/docs/develop/nova/intro"},next:{title:"General information on dev tools and Subspace EVM",permalink:"/uk/docs/develop/nova/general-information"}},l={},u=[{value:"The only tools needed to get you started",id:"the-only-tools-needed-to-get-you-started",level:2},{value:"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM",id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm",level:3},{value:"Get tokens to your wallet using our faucet",id:"get-tokens-to-your-wallet-using-our-faucet",level:3},{value:"Test and deploy your smart contract",id:"test-and-deploy-your-smart-contract",level:3},{value:"Important note about submitting a transaction",id:"important-note-about-submitting-a-transaction",level:3},{value:"Have any questions? Feel free to post them on our forum or in our Developer-chat on Discord.",id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-only-tools-needed-to-get-you-started"},"The only tools needed to get you started"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The Quick Start is designed with the presumption that you are not a novice developer and have some basic understanding or experience. The Quick Start also anticipates that you seek a straightforward initiation into setting up a remote development environment."),(0,r.kt)("p",null,"Subspace utilizes EVM (Ethereum Virtual Machine) so any tool available for Ethereum development is compatible with Subspace."),(0,r.kt)("h3",{id:"setup-a-metamask-wallet-or-any-other-evm-compatible-wallet-and-connect-it-to-our-custom-evm"},"Setup a MetaMask Wallet (or any other EVM-compatible wallet) and connect it to our custom EVM"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Network Name: Subspace EVM\nNew RPC URL: https://nova-0.gemini-3h.subspace.network/ws\nChain ID: 490000\nCurrency Symbol: TSSC\n")),(0,r.kt)("h3",{id:"get-tokens-to-your-wallet-using-our-faucet"},"Get tokens to your wallet using our faucet"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"/uk/docs/develop/nova/faucet"},"here")," to use our ",(0,r.kt)("strong",{parentName:"p"},"Faucet")," to get some TSSC."),(0,r.kt)("h3",{id:"test-and-deploy-your-smart-contract"},"Test and deploy your smart contract"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://remix.ethereum.org/"},"Remix")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://book.getfoundry.sh/"},"Foundry"))," or any other tool familiar to you for testing and deploying your smart contracts. Just make sure to use our custom EVM domain and you're all set."),(0,r.kt)("p",null,"If anything above sounds unfamiliar, you can always fall back to our full guide."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"important-note-about-submitting-a-transaction"},"Important note about submitting a transaction"),(0,r.kt)("p",null,"Please avoid attempting to accelerate a transaction by including a tip alongside the gas fees. The transaction queue operates differently with Subspace, leading to the possibility of two transactions sharing the same nonce. This could result in dual charges for gas fees - once for the execution and storage in the first transaction, and solely for storage in the second transaction. To prevent this scenario, ensure that you refrain from adding a tip in an attempt to speed the transaction up."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"have-any-questions-feel-free-to-post-them-on-our-forum-or-in-our-developer-chat-on-discord"},"Have any questions? Feel free to post them on ",(0,r.kt)("a",{parentName:"h3",href:"https://forum.subspace.network/"},"our forum")," or in our ",(0,r.kt)("a",{parentName:"h3",href:"https://discord.gg/EAw6B48r"},"Developer-chat on Discord"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In order to get access to the role-gated developer chat:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/vhv5cEZN"},"Discord"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Subspace Network at the top left corner and choose ",(0,r.kt)("strong",{parentName:"p"},"Linked Roles"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Discord-1",src:o(2635).Z,width:"231",height:"539"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Link your GitHub account to get a developer role and gain access to ",(0,r.kt)("strong",{parentName:"p"},"developer-chat"),".\n",(0,r.kt)("img",{alt:"Discord-2",src:o(9744).Z,width:"737",height:"206"})))))}d.isMDXComponent=!0},2635:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Discord-1-25bd70f76741163d9340dee4581cdb68.png"},9744:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Discord-2-f26a783c4324243dec4a1c10235f646f.png"}}]);