"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:4,title:"Helm"},i=void 0,o={unversionedId:"get-started/helm",id:"get-started/helm",title:"Helm",description:"Helm chart for Valkyrie",source:"@site/docs/get-started/helm.md",sourceDirName:"get-started",slug:"/get-started/helm",permalink:"/docs/get-started/helm",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Helm"},sidebar:"sidebar",previous:{title:"Docker",permalink:"/docs/get-started/docker"},next:{title:"Player Account Management",permalink:"/docs/get-started/pam"}},s={},p=[{value:"Helm chart for Valkyrie",id:"helm-chart-for-valkyrie",level:2},{value:"Getting started",id:"getting-started",level:3},{value:"Tutorial: installing your first Valkyrie using Helm",id:"tutorial-installing-your-first-valkyrie-using-helm",level:4},{value:"Chart configuration",id:"chart-configuration",level:3},{value:"Application config",id:"application-config",level:4},{value:"Secrets",id:"secrets",level:4},{value:"Cloud provider configuration",id:"cloud-provider-configuration",level:3},{value:"Using GCP for surrounding features",id:"using-gcp-for-surrounding-features",level:4}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"helm-chart-for-valkyrie"},"Helm chart for Valkyrie"),(0,r.kt)("p",null,"Helm is a package manager for Kubernetes. For basic usage and installation please refer to the official ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/quickstart/"},"quickstart guide"),"."),(0,r.kt)("h3",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"The Valkyrie Helm chart is available on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/valkyriefnd/valkyrie-chart"},"Docker Hub")," and can be\ninstalled from there directly by Helm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install valkyrie oci://docker.io/valkyriefnd/valkyrie-chart -v values.yaml\n")),(0,r.kt)("p",null,"The above command will install Valkyrie in the current Kubernetes cluster according to the configuration specified in\n",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,r.kt)("p",null,"For a more detailed example please follow the tutorial below."),(0,r.kt)("h4",{id:"tutorial-installing-your-first-valkyrie-using-helm"},"Tutorial: installing your first Valkyrie using Helm"),(0,r.kt)("p",null,"The following command will install Valkyrie in your currently configured Kubernetes cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install my-valkyrie             \\\n    oci://docker.io/valkyriefnd/valkyrie-chart \\\n    -n playground-valkyrie --create-namespace\n")),(0,r.kt)("p",null,"Let's break down the above command:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It will upgrade (or install if missing) a Helm ",(0,r.kt)("em",{parentName:"li"},"release")," called ",(0,r.kt)("inlineCode",{parentName:"li"},"my-valkyrie")),(0,r.kt)("li",{parentName:"ol"},"The chart will be pulled from ",(0,r.kt)("inlineCode",{parentName:"li"},"oci://docker.io/valkyriefnd/valkyrie-chart")),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("em",{parentName:"li"},"release")," will be installed into ",(0,r.kt)("inlineCode",{parentName:"li"},"playground-valkyrie")," Kubernetes namespace (creating the namespace if missing)")),(0,r.kt)("p",null,"Helm can now be used to manage this ",(0,r.kt)("em",{parentName:"p"},"release"),". Try listing the release using Helm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n playground-valkyrie\n")),(0,r.kt)("p",null,"You should now see the release listed by Helm."),(0,r.kt)("p",null,"In a real scenario you will want to further configure Valkyrie with a ",(0,r.kt)("em",{parentName:"p"},"pam")," and one or more ",(0,r.kt)("em",{parentName:"p"},"providers"),".\nFor the sake of learning, let's upgrade our ",(0,r.kt)("em",{parentName:"p"},"release")," ",(0,r.kt)("inlineCode",{parentName:"p"},"my-valkyrie")," and change the configured logging level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'helm upgrade my-valkyrie                       \\\n    oci://docker.io/valkyriefnd/valkyrie-chart \\\n    --set "config.logging.level=debug"\n    -n playground-valkyrie\n')),(0,r.kt)("p",null,"This should upgrade to a new revision of our ",(0,r.kt)("em",{parentName:"p"},"release")," ",(0,r.kt)("inlineCode",{parentName:"p"},"my-valkyrie")," with the ",(0,r.kt)("em",{parentName:"p"},"value")," ",(0,r.kt)("inlineCode",{parentName:"p"},"config.logging.level")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),",\noverriding the default logging level (",(0,r.kt)("inlineCode",{parentName:"p"},"info"),")."),(0,r.kt)("p",null,"You can also simulate an upgrade using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dry-run")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade my-valkyrie oci://docker.io/valkyriefnd/valkyrie-chart \\\n    -n playground-valkyrie --dry-run\n")),(0,r.kt)("p",null,"This will output the produced kubernetes manifests that would be applied by Helm."),(0,r.kt)("p",null,"To further configure the chart, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#chart-configuration"},"Chart configuration")," section below."),(0,r.kt)("p",null,"Finally, lets cleanup after ourselves by uninstalling the ",(0,r.kt)("em",{parentName:"p"},"release"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall my-valkyrie -n playground-valkyrie\n")),(0,r.kt)("p",null,"This will remove all resources in Kubernetes related to the ",(0,r.kt)("em",{parentName:"p"},"release"),"."),(0,r.kt)("h3",{id:"chart-configuration"},"Chart configuration"),(0,r.kt)("p",null,"Helm charts are configured by supplying ",(0,r.kt)("em",{parentName:"p"},"values"),", typically by a ",(0,r.kt)("em",{parentName:"p"},"values.yaml"),"-file."),(0,r.kt)("p",null,"The chart ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/valkyrie-fnd/valkyrie/blob/main/helm/values.yaml"},"values.yaml")," can be found in the Valkyrie repository on GitHub.\nThis file has all the default values for the Helm chart, but also includes commented parts with example configuration for reference."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can also show the chart values using the command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm show values oci://docker.io/valkyriefnd/valkyrie-chart\n"))),(0,r.kt)("p",null,"Custom values are typically provided to Helm using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v <values.yaml>")," flag when running the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," command."),(0,r.kt)("h4",{id:"application-config"},"Application config"),(0,r.kt)("p",null,"To configure the Valkyrie application (previously described in ",(0,r.kt)("a",{parentName:"p",href:"./configuration"},"Configuration")," section) the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," key is available. Everything configured under the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," key will\nbe available to the running application."),(0,r.kt)("p",null,"Below is a small sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  logging:\n    level: debug\n")),(0,r.kt)("p",null,"In the example above, the key ",(0,r.kt)("inlineCode",{parentName:"p"},"logging.level=debug")," will be configured for the Valkyrie application."),(0,r.kt)("h4",{id:"secrets"},"Secrets"),(0,r.kt)("p",null,"A common use case is to configure a secret for the Valkyrie application (for example an API token).\nThe recommendation is to configure the secret value using a ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," resource in Kubernetes, please refer to the\nofficial Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Secret documentation")," for this."),(0,r.kt)("p",null,"Once the secret has been configured as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," resource, you may refer to the resource name from the Helm chart\nconfiguration. We recommend that you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," key in the Helm chart, which allows the secret to be placed into\nan environment variable for the running container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"env:\n  - name: SOME_PROVIDER_API_TOKEN\n    valueFrom:\n      secretKeyRef:\n        name: 'the-secret-your-created'\n        key: some-provider-api-token\n")),(0,r.kt)("p",null,"You may then reference the environment variable in the application configuration safely without leaking the secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  providers:\n    - name: some_provider\n      url: 'https://api.some.provider'\n      auth:\n        api_key: ${SOME_PROVIDER_API_TOKEN}\n")),(0,r.kt)("h3",{id:"cloud-provider-configuration"},"Cloud provider configuration"),(0,r.kt)("p",null,"In order to provide external access to the valkyrie service a few things will be needed which are\ndependent on the environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"domain names and SSL certificates"),(0,r.kt)("li",{parentName:"ul"},"most likely some sort of IP whitelisting for each provider"),(0,r.kt)("li",{parentName:"ul"},"NAT gateway for egress Valkyrie traffic providing a static IP for provider whitelisting")),(0,r.kt)("h4",{id:"using-gcp-for-surrounding-features"},"Using GCP for surrounding features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SSL: ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs"},"google-managed ssl for GKE")),(0,r.kt)("li",{parentName:"ol"},"IP whitelisting: ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#cloud_armor"},"Google Cloud Armor Ingress security policy")),(0,r.kt)("li",{parentName:"ol"},"Static IP for outgoing traffic: ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/nat/docs/gke-example"},"Set up Cloud NAT with GKE"))))}c.isMDXComponent=!0}}]);