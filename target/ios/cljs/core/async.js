// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19998 = [];
var len__18177__auto___20004 = arguments.length;
var i__18178__auto___20005 = (0);
while(true){
if((i__18178__auto___20005 < len__18177__auto___20004)){
args19998.push((arguments[i__18178__auto___20005]));

var G__20006 = (i__18178__auto___20005 + (1));
i__18178__auto___20005 = G__20006;
continue;
} else {
}
break;
}

var G__20000 = args19998.length;
switch (G__20000) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19998.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20001 = (function (f,blockable,meta20002){
this.f = f;
this.blockable = blockable;
this.meta20002 = meta20002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20003,meta20002__$1){
var self__ = this;
var _20003__$1 = this;
return (new cljs.core.async.t_cljs$core$async20001(self__.f,self__.blockable,meta20002__$1));
});

cljs.core.async.t_cljs$core$async20001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20003){
var self__ = this;
var _20003__$1 = this;
return self__.meta20002;
});

cljs.core.async.t_cljs$core$async20001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20002","meta20002",-338732891,null)], null);
});

cljs.core.async.t_cljs$core$async20001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20001";

cljs.core.async.t_cljs$core$async20001.cljs$lang$ctorPrWriter = (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async20001");
});

cljs.core.async.__GT_t_cljs$core$async20001 = (function cljs$core$async$__GT_t_cljs$core$async20001(f__$1,blockable__$1,meta20002){
return (new cljs.core.async.t_cljs$core$async20001(f__$1,blockable__$1,meta20002));
});

}

return (new cljs.core.async.t_cljs$core$async20001(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20010 = [];
var len__18177__auto___20013 = arguments.length;
var i__18178__auto___20014 = (0);
while(true){
if((i__18178__auto___20014 < len__18177__auto___20013)){
args20010.push((arguments[i__18178__auto___20014]));

var G__20015 = (i__18178__auto___20014 + (1));
i__18178__auto___20014 = G__20015;
continue;
} else {
}
break;
}

var G__20012 = args20010.length;
switch (G__20012) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20010.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20017 = [];
var len__18177__auto___20020 = arguments.length;
var i__18178__auto___20021 = (0);
while(true){
if((i__18178__auto___20021 < len__18177__auto___20020)){
args20017.push((arguments[i__18178__auto___20021]));

var G__20022 = (i__18178__auto___20021 + (1));
i__18178__auto___20021 = G__20022;
continue;
} else {
}
break;
}

var G__20019 = args20017.length;
switch (G__20019) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20017.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20024 = [];
var len__18177__auto___20027 = arguments.length;
var i__18178__auto___20028 = (0);
while(true){
if((i__18178__auto___20028 < len__18177__auto___20027)){
args20024.push((arguments[i__18178__auto___20028]));

var G__20029 = (i__18178__auto___20028 + (1));
i__18178__auto___20028 = G__20029;
continue;
} else {
}
break;
}

var G__20026 = args20024.length;
switch (G__20026) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20024.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20031 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20031);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20031,ret){
return (function (){
return fn1.call(null,val_20031);
});})(val_20031,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20032 = [];
var len__18177__auto___20035 = arguments.length;
var i__18178__auto___20036 = (0);
while(true){
if((i__18178__auto___20036 < len__18177__auto___20035)){
args20032.push((arguments[i__18178__auto___20036]));

var G__20037 = (i__18178__auto___20036 + (1));
i__18178__auto___20036 = G__20037;
continue;
} else {
}
break;
}

var G__20034 = args20032.length;
switch (G__20034) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20032.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18022__auto___20039 = n;
var x_20040 = (0);
while(true){
if((x_20040 < n__18022__auto___20039)){
(a[x_20040] = (0));

var G__20041 = (x_20040 + (1));
x_20040 = G__20041;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20042 = (i + (1));
i = G__20042;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20046 = (function (alt_flag,flag,meta20047){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20047 = meta20047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20048,meta20047__$1){
var self__ = this;
var _20048__$1 = this;
return (new cljs.core.async.t_cljs$core$async20046(self__.alt_flag,self__.flag,meta20047__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20048){
var self__ = this;
var _20048__$1 = this;
return self__.meta20047;
});})(flag))
;

cljs.core.async.t_cljs$core$async20046.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20046.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20047","meta20047",-471529063,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20046";

cljs.core.async.t_cljs$core$async20046.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async20046");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20046 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20046(alt_flag__$1,flag__$1,meta20047){
return (new cljs.core.async.t_cljs$core$async20046(alt_flag__$1,flag__$1,meta20047));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20046(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20052 = (function (alt_handler,flag,cb,meta20053){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20053 = meta20053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20054,meta20053__$1){
var self__ = this;
var _20054__$1 = this;
return (new cljs.core.async.t_cljs$core$async20052(self__.alt_handler,self__.flag,self__.cb,meta20053__$1));
});

cljs.core.async.t_cljs$core$async20052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20054){
var self__ = this;
var _20054__$1 = this;
return self__.meta20053;
});

cljs.core.async.t_cljs$core$async20052.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20053","meta20053",1484246692,null)], null);
});

cljs.core.async.t_cljs$core$async20052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20052";

cljs.core.async.t_cljs$core$async20052.cljs$lang$ctorPrWriter = (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async20052");
});

cljs.core.async.__GT_t_cljs$core$async20052 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20052(alt_handler__$1,flag__$1,cb__$1,meta20053){
return (new cljs.core.async.t_cljs$core$async20052(alt_handler__$1,flag__$1,cb__$1,meta20053));
});

}

