(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Hluy:function(t,e,s){"use strict";s.r(e);var r=s("o0o1"),i=s.n(r),a={props:["series"],data:function(){return{chart:{series:[{name:"Requests",data:this.series||[]}],options:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},grid:{show:!1},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime"},yaxis:{show:!1},tooltip:{y:{formatter:function(t){return new Intl.NumberFormat("pt-BR").format(t)}}}}}}},watch:{series:function(t){this.chart.series=[{data:t}]}}},n=s("KHd+"),l=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("apexchart",{attrs:{type:"area",height:"150",options:this.chart.options,series:this.chart.series}})}),[],!1,null,null,null).exports,o={props:["series"],data:function(){return{chart:{series:[{name:"Requests",data:this.series||[]}],options:{chart:{toolbar:{show:!1}},grid:{show:!1},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},tooltip:{y:{formatter:function(t){return new Intl.NumberFormat("pt-BR").format(t)}}}}}}},watch:{series:function(t){this.chart.series=[{name:"Requests",data:t}]}},computed:{height:function(){return this.series.length>2?40*this.series.length:140}}},c=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("apexchart",{attrs:{type:"bar",height:this.height,options:this.chart.options,series:this.chart.series}})],1)}),[],!1,null,null,null).exports,u=s("VDrJ"),f=s("LvDl"),v=s.n(f);function h(t,e,s,r,i,a,n){try{var l=t[a](n),o=l.value}catch(t){return void s(t)}l.done?e(o):Promise.resolve(o).then(r,i)}var d={props:["schema","requests_series","client_series","clients","start_date","range","selectedClients"],components:{OverviewChart:l,ClientsChart:c,Filters:u.a},data:function(){return{loading:!1,display:{filters:!1,sumary:!1},filters:{form:{start_date:this.start_date||"today",range:this.range||[],clients:this.selectedClients||[]},options:{clients:this.clients||[]}}}},computed:{total_requests:function(){return v.a.sumBy(this.requests_series,"y")},total_clients:function(){return this.client_series.length}},methods:{displayFilters:function(){this.display.filters=!0},hideFilters:function(){this.display.filters=!1},filter:function(){var t,e=this;return(t=i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$inertia.replace("/lighthouse-dashboard",{data:e.filters.form,replace:!0,preserveScroll:!0});case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(r,i){var a=t.apply(e,s);function n(t){h(a,r,i,n,l,"next",t)}function l(t){h(a,r,i,n,l,"throw",t)}n(void 0)}))})()}}},m=Object(n.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",{staticClass:"pt-2",attrs:{app:"",color:"white",elevation:"1"}},[s("v-row",{staticClass:"mb-5",attrs:{align:"center"}},[s("v-col",[s("h2",[s("v-icon",{staticClass:"mb-1",attrs:{color:"black",left:""}},[t._v("mdi-graphql")]),t._v("Schema\n        ")],1)]),t._v(" "),s("v-col",[s("v-col",{staticClass:"text-right primary--text",attrs:{cols:"auto"}},[s("v-icon",{staticClass:"mb-1 primary--text"},[t._v("mdi-clock-outline")]),t._v("\n          "+t._s(t.filters.form.start_date)+"\n          "),s("v-btn",{staticClass:"ml-3",attrs:{color:"primary",fab:"","x-small":"",depressed:"",dark:""},on:{click:function(e){return t.displayFilters()}}},[s("v-icon",[t._v("mdi-filter-variant")])],1)],1)],1)],1)],1),t._v(" "),t.requests_series.length?s("v-card",[s("v-card-title",[t._v("Requests")]),t._v(" "),s("v-card-subtitle",[t._v(t._s(t._f("numeral")(t.total_requests,0))+" requests in selected\n      period.")]),t._v(" "),s("v-card-text",[s("overview-chart",{attrs:{series:t.requests_series}})],1)],1):t._e(),t._v(" "),t.requests_series.length?s("v-card",{staticClass:"mt-8"},[s("v-card-title",[t._v("Clients")]),t._v(" "),s("v-card-subtitle",[t._v(t._s(t._f("numeral")(t.total_clients,0))+" clients in selected\n      period.")]),t._v(" "),s("v-card-text",[s("clients-chart",{attrs:{series:t.client_series}})],1)],1):t._e(),t._v(" "),0===t.requests_series.length?s("div",{staticClass:"text-center grey--text"},[s("v-icon",{attrs:{color:"grey","x-large":""}},[t._v("mdi-weather-windy")]),t._v(" "),s("h3",{staticClass:"mt-3"},[t._v("Oops! Nothing here.")]),t._v(" "),s("p",{staticClass:"text-caption mt-3"},[t._v("Make your first request to this Schema.")])],1):t._e(),t._v(" "),s("v-navigation-drawer",{staticClass:"pa-5",attrs:{app:"",stateless:"",right:"",width:"380"},model:{value:t.display.filters,callback:function(e){t.$set(t.display,"filters",e)},expression:"display.filters"}},[s("filters",{attrs:{filters:t.filters},on:{filter:function(e){return t.filter()},close:function(e){return t.hideFilters()}}})],1),t._v(" "),s("v-overlay",{attrs:{value:t.loading}},[s("v-progress-circular",{attrs:{indeterminate:""}})],1)],1)}),[],!1,null,null,null);e.default=m.exports},VDrJ:function(t,e,s){"use strict";var r={props:["filters"],data:function(){return{options:[{value:"today",label:"Today"},{value:"yesterday",label:"Yesterday"},{value:"last week",label:"Last week"},{value:"last month",label:"Last Month"},{value:"in custom range",label:"In custom range"}]}},computed:{dateRangeText:function(){return this.filters.form.range.join(" ~ ")},isCustomRange:function(){return"in custom range"===this.filters.form.start_date}},methods:{filter:function(){this.isCustomRange&&this.filters.form.range.length<2||(this.isCustomRange||(this.filters.form.range=[]),this.$emit("filter"))},reset:function(){this.filters.form.start_date="last month",this.$emit("filter")},uncheckAll:function(){this.filters.form.clients.length&&(this.filters.form.clients=[]),this.filter()}}},i=s("KHd+"),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:""}},[s("v-card-title",[s("h3",[t._v("Filters")]),t._v(" "),s("v-btn",{staticClass:"ml-3",attrs:{text:"",small:"",outlined:"",color:"primary"},on:{click:function(e){return t.reset()}}},[t._v("reset")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[s("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),s("v-card-text",{staticClass:"mt-5"},[s("div",{staticClass:"font-weight-black text-caption"},[t._v("STARTING FROM")]),t._v(" "),s("v-radio-group",{on:{change:function(e){return t.filter()}},model:{value:t.filters.form.start_date,callback:function(e){t.$set(t.filters.form,"start_date",e)},expression:"filters.form.start_date"}},t._l(t.options,(function(t){return s("v-radio",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),t.isCustomRange?s("div",[s("v-date-picker",{staticClass:"elevation-2",attrs:{max:(new Date).toISOString(),"show-current":!1,"no-title":"",range:""},on:{change:function(e){return t.filter()}},model:{value:t.filters.form.range,callback:function(e){t.$set(t.filters.form,"range",e)},expression:"filters.form.range"}}),t._v(" "),s("div",{staticClass:"py-3 font-weight-bold"},[t.dateRangeText?s("v-icon",{staticClass:"mb-1",attrs:{small:"",left:""}},[t._v("mdi-selection-drag")]):t._e(),t._v("\n        "+t._s(t.dateRangeText)+"\n      ")],1)],1):t._e(),t._v(" "),s("div",{staticClass:"font-weight-black text-caption mt-5 mb-5"},[t._v("CLIENTS")]),t._v(" "),s("v-btn",{attrs:{small:"",outlined:""},on:{click:function(e){return t.uncheckAll()}}},[t._v("Clear selection")]),t._v(" "),t._l(t.filters.options.clients,(function(e){return s("v-checkbox",{key:e.id,attrs:{label:e.username,value:e.id,"hide-details":"",multiple:""},on:{change:function(e){return t.filter()}},model:{value:t.filters.form.clients,callback:function(e){t.$set(t.filters.form,"clients",e)},expression:"filters.form.clients"}})}))],2)],1)}),[],!1,null,null,null);e.a=a.exports}}]);
//# sourceMappingURL=6.js.map?id=a5b5c8669aae7cfe1b6d