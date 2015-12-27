// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17142__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17142__auto__){
return or__17142__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__17142__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22824_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22824_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22829 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22830 = null;
var count__22831 = (0);
var i__22832 = (0);
while(true){
if((i__22832 < count__22831)){
var n = cljs.core._nth.call(null,chunk__22830,i__22832);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22833 = seq__22829;
var G__22834 = chunk__22830;
var G__22835 = count__22831;
var G__22836 = (i__22832 + (1));
seq__22829 = G__22833;
chunk__22830 = G__22834;
count__22831 = G__22835;
i__22832 = G__22836;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22829);
if(temp__4425__auto__){
var seq__22829__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22829__$1)){
var c__17945__auto__ = cljs.core.chunk_first.call(null,seq__22829__$1);
var G__22837 = cljs.core.chunk_rest.call(null,seq__22829__$1);
var G__22838 = c__17945__auto__;
var G__22839 = cljs.core.count.call(null,c__17945__auto__);
var G__22840 = (0);
seq__22829 = G__22837;
chunk__22830 = G__22838;
count__22831 = G__22839;
i__22832 = G__22840;
continue;
} else {
var n = cljs.core.first.call(null,seq__22829__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22841 = cljs.core.next.call(null,seq__22829__$1);
var G__22842 = null;
var G__22843 = (0);
var G__22844 = (0);
seq__22829 = G__22841;
chunk__22830 = G__22842;
count__22831 = G__22843;
i__22832 = G__22844;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22883_22890 = cljs.core.seq.call(null,deps);
var chunk__22884_22891 = null;
var count__22885_22892 = (0);
var i__22886_22893 = (0);
while(true){
if((i__22886_22893 < count__22885_22892)){
var dep_22894 = cljs.core._nth.call(null,chunk__22884_22891,i__22886_22893);
topo_sort_helper_STAR_.call(null,dep_22894,(depth + (1)),state);

var G__22895 = seq__22883_22890;
var G__22896 = chunk__22884_22891;
var G__22897 = count__22885_22892;
var G__22898 = (i__22886_22893 + (1));
seq__22883_22890 = G__22895;
chunk__22884_22891 = G__22896;
count__22885_22892 = G__22897;
i__22886_22893 = G__22898;
continue;
} else {
var temp__4425__auto___22899 = cljs.core.seq.call(null,seq__22883_22890);
if(temp__4425__auto___22899){
var seq__22883_22900__$1 = temp__4425__auto___22899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22883_22900__$1)){
var c__17945__auto___22901 = cljs.core.chunk_first.call(null,seq__22883_22900__$1);
var G__22902 = cljs.core.chunk_rest.call(null,seq__22883_22900__$1);
var G__22903 = c__17945__auto___22901;
var G__22904 = cljs.core.count.call(null,c__17945__auto___22901);
var G__22905 = (0);
seq__22883_22890 = G__22902;
chunk__22884_22891 = G__22903;
count__22885_22892 = G__22904;
i__22886_22893 = G__22905;
continue;
} else {
var dep_22906 = cljs.core.first.call(null,seq__22883_22900__$1);
topo_sort_helper_STAR_.call(null,dep_22906,(depth + (1)),state);

var G__22907 = cljs.core.next.call(null,seq__22883_22900__$1);
var G__22908 = null;
var G__22909 = (0);
var G__22910 = (0);
seq__22883_22890 = G__22907;
chunk__22884_22891 = G__22908;
count__22885_22892 = G__22909;
i__22886_22893 = G__22910;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22887){
var vec__22889 = p__22887;
var x = cljs.core.nth.call(null,vec__22889,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22889,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22889,x,xs,get_deps__$1){
return (function (p1__22845_SHARP_){
return clojure.set.difference.call(null,p1__22845_SHARP_,x);
});})(vec__22889,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22923 = cljs.core.seq.call(null,provides);
var chunk__22924 = null;
var count__22925 = (0);
var i__22926 = (0);
while(true){
if((i__22926 < count__22925)){
var prov = cljs.core._nth.call(null,chunk__22924,i__22926);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22927_22935 = cljs.core.seq.call(null,requires);
var chunk__22928_22936 = null;
var count__22929_22937 = (0);
var i__22930_22938 = (0);
while(true){
if((i__22930_22938 < count__22929_22937)){
var req_22939 = cljs.core._nth.call(null,chunk__22928_22936,i__22930_22938);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22939,prov);

var G__22940 = seq__22927_22935;
var G__22941 = chunk__22928_22936;
var G__22942 = count__22929_22937;
var G__22943 = (i__22930_22938 + (1));
seq__22927_22935 = G__22940;
chunk__22928_22936 = G__22941;
count__22929_22937 = G__22942;
i__22930_22938 = G__22943;
continue;
} else {
var temp__4425__auto___22944 = cljs.core.seq.call(null,seq__22927_22935);
if(temp__4425__auto___22944){
var seq__22927_22945__$1 = temp__4425__auto___22944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22927_22945__$1)){
var c__17945__auto___22946 = cljs.core.chunk_first.call(null,seq__22927_22945__$1);
var G__22947 = cljs.core.chunk_rest.call(null,seq__22927_22945__$1);
var G__22948 = c__17945__auto___22946;
var G__22949 = cljs.core.count.call(null,c__17945__auto___22946);
var G__22950 = (0);
seq__22927_22935 = G__22947;
chunk__22928_22936 = G__22948;
count__22929_22937 = G__22949;
i__22930_22938 = G__22950;
continue;
} else {
var req_22951 = cljs.core.first.call(null,seq__22927_22945__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22951,prov);

var G__22952 = cljs.core.next.call(null,seq__22927_22945__$1);
var G__22953 = null;
var G__22954 = (0);
var G__22955 = (0);
seq__22927_22935 = G__22952;
chunk__22928_22936 = G__22953;
count__22929_22937 = G__22954;
i__22930_22938 = G__22955;
continue;
}
} else {
}
}
break;
}

var G__22956 = seq__22923;
var G__22957 = chunk__22924;
var G__22958 = count__22925;
var G__22959 = (i__22926 + (1));
seq__22923 = G__22956;
chunk__22924 = G__22957;
count__22925 = G__22958;
i__22926 = G__22959;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22923);
if(temp__4425__auto__){
var seq__22923__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22923__$1)){
var c__17945__auto__ = cljs.core.chunk_first.call(null,seq__22923__$1);
var G__22960 = cljs.core.chunk_rest.call(null,seq__22923__$1);
var G__22961 = c__17945__auto__;
var G__22962 = cljs.core.count.call(null,c__17945__auto__);
var G__22963 = (0);
seq__22923 = G__22960;
chunk__22924 = G__22961;
count__22925 = G__22962;
i__22926 = G__22963;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22923__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22931_22964 = cljs.core.seq.call(null,requires);
var chunk__22932_22965 = null;
var count__22933_22966 = (0);
var i__22934_22967 = (0);
while(true){
if((i__22934_22967 < count__22933_22966)){
var req_22968 = cljs.core._nth.call(null,chunk__22932_22965,i__22934_22967);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22968,prov);

var G__22969 = seq__22931_22964;
var G__22970 = chunk__22932_22965;
var G__22971 = count__22933_22966;
var G__22972 = (i__22934_22967 + (1));
seq__22931_22964 = G__22969;
chunk__22932_22965 = G__22970;
count__22933_22966 = G__22971;
i__22934_22967 = G__22972;
continue;
} else {
var temp__4425__auto___22973__$1 = cljs.core.seq.call(null,seq__22931_22964);
if(temp__4425__auto___22973__$1){
var seq__22931_22974__$1 = temp__4425__auto___22973__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22931_22974__$1)){
var c__17945__auto___22975 = cljs.core.chunk_first.call(null,seq__22931_22974__$1);
var G__22976 = cljs.core.chunk_rest.call(null,seq__22931_22974__$1);
var G__22977 = c__17945__auto___22975;
var G__22978 = cljs.core.count.call(null,c__17945__auto___22975);
var G__22979 = (0);
seq__22931_22964 = G__22976;
chunk__22932_22965 = G__22977;
count__22933_22966 = G__22978;
i__22934_22967 = G__22979;
continue;
} else {
var req_22980 = cljs.core.first.call(null,seq__22931_22974__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22980,prov);

var G__22981 = cljs.core.next.call(null,seq__22931_22974__$1);
var G__22982 = null;
var G__22983 = (0);
var G__22984 = (0);
seq__22931_22964 = G__22981;
chunk__22932_22965 = G__22982;
count__22933_22966 = G__22983;
i__22934_22967 = G__22984;
continue;
}
} else {
}
}
break;
}

