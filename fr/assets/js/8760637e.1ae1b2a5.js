"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[3271],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,c=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(c,i(i({ref:a},d),{},{components:t})):n.createElement(c,i({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2549:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={title:"Grafana Dashboard",sidebar_position:3,description:"How to configure the Grafana dashboard for an Autonomys Network node",keywords:["node","farmer","monitoring","grafana","prometheus"]},i="Grafana Dashboard",s={unversionedId:"farming-&-staking/farming/additional-guides/grafana-dashboard",id:"version-latest/farming-&-staking/farming/additional-guides/grafana-dashboard",title:"Grafana Dashboard",description:"How to configure the Grafana dashboard for an Autonomys Network node",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/farming-&-staking/farming/additional-guides/grafana-dashboard.md",sourceDirName:"farming-&-staking/farming/additional-guides",slug:"/farming-&-staking/farming/additional-guides/grafana-dashboard",permalink:"/fr/docs/farming-&-staking/farming/additional-guides/grafana-dashboard",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/farming-&-staking/farming/additional-guides/grafana-dashboard.md",tags:[],version:"latest",sidebarPosition:3,frontMatter:{title:"Grafana Dashboard",sidebar_position:3,description:"How to configure the Grafana dashboard for an Autonomys Network node",keywords:["node","farmer","monitoring","grafana","prometheus"]},sidebar:"tutorialSidebar",previous:{title:"Ports & Network Information",permalink:"/fr/docs/farming-&-staking/farming/additional-guides/networking"},next:{title:"Common problems",permalink:"/fr/docs/farming-&-staking/farming/common_problems"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enable metrics",id:"enable-metrics",level:2},{value:"Configure Prometheus targets",id:"configure-prometheus-targets",level:2},{value:"Configure Grafana",id:"configure-grafana",level:2},{value:"Import Grafana dashboard",id:"import-grafana-dashboard",level:2}],d={toc:p},u="wrapper";function f(e){let{components:a,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grafana-dashboard"},"Grafana Dashboard"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"First install ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," and ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," on your machine."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can also use ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/products/cloud/"},"Grafana Cloud")," instead of installing it locally.")),(0,r.kt)("h2",{id:"enable-metrics"},"Enable metrics"),(0,r.kt)("p",null,"To enable metrics, you'll have to modify the CLI arguments of your node and farmer by adding the Prometheus option:"),(0,r.kt)("p",null,"for a node:\n",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-listen-on 127.0.0.1:9080")),(0,r.kt)("p",null,"for a farmer:\n",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-listen-on 127.0.0.1:9081")),(0,r.kt)("p",null,"To apply the changes, it's necessary to restart your node and farmer. You should then have the capability to reach the metrics at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9080")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9081"),"."),(0,r.kt)("h2",{id:"configure-prometheus-targets"},"Configure Prometheus targets"),(0,r.kt)("p",null,"Locate the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.yml")," file and add the following job entry under the ",(0,r.kt)("inlineCode",{parentName:"p"},"scrape_configs")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'- job_name: "subspace"\n  static_configs:\n    - targets: ["localhost:9080"]\n      labels:\n        group: \'node\'\n    - targets: ["localhost:9081"]\n      labels:\n        group: \'farmer\'\n')),(0,r.kt)("p",null,"On Linux machines, you can typically find the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.yml")," file at the following path: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/prometheus/prometheus.yml")),(0,r.kt)("p",null,"Restart Prometheus with the new configuration."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Prometheus can reload its configuration without restarting by using the SIGHUP signal. If you're running on Linux this can be performed by using ",(0,r.kt)("inlineCode",{parentName:"p"},"kill -s SIGHUP <PID>"),", replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"<PID>")," with your Prometheus process ID.")),(0,r.kt)("h2",{id:"configure-grafana"},"Configure Grafana"),(0,r.kt)("p",null,"By default, Grafana usually runs on port 3000. You can access Grafana by navigating to the following URL: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,r.kt)("p",null,"The default username and password is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,r.kt)("p",null,"Add your Prometheus Data Source:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"grafana-config.png",src:t(6247).Z,width:"1588",height:"796"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Save & test"),' to test the configuration, if everything is alright you\'ll see the green message "Data source is working".'),(0,r.kt)("h2",{id:"import-grafana-dashboard"},"Import Grafana dashboard"),(0,r.kt)("p",null,"Copy and paste the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/20433"},"Grafana Dashboard ID")," ",(0,r.kt)("inlineCode",{parentName:"p"},"20433")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," to complete importing:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"grafana-import.png",src:t(2828).Z,width:"653",height:"378"})),(0,r.kt)("p",null,"Select your ",(0,r.kt)("inlineCode",{parentName:"p"},"Prometheus")," as Data Source and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Import"),"."),(0,r.kt)("p",null,"At this point, you should be able to monitor your node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"grafana-dashboard.png",src:t(9699).Z,width:"1280",height:"946"})))}f.isMDXComponent=!0},6247:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/grafana-config-64e83b81131616df80bf6b8a7a173653.png"},9699:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/grafana-dashboard-8d8c739cb2891551b27a3385f2097543.png"},2828:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/grafana-import-a9250f2641112edbaad52e57032dbd46.png"}}]);