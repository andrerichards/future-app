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
var args20036 = [];
var len__18200__auto___20042 = arguments.length;
var i__18201__auto___20043 = (0);
while(true){
if((i__18201__auto___20043 < len__18200__auto___20042)){
args20036.push((arguments[i__18201__auto___20043]));

var G__20044 = (i__18201__auto___20043 + (1));
i__18201__auto___20043 = G__20044;
continue;
} else {
}
break;
}

var G__20038 = args20036.length;
switch (G__20038) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20036.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20039 = (function (f,blockable,meta20040){
this.f = f;
this.blockable = blockable;
this.meta20040 = meta20040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20041,meta20040__$1){
var self__ = this;
var _20041__$1 = this;
return (new cljs.core.async.t_cljs$core$async20039(self__.f,self__.blockable,meta20040__$1));
});

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20041){
var self__ = this;
var _20041__$1 = this;
return self__.meta20040;
});

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20040","meta20040",-1203757022,null)], null);
});

cljs.core.async.t_cljs$core$async20039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20039";

cljs.core.async.t_cljs$core$async20039.cljs$lang$ctorPrWriter = (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async20039");
});

cljs.core.async.__GT_t_cljs$core$async20039 = (function cljs$core$async$__GT_t_cljs$core$async20039(f__$1,blockable__$1,meta20040){
return (new cljs.core.async.t_cljs$core$async20039(f__$1,blockable__$1,meta20040));
});

}

return (new cljs.core.async.t_cljs$core$async20039(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20048 = [];
var len__18200__auto___20051 = arguments.length;
var i__18201__auto___20052 = (0);
while(true){
if((i__18201__auto___20052 < len__18200__auto___20051)){
args20048.push((arguments[i__18201__auto___20052]));

var G__20053 = (i__18201__auto___20052 + (1));
i__18201__auto___20052 = G__20053;
continue;
} else {
}
break;
}

var G__20050 = args20048.length;
switch (G__20050) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20048.length)].join('')));

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
var args20055 = [];
var len__18200__auto___20058 = arguments.length;
var i__18201__auto___20059 = (0);
while(true){
if((i__18201__auto___20059 < len__18200__auto___20058)){
args20055.push((arguments[i__18201__auto___20059]));

var G__20060 = (i__18201__auto___20059 + (1));
i__18201__auto___20059 = G__20060;
continue;
} else {
}
break;
}

var G__20057 = args20055.length;
switch (G__20057) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20055.length)].join('')));

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
var args20062 = [];
var len__18200__auto___20065 = arguments.length;
var i__18201__auto___20066 = (0);
while(true){
if((i__18201__auto___20066 < len__18200__auto___20065)){
args20062.push((arguments[i__18201__auto___20066]));

var G__20067 = (i__18201__auto___20066 + (1));
i__18201__auto___20066 = G__20067;
continue;
} else {
}
break;
}

var G__20064 = args20062.length;
switch (G__20064) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20062.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20069 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20069);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20069,ret){
return (function (){
return fn1.call(null,val_20069);
});})(val_20069,ret))
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
var args20070 = [];
var len__18200__auto___20073 = arguments.length;
var i__18201__auto___20074 = (0);
while(true){
if((i__18201__auto___20074 < len__18200__auto___20073)){
args20070.push((arguments[i__18201__auto___20074]));

var G__20075 = (i__18201__auto___20074 + (1));
i__18201__auto___20074 = G__20075;
continue;
} else {
}
break;
}

var G__20072 = args20070.length;
switch (G__20072) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20070.length)].join('')));

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
var n__18045__auto___20077 = n;
var x_20078 = (0);
while(true){
if((x_20078 < n__18045__auto___20077)){
(a[x_20078] = (0));

var G__20079 = (x_20078 + (1));
x_20078 = G__20079;
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

var G__20080 = (i + (1));
i = G__20080;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20084 = (function (alt_flag,flag,meta20085){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20085 = meta20085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20086,meta20085__$1){
var self__ = this;
var _20086__$1 = this;
return (new cljs.core.async.t_cljs$core$async20084(self__.alt_flag,self__.flag,meta20085__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20086){
var self__ = this;
var _20086__$1 = this;
return self__.meta20085;
});})(flag))
;

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20084.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20085","meta20085",-334047007,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20084";

cljs.core.async.t_cljs$core$async20084.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async20084");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20084 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20084(alt_flag__$1,flag__$1,meta20085){
return (new cljs.core.async.t_cljs$core$async20084(alt_flag__$1,flag__$1,meta20085));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20084(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20090 = (function (alt_handler,flag,cb,meta20091){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20091 = meta20091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20092,meta20091__$1){
var self__ = this;
var _20092__$1 = this;
return (new cljs.core.async.t_cljs$core$async20090(self__.alt_handler,self__.flag,self__.cb,meta20091__$1));
});

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20092){
var self__ = this;
var _20092__$1 = this;
return self__.meta20091;
});

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20091","meta20091",1814607834,null)], null);
});

cljs.core.async.t_cljs$core$async20090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20090";

cljs.core.async.t_cljs$core$async20090.cljs$lang$ctorPrWriter = (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async20090");
});

cljs.core.async.__GT_t_cljs$core$async20090 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20090(alt_handler__$1,flag__$1,cb__$1,meta20091){
return (new cljs.core.async.t_cljs$core$async20090(alt_handler__$1,flag__$1,cb__$1,meta20091));
});

}

