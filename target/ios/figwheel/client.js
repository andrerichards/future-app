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
var pred__24229 = cljs.core._EQ_;
var expr__24230 = (function (){var or__17119__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24229.call(null,"true",expr__24230))){
return true;
} else {
if(cljs.core.truth_(pred__24229.call(null,"false",expr__24230))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24230)].join('')));
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
var args__18184__auto__ = [];
var len__18177__auto___24233 = arguments.length;
var i__18178__auto___24234 = (0);
while(true){
if((i__18178__auto___24234 < len__18177__auto___24233)){
args__18184__auto__.push((arguments[i__18178__auto___24234]));

var G__24235 = (i__18178__auto___24234 + (1));
i__18178__auto___24234 = G__24235;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((0) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__18185__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24232){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24232));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24236){
var map__24239 = p__24236;
var map__24239__$1 = ((((!((map__24239 == null)))?((((map__24239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24239):map__24239);
var message = cljs.core.get.call(null,map__24239__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24239__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17119__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17107__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17107__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17107__auto__;
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
var c__19953__auto___24401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___24401,ch){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___24401,ch){
return (function (state_24370){
var state_val_24371 = (state_24370[(1)]);
if((state_val_24371 === (7))){
var inst_24366 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24372_24402 = state_24370__$1;
(statearr_24372_24402[(2)] = inst_24366);

(statearr_24372_24402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (1))){
var state_24370__$1 = state_24370;
var statearr_24373_24403 = state_24370__$1;
(statearr_24373_24403[(2)] = null);

(statearr_24373_24403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (4))){
var inst_24323 = (state_24370[(7)]);
var inst_24323__$1 = (state_24370[(2)]);
var state_24370__$1 = (function (){var statearr_24374 = state_24370;
(statearr_24374[(7)] = inst_24323__$1);

return statearr_24374;
})();
if(cljs.core.truth_(inst_24323__$1)){
var statearr_24375_24404 = state_24370__$1;
(statearr_24375_24404[(1)] = (5));

} else {
var statearr_24376_24405 = state_24370__$1;
(statearr_24376_24405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (15))){
var inst_24330 = (state_24370[(8)]);
var inst_24345 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24330);
var inst_24346 = cljs.core.first.call(null,inst_24345);
var inst_24347 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24346);
var inst_24348 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24347)].join('');
var inst_24349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24348);
var state_24370__$1 = state_24370;
var statearr_24377_24406 = state_24370__$1;
(statearr_24377_24406[(2)] = inst_24349);

(statearr_24377_24406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (13))){
var inst_24354 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24378_24407 = state_24370__$1;
(statearr_24378_24407[(2)] = inst_24354);

(statearr_24378_24407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (6))){
var state_24370__$1 = state_24370;
var statearr_24379_24408 = state_24370__$1;
(statearr_24379_24408[(2)] = null);

(statearr_24379_24408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (17))){
var inst_24352 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24380_24409 = state_24370__$1;
(statearr_24380_24409[(2)] = inst_24352);

(statearr_24380_24409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (3))){
var inst_24368 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24370__$1,inst_24368);
} else {
if((state_val_24371 === (12))){
var inst_24329 = (state_24370[(9)]);
var inst_24343 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24329,opts);
var state_24370__$1 = state_24370;
if(cljs.core.truth_(inst_24343)){
var statearr_24381_24410 = state_24370__$1;
(statearr_24381_24410[(1)] = (15));

} else {
var statearr_24382_24411 = state_24370__$1;
(statearr_24382_24411[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (2))){
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24370__$1,(4),ch);
} else {
if((state_val_24371 === (11))){
var inst_24330 = (state_24370[(8)]);
var inst_24335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24336 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24330);
var inst_24337 = cljs.core.async.timeout.call(null,(1000));
var inst_24338 = [inst_24336,inst_24337];
var inst_24339 = (new cljs.core.PersistentVector(null,2,(5),inst_24335,inst_24338,null));
var state_24370__$1 = state_24370;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24370__$1,(14),inst_24339);
} else {
if((state_val_24371 === (9))){
var inst_24330 = (state_24370[(8)]);
var inst_24356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24357 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24330);
var inst_24358 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24357);
var inst_24359 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24358)].join('');
var inst_24360 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24359);
var state_24370__$1 = (function (){var statearr_24383 = state_24370;
(statearr_24383[(10)] = inst_24356);

return statearr_24383;
})();
var statearr_24384_24412 = state_24370__$1;
(statearr_24384_24412[(2)] = inst_24360);

(statearr_24384_24412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (5))){
var inst_24323 = (state_24370[(7)]);
var inst_24325 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24326 = (new cljs.core.PersistentArrayMap(null,2,inst_24325,null));
var inst_24327 = (new cljs.core.PersistentHashSet(null,inst_24326,null));
var inst_24328 = figwheel.client.focus_msgs.call(null,inst_24327,inst_24323);
var inst_24329 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24328);
var inst_24330 = cljs.core.first.call(null,inst_24328);
var inst_24331 = figwheel.client.autoload_QMARK_.call(null);
var state_24370__$1 = (function (){var statearr_24385 = state_24370;
(statearr_24385[(9)] = inst_24329);

(statearr_24385[(8)] = inst_24330);

return statearr_24385;
})();
if(cljs.core.truth_(inst_24331)){
var statearr_24386_24413 = state_24370__$1;
(statearr_24386_24413[(1)] = (8));

} else {
var statearr_24387_24414 = state_24370__$1;
(statearr_24387_24414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (14))){
var inst_24341 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24388_24415 = state_24370__$1;
(statearr_24388_24415[(2)] = inst_24341);

(statearr_24388_24415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (16))){
var state_24370__$1 = state_24370;
var statearr_24389_24416 = state_24370__$1;
(statearr_24389_24416[(2)] = null);

(statearr_24389_24416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (10))){
var inst_24362 = (state_24370[(2)]);
var state_24370__$1 = (function (){var statearr_24390 = state_24370;
(statearr_24390[(11)] = inst_24362);

return statearr_24390;
})();
var statearr_24391_24417 = state_24370__$1;
(statearr_24391_24417[(2)] = null);

(statearr_24391_24417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (8))){
var inst_24329 = (state_24370[(9)]);
var inst_24333 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24329,opts);
var state_24370__$1 = state_24370;
if(cljs.core.truth_(inst_24333)){
var statearr_24392_24418 = state_24370__$1;
(statearr_24392_24418[(1)] = (11));

} else {
var statearr_24393_24419 = state_24370__$1;
(statearr_24393_24419[(1)] = (12));

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
});})(c__19953__auto___24401,ch))
;
return ((function (switch__19841__auto__,c__19953__auto___24401,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19842__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19842__auto____0 = (function (){
var statearr_24397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24397[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19842__auto__);

(statearr_24397[(1)] = (1));

return statearr_24397;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19842__auto____1 = (function (state_24370){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_24370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e24398){if((e24398 instanceof Object)){
var ex__19845__auto__ = e24398;
var statearr_24399_24420 = state_24370;
(statearr_24399_24420[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24421 = state_24370;
state_24370 = G__24421;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19842__auto__ = function(state_24370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19842__auto____1.call(this,state_24370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19842__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19842__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___24401,ch))
})();
var state__19955__auto__ = (function (){var statearr_24400 = f__19954__auto__.call(null);
(statearr_24400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___24401);

return statearr_24400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___24401,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24422_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24422_SHARP_));
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
var base_path_24429 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24429){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24428 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24428;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24427;
}}catch (e24426){if((e24426 instanceof Error)){
var e = e24426;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24429], null));
} else {
var e = e24426;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24429))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24430){
var map__24437 = p__24430;
var map__24437__$1 = ((((!((map__24437 == null)))?((((map__24437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24437):map__24437);
var opts = map__24437__$1;
var build_id = cljs.core.get.call(null,map__24437__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24437,map__24437__$1,opts,build_id){
return (function (p__24439){
var vec__24440 = p__24439;
var map__24441 = cljs.core.nth.call(null,vec__24440,(0),null);
var map__24441__$1 = ((((!((map__24441 == null)))?((((map__24441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24441):map__24441);
var msg = map__24441__$1;
var msg_name = cljs.core.get.call(null,map__24441__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24440,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24440,map__24441,map__24441__$1,msg,msg_name,_,map__24437,map__24437__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24440,map__24441,map__24441__$1,msg,msg_name,_,map__24437,map__24437__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24437,map__24437__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24447){
var vec__24448 = p__24447;
var map__24449 = cljs.core.nth.call(null,vec__24448,(0),null);
var map__24449__$1 = ((((!((map__24449 == null)))?((((map__24449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24449):map__24449);
var msg = map__24449__$1;
var msg_name = cljs.core.get.call(null,map__24449__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24448,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24451){
var map__24461 = p__24451;
var map__24461__$1 = ((((!((map__24461 == null)))?((((map__24461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24461):map__24461);
var on_compile_warning = cljs.core.get.call(null,map__24461__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24461__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24461,map__24461__$1,on_compile_warning,on_compile_fail){
return (function (p__24463){
var vec__24464 = p__24463;
var map__24465 = cljs.core.nth.call(null,vec__24464,(0),null);
var map__24465__$1 = ((((!((map__24465 == null)))?((((map__24465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24465):map__24465);
var msg = map__24465__$1;
var msg_name = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24464,(1));
var pred__24467 = cljs.core._EQ_;
var expr__24468 = msg_name;
if(cljs.core.truth_(pred__24467.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24468))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24467.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24468))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24461,map__24461__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__,msg_hist,msg_names,msg){
return (function (state_24684){
var state_val_24685 = (state_24684[(1)]);
if((state_val_24685 === (7))){
var inst_24608 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24608)){
var statearr_24686_24732 = state_24684__$1;
(statearr_24686_24732[(1)] = (8));

} else {
var statearr_24687_24733 = state_24684__$1;
(statearr_24687_24733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (20))){
var inst_24678 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24688_24734 = state_24684__$1;
(statearr_24688_24734[(2)] = inst_24678);

(statearr_24688_24734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (27))){
var inst_24674 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24689_24735 = state_24684__$1;
(statearr_24689_24735[(2)] = inst_24674);

(statearr_24689_24735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (1))){
var inst_24601 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24601)){
var statearr_24690_24736 = state_24684__$1;
(statearr_24690_24736[(1)] = (2));

} else {
var statearr_24691_24737 = state_24684__$1;
(statearr_24691_24737[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (24))){
var inst_24676 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24692_24738 = state_24684__$1;
(statearr_24692_24738[(2)] = inst_24676);

(statearr_24692_24738[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (4))){
var inst_24682 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24684__$1,inst_24682);
} else {
if((state_val_24685 === (15))){
var inst_24680 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24693_24739 = state_24684__$1;
(statearr_24693_24739[(2)] = inst_24680);

(statearr_24693_24739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (21))){
var inst_24639 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24694_24740 = state_24684__$1;
(statearr_24694_24740[(2)] = inst_24639);

(statearr_24694_24740[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (31))){
var inst_24663 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24663)){
var statearr_24695_24741 = state_24684__$1;
(statearr_24695_24741[(1)] = (34));

} else {
var statearr_24696_24742 = state_24684__$1;
(statearr_24696_24742[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (32))){
var inst_24672 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24697_24743 = state_24684__$1;
(statearr_24697_24743[(2)] = inst_24672);

(statearr_24697_24743[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (33))){
var inst_24661 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24698_24744 = state_24684__$1;
(statearr_24698_24744[(2)] = inst_24661);

(statearr_24698_24744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (13))){
var inst_24622 = figwheel.client.heads_up.clear.call(null);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(16),inst_24622);
} else {
if((state_val_24685 === (22))){
var inst_24643 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24644 = figwheel.client.heads_up.append_message.call(null,inst_24643);
var state_24684__$1 = state_24684;
var statearr_24699_24745 = state_24684__$1;
(statearr_24699_24745[(2)] = inst_24644);

(statearr_24699_24745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (36))){
var inst_24670 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24700_24746 = state_24684__$1;
(statearr_24700_24746[(2)] = inst_24670);

(statearr_24700_24746[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (29))){
var inst_24654 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24701_24747 = state_24684__$1;
(statearr_24701_24747[(2)] = inst_24654);

(statearr_24701_24747[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (6))){
var inst_24603 = (state_24684[(7)]);
var state_24684__$1 = state_24684;
var statearr_24702_24748 = state_24684__$1;
(statearr_24702_24748[(2)] = inst_24603);

(statearr_24702_24748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (28))){
var inst_24650 = (state_24684[(2)]);
var inst_24651 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24652 = figwheel.client.heads_up.display_warning.call(null,inst_24651);
var state_24684__$1 = (function (){var statearr_24703 = state_24684;
(statearr_24703[(8)] = inst_24650);

return statearr_24703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(29),inst_24652);
} else {
if((state_val_24685 === (25))){
var inst_24648 = figwheel.client.heads_up.clear.call(null);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(28),inst_24648);
} else {
if((state_val_24685 === (34))){
var inst_24665 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(37),inst_24665);
} else {
if((state_val_24685 === (17))){
var inst_24630 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24704_24749 = state_24684__$1;
(statearr_24704_24749[(2)] = inst_24630);

(statearr_24704_24749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (3))){
var inst_24620 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24620)){
var statearr_24705_24750 = state_24684__$1;
(statearr_24705_24750[(1)] = (13));

} else {
var statearr_24706_24751 = state_24684__$1;
(statearr_24706_24751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (12))){
var inst_24616 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24707_24752 = state_24684__$1;
(statearr_24707_24752[(2)] = inst_24616);

(statearr_24707_24752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (2))){
var inst_24603 = (state_24684[(7)]);
var inst_24603__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24684__$1 = (function (){var statearr_24708 = state_24684;
(statearr_24708[(7)] = inst_24603__$1);

return statearr_24708;
})();
if(cljs.core.truth_(inst_24603__$1)){
var statearr_24709_24753 = state_24684__$1;
(statearr_24709_24753[(1)] = (5));

} else {
var statearr_24710_24754 = state_24684__$1;
(statearr_24710_24754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (23))){
var inst_24646 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24646)){
var statearr_24711_24755 = state_24684__$1;
(statearr_24711_24755[(1)] = (25));

} else {
var statearr_24712_24756 = state_24684__$1;
(statearr_24712_24756[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (35))){
var state_24684__$1 = state_24684;
var statearr_24713_24757 = state_24684__$1;
(statearr_24713_24757[(2)] = null);

(statearr_24713_24757[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (19))){
var inst_24641 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24641)){
var statearr_24714_24758 = state_24684__$1;
(statearr_24714_24758[(1)] = (22));

} else {
var statearr_24715_24759 = state_24684__$1;
(statearr_24715_24759[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (11))){
var inst_24612 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24716_24760 = state_24684__$1;
(statearr_24716_24760[(2)] = inst_24612);

(statearr_24716_24760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (9))){
var inst_24614 = figwheel.client.heads_up.clear.call(null);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(12),inst_24614);
} else {
if((state_val_24685 === (5))){
var inst_24605 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24684__$1 = state_24684;
var statearr_24717_24761 = state_24684__$1;
(statearr_24717_24761[(2)] = inst_24605);

(statearr_24717_24761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (14))){
var inst_24632 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24632)){
var statearr_24718_24762 = state_24684__$1;
(statearr_24718_24762[(1)] = (18));

} else {
var statearr_24719_24763 = state_24684__$1;
(statearr_24719_24763[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (26))){
var inst_24656 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24684__$1 = state_24684;
if(cljs.core.truth_(inst_24656)){
var statearr_24720_24764 = state_24684__$1;
(statearr_24720_24764[(1)] = (30));

} else {
var statearr_24721_24765 = state_24684__$1;
(statearr_24721_24765[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (16))){
var inst_24624 = (state_24684[(2)]);
var inst_24625 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24626 = figwheel.client.format_messages.call(null,inst_24625);
var inst_24627 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24628 = figwheel.client.heads_up.display_error.call(null,inst_24626,inst_24627);
var state_24684__$1 = (function (){var statearr_24722 = state_24684;
(statearr_24722[(9)] = inst_24624);

return statearr_24722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(17),inst_24628);
} else {
if((state_val_24685 === (30))){
var inst_24658 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24659 = figwheel.client.heads_up.display_warning.call(null,inst_24658);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(33),inst_24659);
} else {
if((state_val_24685 === (10))){
var inst_24618 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24723_24766 = state_24684__$1;
(statearr_24723_24766[(2)] = inst_24618);

(statearr_24723_24766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (18))){
var inst_24634 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24635 = figwheel.client.format_messages.call(null,inst_24634);
var inst_24636 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24637 = figwheel.client.heads_up.display_error.call(null,inst_24635,inst_24636);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(21),inst_24637);
} else {
if((state_val_24685 === (37))){
var inst_24667 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24724_24767 = state_24684__$1;
(statearr_24724_24767[(2)] = inst_24667);

(statearr_24724_24767[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24685 === (8))){
var inst_24610 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24684__$1,(11),inst_24610);
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
});})(c__19953__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19841__auto__,c__19953__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto____0 = (function (){
var statearr_24728 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24728[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto__);

(statearr_24728[(1)] = (1));

return statearr_24728;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto____1 = (function (state_24684){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_24684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e24729){if((e24729 instanceof Object)){
var ex__19845__auto__ = e24729;
var statearr_24730_24768 = state_24684;
(statearr_24730_24768[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24769 = state_24684;
state_24684 = G__24769;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto__ = function(state_24684){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto____1.call(this,state_24684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__,msg_hist,msg_names,msg))
})();
var state__19955__auto__ = (function (){var statearr_24731 = f__19954__auto__.call(null);
(statearr_24731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_24731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__,msg_hist,msg_names,msg))
);

return c__19953__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19953__auto___24832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___24832,ch){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___24832,ch){
return (function (state_24815){
var state_val_24816 = (state_24815[(1)]);
if((state_val_24816 === (1))){
var state_24815__$1 = state_24815;
var statearr_24817_24833 = state_24815__$1;
(statearr_24817_24833[(2)] = null);

(statearr_24817_24833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (2))){
var state_24815__$1 = state_24815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24815__$1,(4),ch);
} else {
if((state_val_24816 === (3))){
var inst_24813 = (state_24815[(2)]);
var state_24815__$1 = state_24815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24815__$1,inst_24813);
} else {
if((state_val_24816 === (4))){
var inst_24803 = (state_24815[(7)]);
var inst_24803__$1 = (state_24815[(2)]);
var state_24815__$1 = (function (){var statearr_24818 = state_24815;
(statearr_24818[(7)] = inst_24803__$1);

return statearr_24818;
})();
if(cljs.core.truth_(inst_24803__$1)){
var statearr_24819_24834 = state_24815__$1;
(statearr_24819_24834[(1)] = (5));

} else {
var statearr_24820_24835 = state_24815__$1;
(statearr_24820_24835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (5))){
var inst_24803 = (state_24815[(7)]);
var inst_24805 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24803);
var state_24815__$1 = state_24815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24815__$1,(8),inst_24805);
} else {
if((state_val_24816 === (6))){
var state_24815__$1 = state_24815;
var statearr_24821_24836 = state_24815__$1;
(statearr_24821_24836[(2)] = null);

(statearr_24821_24836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (7))){
var inst_24811 = (state_24815[(2)]);
var state_24815__$1 = state_24815;
var statearr_24822_24837 = state_24815__$1;
(statearr_24822_24837[(2)] = inst_24811);

(statearr_24822_24837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24816 === (8))){
var inst_24807 = (state_24815[(2)]);
var state_24815__$1 = (function (){var statearr_24823 = state_24815;
(statearr_24823[(8)] = inst_24807);

return statearr_24823;
})();
var statearr_24824_24838 = state_24815__$1;
(statearr_24824_24838[(2)] = null);

(statearr_24824_24838[(1)] = (2));


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
});})(c__19953__auto___24832,ch))
;
return ((function (switch__19841__auto__,c__19953__auto___24832,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19842__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19842__auto____0 = (function (){
var statearr_24828 = [null,null,null,null,null,null,null,null,null];
(statearr_24828[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19842__auto__);

(statearr_24828[(1)] = (1));

return statearr_24828;
});
var figwheel$client$heads_up_plugin_$_state_machine__19842__auto____1 = (function (state_24815){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_24815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e24829){if((e24829 instanceof Object)){
var ex__19845__auto__ = e24829;
var statearr_24830_24839 = state_24815;
(statearr_24830_24839[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24840 = state_24815;
state_24815 = G__24840;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19842__auto__ = function(state_24815){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19842__auto____1.call(this,state_24815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19842__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19842__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___24832,ch))
})();
var state__19955__auto__ = (function (){var statearr_24831 = f__19954__auto__.call(null);
(statearr_24831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___24832);

return statearr_24831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___24832,ch))
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
var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__){
return (function (state_24861){
var state_val_24862 = (state_24861[(1)]);
if((state_val_24862 === (1))){
var inst_24856 = cljs.core.async.timeout.call(null,(3000));
var state_24861__$1 = state_24861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24861__$1,(2),inst_24856);
} else {
if((state_val_24862 === (2))){
var inst_24858 = (state_24861[(2)]);
var inst_24859 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24861__$1 = (function (){var statearr_24863 = state_24861;
(statearr_24863[(7)] = inst_24858);

return statearr_24863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24861__$1,inst_24859);
} else {
return null;
}
}
});})(c__19953__auto__))
;
return ((function (switch__19841__auto__,c__19953__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19842__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19842__auto____0 = (function (){
var statearr_24867 = [null,null,null,null,null,null,null,null];
(statearr_24867[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19842__auto__);

(statearr_24867[(1)] = (1));

return statearr_24867;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19842__auto____1 = (function (state_24861){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_24861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e24868){if((e24868 instanceof Object)){
var ex__19845__auto__ = e24868;
var statearr_24869_24871 = state_24861;
(statearr_24869_24871[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24872 = state_24861;
state_24861 = G__24872;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19842__auto__ = function(state_24861){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19842__auto____1.call(this,state_24861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19842__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19842__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__))
})();
var state__19955__auto__ = (function (){var statearr_24870 = f__19954__auto__.call(null);
(statearr_24870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_24870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__))
);

return c__19953__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24873){
var map__24880 = p__24873;
var map__24880__$1 = ((((!((map__24880 == null)))?((((map__24880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24880):map__24880);
var ed = map__24880__$1;
var formatted_exception = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24882_24886 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24883_24887 = null;
var count__24884_24888 = (0);
var i__24885_24889 = (0);
while(true){
if((i__24885_24889 < count__24884_24888)){
var msg_24890 = cljs.core._nth.call(null,chunk__24883_24887,i__24885_24889);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24890);

var G__24891 = seq__24882_24886;
var G__24892 = chunk__24883_24887;
var G__24893 = count__24884_24888;
var G__24894 = (i__24885_24889 + (1));
seq__24882_24886 = G__24891;
chunk__24883_24887 = G__24892;
count__24884_24888 = G__24893;
i__24885_24889 = G__24894;
continue;
} else {
var temp__4425__auto___24895 = cljs.core.seq.call(null,seq__24882_24886);
if(temp__4425__auto___24895){
var seq__24882_24896__$1 = temp__4425__auto___24895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24882_24896__$1)){
var c__17922__auto___24897 = cljs.core.chunk_first.call(null,seq__24882_24896__$1);
var G__24898 = cljs.core.chunk_rest.call(null,seq__24882_24896__$1);
var G__24899 = c__17922__auto___24897;
var G__24900 = cljs.core.count.call(null,c__17922__auto___24897);
var G__24901 = (0);
seq__24882_24886 = G__24898;
chunk__24883_24887 = G__24899;
count__24884_24888 = G__24900;
i__24885_24889 = G__24901;
continue;
} else {
var msg_24902 = cljs.core.first.call(null,seq__24882_24896__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24902);

var G__24903 = cljs.core.next.call(null,seq__24882_24896__$1);
var G__24904 = null;
var G__24905 = (0);
var G__24906 = (0);
seq__24882_24886 = G__24903;
chunk__24883_24887 = G__24904;
count__24884_24888 = G__24905;
i__24885_24889 = G__24906;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24907){
var map__24910 = p__24907;
var map__24910__$1 = ((((!((map__24910 == null)))?((((map__24910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24910):map__24910);
var w = map__24910__$1;
var message = cljs.core.get.call(null,map__24910__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__17107__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17107__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17107__auto__;
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
var seq__24918 = cljs.core.seq.call(null,plugins);
var chunk__24919 = null;
var count__24920 = (0);
var i__24921 = (0);
while(true){
if((i__24921 < count__24920)){
var vec__24922 = cljs.core._nth.call(null,chunk__24919,i__24921);
var k = cljs.core.nth.call(null,vec__24922,(0),null);
var plugin = cljs.core.nth.call(null,vec__24922,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24924 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24918,chunk__24919,count__24920,i__24921,pl_24924,vec__24922,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24924.call(null,msg_hist);
});})(seq__24918,chunk__24919,count__24920,i__24921,pl_24924,vec__24922,k,plugin))
);
} else {
}

var G__24925 = seq__24918;
var G__24926 = chunk__24919;
var G__24927 = count__24920;
var G__24928 = (i__24921 + (1));
seq__24918 = G__24925;
chunk__24919 = G__24926;
count__24920 = G__24927;
i__24921 = G__24928;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24918);
if(temp__4425__auto__){
var seq__24918__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24918__$1)){
var c__17922__auto__ = cljs.core.chunk_first.call(null,seq__24918__$1);
var G__24929 = cljs.core.chunk_rest.call(null,seq__24918__$1);
var G__24930 = c__17922__auto__;
var G__24931 = cljs.core.count.call(null,c__17922__auto__);
var G__24932 = (0);
seq__24918 = G__24929;
chunk__24919 = G__24930;
count__24920 = G__24931;
i__24921 = G__24932;
continue;
} else {
var vec__24923 = cljs.core.first.call(null,seq__24918__$1);
var k = cljs.core.nth.call(null,vec__24923,(0),null);
var plugin = cljs.core.nth.call(null,vec__24923,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24933 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24918,chunk__24919,count__24920,i__24921,pl_24933,vec__24923,k,plugin,seq__24918__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24933.call(null,msg_hist);
});})(seq__24918,chunk__24919,count__24920,i__24921,pl_24933,vec__24923,k,plugin,seq__24918__$1,temp__4425__auto__))
);
} else {
}

var G__24934 = cljs.core.next.call(null,seq__24918__$1);
var G__24935 = null;
var G__24936 = (0);
var G__24937 = (0);
seq__24918 = G__24934;
chunk__24919 = G__24935;
count__24920 = G__24936;
i__24921 = G__24937;
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
var args24938 = [];
var len__18177__auto___24941 = arguments.length;
var i__18178__auto___24942 = (0);
while(true){
if((i__18178__auto___24942 < len__18177__auto___24941)){
args24938.push((arguments[i__18178__auto___24942]));

var G__24943 = (i__18178__auto___24942 + (1));
i__18178__auto___24942 = G__24943;
continue;
} else {
}
break;
}

var G__24940 = args24938.length;
switch (G__24940) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24938.length)].join('')));

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
var args__18184__auto__ = [];
var len__18177__auto___24949 = arguments.length;
var i__18178__auto___24950 = (0);
while(true){
if((i__18178__auto___24950 < len__18177__auto___24949)){
args__18184__auto__.push((arguments[i__18178__auto___24950]));

var G__24951 = (i__18178__auto___24950 + (1));
i__18178__auto___24950 = G__24951;
continue;
} else {
}
break;
}

var argseq__18185__auto__ = ((((0) < args__18184__auto__.length))?(new cljs.core.IndexedSeq(args__18184__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18185__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24946){
var map__24947 = p__24946;
var map__24947__$1 = ((((!((map__24947 == null)))?((((map__24947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24947):map__24947);
var opts = map__24947__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24945){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24945));
});

//# sourceMappingURL=client.js.map