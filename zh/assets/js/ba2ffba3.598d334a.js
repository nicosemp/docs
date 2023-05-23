"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},s="Remote Access",i={unversionedId:"connect/remote-access",id:"connect/remote-access",title:"Remote Access",description:"The Remote Access feature",source:"@site/docs/connect/remote-access.md",sourceDirName:"connect",slug:"/connect/remote-access",permalink:"/zh/connect/remote-access",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/connect/remote-access.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Unraid Connect Help",permalink:"/zh/connect/help"},next:{title:"Legacy Documentation",permalink:"/zh/category/legacy-documentation"}},c={},l=[{value:"Remote Access - <strong>Initial Setup</strong>",id:"remote-access---initial-setup",level:2},{value:"Remote Access - <strong>Choose Remote Access Type</strong>",id:"remote-access---choose-remote-access-type",level:3},{value:"<strong>Dynamic Remote Access</strong>",id:"dynamic-remote-access",level:2},{value:"Dynamic Remote Access Usage",id:"dynamic-remote-access-usage",level:4},{value:"Configuring <strong>UPNP</strong> (Applies to Dynamic - UPNP / Always On - UPNP)",id:"configuring-upnp-applies-to-dynamic---upnp--always-on---upnp",level:3},{value:"Configuring <strong>Manual Port Forwarding</strong> (Applies to Dynamic - Manual Port Forward / Always On - Manual Port Forward)",id:"configuring-manual-port-forwarding-applies-to-dynamic---manual-port-forward--always-on---manual-port-forward",level:3}],p={toc:l},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"remote-access"},"Remote Access"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8225).Z,width:"812",height:"283"})),(0,r.kt)("p",null,"The Remote Access feature\nallows you to access your Unraid webgui from the Internet. If you need\naccess to Docker containers, network drives, or other devices on your\nnetwork, you'll want to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.unraid.net/Manual/Security#VPN"},"setup a\nVPN")," instead."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Before enabling remote access, consider your root password. Is\nit sufficiently complex? Update your root password on the Users page.")),(0,r.kt)("p",null,"Also note: ",(0,r.kt)("strong",{parentName:"p"},"Remote Access is an optional feature"),", and is not required\nto use the rest of Unraid Connect."),(0,r.kt)("h2",{id:"remote-access---initial-setup"},"Remote Access - ",(0,r.kt)("strong",{parentName:"h2"},"Initial Setup")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From Unraid webGUI Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Settings")," \u2192 ",(0,r.kt)("strong",{parentName:"li"},"Management Access")),(0,r.kt)("li",{parentName:"ol"},"Note the ",(0,r.kt)("strong",{parentName:"li"},"HTTPS port"),", it defaults to port 443. If you have Docker\ncontainers running on this port, choose an unused port over 1000\nsuch as 3443, 4443, 5443, etc."),(0,r.kt)("li",{parentName:"ol"},"If you changed any of the above settings, hit ",(0,r.kt)("strong",{parentName:"li"},"Apply")," for them to\ntake effect."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"CA-signed certificate file")," area, click ",(0,r.kt)("strong",{parentName:"li"},"Provision"))),(0,r.kt)("h3",{id:"remote-access---choose-remote-access-type"},"Remote Access - ",(0,r.kt)("strong",{parentName:"h3"},"Choose Remote Access Type")),(0,r.kt)("p",null,"There are two kinds of Remote Access provided through Unraid Connect:\n",(0,r.kt)("strong",{parentName:"p"},"Dynamic Remote Access")," and ",(0,r.kt)("strong",{parentName:"p"},"Static Remote Access")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dynamic Remote Access")," enables access to your webGUI from the\ninternet only when needed, and leaves the webGUI inaccessible from WAN\notherwise. This feature works with both UPNP as well as static port\nforwarding and uses an API call through the Unraid Connect plugin to\nopen your webGUI to internet traffic, closing it automatically when not\nneeded. This helps to prevent automated attacks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Static Remote Access")," enables your server to listen to WAN traffic at\nall times, allowing your server to be accessed from the internet."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8881).Z,title:"Remote_access_settings.png",width:"860",height:"511"})),(0,r.kt)("h2",{id:"dynamic-remote-access"},(0,r.kt)("strong",{parentName:"h2"},"Dynamic Remote Access")),(0,r.kt)("p",null,"To use Dynamic Remote access, first set the type you would like to use\nin the ",(0,r.kt)("strong",{parentName:"p"},"Management Access \u2192 Unraid Connect")," settings page. Choose one\nof the Dynamic settings in the Remote Access dropdown:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dynamic - UPNP"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This option enables dynamic access through the Connect dashboard,\nas well as automatically opening and closing a random port on\nnetwork with UPNP. To use this option your router must have UPNP\nenabled."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Dynamic - Manual Port Forward"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This option enables dynamic access through the Connect dashboard,\nbut requires manual port forwarding.")))),(0,r.kt)("h4",{id:"dynamic-remote-access-usage"},"Dynamic Remote Access Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"Connect#Connect",title:"wikilink"},"Unraid Connect"),", then to\neither the management page or the server details view")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be presented with a new ",(0,r.kt)("strong",{parentName:"p"},"Dynamic Remote Access")," card,\nwith a button that will be enabled if your server is not accessible\nfrom your current\nlocation."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9085).Z,title:"Remote-access-enable-card.png",width:"626",height:"346"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clicking the button will trigger your server to enable wan access,\nand if using UPNP, create a new UPNP port forward lease on your\nrouter. This can take up to a minute to complete"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When using UPNP, a 30 minute lease will be created, which will be\nrenewed automatically while Dynamic Remote Access is enabled."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After enabling, the card will report the status of the enabling\nprocess, and what the current state of UPNP is.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'After ten minutes of inactivity, or clicking "Disable Remote\nAccess", your server will automatically turn off access from WAN\ntraffic.'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When using UPNP, your server will also attempt to remove the UPNP\nlease from your router.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Active Remote Access Card",src:n(9254).Z,width:"602",height:"337"})),(0,r.kt)("h3",{id:"configuring-upnp-applies-to-dynamic---upnp--always-on---upnp"},"Configuring ",(0,r.kt)("strong",{parentName:"h3"},"UPNP")," (Applies to Dynamic - UPNP / Always On - UPNP)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure your router supports UPNP and has it enabled."),(0,r.kt)("li",{parentName:"ol"},"Navigate to Settings -",">",' Management Access and set "Use UPnP" to\nYes.'),(0,r.kt)("li",{parentName:"ol"},"On the Unraid Connect settings page, set the remote access option to\nUPNP (either Dynamic or Always On) and Apply."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"(Always on Forwarding Only)")," : Press the ",(0,r.kt)("strong",{parentName:"li"},"Check"),' button. If the\nport is forwarded correctly you will see a message saying "Your\nUnraid Server is reachable from the Internet"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: When using Dynamic forwarding, you will not be able to\naccess your server from this manual port forward unless you click\nthe Enable Dynamic Remote access button in ",(0,r.kt)("a",{parentName:"li",href:"Connect#Connect",title:"wikilink"},"Unraid\nConnect"),"."))),(0,r.kt)("li",{parentName:"ol"},'Note: If the setting changes from UPnP to "Manual Port Forward" when\nyou reload the page, then we were not able to communicate with your\nrouter to enable UPnP. It may need to be enabled on your router, or\nperhaps the router needs a firmware update to use it.')),(0,r.kt)("h3",{id:"configuring-manual-port-forwarding-applies-to-dynamic---manual-port-forward--always-on---manual-port-forward"},"Configuring ",(0,r.kt)("strong",{parentName:"h3"},"Manual Port Forwarding")," (Applies to Dynamic - Manual Port Forward / Always On - Manual Port Forward)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"WAN port")," you want to use. We highly recommend you choose\na random port over 1000 rather than using the default of 443. i.e.\nsomething like 13856, 48653, etc"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Apply")),(0,r.kt)("li",{parentName:"ol"},"Setup your router to port forward the ",(0,r.kt)("strong",{parentName:"li"},"WAN port")," you specified to\nthe ",(0,r.kt)("strong",{parentName:"li"},"HTTPS port")," used by the server. There is a note on the screen\ntelling you the exact ports and IP to use.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: some routers require that the ",(0,r.kt)("strong",{parentName:"li"},"WAN port")," match the ",(0,r.kt)("strong",{parentName:"li"},"HTTPS\nport"),". In that case, we'd recommend setting both to the same high\nrandom number."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"(Always on Forwarding Only)")," : Press the ",(0,r.kt)("strong",{parentName:"li"},"Check"),' button. If the\nport is forwarded correctly you will see a message saying "Your\nUnraid Server is reachable from the Internet"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: When using Dynamic forwarding, you will not be able to\naccess your server from this manual port forward unless you click\nthe Enable Dynamic Remote access button in ",(0,r.kt)("a",{parentName:"li",href:"Connect#Connect",title:"wikilink"},"Unraid\nConnect")))),(0,r.kt)("li",{parentName:"ol"},"To access your server using Remote Access, login to ",(0,r.kt)("a",{parentName:"li",href:"Connect#Connect",title:"wikilink"},"Unraid\nConnect")," and click the Manage link")),(0,r.kt)("p",null,"===Optional step for secure local access=== If you want to use secure\nhttps for local access to your server as well, navigate to Settings -",">","\nManagement Access. In the CA-signed certificate area, if there are no\nwarnings about DNS Rebinding then go ahead and set ",(0,r.kt)("strong",{parentName:"p"},"Use SSL/TLS")," to\n",(0,r.kt)("strong",{parentName:"p"},"Strict"),". If there are warnings about DNS Rebinding see ",(0,r.kt)("a",{parentName:"p",href:"My_Servers#A_note_regarding_DNS_Rebinding_Protection",title:"wikilink"},"A note\nregarding DNS Rebinding\nProtection"),"."),(0,r.kt)("p",null,"Note that once SSL is set to Strict, your client computers will need\naccess to DNS in order to access your server. This means if your\nInternet connection drops you will likely lose access to your server's\nwebgui. See ",(0,r.kt)("a",{parentName:"p",href:"My_Servers#How_to_access_your_server_when_DNS_is_down",title:"wikilink"},"How to access your server when DNS is\ndown"),"."))}u.isMDXComponent=!0},8225:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Enabling_remote_access-5be7d0c842caddb8bc4e74eaf60e9549.png"},9085:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remote-access-enable-card-608cc524c166e04f012d7e3d9e200f9b.png"},9254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remote-access-enabled-static-edce311be0363ac9f5bcaae906fbaf59.png"},8881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remote_access_settings-70262cb6b2dc73e9a87c65a28973223b.png"}}]);