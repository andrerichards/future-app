// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__18639_SHARP_){
return console.log(p1__18639_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__18640_SHARP_){
return console.warn(p1__18640_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__18641_SHARP_){
return console.error(p1__18641_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__18642_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__18642_SHARP_);
} else {
return console.log(p1__18642_SHARP_);
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
var args__18207__auto__ = [];
var len__18200__auto___18644 = arguments.length;
var i__18201__auto___18645 = (0);
while(true){
if((i__18201__auto___18645 < len__18200__auto___18644)){
args__18207__auto__.push((arguments[i__18201__auto___18645]));

var G__18646 = (i__18201__auto___18645 + (1));
i__18201__auto___18645 = G__18646;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((0) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__18208__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq18643){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18643));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__18207__auto__ = [];
var len__18200__auto___18648 = arguments.length;
var i__18201__auto___18649 = (0);
while(true){
if((i__18201__auto___18649 < len__18200__auto___18648)){
args__18207__auto__.push((arguments[i__18201__auto___18649]));

var G__18650 = (i__18201__auto___18649 + (1));
i__18201__auto___18649 = G__18650;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((0) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__18208__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq18647){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18647));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__18207__auto__ = [];
var len__18200__auto___18652 = arguments.length;
var i__18201__auto___18653 = (0);
while(true){
if((i__18201__auto___18653 < len__18200__auto___18652)){
args__18207__auto__.push((arguments[i__18201__auto___18653]));

var G__18654 = (i__18201__auto___18653 + (1));
i__18201__auto___18653 = G__18654;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((0) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__18208__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq18651){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18651));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__18207__auto__ = [];
var len__18200__auto___18656 = arguments.length;
var i__18201__auto___18657 = (0);
while(true){
if((i__18201__auto___18657 < len__18200__auto___18656)){
args__18207__auto__.push((arguments[i__18201__auto___18657]));

var G__18658 = (i__18201__auto___18657 + (1));
i__18201__auto___18657 = G__18658;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((0) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__18208__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq18655){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18655));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__18207__auto__ = [];
var len__18200__auto___18660 = arguments.length;
var i__18201__auto___18661 = (0);
while(true){
if((i__18201__auto___18661 < len__18200__auto___18660)){
args__18207__auto__.push((arguments[i__18201__auto___18661]));

var G__18662 = (i__18201__auto___18661 + (1));
i__18201__auto___18661 = G__18662;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((0) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__18208__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq18659){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18659));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map