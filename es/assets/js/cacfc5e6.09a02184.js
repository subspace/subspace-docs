"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[1976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Foundry - testing and deployment",sidebar_position:7,description:"Testing and Deploying Smart Contracts using Foundry",keywords:["subspace network","book getfoundry","foundry"]},i=void 0,p={unversionedId:"develop/nova/foundry_guide",id:"version-latest/develop/nova/foundry_guide",title:"Foundry - testing and deployment",description:"Testing and Deploying Smart Contracts using Foundry",source:"@site/versioned_docs/version-latest/develop/nova/foundry_guide.md",sourceDirName:"develop/nova",slug:"/develop/nova/foundry_guide",permalink:"/es/docs/develop/nova/foundry_guide",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/develop/nova/foundry_guide.md",tags:[],version:"latest",lastUpdatedBy:"W",lastUpdatedAt:1701448455,formattedLastUpdatedAt:"1 dic 2023",sidebarPosition:7,frontMatter:{title:"Foundry - testing and deployment",sidebar_position:7,description:"Testing and Deploying Smart Contracts using Foundry",keywords:["subspace network","book getfoundry","foundry"]},sidebar:"tutorialSidebar",previous:{title:"Remix IDE - testing and deployment",permalink:"/es/docs/develop/nova/remix_guide"},next:{title:"Hardhat",permalink:"/es/docs/develop/nova/hardhat_guide"}},s={},l=[{value:"Testing and deploying smart contracts using Foundry",id:"testing-and-deploying-smart-contracts-using-foundry",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"testing-and-deploying-smart-contracts-using-foundry"},"Testing and deploying smart contracts using ",(0,r.kt)("a",{parentName:"h3",href:"https://book.getfoundry.sh/"},"Foundry")),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"foundryup")," toolchain installer"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://foundry.paradigm.xyz | bash\n")),(0,r.kt)("p",{parentName:"li"},"This will install ",(0,r.kt)("inlineCode",{parentName:"p"},"foundryup"),", then simply follow the instructions on-screen, which will make the foundryup command available in your CLI.\nRunning ",(0,r.kt)("inlineCode",{parentName:"p"},"foundryup")," by itself will install the latest precompiled binaries: ",(0,r.kt)("inlineCode",{parentName:"p"},"forge"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cast"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"anvil"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"chisel"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"foundryup --help")," for more options."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you're on Windows, you will need to install and use ",(0,r.kt)("a",{parentName:"p",href:"https://gitforwindows.org/"},"Git BASH")," or ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"WSL"),", as your terminal, since Foundryup does not currently support ",(0,r.kt)("inlineCode",{parentName:"p"},"PowerShell")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmd"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once installed, create a project. Let\u2019s name it ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_subspace"),"."),(0,r.kt)("p",{parentName:"li"},"To initialize the project, run "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"forge init hello_subspace\n")),(0,r.kt)("p",{parentName:"li"},"cd into ",(0,r.kt)("inlineCode",{parentName:"p"},"hello_subspace")," directory and let\u2019s have a look at the project\u2019s structure."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Foundry-1",src:n(5123).Z,width:"350",height:"250"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All the necessary repo structure was created automatically, so we can start writing and testing our smart contracts right away. As you can see, there are separate directories for storing smart contracts (src) and testing smart contracts (test).\nLet\u2019s have a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter.sol")," smart contract and add a few more functions to the standard behavior. Our smart contract will have three functions: ",(0,r.kt)("inlineCode",{parentName:"p"},"setNumber()")," that sets the uint256 number to the provided value, ",(0,r.kt)("inlineCode",{parentName:"p"},"increment()")," which increases the value by 1 and ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement()")," which decreases the value by 1."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.13;\n\ncontract Counter {\n    uint256 public number;\n\n    function setNumber(uint256 newNumber) public {\n        number = newNumber;\n    }\n\n    function increment() public {\n        number++;\n    }\n\n    function decrement() public {\n        number--;\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let\u2019s make sure that all functions are working properly by adding a couple of tests to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter.t.sol")," test file and check if they pass."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.13;\n\nimport "forge-std/Test.sol";\nimport "../src/Counter.sol";\n\ncontract CounterTest is Test {\n    Counter public counter;\n\n    function setUp() public {\n        counter = new Counter();\n        counter.setNumber(2);\n    }\n\n    function testIncrement() public {\n        counter.increment();\n        assertEq(counter.number(), 3);\n    }\n\n    function testSetNumber(uint256 x) public {\n        counter.setNumber(x);\n        assertEq(counter.number(), x);\n    }\n\n    function testDecrement() public {\n        counter.decrement();\n        assertEq(counter.number(), 1);\n    }\n}\n')))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In our tests, we first set the initial value of number to two, then check if function ",(0,r.kt)("inlineCode",{parentName:"p"},"increment()")," increases the value by 1 and if ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement()")," decreases the value by 1.\nLet\u2019s build a project by running: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"forge build\n")),(0,r.kt)("p",{parentName:"li"},"and ensure that tests are working as expected by running "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"forge test\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Foundry-2",src:n(7085).Z,width:"1131",height:"350"})),(0,r.kt)("p",{parentName:"li"},"Nice, all tests are passing, meaning the smart contract is working as expected.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, there are ",(0,r.kt)("strong",{parentName:"p"},"two things")," we need to set, in order to ",(0,r.kt)("strong",{parentName:"p"},"deploy our smart contract"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We need to connect a wallet that has sufficient balance of TSSC to cover the gas fees."),(0,r.kt)("li",{parentName:"ul"},"We need to set an environment variable we will use later.")),(0,r.kt)("p",{parentName:"li"},"In order to make our lives easier, let\u2019s create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile")," as well as ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file at the root of our project.\n",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files are typically used to store environment variables for your application. They are particularly useful for managing settings that change between deployment environments (e.g., development, testing, staging, and production), and for storing sensitive information."),(0,r.kt)("p",{parentName:"li"},"Environment variables can include database connection details, API keys, external resource URIs, or other configuration variables that might change depending on the environment in which the application is running. In our case, we would use it to point to our Core-EVM RPC url by setting"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"RPC_URL=https://domain-3.evm.gemini-3g.subspace.network/ws\n")),(0,r.kt)("p",{parentName:"li"},"And then set a private key for the EVM-compatible wallet"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE_KEY=\u201dyour_private_key_value\u201d\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It's important to note that .env files should not be committed to your source control (like Git), especially when they contain sensitive data, like your private key. To prevent this, add .env to your .gitignore file. This helps to keep sensitive keys secure and avoids the risk of exposing them in the application's code or version control history.")),(0,r.kt)("p",{parentName:"li"},"In the Makefile, let\u2019s create shortcuts to the main features of the application"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# include .env file and export its env vars\n-include .env\n\n# Builds\nbuild:\n    @forge clean && forge build --optimize --optimizer-runs 1000000\n\n# Deployment\ndeploy:\n    @forge create Counter --private-key ${PRIVATE_KEY} --rpc-url ${RPC_URL}\n")),(0,r.kt)("p",{parentName:"li"},"We're importing the values for a ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE_KEY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RPC_URL")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",{parentName:"li"},"This allows us to run ",(0,r.kt)("inlineCode",{parentName:"p"},"make build")," for building the project and ",(0,r.kt)("inlineCode",{parentName:"p"},"make deploy")," for deploying the project pointing to the provided RPC and using the provided private_key."),(0,r.kt)("p",{parentName:"li"},"Let\u2019s run "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"make build\n")),(0,r.kt)("p",{parentName:"li"},"to make sure it\u2019s working properly."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Foundry-3",src:n(6722).Z,width:"1422",height:"350"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In order to deploy your contract using the specified ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"RPC"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PRIVATE_KEY"))," just run"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"make deploy\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Congratulations"),", you've successfully deployed your smart contract on Subspace EVM!"))))}u.isMDXComponent=!0},5123:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Foundry-1-8a5c8b8884057c2e65c262979101e51e.png"},7085:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Foundry-2-0905b0bb14b8f7886ef052b7a0722432.png"},6722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Foundry-3-38f4e98f2679f9e6f8f94bdc7c392e4e.png"}}]);