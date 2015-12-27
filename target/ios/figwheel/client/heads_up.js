// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__18184__auto__ = [];
var len__18177__auto___23995 = arguments.length;
var i__18178__auto___23996 = (0);
while(true){
if((i__18178__auto___23996 < len__18177__auto___23995)){
args__18184__auto__.push((arguments[i__18178__auto___23996]));

var G__23997 = (i__18178__auto___23996 + (1));
i__18178__auto___23996 = G__23997;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((2) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18185__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23987_23998 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23988_23999 = null;
var count__23989_24000 = (0);
var i__23990_24001 = (0);
while(true){
if((i__23990_24001 < count__23989_24000)){
var k_24002 = cljs.core._nth.call(null,chunk__23988_23999,i__23990_24001);
e.setAttribute(cljs.core.name.call(null,k_24002),cljs.core.get.call(null,attrs,k_24002));

var G__24003 = seq__23987_23998;
var G__24004 = chunk__23988_23999;
var G__24005 = count__23989_24000;
var G__24006 = (i__23990_24001 + (1));
seq__23987_23998 = G__24003;
chunk__23988_23999 = G__24004;
count__23989_24000 = G__24005;
i__23990_24001 = G__24006;
continue;
} else {
var temp__4425__auto___24007 = cljs.core.seq.call(null,seq__23987_23998);
if(temp__4425__auto___24007){
var seq__23987_24008__$1 = temp__4425__auto___24007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23987_24008__$1)){
var c__17922__auto___24009 = cljs.core.chunk_first.call(null,seq__23987_24008__$1);
var G__24010 = cljs.core.chunk_rest.call(null,seq__23987_24008__$1);
var G__24011 = c__17922__auto___24009;
var G__24012 = cljs.core.count.call(null,c__17922__auto___24009);
var G__24013 = (0);
seq__23987_23998 = G__24010;
chunk__23988_23999 = G__24011;
count__23989_24000 = G__24012;
i__23990_24001 = G__24013;
continue;
} else {
var k_24014 = cljs.core.first.call(null,seq__23987_24008__$1);
e.setAttribute(cljs.core.name.call(null,k_24014),cljs.core.get.call(null,attrs,k_24014));

var G__24015 = cljs.core.next.call(null,seq__23987_24008__$1);
var G__24016 = null;
var G__24017 = (0);
var G__24018 = (0);
seq__23987_23998 = G__24015;
chunk__23988_23999 = G__24016;
count__23989_24000 = G__24017;
i__23990_24001 = G__24018;
continue;
}
} else {
}
}
break;
}

var seq__23991_24019 = cljs.core.seq.call(null,children);
var chunk__23992_24020 = null;
var count__23993_24021 = (0);
var i__23994_24022 = (0);
while(true){
if((i__23994_24022 < count__23993_24021)){
var ch_24023 = cljs.core._nth.call(null,chunk__23992_24020,i__23994_24022);
e.appendChild(ch_24023);

var G__24024 = seq__23991_24019;
var G__24025 = chunk__23992_24020;
var G__24026 = count__23993_24021;
var G__24027 = (i__23994_24022 + (1));
seq__23991_24019 = G__24024;
chunk__23992_24020 = G__24025;
count__23993_24021 = G__24026;
i__23994_24022 = G__24027;
continue;
} else {
var temp__4425__auto___24028 = cljs.core.seq.call(null,seq__23991_24019);
if(temp__4425__auto___24028){
var seq__23991_24029__$1 = temp__4425__auto___24028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23991_24029__$1)){
var c__17922__auto___24030 = cljs.core.chunk_first.call(null,seq__23991_24029__$1);
var G__24031 = cljs.core.chunk_rest.call(null,seq__23991_24029__$1);
var G__24032 = c__17922__auto___24030;
var G__24033 = cljs.core.count.call(null,c__17922__auto___24030);
var G__24034 = (0);
seq__23991_24019 = G__24031;
chunk__23992_24020 = G__24032;
count__23993_24021 = G__24033;
i__23994_24022 = G__24034;
continue;
} else {
var ch_24035 = cljs.core.first.call(null,seq__23991_24029__$1);
e.appendChild(ch_24035);

var G__24036 = cljs.core.next.call(null,seq__23991_24029__$1);
var G__24037 = null;
var G__24038 = (0);
var G__24039 = (0);
seq__23991_24019 = G__24036;
chunk__23992_24020 = G__24037;
count__23993_24021 = G__24038;
i__23994_24022 = G__24039;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23984){
var G__23985 = cljs.core.first.call(null,seq23984);
var seq23984__$1 = cljs.core.next.call(null,seq23984);
var G__23986 = cljs.core.first.call(null,seq23984__$1);
var seq23984__$2 = cljs.core.next.call(null,seq23984__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23985,G__23986,seq23984__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18032__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18033__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18034__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18035__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18036__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18032__auto__,prefer_table__18033__auto__,method_cache__18034__auto__,cached_hierarchy__18035__auto__,hierarchy__18036__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18032__auto__,prefer_table__18033__auto__,method_cache__18034__auto__,cached_hierarchy__18035__auto__,hierarchy__18036__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18036__auto__,method_table__18032__auto__,prefer_table__18033__auto__,method_cache__18034__auto__,cached_hierarchy__18035__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24040 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24040.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24040.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24040.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24040);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24041,st_map){
var map__24046 = p__24041;
var map__24046__$1 = ((((!((map__24046 == null)))?((((map__24046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24046):map__24046);
var container_el = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24046,map__24046__$1,container_el){
return (function (p__24048){
var vec__24049 = p__24048;
var k = cljs.core.nth.call(null,vec__24049,(0),null);
var v = cljs.core.nth.call(null,vec__24049,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24046,map__24046__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24050,dom_str){
var map__24053 = p__24050;
var map__24053__$1 = ((((!((map__24053 == null)))?((((map__24053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24053):map__24053);
var c = map__24053__$1;
var content_area_el = cljs.core.get.call(null,map__24053__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24055){
var map__24058 = p__24055;
var map__24058__$1 = ((((!((map__24058 == null)))?((((map__24058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24058):map__24058);
var content_area_el = cljs.core.get.call(null,map__24058__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__){
return (function (state_24101){
var state_val_24102 = (state_24101[(1)]);
if((state_val_24102 === (1))){
var inst_24086 = (state_24101[(7)]);
var inst_24086__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24087 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24088 = ["10px","10px","100%","68px","1.0"];
var inst_24089 = cljs.core.PersistentHashMap.fromArrays(inst_24087,inst_24088);
var inst_24090 = cljs.core.merge.call(null,inst_24089,style);
var inst_24091 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24086__$1,inst_24090);
var inst_24092 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24086__$1,msg);
var inst_24093 = cljs.core.async.timeout.call(null,(300));
var state_24101__$1 = (function (){var statearr_24103 = state_24101;
(statearr_24103[(7)] = inst_24086__$1);

(statearr_24103[(8)] = inst_24091);

(statearr_24103[(9)] = inst_24092);

return statearr_24103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24101__$1,(2),inst_24093);
} else {
if((state_val_24102 === (2))){
var inst_24086 = (state_24101[(7)]);
var inst_24095 = (state_24101[(2)]);
var inst_24096 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24097 = ["auto"];
var inst_24098 = cljs.core.PersistentHashMap.fromArrays(inst_24096,inst_24097);
var inst_24099 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24086,inst_24098);
var state_24101__$1 = (function (){var statearr_24104 = state_24101;
(statearr_24104[(10)] = inst_24095);

return statearr_24104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24101__$1,inst_24099);
} else {
return null;
}
}
});})(c__19953__auto__))
;
return ((function (switch__19841__auto__,c__19953__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto____0 = (function (){
var statearr_24108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24108[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto__);

(statearr_24108[(1)] = (1));

return statearr_24108;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto____1 = (function (state_24101){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_24101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e24109){if((e24109 instanceof Object)){
var ex__19845__auto__ = e24109;
var statearr_24110_24112 = state_24101;
(statearr_24110_24112[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24113 = state_24101;
state_24101 = G__24113;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto__ = function(state_24101){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto____1.call(this,state_24101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__))
})();
var state__19955__auto__ = (function (){var statearr_24111 = f__19954__auto__.call(null);
(statearr_24111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_24111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__))
);

return c__19953__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__24115 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24115,(0),null);
var ln = cljs.core.nth.call(null,vec__24115,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24118 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24118,(0),null);
var file_line = cljs.core.nth.call(null,vec__24118,(1),null);
var file_column = cljs.core.nth.call(null,vec__24118,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24118,file_name,file_line,file_column){
return (function (p1__24116_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24116_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24118,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17119__auto__ = file_line;
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
var and__17107__auto__ = cause;
if(cljs.core.truth_(and__17107__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17107__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24121 = figwheel.client.heads_up.ensure_container.call(null);
var map__24121__$1 = ((((!((map__24121 == null)))?((((map__24121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24121):map__24121);
var content_area_el = cljs.core.get.call(null,map__24121__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__){
return (function (state_24169){
var state_val_24170 = (state_24169[(1)]);
if((state_val_24170 === (1))){
var inst_24152 = (state_24169[(7)]);
var inst_24152__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24153 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24154 = ["0.0"];
var inst_24155 = cljs.core.PersistentHashMap.fromArrays(inst_24153,inst_24154);
var inst_24156 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24152__$1,inst_24155);
var inst_24157 = cljs.core.async.timeout.call(null,(300));
var state_24169__$1 = (function (){var statearr_24171 = state_24169;
(statearr_24171[(7)] = inst_24152__$1);

(statearr_24171[(8)] = inst_24156);

return statearr_24171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24169__$1,(2),inst_24157);
} else {
if((state_val_24170 === (2))){
var inst_24152 = (state_24169[(7)]);
var inst_24159 = (state_24169[(2)]);
var inst_24160 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24161 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24162 = cljs.core.PersistentHashMap.fromArrays(inst_24160,inst_24161);
var inst_24163 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24152,inst_24162);
var inst_24164 = cljs.core.async.timeout.call(null,(200));
var state_24169__$1 = (function (){var statearr_24172 = state_24169;
(statearr_24172[(9)] = inst_24163);

(statearr_24172[(10)] = inst_24159);

return statearr_24172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24169__$1,(3),inst_24164);
} else {
if((state_val_24170 === (3))){
var inst_24152 = (state_24169[(7)]);
var inst_24166 = (state_24169[(2)]);
var inst_24167 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24152,"");
var state_24169__$1 = (function (){var statearr_24173 = state_24169;
(statearr_24173[(11)] = inst_24166);

return statearr_24173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24169__$1,inst_24167);
} else {
return null;
}
}
}
});})(c__19953__auto__))
;
return ((function (switch__19841__auto__,c__19953__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19842__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19842__auto____0 = (function (){
var statearr_24177 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24177[(0)] = figwheel$client$heads_up$clear_$_state_machine__19842__auto__);

(statearr_24177[(1)] = (1));

return statearr_24177;
});
var figwheel$client$heads_up$clear_$_state_machine__19842__auto____1 = (function (state_24169){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_24169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e24178){if((e24178 instanceof Object)){
var ex__19845__auto__ = e24178;
var statearr_24179_24181 = state_24169;
(statearr_24179_24181[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24182 = state_24169;
state_24169 = G__24182;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19842__auto__ = function(state_24169){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19842__auto____1.call(this,state_24169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19842__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19842__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__))
})();
var state__19955__auto__ = (function (){var statearr_24180 = f__19954__auto__.call(null);
(statearr_24180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_24180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__))
);

return c__19953__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__){
return (function (state_24214){
var state_val_24215 = (state_24214[(1)]);
if((state_val_24215 === (1))){
var inst_24204 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24214__$1 = state_24214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24214__$1,(2),inst_24204);
} else {
if((state_val_24215 === (2))){
var inst_24206 = (state_24214[(2)]);
var inst_24207 = cljs.core.async.timeout.call(null,(400));
var state_24214__$1 = (function (){var statearr_24216 = state_24214;
(statearr_24216[(7)] = inst_24206);

return statearr_24216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24214__$1,(3),inst_24207);
} else {
if((state_val_24215 === (3))){
var inst_24209 = (state_24214[(2)]);
var inst_24210 = figwheel.client.heads_up.clear.call(null);
var state_24214__$1 = (function (){var statearr_24217 = state_24214;
(statearr_24217[(8)] = inst_24209);

return statearr_24217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24214__$1,(4),inst_24210);
} else {
if((state_val_24215 === (4))){
var inst_24212 = (state_24214[(2)]);
var state_24214__$1 = state_24214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24214__$1,inst_24212);
} else {
return null;
}
}
}
}
});})(c__19953__auto__))
;
return ((function (switch__19841__auto__,c__19953__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto____0 = (function (){
var statearr_24221 = [null,null,null,null,null,null,null,null,null];
(statearr_24221[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto__);

(statearr_24221[(1)] = (1));

return statearr_24221;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto____1 = (function (state_24214){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_24214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e24222){if((e24222 instanceof Object)){
var ex__19845__auto__ = e24222;
var statearr_24223_24225 = state_24214;
(statearr_24223_24225[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24226 = state_24214;
state_24214 = G__24226;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto__ = function(state_24214){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto____1.call(this,state_24214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__))
})();
var state__19955__auto__ = (function (){var statearr_24224 = f__19954__auto__.call(null);
(statearr_24224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_24224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__))
);

return c__19953__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map