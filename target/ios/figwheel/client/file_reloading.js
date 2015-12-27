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
var or__17119__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17119__auto__){
return or__17119__auto__;
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
var or__17119__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22786_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22786_SHARP_));
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
var seq__22791 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22792 = null;
var count__22793 = (0);
var i__22794 = (0);
while(true){
if((i__22794 < count__22793)){
var n = cljs.core._nth.call(null,chunk__22792,i__22794);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22795 = seq__22791;
var G__22796 = chunk__22792;
var G__22797 = count__22793;
var G__22798 = (i__22794 + (1));
seq__22791 = G__22795;
chunk__22792 = G__22796;
count__22793 = G__22797;
i__22794 = G__22798;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22791);
if(temp__4425__auto__){
var seq__22791__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22791__$1)){
var c__17922__auto__ = cljs.core.chunk_first.call(null,seq__22791__$1);
var G__22799 = cljs.core.chunk_rest.call(null,seq__22791__$1);
var G__22800 = c__17922__auto__;
var G__22801 = cljs.core.count.call(null,c__17922__auto__);
var G__22802 = (0);
seq__22791 = G__22799;
chunk__22792 = G__22800;
count__22793 = G__22801;
i__22794 = G__22802;
continue;
} else {
var n = cljs.core.first.call(null,seq__22791__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22803 = cljs.core.next.call(null,seq__22791__$1);
var G__22804 = null;
var G__22805 = (0);
var G__22806 = (0);
seq__22791 = G__22803;
chunk__22792 = G__22804;
count__22793 = G__22805;
i__22794 = G__22806;
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

var seq__22845_22852 = cljs.core.seq.call(null,deps);
var chunk__22846_22853 = null;
var count__22847_22854 = (0);
var i__22848_22855 = (0);
while(true){
if((i__22848_22855 < count__22847_22854)){
var dep_22856 = cljs.core._nth.call(null,chunk__22846_22853,i__22848_22855);
topo_sort_helper_STAR_.call(null,dep_22856,(depth + (1)),state);

var G__22857 = seq__22845_22852;
var G__22858 = chunk__22846_22853;
var G__22859 = count__22847_22854;
var G__22860 = (i__22848_22855 + (1));
seq__22845_22852 = G__22857;
chunk__22846_22853 = G__22858;
count__22847_22854 = G__22859;
i__22848_22855 = G__22860;
continue;
} else {
var temp__4425__auto___22861 = cljs.core.seq.call(null,seq__22845_22852);
if(temp__4425__auto___22861){
var seq__22845_22862__$1 = temp__4425__auto___22861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22845_22862__$1)){
var c__17922__auto___22863 = cljs.core.chunk_first.call(null,seq__22845_22862__$1);
var G__22864 = cljs.core.chunk_rest.call(null,seq__22845_22862__$1);
var G__22865 = c__17922__auto___22863;
var G__22866 = cljs.core.count.call(null,c__17922__auto___22863);
var G__22867 = (0);
seq__22845_22852 = G__22864;
chunk__22846_22853 = G__22865;
count__22847_22854 = G__22866;
i__22848_22855 = G__22867;
continue;
} else {
var dep_22868 = cljs.core.first.call(null,seq__22845_22862__$1);
topo_sort_helper_STAR_.call(null,dep_22868,(depth + (1)),state);

var G__22869 = cljs.core.next.call(null,seq__22845_22862__$1);
var G__22870 = null;
var G__22871 = (0);
var G__22872 = (0);
seq__22845_22852 = G__22869;
chunk__22846_22853 = G__22870;
count__22847_22854 = G__22871;
i__22848_22855 = G__22872;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22849){
var vec__22851 = p__22849;
var x = cljs.core.nth.call(null,vec__22851,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22851,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22851,x,xs,get_deps__$1){
return (function (p1__22807_SHARP_){
return clojure.set.difference.call(null,p1__22807_SHARP_,x);
});})(vec__22851,x,xs,get_deps__$1))
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
var seq__22885 = cljs.core.seq.call(null,provides);
var chunk__22886 = null;
var count__22887 = (0);
var i__22888 = (0);
while(true){
if((i__22888 < count__22887)){
var prov = cljs.core._nth.call(null,chunk__22886,i__22888);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22889_22897 = cljs.core.seq.call(null,requires);
var chunk__22890_22898 = null;
var count__22891_22899 = (0);
var i__22892_22900 = (0);
while(true){
if((i__22892_22900 < count__22891_22899)){
var req_22901 = cljs.core._nth.call(null,chunk__22890_22898,i__22892_22900);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22901,prov);

var G__22902 = seq__22889_22897;
var G__22903 = chunk__22890_22898;
var G__22904 = count__22891_22899;
var G__22905 = (i__22892_22900 + (1));
seq__22889_22897 = G__22902;
chunk__22890_22898 = G__22903;
count__22891_22899 = G__22904;
i__22892_22900 = G__22905;
continue;
} else {
var temp__4425__auto___22906 = cljs.core.seq.call(null,seq__22889_22897);
if(temp__4425__auto___22906){
var seq__22889_22907__$1 = temp__4425__auto___22906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22889_22907__$1)){
var c__17922__auto___22908 = cljs.core.chunk_first.call(null,seq__22889_22907__$1);
var G__22909 = cljs.core.chunk_rest.call(null,seq__22889_22907__$1);
var G__22910 = c__17922__auto___22908;
var G__22911 = cljs.core.count.call(null,c__17922__auto___22908);
var G__22912 = (0);
seq__22889_22897 = G__22909;
chunk__22890_22898 = G__22910;
count__22891_22899 = G__22911;
i__22892_22900 = G__22912;
continue;
} else {
var req_22913 = cljs.core.first.call(null,seq__22889_22907__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22913,prov);

var G__22914 = cljs.core.next.call(null,seq__22889_22907__$1);
var G__22915 = null;
var G__22916 = (0);
var G__22917 = (0);
seq__22889_22897 = G__22914;
chunk__22890_22898 = G__22915;
count__22891_22899 = G__22916;
i__22892_22900 = G__22917;
continue;
}
} else {
}
}
break;
}

var G__22918 = seq__22885;
var G__22919 = chunk__22886;
var G__22920 = count__22887;
var G__22921 = (i__22888 + (1));
seq__22885 = G__22918;
chunk__22886 = G__22919;
count__22887 = G__22920;
i__22888 = G__22921;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22885);
if(temp__4425__auto__){
var seq__22885__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22885__$1)){
var c__17922__auto__ = cljs.core.chunk_first.call(null,seq__22885__$1);
var G__22922 = cljs.core.chunk_rest.call(null,seq__22885__$1);
var G__22923 = c__17922__auto__;
var G__22924 = cljs.core.count.call(null,c__17922__auto__);
var G__22925 = (0);
seq__22885 = G__22922;
chunk__22886 = G__22923;
count__22887 = G__22924;
i__22888 = G__22925;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22885__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22893_22926 = cljs.core.seq.call(null,requires);
var chunk__22894_22927 = null;
var count__22895_22928 = (0);
var i__22896_22929 = (0);
while(true){
if((i__22896_22929 < count__22895_22928)){
var req_22930 = cljs.core._nth.call(null,chunk__22894_22927,i__22896_22929);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22930,prov);

var G__22931 = seq__22893_22926;
var G__22932 = chunk__22894_22927;
var G__22933 = count__22895_22928;
var G__22934 = (i__22896_22929 + (1));
seq__22893_22926 = G__22931;
chunk__22894_22927 = G__22932;
count__22895_22928 = G__22933;
i__22896_22929 = G__22934;
continue;
} else {
var temp__4425__auto___22935__$1 = cljs.core.seq.call(null,seq__22893_22926);
if(temp__4425__auto___22935__$1){
var seq__22893_22936__$1 = temp__4425__auto___22935__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22893_22936__$1)){
var c__17922__auto___22937 = cljs.core.chunk_first.call(null,seq__22893_22936__$1);
var G__22938 = cljs.core.chunk_rest.call(null,seq__22893_22936__$1);
var G__22939 = c__17922__auto___22937;
var G__22940 = cljs.core.count.call(null,c__17922__auto___22937);
var G__22941 = (0);
seq__22893_22926 = G__22938;
chunk__22894_22927 = G__22939;
count__22895_22928 = G__22940;
i__22896_22929 = G__22941;
continue;
} else {
var req_22942 = cljs.core.first.call(null,seq__22893_22936__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22942,prov);

var G__22943 = cljs.core.next.call(null,seq__22893_22936__$1);
var G__22944 = null;
var G__22945 = (0);
var G__22946 = (0);
seq__22893_22926 = G__22943;
chunk__22894_22927 = G__22944;
count__22895_22928 = G__22945;
i__22896_22929 = G__22946;
continue;
}
} else {
}
}
break;
}