var G__22985 = cljs.core.next.call(null,seq__22923__$1);
var G__22986 = null;
var G__22987 = (0);
var G__22988 = (0);
seq__22923 = G__22985;
chunk__22924 = G__22986;
count__22925 = G__22987;
i__22926 = G__22988;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22993_22997 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22994_22998 = null;
var count__22995_22999 = (0);
var i__22996_23000 = (0);
while(true){
if((i__22996_23000 < count__22995_22999)){
var ns_23001 = cljs.core._nth.call(null,chunk__22994_22998,i__22996_23000);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23001);

var G__23002 = seq__22993_22997;
var G__23003 = chunk__22994_22998;
var G__23004 = count__22995_22999;
var G__23005 = (i__22996_23000 + (1));
seq__22993_22997 = G__23002;
chunk__22994_22998 = G__23003;
count__22995_22999 = G__23004;
i__22996_23000 = G__23005;
continue;
} else {
var temp__4425__auto___23006 = cljs.core.seq.call(null,seq__22993_22997);
if(temp__4425__auto___23006){
var seq__22993_23007__$1 = temp__4425__auto___23006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22993_23007__$1)){
var c__17945__auto___23008 = cljs.core.chunk_first.call(null,seq__22993_23007__$1);
var G__23009 = cljs.core.chunk_rest.call(null,seq__22993_23007__$1);
var G__23010 = c__17945__auto___23008;
var G__23011 = cljs.core.count.call(null,c__17945__auto___23008);
var G__23012 = (0);
seq__22993_22997 = G__23009;
chunk__22994_22998 = G__23010;
count__22995_22999 = G__23011;
i__22996_23000 = G__23012;
continue;
} else {
var ns_23013 = cljs.core.first.call(null,seq__22993_23007__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23013);

var G__23014 = cljs.core.next.call(null,seq__22993_23007__$1);
var G__23015 = null;
var G__23016 = (0);
var G__23017 = (0);
seq__22993_22997 = G__23014;
chunk__22994_22998 = G__23015;
count__22995_22999 = G__23016;
i__22996_23000 = G__23017;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__17142__auto__ = goog.require__;
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23018__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23019__i = 0, G__23019__a = new Array(arguments.length -  0);
while (G__23019__i < G__23019__a.length) {G__23019__a[G__23019__i] = arguments[G__23019__i + 0]; ++G__23019__i;}
  args = new cljs.core.IndexedSeq(G__23019__a,0);
} 
return G__23018__delegate.call(this,args);};
G__23018.cljs$lang$maxFixedArity = 0;
G__23018.cljs$lang$applyTo = (function (arglist__23020){
var args = cljs.core.seq(arglist__23020);
return G__23018__delegate(args);
});
G__23018.cljs$core$IFn$_invoke$arity$variadic = G__23018__delegate;
return G__23018;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23022 = cljs.core._EQ_;
var expr__23023 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23022.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23023))){
var path_parts = ((function (pred__23022,expr__23023){
return (function (p1__23021_SHARP_){
return clojure.string.split.call(null,p1__23021_SHARP_,/[\/\\]/);
});})(pred__23022,expr__23023))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23022,expr__23023){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23025){if((e23025 instanceof Error)){
var e = e23025;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23025;

}
}})());
});
;})(path_parts,sep,root,pred__23022,expr__23023))
} else {
if(cljs.core.truth_(pred__23022.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23023))){
return ((function (pred__23022,expr__23023){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23022,expr__23023){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23022,expr__23023))
);

return deferred.addErrback(((function (deferred,pred__23022,expr__23023){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23022,expr__23023))
);
});
;})(pred__23022,expr__23023))
} else {
return ((function (pred__23022,expr__23023){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23022,expr__23023))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23026,callback){
var map__23029 = p__23026;
var map__23029__$1 = ((((!((map__23029 == null)))?((((map__23029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23029):map__23029);
var file_msg = map__23029__$1;
var request_url = cljs.core.get.call(null,map__23029__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23029,map__23029__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23029,map__23029__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto__){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto__){
return (function (state_23053){
var state_val_23054 = (state_23053[(1)]);
if((state_val_23054 === (7))){
var inst_23049 = (state_23053[(2)]);
var state_23053__$1 = state_23053;
var statearr_23055_23075 = state_23053__$1;
(statearr_23055_23075[(2)] = inst_23049);

(statearr_23055_23075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (1))){
var state_23053__$1 = state_23053;
var statearr_23056_23076 = state_23053__$1;
(statearr_23056_23076[(2)] = null);

(statearr_23056_23076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (4))){
var inst_23033 = (state_23053[(7)]);
var inst_23033__$1 = (state_23053[(2)]);
var state_23053__$1 = (function (){var statearr_23057 = state_23053;
(statearr_23057[(7)] = inst_23033__$1);

return statearr_23057;
})();
if(cljs.core.truth_(inst_23033__$1)){
var statearr_23058_23077 = state_23053__$1;
(statearr_23058_23077[(1)] = (5));

} else {
var statearr_23059_23078 = state_23053__$1;
(statearr_23059_23078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (6))){
var state_23053__$1 = state_23053;
var statearr_23060_23079 = state_23053__$1;
(statearr_23060_23079[(2)] = null);

(statearr_23060_23079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (3))){
var inst_23051 = (state_23053[(2)]);
var state_23053__$1 = state_23053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23053__$1,inst_23051);
} else {
if((state_val_23054 === (2))){
var state_23053__$1 = state_23053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23053__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23054 === (11))){
var inst_23045 = (state_23053[(2)]);
var state_23053__$1 = (function (){var statearr_23061 = state_23053;
(statearr_23061[(8)] = inst_23045);

return statearr_23061;
})();
var statearr_23062_23080 = state_23053__$1;
(statearr_23062_23080[(2)] = null);

(statearr_23062_23080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (9))){
var inst_23037 = (state_23053[(9)]);
var inst_23039 = (state_23053[(10)]);
var inst_23041 = inst_23039.call(null,inst_23037);
var state_23053__$1 = state_23053;
var statearr_23063_23081 = state_23053__$1;
(statearr_23063_23081[(2)] = inst_23041);

(statearr_23063_23081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (5))){
var inst_23033 = (state_23053[(7)]);
var inst_23035 = figwheel.client.file_reloading.blocking_load.call(null,inst_23033);
var state_23053__$1 = state_23053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23053__$1,(8),inst_23035);
} else {
if((state_val_23054 === (10))){
var inst_23037 = (state_23053[(9)]);
var inst_23043 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23037);
var state_23053__$1 = state_23053;
var statearr_23064_23082 = state_23053__$1;
(statearr_23064_23082[(2)] = inst_23043);

(statearr_23064_23082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23054 === (8))){
var inst_23033 = (state_23053[(7)]);
var inst_23039 = (state_23053[(10)]);
var inst_23037 = (state_23053[(2)]);
var inst_23038 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23039__$1 = cljs.core.get.call(null,inst_23038,inst_23033);
var state_23053__$1 = (function (){var statearr_23065 = state_23053;
(statearr_23065[(9)] = inst_23037);

(statearr_23065[(10)] = inst_23039__$1);

return statearr_23065;
})();
if(cljs.core.truth_(inst_23039__$1)){
var statearr_23066_23083 = state_23053__$1;
(statearr_23066_23083[(1)] = (9));

} else {
var statearr_23067_23084 = state_23053__$1;
(statearr_23067_23084[(1)] = (10));

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
});})(c__19991__auto__))
;
return ((function (switch__19879__auto__,c__19991__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19880__auto__ = null;
var figwheel$client$file_reloading$state_machine__19880__auto____0 = (function (){
var statearr_23071 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23071[(0)] = figwheel$client$file_reloading$state_machine__19880__auto__);

(statearr_23071[(1)] = (1));

return statearr_23071;
});
var figwheel$client$file_reloading$state_machine__19880__auto____1 = (function (state_23053){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_23053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e23072){if((e23072 instanceof Object)){
var ex__19883__auto__ = e23072;
var statearr_23073_23085 = state_23053;
(statearr_23073_23085[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23086 = state_23053;
state_23053 = G__23086;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19880__auto__ = function(state_23053){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19880__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19880__auto____1.call(this,state_23053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19880__auto____0;
figwheel$client$file_reloading$state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19880__auto____1;
return figwheel$client$file_reloading$state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto__))
})();
var state__19993__auto__ = (function (){var statearr_23074 = f__19992__auto__.call(null);
(statearr_23074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto__);

return statearr_23074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto__))
);

return c__19991__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23087,callback){
var map__23090 = p__23087;
var map__23090__$1 = ((((!((map__23090 == null)))?((((map__23090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23090):map__23090);
var file_msg = map__23090__$1;
var namespace = cljs.core.get.call(null,map__23090__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23090,map__23090__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23090,map__23090__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23092){
var map__23095 = p__23092;
var map__23095__$1 = ((((!((map__23095 == null)))?((((map__23095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23095):map__23095);
var file_msg = map__23095__$1;
var namespace = cljs.core.get.call(null,map__23095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17130__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17130__auto__){
var or__17142__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17142__auto__)){
return or__17142__auto__;
} else {
var or__17142__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17142__auto____$1)){
return or__17142__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17130__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23097,callback){
var map__23100 = p__23097;
var map__23100__$1 = ((((!((map__23100 == null)))?((((map__23100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23100):map__23100);
var file_msg = map__23100__$1;
var request_url = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23100__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19991__auto___23188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto___23188,out){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto___23188,out){
return (function (state_23170){
var state_val_23171 = (state_23170[(1)]);
if((state_val_23171 === (1))){
var inst_23148 = cljs.core.nth.call(null,files,(0),null);
var inst_23149 = cljs.core.nthnext.call(null,files,(1));
var inst_23150 = files;
var state_23170__$1 = (function (){var statearr_23172 = state_23170;
(statearr_23172[(7)] = inst_23148);

(statearr_23172[(8)] = inst_23150);

(statearr_23172[(9)] = inst_23149);

return statearr_23172;
})();
var statearr_23173_23189 = state_23170__$1;
(statearr_23173_23189[(2)] = null);

(statearr_23173_23189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (2))){
var inst_23153 = (state_23170[(10)]);
var inst_23150 = (state_23170[(8)]);
var inst_23153__$1 = cljs.core.nth.call(null,inst_23150,(0),null);
var inst_23154 = cljs.core.nthnext.call(null,inst_23150,(1));
var inst_23155 = (inst_23153__$1 == null);
var inst_23156 = cljs.core.not.call(null,inst_23155);
var state_23170__$1 = (function (){var statearr_23174 = state_23170;
(statearr_23174[(10)] = inst_23153__$1);

(statearr_23174[(11)] = inst_23154);

return statearr_23174;
})();
if(inst_23156){
var statearr_23175_23190 = state_23170__$1;
(statearr_23175_23190[(1)] = (4));

} else {
var statearr_23176_23191 = state_23170__$1;
(statearr_23176_23191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (3))){
var inst_23168 = (state_23170[(2)]);
var state_23170__$1 = state_23170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23170__$1,inst_23168);
} else {
if((state_val_23171 === (4))){
var inst_23153 = (state_23170[(10)]);
var inst_23158 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23153);
var state_23170__$1 = state_23170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23170__$1,(7),inst_23158);
} else {
if((state_val_23171 === (5))){
var inst_23164 = cljs.core.async.close_BANG_.call(null,out);
var state_23170__$1 = state_23170;
var statearr_23177_23192 = state_23170__$1;
(statearr_23177_23192[(2)] = inst_23164);

(statearr_23177_23192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (6))){
var inst_23166 = (state_23170[(2)]);
var state_23170__$1 = state_23170;
var statearr_23178_23193 = state_23170__$1;
(statearr_23178_23193[(2)] = inst_23166);

(statearr_23178_23193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23171 === (7))){
var inst_23154 = (state_23170[(11)]);
var inst_23160 = (state_23170[(2)]);
var inst_23161 = cljs.core.async.put_BANG_.call(null,out,inst_23160);
var inst_23150 = inst_23154;
var state_23170__$1 = (function (){var statearr_23179 = state_23170;
(statearr_23179[(12)] = inst_23161);

(statearr_23179[(8)] = inst_23150);

return statearr_23179;
})();
var statearr_23180_23194 = state_23170__$1;
(statearr_23180_23194[(2)] = null);

(statearr_23180_23194[(1)] = (2));


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
});})(c__19991__auto___23188,out))
;
return ((function (switch__19879__auto__,c__19991__auto___23188,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto____0 = (function (){
var statearr_23184 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23184[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto__);

(statearr_23184[(1)] = (1));

return statearr_23184;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto____1 = (function (state_23170){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_23170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e23185){if((e23185 instanceof Object)){
var ex__19883__auto__ = e23185;
var statearr_23186_23195 = state_23170;
(statearr_23186_23195[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23196 = state_23170;
state_23170 = G__23196;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto__ = function(state_23170){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto____1.call(this,state_23170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto___23188,out))
})();
var state__19993__auto__ = (function (){var statearr_23187 = f__19992__auto__.call(null);
(statearr_23187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto___23188);

return statearr_23187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto___23188,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23197,opts){
var map__23201 = p__23197;
var map__23201__$1 = ((((!((map__23201 == null)))?((((map__23201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23201):map__23201);
var eval_body__$1 = cljs.core.get.call(null,map__23201__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23201__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17130__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17130__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17130__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23203){var e = e23203;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23204_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23204_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23209){
var vec__23210 = p__23209;
var k = cljs.core.nth.call(null,vec__23210,(0),null);
var v = cljs.core.nth.call(null,vec__23210,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23211){
var vec__23212 = p__23211;
var k = cljs.core.nth.call(null,vec__23212,(0),null);
var v = cljs.core.nth.call(null,vec__23212,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23216,p__23217){
var map__23464 = p__23216;
var map__23464__$1 = ((((!((map__23464 == null)))?((((map__23464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23464):map__23464);
var opts = map__23464__$1;
var before_jsload = cljs.core.get.call(null,map__23464__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23464__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23464__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23465 = p__23217;
var map__23465__$1 = ((((!((map__23465 == null)))?((((map__23465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23465):map__23465);
var msg = map__23465__$1;
var files = cljs.core.get.call(null,map__23465__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23465__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23465__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19991__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19992__auto__ = (function (){var switch__19879__auto__ = ((function (c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23618){
var state_val_23619 = (state_23618[(1)]);
if((state_val_23619 === (7))){
var inst_23480 = (state_23618[(7)]);
var inst_23482 = (state_23618[(8)]);
var inst_23481 = (state_23618[(9)]);
var inst_23479 = (state_23618[(10)]);
var inst_23487 = cljs.core._nth.call(null,inst_23480,inst_23482);
var inst_23488 = figwheel.client.file_reloading.eval_body.call(null,inst_23487,opts);
var inst_23489 = (inst_23482 + (1));
var tmp23620 = inst_23480;
var tmp23621 = inst_23481;
var tmp23622 = inst_23479;
var inst_23479__$1 = tmp23622;
var inst_23480__$1 = tmp23620;
var inst_23481__$1 = tmp23621;
var inst_23482__$1 = inst_23489;
var state_23618__$1 = (function (){var statearr_23623 = state_23618;
(statearr_23623[(7)] = inst_23480__$1);

(statearr_23623[(8)] = inst_23482__$1);

(statearr_23623[(11)] = inst_23488);

(statearr_23623[(9)] = inst_23481__$1);

(statearr_23623[(10)] = inst_23479__$1);

return statearr_23623;
})();
var statearr_23624_23710 = state_23618__$1;
(statearr_23624_23710[(2)] = null);

(statearr_23624_23710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (20))){
var inst_23522 = (state_23618[(12)]);
var inst_23530 = figwheel.client.file_reloading.sort_files.call(null,inst_23522);
var state_23618__$1 = state_23618;
var statearr_23625_23711 = state_23618__$1;
(statearr_23625_23711[(2)] = inst_23530);

(statearr_23625_23711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (27))){
var state_23618__$1 = state_23618;
var statearr_23626_23712 = state_23618__$1;
(statearr_23626_23712[(2)] = null);

(statearr_23626_23712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (1))){
var inst_23471 = (state_23618[(13)]);
var inst_23468 = before_jsload.call(null,files);
var inst_23469 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23470 = (function (){return ((function (inst_23471,inst_23468,inst_23469,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23213_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23213_SHARP_);
});
;})(inst_23471,inst_23468,inst_23469,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23471__$1 = cljs.core.filter.call(null,inst_23470,files);
var inst_23472 = cljs.core.not_empty.call(null,inst_23471__$1);
var state_23618__$1 = (function (){var statearr_23627 = state_23618;
(statearr_23627[(13)] = inst_23471__$1);

(statearr_23627[(14)] = inst_23468);

(statearr_23627[(15)] = inst_23469);

return statearr_23627;
})();
if(cljs.core.truth_(inst_23472)){
var statearr_23628_23713 = state_23618__$1;
(statearr_23628_23713[(1)] = (2));

} else {
var statearr_23629_23714 = state_23618__$1;
(statearr_23629_23714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (24))){
var state_23618__$1 = state_23618;
var statearr_23630_23715 = state_23618__$1;
(statearr_23630_23715[(2)] = null);

(statearr_23630_23715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (39))){
var inst_23572 = (state_23618[(16)]);
var state_23618__$1 = state_23618;
var statearr_23631_23716 = state_23618__$1;
(statearr_23631_23716[(2)] = inst_23572);

(statearr_23631_23716[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (46))){
var inst_23613 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
var statearr_23632_23717 = state_23618__$1;
(statearr_23632_23717[(2)] = inst_23613);

(statearr_23632_23717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (4))){
var inst_23516 = (state_23618[(2)]);
var inst_23517 = cljs.core.List.EMPTY;
var inst_23518 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23517);
var inst_23519 = (function (){return ((function (inst_23516,inst_23517,inst_23518,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23214_SHARP_){
var and__17130__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23214_SHARP_);
if(cljs.core.truth_(and__17130__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23214_SHARP_));
} else {
return and__17130__auto__;
}
});
;})(inst_23516,inst_23517,inst_23518,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23520 = cljs.core.filter.call(null,inst_23519,files);
var inst_23521 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23522 = cljs.core.concat.call(null,inst_23520,inst_23521);
var state_23618__$1 = (function (){var statearr_23633 = state_23618;
(statearr_23633[(12)] = inst_23522);

(statearr_23633[(17)] = inst_23516);

(statearr_23633[(18)] = inst_23518);

return statearr_23633;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23634_23718 = state_23618__$1;
(statearr_23634_23718[(1)] = (16));

} else {
var statearr_23635_23719 = state_23618__$1;
(statearr_23635_23719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (15))){
var inst_23506 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
var statearr_23636_23720 = state_23618__$1;
(statearr_23636_23720[(2)] = inst_23506);

(statearr_23636_23720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (21))){
var inst_23532 = (state_23618[(19)]);
var inst_23532__$1 = (state_23618[(2)]);
var inst_23533 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23532__$1);
var state_23618__$1 = (function (){var statearr_23637 = state_23618;
(statearr_23637[(19)] = inst_23532__$1);

return statearr_23637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23618__$1,(22),inst_23533);
} else {
if((state_val_23619 === (31))){
var inst_23616 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23618__$1,inst_23616);
} else {
if((state_val_23619 === (32))){
var inst_23572 = (state_23618[(16)]);
var inst_23577 = inst_23572.cljs$lang$protocol_mask$partition0$;
var inst_23578 = (inst_23577 & (64));
var inst_23579 = inst_23572.cljs$core$ISeq$;
var inst_23580 = (inst_23578) || (inst_23579);
var state_23618__$1 = state_23618;
if(cljs.core.truth_(inst_23580)){
var statearr_23638_23721 = state_23618__$1;
(statearr_23638_23721[(1)] = (35));

} else {
var statearr_23639_23722 = state_23618__$1;
(statearr_23639_23722[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (40))){
var inst_23593 = (state_23618[(20)]);
var inst_23592 = (state_23618[(2)]);
var inst_23593__$1 = cljs.core.get.call(null,inst_23592,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23594 = cljs.core.get.call(null,inst_23592,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23595 = cljs.core.not_empty.call(null,inst_23593__$1);
var state_23618__$1 = (function (){var statearr_23640 = state_23618;
(statearr_23640[(21)] = inst_23594);

(statearr_23640[(20)] = inst_23593__$1);

return statearr_23640;
})();
if(cljs.core.truth_(inst_23595)){
var statearr_23641_23723 = state_23618__$1;
(statearr_23641_23723[(1)] = (41));

} else {
var statearr_23642_23724 = state_23618__$1;
(statearr_23642_23724[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (33))){
var state_23618__$1 = state_23618;
var statearr_23643_23725 = state_23618__$1;
(statearr_23643_23725[(2)] = false);

(statearr_23643_23725[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (13))){
var inst_23492 = (state_23618[(22)]);
var inst_23496 = cljs.core.chunk_first.call(null,inst_23492);
var inst_23497 = cljs.core.chunk_rest.call(null,inst_23492);
var inst_23498 = cljs.core.count.call(null,inst_23496);
var inst_23479 = inst_23497;
var inst_23480 = inst_23496;
var inst_23481 = inst_23498;
var inst_23482 = (0);
var state_23618__$1 = (function (){var statearr_23644 = state_23618;
(statearr_23644[(7)] = inst_23480);

(statearr_23644[(8)] = inst_23482);

(statearr_23644[(9)] = inst_23481);

(statearr_23644[(10)] = inst_23479);

return statearr_23644;
})();
var statearr_23645_23726 = state_23618__$1;
(statearr_23645_23726[(2)] = null);

(statearr_23645_23726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (22))){
var inst_23540 = (state_23618[(23)]);
var inst_23535 = (state_23618[(24)]);
var inst_23532 = (state_23618[(19)]);
var inst_23536 = (state_23618[(25)]);
var inst_23535__$1 = (state_23618[(2)]);
var inst_23536__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23535__$1);
var inst_23537 = (function (){var all_files = inst_23532;
var res_SINGLEQUOTE_ = inst_23535__$1;
var res = inst_23536__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23540,inst_23535,inst_23532,inst_23536,inst_23535__$1,inst_23536__$1,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23215_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23215_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23540,inst_23535,inst_23532,inst_23536,inst_23535__$1,inst_23536__$1,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23538 = cljs.core.filter.call(null,inst_23537,inst_23535__$1);
var inst_23539 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23540__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23539);
var inst_23541 = cljs.core.not_empty.call(null,inst_23540__$1);
var state_23618__$1 = (function (){var statearr_23646 = state_23618;
(statearr_23646[(23)] = inst_23540__$1);

(statearr_23646[(26)] = inst_23538);

(statearr_23646[(24)] = inst_23535__$1);

(statearr_23646[(25)] = inst_23536__$1);

return statearr_23646;
})();
if(cljs.core.truth_(inst_23541)){
var statearr_23647_23727 = state_23618__$1;
(statearr_23647_23727[(1)] = (23));

} else {
var statearr_23648_23728 = state_23618__$1;
(statearr_23648_23728[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (36))){
var state_23618__$1 = state_23618;
var statearr_23649_23729 = state_23618__$1;
(statearr_23649_23729[(2)] = false);

(statearr_23649_23729[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (41))){
var inst_23593 = (state_23618[(20)]);
var inst_23597 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23598 = cljs.core.map.call(null,inst_23597,inst_23593);
var inst_23599 = cljs.core.pr_str.call(null,inst_23598);
var inst_23600 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23599)].join('');
var inst_23601 = figwheel.client.utils.log.call(null,inst_23600);
var state_23618__$1 = state_23618;
var statearr_23650_23730 = state_23618__$1;
(statearr_23650_23730[(2)] = inst_23601);

(statearr_23650_23730[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (43))){
var inst_23594 = (state_23618[(21)]);
var inst_23604 = (state_23618[(2)]);
var inst_23605 = cljs.core.not_empty.call(null,inst_23594);
var state_23618__$1 = (function (){var statearr_23651 = state_23618;
(statearr_23651[(27)] = inst_23604);

return statearr_23651;
})();
if(cljs.core.truth_(inst_23605)){
var statearr_23652_23731 = state_23618__$1;
(statearr_23652_23731[(1)] = (44));

} else {
var statearr_23653_23732 = state_23618__$1;
(statearr_23653_23732[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (29))){
var inst_23540 = (state_23618[(23)]);
var inst_23538 = (state_23618[(26)]);
var inst_23535 = (state_23618[(24)]);
var inst_23532 = (state_23618[(19)]);
var inst_23536 = (state_23618[(25)]);
var inst_23572 = (state_23618[(16)]);
var inst_23568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23571 = (function (){var all_files = inst_23532;
var res_SINGLEQUOTE_ = inst_23535;
var res = inst_23536;
var files_not_loaded = inst_23538;
var dependencies_that_loaded = inst_23540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23540,inst_23538,inst_23535,inst_23532,inst_23536,inst_23572,inst_23568,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23570){
var map__23654 = p__23570;
var map__23654__$1 = ((((!((map__23654 == null)))?((((map__23654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23654):map__23654);
var namespace = cljs.core.get.call(null,map__23654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23540,inst_23538,inst_23535,inst_23532,inst_23536,inst_23572,inst_23568,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23572__$1 = cljs.core.group_by.call(null,inst_23571,inst_23538);
var inst_23574 = (inst_23572__$1 == null);
var inst_23575 = cljs.core.not.call(null,inst_23574);
var state_23618__$1 = (function (){var statearr_23656 = state_23618;
(statearr_23656[(28)] = inst_23568);

(statearr_23656[(16)] = inst_23572__$1);

return statearr_23656;
})();
if(inst_23575){
var statearr_23657_23733 = state_23618__$1;
(statearr_23657_23733[(1)] = (32));

} else {
var statearr_23658_23734 = state_23618__$1;
(statearr_23658_23734[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (44))){
var inst_23594 = (state_23618[(21)]);
var inst_23607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23594);
var inst_23608 = cljs.core.pr_str.call(null,inst_23607);
var inst_23609 = [cljs.core.str("not required: "),cljs.core.str(inst_23608)].join('');
var inst_23610 = figwheel.client.utils.log.call(null,inst_23609);
var state_23618__$1 = state_23618;
var statearr_23659_23735 = state_23618__$1;
(statearr_23659_23735[(2)] = inst_23610);

(statearr_23659_23735[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (6))){
var inst_23513 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
var statearr_23660_23736 = state_23618__$1;
(statearr_23660_23736[(2)] = inst_23513);

(statearr_23660_23736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (28))){
var inst_23538 = (state_23618[(26)]);
var inst_23565 = (state_23618[(2)]);
var inst_23566 = cljs.core.not_empty.call(null,inst_23538);
var state_23618__$1 = (function (){var statearr_23661 = state_23618;
(statearr_23661[(29)] = inst_23565);

return statearr_23661;
})();
if(cljs.core.truth_(inst_23566)){
var statearr_23662_23737 = state_23618__$1;
(statearr_23662_23737[(1)] = (29));

} else {
var statearr_23663_23738 = state_23618__$1;
(statearr_23663_23738[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (25))){
var inst_23536 = (state_23618[(25)]);
var inst_23552 = (state_23618[(2)]);
var inst_23553 = cljs.core.not_empty.call(null,inst_23536);
var state_23618__$1 = (function (){var statearr_23664 = state_23618;
(statearr_23664[(30)] = inst_23552);

return statearr_23664;
})();
if(cljs.core.truth_(inst_23553)){
var statearr_23665_23739 = state_23618__$1;
(statearr_23665_23739[(1)] = (26));

} else {
var statearr_23666_23740 = state_23618__$1;
(statearr_23666_23740[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (34))){
var inst_23587 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
if(cljs.core.truth_(inst_23587)){
var statearr_23667_23741 = state_23618__$1;
(statearr_23667_23741[(1)] = (38));

} else {
var statearr_23668_23742 = state_23618__$1;
(statearr_23668_23742[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (17))){
var state_23618__$1 = state_23618;
var statearr_23669_23743 = state_23618__$1;
(statearr_23669_23743[(2)] = recompile_dependents);

(statearr_23669_23743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (3))){
var state_23618__$1 = state_23618;
var statearr_23670_23744 = state_23618__$1;
(statearr_23670_23744[(2)] = null);

(statearr_23670_23744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (12))){
var inst_23509 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
var statearr_23671_23745 = state_23618__$1;
(statearr_23671_23745[(2)] = inst_23509);

(statearr_23671_23745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (2))){
var inst_23471 = (state_23618[(13)]);
var inst_23478 = cljs.core.seq.call(null,inst_23471);
var inst_23479 = inst_23478;
var inst_23480 = null;
var inst_23481 = (0);
var inst_23482 = (0);
var state_23618__$1 = (function (){var statearr_23672 = state_23618;
(statearr_23672[(7)] = inst_23480);

(statearr_23672[(8)] = inst_23482);

(statearr_23672[(9)] = inst_23481);

(statearr_23672[(10)] = inst_23479);

return statearr_23672;
})();
var statearr_23673_23746 = state_23618__$1;
(statearr_23673_23746[(2)] = null);

(statearr_23673_23746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (23))){
var inst_23540 = (state_23618[(23)]);
var inst_23538 = (state_23618[(26)]);
var inst_23535 = (state_23618[(24)]);
var inst_23532 = (state_23618[(19)]);
var inst_23536 = (state_23618[(25)]);
var inst_23543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23545 = (function (){var all_files = inst_23532;
var res_SINGLEQUOTE_ = inst_23535;
var res = inst_23536;
var files_not_loaded = inst_23538;
var dependencies_that_loaded = inst_23540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23540,inst_23538,inst_23535,inst_23532,inst_23536,inst_23543,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23544){
var map__23674 = p__23544;
var map__23674__$1 = ((((!((map__23674 == null)))?((((map__23674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23674):map__23674);
var request_url = cljs.core.get.call(null,map__23674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23540,inst_23538,inst_23535,inst_23532,inst_23536,inst_23543,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23546 = cljs.core.reverse.call(null,inst_23540);
var inst_23547 = cljs.core.map.call(null,inst_23545,inst_23546);
var inst_23548 = cljs.core.pr_str.call(null,inst_23547);
var inst_23549 = figwheel.client.utils.log.call(null,inst_23548);
var state_23618__$1 = (function (){var statearr_23676 = state_23618;
(statearr_23676[(31)] = inst_23543);

return statearr_23676;
})();
var statearr_23677_23747 = state_23618__$1;
(statearr_23677_23747[(2)] = inst_23549);

(statearr_23677_23747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (35))){
var state_23618__$1 = state_23618;
var statearr_23678_23748 = state_23618__$1;
(statearr_23678_23748[(2)] = true);

(statearr_23678_23748[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (19))){
var inst_23522 = (state_23618[(12)]);
var inst_23528 = figwheel.client.file_reloading.expand_files.call(null,inst_23522);
var state_23618__$1 = state_23618;
var statearr_23679_23749 = state_23618__$1;
(statearr_23679_23749[(2)] = inst_23528);

(statearr_23679_23749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (11))){
var state_23618__$1 = state_23618;
var statearr_23680_23750 = state_23618__$1;
(statearr_23680_23750[(2)] = null);

(statearr_23680_23750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (9))){
var inst_23511 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
var statearr_23681_23751 = state_23618__$1;
(statearr_23681_23751[(2)] = inst_23511);

(statearr_23681_23751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (5))){
var inst_23482 = (state_23618[(8)]);
var inst_23481 = (state_23618[(9)]);
var inst_23484 = (inst_23482 < inst_23481);
var inst_23485 = inst_23484;
var state_23618__$1 = state_23618;
if(cljs.core.truth_(inst_23485)){
var statearr_23682_23752 = state_23618__$1;
(statearr_23682_23752[(1)] = (7));

} else {
var statearr_23683_23753 = state_23618__$1;
(statearr_23683_23753[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (14))){
var inst_23492 = (state_23618[(22)]);
var inst_23501 = cljs.core.first.call(null,inst_23492);
var inst_23502 = figwheel.client.file_reloading.eval_body.call(null,inst_23501,opts);
var inst_23503 = cljs.core.next.call(null,inst_23492);
var inst_23479 = inst_23503;
var inst_23480 = null;
var inst_23481 = (0);
var inst_23482 = (0);
var state_23618__$1 = (function (){var statearr_23684 = state_23618;
(statearr_23684[(7)] = inst_23480);

(statearr_23684[(8)] = inst_23482);

(statearr_23684[(9)] = inst_23481);

(statearr_23684[(32)] = inst_23502);

(statearr_23684[(10)] = inst_23479);

return statearr_23684;
})();
var statearr_23685_23754 = state_23618__$1;
(statearr_23685_23754[(2)] = null);

(statearr_23685_23754[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (45))){
var state_23618__$1 = state_23618;
var statearr_23686_23755 = state_23618__$1;
(statearr_23686_23755[(2)] = null);

(statearr_23686_23755[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (26))){
var inst_23540 = (state_23618[(23)]);
var inst_23538 = (state_23618[(26)]);
var inst_23535 = (state_23618[(24)]);
var inst_23532 = (state_23618[(19)]);
var inst_23536 = (state_23618[(25)]);
var inst_23555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23557 = (function (){var all_files = inst_23532;
var res_SINGLEQUOTE_ = inst_23535;
var res = inst_23536;
var files_not_loaded = inst_23538;
var dependencies_that_loaded = inst_23540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23540,inst_23538,inst_23535,inst_23532,inst_23536,inst_23555,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23556){
var map__23687 = p__23556;
var map__23687__$1 = ((((!((map__23687 == null)))?((((map__23687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23687):map__23687);
var namespace = cljs.core.get.call(null,map__23687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23540,inst_23538,inst_23535,inst_23532,inst_23536,inst_23555,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23558 = cljs.core.map.call(null,inst_23557,inst_23536);
var inst_23559 = cljs.core.pr_str.call(null,inst_23558);
var inst_23560 = figwheel.client.utils.log.call(null,inst_23559);
var inst_23561 = (function (){var all_files = inst_23532;
var res_SINGLEQUOTE_ = inst_23535;
var res = inst_23536;
var files_not_loaded = inst_23538;
var dependencies_that_loaded = inst_23540;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23540,inst_23538,inst_23535,inst_23532,inst_23536,inst_23555,inst_23557,inst_23558,inst_23559,inst_23560,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23540,inst_23538,inst_23535,inst_23532,inst_23536,inst_23555,inst_23557,inst_23558,inst_23559,inst_23560,state_val_23619,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23562 = setTimeout(inst_23561,(10));
var state_23618__$1 = (function (){var statearr_23689 = state_23618;
(statearr_23689[(33)] = inst_23560);

(statearr_23689[(34)] = inst_23555);

return statearr_23689;
})();
var statearr_23690_23756 = state_23618__$1;
(statearr_23690_23756[(2)] = inst_23562);

(statearr_23690_23756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (16))){
var state_23618__$1 = state_23618;
var statearr_23691_23757 = state_23618__$1;
(statearr_23691_23757[(2)] = reload_dependents);

(statearr_23691_23757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (38))){
var inst_23572 = (state_23618[(16)]);
var inst_23589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23572);
var state_23618__$1 = state_23618;
var statearr_23692_23758 = state_23618__$1;
(statearr_23692_23758[(2)] = inst_23589);

(statearr_23692_23758[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (30))){
var state_23618__$1 = state_23618;
var statearr_23693_23759 = state_23618__$1;
(statearr_23693_23759[(2)] = null);

(statearr_23693_23759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (10))){
var inst_23492 = (state_23618[(22)]);
var inst_23494 = cljs.core.chunked_seq_QMARK_.call(null,inst_23492);
var state_23618__$1 = state_23618;
if(inst_23494){
var statearr_23694_23760 = state_23618__$1;
(statearr_23694_23760[(1)] = (13));

} else {
var statearr_23695_23761 = state_23618__$1;
(statearr_23695_23761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (18))){
var inst_23526 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
if(cljs.core.truth_(inst_23526)){
var statearr_23696_23762 = state_23618__$1;
(statearr_23696_23762[(1)] = (19));

} else {
var statearr_23697_23763 = state_23618__$1;
(statearr_23697_23763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (42))){
var state_23618__$1 = state_23618;
var statearr_23698_23764 = state_23618__$1;
(statearr_23698_23764[(2)] = null);

(statearr_23698_23764[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (37))){
var inst_23584 = (state_23618[(2)]);
var state_23618__$1 = state_23618;
var statearr_23699_23765 = state_23618__$1;
(statearr_23699_23765[(2)] = inst_23584);

(statearr_23699_23765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23619 === (8))){
var inst_23492 = (state_23618[(22)]);
var inst_23479 = (state_23618[(10)]);
var inst_23492__$1 = cljs.core.seq.call(null,inst_23479);
var state_23618__$1 = (function (){var statearr_23700 = state_23618;
(statearr_23700[(22)] = inst_23492__$1);

return statearr_23700;
})();
if(inst_23492__$1){
var statearr_23701_23766 = state_23618__$1;
(statearr_23701_23766[(1)] = (10));

} else {
var statearr_23702_23767 = state_23618__$1;
(statearr_23702_23767[(1)] = (11));

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
}
});})(c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19879__auto__,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto____0 = (function (){
var statearr_23706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23706[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto__);

(statearr_23706[(1)] = (1));

return statearr_23706;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto____1 = (function (state_23618){
while(true){
var ret_value__19881__auto__ = (function (){try{while(true){
var result__19882__auto__ = switch__19879__auto__.call(null,state_23618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19882__auto__;
}
break;
}
}catch (e23707){if((e23707 instanceof Object)){
var ex__19883__auto__ = e23707;
var statearr_23708_23768 = state_23618;
(statearr_23708_23768[(5)] = ex__19883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23769 = state_23618;
state_23618 = G__23769;
continue;
} else {
return ret_value__19881__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto__ = function(state_23618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto____1.call(this,state_23618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19880__auto__;
})()
;})(switch__19879__auto__,c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19993__auto__ = (function (){var statearr_23709 = f__19992__auto__.call(null);
(statearr_23709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19991__auto__);

return statearr_23709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19993__auto__);
});})(c__19991__auto__,map__23464,map__23464__$1,opts,before_jsload,on_jsload,reload_dependents,map__23465,map__23465__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19991__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23772,link){
var map__23775 = p__23772;
var map__23775__$1 = ((((!((map__23775 == null)))?((((map__23775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23775):map__23775);
var file = cljs.core.get.call(null,map__23775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23775,map__23775__$1,file){
return (function (p1__23770_SHARP_,p2__23771_SHARP_){
if(cljs.core._EQ_.call(null,p1__23770_SHARP_,p2__23771_SHARP_)){
return p1__23770_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23775,map__23775__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23781){
var map__23782 = p__23781;
var map__23782__$1 = ((((!((map__23782 == null)))?((((map__23782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23782):map__23782);
var match_length = cljs.core.get.call(null,map__23782__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23782__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23777_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23777_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23784 = [];
var len__18200__auto___23787 = arguments.length;
var i__18201__auto___23788 = (0);
while(true){
if((i__18201__auto___23788 < len__18200__auto___23787)){
args23784.push((arguments[i__18201__auto___23788]));

var G__23789 = (i__18201__auto___23788 + (1));
i__18201__auto___23788 = G__23789;
continue;
} else {
}
break;
}

var G__23786 = args23784.length;
switch (G__23786) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23784.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23791_SHARP_,p2__23792_SHARP_){
return cljs.core.assoc.call(null,p1__23791_SHARP_,cljs.core.get.call(null,p2__23792_SHARP_,key),p2__23792_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23793){
var map__23796 = p__23793;
var map__23796__$1 = ((((!((map__23796 == null)))?((((map__23796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23796):map__23796);
var f_data = map__23796__$1;
var file = cljs.core.get.call(null,map__23796__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23798,files_msg){
var map__23805 = p__23798;
var map__23805__$1 = ((((!((map__23805 == null)))?((((map__23805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23805):map__23805);
var opts = map__23805__$1;
var on_cssload = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23807_23811 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23808_23812 = null;
var count__23809_23813 = (0);
var i__23810_23814 = (0);
while(true){
if((i__23810_23814 < count__23809_23813)){
var f_23815 = cljs.core._nth.call(null,chunk__23808_23812,i__23810_23814);
figwheel.client.file_reloading.reload_css_file.call(null,f_23815);

var G__23816 = seq__23807_23811;
var G__23817 = chunk__23808_23812;
var G__23818 = count__23809_23813;
var G__23819 = (i__23810_23814 + (1));
seq__23807_23811 = G__23816;
chunk__23808_23812 = G__23817;
count__23809_23813 = G__23818;
i__23810_23814 = G__23819;
continue;
} else {
var temp__4425__auto___23820 = cljs.core.seq.call(null,seq__23807_23811);
if(temp__4425__auto___23820){
var seq__23807_23821__$1 = temp__4425__auto___23820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23807_23821__$1)){
var c__17945__auto___23822 = cljs.core.chunk_first.call(null,seq__23807_23821__$1);
var G__23823 = cljs.core.chunk_rest.call(null,seq__23807_23821__$1);
var G__23824 = c__17945__auto___23822;
var G__23825 = cljs.core.count.call(null,c__17945__auto___23822);
var G__23826 = (0);
seq__23807_23811 = G__23823;
chunk__23808_23812 = G__23824;
count__23809_23813 = G__23825;
i__23810_23814 = G__23826;
continue;
} else {
var f_23827 = cljs.core.first.call(null,seq__23807_23821__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23827);

var G__23828 = cljs.core.next.call(null,seq__23807_23821__$1);
var G__23829 = null;
var G__23830 = (0);
var G__23831 = (0);
seq__23807_23811 = G__23828;
chunk__23808_23812 = G__23829;
count__23809_23813 = G__23830;
i__23810_23814 = G__23831;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23805,map__23805__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23805,map__23805__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map