// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__18615_SHARP_){
return console.log(p1__18615_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__18616_SHARP_){
return console.warn(p1__18616_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__18617_SHARP_){
return console.error(p1__18617_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__18618_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__18618_SHARP_);
} else {
return console.log(p1__18618_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__18184__auto__ = [];
var len__18177__auto___18620 = arguments.length;
var i__18178__auto___18621 = (0);
while(true){
if((i__18178__auto___18621 < len__18177__auto___18620)){
args__18184__auto__.push((arguments[i__18178__auto___18621]));

var G__18622 = (i__18178__auto___18621 + (1));
i__18178__auto___18621 = G__18622;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((0) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__18185__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq18619){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18619));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__18184__auto__ = [];
var len__18177__auto___18624 = arguments.length;
var i__18178__auto___18625 = (0);
while(true){
if((i__18178__auto___18625 < len__18177__auto___18624)){
args__18184__auto__.push((arguments[i__18178__auto___18625]));

var G__18626 = (i__18178__auto___18625 + (1));
i__18178__auto___18625 = G__18626;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((0) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__18185__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq18623){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18623));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__18184__auto__ = [];
var len__18177__auto___18628 = arguments.length;
var i__18178__auto___18629 = (0);
while(true){
if((i__18178__auto___18629 < len__18177__auto___18628)){
args__18184__auto__.push((arguments[i__18178__auto___18629]));

var G__18630 = (i__18178__auto___18629 + (1));
i__18178__auto___18629 = G__18630;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((0) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__18185__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq18627){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18627));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__18184__auto__ = [];
var len__18177__auto___18632 = arguments.length;
var i__18178__auto___18633 = (0);
while(true){
if((i__18178__auto___18633 < len__18177__auto___18632)){
args__18184__auto__.push((arguments[i__18178__auto___18633]));

var G__18634 = (i__18178__auto___18633 + (1));
i__18178__auto___18633 = G__18634;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((0) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__18185__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq18631){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18631));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__18184__auto__ = [];
var len__18177__auto___18636 = arguments.length;
var i__18178__auto___18637 = (0);
while(true){
if((i__18178__auto___18637 < len__18177__auto___18636)){
args__18184__auto__.push((arguments[i__18178__auto___18637]));

var G__18638 = (i__18178__auto___18637 + (1));
i__18178__auto___18637 = G__18638;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((0) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__18185__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq18635){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18635));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map