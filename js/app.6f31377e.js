(function(e){function t(t){for(var g,i,l=t[0],r=t[1],A=t[2],B=0,Y=[];B<l.length;B++)i=l[B],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&Y.push(n[i][0]),n[i]=0;for(g in r)Object.prototype.hasOwnProperty.call(r,g)&&(e[g]=r[g]);o&&o(t);while(Y.length)Y.shift()();return a.push.apply(a,A||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],g=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(g=!1)}g&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var g={},n={app:0},a=[];function i(t){if(g[t])return g[t].exports;var s=g[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=g,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var g in e)i.d(s,g,function(t){return e[t]}.bind(null,g));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/website/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var A=0;A<l.length;A++)t(l[A]);var o=r;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var g=s("8a23"),n=s.n(g);n.a},"0485":function(e,t,s){e.exports=s.p+"img/dart.c979b430.png"},"0bb8":function(e,t,s){e.exports=s.p+"img/go.680112de.png"},1027:function(e,t,s){e.exports=s.p+"img/2.91d2ed50.jpg"},"14d3":function(e,t){e.exports="data:image/png;base64,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"},"176c":function(e,t,s){e.exports=s.p+"img/cs.de83b3ac.png"},"1c13":function(e,t,s){e.exports=s.p+"img/bash.0e01cc2b.png"},"1c94":function(e,t,s){e.exports=s.p+"img/pacmanagers.386998f2.png"},2507:function(e,t,s){e.exports=s.p+"img/4.8c2d59e0.jpg"},2632:function(e,t,s){e.exports=s.p+"img/java.426d5f18.png"},"27af":function(e,t,s){e.exports=s.p+"img/flutter.9c762fd9.png"},"294f":function(e,t,s){e.exports=s.p+"img/twn.21399684.png"},"30d0":function(e,t,s){e.exports=s.p+"img/10.61f542bf.jpg"},"30e0":function(e,t,s){e.exports=s.p+"img/1.f190275e.jpg"},"3a19":function(e,t,s){e.exports=s.p+"img/profile.514415cf.jpg"},"45df":function(e,t,s){e.exports=s.p+"img/macos.e269364c.png"},"477d":function(e,t,s){e.exports=s.p+"img/raspbian.fe7ae50a.png"},"498a0":function(e,t,s){e.exports=s.p+"img/3.ddbf8c84.jpg"},"49f2":function(e,t,s){e.exports=s.p+"img/5.a4ffbc55.jpg"},"56a6":function(e,t){e.exports="data:image/png;base64,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"},"56d7":function(e,t,s){"use strict";s.r(t);s("ac1f"),s("5319"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var g=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"back"},[s("v-app",{attrs:{id:"app"}},[s("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[s("v-tabs",{attrs:{"fixed-tabs":""}},[s("v-tab",{attrs:{to:"/home"}},[e._v("Home")]),s("v-tab",{attrs:{to:"/skills"}},[e._v("Skills")]),s("v-tab",{attrs:{to:"/experience"}},[e._v("Experience")]),s("v-tab",{attrs:{to:"/gallery"}},[e._v("Gallery")])],1),s("v-spacer"),s("router-view")],1)],1)],1)},a=[],i={name:"App",components:{},data:function(){return{}}},l=i,r=(s("034f"),s("2877")),A=s("6544"),o=s.n(A),B=s("7496"),Y=s("a523"),c=s("2fa4"),W=s("71a3"),F=s("fe57"),p=Object(r["a"])(l,n,a,!1,null,null,null),h=p.exports;o()(p,{VApp:B["a"],VContainer:Y["a"],VSpacer:c["a"],VTab:W["a"],VTabs:F["a"]});var m=s("f309");g["a"].use(m["a"]);var C=new m["a"]({}),d=s("8c4f"),f=function(){var e=this,t=e.$createElement,g=e._self._c||t;return g("v-container",{attrs:{fluid:""}},[g("v-row",[g("v-col",{attrs:{cols:"12"}},[g("v-row",{staticStyle:{height:"150px"}})],1),g("v-col",{attrs:{cols:"12"}},[g("v-row",{attrs:{justify:"center"}},[g("v-col",{attrs:{cols:"12",md:"4"}},[g("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[g("v-list-item",{attrs:{"three-line":""}},[g("v-list-item-content",[g("v-list-item-title",{staticClass:"headline mb-1"},[e._v("Jianyan (Simon) Li")]),g("v-list-item-subtitle",[e._v("University of Waterloo, Software Engineering")]),g("div",{staticClass:"overline mb-4"},[e._v("2018 - 2023")])],1),g("v-list-item-avatar",{staticClass:"profile",attrs:{tile:"",size:"80",color:"grey"}},[g("v-img",{attrs:{src:s("3a19")}})],1)],1),g("v-card-actions",[g("v-btn",{attrs:{text:"",href:"https://www.linkedin.com/in/jianyan-simon-li-uwaterloo/",target:"_blank"}},[e._v("LinkedIn")]),g("v-btn",{attrs:{text:"",href:"https://github.com/Simonliuwaterloo",target:"_blank"}},[e._v("GitHub")]),g("v-btn",{attrs:{text:"",href:"mailto:jianyan.li@edu.uwaterloo.ca",target:"_blank"}},[e._v("Email")])],1)],1)],1)],1)],1)],1)],1)},u=[],I={name:"Home",data:function(){return{}}},G=I,E=s("8336"),w=s("b0af"),Q=s("99d9"),U=s("62ad"),v=s("adda"),R=s("da13"),Z=s("8270"),b=s("5d23"),P=s("0fd9"),D=Object(r["a"])(G,f,u,!1,null,null,null),L=D.exports;o()(D,{VBtn:E["a"],VCard:w["a"],VCardActions:Q["a"],VCol:U["a"],VContainer:Y["a"],VImg:v["a"],VListItem:R["a"],VListItemAvatar:Z["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VRow:P["a"]});var x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ma-4"},e._l(this.skills,(function(t,g){return s("div",{key:g},[s("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"8","max-width":"800"}},[s("div",{staticClass:"text-center"},[s("h3",{staticClass:"title"},[e._v(e._s(g))])]),s("v-slide-group",{staticClass:"pa-4",attrs:{"show-arrows":!0,"center-active":!1}},e._l(t,(function(t,g){return s("v-slide-item",{key:g},[s("v-card",{staticClass:"ma-4",attrs:{color:"#e1f4f3",height:"200",width:"200"}},[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-content",[s("v-img",{attrs:{src:t.img,contain:"",width:"80",height:"80"}}),s("v-list-item-title",{staticClass:"headline mb-1"},[e._v(e._s(t.name))]),s("v-list-item-subtitle",[e._v(e._s(t.des))])],1)],1)],1)],1)})),1)],1),s("v-row",{staticStyle:{height:"20px"}})],1)})),0)},y=[],j={name:"Skills",data:function(){return{skills:{Languages:[{name:"Python",des:"scripting, ETL pipelines, data science",img:s("76fe")},{name:"Java",des:"mobile",img:s("2632")},{name:"JavaScript",des:"Node.js, backend design, frontend design",img:s("f2da")},{name:"C++",des:"embedded systems",img:s("8d62")},{name:"Dart",des:"mobile development",img:s("0485")},{name:"C#",des:"embedded system, LLRP protocol",img:s("176c")},{name:"Go",des:"backend design",img:s("0bb8")},{name:"SQL",des:"",img:s("b96d")},{name:"MongoDB",des:"",img:s("9973")}],"Frameworks/Libraries":[{name:"Vue.js",des:"fronetnd development",img:s("d191")},{name:"Flutter",des:"mobile development",img:s("27af")},{name:"NumPy",des:"data science",img:s("789e")},{name:"pandas",des:"data science",img:s("d44d")},{name:"scikit-learn",des:"data science",img:s("cb13")},{name:"Matplotlib",des:"data visualization",img:s("ccc6")}],"Commandline tools":[{name:"Git",des:"version control",img:s("14d3")},{name:"Bash",des:"shell",img:s("1c13")},{name:"Vim",des:"code editor",img:s("bb7b")},{name:"PowerShell",des:"shell",img:s("7673")},{name:"Package Managers",des:"pacman, apt, npm",img:s("1c94")}],"Operating Systems":[{name:"macOS",des:"For everyday use and programming",img:s("45df")},{name:"Windows",des:"Microsoft® Office suite, programming",img:s("9579")},{name:"Manjaro",des:"I love pacman",img:s("e224")},{name:"Ubuntu",des:"Gets the job done",img:s("f6a2")},{name:"Raspbian",des:"",img:s("477d")}]}}}},M=j,k=s("8dd9"),S=s("7efd"),J=s("9dbe"),z=Object(r["a"])(M,x,y,!1,null,null,null),V=z.exports;o()(z,{VCard:w["a"],VImg:v["a"],VListItem:R["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VRow:P["a"],VSheet:k["a"],VSlideGroup:S["b"],VSlideItem:J["a"]});var O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ma-4",attrs:{id:"expeience"}},e._l(this.jobs,(function(t,g){return s("v-card",{key:g,staticClass:"ma-4",attrs:{color:"#e1f4f3"}},[s("v-list-item",[s("v-list-item-content",[s("v-img",{attrs:{src:t.img,contain:"",width:"80",height:"80"}}),s("v-list-item-title",{staticClass:"headline mb-1"},[e._v(e._s(t.position))]),s("v-list-item-subtitle",[e._v(e._s(t.time))])],1)],1),e._l(t.responsibilities,(function(t,g){return s("v-list-item",{key:g},[e._v(" "+e._s(t)+" ")])}))],2)})),1)},H=[],T={name:"Experience",data:function(){return{jobs:[{company:"Wish",position:"Software Engineer ",time:"January 2022 – April 2022",img:s("a220"),responsibilities:["Worked on Entity Resolution team and discovered more than 100k merchant entities","Developed microservices using Python, GraphQL, and MongoDB under timing constraints","Designed and implemented gRPC APIs to help more than 2k Wish merchants link their accounts","Created an internal tool using Cytoscape.js and React to visualize merchant fraud graph","Built Business Intelligence dashboards to monitor KPIs using Apache Superset and SQL","Created Grafana dashboards to monitor microservice metrics, such as latency and failure reasons"]},{company:"ActiveState Software Inc.",position:"Developer",time:"May 2021 – August 2021",img:s("aa6e"),responsibilities:["Developed scalable ETL pipelines using Python (with Argo framework), SQL and Kafka","Achieved a performance increase of 500 percent by refactoring pipelines using batch-processing","Designed a data pipeline from scratch to source packages using GitHub API. Ran design meetings to discuss with coworkers from different teams","Created tools to automate development workflows, reduced time to publish a workflow by half","Monitored pipeline health. Solved multiple production issues under time constraint"]},{company:"HubHead Corp.",position:"Developer",time:"September 2020 - December 2020",img:s("56a6"),responsibilities:["Developed Enterprise Asset Management Systems (EAM) in Java/Groovy","Led the localization of software solution, increased number of supported languages from 1 to 4","Wrote Groovy scripts that validates data integrity and fixes data issues to replace manual data validation, increased data validation speed by 100 times","Created a program that helps customers sanitize bill of materials (BOM) records","Wrote Groovy scripts that convert SAP export files to internal import files using Apache POI"]},{company:"University of Waterloo",position:"Research Assistant",time:"January 2020 - April 2020",img:s("997b"),responsibilities:["Worked on a wireless and batteryless user interface system based on radio wave technology, and was in charge of all software involved","Wrote code to collect, process and classify data from RFID reader in real time using Python, C# and Go","Designed a multi-level classification algorithm using machine learning techniques like SVM and signal processing techniques like downsampling and filtering","Trained said algorithm using cross-validation, resulted in a significant boost of accuracy to above 90 percent","Built high performance servers with Go and Python to handle real time data-collection and classification algorithm","Built front end UI using HTML, CSS and Chart.js to demonstrate user input and live signal","Designed scalable architecture that increased system coverage area by 4 times"]},{company:"Pelmorex Corp.",position:"Web QA Developer",time:"January 2019 - April 2019",img:s("294f"),responsibilities:["Worked on projects with test-driven-development process in an Agile environment, participated in and held scrums","Collaborated with other developers to design testing strategies in order to support new features and increased website traffic","Took initiative as a self-starter to independently solve bugs in Production level code","Wrote and implemented tests against microservices in JavaScript","Designed APIs using Express.js framework, worked with Vue.js and Nuxt.js framework, familiar with Node.js asynchronous features","Tested using Jest, Mocha, Ava and PHPUnit framework, wrote end-to-end tests with Puppeteer, Selenium and created load tests with k6","Wrote PowerShell scripts to schedule tests and output test outcome to file","Debugged Node.js applications in docker containers and containerized several Node.js applications/tests with Docker","Monitored and debugged with kubectl, Grafana and Kibana"]}]}}},X=T,N=Object(r["a"])(X,O,H,!1,null,null,null),K=N.exports;o()(N,{VCard:w["a"],VImg:v["a"],VListItem:R["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"]});var q=function(){var e=this,t=e.$createElement,g=e._self._c||t;return g("div",{staticClass:"ma-10",attrs:{id:"gallery"}},[g("v-carousel",{attrs:{height:"100%"}},e._l(10,(function(e){return g("v-carousel-item",{key:e},[g("v-img",{attrs:{src:s("c0a6")("./"+e+".jpg"),contain:"","max-height":"600"}})],1)})),1)],1)},_=[],$={name:"Gallery",data:function(){return{}}},ee=$,te=s("5e66"),se=s("3e35"),ge=Object(r["a"])(ee,q,_,!1,null,null,null),ne=ge.exports;o()(ge,{VCarousel:te["a"],VCarouselItem:se["a"],VImg:v["a"]}),g["a"].config.productionTip=!1,g["a"].use(d["a"]);var ae=[{path:"/home",name:"home",component:L},{path:"/skills",name:"skills",component:V},{path:"/experience",name:"experience",component:K},{path:"/gallery",name:"gallery",component:ne}],ie=new d["a"]({routes:ae});new g["a"]({vuetify:C,router:ie,mounted:function(){ie.replace({name:"home"})},render:function(e){return e(h)}}).$mount("#app")},7673:function(e,t,s){e.exports=s.p+"img/ps.a75fb857.png"},"76fe":function(e,t,s){e.exports=s.p+"img/py.b9bbb1d7.png"},"789e":function(e,t,s){e.exports=s.p+"img/np.efb91bd6.png"},"839a":function(e,t,s){e.exports=s.p+"img/9.ecfba486.jpg"},"8a23":function(e,t,s){},"8b6e":function(e,t,s){e.exports=s.p+"img/8.362e88a9.jpg"},"8d62":function(e,t,s){e.exports=s.p+"img/cpp.8f42e018.png"},9579:function(e,t,s){e.exports=s.p+"img/windows.a6367740.png"},9973:function(e,t,s){e.exports=s.p+"img/mongodb.517f9e6c.png"},"997b":function(e,t,s){e.exports=s.p+"img/uw.69c53a32.svg"},a220:function(e,t,s){e.exports=s.p+"img/wish.9ef4f4d0.png"},aa6e:function(e,t,s){e.exports=s.p+"img/as.f445f851.png"},b96d:function(e,t,s){e.exports=s.p+"img/sql.76c2eb43.png"},bb7b:function(e,t,s){e.exports=s.p+"img/vim.c1f1e472.png"},c0a6:function(e,t,s){var g={"./1.jpg":"30e0","./10.jpg":"30d0","./2.jpg":"1027","./3.jpg":"498a0","./4.jpg":"2507","./5.jpg":"49f2","./6.jpg":"ec03","./7.jpg":"ef7f","./8.jpg":"8b6e","./9.jpg":"839a"};function n(e){var t=a(e);return s(t)}function a(e){if(!s.o(g,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return g[e]}n.keys=function(){return Object.keys(g)},n.resolve=a,e.exports=n,n.id="c0a6"},cb13:function(e,t,s){e.exports=s.p+"img/sklearn.7ff01e3b.png"},ccc6:function(e,t,s){e.exports=s.p+"img/matplotlib.5ee22804.png"},d191:function(e,t,s){e.exports=s.p+"img/vue.5a5cf3f6.png"},d44d:function(e,t,s){e.exports=s.p+"img/pd.53a0683d.png"},e224:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwBAMAAAAZD678AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAAA1v1w2v1w1v101v1w1v1z///9olrJbAAAABXRSTlMAwIBgkMDhC9QAAAABYktHRAZhZrh9AAAAB3RJTUUH4gkJCSgfOMSlAgAADVBJREFUeNrt0sEJgDAQRNENWEDSguDdEmwhAftvxRo8SNzwfgfDvLg1tRqvOrLsCteCBRZYYAksgQUWWGAJLIEFFlhgCSyBBRZYYAksgQUWWGAJLIEFFlhgCSyBBRZYYAksgQUWWGAJLIEFFlhgCSyBBRZYYAksgQUWWGAJLIEFFlhgCSyBBRZYYAksgQUWWGCBBZbAAgsssMACS2CBBRZYYIElsMACCyywwBJYYIEFFlhgCSywwAILLLAEFlhggQUWWAILLLDAAgssgQUWWGCBBZbAAgsssMACS2CBBRZYYIElsMACCyywwBJYYIEFFlhgCSywwAILLLAEFlhggQUWWAILLLDAAgssgSWwwAILLIElsMACCyyBJbDAAgssgSWwwAILLIElsMACCyyBJbDAAgssgSWwwAILLIElsMACCyyBJbDAAgssgSWwwAILLIElsMACCyyBJbDAAgssgSWwwAILLIElsMACCyywwBJYYIEFFlhgCSywwAILLLAEFlhggQUWWAILLLDAAgssgQUWWGCBBZbAAgsssMACS2CBBRZYYIElsMACCyywwBJYYIEFFlhgCSywwAILLLAEFlhggQUWWAILLLDAAgssgQUWWGCBBZbAAgsssMACS2AJLLDAAktgCSywwAJLYAkssMACS2AJLLDAAktgCSywwAJLYAkssMACS2AJLLDAAktgCSywwAJLYAkssMACS2AJLLDAAktgCSywwAJLYAkssMACS2AJLLDAAktgCSywwAILLLAEFlhggQUWWAILLLDAAgssgQUWWGCBBZbAAgsssMACS2CBBRZYYIElsMACCyywwBJYYIEFFlhgCSywwAILLLAEFlhggQUWWAILLLDAAgssgQUWWGCBBZbAAgsssMACS2CBBRZYYIElsMACCyywwBJYrgULLLDAElgCCyywwBJYAgsssMASWAILLLDAElgCCyywwBJYAgsssMASWAILLLDAElgCCyywwBJYAgsssMASWAILLLDAElgCCyywwBJYAgsssMASWAILLLDAElgCCyywwAILLIEFFlhggQWWwAILLLDAAktggQUWWGCBJbDAAgsssMASWGCBBRZYYAkssMACCyywBBZYYIEFFlgCCyywwAILLIEFFlhggQWWwAILLLDAAktggQUWWGCBJbDAAgsssMD6rr6v2QnW3EYILLDAAgsssAQWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhQgQUWWGCBBZbAAgsssMACCyywwAJrPVhbS9IFVipYJcuuChZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGD9pQeRUBRtNziJhgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0wOVQwOTo0MDozMCswMDowMHnBlEUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMDlUMDk6NDA6MzArMDA6MDAInCz5AAAAAElFTkSuQmCC"},ec03:function(e,t,s){e.exports=s.p+"img/6.d273837e.jpg"},ef7f:function(e,t,s){e.exports=s.p+"img/7.39a1477d.jpg"},f2da:function(e,t,s){e.exports=s.p+"img/js.0cded3a3.png"},f6a2:function(e,t,s){e.exports=s.p+"img/ubuntu.495b0c4a.png"}});
//# sourceMappingURL=app.6f31377e.js.map