var G__22947 = cljs.core.next.call(null,seq__22885__$1);
var G__22948 = null;
var G__22949 = (0);
var G__22950 = (0);
seq__22885 = G__22947;
chunk__22886 = G__22948;
count__22887 = G__22949;
i__22888 = G__22950;
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
var seq__22955_22959 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22956_22960 = null;
var count__22957_22961 = (0);
var i__22958_22962 = (0);
while(true){
if((i__22958_22962 < count__22957_22961)){
var ns_22963 = cljs.core._nth.call(null,chunk__22956_22960,i__22958_22962);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22963);

var G__22964 = seq__22955_22959;
var G__22965 = chunk__22956_22960;
var G__22966 = count__22957_22961;
var G__22967 = (i__22958_22962 + (1));
seq__22955_22959 = G__22964;
chunk__22956_22960 = G__22965;
count__22957_22961 = G__22966;
i__22958_22962 = G__22967;
continue;
} else {
var temp__4425__auto___22968 = cljs.core.seq.call(null,seq__22955_22959);
if(temp__4425__auto___22968){
var seq__22955_22969__$1 = temp__4425__auto___22968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22955_22969__$1)){
var c__17922__auto___22970 = cljs.core.chunk_first.call(null,seq__22955_22969__$1);
var G__22971 = cljs.core.chunk_rest.call(null,seq__22955_22969__$1);
var G__22972 = c__17922__auto___22970;
var G__22973 = cljs.core.count.call(null,c__17922__auto___22970);
var G__22974 = (0);
seq__22955_22959 = G__22971;
chunk__22956_22960 = G__22972;
count__22957_22961 = G__22973;
i__22958_22962 = G__22974;
continue;
} else {
var ns_22975 = cljs.core.first.call(null,seq__22955_22969__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22975);

var G__22976 = cljs.core.next.call(null,seq__22955_22969__$1);
var G__22977 = null;
var G__22978 = (0);
var G__22979 = (0);
seq__22955_22959 = G__22976;
chunk__22956_22960 = G__22977;
count__22957_22961 = G__22978;
i__22958_22962 = G__22979;
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
goog.require_figwheel_backup_ = (function (){var or__17119__auto__ = goog.require__;
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
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
var G__22980__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22981__i = 0, G__22981__a = new Array(arguments.length -  0);
while (G__22981__i < G__22981__a.length) {G__22981__a[G__22981__i] = arguments[G__22981__i + 0]; ++G__22981__i;}
  args = new cljs.core.IndexedSeq(G__22981__a,0);
} 
return G__22980__delegate.call(this,args);};
G__22980.cljs$lang$maxFixedArity = 0;
G__22980.cljs$lang$applyTo = (function (arglist__22982){
var args = cljs.core.seq(arglist__22982);
return G__22980__delegate(args);
});
G__22980.cljs$core$IFn$_invoke$arity$variadic = G__22980__delegate;
return G__22980;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22984 = cljs.core._EQ_;
var expr__22985 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22984.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22985))){
var path_parts = ((function (pred__22984,expr__22985){
return (function (p1__22983_SHARP_){
return clojure.string.split.call(null,p1__22983_SHARP_,/[\/\\]/);
});})(pred__22984,expr__22985))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22984,expr__22985){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22987){if((e22987 instanceof Error)){
var e = e22987;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22987;

}
}})());
});
;})(path_parts,sep,root,pred__22984,expr__22985))
} else {
if(cljs.core.truth_(pred__22984.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22985))){
return ((function (pred__22984,expr__22985){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22984,expr__22985){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22984,expr__22985))
);

return deferred.addErrback(((function (deferred,pred__22984,expr__22985){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22984,expr__22985))
);
});
;})(pred__22984,expr__22985))
} else {
return ((function (pred__22984,expr__22985){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22984,expr__22985))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22988,callback){
var map__22991 = p__22988;
var map__22991__$1 = ((((!((map__22991 == null)))?((((map__22991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22991):map__22991);
var file_msg = map__22991__$1;
var request_url = cljs.core.get.call(null,map__22991__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22991,map__22991__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22991,map__22991__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__){
return (function (state_23015){
var state_val_23016 = (state_23015[(1)]);
if((state_val_23016 === (7))){
var inst_23011 = (state_23015[(2)]);
var state_23015__$1 = state_23015;
var statearr_23017_23037 = state_23015__$1;
(statearr_23017_23037[(2)] = inst_23011);

(statearr_23017_23037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (1))){
var state_23015__$1 = state_23015;
var statearr_23018_23038 = state_23015__$1;
(statearr_23018_23038[(2)] = null);

(statearr_23018_23038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (4))){
var inst_22995 = (state_23015[(7)]);
var inst_22995__$1 = (state_23015[(2)]);
var state_23015__$1 = (function (){var statearr_23019 = state_23015;
(statearr_23019[(7)] = inst_22995__$1);

return statearr_23019;
})();
if(cljs.core.truth_(inst_22995__$1)){
var statearr_23020_23039 = state_23015__$1;
(statearr_23020_23039[(1)] = (5));

} else {
var statearr_23021_23040 = state_23015__$1;
(statearr_23021_23040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (6))){
var state_23015__$1 = state_23015;
var statearr_23022_23041 = state_23015__$1;
(statearr_23022_23041[(2)] = null);

(statearr_23022_23041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (3))){
var inst_23013 = (state_23015[(2)]);
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23015__$1,inst_23013);
} else {
if((state_val_23016 === (2))){
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23015__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23016 === (11))){
var inst_23007 = (state_23015[(2)]);
var state_23015__$1 = (function (){var statearr_23023 = state_23015;
(statearr_23023[(8)] = inst_23007);

return statearr_23023;
})();
var statearr_23024_23042 = state_23015__$1;
(statearr_23024_23042[(2)] = null);

(statearr_23024_23042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (9))){
var inst_22999 = (state_23015[(9)]);
var inst_23001 = (state_23015[(10)]);
var inst_23003 = inst_23001.call(null,inst_22999);
var state_23015__$1 = state_23015;
var statearr_23025_23043 = state_23015__$1;
(statearr_23025_23043[(2)] = inst_23003);

(statearr_23025_23043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (5))){
var inst_22995 = (state_23015[(7)]);
var inst_22997 = figwheel.client.file_reloading.blocking_load.call(null,inst_22995);
var state_23015__$1 = state_23015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23015__$1,(8),inst_22997);
} else {
if((state_val_23016 === (10))){
var inst_22999 = (state_23015[(9)]);
var inst_23005 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22999);
var state_23015__$1 = state_23015;
var statearr_23026_23044 = state_23015__$1;
(statearr_23026_23044[(2)] = inst_23005);

(statearr_23026_23044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23016 === (8))){
var inst_22995 = (state_23015[(7)]);
var inst_23001 = (state_23015[(10)]);
var inst_22999 = (state_23015[(2)]);
var inst_23000 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23001__$1 = cljs.core.get.call(null,inst_23000,inst_22995);
var state_23015__$1 = (function (){var statearr_23027 = state_23015;
(statearr_23027[(9)] = inst_22999);

(statearr_23027[(10)] = inst_23001__$1);

return statearr_23027;
})();
if(cljs.core.truth_(inst_23001__$1)){
var statearr_23028_23045 = state_23015__$1;
(statearr_23028_23045[(1)] = (9));

} else {
var statearr_23029_23046 = state_23015__$1;
(statearr_23029_23046[(1)] = (10));

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
});})(c__19953__auto__))
;
return ((function (switch__19841__auto__,c__19953__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19842__auto__ = null;
var figwheel$client$file_reloading$state_machine__19842__auto____0 = (function (){
var statearr_23033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23033[(0)] = figwheel$client$file_reloading$state_machine__19842__auto__);

(statearr_23033[(1)] = (1));

return statearr_23033;
});
var figwheel$client$file_reloading$state_machine__19842__auto____1 = (function (state_23015){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_23015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e23034){if((e23034 instanceof Object)){
var ex__19845__auto__ = e23034;
var statearr_23035_23047 = state_23015;
(statearr_23035_23047[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23048 = state_23015;
state_23015 = G__23048;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19842__auto__ = function(state_23015){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19842__auto____1.call(this,state_23015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19842__auto____0;
figwheel$client$file_reloading$state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19842__auto____1;
return figwheel$client$file_reloading$state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__))
})();
var state__19955__auto__ = (function (){var statearr_23036 = f__19954__auto__.call(null);
(statearr_23036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_23036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__))
);

return c__19953__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23049,callback){
var map__23052 = p__23049;
var map__23052__$1 = ((((!((map__23052 == null)))?((((map__23052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23052):map__23052);
var file_msg = map__23052__$1;
var namespace = cljs.core.get.call(null,map__23052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23052,map__23052__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23052,map__23052__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23054){
var map__23057 = p__23054;
var map__23057__$1 = ((((!((map__23057 == null)))?((((map__23057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23057):map__23057);
var file_msg = map__23057__$1;
var namespace = cljs.core.get.call(null,map__23057__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17107__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17107__auto__){
var or__17119__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17119__auto__)){
return or__17119__auto__;
} else {
var or__17119__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17119__auto____$1)){
return or__17119__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17107__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23059,callback){
var map__23062 = p__23059;
var map__23062__$1 = ((((!((map__23062 == null)))?((((map__23062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23062):map__23062);
var file_msg = map__23062__$1;
var request_url = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23062__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19953__auto___23150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto___23150,out){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto___23150,out){
return (function (state_23132){
var state_val_23133 = (state_23132[(1)]);
if((state_val_23133 === (1))){
var inst_23110 = cljs.core.nth.call(null,files,(0),null);
var inst_23111 = cljs.core.nthnext.call(null,files,(1));
var inst_23112 = files;
var state_23132__$1 = (function (){var statearr_23134 = state_23132;
(statearr_23134[(7)] = inst_23110);

(statearr_23134[(8)] = inst_23111);

(statearr_23134[(9)] = inst_23112);

return statearr_23134;
})();
var statearr_23135_23151 = state_23132__$1;
(statearr_23135_23151[(2)] = null);

(statearr_23135_23151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (2))){
var inst_23115 = (state_23132[(10)]);
var inst_23112 = (state_23132[(9)]);
var inst_23115__$1 = cljs.core.nth.call(null,inst_23112,(0),null);
var inst_23116 = cljs.core.nthnext.call(null,inst_23112,(1));
var inst_23117 = (inst_23115__$1 == null);
var inst_23118 = cljs.core.not.call(null,inst_23117);
var state_23132__$1 = (function (){var statearr_23136 = state_23132;
(statearr_23136[(10)] = inst_23115__$1);

(statearr_23136[(11)] = inst_23116);

return statearr_23136;
})();
if(inst_23118){
var statearr_23137_23152 = state_23132__$1;
(statearr_23137_23152[(1)] = (4));

} else {
var statearr_23138_23153 = state_23132__$1;
(statearr_23138_23153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (3))){
var inst_23130 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23132__$1,inst_23130);
} else {
if((state_val_23133 === (4))){
var inst_23115 = (state_23132[(10)]);
var inst_23120 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23115);
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23132__$1,(7),inst_23120);
} else {
if((state_val_23133 === (5))){
var inst_23126 = cljs.core.async.close_BANG_.call(null,out);
var state_23132__$1 = state_23132;
var statearr_23139_23154 = state_23132__$1;
(statearr_23139_23154[(2)] = inst_23126);

(statearr_23139_23154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (6))){
var inst_23128 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
var statearr_23140_23155 = state_23132__$1;
(statearr_23140_23155[(2)] = inst_23128);

(statearr_23140_23155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (7))){
var inst_23116 = (state_23132[(11)]);
var inst_23122 = (state_23132[(2)]);
var inst_23123 = cljs.core.async.put_BANG_.call(null,out,inst_23122);
var inst_23112 = inst_23116;
var state_23132__$1 = (function (){var statearr_23141 = state_23132;
(statearr_23141[(12)] = inst_23123);

(statearr_23141[(9)] = inst_23112);

return statearr_23141;
})();
var statearr_23142_23156 = state_23132__$1;
(statearr_23142_23156[(2)] = null);

(statearr_23142_23156[(1)] = (2));


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
});})(c__19953__auto___23150,out))
;
return ((function (switch__19841__auto__,c__19953__auto___23150,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto____0 = (function (){
var statearr_23146 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23146[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto__);

(statearr_23146[(1)] = (1));

return statearr_23146;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto____1 = (function (state_23132){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_23132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e23147){if((e23147 instanceof Object)){
var ex__19845__auto__ = e23147;
var statearr_23148_23157 = state_23132;
(statearr_23148_23157[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23158 = state_23132;
state_23132 = G__23158;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto__ = function(state_23132){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto____1.call(this,state_23132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto___23150,out))
})();
var state__19955__auto__ = (function (){var statearr_23149 = f__19954__auto__.call(null);
(statearr_23149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto___23150);

return statearr_23149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto___23150,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23159,opts){
var map__23163 = p__23159;
var map__23163__$1 = ((((!((map__23163 == null)))?((((map__23163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23163):map__23163);
var eval_body__$1 = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23163__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17107__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17107__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17107__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23165){var e = e23165;
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
return (function (p1__23166_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23166_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__23171){
var vec__23172 = p__23171;
var k = cljs.core.nth.call(null,vec__23172,(0),null);
var v = cljs.core.nth.call(null,vec__23172,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23173){
var vec__23174 = p__23173;
var k = cljs.core.nth.call(null,vec__23174,(0),null);
var v = cljs.core.nth.call(null,vec__23174,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23178,p__23179){
var map__23426 = p__23178;
var map__23426__$1 = ((((!((map__23426 == null)))?((((map__23426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23426):map__23426);
var opts = map__23426__$1;
var before_jsload = cljs.core.get.call(null,map__23426__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23426__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23426__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23427 = p__23179;
var map__23427__$1 = ((((!((map__23427 == null)))?((((map__23427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23427):map__23427);
var msg = map__23427__$1;
var files = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23427__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19954__auto__ = (function (){var switch__19841__auto__ = ((function (c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23580){
var state_val_23581 = (state_23580[(1)]);
if((state_val_23581 === (7))){
var inst_23442 = (state_23580[(7)]);
var inst_23444 = (state_23580[(8)]);
var inst_23443 = (state_23580[(9)]);
var inst_23441 = (state_23580[(10)]);
var inst_23449 = cljs.core._nth.call(null,inst_23442,inst_23444);
var inst_23450 = figwheel.client.file_reloading.eval_body.call(null,inst_23449,opts);
var inst_23451 = (inst_23444 + (1));
var tmp23582 = inst_23442;
var tmp23583 = inst_23443;
var tmp23584 = inst_23441;
var inst_23441__$1 = tmp23584;
var inst_23442__$1 = tmp23582;
var inst_23443__$1 = tmp23583;
var inst_23444__$1 = inst_23451;
var state_23580__$1 = (function (){var statearr_23585 = state_23580;
(statearr_23585[(7)] = inst_23442__$1);

(statearr_23585[(8)] = inst_23444__$1);

(statearr_23585[(9)] = inst_23443__$1);

(statearr_23585[(11)] = inst_23450);

(statearr_23585[(10)] = inst_23441__$1);

return statearr_23585;
})();
var statearr_23586_23672 = state_23580__$1;
(statearr_23586_23672[(2)] = null);

(statearr_23586_23672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (20))){
var inst_23484 = (state_23580[(12)]);
var inst_23492 = figwheel.client.file_reloading.sort_files.call(null,inst_23484);
var state_23580__$1 = state_23580;
var statearr_23587_23673 = state_23580__$1;
(statearr_23587_23673[(2)] = inst_23492);

(statearr_23587_23673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (27))){
var state_23580__$1 = state_23580;
var statearr_23588_23674 = state_23580__$1;
(statearr_23588_23674[(2)] = null);

(statearr_23588_23674[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (1))){
var inst_23433 = (state_23580[(13)]);
var inst_23430 = before_jsload.call(null,files);
var inst_23431 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23432 = (function (){return ((function (inst_23433,inst_23430,inst_23431,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23175_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23175_SHARP_);
});
;})(inst_23433,inst_23430,inst_23431,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23433__$1 = cljs.core.filter.call(null,inst_23432,files);
var inst_23434 = cljs.core.not_empty.call(null,inst_23433__$1);
var state_23580__$1 = (function (){var statearr_23589 = state_23580;
(statearr_23589[(14)] = inst_23431);

(statearr_23589[(13)] = inst_23433__$1);

(statearr_23589[(15)] = inst_23430);

return statearr_23589;
})();
if(cljs.core.truth_(inst_23434)){
var statearr_23590_23675 = state_23580__$1;
(statearr_23590_23675[(1)] = (2));

} else {
var statearr_23591_23676 = state_23580__$1;
(statearr_23591_23676[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (24))){
var state_23580__$1 = state_23580;
var statearr_23592_23677 = state_23580__$1;
(statearr_23592_23677[(2)] = null);

(statearr_23592_23677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (39))){
var inst_23534 = (state_23580[(16)]);
var state_23580__$1 = state_23580;
var statearr_23593_23678 = state_23580__$1;
(statearr_23593_23678[(2)] = inst_23534);

(statearr_23593_23678[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (46))){
var inst_23575 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23594_23679 = state_23580__$1;
(statearr_23594_23679[(2)] = inst_23575);

(statearr_23594_23679[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (4))){
var inst_23478 = (state_23580[(2)]);
var inst_23479 = cljs.core.List.EMPTY;
var inst_23480 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23479);
var inst_23481 = (function (){return ((function (inst_23478,inst_23479,inst_23480,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23176_SHARP_){
var and__17107__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23176_SHARP_);
if(cljs.core.truth_(and__17107__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23176_SHARP_));
} else {
return and__17107__auto__;
}
});
;})(inst_23478,inst_23479,inst_23480,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23482 = cljs.core.filter.call(null,inst_23481,files);
var inst_23483 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23484 = cljs.core.concat.call(null,inst_23482,inst_23483);
var state_23580__$1 = (function (){var statearr_23595 = state_23580;
(statearr_23595[(17)] = inst_23480);

(statearr_23595[(18)] = inst_23478);

(statearr_23595[(12)] = inst_23484);

return statearr_23595;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23596_23680 = state_23580__$1;
(statearr_23596_23680[(1)] = (16));

} else {
var statearr_23597_23681 = state_23580__$1;
(statearr_23597_23681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (15))){
var inst_23468 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23598_23682 = state_23580__$1;
(statearr_23598_23682[(2)] = inst_23468);

(statearr_23598_23682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (21))){
var inst_23494 = (state_23580[(19)]);
var inst_23494__$1 = (state_23580[(2)]);
var inst_23495 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23494__$1);
var state_23580__$1 = (function (){var statearr_23599 = state_23580;
(statearr_23599[(19)] = inst_23494__$1);

return statearr_23599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23580__$1,(22),inst_23495);
} else {
if((state_val_23581 === (31))){
var inst_23578 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23580__$1,inst_23578);
} else {
if((state_val_23581 === (32))){
var inst_23534 = (state_23580[(16)]);
var inst_23539 = inst_23534.cljs$lang$protocol_mask$partition0$;
var inst_23540 = (inst_23539 & (64));
var inst_23541 = inst_23534.cljs$core$ISeq$;
var inst_23542 = (inst_23540) || (inst_23541);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23542)){
var statearr_23600_23683 = state_23580__$1;
(statearr_23600_23683[(1)] = (35));

} else {
var statearr_23601_23684 = state_23580__$1;
(statearr_23601_23684[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (40))){
var inst_23555 = (state_23580[(20)]);
var inst_23554 = (state_23580[(2)]);
var inst_23555__$1 = cljs.core.get.call(null,inst_23554,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23556 = cljs.core.get.call(null,inst_23554,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23557 = cljs.core.not_empty.call(null,inst_23555__$1);
var state_23580__$1 = (function (){var statearr_23602 = state_23580;
(statearr_23602[(21)] = inst_23556);

(statearr_23602[(20)] = inst_23555__$1);

return statearr_23602;
})();
if(cljs.core.truth_(inst_23557)){
var statearr_23603_23685 = state_23580__$1;
(statearr_23603_23685[(1)] = (41));

} else {
var statearr_23604_23686 = state_23580__$1;
(statearr_23604_23686[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (33))){
var state_23580__$1 = state_23580;
var statearr_23605_23687 = state_23580__$1;
(statearr_23605_23687[(2)] = false);

(statearr_23605_23687[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (13))){
var inst_23454 = (state_23580[(22)]);
var inst_23458 = cljs.core.chunk_first.call(null,inst_23454);
var inst_23459 = cljs.core.chunk_rest.call(null,inst_23454);
var inst_23460 = cljs.core.count.call(null,inst_23458);
var inst_23441 = inst_23459;
var inst_23442 = inst_23458;
var inst_23443 = inst_23460;
var inst_23444 = (0);
var state_23580__$1 = (function (){var statearr_23606 = state_23580;
(statearr_23606[(7)] = inst_23442);

(statearr_23606[(8)] = inst_23444);

(statearr_23606[(9)] = inst_23443);

(statearr_23606[(10)] = inst_23441);

return statearr_23606;
})();
var statearr_23607_23688 = state_23580__$1;
(statearr_23607_23688[(2)] = null);

(statearr_23607_23688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (22))){
var inst_23497 = (state_23580[(23)]);
var inst_23502 = (state_23580[(24)]);
var inst_23494 = (state_23580[(19)]);
var inst_23498 = (state_23580[(25)]);
var inst_23497__$1 = (state_23580[(2)]);
var inst_23498__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23497__$1);
var inst_23499 = (function (){var all_files = inst_23494;
var res_SINGLEQUOTE_ = inst_23497__$1;
var res = inst_23498__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23497,inst_23502,inst_23494,inst_23498,inst_23497__$1,inst_23498__$1,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23177_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23177_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23497,inst_23502,inst_23494,inst_23498,inst_23497__$1,inst_23498__$1,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23500 = cljs.core.filter.call(null,inst_23499,inst_23497__$1);
var inst_23501 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23502__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23501);
var inst_23503 = cljs.core.not_empty.call(null,inst_23502__$1);
var state_23580__$1 = (function (){var statearr_23608 = state_23580;
(statearr_23608[(23)] = inst_23497__$1);

(statearr_23608[(24)] = inst_23502__$1);

(statearr_23608[(26)] = inst_23500);

(statearr_23608[(25)] = inst_23498__$1);

return statearr_23608;
})();
if(cljs.core.truth_(inst_23503)){
var statearr_23609_23689 = state_23580__$1;
(statearr_23609_23689[(1)] = (23));

} else {
var statearr_23610_23690 = state_23580__$1;
(statearr_23610_23690[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (36))){
var state_23580__$1 = state_23580;
var statearr_23611_23691 = state_23580__$1;
(statearr_23611_23691[(2)] = false);

(statearr_23611_23691[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (41))){
var inst_23555 = (state_23580[(20)]);
var inst_23559 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23560 = cljs.core.map.call(null,inst_23559,inst_23555);
var inst_23561 = cljs.core.pr_str.call(null,inst_23560);
var inst_23562 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23561)].join('');
var inst_23563 = figwheel.client.utils.log.call(null,inst_23562);
var state_23580__$1 = state_23580;
var statearr_23612_23692 = state_23580__$1;
(statearr_23612_23692[(2)] = inst_23563);

(statearr_23612_23692[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (43))){
var inst_23556 = (state_23580[(21)]);
var inst_23566 = (state_23580[(2)]);
var inst_23567 = cljs.core.not_empty.call(null,inst_23556);
var state_23580__$1 = (function (){var statearr_23613 = state_23580;
(statearr_23613[(27)] = inst_23566);

return statearr_23613;
})();
if(cljs.core.truth_(inst_23567)){
var statearr_23614_23693 = state_23580__$1;
(statearr_23614_23693[(1)] = (44));

} else {
var statearr_23615_23694 = state_23580__$1;
(statearr_23615_23694[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (29))){
var inst_23497 = (state_23580[(23)]);
var inst_23502 = (state_23580[(24)]);
var inst_23494 = (state_23580[(19)]);
var inst_23500 = (state_23580[(26)]);
var inst_23534 = (state_23580[(16)]);
var inst_23498 = (state_23580[(25)]);
var inst_23530 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23533 = (function (){var all_files = inst_23494;
var res_SINGLEQUOTE_ = inst_23497;
var res = inst_23498;
var files_not_loaded = inst_23500;
var dependencies_that_loaded = inst_23502;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23497,inst_23502,inst_23494,inst_23500,inst_23534,inst_23498,inst_23530,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23532){
var map__23616 = p__23532;
var map__23616__$1 = ((((!((map__23616 == null)))?((((map__23616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23616):map__23616);
var namespace = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23497,inst_23502,inst_23494,inst_23500,inst_23534,inst_23498,inst_23530,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23534__$1 = cljs.core.group_by.call(null,inst_23533,inst_23500);
var inst_23536 = (inst_23534__$1 == null);
var inst_23537 = cljs.core.not.call(null,inst_23536);
var state_23580__$1 = (function (){var statearr_23618 = state_23580;
(statearr_23618[(28)] = inst_23530);

(statearr_23618[(16)] = inst_23534__$1);

return statearr_23618;
})();
if(inst_23537){
var statearr_23619_23695 = state_23580__$1;
(statearr_23619_23695[(1)] = (32));

} else {
var statearr_23620_23696 = state_23580__$1;
(statearr_23620_23696[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (44))){
var inst_23556 = (state_23580[(21)]);
var inst_23569 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23556);
var inst_23570 = cljs.core.pr_str.call(null,inst_23569);
var inst_23571 = [cljs.core.str("not required: "),cljs.core.str(inst_23570)].join('');
var inst_23572 = figwheel.client.utils.log.call(null,inst_23571);
var state_23580__$1 = state_23580;
var statearr_23621_23697 = state_23580__$1;
(statearr_23621_23697[(2)] = inst_23572);

(statearr_23621_23697[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (6))){
var inst_23475 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23622_23698 = state_23580__$1;
(statearr_23622_23698[(2)] = inst_23475);

(statearr_23622_23698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (28))){
var inst_23500 = (state_23580[(26)]);
var inst_23527 = (state_23580[(2)]);
var inst_23528 = cljs.core.not_empty.call(null,inst_23500);
var state_23580__$1 = (function (){var statearr_23623 = state_23580;
(statearr_23623[(29)] = inst_23527);

return statearr_23623;
})();
if(cljs.core.truth_(inst_23528)){
var statearr_23624_23699 = state_23580__$1;
(statearr_23624_23699[(1)] = (29));

} else {
var statearr_23625_23700 = state_23580__$1;
(statearr_23625_23700[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (25))){
var inst_23498 = (state_23580[(25)]);
var inst_23514 = (state_23580[(2)]);
var inst_23515 = cljs.core.not_empty.call(null,inst_23498);
var state_23580__$1 = (function (){var statearr_23626 = state_23580;
(statearr_23626[(30)] = inst_23514);

return statearr_23626;
})();
if(cljs.core.truth_(inst_23515)){
var statearr_23627_23701 = state_23580__$1;
(statearr_23627_23701[(1)] = (26));

} else {
var statearr_23628_23702 = state_23580__$1;
(statearr_23628_23702[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (34))){
var inst_23549 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23549)){
var statearr_23629_23703 = state_23580__$1;
(statearr_23629_23703[(1)] = (38));

} else {
var statearr_23630_23704 = state_23580__$1;
(statearr_23630_23704[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (17))){
var state_23580__$1 = state_23580;
var statearr_23631_23705 = state_23580__$1;
(statearr_23631_23705[(2)] = recompile_dependents);

(statearr_23631_23705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (3))){
var state_23580__$1 = state_23580;
var statearr_23632_23706 = state_23580__$1;
(statearr_23632_23706[(2)] = null);

(statearr_23632_23706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (12))){
var inst_23471 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23633_23707 = state_23580__$1;
(statearr_23633_23707[(2)] = inst_23471);

(statearr_23633_23707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (2))){
var inst_23433 = (state_23580[(13)]);
var inst_23440 = cljs.core.seq.call(null,inst_23433);
var inst_23441 = inst_23440;
var inst_23442 = null;
var inst_23443 = (0);
var inst_23444 = (0);
var state_23580__$1 = (function (){var statearr_23634 = state_23580;
(statearr_23634[(7)] = inst_23442);

(statearr_23634[(8)] = inst_23444);

(statearr_23634[(9)] = inst_23443);

(statearr_23634[(10)] = inst_23441);

return statearr_23634;
})();
var statearr_23635_23708 = state_23580__$1;
(statearr_23635_23708[(2)] = null);

(statearr_23635_23708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (23))){
var inst_23497 = (state_23580[(23)]);
var inst_23502 = (state_23580[(24)]);
var inst_23494 = (state_23580[(19)]);
var inst_23500 = (state_23580[(26)]);
var inst_23498 = (state_23580[(25)]);
var inst_23505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23507 = (function (){var all_files = inst_23494;
var res_SINGLEQUOTE_ = inst_23497;
var res = inst_23498;
var files_not_loaded = inst_23500;
var dependencies_that_loaded = inst_23502;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23497,inst_23502,inst_23494,inst_23500,inst_23498,inst_23505,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23506){
var map__23636 = p__23506;
var map__23636__$1 = ((((!((map__23636 == null)))?((((map__23636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23636):map__23636);
var request_url = cljs.core.get.call(null,map__23636__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23497,inst_23502,inst_23494,inst_23500,inst_23498,inst_23505,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23508 = cljs.core.reverse.call(null,inst_23502);
var inst_23509 = cljs.core.map.call(null,inst_23507,inst_23508);
var inst_23510 = cljs.core.pr_str.call(null,inst_23509);
var inst_23511 = figwheel.client.utils.log.call(null,inst_23510);
var state_23580__$1 = (function (){var statearr_23638 = state_23580;
(statearr_23638[(31)] = inst_23505);

return statearr_23638;
})();
var statearr_23639_23709 = state_23580__$1;
(statearr_23639_23709[(2)] = inst_23511);

(statearr_23639_23709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (35))){
var state_23580__$1 = state_23580;
var statearr_23640_23710 = state_23580__$1;
(statearr_23640_23710[(2)] = true);

(statearr_23640_23710[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (19))){
var inst_23484 = (state_23580[(12)]);
var inst_23490 = figwheel.client.file_reloading.expand_files.call(null,inst_23484);
var state_23580__$1 = state_23580;
var statearr_23641_23711 = state_23580__$1;
(statearr_23641_23711[(2)] = inst_23490);

(statearr_23641_23711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (11))){
var state_23580__$1 = state_23580;
var statearr_23642_23712 = state_23580__$1;
(statearr_23642_23712[(2)] = null);

(statearr_23642_23712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (9))){
var inst_23473 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23643_23713 = state_23580__$1;
(statearr_23643_23713[(2)] = inst_23473);

(statearr_23643_23713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (5))){
var inst_23444 = (state_23580[(8)]);
var inst_23443 = (state_23580[(9)]);
var inst_23446 = (inst_23444 < inst_23443);
var inst_23447 = inst_23446;
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23447)){
var statearr_23644_23714 = state_23580__$1;
(statearr_23644_23714[(1)] = (7));

} else {
var statearr_23645_23715 = state_23580__$1;
(statearr_23645_23715[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (14))){
var inst_23454 = (state_23580[(22)]);
var inst_23463 = cljs.core.first.call(null,inst_23454);
var inst_23464 = figwheel.client.file_reloading.eval_body.call(null,inst_23463,opts);
var inst_23465 = cljs.core.next.call(null,inst_23454);
var inst_23441 = inst_23465;
var inst_23442 = null;
var inst_23443 = (0);
var inst_23444 = (0);
var state_23580__$1 = (function (){var statearr_23646 = state_23580;
(statearr_23646[(7)] = inst_23442);

(statearr_23646[(8)] = inst_23444);

(statearr_23646[(9)] = inst_23443);

(statearr_23646[(32)] = inst_23464);

(statearr_23646[(10)] = inst_23441);

return statearr_23646;
})();
var statearr_23647_23716 = state_23580__$1;
(statearr_23647_23716[(2)] = null);

(statearr_23647_23716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (45))){
var state_23580__$1 = state_23580;
var statearr_23648_23717 = state_23580__$1;
(statearr_23648_23717[(2)] = null);

(statearr_23648_23717[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (26))){
var inst_23497 = (state_23580[(23)]);
var inst_23502 = (state_23580[(24)]);
var inst_23494 = (state_23580[(19)]);
var inst_23500 = (state_23580[(26)]);
var inst_23498 = (state_23580[(25)]);
var inst_23517 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23519 = (function (){var all_files = inst_23494;
var res_SINGLEQUOTE_ = inst_23497;
var res = inst_23498;
var files_not_loaded = inst_23500;
var dependencies_that_loaded = inst_23502;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23497,inst_23502,inst_23494,inst_23500,inst_23498,inst_23517,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23518){
var map__23649 = p__23518;
var map__23649__$1 = ((((!((map__23649 == null)))?((((map__23649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23649):map__23649);
var namespace = cljs.core.get.call(null,map__23649__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23649__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23497,inst_23502,inst_23494,inst_23500,inst_23498,inst_23517,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23520 = cljs.core.map.call(null,inst_23519,inst_23498);
var inst_23521 = cljs.core.pr_str.call(null,inst_23520);
var inst_23522 = figwheel.client.utils.log.call(null,inst_23521);
var inst_23523 = (function (){var all_files = inst_23494;
var res_SINGLEQUOTE_ = inst_23497;
var res = inst_23498;
var files_not_loaded = inst_23500;
var dependencies_that_loaded = inst_23502;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23497,inst_23502,inst_23494,inst_23500,inst_23498,inst_23517,inst_23519,inst_23520,inst_23521,inst_23522,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23497,inst_23502,inst_23494,inst_23500,inst_23498,inst_23517,inst_23519,inst_23520,inst_23521,inst_23522,state_val_23581,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23524 = setTimeout(inst_23523,(10));
var state_23580__$1 = (function (){var statearr_23651 = state_23580;
(statearr_23651[(33)] = inst_23522);

(statearr_23651[(34)] = inst_23517);

return statearr_23651;
})();
var statearr_23652_23718 = state_23580__$1;
(statearr_23652_23718[(2)] = inst_23524);

(statearr_23652_23718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (16))){
var state_23580__$1 = state_23580;
var statearr_23653_23719 = state_23580__$1;
(statearr_23653_23719[(2)] = reload_dependents);

(statearr_23653_23719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (38))){
var inst_23534 = (state_23580[(16)]);
var inst_23551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23534);
var state_23580__$1 = state_23580;
var statearr_23654_23720 = state_23580__$1;
(statearr_23654_23720[(2)] = inst_23551);

(statearr_23654_23720[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (30))){
var state_23580__$1 = state_23580;
var statearr_23655_23721 = state_23580__$1;
(statearr_23655_23721[(2)] = null);

(statearr_23655_23721[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (10))){
var inst_23454 = (state_23580[(22)]);
var inst_23456 = cljs.core.chunked_seq_QMARK_.call(null,inst_23454);
var state_23580__$1 = state_23580;
if(inst_23456){
var statearr_23656_23722 = state_23580__$1;
(statearr_23656_23722[(1)] = (13));

} else {
var statearr_23657_23723 = state_23580__$1;
(statearr_23657_23723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (18))){
var inst_23488 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
if(cljs.core.truth_(inst_23488)){
var statearr_23658_23724 = state_23580__$1;
(statearr_23658_23724[(1)] = (19));

} else {
var statearr_23659_23725 = state_23580__$1;
(statearr_23659_23725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (42))){
var state_23580__$1 = state_23580;
var statearr_23660_23726 = state_23580__$1;
(statearr_23660_23726[(2)] = null);

(statearr_23660_23726[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (37))){
var inst_23546 = (state_23580[(2)]);
var state_23580__$1 = state_23580;
var statearr_23661_23727 = state_23580__$1;
(statearr_23661_23727[(2)] = inst_23546);

(statearr_23661_23727[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23581 === (8))){
var inst_23454 = (state_23580[(22)]);
var inst_23441 = (state_23580[(10)]);
var inst_23454__$1 = cljs.core.seq.call(null,inst_23441);
var state_23580__$1 = (function (){var statearr_23662 = state_23580;
(statearr_23662[(22)] = inst_23454__$1);

return statearr_23662;
})();
if(inst_23454__$1){
var statearr_23663_23728 = state_23580__$1;
(statearr_23663_23728[(1)] = (10));

} else {
var statearr_23664_23729 = state_23580__$1;
(statearr_23664_23729[(1)] = (11));

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
});})(c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19841__auto__,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto____0 = (function (){
var statearr_23668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23668[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto__);

(statearr_23668[(1)] = (1));

return statearr_23668;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto____1 = (function (state_23580){
while(true){
var ret_value__19843__auto__ = (function (){try{while(true){
var result__19844__auto__ = switch__19841__auto__.call(null,state_23580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19844__auto__;
}
break;
}
}catch (e23669){if((e23669 instanceof Object)){
var ex__19845__auto__ = e23669;
var statearr_23670_23730 = state_23580;
(statearr_23670_23730[(5)] = ex__19845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23731 = state_23580;
state_23580 = G__23731;
continue;
} else {
return ret_value__19843__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto__ = function(state_23580){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto____1.call(this,state_23580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19842__auto__;
})()
;})(switch__19841__auto__,c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19955__auto__ = (function (){var statearr_23671 = f__19954__auto__.call(null);
(statearr_23671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19953__auto__);

return statearr_23671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19955__auto__);
});})(c__19953__auto__,map__23426,map__23426__$1,opts,before_jsload,on_jsload,reload_dependents,map__23427,map__23427__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19953__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23734,link){
var map__23737 = p__23734;
var map__23737__$1 = ((((!((map__23737 == null)))?((((map__23737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23737):map__23737);
var file = cljs.core.get.call(null,map__23737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23737,map__23737__$1,file){
return (function (p1__23732_SHARP_,p2__23733_SHARP_){
if(cljs.core._EQ_.call(null,p1__23732_SHARP_,p2__23733_SHARP_)){
return p1__23732_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23737,map__23737__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23743){
var map__23744 = p__23743;
var map__23744__$1 = ((((!((map__23744 == null)))?((((map__23744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23744):map__23744);
var match_length = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23739_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23739_SHARP_);
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
var args23746 = [];
var len__18177__auto___23749 = arguments.length;
var i__18178__auto___23750 = (0);
while(true){
if((i__18178__auto___23750 < len__18177__auto___23749)){
args23746.push((arguments[i__18178__auto___23750]));

var G__23751 = (i__18178__auto___23750 + (1));
i__18178__auto___23750 = G__23751;
continue;
} else {
}
break;
}

var G__23748 = args23746.length;
switch (G__23748) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23746.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23753_SHARP_,p2__23754_SHARP_){
return cljs.core.assoc.call(null,p1__23753_SHARP_,cljs.core.get.call(null,p2__23754_SHARP_,key),p2__23754_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23755){
var map__23758 = p__23755;
var map__23758__$1 = ((((!((map__23758 == null)))?((((map__23758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23758):map__23758);
var f_data = map__23758__$1;
var file = cljs.core.get.call(null,map__23758__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23760,files_msg){
var map__23767 = p__23760;
var map__23767__$1 = ((((!((map__23767 == null)))?((((map__23767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23767):map__23767);
var opts = map__23767__$1;
var on_cssload = cljs.core.get.call(null,map__23767__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23769_23773 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23770_23774 = null;
var count__23771_23775 = (0);
var i__23772_23776 = (0);
while(true){
if((i__23772_23776 < count__23771_23775)){
var f_23777 = cljs.core._nth.call(null,chunk__23770_23774,i__23772_23776);
figwheel.client.file_reloading.reload_css_file.call(null,f_23777);

var G__23778 = seq__23769_23773;
var G__23779 = chunk__23770_23774;
var G__23780 = count__23771_23775;
var G__23781 = (i__23772_23776 + (1));
seq__23769_23773 = G__23778;
chunk__23770_23774 = G__23779;
count__23771_23775 = G__23780;
i__23772_23776 = G__23781;
continue;
} else {
var temp__4425__auto___23782 = cljs.core.seq.call(null,seq__23769_23773);
if(temp__4425__auto___23782){
var seq__23769_23783__$1 = temp__4425__auto___23782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23769_23783__$1)){
var c__17922__auto___23784 = cljs.core.chunk_first.call(null,seq__23769_23783__$1);
var G__23785 = cljs.core.chunk_rest.call(null,seq__23769_23783__$1);
var G__23786 = c__17922__auto___23784;
var G__23787 = cljs.core.count.call(null,c__17922__auto___23784);
var G__23788 = (0);
seq__23769_23773 = G__23785;
chunk__23770_23774 = G__23786;
count__23771_23775 = G__23787;
i__23772_23776 = G__23788;
continue;
} else {
var f_23789 = cljs.core.first.call(null,seq__23769_23783__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23789);

var G__23790 = cljs.core.next.call(null,seq__23769_23783__$1);
var G__23791 = null;
var G__23792 = (0);
var G__23793 = (0);
seq__23769_23773 = G__23790;
chunk__23770_23774 = G__23791;
count__23771_23775 = G__23792;
i__23772_23776 = G__23793;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23767,map__23767__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23767,map__23767__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map