"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6771],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),s=a(2466),i=a(6550),l=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:a,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162),a(9960),a(1207);const o={title:"Safety and Security",sidebar_position:2,description:"General security measures. Cyberattacks and fraud protection. Server protection.",keywords:["Security","Wallet","Password","SSH","Server","Protection","Fraud"]},s=void 0,i={unversionedId:"learn/security",id:"learn/security",title:"Safety and Security",description:"General security measures. Cyberattacks and fraud protection. Server protection.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/security.md",sourceDirName:"learn",slug:"/learn/security",permalink:"/ja/docs/pre-release/learn/security",draft:!1,editUrl:"https://github.com/autonomys/subspace-docs/edit/main/docs/learn/security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Safety and Security",sidebar_position:2,description:"General security measures. Cyberattacks and fraud protection. Server protection.",keywords:["Security","Wallet","Password","SSH","Server","Protection","Fraud"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/ja/docs/pre-release/learn/intro"},next:{title:"Autonomys Academy",permalink:"/ja/docs/pre-release/learn/academy"}},l={},u=[{value:"Wallet Security",id:"wallet-security",level:2},{value:"Community Security",id:"community-security",level:2},{value:"Server Security",id:"server-security",level:2},{value:"SSH RSA Keys-based Secure Authentication",id:"ssh-rsa-keys-based-secure-authentication",level:3},{value:"Creating RSA Key Pair",id:"creating-rsa-key-pair",level:3},{value:"To allow PublicKey authentication on your server, as root run:",id:"to-allow-publickey-authentication-on-your-server-as-root-run",level:4},{value:"Create RSA keys on a Home PC:",id:"create-rsa-keys-on-a-home-pc",level:4},{value:"Transfer RSA Keys to a Server:",id:"transfer-rsa-keys-to-a-server",level:4},{value:"Alternative Ways to Transfer RSA Public key to a Remote Server:",id:"alternative-ways-to-transfer-rsa-public-key-to-a-remote-server",level:4},{value:"Testing the Secure Connection",id:"testing-the-secure-connection",level:3},{value:"Streamlining SSH Connections Management With Aliases",id:"streamlining-ssh-connections-management-with-aliases",level:3},{value:"Alternating SSH Port",id:"alternating-ssh-port",level:3},{value:"Basic Recommendations for Configuring the SShd Configuration File",id:"basic-recommendations-for-configuring-the-sshd-configuration-file",level:3},{value:"A Word About Partitioning as a Security Measure.",id:"a-word-about-partitioning-as-a-security-measure",level:2},{value:"Upgrading ...",id:"upgrading-",level:2},{value:"To Access Release Notes:",id:"to-access-release-notes",level:3},{value:"UFW",id:"ufw",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Venturing into the digital world and engaging in a crypto project can be thrilling, but following top security practices is essential. Here is a general guide to security and safety, including basic measures for securing servers and home PCs. Your adherence to these practices contributes to the stability of the Subspace network and, of course, the safety of the community's cryptoassets."),(0,r.kt)("p",null,"Enjoy Subspace journey with peace of mind!"),(0,r.kt)("h2",{id:"wallet-security"},"Wallet Security"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Be sure to make the password long enough, combining both registers letters, numbers, and special characters. An 11-character password increases the bruteforce attack time to normally impossible limit. Take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://www.techrepublic.com/wp-content/uploads/2022/03/tr8423-Figure-A-How-an-8-character-password-could-be-cracked-in-just-a-few-minutes-770x404.jpg"},"passwords brutforce time illustrating table"),". However, even a complex password is not all, that is required for proper protection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avoid using common or easily guessed combinations of words or letters, as well as parts of your online data or reusing any of your existing passwords."))),(0,r.kt)("p",null,"Weak password example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"S0methin9C00l!\n")),(0,r.kt)("p",null,"Strong password example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"^p$O_~a!4h{G'9C*\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consider using a password manager to generate complex passwords and store them securely. There are plenty of password managers available. Ensure that the password manager of your choice stores data in encrypted form, boasts a robust password generator, receives positive reviews, and has a history of consistent updates. ",(0,r.kt)("strong",{parentName:"p"},"For example, well-regarded options include KeePass, Bitwarden, 1Password, LastPass, Dashlane, and Keeper."),"\nHowever, it's crucial to do your own research and consult ratings before making a decision.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Boost the security of your accounts by enabling 2FA (two-factor authentication) wherever possible. This extra layer of protection requires a second verification step, such as a code from a mobile app or hardware token, in addition to your passwords.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do not share your 12-word seed phrase or private keys.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A hardware wallet is by far the most secure way to store your private keys. Unlike online exchanges and wallets, hardware wallets store the keys offline and protect from potential malware or hacking attempts.\nThe most popular hardware wallets are ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," and ",(0,r.kt)("a",{parentName:"p",href:"https://trezor.io/"},"Tresor"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Back up your wallets by securely storing the backups offline or in an encrypted cloud storage. This guarantees that you can recover your funds in case of a device loss, damage, or theft. Many encrypted cloud storage services are available, such as Tresorit, pCloud, Sync.com, SpiderOak, and Mega (the order doesn't matter). However, always conduct your own research.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Keep all software up to date.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Be cautious of public Wi-Fi."))),(0,r.kt)("h2",{id:"community-security"},"Community Security"),(0,r.kt)("admonition",{title:"Keep in mind",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Subspace team members will never initiate direct messages with you.")),(0,r.kt)("p",null,"Should you receive an unsolicited message, it's best to ignore it, block the sender, and promptly report the incident to our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/864285291518361610/982023010405990400"},'"scam report" channel'),"."),(0,r.kt)("p",null,"Exercise caution with regard to phishing attacks. Do not click on links within our forum, Discord, or Telegram, unless those links have been shared by a trusted member of our team, such as ambassadors or staff. Scammers can create deceptive links that mimic legitimate websites, so it's advisable to scrutinize the message's author (on all the mentioned platforms) before clicking any links. Trust should generally be reserved for project team members, ambassadors, or highly reputable farmers."),(0,r.kt)("h2",{id:"server-security"},"Server Security"),(0,r.kt)("h3",{id:"ssh-rsa-keys-based-secure-authentication"},"SSH RSA Keys-based Secure Authentication"),(0,r.kt)("p",null,"Let's run through some basics."),(0,r.kt)("p",null,"SSH is a network protocol used for secure remote access to computer systems, cloud infrastructure, secure file transfer (SFTP), and tunneling. It's a fundamental tool for system administrators and developers. SSH uses the Diffie-Hellman algorithm for secure connections and authentication methods like password or SSH key pairs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SSH Connection Establishment"),"."),(0,r.kt)("p",null,"When a client initiates a TCP connection, the server responds with supported protocol versions and its public host key.\nBoth parties negotiate a session key using the Diffie-Hellman algorithm to ensure secure communication. This session key encrypts the entire session."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User Authentication"),"."),(0,r.kt)("p",null,"After establishing session encryption, user authentication begins.\nPassword authentication involves securely transmitting the user's account password.\nSSH key pairs, consisting of public and private keys, are a recommended alternative for authentication. The client sends a key pair ID to the server, which checks for a matching public key.\nThe server encrypts a random number with the public key, sends to the client, who decrypts it with the private key.\nThe client computes an MD5 hash using the decrypted number and the shared session key, sending it back to the server for verification."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RSA encryption"),"."),(0,r.kt)("p",null,"In RSA, encryption and decryption use different keys: the encryption key is public, and the decryption key is private. A user creates a public key based on two large prime numbers and an auxiliary value, while keeping the prime numbers secret. Messages can be encrypted with the public key but can only be decrypted by someone who knows the prime numbers."),(0,r.kt)("p",null,"Together, SSH and RSA provide secure, authenticated, and encrypted connections to protect sensitive information. To enhance security, though it is possible to create an SSH key with a passphrase."),(0,r.kt)("h3",{id:"creating-rsa-key-pair"},"Creating RSA Key Pair"),(0,r.kt)("h4",{id:"to-allow-publickey-authentication-on-your-server-as-root-run"},"To allow PublicKey authentication on your server, as root run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-consol"},"vi /etc/ssh/sshd_config\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PubkeyAuthentication no --\x3e PubkeyAuthentication yes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-consol"},"systemctl restart ssh\n")),(0,r.kt)("h4",{id:"create-rsa-keys-on-a-home-pc"},"Create RSA keys on a Home PC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ssh-keygen\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"you will get two keys:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.ssh/id_rsa"),"     Your private RSA key to keep on local PC"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.ssh/id_rsa.pub")," Your public RSA key to send to a server"),(0,r.kt)("h4",{id:"transfer-rsa-keys-to-a-server"},"Transfer RSA Keys to a Server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-consol"},"sudo ssh-copy-id -p 12345 user_name@server-ip-addres\n")),(0,r.kt)("p",null,"This utility specifically designed for copying SSH keys to a remote server.\nIt automatically handles the key placement and permissions on the remote server, making it more convenient.\nUse ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," flag to specify not standard port, if you have changed it."),(0,r.kt)("p",null,"If you have created keys before, don't overwrite it! As you will not be able to authenticate using the previous key anymore. But you can keep them somewhere else and generate them next."),(0,r.kt)("h4",{id:"alternative-ways-to-transfer-rsa-public-key-to-a-remote-server"},"Alternative Ways to Transfer RSA Public key to a Remote Server:"),(0,r.kt)("p",null,"If you have created keys before and store them elsewhere, you can use rsync to copy the contents of the public key from any other place to ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," by specifying the path to the keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'sudo rsync -e "ssh -p 12345" ~/.ssh/user2/id_rsa.pub USER@SERVER_IP:~/.ssh/authorized_keys\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Use ",(0,r.kt)("inlineCode",{parentName:"em"},"-p")," flag for specifying non-standard port")),(0,r.kt)("p",null,"This command will create an .ssh dir on a server(or skip if it has) and add the keys to the end of ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'cat ~/.ssh/id_rsa.pub | ssh username@remote_host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-p")," flag make the tool to skip the error if the directory already exists"),(0,r.kt)("p",null,"Manually transfer the public key file and add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file on the remote server.\nYou can open ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub key")," and copy-paste it's content to the end of ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"echo public_key_string >> ~/.ssh/authorized_keys\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you have permissions 700 for ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh")," directory and 600 for ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," in it")),(0,r.kt)("h3",{id:"testing-the-secure-connection"},"Testing the Secure Connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ssh username@your-server-ip-addr\n")),(0,r.kt)("h3",{id:"streamlining-ssh-connections-management-with-aliases"},"Streamlining SSH Connections Management With Aliases"),(0,r.kt)("p",null,'Managing connections can be much simpler and more enjoyable by creating aliases!\nCreate a file named "config" in the ',(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh")," directory (where the keys are), simply add your server or other users for the same server to it, like in example below. Feel free to add as many as you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'Host Farm                    # Any word can be used here as an alias (for ex. "subspace" or "Farm")\nHostName 123.123.123.123     # Use you server\'s IP\nPort 12345                                 # your custom port\nUser username                       # User for login (for a rescue system this must be root, change it later)\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"indentation isn't important, 4 spaces indentation is used for a better readability")),(0,r.kt)("p",null,"Try to connect using simpliest syntax in terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ssh subspace\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You will be asked if you allow the connection. Reply with 'yes'.")),(0,r.kt)("h3",{id:"alternating-ssh-port"},"Alternating SSH Port"),(0,r.kt)("p",null,"By default, SSH (Secure Shell) listens on port 22. This is well-known and can be a target for automated attacks. By changing the SSH port, you make it harder for attackers to guess which port SSH is listening on, reducing the risk of automated attacks."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"First, make sure you don't have UFW enabled. If you do, add a rule for the desired port:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo ufw allow 12345/tcp        #this is an example, specify your port\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changing port")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo vi /etc/ssh/sshd_config\n#Port 22  -> Port 12345             # specify a custom SSH port within the range of 1025 to 65534\nsudo systemctl reload sshd    # for the changes to take effect\n")),(0,r.kt)("p",null,"Checking new port from homePC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ssh -p 12345 user@localhost     # specify your port\n")),(0,r.kt)("p",null,"Now you can log in to your server on a non-standard port using an encrypted connection without entering any credentials!"),(0,r.kt)("h3",{id:"basic-recommendations-for-configuring-the-sshd-configuration-file"},"Basic Recommendations for Configuring the SShd Configuration File"),(0,r.kt)("p",null,"As root, edit sshd_config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-consol"},"vi /etc/ssh/sshd_config\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allowing Public Key authentication:\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"PubkeyAuthentication no --\x3e PubkeyAuthentication yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Restricting password access:\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"PasswordAuthentication yes --\x3e PasswordAuthentication no"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reducing time window for entering credentials:\\\n(If the authentication process is not completed within this time, the server will terminate the connection)\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"LoginGraceTime 120"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Restricting root login\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"PermitRootLogin yes --\x3e PermitRootLogin no"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specifying the Users allowed to connect through SSH\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"AllowUsers user1 user2")))),(0,r.kt)("p",null,"Reload daemon for the changes to take effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-consol"},"systemctl reload sshd\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reboot your system to ensure that everything is functioning as expected.")),(0,r.kt)("p",null,"Complete SSh manual: ",(0,r.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/sshd_config"},"SSH Academy")),(0,r.kt)("h2",{id:"a-word-about-partitioning-as-a-security-measure"},"A Word About Partitioning as a Security Measure."),(0,r.kt)("p",null,"As a security measure, it is worth mentioning the practice of allocating separate partitions for critical directories such as /boot, /var, /tmp, and /home (in some cases). This helps isolate system files, logs, temporary files, and user data, which can improve system stability and security. But the cons are there too:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If one partition runs out of space while another partition has unused space, it may not be possible to easily reallocate the disk space"),(0,r.kt)("li",{parentName:"ul"},"Monitoring and maintaining each partition separately, including backups, permissions"),(0,r.kt)("li",{parentName:"ul"},"having a separate /tmp partition may result in increased disk I/O when temporary files are created and deleted"),(0,r.kt)("li",{parentName:"ul"},"If the /home partition is separate, migrating to a new server or upgrading the operating system may require additional steps to ensure the proper migration of user data and configurations"),(0,r.kt)("li",{parentName:"ul"},"Having separate partitions can increase the risk of data loss if one partition fails or becomes corrupted")),(0,r.kt)("p",null,'The partitioning recommendations for farming in Subspace will be covered in the "Partitioning and mounting file system" section of the left tab menu.'),(0,r.kt)("h2",{id:"upgrading-"},"Upgrading ..."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Upgrading packages")),(0,r.kt)("p",null,"While Linux distributions regularly release security patches to address known vulnerabilities in software packages, it doesn't always make sense to install every available update on a server. Unnecessary updates can introduce features or changes that might not be needed and, in some cases, may even cause system destabilization. If you've made customizations or modifications to your server's configuration or software, an upgrade could potentially overwrite or conflict with these changes."),(0,r.kt)("p",null,"Therefore, it's essential to make upgrade decisions based on a thorough understanding of what each package does and reviewing their changelogs."),(0,r.kt)("p",null,"To view the changelog for a particular package: ",(0,r.kt)("inlineCode",{parentName:"p"},"apt changelog <package_name>")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Upgrading Kernel")),(0,r.kt)("p",null,"While kernel updates often come with bug fixes and security patches, there is a possibility that the new kernel version may introduce new bugs or compatibility issues. Not every kernel update is necessary or urgent. Some updates may provide incremental improvements or additional functionality that may not be essential for your specific use case. It's important to evaluate the benefits and potential risks before deciding to update the kernel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Upgrading the distribution version")),(0,r.kt)("p",null,"Pros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to new features"),(0,r.kt)("li",{parentName:"ul"},"Software compatibility"),(0,r.kt)("li",{parentName:"ul"},"Security updates"),(0,r.kt)("li",{parentName:"ul"},"Long-term support (LTS)")),(0,r.kt)("p",null,"Cons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Potential for compatibility issues"),(0,r.kt)("li",{parentName:"ul"},"Configuration changes"),(0,r.kt)("li",{parentName:"ul"},"May have new bugs (which can be resolved by downgrading the bugged package).")),(0,r.kt)("p",null,"So everywhere ideally it is necessary to read changelogs, know what is needed and why, and comprehensively evaluate the need for upgrades. Although, of course, in most cases under ordinary (office) conditions everything should work."),(0,r.kt)("h3",{id:"to-access-release-notes"},"To Access Release Notes:"),(0,r.kt)("p",null,"Simply use the search function on the ",(0,r.kt)("a",{parentName:"p",href:"https://ubuntu.com/search?q=Ubuntu+22.04+Changelogs"},"Ubuntu homepage"),"."),(0,r.kt)("h2",{id:"ufw"},"UFW"),(0,r.kt)("p",null,"According to the ordering of UFW rules (DENY rules should come first, followed by ALLOW rules), new 'ALLOW' rules can simply be added to the end of the existing rules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"your existing rules\n...\n\nsudo ufw allow 30333 comment 'Node port'\nsudo ufw allow 30433 comment 'Node DSN port'\nsudo ufw allow 30533 comment 'Farmer port'\n")),(0,r.kt)("p",null,"Now with peace of mind you may go back to installing Node and Farmer."))}d.isMDXComponent=!0},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);