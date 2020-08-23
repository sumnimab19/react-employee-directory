(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),c=a(12),i=a(13),o=a(16),m=a(15);a(22);var u=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"search",placeholder:"Enter Employee Name to search",id:"search"})))};var d=function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("img",{alt:e.firstName,src:e.picture})),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.dob))},h=a(14),f=a.n(h),p=function(){return f.a.get("https://randomuser.me/api/?results=50&nat=us")},E=(a(40),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={originalResults:[],displayResults:[]},e.filterResults=function(e,t){return t.filter((function(t){var a=t.lastName.toLowerCase();return(t.firstName.toLowerCase()+" "+a).includes(e)}))},e.sortResults=function(t){e.setState((function(e){var t=e.displayResults,a=e.sortOrder;return"descending"===a?t.sort((function(e,t){return e.firstName>t.firstName?-1:e.firstName>t.firstName?1:0})):t.sort((function(e,t){return e.firstName<t.firstName?-1:e.firstName>t.firstName?1:0})),{displayResults:t,sortOrder:"descending"===a?"ascending":"descending"}}))},e.handleInputChange=function(t){var a=t.target.value;e.setState((function(t){return{displayResults:a.length>0?e.filterResults(a,t.originalResults):t.originalResults}}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){var a=t.data.results.map((function(e,t){return{image:e.picture.large,firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,dob:e.dob.date,key:t}}));e.setState({originalResults:a,displayResults:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(u,{search:this.state.search,handleInputChange:this.handleInputChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table"},r.a.createElement("tr",{className:"colHeader"},r.a.createElement("th",{scope:"col"},"Photo"),r.a.createElement("th",{style:{cursor:"pointer"},onClick:this.sortResults,id:"name"},"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",{id:"phone"},"Email"),r.a.createElement("th",{id:"email"},"Phone"),r.a.createElement("th",{id:"dob"},"DOB")),this.state.displayResults.map((function(e){return r.a.createElement(d,{picture:e.image,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,dob:e.dob,key:e.key})})))))}}]),a}(n.Component));a(41);var N=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-info"},r.a.createElement("div",null,r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on corrots to sort by 'First Name' or use the search box to narrow your search")))};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(E,null))};s.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2dbf13f6.chunk.js.map