return (new cljs.core.async.t_cljs$core$async20052(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20055_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20055_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20056_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20056_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17119__auto__ = wport;
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20057 = (i + (1));
i = G__20057;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17119__auto__ = ret;
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__17107__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17107__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17107__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__18184__auto__ = [];
var len__18177__auto___20063 = arguments.length;
var i__18178__auto___20064 = (0);
while(true){
if((i__18178__auto___20064 < len__18177__auto___20063)){
args__18184__auto__.push((arguments[i__18178__auto___20064]));

var G__20065 = (i__18178__auto___20064 + (1));
i__18178__auto___20064 = G__20065;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((1) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18185__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20060){
var map__20061 = p__20060;
var map__20061__$1 = ((((!((map__20061 == null)))?((((map__20061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20061):map__20061);
var opts = map__20061__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20058){
var G__20059 = cljs.core.first.call(null,seq20058);
var seq20058__$1 = cljs.core.next.call(null,seq20058);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20059,seq20058__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20066 = [];
var len__18177__auto___20116 = arguments.length;
var i__18178__auto___20117 = (0);
while(true){
if((i__18178__auto___20117 < len__18177__auto___20116)){
args20066.push((arguments[i__18178__auto___20117]));

var G__20118 = (i__18178__auto___20117 + (1));
i__18178__auto___20117 = G__20118;
continue;
} else {
}
break;
}

var G__20068 = args20066.length;
switch (G__20068) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20066.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19953__auto___20120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___20120){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___20120){
return (function (state_20092){
var state_val_20093 = (state_20092[(1)]);
if((state_val_20093 === (7))){
var inst_20088 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20094_20121 = state_20092__$1;
(statearr_20094_20121[(2)] = inst_20088);

(statearr_20094_20121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (1))){
var state_20092__$1 = state_20092;
var statearr_20095_20122 = state_20092__$1;
(statearr_20095_20122[(2)] = null);

(statearr_20095_20122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (4))){
var inst_20071 = (state_20092[(7)]);
var inst_20071__$1 = (state_20092[(2)]);
var inst_20072 = (inst_20071__$1 == null);
var state_20092__$1 = (function (){var statearr_20096 = state_20092;
(statearr_20096[(7)] = inst_20071__$1);

return statearr_20096;
})();
if(cljs.core.truth_(inst_20072)){
var statearr_20097_20123 = state_20092__$1;
(statearr_20097_20123[(1)] = (5));

} else {
var statearr_20098_20124 = state_20092__$1;
(statearr_20098_20124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (13))){
var state_20092__$1 = state_20092;
var statearr_20099_20125 = state_20092__$1;
(statearr_20099_20125[(2)] = null);

(statearr_20099_20125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (6))){
var inst_20071 = (state_20092[(7)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20092__$1,(11),to,inst_20071);
} else {
if((state_val_20093 === (3))){
var inst_20090 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20092__$1,inst_20090);
} else {
if((state_val_20093 === (12))){
var state_20092__$1 = state_20092;
var statearr_20100_20126 = state_20092__$1;
(statearr_20100_20126[(2)] = null);

(statearr_20100_20126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (2))){
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20092__$1,(4),from);
} else {
if((state_val_20093 === (11))){
var inst_20081 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
if(cljs.core.truth_(inst_20081)){
var statearr_20101_20127 = state_20092__$1;
(statearr_20101_20127[(1)] = (12));

} else {
var statearr_20102_20128 = state_20092__$1;
(statearr_20102_20128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (9))){
var state_20092__$1 = state_20092;
var statearr_20103_20129 = state_20092__$1;
(statearr_20103_20129[(2)] = null);

(statearr_20103_20129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (5))){
var state_20092__$1 = state_20092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20104_20130 = state_20092__$1;
(statearr_20104_20130[(1)] = (8));

} else {
var statearr_20105_20131 = state_20092__$1;
(statearr_20105_20131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (14))){
var inst_20086 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20106_20132 = state_20092__$1;
(statearr_20106_20132[(2)] = inst_20086);

(statearr_20106_20132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (10))){
var inst_20078 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20107_20133 = state_20092__$1;
(statearr_20107_20133[(2)] = inst_20078);

(statearr_20107_20133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (8))){
var inst_20075 = cljs.core.async.close_BANG_.call(null,to);
var state_20092__$1 = state_20092;
var statearr_20108_20134 = state_20092__$1;
(statearr_20108_20134[(2)] = inst_20075);

(statearr_20108_20134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___20120))
;
return ((function (switch__19841__auto__,c__19953__auto___20120){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_20112 = [null,null,null,null,null,null,null,null];
(statearr_20112[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_20112[(1)] = (1));

return statearr_20112;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_20092){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20113){if((e20113 instanceof Object)){
var ex__19845__auto__ = e20113;
var statearr_20114_20135 = state_20092;
(statearr_20114_20135[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20136 = state_20092;
state_20092 = G__20136;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_20092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_20092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___20120))
})();
var state__19955__auto__ = (function (){var statearr_20115 = f__19954__auto__.call(null);
(statearr_20115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___20120);

return statearr_20115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___20120))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20320){
var vec__20321 = p__20320;
var v = cljs.core.nth.call(null,vec__20321,(0),null);
var p = cljs.core.nth.call(null,vec__20321,(1),null);
var job = vec__20321;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19953__auto___20503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___20503,res,vec__20321,v,p,job,jobs,results){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___20503,res,vec__20321,v,p,job,jobs,results){
return (function (state_20326){
var state_val_20327 = (state_20326[(1)]);
if((state_val_20327 === (1))){
var state_20326__$1 = state_20326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20326__$1,(2),res,v);
} else {
if((state_val_20327 === (2))){
var inst_20323 = (state_20326[(2)]);
var inst_20324 = cljs.core.async.close_BANG_.call(null,res);
var state_20326__$1 = (function (){var statearr_20328 = state_20326;
(statearr_20328[(7)] = inst_20323);

return statearr_20328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20326__$1,inst_20324);
} else {
return null;
}
}
});})(c__19953__auto___20503,res,vec__20321,v,p,job,jobs,results))
;
return ((function (switch__19841__auto__,c__19953__auto___20503,res,vec__20321,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0 = (function (){
var statearr_20332 = [null,null,null,null,null,null,null,null];
(statearr_20332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__);

(statearr_20332[(1)] = (1));

return statearr_20332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1 = (function (state_20326){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20333){if((e20333 instanceof Object)){
var ex__19845__auto__ = e20333;
var statearr_20334_20504 = state_20326;
(statearr_20334_20504[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20505 = state_20326;
state_20326 = G__20505;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = function(state_20326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1.call(this,state_20326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___20503,res,vec__20321,v,p,job,jobs,results))
})();
var state__19955__auto__ = (function (){var statearr_20335 = f__19954__auto__.call(null);
(statearr_20335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___20503);

return statearr_20335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___20503,res,vec__20321,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20336){
var vec__20337 = p__20336;
var v = cljs.core.nth.call(null,vec__20337,(0),null);
var p = cljs.core.nth.call(null,vec__20337,(1),null);
var job = vec__20337;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18022__auto___20506 = n;
var __20507 = (0);
while(true){
if((__20507 < n__18022__auto___20506)){
var G__20338_20508 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20338_20508) {
case "compute":
var c__19953__auto___20510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20507,c__19953__auto___20510,G__20338_20508,n__18022__auto___20506,jobs,results,process,async){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (__20507,c__19953__auto___20510,G__20338_20508,n__18022__auto___20506,jobs,results,process,async){
return (function (state_20351){
var state_val_20352 = (state_20351[(1)]);
if((state_val_20352 === (1))){
var state_20351__$1 = state_20351;
var statearr_20353_20511 = state_20351__$1;
(statearr_20353_20511[(2)] = null);

(statearr_20353_20511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (2))){
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20351__$1,(4),jobs);
} else {
if((state_val_20352 === (3))){
var inst_20349 = (state_20351[(2)]);
var state_20351__$1 = state_20351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20351__$1,inst_20349);
} else {
if((state_val_20352 === (4))){
var inst_20341 = (state_20351[(2)]);
var inst_20342 = process.call(null,inst_20341);
var state_20351__$1 = state_20351;
if(cljs.core.truth_(inst_20342)){
var statearr_20354_20512 = state_20351__$1;
(statearr_20354_20512[(1)] = (5));

} else {
var statearr_20355_20513 = state_20351__$1;
(statearr_20355_20513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (5))){
var state_20351__$1 = state_20351;
var statearr_20356_20514 = state_20351__$1;
(statearr_20356_20514[(2)] = null);

(statearr_20356_20514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (6))){
var state_20351__$1 = state_20351;
var statearr_20357_20515 = state_20351__$1;
(statearr_20357_20515[(2)] = null);

(statearr_20357_20515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20352 === (7))){
var inst_20347 = (state_20351[(2)]);
var state_20351__$1 = state_20351;
var statearr_20358_20516 = state_20351__$1;
(statearr_20358_20516[(2)] = inst_20347);

(statearr_20358_20516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20507,c__19953__auto___20510,G__20338_20508,n__18022__auto___20506,jobs,results,process,async))
;
return ((function (__20507,switch__19841__auto__,c__19953__auto___20510,G__20338_20508,n__18022__auto___20506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0 = (function (){
var statearr_20362 = [null,null,null,null,null,null,null];
(statearr_20362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__);

(statearr_20362[(1)] = (1));

return statearr_20362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1 = (function (state_20351){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20363){if((e20363 instanceof Object)){
var ex__19845__auto__ = e20363;
var statearr_20364_20517 = state_20351;
(statearr_20364_20517[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20518 = state_20351;
state_20351 = G__20518;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = function(state_20351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1.call(this,state_20351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__;
})()
;})(__20507,switch__19841__auto__,c__19953__auto___20510,G__20338_20508,n__18022__auto___20506,jobs,results,process,async))
})();
var state__19955__auto__ = (function (){var statearr_20365 = f__19954__auto__.call(null);
(statearr_20365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___20510);

return statearr_20365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(__20507,c__19953__auto___20510,G__20338_20508,n__18022__auto___20506,jobs,results,process,async))
);


break;
case "async":
var c__19953__auto___20519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20507,c__19953__auto___20519,G__20338_20508,n__18022__auto___20506,jobs,results,process,async){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (__20507,c__19953__auto___20519,G__20338_20508,n__18022__auto___20506,jobs,results,process,async){
return (function (state_20378){
var state_val_20379 = (state_20378[(1)]);
if((state_val_20379 === (1))){
var state_20378__$1 = state_20378;
var statearr_20380_20520 = state_20378__$1;
(statearr_20380_20520[(2)] = null);

(statearr_20380_20520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20379 === (2))){
var state_20378__$1 = state_20378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20378__$1,(4),jobs);
} else {
if((state_val_20379 === (3))){
var inst_20376 = (state_20378[(2)]);
var state_20378__$1 = state_20378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20378__$1,inst_20376);
} else {
if((state_val_20379 === (4))){
var inst_20368 = (state_20378[(2)]);
var inst_20369 = async.call(null,inst_20368);
var state_20378__$1 = state_20378;
if(cljs.core.truth_(inst_20369)){
var statearr_20381_20521 = state_20378__$1;
(statearr_20381_20521[(1)] = (5));

} else {
var statearr_20382_20522 = state_20378__$1;
(statearr_20382_20522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20379 === (5))){
var state_20378__$1 = state_20378;
var statearr_20383_20523 = state_20378__$1;
(statearr_20383_20523[(2)] = null);

(statearr_20383_20523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20379 === (6))){
var state_20378__$1 = state_20378;
var statearr_20384_20524 = state_20378__$1;
(statearr_20384_20524[(2)] = null);

(statearr_20384_20524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20379 === (7))){
var inst_20374 = (state_20378[(2)]);
var state_20378__$1 = state_20378;
var statearr_20385_20525 = state_20378__$1;
(statearr_20385_20525[(2)] = inst_20374);

(statearr_20385_20525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20507,c__19953__auto___20519,G__20338_20508,n__18022__auto___20506,jobs,results,process,async))
;
return ((function (__20507,switch__19841__auto__,c__19953__auto___20519,G__20338_20508,n__18022__auto___20506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0 = (function (){
var statearr_20389 = [null,null,null,null,null,null,null];
(statearr_20389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__);

(statearr_20389[(1)] = (1));

return statearr_20389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1 = (function (state_20378){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20390){if((e20390 instanceof Object)){
var ex__19845__auto__ = e20390;
var statearr_20391_20526 = state_20378;
(statearr_20391_20526[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20527 = state_20378;
state_20378 = G__20527;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = function(state_20378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1.call(this,state_20378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__;
})()
;})(__20507,switch__19841__auto__,c__19953__auto___20519,G__20338_20508,n__18022__auto___20506,jobs,results,process,async))
})();
var state__19955__auto__ = (function (){var statearr_20392 = f__19954__auto__.call(null);
(statearr_20392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___20519);

return statearr_20392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(__20507,c__19953__auto___20519,G__20338_20508,n__18022__auto___20506,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20528 = (__20507 + (1));
__20507 = G__20528;
continue;
} else {
}
break;
}

var c__19953__auto___20529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___20529,jobs,results,process,async){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___20529,jobs,results,process,async){
return (function (state_20414){
var state_val_20415 = (state_20414[(1)]);
if((state_val_20415 === (1))){
var state_20414__$1 = state_20414;
var statearr_20416_20530 = state_20414__$1;
(statearr_20416_20530[(2)] = null);

(statearr_20416_20530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20415 === (2))){
var state_20414__$1 = state_20414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20414__$1,(4),from);
} else {
if((state_val_20415 === (3))){
var inst_20412 = (state_20414[(2)]);
var state_20414__$1 = state_20414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20414__$1,inst_20412);
} else {
if((state_val_20415 === (4))){
var inst_20395 = (state_20414[(7)]);
var inst_20395__$1 = (state_20414[(2)]);
var inst_20396 = (inst_20395__$1 == null);
var state_20414__$1 = (function (){var statearr_20417 = state_20414;
(statearr_20417[(7)] = inst_20395__$1);

return statearr_20417;
})();
if(cljs.core.truth_(inst_20396)){
var statearr_20418_20531 = state_20414__$1;
(statearr_20418_20531[(1)] = (5));

} else {
var statearr_20419_20532 = state_20414__$1;
(statearr_20419_20532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20415 === (5))){
var inst_20398 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20414__$1 = state_20414;
var statearr_20420_20533 = state_20414__$1;
(statearr_20420_20533[(2)] = inst_20398);

(statearr_20420_20533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20415 === (6))){
var inst_20400 = (state_20414[(8)]);
var inst_20395 = (state_20414[(7)]);
var inst_20400__$1 = cljs.core.async.chan.call(null,(1));
var inst_20401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20402 = [inst_20395,inst_20400__$1];
var inst_20403 = (new cljs.core.PersistentVector(null,2,(5),inst_20401,inst_20402,null));
var state_20414__$1 = (function (){var statearr_20421 = state_20414;
(statearr_20421[(8)] = inst_20400__$1);

return statearr_20421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20414__$1,(8),jobs,inst_20403);
} else {
if((state_val_20415 === (7))){
var inst_20410 = (state_20414[(2)]);
var state_20414__$1 = state_20414;
var statearr_20422_20534 = state_20414__$1;
(statearr_20422_20534[(2)] = inst_20410);

(statearr_20422_20534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20415 === (8))){
var inst_20400 = (state_20414[(8)]);
var inst_20405 = (state_20414[(2)]);
var state_20414__$1 = (function (){var statearr_20423 = state_20414;
(statearr_20423[(9)] = inst_20405);

return statearr_20423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20414__$1,(9),results,inst_20400);
} else {
if((state_val_20415 === (9))){
var inst_20407 = (state_20414[(2)]);
var state_20414__$1 = (function (){var statearr_20424 = state_20414;
(statearr_20424[(10)] = inst_20407);

return statearr_20424;
})();
var statearr_20425_20535 = state_20414__$1;
(statearr_20425_20535[(2)] = null);

(statearr_20425_20535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___20529,jobs,results,process,async))
;
return ((function (switch__19841__auto__,c__19953__auto___20529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0 = (function (){
var statearr_20429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__);

(statearr_20429[(1)] = (1));

return statearr_20429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1 = (function (state_20414){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20430){if((e20430 instanceof Object)){
var ex__19845__auto__ = e20430;
var statearr_20431_20536 = state_20414;
(statearr_20431_20536[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20537 = state_20414;
state_20414 = G__20537;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = function(state_20414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1.call(this,state_20414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___20529,jobs,results,process,async))
})();
var state__19955__auto__ = (function (){var statearr_20432 = f__19954__auto__.call(null);
(statearr_20432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___20529);

return statearr_20432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___20529,jobs,results,process,async))
);


var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__,jobs,results,process,async){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__,jobs,results,process,async){
return (function (state_20470){
var state_val_20471 = (state_20470[(1)]);
if((state_val_20471 === (7))){
var inst_20466 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
var statearr_20472_20538 = state_20470__$1;
(statearr_20472_20538[(2)] = inst_20466);

(statearr_20472_20538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (20))){
var state_20470__$1 = state_20470;
var statearr_20473_20539 = state_20470__$1;
(statearr_20473_20539[(2)] = null);

(statearr_20473_20539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (1))){
var state_20470__$1 = state_20470;
var statearr_20474_20540 = state_20470__$1;
(statearr_20474_20540[(2)] = null);

(statearr_20474_20540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (4))){
var inst_20435 = (state_20470[(7)]);
var inst_20435__$1 = (state_20470[(2)]);
var inst_20436 = (inst_20435__$1 == null);
var state_20470__$1 = (function (){var statearr_20475 = state_20470;
(statearr_20475[(7)] = inst_20435__$1);

return statearr_20475;
})();
if(cljs.core.truth_(inst_20436)){
var statearr_20476_20541 = state_20470__$1;
(statearr_20476_20541[(1)] = (5));

} else {
var statearr_20477_20542 = state_20470__$1;
(statearr_20477_20542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (15))){
var inst_20448 = (state_20470[(8)]);
var state_20470__$1 = state_20470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20470__$1,(18),to,inst_20448);
} else {
if((state_val_20471 === (21))){
var inst_20461 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
var statearr_20478_20543 = state_20470__$1;
(statearr_20478_20543[(2)] = inst_20461);

(statearr_20478_20543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (13))){
var inst_20463 = (state_20470[(2)]);
var state_20470__$1 = (function (){var statearr_20479 = state_20470;
(statearr_20479[(9)] = inst_20463);

return statearr_20479;
})();
var statearr_20480_20544 = state_20470__$1;
(statearr_20480_20544[(2)] = null);

(statearr_20480_20544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (6))){
var inst_20435 = (state_20470[(7)]);
var state_20470__$1 = state_20470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20470__$1,(11),inst_20435);
} else {
if((state_val_20471 === (17))){
var inst_20456 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
if(cljs.core.truth_(inst_20456)){
var statearr_20481_20545 = state_20470__$1;
(statearr_20481_20545[(1)] = (19));

} else {
var statearr_20482_20546 = state_20470__$1;
(statearr_20482_20546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (3))){
var inst_20468 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20470__$1,inst_20468);
} else {
if((state_val_20471 === (12))){
var inst_20445 = (state_20470[(10)]);
var state_20470__$1 = state_20470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20470__$1,(14),inst_20445);
} else {
if((state_val_20471 === (2))){
var state_20470__$1 = state_20470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20470__$1,(4),results);
} else {
if((state_val_20471 === (19))){
var state_20470__$1 = state_20470;
var statearr_20483_20547 = state_20470__$1;
(statearr_20483_20547[(2)] = null);

(statearr_20483_20547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (11))){
var inst_20445 = (state_20470[(2)]);
var state_20470__$1 = (function (){var statearr_20484 = state_20470;
(statearr_20484[(10)] = inst_20445);

return statearr_20484;
})();
var statearr_20485_20548 = state_20470__$1;
(statearr_20485_20548[(2)] = null);

(statearr_20485_20548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (9))){
var state_20470__$1 = state_20470;
var statearr_20486_20549 = state_20470__$1;
(statearr_20486_20549[(2)] = null);

(statearr_20486_20549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (5))){
var state_20470__$1 = state_20470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20487_20550 = state_20470__$1;
(statearr_20487_20550[(1)] = (8));

} else {
var statearr_20488_20551 = state_20470__$1;
(statearr_20488_20551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (14))){
var inst_20450 = (state_20470[(11)]);
var inst_20448 = (state_20470[(8)]);
var inst_20448__$1 = (state_20470[(2)]);
var inst_20449 = (inst_20448__$1 == null);
var inst_20450__$1 = cljs.core.not.call(null,inst_20449);
var state_20470__$1 = (function (){var statearr_20489 = state_20470;
(statearr_20489[(11)] = inst_20450__$1);

(statearr_20489[(8)] = inst_20448__$1);

return statearr_20489;
})();
if(inst_20450__$1){
var statearr_20490_20552 = state_20470__$1;
(statearr_20490_20552[(1)] = (15));

} else {
var statearr_20491_20553 = state_20470__$1;
(statearr_20491_20553[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (16))){
var inst_20450 = (state_20470[(11)]);
var state_20470__$1 = state_20470;
var statearr_20492_20554 = state_20470__$1;
(statearr_20492_20554[(2)] = inst_20450);

(statearr_20492_20554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (10))){
var inst_20442 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
var statearr_20493_20555 = state_20470__$1;
(statearr_20493_20555[(2)] = inst_20442);

(statearr_20493_20555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (18))){
var inst_20453 = (state_20470[(2)]);
var state_20470__$1 = state_20470;
var statearr_20494_20556 = state_20470__$1;
(statearr_20494_20556[(2)] = inst_20453);

(statearr_20494_20556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20471 === (8))){
var inst_20439 = cljs.core.async.close_BANG_.call(null,to);
var state_20470__$1 = state_20470;
var statearr_20495_20557 = state_20470__$1;
(statearr_20495_20557[(2)] = inst_20439);

(statearr_20495_20557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto__,jobs,results,process,async))
;
return ((function (switch__19841__auto__,c__19953__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0 = (function (){
var statearr_20499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__);

(statearr_20499[(1)] = (1));

return statearr_20499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1 = (function (state_20470){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20500){if((e20500 instanceof Object)){
var ex__19845__auto__ = e20500;
var statearr_20501_20558 = state_20470;
(statearr_20501_20558[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20559 = state_20470;
state_20470 = G__20559;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__ = function(state_20470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1.call(this,state_20470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__,jobs,results,process,async))
})();
var state__19955__auto__ = (function (){var statearr_20502 = f__19954__auto__.call(null);
(statearr_20502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_20502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__,jobs,results,process,async))
);

return c__19953__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20560 = [];
var len__18177__auto___20563 = arguments.length;
var i__18178__auto___20564 = (0);
while(true){
if((i__18178__auto___20564 < len__18177__auto___20563)){
args20560.push((arguments[i__18178__auto___20564]));

var G__20565 = (i__18178__auto___20564 + (1));
i__18178__auto___20564 = G__20565;
continue;
} else {
}
break;
}

var G__20562 = args20560.length;
switch (G__20562) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20560.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20567 = [];
var len__18177__auto___20570 = arguments.length;
var i__18178__auto___20571 = (0);
while(true){
if((i__18178__auto___20571 < len__18177__auto___20570)){
args20567.push((arguments[i__18178__auto___20571]));

var G__20572 = (i__18178__auto___20571 + (1));
i__18178__auto___20571 = G__20572;
continue;
} else {
}
break;
}

var G__20569 = args20567.length;
switch (G__20569) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20567.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20574 = [];
var len__18177__auto___20627 = arguments.length;
var i__18178__auto___20628 = (0);
while(true){
if((i__18178__auto___20628 < len__18177__auto___20627)){
args20574.push((arguments[i__18178__auto___20628]));

var G__20629 = (i__18178__auto___20628 + (1));
i__18178__auto___20628 = G__20629;
continue;
} else {
}
break;
}

var G__20576 = args20574.length;
switch (G__20576) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20574.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19953__auto___20631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___20631,tc,fc){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___20631,tc,fc){
return (function (state_20602){
var state_val_20603 = (state_20602[(1)]);
if((state_val_20603 === (7))){
var inst_20598 = (state_20602[(2)]);
var state_20602__$1 = state_20602;
var statearr_20604_20632 = state_20602__$1;
(statearr_20604_20632[(2)] = inst_20598);

(statearr_20604_20632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (1))){
var state_20602__$1 = state_20602;
var statearr_20605_20633 = state_20602__$1;
(statearr_20605_20633[(2)] = null);

(statearr_20605_20633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (4))){
var inst_20579 = (state_20602[(7)]);
var inst_20579__$1 = (state_20602[(2)]);
var inst_20580 = (inst_20579__$1 == null);
var state_20602__$1 = (function (){var statearr_20606 = state_20602;
(statearr_20606[(7)] = inst_20579__$1);

return statearr_20606;
})();
if(cljs.core.truth_(inst_20580)){
var statearr_20607_20634 = state_20602__$1;
(statearr_20607_20634[(1)] = (5));

} else {
var statearr_20608_20635 = state_20602__$1;
(statearr_20608_20635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (13))){
var state_20602__$1 = state_20602;
var statearr_20609_20636 = state_20602__$1;
(statearr_20609_20636[(2)] = null);

(statearr_20609_20636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (6))){
var inst_20579 = (state_20602[(7)]);
var inst_20585 = p.call(null,inst_20579);
var state_20602__$1 = state_20602;
if(cljs.core.truth_(inst_20585)){
var statearr_20610_20637 = state_20602__$1;
(statearr_20610_20637[(1)] = (9));

} else {
var statearr_20611_20638 = state_20602__$1;
(statearr_20611_20638[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (3))){
var inst_20600 = (state_20602[(2)]);
var state_20602__$1 = state_20602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20602__$1,inst_20600);
} else {
if((state_val_20603 === (12))){
var state_20602__$1 = state_20602;
var statearr_20612_20639 = state_20602__$1;
(statearr_20612_20639[(2)] = null);

(statearr_20612_20639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (2))){
var state_20602__$1 = state_20602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20602__$1,(4),ch);
} else {
if((state_val_20603 === (11))){
var inst_20579 = (state_20602[(7)]);
var inst_20589 = (state_20602[(2)]);
var state_20602__$1 = state_20602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20602__$1,(8),inst_20589,inst_20579);
} else {
if((state_val_20603 === (9))){
var state_20602__$1 = state_20602;
var statearr_20613_20640 = state_20602__$1;
(statearr_20613_20640[(2)] = tc);

(statearr_20613_20640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (5))){
var inst_20582 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20583 = cljs.core.async.close_BANG_.call(null,fc);
var state_20602__$1 = (function (){var statearr_20614 = state_20602;
(statearr_20614[(8)] = inst_20582);

return statearr_20614;
})();
var statearr_20615_20641 = state_20602__$1;
(statearr_20615_20641[(2)] = inst_20583);

(statearr_20615_20641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (14))){
var inst_20596 = (state_20602[(2)]);
var state_20602__$1 = state_20602;
var statearr_20616_20642 = state_20602__$1;
(statearr_20616_20642[(2)] = inst_20596);

(statearr_20616_20642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (10))){
var state_20602__$1 = state_20602;
var statearr_20617_20643 = state_20602__$1;
(statearr_20617_20643[(2)] = fc);

(statearr_20617_20643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20603 === (8))){
var inst_20591 = (state_20602[(2)]);
var state_20602__$1 = state_20602;
if(cljs.core.truth_(inst_20591)){
var statearr_20618_20644 = state_20602__$1;
(statearr_20618_20644[(1)] = (12));

} else {
var statearr_20619_20645 = state_20602__$1;
(statearr_20619_20645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___20631,tc,fc))
;
return ((function (switch__19841__auto__,c__19953__auto___20631,tc,fc){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_20623 = [null,null,null,null,null,null,null,null,null];
(statearr_20623[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_20623[(1)] = (1));

return statearr_20623;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_20602){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20624){if((e20624 instanceof Object)){
var ex__19845__auto__ = e20624;
var statearr_20625_20646 = state_20602;
(statearr_20625_20646[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20647 = state_20602;
state_20602 = G__20647;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_20602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_20602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___20631,tc,fc))
})();
var state__19955__auto__ = (function (){var statearr_20626 = f__19954__auto__.call(null);
(statearr_20626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___20631);

return statearr_20626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___20631,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__){
return (function (state_20711){
var state_val_20712 = (state_20711[(1)]);
if((state_val_20712 === (7))){
var inst_20707 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
var statearr_20713_20734 = state_20711__$1;
(statearr_20713_20734[(2)] = inst_20707);

(statearr_20713_20734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (1))){
var inst_20691 = init;
var state_20711__$1 = (function (){var statearr_20714 = state_20711;
(statearr_20714[(7)] = inst_20691);

return statearr_20714;
})();
var statearr_20715_20735 = state_20711__$1;
(statearr_20715_20735[(2)] = null);

(statearr_20715_20735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (4))){
var inst_20694 = (state_20711[(8)]);
var inst_20694__$1 = (state_20711[(2)]);
var inst_20695 = (inst_20694__$1 == null);
var state_20711__$1 = (function (){var statearr_20716 = state_20711;
(statearr_20716[(8)] = inst_20694__$1);

return statearr_20716;
})();
if(cljs.core.truth_(inst_20695)){
var statearr_20717_20736 = state_20711__$1;
(statearr_20717_20736[(1)] = (5));

} else {
var statearr_20718_20737 = state_20711__$1;
(statearr_20718_20737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (6))){
var inst_20698 = (state_20711[(9)]);
var inst_20691 = (state_20711[(7)]);
var inst_20694 = (state_20711[(8)]);
var inst_20698__$1 = f.call(null,inst_20691,inst_20694);
var inst_20699 = cljs.core.reduced_QMARK_.call(null,inst_20698__$1);
var state_20711__$1 = (function (){var statearr_20719 = state_20711;
(statearr_20719[(9)] = inst_20698__$1);

return statearr_20719;
})();
if(inst_20699){
var statearr_20720_20738 = state_20711__$1;
(statearr_20720_20738[(1)] = (8));

} else {
var statearr_20721_20739 = state_20711__$1;
(statearr_20721_20739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (3))){
var inst_20709 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20711__$1,inst_20709);
} else {
if((state_val_20712 === (2))){
var state_20711__$1 = state_20711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20711__$1,(4),ch);
} else {
if((state_val_20712 === (9))){
var inst_20698 = (state_20711[(9)]);
var inst_20691 = inst_20698;
var state_20711__$1 = (function (){var statearr_20722 = state_20711;
(statearr_20722[(7)] = inst_20691);

return statearr_20722;
})();
var statearr_20723_20740 = state_20711__$1;
(statearr_20723_20740[(2)] = null);

(statearr_20723_20740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (5))){
var inst_20691 = (state_20711[(7)]);
var state_20711__$1 = state_20711;
var statearr_20724_20741 = state_20711__$1;
(statearr_20724_20741[(2)] = inst_20691);

(statearr_20724_20741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (10))){
var inst_20705 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
var statearr_20725_20742 = state_20711__$1;
(statearr_20725_20742[(2)] = inst_20705);

(statearr_20725_20742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (8))){
var inst_20698 = (state_20711[(9)]);
var inst_20701 = cljs.core.deref.call(null,inst_20698);
var state_20711__$1 = state_20711;
var statearr_20726_20743 = state_20711__$1;
(statearr_20726_20743[(2)] = inst_20701);

(statearr_20726_20743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto__))
;
return ((function (switch__19841__auto__,c__19953__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19842__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19842__auto____0 = (function (){
var statearr_20730 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20730[(0)] = cljs$core$async$reduce_$_state_machine__19842__auto__);

(statearr_20730[(1)] = (1));

return statearr_20730;
});
var cljs$core$async$reduce_$_state_machine__19842__auto____1 = (function (state_20711){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20731){if((e20731 instanceof Object)){
var ex__19845__auto__ = e20731;
var statearr_20732_20744 = state_20711;
(statearr_20732_20744[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20745 = state_20711;
state_20711 = G__20745;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19842__auto__ = function(state_20711){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19842__auto____1.call(this,state_20711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19842__auto____0;
cljs$core$async$reduce_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19842__auto____1;
return cljs$core$async$reduce_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__))
})();
var state__19955__auto__ = (function (){var statearr_20733 = f__19954__auto__.call(null);
(statearr_20733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_20733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__))
);

return c__19953__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20746 = [];
var len__18177__auto___20798 = arguments.length;
var i__18178__auto___20799 = (0);
while(true){
if((i__18178__auto___20799 < len__18177__auto___20798)){
args20746.push((arguments[i__18178__auto___20799]));

var G__20800 = (i__18178__auto___20799 + (1));
i__18178__auto___20799 = G__20800;
continue;
} else {
}
break;
}

var G__20748 = args20746.length;
switch (G__20748) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20746.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__){
return (function (state_20773){
var state_val_20774 = (state_20773[(1)]);
if((state_val_20774 === (7))){
var inst_20755 = (state_20773[(2)]);
var state_20773__$1 = state_20773;
var statearr_20775_20802 = state_20773__$1;
(statearr_20775_20802[(2)] = inst_20755);

(statearr_20775_20802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (1))){
var inst_20749 = cljs.core.seq.call(null,coll);
var inst_20750 = inst_20749;
var state_20773__$1 = (function (){var statearr_20776 = state_20773;
(statearr_20776[(7)] = inst_20750);

return statearr_20776;
})();
var statearr_20777_20803 = state_20773__$1;
(statearr_20777_20803[(2)] = null);

(statearr_20777_20803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (4))){
var inst_20750 = (state_20773[(7)]);
var inst_20753 = cljs.core.first.call(null,inst_20750);
var state_20773__$1 = state_20773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20773__$1,(7),ch,inst_20753);
} else {
if((state_val_20774 === (13))){
var inst_20767 = (state_20773[(2)]);
var state_20773__$1 = state_20773;
var statearr_20778_20804 = state_20773__$1;
(statearr_20778_20804[(2)] = inst_20767);

(statearr_20778_20804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (6))){
var inst_20758 = (state_20773[(2)]);
var state_20773__$1 = state_20773;
if(cljs.core.truth_(inst_20758)){
var statearr_20779_20805 = state_20773__$1;
(statearr_20779_20805[(1)] = (8));

} else {
var statearr_20780_20806 = state_20773__$1;
(statearr_20780_20806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (3))){
var inst_20771 = (state_20773[(2)]);
var state_20773__$1 = state_20773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20773__$1,inst_20771);
} else {
if((state_val_20774 === (12))){
var state_20773__$1 = state_20773;
var statearr_20781_20807 = state_20773__$1;
(statearr_20781_20807[(2)] = null);

(statearr_20781_20807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (2))){
var inst_20750 = (state_20773[(7)]);
var state_20773__$1 = state_20773;
if(cljs.core.truth_(inst_20750)){
var statearr_20782_20808 = state_20773__$1;
(statearr_20782_20808[(1)] = (4));

} else {
var statearr_20783_20809 = state_20773__$1;
(statearr_20783_20809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (11))){
var inst_20764 = cljs.core.async.close_BANG_.call(null,ch);
var state_20773__$1 = state_20773;
var statearr_20784_20810 = state_20773__$1;
(statearr_20784_20810[(2)] = inst_20764);

(statearr_20784_20810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (9))){
var state_20773__$1 = state_20773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20785_20811 = state_20773__$1;
(statearr_20785_20811[(1)] = (11));

} else {
var statearr_20786_20812 = state_20773__$1;
(statearr_20786_20812[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (5))){
var inst_20750 = (state_20773[(7)]);
var state_20773__$1 = state_20773;
var statearr_20787_20813 = state_20773__$1;
(statearr_20787_20813[(2)] = inst_20750);

(statearr_20787_20813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (10))){
var inst_20769 = (state_20773[(2)]);
var state_20773__$1 = state_20773;
var statearr_20788_20814 = state_20773__$1;
(statearr_20788_20814[(2)] = inst_20769);

(statearr_20788_20814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20774 === (8))){
var inst_20750 = (state_20773[(7)]);
var inst_20760 = cljs.core.next.call(null,inst_20750);
var inst_20750__$1 = inst_20760;
var state_20773__$1 = (function (){var statearr_20789 = state_20773;
(statearr_20789[(7)] = inst_20750__$1);

return statearr_20789;
})();
var statearr_20790_20815 = state_20773__$1;
(statearr_20790_20815[(2)] = null);

(statearr_20790_20815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto__))
;
return ((function (switch__19841__auto__,c__19953__auto__){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_20794 = [null,null,null,null,null,null,null,null];
(statearr_20794[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_20794[(1)] = (1));

return statearr_20794;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_20773){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_20773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e20795){if((e20795 instanceof Object)){
var ex__19845__auto__ = e20795;
var statearr_20796_20816 = state_20773;
(statearr_20796_20816[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20817 = state_20773;
state_20773 = G__20817;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_20773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_20773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__))
})();
var state__19955__auto__ = (function (){var statearr_20797 = f__19954__auto__.call(null);
(statearr_20797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_20797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__))
);

return c__19953__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17774__auto__ = (((_ == null))?null:_);
var m__17775__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,_);
} else {
var m__17775__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17774__auto__ = (((m == null))?null:m);
var m__17775__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17775__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17774__auto__ = (((m == null))?null:m);
var m__17775__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,m,ch);
} else {
var m__17775__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17774__auto__ = (((m == null))?null:m);
var m__17775__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,m);
} else {
var m__17775__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21039 = (function (mult,ch,cs,meta21040){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21040 = meta21040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21041,meta21040__$1){
var self__ = this;
var _21041__$1 = this;
return (new cljs.core.async.t_cljs$core$async21039(self__.mult,self__.ch,self__.cs,meta21040__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21041){
var self__ = this;
var _21041__$1 = this;
return self__.meta21040;
});})(cs))
;

cljs.core.async.t_cljs$core$async21039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21039.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21039.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21039.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21039.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21039.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21040","meta21040",-1071322032,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21039";

cljs.core.async.t_cljs$core$async21039.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async21039");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21039 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21039(mult__$1,ch__$1,cs__$1,meta21040){
return (new cljs.core.async.t_cljs$core$async21039(mult__$1,ch__$1,cs__$1,meta21040));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21039(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19953__auto___21260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___21260,cs,m,dchan,dctr,done){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___21260,cs,m,dchan,dctr,done){
return (function (state_21172){
var state_val_21173 = (state_21172[(1)]);
if((state_val_21173 === (7))){
var inst_21168 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21174_21261 = state_21172__$1;
(statearr_21174_21261[(2)] = inst_21168);

(statearr_21174_21261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (20))){
var inst_21073 = (state_21172[(7)]);
var inst_21083 = cljs.core.first.call(null,inst_21073);
var inst_21084 = cljs.core.nth.call(null,inst_21083,(0),null);
var inst_21085 = cljs.core.nth.call(null,inst_21083,(1),null);
var state_21172__$1 = (function (){var statearr_21175 = state_21172;
(statearr_21175[(8)] = inst_21084);

return statearr_21175;
})();
if(cljs.core.truth_(inst_21085)){
var statearr_21176_21262 = state_21172__$1;
(statearr_21176_21262[(1)] = (22));

} else {
var statearr_21177_21263 = state_21172__$1;
(statearr_21177_21263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (27))){
var inst_21120 = (state_21172[(9)]);
var inst_21115 = (state_21172[(10)]);
var inst_21113 = (state_21172[(11)]);
var inst_21044 = (state_21172[(12)]);
var inst_21120__$1 = cljs.core._nth.call(null,inst_21113,inst_21115);
var inst_21121 = cljs.core.async.put_BANG_.call(null,inst_21120__$1,inst_21044,done);
var state_21172__$1 = (function (){var statearr_21178 = state_21172;
(statearr_21178[(9)] = inst_21120__$1);

return statearr_21178;
})();
if(cljs.core.truth_(inst_21121)){
var statearr_21179_21264 = state_21172__$1;
(statearr_21179_21264[(1)] = (30));

} else {
var statearr_21180_21265 = state_21172__$1;
(statearr_21180_21265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (1))){
var state_21172__$1 = state_21172;
var statearr_21181_21266 = state_21172__$1;
(statearr_21181_21266[(2)] = null);

(statearr_21181_21266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (24))){
var inst_21073 = (state_21172[(7)]);
var inst_21090 = (state_21172[(2)]);
var inst_21091 = cljs.core.next.call(null,inst_21073);
var inst_21053 = inst_21091;
var inst_21054 = null;
var inst_21055 = (0);
var inst_21056 = (0);
var state_21172__$1 = (function (){var statearr_21182 = state_21172;
(statearr_21182[(13)] = inst_21056);

(statearr_21182[(14)] = inst_21090);

(statearr_21182[(15)] = inst_21054);

(statearr_21182[(16)] = inst_21055);

(statearr_21182[(17)] = inst_21053);

return statearr_21182;
})();
var statearr_21183_21267 = state_21172__$1;
(statearr_21183_21267[(2)] = null);

(statearr_21183_21267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (39))){
var state_21172__$1 = state_21172;
var statearr_21187_21268 = state_21172__$1;
(statearr_21187_21268[(2)] = null);

(statearr_21187_21268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (4))){
var inst_21044 = (state_21172[(12)]);
var inst_21044__$1 = (state_21172[(2)]);
var inst_21045 = (inst_21044__$1 == null);
var state_21172__$1 = (function (){var statearr_21188 = state_21172;
(statearr_21188[(12)] = inst_21044__$1);

return statearr_21188;
})();
if(cljs.core.truth_(inst_21045)){
var statearr_21189_21269 = state_21172__$1;
(statearr_21189_21269[(1)] = (5));

} else {
var statearr_21190_21270 = state_21172__$1;
(statearr_21190_21270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (15))){
var inst_21056 = (state_21172[(13)]);
var inst_21054 = (state_21172[(15)]);
var inst_21055 = (state_21172[(16)]);
var inst_21053 = (state_21172[(17)]);
var inst_21069 = (state_21172[(2)]);
var inst_21070 = (inst_21056 + (1));
var tmp21184 = inst_21054;
var tmp21185 = inst_21055;
var tmp21186 = inst_21053;
var inst_21053__$1 = tmp21186;
var inst_21054__$1 = tmp21184;
var inst_21055__$1 = tmp21185;
var inst_21056__$1 = inst_21070;
var state_21172__$1 = (function (){var statearr_21191 = state_21172;
(statearr_21191[(13)] = inst_21056__$1);

(statearr_21191[(15)] = inst_21054__$1);

(statearr_21191[(16)] = inst_21055__$1);

(statearr_21191[(17)] = inst_21053__$1);

(statearr_21191[(18)] = inst_21069);

return statearr_21191;
})();
var statearr_21192_21271 = state_21172__$1;
(statearr_21192_21271[(2)] = null);

(statearr_21192_21271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (21))){
var inst_21094 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21196_21272 = state_21172__$1;
(statearr_21196_21272[(2)] = inst_21094);

(statearr_21196_21272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (31))){
var inst_21120 = (state_21172[(9)]);
var inst_21124 = done.call(null,null);
var inst_21125 = cljs.core.async.untap_STAR_.call(null,m,inst_21120);
var state_21172__$1 = (function (){var statearr_21197 = state_21172;
(statearr_21197[(19)] = inst_21124);

return statearr_21197;
})();
var statearr_21198_21273 = state_21172__$1;
(statearr_21198_21273[(2)] = inst_21125);

(statearr_21198_21273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (32))){
var inst_21112 = (state_21172[(20)]);
var inst_21115 = (state_21172[(10)]);
var inst_21113 = (state_21172[(11)]);
var inst_21114 = (state_21172[(21)]);
var inst_21127 = (state_21172[(2)]);
var inst_21128 = (inst_21115 + (1));
var tmp21193 = inst_21112;
var tmp21194 = inst_21113;
var tmp21195 = inst_21114;
var inst_21112__$1 = tmp21193;
var inst_21113__$1 = tmp21194;
var inst_21114__$1 = tmp21195;
var inst_21115__$1 = inst_21128;
var state_21172__$1 = (function (){var statearr_21199 = state_21172;
(statearr_21199[(22)] = inst_21127);

(statearr_21199[(20)] = inst_21112__$1);

(statearr_21199[(10)] = inst_21115__$1);

(statearr_21199[(11)] = inst_21113__$1);

(statearr_21199[(21)] = inst_21114__$1);

return statearr_21199;
})();
var statearr_21200_21274 = state_21172__$1;
(statearr_21200_21274[(2)] = null);

(statearr_21200_21274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (40))){
var inst_21140 = (state_21172[(23)]);
var inst_21144 = done.call(null,null);
var inst_21145 = cljs.core.async.untap_STAR_.call(null,m,inst_21140);
var state_21172__$1 = (function (){var statearr_21201 = state_21172;
(statearr_21201[(24)] = inst_21144);

return statearr_21201;
})();
var statearr_21202_21275 = state_21172__$1;
(statearr_21202_21275[(2)] = inst_21145);

(statearr_21202_21275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (33))){
var inst_21131 = (state_21172[(25)]);
var inst_21133 = cljs.core.chunked_seq_QMARK_.call(null,inst_21131);
var state_21172__$1 = state_21172;
if(inst_21133){
var statearr_21203_21276 = state_21172__$1;
(statearr_21203_21276[(1)] = (36));

} else {
var statearr_21204_21277 = state_21172__$1;
(statearr_21204_21277[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (13))){
var inst_21063 = (state_21172[(26)]);
var inst_21066 = cljs.core.async.close_BANG_.call(null,inst_21063);
var state_21172__$1 = state_21172;
var statearr_21205_21278 = state_21172__$1;
(statearr_21205_21278[(2)] = inst_21066);

(statearr_21205_21278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (22))){
var inst_21084 = (state_21172[(8)]);
var inst_21087 = cljs.core.async.close_BANG_.call(null,inst_21084);
var state_21172__$1 = state_21172;
var statearr_21206_21279 = state_21172__$1;
(statearr_21206_21279[(2)] = inst_21087);

(statearr_21206_21279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (36))){
var inst_21131 = (state_21172[(25)]);
var inst_21135 = cljs.core.chunk_first.call(null,inst_21131);
var inst_21136 = cljs.core.chunk_rest.call(null,inst_21131);
var inst_21137 = cljs.core.count.call(null,inst_21135);
var inst_21112 = inst_21136;
var inst_21113 = inst_21135;
var inst_21114 = inst_21137;
var inst_21115 = (0);
var state_21172__$1 = (function (){var statearr_21207 = state_21172;
(statearr_21207[(20)] = inst_21112);

(statearr_21207[(10)] = inst_21115);

(statearr_21207[(11)] = inst_21113);

(statearr_21207[(21)] = inst_21114);

return statearr_21207;
})();
var statearr_21208_21280 = state_21172__$1;
(statearr_21208_21280[(2)] = null);

(statearr_21208_21280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (41))){
var inst_21131 = (state_21172[(25)]);
var inst_21147 = (state_21172[(2)]);
var inst_21148 = cljs.core.next.call(null,inst_21131);
var inst_21112 = inst_21148;
var inst_21113 = null;
var inst_21114 = (0);
var inst_21115 = (0);
var state_21172__$1 = (function (){var statearr_21209 = state_21172;
(statearr_21209[(20)] = inst_21112);

(statearr_21209[(10)] = inst_21115);

(statearr_21209[(11)] = inst_21113);

(statearr_21209[(21)] = inst_21114);

(statearr_21209[(27)] = inst_21147);

return statearr_21209;
})();
var statearr_21210_21281 = state_21172__$1;
(statearr_21210_21281[(2)] = null);

(statearr_21210_21281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (43))){
var state_21172__$1 = state_21172;
var statearr_21211_21282 = state_21172__$1;
(statearr_21211_21282[(2)] = null);

(statearr_21211_21282[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (29))){
var inst_21156 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21212_21283 = state_21172__$1;
(statearr_21212_21283[(2)] = inst_21156);

(statearr_21212_21283[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (44))){
var inst_21165 = (state_21172[(2)]);
var state_21172__$1 = (function (){var statearr_21213 = state_21172;
(statearr_21213[(28)] = inst_21165);

return statearr_21213;
})();
var statearr_21214_21284 = state_21172__$1;
(statearr_21214_21284[(2)] = null);

(statearr_21214_21284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (6))){
var inst_21104 = (state_21172[(29)]);
var inst_21103 = cljs.core.deref.call(null,cs);
var inst_21104__$1 = cljs.core.keys.call(null,inst_21103);
var inst_21105 = cljs.core.count.call(null,inst_21104__$1);
var inst_21106 = cljs.core.reset_BANG_.call(null,dctr,inst_21105);
var inst_21111 = cljs.core.seq.call(null,inst_21104__$1);
var inst_21112 = inst_21111;
var inst_21113 = null;
var inst_21114 = (0);
var inst_21115 = (0);
var state_21172__$1 = (function (){var statearr_21215 = state_21172;
(statearr_21215[(20)] = inst_21112);

(statearr_21215[(10)] = inst_21115);

(statearr_21215[(11)] = inst_21113);

(statearr_21215[(30)] = inst_21106);

(statearr_21215[(21)] = inst_21114);

(statearr_21215[(29)] = inst_21104__$1);

return statearr_21215;
})();
var statearr_21216_21285 = state_21172__$1;
(statearr_21216_21285[(2)] = null);

(statearr_21216_21285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (28))){
var inst_21131 = (state_21172[(25)]);
var inst_21112 = (state_21172[(20)]);
var inst_21131__$1 = cljs.core.seq.call(null,inst_21112);
var state_21172__$1 = (function (){var statearr_21217 = state_21172;
(statearr_21217[(25)] = inst_21131__$1);

return statearr_21217;
})();
if(inst_21131__$1){
var statearr_21218_21286 = state_21172__$1;
(statearr_21218_21286[(1)] = (33));

} else {
var statearr_21219_21287 = state_21172__$1;
(statearr_21219_21287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (25))){
var inst_21115 = (state_21172[(10)]);
var inst_21114 = (state_21172[(21)]);
var inst_21117 = (inst_21115 < inst_21114);
var inst_21118 = inst_21117;
var state_21172__$1 = state_21172;
if(cljs.core.truth_(inst_21118)){
var statearr_21220_21288 = state_21172__$1;
(statearr_21220_21288[(1)] = (27));

} else {
var statearr_21221_21289 = state_21172__$1;
(statearr_21221_21289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (34))){
var state_21172__$1 = state_21172;
var statearr_21222_21290 = state_21172__$1;
(statearr_21222_21290[(2)] = null);

(statearr_21222_21290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (17))){
var state_21172__$1 = state_21172;
var statearr_21223_21291 = state_21172__$1;
(statearr_21223_21291[(2)] = null);

(statearr_21223_21291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (3))){
var inst_21170 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21172__$1,inst_21170);
} else {
if((state_val_21173 === (12))){
var inst_21099 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21224_21292 = state_21172__$1;
(statearr_21224_21292[(2)] = inst_21099);

(statearr_21224_21292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (2))){
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21172__$1,(4),ch);
} else {
if((state_val_21173 === (23))){
var state_21172__$1 = state_21172;
var statearr_21225_21293 = state_21172__$1;
(statearr_21225_21293[(2)] = null);

(statearr_21225_21293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (35))){
var inst_21154 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21226_21294 = state_21172__$1;
(statearr_21226_21294[(2)] = inst_21154);

(statearr_21226_21294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (19))){
var inst_21073 = (state_21172[(7)]);
var inst_21077 = cljs.core.chunk_first.call(null,inst_21073);
var inst_21078 = cljs.core.chunk_rest.call(null,inst_21073);
var inst_21079 = cljs.core.count.call(null,inst_21077);
var inst_21053 = inst_21078;
var inst_21054 = inst_21077;
var inst_21055 = inst_21079;
var inst_21056 = (0);
var state_21172__$1 = (function (){var statearr_21227 = state_21172;
(statearr_21227[(13)] = inst_21056);

(statearr_21227[(15)] = inst_21054);

(statearr_21227[(16)] = inst_21055);

(statearr_21227[(17)] = inst_21053);

return statearr_21227;
})();
var statearr_21228_21295 = state_21172__$1;
(statearr_21228_21295[(2)] = null);

(statearr_21228_21295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (11))){
var inst_21073 = (state_21172[(7)]);
var inst_21053 = (state_21172[(17)]);
var inst_21073__$1 = cljs.core.seq.call(null,inst_21053);
var state_21172__$1 = (function (){var statearr_21229 = state_21172;
(statearr_21229[(7)] = inst_21073__$1);

return statearr_21229;
})();
if(inst_21073__$1){
var statearr_21230_21296 = state_21172__$1;
(statearr_21230_21296[(1)] = (16));

} else {
var statearr_21231_21297 = state_21172__$1;
(statearr_21231_21297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (9))){
var inst_21101 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21232_21298 = state_21172__$1;
(statearr_21232_21298[(2)] = inst_21101);

(statearr_21232_21298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (5))){
var inst_21051 = cljs.core.deref.call(null,cs);
var inst_21052 = cljs.core.seq.call(null,inst_21051);
var inst_21053 = inst_21052;
var inst_21054 = null;
var inst_21055 = (0);
var inst_21056 = (0);
var state_21172__$1 = (function (){var statearr_21233 = state_21172;
(statearr_21233[(13)] = inst_21056);

(statearr_21233[(15)] = inst_21054);

(statearr_21233[(16)] = inst_21055);

(statearr_21233[(17)] = inst_21053);

return statearr_21233;
})();
var statearr_21234_21299 = state_21172__$1;
(statearr_21234_21299[(2)] = null);

(statearr_21234_21299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (14))){
var state_21172__$1 = state_21172;
var statearr_21235_21300 = state_21172__$1;
(statearr_21235_21300[(2)] = null);

(statearr_21235_21300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (45))){
var inst_21162 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21236_21301 = state_21172__$1;
(statearr_21236_21301[(2)] = inst_21162);

(statearr_21236_21301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (26))){
var inst_21104 = (state_21172[(29)]);
var inst_21158 = (state_21172[(2)]);
var inst_21159 = cljs.core.seq.call(null,inst_21104);
var state_21172__$1 = (function (){var statearr_21237 = state_21172;
(statearr_21237[(31)] = inst_21158);

return statearr_21237;
})();
if(inst_21159){
var statearr_21238_21302 = state_21172__$1;
(statearr_21238_21302[(1)] = (42));

} else {
var statearr_21239_21303 = state_21172__$1;
(statearr_21239_21303[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (16))){
var inst_21073 = (state_21172[(7)]);
var inst_21075 = cljs.core.chunked_seq_QMARK_.call(null,inst_21073);
var state_21172__$1 = state_21172;
if(inst_21075){
var statearr_21240_21304 = state_21172__$1;
(statearr_21240_21304[(1)] = (19));

} else {
var statearr_21241_21305 = state_21172__$1;
(statearr_21241_21305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (38))){
var inst_21151 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21242_21306 = state_21172__$1;
(statearr_21242_21306[(2)] = inst_21151);

(statearr_21242_21306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (30))){
var state_21172__$1 = state_21172;
var statearr_21243_21307 = state_21172__$1;
(statearr_21243_21307[(2)] = null);

(statearr_21243_21307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (10))){
var inst_21056 = (state_21172[(13)]);
var inst_21054 = (state_21172[(15)]);
var inst_21062 = cljs.core._nth.call(null,inst_21054,inst_21056);
var inst_21063 = cljs.core.nth.call(null,inst_21062,(0),null);
var inst_21064 = cljs.core.nth.call(null,inst_21062,(1),null);
var state_21172__$1 = (function (){var statearr_21244 = state_21172;
(statearr_21244[(26)] = inst_21063);

return statearr_21244;
})();
if(cljs.core.truth_(inst_21064)){
var statearr_21245_21308 = state_21172__$1;
(statearr_21245_21308[(1)] = (13));

} else {
var statearr_21246_21309 = state_21172__$1;
(statearr_21246_21309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (18))){
var inst_21097 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21247_21310 = state_21172__$1;
(statearr_21247_21310[(2)] = inst_21097);

(statearr_21247_21310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (42))){
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21172__$1,(45),dchan);
} else {
if((state_val_21173 === (37))){
var inst_21131 = (state_21172[(25)]);
var inst_21044 = (state_21172[(12)]);
var inst_21140 = (state_21172[(23)]);
var inst_21140__$1 = cljs.core.first.call(null,inst_21131);
var inst_21141 = cljs.core.async.put_BANG_.call(null,inst_21140__$1,inst_21044,done);
var state_21172__$1 = (function (){var statearr_21248 = state_21172;
(statearr_21248[(23)] = inst_21140__$1);

return statearr_21248;
})();
if(cljs.core.truth_(inst_21141)){
var statearr_21249_21311 = state_21172__$1;
(statearr_21249_21311[(1)] = (39));

} else {
var statearr_21250_21312 = state_21172__$1;
(statearr_21250_21312[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (8))){
var inst_21056 = (state_21172[(13)]);
var inst_21055 = (state_21172[(16)]);
var inst_21058 = (inst_21056 < inst_21055);
var inst_21059 = inst_21058;
var state_21172__$1 = state_21172;
if(cljs.core.truth_(inst_21059)){
var statearr_21251_21313 = state_21172__$1;
(statearr_21251_21313[(1)] = (10));

} else {
var statearr_21252_21314 = state_21172__$1;
(statearr_21252_21314[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___21260,cs,m,dchan,dctr,done))
;
return ((function (switch__19841__auto__,c__19953__auto___21260,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19842__auto__ = null;
var cljs$core$async$mult_$_state_machine__19842__auto____0 = (function (){
var statearr_21256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21256[(0)] = cljs$core$async$mult_$_state_machine__19842__auto__);

(statearr_21256[(1)] = (1));

return statearr_21256;
});
var cljs$core$async$mult_$_state_machine__19842__auto____1 = (function (state_21172){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_21172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e21257){if((e21257 instanceof Object)){
var ex__19845__auto__ = e21257;
var statearr_21258_21315 = state_21172;
(statearr_21258_21315[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21316 = state_21172;
state_21172 = G__21316;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19842__auto__ = function(state_21172){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19842__auto____1.call(this,state_21172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19842__auto____0;
cljs$core$async$mult_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19842__auto____1;
return cljs$core$async$mult_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___21260,cs,m,dchan,dctr,done))
})();
var state__19955__auto__ = (function (){var statearr_21259 = f__19954__auto__.call(null);
(statearr_21259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___21260);

return statearr_21259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___21260,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21317 = [];
var len__18177__auto___21320 = arguments.length;
var i__18178__auto___21321 = (0);
while(true){
if((i__18178__auto___21321 < len__18177__auto___21320)){
args21317.push((arguments[i__18178__auto___21321]));

var G__21322 = (i__18178__auto___21321 + (1));
i__18178__auto___21321 = G__21322;
continue;
} else {
}
break;
}

var G__21319 = args21317.length;
switch (G__21319) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21317.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17774__auto__ = (((m == null))?null:m);
var m__17775__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,m,ch);
} else {
var m__17775__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17774__auto__ = (((m == null))?null:m);
var m__17775__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,m,ch);
} else {
var m__17775__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17774__auto__ = (((m == null))?null:m);
var m__17775__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,m);
} else {
var m__17775__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17774__auto__ = (((m == null))?null:m);
var m__17775__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,m,state_map);
} else {
var m__17775__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17774__auto__ = (((m == null))?null:m);
var m__17775__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,m,mode);
} else {
var m__17775__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18184__auto__ = [];
var len__18177__auto___21334 = arguments.length;
var i__18178__auto___21335 = (0);
while(true){
if((i__18178__auto___21335 < len__18177__auto___21334)){
args__18184__auto__.push((arguments[i__18178__auto___21335]));

var G__21336 = (i__18178__auto___21335 + (1));
i__18178__auto___21335 = G__21336;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((3) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18185__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21328){
var map__21329 = p__21328;
var map__21329__$1 = ((((!((map__21329 == null)))?((((map__21329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21329):map__21329);
var opts = map__21329__$1;
var statearr_21331_21337 = state;
(statearr_21331_21337[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21329,map__21329__$1,opts){
return (function (val){
var statearr_21332_21338 = state;
(statearr_21332_21338[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21329,map__21329__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21333_21339 = state;
(statearr_21333_21339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21324){
var G__21325 = cljs.core.first.call(null,seq21324);
var seq21324__$1 = cljs.core.next.call(null,seq21324);
var G__21326 = cljs.core.first.call(null,seq21324__$1);
var seq21324__$2 = cljs.core.next.call(null,seq21324__$1);
var G__21327 = cljs.core.first.call(null,seq21324__$2);
var seq21324__$3 = cljs.core.next.call(null,seq21324__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21325,G__21326,G__21327,seq21324__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21503 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21504){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21504 = meta21504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21505,meta21504__$1){
var self__ = this;
var _21505__$1 = this;
return (new cljs.core.async.t_cljs$core$async21503(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21504__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21505){
var self__ = this;
var _21505__$1 = this;
return self__.meta21504;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21504","meta21504",-847112284,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21503";

cljs.core.async.t_cljs$core$async21503.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async21503");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21503 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21503(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21504){
return (new cljs.core.async.t_cljs$core$async21503(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21504));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21503(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19953__auto___21666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___21666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___21666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21603){
var state_val_21604 = (state_21603[(1)]);
if((state_val_21604 === (7))){
var inst_21521 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
var statearr_21605_21667 = state_21603__$1;
(statearr_21605_21667[(2)] = inst_21521);

(statearr_21605_21667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (20))){
var inst_21533 = (state_21603[(7)]);
var state_21603__$1 = state_21603;
var statearr_21606_21668 = state_21603__$1;
(statearr_21606_21668[(2)] = inst_21533);

(statearr_21606_21668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (27))){
var state_21603__$1 = state_21603;
var statearr_21607_21669 = state_21603__$1;
(statearr_21607_21669[(2)] = null);

(statearr_21607_21669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (1))){
var inst_21509 = (state_21603[(8)]);
var inst_21509__$1 = calc_state.call(null);
var inst_21511 = (inst_21509__$1 == null);
var inst_21512 = cljs.core.not.call(null,inst_21511);
var state_21603__$1 = (function (){var statearr_21608 = state_21603;
(statearr_21608[(8)] = inst_21509__$1);

return statearr_21608;
})();
if(inst_21512){
var statearr_21609_21670 = state_21603__$1;
(statearr_21609_21670[(1)] = (2));

} else {
var statearr_21610_21671 = state_21603__$1;
(statearr_21610_21671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (24))){
var inst_21556 = (state_21603[(9)]);
var inst_21577 = (state_21603[(10)]);
var inst_21563 = (state_21603[(11)]);
var inst_21577__$1 = inst_21556.call(null,inst_21563);
var state_21603__$1 = (function (){var statearr_21611 = state_21603;
(statearr_21611[(10)] = inst_21577__$1);

return statearr_21611;
})();
if(cljs.core.truth_(inst_21577__$1)){
var statearr_21612_21672 = state_21603__$1;
(statearr_21612_21672[(1)] = (29));

} else {
var statearr_21613_21673 = state_21603__$1;
(statearr_21613_21673[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (4))){
var inst_21524 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
if(cljs.core.truth_(inst_21524)){
var statearr_21614_21674 = state_21603__$1;
(statearr_21614_21674[(1)] = (8));

} else {
var statearr_21615_21675 = state_21603__$1;
(statearr_21615_21675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (15))){
var inst_21550 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
if(cljs.core.truth_(inst_21550)){
var statearr_21616_21676 = state_21603__$1;
(statearr_21616_21676[(1)] = (19));

} else {
var statearr_21617_21677 = state_21603__$1;
(statearr_21617_21677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (21))){
var inst_21555 = (state_21603[(12)]);
var inst_21555__$1 = (state_21603[(2)]);
var inst_21556 = cljs.core.get.call(null,inst_21555__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21557 = cljs.core.get.call(null,inst_21555__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21558 = cljs.core.get.call(null,inst_21555__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21603__$1 = (function (){var statearr_21618 = state_21603;
(statearr_21618[(9)] = inst_21556);

(statearr_21618[(12)] = inst_21555__$1);

(statearr_21618[(13)] = inst_21557);

return statearr_21618;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21603__$1,(22),inst_21558);
} else {
if((state_val_21604 === (31))){
var inst_21585 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
if(cljs.core.truth_(inst_21585)){
var statearr_21619_21678 = state_21603__$1;
(statearr_21619_21678[(1)] = (32));

} else {
var statearr_21620_21679 = state_21603__$1;
(statearr_21620_21679[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (32))){
var inst_21562 = (state_21603[(14)]);
var state_21603__$1 = state_21603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21603__$1,(35),out,inst_21562);
} else {
if((state_val_21604 === (33))){
var inst_21555 = (state_21603[(12)]);
var inst_21533 = inst_21555;
var state_21603__$1 = (function (){var statearr_21621 = state_21603;
(statearr_21621[(7)] = inst_21533);

return statearr_21621;
})();
var statearr_21622_21680 = state_21603__$1;
(statearr_21622_21680[(2)] = null);

(statearr_21622_21680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (13))){
var inst_21533 = (state_21603[(7)]);
var inst_21540 = inst_21533.cljs$lang$protocol_mask$partition0$;
var inst_21541 = (inst_21540 & (64));
var inst_21542 = inst_21533.cljs$core$ISeq$;
var inst_21543 = (inst_21541) || (inst_21542);
var state_21603__$1 = state_21603;
if(cljs.core.truth_(inst_21543)){
var statearr_21623_21681 = state_21603__$1;
(statearr_21623_21681[(1)] = (16));

} else {
var statearr_21624_21682 = state_21603__$1;
(statearr_21624_21682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (22))){
var inst_21562 = (state_21603[(14)]);
var inst_21563 = (state_21603[(11)]);
var inst_21561 = (state_21603[(2)]);
var inst_21562__$1 = cljs.core.nth.call(null,inst_21561,(0),null);
var inst_21563__$1 = cljs.core.nth.call(null,inst_21561,(1),null);
var inst_21564 = (inst_21562__$1 == null);
var inst_21565 = cljs.core._EQ_.call(null,inst_21563__$1,change);
var inst_21566 = (inst_21564) || (inst_21565);
var state_21603__$1 = (function (){var statearr_21625 = state_21603;
(statearr_21625[(14)] = inst_21562__$1);

(statearr_21625[(11)] = inst_21563__$1);

return statearr_21625;
})();
if(cljs.core.truth_(inst_21566)){
var statearr_21626_21683 = state_21603__$1;
(statearr_21626_21683[(1)] = (23));

} else {
var statearr_21627_21684 = state_21603__$1;
(statearr_21627_21684[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (36))){
var inst_21555 = (state_21603[(12)]);
var inst_21533 = inst_21555;
var state_21603__$1 = (function (){var statearr_21628 = state_21603;
(statearr_21628[(7)] = inst_21533);

return statearr_21628;
})();
var statearr_21629_21685 = state_21603__$1;
(statearr_21629_21685[(2)] = null);

(statearr_21629_21685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (29))){
var inst_21577 = (state_21603[(10)]);
var state_21603__$1 = state_21603;
var statearr_21630_21686 = state_21603__$1;
(statearr_21630_21686[(2)] = inst_21577);

(statearr_21630_21686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (6))){
var state_21603__$1 = state_21603;
var statearr_21631_21687 = state_21603__$1;
(statearr_21631_21687[(2)] = false);

(statearr_21631_21687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (28))){
var inst_21573 = (state_21603[(2)]);
var inst_21574 = calc_state.call(null);
var inst_21533 = inst_21574;
var state_21603__$1 = (function (){var statearr_21632 = state_21603;
(statearr_21632[(7)] = inst_21533);

(statearr_21632[(15)] = inst_21573);

return statearr_21632;
})();
var statearr_21633_21688 = state_21603__$1;
(statearr_21633_21688[(2)] = null);

(statearr_21633_21688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (25))){
var inst_21599 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
var statearr_21634_21689 = state_21603__$1;
(statearr_21634_21689[(2)] = inst_21599);

(statearr_21634_21689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (34))){
var inst_21597 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
var statearr_21635_21690 = state_21603__$1;
(statearr_21635_21690[(2)] = inst_21597);

(statearr_21635_21690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (17))){
var state_21603__$1 = state_21603;
var statearr_21636_21691 = state_21603__$1;
(statearr_21636_21691[(2)] = false);

(statearr_21636_21691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (3))){
var state_21603__$1 = state_21603;
var statearr_21637_21692 = state_21603__$1;
(statearr_21637_21692[(2)] = false);

(statearr_21637_21692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (12))){
var inst_21601 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21603__$1,inst_21601);
} else {
if((state_val_21604 === (2))){
var inst_21509 = (state_21603[(8)]);
var inst_21514 = inst_21509.cljs$lang$protocol_mask$partition0$;
var inst_21515 = (inst_21514 & (64));
var inst_21516 = inst_21509.cljs$core$ISeq$;
var inst_21517 = (inst_21515) || (inst_21516);
var state_21603__$1 = state_21603;
if(cljs.core.truth_(inst_21517)){
var statearr_21638_21693 = state_21603__$1;
(statearr_21638_21693[(1)] = (5));

} else {
var statearr_21639_21694 = state_21603__$1;
(statearr_21639_21694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (23))){
var inst_21562 = (state_21603[(14)]);
var inst_21568 = (inst_21562 == null);
var state_21603__$1 = state_21603;
if(cljs.core.truth_(inst_21568)){
var statearr_21640_21695 = state_21603__$1;
(statearr_21640_21695[(1)] = (26));

} else {
var statearr_21641_21696 = state_21603__$1;
(statearr_21641_21696[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (35))){
var inst_21588 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
if(cljs.core.truth_(inst_21588)){
var statearr_21642_21697 = state_21603__$1;
(statearr_21642_21697[(1)] = (36));

} else {
var statearr_21643_21698 = state_21603__$1;
(statearr_21643_21698[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (19))){
var inst_21533 = (state_21603[(7)]);
var inst_21552 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21533);
var state_21603__$1 = state_21603;
var statearr_21644_21699 = state_21603__$1;
(statearr_21644_21699[(2)] = inst_21552);

(statearr_21644_21699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (11))){
var inst_21533 = (state_21603[(7)]);
var inst_21537 = (inst_21533 == null);
var inst_21538 = cljs.core.not.call(null,inst_21537);
var state_21603__$1 = state_21603;
if(inst_21538){
var statearr_21645_21700 = state_21603__$1;
(statearr_21645_21700[(1)] = (13));

} else {
var statearr_21646_21701 = state_21603__$1;
(statearr_21646_21701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (9))){
var inst_21509 = (state_21603[(8)]);
var state_21603__$1 = state_21603;
var statearr_21647_21702 = state_21603__$1;
(statearr_21647_21702[(2)] = inst_21509);

(statearr_21647_21702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (5))){
var state_21603__$1 = state_21603;
var statearr_21648_21703 = state_21603__$1;
(statearr_21648_21703[(2)] = true);

(statearr_21648_21703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (14))){
var state_21603__$1 = state_21603;
var statearr_21649_21704 = state_21603__$1;
(statearr_21649_21704[(2)] = false);

(statearr_21649_21704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (26))){
var inst_21563 = (state_21603[(11)]);
var inst_21570 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21563);
var state_21603__$1 = state_21603;
var statearr_21650_21705 = state_21603__$1;
(statearr_21650_21705[(2)] = inst_21570);

(statearr_21650_21705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (16))){
var state_21603__$1 = state_21603;
var statearr_21651_21706 = state_21603__$1;
(statearr_21651_21706[(2)] = true);

(statearr_21651_21706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (38))){
var inst_21593 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
var statearr_21652_21707 = state_21603__$1;
(statearr_21652_21707[(2)] = inst_21593);

(statearr_21652_21707[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (30))){
var inst_21556 = (state_21603[(9)]);
var inst_21557 = (state_21603[(13)]);
var inst_21563 = (state_21603[(11)]);
var inst_21580 = cljs.core.empty_QMARK_.call(null,inst_21556);
var inst_21581 = inst_21557.call(null,inst_21563);
var inst_21582 = cljs.core.not.call(null,inst_21581);
var inst_21583 = (inst_21580) && (inst_21582);
var state_21603__$1 = state_21603;
var statearr_21653_21708 = state_21603__$1;
(statearr_21653_21708[(2)] = inst_21583);

(statearr_21653_21708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (10))){
var inst_21509 = (state_21603[(8)]);
var inst_21529 = (state_21603[(2)]);
var inst_21530 = cljs.core.get.call(null,inst_21529,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21531 = cljs.core.get.call(null,inst_21529,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21532 = cljs.core.get.call(null,inst_21529,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21533 = inst_21509;
var state_21603__$1 = (function (){var statearr_21654 = state_21603;
(statearr_21654[(16)] = inst_21532);

(statearr_21654[(17)] = inst_21531);

(statearr_21654[(18)] = inst_21530);

(statearr_21654[(7)] = inst_21533);

return statearr_21654;
})();
var statearr_21655_21709 = state_21603__$1;
(statearr_21655_21709[(2)] = null);

(statearr_21655_21709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (18))){
var inst_21547 = (state_21603[(2)]);
var state_21603__$1 = state_21603;
var statearr_21656_21710 = state_21603__$1;
(statearr_21656_21710[(2)] = inst_21547);

(statearr_21656_21710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (37))){
var state_21603__$1 = state_21603;
var statearr_21657_21711 = state_21603__$1;
(statearr_21657_21711[(2)] = null);

(statearr_21657_21711[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21604 === (8))){
var inst_21509 = (state_21603[(8)]);
var inst_21526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21509);
var state_21603__$1 = state_21603;
var statearr_21658_21712 = state_21603__$1;
(statearr_21658_21712[(2)] = inst_21526);

(statearr_21658_21712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___21666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19841__auto__,c__19953__auto___21666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19842__auto__ = null;
var cljs$core$async$mix_$_state_machine__19842__auto____0 = (function (){
var statearr_21662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21662[(0)] = cljs$core$async$mix_$_state_machine__19842__auto__);

(statearr_21662[(1)] = (1));

return statearr_21662;
});
var cljs$core$async$mix_$_state_machine__19842__auto____1 = (function (state_21603){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_21603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e21663){if((e21663 instanceof Object)){
var ex__19845__auto__ = e21663;
var statearr_21664_21713 = state_21603;
(statearr_21664_21713[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21714 = state_21603;
state_21603 = G__21714;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19842__auto__ = function(state_21603){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19842__auto____1.call(this,state_21603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19842__auto____0;
cljs$core$async$mix_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19842__auto____1;
return cljs$core$async$mix_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___21666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19955__auto__ = (function (){var statearr_21665 = f__19954__auto__.call(null);
(statearr_21665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___21666);

return statearr_21665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___21666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17774__auto__ = (((p == null))?null:p);
var m__17775__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17775__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17774__auto__ = (((p == null))?null:p);
var m__17775__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,p,v,ch);
} else {
var m__17775__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21715 = [];
var len__18177__auto___21718 = arguments.length;
var i__18178__auto___21719 = (0);
while(true){
if((i__18178__auto___21719 < len__18177__auto___21718)){
args21715.push((arguments[i__18178__auto___21719]));

var G__21720 = (i__18178__auto___21719 + (1));
i__18178__auto___21719 = G__21720;
continue;
} else {
}
break;
}

var G__21717 = args21715.length;
switch (G__21717) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21715.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17774__auto__ = (((p == null))?null:p);
var m__17775__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,p);
} else {
var m__17775__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17774__auto__ = (((p == null))?null:p);
var m__17775__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17774__auto__)]);
if(!((m__17775__auto__ == null))){
return m__17775__auto__.call(null,p,v);
} else {
var m__17775__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17775__auto____$1 == null))){
return m__17775__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21723 = [];
var len__18177__auto___21848 = arguments.length;
var i__18178__auto___21849 = (0);
while(true){
if((i__18178__auto___21849 < len__18177__auto___21848)){
args21723.push((arguments[i__18178__auto___21849]));

var G__21850 = (i__18178__auto___21849 + (1));
i__18178__auto___21849 = G__21850;
continue;
} else {
}
break;
}

var G__21725 = args21723.length;
switch (G__21725) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21723.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17119__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17119__auto__,mults){
return (function (p1__21722_SHARP_){
if(cljs.core.truth_(p1__21722_SHARP_.call(null,topic))){
return p1__21722_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21722_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17119__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21726 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21727){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21727 = meta21727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21728,meta21727__$1){
var self__ = this;
var _21728__$1 = this;
return (new cljs.core.async.t_cljs$core$async21726(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21727__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21728){
var self__ = this;
var _21728__$1 = this;
return self__.meta21727;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21726.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21727","meta21727",-1517447573,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21726";

cljs.core.async.t_cljs$core$async21726.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async21726");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21726 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21727){
return (new cljs.core.async.t_cljs$core$async21726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21727));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21726(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19953__auto___21852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___21852,mults,ensure_mult,p){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___21852,mults,ensure_mult,p){
return (function (state_21800){
var state_val_21801 = (state_21800[(1)]);
if((state_val_21801 === (7))){
var inst_21796 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21802_21853 = state_21800__$1;
(statearr_21802_21853[(2)] = inst_21796);

(statearr_21802_21853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (20))){
var state_21800__$1 = state_21800;
var statearr_21803_21854 = state_21800__$1;
(statearr_21803_21854[(2)] = null);

(statearr_21803_21854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (1))){
var state_21800__$1 = state_21800;
var statearr_21804_21855 = state_21800__$1;
(statearr_21804_21855[(2)] = null);

(statearr_21804_21855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (24))){
var inst_21779 = (state_21800[(7)]);
var inst_21788 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21779);
var state_21800__$1 = state_21800;
var statearr_21805_21856 = state_21800__$1;
(statearr_21805_21856[(2)] = inst_21788);

(statearr_21805_21856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (4))){
var inst_21731 = (state_21800[(8)]);
var inst_21731__$1 = (state_21800[(2)]);
var inst_21732 = (inst_21731__$1 == null);
var state_21800__$1 = (function (){var statearr_21806 = state_21800;
(statearr_21806[(8)] = inst_21731__$1);

return statearr_21806;
})();
if(cljs.core.truth_(inst_21732)){
var statearr_21807_21857 = state_21800__$1;
(statearr_21807_21857[(1)] = (5));

} else {
var statearr_21808_21858 = state_21800__$1;
(statearr_21808_21858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (15))){
var inst_21773 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21809_21859 = state_21800__$1;
(statearr_21809_21859[(2)] = inst_21773);

(statearr_21809_21859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (21))){
var inst_21793 = (state_21800[(2)]);
var state_21800__$1 = (function (){var statearr_21810 = state_21800;
(statearr_21810[(9)] = inst_21793);

return statearr_21810;
})();
var statearr_21811_21860 = state_21800__$1;
(statearr_21811_21860[(2)] = null);

(statearr_21811_21860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (13))){
var inst_21755 = (state_21800[(10)]);
var inst_21757 = cljs.core.chunked_seq_QMARK_.call(null,inst_21755);
var state_21800__$1 = state_21800;
if(inst_21757){
var statearr_21812_21861 = state_21800__$1;
(statearr_21812_21861[(1)] = (16));

} else {
var statearr_21813_21862 = state_21800__$1;
(statearr_21813_21862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (22))){
var inst_21785 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
if(cljs.core.truth_(inst_21785)){
var statearr_21814_21863 = state_21800__$1;
(statearr_21814_21863[(1)] = (23));

} else {
var statearr_21815_21864 = state_21800__$1;
(statearr_21815_21864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (6))){
var inst_21781 = (state_21800[(11)]);
var inst_21731 = (state_21800[(8)]);
var inst_21779 = (state_21800[(7)]);
var inst_21779__$1 = topic_fn.call(null,inst_21731);
var inst_21780 = cljs.core.deref.call(null,mults);
var inst_21781__$1 = cljs.core.get.call(null,inst_21780,inst_21779__$1);
var state_21800__$1 = (function (){var statearr_21816 = state_21800;
(statearr_21816[(11)] = inst_21781__$1);

(statearr_21816[(7)] = inst_21779__$1);

return statearr_21816;
})();
if(cljs.core.truth_(inst_21781__$1)){
var statearr_21817_21865 = state_21800__$1;
(statearr_21817_21865[(1)] = (19));

} else {
var statearr_21818_21866 = state_21800__$1;
(statearr_21818_21866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (25))){
var inst_21790 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21819_21867 = state_21800__$1;
(statearr_21819_21867[(2)] = inst_21790);

(statearr_21819_21867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (17))){
var inst_21755 = (state_21800[(10)]);
var inst_21764 = cljs.core.first.call(null,inst_21755);
var inst_21765 = cljs.core.async.muxch_STAR_.call(null,inst_21764);
var inst_21766 = cljs.core.async.close_BANG_.call(null,inst_21765);
var inst_21767 = cljs.core.next.call(null,inst_21755);
var inst_21741 = inst_21767;
var inst_21742 = null;
var inst_21743 = (0);
var inst_21744 = (0);
var state_21800__$1 = (function (){var statearr_21820 = state_21800;
(statearr_21820[(12)] = inst_21742);

(statearr_21820[(13)] = inst_21744);

(statearr_21820[(14)] = inst_21766);

(statearr_21820[(15)] = inst_21743);

(statearr_21820[(16)] = inst_21741);

return statearr_21820;
})();
var statearr_21821_21868 = state_21800__$1;
(statearr_21821_21868[(2)] = null);

(statearr_21821_21868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (3))){
var inst_21798 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21800__$1,inst_21798);
} else {
if((state_val_21801 === (12))){
var inst_21775 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21822_21869 = state_21800__$1;
(statearr_21822_21869[(2)] = inst_21775);

(statearr_21822_21869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (2))){
var state_21800__$1 = state_21800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21800__$1,(4),ch);
} else {
if((state_val_21801 === (23))){
var state_21800__$1 = state_21800;
var statearr_21823_21870 = state_21800__$1;
(statearr_21823_21870[(2)] = null);

(statearr_21823_21870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (19))){
var inst_21781 = (state_21800[(11)]);
var inst_21731 = (state_21800[(8)]);
var inst_21783 = cljs.core.async.muxch_STAR_.call(null,inst_21781);
var state_21800__$1 = state_21800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21800__$1,(22),inst_21783,inst_21731);
} else {
if((state_val_21801 === (11))){
var inst_21755 = (state_21800[(10)]);
var inst_21741 = (state_21800[(16)]);
var inst_21755__$1 = cljs.core.seq.call(null,inst_21741);
var state_21800__$1 = (function (){var statearr_21824 = state_21800;
(statearr_21824[(10)] = inst_21755__$1);

return statearr_21824;
})();
if(inst_21755__$1){
var statearr_21825_21871 = state_21800__$1;
(statearr_21825_21871[(1)] = (13));

} else {
var statearr_21826_21872 = state_21800__$1;
(statearr_21826_21872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (9))){
var inst_21777 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21827_21873 = state_21800__$1;
(statearr_21827_21873[(2)] = inst_21777);

(statearr_21827_21873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (5))){
var inst_21738 = cljs.core.deref.call(null,mults);
var inst_21739 = cljs.core.vals.call(null,inst_21738);
var inst_21740 = cljs.core.seq.call(null,inst_21739);
var inst_21741 = inst_21740;
var inst_21742 = null;
var inst_21743 = (0);
var inst_21744 = (0);
var state_21800__$1 = (function (){var statearr_21828 = state_21800;
(statearr_21828[(12)] = inst_21742);

(statearr_21828[(13)] = inst_21744);

(statearr_21828[(15)] = inst_21743);

(statearr_21828[(16)] = inst_21741);

return statearr_21828;
})();
var statearr_21829_21874 = state_21800__$1;
(statearr_21829_21874[(2)] = null);

(statearr_21829_21874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (14))){
var state_21800__$1 = state_21800;
var statearr_21833_21875 = state_21800__$1;
(statearr_21833_21875[(2)] = null);

(statearr_21833_21875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (16))){
var inst_21755 = (state_21800[(10)]);
var inst_21759 = cljs.core.chunk_first.call(null,inst_21755);
var inst_21760 = cljs.core.chunk_rest.call(null,inst_21755);
var inst_21761 = cljs.core.count.call(null,inst_21759);
var inst_21741 = inst_21760;
var inst_21742 = inst_21759;
var inst_21743 = inst_21761;
var inst_21744 = (0);
var state_21800__$1 = (function (){var statearr_21834 = state_21800;
(statearr_21834[(12)] = inst_21742);

(statearr_21834[(13)] = inst_21744);

(statearr_21834[(15)] = inst_21743);

(statearr_21834[(16)] = inst_21741);

return statearr_21834;
})();
var statearr_21835_21876 = state_21800__$1;
(statearr_21835_21876[(2)] = null);

(statearr_21835_21876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (10))){
var inst_21742 = (state_21800[(12)]);
var inst_21744 = (state_21800[(13)]);
var inst_21743 = (state_21800[(15)]);
var inst_21741 = (state_21800[(16)]);
var inst_21749 = cljs.core._nth.call(null,inst_21742,inst_21744);
var inst_21750 = cljs.core.async.muxch_STAR_.call(null,inst_21749);
var inst_21751 = cljs.core.async.close_BANG_.call(null,inst_21750);
var inst_21752 = (inst_21744 + (1));
var tmp21830 = inst_21742;
var tmp21831 = inst_21743;
var tmp21832 = inst_21741;
var inst_21741__$1 = tmp21832;
var inst_21742__$1 = tmp21830;
var inst_21743__$1 = tmp21831;
var inst_21744__$1 = inst_21752;
var state_21800__$1 = (function (){var statearr_21836 = state_21800;
(statearr_21836[(17)] = inst_21751);

(statearr_21836[(12)] = inst_21742__$1);

(statearr_21836[(13)] = inst_21744__$1);

(statearr_21836[(15)] = inst_21743__$1);

(statearr_21836[(16)] = inst_21741__$1);

return statearr_21836;
})();
var statearr_21837_21877 = state_21800__$1;
(statearr_21837_21877[(2)] = null);

(statearr_21837_21877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (18))){
var inst_21770 = (state_21800[(2)]);
var state_21800__$1 = state_21800;
var statearr_21838_21878 = state_21800__$1;
(statearr_21838_21878[(2)] = inst_21770);

(statearr_21838_21878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21801 === (8))){
var inst_21744 = (state_21800[(13)]);
var inst_21743 = (state_21800[(15)]);
var inst_21746 = (inst_21744 < inst_21743);
var inst_21747 = inst_21746;
var state_21800__$1 = state_21800;
if(cljs.core.truth_(inst_21747)){
var statearr_21839_21879 = state_21800__$1;
(statearr_21839_21879[(1)] = (10));

} else {
var statearr_21840_21880 = state_21800__$1;
(statearr_21840_21880[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___21852,mults,ensure_mult,p))
;
return ((function (switch__19841__auto__,c__19953__auto___21852,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_21844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21844[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_21844[(1)] = (1));

return statearr_21844;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_21800){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_21800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e21845){if((e21845 instanceof Object)){
var ex__19845__auto__ = e21845;
var statearr_21846_21881 = state_21800;
(statearr_21846_21881[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21882 = state_21800;
state_21800 = G__21882;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_21800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_21800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___21852,mults,ensure_mult,p))
})();
var state__19955__auto__ = (function (){var statearr_21847 = f__19954__auto__.call(null);
(statearr_21847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___21852);

return statearr_21847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___21852,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21883 = [];
var len__18177__auto___21886 = arguments.length;
var i__18178__auto___21887 = (0);
while(true){
if((i__18178__auto___21887 < len__18177__auto___21886)){
args21883.push((arguments[i__18178__auto___21887]));

var G__21888 = (i__18178__auto___21887 + (1));
i__18178__auto___21887 = G__21888;
continue;
} else {
}
break;
}

var G__21885 = args21883.length;
switch (G__21885) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21883.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21890 = [];
var len__18177__auto___21893 = arguments.length;
var i__18178__auto___21894 = (0);
while(true){
if((i__18178__auto___21894 < len__18177__auto___21893)){
args21890.push((arguments[i__18178__auto___21894]));

var G__21895 = (i__18178__auto___21894 + (1));
i__18178__auto___21894 = G__21895;
continue;
} else {
}
break;
}

var G__21892 = args21890.length;
switch (G__21892) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21890.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21897 = [];
var len__18177__auto___21968 = arguments.length;
var i__18178__auto___21969 = (0);
while(true){
if((i__18178__auto___21969 < len__18177__auto___21968)){
args21897.push((arguments[i__18178__auto___21969]));

var G__21970 = (i__18178__auto___21969 + (1));
i__18178__auto___21969 = G__21970;
continue;
} else {
}
break;
}

var G__21899 = args21897.length;
switch (G__21899) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21897.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19953__auto___21972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___21972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___21972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21938){
var state_val_21939 = (state_21938[(1)]);
if((state_val_21939 === (7))){
var state_21938__$1 = state_21938;
var statearr_21940_21973 = state_21938__$1;
(statearr_21940_21973[(2)] = null);

(statearr_21940_21973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (1))){
var state_21938__$1 = state_21938;
var statearr_21941_21974 = state_21938__$1;
(statearr_21941_21974[(2)] = null);

(statearr_21941_21974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (4))){
var inst_21902 = (state_21938[(7)]);
var inst_21904 = (inst_21902 < cnt);
var state_21938__$1 = state_21938;
if(cljs.core.truth_(inst_21904)){
var statearr_21942_21975 = state_21938__$1;
(statearr_21942_21975[(1)] = (6));

} else {
var statearr_21943_21976 = state_21938__$1;
(statearr_21943_21976[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (15))){
var inst_21934 = (state_21938[(2)]);
var state_21938__$1 = state_21938;
var statearr_21944_21977 = state_21938__$1;
(statearr_21944_21977[(2)] = inst_21934);

(statearr_21944_21977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (13))){
var inst_21927 = cljs.core.async.close_BANG_.call(null,out);
var state_21938__$1 = state_21938;
var statearr_21945_21978 = state_21938__$1;
(statearr_21945_21978[(2)] = inst_21927);

(statearr_21945_21978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (6))){
var state_21938__$1 = state_21938;
var statearr_21946_21979 = state_21938__$1;
(statearr_21946_21979[(2)] = null);

(statearr_21946_21979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (3))){
var inst_21936 = (state_21938[(2)]);
var state_21938__$1 = state_21938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21938__$1,inst_21936);
} else {
if((state_val_21939 === (12))){
var inst_21924 = (state_21938[(8)]);
var inst_21924__$1 = (state_21938[(2)]);
var inst_21925 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21924__$1);
var state_21938__$1 = (function (){var statearr_21947 = state_21938;
(statearr_21947[(8)] = inst_21924__$1);

return statearr_21947;
})();
if(cljs.core.truth_(inst_21925)){
var statearr_21948_21980 = state_21938__$1;
(statearr_21948_21980[(1)] = (13));

} else {
var statearr_21949_21981 = state_21938__$1;
(statearr_21949_21981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (2))){
var inst_21901 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21902 = (0);
var state_21938__$1 = (function (){var statearr_21950 = state_21938;
(statearr_21950[(7)] = inst_21902);

(statearr_21950[(9)] = inst_21901);

return statearr_21950;
})();
var statearr_21951_21982 = state_21938__$1;
(statearr_21951_21982[(2)] = null);

(statearr_21951_21982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (11))){
var inst_21902 = (state_21938[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21938,(10),Object,null,(9));
var inst_21911 = chs__$1.call(null,inst_21902);
var inst_21912 = done.call(null,inst_21902);
var inst_21913 = cljs.core.async.take_BANG_.call(null,inst_21911,inst_21912);
var state_21938__$1 = state_21938;
var statearr_21952_21983 = state_21938__$1;
(statearr_21952_21983[(2)] = inst_21913);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (9))){
var inst_21902 = (state_21938[(7)]);
var inst_21915 = (state_21938[(2)]);
var inst_21916 = (inst_21902 + (1));
var inst_21902__$1 = inst_21916;
var state_21938__$1 = (function (){var statearr_21953 = state_21938;
(statearr_21953[(10)] = inst_21915);

(statearr_21953[(7)] = inst_21902__$1);

return statearr_21953;
})();
var statearr_21954_21984 = state_21938__$1;
(statearr_21954_21984[(2)] = null);

(statearr_21954_21984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (5))){
var inst_21922 = (state_21938[(2)]);
var state_21938__$1 = (function (){var statearr_21955 = state_21938;
(statearr_21955[(11)] = inst_21922);

return statearr_21955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21938__$1,(12),dchan);
} else {
if((state_val_21939 === (14))){
var inst_21924 = (state_21938[(8)]);
var inst_21929 = cljs.core.apply.call(null,f,inst_21924);
var state_21938__$1 = state_21938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21938__$1,(16),out,inst_21929);
} else {
if((state_val_21939 === (16))){
var inst_21931 = (state_21938[(2)]);
var state_21938__$1 = (function (){var statearr_21956 = state_21938;
(statearr_21956[(12)] = inst_21931);

return statearr_21956;
})();
var statearr_21957_21985 = state_21938__$1;
(statearr_21957_21985[(2)] = null);

(statearr_21957_21985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (10))){
var inst_21906 = (state_21938[(2)]);
var inst_21907 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21938__$1 = (function (){var statearr_21958 = state_21938;
(statearr_21958[(13)] = inst_21906);

return statearr_21958;
})();
var statearr_21959_21986 = state_21938__$1;
(statearr_21959_21986[(2)] = inst_21907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21939 === (8))){
var inst_21920 = (state_21938[(2)]);
var state_21938__$1 = state_21938;
var statearr_21960_21987 = state_21938__$1;
(statearr_21960_21987[(2)] = inst_21920);

(statearr_21960_21987[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___21972,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19841__auto__,c__19953__auto___21972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_21964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21964[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_21964[(1)] = (1));

return statearr_21964;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_21938){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_21938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e21965){if((e21965 instanceof Object)){
var ex__19845__auto__ = e21965;
var statearr_21966_21988 = state_21938;
(statearr_21966_21988[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21989 = state_21938;
state_21938 = G__21989;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_21938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_21938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___21972,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19955__auto__ = (function (){var statearr_21967 = f__19954__auto__.call(null);
(statearr_21967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___21972);

return statearr_21967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___21972,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21991 = [];
var len__18177__auto___22047 = arguments.length;
var i__18178__auto___22048 = (0);
while(true){
if((i__18178__auto___22048 < len__18177__auto___22047)){
args21991.push((arguments[i__18178__auto___22048]));

var G__22049 = (i__18178__auto___22048 + (1));
i__18178__auto___22048 = G__22049;
continue;
} else {
}
break;
}

var G__21993 = args21991.length;
switch (G__21993) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21991.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19953__auto___22051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___22051,out){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___22051,out){
return (function (state_22023){
var state_val_22024 = (state_22023[(1)]);
if((state_val_22024 === (7))){
var inst_22003 = (state_22023[(7)]);
var inst_22002 = (state_22023[(8)]);
var inst_22002__$1 = (state_22023[(2)]);
var inst_22003__$1 = cljs.core.nth.call(null,inst_22002__$1,(0),null);
var inst_22004 = cljs.core.nth.call(null,inst_22002__$1,(1),null);
var inst_22005 = (inst_22003__$1 == null);
var state_22023__$1 = (function (){var statearr_22025 = state_22023;
(statearr_22025[(7)] = inst_22003__$1);

(statearr_22025[(8)] = inst_22002__$1);

(statearr_22025[(9)] = inst_22004);

return statearr_22025;
})();
if(cljs.core.truth_(inst_22005)){
var statearr_22026_22052 = state_22023__$1;
(statearr_22026_22052[(1)] = (8));

} else {
var statearr_22027_22053 = state_22023__$1;
(statearr_22027_22053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (1))){
var inst_21994 = cljs.core.vec.call(null,chs);
var inst_21995 = inst_21994;
var state_22023__$1 = (function (){var statearr_22028 = state_22023;
(statearr_22028[(10)] = inst_21995);

return statearr_22028;
})();
var statearr_22029_22054 = state_22023__$1;
(statearr_22029_22054[(2)] = null);

(statearr_22029_22054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (4))){
var inst_21995 = (state_22023[(10)]);
var state_22023__$1 = state_22023;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22023__$1,(7),inst_21995);
} else {
if((state_val_22024 === (6))){
var inst_22019 = (state_22023[(2)]);
var state_22023__$1 = state_22023;
var statearr_22030_22055 = state_22023__$1;
(statearr_22030_22055[(2)] = inst_22019);

(statearr_22030_22055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (3))){
var inst_22021 = (state_22023[(2)]);
var state_22023__$1 = state_22023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22023__$1,inst_22021);
} else {
if((state_val_22024 === (2))){
var inst_21995 = (state_22023[(10)]);
var inst_21997 = cljs.core.count.call(null,inst_21995);
var inst_21998 = (inst_21997 > (0));
var state_22023__$1 = state_22023;
if(cljs.core.truth_(inst_21998)){
var statearr_22032_22056 = state_22023__$1;
(statearr_22032_22056[(1)] = (4));

} else {
var statearr_22033_22057 = state_22023__$1;
(statearr_22033_22057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (11))){
var inst_21995 = (state_22023[(10)]);
var inst_22012 = (state_22023[(2)]);
var tmp22031 = inst_21995;
var inst_21995__$1 = tmp22031;
var state_22023__$1 = (function (){var statearr_22034 = state_22023;
(statearr_22034[(11)] = inst_22012);

(statearr_22034[(10)] = inst_21995__$1);

return statearr_22034;
})();
var statearr_22035_22058 = state_22023__$1;
(statearr_22035_22058[(2)] = null);

(statearr_22035_22058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (9))){
var inst_22003 = (state_22023[(7)]);
var state_22023__$1 = state_22023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22023__$1,(11),out,inst_22003);
} else {
if((state_val_22024 === (5))){
var inst_22017 = cljs.core.async.close_BANG_.call(null,out);
var state_22023__$1 = state_22023;
var statearr_22036_22059 = state_22023__$1;
(statearr_22036_22059[(2)] = inst_22017);

(statearr_22036_22059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (10))){
var inst_22015 = (state_22023[(2)]);
var state_22023__$1 = state_22023;
var statearr_22037_22060 = state_22023__$1;
(statearr_22037_22060[(2)] = inst_22015);

(statearr_22037_22060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22024 === (8))){
var inst_22003 = (state_22023[(7)]);
var inst_22002 = (state_22023[(8)]);
var inst_21995 = (state_22023[(10)]);
var inst_22004 = (state_22023[(9)]);
var inst_22007 = (function (){var cs = inst_21995;
var vec__22000 = inst_22002;
var v = inst_22003;
var c = inst_22004;
return ((function (cs,vec__22000,v,c,inst_22003,inst_22002,inst_21995,inst_22004,state_val_22024,c__19953__auto___22051,out){
return (function (p1__21990_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21990_SHARP_);
});
;})(cs,vec__22000,v,c,inst_22003,inst_22002,inst_21995,inst_22004,state_val_22024,c__19953__auto___22051,out))
})();
var inst_22008 = cljs.core.filterv.call(null,inst_22007,inst_21995);
var inst_21995__$1 = inst_22008;
var state_22023__$1 = (function (){var statearr_22038 = state_22023;
(statearr_22038[(10)] = inst_21995__$1);

return statearr_22038;
})();
var statearr_22039_22061 = state_22023__$1;
(statearr_22039_22061[(2)] = null);

(statearr_22039_22061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___22051,out))
;
return ((function (switch__19841__auto__,c__19953__auto___22051,out){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_22043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22043[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_22043[(1)] = (1));

return statearr_22043;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_22023){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_22023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e22044){if((e22044 instanceof Object)){
var ex__19845__auto__ = e22044;
var statearr_22045_22062 = state_22023;
(statearr_22045_22062[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22063 = state_22023;
state_22023 = G__22063;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_22023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_22023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___22051,out))
})();
var state__19955__auto__ = (function (){var statearr_22046 = f__19954__auto__.call(null);
(statearr_22046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___22051);

return statearr_22046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___22051,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22064 = [];
var len__18177__auto___22113 = arguments.length;
var i__18178__auto___22114 = (0);
while(true){
if((i__18178__auto___22114 < len__18177__auto___22113)){
args22064.push((arguments[i__18178__auto___22114]));

var G__22115 = (i__18178__auto___22114 + (1));
i__18178__auto___22114 = G__22115;
continue;
} else {
}
break;
}

var G__22066 = args22064.length;
switch (G__22066) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22064.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19953__auto___22117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___22117,out){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___22117,out){
return (function (state_22090){
var state_val_22091 = (state_22090[(1)]);
if((state_val_22091 === (7))){
var inst_22072 = (state_22090[(7)]);
var inst_22072__$1 = (state_22090[(2)]);
var inst_22073 = (inst_22072__$1 == null);
var inst_22074 = cljs.core.not.call(null,inst_22073);
var state_22090__$1 = (function (){var statearr_22092 = state_22090;
(statearr_22092[(7)] = inst_22072__$1);

return statearr_22092;
})();
if(inst_22074){
var statearr_22093_22118 = state_22090__$1;
(statearr_22093_22118[(1)] = (8));

} else {
var statearr_22094_22119 = state_22090__$1;
(statearr_22094_22119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (1))){
var inst_22067 = (0);
var state_22090__$1 = (function (){var statearr_22095 = state_22090;
(statearr_22095[(8)] = inst_22067);

return statearr_22095;
})();
var statearr_22096_22120 = state_22090__$1;
(statearr_22096_22120[(2)] = null);

(statearr_22096_22120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (4))){
var state_22090__$1 = state_22090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22090__$1,(7),ch);
} else {
if((state_val_22091 === (6))){
var inst_22085 = (state_22090[(2)]);
var state_22090__$1 = state_22090;
var statearr_22097_22121 = state_22090__$1;
(statearr_22097_22121[(2)] = inst_22085);

(statearr_22097_22121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (3))){
var inst_22087 = (state_22090[(2)]);
var inst_22088 = cljs.core.async.close_BANG_.call(null,out);
var state_22090__$1 = (function (){var statearr_22098 = state_22090;
(statearr_22098[(9)] = inst_22087);

return statearr_22098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22090__$1,inst_22088);
} else {
if((state_val_22091 === (2))){
var inst_22067 = (state_22090[(8)]);
var inst_22069 = (inst_22067 < n);
var state_22090__$1 = state_22090;
if(cljs.core.truth_(inst_22069)){
var statearr_22099_22122 = state_22090__$1;
(statearr_22099_22122[(1)] = (4));

} else {
var statearr_22100_22123 = state_22090__$1;
(statearr_22100_22123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (11))){
var inst_22067 = (state_22090[(8)]);
var inst_22077 = (state_22090[(2)]);
var inst_22078 = (inst_22067 + (1));
var inst_22067__$1 = inst_22078;
var state_22090__$1 = (function (){var statearr_22101 = state_22090;
(statearr_22101[(10)] = inst_22077);

(statearr_22101[(8)] = inst_22067__$1);

return statearr_22101;
})();
var statearr_22102_22124 = state_22090__$1;
(statearr_22102_22124[(2)] = null);

(statearr_22102_22124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (9))){
var state_22090__$1 = state_22090;
var statearr_22103_22125 = state_22090__$1;
(statearr_22103_22125[(2)] = null);

(statearr_22103_22125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (5))){
var state_22090__$1 = state_22090;
var statearr_22104_22126 = state_22090__$1;
(statearr_22104_22126[(2)] = null);

(statearr_22104_22126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (10))){
var inst_22082 = (state_22090[(2)]);
var state_22090__$1 = state_22090;
var statearr_22105_22127 = state_22090__$1;
(statearr_22105_22127[(2)] = inst_22082);

(statearr_22105_22127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22091 === (8))){
var inst_22072 = (state_22090[(7)]);
var state_22090__$1 = state_22090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22090__$1,(11),out,inst_22072);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___22117,out))
;
return ((function (switch__19841__auto__,c__19953__auto___22117,out){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_22109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22109[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_22109[(1)] = (1));

return statearr_22109;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_22090){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_22090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e22110){if((e22110 instanceof Object)){
var ex__19845__auto__ = e22110;
var statearr_22111_22128 = state_22090;
(statearr_22111_22128[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22129 = state_22090;
state_22090 = G__22129;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_22090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_22090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___22117,out))
})();
var state__19955__auto__ = (function (){var statearr_22112 = f__19954__auto__.call(null);
(statearr_22112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___22117);

return statearr_22112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___22117,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22137 = (function (map_LT_,f,ch,meta22138){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22138 = meta22138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22139,meta22138__$1){
var self__ = this;
var _22139__$1 = this;
return (new cljs.core.async.t_cljs$core$async22137(self__.map_LT_,self__.f,self__.ch,meta22138__$1));
});

cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22139){
var self__ = this;
var _22139__$1 = this;
return self__.meta22138;
});

cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22140 = (function (map_LT_,f,ch,meta22138,_,fn1,meta22141){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22138 = meta22138;
this._ = _;
this.fn1 = fn1;
this.meta22141 = meta22141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22142,meta22141__$1){
var self__ = this;
var _22142__$1 = this;
return (new cljs.core.async.t_cljs$core$async22140(self__.map_LT_,self__.f,self__.ch,self__.meta22138,self__._,self__.fn1,meta22141__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22142){
var self__ = this;
var _22142__$1 = this;
return self__.meta22141;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22130_SHARP_){
return f1.call(null,(((p1__22130_SHARP_ == null))?null:self__.f.call(null,p1__22130_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22140.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22138","meta22138",602360856,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22137","cljs.core.async/t_cljs$core$async22137",1723814798,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22141","meta22141",843215160,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22140";

cljs.core.async.t_cljs$core$async22140.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async22140");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22140 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22140(map_LT___$1,f__$1,ch__$1,meta22138__$1,___$2,fn1__$1,meta22141){
return (new cljs.core.async.t_cljs$core$async22140(map_LT___$1,f__$1,ch__$1,meta22138__$1,___$2,fn1__$1,meta22141));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22140(self__.map_LT_,self__.f,self__.ch,self__.meta22138,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17107__auto__ = ret;
if(cljs.core.truth_(and__17107__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17107__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22138","meta22138",602360856,null)], null);
});

cljs.core.async.t_cljs$core$async22137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22137";

cljs.core.async.t_cljs$core$async22137.cljs$lang$ctorPrWriter = (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async22137");
});

cljs.core.async.__GT_t_cljs$core$async22137 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22137(map_LT___$1,f__$1,ch__$1,meta22138){
return (new cljs.core.async.t_cljs$core$async22137(map_LT___$1,f__$1,ch__$1,meta22138));
});

}

return (new cljs.core.async.t_cljs$core$async22137(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22146 = (function (map_GT_,f,ch,meta22147){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22147 = meta22147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22148,meta22147__$1){
var self__ = this;
var _22148__$1 = this;
return (new cljs.core.async.t_cljs$core$async22146(self__.map_GT_,self__.f,self__.ch,meta22147__$1));
});

cljs.core.async.t_cljs$core$async22146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22148){
var self__ = this;
var _22148__$1 = this;
return self__.meta22147;
});

cljs.core.async.t_cljs$core$async22146.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22147","meta22147",1053581427,null)], null);
});

cljs.core.async.t_cljs$core$async22146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22146";

cljs.core.async.t_cljs$core$async22146.cljs$lang$ctorPrWriter = (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async22146");
});

cljs.core.async.__GT_t_cljs$core$async22146 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22146(map_GT___$1,f__$1,ch__$1,meta22147){
return (new cljs.core.async.t_cljs$core$async22146(map_GT___$1,f__$1,ch__$1,meta22147));
});

}

return (new cljs.core.async.t_cljs$core$async22146(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22152 = (function (filter_GT_,p,ch,meta22153){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22153 = meta22153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22154,meta22153__$1){
var self__ = this;
var _22154__$1 = this;
return (new cljs.core.async.t_cljs$core$async22152(self__.filter_GT_,self__.p,self__.ch,meta22153__$1));
});

cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22154){
var self__ = this;
var _22154__$1 = this;
return self__.meta22153;
});

cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22153","meta22153",759330247,null)], null);
});

cljs.core.async.t_cljs$core$async22152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22152";

cljs.core.async.t_cljs$core$async22152.cljs$lang$ctorPrWriter = (function (this__17717__auto__,writer__17718__auto__,opt__17719__auto__){
return cljs.core._write.call(null,writer__17718__auto__,"cljs.core.async/t_cljs$core$async22152");
});

cljs.core.async.__GT_t_cljs$core$async22152 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22152(filter_GT___$1,p__$1,ch__$1,meta22153){
return (new cljs.core.async.t_cljs$core$async22152(filter_GT___$1,p__$1,ch__$1,meta22153));
});

}

return (new cljs.core.async.t_cljs$core$async22152(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22155 = [];
var len__18177__auto___22199 = arguments.length;
var i__18178__auto___22200 = (0);
while(true){
if((i__18178__auto___22200 < len__18177__auto___22199)){
args22155.push((arguments[i__18178__auto___22200]));

var G__22201 = (i__18178__auto___22200 + (1));
i__18178__auto___22200 = G__22201;
continue;
} else {
}
break;
}

var G__22157 = args22155.length;
switch (G__22157) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22155.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19953__auto___22203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___22203,out){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___22203,out){
return (function (state_22178){
var state_val_22179 = (state_22178[(1)]);
if((state_val_22179 === (7))){
var inst_22174 = (state_22178[(2)]);
var state_22178__$1 = state_22178;
var statearr_22180_22204 = state_22178__$1;
(statearr_22180_22204[(2)] = inst_22174);

(statearr_22180_22204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (1))){
var state_22178__$1 = state_22178;
var statearr_22181_22205 = state_22178__$1;
(statearr_22181_22205[(2)] = null);

(statearr_22181_22205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (4))){
var inst_22160 = (state_22178[(7)]);
var inst_22160__$1 = (state_22178[(2)]);
var inst_22161 = (inst_22160__$1 == null);
var state_22178__$1 = (function (){var statearr_22182 = state_22178;
(statearr_22182[(7)] = inst_22160__$1);

return statearr_22182;
})();
if(cljs.core.truth_(inst_22161)){
var statearr_22183_22206 = state_22178__$1;
(statearr_22183_22206[(1)] = (5));

} else {
var statearr_22184_22207 = state_22178__$1;
(statearr_22184_22207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (6))){
var inst_22160 = (state_22178[(7)]);
var inst_22165 = p.call(null,inst_22160);
var state_22178__$1 = state_22178;
if(cljs.core.truth_(inst_22165)){
var statearr_22185_22208 = state_22178__$1;
(statearr_22185_22208[(1)] = (8));

} else {
var statearr_22186_22209 = state_22178__$1;
(statearr_22186_22209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (3))){
var inst_22176 = (state_22178[(2)]);
var state_22178__$1 = state_22178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22178__$1,inst_22176);
} else {
if((state_val_22179 === (2))){
var state_22178__$1 = state_22178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22178__$1,(4),ch);
} else {
if((state_val_22179 === (11))){
var inst_22168 = (state_22178[(2)]);
var state_22178__$1 = state_22178;
var statearr_22187_22210 = state_22178__$1;
(statearr_22187_22210[(2)] = inst_22168);

(statearr_22187_22210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (9))){
var state_22178__$1 = state_22178;
var statearr_22188_22211 = state_22178__$1;
(statearr_22188_22211[(2)] = null);

(statearr_22188_22211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (5))){
var inst_22163 = cljs.core.async.close_BANG_.call(null,out);
var state_22178__$1 = state_22178;
var statearr_22189_22212 = state_22178__$1;
(statearr_22189_22212[(2)] = inst_22163);

(statearr_22189_22212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (10))){
var inst_22171 = (state_22178[(2)]);
var state_22178__$1 = (function (){var statearr_22190 = state_22178;
(statearr_22190[(8)] = inst_22171);

return statearr_22190;
})();
var statearr_22191_22213 = state_22178__$1;
(statearr_22191_22213[(2)] = null);

(statearr_22191_22213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (8))){
var inst_22160 = (state_22178[(7)]);
var state_22178__$1 = state_22178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22178__$1,(11),out,inst_22160);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___22203,out))
;
return ((function (switch__19841__auto__,c__19953__auto___22203,out){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_22195 = [null,null,null,null,null,null,null,null,null];
(statearr_22195[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_22195[(1)] = (1));

return statearr_22195;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_22178){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_22178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e22196){if((e22196 instanceof Object)){
var ex__19845__auto__ = e22196;
var statearr_22197_22214 = state_22178;
(statearr_22197_22214[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22215 = state_22178;
state_22178 = G__22215;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_22178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_22178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___22203,out))
})();
var state__19955__auto__ = (function (){var statearr_22198 = f__19954__auto__.call(null);
(statearr_22198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___22203);

return statearr_22198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___22203,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22216 = [];
var len__18177__auto___22219 = arguments.length;
var i__18178__auto___22220 = (0);
while(true){
if((i__18178__auto___22220 < len__18177__auto___22219)){
args22216.push((arguments[i__18178__auto___22220]));

var G__22221 = (i__18178__auto___22220 + (1));
i__18178__auto___22220 = G__22221;
continue;
} else {
}
break;
}

var G__22218 = args22216.length;
switch (G__22218) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22216.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__){
return (function (state_22388){
var state_val_22389 = (state_22388[(1)]);
if((state_val_22389 === (7))){
var inst_22384 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22390_22431 = state_22388__$1;
(statearr_22390_22431[(2)] = inst_22384);

(statearr_22390_22431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (20))){
var inst_22354 = (state_22388[(7)]);
var inst_22365 = (state_22388[(2)]);
var inst_22366 = cljs.core.next.call(null,inst_22354);
var inst_22340 = inst_22366;
var inst_22341 = null;
var inst_22342 = (0);
var inst_22343 = (0);
var state_22388__$1 = (function (){var statearr_22391 = state_22388;
(statearr_22391[(8)] = inst_22340);

(statearr_22391[(9)] = inst_22365);

(statearr_22391[(10)] = inst_22343);

(statearr_22391[(11)] = inst_22341);

(statearr_22391[(12)] = inst_22342);

return statearr_22391;
})();
var statearr_22392_22432 = state_22388__$1;
(statearr_22392_22432[(2)] = null);

(statearr_22392_22432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (1))){
var state_22388__$1 = state_22388;
var statearr_22393_22433 = state_22388__$1;
(statearr_22393_22433[(2)] = null);

(statearr_22393_22433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (4))){
var inst_22329 = (state_22388[(13)]);
var inst_22329__$1 = (state_22388[(2)]);
var inst_22330 = (inst_22329__$1 == null);
var state_22388__$1 = (function (){var statearr_22394 = state_22388;
(statearr_22394[(13)] = inst_22329__$1);

return statearr_22394;
})();
if(cljs.core.truth_(inst_22330)){
var statearr_22395_22434 = state_22388__$1;
(statearr_22395_22434[(1)] = (5));

} else {
var statearr_22396_22435 = state_22388__$1;
(statearr_22396_22435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (15))){
var state_22388__$1 = state_22388;
var statearr_22400_22436 = state_22388__$1;
(statearr_22400_22436[(2)] = null);

(statearr_22400_22436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (21))){
var state_22388__$1 = state_22388;
var statearr_22401_22437 = state_22388__$1;
(statearr_22401_22437[(2)] = null);

(statearr_22401_22437[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (13))){
var inst_22340 = (state_22388[(8)]);
var inst_22343 = (state_22388[(10)]);
var inst_22341 = (state_22388[(11)]);
var inst_22342 = (state_22388[(12)]);
var inst_22350 = (state_22388[(2)]);
var inst_22351 = (inst_22343 + (1));
var tmp22397 = inst_22340;
var tmp22398 = inst_22341;
var tmp22399 = inst_22342;
var inst_22340__$1 = tmp22397;
var inst_22341__$1 = tmp22398;
var inst_22342__$1 = tmp22399;
var inst_22343__$1 = inst_22351;
var state_22388__$1 = (function (){var statearr_22402 = state_22388;
(statearr_22402[(8)] = inst_22340__$1);

(statearr_22402[(14)] = inst_22350);

(statearr_22402[(10)] = inst_22343__$1);

(statearr_22402[(11)] = inst_22341__$1);

(statearr_22402[(12)] = inst_22342__$1);

return statearr_22402;
})();
var statearr_22403_22438 = state_22388__$1;
(statearr_22403_22438[(2)] = null);

(statearr_22403_22438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (22))){
var state_22388__$1 = state_22388;
var statearr_22404_22439 = state_22388__$1;
(statearr_22404_22439[(2)] = null);

(statearr_22404_22439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (6))){
var inst_22329 = (state_22388[(13)]);
var inst_22338 = f.call(null,inst_22329);
var inst_22339 = cljs.core.seq.call(null,inst_22338);
var inst_22340 = inst_22339;
var inst_22341 = null;
var inst_22342 = (0);
var inst_22343 = (0);
var state_22388__$1 = (function (){var statearr_22405 = state_22388;
(statearr_22405[(8)] = inst_22340);

(statearr_22405[(10)] = inst_22343);

(statearr_22405[(11)] = inst_22341);

(statearr_22405[(12)] = inst_22342);

return statearr_22405;
})();
var statearr_22406_22440 = state_22388__$1;
(statearr_22406_22440[(2)] = null);

(statearr_22406_22440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (17))){
var inst_22354 = (state_22388[(7)]);
var inst_22358 = cljs.core.chunk_first.call(null,inst_22354);
var inst_22359 = cljs.core.chunk_rest.call(null,inst_22354);
var inst_22360 = cljs.core.count.call(null,inst_22358);
var inst_22340 = inst_22359;
var inst_22341 = inst_22358;
var inst_22342 = inst_22360;
var inst_22343 = (0);
var state_22388__$1 = (function (){var statearr_22407 = state_22388;
(statearr_22407[(8)] = inst_22340);

(statearr_22407[(10)] = inst_22343);

(statearr_22407[(11)] = inst_22341);

(statearr_22407[(12)] = inst_22342);

return statearr_22407;
})();
var statearr_22408_22441 = state_22388__$1;
(statearr_22408_22441[(2)] = null);

(statearr_22408_22441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (3))){
var inst_22386 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22388__$1,inst_22386);
} else {
if((state_val_22389 === (12))){
var inst_22374 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22409_22442 = state_22388__$1;
(statearr_22409_22442[(2)] = inst_22374);

(statearr_22409_22442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (2))){
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22388__$1,(4),in$);
} else {
if((state_val_22389 === (23))){
var inst_22382 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22410_22443 = state_22388__$1;
(statearr_22410_22443[(2)] = inst_22382);

(statearr_22410_22443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (19))){
var inst_22369 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22411_22444 = state_22388__$1;
(statearr_22411_22444[(2)] = inst_22369);

(statearr_22411_22444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (11))){
var inst_22340 = (state_22388[(8)]);
var inst_22354 = (state_22388[(7)]);
var inst_22354__$1 = cljs.core.seq.call(null,inst_22340);
var state_22388__$1 = (function (){var statearr_22412 = state_22388;
(statearr_22412[(7)] = inst_22354__$1);

return statearr_22412;
})();
if(inst_22354__$1){
var statearr_22413_22445 = state_22388__$1;
(statearr_22413_22445[(1)] = (14));

} else {
var statearr_22414_22446 = state_22388__$1;
(statearr_22414_22446[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (9))){
var inst_22376 = (state_22388[(2)]);
var inst_22377 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22388__$1 = (function (){var statearr_22415 = state_22388;
(statearr_22415[(15)] = inst_22376);

return statearr_22415;
})();
if(cljs.core.truth_(inst_22377)){
var statearr_22416_22447 = state_22388__$1;
(statearr_22416_22447[(1)] = (21));

} else {
var statearr_22417_22448 = state_22388__$1;
(statearr_22417_22448[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (5))){
var inst_22332 = cljs.core.async.close_BANG_.call(null,out);
var state_22388__$1 = state_22388;
var statearr_22418_22449 = state_22388__$1;
(statearr_22418_22449[(2)] = inst_22332);

(statearr_22418_22449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (14))){
var inst_22354 = (state_22388[(7)]);
var inst_22356 = cljs.core.chunked_seq_QMARK_.call(null,inst_22354);
var state_22388__$1 = state_22388;
if(inst_22356){
var statearr_22419_22450 = state_22388__$1;
(statearr_22419_22450[(1)] = (17));

} else {
var statearr_22420_22451 = state_22388__$1;
(statearr_22420_22451[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (16))){
var inst_22372 = (state_22388[(2)]);
var state_22388__$1 = state_22388;
var statearr_22421_22452 = state_22388__$1;
(statearr_22421_22452[(2)] = inst_22372);

(statearr_22421_22452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22389 === (10))){
var inst_22343 = (state_22388[(10)]);
var inst_22341 = (state_22388[(11)]);
var inst_22348 = cljs.core._nth.call(null,inst_22341,inst_22343);
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22388__$1,(13),out,inst_22348);
} else {
if((state_val_22389 === (18))){
var inst_22354 = (state_22388[(7)]);
var inst_22363 = cljs.core.first.call(null,inst_22354);
var state_22388__$1 = state_22388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22388__$1,(20),out,inst_22363);
} else {
if((state_val_22389 === (8))){
var inst_22343 = (state_22388[(10)]);
var inst_22342 = (state_22388[(12)]);
var inst_22345 = (inst_22343 < inst_22342);
var inst_22346 = inst_22345;
var state_22388__$1 = state_22388;
if(cljs.core.truth_(inst_22346)){
var statearr_22422_22453 = state_22388__$1;
(statearr_22422_22453[(1)] = (10));

} else {
var statearr_22423_22454 = state_22388__$1;
(statearr_22423_22454[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto__))
;
return ((function (switch__19841__auto__,c__19953__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19842__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19842__auto____0 = (function (){
var statearr_22427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22427[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19842__auto__);

(statearr_22427[(1)] = (1));

return statearr_22427;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19842__auto____1 = (function (state_22388){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_22388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e22428){if((e22428 instanceof Object)){
var ex__19845__auto__ = e22428;
var statearr_22429_22455 = state_22388;
(statearr_22429_22455[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22456 = state_22388;
state_22388 = G__22456;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19842__auto__ = function(state_22388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19842__auto____1.call(this,state_22388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19842__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19842__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__))
})();
var state__19955__auto__ = (function (){var statearr_22430 = f__19954__auto__.call(null);
(statearr_22430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_22430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__))
);

return c__19953__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22457 = [];
var len__18177__auto___22460 = arguments.length;
var i__18178__auto___22461 = (0);
while(true){
if((i__18178__auto___22461 < len__18177__auto___22460)){
args22457.push((arguments[i__18178__auto___22461]));

var G__22462 = (i__18178__auto___22461 + (1));
i__18178__auto___22461 = G__22462;
continue;
} else {
}
break;
}

var G__22459 = args22457.length;
switch (G__22459) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22457.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22464 = [];
var len__18177__auto___22467 = arguments.length;
var i__18178__auto___22468 = (0);
while(true){
if((i__18178__auto___22468 < len__18177__auto___22467)){
args22464.push((arguments[i__18178__auto___22468]));

var G__22469 = (i__18178__auto___22468 + (1));
i__18178__auto___22468 = G__22469;
continue;
} else {
}
break;
}

var G__22466 = args22464.length;
switch (G__22466) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22464.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22471 = [];
var len__18177__auto___22522 = arguments.length;
var i__18178__auto___22523 = (0);
while(true){
if((i__18178__auto___22523 < len__18177__auto___22522)){
args22471.push((arguments[i__18178__auto___22523]));

var G__22524 = (i__18178__auto___22523 + (1));
i__18178__auto___22523 = G__22524;
continue;
} else {
}
break;
}

var G__22473 = args22471.length;
switch (G__22473) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22471.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19953__auto___22526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___22526,out){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___22526,out){
return (function (state_22497){
var state_val_22498 = (state_22497[(1)]);
if((state_val_22498 === (7))){
var inst_22492 = (state_22497[(2)]);
var state_22497__$1 = state_22497;
var statearr_22499_22527 = state_22497__$1;
(statearr_22499_22527[(2)] = inst_22492);

(statearr_22499_22527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (1))){
var inst_22474 = null;
var state_22497__$1 = (function (){var statearr_22500 = state_22497;
(statearr_22500[(7)] = inst_22474);

return statearr_22500;
})();
var statearr_22501_22528 = state_22497__$1;
(statearr_22501_22528[(2)] = null);

(statearr_22501_22528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (4))){
var inst_22477 = (state_22497[(8)]);
var inst_22477__$1 = (state_22497[(2)]);
var inst_22478 = (inst_22477__$1 == null);
var inst_22479 = cljs.core.not.call(null,inst_22478);
var state_22497__$1 = (function (){var statearr_22502 = state_22497;
(statearr_22502[(8)] = inst_22477__$1);

return statearr_22502;
})();
if(inst_22479){
var statearr_22503_22529 = state_22497__$1;
(statearr_22503_22529[(1)] = (5));

} else {
var statearr_22504_22530 = state_22497__$1;
(statearr_22504_22530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (6))){
var state_22497__$1 = state_22497;
var statearr_22505_22531 = state_22497__$1;
(statearr_22505_22531[(2)] = null);

(statearr_22505_22531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (3))){
var inst_22494 = (state_22497[(2)]);
var inst_22495 = cljs.core.async.close_BANG_.call(null,out);
var state_22497__$1 = (function (){var statearr_22506 = state_22497;
(statearr_22506[(9)] = inst_22494);

return statearr_22506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22497__$1,inst_22495);
} else {
if((state_val_22498 === (2))){
var state_22497__$1 = state_22497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22497__$1,(4),ch);
} else {
if((state_val_22498 === (11))){
var inst_22477 = (state_22497[(8)]);
var inst_22486 = (state_22497[(2)]);
var inst_22474 = inst_22477;
var state_22497__$1 = (function (){var statearr_22507 = state_22497;
(statearr_22507[(7)] = inst_22474);

(statearr_22507[(10)] = inst_22486);

return statearr_22507;
})();
var statearr_22508_22532 = state_22497__$1;
(statearr_22508_22532[(2)] = null);

(statearr_22508_22532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (9))){
var inst_22477 = (state_22497[(8)]);
var state_22497__$1 = state_22497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22497__$1,(11),out,inst_22477);
} else {
if((state_val_22498 === (5))){
var inst_22477 = (state_22497[(8)]);
var inst_22474 = (state_22497[(7)]);
var inst_22481 = cljs.core._EQ_.call(null,inst_22477,inst_22474);
var state_22497__$1 = state_22497;
if(inst_22481){
var statearr_22510_22533 = state_22497__$1;
(statearr_22510_22533[(1)] = (8));

} else {
var statearr_22511_22534 = state_22497__$1;
(statearr_22511_22534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (10))){
var inst_22489 = (state_22497[(2)]);
var state_22497__$1 = state_22497;
var statearr_22512_22535 = state_22497__$1;
(statearr_22512_22535[(2)] = inst_22489);

(statearr_22512_22535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22498 === (8))){
var inst_22474 = (state_22497[(7)]);
var tmp22509 = inst_22474;
var inst_22474__$1 = tmp22509;
var state_22497__$1 = (function (){var statearr_22513 = state_22497;
(statearr_22513[(7)] = inst_22474__$1);

return statearr_22513;
})();
var statearr_22514_22536 = state_22497__$1;
(statearr_22514_22536[(2)] = null);

(statearr_22514_22536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___22526,out))
;
return ((function (switch__19841__auto__,c__19953__auto___22526,out){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_22518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22518[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_22518[(1)] = (1));

return statearr_22518;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_22497){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_22497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e22519){if((e22519 instanceof Object)){
var ex__19845__auto__ = e22519;
var statearr_22520_22537 = state_22497;
(statearr_22520_22537[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22538 = state_22497;
state_22497 = G__22538;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_22497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_22497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___22526,out))
})();
var state__19955__auto__ = (function (){var statearr_22521 = f__19954__auto__.call(null);
(statearr_22521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___22526);

return statearr_22521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___22526,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22539 = [];
var len__18177__auto___22609 = arguments.length;
var i__18178__auto___22610 = (0);
while(true){
if((i__18178__auto___22610 < len__18177__auto___22609)){
args22539.push((arguments[i__18178__auto___22610]));

var G__22611 = (i__18178__auto___22610 + (1));
i__18178__auto___22610 = G__22611;
continue;
} else {
}
break;
}

var G__22541 = args22539.length;
switch (G__22541) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22539.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19953__auto___22613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___22613,out){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___22613,out){
return (function (state_22579){
var state_val_22580 = (state_22579[(1)]);
if((state_val_22580 === (7))){
var inst_22575 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22581_22614 = state_22579__$1;
(statearr_22581_22614[(2)] = inst_22575);

(statearr_22581_22614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (1))){
var inst_22542 = (new Array(n));
var inst_22543 = inst_22542;
var inst_22544 = (0);
var state_22579__$1 = (function (){var statearr_22582 = state_22579;
(statearr_22582[(7)] = inst_22543);

(statearr_22582[(8)] = inst_22544);

return statearr_22582;
})();
var statearr_22583_22615 = state_22579__$1;
(statearr_22583_22615[(2)] = null);

(statearr_22583_22615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (4))){
var inst_22547 = (state_22579[(9)]);
var inst_22547__$1 = (state_22579[(2)]);
var inst_22548 = (inst_22547__$1 == null);
var inst_22549 = cljs.core.not.call(null,inst_22548);
var state_22579__$1 = (function (){var statearr_22584 = state_22579;
(statearr_22584[(9)] = inst_22547__$1);

return statearr_22584;
})();
if(inst_22549){
var statearr_22585_22616 = state_22579__$1;
(statearr_22585_22616[(1)] = (5));

} else {
var statearr_22586_22617 = state_22579__$1;
(statearr_22586_22617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (15))){
var inst_22569 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22587_22618 = state_22579__$1;
(statearr_22587_22618[(2)] = inst_22569);

(statearr_22587_22618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (13))){
var state_22579__$1 = state_22579;
var statearr_22588_22619 = state_22579__$1;
(statearr_22588_22619[(2)] = null);

(statearr_22588_22619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (6))){
var inst_22544 = (state_22579[(8)]);
var inst_22565 = (inst_22544 > (0));
var state_22579__$1 = state_22579;
if(cljs.core.truth_(inst_22565)){
var statearr_22589_22620 = state_22579__$1;
(statearr_22589_22620[(1)] = (12));

} else {
var statearr_22590_22621 = state_22579__$1;
(statearr_22590_22621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (3))){
var inst_22577 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22579__$1,inst_22577);
} else {
if((state_val_22580 === (12))){
var inst_22543 = (state_22579[(7)]);
var inst_22567 = cljs.core.vec.call(null,inst_22543);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22579__$1,(15),out,inst_22567);
} else {
if((state_val_22580 === (2))){
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22579__$1,(4),ch);
} else {
if((state_val_22580 === (11))){
var inst_22559 = (state_22579[(2)]);
var inst_22560 = (new Array(n));
var inst_22543 = inst_22560;
var inst_22544 = (0);
var state_22579__$1 = (function (){var statearr_22591 = state_22579;
(statearr_22591[(10)] = inst_22559);

(statearr_22591[(7)] = inst_22543);

(statearr_22591[(8)] = inst_22544);

return statearr_22591;
})();
var statearr_22592_22622 = state_22579__$1;
(statearr_22592_22622[(2)] = null);

(statearr_22592_22622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (9))){
var inst_22543 = (state_22579[(7)]);
var inst_22557 = cljs.core.vec.call(null,inst_22543);
var state_22579__$1 = state_22579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22579__$1,(11),out,inst_22557);
} else {
if((state_val_22580 === (5))){
var inst_22547 = (state_22579[(9)]);
var inst_22543 = (state_22579[(7)]);
var inst_22544 = (state_22579[(8)]);
var inst_22552 = (state_22579[(11)]);
var inst_22551 = (inst_22543[inst_22544] = inst_22547);
var inst_22552__$1 = (inst_22544 + (1));
var inst_22553 = (inst_22552__$1 < n);
var state_22579__$1 = (function (){var statearr_22593 = state_22579;
(statearr_22593[(12)] = inst_22551);

(statearr_22593[(11)] = inst_22552__$1);

return statearr_22593;
})();
if(cljs.core.truth_(inst_22553)){
var statearr_22594_22623 = state_22579__$1;
(statearr_22594_22623[(1)] = (8));

} else {
var statearr_22595_22624 = state_22579__$1;
(statearr_22595_22624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (14))){
var inst_22572 = (state_22579[(2)]);
var inst_22573 = cljs.core.async.close_BANG_.call(null,out);
var state_22579__$1 = (function (){var statearr_22597 = state_22579;
(statearr_22597[(13)] = inst_22572);

return statearr_22597;
})();
var statearr_22598_22625 = state_22579__$1;
(statearr_22598_22625[(2)] = inst_22573);

(statearr_22598_22625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (10))){
var inst_22563 = (state_22579[(2)]);
var state_22579__$1 = state_22579;
var statearr_22599_22626 = state_22579__$1;
(statearr_22599_22626[(2)] = inst_22563);

(statearr_22599_22626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22580 === (8))){
var inst_22543 = (state_22579[(7)]);
var inst_22552 = (state_22579[(11)]);
var tmp22596 = inst_22543;
var inst_22543__$1 = tmp22596;
var inst_22544 = inst_22552;
var state_22579__$1 = (function (){var statearr_22600 = state_22579;
(statearr_22600[(7)] = inst_22543__$1);

(statearr_22600[(8)] = inst_22544);

return statearr_22600;
})();
var statearr_22601_22627 = state_22579__$1;
(statearr_22601_22627[(2)] = null);

(statearr_22601_22627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___22613,out))
;
return ((function (switch__19841__auto__,c__19953__auto___22613,out){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_22605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22605[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_22605[(1)] = (1));

return statearr_22605;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_22579){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_22579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e22606){if((e22606 instanceof Object)){
var ex__19845__auto__ = e22606;
var statearr_22607_22628 = state_22579;
(statearr_22607_22628[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22629 = state_22579;
state_22579 = G__22629;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_22579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_22579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___22613,out))
})();
var state__19955__auto__ = (function (){var statearr_22608 = f__19954__auto__.call(null);
(statearr_22608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___22613);

return statearr_22608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___22613,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22630 = [];
var len__18177__auto___22704 = arguments.length;
var i__18178__auto___22705 = (0);
while(true){
if((i__18178__auto___22705 < len__18177__auto___22704)){
args22630.push((arguments[i__18178__auto___22705]));

var G__22706 = (i__18178__auto___22705 + (1));
i__18178__auto___22705 = G__22706;
continue;
} else {
}
break;
}

var G__22632 = args22630.length;
switch (G__22632) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22630.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19953__auto___22708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___22708,out){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___22708,out){
return (function (state_22674){
var state_val_22675 = (state_22674[(1)]);
if((state_val_22675 === (7))){
var inst_22670 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22676_22709 = state_22674__$1;
(statearr_22676_22709[(2)] = inst_22670);

(statearr_22676_22709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (1))){
var inst_22633 = [];
var inst_22634 = inst_22633;
var inst_22635 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22674__$1 = (function (){var statearr_22677 = state_22674;
(statearr_22677[(7)] = inst_22634);

(statearr_22677[(8)] = inst_22635);

return statearr_22677;
})();
var statearr_22678_22710 = state_22674__$1;
(statearr_22678_22710[(2)] = null);

(statearr_22678_22710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (4))){
var inst_22638 = (state_22674[(9)]);
var inst_22638__$1 = (state_22674[(2)]);
var inst_22639 = (inst_22638__$1 == null);
var inst_22640 = cljs.core.not.call(null,inst_22639);
var state_22674__$1 = (function (){var statearr_22679 = state_22674;
(statearr_22679[(9)] = inst_22638__$1);

return statearr_22679;
})();
if(inst_22640){
var statearr_22680_22711 = state_22674__$1;
(statearr_22680_22711[(1)] = (5));

} else {
var statearr_22681_22712 = state_22674__$1;
(statearr_22681_22712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (15))){
var inst_22664 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22682_22713 = state_22674__$1;
(statearr_22682_22713[(2)] = inst_22664);

(statearr_22682_22713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (13))){
var state_22674__$1 = state_22674;
var statearr_22683_22714 = state_22674__$1;
(statearr_22683_22714[(2)] = null);

(statearr_22683_22714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (6))){
var inst_22634 = (state_22674[(7)]);
var inst_22659 = inst_22634.length;
var inst_22660 = (inst_22659 > (0));
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22660)){
var statearr_22684_22715 = state_22674__$1;
(statearr_22684_22715[(1)] = (12));

} else {
var statearr_22685_22716 = state_22674__$1;
(statearr_22685_22716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (3))){
var inst_22672 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22674__$1,inst_22672);
} else {
if((state_val_22675 === (12))){
var inst_22634 = (state_22674[(7)]);
var inst_22662 = cljs.core.vec.call(null,inst_22634);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22674__$1,(15),out,inst_22662);
} else {
if((state_val_22675 === (2))){
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22674__$1,(4),ch);
} else {
if((state_val_22675 === (11))){
var inst_22642 = (state_22674[(10)]);
var inst_22638 = (state_22674[(9)]);
var inst_22652 = (state_22674[(2)]);
var inst_22653 = [];
var inst_22654 = inst_22653.push(inst_22638);
var inst_22634 = inst_22653;
var inst_22635 = inst_22642;
var state_22674__$1 = (function (){var statearr_22686 = state_22674;
(statearr_22686[(7)] = inst_22634);

(statearr_22686[(8)] = inst_22635);

(statearr_22686[(11)] = inst_22652);

(statearr_22686[(12)] = inst_22654);

return statearr_22686;
})();
var statearr_22687_22717 = state_22674__$1;
(statearr_22687_22717[(2)] = null);

(statearr_22687_22717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (9))){
var inst_22634 = (state_22674[(7)]);
var inst_22650 = cljs.core.vec.call(null,inst_22634);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22674__$1,(11),out,inst_22650);
} else {
if((state_val_22675 === (5))){
var inst_22642 = (state_22674[(10)]);
var inst_22638 = (state_22674[(9)]);
var inst_22635 = (state_22674[(8)]);
var inst_22642__$1 = f.call(null,inst_22638);
var inst_22643 = cljs.core._EQ_.call(null,inst_22642__$1,inst_22635);
var inst_22644 = cljs.core.keyword_identical_QMARK_.call(null,inst_22635,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22645 = (inst_22643) || (inst_22644);
var state_22674__$1 = (function (){var statearr_22688 = state_22674;
(statearr_22688[(10)] = inst_22642__$1);

return statearr_22688;
})();
if(cljs.core.truth_(inst_22645)){
var statearr_22689_22718 = state_22674__$1;
(statearr_22689_22718[(1)] = (8));

} else {
var statearr_22690_22719 = state_22674__$1;
(statearr_22690_22719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (14))){
var inst_22667 = (state_22674[(2)]);
var inst_22668 = cljs.core.async.close_BANG_.call(null,out);
var state_22674__$1 = (function (){var statearr_22692 = state_22674;
(statearr_22692[(13)] = inst_22667);

return statearr_22692;
})();
var statearr_22693_22720 = state_22674__$1;
(statearr_22693_22720[(2)] = inst_22668);

(statearr_22693_22720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (10))){
var inst_22657 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22694_22721 = state_22674__$1;
(statearr_22694_22721[(2)] = inst_22657);

(statearr_22694_22721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (8))){
var inst_22634 = (state_22674[(7)]);
var inst_22642 = (state_22674[(10)]);
var inst_22638 = (state_22674[(9)]);
var inst_22647 = inst_22634.push(inst_22638);
var tmp22691 = inst_22634;
var inst_22634__$1 = tmp22691;
var inst_22635 = inst_22642;
var state_22674__$1 = (function (){var statearr_22695 = state_22674;
(statearr_22695[(7)] = inst_22634__$1);

(statearr_22695[(14)] = inst_22647);

(statearr_22695[(8)] = inst_22635);

return statearr_22695;
})();
var statearr_22696_22722 = state_22674__$1;
(statearr_22696_22722[(2)] = null);

(statearr_22696_22722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19953__auto___22708,out))
;
return ((function (switch__19841__auto__,c__19953__auto___22708,out){
return (function() {
var cljs$core$async$state_machine__19842__auto__ = null;
var cljs$core$async$state_machine__19842__auto____0 = (function (){
var statearr_22700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22700[(0)] = cljs$core$async$state_machine__19842__auto__);

(statearr_22700[(1)] = (1));

return statearr_22700;
});
var cljs$core$async$state_machine__19842__auto____1 = (function (state_22674){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_22674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e22701){if((e22701 instanceof Object)){
var ex__19845__auto__ = e22701;
var statearr_22702_22723 = state_22674;
(statearr_22702_22723[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22724 = state_22674;
state_22674 = G__22724;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
cljs$core$async$state_machine__19842__auto__ = function(state_22674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19842__auto____1.call(this,state_22674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19842__auto____0;
cljs$core$async$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19842__auto____1;
return cljs$core$async$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___22708,out))
})();
var state__19955__auto__ = (function (){var statearr_22703 = f__19954__auto__.call(null);
(statearr_22703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___22708);

return statearr_22703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___22708,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map