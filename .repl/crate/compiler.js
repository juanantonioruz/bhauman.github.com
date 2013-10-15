goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom');
crate.compiler.xmlns = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"xhtml","xhtml",1127939989),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",1014018518),"http://www.w3.org/2000/svg"], true);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,cljs.core.PersistentVector.fromArray([tag,b], true));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__12840 = cljs.core.seq.call(null,content);var chunk__12841 = null;var count__12842 = 0;var i__12843 = 0;while(true){
if((i__12843 < count__12842))
{var c = cljs.core._nth.call(null,chunk__12841,i__12843);var child_12844 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_12844))
{goog.dom.appendChild(parent,child_12844);
} else
{}
{
var G__12845 = seq__12840;
var G__12846 = chunk__12841;
var G__12847 = count__12842;
var G__12848 = (i__12843 + 1);
seq__12840 = G__12845;
chunk__12841 = G__12846;
count__12842 = G__12847;
i__12843 = G__12848;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12840);if(temp__4092__auto__)
{var seq__12840__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12840__$1))
{var c__5745__auto__ = cljs.core.chunk_first.call(null,seq__12840__$1);{
var G__12849 = cljs.core.chunk_rest.call(null,seq__12840__$1);
var G__12850 = c__5745__auto__;
var G__12851 = cljs.core.count.call(null,c__5745__auto__);
var G__12852 = 0;
seq__12840 = G__12849;
chunk__12841 = G__12850;
count__12842 = G__12851;
i__12843 = G__12852;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__12840__$1);var child_12853 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):(cljs.core.truth_(crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,cljs.core.PersistentVector.fromArray([crate.binding.value.call(null,c)], true));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_12853))
{goog.dom.appendChild(parent,child_12853);
} else
{}
{
var G__12854 = cljs.core.next.call(null,seq__12840__$1);
var G__12855 = null;
var G__12856 = 0;
var G__12857 = 0;
seq__12840 = G__12854;
chunk__12841 = G__12855;
count__12842 = G__12856;
i__12843 = G__12857;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_binding = (function (){var method_table__5802__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__5803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__5804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__5805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__5806__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){return type;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__5806__auto__,method_table__5802__auto__,prefer_table__5803__auto__,method_cache__5804__auto__,cached_hierarchy__5805__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",1017460895),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,cljs.core.PersistentVector.fromArray([v], true));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (_,p__12858,elem){var vec__12859 = p__12858;var k = cljs.core.nth.call(null,vec__12859,0,null);var b = cljs.core.nth.call(null,vec__12859,1,null);return crate.binding.on_change.call(null,b,(function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",1123684643),(function (_,p__12860,elem){var vec__12861 = p__12860;var k = cljs.core.nth.call(null,vec__12861,0,null);var b = cljs.core.nth.call(null,vec__12861,1,null);return crate.binding.on_change.call(null,b,(function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4090__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",1014000659));if(cljs.core.truth_(temp__4090__auto__))
{var adder = temp__4090__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4090__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",4374260726));if(cljs.core.truth_(temp__4090__auto__))
{var remover = temp__4090__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1016963678),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__12862 = cljs.core._EQ_;var expr__12863 = type;if(pred__12862.call(null,new cljs.core.Keyword(null,"add","add",1014000659),expr__12863))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(pred__12862.call(null,new cljs.core.Keyword(null,"remove","remove",4374260726),expr__12863))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12863)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__12871 = cljs.core.seq.call(null,bs);var chunk__12872 = null;var count__12873 = 0;var i__12874 = 0;while(true){
if((i__12874 < count__12873))
{var vec__12875 = cljs.core._nth.call(null,chunk__12872,i__12874);var type = cljs.core.nth.call(null,vec__12875,0,null);var b = cljs.core.nth.call(null,vec__12875,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__12877 = seq__12871;
var G__12878 = chunk__12872;
var G__12879 = count__12873;
var G__12880 = (i__12874 + 1);
seq__12871 = G__12877;
chunk__12872 = G__12878;
count__12873 = G__12879;
i__12874 = G__12880;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12871);if(temp__4092__auto__)
{var seq__12871__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12871__$1))
{var c__5745__auto__ = cljs.core.chunk_first.call(null,seq__12871__$1);{
var G__12881 = cljs.core.chunk_rest.call(null,seq__12871__$1);
var G__12882 = c__5745__auto__;
var G__12883 = cljs.core.count.call(null,c__5745__auto__);
var G__12884 = 0;
seq__12871 = G__12881;
chunk__12872 = G__12882;
count__12873 = G__12883;
i__12874 = G__12884;
continue;
}
} else
{var vec__12876 = cljs.core.first.call(null,seq__12871__$1);var type = cljs.core.nth.call(null,vec__12876,0,null);var b = cljs.core.nth.call(null,vec__12876,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__12885 = cljs.core.next.call(null,seq__12871__$1);
var G__12886 = null;
var G__12887 = 0;
var G__12888 = 0;
seq__12871 = G__12885;
chunk__12872 = G__12886;
count__12873 = G__12887;
i__12874 = G__12888;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__12895_12901 = cljs.core.seq.call(null,v);var chunk__12896_12902 = null;var count__12897_12903 = 0;var i__12898_12904 = 0;while(true){
if((i__12898_12904 < count__12897_12903))
{var vec__12899_12905 = cljs.core._nth.call(null,chunk__12896_12902,i__12898_12904);var k_12906 = cljs.core.nth.call(null,vec__12899_12905,0,null);var v_12907__$1 = cljs.core.nth.call(null,vec__12899_12905,1,null);dom_style.call(null,elem,k_12906,v_12907__$1);
{
var G__12908 = seq__12895_12901;
var G__12909 = chunk__12896_12902;
var G__12910 = count__12897_12903;
var G__12911 = (i__12898_12904 + 1);
seq__12895_12901 = G__12908;
chunk__12896_12902 = G__12909;
count__12897_12903 = G__12910;
i__12898_12904 = G__12911;
continue;
}
} else
{var temp__4092__auto___12912 = cljs.core.seq.call(null,seq__12895_12901);if(temp__4092__auto___12912)
{var seq__12895_12913__$1 = temp__4092__auto___12912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12895_12913__$1))
{var c__5745__auto___12914 = cljs.core.chunk_first.call(null,seq__12895_12913__$1);{
var G__12915 = cljs.core.chunk_rest.call(null,seq__12895_12913__$1);
var G__12916 = c__5745__auto___12914;
var G__12917 = cljs.core.count.call(null,c__5745__auto___12914);
var G__12918 = 0;
seq__12895_12901 = G__12915;
chunk__12896_12902 = G__12916;
count__12897_12903 = G__12917;
i__12898_12904 = G__12918;
continue;
}
} else
{var vec__12900_12919 = cljs.core.first.call(null,seq__12895_12913__$1);var k_12920 = cljs.core.nth.call(null,vec__12900_12919,0,null);var v_12921__$1 = cljs.core.nth.call(null,vec__12900_12919,1,null);dom_style.call(null,elem,k_12920,v_12921__$1);
{
var G__12922 = cljs.core.next.call(null,seq__12895_12913__$1);
var G__12923 = null;
var G__12924 = 0;
var G__12925 = 0;
seq__12895_12901 = G__12922;
chunk__12896_12902 = G__12923;
count__12897_12903 = G__12924;
i__12898_12904 = G__12925;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v)))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.PersistentVector.fromArray([null,v], true));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__12932_12938 = cljs.core.seq.call(null,attrs);var chunk__12933_12939 = null;var count__12934_12940 = 0;var i__12935_12941 = 0;while(true){
if((i__12935_12941 < count__12934_12940))
{var vec__12936_12942 = cljs.core._nth.call(null,chunk__12933_12939,i__12935_12941);var k_12943 = cljs.core.nth.call(null,vec__12936_12942,0,null);var v_12944 = cljs.core.nth.call(null,vec__12936_12942,1,null);dom_attr.call(null,elem,k_12943,v_12944);
{
var G__12945 = seq__12932_12938;
var G__12946 = chunk__12933_12939;
var G__12947 = count__12934_12940;
var G__12948 = (i__12935_12941 + 1);
seq__12932_12938 = G__12945;
chunk__12933_12939 = G__12946;
count__12934_12940 = G__12947;
i__12935_12941 = G__12948;
continue;
}
} else
{var temp__4092__auto___12949 = cljs.core.seq.call(null,seq__12932_12938);if(temp__4092__auto___12949)
{var seq__12932_12950__$1 = temp__4092__auto___12949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12932_12950__$1))
{var c__5745__auto___12951 = cljs.core.chunk_first.call(null,seq__12932_12950__$1);{
var G__12952 = cljs.core.chunk_rest.call(null,seq__12932_12950__$1);
var G__12953 = c__5745__auto___12951;
var G__12954 = cljs.core.count.call(null,c__5745__auto___12951);
var G__12955 = 0;
seq__12932_12938 = G__12952;
chunk__12933_12939 = G__12953;
count__12934_12940 = G__12954;
i__12935_12941 = G__12955;
continue;
}
} else
{var vec__12937_12956 = cljs.core.first.call(null,seq__12932_12950__$1);var k_12957 = cljs.core.nth.call(null,vec__12937_12956,0,null);var v_12958 = cljs.core.nth.call(null,vec__12937_12956,1,null);dom_attr.call(null,elem,k_12957,v_12958);
{
var G__12959 = cljs.core.next.call(null,seq__12932_12950__$1);
var G__12960 = null;
var G__12961 = 0;
var G__12962 = 0;
seq__12932_12938 = G__12959;
chunk__12933_12939 = G__12960;
count__12934_12940 = G__12961;
i__12935_12941 = G__12962;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_12963__$1 = (cljs.core.truth_(crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),cljs.core.PersistentVector.fromArray([k,v], true));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_12963__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12966){var vec__12967 = p__12966;var n = cljs.core.nth.call(null,vec__12967,0,null);var v = cljs.core.nth.call(null,vec__12967,1,null);if(v === true)
{return cljs.core.PersistentVector.fromArray([n,cljs.core.name.call(null,n)], true);
} else
{return cljs.core.PersistentVector.fromArray([n,v], true);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__12969){var vec__12974 = p__12969;var tag = cljs.core.nth.call(null,vec__12974,0,null);var content = cljs.core.nthnext.call(null,vec__12974,1);if(!((function (){var or__3943__auto__ = (tag instanceof cljs.core.Keyword);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (tag instanceof cljs.core.Symbol);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return typeof tag === 'string';
}
}
})()))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__12975 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__12975,0,null);var tag__$1 = cljs.core.nth.call(null,vec__12975,1,null);var id = cljs.core.nth.call(null,vec__12975,2,null);var class$ = cljs.core.nth.call(null,vec__12975,3,null);var vec__12976 = (function (){var vec__12977 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__12977,0,null);var t = cljs.core.nth.call(null,vec__12977,1,null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3943__auto__ = ns_xmlns;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return nsp;
}
})(),t], true);
} else
{return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"xhtml","xhtml",1127939989).call(null,crate.compiler.xmlns),nsp], true);
}
})();var nsp = cljs.core.nth.call(null,vec__12976,0,null);var tag__$2 = cljs.core.nth.call(null,vec__12976,1,null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__12975,_,tag__$1,id,class$,vec__12976,nsp,tag__$2){
return (function (p1__12968_SHARP_){return !((cljs.core.second.call(null,p1__12968_SHARP_) == null));
});})(vec__12975,_,tag__$1,id,class$,vec__12976,nsp,tag__$2))
,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__3943__auto__ = id;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], true)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], true);
} else
{return cljs.core.PersistentVector.fromArray([nsp,tag__$2,tag_attrs,content], true);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings12981 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__12983 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__12983,0,null);var tag = cljs.core.nth.call(null,vec__12983,1,null);var attrs = cljs.core.nth.call(null,vec__12983,2,null);var content = cljs.core.nth.call(null,vec__12983,3,null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings12981;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__12986__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__12985 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__12985,0,null);var body = cljs.core.nthnext.call(null,vec__12985,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__12986 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12986__delegate.call(this,args);};
G__12986.cljs$lang$maxFixedArity = 0;
G__12986.cljs$lang$applyTo = (function (arglist__12987){
var args = cljs.core.seq(arglist__12987);
return G__12986__delegate(args);
});
G__12986.cljs$core$IFn$_invoke$arity$variadic = G__12986__delegate;
return G__12986;
})()
;
});
