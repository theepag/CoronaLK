(this.webpackJsonpcorona_lk=this.webpackJsonpcorona_lk||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),l=a.n(o),c=a(3),i=a(4),s=a(6),m=a(5),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.hpb.health.gov.lk/api/get-current-statistical").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center",marginTop:100}},r.a.createElement("h1",null," Covid Sri Lanka ")," ",r.a.createElement("br",null),r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png",height:"150"})),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row",style:{fontSize:27,marginTop:80}},r.a.createElement("div",{class:"col-sm"},"Total confirmed cases ",r.a.createElement("br",null),n.local_total_cases),r.a.createElement("div",{class:"col-sm"},"Deaths ",r.a.createElement("br",null),r.a.createElement("span",{style:{color:"red"}},n.local_deaths)),r.a.createElement("div",{class:"col-sm"},"Recovered & Discharged",r.a.createElement("br",null),r.a.createElement("span",{style:{color:"green"}},n.local_recovered," "))))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(12);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.cb2bcf16.chunk.js.map