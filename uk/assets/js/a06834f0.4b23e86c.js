"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4307],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(o),m=n,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(y,l(l({ref:t},c),{},{components:o})):r.createElement(y,l({ref:t},c))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4341:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=o(7462),n=(o(7294),o(3905));const a={title:"Local development",sidebar_position:9,description:"Guide on local development Autonomys Node and Farmer",keywords:["local development","autonomys network"]},l=void 0,p={unversionedId:"develop/nova/local_development",id:"develop/nova/local_development",title:"Local development",description:"Guide on local development Autonomys Node and Farmer",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/develop/nova/local_development.md",sourceDirName:"develop/nova",slug:"/develop/nova/local_development",permalink:"/uk/docs/pre-release/develop/nova/local_development",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/develop/nova/local_development.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Local development",sidebar_position:9,description:"Guide on local development Autonomys Node and Farmer",keywords:["local development","autonomys network"]},sidebar:"tutorialSidebar",previous:{title:"Hardhat",permalink:"/uk/docs/pre-release/develop/nova/hardhat_guide"},next:{title:"Autonomys block explorer",permalink:"/uk/docs/pre-release/develop/nova/block_explorer"}},s={},i=[{value:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0457 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438",id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0457-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438",level:3}],c={toc:i},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430-\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0457-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438"},"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0457 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u0412\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443 \u043c\u0435\u0440\u0435\u0436\u0443, \u0449\u043e\u0431 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0440\u043e\u0437\u0433\u043e\u0440\u043d\u0443\u0442\u0438 \u0441\u0432\u0456\u0439 \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442!")),(0,n.kt)("p",null,"\u0429\u043e\u0431 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043f\u043e\u0432\u043d\u0443 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0443 \u043c\u0435\u0440\u0435\u0436\u0443, \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0438\u0439 \u0432\u0443\u0437\u043e\u043b, \u0434\u043e\u043c\u0435\u043d Core-EVM \u0456 \u0444\u0430\u0440\u043c\u0435\u0440."),(0,n.kt)("p",null,"First, visit the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/autonomys/subspace/releases"},"Autonomys releases"))," page and download the most up-to-date stable versions of the node and farmer."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For each release, there are two versions:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"skylake: \u0434\u043b\u044f \u043d\u043e\u0432\u0456\u0448\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440\u0456\u0432 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437 2015 \u0440\u043e\u043a\u0443 \u0456 \u0434\u0430\u043b\u0456"),(0,n.kt)("li",{parentName:"ol"},"x86-64-v2: \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440\u0456\u0432 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u043d\u043e \u0437 2009 \u0440\u043e\u043a\u0443 \u0442\u0430 \u0434\u0435\u044f\u043a\u0438\u0445 \u0441\u0442\u0430\u0440\u0438\u0445 \u0432\u0456\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0438\u0445 \u043c\u0430\u0448\u0438\u043d")),(0,n.kt)("p",{parentName:"admonition"},"Older processors/VMs are no longer supported by official releases, but they can still be ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/autonomys/subspace/blob/main/docs/development.md"},"compiled manually")," if desired.")),(0,n.kt)("p",null,"\u041f\u0456\u0441\u043b\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043e\u0431\u043e\u0445 \u0444\u0430\u0439\u043b\u0456\u0432, \u044f\u043a\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u044e\u0442\u044c \u0432\u0430\u0448\u0456\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0456, \u0437\u0430\u043f\u0443\u0441\u0442\u0456\u0442\u044c \u0432\u0443\u0437\u043e\u043b, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0447\u0438 \u0431\u0430\u0436\u0430\u043d\u0438\u0439 \u0442\u0435\u0440\u043c\u0456\u043d\u0430\u043b. \u042f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0434\u043e\u043c\u0435\u043d EVM \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0456\u0439 \u043c\u0430\u0448\u0438\u043d\u0456, \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u043a\u0430\u0437\u0430\u0442\u0438:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your local RPC server port"),(0,n.kt)("li",{parentName:"ul"},"Your local web-socket RPC port\nYou can do this with the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"./your_subspace_node_path run --dev --rpc-listen-on 127.0.0.1:9944 -- --domain-id 3 --dev --rpc-listen-on 127.0.0.1:8545\n")),(0,n.kt)("p",null,"This will create a local RPC on port ",(0,n.kt)("strong",{parentName:"p"},"8545"),"."),(0,n.kt)("p",null,"Secondly, you need to start a farmer by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"}," ./your_subspace_farmer_path farm --reward-address [YOUR REWARD ADDRESS] path=tmp-farm,size=100M\n")),(0,n.kt)("p",null,"You can specify the desired plot size, but 100M should be sufficient."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And that\u2019s it!")," By starting your ",(0,n.kt)("strong",{parentName:"p"},"local node")," and a ",(0,n.kt)("strong",{parentName:"p"},"farmer"),", you have your ",(0,n.kt)("strong",{parentName:"p"},"local RPC")," ready for testing and deploying your smart contracts! You can easily connect your ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," account to the local development network, as well as use ",(0,n.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,n.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/"},"Foundry")," in order to test and deploy smart contracts on a local network!"))}u.isMDXComponent=!0}}]);