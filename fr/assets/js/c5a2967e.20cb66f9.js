"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[8293],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),s=n(6550),l=n(1980),p=n(7392),u=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,p]=m({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=l??d;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var k=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(d(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:c},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},3371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162),s=n(614);n(9960),n(1207);const l={title:"Register an Operator",sidebar_position:1,description:"Operators Setup guide",keywords:["Operator","Guide"]},p=void 0,u={unversionedId:"farming-&-staking/staking/operators/register-operator",id:"version-latest/farming-&-staking/staking/operators/register-operator",title:"Register an Operator",description:"Operators Setup guide",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/farming-&-staking/staking/operators/register-operator.mdx",sourceDirName:"farming-&-staking/staking/operators",slug:"/farming-&-staking/staking/operators/register-operator",permalink:"/fr/docs/farming-&-staking/staking/operators/register-operator",draft:!1,editUrl:"https://github.com/subspace/subspace-docs/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/farming-&-staking/staking/operators/register-operator.mdx",tags:[],version:"latest",sidebarPosition:1,frontMatter:{title:"Register an Operator",sidebar_position:1,description:"Operators Setup guide",keywords:["Operator","Guide"]},sidebar:"tutorialSidebar",previous:{title:"Operators Guide",permalink:"/fr/docs/category/operators-guide"},next:{title:"Deregister an Operator",permalink:"/fr/docs/farming-&-staking/staking/operators/deregister-operator"}},d={},c=[{value:"Choosing the right domain",id:"choosing-the-right-domain",level:3},{value:"Create operator key",id:"create-operator-key",level:3},{value:"Start the domain operator node",id:"start-the-domain-operator-node",level:3},{value:"Register an operator on domain",id:"register-an-operator-on-domain",level:3},{value:"Register an operator using Autonomys Staking interface",id:"register-an-operator-using-autonomys-staking-interface",level:4}],h={toc:c},m="wrapper";function g(e){let{components:t,...l}=e;return(0,o.kt)(m,(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, the domain chain does not support syncing from other operator nodes; it needs to be deterministically derived from the consensus chain block by block.")),(0,o.kt)("h3",{id:"choosing-the-right-domain"},"Choosing the right domain"),(0,o.kt)("p",null,"An operator needs to register on a specific domain and create a key pair to participate in bundle production.  Stake Wars is using domains with IDs 0 (Nova) and 1 (AutoID).\nIt is possible to register an operator for each domain, but each operator will require running a node."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Any account with the ",(0,o.kt)("strong",{parentName:"p"},"minimum operator stake")," can become an operator.")),(0,o.kt)("h3",{id:"create-operator-key"},"Create operator key"),(0,o.kt)("p",null,"An operator needs a key pair to participate in bundle production."),(0,o.kt)("p",null,"To create a new operator key, run the following command:\n",(0,o.kt)("inlineCode",{parentName:"p"},"subspace-node domain key create --base-path NODE_DATA_PATH --domain-id DOMAIN")),(0,o.kt)("p",null,"Make sure to specify the base ",(0,o.kt)("strong",{parentName:"p"},"--base-path")," for the key generation, and running an operator node and make sure to replace the value in ",(0,o.kt)("strong",{parentName:"p"},"--domain-id")," with the domain ID you would like to be an operator on."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The operator is responsible for finding out the correct domain ID they want to operate on.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You have successfully generated an operator key, congratulations!")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to record and securely store the printed seed phrase. If it is leaked or stolen, both your operator and nominator stakes could be at risk of being slashed.")),(0,o.kt)("p",null,"The keys were generated in the subfolder of ",(0,o.kt)("strong",{parentName:"p"},"NODE","_","DATA","_","PATH")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"/domains/domainID/keystore"),". If you don't see the generated keypair in the subfolder, something went wrong."),(0,o.kt)("h3",{id:"start-the-domain-operator-node"},"Start the domain operator node"),(0,o.kt)("p",null,"The domain operator node is running with an embedded consensus node, thus you need to specify the args for both the consensus node and the domain operator node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subspace-node [consensus-chain-args] -- [domain-args]\n")),(0,o.kt)("p",null,"Example:\nStart a node as operator on ",(0,o.kt)("inlineCode",{parentName:"p"},"gemini-3h")," chain:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You need to ",(0,o.kt)("strong",{parentName:"p"},"wipe")," and sync your node from genesis block without using snap sync, since you need to sync both consensus and domain chains.\nYou do not need to wipe any existing plots.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Ensure you replace ",(0,o.kt)("inlineCode",{parentName:"p"},"your_domain_id")," with your domain identifier in the command and ",(0,o.kt)("inlineCode",{parentName:"p"},"your_operator_id")," with your operator","_","id.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can ignore setting up ",(0,o.kt)("inlineCode",{parentName:"p"},"your_operator_id")," while you're syncing your node as you won't have an operator id until you have registered your operator. Make sure to set it after syncing and registration.")),(0,o.kt)(r.Z,{groupId:"OS",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows",label:"\ud83d\uddbc\ufe0f Windows",default:!0,mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run `\n      --chain gemini-3h `\n      --name your_node_name `\n      --base-path NODE_DATA_PATH `\n      --blocks-pruning archive `\n      --state-pruning archive `\n      -- `\n      --domain-id your_domain_id `\n      --operator-id your_operator_id `\n      --listen-on /ip4/0.0.0.0/tcp/40333")),(0,o.kt)(i.Z,{value:"macos",label:"\ud83c\udf4e macOS",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run \\\n      --chain gemini-3h \\\n      --name your_node_name \\\n      --base-path NODE_DATA_PATH \\\n      --blocks-pruning archive \\\n      --state-pruning archive \\\n      -- \\\n      --domain-id your_domain_id \\\n      --operator-id your_operator_id \\\n      --listen-on /ip4/0.0.0.0/tcp/40333")),(0,o.kt)(i.Z,{value:"linux",label:"\ud83d\udc27 Ubuntu",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},"target/production/subspace-node run \\\n      --chain gemini-3h \\\n      --name your_node_name \\\n      --base-path NODE_DATA_PATH \\\n      --blocks-pruning archive \\\n      --state-pruning archive \\\n      -- \\\n      --domain-id your_domain_id \\\n      --operator-id your_operator_id \\\n      --listen-on /ip4/0.0.0.0/tcp/40333")),(0,o.kt)(i.Z,{value:"docker",label:"\ud83d\udc0b Docker",mdxType:"TabItem"},(0,o.kt)(s.Z,{mdxType:"CodeBlock"},'services:\n        node:\n          # Replace snapshot-DATE with the latest release (like snapshot-2022-apr-29)\n          # For running on Aarch64 add -aarch64 after DATE\n          image: ghcr.io/subspace/node:snapshot-DATE\n          volumes:\n          # Replace path/to/keystore with your actual path to keystore. \n            - /path/to/keystore:/keystore:ro\n      # Instead of specifying volume (which will store data in /var/lib/docker), you can\n      # alternatively specify path to the directory where files will be stored, just make\n      # sure everyone is allowed to write there\n            - node-data:/var/subspace:rw\n      #      - /path/to/subspace-node:/var/subspace:rw\n          ports:\n      # If port 30333 or 30433 is already occupied by another Substrate-based node, replace all\n      # occurrences of 30333 or 30433 in this file with another value\n            - "0.0.0.0:30333:30333/tcp"\n            - "0.0.0.0:30433:30433/tcp"\n            - "0.0.0.0:40333:40333/tcp"\n          restart: unless-stopped\n          command: [\n            "run",\n            "--chain", "gemini-3h",\n            "--base-path", "/var/subspace",\n            "--listen-on", "0.0.0.0:30333",\n            "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",\n            # Replace INSERT_YOUR_ID with your node ID (will be shown in telemetry)\n            "--name", "INSERT_YOUR_ID",\n            "--blocks-pruning", "archive",\n            "--state-pruning". "archive"\n            "--",\n            # Replace INSERT_YOUR_DOMAIN_ID with domain ID you want to be operator on\n            "--domain-id", "INSERT_YOUR_DOMAIN_ID",\n            # Replace INSERT_YOUR_OPERATOR_ID with your operator ID\n            "--operator-id", "INSERT_YOUR_OPERATOR_ID",\n            "--listen-on", "/ip4/0.0.0.0/tcp/40333"\n          ]\n          healthcheck:\n            timeout: 5s\n      # If node setup takes longer than expected, you want to increase interval and retries number.\n            interval: 30s\n            retries: 60\n      volumes:\n        node-data:\n        '))),(0,o.kt)("p",null,"You should see the node start successfully and begin syncing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking-13",src:n(7469).Z,width:"1304",height:"730"})),(0,o.kt)("h3",{id:"register-an-operator-on-domain"},"Register an operator on domain"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's crucial to fully sync your node before registering as an operator. Please follow the commands in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Start the domain operator"))," node section and only register as an operator once your node is fully synced. If many operators are registered but their nodes are still syncing or offline, it can adversely affect the speed of block production in the domain.")),(0,o.kt)("h4",{id:"register-an-operator-using-autonomys-staking-interface"},"Register an operator using Autonomys Staking interface"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Proceed to the staking tab on ",(0,o.kt)("a",{parentName:"li",href:"https://explorer.subspace.network/gemini-3h/staking"},"Astral")," and connect your wallet.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-1",src:n(3693).Z,width:"1697",height:"1070"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select the wallet you would like to connect. Both ",(0,o.kt)("strong",{parentName:"li"},"Subwallet")," and ",(0,o.kt)("strong",{parentName:"li"},"PolkadotJS")," wallets are supported.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-2",src:n(142).Z,width:"372",height:"220"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Enter your password to give an access to your wallet.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-3",src:n(646).Z,width:"390",height:"633"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select the account you'd like to use form the dropdown menu. You can click the button in the upper left corner to see available and locked (staked) token balances for the selected account.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-4",src:n(9459).Z,width:"280",height:"108"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-5",src:n(9208).Z,width:"546",height:"636"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Proceed to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Register Operator")," tab.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-6",src:n(3625).Z,width:"1641",height:"1107"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"domainId")," you would like to be registered on.  For Stake Wars, Nova is Domain 0 and Auto-ID should be Domain 1 once it is available.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-7",src:n(1314).Z,width:"1641",height:"1107"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"An important security change from Stake Wars one is that you are now required to have a Proof of signing key ownership signature.  This is derived from your seed phrase when creating the operator key.\\\nYou can either select the file that contains your seed in the subfolder of ",(0,o.kt)("strong",{parentName:"li"},"NODE","_","DATA","_","PATH")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"/domains/domainID/keystore")," and then click the choose file and point to that file or you can choose the Proof with seed and manually enter the seed phrase.\nOnce you click the Generate proof button it will automatically populate the ",(0,o.kt)("inlineCode",{parentName:"li"},"Signing key")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Proof of signing key ownership signature")," fields.  Enter the ",(0,o.kt)("inlineCode",{parentName:"li"},"Amount to Stake"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Nominator Tax"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Minimum Nominator Stake")," and then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Next"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to specify a Minimum Nominator Stake of at least 1 tSSC.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-8",src:n(2653).Z,width:"1618",height:"1040"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to either locate the signing key file generated on the previous ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#create-operator-key"},"Create operator key"))," step or use the key phrase that was displayed when the key was created and is also in that key file.")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Approve the request in the pop-up window.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-9",src:n(6252).Z,width:"395",height:"620"})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Congratulations, you're now registered as an ",(0,o.kt)("strong",{parentName:"li"},"operator"),"!  You can click on the Manage My Operator tab to see your operator and get the Operator Id.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NStaking-10",src:n(153).Z,width:"1715",height:"516"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It can take up to 10 minutes for the operator to be registered and appear on the page.  It may take a day before your Stake amount is displayed under Total Stake in the table.  Once you have your Operator Id you can restart your operator node and include the ",(0,o.kt)("inlineCode",{parentName:"p"},"--operator-id **OPERATOR_ID**")," as a parameter.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can view some additional actions by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," next to your operator.\nYou can increase your stake (Nominate), withdraw some stake and de-register your operator from there.")))}g.isMDXComponent=!0},1207:(e,t,n)=>{n.d(t,{Z:()=>a});const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},3693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-1-3ada281f73b3d558999e05d08e652e20.png"},153:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-10-2382fb7080753927285015ae6fc723ec.png"},142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-2-8f4b3ae2d7a7cd160765c5356f7348fc.png"},646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-3-ca3a0b86ffb2f19484b74d059021a3ce.png"},9459:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},9208:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-5-35c625eb8b8bcbcd305917eab4c88c6d.png"},3625:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-6-ce1624bb0366ff4c01403bf4f5a34c37.png"},1314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-7-8a1faa19c9718bea68d8eeeb6ca75012.png"},2653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-8-63dba6e83343581b795ed95bec1d291a.png"},6252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/NStaking-9-21a015fe1afa0b648789ebac66f9553b.png"},7469:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Staking-13-08a79594c56d19dbdd2b8d71764ef5fd.png"}}]);