"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(6010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),o=r(7294),a=r(6010),i=r(2466),l=r(6550),s=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function d(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,c]=h({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,u.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var f=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,a.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},o.createElement(k,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},8120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));r(4866),r(5162),r(9960),r(1207);const a={title:"Common problems",sidebar_position:6,description:"Common problems and ways to resolve them",keywords:["Error","Problem","Issues"]},i=void 0,l={unversionedId:"protocol/common_problems",id:"protocol/common_problems",title:"Common problems",description:"Common problems and ways to resolve them",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/protocol/common_problems.md",sourceDirName:"protocol",slug:"/protocol/common_problems",permalink:"/ja/docs/pre-release/protocol/common_problems",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/blob/main/i18n/ja/docusaurus-plugin-content-docs/current/protocol/common_problems.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Common problems",sidebar_position:6,description:"Common problems and ways to resolve them",keywords:["Error","Problem","Issues"]},sidebar:"tutorialSidebar",previous:{title:"Safety and Security",permalink:"/ja/docs/pre-release/protocol/security"},next:{title:"Community",permalink:"/ja/docs/pre-release/category/community"}},s={},c=[{value:"Error while dialing dns telemetry",id:"error-while-dialing-dns-telemetry",level:3},{value:"Farmer stuck on plotting, no progress is made in several hours",id:"farmer-stuck-on-plotting-no-progress-is-made-in-several-hours",level:3},{value:"Illegal instruction (core dumped)",id:"illegal-instruction-core-dumped",level:3},{value:"No rewards after multiple days of farming",id:"no-rewards-after-multiple-days-of-farming",level:3},{value:"Recovering missing piece failed",id:"recovering-missing-piece-failed",level:3},{value:"Importing block consensus error",id:"importing-block-consensus-error",level:3},{value:"Unable to author block in slot. No best block header",id:"unable-to-author-block-in-slot-no-best-block-header",level:3},{value:"Fast node synchronization (more than 100+ blocks per second) goes only up to \xb120k blocks, then synchronization speed drops significantly.",id:"fast-node-synchronization-more-than-100-blocks-per-second-goes-only-up-to-20k-blocks-then-synchronization-speed-drops-significantly",level:3},{value:"subspace_farmer::single_disk_plot::piece_receiver: Couldn&#39;t get a piece from DSN.",id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn",level:3},{value:"Failed to build a farmer: File exists",id:"failed-to-build-a-farmer-file-exists",level:3},{value:"Block import error: Potential long-range attack: block not in finalized chain.",id:"block-import-error-potential-long-range-attack-block-not-in-finalized-chain",level:3},{value:"Gemini 3e specific problems",id:"gemini-3e-specific-problems",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While Subspace strives to release bug-free software, users may encounter certain errors. Some of these can be safely ignored, while others require attention."),(0,o.kt)("h1",{id:"common-problems-and-ways-to-resolve-them"},"Common problems and ways to resolve them"),(0,o.kt)("h3",{id:"error-while-dialing-dns-telemetry"},"Error while dialing dns telemetry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error while dialing /dns/telemetry.subspace.network/tcp/443/x-parity-wss/%2Fsubmit%2F\nCustom { kind: Other, error: Timeout }\n")),(0,o.kt)("p",null,"This error is related only to the telemetry server. It's something that can happen occasionally, but doesn't affect farming. You can safely ignore it."),(0,o.kt)("h3",{id:"farmer-stuck-on-plotting-no-progress-is-made-in-several-hours"},"Farmer stuck on plotting, no progress is made in several hours"),(0,o.kt)("p",null,"Try restarting your node or farmer. We've noticed that sometimes, when creating larger plots, the process might appear to be stalled, but it automatically continues after some time."),(0,o.kt)("h3",{id:"illegal-instruction-core-dumped"},"Illegal instruction (core dumped)"),(0,o.kt)("p",null,"This error is caused by old CPUs without necessary instruction support (e.g. ADX 4). Can be fixed by compiling software from the source on that machine."),(0,o.kt)("p",null,"While processors without ADX instructions are supported, their performance will be impacted significantly compared to processors that do support ADX instructions."),(0,o.kt)("p",null,"Most modern desktop processors starting with Broadwell on the Intel side and Ryzen (ZEN 1) on the AMD side do support necessary ADX instructions support and shouldn't be affected by the error."),(0,o.kt)("h3",{id:"no-rewards-after-multiple-days-of-farming"},"No rewards after multiple days of farming"),(0,o.kt)("p",null,"Please make sure to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use our latest stable release, as shown on our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace-cli/releases"},"Github releases")),(0,o.kt)("li",{parentName:"ul"},"Verify your farmer is present and on the highest block on our ",(0,o.kt)("a",{parentName:"li",href:"https://telemetry.subspace.network/"},"telemetry server")),(0,o.kt)("li",{parentName:"ul"},"Verify your balance using the ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3e.subspace.network%2Fws#/explorer"},"Polkadot explorer"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to select the correct testnet in the dropdown and tabs, e.g. gemini-3e")),(0,o.kt)("h3",{id:"recovering-missing-piece-failed"},"Recovering missing piece failed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ERROR single_disk_plot{disk_farm_index=0}:\nsubspace_farmer_components::segment_reconstruction: Recovering missing piece failed. missing_piece_index=135\n")),(0,o.kt)("p",null,"This is not a crucial error and it can be ignored."),(0,o.kt)("h3",{id:"importing-block-consensus-error"},"Importing block consensus error"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Error importing block "block_number", consensus error: Import failed: Database\n')),(0,o.kt)("p",null,"Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space"),(0,o.kt)("h3",{id:"unable-to-author-block-in-slot-no-best-block-header"},"Unable to author block in slot. No best block header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Unable to author block in slot. No best block header: Chain lookup failed: Failed to get header for hash\n")),(0,o.kt)("p",null,"Your PC likely ran out of space. Consider freeing up some space by removing unnecessary files, and then try again. Alternatively, you may adjust the plot amount to match the available disk space"),(0,o.kt)("h3",{id:"fast-node-synchronization-more-than-100-blocks-per-second-goes-only-up-to-20k-blocks-then-synchronization-speed-drops-significantly"},"Fast node synchronization (more than 100+ blocks per second) goes only up to \xb120k blocks, then synchronization speed drops significantly."),(0,o.kt)("p",null,"As the database size increases and blocks get bigger (as farmers started to produce votes), it is expected that the sync speed will settle on a smaller number. We have made some performance improvements in Gemini 3e and will do more performance tuning when the protocol is functionally complete."),(0,o.kt)("h3",{id:"subspace_farmersingle_disk_plotpiece_receiver-couldnt-get-a-piece-from-dsn"},"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"subspace_farmer::single_disk_plot::piece_receiver: Couldn't get a piece from DSN. Retrying... piece_index=57\n")),(0,o.kt)("p",null,"This isn\u2019t a bug but rather a warning, it is something to be expected on a Decentralized Storage Network. There is nothing you need to do as a user with this warning, it's likely it will come up occasionally but as long as there aren\u2019t other more catastrophic errors it can be ignored."),(0,o.kt)("h3",{id:"failed-to-build-a-farmer-file-exists"},"Failed to build a farmer: File exists"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0: Failed to build a farmer\n1: Single disk plot creation error: I/O error: File exists (os error 17)\n2: I/O error: File exists (os error 17)\n3: File exists (os error 17)\n")),(0,o.kt)("p",null,"The system is detecting a pre-existing installation. If this is the case, you might consider ",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/pre-release/protocol/cli#wipe-node--farmer"},"wiping")," the current setup and ",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/pre-release/protocol/cli#configuration"},"re-initializing")," the CLI to ensure a clean installation."),(0,o.kt)("h3",{id:"block-import-error-potential-long-range-attack-block-not-in-finalized-chain"},"Block import error: Potential long-range attack: block not in finalized chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARN sc_service::client::client: Block import error: Potential long-range attack: block not in finalized chain.\n")),(0,o.kt)("p",null,"The node somehow ended up being on a fork, try wiping and starting from scratch."),(0,o.kt)("h2",{id:"gemini-3e-specific-problems"},"Gemini 3e specific problems"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Some large plots might not work correctly."),"We're looking more into enabling parallelism for larger plots and further protocol changes will certainly help with this. Stay tuned! "),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sector plotting attempt failed, will retry later sector_offset=0 sector_index=.... error=Failed to retrieve piece 192: Not enough pieces to reconstruct a segment"),"The issue is related to a cache size restriction being hit rather than a particular point in time being reached. If that's the case, the team will enlarge cache size to get it resolved. "))}d.isMDXComponent=!0},1207:(e,t,r)=>{r.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);