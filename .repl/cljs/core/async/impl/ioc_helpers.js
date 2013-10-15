goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 4;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t12647 !== 'undefined')
{} else
{goog.provide('cljs.core.async.impl.ioc_helpers.t12647');

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t12647 = (function (f,fn_handler,meta12648){
this.f = f;
this.fn_handler = fn_handler;
this.meta12648 = meta12648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t12647.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t12647.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t12647";
cljs.core.async.impl.ioc_helpers.t12647.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async.impl.ioc-helpers/t12647");
});
cljs.core.async.impl.ioc_helpers.t12647.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t12647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.impl.ioc_helpers.t12647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.impl.ioc_helpers.t12647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12649){var self__ = this;
return self__.meta12648;
});
cljs.core.async.impl.ioc_helpers.t12647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12649,meta12648__$1){var self__ = this;
return (new cljs.core.async.impl.ioc_helpers.t12647(self__.f,self__.fn_handler,meta12648__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t12647 = (function __GT_t12647(f__$1,fn_handler__$1,meta12648){return (new cljs.core.async.impl.ioc_helpers.t12647(f__$1,fn_handler__$1,meta12648));
});
}
return (new cljs.core.async.impl.ioc_helpers.t12647(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e12651){if((e12651 instanceof Object))
{var ex = e12651;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12651;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_12654_12656 = state;(statearr_12654_12656[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_12654_12656[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_12655_12657 = state;(statearr_12655_12657[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_12655_12657[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_12660_12662 = state;(statearr_12660_12662[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_12660_12662[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_12661_12663 = state;(statearr_12661_12663[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_12661_12663[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12664){var map__12669 = p__12664;var map__12669__$1 = ((cljs.core.seq_QMARK_.call(null,map__12669))?cljs.core.apply.call(null,cljs.core.hash_map,map__12669):map__12669);var opts = map__12669__$1;var statearr_12670_12673 = state;(statearr_12670_12673[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_12671_12674 = state;(statearr_12671_12674[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_12672_12675 = state;(statearr_12672_12675[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12664 = null;if (arguments.length > 3) {
  p__12664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12664);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12676){
var state = cljs.core.first(arglist__12676);
arglist__12676 = cljs.core.next(arglist__12676);
var cont_block = cljs.core.first(arglist__12676);
arglist__12676 = cljs.core.next(arglist__12676);
var ports = cljs.core.first(arglist__12676);
var p__12664 = cljs.core.rest(arglist__12676);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12664);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){return null;
})));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});
