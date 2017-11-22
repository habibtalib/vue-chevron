webpackJsonp([1],[,function(e,t,n){"use strict";var s=n(3),a=n.n(s),i=Object.keys(a.a).map(function(e){return{label:e,value:e}});t.a={pointDown:!0,thickness:8,duration:1e3,roundEdges:!0,angle:40,easings:i,selectedEasing:"circInOut",color:"#ffffff",fontSize:80}},,,,function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(7),a=n(11);new s.a({el:"#app",render:function(e){return e(a.a)}})},,,,,function(e,t,n){"use strict";function s(e){n(12)}var a=n(13),i=n(64),r=n(0),o=s,c=r(a.a,i.a,!1,o,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var s=n(1),a=n(44),i=n(51),r=n(56);t.a={components:{CodePreview:a.a,Preview:i.a,Props:r.a},data:function(){return{sharedState:s.a}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function s(e){n(45)}var a=n(46),i=n(50),r=n(0),o=s,c=r(a.a,i.a,!1,o,"data-v-cd3618b2",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var s=n(47),a=(n.n(s),n(48)),i=(n.n(a),n(49)),r=n.n(i),o=n(3),c=n.n(o),l=n(1);t.a={name:"CodePreview",components:{Prism:r.a},data:function(){return{sharedState:l.a}},computed:{easing:function(){return c.a[this.sharedState.selectedEasing]}}}},,,,function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code box"},[n("div",{staticClass:"m-b"},[n("h2",[e._v("\n      Install\n    ")]),e._v(" "),n("prism",{attrs:{language:"html"}},[e._v("\nnpm install vue-chevron --save\n    ")])],1),e._v(" "),n("h2",[e._v("Code example")]),e._v(" "),n("div",{staticClass:"code__preview"},[n("prism",{attrs:{language:"html"}},[e._v('\n<template>\n  <div class="example" @click="toggle">\n    <vue-chevron\n      :point-down="pointDown"\n      :duration="duration"\n      :thickness="thickness"\n      :angle="angle"\n      :round-edges="roundEdges"\n    />\n  </div>\n</template>\n\n<script>\nimport VueChevron from \'vue-chevron\';\n\nexport default {\n  name: \'App\',\n  components: {\n    VueChevron\n  },\n  data() {\n    return {\n      pointDown: '+e._s(e.sharedState.pointDown)+",\n      thickness: "+e._s(e.sharedState.thickness)+",\n      duration: "+e._s(e.sharedState.duration)+",\n      angle: "+e._s(e.sharedState.angle)+",\n      roundEdges: "+e._s(e.sharedState.roundEdges)+",\n      easing: "+e._s(e.easing)+"\n    };\n  },\n  methods: {\n    toggle() {\n      this.pointDown = !this.pointDown;\n    }\n  }\n}\n<\/script>\n\n<style>\n.example {\n  color: "+e._s(e.sharedState.color)+";\n  font-size: "+e._s(e.sharedState.fontSize)+"px;\n}\n</style>\n    ")])],1)])},a=[],i={render:s,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function s(e){n(52)}var a=n(53),i=n(55),r=n(0),o=s,c=r(a.a,i.a,!1,o,"data-v-69afe83a",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var s=n(3),a=n.n(s),i=n(1),r=n(54);t.a={name:"Preview",components:{VueChevron:r.a},data:function(){return{sharedState:i.a}},methods:{toggle:function(){this.sharedState.pointDown=!this.sharedState.pointDown}},computed:{easing:function(){return a.a[this.sharedState.selectedEasing]}}}},function(e,t,n){"use strict";function s(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}function a(e,t){o=t.progress<=1?performance.now():o;var n=function n(s){var a=(s-o)/e;if(a>=1)return window.cancelAnimationFrame(r),t.clickProgress=1,void(t.progress=1);t.progress=t.easing(a),r=window.requestAnimationFrame(n)};r=window.requestAnimationFrame(n)}function i(e,t,n,s,a){var i=1===n?t:t+(1-n);i>=1&&(i=1);var r=a+s/2-i*s,o=a-s/2+i*s;return e?r:o}var r=void 0,o=null;t.a={name:"VueChevron",props:{pointDown:{type:Boolean,default:!0},duration:{type:Number,default:1e3},thickness:{type:Number,default:4},angle:{type:Number,default:40},roundEdges:{type:Boolean,default:!0},easing:{type:Function,default:s}},data:function(){return{progress:1,clickProgress:1,reverse:!1,lineLength:30}},computed:{path:function(){var e=this.progress,t=this.triangleSideLengths,n=t.width,s=(t.height,i(this.pointDown,e,this.clickProgress,this.triangleSideLengths.height,this.viewBoxCenter.y)),a=i(!this.pointDown,e,this.clickProgress,this.triangleSideLengths.height,this.viewBoxCenter.y);return"M"+(this.viewBoxCenter.x-n)+","+s+", "+this.viewBoxCenter.x+","+a+" "+(this.viewBoxCenter.x+n)+","+s},triangleSideLengths:function(){var e=this.lineLength*Math.sin(this.angle*(Math.PI/180));return{width:this.lineLength*Math.cos(this.angle*(Math.PI/180)),height:e}},viewBoxCenter:function(){var e=this.viewBoxSize;return{x:e.width/2,y:e.height/2}},viewBoxSize:function(){return{width:Math.ceil(2*this.lineLength+2*this.thickness),height:Math.ceil(2*this.lineLength*Math.sin(this.angle*(Math.PI/180))+2*this.thickness)}}},watch:{pointDown:function(e){this.clickProgress=this.progress,this.progress=0,window.cancelAnimationFrame(r),a(this.duration,this)}},render:function(e){return e("svg",{attrs:{height:50,width:50,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+this.viewBoxSize.width+" "+this.viewBoxSize.height}},[e("title","vue-chevron"),e("path",{attrs:{d:this.path,fill:"none","stroke-linecap":this.roundEdges?"round":"square","stroke-width":this.thickness,stroke:"currentColor"}})])}}},function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("div",{staticClass:"row center-xs"},[n("div",{staticClass:"col-xs-12 col-sm-4 col-md-2"},[n("div",{staticClass:"align-center"},[n("label",[e._v("Color")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sharedState.color,expression:"sharedState.color"}],attrs:{type:"color"},domProps:{value:e.sharedState.color},on:{input:function(t){t.target.composing||e.$set(e.sharedState,"color",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col-xs-12 col-sm-4 col-md-3 col-lg-2 preview__col"},[n("div",{staticClass:"align-center preview__wrap"},[n("div",{staticClass:"preview__svg",style:"color: "+e.sharedState.color+"; font-size: "+e.sharedState.fontSize+"px",on:{click:e.toggle}},[n("vue-chevron",{attrs:{"point-down":e.sharedState.pointDown,duration:e.sharedState.duration,thickness:e.sharedState.thickness,angle:e.sharedState.angle,"round-edges":e.sharedState.roundEdges,easing:e.easing}})],1)])]),e._v(" "),n("div",{staticClass:"col-xs-12 col-sm-4 col-md-2"},[n("div",{staticClass:"align-center"},[n("label",[e._v("Font size ("+e._s(e.sharedState.fontSize)+"px)")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sharedState.fontSize,expression:"sharedState.fontSize",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"150",step:"1"},domProps:{value:e.sharedState.fontSize},on:{__r:function(t){e.$set(e.sharedState,"fontSize",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])])])])},a=[],i={render:s,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function s(e){n(57)}var a=n(58),i=n(63),r=n(0),o=s,c=r(a.a,i.a,!1,o,"data-v-b87c6ca8",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var s=n(59),a=n(1);t.a={name:"Preview",components:{Switches:s.a},data:function(){return{sharedState:a.a}}}},,,,,function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"props box"},[n("h2",[e._v("Props")]),e._v(" "),n("form",[n("table",[e._m(0),e._v(" "),n("tr",[n("td",[n("label",[e._v("Duration ("+e._s(e.sharedState.duration)+"ms)")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sharedState.duration,expression:"sharedState.duration",modifiers:{number:!0}}],attrs:{type:"range",min:"200",max:"2000",step:"100"},domProps:{value:e.sharedState.duration},on:{__r:function(t){e.$set(e.sharedState,"duration",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("1000")])]),e._v(" "),n("tr",[n("td",[n("label",[e._v("Thickness ("+e._s(e.sharedState.thickness)+")")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sharedState.thickness,expression:"sharedState.thickness",modifiers:{number:!0}}],attrs:{type:"range",min:"1",max:"50",step:"1"},domProps:{value:e.sharedState.thickness},on:{__r:function(t){e.$set(e.sharedState,"thickness",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("8")])]),e._v(" "),n("tr",[n("td",[n("label",[e._v("Angle ("+e._s(e.sharedState.angle)+"°)")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sharedState.angle,expression:"sharedState.angle",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"60",step:"1"},domProps:{value:e.sharedState.angle},on:{__r:function(t){e.$set(e.sharedState,"angle",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("40")])]),e._v(" "),n("tr",[n("td",[n("label",[e._v("Round edges")]),e._v(" "),n("switches",{attrs:{theme:"bulma",color:"primary"},model:{value:e.sharedState.roundEdges,callback:function(t){e.$set(e.sharedState,"roundEdges",t)},expression:"sharedState.roundEdges"}})],1),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[n("label",[e._v("Easings")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.sharedState.selectedEasing,expression:"sharedState.selectedEasing"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.sharedState,"selectedEasing",t.target.multiple?n:n[0])}}},e._l(e.sharedState.easings,function(t,s){return n("option",{key:s,domProps:{value:t.value}},[e._v("\n              "+e._s(t.label)+"\n            ")])})),e._v(" "),e._m(1)]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),e._m(2)])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Prop")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Default value")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("small",[e._v("Not included to keep size minimum")]),e._v(" "),n("a",{attrs:{href:"https://github.com/mattdesl/eases",target:"_blank"}},[e._v("Easing functions")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",[n("a",{attrs:{href:"http://easings.net/#easeInOutCirc",target:"_blank"}},[e._v("circInOut")])])}],i={render:s,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"bg-pattern"}),e._v(" "),n("div",{staticClass:"wrap container-fluid"},[n("h1",[e._v("Vue Chevron")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"demo"},[n("preview")],1),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-sm-6"},[n("code-preview")],1),e._v(" "),n("div",{staticClass:"col-xs-12 col-sm-6 first-xs last-sm "},[n("props")],1)])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row center-xs badges"},[n("div",{staticClass:"col-xs-12 col-sm-8"},[n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/npm/v/vue-chevron.svg?style=flat",alt:"Version","data-canonical-src":"https://img.shields.io/npm/v/vue-chevron.svg?style=flat"}}),e._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/npm/dm/vue-chevron.svg",alt:"npm downloads","data-canonical-src":"https://img.shields.io/npm/dm/vue-chevron.svg"}}),e._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/david/ispal/vue-chevron.svg?style=flat",alt:"No Dependencies","data-canonical-src":"https://img.shields.io/david/ispal/vue-chevron.svg?style=flat"}}),e._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://img.shields.io/npm/l/vue-chevron.svg?style=flat",alt:"License","data-canonical-src":"https://img.shields.io/npm/l/vue-chevron.svg?style=flat"}})])])}],i={render:s,staticRenderFns:a};t.a=i}],[5]);
//# sourceMappingURL=client.a5316377.js.map