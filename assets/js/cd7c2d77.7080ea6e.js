"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[198],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=a,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||n;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3371:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=o(7462),a=(o(7294),o(3905));const n={title:"Introduction",sidebar_position:1,description:"A developer guide for the Subspace Network",keywords:["Getting Started","Learn","Farming","Development"]},i="Developer Guide",s={unversionedId:"develop/nova/intro",id:"develop/nova/intro",title:"Introduction",description:"A developer guide for the Subspace Network",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/develop/nova/intro.md",sourceDirName:"develop/nova",slug:"/develop/nova/intro",permalink:"/docs/pre-release/develop/nova/intro",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"A developer guide for the Subspace Network",keywords:["Getting Started","Learn","Farming","Development"]},sidebar:"tutorialSidebar",previous:{title:"Develop on Nova EVM",permalink:"/docs/pre-release/category/develop-on-nova-evm"},next:{title:"Quick start",permalink:"/docs/pre-release/develop/nova/quick_start"}},l={},c=[{value:"What makes the Subspace Network protocol different?",id:"what-makes-the-subspace-network-protocol-different",level:2},{value:"What is a Proof-of-Archival-Storage?",id:"what-is-a-proof-of-archival-storage",level:2},{value:"A few words about Subspace&#39;s consensus protocol <strong>Dilithium</strong>",id:"a-few-words-about-subspaces-consensus-protocol-dilithium",level:2},{value:"Is it difficult to build applications on Subspace Network?",id:"is-it-difficult-to-build-applications-on-subspace-network",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-guide"},"Developer Guide"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Subspace is a secure, scalable, decentralized blockchain that resolves the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://vitalik.ca/general/2017/12/31/sharding_faq.html#this-sounds-like-theres-some-kind-of-scalability-trilemma-at-play-what-is-this-trilemma-and-can-we-break-through-it"},"blockchain trilemma"))," without making compromises. This guide will cover some of the main aspects of Subspace, if you\u2019re willing to learn more about the technology behind Subspace it\u2019s better to refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://assets.website-files.com/61526a2af87a54e565b0ae92/617759c00edd0e3bd279aa29_Subspace_%20A%20solution%20to%20the%20farmer%27s%20dilemma.pdf"},"Whitepaper - ",(0,a.kt)("em",{parentName:"a"},"Full-Length"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://subspace.network/news/subspace-network-whitepaper"},"Whitepaper - ",(0,a.kt)("em",{parentName:"a"},"Summarized"))),(0,a.kt)("h2",{id:"what-makes-the-subspace-network-protocol-different"},"What makes the Subspace Network protocol different?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Some new blockchain protocols, designed to be more efficient, fair, and decentralized, are using a system called Proof-of-Capacity (PoC) that prioritizes storage-intensive farming over compute-intensive mining. However, this poses a challenge known as the farmer's dilemma, where users must decide whether to allocate their limited storage to maintain the blockchain's state and history, or to use it for consensus. This may lead to a centralization of farming among a few trusted operators. Subspace, a novel Proof-of-Archival-Storage (PoAS) blockchain, resolves this issue by allowing farmers to store the blockchain's history collectively, separating the processes of consensus and computation. This results in reduced overheads and facilitates participation by regular users, even in complex execution models."),(0,a.kt)("p",null,"Decoupled execution keeps farming lightweight and resistant to pooling, while the farmer storage network enables the blockchain to scale massively without becoming centralized."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Intro-1",src:o(9175).Z,width:"481",height:"350"})),(0,a.kt)("h2",{id:"what-is-a-proof-of-archival-storage"},"What is a Proof-of-Archival-Storage?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At Subspace, we implement a Proof-of-Archival-Storage protocol based on the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Nakamoto (or longest-chain) consensus protocol"),(0,a.kt)("li",{parentName:"ul"},"Employing a proof-of-capacity resource puzzle for space-bound Sybil resistance"),(0,a.kt)("li",{parentName:"ul"},"The space reflects some useful storage (as in Proof-of-Replication)"),(0,a.kt)("li",{parentName:"ul"},"And the specific data being replicated is the archival history of the Subspace chain")),(0,a.kt)("p",null,"In its simplest form, our Proof-of-Archival-Storage consensus is a 3-phase protocol:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Archiving phase"),": given new blocks of the chain, construct canonical history."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Plotting phase"),": given the canonical history of the blockchain, generate a unique replica (the plot) and store it on disk."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Consensus phase"),": given a challenge from a secure randomness beacon, audit the plot for a solution that satisfies some threshold, return a proof, and propose a block.")),(0,a.kt)("p",null,"If you\u2019re curious to read more about our consensus, ",(0,a.kt)("a",{parentName:"p",href:"https://blog.subspace.network/dilithium-the-subspace-consensus-v2-3c5df0759e72"},"here")," is a great overview written by one of our researchers, Dariia Porechna."),(0,a.kt)("h2",{id:"a-few-words-about-subspaces-consensus-protocol-dilithium"},"A few words about Subspace's consensus protocol ",(0,a.kt)("strong",{parentName:"h2"},"Dilithium")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"As we transition to our Dilithium v2 consensus, we've recognized the essential role polynomial schemes will play in the next era of blockchain design, just as hash functions, Merkle trees, and ECC signatures did in the previous decade. Subspace is distinctively equipped to utilize these schemes effectively due to our proof-of-archival-storage (PoAS) consensus, which enables a self-regulating feedback loop for storage costs, helping us scale with demand. This enables us to leverage polynomial schemes for linear blockspace scaling proportional to the number of network participants. We specifically employ Reed-Solomon erasure coding and Kate-Zaverucha-Goldberg (KZG) commitments in our v2 consensus, allowing efficient data recovery and authentication."),(0,a.kt)("p",null,"When archiving the history of Subspace, we replace Merkle roots with KZG commitments. Farmers can then provide constant-sized Kate proofs to clients of the Distributed Storage Network (DSN) as the witness for their pledged archival storage space. We construct generic proofs-of-replication (PoR) from RS-KZG schemes and extend these into an extremely simple and efficient proof-of-archival-storage (PoAS)."),(0,a.kt)("h2",{id:"is-it-difficult-to-build-applications-on-subspace-network"},"Is it difficult to build applications on Subspace Network?"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Our primary objective is to maintain a minimum barrier to entry for both our farmers and developers. The installation of a Subspace Network node can be accomplished in less than 15 minutes and is compatible with an extensive array of computer systems given the highly accessible minimum requirements for the hardware."),(0,a.kt)("p",null,"When it comes to development on the Subspace Network, we offer a range of flexible options. At present, you can make use of our multiple Ethereum Virtual Machine (EVM) domains for a familiar experience. Soon, we will also provide the functionality for you to build your own local custom virtual machine if that's your preference. We take pride in the unlimited possibilities we provide - there are no boundaries!"))}h.isMDXComponent=!0},9175:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Intro-1-273670c67aa2becf63908e360b9fa267.png"}}]);