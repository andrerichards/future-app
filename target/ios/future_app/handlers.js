// Compiled by ClojureScript 1.7.170 {}
goog.provide('future_app.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
future_app.handlers.app_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"greeting","greeting",462222107),"Hello Clojure in iOS and Android and Web!"], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return future_app.handlers.app_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-greeting","set-greeting",-653540063),(function (db,p__24992){
var vec__24993 = p__24992;
var _ = cljs.core.nth.call(null,vec__24993,(0),null);
var value = cljs.core.nth.call(null,vec__24993,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"greeting","greeting",462222107),value);
}));

//# sourceMappingURL=handlers.js.map