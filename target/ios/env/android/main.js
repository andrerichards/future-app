// Compiled by ClojureScript 1.7.170 {}
goog.provide('env.android.main');
goog.require('cljs.core');
goog.require('future_app.android.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),false,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),future_app.android.core.mount_root);
future_app.android.core.init.call(null);
future_app.android.core.mount_root.call(null);

//# sourceMappingURL=main.js.map