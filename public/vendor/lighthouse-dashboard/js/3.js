(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{JQMA:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".row-pointer[data-v-a8f2d1ac] tbody tr :hover{cursor:pointer}",""])},NF9v:function(t,e,a){"use strict";var s=a("tQyR"),i={props:{full:{type:Boolean,default:!1},field:{type:Object},highlight:{type:String,default:""}},components:{TextHighlight:s.a}},r=(a("rVSg"),a("KHd+")),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("text-highlight",{staticClass:"font-weight-bold",attrs:{queries:[t.highlight]}},[t._v(t._s(t.field.name))]),t._v(" "),t.field.args?a("span",[t.full?a("span",[t._v("\n      (\n      "),a("div",{staticClass:"ml-5",domProps:{innerHTML:t._s(t.field.args)}}),t._v(")\n    ")]):a("span",[t._v("(...)")])]):t._e(),t._v(" "),t.field.type_def?a("span",{staticClass:"blue--text"},[t._v(": "+t._s(t.field.type_def))]):t._e(),t._v(" "),a("div",{staticClass:"text-caption grey--text pt-1",domProps:{innerHTML:t._s(t.field.description)}})],1)}),[],!1,null,"6b105f36",null);e.a=n.exports},NmYT:function(t,e,a){var s=a("JQMA");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},O15G:function(t,e,a){var s=a("XZQw");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},OvGh:function(t,e,a){"use strict";a.r(e);var s=a("o0o1"),i=a.n(s),r=a("LvDl"),n=a.n(r),l=a("WIJh"),o=a("tQyR"),c=a("VDrJ"),d=a("NF9v"),u=a("vDqi"),v=a.n(u);function f(t,e,a,s,i,r,n){try{var l=t[r](n),o=l.value}catch(t){return void a(t)}l.done?e(o):Promise.resolve(o).then(s,i)}var p={props:["field","filters"],components:{Field:d.a},data:function(){return{loading:!1,sumary:[],table:{headers:[{text:"Operation",value:"field.name",sortable:!1},{text:"Requests",value:"statistics_count",sortable:!1,align:"end"}]}}},watch:{field:function(){this.load()}},methods:{load:function(){var t,e=this;return(t=i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,v.a.get("/lighthouse-dashboard/fields/".concat(e.field.id,"/sumary"),{params:e.filters.form});case 3:a=t.sent,e.loading=!1,e.sumary=a.data;case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function n(t){f(r,s,i,n,l,"next",t)}function l(t){f(r,s,i,n,l,"throw",t)}n(void 0)}))})()},close:function(){this.$emit("close")}}},h=a("KHd+"),m=Object(h.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h2",[t._v("Sumary")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.close()}}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-card-subtitle",{staticClass:"pt-5"},[a("field",{attrs:{field:t.field,full:!0}}),t._v(" "),a("v-divider",{staticClass:"my-5"})],1),t._v(" "),a("v-card-text",[a("h3",{staticClass:"mb-5 black--text"},[t._v("Clients & Operations")]),t._v(" "),t.loading?a("div",{staticClass:"text-center mt-8"},[a("v-progress-circular",{attrs:{indeterminate:""}})],1):t._e(),t._v(" "),t.sumary.length&&!t.loading?a("v-data-table",{attrs:{headers:t.table.headers,items:t.sumary,loading:t.loading,"hide-default-footer":""}}):t._e(),t._v(" "),t.sumary.length||t.loading?t._e():a("div",[a("v-alert",{attrs:{icon:"mdi-alert",text:"",dense:""}},[t._v("No operations on selected range.")])],1)],1)],1)}),[],!1,null,null,null).exports;function _(t,e,a,s,i,r,n){try{var l=t[r](n),o=l.value}catch(t){return void a(t)}l.done?e(o):Promise.resolve(o).then(s,i)}var g={props:["types","start_date","range"],components:{TextHighlight:o.a,FieldSumary:m,Field:d.a,Filters:c.a},data:function(){return{loading:!1,search:"",selectedField:{},display:{sumary:!1,filters:!1},filters:{form:{start_date:this.start_date||"today",range:this.range||[]}},table:{headers:[{text:"Field",value:"name",sortable:!1},{text:"Requests",value:"statistics_count",sortable:!1,align:"end"}]}}},computed:{filteredTypes:function(){var t=this;return""===this.search?this.types:n()(this.types).filter((function(e){return t.containsText(e,t.search)})).value()}},methods:{filter:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$inertia.replace("/lighthouse-dashboard/types",{data:e.filters.form,replace:!0,preserveScroll:!0});case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(s,i){var r=t.apply(e,a);function n(t){_(r,s,i,n,l,"next",t)}function l(t){_(r,s,i,n,l,"throw",t)}n(void 0)}))})()},selectField:function(t){this.selectedField=t,this.displaySumary()},containsText:function(t,e){var a=n()(t.fields).map("name").join(" ");return Object(l.a)(t.name).includes(Object(l.a)(e))||Object(l.a)(a).includes(Object(l.a)(e))},displaySumary:function(){this.hideFilters(),this.display.sumary=!0},hideSumary:function(){this.display.sumary=!1},displayFilters:function(){this.hideSumary(),this.display.filters=!0},hideFilters:function(){this.display.filters=!1}}},y=(a("ru6M"),Object(h.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{staticClass:"pt-2",attrs:{app:"",color:"white",elevation:"1"}},[a("v-row",{staticClass:"mb-5",attrs:{align:"center"}},[a("v-col",[a("h2",[a("v-icon",{attrs:{left:"",color:"black"}},[t._v("mdi-shape-outline")]),t._v("Types\n        ")],1)]),t._v(" "),a("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[a("v-text-field",{attrs:{outlined:"","prepend-inner-icon":"mdi-magnify",label:"Type or Field ...","background-color":"white",autocomplete:"off",dense:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-col",{staticClass:"text-right primary--text",attrs:{cols:"auto"}},[a("v-icon",{staticClass:"mb-1 primary--text"},[t._v("mdi-clock-outline")]),t._v("\n        "+t._s(t.filters.form.start_date)+"\n        "),a("v-btn",{staticClass:"ml-3",attrs:{color:"primary",fab:"","x-small":"",depressed:"",dark:""},on:{click:function(e){return t.displayFilters()}}},[a("v-icon",[t._v("mdi-filter-variant")])],1)],1)],1)],1),t._v(" "),t._l(t.filteredTypes,(function(e){return a("v-data-table",{key:e.id,staticClass:"elevation-1 row-pointer mb-8",attrs:{headers:t.table.headers,items:e.fields,"hide-default-footer":""},on:{"click:row":t.selectField},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"pa-3"},[a("text-highlight",{staticClass:"title",attrs:{queries:[t.search]}},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"text-caption grey--text"},[t._v(t._s(e.description))])],1)]},proxy:!0},{key:"item.name",fn:function(e){var s=e.item;return[a("field",{staticClass:"py-4",attrs:{field:s,highlight:t.search}})]}}],null,!0)})})),t._v(" "),0===t.filteredTypes.length?a("div",{staticClass:"text-center grey--text"},[a("v-icon",{attrs:{color:"grey","x-large":""}},[t._v("mdi-weather-windy")]),t._v(" "),a("h3",{staticClass:"mt-3"},[t._v("Oops! Nothing here.")]),t._v(" "),0===t.types.length?a("p",{staticClass:"text-caption mt-3"},[t._v("Make your first request to this Schema.")]):a("p",{staticClass:"text-caption mt-3"},[t._v("\n      It searchs only on\n      "),a("strong",[t._v("Types")]),t._v(" and\n      "),a("strong",[t._v("Fields")]),t._v(".\n    ")])],1):t._e(),t._v(" "),a("v-navigation-drawer",{staticClass:"pa-5",attrs:{right:"",app:t.display.filters,width:"380"},model:{value:t.display.filters,callback:function(e){t.$set(t.display,"filters",e)},expression:"display.filters"}},[a("filters",{attrs:{filters:t.filters},on:{filter:function(e){return t.filter()},close:function(e){return t.hideFilters()}}})],1),t._v(" "),a("v-navigation-drawer",{staticClass:"pa-5",attrs:{right:"",app:t.display.sumary,width:"380"},model:{value:t.display.sumary,callback:function(e){t.$set(t.display,"sumary",e)},expression:"display.sumary"}},[a("field-sumary",{attrs:{field:t.selectedField,filters:t.filters},on:{close:function(e){return t.hideSumary()}}})],1),t._v(" "),a("v-overlay",{attrs:{value:t.loading}},[a("v-progress-circular",{attrs:{indeterminate:""}})],1)],2)}),[],!1,null,"a8f2d1ac",null));e.default=y.exports},VDrJ:function(t,e,a){"use strict";var s={props:["filters"],data:function(){return{options:[{value:"today",label:"Today"},{value:"yesterday",label:"Yesterday"},{value:"last week",label:"Last week"},{value:"last month",label:"Last Month"},{value:"in custom range",label:"In custom range"}]}},computed:{dateRangeText:function(){return this.filters.form.range.join(" ~ ")},isCustomRange:function(){return"in custom range"===this.filters.form.start_date}},methods:{filter:function(){this.isCustomRange&&this.filters.form.range.length<2||(this.isCustomRange||(this.filters.form.range=[]),this.$emit("filter"))},reset:function(){this.filters.form.start_date="today",this.$emit("filter")}}},i=a("KHd+"),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h3",[t._v("Filters")]),t._v(" "),a("v-btn",{staticClass:"ml-3",attrs:{text:"",small:"",outlined:"",color:"primary"},on:{click:function(e){return t.reset()}}},[t._v("reset")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-card-text",{staticClass:"mt-5"},[a("div",{staticClass:"font-weight-black text-caption"},[t._v("STARTING FROM")]),t._v(" "),a("v-radio-group",{on:{change:function(e){return t.filter()}},model:{value:t.filters.form.start_date,callback:function(e){t.$set(t.filters.form,"start_date",e)},expression:"filters.form.start_date"}},t._l(t.options,(function(t){return a("v-radio",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),t.isCustomRange?a("div",[a("v-date-picker",{staticClass:"elevation-2",attrs:{max:(new Date).toISOString(),"show-current":!1,"no-title":"",range:""},on:{change:function(e){return t.filter()}},model:{value:t.filters.form.range,callback:function(e){t.$set(t.filters.form,"range",e)},expression:"filters.form.range"}}),t._v(" "),a("div",{staticClass:"py-3 font-weight-bold"},[t.dateRangeText?a("v-icon",{staticClass:"mb-1",attrs:{small:"",left:""}},[t._v("mdi-selection-drag")]):t._e(),t._v("\n        "+t._s(t.dateRangeText)+"\n      ")],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.a=r.exports},XZQw:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"span[data-v-6b105f36] .arg-name{color:indigo}span[data-v-6b105f36] .arg-type{color:orange}",""])},rVSg:function(t,e,a){"use strict";var s=a("O15G");a.n(s).a},ru6M:function(t,e,a){"use strict";var s=a("NmYT");a.n(s).a}}]);
//# sourceMappingURL=3.js.map?id=1d0373d7edfa1852daca