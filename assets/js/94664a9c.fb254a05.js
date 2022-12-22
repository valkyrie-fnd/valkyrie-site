"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7788],{86126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Logging and tracing",sidebar_position:4},l=void 0,o={unversionedId:"get-started/logging-and-tracing",id:"get-started/logging-and-tracing",title:"Logging and tracing",description:"Logging",source:"@site/docs/get-started/logging-and-tracing.md",sourceDirName:"get-started",slug:"/get-started/logging-and-tracing",permalink:"/docs/get-started/logging-and-tracing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tommy",lastUpdatedAt:1671693633,formattedLastUpdatedAt:"Dec 22, 2022",sidebarPosition:4,frontMatter:{title:"Logging and tracing",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Configuration",permalink:"/docs/get-started/configuration"},next:{title:"Player Account Management",permalink:"/docs/get-started/pam"}},g={},p=[{value:"Logging",id:"logging",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Running locally with Jaeger for tracing",id:"running-locally-with-jaeger-for-tracing",level:3},{value:"Profiling",id:"profiling",level:3},{value:"Configuration",id:"configuration",level:3}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("p",null,"Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Structured logging JSON"),(0,r.kt)("li",{parentName:"ul"},"Optional request/response logging"),(0,r.kt)("li",{parentName:"ul"},"Trace information attached if available")),(0,r.kt)("h3",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"Simple metrics are available at http://localhost:8084/monitoring/metrics"),(0,r.kt)("h3",{id:"tracing"},"Tracing"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Supported tracing exporters"),(0,r.kt)("th",{parentName:"tr",align:null},"Docs"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.jaegertracing.io/"},"Jaeger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/open-telemetry/opentelemetry-go/tree/main/exporters/jaeger"},"github"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://zipkin.io/"},"Zipkin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/open-telemetry/opentelemetry-go/tree/main/exporters/zipkin"},"github"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/trace"},"Google Cloud Trace")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/GoogleCloudPlatform/opentelemetry-operations-go"},"github"))))),(0,r.kt)("h3",{id:"running-locally-with-jaeger-for-tracing"},"Running locally with Jaeger for tracing"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start Jaeger in docker",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name jaeger \\\n  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \\\n  -p 5775:5775/udp -p 6831:6831/udp -p 6832:6832/udp -p 5778:5778 -p 16686:16686 \\\n  -p 14250:14250 -p 14268:14268 -p 14269:14269 -p 9411:9411 \\\n  jaegertracing/all-in-one:1.35\n"))),(0,r.kt)("li",{parentName:"ol"},"Set environment variables for Valkyrie.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"TRACING_TYPE=jaeger\nTRACING_URL=http://localhost:14268/api/traces\nTRACING_SERVICE_NAME=valkyrie\n")))),(0,r.kt)("h3",{id:"profiling"},"Profiling"),(0,r.kt)("p",null,"To enable the profiling endpoint set the env variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PPROF=true")," and use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof tool"),"\nto extract runtime data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go tool pprof 'localhost:8084/debug/pprof/profile?seconds=25'\n")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"logging:\n  level: info # debug, info, warn, error, fatal, panic\ntracing:\n  type: jaeger # stdout, jaeger, Zipkin, googleCloudTrace\n  url: 'http://traces-url'\n  service_name: valkyrie\n  google_project_id: ${TRACING_GOOGLE_PROJECT_ID} # if you're using googleCloudTrace\n")))}s.isMDXComponent=!0}}]);