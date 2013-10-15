goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.provide('crate.binding.SubAtom');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
return goog.getUid(this$);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var seq__12988 = cljs.core.seq.call(null,self__.watches);var chunk__12989 = null;var count__12990 = 0;var i__12991 = 0;while(true){
if((i__12991 < count__12990))
{var vec__12992 = cljs.core._nth.call(null,chunk__12989,i__12991);var key__$1 = cljs.core.nth.call(null,vec__12992,0,null);var f = cljs.core.nth.call(null,vec__12992,1,null);f.call(null,key__$1,this$,oldval,newval);
{
var G__12994 = seq__12988;
var G__12995 = chunk__12989;
var G__12996 = count__12990;
var G__12997 = (i__12991 + 1);
seq__12988 = G__12994;
chunk__12989 = G__12995;
count__12990 = G__12996;
i__12991 = G__12997;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12988);if(temp__4092__auto__)
{var seq__12988__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12988__$1))
{var c__5745__auto__ = cljs.core.chunk_first.call(null,seq__12988__$1);{
var G__12998 = cljs.core.chunk_rest.call(null,seq__12988__$1);
var G__12999 = c__5745__auto__;
var G__13000 = cljs.core.count.call(null,c__5745__auto__);
var G__13001 = 0;
seq__12988 = G__12998;
chunk__12989 = G__12999;
count__12990 = G__13000;
i__12991 = G__13001;
continue;
}
} else
{var vec__12993 = cljs.core.first.call(null,seq__12988__$1);var key__$1 = cljs.core.nth.call(null,vec__12993,0,null);var f = cljs.core.nth.call(null,vec__12993,1,null);f.call(null,key__$1,this$,oldval,newval);
{
var G__13002 = cljs.core.next.call(null,seq__12988__$1);
var G__13003 = null;
var G__13004 = 0;
var G__13005 = 0;
seq__12988 = G__13002;
chunk__12989 = G__13003;
count__12990 = G__13004;
i__12991 = G__13005;
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
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
if(cljs.core.truth_(f))
{return this$.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
return (o === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:cljs.core.PersistentVector.fromArray([path], true));var vec__13007 = (((atm instanceof crate.binding.SubAtom))?cljs.core.PersistentVector.fromArray([atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], true):cljs.core.PersistentVector.fromArray([atm,path__$1], true));var atm__$1 = cljs.core.nth.call(null,vec__13007,0,null);var path__$2 = cljs.core.nth.call(null,vec__13007,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash);if(and__3941__auto__)
{return cljs.core.not_EQ_.call(null,prev,latest);
} else
{return and__3941__auto__;
}
})())
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__13008__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__13008 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__13008__delegate.call(this,sa,f,x,y,z,more);};
G__13008.cljs$lang$maxFixedArity = 5;
G__13008.cljs$lang$applyTo = (function (arglist__13009){
var sa = cljs.core.first(arglist__13009);
arglist__13009 = cljs.core.next(arglist__13009);
var f = cljs.core.first(arglist__13009);
arglist__13009 = cljs.core.next(arglist__13009);
var x = cljs.core.first(arglist__13009);
arglist__13009 = cljs.core.next(arglist__13009);
var y = cljs.core.first(arglist__13009);
arglist__13009 = cljs.core.next(arglist__13009);
var z = cljs.core.first(arglist__13009);
var more = cljs.core.rest(arglist__13009);
return G__13008__delegate(sa,f,x,y,z,more);
});
G__13008.cljs$core$IFn$_invoke$arity$variadic = G__13008__delegate;
return G__13008;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = {};
crate.binding._compute = (function _compute(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__5614__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (crate.binding._compute[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (crate.binding._compute["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});
goog.provide('crate.binding.Computed');

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var old = this$.value;this$.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,old,this$.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
return goog.getUid(this$);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var seq__13010 = cljs.core.seq.call(null,self__.watches);var chunk__13011 = null;var count__13012 = 0;var i__13013 = 0;while(true){
if((i__13013 < count__13012))
{var vec__13014 = cljs.core._nth.call(null,chunk__13011,i__13013);var key__$1 = cljs.core.nth.call(null,vec__13014,0,null);var f = cljs.core.nth.call(null,vec__13014,1,null);f.call(null,key__$1,this$,oldval,newval);
{
var G__13016 = seq__13010;
var G__13017 = chunk__13011;
var G__13018 = count__13012;
var G__13019 = (i__13013 + 1);
seq__13010 = G__13016;
chunk__13011 = G__13017;
count__13012 = G__13018;
i__13013 = G__13019;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13010);if(temp__4092__auto__)
{var seq__13010__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13010__$1))
{var c__5745__auto__ = cljs.core.chunk_first.call(null,seq__13010__$1);{
var G__13020 = cljs.core.chunk_rest.call(null,seq__13010__$1);
var G__13021 = c__5745__auto__;
var G__13022 = cljs.core.count.call(null,c__5745__auto__);
var G__13023 = 0;
seq__13010 = G__13020;
chunk__13011 = G__13021;
count__13012 = G__13022;
i__13013 = G__13023;
continue;
}
} else
{var vec__13015 = cljs.core.first.call(null,seq__13010__$1);var key__$1 = cljs.core.nth.call(null,vec__13015,0,null);var f = cljs.core.nth.call(null,vec__13015,1,null);f.call(null,key__$1,this$,oldval,newval);
{
var G__13024 = cljs.core.next.call(null,seq__13010__$1);
var G__13025 = null;
var G__13026 = 0;
var G__13027 = 0;
seq__13010 = G__13024;
chunk__13011 = G__13025;
count__13012 = G__13026;
i__13013 = G__13027;
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
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
if(cljs.core.truth_(f))
{return this$.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
return (o === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__13032_13036 = cljs.core.seq.call(null,atms);var chunk__13033_13037 = null;var count__13034_13038 = 0;var i__13035_13039 = 0;while(true){
if((i__13035_13039 < count__13034_13038))
{var atm_13040 = cljs.core._nth.call(null,chunk__13033_13037,i__13035_13039);cljs.core.add_watch.call(null,atm_13040,k,((function (seq__13032_13036,chunk__13033_13037,count__13034_13038,i__13035_13039,atm_13040){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__13032_13036,chunk__13033_13037,count__13034_13038,i__13035_13039,atm_13040))
);
{
var G__13041 = seq__13032_13036;
var G__13042 = chunk__13033_13037;
var G__13043 = count__13034_13038;
var G__13044 = (i__13035_13039 + 1);
seq__13032_13036 = G__13041;
chunk__13033_13037 = G__13042;
count__13034_13038 = G__13043;
i__13035_13039 = G__13044;
continue;
}
} else
{var temp__4092__auto___13045 = cljs.core.seq.call(null,seq__13032_13036);if(temp__4092__auto___13045)
{var seq__13032_13046__$1 = temp__4092__auto___13045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13032_13046__$1))
{var c__5745__auto___13047 = cljs.core.chunk_first.call(null,seq__13032_13046__$1);{
var G__13048 = cljs.core.chunk_rest.call(null,seq__13032_13046__$1);
var G__13049 = c__5745__auto___13047;
var G__13050 = cljs.core.count.call(null,c__5745__auto___13047);
var G__13051 = 0;
seq__13032_13036 = G__13048;
chunk__13033_13037 = G__13049;
count__13034_13038 = G__13050;
i__13035_13039 = G__13051;
continue;
}
} else
{var atm_13052 = cljs.core.first.call(null,seq__13032_13046__$1);cljs.core.add_watch.call(null,atm_13052,k,((function (seq__13032_13036,chunk__13033_13037,count__13034_13038,i__13035_13039,atm_13052,seq__13032_13046__$1,temp__4092__auto___13045){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__13032_13036,chunk__13033_13037,count__13034_13038,i__13035_13039,atm_13052,seq__13032_13046__$1,temp__4092__auto___13045))
);
{
var G__13053 = cljs.core.next.call(null,seq__13032_13046__$1);
var G__13054 = null;
var G__13055 = 0;
var G__13056 = 0;
seq__13032_13036 = G__13053;
chunk__13033_13037 = G__13054;
count__13034_13038 = G__13055;
i__13035_13039 = G__13056;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,cljs.core.PersistentVector.fromArray([crate.binding.z], true),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,cljs.core.PersistentVector.fromArray([crate.binding.y], true),(function (y){return cljs.core.filter.call(null,(function (p1__13057_SHARP_){return (p1__13057_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = {};
crate.binding.bindable = {};
crate.binding._value = (function _value(this$){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__5614__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (crate.binding._value[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (crate.binding._value["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__3941__auto__ = this$;if(and__3941__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__5614__auto__ = (((this$ == null))?null:this$);return (function (){var or__3943__auto__ = (crate.binding._on_change[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (crate.binding._on_change["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});
goog.provide('crate.binding.atom_binding');

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){return func.call(null,crate.binding._value.call(null,this$));
}));
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});
goog.provide('crate.binding.notifier');

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var seq__13058 = cljs.core.seq.call(null,self__.watches);var chunk__13059 = null;var count__13060 = 0;var i__13061 = 0;while(true){
if((i__13061 < count__13060))
{var vec__13062 = cljs.core._nth.call(null,chunk__13059,i__13061);var key = cljs.core.nth.call(null,vec__13062,0,null);var f = cljs.core.nth.call(null,vec__13062,1,null);f.call(null,key,this$,oldval,newval);
{
var G__13064 = seq__13058;
var G__13065 = chunk__13059;
var G__13066 = count__13060;
var G__13067 = (i__13061 + 1);
seq__13058 = G__13064;
chunk__13059 = G__13065;
count__13060 = G__13066;
i__13061 = G__13067;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13058);if(temp__4092__auto__)
{var seq__13058__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13058__$1))
{var c__5745__auto__ = cljs.core.chunk_first.call(null,seq__13058__$1);{
var G__13068 = cljs.core.chunk_rest.call(null,seq__13058__$1);
var G__13069 = c__5745__auto__;
var G__13070 = cljs.core.count.call(null,c__5745__auto__);
var G__13071 = 0;
seq__13058 = G__13068;
chunk__13059 = G__13069;
count__13060 = G__13070;
i__13061 = G__13071;
continue;
}
} else
{var vec__13063 = cljs.core.first.call(null,seq__13058__$1);var key = cljs.core.nth.call(null,vec__13063,0,null);var f = cljs.core.nth.call(null,vec__13063,1,null);f.call(null,key,this$,oldval,newval);
{
var G__13072 = cljs.core.next.call(null,seq__13058__$1);
var G__13073 = null;
var G__13074 = 0;
var G__13075 = 0;
seq__13058 = G__13072;
chunk__13059 = G__13073;
count__13060 = G__13074;
i__13061 = G__13075;
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
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
return this$.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});
goog.provide('crate.binding.bound_collection');

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__13076){var vec__13077 = p__13076;var event = cljs.core.nth.call(null,vec__13077,0,null);var el = cljs.core.nth.call(null,vec__13077,1,null);var v = cljs.core.nth.call(null,vec__13077,2,null);return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], true));
return crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], true));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).call(null,prev),null], true));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).call(null,prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__3943__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__13078){
var bc = cljs.core.first(arglist__13078);
var segs = cljs.core.rest(arglist__13078);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__13087_13095 = cljs.core.seq.call(null,added);var chunk__13088_13096 = null;var count__13089_13097 = 0;var i__13090_13098 = 0;while(true){
if((i__13090_13098 < count__13089_13097))
{var a_13099 = cljs.core._nth.call(null,chunk__13088_13096,i__13090_13098);crate.binding.bc_add.call(null,bc,a_13099,a_13099);
{
var G__13100 = seq__13087_13095;
var G__13101 = chunk__13088_13096;
var G__13102 = count__13089_13097;
var G__13103 = (i__13090_13098 + 1);
seq__13087_13095 = G__13100;
chunk__13088_13096 = G__13101;
count__13089_13097 = G__13102;
i__13090_13098 = G__13103;
continue;
}
} else
{var temp__4092__auto___13104 = cljs.core.seq.call(null,seq__13087_13095);if(temp__4092__auto___13104)
{var seq__13087_13105__$1 = temp__4092__auto___13104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13087_13105__$1))
{var c__5745__auto___13106 = cljs.core.chunk_first.call(null,seq__13087_13105__$1);{
var G__13107 = cljs.core.chunk_rest.call(null,seq__13087_13105__$1);
var G__13108 = c__5745__auto___13106;
var G__13109 = cljs.core.count.call(null,c__5745__auto___13106);
var G__13110 = 0;
seq__13087_13095 = G__13107;
chunk__13088_13096 = G__13108;
count__13089_13097 = G__13109;
i__13090_13098 = G__13110;
continue;
}
} else
{var a_13111 = cljs.core.first.call(null,seq__13087_13105__$1);crate.binding.bc_add.call(null,bc,a_13111,a_13111);
{
var G__13112 = cljs.core.next.call(null,seq__13087_13105__$1);
var G__13113 = null;
var G__13114 = 0;
var G__13115 = 0;
seq__13087_13095 = G__13112;
chunk__13088_13096 = G__13113;
count__13089_13097 = G__13114;
i__13090_13098 = G__13115;
continue;
}
}
} else
{}
}
break;
}
var seq__13091 = cljs.core.seq.call(null,removed);var chunk__13092 = null;var count__13093 = 0;var i__13094 = 0;while(true){
if((i__13094 < count__13093))
{var r = cljs.core._nth.call(null,chunk__13092,i__13094);crate.binding.bc_remove.call(null,bc,r);
{
var G__13116 = seq__13091;
var G__13117 = chunk__13092;
var G__13118 = count__13093;
var G__13119 = (i__13094 + 1);
seq__13091 = G__13116;
chunk__13092 = G__13117;
count__13093 = G__13118;
i__13094 = G__13119;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13091);if(temp__4092__auto__)
{var seq__13091__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13091__$1))
{var c__5745__auto__ = cljs.core.chunk_first.call(null,seq__13091__$1);{
var G__13120 = cljs.core.chunk_rest.call(null,seq__13091__$1);
var G__13121 = c__5745__auto__;
var G__13122 = cljs.core.count.call(null,c__5745__auto__);
var G__13123 = 0;
seq__13091 = G__13120;
chunk__13092 = G__13121;
count__13093 = G__13122;
i__13094 = G__13123;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__13091__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__13124 = cljs.core.next.call(null,seq__13091__$1);
var G__13125 = null;
var G__13126 = 0;
var G__13127 = 0;
seq__13091 = G__13124;
chunk__13092 = G__13125;
count__13093 = G__13126;
i__13094 = G__13127;
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
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__13128){var vec__13131 = p__13128;var path = cljs.core.nth.call(null,vec__13131,0,null);var opts = cljs.core.nth.call(null,vec__13131,1,null);var vec__13132 = (cljs.core.truth_(opts)?cljs.core.PersistentVector.fromArray([path,opts], true):cljs.core.PersistentVector.fromArray([null,path], true));var path__$1 = cljs.core.nth.call(null,vec__13132,0,null);var opts__$1 = cljs.core.nth.call(null,vec__13132,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).call(null,opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).call(null,opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__13128 = null;if (arguments.length > 1) {
  p__13128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__13128);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__13133){
var atm = cljs.core.first(arglist__13133);
var p__13128 = cljs.core.rest(arglist__13133);
return bound_coll__delegate(atm,p__13128);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__13134){var vec__13136 = p__13134;var opts = cljs.core.nth.call(null,vec__13136,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).call(null,opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).call(null,opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).call(null,opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).call(null,opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__13134 = null;if (arguments.length > 2) {
  p__13134 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__13134);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__13137){
var as = cljs.core.first(arglist__13137);
arglist__13137 = cljs.core.next(arglist__13137);
var atm = cljs.core.first(arglist__13137);
var p__13134 = cljs.core.rest(arglist__13137);
return map_bound__delegate(as,atm,p__13134);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__13139 = b;if(G__13139)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__13139.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__13139.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__13139);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__13139);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__13141 = b;if(G__13141)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__13141.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__13141.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__13141);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__13141);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__13143 = atm;if(G__13143)
{if((function (){var or__3943__auto__ = (G__13143.cljs$lang$protocol_mask$partition0$ & 32768);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__13143.cljs$core$IDeref$;
}
})())
{return true;
} else
{if((!G__13143.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__13143);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__13143);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__13144){var vec__13146 = p__13144;var func = cljs.core.nth.call(null,vec__13146,0,null);var func__$1 = (function (){var or__3943__auto__ = func;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__13144 = null;if (arguments.length > 1) {
  p__13144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__13144);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__13147){
var atm = cljs.core.first(arglist__13147);
var p__13144 = cljs.core.rest(arglist__13147);
return bound__delegate(atm,p__13144);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
