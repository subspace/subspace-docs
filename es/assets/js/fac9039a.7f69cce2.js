"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[4135],{3905:(e,A,t)=>{t.d(A,{Zo:()=>c,kt:()=>m});var a=t(7294);function n(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function r(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);A&&(a=a.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?r(Object(t),!0).forEach((function(A){n(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function s(e,A){if(null==e)return{};var t,a,n=function(e,A){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),o=function(e){var A=a.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):i(i({},A),e)),t},c=function(e){var A=o(e.components);return a.createElement(l.Provider,{value:A},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var A=e.children;return a.createElement(a.Fragment,{},A)}},u=a.forwardRef((function(e,A){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(t),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return t?a.createElement(m,i(i({ref:A},c),{},{components:t})):a.createElement(m,i({ref:A},c))}));function m(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in A)hasOwnProperty.call(A,l)&&(s[l]=A[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5162:(e,A,t)=>{t.d(A,{Z:()=>i});var a=t(7294),n=t(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:A,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:t},A)}},4866:(e,A,t)=>{t.d(A,{Z:()=>C});var a=t(7462),n=t(7294),r=t(6010),i=t(2466),s=t(6550),l=t(1980),o=t(7392),c=t(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:A}=e;return!!A&&"object"==typeof A&&"value"in A}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:A,label:t,attributes:a,default:n}}=e;return{value:A,label:t,attributes:a,default:n}}))}function d(e){const{values:A,children:t}=e;return(0,n.useMemo)((()=>{const e=A??p(t);return function(e){const A=(0,o.l)(e,((e,A)=>e.value===A.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[A,t])}function u(e){let{value:A,tabValues:t}=e;return t.some((e=>e.value===A))}function m(e){let{queryString:A=!1,groupId:t}=e;const a=(0,s.k6)(),r=function(e){let{queryString:A=!1,groupId:t}=e;if("string"==typeof A)return A;if(!1===A)return null;if(!0===A&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:A,groupId:t});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const A=new URLSearchParams(a.location.search);A.set(r,e),a.replace({...a.location,search:A.toString()})}),[r,a])]}function g(e){const{defaultValue:A,queryString:t=!1,groupId:a}=e,r=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:A,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(A){if(!u({value:A,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return A}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:A,tabValues:r}))),[l,o]=m({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:A}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(A),[a,r]=(0,c.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=l??p;return u({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),g(e)}),[o,g,r]),tabValues:r}}var f=t(2389);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function E(e){let{className:A,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const A=e.currentTarget,t=c.indexOf(A),a=o[t].value;a!==s&&(p(A),l(a))},u=e=>{let A=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;A=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;A=c[t]??c[c.length-1];break}}A?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},A)},o.map((e=>{let{value:A,label:t,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===A?0:-1,"aria-selected":s===A,key:A,ref:e=>c.push(e),onKeyDown:u,onClick:d},i,{className:(0,r.Z)("tabs__item",I.tabItem,i?.className,{"tabs__item--active":s===A})}),t??A)})))}function h(e){let{lazy:A,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(A){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,A)=>(0,n.cloneElement)(e,{key:A,hidden:e.props.value!==a}))))}function k(e){const A=g(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",I.tabList)},n.createElement(E,(0,a.Z)({},e,A)),n.createElement(h,(0,a.Z)({},e,A)))}function C(e){const A=(0,f.Z)();return n.createElement(k,(0,a.Z)({key:String(A)},e))}},3932:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>C,contentTitle:()=>h,default:()=>v,frontMatter:()=>E,metadata:()=>k,toc:()=>b});var a=t(7462),n=(t(7294),t(3905)),r=t(9960),i=t(1207);var s=t(4866),l=t(5162);const o={toc:[{value:"Step 1: Download the Space Acres Installer",id:"step-1-download-the-space-acres-installer",level:2},{value:"Step 2: Install Space Acres",id:"step-2-install-space-acres",level:2}]},c="wrapper";function p(e){let{components:A,...s}=e;return(0,n.kt)(c,(0,a.Z)({},o,s,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"step-1-download-the-space-acres-installer"},"Step 1: Download the Space Acres Installer"),(0,n.kt)("div",{className:`${i.Z.buttons} ${i.Z.flexContainer}`},(0,n.kt)(r.Z,{className:"button button--secondary",to:"https://github.com/autonomys/space-acres/releases/download/0.1.33/space-acres-0.1.33-x86_64.msi",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,n.kt)("span",{style:{fontSize:"20px"}},"Windows Installer"),(0,n.kt)("span",{style:{fontSize:"14px"}},"(.MSI)"))),(0,n.kt)("h2",{id:"step-2-install-space-acres"},"Step 2: Install Space Acres"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the downloaded Space Acres installer to launch the Setup Wizard. This wizard will guide you through the installation process."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-install-1",src:t(8331).Z,width:"496",height:"387"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose your installation preferences, such as the destination folder and whether to create shortcuts. You can also select to have Space Acres launch at startup."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-install-2",src:t(9219).Z,width:"492",height:"384"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review your settings and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Install")," to commence the installation. The wizard will then install Space Acres on your system."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-install-3",src:t(9680).Z,width:"492",height:"384"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The installation progress will be displayed, showing the status of new files being copied."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-install-4",src:t(4413).Z,width:"493",height:"383"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the installation is complete, you will see a completion screen where you can choose to run Space Acres immediately by checking the box before clicking Finish."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-install-5",src:t(8360).Z,width:"493",height:"384"})))))}p.isMDXComponent=!0;const d={toc:[{value:"Step 1: Download the Space Acres Installer",id:"step-1-download-the-space-acres-installer",level:2},{value:"Step 2: Install Space Acres",id:"step-2-install-space-acres",level:2}]},u="wrapper";function m(e){let{components:A,...s}=e;return(0,n.kt)(u,(0,a.Z)({},d,s,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"step-1-download-the-space-acres-installer"},"Step 1: Download the Space Acres Installer"),(0,n.kt)("div",{className:`${i.Z.buttons} ${i.Z.flexContainer}`},(0,n.kt)(r.Z,{className:"button button--secondary",to:"https://github.com/autonomys/space-acres/releases/download/0.1.33/space-acres-0.1.33.dmg",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,n.kt)("span",{style:{fontSize:"20px"}},"macOS Installer"),(0,n.kt)("span",{style:{fontSize:"14px"}},"(.dmg)"))),(0,n.kt)("h2",{id:"step-2-install-space-acres"},"Step 2: Install Space Acres"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the downloaded Space Acres installer. Drag Space Acres into your Applications folder."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:t(5953).Z,width:"964",height:"642"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Double-click the Space Acres application to open!"))))}m.isMDXComponent=!0;const g={toc:[{value:"Step 1: Download the Space Acres Installer",id:"step-1-download-the-space-acres-installer",level:2},{value:"Step 2: Install Space Acres",id:"step-2-install-space-acres",level:2}]},f="wrapper";function I(e){let{components:A,...s}=e;return(0,n.kt)(f,(0,a.Z)({},g,s,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"step-1-download-the-space-acres-installer"},"Step 1: Download the Space Acres Installer"),(0,n.kt)("div",{className:`${i.Z.buttons} ${i.Z.flexContainer}`},(0,n.kt)(r.Z,{className:"button button--secondary",to:"https://github.com/autonomys/space-acres/releases/download/0.1.33/space-acres_0.1.33-1_amd64.deb",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,n.kt)("span",{style:{fontSize:"20px"}},"Linux Installer"),(0,n.kt)("span",{style:{fontSize:"14px"}},"(.DEB)")),(0,n.kt)(r.Z,{className:"button button--secondary",to:"https://github.com/autonomys/space-acres/releases/download/0.1.33/space-acres-0.1.33-x86_64.AppImage",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"10px"},mdxType:"Link"},(0,n.kt)("span",{style:{fontSize:"20px"}},"Linux Portable App"),(0,n.kt)("span",{style:{fontSize:"14px"}},"(AppImage)"))),(0,n.kt)("h2",{id:"step-2-install-space-acres"},"Step 2: Install Space Acres"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the downloaded Space Acres App Image."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:t(164).Z,width:"484",height:"628"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Mark the AppImage as "Executable as Program".'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:t(6865).Z,width:"824",height:"517"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the AppImage and happy farming!"))))}I.isMDXComponent=!0;const E={title:"Install",sidebar_position:2,description:"How to run an Autonomys Network Farmer with Space Acres GUI Application",keywords:["Farmer","Farming","GUI","Executable"]},h=void 0,k={unversionedId:"farming-&-staking/farming/space-acres/space-acres-install",id:"version-latest/farming-&-staking/farming/space-acres/space-acres-install",title:"Install",description:"How to run an Autonomys Network Farmer with Space Acres GUI Application",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/space-acres/space-acres-install.mdx",sourceDirName:"farming-&-staking/farming/space-acres",slug:"/farming-&-staking/farming/space-acres/space-acres-install",permalink:"/es/docs/farming-&-staking/farming/space-acres/space-acres-install",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/space-acres/space-acres-install.mdx",tags:[],version:"latest",sidebarPosition:2,frontMatter:{title:"Install",sidebar_position:2,description:"How to run an Autonomys Network Farmer with Space Acres GUI Application",keywords:["Farmer","Farming","GUI","Executable"]},sidebar:"tutorialSidebar",previous:{title:"Space Acres (Recommended)",permalink:"/es/docs/category/space-acres-recommended"},next:{title:"Advanced CLI",permalink:"/es/docs/category/advanced-cli"}},C={},b=[{value:"Dependencies",id:"dependencies",level:2},{value:"Step 3: Initalize Space Acres",id:"step-3-initalize-space-acres",level:3},{value:"Soluci\xf3n de problemas",id:"soluci\xf3n-de-problemas",level:2}],y={toc:b},Q="wrapper";function v(e){let{components:A,...r}=e;return(0,n.kt)(Q,(0,a.Z)({},y,r,{components:A,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"dependencies"},"Dependencies"),(0,n.kt)("admonition",{title:"C++ Redistributable",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"On Windows: download the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170"},"Microsoft Visual C++ Redistributable"),".",(0,n.kt)("br",null),"\nOn Linux: follow ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cpp/linux/download-install-and-setup-the-linux-development-workload?view=msvc-170#linux-setup-ubuntu-on-wsl"},"these instructions"),".")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please note that a wallet with a Substrate address is required to run the software.",(0,n.kt)("br",null),"\nTo learn how to create a Substrate wallet, please visit our pages on ",(0,n.kt)("a",{parentName:"p",href:"versioned_docs/version-latest/farming-&-staking/wallets/subwallet.md"},"SubWallet (recommended)")," or ",(0,n.kt)("a",{parentName:"p",href:"versioned_docs/version-latest/farming-&-staking/wallets/polkadot.md"},"Polkadot.js"),".")),(0,n.kt)(s.Z,{groupId:"Space_Acres_Installation",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,n.kt)(I,{mdxType:"LinuxPage"})),(0,n.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,n.kt)(p,{mdxType:"WindowsPage"})),(0,n.kt)(l.Z,{value:"macos",label:"\ud83c\udf4emacOS",mdxType:"TabItem"},(0,n.kt)(m,{mdxType:"MacOSPage"}))),(0,n.kt)("h3",{id:"step-3-initalize-space-acres"},"Step 3: Initalize Space Acres"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The welcome screen provides an overview of the necessary prerequisites for running Space Acres effectively. Make sure you meet all listed requirements before proceeding. For a comprehensive list of prerequisites and explanations, refer to our ",(0,n.kt)("a",{parentName:"p",href:"versioned_docs/version-latest/farming-&-staking/farming/prerequisites.mdx"},"prerequisites guide"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-setup-1",src:t(1044).Z,width:"802",height:"594"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your node and farmer settings by providing the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Node path"),(0,n.kt)("li",{parentName:"ul"},"Rewards address"),(0,n.kt)("li",{parentName:"ul"},"Farm path"),(0,n.kt)("li",{parentName:"ul"},"Farm size"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"(Optional) Add additional farms by selecting ",(0,n.kt)("inlineCode",{parentName:"em"},"Add farm")))),(0,n.kt)("p",{parentName:"li"},"Click Start after the configuration is complete."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-setup-2",src:t(5449).Z,width:"802",height:"594"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) If you want to configure advanced settings, toggle the ",(0,n.kt)("inlineCode",{parentName:"p"},"Advanced configuration")," section. This will allow you to set the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Substrate Node P2P Port"),(0,n.kt)("li",{parentName:"ul"},"Autonomys DSN P2P Port"),(0,n.kt)("li",{parentName:"ul"},"Enable Faster Networking")),(0,n.kt)("p",{parentName:"li"},"For more information on networking and its implications, refer to our ",(0,n.kt)("a",{parentName:"p",href:"versioned_docs/version-latest/farming-&-staking/farming/additional-guides/network-info.md"},"networking guide"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-setup-3",src:t(4635).Z,width:"802",height:"594"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The application will then proceed to load, creating the consensus node and connecting to the network."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-setup-4",src:t(5630).Z,width:"802",height:"594"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Finally, you will see the main interface of Space Acres, where your consensus node is running and your farmer is progressing along. Initial syncing & plotting may take some time to complete. Below are examples of the various stages you can expect."),(0,n.kt)("p",{parentName:"li"},"a. Cache Syncing"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-setup-5",src:t(5664).Z,width:"802",height:"594"})),(0,n.kt)("p",{parentName:"li"},"b. Initial Plotting"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-setup-6",src:t(809).Z,width:"800",height:"600"})),(0,n.kt)("p",{parentName:"li"},"c. Plotting Complete, now farming."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"space-acres-setup-6",src:t(192).Z,width:"800",height:"600"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"With Space Acres configured, your farming operation will commence seamlessly. Keep an eye on the application to track the progress of your farm and the accumulation of rewards. For your convenience, we've provided a table detailing the color codes associated with different sector statuses. This will enhance your insight into the activities and conditions of your plot."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Color Preview"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Default"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/727272/000000?text=+",alt:"#727272"})," #727272"),(0,n.kt)("td",{parentName:"tr",align:null},"Default state of a farm sector")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Plotted"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/9fc4ff/000000?text=+",alt:"#9fc4ff"})," #9fc4ff"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector is plotted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"About to Expire"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/ffd678/000000?text=+",alt:"#ffd678"})," #ffd678"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector is nearing expiration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Expired"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/ff877c/000000?text=+",alt:"#ff877c"})," #ff877c"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector has expired")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Downloading"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/499249/000000?text=+",alt:"#499249"})," #499249"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector is in the process of downloading (animated)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Encoding"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/ff5365/000000?text=+",alt:"#ff5365"})," #ff5365"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector is encoding data (animated)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Writing"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://via.placeholder.com/15/9fc4ff/000000?text=+",alt:"#9fc4ff"})," #9fc4ff"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector is writing data (animated)")))))),(0,n.kt)("admonition",{title:"Learn More About Syncing, Plotting & Farming",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you would like to learn more about how the syncing, plotting and farming processes works on the Autonomys Network, please refer to our Autonomys Academy links below."),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://academy.autonomys.xyz/subspace-protocol/network-architecture/networking-protocols#synchronization"},"Synchronization")," ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://academy.autonomys.xyz/subspace-protocol/consensus/proof-of-archival-storage/plotting"},"Plotting")," ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://academy.autonomys.xyz/subspace-protocol/consensus/proof-of-archival-storage/farming"},"Farming")," ",(0,n.kt)("br",null)))),(0,n.kt)("h2",{id:"soluci\xf3n-de-problemas"},"Soluci\xf3n de problemas"),(0,n.kt)("p",null,"If you are facing any issues with the application, you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Search the ",(0,n.kt)("a",{parentName:"li",href:"https://forum.autonomys.xyz/c/support/5"},"Support Forum")," to see if your issue may have been solved. If it's a new one, feel free to create a new post!"),(0,n.kt)("li",{parentName:"ul"},"Use dedicated channels ",(0,n.kt)("a",{parentName:"li",href:"https://discord.com/channels/864285291518361610/1062498655787028500"},"#farmer-support")," and ",(0,n.kt)("a",{parentName:"li",href:"https://discord.com/channels/864285291518361610/1062507270539321485"},"#farmer-chat")," on our ",(0,n.kt)("a",{parentName:"li",href:"https://autonomys.xyz/discord"},"Discord")," for peer-to-peer support."),(0,n.kt)("li",{parentName:"ul"},"Raise an issue on our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/autonomys/space-acres/issues"},"GitHub"),".")))}v.isMDXComponent=!0},1207:(e,A,t)=>{t.d(A,{Z:()=>a});const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},164:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/linux-space-acres-setup-1-119c279490da81d950ee59603956e66f.png"},6865:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/linux-space-acres-setup-2-5ff044b420192449ec3ead6499cd3368.png"},5953:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/mac-space-acres-setup-1-8e5b35ecb58be27e17347d0bec030ed5.png"},8331:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-install-1-a2d0c144953adb2e5c3731817d8fa7bc.png"},9219:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-install-2-c5ebf2149d00fb70f3199ef0eb7497cc.png"},9680:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-install-3-db1d0784062f29c76696ae0a2f12d175.png"},4413:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-install-4-ae8b2951998c8a2bda3971f9c507395b.png"},8360:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-install-5-1a3a17b894024fdeca6075c0d1f0ac3f.png"},1044:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-setup-1-d226ed68acb92358b0967ff811ab1caa.png"},5449:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-setup-2-d9bd7455c4797370a24b7a61940dca51.png"},4635:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-setup-3-238a0622106ece99b586707e4452ccd2.png"},5630:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,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AADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBOiAAAAOmECAAAkE6IAAAA6YQIAACQTogAAADphAgAAJBO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QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIB0QgQAAEgnRAAAgHRCBAAASCdEAACAdEIEAABIJ0QAAIBkpfx/VBvOfepci+oAAAAASUVORK5CYII="},5664:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-setup-5-fba8780eeb29eba215d708549f9f7b24.png"},809:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-setup-6-40b2b10000f25647cd2ebebf5cf0f8a3.png"},192:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/space-acres-setup-7-3490cba2e75635efdea0006d06da9936.png"}}]);