(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{273:function(t,a,s){},274:function(t,a,s){},306:function(t,a,s){"use strict";var e=s(273);s.n(e).a},307:function(t,a,s){"use strict";var e=s(274);s.n(e).a},329:function(t,a,s){"use strict";s(301);var e=s(289),n=(s(304),s(305),{name:"Logo",data:function(){return{show:{small:!1,medium:!1,large:!1}}},mounted:function(){var t=this;setTimeout((function(){return t.show.small=!0}),1e3),setTimeout((function(){return t.show.large=!0}),1200),setTimeout((function(){return t.show.medium=!0}),1400)}}),o=(s(306),s(33)),i=Object(o.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("svg",{attrs:{id:"l5modular-logo","data-name":"L5Modular Logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 879.62627 879.62627"}},[s("transition",{attrs:{name:"fade"}},[t.show.large?s("g",{staticClass:"module",attrs:{id:"Large_Module","data-name":"Large Module"}},[s("polygon",{staticClass:"cls-1",attrs:{points:"282.067 110.67 402.426 141.966 630.696 82.624 510.716 56.138 282.067 110.67"}}),t._v(" "),s("polygon",{staticClass:"cls-2",attrs:{points:"630.696 573.873 402.426 675.214 402.426 142.016 630.696 82.624 630.696 573.873"}})]):t._e()]),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.show.small?s("g",{staticClass:"module",attrs:{id:"Small_Module","data-name":"Small Module"}},[s("polygon",{staticClass:"cls-2",attrs:{points:"654.968 498.594 764.747 451.821 764.747 621.022 654.968 676.948 654.968 498.594"}})]):t._e()]),t._v(" "),s("g",{attrs:{id:"Laravel"}},[s("polygon",{staticClass:"cls-3",attrs:{points:"270.661 549.787 270.661 176.22 150.505 141.885 150.505 676.948 270.661 736.571 402.737 802.109 402.737 606.06 270.661 549.787"}}),t._v(" "),s("polygon",{staticClass:"cls-4",attrs:{points:"654.968 676.948 402.737 802.109 402.737 606.06 654.968 498.594 654.968 676.948"}}),t._v(" "),s("polygon",{staticClass:"cls-4",attrs:{points:"764.747 281.168 654.968 320.239 654.968 498.594 764.747 451.821 764.747 281.168"}}),t._v(" "),s("polygon",{staticClass:"cls-5",attrs:{points:"654.968 498.665 521.495 451.21 270.661 549.787 402.829 606.099 654.968 498.665"}}),t._v(" "),s("polygon",{staticClass:"cls-5",attrs:{points:"630.696 244.91 764.747 281.168 654.968 320.239 521.495 280.6 630.696 244.91"}}),t._v(" "),s("polygon",{staticClass:"cls-5",attrs:{points:"282.067 110.67 402.426 141.966 270.661 176.22 150.814 141.973 282.067 110.67"}}),t._v(" "),s("polygon",{staticClass:"cls-4",attrs:{points:"402.426 498.714 270.661 549.787 270.661 176.22 402.426 141.966 402.426 498.714"}}),t._v(" "),s("polygon",{staticClass:"cls-3",attrs:{points:"654.968 498.665 521.495 451.21 521.495 280.6 654.968 320.239 654.968 498.665"}})]),t._v(" "),s("transition",{attrs:{name:"fade-slow"}},[t.show.medium?s("g",{staticClass:"module",attrs:{id:"Medium_Module","data-name":"Medium Module"}},[s("polygon",{staticClass:"cls-6",attrs:{points:"402.737 606.06 270.661 549.787 270.661 362.046 402.737 409.81 402.737 606.06"}}),t._v(" "),s("polygon",{staticClass:"cls-2",attrs:{points:"654.968 498.594 402.737 606.06 402.737 409.81 654.968 320.239 654.968 498.594"}}),t._v(" "),s("polygon",{staticClass:"cls-1",attrs:{points:"521.495 280.6 654.968 320.239 402.737 409.81 270.661 362.046 521.495 280.6"}})]):t._e()])],1)}),[],!1,null,null,null).exports,l={name:"Home",components:{NavLink:e.a,Logo:i},computed:{data:function(){return this.$page.frontmatter},documentation:function(){return{link:this.data.documentationLink,text:this.data.documentationText}},share:function(){return{link:this.data.shareLink,text:this.data.shareText}},year:function(){return(new Date).getFullYear()}}},r=(s(307),Object(o.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[s("header",[s("logo")],1),s("section",{staticClass:"hero"},[t.data.heroImage?s("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),null!==t.data.heroText?s("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),null!==t.data.tagline?s("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))]):t._e(),t.data.shareText&&t.data.shareLink||t.data.documentationText&&t.data.documentationLink?s("p",{staticClass:"action"},[t.data.shareText&&t.data.shareLink?s("NavLink",{staticClass:"action-button is-decent",attrs:{item:t.share}}):t._e(),t.data.documentationText&&t.data.documentationLink?s("NavLink",{staticClass:"action-button",attrs:{item:t.documentation}}):t._e()],1):t._e()]),t.data.features&&t.data.features.length?s("div",{staticClass:"features"},t._l(t.data.features,(function(a,e){return s("div",{key:e,staticClass:"feature"},[s("h2",[t._v(t._s(a.title))]),s("p",{domProps:{innerHTML:t._s(a.details)}})])})),0):t._e(),s("content",{staticClass:"theme-default-content custom"},[t.data.footer?s("div",{staticClass:"footer"},[t._v(t._s(t.data.footer)),t.data.copyright?s("span",[t._v(" | Copyright © "+t._s(t.year))]):t._e()]):t._e()])])}),[],!1,null,null,null));a.a=r.exports}}]);