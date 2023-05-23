"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"unraid-os/release-notes/6.9.2",id:"unraid-os/release-notes/6.9.2",title:"6.9.2",description:"Version 6.9.2 2021-04-07",source:"@site/docs/unraid-os/release-notes/6.9.2.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.9.2",permalink:"/es/unraid-os/release-notes/6.9.2",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.9.2.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.10.0",permalink:"/es/unraid-os/release-notes/6.10.0"},next:{title:"6.9.1",permalink:"/es/unraid-os/release-notes/6.9.1"}},s={},u=[{value:"Version 6.9.2 2021-04-07",id:"version-692-2021-04-07",level:2},{value:"<strong>Failed Login Restrictions</strong>",id:"failed-login-restrictions",level:3},{value:"<strong>Driver Updates</strong>",id:"driver-updates",level:3},{value:"Change Log vs. Unraid OS 6.9.1",id:"change-log-vs-unraid-os-691",level:2},{value:"Base distro",id:"base-distro",level:4},{value:"Linux kernel",id:"linux-kernel",level:4},{value:"Management",id:"management",level:4}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"version-692-2021-04-07"},"Version 6.9.2 2021-04-07"),(0,i.kt)("h3",{id:"failed-login-restrictions"},(0,i.kt)("strong",{parentName:"h3"},"Failed Login Restrictions")),(0,i.kt)("p",null,"For webGUI login you now get 3 login attempts per IP address before a\n15-minute cool off is enforced. Further, the timestamp of the last three\nfailed login attempts per IP address are stored in files located in\n",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/pwfail/<ip-address>"),". Note this only applies to\nwebGUI login, not ssh or telnet."),(0,i.kt)("h3",{id:"driver-updates"},(0,i.kt)("strong",{parentName:"h3"},"Driver Updates")),(0,i.kt)("p",null,"We updated the Nvidia vendor GPU driver to version 465.19.01. Use this\n",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ich777/unraid-nvidia-driver/master/nvidia-driver.plg"},"handy\nplugin"),"\nby Community Developer\n",(0,i.kt)("a",{parentName:"p",href:"https://forums.unraid.net/profile/72388-ich777/"},"@ich777")," to\nfacilitate installing the correct driver."),(0,i.kt)("h2",{id:"change-log-vs-unraid-os-691"},"Change Log vs. Unraid OS 6.9.1"),(0,i.kt)("h4",{id:"base-distro"},"Base distro"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"docker: version 20.10.5"),(0,i.kt)("li",{parentName:"ul"},"fuse3: version 3.10.2"),(0,i.kt)("li",{parentName:"ul"},"nginx: version 1.19.9"),(0,i.kt)("li",{parentName:"ul"},"samba: verson 4.12.14 (CVE-2020-27840 CVE-2020-27840)")),(0,i.kt)("h4",{id:"linux-kernel"},"Linux kernel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"version 5.10.28"),(0,i.kt)("li",{parentName:"ul"},"include all CONFIG",(0,i.kt)("em",{parentName:"li"},"NF"),"*"," modules"),(0,i.kt)("li",{parentName:"ul"},"oot: realtek r8125: version 9.005.01")),(0,i.kt)("h4",{id:"management"},"Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"emhttpd: detect out-of-band device spin-up"),(0,i.kt)("li",{parentName:"ul"},"shfs: add 'copy_file_range()' support"),(0,i.kt)("li",{parentName:"ul"},"shfs: fix 'mknod' creating a fifo"),(0,i.kt)("li",{parentName:"ul"},"webgui: login: implement max 3 failed login attempts per 15 minute interval"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix links on notifications not being present if in summary display"),(0,i.kt)("li",{parentName:"ul"},"webgui: Plugins: Move incompatible plugins to ../plugins-error"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix missing CSRF when deleting pool"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix .sweet-alert color"),(0,i.kt)("li",{parentName:"ul"},"webgui: Translations adjustments"),(0,i.kt)("li",{parentName:"ul"},"webgui: Diagnostics: Prevent double clicks on download button"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix default usage thresholds not sending notification"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix CSS span.select background-color"),(0,i.kt)("li",{parentName:"ul"},"webgui: Make diagnostics messages left aligned"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fixed javascript error in DeviceInfo.page preventing\nsettings to be saved"),(0,i.kt)("li",{parentName:"ul"},"webgui: Update DeviceInfo.page"),(0,i.kt)("li",{parentName:"ul"},"webgui: Prevent autofilling of passwords on containers"),(0,i.kt)("li",{parentName:"ul"},"webgui: Docker: Do not allow CPU pinning if no template present"),(0,i.kt)("li",{parentName:"ul"},"webgui: Fix .sweet-alert .sa-icon color, ","*"," in the CSS")))}c.isMDXComponent=!0}}]);