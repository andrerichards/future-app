// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24267 = cljs.core._EQ_;
var expr__24268 = (function (){var or__17142__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24267.call(null,"true",expr__24268))){
return true;
} else {
if(cljs.core.truth_(pred__24267.call(null,"false",expr__24268))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24268)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__18207__auto__ = [];
var len__18200__auto___24271 = arguments.length;
var i__18201__auto___24272 = (0);
while(true){
if((i__18201__auto___24272 < len__18200__auto___24271)){
args__18207__auto__.push((arguments[i__18201__auto___24272]));

var G__24273 = (i__18201__auto___24272 + (1));
i__18201__auto___24272 = G__24273;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((0) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__18208__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24270){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24270));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24274){
var map__24277 = p__24274;
var map__24277__$1 = ((((!((map__24277 == null)))?((((map__24277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24277):map__24277);
var message = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17142__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17130__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17130__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17130__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19991__auto___24439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___24439,ch){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___24439,ch){
return (function (state_24408){
var state_val_24409 = (state_24408[(1)]);
if((state_val_24409 === (7))){
var inst_24404 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24410_24440 = state_24408__$1;
(statearr_24410_24440[(2)] = inst_24404);

(statearr_24410_24440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (1))){
var state_24408__$1 = state_24408;
var statearr_24411_24441 = state_24408__$1;
(statearr_24411_24441[(2)] = null);

(statearr_24411_24441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (4))){
var inst_24361 = (state_24408[(7)]);
var inst_24361__$1 = (state_24408[(2)]);
var state_24408__$1 = (function (){var statearr_24412 = state_24408;
(statearr_24412[(7)] = inst_24361__$1);

return statearr_24412;
})();
if(cljs.core.truth_(inst_24361__$1)){
var statearr_24413_24442 = state_24408__$1;
(statearr_24413_24442[(1)] = (5));

} else {
var statearr_24414_24443 = state_24408__$1;
(statearr_24414_24443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (15))){
var inst_24368 = (state_24408[(8)]);
var inst_24383 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24368);
var inst_24384 = cljs.core.first.call(null,inst_24383);
var inst_24385 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24384);
var inst_24386 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24385)].join('');
var inst_24387 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24386);
var state_24408__$1 = state_24408;
var statearr_24415_24444 = state_24408__$1;
(statearr_24415_24444[(2)] = inst_24387);

(statearr_24415_24444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (13))){
var inst_24392 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24416_24445 = state_24408__$1;
(statearr_24416_24445[(2)] = inst_24392);

(statearr_24416_24445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (6))){
var state_24408__$1 = state_24408;
var statearr_24417_24446 = state_24408__$1;
(statearr_24417_24446[(2)] = null);

(statearr_24417_24446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (17))){
var inst_24390 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24418_24447 = state_24408__$1;
(statearr_24418_24447[(2)] = inst_24390);

(statearr_24418_24447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (3))){
var inst_24406 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24408__$1,inst_24406);
} else {
if((state_val_24409 === (12))){
var inst_24367 = (state_24408[(9)]);
var inst_24381 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24367,opts);
var state_24408__$1 = state_24408;
if(cljs.core.truth_(inst_24381)){
var statearr_24419_24448 = state_24408__$1;
(statearr_24419_24448[(1)] = (15));

} else {
var statearr_24420_24449 = state_24408__$1;
(statearr_24420_24449[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (2))){
var state_24408__$1 = state_24408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24408__$1,(4),ch);
} else {
if((state_val_24409 === (11))){
var inst_24368 = (state_24408[(8)]);
var inst_24373 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24374 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24368);
var inst_24375 = cljs.core.async.timeout.call(null,(1000));
var inst_24376 = [inst_24374,inst_24375];
var inst_24377 = (new cljs.core.PersistentVector(null,2,(5),inst_24373,inst_24376,null));
var state_24408__$1 = state_24408;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24408__$1,(14),inst_24377);
} else {
if((state_val_24409 === (9))){
var inst_24368 = (state_24408[(8)]);
var inst_24394 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24395 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24368);
var inst_24396 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24395);
var inst_24397 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24396)].join('');
var inst_24398 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24397);
var state_24408__$1 = (function (){var statearr_24421 = state_24408;
(statearr_24421[(10)] = inst_24394);

return statearr_24421;
})();
var statearr_24422_24450 = state_24408__$1;
(statearr_24422_24450[(2)] = inst_24398);

(statearr_24422_24450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (5))){
var inst_24361 = (state_24408[(7)]);
var inst_24363 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24364 = (new cljs.core.PersistentArrayMap(null,2,inst_24363,null));
var inst_24365 = (new cljs.core.PersistentHashSet(null,inst_24364,null));
var inst_24366 = figwheel.client.focus_msgs.call(null,inst_24365,inst_24361);
var inst_24367 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24366);
var inst_24368 = cljs.core.first.call(null,inst_24366);
var inst_24369 = figwheel.client.autoload_QMARK_.call(null);
var state_24408__$1 = (function (){var statearr_24423 = state_24408;
(statearr_24423[(9)] = inst_24367);

(statearr_24423[(8)] = inst_24368);

return statearr_24423;
})();
if(cljs.core.truth_(inst_24369)){
var statearr_24424_24451 = state_24408__$1;
(statearr_24424_24451[(1)] = (8));

} else {
var statearr_24425_24452 = state_24408__$1;
(statearr_24425_24452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (14))){
var inst_24379 = (state_24408[(2)]);
var state_24408__$1 = state_24408;
var statearr_24426_24453 = state_24408__$1;
(statearr_24426_24453[(2)] = inst_24379);

(statearr_24426_24453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (16))){
var state_24408__$1 = state_24408;
var statearr_24427_24454 = state_24408__$1;
(statearr_24427_24454[(2)] = null);

(statearr_24427_24454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (10))){
var inst_24400 = (state_24408[(2)]);
var state_24408__$1 = (function (){var statearr_24428 = state_24408;
(statearr_24428[(11)] = inst_24400);

return statearr_24428;
})();
var statearr_24429_24455 = state_24408__$1;
(statearr_24429_24455[(2)] = null);

(statearr_24429_24455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24409 === (8))){
var inst_24367 = (state_24408[(9)]);
var inst_24371 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24367,opts);
var state_24408__$1 = state_24408;
if(cljs.core.truth_(inst_24371)){
var statearr_24430_24456 = state_24408__$1;
(statearr_24430_24456[(1)] = (11));

} else {
var statearr_24431_24457 = state_24408__$1;
(statearr_24431_24457[(1)] = (12));

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
});})(c__19991__auto___24439,ch))
;
return ((function (switch__19879__auto__,c__19991__auto___24439,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19880__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19880__auto____0 = (function (){
var statearr_24435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24435[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19880__auto__);

(statearr_24435[(1)] = (1));

return statearr_24435;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19880__auto____1 = (function (state_24408){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_24408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e24436){if((e24436 instanceof Object)){
var ex__19883__auto__ = e24436;
var statearr_24437_24458 = state_24408;
(statearr_24437_24458[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24459 = state_24408;
state_24408 = G__24459;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19880__auto__ = function(state_24408){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19880__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19880__auto____1.call(this,state_24408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19880__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19880__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___24439,ch))
})();
var state__19993__auto__ = (function (){var statearr_24438 = f__19992__auto__.call(null);
(statearr_24438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___24439);

return statearr_24438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___24439,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24460_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24460_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24467 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24467){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24465 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24466 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24466;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24465;
}}catch (e24464){if((e24464 instanceof Error)){
var e = e24464;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24467], null));
} else {
var e = e24464;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24467))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24468){
var map__24475 = p__24468;
var map__24475__$1 = ((((!((map__24475 == null)))?((((map__24475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24475):map__24475);
var opts = map__24475__$1;
var build_id = cljs.core.get.call(null,map__24475__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24475,map__24475__$1,opts,build_id){
return (function (p__24477){
var vec__24478 = p__24477;
var map__24479 = cljs.core.nth.call(null,vec__24478,(0),null);
var map__24479__$1 = ((((!((map__24479 == null)))?((((map__24479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24479):map__24479);
var msg = map__24479__$1;
var msg_name = cljs.core.get.call(null,map__24479__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24478,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24478,map__24479,map__24479__$1,msg,msg_name,_,map__24475,map__24475__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24478,map__24479,map__24479__$1,msg,msg_name,_,map__24475,map__24475__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24475,map__24475__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24485){
var vec__24486 = p__24485;
var map__24487 = cljs.core.nth.call(null,vec__24486,(0),null);
var map__24487__$1 = ((((!((map__24487 == null)))?((((map__24487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24487):map__24487);
var msg = map__24487__$1;
var msg_name = cljs.core.get.call(null,map__24487__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24486,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24489){
var map__24499 = p__24489;
var map__24499__$1 = ((((!((map__24499 == null)))?((((map__24499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24499):map__24499);
var on_compile_warning = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24499,map__24499__$1,on_compile_warning,on_compile_fail){
return (function (p__24501){
var vec__24502 = p__24501;
var map__24503 = cljs.core.nth.call(null,vec__24502,(0),null);
var map__24503__$1 = ((((!((map__24503 == null)))?((((map__24503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24503):map__24503);
var msg = map__24503__$1;
var msg_name = cljs.core.get.call(null,map__24503__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24502,(1));
var pred__24505 = cljs.core._EQ_;
var expr__24506 = msg_name;
if(cljs.core.truth_(pred__24505.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24506))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24505.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24506))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24499,map__24499__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto__,msg_hist,msg_names,msg){
return (function (state_24722){
var state_val_24723 = (state_24722[(1)]);
if((state_val_24723 === (7))){
var inst_24646 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24646)){
var statearr_24724_24770 = state_24722__$1;
(statearr_24724_24770[(1)] = (8));

} else {
var statearr_24725_24771 = state_24722__$1;
(statearr_24725_24771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (20))){
var inst_24716 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24726_24772 = state_24722__$1;
(statearr_24726_24772[(2)] = inst_24716);

(statearr_24726_24772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (27))){
var inst_24712 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24727_24773 = state_24722__$1;
(statearr_24727_24773[(2)] = inst_24712);

(statearr_24727_24773[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (1))){
var inst_24639 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24639)){
var statearr_24728_24774 = state_24722__$1;
(statearr_24728_24774[(1)] = (2));

} else {
var statearr_24729_24775 = state_24722__$1;
(statearr_24729_24775[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (24))){
var inst_24714 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24730_24776 = state_24722__$1;
(statearr_24730_24776[(2)] = inst_24714);

(statearr_24730_24776[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (4))){
var inst_24720 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24722__$1,inst_24720);
} else {
if((state_val_24723 === (15))){
var inst_24718 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24731_24777 = state_24722__$1;
(statearr_24731_24777[(2)] = inst_24718);

(statearr_24731_24777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (21))){
var inst_24677 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24732_24778 = state_24722__$1;
(statearr_24732_24778[(2)] = inst_24677);

(statearr_24732_24778[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (31))){
var inst_24701 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24701)){
var statearr_24733_24779 = state_24722__$1;
(statearr_24733_24779[(1)] = (34));

} else {
var statearr_24734_24780 = state_24722__$1;
(statearr_24734_24780[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (32))){
var inst_24710 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24735_24781 = state_24722__$1;
(statearr_24735_24781[(2)] = inst_24710);

(statearr_24735_24781[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (33))){
var inst_24699 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24736_24782 = state_24722__$1;
(statearr_24736_24782[(2)] = inst_24699);

(statearr_24736_24782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (13))){
var inst_24660 = figwheel.client.heads_up.clear.call(null);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(16),inst_24660);
} else {
if((state_val_24723 === (22))){
var inst_24681 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24682 = figwheel.client.heads_up.append_message.call(null,inst_24681);
var state_24722__$1 = state_24722;
var statearr_24737_24783 = state_24722__$1;
(statearr_24737_24783[(2)] = inst_24682);

(statearr_24737_24783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (36))){
var inst_24708 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24738_24784 = state_24722__$1;
(statearr_24738_24784[(2)] = inst_24708);

(statearr_24738_24784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (29))){
var inst_24692 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24739_24785 = state_24722__$1;
(statearr_24739_24785[(2)] = inst_24692);

(statearr_24739_24785[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (6))){
var inst_24641 = (state_24722[(7)]);
var state_24722__$1 = state_24722;
var statearr_24740_24786 = state_24722__$1;
(statearr_24740_24786[(2)] = inst_24641);

(statearr_24740_24786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (28))){
var inst_24688 = (state_24722[(2)]);
var inst_24689 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24690 = figwheel.client.heads_up.display_warning.call(null,inst_24689);
var state_24722__$1 = (function (){var statearr_24741 = state_24722;
(statearr_24741[(8)] = inst_24688);

return statearr_24741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(29),inst_24690);
} else {
if((state_val_24723 === (25))){
var inst_24686 = figwheel.client.heads_up.clear.call(null);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(28),inst_24686);
} else {
if((state_val_24723 === (34))){
var inst_24703 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(37),inst_24703);
} else {
if((state_val_24723 === (17))){
var inst_24668 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24742_24787 = state_24722__$1;
(statearr_24742_24787[(2)] = inst_24668);

(statearr_24742_24787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (3))){
var inst_24658 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24658)){
var statearr_24743_24788 = state_24722__$1;
(statearr_24743_24788[(1)] = (13));

} else {
var statearr_24744_24789 = state_24722__$1;
(statearr_24744_24789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (12))){
var inst_24654 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24745_24790 = state_24722__$1;
(statearr_24745_24790[(2)] = inst_24654);

(statearr_24745_24790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (2))){
var inst_24641 = (state_24722[(7)]);
var inst_24641__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24722__$1 = (function (){var statearr_24746 = state_24722;
(statearr_24746[(7)] = inst_24641__$1);

return statearr_24746;
})();
if(cljs.core.truth_(inst_24641__$1)){
var statearr_24747_24791 = state_24722__$1;
(statearr_24747_24791[(1)] = (5));

} else {
var statearr_24748_24792 = state_24722__$1;
(statearr_24748_24792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (23))){
var inst_24684 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24684)){
var statearr_24749_24793 = state_24722__$1;
(statearr_24749_24793[(1)] = (25));

} else {
var statearr_24750_24794 = state_24722__$1;
(statearr_24750_24794[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (35))){
var state_24722__$1 = state_24722;
var statearr_24751_24795 = state_24722__$1;
(statearr_24751_24795[(2)] = null);

(statearr_24751_24795[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (19))){
var inst_24679 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24679)){
var statearr_24752_24796 = state_24722__$1;
(statearr_24752_24796[(1)] = (22));

} else {
var statearr_24753_24797 = state_24722__$1;
(statearr_24753_24797[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (11))){
var inst_24650 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24754_24798 = state_24722__$1;
(statearr_24754_24798[(2)] = inst_24650);

(statearr_24754_24798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (9))){
var inst_24652 = figwheel.client.heads_up.clear.call(null);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(12),inst_24652);
} else {
if((state_val_24723 === (5))){
var inst_24643 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24722__$1 = state_24722;
var statearr_24755_24799 = state_24722__$1;
(statearr_24755_24799[(2)] = inst_24643);

(statearr_24755_24799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (14))){
var inst_24670 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24670)){
var statearr_24756_24800 = state_24722__$1;
(statearr_24756_24800[(1)] = (18));

} else {
var statearr_24757_24801 = state_24722__$1;
(statearr_24757_24801[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (26))){
var inst_24694 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24722__$1 = state_24722;
if(cljs.core.truth_(inst_24694)){
var statearr_24758_24802 = state_24722__$1;
(statearr_24758_24802[(1)] = (30));

} else {
var statearr_24759_24803 = state_24722__$1;
(statearr_24759_24803[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (16))){
var inst_24662 = (state_24722[(2)]);
var inst_24663 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24664 = figwheel.client.format_messages.call(null,inst_24663);
var inst_24665 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24666 = figwheel.client.heads_up.display_error.call(null,inst_24664,inst_24665);
var state_24722__$1 = (function (){var statearr_24760 = state_24722;
(statearr_24760[(9)] = inst_24662);

return statearr_24760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(17),inst_24666);
} else {
if((state_val_24723 === (30))){
var inst_24696 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24697 = figwheel.client.heads_up.display_warning.call(null,inst_24696);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(33),inst_24697);
} else {
if((state_val_24723 === (10))){
var inst_24656 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24761_24804 = state_24722__$1;
(statearr_24761_24804[(2)] = inst_24656);

(statearr_24761_24804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (18))){
var inst_24672 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24673 = figwheel.client.format_messages.call(null,inst_24672);
var inst_24674 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24675 = figwheel.client.heads_up.display_error.call(null,inst_24673,inst_24674);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(21),inst_24675);
} else {
if((state_val_24723 === (37))){
var inst_24705 = (state_24722[(2)]);
var state_24722__$1 = state_24722;
var statearr_24762_24805 = state_24722__$1;
(statearr_24762_24805[(2)] = inst_24705);

(statearr_24762_24805[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24723 === (8))){
var inst_24648 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24722__$1 = state_24722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24722__$1,(11),inst_24648);
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
});})(c__19991__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19879__auto__,c__19991__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto____0 = (function (){
var statearr_24766 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24766[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto__);

(statearr_24766[(1)] = (1));

return statearr_24766;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto____1 = (function (state_24722){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_24722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e24767){if((e24767 instanceof Object)){
var ex__19883__auto__ = e24767;
var statearr_24768_24806 = state_24722;
(statearr_24768_24806[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24807 = state_24722;
state_24722 = G__24807;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto__ = function(state_24722){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto____1.call(this,state_24722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto__,msg_hist,msg_names,msg))
})();
var state__19993__auto__ = (function (){var statearr_24769 = f__19992__auto__.call(null);
(statearr_24769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto__);

return statearr_24769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto__,msg_hist,msg_names,msg))
);

return c__19991__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19991__auto___24870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___24870,ch){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___24870,ch){
return (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (1))){
var state_24853__$1 = state_24853;
var statearr_24855_24871 = state_24853__$1;
(statearr_24855_24871[(2)] = null);

(statearr_24855_24871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (2))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(4),ch);
} else {
if((state_val_24854 === (3))){
var inst_24851 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (4))){
var inst_24841 = (state_24853[(7)]);
var inst_24841__$1 = (state_24853[(2)]);
var state_24853__$1 = (function (){var statearr_24856 = state_24853;
(statearr_24856[(7)] = inst_24841__$1);

return statearr_24856;
})();
if(cljs.core.truth_(inst_24841__$1)){
var statearr_24857_24872 = state_24853__$1;
(statearr_24857_24872[(1)] = (5));

} else {
var statearr_24858_24873 = state_24853__$1;
(statearr_24858_24873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (5))){
var inst_24841 = (state_24853[(7)]);
var inst_24843 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24841);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(8),inst_24843);
} else {
if((state_val_24854 === (6))){
var state_24853__$1 = state_24853;
var statearr_24859_24874 = state_24853__$1;
(statearr_24859_24874[(2)] = null);

(statearr_24859_24874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (7))){
var inst_24849 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24860_24875 = state_24853__$1;
(statearr_24860_24875[(2)] = inst_24849);

(statearr_24860_24875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (8))){
var inst_24845 = (state_24853[(2)]);
var state_24853__$1 = (function (){var statearr_24861 = state_24853;
(statearr_24861[(8)] = inst_24845);

return statearr_24861;
})();
var statearr_24862_24876 = state_24853__$1;
(statearr_24862_24876[(2)] = null);

(statearr_24862_24876[(1)] = (2));


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
});})(c__19991__auto___24870,ch))
;
return ((function (switch__19879__auto__,c__19991__auto___24870,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19880__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19880__auto____0 = (function (){
var statearr_24866 = [null,null,null,null,null,null,null,null,null];
(statearr_24866[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19880__auto__);

(statearr_24866[(1)] = (1));

return statearr_24866;
});
var figwheel$client$heads_up_plugin_$_state_machine__19880__auto____1 = (function (state_24853){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_24853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e24867){if((e24867 instanceof Object)){
var ex__19883__auto__ = e24867;
var statearr_24868_24877 = state_24853;
(statearr_24868_24877[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24878 = state_24853;
state_24853 = G__24878;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19880__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19880__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19880__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19880__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19880__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___24870,ch))
})();
var state__19993__auto__ = (function (){var statearr_24869 = f__19992__auto__.call(null);
(statearr_24869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___24870);

return statearr_24869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___24870,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto__){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto__){
return (function (state_24899){
var state_val_24900 = (state_24899[(1)]);
if((state_val_24900 === (1))){
var inst_24894 = cljs.core.async.timeout.call(null,(3000));
var state_24899__$1 = state_24899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24899__$1,(2),inst_24894);
} else {
if((state_val_24900 === (2))){
var inst_24896 = (state_24899[(2)]);
var inst_24897 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24899__$1 = (function (){var statearr_24901 = state_24899;
(statearr_24901[(7)] = inst_24896);

return statearr_24901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24899__$1,inst_24897);
} else {
return null;
}
}
});})(c__19991__auto__))
;
return ((function (switch__19879__auto__,c__19991__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19880__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19880__auto____0 = (function (){
var statearr_24905 = [null,null,null,null,null,null,null,null];
(statearr_24905[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19880__auto__);

(statearr_24905[(1)] = (1));

return statearr_24905;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19880__auto____1 = (function (state_24899){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_24899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e24906){if((e24906 instanceof Object)){
var ex__19883__auto__ = e24906;
var statearr_24907_24909 = state_24899;
(statearr_24907_24909[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24910 = state_24899;
state_24899 = G__24910;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19880__auto__ = function(state_24899){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19880__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19880__auto____1.call(this,state_24899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19880__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19880__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto__))
})();
var state__19993__auto__ = (function (){var statearr_24908 = f__19992__auto__.call(null);
(statearr_24908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto__);

return statearr_24908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto__))
);

return c__19991__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24911){
var map__24918 = p__24911;
var map__24918__$1 = ((((!((map__24918 == null)))?((((map__24918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24918):map__24918);
var ed = map__24918__$1;
var formatted_exception = cljs.core.get.call(null,map__24918__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24918__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24918__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24920_24924 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24921_24925 = null;
var count__24922_24926 = (0);
var i__24923_24927 = (0);
while(true){
if((i__24923_24927 < count__24922_24926)){
var msg_24928 = cljs.core._nth.call(null,chunk__24921_24925,i__24923_24927);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24928);

var G__24929 = seq__24920_24924;
var G__24930 = chunk__24921_24925;
var G__24931 = count__24922_24926;
var G__24932 = (i__24923_24927 + (1));
seq__24920_24924 = G__24929;
chunk__24921_24925 = G__24930;
count__24922_24926 = G__24931;
i__24923_24927 = G__24932;
continue;
} else {
var temp__4425__auto___24933 = cljs.core.seq.call(null,seq__24920_24924);
if(temp__4425__auto___24933){
var seq__24920_24934__$1 = temp__4425__auto___24933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24920_24934__$1)){
var c__17945__auto___24935 = cljs.core.chunk_first.call(null,seq__24920_24934__$1);
var G__24936 = cljs.core.chunk_rest.call(null,seq__24920_24934__$1);
var G__24937 = c__17945__auto___24935;
var G__24938 = cljs.core.count.call(null,c__17945__auto___24935);
var G__24939 = (0);
seq__24920_24924 = G__24936;
chunk__24921_24925 = G__24937;
count__24922_24926 = G__24938;
i__24923_24927 = G__24939;
continue;
} else {
var msg_24940 = cljs.core.first.call(null,seq__24920_24934__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24940);

var G__24941 = cljs.core.next.call(null,seq__24920_24934__$1);
var G__24942 = null;
var G__24943 = (0);
var G__24944 = (0);
seq__24920_24924 = G__24941;
chunk__24921_24925 = G__24942;
count__24922_24926 = G__24943;
i__24923_24927 = G__24944;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24945){
var map__24948 = p__24945;
var map__24948__$1 = ((((!((map__24948 == null)))?((((map__24948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24948):map__24948);
var w = map__24948__$1;
var message = cljs.core.get.call(null,map__24948__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17130__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17130__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17130__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24956 = cljs.core.seq.call(null,plugins);
var chunk__24957 = null;
var count__24958 = (0);
var i__24959 = (0);
while(true){
if((i__24959 < count__24958)){
var vec__24960 = cljs.core._nth.call(null,chunk__24957,i__24959);
var k = cljs.core.nth.call(null,vec__24960,(0),null);
var plugin = cljs.core.nth.call(null,vec__24960,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24962 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24956,chunk__24957,count__24958,i__24959,pl_24962,vec__24960,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24962.call(null,msg_hist);
});})(seq__24956,chunk__24957,count__24958,i__24959,pl_24962,vec__24960,k,plugin))
);
} else {
}

var G__24963 = seq__24956;
var G__24964 = chunk__24957;
var G__24965 = count__24958;
var G__24966 = (i__24959 + (1));
seq__24956 = G__24963;
chunk__24957 = G__24964;
count__24958 = G__24965;
i__24959 = G__24966;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24956);
if(temp__4425__auto__){
var seq__24956__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24956__$1)){
var c__17945__auto__ = cljs.core.chunk_first.call(null,seq__24956__$1);
var G__24967 = cljs.core.chunk_rest.call(null,seq__24956__$1);
var G__24968 = c__17945__auto__;
var G__24969 = cljs.core.count.call(null,c__17945__auto__);
var G__24970 = (0);
seq__24956 = G__24967;
chunk__24957 = G__24968;
count__24958 = G__24969;
i__24959 = G__24970;
continue;
} else {
var vec__24961 = cljs.core.first.call(null,seq__24956__$1);
var k = cljs.core.nth.call(null,vec__24961,(0),null);
var plugin = cljs.core.nth.call(null,vec__24961,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24971 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24956,chunk__24957,count__24958,i__24959,pl_24971,vec__24961,k,plugin,seq__24956__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24971.call(null,msg_hist);
});})(seq__24956,chunk__24957,count__24958,i__24959,pl_24971,vec__24961,k,plugin,seq__24956__$1,temp__4425__auto__))
);
} else {
}

var G__24972 = cljs.core.next.call(null,seq__24956__$1);
var G__24973 = null;
var G__24974 = (0);
var G__24975 = (0);
seq__24956 = G__24972;
chunk__24957 = G__24973;
count__24958 = G__24974;
i__24959 = G__24975;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24976 = [];
var len__18200__auto___24979 = arguments.length;
var i__18201__auto___24980 = (0);
while(true){
if((i__18201__auto___24980 < len__18200__auto___24979)){
args24976.push((arguments[i__18201__auto___24980]));

var G__24981 = (i__18201__auto___24980 + (1));
i__18201__auto___24980 = G__24981;
continue;
} else {
}
break;
}

var G__24978 = args24976.length;
switch (G__24978) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24976.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__18207__auto__ = [];
var len__18200__auto___24987 = arguments.length;
var i__18201__auto___24988 = (0);
while(true){
if((i__18201__auto___24988 < len__18200__auto___24987)){
args__18207__auto__.push((arguments[i__18201__auto___24988]));

var G__24989 = (i__18201__auto___24988 + (1));
i__18201__auto___24988 = G__24989;
continue;
} else {
}
break;
}

var argseq__18208__auto__ = ((((0) < args__18207__auto__.length))?(new cljs.core.IndexedSeq(args__18207__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18208__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24984){
var map__24985 = p__24984;
var map__24985__$1 = ((((!((map__24985 == null)))?((((map__24985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24985):map__24985);
var opts = map__24985__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24983){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24983));
});

//# sourceMappingURL=client.js.map