"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2926],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=i,y=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return a?r.createElement(y,s(s({ref:t},p),{},{components:a})):r.createElement(y,s({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<n;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=a(7462),i=(a(7294),a(3905));const n={},s=void 0,o={unversionedId:"legacy/FAQ/Parity",id:"legacy/FAQ/Parity",title:"Parity",description:"Parity is used by unRAID to protect against data loss. If a drive in the",source:"@site/docs/legacy/FAQ/Parity.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Parity",permalink:"/zh/legacy/FAQ/Parity",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Parity.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Console",permalink:"/zh/legacy/FAQ/Console"},next:{title:"Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive",permalink:"/zh/legacy/FAQ/Replacing_Multiple_Data_Drives_with_a_Single_Larger_Drive"}},l={},d=[{value:"How parity works",id:"how-parity-works",level:2},{value:"Reconstructing data",id:"reconstructing-data",level:2},{value:"Checking parity",id:"checking-parity",level:2},{value:"Parity disk",id:"parity-disk",level:2},{value:"Size",id:"size",level:3},{value:"Performance",id:"performance",level:3},{value:"Dual parity",id:"dual-parity",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Parity is used by unRAID to protect against data loss. If a drive in the\narray fails, the data on the other drives can be combined with the\nparity data to reconstruct the missing data."),(0,i.kt)("p",null,"Why have parity? Because there are only two types of hard disks in the\nworld:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Disks that have already failed."),(0,i.kt)("li",{parentName:"ul"},"Disks that have not yet failed",".",".. but just need a bit more time\nuntil they do.")),(0,i.kt)("h2",{id:"how-parity-works"},"How parity works"),(0,i.kt)("p",null,"In general, a parity process is designed to detect a single bit change\nacross a given set of bits, by setting the value of an added bit such\nthat a summation across that set of bits is forced to a known value. The\nadded bit is known as a ",(0,i.kt)("strong",{parentName:"p"},"parity bit"),"."),(0,i.kt)("p",null,"In unRAID, the parity bits are stored on a ",(0,i.kt)("strong",{parentName:"p"},"parity drive")," independent\nof the data drives. This parity bit works across the set of bits in the\nsame relative bit position on each drive. So the 57th bit of the parity\ndrive is the parity bit for the 57th bit of all of the data drives. A\nparity check of the 57th bit position therefore adds up all of the 57th\nbits of every drive including the parity drive, and checking to see\ntotal is an EVEN number. If the value returned is not EVEN, then the\nparity bit is toggled so that the parity check WILL return an EVEN\nnumber."),(0,i.kt)("p",null,"Why an EVEN number? unRAID uses 'even parity', which simply means that\nthe summation process (using a mathematical operation called 'exclusive\nOR' or 'XOR') across that set of bits must return a value that is an\nEVEN number."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.pcguide.com/ref/hdd/perf/raid/concepts/genParity-c.html"},"PCGuide discussion of\nXOR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Exclusive_or"},"Wikipedia on XOR"))),(0,i.kt)("p",null,"Digital data is stored as a 1 or a 0. So, for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have 4 drives with bit values 1,1,1,1 the parity will be 0\n(1+1+1+1+0=even)."),(0,i.kt)("li",{parentName:"ul"},"If the bit values are 1,0,0,0 the parity will be 1 (1+0+0+0+1=even).")),(0,i.kt)("p",null,"When a drive is added to a parity-protected unRAID array, it is first\ncleared by writing zeroes to all bits of all sectors of that drive. A\nzero value will not impact parity. Once the new drive is full of zeros,\nunRAID can silently slip it into the array without needing to rebuild\nparity. Several disks can be added simultaneously in this way."),(0,i.kt)("h2",{id:"reconstructing-data"},"Reconstructing data"),(0,i.kt)("p",null,"There are only two situations that the parity data is used by unRAID to\nreconstruct data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when a disk is being reconstructed; and"),(0,i.kt)("li",{parentName:"ul"},"when a bad sector is detected.")),(0,i.kt)("p",null,"At these times, all of the disks (including parity) are read to\nreconstruct the data to be written to the target disk. As the sum of the\nbits is always even, unRAID can reconstruct any ONE missing piece of\ndata (the parity or a data disk), as long as the other pieces are\ncorrect."),(0,i.kt)("p",null,"In the two examples above, say the 2nd drive fails."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1+x+1+1+0=even, x must equal 1"),(0,i.kt)("li",{parentName:"ul"},"1+x+0+0+1=even, x must equal 0")),(0,i.kt)("p",null,"As parity is so important for data reconstruction, ensure that parity is\ncorrect by running parity checks periodically."),(0,i.kt)("p",null,"If you physically remove a single disk from your array you will still be\nable to read and write to it. It is 'simulated' by reading all the other\ndata disks and parity. In the same way, the parity disk is updated as\nneeded when writing to the simulated disk. If you now install a\nreplacement disk, it can be completely rebuilt from the re-constructed\ncontents based on parity and all the other data drives."),(0,i.kt)("h2",{id:"checking-parity"},"Checking parity"),(0,i.kt)("p",null,"In a ",(0,i.kt)("strong",{parentName:"p"},"parity sync"),", the system reads all the data disks and writes the\ncomputed parity to the parity disk."),(0,i.kt)("p",null,"In a ",(0,i.kt)("strong",{parentName:"p"},"parity check"),", the system reads all the data disks and the\nparity disk, comparing computed parity with stored parity. This\noperation has a flag:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CORRECT\xa0-\xa0if\xa0a\xa0parity\xa0mismatch\xa0occurs,\xa0write\xa0parity\xa0disk\xa0with\xa0computed\xa0parity\xa0and\xa0report\xa0in\xa0syslog"),"\\\n",(0,i.kt)("inlineCode",{parentName:"p"},"NOCORRECT\xa0-\xa0just\xa0report\xa0in\xa0syslog")),(0,i.kt)("p",null,"Only the first 100 parity check errors are reported. (The messages in\nthe system log are generated for each sector address where a parity\nmis-match occurs. So if you tried a parity-check on an array that\ndoesn't have valid parity, the system log would quickly become massive;\nhence the limit to 100 messages.)"),(0,i.kt)("p",null,"These parity mis-matches are called 'sync errors' or 'parity sync\nerrors'. They are a count of how many block addresses were found where\ncomputed parity did not 'synchronize' with (i.e., match) stored parity.\n(A 'block' is 4096 bytes. This is also the linux PAGE size - the\nfundamental unit of I/O.)"),(0,i.kt)("p",null,"Parity disk being ",(0,i.kt)("strong",{parentName:"p"},"valid")," means that there is a parity disk present,\nand sometime in the past a parity sync completed without error (or being\ncancelled). Once parity sync has completed, the parity disk will always\nbe 'valid' (and have a green dot). 'Valid' in this sense means that it\ncan be used to reconstruct a failed data disk."),(0,i.kt)("p",null,"(Actually, 'valid' is a status that applies to all array disks, both\ndata disks and the parity disk. If all array disks are valid except for\none of them, it means that the one that's not valid can be\nreconstructed using the data from all the other ones.)"),(0,i.kt)("p",null,"When a parity check/nocorrect produces errors, why is the Parity disk\nstill marked 'valid'? This is because if the system marked the parity\ndisk 'invalid' because of a handful of parity errors, and then another\ndisk failed, that other disk could not be reconstructed (because now\nthere would be 2 invalid disks in the array). So the entire parity disk\nisn't marked invalid because of detected parity errors. Of course, a\nuser can always deem parity invalid by un-assigning it."),(0,i.kt)("p",null,"Once parity has been calculated there should only be 2 ways that there\nshould be parity check errors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a non-clean shutdown, ie, sudden power loss or system reset. What\nhappens here is that there could be pending writes to the parity\nand/or data disks that don't get completed, leaving the\ncorresponding stripe with inconsistent parity."),(0,i.kt)("li",{parentName:"ul"},"an undetected hardware fault (such as silent memory corruption).")),(0,i.kt)("h2",{id:"parity-disk"},"Parity disk"),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("p",null,"The size of the parity disk must be equal to or larger than the largest\ndata drive."),(0,i.kt)("h3",{id:"performance"},"Performance"),(0,i.kt)("p",null,"Using parity to protect your data inevitably has an impact on\nperformance when you are writing data to the array. Any time a data disk\nis written to, the parity disk needs to be updated as well. Each write\nto a parity-protected unRAID data disk results in 4 disk operations: a\nread and write for parity, and a read and write for data. The platter of\neach disk has to make a full revolution after reading to position the\ndisk head back over the sector being written."),(0,i.kt)("p",null,"Writing to the unRAID array is also limited by the slowest (rotational\nspeed) drive involved. If only the parity drive is a 7200 RPM drive,\nthen you are still limited by the speed of the data drive. You'll see\nno improvement in write speed unless there are multiple slower data\ndrives being written to simultaneously, and one faster 7200 RPM parity\ndrive trying to keep up with both of them."),(0,i.kt)("h2",{id:"dual-parity"},"Dual parity"),(0,i.kt)("p",null,"For large arrays, 'dual parity' -- or, the facility to have a second\nparity disc is not simply a mirror of the first. This permits two\nsimultaneous drive failures without losing data."),(0,i.kt)("p",null,"In a P + Q redundancy system (as in a RAID-6 system), there would be two\nredundancy disks: 'P', which is the ordinary XOR parity, and 'Q', which\nis a Reed-Solomon code. This allows unRAID to recover from any 2 disk\nerrors, with minimal impact on performance.(Requires Clarification that\nthis is actually used)"),(0,i.kt)("p",null,"Further discussion:\n",(0,i.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=2634.msg21695#msg21695"},"1")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"Category:_Key_concepts",title:"wikilink"},"Category: Key concepts")))}u.isMDXComponent=!0}}]);