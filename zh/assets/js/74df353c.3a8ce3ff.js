"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=h(n),m=r,c=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var h=2;h<o;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"legacy/FAQ/Building_an_unRAID_Server",id:"legacy/FAQ/Building_an_unRAID_Server",title:"Building_an_unRAID_Server",description:"Important Warning! This wiki page has not",source:"@site/docs/legacy/FAQ/Building_an_unRAID_Server.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Building_an_unRAID_Server",permalink:"/zh/legacy/FAQ/Building_an_unRAID_Server",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Building_an_unRAID_Server.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Upgrading to Unraid 6",permalink:"/zh/legacy/Articles/upgrading-to-unraid-6"},next:{title:"Cache_disk",permalink:"/zh/legacy/FAQ/Cache_disk"}},s={},h=[{value:"Introduction",id:"introduction",level:2}],p={toc:h},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important Warning! This wiki page has not\nbeen updated for v6! Some information is\nout-of-date!")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"unRAID is a file server system, based upon the Slackware distribution of\nLinux."),(0,r.kt)("p",null,"unRAID allows you to build an 'array' of hard drives and share those\ndrives across the local network for all users to access the files on\nthose drives. In order to help combat physical drive failure, unRAID\nallows for the inclusion of a parity drive, which is used to contain\nparity bit information for all of the other data drives. This\ninformation can be used to rebuild the data on any drive if it has to be\nreplaced (either for an upgrade or because it died)."),(0,r.kt)("p",null,"The benefits of unRAID versus other systems such as FreeNAS are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ability to have different sized drives in the array (RAID normally\nrequires you to have all drives in the system be of the same\nphysical size)"),(0,r.kt)("li",{parentName:"ul"},"Ability to dynamically add drives to the array as they are\nacquired - most RAID arrays are very sensitive to \"growing\" the\narray and the operation typically involves a full backup before\nattempting to grow the array. If you've got 5 TB of data, this\nlikely isn't something you're going to attempt!"),(0,r.kt)("li",{parentName:"ul"},"Non-striping of the data or parity - normally, the data and parity\ninformation in a RAID is striped across the disks, meaning portions\nof each file are stored on various drives. In unRAID, files are\nstored contiguously on a single drive. This means that if there is a\ncatastrophic problem (e.g. multiple drives fail), you can likely\nretrieve the information from a single disk.")),(0,r.kt)("p",null,"Of course there are some drawbacks to unRAID:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some limitations in hardware support - see the ",(0,r.kt)("a",{parentName:"li",href:"Hardware_Compatibility",title:"wikilink"},"Hardware\nCompatibility")," page"),(0,r.kt)("li",{parentName:"ul"},"It's not free (for more than 3 drives) or open source"),(0,r.kt)("li",{parentName:"ul"},'Since the data is not "striped" across multiple drives, read\nperformance is limited to the speed of the individual drive. In most\nRAID implementations, data can be read much faster than an\nindividual drive\'s performance because various drives are accessed\nsimultaneously, thus aggregating the read performance.')),(0,r.kt)("p",null,"== Hardware =="),(0,r.kt)("p",null,":   ",(0,r.kt)("em",{parentName:"p"},"Main article: ",(0,r.kt)("a",{parentName:"em",href:"Designing_an_unRAID_server",title:"wikilink"},"Designing an unRAID\nserver")," - general issues to\nconsider when choosing hardware components"),"\n:   ",(0,r.kt)("em",{parentName:"p"},"Main article: ",(0,r.kt)("a",{parentName:"em",href:"Hardware_Compatibility",title:"wikilink"},"Hardware\nCompatibility")," - for up-to-date\nhardware recommendations")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU: Basically anything. Single core CPUs are fine, though\nmulti-core CPUs can be useful for certain unRAID add-ons."),(0,r.kt)("li",{parentName:"ul"},"Memory (RAM): Minimum 512 MB, but 1-2 GB is recommended. 4+ GB is\nrecommended for certain unRAID add-ons."),(0,r.kt)("li",{parentName:"ul"},"Video card: Use the onboard video if possible, if not, then look for\nthe cheapest card you can get off eBay, preferably a PCI-based video\ncard (you will want to save your faster PCIe ports for SATA\ncontroller cards)."),(0,r.kt)("li",{parentName:"ul"},"Hard drives: either PATA or SATA drives of your choice. Remember\nthough, that the largest will be used for parity, and those old\ndrives you've got laying around probably will die as soon as you\nput something important on them! SATA drives will be faster and also\nwill be easier to route cables since their cables are much smaller.\nAlso remember that they tend to take different power supply\nconnections, so plan accordingly (do you need adapters?)."),(0,r.kt)("li",{parentName:"ul"},"Motherboard: You will need a newer motherboard that allows you to\nboot from a USB stick. Some of the oldest boards do not. Look for\none with at least 6 SATA ports, Gigabit Ethernet (GigE), and onboard\nvideo. You will need to be careful here if you choose something\nelse, to make sure that the onboard devices are supported. Support\nfor these has increased with each unRAID release, but it still boils\ndown to:"),(0,r.kt)("li",{parentName:"ul"},"Onboard SATA: Intel ICHx, nVidia nForce, AMD or ATI SB600+, possibly\nsome VIA chipsets? (and a couple more I'm sure)"),(0,r.kt)("li",{parentName:"ul"},"Onboard LAN (preferably gigabit only): Intel, Marvell, some VIA\n(slow) and Realtek"),(0,r.kt)("li",{parentName:"ul"},"PCI or PCIe SATA Cards: The Promise TX4 is the most widely trusted\nPCI SATA controller card, but it is slow by today's standards.\nAvoid using the PCI bus at all if possible. Look for a SATA\ncontroller card that uses PCIe. Note that PCI-X is different from\nPCIe. You will not be able to use PCI-X unless your motherboard\nspecifically supports it."),(0,r.kt)("li",{parentName:"ul"},"USB Memory Stick: at least 512 MB, though 1-2 GB is cheap and\nreadily available."),(0,r.kt)("li",{parentName:"ul"},"Power Supply (PSU): If you're going to be building a server that's\npowered on for long periods, and that has a lot of hard drives, then\nyou will need a good quality power supply, so don't skimp on this\npart! Look for a power supply that has a single 12+ volt rail and\nthat is 80plus efficient or better. Also make sure that your PSU is\ncompatible with your motherboard, since some motherboards require 8\npin power cables instead of the standard 4 pin power cables.\nReputable brands are Corsair, Seasonic, and Antec Earthwatts."),(0,r.kt)("li",{parentName:"ul"},'Case: Almost any case will do for a small array. Bigger arrays will\nneed more thought. You will need to think about ventilation. Hard\ndrives get hot and they are very susceptible to heat (most are rated\nto 55*C). There are 5-in-3 drive cages and backplanes that allow\nfor 5 hard drives to be placed into 3 5.25" drive bays. Consider\npotential heat issues with drives that close together (though many\nbackplanes have dedicated fans), and also the extra expense of these\ndrive cages. Fans and airflow are very important. Please see the\n',(0,r.kt)("a",{parentName:"li",href:"UnRAID_Topical_Index#Fans",title:"wikilink"},"UnRAID Topical Index, Fans"),"\nsection.")),(0,r.kt)("p",null,"== Assembly=="),(0,r.kt)("p",null,"Fitting the components together is usually straightforward, and requires\nlittle prior knowledge or experience. A typical assembly would involve\nthe following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Take the sides off the case."),(0,r.kt)("li",{parentName:"ol"},"Attach the power supply inside the case. Some users recommend that\nthis is done upside down, so that the fan opening is inside the\ncase."),(0,r.kt)("li",{parentName:"ol"},"Install the 9 standoff screws to the 'floor' of the case. Look at\nthe motherboard to identify where to place them -- they need to\ncorrespond with the motherboard holes that have a 'star' pattern of\nsolder."),(0,r.kt)("li",{parentName:"ol"},"Put the metal backing panel into the case. This makes the\nkeyboard/mouse/USB/network/etc ports look pretty, and blocks a\nsource of air leaks that may make it hard to get good airflow\nthrough the server."),(0,r.kt)("li",{parentName:"ol"},"With the motherboard outside of the case, install the processor.\nLift the arm on the socket, align the processor and gently place it\nin (align the pins - one corner doesn't have a pin, so make those\nmatch. Close the socket with the arm and latch it."),(0,r.kt)("li",{parentName:"ol"},"Align the CPU heat sink and attach to the socket. Heat sinks are\noften supplied with thermal paste already applied, so there is no\nneed to add separately. However if it is NOT already applied, you\nMUST apply it yourself! NEVER use a CPU and heat sink without\nthermal paste or thermal pad."),(0,r.kt)("li",{parentName:"ol"},"Install the RAM."),(0,r.kt)("li",{parentName:"ol"},"Drop the motherboard into the case and attach with nine rounded head\nscrews. Tighten the screws in a star pattern, little by little -- do\nnot completely tighten one screw before putting in any others."),(0,r.kt)("li",{parentName:"ol"},"Connect the rear fan and processor fan to the motherboard."),(0,r.kt)("li",{parentName:"ol"},"Connect the front panel cables to their respective connectors on the\nmotherboard. These wires are small and don't lock into place.\nCertain plugs are mandatory -- PWR (power switch) and RST (reset\nswitch), for example. Other plugs, such as PWR_LED and HDD_LED, are\noptional, although PWR_LED will be useful, showing when the server\nis on. unRAID does not make use of audio ports, so plugging in the\nfront panel audio is also optional."),(0,r.kt)("li",{parentName:"ol"},"Connect the power cables to the motherboard. Two are usually\nrequired: one big fat one (24 or 20 pin) and small one (4 or 8 pin)."),(0,r.kt)("li",{parentName:"ol"},"Attach a power cable to each SATA hard drive."),(0,r.kt)("li",{parentName:"ol"},"Connect SATA cables from the motherboard to the drives."),(0,r.kt)("li",{parentName:"ol"},"Connect to the network."),(0,r.kt)("li",{parentName:"ol"},"Connect a monitor and keyboard (usually required only for the first\nboot).")),(0,r.kt)("p",null,"==Prepare the USB Flash drive== ",(0,r.kt)("em",{parentName:"p"},"Formatting the USB Flash drive and\ninstalling the unRAID distribution files on it")),(0,r.kt)("p",null,":   ",(0,r.kt)("em",{parentName:"p"},"Main article: ",(0,r.kt)("a",{parentName:"em",href:"USB_Flash_Drive_Preparation",title:"wikilink"},"USB Flash Drive\nPreparation")),"\n:   ",(0,r.kt)("em",{parentName:"p"},"Main section:\n",(0,r.kt)("a",{parentName:"em",href:"USB_Flash_Drive_Preparation#Instructions",title:"wikilink"},"Instructions")),"\n:   ",(0,r.kt)("em",{parentName:"p"},"Troubleshooting section: ",(0,r.kt)("a",{parentName:"em",href:"USB_Flash_Drive_Preparation#If_the_Flash_will_not_boot.2C_read_over_the_following_tips",title:"wikilink"},"If the Flash will not\nboot",".",".."))),(0,r.kt)("p",null,"On any Windows or Linux PC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert the memory stick and format it using FAT or FAT32, and enter\n",(0,r.kt)("strong",{parentName:"li"},"UNRAID")," as the label."),(0,r.kt)("li",{parentName:"ul"},"Get syslinux.exe from ",(0,r.kt)("a",{parentName:"li",href:"http://www.lime-technology.com/dnlds/"},"http://www.lime-technology.com/dnlds/")),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("strong",{parentName:"li"},"syslinux -ma x:")," (where x: is the drive letter for your\nmemory stick) ",(0,r.kt)("strong",{parentName:"li"},"Note for Vista and Windows 7 users: To run it,\nright-click the file and choose 'Run as administrator'")),(0,r.kt)("li",{parentName:"ul"},"Download the distribution you want from\n",(0,r.kt)("a",{parentName:"li",href:"http://www.lime-technology.com/dnlds/"},"http://www.lime-technology.com/dnlds/")," and extract all the files to\nthe memory stick, preserving the folder structure (there should be a\n",(0,r.kt)("em",{parentName:"li"},"config")," folder with files in it)"),(0,r.kt)("li",{parentName:"ul"},"Set the volume name of the memory stick to ",(0,r.kt)("strong",{parentName:"li"},"UNRAID")," (if you forgot\nin the first step above)"),(0,r.kt)("li",{parentName:"ul"},"Safely eject the memory stick from your computer"),(0,r.kt)("li",{parentName:"ul"},"Many users have had problems with these seemingly simple steps,\nbecause unfortunately, there are numerous compatibility issues\nbetween various motherboards and flash drives. The ",(0,r.kt)("a",{parentName:"li",href:"USB_Flash_Drive_Preparation",title:"wikilink"},"USB Flash Drive\nPreparation")," page is a\ncomprehensive guide to USB flash preparation, with many tips and\nalternative steps to try.")),(0,r.kt)("p",null,"==Starting the server== ",(0,r.kt)("em",{parentName:"p"},"Verifying the BIOS settings, the memory, and\nthe networking")),(0,r.kt)("p",null,":   ",(0,r.kt)("em",{parentName:"p"},"Main article: ",(0,r.kt)("a",{parentName:"em",href:"USB_Flash_Drive_Preparation",title:"wikilink"},"USB Flash Drive\nPreparation")),"\n:   ",(0,r.kt)("em",{parentName:"p"},"Main section: ",(0,r.kt)("a",{parentName:"em",href:"USB_Flash_Drive_Preparation#Booting_unRAID_Server",title:"wikilink"},"Booting unRAID\nServer"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Before plugging in the USB Flash drive, boot the machine and enter\nthe BIOS settings screens, sometimes known as the CMOS settings.\nThis is often done by pressing the \\<Del",">"," or \\<Delete",">"," key during\nthe early part of the boot process, but may instead require the\n",(0,r.kt)("inlineCode",{parentName:"li"},"<F2>"),"{=html} key, or the ",(0,r.kt)("inlineCode",{parentName:"li"},"<F1>"),"{=html} key, or the ",(0,r.kt)("inlineCode",{parentName:"li"},"<F10>"),"{=html}\nkey, or some other key or combination of keys. Please check your\nmotherboard manual."),(0,r.kt)("li",{parentName:"ol"},"Check that all of the drives are recognized by the BIOS and/or add\non controllers. However there are exceptions where some drives and\ncontrollers won't appear in the BIOS, but will still be available\nto unRAID later in the boot process."),(0,r.kt)("li",{parentName:"ol"},"Power down the server, install the USB stick, reboot, and again go\ninto the BIOS settings."),(0,r.kt)("li",{parentName:"ol"},"Configure the BIOS so that the motherboard uses the USB Flash drive\nas the boot device. The option is often labeled as 'USB-HDD' or\n'forced FDD', but there are other choices that may also work."),(0,r.kt)("li",{parentName:"ol"},"Confirm that you can boot from the USB stick - you should get a boot\nmenu with at least 2 choices, ",(0,r.kt)("strong",{parentName:"li"},"unRAID")," and ",(0,r.kt)("strong",{parentName:"li"},"memtest"),"."),(0,r.kt)("li",{parentName:"ol"},"Boot into ",(0,r.kt)("strong",{parentName:"li"},"memtest")," and let it run for 2 complete cycles. Later\nyou might want to come back and run it overnight, but 2 cycles\nshould give you pretty good confidence that you don't have any\nmemory errors."),(0,r.kt)("li",{parentName:"ol"},"Press the \\<Esc",">"," key to reboot, and this time let unRAID start.")),(0,r.kt)("p",null,"You will first see a command line prompt on the monitor. Type ",(0,r.kt)("strong",{parentName:"p"},"root"),"\nand press the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Enter>"),"{=html} key, no password will be needed.\n''(Later, you may want to set a root password on the ",(0,r.kt)("strong",{parentName:"p"},"Users")," tab of\nthe unRAID Web Management pages.)"),(0,r.kt)("p",null,"Verify that you have an IP address by typing ",(0,r.kt)("strong",{parentName:"p"},"ifconfig")," and pressing\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"<Enter>"),"{=html} key. You should get an output similar to this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eth0\xa0\xa0\xa0\xa0\xa0\xa0Link\xa0encap:Ethernet\xa0\xa0HWaddr\xa000:1A:4D:27:13:8A"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"**`inet addr:10.0.1.57`**`Bcast:10.0.255.255\xa0\xa0Mask:255.255.0.0`\\\n`UP\xa0BROADCAST\xa0NOTRAILERS\xa0RUNNING\xa0MULTICAST\xa0\xa0MTU:1500\xa0\xa0Metric:1`\\\n`RX\xa0packets:16261\xa0errors:0\xa0dropped:0\xa0overruns:0\xa0frame:0`\\\n`TX\xa0packets:2850\xa0errors:0\xa0dropped:0\xa0overruns:0\xa0carrier:0`\\\n`collisions:0\xa0txqueuelen:1000`\\\n`RX\xa0bytes:1067783\xa0(1.0\xa0MiB)\xa0\xa0TX\xa0bytes:1193253\xa0(1.1\xa0MiB)`\\\n`Interrupt:21\xa0Base\xa0address:0xa000`\\\n"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"lo\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Link\xa0encap:Local\xa0Loopback"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"inet\xa0addr:127.0.0.1\xa0\xa0Mask:255.0.0.0"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"UP\xa0LOOPBACK\xa0RUNNING\xa0\xa0MTU:16436\xa0\xa0Metric:1"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"RX\xa0packets:0\xa0errors:0\xa0dropped:0\xa0overruns:0\xa0frame:0"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"TX\xa0packets:0\xa0errors:0\xa0dropped:0\xa0overruns:0\xa0carrier:0"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"collisions:0\xa0txqueuelen:0"),"\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"RX\xa0bytes:0\xa0(0.0\xa0b)\xa0\xa0TX\xa0bytes:0\xa0(0.0\xa0b)")),(0,r.kt)("p",null,"On a computer that is on the same network, open a browser and go to:"),(0,r.kt)("p",null,":   ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://tower"},"http://tower"))),(0,r.kt)("p",null,"This should take you to the unRAID Web Management 'Main' page, where\nalmost all unRAID setup and management of your server is handled."),(0,r.kt)("p",null,"If you are using a Mac, you may initially need to use your server's IP\naddress instead of 'tower'. For further instruction, please see the\n",(0,r.kt)("a",{parentName:"p",href:"FAQ#Apple_Mac_Questions",title:"wikilink"},"FAQ, Apple Mac Questions")," section."),(0,r.kt)("p",null,"==Configuring and starting the array== ",(0,r.kt)("em",{parentName:"p"},"Preparing the drives and setting\nup the array")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"http://tower"},"http://tower"))),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Main")," Page, select ",(0,r.kt)("strong",{parentName:"li"},"Devices")," from the menu."),(0,r.kt)("li",{parentName:"ol"},"In your Disk devices, verify that all the hard drives are showing\nup, by clicking on any of the drive dropdown boxes. If not, then you\neither have connected them to an unsupported device, or you forgot\nto connect them, or there is a loose connection in the power or data\ncables."),(0,r.kt)("li",{parentName:"ol"},"The parity drive must be the largest, or equal to the largest data\ndrive. You can assign it now, or do it later."),(0,r.kt)("li",{parentName:"ol"},"Assign the other drives to be data disks, in whatever order you\nwish, and to whatever slot you decide."),(0,r.kt)("li",{parentName:"ol"},"Go back to the Main screen and Start the array. If you have assigned\nthe parity drive, then a parity sync will start."),(0,r.kt)("li",{parentName:"ol"},"Copy your data from your workstations / existing servers to the data\ndisks."),(0,r.kt)("li",{parentName:"ol"},"If you have assigned the parity drive, then run a manual parity\ncheck - make sure it completes with 0 sync errors."),(0,r.kt)("li",{parentName:"ol"},"Run smartctl on each drive to make sure that no serious errors have\ndeveloped.")),(0,r.kt)("p",null,"There are two optional but recommended steps that may alter this order:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before Step 1, install the\n",(0,r.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=2817.0"},"Preclear"),"\nscript and run it on each of your drives. (Several of these can be\nrun in parallel, as these tests take time). This script really runs\nthe drives through their paces, and if they have any SMART errors\nthey will likely be detected before you assign them to your array.\nFor more information, see the ",(0,r.kt)("a",{parentName:"p",href:"UnRAID_Add_Ons#Preclear_Disk",title:"wikilink"},"#Preclear\nDisk")," addon.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you have a lot of data to transfer over, you can copy it faster\nif the parity drive has not been installed yet. But make sure you\ninstall and build parity before you delete backups of anything you\ntransfer to the array."))),(0,r.kt)("p",null,"== Shares =="),(0,r.kt)("p",null,"By default, unRAID creates a share for each disk in the array (eg.\n","\\","\\","tower","\\","disk1, ","\\","\\","tower","\\",'disk2, etc). However, unRAID also supports\nthe concept of User Shares. You can create folders in each of the disk\nshares, and then a user folder will "aggregate" all of the content\nfrom each share into one share with that folder name. So, if you have\n',"\\","\\","tower","\\","disk1","\\","DVD and ","\\","\\","tower","\\","disk2","\\","DVD, a user share can be\ncreated for ","\\","\\","tower","\\",'DVD. To turn on user shares, go to the Shares\nmenu item. Select an option from the User Shares dropdown. If you want\nthe shares to be read-only, select "Export read-only."'),(0,r.kt)("p",null,"== Security =="),(0,r.kt)("p",null,'You can set passwords for "root" and any other user you define. You\ncan limit specific shares to specific users, and restrict specific users\nfrom write permission while granting write permission to others. This is\nall configured per share on the Share page. Basic "root" security is\navailable on all versions of unRAID, but User Security is only available\nwith an unRAID Plus or Pro license. All security settings can be changed\non the Security page. To delete a user, delete the user\'s name and\npassword and press Save.'),(0,r.kt)("p",null,"== Helpful Info =="),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"Telnet",title:"wikilink"},"Telnet")," into the server, either using the\nbuilt in ",(0,r.kt)("a",{parentName:"p",href:"Telnet",title:"wikilink"},"Telnet")," app or\n",(0,r.kt)("a",{parentName:"p",href:"Telnet#PuTTY",title:"wikilink"},"PuTTY")," (a free download). Once you Telnet in\n(or use the console on the server), you can run important Linux commands\nsuch as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"top"),": similar to the task manager in Windows, press q to exit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"df -h"),": tells you how much space is left on your drives"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shutdown -h now"),": tells the system to shut down in an unclean\nway, right now ",(0,r.kt)("strong",{parentName:"li"},"(not recommended!)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shutdown -r now"),": tells the system to reboot in an unclean way,\nright now ",(0,r.kt)("strong",{parentName:"li"},"(not recommended!)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ifconfig"),": tells the IP configuration (similar to ipconfig in\nwindows)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tail -n ","#"," ",(0,r.kt)("inlineCode",{parentName:"strong"},"<file>"),"{=html}"),": display the last ","#"," lines of\n",(0,r.kt)("inlineCode",{parentName:"li"},"<file>"),"{=html}"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ls"),": similar to ",(0,r.kt)("strong",{parentName:"li"},"dir")," in DOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"du -s ",(0,r.kt)("inlineCode",{parentName:"strong"},"<directory>"),"{=html}"),": how big a certain directory is"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mount"),": shows you the mounted file systems"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"smbmount //server/share directory"),": mount a Windows (or Samba)\nshare to the given directory ","-","- this is useful for copying files\nfrom one server to the other (will be faster than copying in Windows\nExplorer)"),(0,r.kt)("li",{parentName:"ul"},"There are more console commands listed on the\n",(0,r.kt)("a",{parentName:"li",href:"Console",title:"wikilink"},"Console")," wiki page, and much more about\nconsoles and using Linux in the ",(0,r.kt)("a",{parentName:"li",href:"FAQ#unRAID_Console_and_Addon_Questions",title:"wikilink"},"unRAID Console and Addon\nQuestions"),"\nsection of the ",(0,r.kt)("a",{parentName:"li",href:"FAQ",title:"wikilink"},"FAQ"),".")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Category:_Getting_started",title:"wikilink"},"Category: Getting started"),"\n",(0,r.kt)("a",{parentName:"p",href:"Category:_How_To",title:"wikilink"},"Category: How To")))}u.isMDXComponent=!0}}]);