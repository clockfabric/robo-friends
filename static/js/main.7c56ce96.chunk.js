(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(14),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),m=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot".concat(t)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))}}]),t}(a.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.robotsProp.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})});return r.a.createElement("div",null,e)}}]),t}(r.a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:this.props.searchChange,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))}}]),t}(r.a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{overflowY:"scroll",height:"750px"}},this.props.children)}}]),t}(r.a.Component),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return this.state.robots.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{id:"logoText",className:"f1"},"RoboFriends"),r.a.createElement(p,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(b,{robotsProp:t}))):r.a.createElement("div",null,r.a.createElement("h1",null,"Loading..."))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.7c56ce96.chunk.js.map