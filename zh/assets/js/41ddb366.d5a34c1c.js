"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,_=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(_,o(o({ref:t},p),{},{components:n})):i.createElement(_,o({ref:t},p))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={},o="Expanding Windows VM VDisk Partitions",s={unversionedId:"legacy/Articles/Expanding_Windows_VM_vdisk_partitions",id:"legacy/Articles/Expanding_Windows_VM_vdisk_partitions",title:"Expanding Windows VM VDisk Partitions",description:"Overview",source:"@site/docs/legacy/Articles/Expanding_Windows_VM_vdisk_partitions.md",sourceDirName:"legacy/Articles",slug:"/legacy/Articles/Expanding_Windows_VM_vdisk_partitions",permalink:"/zh/legacy/Articles/Expanding_Windows_VM_vdisk_partitions",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/Articles/Expanding_Windows_VM_vdisk_partitions.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Legacy Documentation",permalink:"/zh/category/legacy-documentation"},next:{title:"Dual Booting Windows & Unraid",permalink:"/zh/legacy/Articles/dual-boot-unraid-and-windows"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Guide",id:"guide",level:2}],p={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expanding-windows-vm-vdisk-partitions"},"Expanding Windows VM VDisk Partitions"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"If you've followed the steps outlined in ",(0,r.kt)("a",{parentName:"p",href:"Manual/VM_Management#Expanding_a_vdisk",title:"wikilink"},"this\narticle")," to expand a\nvdisk for your Windows installation, this article will teach you how to\nexpand your partition in Windows so you can take advantage of that extra\nspace. Windows has this pesky habit of adding a recovery partition to\nvdisks that gets in the way of allowing you to easily expand your\nexisting C:","\\"," partition to take advantage of newly provisioned space in\nthe vdisk. To get around this, we need to delete that recovery partition\nfirst, then we can use the standard disk management utility in Windows\nto extend the C:","\\"," partition."),(0,r.kt)("h2",{id:"guide"},"Guide"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9385).Z,title:"Resize_vdisk_2_(using_diskpart_to_delete_recovery_partition).PNG",width:"675",height:"763"}),"\nPerform the following steps ",(0,r.kt)("em",{parentName:"p"},"after")," completing the steps in ",(0,r.kt)("a",{parentName:"p",href:"Manual/VM_Management#Expanding_a_vdisk",title:"wikilink"},"this\narticle")," to expand\nthe vdisk itself:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start your Windows VM."),(0,r.kt)("li",{parentName:"ul"},"Open a command prompt (hit the Windows key and type 'cmd' and press\nenter)"),(0,r.kt)("li",{parentName:"ul"},"Open diskpart (type 'diskpart' and press enter)"),(0,r.kt)("li",{parentName:"ul"},"Type 'list disk' and press enter"),(0,r.kt)("li",{parentName:"ul"},"Identify the disk you extended and select it by typing 'select disk\n","#",'" replacing ',"#"," with the numbered disk in the list."),(0,r.kt)("li",{parentName:"ul"},"Type 'list partition' and press enter."),(0,r.kt)("li",{parentName:"ul"},"Take note of which is the 'recovery' partition",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You specifically are looking for the recovery partition that comes\nafter the primary partition (in case there are multiple)."))),(0,r.kt)("li",{parentName:"ul"},"Type 'select partition ","#","' and press enter, replacing ","#"," with the\nnumbered partition in the list (for recovery)."),(0,r.kt)("li",{parentName:"ul"},"Type 'delete partition override' and press enter."),(0,r.kt)("li",{parentName:"ul"},"Right-click the start menu and select 'Disk Management'"),(0,r.kt)("li",{parentName:"ul"},"Right-click on the partition you wish to extend and click 'Extend\nPartition'"),(0,r.kt)("li",{parentName:"ul"},"Follow the on-screen prompts to complete the process.")),(0,r.kt)("img",{src:"/docs/legacy/Resize_vdisk_3_(extend_partition_in_disk_management).PNG",title:"Resize_vdisk_3_(extend_partition_in_disk_management).PNG",width:"625",alt:"Resize_vdisk_3_(extend_partition_in_disk_management).PNG"})," ",(0,r.kt)("img",{src:"Resize_vdisk_4_(partition_has_been_extended_in_disk_management).PNG",title:"Resize_vdisk_4_(partition_has_been_extended_in_disk_management).PNG",width:"625",alt:"Resize_vdisk_4_(partition_has_been_extended_in_disk_management).PNG"}))}u.isMDXComponent=!0},9385:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Resize_vdisk_2_(using_diskpart_to_delete_recovery_partition)-8dcc2547ed9d3812b1d735337a83af9a.PNG"}}]);