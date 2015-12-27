// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23810_23824 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23811_23825 = null;
var count__23812_23826 = (0);
var i__23813_23827 = (0);
while(true){
if((i__23813_23827 < count__23812_23826)){
var f_23828 = cljs.core._nth.call(null,chunk__23811_23825,i__23813_23827);
cljs.core.println.call(null,"  ",f_23828);

var G__23829 = seq__23810_23824;
var G__23830 = chunk__23811_23825;
var G__23831 = count__23812_23826;
var G__23832 = (i__23813_23827 + (1));
seq__23810_23824 = G__23829;
chunk__23811_23825 = G__23830;
count__23812_23826 = G__23831;
i__23813_23827 = G__23832;
continue;
} else {
var temp__4425__auto___23833 = cljs.core.seq.call(null,seq__23810_23824);
if(temp__4425__auto___23833){
var seq__23810_23834__$1 = temp__4425__auto___23833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23810_23834__$1)){
var c__17922__auto___23835 = cljs.core.chunk_first.call(null,seq__23810_23834__$1);
var G__23836 = cljs.core.chunk_rest.call(null,seq__23810_23834__$1);
var G__23837 = c__17922__auto___23835;
var G__23838 = cljs.core.count.call(null,c__17922__auto___23835);
var G__23839 = (0);
seq__23810_23824 = G__23836;
chunk__23811_23825 = G__23837;
count__23812_23826 = G__23838;
i__23813_23827 = G__23839;
continue;
} else {
var f_23840 = cljs.core.first.call(null,seq__23810_23834__$1);
cljs.core.println.call(null,"  ",f_23840);

var G__23841 = cljs.core.next.call(null,seq__23810_23834__$1);
var G__23842 = null;
var G__23843 = (0);
var G__23844 = (0);
seq__23810_23824 = G__23841;
chunk__23811_23825 = G__23842;
count__23812_23826 = G__23843;
i__23813_23827 = G__23844;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23845 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17119__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23845);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23845)))?cljs.core.second.call(null,arglists_23845):arglists_23845));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23814 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23815 = null;
var count__23816 = (0);
var i__23817 = (0);
while(true){
if((i__23817 < count__23816)){
var vec__23818 = cljs.core._nth.call(null,chunk__23815,i__23817);
var name = cljs.core.nth.call(null,vec__23818,(0),null);
var map__23819 = cljs.core.nth.call(null,vec__23818,(1),null);
var map__23819__$1 = ((((!((map__23819 == null)))?((((map__23819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23819):map__23819);
var doc = cljs.core.get.call(null,map__23819__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23819__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23846 = seq__23814;
var G__23847 = chunk__23815;
var G__23848 = count__23816;
var G__23849 = (i__23817 + (1));
seq__23814 = G__23846;
chunk__23815 = G__23847;
count__23816 = G__23848;
i__23817 = G__23849;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23814);
if(temp__4425__auto__){
var seq__23814__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23814__$1)){
var c__17922__auto__ = cljs.core.chunk_first.call(null,seq__23814__$1);
var G__23850 = cljs.core.chunk_rest.call(null,seq__23814__$1);
var G__23851 = c__17922__auto__;
var G__23852 = cljs.core.count.call(null,c__17922__auto__);
var G__23853 = (0);
seq__23814 = G__23850;
chunk__23815 = G__23851;
count__23816 = G__23852;
i__23817 = G__23853;
continue;
} else {
var vec__23821 = cljs.core.first.call(null,seq__23814__$1);
var name = cljs.core.nth.call(null,vec__23821,(0),null);
var map__23822 = cljs.core.nth.call(null,vec__23821,(1),null);
var map__23822__$1 = ((((!((map__23822 == null)))?((((map__23822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23822):map__23822);
var doc = cljs.core.get.call(null,map__23822__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23822__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23854 = cljs.core.next.call(null,seq__23814__$1);
var G__23855 = null;
var G__23856 = (0);
var G__23857 = (0);
seq__23814 = G__23854;
chunk__23815 = G__23855;
count__23816 = G__23856;
i__23817 = G__23857;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map