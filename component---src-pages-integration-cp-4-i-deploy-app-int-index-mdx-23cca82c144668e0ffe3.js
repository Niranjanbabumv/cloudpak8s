(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var a=n("pOBw"),r=n("q1tI"),o=n.n(r),i=n("NmYn"),l=n.n(i),c=n("OKom"),s=n("k4MR"),b=n("TSYQ"),p=n.n(b),m=n("QH2O"),u=n("qKvR"),d=function(e){var t,n=e.title,a=e.tabs,r=void 0===a?[]:a;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},n)))))},O=n("pEPl"),h=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,a=O.data.site.siteMetadata.repository,r=n||a,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},g=n("FCXl"),f=(n("Oyvg"),n("Wbzz")),N=n("I8xM");var y=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===a,i=new RegExp(a+"(?!-)"),c=n.replace(i,r);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(f.Link,{className:N.link,to:""+c},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},a}(o.a.Component),v=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,r=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,O=b.tabs,h=b.title,f=b.theme,N=b.description,w=b.keywords,k=a.data.site.pathPrefix,C=k?r.pathname.replace(k,""):r.pathname,x=O?C.split("/").filter(Boolean).slice(-1)[0]||l()(O[0],{lower:!0}):"";return Object(u.b)(s.a,{tabs:O,homepage:!1,theme:f,pageTitle:h,pageDescription:N,pageKeywords:w,titleType:m},Object(u.b)(d,{title:o?Object(u.b)(o,null):h,label:"label",tabs:O}),O&&Object(u.b)(y,{slug:C,tabs:O,currentTab:x}),Object(u.b)(v.a,{padded:!0},n,Object(u.b)(j,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:r,slug:C,tabs:O,currentTab:x}),Object(u.b)(c.a,null))}},hsK8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},c=l("AnchorLinks"),s=l("AnchorLink"),b={_frontmatter:i},p=r.a;function m(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,o({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c,{mdxType:"AnchorLinks"},Object(a.b)(s,{mdxType:"AnchorLink"},"Introduction"),Object(a.b)(s,{mdxType:"AnchorLink"},"Prepare Installation"),Object(a.b)(s,{mdxType:"AnchorLink"},"Begin Installation"),Object(a.b)(s,{mdxType:"AnchorLink"},"Validate installation")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Introduction")),Object(a.b)("p",null,"This page contains guidance on how to configure the App Connect Enterprise\n(ACE) on the Cloud Pak for Integration."),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Prepare Installation")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Ensure you have followed all of the steps in the\n",Object(a.b)("a",o({parentName:"li"},{href:"../onprem-online"}),"onprem-online")," or\n",Object(a.b)("a",o({parentName:"li"},{href:"../onprem-offline"}),"onprem-offline")),Object(a.b)("li",{parentName:"ol"},"Ensure permissions are set in your ",Object(a.b)("inlineCode",{parentName:"li"},"ace")," namespace",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"oc adm policy add-scc-to-group ibm-anyuid-scc system:serviceaccounts:ace\noc adm policy add-scc-to-group anyuid system:serviceaccounts:ace\n")))),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Begin Installation")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to CP4I Platform Home. Click ",Object(a.b)("strong",{parentName:"li"},"Create instance")," inside\nthe ",Object(a.b)("strong",{parentName:"li"},"App Connect")," tile."),Object(a.b)("li",{parentName:"ol"},"A window will pop up with a description of the requirements for\ninstalling. Click ",Object(a.b)("strong",{parentName:"li"},"Continue")," to the helm chart deployment\nconfiguration."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("strong",{parentName:"li"},"Overview")," to view the chart information and pre-reqs\nthat were covered in ",Object(a.b)("a",o({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation"),"."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("strong",{parentName:"li"},"Configure")),Object(a.b)("li",{parentName:"ol"},"Enter the Helm release name. In our example, ",Object(a.b)("strong",{parentName:"li"},"ace")),Object(a.b)("li",{parentName:"ol"},"Enter Target Namespace - ",Object(a.b)("strong",{parentName:"li"},"ace")),Object(a.b)("li",{parentName:"ol"},"Select a Cluster - ",Object(a.b)("strong",{parentName:"li"},"local-cluster"),"."),Object(a.b)("li",{parentName:"ol"},"Check the license agreement."),Object(a.b)("li",{parentName:"ol"},"Under Parameters -> Quick start",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Ingress - icp-proxy address defined during installation"))),Object(a.b)("li",{parentName:"ol"},"Click All Parameters"),Object(a.b)("li",{parentName:"ol"},"Under Server Chart Repository - make sure it is set to the right one\nfor your install (local registry or IBM Entitled Registry)"),Object(a.b)("li",{parentName:"ol"},"Uncheck production usage"),Object(a.b)("li",{parentName:"ol"},"Name of the namespace that ICP4I is installed into - this is where\nyour Platform Navigator is installed"),Object(a.b)("li",{parentName:"ol"},"Image Pull Secret -> Set to ",Object(a.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(a.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your ace\nnamespace.  Use ",Object(a.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the exact value for your environment."),Object(a.b)("li",{parentName:"ol"},"Further down, find the section on Persistence. You can uncheck this or\nleave checked and refer to an existing pvc or storageclass.  Make sure you\nput the values in the appropriate spot.  If unsure of what is available,\nuse ",Object(a.b)("inlineCode",{parentName:"li"},"oc get sc")," or ",Object(a.b)("inlineCode",{parentName:"li"},"oc get pvc")," respectively."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"NOTE"),": Leave the Persistent Volume Claim field blank. The HELM\nrelease will generate one for you. If you use an existing claim in use\nalready, your container(s) will not start up in the pod. In the storage\nclass field, enter a file based storage such as ",Object(a.b)("inlineCode",{parentName:"li"},"ibmc-file-gold"),"\nor ",Object(a.b)("inlineCode",{parentName:"li"},"ibmc-file-bronze.")," Note that App Connect requires File (not block)\nbased storage to work properly."),Object(a.b)("li",{parentName:"ol"},"Click Install to complete.  Once the pods are up you can then deploy\nintegration .bar files.  See\n",Object(a.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSTTDS_11.0.0/com.ibm.ace.icp.doc/icp0015_.htm"}),"here"),"\nfor more info on this topic.")),Object(a.b)("h3",null,Object(a.b)("strong",{parentName:"h3"},"Validate installation")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"View all pods running\n",Object(a.b)("img",o({parentName:"li"},{src:"/assets/img/integration/deploy-integration/4.ace-pods.png",alt:null})))))}m.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-app-int-index-mdx-23cca82c144668e0ffe3.js.map