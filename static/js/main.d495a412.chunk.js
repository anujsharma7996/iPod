(this.webpackJsonpipod=this.webpackJsonpipod||[]).push([[0],[,,,,,,function(e,t,n){},,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),o=n(9),i=n.n(o),a=(n(15),n(2)),r=n(3),u=n(5),p=n(4),l=(n(16),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"controls-container",children:[Object(l.jsx)("button",{className:"menu-button",onClick:this.props.menuButton,children:Object(l.jsx)("img",{alt:"menu",src:"https://cdn-icons-png.flaticon.com/128/633/633647.png"})}),Object(l.jsx)("button",{className:"rewind-button",children:Object(l.jsx)("img",{alt:"rewind",src:"https://cdn-icons-png.flaticon.com/512/1214/1214533.png"})}),Object(l.jsx)("button",{className:"forward-button",children:Object(l.jsx)("img",{alt:"forward",src:"https://cdn-icons-png.flaticon.com/512/149/149117.png"})}),Object(l.jsx)("button",{className:"play-button",children:Object(l.jsx)("img",{alt:"play",src:"https://cdn-icons-png.flaticon.com/128/1792/1792864.png"})}),Object(l.jsx)("button",{className:"middle-button",onClick:this.props.selectButton,children:Object(l.jsx)("h4",{children:"SELECT"})})]})}}]),n}(c.a.Component),h=j,b=(n(18),n(8),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return this.props.optionsInMenu.map((function(t,n){return Object(l.jsx)("div",{className:e.props.selectedOption===n?"selected":"",children:Object(l.jsx)("p",{children:t})},n)}))}}]),n}(c.a.Component)),d=b,m=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.selectedOption;return Object(l.jsxs)("div",{className:"screen-menu",children:[Object(l.jsx)("h3",{children:"Anuj"}),Object(l.jsx)(d,{optionsInMenu:this.props.optionsInMenu,selectedOption:e})]})}}]),n}(c.a.Component),O=m,g=(n(6),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"screen",children:[Object(l.jsx)("h1",{children:"Games"}),Object(l.jsx)("img",{className:"screen-image",alt:"games",src:"https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"})]})}}]),n}(c.a.Component)),f=g,x=n.p+"static/media/ipod.2a6b9614.jpg",v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"screen-music",children:Object(l.jsx)("img",{id:"music",alt:"music",src:x})})}}]),n}(c.a.Component),w=v,y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"screen",children:[Object(l.jsx)("h1",{children:"CoverFlow"}),Object(l.jsx)("img",{alt:"coverflow",className:"screen-image",src:"https://cdn-icons-png.flaticon.com/128/3342/3342176.png"})]})}}]),n}(c.a.Component),N=y,M=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"screen",children:[Object(l.jsx)("h1",{children:"Settings"}),Object(l.jsx)("img",{alt:"settings",className:"screen-image",src:"https://cdn-icons-png.flaticon.com/512/81/81020.png"})]})}}]),n}(c.a.Component),_=M,C=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"screen-container-outer",children:Object(l.jsxs)("div",{className:"screen-container",children:[-1===this.props.showPage?Object(l.jsx)(O,{selectedOption:this.props.selectedOption,optionsInMenu:this.props.optionsInMenu}):"",0===this.props.showPage&&4===this.props.optionsInMenu.length?Object(l.jsx)(N,{}):"",1===this.props.showPage&&4===this.props.optionsInMenu.length?Object(l.jsx)(w,{songsScreen:this.props.songsScreen}):"",2===this.props.showPage&&4===this.props.optionsInMenu.length?Object(l.jsx)(f,{}):"",3===this.props.showPage&&4===this.props.optionsInMenu.length?Object(l.jsx)(_,{}):""]})})}}]),n}(c.a.Component),k=C,A=(n(19),n(10)),B=n.n(A),I=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).menuButton=function(){e.setState({showPage:-1})},e.selectButton=function(){1===e.temp_selected?e.setState({showPage:e.state.selected,optionsInMenu:e.state.option_music}):e.setState({showPage:e.state.selected})},e.currAngle=0,e.temp_selected=0,e.state={options:["CoverFlow","Music","Games","Settings"],option_music:["All Music","Artists","Albums"],selected:0,showPage:-1},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementsByClassName("controls-container")[0];B.a.Region(t).bind(t,"rotate",(function(t){var n=t.detail.distanceFromLast;e.currAngle+=n,e.currAngle>40?(e.temp_selected++,e.temp_selected=e.temp_selected%e.state.options.length,e.setState({selected:e.temp_selected}),e.currAngle=0):e.currAngle<-40&&(e.temp_selected--,-1===e.temp_selected&&(e.temp_selected=e.state.options.length-1),e.temp_selected=e.temp_selected%e.state.options.length,e.setState({selected:e.temp_selected}),e.currAngle=0)}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(k,{selectedOption:this.state.selected,showPage:this.state.showPage,optionsInMenu:this.state.options,optionMusic:this.state.option_music,songsScreen:this.songs_screen}),Object(l.jsx)(h,{menuButton:this.menuButton,selectButton:this.selectButton})]})}}]),n}(c.a.Component);i.a.render(Object(l.jsx)(I,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.d495a412.chunk.js.map