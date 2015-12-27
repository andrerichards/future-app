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
var seq__23848_23862 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23849_23863 = null;
var count__23850_23864 = (0);
var i__23851_23865 = (0);
while(true){
if((i__23851_23865 < count__23850_23864)){
var f_23866 = cljs.core._nth.call(null,chunk__23849_23863,i__23851_23865);
cljs.core.println.call(null,"  ",f_23866);

var G__23867 = seq__23848_23862;
var G__23868 = chunk__23849_23863;
var G__23869 = count__23850_23864;
var G__23870 = (i__23851_23865 + (1));
seq__23848_23862 = G__23867;
chunk__23849_23863 = G__23868;
count__23850_23864 = G__23869;
i__23851_23865 = G__23870;
continue;
} else {
var temp__4425__auto___23871 = cljs.core.seq.call(null,seq__23848_23862);
if(temp__4425__auto___23871){
var seq__23848_23872__$1 = temp__4425__auto___23871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23848_23872__$1)){
var c__17945__auto___23873 = cljs.core.chunk_first.call(null,seq__23848_23872__$1);
var G__23874 = cljs.core.chunk_rest.call(null,seq__23848_23872__$1);
var G__23875 = c__17945__auto___23873;
var G__23876 = cljs.core.count.call(null,c__17945__auto___23873);
var G__23877 = (0);
seq__23848_23862 = G__23874;
chunk__23849_23863 = G__23875;
count__23850_23864 = G__23876;
i__23851_23865 = G__23877;
continue;
} else {
var f_23878 = cljs.core.first.call(null,seq__23848_23872__$1);
cljs.core.println.call(null,"  ",f_23878);

var G__23879 = cljs.core.next.call(null,seq__23848_23872__$1);
var G__23880 = null;
var G__23881 = (0);
var G__23882 = (0);
seq__23848_23862 = G__23879;
chunk__23849_23863 = G__23880;
count__23850_23864 = G__23881;
i__23851_23865 = G__23882;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23883 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23883);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23883)))?cljs.core.second.call(null,arglists_23883):arglists_23883));
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
var seq__23852 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23853 = null;
var count__23854 = (0);
var i__23855 = (0);
while(true){
if((i__23855 < count__23854)){
var vec__23856 = cljs.core._nth.call(null,chunk__23853,i__23855);
var name = cljs.core.nth.call(null,vec__23856,(0),null);
var map__23857 = cljs.core.nth.call(null,vec__23856,(1),null);
var map__23857__$1 = ((((!((map__23857 == null)))?((((map__23857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23857):map__23857);
var doc = cljs.core.get.call(null,map__23857__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23857__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23884 = seq__23852;
var G__23885 = chunk__23853;
var G__23886 = count__23854;
var G__23887 = (i__23855 + (1));
seq__23852 = G__23884;
chunk__23853 = G__23885;
count__23854 = G__23886;
i__23855 = G__23887;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23852);
if(temp__4425__auto__){
var seq__23852__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23852__$1)){
var c__17945__auto__ = cljs.core.chunk_first.call(null,seq__23852__$1);
var G__23888 = cljs.core.chunk_rest.call(null,seq__23852__$1);
var G__23889 = c__17945__auto__;
var G__23890 = cljs.core.count.call(null,c__17945__auto__);
var G__23891 = (0);
seq__23852 = G__23888;
chunk__23853 = G__23889;
count__23854 = G__23890;
i__23855 = G__23891;
continue;
} else {
var vec__23859 = cljs.core.first.call(null,seq__23852__$1);
var name = cljs.core.nth.call(null,vec__23859,(0),null);
var map__23860 = cljs.core.nth.call(null,vec__23859,(1),null);
var map__23860__$1 = ((((!((map__23860 == null)))?((((map__23860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23860):map__23860);
var doc = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23892 = cljs.core.next.call(null,seq__23852__$1);
var G__23893 = null;
var G__23894 = (0);
var G__23895 = (0);
seq__23852 = G__23892;
chunk__23853 = G__23893;
count__23854 = G__23894;
i__23855 = G__23895;
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