return (new cljs.core.async.t_cljs$core$async20090(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20093_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20093_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20094_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20094_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17142__auto__ = wport;
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20095 = (i + (1));
i = G__20095;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17142__auto__ = ret;
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__17130__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17130__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17130__auto__;
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
var args__18207__auto__ = [];
var len__18200__auto___20101 = arguments.length;
var i__18201__auto___20102 = (0);
while(true){
if((i__18201__auto___20102 < len__18200__auto___20101)){
args__18207__auto__.push((arguments[i__18201__auto___20102]));

var G__20103 = (i__18201__auto___20102 + (1));
i__18201__auto___20102 = G__20103;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((1) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18208__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20098){
var map__20099 = p__20098;
var map__20099__$1 = ((((!((map__20099 == null)))?((((map__20099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20099):map__20099);
var opts = map__20099__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20096){
var G__20097 = cljs.core.first.call(null,seq20096);
var seq20096__$1 = cljs.core.next.call(null,seq20096);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20097,seq20096__$1);
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
var args20104 = [];
var len__18200__auto___20154 = arguments.length;
var i__18201__auto___20155 = (0);
while(true){
if((i__18201__auto___20155 < len__18200__auto___20154)){
args20104.push((arguments[i__18201__auto___20155]));

var G__20156 = (i__18201__auto___20155 + (1));
i__18201__auto___20155 = G__20156;
continue;
} else {
}
break;
}

var G__20106 = args20104.length;
switch (G__20106) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20104.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19991__auto___20158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___20158){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___20158){
return (function (state_20130){
var state_val_20131 = (state_20130[(1)]);
if((state_val_20131 === (7))){
var inst_20126 = (state_20130[(2)]);
var state_20130__$1 = state_20130;
var statearr_20132_20159 = state_20130__$1;
(statearr_20132_20159[(2)] = inst_20126);

(statearr_20132_20159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (1))){
var state_20130__$1 = state_20130;
var statearr_20133_20160 = state_20130__$1;
(statearr_20133_20160[(2)] = null);

(statearr_20133_20160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (4))){
var inst_20109 = (state_20130[(7)]);
var inst_20109__$1 = (state_20130[(2)]);
var inst_20110 = (inst_20109__$1 == null);
var state_20130__$1 = (function (){var statearr_20134 = state_20130;
(statearr_20134[(7)] = inst_20109__$1);

return statearr_20134;
})();
if(cljs.core.truth_(inst_20110)){
var statearr_20135_20161 = state_20130__$1;
(statearr_20135_20161[(1)] = (5));

} else {
var statearr_20136_20162 = state_20130__$1;
(statearr_20136_20162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (13))){
var state_20130__$1 = state_20130;
var statearr_20137_20163 = state_20130__$1;
(statearr_20137_20163[(2)] = null);

(statearr_20137_20163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (6))){
var inst_20109 = (state_20130[(7)]);
var state_20130__$1 = state_20130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20130__$1,(11),to,inst_20109);
} else {
if((state_val_20131 === (3))){
var inst_20128 = (state_20130[(2)]);
var state_20130__$1 = state_20130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20130__$1,inst_20128);
} else {
if((state_val_20131 === (12))){
var state_20130__$1 = state_20130;
var statearr_20138_20164 = state_20130__$1;
(statearr_20138_20164[(2)] = null);

(statearr_20138_20164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (2))){
var state_20130__$1 = state_20130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20130__$1,(4),from);
} else {
if((state_val_20131 === (11))){
var inst_20119 = (state_20130[(2)]);
var state_20130__$1 = state_20130;
if(cljs.core.truth_(inst_20119)){
var statearr_20139_20165 = state_20130__$1;
(statearr_20139_20165[(1)] = (12));

} else {
var statearr_20140_20166 = state_20130__$1;
(statearr_20140_20166[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (9))){
var state_20130__$1 = state_20130;
var statearr_20141_20167 = state_20130__$1;
(statearr_20141_20167[(2)] = null);

(statearr_20141_20167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (5))){
var state_20130__$1 = state_20130;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20142_20168 = state_20130__$1;
(statearr_20142_20168[(1)] = (8));

} else {
var statearr_20143_20169 = state_20130__$1;
(statearr_20143_20169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (14))){
var inst_20124 = (state_20130[(2)]);
var state_20130__$1 = state_20130;
var statearr_20144_20170 = state_20130__$1;
(statearr_20144_20170[(2)] = inst_20124);

(statearr_20144_20170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (10))){
var inst_20116 = (state_20130[(2)]);
var state_20130__$1 = state_20130;
var statearr_20145_20171 = state_20130__$1;
(statearr_20145_20171[(2)] = inst_20116);

(statearr_20145_20171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20131 === (8))){
var inst_20113 = cljs.core.async.close_BANG_.call(null,to);
var state_20130__$1 = state_20130;
var statearr_20146_20172 = state_20130__$1;
(statearr_20146_20172[(2)] = inst_20113);

(statearr_20146_20172[(1)] = (10));


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
});})(c__19991__auto___20158))
;
return ((function (switch__19879__auto__,c__19991__auto___20158){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_20150 = [null,null,null,null,null,null,null,null];
(statearr_20150[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_20150[(1)] = (1));

return statearr_20150;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_20130){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20151){if((e20151 instanceof Object)){
var ex__19883__auto__ = e20151;
var statearr_20152_20173 = state_20130;
(statearr_20152_20173[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20174 = state_20130;
state_20130 = G__20174;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_20130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_20130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___20158))
})();
var state__19993__auto__ = (function (){var statearr_20153 = f__19992__auto__.call(null);
(statearr_20153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___20158);

return statearr_20153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___20158))
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
return (function (p__20358){
var vec__20359 = p__20358;
var v = cljs.core.nth.call(null,vec__20359,(0),null);
var p = cljs.core.nth.call(null,vec__20359,(1),null);
var job = vec__20359;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19991__auto___20541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___20541,res,vec__20359,v,p,job,jobs,results){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___20541,res,vec__20359,v,p,job,jobs,results){
return (function (state_20364){
var state_val_20365 = (state_20364[(1)]);
if((state_val_20365 === (1))){
var state_20364__$1 = state_20364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20364__$1,(2),res,v);
} else {
if((state_val_20365 === (2))){
var inst_20361 = (state_20364[(2)]);
var inst_20362 = cljs.core.async.close_BANG_.call(null,res);
var state_20364__$1 = (function (){var statearr_20366 = state_20364;
(statearr_20366[(7)] = inst_20361);

return statearr_20366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20364__$1,inst_20362);
} else {
return null;
}
}
});})(c__19991__auto___20541,res,vec__20359,v,p,job,jobs,results))
;
return ((function (switch__19879__auto__,c__19991__auto___20541,res,vec__20359,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0 = (function (){
var statearr_20370 = [null,null,null,null,null,null,null,null];
(statearr_20370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__);

(statearr_20370[(1)] = (1));

return statearr_20370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1 = (function (state_20364){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20371){if((e20371 instanceof Object)){
var ex__19883__auto__ = e20371;
var statearr_20372_20542 = state_20364;
(statearr_20372_20542[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20543 = state_20364;
state_20364 = G__20543;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = function(state_20364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1.call(this,state_20364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___20541,res,vec__20359,v,p,job,jobs,results))
})();
var state__19993__auto__ = (function (){var statearr_20373 = f__19992__auto__.call(null);
(statearr_20373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___20541);

return statearr_20373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___20541,res,vec__20359,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20374){
var vec__20375 = p__20374;
var v = cljs.core.nth.call(null,vec__20375,(0),null);
var p = cljs.core.nth.call(null,vec__20375,(1),null);
var job = vec__20375;
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
var n__18045__auto___20544 = n;
var __20545 = (0);
while(true){
if((__20545 < n__18045__auto___20544)){
var G__20376_20546 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20376_20546) {
case "compute":
var c__19991__auto___20548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20545,c__19991__auto___20548,G__20376_20546,n__18045__auto___20544,jobs,results,process,async){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (__20545,c__19991__auto___20548,G__20376_20546,n__18045__auto___20544,jobs,results,process,async){
return (function (state_20389){
var state_val_20390 = (state_20389[(1)]);
if((state_val_20390 === (1))){
var state_20389__$1 = state_20389;
var statearr_20391_20549 = state_20389__$1;
(statearr_20391_20549[(2)] = null);

(statearr_20391_20549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20390 === (2))){
var state_20389__$1 = state_20389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20389__$1,(4),jobs);
} else {
if((state_val_20390 === (3))){
var inst_20387 = (state_20389[(2)]);
var state_20389__$1 = state_20389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20389__$1,inst_20387);
} else {
if((state_val_20390 === (4))){
var inst_20379 = (state_20389[(2)]);
var inst_20380 = process.call(null,inst_20379);
var state_20389__$1 = state_20389;
if(cljs.core.truth_(inst_20380)){
var statearr_20392_20550 = state_20389__$1;
(statearr_20392_20550[(1)] = (5));

} else {
var statearr_20393_20551 = state_20389__$1;
(statearr_20393_20551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20390 === (5))){
var state_20389__$1 = state_20389;
var statearr_20394_20552 = state_20389__$1;
(statearr_20394_20552[(2)] = null);

(statearr_20394_20552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20390 === (6))){
var state_20389__$1 = state_20389;
var statearr_20395_20553 = state_20389__$1;
(statearr_20395_20553[(2)] = null);

(statearr_20395_20553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20390 === (7))){
var inst_20385 = (state_20389[(2)]);
var state_20389__$1 = state_20389;
var statearr_20396_20554 = state_20389__$1;
(statearr_20396_20554[(2)] = inst_20385);

(statearr_20396_20554[(1)] = (3));


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
});})(__20545,c__19991__auto___20548,G__20376_20546,n__18045__auto___20544,jobs,results,process,async))
;
return ((function (__20545,switch__19879__auto__,c__19991__auto___20548,G__20376_20546,n__18045__auto___20544,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0 = (function (){
var statearr_20400 = [null,null,null,null,null,null,null];
(statearr_20400[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__);

(statearr_20400[(1)] = (1));

return statearr_20400;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1 = (function (state_20389){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20401){if((e20401 instanceof Object)){
var ex__19883__auto__ = e20401;
var statearr_20402_20555 = state_20389;
(statearr_20402_20555[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20556 = state_20389;
state_20389 = G__20556;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = function(state_20389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1.call(this,state_20389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__;
})()
;})(__20545,switch__19879__auto__,c__19991__auto___20548,G__20376_20546,n__18045__auto___20544,jobs,results,process,async))
})();
var state__19993__auto__ = (function (){var statearr_20403 = f__19992__auto__.call(null);
(statearr_20403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___20548);

return statearr_20403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(__20545,c__19991__auto___20548,G__20376_20546,n__18045__auto___20544,jobs,results,process,async))
);


break;
case "async":
var c__19991__auto___20557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20545,c__19991__auto___20557,G__20376_20546,n__18045__auto___20544,jobs,results,process,async){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (__20545,c__19991__auto___20557,G__20376_20546,n__18045__auto___20544,jobs,results,process,async){
return (function (state_20416){
var state_val_20417 = (state_20416[(1)]);
if((state_val_20417 === (1))){
var state_20416__$1 = state_20416;
var statearr_20418_20558 = state_20416__$1;
(statearr_20418_20558[(2)] = null);

(statearr_20418_20558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20417 === (2))){
var state_20416__$1 = state_20416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20416__$1,(4),jobs);
} else {
if((state_val_20417 === (3))){
var inst_20414 = (state_20416[(2)]);
var state_20416__$1 = state_20416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20416__$1,inst_20414);
} else {
if((state_val_20417 === (4))){
var inst_20406 = (state_20416[(2)]);
var inst_20407 = async.call(null,inst_20406);
var state_20416__$1 = state_20416;
if(cljs.core.truth_(inst_20407)){
var statearr_20419_20559 = state_20416__$1;
(statearr_20419_20559[(1)] = (5));

} else {
var statearr_20420_20560 = state_20416__$1;
(statearr_20420_20560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20417 === (5))){
var state_20416__$1 = state_20416;
var statearr_20421_20561 = state_20416__$1;
(statearr_20421_20561[(2)] = null);

(statearr_20421_20561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20417 === (6))){
var state_20416__$1 = state_20416;
var statearr_20422_20562 = state_20416__$1;
(statearr_20422_20562[(2)] = null);

(statearr_20422_20562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20417 === (7))){
var inst_20412 = (state_20416[(2)]);
var state_20416__$1 = state_20416;
var statearr_20423_20563 = state_20416__$1;
(statearr_20423_20563[(2)] = inst_20412);

(statearr_20423_20563[(1)] = (3));


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
});})(__20545,c__19991__auto___20557,G__20376_20546,n__18045__auto___20544,jobs,results,process,async))
;
return ((function (__20545,switch__19879__auto__,c__19991__auto___20557,G__20376_20546,n__18045__auto___20544,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0 = (function (){
var statearr_20427 = [null,null,null,null,null,null,null];
(statearr_20427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__);

(statearr_20427[(1)] = (1));

return statearr_20427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1 = (function (state_20416){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20428){if((e20428 instanceof Object)){
var ex__19883__auto__ = e20428;
var statearr_20429_20564 = state_20416;
(statearr_20429_20564[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20565 = state_20416;
state_20416 = G__20565;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = function(state_20416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1.call(this,state_20416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__;
})()
;})(__20545,switch__19879__auto__,c__19991__auto___20557,G__20376_20546,n__18045__auto___20544,jobs,results,process,async))
})();
var state__19993__auto__ = (function (){var statearr_20430 = f__19992__auto__.call(null);
(statearr_20430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___20557);

return statearr_20430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(__20545,c__19991__auto___20557,G__20376_20546,n__18045__auto___20544,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20566 = (__20545 + (1));
__20545 = G__20566;
continue;
} else {
}
break;
}

var c__19991__auto___20567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___20567,jobs,results,process,async){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___20567,jobs,results,process,async){
return (function (state_20452){
var state_val_20453 = (state_20452[(1)]);
if((state_val_20453 === (1))){
var state_20452__$1 = state_20452;
var statearr_20454_20568 = state_20452__$1;
(statearr_20454_20568[(2)] = null);

(statearr_20454_20568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20453 === (2))){
var state_20452__$1 = state_20452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20452__$1,(4),from);
} else {
if((state_val_20453 === (3))){
var inst_20450 = (state_20452[(2)]);
var state_20452__$1 = state_20452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20452__$1,inst_20450);
} else {
if((state_val_20453 === (4))){
var inst_20433 = (state_20452[(7)]);
var inst_20433__$1 = (state_20452[(2)]);
var inst_20434 = (inst_20433__$1 == null);
var state_20452__$1 = (function (){var statearr_20455 = state_20452;
(statearr_20455[(7)] = inst_20433__$1);

return statearr_20455;
})();
if(cljs.core.truth_(inst_20434)){
var statearr_20456_20569 = state_20452__$1;
(statearr_20456_20569[(1)] = (5));

} else {
var statearr_20457_20570 = state_20452__$1;
(statearr_20457_20570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20453 === (5))){
var inst_20436 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20452__$1 = state_20452;
var statearr_20458_20571 = state_20452__$1;
(statearr_20458_20571[(2)] = inst_20436);

(statearr_20458_20571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20453 === (6))){
var inst_20433 = (state_20452[(7)]);
var inst_20438 = (state_20452[(8)]);
var inst_20438__$1 = cljs.core.async.chan.call(null,(1));
var inst_20439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20440 = [inst_20433,inst_20438__$1];
var inst_20441 = (new cljs.core.PersistentVector(null,2,(5),inst_20439,inst_20440,null));
var state_20452__$1 = (function (){var statearr_20459 = state_20452;
(statearr_20459[(8)] = inst_20438__$1);

return statearr_20459;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20452__$1,(8),jobs,inst_20441);
} else {
if((state_val_20453 === (7))){
var inst_20448 = (state_20452[(2)]);
var state_20452__$1 = state_20452;
var statearr_20460_20572 = state_20452__$1;
(statearr_20460_20572[(2)] = inst_20448);

(statearr_20460_20572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20453 === (8))){
var inst_20438 = (state_20452[(8)]);
var inst_20443 = (state_20452[(2)]);
var state_20452__$1 = (function (){var statearr_20461 = state_20452;
(statearr_20461[(9)] = inst_20443);

return statearr_20461;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20452__$1,(9),results,inst_20438);
} else {
if((state_val_20453 === (9))){
var inst_20445 = (state_20452[(2)]);
var state_20452__$1 = (function (){var statearr_20462 = state_20452;
(statearr_20462[(10)] = inst_20445);

return statearr_20462;
})();
var statearr_20463_20573 = state_20452__$1;
(statearr_20463_20573[(2)] = null);

(statearr_20463_20573[(1)] = (2));


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
});})(c__19991__auto___20567,jobs,results,process,async))
;
return ((function (switch__19879__auto__,c__19991__auto___20567,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0 = (function (){
var statearr_20467 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__);

(statearr_20467[(1)] = (1));

return statearr_20467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1 = (function (state_20452){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20468){if((e20468 instanceof Object)){
var ex__19883__auto__ = e20468;
var statearr_20469_20574 = state_20452;
(statearr_20469_20574[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20575 = state_20452;
state_20452 = G__20575;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = function(state_20452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1.call(this,state_20452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___20567,jobs,results,process,async))
})();
var state__19993__auto__ = (function (){var statearr_20470 = f__19992__auto__.call(null);
(statearr_20470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___20567);

return statearr_20470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___20567,jobs,results,process,async))
);


var c__19991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto__,jobs,results,process,async){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto__,jobs,results,process,async){
return (function (state_20508){
var state_val_20509 = (state_20508[(1)]);
if((state_val_20509 === (7))){
var inst_20504 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
var statearr_20510_20576 = state_20508__$1;
(statearr_20510_20576[(2)] = inst_20504);

(statearr_20510_20576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (20))){
var state_20508__$1 = state_20508;
var statearr_20511_20577 = state_20508__$1;
(statearr_20511_20577[(2)] = null);

(statearr_20511_20577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (1))){
var state_20508__$1 = state_20508;
var statearr_20512_20578 = state_20508__$1;
(statearr_20512_20578[(2)] = null);

(statearr_20512_20578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (4))){
var inst_20473 = (state_20508[(7)]);
var inst_20473__$1 = (state_20508[(2)]);
var inst_20474 = (inst_20473__$1 == null);
var state_20508__$1 = (function (){var statearr_20513 = state_20508;
(statearr_20513[(7)] = inst_20473__$1);

return statearr_20513;
})();
if(cljs.core.truth_(inst_20474)){
var statearr_20514_20579 = state_20508__$1;
(statearr_20514_20579[(1)] = (5));

} else {
var statearr_20515_20580 = state_20508__$1;
(statearr_20515_20580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (15))){
var inst_20486 = (state_20508[(8)]);
var state_20508__$1 = state_20508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20508__$1,(18),to,inst_20486);
} else {
if((state_val_20509 === (21))){
var inst_20499 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
var statearr_20516_20581 = state_20508__$1;
(statearr_20516_20581[(2)] = inst_20499);

(statearr_20516_20581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (13))){
var inst_20501 = (state_20508[(2)]);
var state_20508__$1 = (function (){var statearr_20517 = state_20508;
(statearr_20517[(9)] = inst_20501);

return statearr_20517;
})();
var statearr_20518_20582 = state_20508__$1;
(statearr_20518_20582[(2)] = null);

(statearr_20518_20582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (6))){
var inst_20473 = (state_20508[(7)]);
var state_20508__$1 = state_20508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20508__$1,(11),inst_20473);
} else {
if((state_val_20509 === (17))){
var inst_20494 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
if(cljs.core.truth_(inst_20494)){
var statearr_20519_20583 = state_20508__$1;
(statearr_20519_20583[(1)] = (19));

} else {
var statearr_20520_20584 = state_20508__$1;
(statearr_20520_20584[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (3))){
var inst_20506 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20508__$1,inst_20506);
} else {
if((state_val_20509 === (12))){
var inst_20483 = (state_20508[(10)]);
var state_20508__$1 = state_20508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20508__$1,(14),inst_20483);
} else {
if((state_val_20509 === (2))){
var state_20508__$1 = state_20508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20508__$1,(4),results);
} else {
if((state_val_20509 === (19))){
var state_20508__$1 = state_20508;
var statearr_20521_20585 = state_20508__$1;
(statearr_20521_20585[(2)] = null);

(statearr_20521_20585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (11))){
var inst_20483 = (state_20508[(2)]);
var state_20508__$1 = (function (){var statearr_20522 = state_20508;
(statearr_20522[(10)] = inst_20483);

return statearr_20522;
})();
var statearr_20523_20586 = state_20508__$1;
(statearr_20523_20586[(2)] = null);

(statearr_20523_20586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (9))){
var state_20508__$1 = state_20508;
var statearr_20524_20587 = state_20508__$1;
(statearr_20524_20587[(2)] = null);

(statearr_20524_20587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (5))){
var state_20508__$1 = state_20508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20525_20588 = state_20508__$1;
(statearr_20525_20588[(1)] = (8));

} else {
var statearr_20526_20589 = state_20508__$1;
(statearr_20526_20589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (14))){
var inst_20488 = (state_20508[(11)]);
var inst_20486 = (state_20508[(8)]);
var inst_20486__$1 = (state_20508[(2)]);
var inst_20487 = (inst_20486__$1 == null);
var inst_20488__$1 = cljs.core.not.call(null,inst_20487);
var state_20508__$1 = (function (){var statearr_20527 = state_20508;
(statearr_20527[(11)] = inst_20488__$1);

(statearr_20527[(8)] = inst_20486__$1);

return statearr_20527;
})();
if(inst_20488__$1){
var statearr_20528_20590 = state_20508__$1;
(statearr_20528_20590[(1)] = (15));

} else {
var statearr_20529_20591 = state_20508__$1;
(statearr_20529_20591[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (16))){
var inst_20488 = (state_20508[(11)]);
var state_20508__$1 = state_20508;
var statearr_20530_20592 = state_20508__$1;
(statearr_20530_20592[(2)] = inst_20488);

(statearr_20530_20592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (10))){
var inst_20480 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
var statearr_20531_20593 = state_20508__$1;
(statearr_20531_20593[(2)] = inst_20480);

(statearr_20531_20593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (18))){
var inst_20491 = (state_20508[(2)]);
var state_20508__$1 = state_20508;
var statearr_20532_20594 = state_20508__$1;
(statearr_20532_20594[(2)] = inst_20491);

(statearr_20532_20594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20509 === (8))){
var inst_20477 = cljs.core.async.close_BANG_.call(null,to);
var state_20508__$1 = state_20508;
var statearr_20533_20595 = state_20508__$1;
(statearr_20533_20595[(2)] = inst_20477);

(statearr_20533_20595[(1)] = (10));


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
});})(c__19991__auto__,jobs,results,process,async))
;
return ((function (switch__19879__auto__,c__19991__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0 = (function (){
var statearr_20537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__);

(statearr_20537[(1)] = (1));

return statearr_20537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1 = (function (state_20508){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20538){if((e20538 instanceof Object)){
var ex__19883__auto__ = e20538;
var statearr_20539_20596 = state_20508;
(statearr_20539_20596[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20597 = state_20508;
state_20508 = G__20597;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__ = function(state_20508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1.call(this,state_20508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19880__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto__,jobs,results,process,async))
})();
var state__19993__auto__ = (function (){var statearr_20540 = f__19992__auto__.call(null);
(statearr_20540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto__);

return statearr_20540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto__,jobs,results,process,async))
);

return c__19991__auto__;
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
var args20598 = [];
var len__18200__auto___20601 = arguments.length;
var i__18201__auto___20602 = (0);
while(true){
if((i__18201__auto___20602 < len__18200__auto___20601)){
args20598.push((arguments[i__18201__auto___20602]));

var G__20603 = (i__18201__auto___20602 + (1));
i__18201__auto___20602 = G__20603;
continue;
} else {
}
break;
}

var G__20600 = args20598.length;
switch (G__20600) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20598.length)].join('')));

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
var args20605 = [];
var len__18200__auto___20608 = arguments.length;
var i__18201__auto___20609 = (0);
while(true){
if((i__18201__auto___20609 < len__18200__auto___20608)){
args20605.push((arguments[i__18201__auto___20609]));

var G__20610 = (i__18201__auto___20609 + (1));
i__18201__auto___20609 = G__20610;
continue;
} else {
}
break;
}

var G__20607 = args20605.length;
switch (G__20607) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20605.length)].join('')));

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
var args20612 = [];
var len__18200__auto___20665 = arguments.length;
var i__18201__auto___20666 = (0);
while(true){
if((i__18201__auto___20666 < len__18200__auto___20665)){
args20612.push((arguments[i__18201__auto___20666]));

var G__20667 = (i__18201__auto___20666 + (1));
i__18201__auto___20666 = G__20667;
continue;
} else {
}
break;
}

var G__20614 = args20612.length;
switch (G__20614) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20612.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19991__auto___20669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___20669,tc,fc){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___20669,tc,fc){
return (function (state_20640){
var state_val_20641 = (state_20640[(1)]);
if((state_val_20641 === (7))){
var inst_20636 = (state_20640[(2)]);
var state_20640__$1 = state_20640;
var statearr_20642_20670 = state_20640__$1;
(statearr_20642_20670[(2)] = inst_20636);

(statearr_20642_20670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (1))){
var state_20640__$1 = state_20640;
var statearr_20643_20671 = state_20640__$1;
(statearr_20643_20671[(2)] = null);

(statearr_20643_20671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (4))){
var inst_20617 = (state_20640[(7)]);
var inst_20617__$1 = (state_20640[(2)]);
var inst_20618 = (inst_20617__$1 == null);
var state_20640__$1 = (function (){var statearr_20644 = state_20640;
(statearr_20644[(7)] = inst_20617__$1);

return statearr_20644;
})();
if(cljs.core.truth_(inst_20618)){
var statearr_20645_20672 = state_20640__$1;
(statearr_20645_20672[(1)] = (5));

} else {
var statearr_20646_20673 = state_20640__$1;
(statearr_20646_20673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (13))){
var state_20640__$1 = state_20640;
var statearr_20647_20674 = state_20640__$1;
(statearr_20647_20674[(2)] = null);

(statearr_20647_20674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (6))){
var inst_20617 = (state_20640[(7)]);
var inst_20623 = p.call(null,inst_20617);
var state_20640__$1 = state_20640;
if(cljs.core.truth_(inst_20623)){
var statearr_20648_20675 = state_20640__$1;
(statearr_20648_20675[(1)] = (9));

} else {
var statearr_20649_20676 = state_20640__$1;
(statearr_20649_20676[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (3))){
var inst_20638 = (state_20640[(2)]);
var state_20640__$1 = state_20640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20640__$1,inst_20638);
} else {
if((state_val_20641 === (12))){
var state_20640__$1 = state_20640;
var statearr_20650_20677 = state_20640__$1;
(statearr_20650_20677[(2)] = null);

(statearr_20650_20677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (2))){
var state_20640__$1 = state_20640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20640__$1,(4),ch);
} else {
if((state_val_20641 === (11))){
var inst_20617 = (state_20640[(7)]);
var inst_20627 = (state_20640[(2)]);
var state_20640__$1 = state_20640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20640__$1,(8),inst_20627,inst_20617);
} else {
if((state_val_20641 === (9))){
var state_20640__$1 = state_20640;
var statearr_20651_20678 = state_20640__$1;
(statearr_20651_20678[(2)] = tc);

(statearr_20651_20678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (5))){
var inst_20620 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20621 = cljs.core.async.close_BANG_.call(null,fc);
var state_20640__$1 = (function (){var statearr_20652 = state_20640;
(statearr_20652[(8)] = inst_20620);

return statearr_20652;
})();
var statearr_20653_20679 = state_20640__$1;
(statearr_20653_20679[(2)] = inst_20621);

(statearr_20653_20679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (14))){
var inst_20634 = (state_20640[(2)]);
var state_20640__$1 = state_20640;
var statearr_20654_20680 = state_20640__$1;
(statearr_20654_20680[(2)] = inst_20634);

(statearr_20654_20680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (10))){
var state_20640__$1 = state_20640;
var statearr_20655_20681 = state_20640__$1;
(statearr_20655_20681[(2)] = fc);

(statearr_20655_20681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20641 === (8))){
var inst_20629 = (state_20640[(2)]);
var state_20640__$1 = state_20640;
if(cljs.core.truth_(inst_20629)){
var statearr_20656_20682 = state_20640__$1;
(statearr_20656_20682[(1)] = (12));

} else {
var statearr_20657_20683 = state_20640__$1;
(statearr_20657_20683[(1)] = (13));

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
});})(c__19991__auto___20669,tc,fc))
;
return ((function (switch__19879__auto__,c__19991__auto___20669,tc,fc){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_20661 = [null,null,null,null,null,null,null,null,null];
(statearr_20661[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_20661[(1)] = (1));

return statearr_20661;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_20640){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20662){if((e20662 instanceof Object)){
var ex__19883__auto__ = e20662;
var statearr_20663_20684 = state_20640;
(statearr_20663_20684[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20685 = state_20640;
state_20640 = G__20685;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_20640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_20640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___20669,tc,fc))
})();
var state__19993__auto__ = (function (){var statearr_20664 = f__19992__auto__.call(null);
(statearr_20664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___20669);

return statearr_20664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___20669,tc,fc))
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
var c__19991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto__){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto__){
return (function (state_20749){
var state_val_20750 = (state_20749[(1)]);
if((state_val_20750 === (7))){
var inst_20745 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
var statearr_20751_20772 = state_20749__$1;
(statearr_20751_20772[(2)] = inst_20745);

(statearr_20751_20772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (1))){
var inst_20729 = init;
var state_20749__$1 = (function (){var statearr_20752 = state_20749;
(statearr_20752[(7)] = inst_20729);

return statearr_20752;
})();
var statearr_20753_20773 = state_20749__$1;
(statearr_20753_20773[(2)] = null);

(statearr_20753_20773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (4))){
var inst_20732 = (state_20749[(8)]);
var inst_20732__$1 = (state_20749[(2)]);
var inst_20733 = (inst_20732__$1 == null);
var state_20749__$1 = (function (){var statearr_20754 = state_20749;
(statearr_20754[(8)] = inst_20732__$1);

return statearr_20754;
})();
if(cljs.core.truth_(inst_20733)){
var statearr_20755_20774 = state_20749__$1;
(statearr_20755_20774[(1)] = (5));

} else {
var statearr_20756_20775 = state_20749__$1;
(statearr_20756_20775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (6))){
var inst_20732 = (state_20749[(8)]);
var inst_20736 = (state_20749[(9)]);
var inst_20729 = (state_20749[(7)]);
var inst_20736__$1 = f.call(null,inst_20729,inst_20732);
var inst_20737 = cljs.core.reduced_QMARK_.call(null,inst_20736__$1);
var state_20749__$1 = (function (){var statearr_20757 = state_20749;
(statearr_20757[(9)] = inst_20736__$1);

return statearr_20757;
})();
if(inst_20737){
var statearr_20758_20776 = state_20749__$1;
(statearr_20758_20776[(1)] = (8));

} else {
var statearr_20759_20777 = state_20749__$1;
(statearr_20759_20777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (3))){
var inst_20747 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20749__$1,inst_20747);
} else {
if((state_val_20750 === (2))){
var state_20749__$1 = state_20749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20749__$1,(4),ch);
} else {
if((state_val_20750 === (9))){
var inst_20736 = (state_20749[(9)]);
var inst_20729 = inst_20736;
var state_20749__$1 = (function (){var statearr_20760 = state_20749;
(statearr_20760[(7)] = inst_20729);

return statearr_20760;
})();
var statearr_20761_20778 = state_20749__$1;
(statearr_20761_20778[(2)] = null);

(statearr_20761_20778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (5))){
var inst_20729 = (state_20749[(7)]);
var state_20749__$1 = state_20749;
var statearr_20762_20779 = state_20749__$1;
(statearr_20762_20779[(2)] = inst_20729);

(statearr_20762_20779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (10))){
var inst_20743 = (state_20749[(2)]);
var state_20749__$1 = state_20749;
var statearr_20763_20780 = state_20749__$1;
(statearr_20763_20780[(2)] = inst_20743);

(statearr_20763_20780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20750 === (8))){
var inst_20736 = (state_20749[(9)]);
var inst_20739 = cljs.core.deref.call(null,inst_20736);
var state_20749__$1 = state_20749;
var statearr_20764_20781 = state_20749__$1;
(statearr_20764_20781[(2)] = inst_20739);

(statearr_20764_20781[(1)] = (10));


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
});})(c__19991__auto__))
;
return ((function (switch__19879__auto__,c__19991__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19880__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19880__auto____0 = (function (){
var statearr_20768 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20768[(0)] = cljs$core$async$reduce_$_state_machine__19880__auto__);

(statearr_20768[(1)] = (1));

return statearr_20768;
});
var cljs$core$async$reduce_$_state_machine__19880__auto____1 = (function (state_20749){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20769){if((e20769 instanceof Object)){
var ex__19883__auto__ = e20769;
var statearr_20770_20782 = state_20749;
(statearr_20770_20782[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20783 = state_20749;
state_20749 = G__20783;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19880__auto__ = function(state_20749){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19880__auto____1.call(this,state_20749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19880__auto____0;
cljs$core$async$reduce_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19880__auto____1;
return cljs$core$async$reduce_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto__))
})();
var state__19993__auto__ = (function (){var statearr_20771 = f__19992__auto__.call(null);
(statearr_20771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto__);

return statearr_20771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto__))
);

return c__19991__auto__;
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
var args20784 = [];
var len__18200__auto___20836 = arguments.length;
var i__18201__auto___20837 = (0);
while(true){
if((i__18201__auto___20837 < len__18200__auto___20836)){
args20784.push((arguments[i__18201__auto___20837]));

var G__20838 = (i__18201__auto___20837 + (1));
i__18201__auto___20837 = G__20838;
continue;
} else {
}
break;
}

var G__20786 = args20784.length;
switch (G__20786) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20784.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto__){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto__){
return (function (state_20811){
var state_val_20812 = (state_20811[(1)]);
if((state_val_20812 === (7))){
var inst_20793 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20813_20840 = state_20811__$1;
(statearr_20813_20840[(2)] = inst_20793);

(statearr_20813_20840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (1))){
var inst_20787 = cljs.core.seq.call(null,coll);
var inst_20788 = inst_20787;
var state_20811__$1 = (function (){var statearr_20814 = state_20811;
(statearr_20814[(7)] = inst_20788);

return statearr_20814;
})();
var statearr_20815_20841 = state_20811__$1;
(statearr_20815_20841[(2)] = null);

(statearr_20815_20841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (4))){
var inst_20788 = (state_20811[(7)]);
var inst_20791 = cljs.core.first.call(null,inst_20788);
var state_20811__$1 = state_20811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20811__$1,(7),ch,inst_20791);
} else {
if((state_val_20812 === (13))){
var inst_20805 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20816_20842 = state_20811__$1;
(statearr_20816_20842[(2)] = inst_20805);

(statearr_20816_20842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (6))){
var inst_20796 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20796)){
var statearr_20817_20843 = state_20811__$1;
(statearr_20817_20843[(1)] = (8));

} else {
var statearr_20818_20844 = state_20811__$1;
(statearr_20818_20844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (3))){
var inst_20809 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20811__$1,inst_20809);
} else {
if((state_val_20812 === (12))){
var state_20811__$1 = state_20811;
var statearr_20819_20845 = state_20811__$1;
(statearr_20819_20845[(2)] = null);

(statearr_20819_20845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (2))){
var inst_20788 = (state_20811[(7)]);
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20788)){
var statearr_20820_20846 = state_20811__$1;
(statearr_20820_20846[(1)] = (4));

} else {
var statearr_20821_20847 = state_20811__$1;
(statearr_20821_20847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (11))){
var inst_20802 = cljs.core.async.close_BANG_.call(null,ch);
var state_20811__$1 = state_20811;
var statearr_20822_20848 = state_20811__$1;
(statearr_20822_20848[(2)] = inst_20802);

(statearr_20822_20848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (9))){
var state_20811__$1 = state_20811;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20823_20849 = state_20811__$1;
(statearr_20823_20849[(1)] = (11));

} else {
var statearr_20824_20850 = state_20811__$1;
(statearr_20824_20850[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (5))){
var inst_20788 = (state_20811[(7)]);
var state_20811__$1 = state_20811;
var statearr_20825_20851 = state_20811__$1;
(statearr_20825_20851[(2)] = inst_20788);

(statearr_20825_20851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (10))){
var inst_20807 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20826_20852 = state_20811__$1;
(statearr_20826_20852[(2)] = inst_20807);

(statearr_20826_20852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (8))){
var inst_20788 = (state_20811[(7)]);
var inst_20798 = cljs.core.next.call(null,inst_20788);
var inst_20788__$1 = inst_20798;
var state_20811__$1 = (function (){var statearr_20827 = state_20811;
(statearr_20827[(7)] = inst_20788__$1);

return statearr_20827;
})();
var statearr_20828_20853 = state_20811__$1;
(statearr_20828_20853[(2)] = null);

(statearr_20828_20853[(1)] = (2));


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
});})(c__19991__auto__))
;
return ((function (switch__19879__auto__,c__19991__auto__){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_20832 = [null,null,null,null,null,null,null,null];
(statearr_20832[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_20832[(1)] = (1));

return statearr_20832;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_20811){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_20811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e20833){if((e20833 instanceof Object)){
var ex__19883__auto__ = e20833;
var statearr_20834_20854 = state_20811;
(statearr_20834_20854[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20855 = state_20811;
state_20811 = G__20855;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_20811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_20811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto__))
})();
var state__19993__auto__ = (function (){var statearr_20835 = f__19992__auto__.call(null);
(statearr_20835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto__);

return statearr_20835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto__))
);

return c__19991__auto__;
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
var x__17797__auto__ = (((_ == null))?null:_);
var m__17798__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,_);
} else {
var m__17798__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,_);
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
var x__17797__auto__ = (((m == null))?null:m);
var m__17798__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17798__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17797__auto__ = (((m == null))?null:m);
var m__17798__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,m,ch);
} else {
var m__17798__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,m,ch);
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
var x__17797__auto__ = (((m == null))?null:m);
var m__17798__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,m);
} else {
var m__17798__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async21077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21077 = (function (mult,ch,cs,meta21078){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21078 = meta21078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21079,meta21078__$1){
var self__ = this;
var _21079__$1 = this;
return (new cljs.core.async.t_cljs$core$async21077(self__.mult,self__.ch,self__.cs,meta21078__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21079){
var self__ = this;
var _21079__$1 = this;
return self__.meta21078;
});})(cs))
;

cljs.core.async.t_cljs$core$async21077.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21077.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21077.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21077.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21077.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21077.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21078","meta21078",1692086426,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21077";

cljs.core.async.t_cljs$core$async21077.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async21077");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21077 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21077(mult__$1,ch__$1,cs__$1,meta21078){
return (new cljs.core.async.t_cljs$core$async21077(mult__$1,ch__$1,cs__$1,meta21078));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21077(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19991__auto___21298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___21298,cs,m,dchan,dctr,done){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___21298,cs,m,dchan,dctr,done){
return (function (state_21210){
var state_val_21211 = (state_21210[(1)]);
if((state_val_21211 === (7))){
var inst_21206 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21212_21299 = state_21210__$1;
(statearr_21212_21299[(2)] = inst_21206);

(statearr_21212_21299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (20))){
var inst_21111 = (state_21210[(7)]);
var inst_21121 = cljs.core.first.call(null,inst_21111);
var inst_21122 = cljs.core.nth.call(null,inst_21121,(0),null);
var inst_21123 = cljs.core.nth.call(null,inst_21121,(1),null);
var state_21210__$1 = (function (){var statearr_21213 = state_21210;
(statearr_21213[(8)] = inst_21122);

return statearr_21213;
})();
if(cljs.core.truth_(inst_21123)){
var statearr_21214_21300 = state_21210__$1;
(statearr_21214_21300[(1)] = (22));

} else {
var statearr_21215_21301 = state_21210__$1;
(statearr_21215_21301[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (27))){
var inst_21082 = (state_21210[(9)]);
var inst_21151 = (state_21210[(10)]);
var inst_21153 = (state_21210[(11)]);
var inst_21158 = (state_21210[(12)]);
var inst_21158__$1 = cljs.core._nth.call(null,inst_21151,inst_21153);
var inst_21159 = cljs.core.async.put_BANG_.call(null,inst_21158__$1,inst_21082,done);
var state_21210__$1 = (function (){var statearr_21216 = state_21210;
(statearr_21216[(12)] = inst_21158__$1);

return statearr_21216;
})();
if(cljs.core.truth_(inst_21159)){
var statearr_21217_21302 = state_21210__$1;
(statearr_21217_21302[(1)] = (30));

} else {
var statearr_21218_21303 = state_21210__$1;
(statearr_21218_21303[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (1))){
var state_21210__$1 = state_21210;
var statearr_21219_21304 = state_21210__$1;
(statearr_21219_21304[(2)] = null);

(statearr_21219_21304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (24))){
var inst_21111 = (state_21210[(7)]);
var inst_21128 = (state_21210[(2)]);
var inst_21129 = cljs.core.next.call(null,inst_21111);
var inst_21091 = inst_21129;
var inst_21092 = null;
var inst_21093 = (0);
var inst_21094 = (0);
var state_21210__$1 = (function (){var statearr_21220 = state_21210;
(statearr_21220[(13)] = inst_21094);

(statearr_21220[(14)] = inst_21091);

(statearr_21220[(15)] = inst_21092);

(statearr_21220[(16)] = inst_21093);

(statearr_21220[(17)] = inst_21128);

return statearr_21220;
})();
var statearr_21221_21305 = state_21210__$1;
(statearr_21221_21305[(2)] = null);

(statearr_21221_21305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (39))){
var state_21210__$1 = state_21210;
var statearr_21225_21306 = state_21210__$1;
(statearr_21225_21306[(2)] = null);

(statearr_21225_21306[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (4))){
var inst_21082 = (state_21210[(9)]);
var inst_21082__$1 = (state_21210[(2)]);
var inst_21083 = (inst_21082__$1 == null);
var state_21210__$1 = (function (){var statearr_21226 = state_21210;
(statearr_21226[(9)] = inst_21082__$1);

return statearr_21226;
})();
if(cljs.core.truth_(inst_21083)){
var statearr_21227_21307 = state_21210__$1;
(statearr_21227_21307[(1)] = (5));

} else {
var statearr_21228_21308 = state_21210__$1;
(statearr_21228_21308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (15))){
var inst_21094 = (state_21210[(13)]);
var inst_21091 = (state_21210[(14)]);
var inst_21092 = (state_21210[(15)]);
var inst_21093 = (state_21210[(16)]);
var inst_21107 = (state_21210[(2)]);
var inst_21108 = (inst_21094 + (1));
var tmp21222 = inst_21091;
var tmp21223 = inst_21092;
var tmp21224 = inst_21093;
var inst_21091__$1 = tmp21222;
var inst_21092__$1 = tmp21223;
var inst_21093__$1 = tmp21224;
var inst_21094__$1 = inst_21108;
var state_21210__$1 = (function (){var statearr_21229 = state_21210;
(statearr_21229[(13)] = inst_21094__$1);

(statearr_21229[(14)] = inst_21091__$1);

(statearr_21229[(18)] = inst_21107);

(statearr_21229[(15)] = inst_21092__$1);

(statearr_21229[(16)] = inst_21093__$1);

return statearr_21229;
})();
var statearr_21230_21309 = state_21210__$1;
(statearr_21230_21309[(2)] = null);

(statearr_21230_21309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (21))){
var inst_21132 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21234_21310 = state_21210__$1;
(statearr_21234_21310[(2)] = inst_21132);

(statearr_21234_21310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (31))){
var inst_21158 = (state_21210[(12)]);
var inst_21162 = done.call(null,null);
var inst_21163 = cljs.core.async.untap_STAR_.call(null,m,inst_21158);
var state_21210__$1 = (function (){var statearr_21235 = state_21210;
(statearr_21235[(19)] = inst_21162);

return statearr_21235;
})();
var statearr_21236_21311 = state_21210__$1;
(statearr_21236_21311[(2)] = inst_21163);

(statearr_21236_21311[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (32))){
var inst_21150 = (state_21210[(20)]);
var inst_21151 = (state_21210[(10)]);
var inst_21153 = (state_21210[(11)]);
var inst_21152 = (state_21210[(21)]);
var inst_21165 = (state_21210[(2)]);
var inst_21166 = (inst_21153 + (1));
var tmp21231 = inst_21150;
var tmp21232 = inst_21151;
var tmp21233 = inst_21152;
var inst_21150__$1 = tmp21231;
var inst_21151__$1 = tmp21232;
var inst_21152__$1 = tmp21233;
var inst_21153__$1 = inst_21166;
var state_21210__$1 = (function (){var statearr_21237 = state_21210;
(statearr_21237[(20)] = inst_21150__$1);

(statearr_21237[(10)] = inst_21151__$1);

(statearr_21237[(22)] = inst_21165);

(statearr_21237[(11)] = inst_21153__$1);

(statearr_21237[(21)] = inst_21152__$1);

return statearr_21237;
})();
var statearr_21238_21312 = state_21210__$1;
(statearr_21238_21312[(2)] = null);

(statearr_21238_21312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (40))){
var inst_21178 = (state_21210[(23)]);
var inst_21182 = done.call(null,null);
var inst_21183 = cljs.core.async.untap_STAR_.call(null,m,inst_21178);
var state_21210__$1 = (function (){var statearr_21239 = state_21210;
(statearr_21239[(24)] = inst_21182);

return statearr_21239;
})();
var statearr_21240_21313 = state_21210__$1;
(statearr_21240_21313[(2)] = inst_21183);

(statearr_21240_21313[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (33))){
var inst_21169 = (state_21210[(25)]);
var inst_21171 = cljs.core.chunked_seq_QMARK_.call(null,inst_21169);
var state_21210__$1 = state_21210;
if(inst_21171){
var statearr_21241_21314 = state_21210__$1;
(statearr_21241_21314[(1)] = (36));

} else {
var statearr_21242_21315 = state_21210__$1;
(statearr_21242_21315[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (13))){
var inst_21101 = (state_21210[(26)]);
var inst_21104 = cljs.core.async.close_BANG_.call(null,inst_21101);
var state_21210__$1 = state_21210;
var statearr_21243_21316 = state_21210__$1;
(statearr_21243_21316[(2)] = inst_21104);

(statearr_21243_21316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (22))){
var inst_21122 = (state_21210[(8)]);
var inst_21125 = cljs.core.async.close_BANG_.call(null,inst_21122);
var state_21210__$1 = state_21210;
var statearr_21244_21317 = state_21210__$1;
(statearr_21244_21317[(2)] = inst_21125);

(statearr_21244_21317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (36))){
var inst_21169 = (state_21210[(25)]);
var inst_21173 = cljs.core.chunk_first.call(null,inst_21169);
var inst_21174 = cljs.core.chunk_rest.call(null,inst_21169);
var inst_21175 = cljs.core.count.call(null,inst_21173);
var inst_21150 = inst_21174;
var inst_21151 = inst_21173;
var inst_21152 = inst_21175;
var inst_21153 = (0);
var state_21210__$1 = (function (){var statearr_21245 = state_21210;
(statearr_21245[(20)] = inst_21150);

(statearr_21245[(10)] = inst_21151);

(statearr_21245[(11)] = inst_21153);

(statearr_21245[(21)] = inst_21152);

return statearr_21245;
})();
var statearr_21246_21318 = state_21210__$1;
(statearr_21246_21318[(2)] = null);

(statearr_21246_21318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (41))){
var inst_21169 = (state_21210[(25)]);
var inst_21185 = (state_21210[(2)]);
var inst_21186 = cljs.core.next.call(null,inst_21169);
var inst_21150 = inst_21186;
var inst_21151 = null;
var inst_21152 = (0);
var inst_21153 = (0);
var state_21210__$1 = (function (){var statearr_21247 = state_21210;
(statearr_21247[(27)] = inst_21185);

(statearr_21247[(20)] = inst_21150);

(statearr_21247[(10)] = inst_21151);

(statearr_21247[(11)] = inst_21153);

(statearr_21247[(21)] = inst_21152);

return statearr_21247;
})();
var statearr_21248_21319 = state_21210__$1;
(statearr_21248_21319[(2)] = null);

(statearr_21248_21319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (43))){
var state_21210__$1 = state_21210;
var statearr_21249_21320 = state_21210__$1;
(statearr_21249_21320[(2)] = null);

(statearr_21249_21320[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (29))){
var inst_21194 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21250_21321 = state_21210__$1;
(statearr_21250_21321[(2)] = inst_21194);

(statearr_21250_21321[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (44))){
var inst_21203 = (state_21210[(2)]);
var state_21210__$1 = (function (){var statearr_21251 = state_21210;
(statearr_21251[(28)] = inst_21203);

return statearr_21251;
})();
var statearr_21252_21322 = state_21210__$1;
(statearr_21252_21322[(2)] = null);

(statearr_21252_21322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (6))){
var inst_21142 = (state_21210[(29)]);
var inst_21141 = cljs.core.deref.call(null,cs);
var inst_21142__$1 = cljs.core.keys.call(null,inst_21141);
var inst_21143 = cljs.core.count.call(null,inst_21142__$1);
var inst_21144 = cljs.core.reset_BANG_.call(null,dctr,inst_21143);
var inst_21149 = cljs.core.seq.call(null,inst_21142__$1);
var inst_21150 = inst_21149;
var inst_21151 = null;
var inst_21152 = (0);
var inst_21153 = (0);
var state_21210__$1 = (function (){var statearr_21253 = state_21210;
(statearr_21253[(29)] = inst_21142__$1);

(statearr_21253[(20)] = inst_21150);

(statearr_21253[(10)] = inst_21151);

(statearr_21253[(11)] = inst_21153);

(statearr_21253[(30)] = inst_21144);

(statearr_21253[(21)] = inst_21152);

return statearr_21253;
})();
var statearr_21254_21323 = state_21210__$1;
(statearr_21254_21323[(2)] = null);

(statearr_21254_21323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (28))){
var inst_21150 = (state_21210[(20)]);
var inst_21169 = (state_21210[(25)]);
var inst_21169__$1 = cljs.core.seq.call(null,inst_21150);
var state_21210__$1 = (function (){var statearr_21255 = state_21210;
(statearr_21255[(25)] = inst_21169__$1);

return statearr_21255;
})();
if(inst_21169__$1){
var statearr_21256_21324 = state_21210__$1;
(statearr_21256_21324[(1)] = (33));

} else {
var statearr_21257_21325 = state_21210__$1;
(statearr_21257_21325[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (25))){
var inst_21153 = (state_21210[(11)]);
var inst_21152 = (state_21210[(21)]);
var inst_21155 = (inst_21153 < inst_21152);
var inst_21156 = inst_21155;
var state_21210__$1 = state_21210;
if(cljs.core.truth_(inst_21156)){
var statearr_21258_21326 = state_21210__$1;
(statearr_21258_21326[(1)] = (27));

} else {
var statearr_21259_21327 = state_21210__$1;
(statearr_21259_21327[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (34))){
var state_21210__$1 = state_21210;
var statearr_21260_21328 = state_21210__$1;
(statearr_21260_21328[(2)] = null);

(statearr_21260_21328[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (17))){
var state_21210__$1 = state_21210;
var statearr_21261_21329 = state_21210__$1;
(statearr_21261_21329[(2)] = null);

(statearr_21261_21329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (3))){
var inst_21208 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21210__$1,inst_21208);
} else {
if((state_val_21211 === (12))){
var inst_21137 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21262_21330 = state_21210__$1;
(statearr_21262_21330[(2)] = inst_21137);

(statearr_21262_21330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (2))){
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21210__$1,(4),ch);
} else {
if((state_val_21211 === (23))){
var state_21210__$1 = state_21210;
var statearr_21263_21331 = state_21210__$1;
(statearr_21263_21331[(2)] = null);

(statearr_21263_21331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (35))){
var inst_21192 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21264_21332 = state_21210__$1;
(statearr_21264_21332[(2)] = inst_21192);

(statearr_21264_21332[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (19))){
var inst_21111 = (state_21210[(7)]);
var inst_21115 = cljs.core.chunk_first.call(null,inst_21111);
var inst_21116 = cljs.core.chunk_rest.call(null,inst_21111);
var inst_21117 = cljs.core.count.call(null,inst_21115);
var inst_21091 = inst_21116;
var inst_21092 = inst_21115;
var inst_21093 = inst_21117;
var inst_21094 = (0);
var state_21210__$1 = (function (){var statearr_21265 = state_21210;
(statearr_21265[(13)] = inst_21094);

(statearr_21265[(14)] = inst_21091);

(statearr_21265[(15)] = inst_21092);

(statearr_21265[(16)] = inst_21093);

return statearr_21265;
})();
var statearr_21266_21333 = state_21210__$1;
(statearr_21266_21333[(2)] = null);

(statearr_21266_21333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (11))){
var inst_21111 = (state_21210[(7)]);
var inst_21091 = (state_21210[(14)]);
var inst_21111__$1 = cljs.core.seq.call(null,inst_21091);
var state_21210__$1 = (function (){var statearr_21267 = state_21210;
(statearr_21267[(7)] = inst_21111__$1);

return statearr_21267;
})();
if(inst_21111__$1){
var statearr_21268_21334 = state_21210__$1;
(statearr_21268_21334[(1)] = (16));

} else {
var statearr_21269_21335 = state_21210__$1;
(statearr_21269_21335[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (9))){
var inst_21139 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21270_21336 = state_21210__$1;
(statearr_21270_21336[(2)] = inst_21139);

(statearr_21270_21336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (5))){
var inst_21089 = cljs.core.deref.call(null,cs);
var inst_21090 = cljs.core.seq.call(null,inst_21089);
var inst_21091 = inst_21090;
var inst_21092 = null;
var inst_21093 = (0);
var inst_21094 = (0);
var state_21210__$1 = (function (){var statearr_21271 = state_21210;
(statearr_21271[(13)] = inst_21094);

(statearr_21271[(14)] = inst_21091);

(statearr_21271[(15)] = inst_21092);

(statearr_21271[(16)] = inst_21093);

return statearr_21271;
})();
var statearr_21272_21337 = state_21210__$1;
(statearr_21272_21337[(2)] = null);

(statearr_21272_21337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (14))){
var state_21210__$1 = state_21210;
var statearr_21273_21338 = state_21210__$1;
(statearr_21273_21338[(2)] = null);

(statearr_21273_21338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (45))){
var inst_21200 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21274_21339 = state_21210__$1;
(statearr_21274_21339[(2)] = inst_21200);

(statearr_21274_21339[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (26))){
var inst_21142 = (state_21210[(29)]);
var inst_21196 = (state_21210[(2)]);
var inst_21197 = cljs.core.seq.call(null,inst_21142);
var state_21210__$1 = (function (){var statearr_21275 = state_21210;
(statearr_21275[(31)] = inst_21196);

return statearr_21275;
})();
if(inst_21197){
var statearr_21276_21340 = state_21210__$1;
(statearr_21276_21340[(1)] = (42));

} else {
var statearr_21277_21341 = state_21210__$1;
(statearr_21277_21341[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (16))){
var inst_21111 = (state_21210[(7)]);
var inst_21113 = cljs.core.chunked_seq_QMARK_.call(null,inst_21111);
var state_21210__$1 = state_21210;
if(inst_21113){
var statearr_21278_21342 = state_21210__$1;
(statearr_21278_21342[(1)] = (19));

} else {
var statearr_21279_21343 = state_21210__$1;
(statearr_21279_21343[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (38))){
var inst_21189 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21280_21344 = state_21210__$1;
(statearr_21280_21344[(2)] = inst_21189);

(statearr_21280_21344[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (30))){
var state_21210__$1 = state_21210;
var statearr_21281_21345 = state_21210__$1;
(statearr_21281_21345[(2)] = null);

(statearr_21281_21345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (10))){
var inst_21094 = (state_21210[(13)]);
var inst_21092 = (state_21210[(15)]);
var inst_21100 = cljs.core._nth.call(null,inst_21092,inst_21094);
var inst_21101 = cljs.core.nth.call(null,inst_21100,(0),null);
var inst_21102 = cljs.core.nth.call(null,inst_21100,(1),null);
var state_21210__$1 = (function (){var statearr_21282 = state_21210;
(statearr_21282[(26)] = inst_21101);

return statearr_21282;
})();
if(cljs.core.truth_(inst_21102)){
var statearr_21283_21346 = state_21210__$1;
(statearr_21283_21346[(1)] = (13));

} else {
var statearr_21284_21347 = state_21210__$1;
(statearr_21284_21347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (18))){
var inst_21135 = (state_21210[(2)]);
var state_21210__$1 = state_21210;
var statearr_21285_21348 = state_21210__$1;
(statearr_21285_21348[(2)] = inst_21135);

(statearr_21285_21348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (42))){
var state_21210__$1 = state_21210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21210__$1,(45),dchan);
} else {
if((state_val_21211 === (37))){
var inst_21178 = (state_21210[(23)]);
var inst_21082 = (state_21210[(9)]);
var inst_21169 = (state_21210[(25)]);
var inst_21178__$1 = cljs.core.first.call(null,inst_21169);
var inst_21179 = cljs.core.async.put_BANG_.call(null,inst_21178__$1,inst_21082,done);
var state_21210__$1 = (function (){var statearr_21286 = state_21210;
(statearr_21286[(23)] = inst_21178__$1);

return statearr_21286;
})();
if(cljs.core.truth_(inst_21179)){
var statearr_21287_21349 = state_21210__$1;
(statearr_21287_21349[(1)] = (39));

} else {
var statearr_21288_21350 = state_21210__$1;
(statearr_21288_21350[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21211 === (8))){
var inst_21094 = (state_21210[(13)]);
var inst_21093 = (state_21210[(16)]);
var inst_21096 = (inst_21094 < inst_21093);
var inst_21097 = inst_21096;
var state_21210__$1 = state_21210;
if(cljs.core.truth_(inst_21097)){
var statearr_21289_21351 = state_21210__$1;
(statearr_21289_21351[(1)] = (10));

} else {
var statearr_21290_21352 = state_21210__$1;
(statearr_21290_21352[(1)] = (11));

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
});})(c__19991__auto___21298,cs,m,dchan,dctr,done))
;
return ((function (switch__19879__auto__,c__19991__auto___21298,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19880__auto__ = null;
var cljs$core$async$mult_$_state_machine__19880__auto____0 = (function (){
var statearr_21294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21294[(0)] = cljs$core$async$mult_$_state_machine__19880__auto__);

(statearr_21294[(1)] = (1));

return statearr_21294;
});
var cljs$core$async$mult_$_state_machine__19880__auto____1 = (function (state_21210){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_21210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e21295){if((e21295 instanceof Object)){
var ex__19883__auto__ = e21295;
var statearr_21296_21353 = state_21210;
(statearr_21296_21353[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21354 = state_21210;
state_21210 = G__21354;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19880__auto__ = function(state_21210){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19880__auto____1.call(this,state_21210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19880__auto____0;
cljs$core$async$mult_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19880__auto____1;
return cljs$core$async$mult_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___21298,cs,m,dchan,dctr,done))
})();
var state__19993__auto__ = (function (){var statearr_21297 = f__19992__auto__.call(null);
(statearr_21297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___21298);

return statearr_21297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___21298,cs,m,dchan,dctr,done))
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
var args21355 = [];
var len__18200__auto___21358 = arguments.length;
var i__18201__auto___21359 = (0);
while(true){
if((i__18201__auto___21359 < len__18200__auto___21358)){
args21355.push((arguments[i__18201__auto___21359]));

var G__21360 = (i__18201__auto___21359 + (1));
i__18201__auto___21359 = G__21360;
continue;
} else {
}
break;
}

var G__21357 = args21355.length;
switch (G__21357) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21355.length)].join('')));

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
var x__17797__auto__ = (((m == null))?null:m);
var m__17798__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,m,ch);
} else {
var m__17798__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,m,ch);
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
var x__17797__auto__ = (((m == null))?null:m);
var m__17798__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,m,ch);
} else {
var m__17798__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,m,ch);
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
var x__17797__auto__ = (((m == null))?null:m);
var m__17798__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,m);
} else {
var m__17798__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,m);
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
var x__17797__auto__ = (((m == null))?null:m);
var m__17798__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,m,state_map);
} else {
var m__17798__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,m,state_map);
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
var x__17797__auto__ = (((m == null))?null:m);
var m__17798__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,m,mode);
} else {
var m__17798__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18207__auto__ = [];
var len__18200__auto___21372 = arguments.length;
var i__18201__auto___21373 = (0);
while(true){
if((i__18201__auto___21373 < len__18200__auto___21372)){
args__18207__auto__.push((arguments[i__18201__auto___21373]));

var G__21374 = (i__18201__auto___21373 + (1));
i__18201__auto___21373 = G__21374;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((3) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18208__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21366){
var map__21367 = p__21366;
var map__21367__$1 = ((((!((map__21367 == null)))?((((map__21367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21367):map__21367);
var opts = map__21367__$1;
var statearr_21369_21375 = state;
(statearr_21369_21375[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21367,map__21367__$1,opts){
return (function (val){
var statearr_21370_21376 = state;
(statearr_21370_21376[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21367,map__21367__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21371_21377 = state;
(statearr_21371_21377[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21362){
var G__21363 = cljs.core.first.call(null,seq21362);
var seq21362__$1 = cljs.core.next.call(null,seq21362);
var G__21364 = cljs.core.first.call(null,seq21362__$1);
var seq21362__$2 = cljs.core.next.call(null,seq21362__$1);
var G__21365 = cljs.core.first.call(null,seq21362__$2);
var seq21362__$3 = cljs.core.next.call(null,seq21362__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21363,G__21364,G__21365,seq21362__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21541 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21542){
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
this.meta21542 = meta21542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21543,meta21542__$1){
var self__ = this;
var _21543__$1 = this;
return (new cljs.core.async.t_cljs$core$async21541(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21542__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21543){
var self__ = this;
var _21543__$1 = this;
return self__.meta21542;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21541.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21542","meta21542",1690469979,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21541";

cljs.core.async.t_cljs$core$async21541.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async21541");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21541 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21541(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21542){
return (new cljs.core.async.t_cljs$core$async21541(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21542));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21541(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19991__auto___21704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___21704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___21704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21641){
var state_val_21642 = (state_21641[(1)]);
if((state_val_21642 === (7))){
var inst_21559 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
var statearr_21643_21705 = state_21641__$1;
(statearr_21643_21705[(2)] = inst_21559);

(statearr_21643_21705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (20))){
var inst_21571 = (state_21641[(7)]);
var state_21641__$1 = state_21641;
var statearr_21644_21706 = state_21641__$1;
(statearr_21644_21706[(2)] = inst_21571);

(statearr_21644_21706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (27))){
var state_21641__$1 = state_21641;
var statearr_21645_21707 = state_21641__$1;
(statearr_21645_21707[(2)] = null);

(statearr_21645_21707[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (1))){
var inst_21547 = (state_21641[(8)]);
var inst_21547__$1 = calc_state.call(null);
var inst_21549 = (inst_21547__$1 == null);
var inst_21550 = cljs.core.not.call(null,inst_21549);
var state_21641__$1 = (function (){var statearr_21646 = state_21641;
(statearr_21646[(8)] = inst_21547__$1);

return statearr_21646;
})();
if(inst_21550){
var statearr_21647_21708 = state_21641__$1;
(statearr_21647_21708[(1)] = (2));

} else {
var statearr_21648_21709 = state_21641__$1;
(statearr_21648_21709[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (24))){
var inst_21615 = (state_21641[(9)]);
var inst_21594 = (state_21641[(10)]);
var inst_21601 = (state_21641[(11)]);
var inst_21615__$1 = inst_21594.call(null,inst_21601);
var state_21641__$1 = (function (){var statearr_21649 = state_21641;
(statearr_21649[(9)] = inst_21615__$1);

return statearr_21649;
})();
if(cljs.core.truth_(inst_21615__$1)){
var statearr_21650_21710 = state_21641__$1;
(statearr_21650_21710[(1)] = (29));

} else {
var statearr_21651_21711 = state_21641__$1;
(statearr_21651_21711[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (4))){
var inst_21562 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21562)){
var statearr_21652_21712 = state_21641__$1;
(statearr_21652_21712[(1)] = (8));

} else {
var statearr_21653_21713 = state_21641__$1;
(statearr_21653_21713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (15))){
var inst_21588 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21588)){
var statearr_21654_21714 = state_21641__$1;
(statearr_21654_21714[(1)] = (19));

} else {
var statearr_21655_21715 = state_21641__$1;
(statearr_21655_21715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (21))){
var inst_21593 = (state_21641[(12)]);
var inst_21593__$1 = (state_21641[(2)]);
var inst_21594 = cljs.core.get.call(null,inst_21593__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21595 = cljs.core.get.call(null,inst_21593__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21596 = cljs.core.get.call(null,inst_21593__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21641__$1 = (function (){var statearr_21656 = state_21641;
(statearr_21656[(13)] = inst_21595);

(statearr_21656[(12)] = inst_21593__$1);

(statearr_21656[(10)] = inst_21594);

return statearr_21656;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21641__$1,(22),inst_21596);
} else {
if((state_val_21642 === (31))){
var inst_21623 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21623)){
var statearr_21657_21716 = state_21641__$1;
(statearr_21657_21716[(1)] = (32));

} else {
var statearr_21658_21717 = state_21641__$1;
(statearr_21658_21717[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (32))){
var inst_21600 = (state_21641[(14)]);
var state_21641__$1 = state_21641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21641__$1,(35),out,inst_21600);
} else {
if((state_val_21642 === (33))){
var inst_21593 = (state_21641[(12)]);
var inst_21571 = inst_21593;
var state_21641__$1 = (function (){var statearr_21659 = state_21641;
(statearr_21659[(7)] = inst_21571);

return statearr_21659;
})();
var statearr_21660_21718 = state_21641__$1;
(statearr_21660_21718[(2)] = null);

(statearr_21660_21718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (13))){
var inst_21571 = (state_21641[(7)]);
var inst_21578 = inst_21571.cljs$lang$protocol_mask$partition0$;
var inst_21579 = (inst_21578 & (64));
var inst_21580 = inst_21571.cljs$core$ISeq$;
var inst_21581 = (inst_21579) || (inst_21580);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21581)){
var statearr_21661_21719 = state_21641__$1;
(statearr_21661_21719[(1)] = (16));

} else {
var statearr_21662_21720 = state_21641__$1;
(statearr_21662_21720[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (22))){
var inst_21600 = (state_21641[(14)]);
var inst_21601 = (state_21641[(11)]);
var inst_21599 = (state_21641[(2)]);
var inst_21600__$1 = cljs.core.nth.call(null,inst_21599,(0),null);
var inst_21601__$1 = cljs.core.nth.call(null,inst_21599,(1),null);
var inst_21602 = (inst_21600__$1 == null);
var inst_21603 = cljs.core._EQ_.call(null,inst_21601__$1,change);
var inst_21604 = (inst_21602) || (inst_21603);
var state_21641__$1 = (function (){var statearr_21663 = state_21641;
(statearr_21663[(14)] = inst_21600__$1);

(statearr_21663[(11)] = inst_21601__$1);

return statearr_21663;
})();
if(cljs.core.truth_(inst_21604)){
var statearr_21664_21721 = state_21641__$1;
(statearr_21664_21721[(1)] = (23));

} else {
var statearr_21665_21722 = state_21641__$1;
(statearr_21665_21722[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (36))){
var inst_21593 = (state_21641[(12)]);
var inst_21571 = inst_21593;
var state_21641__$1 = (function (){var statearr_21666 = state_21641;
(statearr_21666[(7)] = inst_21571);

return statearr_21666;
})();
var statearr_21667_21723 = state_21641__$1;
(statearr_21667_21723[(2)] = null);

(statearr_21667_21723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (29))){
var inst_21615 = (state_21641[(9)]);
var state_21641__$1 = state_21641;
var statearr_21668_21724 = state_21641__$1;
(statearr_21668_21724[(2)] = inst_21615);

(statearr_21668_21724[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (6))){
var state_21641__$1 = state_21641;
var statearr_21669_21725 = state_21641__$1;
(statearr_21669_21725[(2)] = false);

(statearr_21669_21725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (28))){
var inst_21611 = (state_21641[(2)]);
var inst_21612 = calc_state.call(null);
var inst_21571 = inst_21612;
var state_21641__$1 = (function (){var statearr_21670 = state_21641;
(statearr_21670[(7)] = inst_21571);

(statearr_21670[(15)] = inst_21611);

return statearr_21670;
})();
var statearr_21671_21726 = state_21641__$1;
(statearr_21671_21726[(2)] = null);

(statearr_21671_21726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (25))){
var inst_21637 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
var statearr_21672_21727 = state_21641__$1;
(statearr_21672_21727[(2)] = inst_21637);

(statearr_21672_21727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (34))){
var inst_21635 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
var statearr_21673_21728 = state_21641__$1;
(statearr_21673_21728[(2)] = inst_21635);

(statearr_21673_21728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (17))){
var state_21641__$1 = state_21641;
var statearr_21674_21729 = state_21641__$1;
(statearr_21674_21729[(2)] = false);

(statearr_21674_21729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (3))){
var state_21641__$1 = state_21641;
var statearr_21675_21730 = state_21641__$1;
(statearr_21675_21730[(2)] = false);

(statearr_21675_21730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (12))){
var inst_21639 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21641__$1,inst_21639);
} else {
if((state_val_21642 === (2))){
var inst_21547 = (state_21641[(8)]);
var inst_21552 = inst_21547.cljs$lang$protocol_mask$partition0$;
var inst_21553 = (inst_21552 & (64));
var inst_21554 = inst_21547.cljs$core$ISeq$;
var inst_21555 = (inst_21553) || (inst_21554);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21555)){
var statearr_21676_21731 = state_21641__$1;
(statearr_21676_21731[(1)] = (5));

} else {
var statearr_21677_21732 = state_21641__$1;
(statearr_21677_21732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (23))){
var inst_21600 = (state_21641[(14)]);
var inst_21606 = (inst_21600 == null);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21606)){
var statearr_21678_21733 = state_21641__$1;
(statearr_21678_21733[(1)] = (26));

} else {
var statearr_21679_21734 = state_21641__$1;
(statearr_21679_21734[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (35))){
var inst_21626 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21626)){
var statearr_21680_21735 = state_21641__$1;
(statearr_21680_21735[(1)] = (36));

} else {
var statearr_21681_21736 = state_21641__$1;
(statearr_21681_21736[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (19))){
var inst_21571 = (state_21641[(7)]);
var inst_21590 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21571);
var state_21641__$1 = state_21641;
var statearr_21682_21737 = state_21641__$1;
(statearr_21682_21737[(2)] = inst_21590);

(statearr_21682_21737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (11))){
var inst_21571 = (state_21641[(7)]);
var inst_21575 = (inst_21571 == null);
var inst_21576 = cljs.core.not.call(null,inst_21575);
var state_21641__$1 = state_21641;
if(inst_21576){
var statearr_21683_21738 = state_21641__$1;
(statearr_21683_21738[(1)] = (13));

} else {
var statearr_21684_21739 = state_21641__$1;
(statearr_21684_21739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (9))){
var inst_21547 = (state_21641[(8)]);
var state_21641__$1 = state_21641;
var statearr_21685_21740 = state_21641__$1;
(statearr_21685_21740[(2)] = inst_21547);

(statearr_21685_21740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (5))){
var state_21641__$1 = state_21641;
var statearr_21686_21741 = state_21641__$1;
(statearr_21686_21741[(2)] = true);

(statearr_21686_21741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (14))){
var state_21641__$1 = state_21641;
var statearr_21687_21742 = state_21641__$1;
(statearr_21687_21742[(2)] = false);

(statearr_21687_21742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (26))){
var inst_21601 = (state_21641[(11)]);
var inst_21608 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21601);
var state_21641__$1 = state_21641;
var statearr_21688_21743 = state_21641__$1;
(statearr_21688_21743[(2)] = inst_21608);

(statearr_21688_21743[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (16))){
var state_21641__$1 = state_21641;
var statearr_21689_21744 = state_21641__$1;
(statearr_21689_21744[(2)] = true);

(statearr_21689_21744[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (38))){
var inst_21631 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
var statearr_21690_21745 = state_21641__$1;
(statearr_21690_21745[(2)] = inst_21631);

(statearr_21690_21745[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (30))){
var inst_21595 = (state_21641[(13)]);
var inst_21594 = (state_21641[(10)]);
var inst_21601 = (state_21641[(11)]);
var inst_21618 = cljs.core.empty_QMARK_.call(null,inst_21594);
var inst_21619 = inst_21595.call(null,inst_21601);
var inst_21620 = cljs.core.not.call(null,inst_21619);
var inst_21621 = (inst_21618) && (inst_21620);
var state_21641__$1 = state_21641;
var statearr_21691_21746 = state_21641__$1;
(statearr_21691_21746[(2)] = inst_21621);

(statearr_21691_21746[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (10))){
var inst_21547 = (state_21641[(8)]);
var inst_21567 = (state_21641[(2)]);
var inst_21568 = cljs.core.get.call(null,inst_21567,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21569 = cljs.core.get.call(null,inst_21567,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21570 = cljs.core.get.call(null,inst_21567,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21571 = inst_21547;
var state_21641__$1 = (function (){var statearr_21692 = state_21641;
(statearr_21692[(16)] = inst_21569);

(statearr_21692[(7)] = inst_21571);

(statearr_21692[(17)] = inst_21568);

(statearr_21692[(18)] = inst_21570);

return statearr_21692;
})();
var statearr_21693_21747 = state_21641__$1;
(statearr_21693_21747[(2)] = null);

(statearr_21693_21747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (18))){
var inst_21585 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
var statearr_21694_21748 = state_21641__$1;
(statearr_21694_21748[(2)] = inst_21585);

(statearr_21694_21748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (37))){
var state_21641__$1 = state_21641;
var statearr_21695_21749 = state_21641__$1;
(statearr_21695_21749[(2)] = null);

(statearr_21695_21749[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (8))){
var inst_21547 = (state_21641[(8)]);
var inst_21564 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21547);
var state_21641__$1 = state_21641;
var statearr_21696_21750 = state_21641__$1;
(statearr_21696_21750[(2)] = inst_21564);

(statearr_21696_21750[(1)] = (10));


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
});})(c__19991__auto___21704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19879__auto__,c__19991__auto___21704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19880__auto__ = null;
var cljs$core$async$mix_$_state_machine__19880__auto____0 = (function (){
var statearr_21700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21700[(0)] = cljs$core$async$mix_$_state_machine__19880__auto__);

(statearr_21700[(1)] = (1));

return statearr_21700;
});
var cljs$core$async$mix_$_state_machine__19880__auto____1 = (function (state_21641){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_21641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e21701){if((e21701 instanceof Object)){
var ex__19883__auto__ = e21701;
var statearr_21702_21751 = state_21641;
(statearr_21702_21751[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21752 = state_21641;
state_21641 = G__21752;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19880__auto__ = function(state_21641){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19880__auto____1.call(this,state_21641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19880__auto____0;
cljs$core$async$mix_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19880__auto____1;
return cljs$core$async$mix_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___21704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19993__auto__ = (function (){var statearr_21703 = f__19992__auto__.call(null);
(statearr_21703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___21704);

return statearr_21703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___21704,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17797__auto__ = (((p == null))?null:p);
var m__17798__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17798__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17797__auto__ = (((p == null))?null:p);
var m__17798__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,p,v,ch);
} else {
var m__17798__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21753 = [];
var len__18200__auto___21756 = arguments.length;
var i__18201__auto___21757 = (0);
while(true){
if((i__18201__auto___21757 < len__18200__auto___21756)){
args21753.push((arguments[i__18201__auto___21757]));

var G__21758 = (i__18201__auto___21757 + (1));
i__18201__auto___21757 = G__21758;
continue;
} else {
}
break;
}

var G__21755 = args21753.length;
switch (G__21755) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21753.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17797__auto__ = (((p == null))?null:p);
var m__17798__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,p);
} else {
var m__17798__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,p);
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
var x__17797__auto__ = (((p == null))?null:p);
var m__17798__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17797__auto__)]);
if(!((m__17798__auto__ == null))){
return m__17798__auto__.call(null,p,v);
} else {
var m__17798__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17798__auto____$1 == null))){
return m__17798__auto____$1.call(null,p,v);
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
var args21761 = [];
var len__18200__auto___21886 = arguments.length;
var i__18201__auto___21887 = (0);
while(true){
if((i__18201__auto___21887 < len__18200__auto___21886)){
args21761.push((arguments[i__18201__auto___21887]));

var G__21888 = (i__18201__auto___21887 + (1));
i__18201__auto___21887 = G__21888;
continue;
} else {
}
break;
}

var G__21763 = args21761.length;
switch (G__21763) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21761.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17142__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17142__auto__,mults){
return (function (p1__21760_SHARP_){
if(cljs.core.truth_(p1__21760_SHARP_.call(null,topic))){
return p1__21760_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21760_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17142__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21764 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21765){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21765 = meta21765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21766,meta21765__$1){
var self__ = this;
var _21766__$1 = this;
return (new cljs.core.async.t_cljs$core$async21764(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21765__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21766){
var self__ = this;
var _21766__$1 = this;
return self__.meta21765;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21764.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21764.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21765","meta21765",-104388137,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21764";

cljs.core.async.t_cljs$core$async21764.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async21764");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21764 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21764(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21765){
return (new cljs.core.async.t_cljs$core$async21764(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21765));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21764(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19991__auto___21890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___21890,mults,ensure_mult,p){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___21890,mults,ensure_mult,p){
return (function (state_21838){
var state_val_21839 = (state_21838[(1)]);
if((state_val_21839 === (7))){
var inst_21834 = (state_21838[(2)]);
var state_21838__$1 = state_21838;
var statearr_21840_21891 = state_21838__$1;
(statearr_21840_21891[(2)] = inst_21834);

(statearr_21840_21891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (20))){
var state_21838__$1 = state_21838;
var statearr_21841_21892 = state_21838__$1;
(statearr_21841_21892[(2)] = null);

(statearr_21841_21892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (1))){
var state_21838__$1 = state_21838;
var statearr_21842_21893 = state_21838__$1;
(statearr_21842_21893[(2)] = null);

(statearr_21842_21893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (24))){
var inst_21817 = (state_21838[(7)]);
var inst_21826 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21817);
var state_21838__$1 = state_21838;
var statearr_21843_21894 = state_21838__$1;
(statearr_21843_21894[(2)] = inst_21826);

(statearr_21843_21894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (4))){
var inst_21769 = (state_21838[(8)]);
var inst_21769__$1 = (state_21838[(2)]);
var inst_21770 = (inst_21769__$1 == null);
var state_21838__$1 = (function (){var statearr_21844 = state_21838;
(statearr_21844[(8)] = inst_21769__$1);

return statearr_21844;
})();
if(cljs.core.truth_(inst_21770)){
var statearr_21845_21895 = state_21838__$1;
(statearr_21845_21895[(1)] = (5));

} else {
var statearr_21846_21896 = state_21838__$1;
(statearr_21846_21896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (15))){
var inst_21811 = (state_21838[(2)]);
var state_21838__$1 = state_21838;
var statearr_21847_21897 = state_21838__$1;
(statearr_21847_21897[(2)] = inst_21811);

(statearr_21847_21897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (21))){
var inst_21831 = (state_21838[(2)]);
var state_21838__$1 = (function (){var statearr_21848 = state_21838;
(statearr_21848[(9)] = inst_21831);

return statearr_21848;
})();
var statearr_21849_21898 = state_21838__$1;
(statearr_21849_21898[(2)] = null);

(statearr_21849_21898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (13))){
var inst_21793 = (state_21838[(10)]);
var inst_21795 = cljs.core.chunked_seq_QMARK_.call(null,inst_21793);
var state_21838__$1 = state_21838;
if(inst_21795){
var statearr_21850_21899 = state_21838__$1;
(statearr_21850_21899[(1)] = (16));

} else {
var statearr_21851_21900 = state_21838__$1;
(statearr_21851_21900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (22))){
var inst_21823 = (state_21838[(2)]);
var state_21838__$1 = state_21838;
if(cljs.core.truth_(inst_21823)){
var statearr_21852_21901 = state_21838__$1;
(statearr_21852_21901[(1)] = (23));

} else {
var statearr_21853_21902 = state_21838__$1;
(statearr_21853_21902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (6))){
var inst_21819 = (state_21838[(11)]);
var inst_21769 = (state_21838[(8)]);
var inst_21817 = (state_21838[(7)]);
var inst_21817__$1 = topic_fn.call(null,inst_21769);
var inst_21818 = cljs.core.deref.call(null,mults);
var inst_21819__$1 = cljs.core.get.call(null,inst_21818,inst_21817__$1);
var state_21838__$1 = (function (){var statearr_21854 = state_21838;
(statearr_21854[(11)] = inst_21819__$1);

(statearr_21854[(7)] = inst_21817__$1);

return statearr_21854;
})();
if(cljs.core.truth_(inst_21819__$1)){
var statearr_21855_21903 = state_21838__$1;
(statearr_21855_21903[(1)] = (19));

} else {
var statearr_21856_21904 = state_21838__$1;
(statearr_21856_21904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (25))){
var inst_21828 = (state_21838[(2)]);
var state_21838__$1 = state_21838;
var statearr_21857_21905 = state_21838__$1;
(statearr_21857_21905[(2)] = inst_21828);

(statearr_21857_21905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (17))){
var inst_21793 = (state_21838[(10)]);
var inst_21802 = cljs.core.first.call(null,inst_21793);
var inst_21803 = cljs.core.async.muxch_STAR_.call(null,inst_21802);
var inst_21804 = cljs.core.async.close_BANG_.call(null,inst_21803);
var inst_21805 = cljs.core.next.call(null,inst_21793);
var inst_21779 = inst_21805;
var inst_21780 = null;
var inst_21781 = (0);
var inst_21782 = (0);
var state_21838__$1 = (function (){var statearr_21858 = state_21838;
(statearr_21858[(12)] = inst_21780);

(statearr_21858[(13)] = inst_21781);

(statearr_21858[(14)] = inst_21779);

(statearr_21858[(15)] = inst_21782);

(statearr_21858[(16)] = inst_21804);

return statearr_21858;
})();
var statearr_21859_21906 = state_21838__$1;
(statearr_21859_21906[(2)] = null);

(statearr_21859_21906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (3))){
var inst_21836 = (state_21838[(2)]);
var state_21838__$1 = state_21838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21838__$1,inst_21836);
} else {
if((state_val_21839 === (12))){
var inst_21813 = (state_21838[(2)]);
var state_21838__$1 = state_21838;
var statearr_21860_21907 = state_21838__$1;
(statearr_21860_21907[(2)] = inst_21813);

(statearr_21860_21907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (2))){
var state_21838__$1 = state_21838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21838__$1,(4),ch);
} else {
if((state_val_21839 === (23))){
var state_21838__$1 = state_21838;
var statearr_21861_21908 = state_21838__$1;
(statearr_21861_21908[(2)] = null);

(statearr_21861_21908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (19))){
var inst_21819 = (state_21838[(11)]);
var inst_21769 = (state_21838[(8)]);
var inst_21821 = cljs.core.async.muxch_STAR_.call(null,inst_21819);
var state_21838__$1 = state_21838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21838__$1,(22),inst_21821,inst_21769);
} else {
if((state_val_21839 === (11))){
var inst_21793 = (state_21838[(10)]);
var inst_21779 = (state_21838[(14)]);
var inst_21793__$1 = cljs.core.seq.call(null,inst_21779);
var state_21838__$1 = (function (){var statearr_21862 = state_21838;
(statearr_21862[(10)] = inst_21793__$1);

return statearr_21862;
})();
if(inst_21793__$1){
var statearr_21863_21909 = state_21838__$1;
(statearr_21863_21909[(1)] = (13));

} else {
var statearr_21864_21910 = state_21838__$1;
(statearr_21864_21910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (9))){
var inst_21815 = (state_21838[(2)]);
var state_21838__$1 = state_21838;
var statearr_21865_21911 = state_21838__$1;
(statearr_21865_21911[(2)] = inst_21815);

(statearr_21865_21911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (5))){
var inst_21776 = cljs.core.deref.call(null,mults);
var inst_21777 = cljs.core.vals.call(null,inst_21776);
var inst_21778 = cljs.core.seq.call(null,inst_21777);
var inst_21779 = inst_21778;
var inst_21780 = null;
var inst_21781 = (0);
var inst_21782 = (0);
var state_21838__$1 = (function (){var statearr_21866 = state_21838;
(statearr_21866[(12)] = inst_21780);

(statearr_21866[(13)] = inst_21781);

(statearr_21866[(14)] = inst_21779);

(statearr_21866[(15)] = inst_21782);

return statearr_21866;
})();
var statearr_21867_21912 = state_21838__$1;
(statearr_21867_21912[(2)] = null);

(statearr_21867_21912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (14))){
var state_21838__$1 = state_21838;
var statearr_21871_21913 = state_21838__$1;
(statearr_21871_21913[(2)] = null);

(statearr_21871_21913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (16))){
var inst_21793 = (state_21838[(10)]);
var inst_21797 = cljs.core.chunk_first.call(null,inst_21793);
var inst_21798 = cljs.core.chunk_rest.call(null,inst_21793);
var inst_21799 = cljs.core.count.call(null,inst_21797);
var inst_21779 = inst_21798;
var inst_21780 = inst_21797;
var inst_21781 = inst_21799;
var inst_21782 = (0);
var state_21838__$1 = (function (){var statearr_21872 = state_21838;
(statearr_21872[(12)] = inst_21780);

(statearr_21872[(13)] = inst_21781);

(statearr_21872[(14)] = inst_21779);

(statearr_21872[(15)] = inst_21782);

return statearr_21872;
})();
var statearr_21873_21914 = state_21838__$1;
(statearr_21873_21914[(2)] = null);

(statearr_21873_21914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (10))){
var inst_21780 = (state_21838[(12)]);
var inst_21781 = (state_21838[(13)]);
var inst_21779 = (state_21838[(14)]);
var inst_21782 = (state_21838[(15)]);
var inst_21787 = cljs.core._nth.call(null,inst_21780,inst_21782);
var inst_21788 = cljs.core.async.muxch_STAR_.call(null,inst_21787);
var inst_21789 = cljs.core.async.close_BANG_.call(null,inst_21788);
var inst_21790 = (inst_21782 + (1));
var tmp21868 = inst_21780;
var tmp21869 = inst_21781;
var tmp21870 = inst_21779;
var inst_21779__$1 = tmp21870;
var inst_21780__$1 = tmp21868;
var inst_21781__$1 = tmp21869;
var inst_21782__$1 = inst_21790;
var state_21838__$1 = (function (){var statearr_21874 = state_21838;
(statearr_21874[(12)] = inst_21780__$1);

(statearr_21874[(13)] = inst_21781__$1);

(statearr_21874[(17)] = inst_21789);

(statearr_21874[(14)] = inst_21779__$1);

(statearr_21874[(15)] = inst_21782__$1);

return statearr_21874;
})();
var statearr_21875_21915 = state_21838__$1;
(statearr_21875_21915[(2)] = null);

(statearr_21875_21915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (18))){
var inst_21808 = (state_21838[(2)]);
var state_21838__$1 = state_21838;
var statearr_21876_21916 = state_21838__$1;
(statearr_21876_21916[(2)] = inst_21808);

(statearr_21876_21916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21839 === (8))){
var inst_21781 = (state_21838[(13)]);
var inst_21782 = (state_21838[(15)]);
var inst_21784 = (inst_21782 < inst_21781);
var inst_21785 = inst_21784;
var state_21838__$1 = state_21838;
if(cljs.core.truth_(inst_21785)){
var statearr_21877_21917 = state_21838__$1;
(statearr_21877_21917[(1)] = (10));

} else {
var statearr_21878_21918 = state_21838__$1;
(statearr_21878_21918[(1)] = (11));

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
});})(c__19991__auto___21890,mults,ensure_mult,p))
;
return ((function (switch__19879__auto__,c__19991__auto___21890,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_21882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21882[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_21882[(1)] = (1));

return statearr_21882;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_21838){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_21838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e21883){if((e21883 instanceof Object)){
var ex__19883__auto__ = e21883;
var statearr_21884_21919 = state_21838;
(statearr_21884_21919[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21920 = state_21838;
state_21838 = G__21920;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_21838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_21838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___21890,mults,ensure_mult,p))
})();
var state__19993__auto__ = (function (){var statearr_21885 = f__19992__auto__.call(null);
(statearr_21885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___21890);

return statearr_21885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___21890,mults,ensure_mult,p))
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
var args21921 = [];
var len__18200__auto___21924 = arguments.length;
var i__18201__auto___21925 = (0);
while(true){
if((i__18201__auto___21925 < len__18200__auto___21924)){
args21921.push((arguments[i__18201__auto___21925]));

var G__21926 = (i__18201__auto___21925 + (1));
i__18201__auto___21925 = G__21926;
continue;
} else {
}
break;
}

var G__21923 = args21921.length;
switch (G__21923) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21921.length)].join('')));

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
var args21928 = [];
var len__18200__auto___21931 = arguments.length;
var i__18201__auto___21932 = (0);
while(true){
if((i__18201__auto___21932 < len__18200__auto___21931)){
args21928.push((arguments[i__18201__auto___21932]));

var G__21933 = (i__18201__auto___21932 + (1));
i__18201__auto___21932 = G__21933;
continue;
} else {
}
break;
}

var G__21930 = args21928.length;
switch (G__21930) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21928.length)].join('')));

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
var args21935 = [];
var len__18200__auto___22006 = arguments.length;
var i__18201__auto___22007 = (0);
while(true){
if((i__18201__auto___22007 < len__18200__auto___22006)){
args21935.push((arguments[i__18201__auto___22007]));

var G__22008 = (i__18201__auto___22007 + (1));
i__18201__auto___22007 = G__22008;
continue;
} else {
}
break;
}

var G__21937 = args21935.length;
switch (G__21937) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21935.length)].join('')));

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
var c__19991__auto___22010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___22010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___22010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21976){
var state_val_21977 = (state_21976[(1)]);
if((state_val_21977 === (7))){
var state_21976__$1 = state_21976;
var statearr_21978_22011 = state_21976__$1;
(statearr_21978_22011[(2)] = null);

(statearr_21978_22011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (1))){
var state_21976__$1 = state_21976;
var statearr_21979_22012 = state_21976__$1;
(statearr_21979_22012[(2)] = null);

(statearr_21979_22012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (4))){
var inst_21940 = (state_21976[(7)]);
var inst_21942 = (inst_21940 < cnt);
var state_21976__$1 = state_21976;
if(cljs.core.truth_(inst_21942)){
var statearr_21980_22013 = state_21976__$1;
(statearr_21980_22013[(1)] = (6));

} else {
var statearr_21981_22014 = state_21976__$1;
(statearr_21981_22014[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (15))){
var inst_21972 = (state_21976[(2)]);
var state_21976__$1 = state_21976;
var statearr_21982_22015 = state_21976__$1;
(statearr_21982_22015[(2)] = inst_21972);

(statearr_21982_22015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (13))){
var inst_21965 = cljs.core.async.close_BANG_.call(null,out);
var state_21976__$1 = state_21976;
var statearr_21983_22016 = state_21976__$1;
(statearr_21983_22016[(2)] = inst_21965);

(statearr_21983_22016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (6))){
var state_21976__$1 = state_21976;
var statearr_21984_22017 = state_21976__$1;
(statearr_21984_22017[(2)] = null);

(statearr_21984_22017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (3))){
var inst_21974 = (state_21976[(2)]);
var state_21976__$1 = state_21976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21976__$1,inst_21974);
} else {
if((state_val_21977 === (12))){
var inst_21962 = (state_21976[(8)]);
var inst_21962__$1 = (state_21976[(2)]);
var inst_21963 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21962__$1);
var state_21976__$1 = (function (){var statearr_21985 = state_21976;
(statearr_21985[(8)] = inst_21962__$1);

return statearr_21985;
})();
if(cljs.core.truth_(inst_21963)){
var statearr_21986_22018 = state_21976__$1;
(statearr_21986_22018[(1)] = (13));

} else {
var statearr_21987_22019 = state_21976__$1;
(statearr_21987_22019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (2))){
var inst_21939 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21940 = (0);
var state_21976__$1 = (function (){var statearr_21988 = state_21976;
(statearr_21988[(9)] = inst_21939);

(statearr_21988[(7)] = inst_21940);

return statearr_21988;
})();
var statearr_21989_22020 = state_21976__$1;
(statearr_21989_22020[(2)] = null);

(statearr_21989_22020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (11))){
var inst_21940 = (state_21976[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21976,(10),Object,null,(9));
var inst_21949 = chs__$1.call(null,inst_21940);
var inst_21950 = done.call(null,inst_21940);
var inst_21951 = cljs.core.async.take_BANG_.call(null,inst_21949,inst_21950);
var state_21976__$1 = state_21976;
var statearr_21990_22021 = state_21976__$1;
(statearr_21990_22021[(2)] = inst_21951);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21976__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (9))){
var inst_21940 = (state_21976[(7)]);
var inst_21953 = (state_21976[(2)]);
var inst_21954 = (inst_21940 + (1));
var inst_21940__$1 = inst_21954;
var state_21976__$1 = (function (){var statearr_21991 = state_21976;
(statearr_21991[(7)] = inst_21940__$1);

(statearr_21991[(10)] = inst_21953);

return statearr_21991;
})();
var statearr_21992_22022 = state_21976__$1;
(statearr_21992_22022[(2)] = null);

(statearr_21992_22022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (5))){
var inst_21960 = (state_21976[(2)]);
var state_21976__$1 = (function (){var statearr_21993 = state_21976;
(statearr_21993[(11)] = inst_21960);

return statearr_21993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21976__$1,(12),dchan);
} else {
if((state_val_21977 === (14))){
var inst_21962 = (state_21976[(8)]);
var inst_21967 = cljs.core.apply.call(null,f,inst_21962);
var state_21976__$1 = state_21976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21976__$1,(16),out,inst_21967);
} else {
if((state_val_21977 === (16))){
var inst_21969 = (state_21976[(2)]);
var state_21976__$1 = (function (){var statearr_21994 = state_21976;
(statearr_21994[(12)] = inst_21969);

return statearr_21994;
})();
var statearr_21995_22023 = state_21976__$1;
(statearr_21995_22023[(2)] = null);

(statearr_21995_22023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (10))){
var inst_21944 = (state_21976[(2)]);
var inst_21945 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21976__$1 = (function (){var statearr_21996 = state_21976;
(statearr_21996[(13)] = inst_21944);

return statearr_21996;
})();
var statearr_21997_22024 = state_21976__$1;
(statearr_21997_22024[(2)] = inst_21945);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21976__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21977 === (8))){
var inst_21958 = (state_21976[(2)]);
var state_21976__$1 = state_21976;
var statearr_21998_22025 = state_21976__$1;
(statearr_21998_22025[(2)] = inst_21958);

(statearr_21998_22025[(1)] = (5));


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
});})(c__19991__auto___22010,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19879__auto__,c__19991__auto___22010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_22002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22002[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_22002[(1)] = (1));

return statearr_22002;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_21976){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_21976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e22003){if((e22003 instanceof Object)){
var ex__19883__auto__ = e22003;
var statearr_22004_22026 = state_21976;
(statearr_22004_22026[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22027 = state_21976;
state_21976 = G__22027;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_21976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_21976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___22010,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19993__auto__ = (function (){var statearr_22005 = f__19992__auto__.call(null);
(statearr_22005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___22010);

return statearr_22005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___22010,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22029 = [];
var len__18200__auto___22085 = arguments.length;
var i__18201__auto___22086 = (0);
while(true){
if((i__18201__auto___22086 < len__18200__auto___22085)){
args22029.push((arguments[i__18201__auto___22086]));

var G__22087 = (i__18201__auto___22086 + (1));
i__18201__auto___22086 = G__22087;
continue;
} else {
}
break;
}

var G__22031 = args22029.length;
switch (G__22031) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22029.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19991__auto___22089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___22089,out){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___22089,out){
return (function (state_22061){
var state_val_22062 = (state_22061[(1)]);
if((state_val_22062 === (7))){
var inst_22041 = (state_22061[(7)]);
var inst_22040 = (state_22061[(8)]);
var inst_22040__$1 = (state_22061[(2)]);
var inst_22041__$1 = cljs.core.nth.call(null,inst_22040__$1,(0),null);
var inst_22042 = cljs.core.nth.call(null,inst_22040__$1,(1),null);
var inst_22043 = (inst_22041__$1 == null);
var state_22061__$1 = (function (){var statearr_22063 = state_22061;
(statearr_22063[(7)] = inst_22041__$1);

(statearr_22063[(8)] = inst_22040__$1);

(statearr_22063[(9)] = inst_22042);

return statearr_22063;
})();
if(cljs.core.truth_(inst_22043)){
var statearr_22064_22090 = state_22061__$1;
(statearr_22064_22090[(1)] = (8));

} else {
var statearr_22065_22091 = state_22061__$1;
(statearr_22065_22091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (1))){
var inst_22032 = cljs.core.vec.call(null,chs);
var inst_22033 = inst_22032;
var state_22061__$1 = (function (){var statearr_22066 = state_22061;
(statearr_22066[(10)] = inst_22033);

return statearr_22066;
})();
var statearr_22067_22092 = state_22061__$1;
(statearr_22067_22092[(2)] = null);

(statearr_22067_22092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (4))){
var inst_22033 = (state_22061[(10)]);
var state_22061__$1 = state_22061;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22061__$1,(7),inst_22033);
} else {
if((state_val_22062 === (6))){
var inst_22057 = (state_22061[(2)]);
var state_22061__$1 = state_22061;
var statearr_22068_22093 = state_22061__$1;
(statearr_22068_22093[(2)] = inst_22057);

(statearr_22068_22093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (3))){
var inst_22059 = (state_22061[(2)]);
var state_22061__$1 = state_22061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22061__$1,inst_22059);
} else {
if((state_val_22062 === (2))){
var inst_22033 = (state_22061[(10)]);
var inst_22035 = cljs.core.count.call(null,inst_22033);
var inst_22036 = (inst_22035 > (0));
var state_22061__$1 = state_22061;
if(cljs.core.truth_(inst_22036)){
var statearr_22070_22094 = state_22061__$1;
(statearr_22070_22094[(1)] = (4));

} else {
var statearr_22071_22095 = state_22061__$1;
(statearr_22071_22095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (11))){
var inst_22033 = (state_22061[(10)]);
var inst_22050 = (state_22061[(2)]);
var tmp22069 = inst_22033;
var inst_22033__$1 = tmp22069;
var state_22061__$1 = (function (){var statearr_22072 = state_22061;
(statearr_22072[(10)] = inst_22033__$1);

(statearr_22072[(11)] = inst_22050);

return statearr_22072;
})();
var statearr_22073_22096 = state_22061__$1;
(statearr_22073_22096[(2)] = null);

(statearr_22073_22096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (9))){
var inst_22041 = (state_22061[(7)]);
var state_22061__$1 = state_22061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22061__$1,(11),out,inst_22041);
} else {
if((state_val_22062 === (5))){
var inst_22055 = cljs.core.async.close_BANG_.call(null,out);
var state_22061__$1 = state_22061;
var statearr_22074_22097 = state_22061__$1;
(statearr_22074_22097[(2)] = inst_22055);

(statearr_22074_22097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (10))){
var inst_22053 = (state_22061[(2)]);
var state_22061__$1 = state_22061;
var statearr_22075_22098 = state_22061__$1;
(statearr_22075_22098[(2)] = inst_22053);

(statearr_22075_22098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22062 === (8))){
var inst_22041 = (state_22061[(7)]);
var inst_22040 = (state_22061[(8)]);
var inst_22033 = (state_22061[(10)]);
var inst_22042 = (state_22061[(9)]);
var inst_22045 = (function (){var cs = inst_22033;
var vec__22038 = inst_22040;
var v = inst_22041;
var c = inst_22042;
return ((function (cs,vec__22038,v,c,inst_22041,inst_22040,inst_22033,inst_22042,state_val_22062,c__19991__auto___22089,out){
return (function (p1__22028_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22028_SHARP_);
});
;})(cs,vec__22038,v,c,inst_22041,inst_22040,inst_22033,inst_22042,state_val_22062,c__19991__auto___22089,out))
})();
var inst_22046 = cljs.core.filterv.call(null,inst_22045,inst_22033);
var inst_22033__$1 = inst_22046;
var state_22061__$1 = (function (){var statearr_22076 = state_22061;
(statearr_22076[(10)] = inst_22033__$1);

return statearr_22076;
})();
var statearr_22077_22099 = state_22061__$1;
(statearr_22077_22099[(2)] = null);

(statearr_22077_22099[(1)] = (2));


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
});})(c__19991__auto___22089,out))
;
return ((function (switch__19879__auto__,c__19991__auto___22089,out){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_22081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22081[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_22081[(1)] = (1));

return statearr_22081;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_22061){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_22061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e22082){if((e22082 instanceof Object)){
var ex__19883__auto__ = e22082;
var statearr_22083_22100 = state_22061;
(statearr_22083_22100[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22101 = state_22061;
state_22061 = G__22101;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_22061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_22061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___22089,out))
})();
var state__19993__auto__ = (function (){var statearr_22084 = f__19992__auto__.call(null);
(statearr_22084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___22089);

return statearr_22084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___22089,out))
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
var args22102 = [];
var len__18200__auto___22151 = arguments.length;
var i__18201__auto___22152 = (0);
while(true){
if((i__18201__auto___22152 < len__18200__auto___22151)){
args22102.push((arguments[i__18201__auto___22152]));

var G__22153 = (i__18201__auto___22152 + (1));
i__18201__auto___22152 = G__22153;
continue;
} else {
}
break;
}

var G__22104 = args22102.length;
switch (G__22104) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22102.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19991__auto___22155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___22155,out){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___22155,out){
return (function (state_22128){
var state_val_22129 = (state_22128[(1)]);
if((state_val_22129 === (7))){
var inst_22110 = (state_22128[(7)]);
var inst_22110__$1 = (state_22128[(2)]);
var inst_22111 = (inst_22110__$1 == null);
var inst_22112 = cljs.core.not.call(null,inst_22111);
var state_22128__$1 = (function (){var statearr_22130 = state_22128;
(statearr_22130[(7)] = inst_22110__$1);

return statearr_22130;
})();
if(inst_22112){
var statearr_22131_22156 = state_22128__$1;
(statearr_22131_22156[(1)] = (8));

} else {
var statearr_22132_22157 = state_22128__$1;
(statearr_22132_22157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (1))){
var inst_22105 = (0);
var state_22128__$1 = (function (){var statearr_22133 = state_22128;
(statearr_22133[(8)] = inst_22105);

return statearr_22133;
})();
var statearr_22134_22158 = state_22128__$1;
(statearr_22134_22158[(2)] = null);

(statearr_22134_22158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (4))){
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22128__$1,(7),ch);
} else {
if((state_val_22129 === (6))){
var inst_22123 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22135_22159 = state_22128__$1;
(statearr_22135_22159[(2)] = inst_22123);

(statearr_22135_22159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (3))){
var inst_22125 = (state_22128[(2)]);
var inst_22126 = cljs.core.async.close_BANG_.call(null,out);
var state_22128__$1 = (function (){var statearr_22136 = state_22128;
(statearr_22136[(9)] = inst_22125);

return statearr_22136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22128__$1,inst_22126);
} else {
if((state_val_22129 === (2))){
var inst_22105 = (state_22128[(8)]);
var inst_22107 = (inst_22105 < n);
var state_22128__$1 = state_22128;
if(cljs.core.truth_(inst_22107)){
var statearr_22137_22160 = state_22128__$1;
(statearr_22137_22160[(1)] = (4));

} else {
var statearr_22138_22161 = state_22128__$1;
(statearr_22138_22161[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (11))){
var inst_22105 = (state_22128[(8)]);
var inst_22115 = (state_22128[(2)]);
var inst_22116 = (inst_22105 + (1));
var inst_22105__$1 = inst_22116;
var state_22128__$1 = (function (){var statearr_22139 = state_22128;
(statearr_22139[(8)] = inst_22105__$1);

(statearr_22139[(10)] = inst_22115);

return statearr_22139;
})();
var statearr_22140_22162 = state_22128__$1;
(statearr_22140_22162[(2)] = null);

(statearr_22140_22162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (9))){
var state_22128__$1 = state_22128;
var statearr_22141_22163 = state_22128__$1;
(statearr_22141_22163[(2)] = null);

(statearr_22141_22163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (5))){
var state_22128__$1 = state_22128;
var statearr_22142_22164 = state_22128__$1;
(statearr_22142_22164[(2)] = null);

(statearr_22142_22164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (10))){
var inst_22120 = (state_22128[(2)]);
var state_22128__$1 = state_22128;
var statearr_22143_22165 = state_22128__$1;
(statearr_22143_22165[(2)] = inst_22120);

(statearr_22143_22165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22129 === (8))){
var inst_22110 = (state_22128[(7)]);
var state_22128__$1 = state_22128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22128__$1,(11),out,inst_22110);
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
});})(c__19991__auto___22155,out))
;
return ((function (switch__19879__auto__,c__19991__auto___22155,out){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_22147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22147[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_22147[(1)] = (1));

return statearr_22147;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_22128){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_22128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e22148){if((e22148 instanceof Object)){
var ex__19883__auto__ = e22148;
var statearr_22149_22166 = state_22128;
(statearr_22149_22166[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22167 = state_22128;
state_22128 = G__22167;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_22128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_22128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___22155,out))
})();
var state__19993__auto__ = (function (){var statearr_22150 = f__19992__auto__.call(null);
(statearr_22150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___22155);

return statearr_22150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___22155,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22175 = (function (map_LT_,f,ch,meta22176){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22176 = meta22176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22177,meta22176__$1){
var self__ = this;
var _22177__$1 = this;
return (new cljs.core.async.t_cljs$core$async22175(self__.map_LT_,self__.f,self__.ch,meta22176__$1));
});

cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22177){
var self__ = this;
var _22177__$1 = this;
return self__.meta22176;
});

cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22178 = (function (map_LT_,f,ch,meta22176,_,fn1,meta22179){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22176 = meta22176;
this._ = _;
this.fn1 = fn1;
this.meta22179 = meta22179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22180,meta22179__$1){
var self__ = this;
var _22180__$1 = this;
return (new cljs.core.async.t_cljs$core$async22178(self__.map_LT_,self__.f,self__.ch,self__.meta22176,self__._,self__.fn1,meta22179__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22180){
var self__ = this;
var _22180__$1 = this;
return self__.meta22179;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22178.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22168_SHARP_){
return f1.call(null,(((p1__22168_SHARP_ == null))?null:self__.f.call(null,p1__22168_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22178.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22176","meta22176",-1436376148,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22175","cljs.core.async/t_cljs$core$async22175",468611956,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22179","meta22179",-954071793,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22178";

cljs.core.async.t_cljs$core$async22178.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async22178");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22178 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22178(map_LT___$1,f__$1,ch__$1,meta22176__$1,___$2,fn1__$1,meta22179){
return (new cljs.core.async.t_cljs$core$async22178(map_LT___$1,f__$1,ch__$1,meta22176__$1,___$2,fn1__$1,meta22179));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22178(self__.map_LT_,self__.f,self__.ch,self__.meta22176,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17130__auto__ = ret;
if(cljs.core.truth_(and__17130__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17130__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22176","meta22176",-1436376148,null)], null);
});

cljs.core.async.t_cljs$core$async22175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22175";

cljs.core.async.t_cljs$core$async22175.cljs$lang$ctorPrWriter = (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async22175");
});

cljs.core.async.__GT_t_cljs$core$async22175 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22175(map_LT___$1,f__$1,ch__$1,meta22176){
return (new cljs.core.async.t_cljs$core$async22175(map_LT___$1,f__$1,ch__$1,meta22176));
});

}

return (new cljs.core.async.t_cljs$core$async22175(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22184 = (function (map_GT_,f,ch,meta22185){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22185 = meta22185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22186,meta22185__$1){
var self__ = this;
var _22186__$1 = this;
return (new cljs.core.async.t_cljs$core$async22184(self__.map_GT_,self__.f,self__.ch,meta22185__$1));
});

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22186){
var self__ = this;
var _22186__$1 = this;
return self__.meta22185;
});

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22185","meta22185",177230212,null)], null);
});

cljs.core.async.t_cljs$core$async22184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22184";

cljs.core.async.t_cljs$core$async22184.cljs$lang$ctorPrWriter = (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async22184");
});

cljs.core.async.__GT_t_cljs$core$async22184 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22184(map_GT___$1,f__$1,ch__$1,meta22185){
return (new cljs.core.async.t_cljs$core$async22184(map_GT___$1,f__$1,ch__$1,meta22185));
});

}

return (new cljs.core.async.t_cljs$core$async22184(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22190 = (function (filter_GT_,p,ch,meta22191){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22191 = meta22191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22192,meta22191__$1){
var self__ = this;
var _22192__$1 = this;
return (new cljs.core.async.t_cljs$core$async22190(self__.filter_GT_,self__.p,self__.ch,meta22191__$1));
});

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22192){
var self__ = this;
var _22192__$1 = this;
return self__.meta22191;
});

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22191","meta22191",-736591241,null)], null);
});

cljs.core.async.t_cljs$core$async22190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22190";

cljs.core.async.t_cljs$core$async22190.cljs$lang$ctorPrWriter = (function (this__17740__auto__,writer__17741__auto__,opt__17742__auto__){
return cljs.core._write.call(null,writer__17741__auto__,"cljs.core.async/t_cljs$core$async22190");
});

cljs.core.async.__GT_t_cljs$core$async22190 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22190(filter_GT___$1,p__$1,ch__$1,meta22191){
return (new cljs.core.async.t_cljs$core$async22190(filter_GT___$1,p__$1,ch__$1,meta22191));
});

}

return (new cljs.core.async.t_cljs$core$async22190(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22193 = [];
var len__18200__auto___22237 = arguments.length;
var i__18201__auto___22238 = (0);
while(true){
if((i__18201__auto___22238 < len__18200__auto___22237)){
args22193.push((arguments[i__18201__auto___22238]));

var G__22239 = (i__18201__auto___22238 + (1));
i__18201__auto___22238 = G__22239;
continue;
} else {
}
break;
}

var G__22195 = args22193.length;
switch (G__22195) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22193.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19991__auto___22241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___22241,out){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___22241,out){
return (function (state_22216){
var state_val_22217 = (state_22216[(1)]);
if((state_val_22217 === (7))){
var inst_22212 = (state_22216[(2)]);
var state_22216__$1 = state_22216;
var statearr_22218_22242 = state_22216__$1;
(statearr_22218_22242[(2)] = inst_22212);

(statearr_22218_22242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (1))){
var state_22216__$1 = state_22216;
var statearr_22219_22243 = state_22216__$1;
(statearr_22219_22243[(2)] = null);

(statearr_22219_22243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (4))){
var inst_22198 = (state_22216[(7)]);
var inst_22198__$1 = (state_22216[(2)]);
var inst_22199 = (inst_22198__$1 == null);
var state_22216__$1 = (function (){var statearr_22220 = state_22216;
(statearr_22220[(7)] = inst_22198__$1);

return statearr_22220;
})();
if(cljs.core.truth_(inst_22199)){
var statearr_22221_22244 = state_22216__$1;
(statearr_22221_22244[(1)] = (5));

} else {
var statearr_22222_22245 = state_22216__$1;
(statearr_22222_22245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (6))){
var inst_22198 = (state_22216[(7)]);
var inst_22203 = p.call(null,inst_22198);
var state_22216__$1 = state_22216;
if(cljs.core.truth_(inst_22203)){
var statearr_22223_22246 = state_22216__$1;
(statearr_22223_22246[(1)] = (8));

} else {
var statearr_22224_22247 = state_22216__$1;
(statearr_22224_22247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (3))){
var inst_22214 = (state_22216[(2)]);
var state_22216__$1 = state_22216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22216__$1,inst_22214);
} else {
if((state_val_22217 === (2))){
var state_22216__$1 = state_22216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22216__$1,(4),ch);
} else {
if((state_val_22217 === (11))){
var inst_22206 = (state_22216[(2)]);
var state_22216__$1 = state_22216;
var statearr_22225_22248 = state_22216__$1;
(statearr_22225_22248[(2)] = inst_22206);

(statearr_22225_22248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (9))){
var state_22216__$1 = state_22216;
var statearr_22226_22249 = state_22216__$1;
(statearr_22226_22249[(2)] = null);

(statearr_22226_22249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (5))){
var inst_22201 = cljs.core.async.close_BANG_.call(null,out);
var state_22216__$1 = state_22216;
var statearr_22227_22250 = state_22216__$1;
(statearr_22227_22250[(2)] = inst_22201);

(statearr_22227_22250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (10))){
var inst_22209 = (state_22216[(2)]);
var state_22216__$1 = (function (){var statearr_22228 = state_22216;
(statearr_22228[(8)] = inst_22209);

return statearr_22228;
})();
var statearr_22229_22251 = state_22216__$1;
(statearr_22229_22251[(2)] = null);

(statearr_22229_22251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22217 === (8))){
var inst_22198 = (state_22216[(7)]);
var state_22216__$1 = state_22216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22216__$1,(11),out,inst_22198);
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
});})(c__19991__auto___22241,out))
;
return ((function (switch__19879__auto__,c__19991__auto___22241,out){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_22233 = [null,null,null,null,null,null,null,null,null];
(statearr_22233[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_22233[(1)] = (1));

return statearr_22233;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_22216){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_22216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e22234){if((e22234 instanceof Object)){
var ex__19883__auto__ = e22234;
var statearr_22235_22252 = state_22216;
(statearr_22235_22252[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22253 = state_22216;
state_22216 = G__22253;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_22216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_22216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___22241,out))
})();
var state__19993__auto__ = (function (){var statearr_22236 = f__19992__auto__.call(null);
(statearr_22236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___22241);

return statearr_22236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___22241,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22254 = [];
var len__18200__auto___22257 = arguments.length;
var i__18201__auto___22258 = (0);
while(true){
if((i__18201__auto___22258 < len__18200__auto___22257)){
args22254.push((arguments[i__18201__auto___22258]));

var G__22259 = (i__18201__auto___22258 + (1));
i__18201__auto___22258 = G__22259;
continue;
} else {
}
break;
}

var G__22256 = args22254.length;
switch (G__22256) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22254.length)].join('')));

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
var c__19991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto__){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto__){
return (function (state_22426){
var state_val_22427 = (state_22426[(1)]);
if((state_val_22427 === (7))){
var inst_22422 = (state_22426[(2)]);
var state_22426__$1 = state_22426;
var statearr_22428_22469 = state_22426__$1;
(statearr_22428_22469[(2)] = inst_22422);

(statearr_22428_22469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (20))){
var inst_22392 = (state_22426[(7)]);
var inst_22403 = (state_22426[(2)]);
var inst_22404 = cljs.core.next.call(null,inst_22392);
var inst_22378 = inst_22404;
var inst_22379 = null;
var inst_22380 = (0);
var inst_22381 = (0);
var state_22426__$1 = (function (){var statearr_22429 = state_22426;
(statearr_22429[(8)] = inst_22380);

(statearr_22429[(9)] = inst_22403);

(statearr_22429[(10)] = inst_22381);

(statearr_22429[(11)] = inst_22379);

(statearr_22429[(12)] = inst_22378);

return statearr_22429;
})();
var statearr_22430_22470 = state_22426__$1;
(statearr_22430_22470[(2)] = null);

(statearr_22430_22470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (1))){
var state_22426__$1 = state_22426;
var statearr_22431_22471 = state_22426__$1;
(statearr_22431_22471[(2)] = null);

(statearr_22431_22471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (4))){
var inst_22367 = (state_22426[(13)]);
var inst_22367__$1 = (state_22426[(2)]);
var inst_22368 = (inst_22367__$1 == null);
var state_22426__$1 = (function (){var statearr_22432 = state_22426;
(statearr_22432[(13)] = inst_22367__$1);

return statearr_22432;
})();
if(cljs.core.truth_(inst_22368)){
var statearr_22433_22472 = state_22426__$1;
(statearr_22433_22472[(1)] = (5));

} else {
var statearr_22434_22473 = state_22426__$1;
(statearr_22434_22473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (15))){
var state_22426__$1 = state_22426;
var statearr_22438_22474 = state_22426__$1;
(statearr_22438_22474[(2)] = null);

(statearr_22438_22474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (21))){
var state_22426__$1 = state_22426;
var statearr_22439_22475 = state_22426__$1;
(statearr_22439_22475[(2)] = null);

(statearr_22439_22475[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (13))){
var inst_22380 = (state_22426[(8)]);
var inst_22381 = (state_22426[(10)]);
var inst_22379 = (state_22426[(11)]);
var inst_22378 = (state_22426[(12)]);
var inst_22388 = (state_22426[(2)]);
var inst_22389 = (inst_22381 + (1));
var tmp22435 = inst_22380;
var tmp22436 = inst_22379;
var tmp22437 = inst_22378;
var inst_22378__$1 = tmp22437;
var inst_22379__$1 = tmp22436;
var inst_22380__$1 = tmp22435;
var inst_22381__$1 = inst_22389;
var state_22426__$1 = (function (){var statearr_22440 = state_22426;
(statearr_22440[(8)] = inst_22380__$1);

(statearr_22440[(10)] = inst_22381__$1);

(statearr_22440[(14)] = inst_22388);

(statearr_22440[(11)] = inst_22379__$1);

(statearr_22440[(12)] = inst_22378__$1);

return statearr_22440;
})();
var statearr_22441_22476 = state_22426__$1;
(statearr_22441_22476[(2)] = null);

(statearr_22441_22476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (22))){
var state_22426__$1 = state_22426;
var statearr_22442_22477 = state_22426__$1;
(statearr_22442_22477[(2)] = null);

(statearr_22442_22477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (6))){
var inst_22367 = (state_22426[(13)]);
var inst_22376 = f.call(null,inst_22367);
var inst_22377 = cljs.core.seq.call(null,inst_22376);
var inst_22378 = inst_22377;
var inst_22379 = null;
var inst_22380 = (0);
var inst_22381 = (0);
var state_22426__$1 = (function (){var statearr_22443 = state_22426;
(statearr_22443[(8)] = inst_22380);

(statearr_22443[(10)] = inst_22381);

(statearr_22443[(11)] = inst_22379);

(statearr_22443[(12)] = inst_22378);

return statearr_22443;
})();
var statearr_22444_22478 = state_22426__$1;
(statearr_22444_22478[(2)] = null);

(statearr_22444_22478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (17))){
var inst_22392 = (state_22426[(7)]);
var inst_22396 = cljs.core.chunk_first.call(null,inst_22392);
var inst_22397 = cljs.core.chunk_rest.call(null,inst_22392);
var inst_22398 = cljs.core.count.call(null,inst_22396);
var inst_22378 = inst_22397;
var inst_22379 = inst_22396;
var inst_22380 = inst_22398;
var inst_22381 = (0);
var state_22426__$1 = (function (){var statearr_22445 = state_22426;
(statearr_22445[(8)] = inst_22380);

(statearr_22445[(10)] = inst_22381);

(statearr_22445[(11)] = inst_22379);

(statearr_22445[(12)] = inst_22378);

return statearr_22445;
})();
var statearr_22446_22479 = state_22426__$1;
(statearr_22446_22479[(2)] = null);

(statearr_22446_22479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (3))){
var inst_22424 = (state_22426[(2)]);
var state_22426__$1 = state_22426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22426__$1,inst_22424);
} else {
if((state_val_22427 === (12))){
var inst_22412 = (state_22426[(2)]);
var state_22426__$1 = state_22426;
var statearr_22447_22480 = state_22426__$1;
(statearr_22447_22480[(2)] = inst_22412);

(statearr_22447_22480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (2))){
var state_22426__$1 = state_22426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22426__$1,(4),in$);
} else {
if((state_val_22427 === (23))){
var inst_22420 = (state_22426[(2)]);
var state_22426__$1 = state_22426;
var statearr_22448_22481 = state_22426__$1;
(statearr_22448_22481[(2)] = inst_22420);

(statearr_22448_22481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (19))){
var inst_22407 = (state_22426[(2)]);
var state_22426__$1 = state_22426;
var statearr_22449_22482 = state_22426__$1;
(statearr_22449_22482[(2)] = inst_22407);

(statearr_22449_22482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (11))){
var inst_22392 = (state_22426[(7)]);
var inst_22378 = (state_22426[(12)]);
var inst_22392__$1 = cljs.core.seq.call(null,inst_22378);
var state_22426__$1 = (function (){var statearr_22450 = state_22426;
(statearr_22450[(7)] = inst_22392__$1);

return statearr_22450;
})();
if(inst_22392__$1){
var statearr_22451_22483 = state_22426__$1;
(statearr_22451_22483[(1)] = (14));

} else {
var statearr_22452_22484 = state_22426__$1;
(statearr_22452_22484[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (9))){
var inst_22414 = (state_22426[(2)]);
var inst_22415 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22426__$1 = (function (){var statearr_22453 = state_22426;
(statearr_22453[(15)] = inst_22414);

return statearr_22453;
})();
if(cljs.core.truth_(inst_22415)){
var statearr_22454_22485 = state_22426__$1;
(statearr_22454_22485[(1)] = (21));

} else {
var statearr_22455_22486 = state_22426__$1;
(statearr_22455_22486[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (5))){
var inst_22370 = cljs.core.async.close_BANG_.call(null,out);
var state_22426__$1 = state_22426;
var statearr_22456_22487 = state_22426__$1;
(statearr_22456_22487[(2)] = inst_22370);

(statearr_22456_22487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (14))){
var inst_22392 = (state_22426[(7)]);
var inst_22394 = cljs.core.chunked_seq_QMARK_.call(null,inst_22392);
var state_22426__$1 = state_22426;
if(inst_22394){
var statearr_22457_22488 = state_22426__$1;
(statearr_22457_22488[(1)] = (17));

} else {
var statearr_22458_22489 = state_22426__$1;
(statearr_22458_22489[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (16))){
var inst_22410 = (state_22426[(2)]);
var state_22426__$1 = state_22426;
var statearr_22459_22490 = state_22426__$1;
(statearr_22459_22490[(2)] = inst_22410);

(statearr_22459_22490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22427 === (10))){
var inst_22381 = (state_22426[(10)]);
var inst_22379 = (state_22426[(11)]);
var inst_22386 = cljs.core._nth.call(null,inst_22379,inst_22381);
var state_22426__$1 = state_22426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22426__$1,(13),out,inst_22386);
} else {
if((state_val_22427 === (18))){
var inst_22392 = (state_22426[(7)]);
var inst_22401 = cljs.core.first.call(null,inst_22392);
var state_22426__$1 = state_22426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22426__$1,(20),out,inst_22401);
} else {
if((state_val_22427 === (8))){
var inst_22380 = (state_22426[(8)]);
var inst_22381 = (state_22426[(10)]);
var inst_22383 = (inst_22381 < inst_22380);
var inst_22384 = inst_22383;
var state_22426__$1 = state_22426;
if(cljs.core.truth_(inst_22384)){
var statearr_22460_22491 = state_22426__$1;
(statearr_22460_22491[(1)] = (10));

} else {
var statearr_22461_22492 = state_22426__$1;
(statearr_22461_22492[(1)] = (11));

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
});})(c__19991__auto__))
;
return ((function (switch__19879__auto__,c__19991__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19880__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19880__auto____0 = (function (){
var statearr_22465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22465[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19880__auto__);

(statearr_22465[(1)] = (1));

return statearr_22465;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19880__auto____1 = (function (state_22426){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_22426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e22466){if((e22466 instanceof Object)){
var ex__19883__auto__ = e22466;
var statearr_22467_22493 = state_22426;
(statearr_22467_22493[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22494 = state_22426;
state_22426 = G__22494;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19880__auto__ = function(state_22426){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19880__auto____1.call(this,state_22426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19880__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19880__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto__))
})();
var state__19993__auto__ = (function (){var statearr_22468 = f__19992__auto__.call(null);
(statearr_22468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto__);

return statearr_22468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto__))
);

return c__19991__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22495 = [];
var len__18200__auto___22498 = arguments.length;
var i__18201__auto___22499 = (0);
while(true){
if((i__18201__auto___22499 < len__18200__auto___22498)){
args22495.push((arguments[i__18201__auto___22499]));

var G__22500 = (i__18201__auto___22499 + (1));
i__18201__auto___22499 = G__22500;
continue;
} else {
}
break;
}

var G__22497 = args22495.length;
switch (G__22497) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22495.length)].join('')));

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
var args22502 = [];
var len__18200__auto___22505 = arguments.length;
var i__18201__auto___22506 = (0);
while(true){
if((i__18201__auto___22506 < len__18200__auto___22505)){
args22502.push((arguments[i__18201__auto___22506]));

var G__22507 = (i__18201__auto___22506 + (1));
i__18201__auto___22506 = G__22507;
continue;
} else {
}
break;
}

var G__22504 = args22502.length;
switch (G__22504) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22502.length)].join('')));

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
var args22509 = [];
var len__18200__auto___22560 = arguments.length;
var i__18201__auto___22561 = (0);
while(true){
if((i__18201__auto___22561 < len__18200__auto___22560)){
args22509.push((arguments[i__18201__auto___22561]));

var G__22562 = (i__18201__auto___22561 + (1));
i__18201__auto___22561 = G__22562;
continue;
} else {
}
break;
}

var G__22511 = args22509.length;
switch (G__22511) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22509.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19991__auto___22564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___22564,out){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___22564,out){
return (function (state_22535){
var state_val_22536 = (state_22535[(1)]);
if((state_val_22536 === (7))){
var inst_22530 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22537_22565 = state_22535__$1;
(statearr_22537_22565[(2)] = inst_22530);

(statearr_22537_22565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (1))){
var inst_22512 = null;
var state_22535__$1 = (function (){var statearr_22538 = state_22535;
(statearr_22538[(7)] = inst_22512);

return statearr_22538;
})();
var statearr_22539_22566 = state_22535__$1;
(statearr_22539_22566[(2)] = null);

(statearr_22539_22566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (4))){
var inst_22515 = (state_22535[(8)]);
var inst_22515__$1 = (state_22535[(2)]);
var inst_22516 = (inst_22515__$1 == null);
var inst_22517 = cljs.core.not.call(null,inst_22516);
var state_22535__$1 = (function (){var statearr_22540 = state_22535;
(statearr_22540[(8)] = inst_22515__$1);

return statearr_22540;
})();
if(inst_22517){
var statearr_22541_22567 = state_22535__$1;
(statearr_22541_22567[(1)] = (5));

} else {
var statearr_22542_22568 = state_22535__$1;
(statearr_22542_22568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (6))){
var state_22535__$1 = state_22535;
var statearr_22543_22569 = state_22535__$1;
(statearr_22543_22569[(2)] = null);

(statearr_22543_22569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (3))){
var inst_22532 = (state_22535[(2)]);
var inst_22533 = cljs.core.async.close_BANG_.call(null,out);
var state_22535__$1 = (function (){var statearr_22544 = state_22535;
(statearr_22544[(9)] = inst_22532);

return statearr_22544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22535__$1,inst_22533);
} else {
if((state_val_22536 === (2))){
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22535__$1,(4),ch);
} else {
if((state_val_22536 === (11))){
var inst_22515 = (state_22535[(8)]);
var inst_22524 = (state_22535[(2)]);
var inst_22512 = inst_22515;
var state_22535__$1 = (function (){var statearr_22545 = state_22535;
(statearr_22545[(7)] = inst_22512);

(statearr_22545[(10)] = inst_22524);

return statearr_22545;
})();
var statearr_22546_22570 = state_22535__$1;
(statearr_22546_22570[(2)] = null);

(statearr_22546_22570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (9))){
var inst_22515 = (state_22535[(8)]);
var state_22535__$1 = state_22535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22535__$1,(11),out,inst_22515);
} else {
if((state_val_22536 === (5))){
var inst_22512 = (state_22535[(7)]);
var inst_22515 = (state_22535[(8)]);
var inst_22519 = cljs.core._EQ_.call(null,inst_22515,inst_22512);
var state_22535__$1 = state_22535;
if(inst_22519){
var statearr_22548_22571 = state_22535__$1;
(statearr_22548_22571[(1)] = (8));

} else {
var statearr_22549_22572 = state_22535__$1;
(statearr_22549_22572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (10))){
var inst_22527 = (state_22535[(2)]);
var state_22535__$1 = state_22535;
var statearr_22550_22573 = state_22535__$1;
(statearr_22550_22573[(2)] = inst_22527);

(statearr_22550_22573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22536 === (8))){
var inst_22512 = (state_22535[(7)]);
var tmp22547 = inst_22512;
var inst_22512__$1 = tmp22547;
var state_22535__$1 = (function (){var statearr_22551 = state_22535;
(statearr_22551[(7)] = inst_22512__$1);

return statearr_22551;
})();
var statearr_22552_22574 = state_22535__$1;
(statearr_22552_22574[(2)] = null);

(statearr_22552_22574[(1)] = (2));


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
});})(c__19991__auto___22564,out))
;
return ((function (switch__19879__auto__,c__19991__auto___22564,out){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_22556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22556[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_22556[(1)] = (1));

return statearr_22556;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_22535){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_22535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e22557){if((e22557 instanceof Object)){
var ex__19883__auto__ = e22557;
var statearr_22558_22575 = state_22535;
(statearr_22558_22575[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22576 = state_22535;
state_22535 = G__22576;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_22535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_22535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___22564,out))
})();
var state__19993__auto__ = (function (){var statearr_22559 = f__19992__auto__.call(null);
(statearr_22559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___22564);

return statearr_22559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___22564,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22577 = [];
var len__18200__auto___22647 = arguments.length;
var i__18201__auto___22648 = (0);
while(true){
if((i__18201__auto___22648 < len__18200__auto___22647)){
args22577.push((arguments[i__18201__auto___22648]));

var G__22649 = (i__18201__auto___22648 + (1));
i__18201__auto___22648 = G__22649;
continue;
} else {
}
break;
}

var G__22579 = args22577.length;
switch (G__22579) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22577.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19991__auto___22651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___22651,out){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___22651,out){
return (function (state_22617){
var state_val_22618 = (state_22617[(1)]);
if((state_val_22618 === (7))){
var inst_22613 = (state_22617[(2)]);
var state_22617__$1 = state_22617;
var statearr_22619_22652 = state_22617__$1;
(statearr_22619_22652[(2)] = inst_22613);

(statearr_22619_22652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (1))){
var inst_22580 = (new Array(n));
var inst_22581 = inst_22580;
var inst_22582 = (0);
var state_22617__$1 = (function (){var statearr_22620 = state_22617;
(statearr_22620[(7)] = inst_22582);

(statearr_22620[(8)] = inst_22581);

return statearr_22620;
})();
var statearr_22621_22653 = state_22617__$1;
(statearr_22621_22653[(2)] = null);

(statearr_22621_22653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (4))){
var inst_22585 = (state_22617[(9)]);
var inst_22585__$1 = (state_22617[(2)]);
var inst_22586 = (inst_22585__$1 == null);
var inst_22587 = cljs.core.not.call(null,inst_22586);
var state_22617__$1 = (function (){var statearr_22622 = state_22617;
(statearr_22622[(9)] = inst_22585__$1);

return statearr_22622;
})();
if(inst_22587){
var statearr_22623_22654 = state_22617__$1;
(statearr_22623_22654[(1)] = (5));

} else {
var statearr_22624_22655 = state_22617__$1;
(statearr_22624_22655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (15))){
var inst_22607 = (state_22617[(2)]);
var state_22617__$1 = state_22617;
var statearr_22625_22656 = state_22617__$1;
(statearr_22625_22656[(2)] = inst_22607);

(statearr_22625_22656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (13))){
var state_22617__$1 = state_22617;
var statearr_22626_22657 = state_22617__$1;
(statearr_22626_22657[(2)] = null);

(statearr_22626_22657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (6))){
var inst_22582 = (state_22617[(7)]);
var inst_22603 = (inst_22582 > (0));
var state_22617__$1 = state_22617;
if(cljs.core.truth_(inst_22603)){
var statearr_22627_22658 = state_22617__$1;
(statearr_22627_22658[(1)] = (12));

} else {
var statearr_22628_22659 = state_22617__$1;
(statearr_22628_22659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (3))){
var inst_22615 = (state_22617[(2)]);
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22617__$1,inst_22615);
} else {
if((state_val_22618 === (12))){
var inst_22581 = (state_22617[(8)]);
var inst_22605 = cljs.core.vec.call(null,inst_22581);
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22617__$1,(15),out,inst_22605);
} else {
if((state_val_22618 === (2))){
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22617__$1,(4),ch);
} else {
if((state_val_22618 === (11))){
var inst_22597 = (state_22617[(2)]);
var inst_22598 = (new Array(n));
var inst_22581 = inst_22598;
var inst_22582 = (0);
var state_22617__$1 = (function (){var statearr_22629 = state_22617;
(statearr_22629[(7)] = inst_22582);

(statearr_22629[(10)] = inst_22597);

(statearr_22629[(8)] = inst_22581);

return statearr_22629;
})();
var statearr_22630_22660 = state_22617__$1;
(statearr_22630_22660[(2)] = null);

(statearr_22630_22660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (9))){
var inst_22581 = (state_22617[(8)]);
var inst_22595 = cljs.core.vec.call(null,inst_22581);
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22617__$1,(11),out,inst_22595);
} else {
if((state_val_22618 === (5))){
var inst_22590 = (state_22617[(11)]);
var inst_22582 = (state_22617[(7)]);
var inst_22585 = (state_22617[(9)]);
var inst_22581 = (state_22617[(8)]);
var inst_22589 = (inst_22581[inst_22582] = inst_22585);
var inst_22590__$1 = (inst_22582 + (1));
var inst_22591 = (inst_22590__$1 < n);
var state_22617__$1 = (function (){var statearr_22631 = state_22617;
(statearr_22631[(11)] = inst_22590__$1);

(statearr_22631[(12)] = inst_22589);

return statearr_22631;
})();
if(cljs.core.truth_(inst_22591)){
var statearr_22632_22661 = state_22617__$1;
(statearr_22632_22661[(1)] = (8));

} else {
var statearr_22633_22662 = state_22617__$1;
(statearr_22633_22662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (14))){
var inst_22610 = (state_22617[(2)]);
var inst_22611 = cljs.core.async.close_BANG_.call(null,out);
var state_22617__$1 = (function (){var statearr_22635 = state_22617;
(statearr_22635[(13)] = inst_22610);

return statearr_22635;
})();
var statearr_22636_22663 = state_22617__$1;
(statearr_22636_22663[(2)] = inst_22611);

(statearr_22636_22663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (10))){
var inst_22601 = (state_22617[(2)]);
var state_22617__$1 = state_22617;
var statearr_22637_22664 = state_22617__$1;
(statearr_22637_22664[(2)] = inst_22601);

(statearr_22637_22664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (8))){
var inst_22590 = (state_22617[(11)]);
var inst_22581 = (state_22617[(8)]);
var tmp22634 = inst_22581;
var inst_22581__$1 = tmp22634;
var inst_22582 = inst_22590;
var state_22617__$1 = (function (){var statearr_22638 = state_22617;
(statearr_22638[(7)] = inst_22582);

(statearr_22638[(8)] = inst_22581__$1);

return statearr_22638;
})();
var statearr_22639_22665 = state_22617__$1;
(statearr_22639_22665[(2)] = null);

(statearr_22639_22665[(1)] = (2));


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
});})(c__19991__auto___22651,out))
;
return ((function (switch__19879__auto__,c__19991__auto___22651,out){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_22643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22643[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_22643[(1)] = (1));

return statearr_22643;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_22617){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_22617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e22644){if((e22644 instanceof Object)){
var ex__19883__auto__ = e22644;
var statearr_22645_22666 = state_22617;
(statearr_22645_22666[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22667 = state_22617;
state_22617 = G__22667;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_22617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_22617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___22651,out))
})();
var state__19993__auto__ = (function (){var statearr_22646 = f__19992__auto__.call(null);
(statearr_22646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___22651);

return statearr_22646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___22651,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22668 = [];
var len__18200__auto___22742 = arguments.length;
var i__18201__auto___22743 = (0);
while(true){
if((i__18201__auto___22743 < len__18200__auto___22742)){
args22668.push((arguments[i__18201__auto___22743]));

var G__22744 = (i__18201__auto___22743 + (1));
i__18201__auto___22743 = G__22744;
continue;
} else {
}
break;
}

var G__22670 = args22668.length;
switch (G__22670) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22668.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19991__auto___22746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___22746,out){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___22746,out){
return (function (state_22712){
var state_val_22713 = (state_22712[(1)]);
if((state_val_22713 === (7))){
var inst_22708 = (state_22712[(2)]);
var state_22712__$1 = state_22712;
var statearr_22714_22747 = state_22712__$1;
(statearr_22714_22747[(2)] = inst_22708);

(statearr_22714_22747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (1))){
var inst_22671 = [];
var inst_22672 = inst_22671;
var inst_22673 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22712__$1 = (function (){var statearr_22715 = state_22712;
(statearr_22715[(7)] = inst_22672);

(statearr_22715[(8)] = inst_22673);

return statearr_22715;
})();
var statearr_22716_22748 = state_22712__$1;
(statearr_22716_22748[(2)] = null);

(statearr_22716_22748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (4))){
var inst_22676 = (state_22712[(9)]);
var inst_22676__$1 = (state_22712[(2)]);
var inst_22677 = (inst_22676__$1 == null);
var inst_22678 = cljs.core.not.call(null,inst_22677);
var state_22712__$1 = (function (){var statearr_22717 = state_22712;
(statearr_22717[(9)] = inst_22676__$1);

return statearr_22717;
})();
if(inst_22678){
var statearr_22718_22749 = state_22712__$1;
(statearr_22718_22749[(1)] = (5));

} else {
var statearr_22719_22750 = state_22712__$1;
(statearr_22719_22750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (15))){
var inst_22702 = (state_22712[(2)]);
var state_22712__$1 = state_22712;
var statearr_22720_22751 = state_22712__$1;
(statearr_22720_22751[(2)] = inst_22702);

(statearr_22720_22751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (13))){
var state_22712__$1 = state_22712;
var statearr_22721_22752 = state_22712__$1;
(statearr_22721_22752[(2)] = null);

(statearr_22721_22752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (6))){
var inst_22672 = (state_22712[(7)]);
var inst_22697 = inst_22672.length;
var inst_22698 = (inst_22697 > (0));
var state_22712__$1 = state_22712;
if(cljs.core.truth_(inst_22698)){
var statearr_22722_22753 = state_22712__$1;
(statearr_22722_22753[(1)] = (12));

} else {
var statearr_22723_22754 = state_22712__$1;
(statearr_22723_22754[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (3))){
var inst_22710 = (state_22712[(2)]);
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22712__$1,inst_22710);
} else {
if((state_val_22713 === (12))){
var inst_22672 = (state_22712[(7)]);
var inst_22700 = cljs.core.vec.call(null,inst_22672);
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22712__$1,(15),out,inst_22700);
} else {
if((state_val_22713 === (2))){
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22712__$1,(4),ch);
} else {
if((state_val_22713 === (11))){
var inst_22680 = (state_22712[(10)]);
var inst_22676 = (state_22712[(9)]);
var inst_22690 = (state_22712[(2)]);
var inst_22691 = [];
var inst_22692 = inst_22691.push(inst_22676);
var inst_22672 = inst_22691;
var inst_22673 = inst_22680;
var state_22712__$1 = (function (){var statearr_22724 = state_22712;
(statearr_22724[(7)] = inst_22672);

(statearr_22724[(11)] = inst_22692);

(statearr_22724[(8)] = inst_22673);

(statearr_22724[(12)] = inst_22690);

return statearr_22724;
})();
var statearr_22725_22755 = state_22712__$1;
(statearr_22725_22755[(2)] = null);

(statearr_22725_22755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (9))){
var inst_22672 = (state_22712[(7)]);
var inst_22688 = cljs.core.vec.call(null,inst_22672);
var state_22712__$1 = state_22712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22712__$1,(11),out,inst_22688);
} else {
if((state_val_22713 === (5))){
var inst_22680 = (state_22712[(10)]);
var inst_22673 = (state_22712[(8)]);
var inst_22676 = (state_22712[(9)]);
var inst_22680__$1 = f.call(null,inst_22676);
var inst_22681 = cljs.core._EQ_.call(null,inst_22680__$1,inst_22673);
var inst_22682 = cljs.core.keyword_identical_QMARK_.call(null,inst_22673,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22683 = (inst_22681) || (inst_22682);
var state_22712__$1 = (function (){var statearr_22726 = state_22712;
(statearr_22726[(10)] = inst_22680__$1);

return statearr_22726;
})();
if(cljs.core.truth_(inst_22683)){
var statearr_22727_22756 = state_22712__$1;
(statearr_22727_22756[(1)] = (8));

} else {
var statearr_22728_22757 = state_22712__$1;
(statearr_22728_22757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (14))){
var inst_22705 = (state_22712[(2)]);
var inst_22706 = cljs.core.async.close_BANG_.call(null,out);
var state_22712__$1 = (function (){var statearr_22730 = state_22712;
(statearr_22730[(13)] = inst_22705);

return statearr_22730;
})();
var statearr_22731_22758 = state_22712__$1;
(statearr_22731_22758[(2)] = inst_22706);

(statearr_22731_22758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (10))){
var inst_22695 = (state_22712[(2)]);
var state_22712__$1 = state_22712;
var statearr_22732_22759 = state_22712__$1;
(statearr_22732_22759[(2)] = inst_22695);

(statearr_22732_22759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22713 === (8))){
var inst_22672 = (state_22712[(7)]);
var inst_22680 = (state_22712[(10)]);
var inst_22676 = (state_22712[(9)]);
var inst_22685 = inst_22672.push(inst_22676);
var tmp22729 = inst_22672;
var inst_22672__$1 = tmp22729;
var inst_22673 = inst_22680;
var state_22712__$1 = (function (){var statearr_22733 = state_22712;
(statearr_22733[(7)] = inst_22672__$1);

(statearr_22733[(8)] = inst_22673);

(statearr_22733[(14)] = inst_22685);

return statearr_22733;
})();
var statearr_22734_22760 = state_22712__$1;
(statearr_22734_22760[(2)] = null);

(statearr_22734_22760[(1)] = (2));


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
});})(c__19991__auto___22746,out))
;
return ((function (switch__19879__auto__,c__19991__auto___22746,out){
return (function() {
var cljs$core$async$state_machine__19880__auto__ = null;
var cljs$core$async$state_machine__19880__auto____0 = (function (){
var statearr_22738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22738[(0)] = cljs$core$async$state_machine__19880__auto__);

(statearr_22738[(1)] = (1));

return statearr_22738;
});
var cljs$core$async$state_machine__19880__auto____1 = (function (state_22712){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_22712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e22739){if((e22739 instanceof Object)){
var ex__19883__auto__ = e22739;
var statearr_22740_22761 = state_22712;
(statearr_22740_22761[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22762 = state_22712;
state_22712 = G__22762;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
cljs$core$async$state_machine__19880__auto__ = function(state_22712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19880__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19880__auto____1.call(this,state_22712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19880__auto____0;
cljs$core$async$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19880__auto____1;
return cljs$core$async$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___22746,out))
})();
var state__19993__auto__ = (function (){var statearr_22741 = f__19992__auto__.call(null);
(statearr_22741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___22746);

return statearr_22741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___22746,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map