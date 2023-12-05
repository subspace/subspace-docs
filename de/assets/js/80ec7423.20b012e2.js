"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[7421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=s(a),c=i,g=k["".concat(p,".").concat(c)]||k[c]||d[c]||o;return a?n.createElement(g,r(r({ref:t},m),{},{components:a})):n.createElement(g,r({ref:t},m))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[k]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const o={title:"Staking guide",sidebar_position:2,description:"Staking guide",keywords:["Staking guide","Staking"]},r=void 0,l={unversionedId:"farming-&-staking/staking/staking",id:"version-latest/farming-&-staking/staking/staking",title:"Staking guide",description:"Staking guide",source:"@site/versioned_docs/version-latest/farming-&-staking/staking/staking.md",sourceDirName:"farming-&-staking/staking",slug:"/farming-&-staking/staking/",permalink:"/de/docs/farming-&-staking/staking/",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/docs/farming-&-staking/staking/staking.md",tags:[],version:"latest",lastUpdatedBy:"Emil Fattakhov",lastUpdatedAt:1701814479,formattedLastUpdatedAt:"5. Dez. 2023",sidebarPosition:2,frontMatter:{title:"Staking guide",sidebar_position:2,description:"Staking guide",keywords:["Staking guide","Staking"]},sidebar:"tutorialSidebar",previous:{title:"Operators guide",permalink:"/de/docs/farming-&-staking/staking/operators"},next:{title:"Timekeeping",permalink:"/de/docs/farming-&-staking/timekeeping"}},p={},s=[{value:"Select an operator to nominate",id:"select-an-operator-to-nominate",level:3},{value:"Operator Nomination using Polkadot.js",id:"operator-nomination-using-polkadotjs",level:3},{value:"Check if your <strong>nomination</strong> worked succesfully.",id:"check-if-your-nomination-worked-succesfully",level:3},{value:"Stake withdrawal using Polkadot.js",id:"stake-withdrawal-using-polkadotjs",level:3},{value:"Calculating your nominator balance",id:"calculating-your-nominator-balance",level:3}],m={toc:s},k="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(k,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"select-an-operator-to-nominate"},"Select an operator to nominate"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Three important factors to pay attention to are ",(0,i.kt)("inlineCode",{parentName:"p"},"minimumNominatorStake"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nominationTax"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit PolkadotJS ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Developer")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain state"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Staking-16",src:a(6109).Z,width:"1744",height:"402"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"domains")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"selected state query")," and choose ",(0,i.kt)("inlineCode",{parentName:"p"},"operators"),", exclude ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," to run the query.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Browse the list of available operators, make sure the status is ",(0,i.kt)("inlineCode",{parentName:"p"},"Registered")," and that ",(0,i.kt)("inlineCode",{parentName:"p"},"minimumNominatorStake")," is lower than your staking amount. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Staking-17",src:a(7887).Z,width:"1739",height:"793"})))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Number 17 on the screenshot above corresponds to ",(0,i.kt)("inlineCode",{parentName:"p"},"operatorId"),".")),(0,i.kt)("h3",{id:"operator-nomination-using-polkadotjs"},"Operator Nomination using ",(0,i.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/"},"Polkadot.js")),(0,i.kt)("p",null,"Any account can nominate any existing ",(0,i.kt)("strong",{parentName:"p"},"operator")," with at least a minimum nominator stake set by the ",(0,i.kt)("strong",{parentName:"p"},"operator"),". "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The only staking mechanism available to non-operators is nominating an operator.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure to select the correct network at the top-left corner. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the account you want to use in ",(0,i.kt)("inlineCode",{parentName:"p"},"using the selected account"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"domains")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"submit the following extrinsic")," and choose ",(0,i.kt)("inlineCode",{parentName:"p"},"nominateOperator(operatorId, amount)")," in the dropdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set an ",(0,i.kt)("inlineCode",{parentName:"p"},"operatorId")," - in the example, it's set to ",(0,i.kt)("strong",{parentName:"p"},"1"),". "),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the example below, 1 TSSC is selected for staking. 18 zeros are added because of the ",(0,i.kt)("inlineCode",{parentName:"p"},"u128")," type, so make sure to put 1000000000000000000 instead. "))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the desired amount in the ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," field for staking.\n",(0,i.kt)("img",{alt:"Staking-18",src:a(9955).Z,width:"1722",height:"465"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit the signed transaction. "))),(0,i.kt)("p",null,"Once ",(0,i.kt)("strong",{parentName:"p"},"nomination")," is finalized when the ",(0,i.kt)("strong",{parentName:"p"},"domain epoch")," is complete, the ",(0,i.kt)("strong",{parentName:"p"},"nominator")," will start receiving rewards."),(0,i.kt)("p",null,"Any ",(0,i.kt)("strong",{parentName:"p"},"nominator")," can add more stake by using the same functionality."),(0,i.kt)("h3",{id:"check-if-your-nomination-worked-succesfully"},"Check if your ",(0,i.kt)("strong",{parentName:"h3"},"nomination")," worked succesfully."),(0,i.kt)("p",null,"There are two ways to check your ",(0,i.kt)("strong",{parentName:"p"},"nomination"),": "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can use PolkadotJS ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Staking-7",src:a(8564).Z,width:"1761",height:"633"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Browse the ",(0,i.kt)("strong",{parentName:"p"},"recent events")," and you should see ",(0,i.kt)("strong",{parentName:"p"},"domains.OperatorNominated")," event."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Staking-19",src:a(2702).Z,width:"848",height:"170"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the dropdown arrow to view the ",(0,i.kt)("strong",{parentName:"p"},"domainId")," and ",(0,i.kt)("strong",{parentName:"p"},"operatorId"),"."))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Alternatively, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://subspace.subscan.io/"},"Subscan")," which is a little easier to navigate for this job. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://subspace.subscan.io/"},"Subspace Subscan"))," portal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Blockchain")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Extrinsics"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Staking-9",src:a(8874).Z,width:"1203",height:"341"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll to the bottom of the page to view all recent events, search for ",(0,i.kt)("inlineCode",{parentName:"p"},"nominate_operator")," event."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Staking-20",src:a(4698).Z,width:"1210",height:"301"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Extrinsic ID")," for the desired event.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll to ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters")," to view the stake value."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Staking-21",src:a(3831).Z,width:"1194",height:"582"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll to ",(0,i.kt)("inlineCode",{parentName:"p"},"Events")," and click on dropdown arrow for ",(0,i.kt)("inlineCode",{parentName:"p"},"domains(OperatorNominated)"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Staking-22",src:a(2590).Z,width:"1210",height:"576"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inspect and ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"nominatorId")," matches your ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". "))),(0,i.kt)("h3",{id:"stake-withdrawal-using-polkadotjs"},"Stake withdrawal using ",(0,i.kt)("a",{parentName:"h3",href:"https://polkadot.js.org/"},"Polkadot.js")),(0,i.kt)("p",null,"Any ",(0,i.kt)("strong",{parentName:"p"},"operator")," or ",(0,i.kt)("strong",{parentName:"p"},"nominator")," can initiate withdrawal. They can withdraw the total staked amount or a portion of their stake."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If an operator is initiating a withdrawal, then their remaining balance should be at least the minimum operator stake, otherwise the request is rejected."),(0,i.kt)("li",{parentName:"ul"},"If a nominator is initiating a withdrawal, and the remaining balance is less than the operator-defined minimum nominator stake, then the total nominator stake is unlocked otherwise, only the requested amount is unlocked.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the account you want to use in ",(0,i.kt)("inlineCode",{parentName:"li"},"using the selected account"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"submit the following extrinsic")," and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"withdrawStake(operatorId, withdraw)")," in the dropdown."),(0,i.kt)("li",{parentName:"ol"},"Choose an operator by selecting an ",(0,i.kt)("inlineCode",{parentName:"li"},"operatorId")," - in the example, it's set to ",(0,i.kt)("inlineCode",{parentName:"li"},"17"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose the withdrawal amount in the ",(0,i.kt)("inlineCode",{parentName:"li"},"withdraw")," field - you can specify to withdraw ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"some")," staking amount. ")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Example of withdrawal of 1 TSSC stake amount from nominating an operator ",(0,i.kt)("inlineCode",{parentName:"p"},"17"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking-23",src:a(5899).Z,width:"1732",height:"522"})),(0,i.kt)("p",null,"Once the withdrawal is submitted, it's finalized after the ",(0,i.kt)("strong",{parentName:"p"},"domain epoch")," is completed. All the withdrawn funds are unlocked after the ",(0,i.kt)("strong",{parentName:"p"},"unlocking period")," is complete."),(0,i.kt)("h3",{id:"calculating-your-nominator-balance"},"Calculating your nominator balance"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Proceed to PolkadotJS ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://polkadot.js.org/apps/#/explorer"},"Network Explorer")),"."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Developer")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Chain state"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"domains")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"selected state query")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nominators(u64, AccoundId32)"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"operatorId")," and select your ",(0,i.kt)("inlineCode",{parentName:"li"},"account")," from the dropdown. "),(0,i.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,i.kt)("inlineCode",{parentName:"li"},"shares")," number.\n",(0,i.kt)("img",{alt:"Staking-25",src:a(5906).Z,width:"1742",height:"657"})),(0,i.kt)("li",{parentName:"ol"},"On the same screen, choose ",(0,i.kt)("inlineCode",{parentName:"li"},"domainStakingSummary(u32)"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"domainId"),". "),(0,i.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,i.kt)("inlineCode",{parentName:"li"},"currentTotalStake")," number.\n",(0,i.kt)("img",{alt:"Staking-26",src:a(7042).Z,width:"1748",height:"749"})),(0,i.kt)("li",{parentName:"ol"},"Without leaving the page, select ",(0,i.kt)("inlineCode",{parentName:"li"},"operators(u64)"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide ",(0,i.kt)("inlineCode",{parentName:"li"},"operatorId")," that you nominated previously. "),(0,i.kt)("li",{parentName:"ol"},"Run the query, remember the ",(0,i.kt)("inlineCode",{parentName:"li"},"currentTotalStake")," number.\n",(0,i.kt)("img",{alt:"Staking-27",src:a(3293).Z,width:"1737",height:"626"}))),(0,i.kt)("p",null,"To calculate your nominator ",(0,i.kt)("strong",{parentName:"p"},"balance"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Calculate ",(0,i.kt)("strong",{parentName:"li"},"share price")," by dividing ",(0,i.kt)("strong",{parentName:"li"},"currentTotalStake")," from the domain by operator ",(0,i.kt)("strong",{parentName:"li"},"currentTotalStake"),"."),(0,i.kt)("li",{parentName:"ol"},"Multiply ",(0,i.kt)("strong",{parentName:"li"},"share price")," and your nominator ",(0,i.kt)("strong",{parentName:"li"},"shares")," number.")))}d.isMDXComponent=!0},6109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-16-1fa8bad44ea64dadc08d61140e080d45.png"},7887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-17-0654352a60a5de808384098474e08616.png"},9955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-18-a394a1621593fb20addbf5fbd40db911.png"},2702:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-19-738613ee2b6eac639c336b99b94f14e6.png"},4698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-20-66862bfcc6f47d0b97af115e1baf79e2.png"},3831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-21-c0d819be47dce329978716b16630fa58.png"},2590:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-22-840fd5f7ffa1575338b45f61668f7a30.png"},5899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-23-d15092897afe519275dcfa8b7090a129.png"},5906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-25-b40bb732d0d9509abd25e4f723344ea9.png"},7042:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-26-672b6e7f25be7e4fbb52b9b082ff4a1b.png"},3293:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-27-9258eede57d97cc2cbd16637d0eac079.png"},8564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-7-255ba039078a485a7cb7e6a848fe5e9e.png"},8874:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Staking-9-67edafdb834fc435f6ce1f63b06d973b.png"}}]);