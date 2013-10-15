goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10666 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10666');

/**
* @constructor
*/
cljs.core.async.t10666 = (function (f,fn_handler,meta10667){
this.f = f;
this.fn_handler = fn_handler;
this.meta10667 = meta10667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10666.cljs$lang$type = true;
cljs.core.async.t10666.cljs$lang$ctorStr = "cljs.core.async/t10666";
cljs.core.async.t10666.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t10666");
});
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return true;
});
cljs.core.async.t10666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
return self__.f;
});
cljs.core.async.t10666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10668){var self__ = this;
return self__.meta10667;
});
cljs.core.async.t10666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10668,meta10667__$1){var self__ = this;
return (new cljs.core.async.t10666(self__.f,self__.fn_handler,meta10667__$1));
});
cljs.core.async.__GT_t10666 = (function __GT_t10666(f__$1,fn_handler__$1,meta10667){return (new cljs.core.async.t10666(f__$1,fn_handler__$1,meta10667));
});
}
return (new cljs.core.async.t10666(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10669 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10669);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10669);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3941__auto__ = ret;if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3941__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5792__auto___10670 = n;var x_10671 = 0;while(true){
if((x_10671 < n__5792__auto___10670))
{(a[x_10671] = 0);
{
var G__10672 = (x_10671 + 1);
x_10671 = G__10672;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10673 = (i + 1);
i = G__10673;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10677 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10677');

/**
* @constructor
*/
cljs.core.async.t10677 = (function (flag,alt_flag,meta10678){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10678 = meta10678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10677.cljs$lang$type = true;
cljs.core.async.t10677.cljs$lang$ctorStr = "cljs.core.async/t10677";
cljs.core.async.t10677.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t10677");
});
cljs.core.async.t10677.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10679){var self__ = this;
return self__.meta10678;
});
cljs.core.async.t10677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10679,meta10678__$1){var self__ = this;
return (new cljs.core.async.t10677(self__.flag,self__.alt_flag,meta10678__$1));
});
cljs.core.async.__GT_t10677 = (function __GT_t10677(flag__$1,alt_flag__$1,meta10678){return (new cljs.core.async.t10677(flag__$1,alt_flag__$1,meta10678));
});
}
return (new cljs.core.async.t10677(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10683 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10683');

/**
* @constructor
*/
cljs.core.async.t10683 = (function (cb,flag,alt_handler,meta10684){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10684 = meta10684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10683.cljs$lang$type = true;
cljs.core.async.t10683.cljs$lang$ctorStr = "cljs.core.async/t10683";
cljs.core.async.t10683.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t10683");
});
cljs.core.async.t10683.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10685){var self__ = this;
return self__.meta10684;
});
cljs.core.async.t10683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10685,meta10684__$1){var self__ = this;
return (new cljs.core.async.t10683(self__.cb,self__.flag,self__.alt_handler,meta10684__$1));
});
cljs.core.async.__GT_t10683 = (function __GT_t10683(cb__$1,flag__$1,alt_handler__$1,meta10684){return (new cljs.core.async.t10683(cb__$1,flag__$1,alt_handler__$1,meta10684));
});
}
return (new cljs.core.async.t10683(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).call(null,opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10686_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__10686_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3943__auto__ = wport;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__10687 = (i + 1);
i = G__10687;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3943__auto__ = ret;if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3941__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3941__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).call(null,opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10688){var map__10690 = p__10688;var map__10690__$1 = ((cljs.core.seq_QMARK_.call(null,map__10690))?cljs.core.apply.call(null,cljs.core.hash_map,map__10690):map__10690);var opts = map__10690__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10688 = null;if (arguments.length > 1) {
  p__10688 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10688);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10691){
var ports = cljs.core.first(arglist__10691);
var p__10688 = cljs.core.rest(arglist__10691);
return alts_BANG___delegate(ports,p__10688);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10699 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10699');

/**
* @constructor
*/
cljs.core.async.t10699 = (function (ch,f,map_LT_,meta10700){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10700 = meta10700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10699.cljs$lang$type = true;
cljs.core.async.t10699.cljs$lang$ctorStr = "cljs.core.async/t10699";
cljs.core.async.t10699.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t10699");
});
cljs.core.async.t10699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10702 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10702');

/**
* @constructor
*/
cljs.core.async.t10702 = (function (fn1,_,meta10700,ch,f,map_LT_,meta10703){
this.fn1 = fn1;
this._ = _;
this.meta10700 = meta10700;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10703 = meta10703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10702.cljs$lang$type = true;
cljs.core.async.t10702.cljs$lang$ctorStr = "cljs.core.async/t10702";
cljs.core.async.t10702.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t10702");
});
cljs.core.async.t10702.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10702.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$2){var self__ = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$2){var self__ = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1){
return (function (p1__10692_SHARP_){return f1.call(null,(((p1__10692_SHARP_ == null))?null:self__.f.call(null,p1__10692_SHARP_)));
});
;})(f1))
});
cljs.core.async.t10702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10704){var self__ = this;
return self__.meta10703;
});
cljs.core.async.t10702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10704,meta10703__$1){var self__ = this;
return (new cljs.core.async.t10702(self__.fn1,self__._,self__.meta10700,self__.ch,self__.f,self__.map_LT_,meta10703__$1));
});
cljs.core.async.__GT_t10702 = (function __GT_t10702(fn1__$1,___$1,meta10700__$1,ch__$2,f__$2,map_LT___$2,meta10703){return (new cljs.core.async.t10702(fn1__$1,___$1,meta10700__$1,ch__$2,f__$2,map_LT___$2,meta10703));
});
}
return (new cljs.core.async.t10702(fn1,_,self__.meta10700,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3941__auto__ = ret;if(cljs.core.truth_(and__3941__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10699.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10701){var self__ = this;
return self__.meta10700;
});
cljs.core.async.t10699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10701,meta10700__$1){var self__ = this;
return (new cljs.core.async.t10699(self__.ch,self__.f,self__.map_LT_,meta10700__$1));
});
cljs.core.async.__GT_t10699 = (function __GT_t10699(ch__$1,f__$1,map_LT___$1,meta10700){return (new cljs.core.async.t10699(ch__$1,f__$1,map_LT___$1,meta10700));
});
}
return (new cljs.core.async.t10699(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10708 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10708');

/**
* @constructor
*/
cljs.core.async.t10708 = (function (ch,f,map_GT_,meta10709){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10709 = meta10709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10708.cljs$lang$type = true;
cljs.core.async.t10708.cljs$lang$ctorStr = "cljs.core.async/t10708";
cljs.core.async.t10708.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t10708");
});
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10710){var self__ = this;
return self__.meta10709;
});
cljs.core.async.t10708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10710,meta10709__$1){var self__ = this;
return (new cljs.core.async.t10708(self__.ch,self__.f,self__.map_GT_,meta10709__$1));
});
cljs.core.async.__GT_t10708 = (function __GT_t10708(ch__$1,f__$1,map_GT___$1,meta10709){return (new cljs.core.async.t10708(ch__$1,f__$1,map_GT___$1,meta10709));
});
}
return (new cljs.core.async.t10708(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10714 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t10714');

/**
* @constructor
*/
cljs.core.async.t10714 = (function (ch,p,filter_GT_,meta10715){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10715 = meta10715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10714.cljs$lang$type = true;
cljs.core.async.t10714.cljs$lang$ctorStr = "cljs.core.async/t10714";
cljs.core.async.t10714.cljs$lang$ctorPrWriter = (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t10714");
});
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10716){var self__ = this;
return self__.meta10715;
});
cljs.core.async.t10714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10716,meta10715__$1){var self__ = this;
return (new cljs.core.async.t10714(self__.ch,self__.p,self__.filter_GT_,meta10715__$1));
});
cljs.core.async.__GT_t10714 = (function __GT_t10714(ch__$1,p__$1,filter_GT___$1,meta10715){return (new cljs.core.async.t10714(ch__$1,p__$1,filter_GT___$1,meta10715));
});
}
return (new cljs.core.async.t10714(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8832__auto___10791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_10774){var state_val_10775 = (state_10774[1]);if((state_val_10775 === 1))
{var state_10774__$1 = state_10774;var statearr_10776_10792 = state_10774__$1;(statearr_10776_10792[2] = null);
(statearr_10776_10792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 2))
{var state_10774__$1 = state_10774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10774__$1,4,ch);
} else
{if((state_val_10775 === 3))
{var inst_10772 = (state_10774[2]);var state_10774__$1 = state_10774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10774__$1,inst_10772);
} else
{if((state_val_10775 === 4))
{var inst_10756 = (state_10774[5]);var inst_10756__$1 = (state_10774[2]);var inst_10757 = (inst_10756__$1 == null);var state_10774__$1 = (function (){var statearr_10777 = state_10774;(statearr_10777[5] = inst_10756__$1);
return statearr_10777;
})();if(cljs.core.truth_(inst_10757))
{var statearr_10778_10793 = state_10774__$1;(statearr_10778_10793[1] = 5);
} else
{var statearr_10779_10794 = state_10774__$1;(statearr_10779_10794[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 5))
{var inst_10759 = cljs.core.async.close_BANG_.call(null,out);var state_10774__$1 = state_10774;var statearr_10780_10795 = state_10774__$1;(statearr_10780_10795[2] = inst_10759);
(statearr_10780_10795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 6))
{var inst_10756 = (state_10774[5]);var inst_10761 = p.call(null,inst_10756);var state_10774__$1 = state_10774;if(cljs.core.truth_(inst_10761))
{var statearr_10781_10796 = state_10774__$1;(statearr_10781_10796[1] = 8);
} else
{var statearr_10782_10797 = state_10774__$1;(statearr_10782_10797[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 7))
{var inst_10770 = (state_10774[2]);var state_10774__$1 = state_10774;var statearr_10783_10798 = state_10774__$1;(statearr_10783_10798[2] = inst_10770);
(statearr_10783_10798[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 8))
{var inst_10756 = (state_10774[5]);var state_10774__$1 = state_10774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10774__$1,11,out,inst_10756);
} else
{if((state_val_10775 === 9))
{var state_10774__$1 = state_10774;var statearr_10784_10799 = state_10774__$1;(statearr_10784_10799[2] = null);
(statearr_10784_10799[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 10))
{var inst_10767 = (state_10774[2]);var state_10774__$1 = (function (){var statearr_10785 = state_10774;(statearr_10785[6] = inst_10767);
return statearr_10785;
})();var statearr_10786_10800 = state_10774__$1;(statearr_10786_10800[2] = null);
(statearr_10786_10800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10775 === 11))
{var inst_10764 = (state_10774[2]);var state_10774__$1 = state_10774;var statearr_10787_10801 = state_10774__$1;(statearr_10787_10801[2] = inst_10764);
(statearr_10787_10801[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_10789 = (new Array(7));(statearr_10789[0] = state_machine__8783__auto__);
(statearr_10789[1] = 1);
return statearr_10789;
});
var state_machine__8783__auto____1 = (function (state_10774){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_10774);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_10774){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_10774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_10790 = f__8833__auto__.call(null);(statearr_10790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto___10791);
return statearr_10790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8832__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_10949){var state_val_10950 = (state_10949[1]);if((state_val_10950 === 1))
{var state_10949__$1 = state_10949;var statearr_10951_10984 = state_10949__$1;(statearr_10951_10984[2] = null);
(statearr_10951_10984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 2))
{var state_10949__$1 = state_10949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10949__$1,4,in$);
} else
{if((state_val_10950 === 3))
{var inst_10947 = (state_10949[2]);var state_10949__$1 = state_10949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10949__$1,inst_10947);
} else
{if((state_val_10950 === 4))
{var inst_10895 = (state_10949[5]);var inst_10895__$1 = (state_10949[2]);var inst_10896 = (inst_10895__$1 == null);var state_10949__$1 = (function (){var statearr_10952 = state_10949;(statearr_10952[5] = inst_10895__$1);
return statearr_10952;
})();if(cljs.core.truth_(inst_10896))
{var statearr_10953_10985 = state_10949__$1;(statearr_10953_10985[1] = 5);
} else
{var statearr_10954_10986 = state_10949__$1;(statearr_10954_10986[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 5))
{var inst_10898 = cljs.core.async.close_BANG_.call(null,out);var state_10949__$1 = state_10949;var statearr_10955_10987 = state_10949__$1;(statearr_10955_10987[2] = inst_10898);
(statearr_10955_10987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 6))
{var inst_10895 = (state_10949[5]);var inst_10900 = f.call(null,inst_10895);var inst_10905 = cljs.core.seq.call(null,inst_10900);var inst_10906 = inst_10905;var inst_10907 = null;var inst_10908 = 0;var inst_10909 = 0;var state_10949__$1 = (function (){var statearr_10956 = state_10949;(statearr_10956[6] = inst_10909);
(statearr_10956[7] = inst_10908);
(statearr_10956[8] = inst_10907);
(statearr_10956[9] = inst_10906);
return statearr_10956;
})();var statearr_10957_10988 = state_10949__$1;(statearr_10957_10988[2] = null);
(statearr_10957_10988[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 7))
{var inst_10945 = (state_10949[2]);var state_10949__$1 = state_10949;var statearr_10958_10989 = state_10949__$1;(statearr_10958_10989[2] = inst_10945);
(statearr_10958_10989[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 8))
{var inst_10909 = (state_10949[6]);var inst_10908 = (state_10949[7]);var inst_10911 = (inst_10909 < inst_10908);var inst_10912 = inst_10911;var state_10949__$1 = state_10949;if(cljs.core.truth_(inst_10912))
{var statearr_10959_10990 = state_10949__$1;(statearr_10959_10990[1] = 10);
} else
{var statearr_10960_10991 = state_10949__$1;(statearr_10960_10991[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 9))
{var inst_10942 = (state_10949[2]);var state_10949__$1 = (function (){var statearr_10961 = state_10949;(statearr_10961[10] = inst_10942);
return statearr_10961;
})();var statearr_10962_10992 = state_10949__$1;(statearr_10962_10992[2] = null);
(statearr_10962_10992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 10))
{var inst_10909 = (state_10949[6]);var inst_10907 = (state_10949[8]);var inst_10914 = cljs.core._nth.call(null,inst_10907,inst_10909);var state_10949__$1 = state_10949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10949__$1,13,out,inst_10914);
} else
{if((state_val_10950 === 11))
{var inst_10920 = (state_10949[11]);var inst_10906 = (state_10949[9]);var inst_10920__$1 = cljs.core.seq.call(null,inst_10906);var state_10949__$1 = (function (){var statearr_10966 = state_10949;(statearr_10966[11] = inst_10920__$1);
return statearr_10966;
})();if(inst_10920__$1)
{var statearr_10967_10993 = state_10949__$1;(statearr_10967_10993[1] = 14);
} else
{var statearr_10968_10994 = state_10949__$1;(statearr_10968_10994[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 12))
{var inst_10940 = (state_10949[2]);var state_10949__$1 = state_10949;var statearr_10969_10995 = state_10949__$1;(statearr_10969_10995[2] = inst_10940);
(statearr_10969_10995[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 13))
{var inst_10909 = (state_10949[6]);var inst_10908 = (state_10949[7]);var inst_10907 = (state_10949[8]);var inst_10906 = (state_10949[9]);var inst_10916 = (state_10949[2]);var inst_10917 = (inst_10909 + 1);var tmp10963 = inst_10908;var tmp10964 = inst_10907;var tmp10965 = inst_10906;var inst_10906__$1 = tmp10965;var inst_10907__$1 = tmp10964;var inst_10908__$1 = tmp10963;var inst_10909__$1 = inst_10917;var state_10949__$1 = (function (){var statearr_10970 = state_10949;(statearr_10970[6] = inst_10909__$1);
(statearr_10970[7] = inst_10908__$1);
(statearr_10970[8] = inst_10907__$1);
(statearr_10970[9] = inst_10906__$1);
(statearr_10970[12] = inst_10916);
return statearr_10970;
})();var statearr_10971_10996 = state_10949__$1;(statearr_10971_10996[2] = null);
(statearr_10971_10996[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 14))
{var inst_10920 = (state_10949[11]);var inst_10922 = cljs.core.chunked_seq_QMARK_.call(null,inst_10920);var state_10949__$1 = state_10949;if(inst_10922)
{var statearr_10972_10997 = state_10949__$1;(statearr_10972_10997[1] = 17);
} else
{var statearr_10973_10998 = state_10949__$1;(statearr_10973_10998[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 15))
{var state_10949__$1 = state_10949;var statearr_10974_10999 = state_10949__$1;(statearr_10974_10999[2] = null);
(statearr_10974_10999[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 16))
{var inst_10938 = (state_10949[2]);var state_10949__$1 = state_10949;var statearr_10975_11000 = state_10949__$1;(statearr_10975_11000[2] = inst_10938);
(statearr_10975_11000[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 17))
{var inst_10920 = (state_10949[11]);var inst_10924 = cljs.core.chunk_first.call(null,inst_10920);var inst_10925 = cljs.core.chunk_rest.call(null,inst_10920);var inst_10926 = cljs.core.count.call(null,inst_10924);var inst_10906 = inst_10925;var inst_10907 = inst_10924;var inst_10908 = inst_10926;var inst_10909 = 0;var state_10949__$1 = (function (){var statearr_10976 = state_10949;(statearr_10976[6] = inst_10909);
(statearr_10976[7] = inst_10908);
(statearr_10976[8] = inst_10907);
(statearr_10976[9] = inst_10906);
return statearr_10976;
})();var statearr_10977_11001 = state_10949__$1;(statearr_10977_11001[2] = null);
(statearr_10977_11001[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 18))
{var inst_10920 = (state_10949[11]);var inst_10929 = cljs.core.first.call(null,inst_10920);var state_10949__$1 = state_10949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10949__$1,20,out,inst_10929);
} else
{if((state_val_10950 === 19))
{var inst_10935 = (state_10949[2]);var state_10949__$1 = state_10949;var statearr_10978_11002 = state_10949__$1;(statearr_10978_11002[2] = inst_10935);
(statearr_10978_11002[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10950 === 20))
{var inst_10920 = (state_10949[11]);var inst_10931 = (state_10949[2]);var inst_10932 = cljs.core.next.call(null,inst_10920);var inst_10906 = inst_10932;var inst_10907 = null;var inst_10908 = 0;var inst_10909 = 0;var state_10949__$1 = (function (){var statearr_10979 = state_10949;(statearr_10979[6] = inst_10909);
(statearr_10979[7] = inst_10908);
(statearr_10979[8] = inst_10907);
(statearr_10979[9] = inst_10906);
(statearr_10979[13] = inst_10931);
return statearr_10979;
})();var statearr_10980_11003 = state_10949__$1;(statearr_10980_11003[2] = null);
(statearr_10980_11003[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_10982 = (new Array(14));(statearr_10982[0] = state_machine__8783__auto__);
(statearr_10982[1] = 1);
return statearr_10982;
});
var state_machine__8783__auto____1 = (function (state_10949){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_10949);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_10949){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_10949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_10983 = f__8833__auto__.call(null);(statearr_10983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto__);
return statearr_10983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return c__8832__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8832__auto___11076 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_11059){var state_val_11060 = (state_11059[1]);if((state_val_11060 === 1))
{var state_11059__$1 = state_11059;var statearr_11061_11077 = state_11059__$1;(statearr_11061_11077[2] = null);
(statearr_11061_11077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 2))
{var state_11059__$1 = state_11059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11059__$1,4,from);
} else
{if((state_val_11060 === 3))
{var inst_11057 = (state_11059[2]);var state_11059__$1 = state_11059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11059__$1,inst_11057);
} else
{if((state_val_11060 === 4))
{var inst_11042 = (state_11059[5]);var inst_11042__$1 = (state_11059[2]);var inst_11043 = (inst_11042__$1 == null);var state_11059__$1 = (function (){var statearr_11062 = state_11059;(statearr_11062[5] = inst_11042__$1);
return statearr_11062;
})();if(cljs.core.truth_(inst_11043))
{var statearr_11063_11078 = state_11059__$1;(statearr_11063_11078[1] = 5);
} else
{var statearr_11064_11079 = state_11059__$1;(statearr_11064_11079[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 5))
{var state_11059__$1 = state_11059;if(cljs.core.truth_(close_QMARK_))
{var statearr_11065_11080 = state_11059__$1;(statearr_11065_11080[1] = 8);
} else
{var statearr_11066_11081 = state_11059__$1;(statearr_11066_11081[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 6))
{var inst_11042 = (state_11059[5]);var state_11059__$1 = state_11059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11059__$1,11,to,inst_11042);
} else
{if((state_val_11060 === 7))
{var inst_11055 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11067_11082 = state_11059__$1;(statearr_11067_11082[2] = inst_11055);
(statearr_11067_11082[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 8))
{var inst_11046 = cljs.core.async.close_BANG_.call(null,to);var state_11059__$1 = state_11059;var statearr_11068_11083 = state_11059__$1;(statearr_11068_11083[2] = inst_11046);
(statearr_11068_11083[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 9))
{var state_11059__$1 = state_11059;var statearr_11069_11084 = state_11059__$1;(statearr_11069_11084[2] = null);
(statearr_11069_11084[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 10))
{var inst_11049 = (state_11059[2]);var state_11059__$1 = state_11059;var statearr_11070_11085 = state_11059__$1;(statearr_11070_11085[2] = inst_11049);
(statearr_11070_11085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11060 === 11))
{var inst_11052 = (state_11059[2]);var state_11059__$1 = (function (){var statearr_11071 = state_11059;(statearr_11071[6] = inst_11052);
return statearr_11071;
})();var statearr_11072_11086 = state_11059__$1;(statearr_11072_11086[2] = null);
(statearr_11072_11086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_11074 = (new Array(7));(statearr_11074[0] = state_machine__8783__auto__);
(statearr_11074[1] = 1);
return statearr_11074;
});
var state_machine__8783__auto____1 = (function (state_11059){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_11059);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_11059){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_11059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_11075 = f__8833__auto__.call(null);(statearr_11075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto___11076);
return statearr_11075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8832__auto___11165 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_11147){var state_val_11148 = (state_11147[1]);if((state_val_11148 === 1))
{var state_11147__$1 = state_11147;var statearr_11149_11166 = state_11147__$1;(statearr_11149_11166[2] = null);
(statearr_11149_11166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11148 === 2))
{var state_11147__$1 = state_11147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11147__$1,4,ch);
} else
{if((state_val_11148 === 3))
{var inst_11145 = (state_11147[2]);var state_11147__$1 = state_11147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11147__$1,inst_11145);
} else
{if((state_val_11148 === 4))
{var inst_11128 = (state_11147[5]);var inst_11128__$1 = (state_11147[2]);var inst_11129 = (inst_11128__$1 == null);var state_11147__$1 = (function (){var statearr_11150 = state_11147;(statearr_11150[5] = inst_11128__$1);
return statearr_11150;
})();if(cljs.core.truth_(inst_11129))
{var statearr_11151_11167 = state_11147__$1;(statearr_11151_11167[1] = 5);
} else
{var statearr_11152_11168 = state_11147__$1;(statearr_11152_11168[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11148 === 5))
{var inst_11131 = cljs.core.async.close_BANG_.call(null,tc);var inst_11132 = cljs.core.async.close_BANG_.call(null,fc);var state_11147__$1 = (function (){var statearr_11153 = state_11147;(statearr_11153[6] = inst_11131);
return statearr_11153;
})();var statearr_11154_11169 = state_11147__$1;(statearr_11154_11169[2] = inst_11132);
(statearr_11154_11169[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11148 === 6))
{var inst_11128 = (state_11147[5]);var inst_11134 = p.call(null,inst_11128);var state_11147__$1 = state_11147;if(cljs.core.truth_(inst_11134))
{var statearr_11155_11170 = state_11147__$1;(statearr_11155_11170[1] = 9);
} else
{var statearr_11156_11171 = state_11147__$1;(statearr_11156_11171[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11148 === 7))
{var inst_11143 = (state_11147[2]);var state_11147__$1 = state_11147;var statearr_11157_11172 = state_11147__$1;(statearr_11157_11172[2] = inst_11143);
(statearr_11157_11172[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11148 === 8))
{var inst_11140 = (state_11147[2]);var state_11147__$1 = (function (){var statearr_11158 = state_11147;(statearr_11158[7] = inst_11140);
return statearr_11158;
})();var statearr_11159_11173 = state_11147__$1;(statearr_11159_11173[2] = null);
(statearr_11159_11173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11148 === 9))
{var state_11147__$1 = state_11147;var statearr_11160_11174 = state_11147__$1;(statearr_11160_11174[2] = tc);
(statearr_11160_11174[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11148 === 10))
{var state_11147__$1 = state_11147;var statearr_11161_11175 = state_11147__$1;(statearr_11161_11175[2] = fc);
(statearr_11161_11175[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11148 === 11))
{var inst_11128 = (state_11147[5]);var inst_11138 = (state_11147[2]);var state_11147__$1 = state_11147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11147__$1,8,inst_11138,inst_11128);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_11163 = (new Array(8));(statearr_11163[0] = state_machine__8783__auto__);
(statearr_11163[1] = 1);
return statearr_11163;
});
var state_machine__8783__auto____1 = (function (state_11147){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_11147);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_11147){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_11147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_11164 = f__8833__auto__.call(null);(statearr_11164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto___11165);
return statearr_11164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8832__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_11218){var state_val_11219 = (state_11218[1]);if((state_val_11219 === 7))
{var inst_11214 = (state_11218[2]);var state_11218__$1 = state_11218;var statearr_11220_11232 = state_11218__$1;(statearr_11220_11232[2] = inst_11214);
(statearr_11220_11232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 6))
{var inst_11204 = (state_11218[5]);var inst_11207 = (state_11218[6]);var inst_11211 = f.call(null,inst_11204,inst_11207);var inst_11204__$1 = inst_11211;var state_11218__$1 = (function (){var statearr_11221 = state_11218;(statearr_11221[5] = inst_11204__$1);
return statearr_11221;
})();var statearr_11222_11233 = state_11218__$1;(statearr_11222_11233[2] = null);
(statearr_11222_11233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 5))
{var inst_11204 = (state_11218[5]);var state_11218__$1 = state_11218;var statearr_11223_11234 = state_11218__$1;(statearr_11223_11234[2] = inst_11204);
(statearr_11223_11234[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 4))
{var inst_11207 = (state_11218[6]);var inst_11207__$1 = (state_11218[2]);var inst_11208 = (inst_11207__$1 == null);var state_11218__$1 = (function (){var statearr_11224 = state_11218;(statearr_11224[6] = inst_11207__$1);
return statearr_11224;
})();if(cljs.core.truth_(inst_11208))
{var statearr_11225_11235 = state_11218__$1;(statearr_11225_11235[1] = 5);
} else
{var statearr_11226_11236 = state_11218__$1;(statearr_11226_11236[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 3))
{var inst_11216 = (state_11218[2]);var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11218__$1,inst_11216);
} else
{if((state_val_11219 === 2))
{var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11218__$1,4,ch);
} else
{if((state_val_11219 === 1))
{var inst_11204 = init;var state_11218__$1 = (function (){var statearr_11227 = state_11218;(statearr_11227[5] = inst_11204);
return statearr_11227;
})();var statearr_11228_11237 = state_11218__$1;(statearr_11228_11237[2] = null);
(statearr_11228_11237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_11230 = (new Array(7));(statearr_11230[0] = state_machine__8783__auto__);
(statearr_11230[1] = 1);
return statearr_11230;
});
var state_machine__8783__auto____1 = (function (state_11218){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_11218);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_11218){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_11218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_11231 = f__8833__auto__.call(null);(statearr_11231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto__);
return statearr_11231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return c__8832__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8832__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_11295){var state_val_11296 = (state_11295[1]);if((state_val_11296 === 1))
{var inst_11275 = cljs.core.seq.call(null,coll);var inst_11276 = inst_11275;var state_11295__$1 = (function (){var statearr_11297 = state_11295;(statearr_11297[5] = inst_11276);
return statearr_11297;
})();var statearr_11298_11312 = state_11295__$1;(statearr_11298_11312[2] = null);
(statearr_11298_11312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11296 === 2))
{var inst_11276 = (state_11295[5]);var state_11295__$1 = state_11295;if(cljs.core.truth_(inst_11276))
{var statearr_11299_11313 = state_11295__$1;(statearr_11299_11313[1] = 4);
} else
{var statearr_11300_11314 = state_11295__$1;(statearr_11300_11314[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11296 === 3))
{var inst_11293 = (state_11295[2]);var state_11295__$1 = state_11295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11295__$1,inst_11293);
} else
{if((state_val_11296 === 4))
{var inst_11276 = (state_11295[5]);var inst_11279 = cljs.core.first.call(null,inst_11276);var state_11295__$1 = state_11295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11295__$1,7,ch,inst_11279);
} else
{if((state_val_11296 === 5))
{var state_11295__$1 = state_11295;if(cljs.core.truth_(close_QMARK_))
{var statearr_11301_11315 = state_11295__$1;(statearr_11301_11315[1] = 8);
} else
{var statearr_11302_11316 = state_11295__$1;(statearr_11302_11316[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11296 === 6))
{var inst_11291 = (state_11295[2]);var state_11295__$1 = state_11295;var statearr_11303_11317 = state_11295__$1;(statearr_11303_11317[2] = inst_11291);
(statearr_11303_11317[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11296 === 7))
{var inst_11276 = (state_11295[5]);var inst_11281 = (state_11295[2]);var inst_11282 = cljs.core.next.call(null,inst_11276);var inst_11276__$1 = inst_11282;var state_11295__$1 = (function (){var statearr_11304 = state_11295;(statearr_11304[5] = inst_11276__$1);
(statearr_11304[6] = inst_11281);
return statearr_11304;
})();var statearr_11305_11318 = state_11295__$1;(statearr_11305_11318[2] = null);
(statearr_11305_11318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11296 === 8))
{var inst_11286 = cljs.core.async.close_BANG_.call(null,ch);var state_11295__$1 = state_11295;var statearr_11306_11319 = state_11295__$1;(statearr_11306_11319[2] = inst_11286);
(statearr_11306_11319[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11296 === 9))
{var state_11295__$1 = state_11295;var statearr_11307_11320 = state_11295__$1;(statearr_11307_11320[2] = null);
(statearr_11307_11320[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11296 === 10))
{var inst_11289 = (state_11295[2]);var state_11295__$1 = state_11295;var statearr_11308_11321 = state_11295__$1;(statearr_11308_11321[2] = inst_11289);
(statearr_11308_11321[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_11310 = (new Array(7));(statearr_11310[0] = state_machine__8783__auto__);
(statearr_11310[1] = 1);
return statearr_11310;
});
var state_machine__8783__auto____1 = (function (state_11295){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_11295);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_11295){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_11295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_11311 = f__8833__auto__.call(null);(statearr_11311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto__);
return statearr_11311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return c__8832__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3941__auto__ = _;if(and__3941__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5614__auto__ = (((_ == null))?null:_);return (function (){var or__3943__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5614__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5614__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5614__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11534 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11534');

/**
* @constructor
*/
cljs.core.async.t11534 = (function (cs,ch,mult,meta11535){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11535 = meta11535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11534.cljs$lang$type = true;
cljs.core.async.t11534.cljs$lang$ctorStr = "cljs.core.async/t11534";
cljs.core.async.t11534.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t11534");
});})(cs))
;
cljs.core.async.t11534.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11534.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11534.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11534.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11534.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11534.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
return self__.ch;
});})(cs))
;
cljs.core.async.t11534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11536){var self__ = this;
return self__.meta11535;
});})(cs))
;
cljs.core.async.t11534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11536,meta11535__$1){var self__ = this;
return (new cljs.core.async.t11534(self__.cs,self__.ch,self__.mult,meta11535__$1));
});})(cs))
;
cljs.core.async.__GT_t11534 = ((function (cs){
return (function __GT_t11534(cs__$1,ch__$1,mult__$1,meta11535){return (new cljs.core.async.t11534(cs__$1,ch__$1,mult__$1,meta11535));
});})(cs))
;
}
return (new cljs.core.async.t11534(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8832__auto___11746 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_11664){var state_val_11665 = (state_11664[1]);if((state_val_11665 === 32))
{try{var inst_11615 = (state_11664[5]);var inst_11539 = (state_11664[6]);var inst_11621 = cljs.core.async.put_BANG_.call(null,inst_11615,inst_11539,done);var state_11664__$1 = state_11664;var statearr_11668_11747 = state_11664__$1;(statearr_11668_11747[2] = inst_11621);
(statearr_11668_11747[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e11666){if((e11666 instanceof Object))
{var ex__8776__auto__ = e11666;var statearr_11667_11748 = state_11664;(statearr_11667_11748[1] = 31);
(statearr_11667_11748[2] = ex__8776__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11666;
} else
{return null;
}
}
}} else
{if((state_val_11665 === 1))
{var state_11664__$1 = state_11664;var statearr_11669_11749 = state_11664__$1;(statearr_11669_11749[2] = null);
(statearr_11669_11749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 33))
{var inst_11627 = (state_11664[7]);var inst_11629 = cljs.core.chunked_seq_QMARK_.call(null,inst_11627);var state_11664__$1 = state_11664;if(inst_11629)
{var statearr_11670_11750 = state_11664__$1;(statearr_11670_11750[1] = 36);
} else
{var statearr_11671_11751 = state_11664__$1;(statearr_11671_11751[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 2))
{var state_11664__$1 = state_11664;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11664__$1,4,ch);
} else
{if((state_val_11665 === 34))
{var state_11664__$1 = state_11664;var statearr_11672_11752 = state_11664__$1;(statearr_11672_11752[2] = null);
(statearr_11672_11752[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 3))
{var inst_11662 = (state_11664[2]);var state_11664__$1 = state_11664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11664__$1,inst_11662);
} else
{if((state_val_11665 === 35))
{var inst_11651 = (state_11664[2]);var state_11664__$1 = state_11664;var statearr_11673_11753 = state_11664__$1;(statearr_11673_11753[2] = inst_11651);
(statearr_11673_11753[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 4))
{var inst_11539 = (state_11664[6]);var inst_11539__$1 = (state_11664[2]);var inst_11540 = (inst_11539__$1 == null);var state_11664__$1 = (function (){var statearr_11674 = state_11664;(statearr_11674[6] = inst_11539__$1);
return statearr_11674;
})();if(cljs.core.truth_(inst_11540))
{var statearr_11675_11754 = state_11664__$1;(statearr_11675_11754[1] = 5);
} else
{var statearr_11676_11755 = state_11664__$1;(statearr_11676_11755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 36))
{var inst_11627 = (state_11664[7]);var inst_11631 = cljs.core.chunk_first.call(null,inst_11627);var inst_11632 = cljs.core.chunk_rest.call(null,inst_11627);var inst_11633 = cljs.core.count.call(null,inst_11631);var inst_11607 = inst_11632;var inst_11608 = inst_11631;var inst_11609 = inst_11633;var inst_11610 = 0;var state_11664__$1 = (function (){var statearr_11677 = state_11664;(statearr_11677[8] = inst_11610);
(statearr_11677[9] = inst_11609);
(statearr_11677[10] = inst_11607);
(statearr_11677[11] = inst_11608);
return statearr_11677;
})();var statearr_11678_11756 = state_11664__$1;(statearr_11678_11756[2] = null);
(statearr_11678_11756[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 5))
{var inst_11546 = cljs.core.deref.call(null,cs);var inst_11547 = cljs.core.seq.call(null,inst_11546);var inst_11548 = inst_11547;var inst_11549 = null;var inst_11550 = 0;var inst_11551 = 0;var state_11664__$1 = (function (){var statearr_11679 = state_11664;(statearr_11679[12] = inst_11549);
(statearr_11679[13] = inst_11548);
(statearr_11679[14] = inst_11550);
(statearr_11679[15] = inst_11551);
return statearr_11679;
})();var statearr_11680_11757 = state_11664__$1;(statearr_11680_11757[2] = null);
(statearr_11680_11757[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 37))
{var inst_11627 = (state_11664[7]);var inst_11636 = cljs.core.first.call(null,inst_11627);var state_11664__$1 = (function (){var statearr_11681 = state_11664;(statearr_11681[16] = inst_11636);
return statearr_11681;
})();var statearr_11682_11758 = state_11664__$1;(statearr_11682_11758[2] = null);
(statearr_11682_11758[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 6))
{var inst_11598 = cljs.core.deref.call(null,cs);var inst_11599 = cljs.core.keys.call(null,inst_11598);var inst_11600 = cljs.core.count.call(null,inst_11599);var inst_11601 = cljs.core.reset_BANG_.call(null,dctr,inst_11600);var inst_11606 = cljs.core.seq.call(null,inst_11599);var inst_11607 = inst_11606;var inst_11608 = null;var inst_11609 = 0;var inst_11610 = 0;var state_11664__$1 = (function (){var statearr_11683 = state_11664;(statearr_11683[8] = inst_11610);
(statearr_11683[17] = inst_11601);
(statearr_11683[9] = inst_11609);
(statearr_11683[10] = inst_11607);
(statearr_11683[11] = inst_11608);
return statearr_11683;
})();var statearr_11684_11759 = state_11664__$1;(statearr_11684_11759[2] = null);
(statearr_11684_11759[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 38))
{var inst_11648 = (state_11664[2]);var state_11664__$1 = state_11664;var statearr_11685_11760 = state_11664__$1;(statearr_11685_11760[2] = inst_11648);
(statearr_11685_11760[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 7))
{var inst_11660 = (state_11664[2]);var state_11664__$1 = state_11664;var statearr_11686_11761 = state_11664__$1;(statearr_11686_11761[2] = inst_11660);
(statearr_11686_11761[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 39))
{var inst_11627 = (state_11664[7]);var inst_11644 = (state_11664[2]);var inst_11645 = cljs.core.next.call(null,inst_11627);var inst_11607 = inst_11645;var inst_11608 = null;var inst_11609 = 0;var inst_11610 = 0;var state_11664__$1 = (function (){var statearr_11687 = state_11664;(statearr_11687[8] = inst_11610);
(statearr_11687[18] = inst_11644);
(statearr_11687[9] = inst_11609);
(statearr_11687[10] = inst_11607);
(statearr_11687[11] = inst_11608);
return statearr_11687;
})();var statearr_11688_11762 = state_11664__$1;(statearr_11688_11762[2] = null);
(statearr_11688_11762[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 8))
{var inst_11550 = (state_11664[14]);var inst_11551 = (state_11664[15]);var inst_11553 = (inst_11551 < inst_11550);var inst_11554 = inst_11553;var state_11664__$1 = state_11664;if(cljs.core.truth_(inst_11554))
{var statearr_11689_11763 = state_11664__$1;(statearr_11689_11763[1] = 10);
} else
{var statearr_11690_11764 = state_11664__$1;(statearr_11690_11764[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 40))
{var inst_11636 = (state_11664[16]);var inst_11637 = (state_11664[2]);var inst_11638 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11639 = cljs.core.async.untap_STAR_.call(null,m,inst_11636);var state_11664__$1 = (function (){var statearr_11691 = state_11664;(statearr_11691[19] = inst_11637);
(statearr_11691[20] = inst_11638);
return statearr_11691;
})();var statearr_11692_11765 = state_11664__$1;(statearr_11692_11765[2] = inst_11639);
(statearr_11692_11765[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 9))
{var inst_11596 = (state_11664[2]);var state_11664__$1 = state_11664;var statearr_11693_11766 = state_11664__$1;(statearr_11693_11766[2] = inst_11596);
(statearr_11693_11766[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 41))
{try{var inst_11636 = (state_11664[16]);var inst_11539 = (state_11664[6]);var inst_11642 = cljs.core.async.put_BANG_.call(null,inst_11636,inst_11539,done);var state_11664__$1 = state_11664;var statearr_11696_11767 = state_11664__$1;(statearr_11696_11767[2] = inst_11642);
(statearr_11696_11767[1] = 39);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e11694){if((e11694 instanceof Object))
{var ex__8776__auto__ = e11694;var statearr_11695_11768 = state_11664;(statearr_11695_11768[1] = 40);
(statearr_11695_11768[2] = ex__8776__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11694;
} else
{return null;
}
}
}} else
{if((state_val_11665 === 10))
{var inst_11549 = (state_11664[12]);var inst_11551 = (state_11664[15]);var inst_11557 = cljs.core._nth.call(null,inst_11549,inst_11551);var inst_11558 = cljs.core.nth.call(null,inst_11557,0,null);var inst_11559 = cljs.core.nth.call(null,inst_11557,1,null);var state_11664__$1 = (function (){var statearr_11697 = state_11664;(statearr_11697[21] = inst_11558);
return statearr_11697;
})();if(cljs.core.truth_(inst_11559))
{var statearr_11698_11769 = state_11664__$1;(statearr_11698_11769[1] = 13);
} else
{var statearr_11699_11770 = state_11664__$1;(statearr_11699_11770[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 42))
{var inst_11657 = (state_11664[2]);var state_11664__$1 = (function (){var statearr_11700 = state_11664;(statearr_11700[22] = inst_11657);
return statearr_11700;
})();var statearr_11701_11771 = state_11664__$1;(statearr_11701_11771[2] = null);
(statearr_11701_11771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 11))
{var inst_11548 = (state_11664[13]);var inst_11568 = (state_11664[23]);var inst_11568__$1 = cljs.core.seq.call(null,inst_11548);var state_11664__$1 = (function (){var statearr_11702 = state_11664;(statearr_11702[23] = inst_11568__$1);
return statearr_11702;
})();if(inst_11568__$1)
{var statearr_11703_11772 = state_11664__$1;(statearr_11703_11772[1] = 16);
} else
{var statearr_11704_11773 = state_11664__$1;(statearr_11704_11773[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 12))
{var inst_11594 = (state_11664[2]);var state_11664__$1 = state_11664;var statearr_11705_11774 = state_11664__$1;(statearr_11705_11774[2] = inst_11594);
(statearr_11705_11774[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 13))
{var inst_11558 = (state_11664[21]);var inst_11561 = cljs.core.async.close_BANG_.call(null,inst_11558);var state_11664__$1 = state_11664;var statearr_11709_11775 = state_11664__$1;(statearr_11709_11775[2] = inst_11561);
(statearr_11709_11775[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 14))
{var state_11664__$1 = state_11664;var statearr_11710_11776 = state_11664__$1;(statearr_11710_11776[2] = null);
(statearr_11710_11776[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 15))
{var inst_11549 = (state_11664[12]);var inst_11548 = (state_11664[13]);var inst_11550 = (state_11664[14]);var inst_11551 = (state_11664[15]);var inst_11564 = (state_11664[2]);var inst_11565 = (inst_11551 + 1);var tmp11706 = inst_11549;var tmp11707 = inst_11548;var tmp11708 = inst_11550;var inst_11548__$1 = tmp11707;var inst_11549__$1 = tmp11706;var inst_11550__$1 = tmp11708;var inst_11551__$1 = inst_11565;var state_11664__$1 = (function (){var statearr_11711 = state_11664;(statearr_11711[12] = inst_11549__$1);
(statearr_11711[13] = inst_11548__$1);
(statearr_11711[14] = inst_11550__$1);
(statearr_11711[24] = inst_11564);
(statearr_11711[15] = inst_11551__$1);
return statearr_11711;
})();var statearr_11712_11777 = state_11664__$1;(statearr_11712_11777[2] = null);
(statearr_11712_11777[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 16))
{var inst_11568 = (state_11664[23]);var inst_11570 = cljs.core.chunked_seq_QMARK_.call(null,inst_11568);var state_11664__$1 = state_11664;if(inst_11570)
{var statearr_11713_11778 = state_11664__$1;(statearr_11713_11778[1] = 19);
} else
{var statearr_11714_11779 = state_11664__$1;(statearr_11714_11779[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 17))
{var state_11664__$1 = state_11664;var statearr_11715_11780 = state_11664__$1;(statearr_11715_11780[2] = null);
(statearr_11715_11780[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 18))
{var inst_11592 = (state_11664[2]);var state_11664__$1 = state_11664;var statearr_11716_11781 = state_11664__$1;(statearr_11716_11781[2] = inst_11592);
(statearr_11716_11781[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 19))
{var inst_11568 = (state_11664[23]);var inst_11572 = cljs.core.chunk_first.call(null,inst_11568);var inst_11573 = cljs.core.chunk_rest.call(null,inst_11568);var inst_11574 = cljs.core.count.call(null,inst_11572);var inst_11548 = inst_11573;var inst_11549 = inst_11572;var inst_11550 = inst_11574;var inst_11551 = 0;var state_11664__$1 = (function (){var statearr_11717 = state_11664;(statearr_11717[12] = inst_11549);
(statearr_11717[13] = inst_11548);
(statearr_11717[14] = inst_11550);
(statearr_11717[15] = inst_11551);
return statearr_11717;
})();var statearr_11718_11782 = state_11664__$1;(statearr_11718_11782[2] = null);
(statearr_11718_11782[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 20))
{var inst_11568 = (state_11664[23]);var inst_11578 = cljs.core.first.call(null,inst_11568);var inst_11579 = cljs.core.nth.call(null,inst_11578,0,null);var inst_11580 = cljs.core.nth.call(null,inst_11578,1,null);var state_11664__$1 = (function (){var statearr_11719 = state_11664;(statearr_11719[25] = inst_11579);
return statearr_11719;
})();if(cljs.core.truth_(inst_11580))
{var statearr_11720_11783 = state_11664__$1;(statearr_11720_11783[1] = 22);
} else
{var statearr_11721_11784 = state_11664__$1;(statearr_11721_11784[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 21))
{var inst_11589 = (state_11664[2]);var state_11664__$1 = state_11664;var statearr_11722_11785 = state_11664__$1;(statearr_11722_11785[2] = inst_11589);
(statearr_11722_11785[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 22))
{var inst_11579 = (state_11664[25]);var inst_11582 = cljs.core.async.close_BANG_.call(null,inst_11579);var state_11664__$1 = state_11664;var statearr_11723_11786 = state_11664__$1;(statearr_11723_11786[2] = inst_11582);
(statearr_11723_11786[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 23))
{var state_11664__$1 = state_11664;var statearr_11724_11787 = state_11664__$1;(statearr_11724_11787[2] = null);
(statearr_11724_11787[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 24))
{var inst_11568 = (state_11664[23]);var inst_11585 = (state_11664[2]);var inst_11586 = cljs.core.next.call(null,inst_11568);var inst_11548 = inst_11586;var inst_11549 = null;var inst_11550 = 0;var inst_11551 = 0;var state_11664__$1 = (function (){var statearr_11725 = state_11664;(statearr_11725[12] = inst_11549);
(statearr_11725[13] = inst_11548);
(statearr_11725[26] = inst_11585);
(statearr_11725[14] = inst_11550);
(statearr_11725[15] = inst_11551);
return statearr_11725;
})();var statearr_11726_11788 = state_11664__$1;(statearr_11726_11788[2] = null);
(statearr_11726_11788[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 25))
{var inst_11610 = (state_11664[8]);var inst_11609 = (state_11664[9]);var inst_11612 = (inst_11610 < inst_11609);var inst_11613 = inst_11612;var state_11664__$1 = state_11664;if(cljs.core.truth_(inst_11613))
{var statearr_11727_11789 = state_11664__$1;(statearr_11727_11789[1] = 27);
} else
{var statearr_11728_11790 = state_11664__$1;(statearr_11728_11790[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 26))
{var inst_11655 = (state_11664[2]);var state_11664__$1 = (function (){var statearr_11729 = state_11664;(statearr_11729[27] = inst_11655);
return statearr_11729;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11664__$1,42,dchan);
} else
{if((state_val_11665 === 27))
{var inst_11610 = (state_11664[8]);var inst_11608 = (state_11664[11]);var inst_11615 = cljs.core._nth.call(null,inst_11608,inst_11610);var state_11664__$1 = (function (){var statearr_11730 = state_11664;(statearr_11730[5] = inst_11615);
return statearr_11730;
})();var statearr_11731_11791 = state_11664__$1;(statearr_11731_11791[2] = null);
(statearr_11731_11791[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 28))
{var inst_11627 = (state_11664[7]);var inst_11607 = (state_11664[10]);var inst_11627__$1 = cljs.core.seq.call(null,inst_11607);var state_11664__$1 = (function (){var statearr_11735 = state_11664;(statearr_11735[7] = inst_11627__$1);
return statearr_11735;
})();if(inst_11627__$1)
{var statearr_11736_11792 = state_11664__$1;(statearr_11736_11792[1] = 33);
} else
{var statearr_11737_11793 = state_11664__$1;(statearr_11737_11793[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 29))
{var inst_11653 = (state_11664[2]);var state_11664__$1 = state_11664;var statearr_11738_11794 = state_11664__$1;(statearr_11738_11794[2] = inst_11653);
(statearr_11738_11794[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 30))
{var inst_11610 = (state_11664[8]);var inst_11609 = (state_11664[9]);var inst_11607 = (state_11664[10]);var inst_11608 = (state_11664[11]);var inst_11623 = (state_11664[2]);var inst_11624 = (inst_11610 + 1);var tmp11732 = inst_11609;var tmp11733 = inst_11607;var tmp11734 = inst_11608;var inst_11607__$1 = tmp11733;var inst_11608__$1 = tmp11734;var inst_11609__$1 = tmp11732;var inst_11610__$1 = inst_11624;var state_11664__$1 = (function (){var statearr_11739 = state_11664;(statearr_11739[8] = inst_11610__$1);
(statearr_11739[9] = inst_11609__$1);
(statearr_11739[10] = inst_11607__$1);
(statearr_11739[11] = inst_11608__$1);
(statearr_11739[28] = inst_11623);
return statearr_11739;
})();var statearr_11740_11795 = state_11664__$1;(statearr_11740_11795[2] = null);
(statearr_11740_11795[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11665 === 31))
{var inst_11615 = (state_11664[5]);var inst_11616 = (state_11664[2]);var inst_11617 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11618 = cljs.core.async.untap_STAR_.call(null,m,inst_11615);var state_11664__$1 = (function (){var statearr_11741 = state_11664;(statearr_11741[29] = inst_11617);
(statearr_11741[30] = inst_11616);
return statearr_11741;
})();var statearr_11742_11796 = state_11664__$1;(statearr_11742_11796[2] = inst_11618);
(statearr_11742_11796[1] = 30);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_11744 = (new Array(31));(statearr_11744[0] = state_machine__8783__auto__);
(statearr_11744[1] = 1);
return statearr_11744;
});
var state_machine__8783__auto____1 = (function (state_11664){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_11664);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_11664){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_11664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_11745 = f__8833__auto__.call(null);(statearr_11745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto___11746);
return statearr_11745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5614__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5614__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5614__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5614__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3941__auto__ = m;if(and__3941__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5614__auto__ = (((m == null))?null:m);return (function (){var or__3943__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424));if(and__3941__auto__)
{return !(cljs.core.empty_QMARK_.call(null,solos));
} else
{return and__3941__auto__;
}
})())?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11917 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t11917');

/**
* @constructor
*/
cljs.core.async.t11917 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11918){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11918 = meta11918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11917.cljs$lang$type = true;
cljs.core.async.t11917.cljs$lang$ctorStr = "cljs.core.async/t11917";
cljs.core.async.t11917.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t11917");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11917.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11917.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11917.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11917.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11917.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11917.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11917.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11919){var self__ = this;
return self__.meta11918;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11919,meta11918__$1){var self__ = this;
return (new cljs.core.async.t11917(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11918__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11917 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11917(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11918){return (new cljs.core.async.t11917(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11918));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11917(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8832__auto___12037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_11990){var state_val_11991 = (state_11990[1]);if((state_val_11991 === 1))
{var inst_11923 = (state_11990[5]);var inst_11923__$1 = calc_state.call(null);var inst_11924 = cljs.core.seq_QMARK_.call(null,inst_11923__$1);var state_11990__$1 = (function (){var statearr_11992 = state_11990;(statearr_11992[5] = inst_11923__$1);
return statearr_11992;
})();if(inst_11924)
{var statearr_11993_12038 = state_11990__$1;(statearr_11993_12038[1] = 2);
} else
{var statearr_11994_12039 = state_11990__$1;(statearr_11994_12039[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 2))
{var inst_11923 = (state_11990[5]);var inst_11926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11923);var state_11990__$1 = state_11990;var statearr_11995_12040 = state_11990__$1;(statearr_11995_12040[2] = inst_11926);
(statearr_11995_12040[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 3))
{var inst_11923 = (state_11990[5]);var state_11990__$1 = state_11990;var statearr_11996_12041 = state_11990__$1;(statearr_11996_12041[2] = inst_11923);
(statearr_11996_12041[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 4))
{var inst_11923 = (state_11990[5]);var inst_11929 = (state_11990[2]);var inst_11930 = cljs.core.get.call(null,inst_11929,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11931 = cljs.core.get.call(null,inst_11929,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11932 = cljs.core.get.call(null,inst_11929,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11933 = inst_11923;var state_11990__$1 = (function (){var statearr_11997 = state_11990;(statearr_11997[6] = inst_11930);
(statearr_11997[7] = inst_11931);
(statearr_11997[8] = inst_11932);
(statearr_11997[9] = inst_11933);
return statearr_11997;
})();var statearr_11998_12042 = state_11990__$1;(statearr_11998_12042[2] = null);
(statearr_11998_12042[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 5))
{var inst_11933 = (state_11990[9]);var inst_11936 = cljs.core.seq_QMARK_.call(null,inst_11933);var state_11990__$1 = state_11990;if(inst_11936)
{var statearr_11999_12043 = state_11990__$1;(statearr_11999_12043[1] = 7);
} else
{var statearr_12000_12044 = state_11990__$1;(statearr_12000_12044[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 6))
{var inst_11988 = (state_11990[2]);var state_11990__$1 = state_11990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11990__$1,inst_11988);
} else
{if((state_val_11991 === 7))
{var inst_11933 = (state_11990[9]);var inst_11938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11933);var state_11990__$1 = state_11990;var statearr_12001_12045 = state_11990__$1;(statearr_12001_12045[2] = inst_11938);
(statearr_12001_12045[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 8))
{var inst_11933 = (state_11990[9]);var state_11990__$1 = state_11990;var statearr_12002_12046 = state_11990__$1;(statearr_12002_12046[2] = inst_11933);
(statearr_12002_12046[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 9))
{var inst_11941 = (state_11990[10]);var inst_11941__$1 = (state_11990[2]);var inst_11942 = cljs.core.get.call(null,inst_11941__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11943 = cljs.core.get.call(null,inst_11941__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11944 = cljs.core.get.call(null,inst_11941__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11990__$1 = (function (){var statearr_12003 = state_11990;(statearr_12003[11] = inst_11944);
(statearr_12003[10] = inst_11941__$1);
(statearr_12003[12] = inst_11943);
return statearr_12003;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11990__$1,10,inst_11942);
} else
{if((state_val_11991 === 10))
{var inst_11948 = (state_11990[13]);var inst_11950 = (state_11990[14]);var inst_11947 = (state_11990[2]);var inst_11948__$1 = cljs.core.nth.call(null,inst_11947,0,null);var inst_11949 = cljs.core.nth.call(null,inst_11947,1,null);var inst_11950__$1 = (inst_11948__$1 == null);var state_11990__$1 = (function (){var statearr_12004 = state_11990;(statearr_12004[13] = inst_11948__$1);
(statearr_12004[15] = inst_11949);
(statearr_12004[14] = inst_11950__$1);
return statearr_12004;
})();if(cljs.core.truth_(inst_11950__$1))
{var statearr_12005_12047 = state_11990__$1;(statearr_12005_12047[1] = 11);
} else
{var statearr_12006_12048 = state_11990__$1;(statearr_12006_12048[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 11))
{var inst_11950 = (state_11990[14]);var state_11990__$1 = state_11990;var statearr_12007_12049 = state_11990__$1;(statearr_12007_12049[2] = inst_11950);
(statearr_12007_12049[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 12))
{var inst_11949 = (state_11990[15]);var inst_11953 = cljs.core._EQ_.call(null,inst_11949,change);var state_11990__$1 = state_11990;var statearr_12008_12050 = state_11990__$1;(statearr_12008_12050[2] = inst_11953);
(statearr_12008_12050[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 13))
{var inst_11955 = (state_11990[2]);var state_11990__$1 = state_11990;if(cljs.core.truth_(inst_11955))
{var statearr_12009_12051 = state_11990__$1;(statearr_12009_12051[1] = 14);
} else
{var statearr_12010_12052 = state_11990__$1;(statearr_12010_12052[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 14))
{var inst_11948 = (state_11990[13]);var inst_11957 = (inst_11948 == null);var state_11990__$1 = state_11990;if(cljs.core.truth_(inst_11957))
{var statearr_12011_12053 = state_11990__$1;(statearr_12011_12053[1] = 17);
} else
{var statearr_12012_12054 = state_11990__$1;(statearr_12012_12054[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 15))
{var inst_11944 = (state_11990[11]);var inst_11949 = (state_11990[15]);var inst_11966 = (state_11990[16]);var inst_11966__$1 = inst_11944.call(null,inst_11949);var state_11990__$1 = (function (){var statearr_12013 = state_11990;(statearr_12013[16] = inst_11966__$1);
return statearr_12013;
})();if(cljs.core.truth_(inst_11966__$1))
{var statearr_12014_12055 = state_11990__$1;(statearr_12014_12055[1] = 20);
} else
{var statearr_12015_12056 = state_11990__$1;(statearr_12015_12056[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 16))
{var inst_11986 = (state_11990[2]);var state_11990__$1 = state_11990;var statearr_12016_12057 = state_11990__$1;(statearr_12016_12057[2] = inst_11986);
(statearr_12016_12057[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 17))
{var inst_11949 = (state_11990[15]);var inst_11959 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11949);var state_11990__$1 = state_11990;var statearr_12017_12058 = state_11990__$1;(statearr_12017_12058[2] = inst_11959);
(statearr_12017_12058[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 18))
{var state_11990__$1 = state_11990;var statearr_12018_12059 = state_11990__$1;(statearr_12018_12059[2] = null);
(statearr_12018_12059[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 19))
{var inst_11962 = (state_11990[2]);var inst_11963 = calc_state.call(null);var inst_11933 = inst_11963;var state_11990__$1 = (function (){var statearr_12019 = state_11990;(statearr_12019[17] = inst_11962);
(statearr_12019[9] = inst_11933);
return statearr_12019;
})();var statearr_12020_12060 = state_11990__$1;(statearr_12020_12060[2] = null);
(statearr_12020_12060[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 20))
{var inst_11966 = (state_11990[16]);var state_11990__$1 = state_11990;var statearr_12021_12061 = state_11990__$1;(statearr_12021_12061[2] = inst_11966);
(statearr_12021_12061[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 21))
{var inst_11944 = (state_11990[11]);var inst_11969 = (state_11990[18]);var inst_11969__$1 = cljs.core.empty_QMARK_.call(null,inst_11944);var state_11990__$1 = (function (){var statearr_12022 = state_11990;(statearr_12022[18] = inst_11969__$1);
return statearr_12022;
})();if(inst_11969__$1)
{var statearr_12023_12062 = state_11990__$1;(statearr_12023_12062[1] = 23);
} else
{var statearr_12024_12063 = state_11990__$1;(statearr_12024_12063[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 22))
{var inst_11977 = (state_11990[2]);var state_11990__$1 = state_11990;if(cljs.core.truth_(inst_11977))
{var statearr_12025_12064 = state_11990__$1;(statearr_12025_12064[1] = 26);
} else
{var statearr_12026_12065 = state_11990__$1;(statearr_12026_12065[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 23))
{var inst_11949 = (state_11990[15]);var inst_11943 = (state_11990[12]);var inst_11971 = inst_11943.call(null,inst_11949);var inst_11972 = cljs.core.not.call(null,inst_11971);var state_11990__$1 = state_11990;var statearr_12027_12066 = state_11990__$1;(statearr_12027_12066[2] = inst_11972);
(statearr_12027_12066[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 24))
{var inst_11969 = (state_11990[18]);var state_11990__$1 = state_11990;var statearr_12028_12067 = state_11990__$1;(statearr_12028_12067[2] = inst_11969);
(statearr_12028_12067[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 25))
{var inst_11975 = (state_11990[2]);var state_11990__$1 = state_11990;var statearr_12029_12068 = state_11990__$1;(statearr_12029_12068[2] = inst_11975);
(statearr_12029_12068[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 26))
{var inst_11948 = (state_11990[13]);var state_11990__$1 = state_11990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11990__$1,29,out,inst_11948);
} else
{if((state_val_11991 === 27))
{var state_11990__$1 = state_11990;var statearr_12030_12069 = state_11990__$1;(statearr_12030_12069[2] = null);
(statearr_12030_12069[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 28))
{var inst_11941 = (state_11990[10]);var inst_11983 = (state_11990[2]);var inst_11933 = inst_11941;var state_11990__$1 = (function (){var statearr_12031 = state_11990;(statearr_12031[19] = inst_11983);
(statearr_12031[9] = inst_11933);
return statearr_12031;
})();var statearr_12032_12070 = state_11990__$1;(statearr_12032_12070[2] = null);
(statearr_12032_12070[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11991 === 29))
{var inst_11980 = (state_11990[2]);var state_11990__$1 = state_11990;var statearr_12033_12071 = state_11990__$1;(statearr_12033_12071[2] = inst_11980);
(statearr_12033_12071[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_12035 = (new Array(20));(statearr_12035[0] = state_machine__8783__auto__);
(statearr_12035[1] = 1);
return statearr_12035;
});
var state_machine__8783__auto____1 = (function (state_11990){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_11990);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_11990){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_11990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_12036 = f__8833__auto__.call(null);(statearr_12036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto___12037);
return statearr_12036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5614__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5614__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5614__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3941__auto__ = p;if(and__3941__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5614__auto__ = (((p == null))?null:p);return (function (){var or__3943__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5614__auto__)]);if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3943__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3943__auto__,mults){
return (function (p1__12072_SHARP_){if(cljs.core.truth_(p1__12072_SHARP_.call(null,topic)))
{return p1__12072_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12072_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3943__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12196 !== 'undefined')
{} else
{goog.provide('cljs.core.async.t12196');

/**
* @constructor
*/
cljs.core.async.t12196 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12197){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12197 = meta12197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12196.cljs$lang$type = true;
cljs.core.async.t12196.cljs$lang$ctorStr = "cljs.core.async/t12196";
cljs.core.async.t12196.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5555__auto__,writer__5556__auto__,opt__5557__auto__){return cljs.core._write.call(null,writer__5556__auto__,"cljs.core.async/t12196");
});})(mults,ensure_mult))
;
cljs.core.async.t12196.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12196.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12196.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12196.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12198){var self__ = this;
return self__.meta12197;
});})(mults,ensure_mult))
;
cljs.core.async.t12196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12198,meta12197__$1){var self__ = this;
return (new cljs.core.async.t12196(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12197__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12196 = ((function (mults,ensure_mult){
return (function __GT_t12196(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12197){return (new cljs.core.async.t12196(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12197));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12196(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8832__auto___12319 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_12271){var state_val_12272 = (state_12271[1]);if((state_val_12272 === 1))
{var state_12271__$1 = state_12271;var statearr_12273_12320 = state_12271__$1;(statearr_12273_12320[2] = null);
(statearr_12273_12320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 2))
{var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12271__$1,4,ch);
} else
{if((state_val_12272 === 3))
{var inst_12269 = (state_12271[2]);var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12271__$1,inst_12269);
} else
{if((state_val_12272 === 4))
{var inst_12201 = (state_12271[5]);var inst_12201__$1 = (state_12271[2]);var inst_12202 = (inst_12201__$1 == null);var state_12271__$1 = (function (){var statearr_12274 = state_12271;(statearr_12274[5] = inst_12201__$1);
return statearr_12274;
})();if(cljs.core.truth_(inst_12202))
{var statearr_12275_12321 = state_12271__$1;(statearr_12275_12321[1] = 5);
} else
{var statearr_12276_12322 = state_12271__$1;(statearr_12276_12322[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 5))
{var inst_12208 = cljs.core.deref.call(null,mults);var inst_12209 = cljs.core.vals.call(null,inst_12208);var inst_12210 = cljs.core.seq.call(null,inst_12209);var inst_12211 = inst_12210;var inst_12212 = null;var inst_12213 = 0;var inst_12214 = 0;var state_12271__$1 = (function (){var statearr_12277 = state_12271;(statearr_12277[6] = inst_12214);
(statearr_12277[7] = inst_12213);
(statearr_12277[8] = inst_12212);
(statearr_12277[9] = inst_12211);
return statearr_12277;
})();var statearr_12278_12323 = state_12271__$1;(statearr_12278_12323[2] = null);
(statearr_12278_12323[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 6))
{var inst_12249 = (state_12271[10]);var inst_12251 = (state_12271[11]);var inst_12201 = (state_12271[5]);var inst_12249__$1 = topic_fn.call(null,inst_12201);var inst_12250 = cljs.core.deref.call(null,mults);var inst_12251__$1 = cljs.core.get.call(null,inst_12250,inst_12249__$1);var state_12271__$1 = (function (){var statearr_12279 = state_12271;(statearr_12279[10] = inst_12249__$1);
(statearr_12279[11] = inst_12251__$1);
return statearr_12279;
})();if(cljs.core.truth_(inst_12251__$1))
{var statearr_12280_12324 = state_12271__$1;(statearr_12280_12324[1] = 19);
} else
{var statearr_12281_12325 = state_12271__$1;(statearr_12281_12325[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 7))
{var inst_12267 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12282_12326 = state_12271__$1;(statearr_12282_12326[2] = inst_12267);
(statearr_12282_12326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 8))
{var inst_12214 = (state_12271[6]);var inst_12213 = (state_12271[7]);var inst_12216 = (inst_12214 < inst_12213);var inst_12217 = inst_12216;var state_12271__$1 = state_12271;if(cljs.core.truth_(inst_12217))
{var statearr_12286_12327 = state_12271__$1;(statearr_12286_12327[1] = 10);
} else
{var statearr_12287_12328 = state_12271__$1;(statearr_12287_12328[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 9))
{var inst_12247 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12288_12329 = state_12271__$1;(statearr_12288_12329[2] = inst_12247);
(statearr_12288_12329[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 10))
{var inst_12214 = (state_12271[6]);var inst_12213 = (state_12271[7]);var inst_12212 = (state_12271[8]);var inst_12211 = (state_12271[9]);var inst_12219 = cljs.core._nth.call(null,inst_12212,inst_12214);var inst_12220 = cljs.core.async.muxch_STAR_.call(null,inst_12219);var inst_12221 = cljs.core.async.close_BANG_.call(null,inst_12220);var inst_12222 = (inst_12214 + 1);var tmp12283 = inst_12213;var tmp12284 = inst_12212;var tmp12285 = inst_12211;var inst_12211__$1 = tmp12285;var inst_12212__$1 = tmp12284;var inst_12213__$1 = tmp12283;var inst_12214__$1 = inst_12222;var state_12271__$1 = (function (){var statearr_12289 = state_12271;(statearr_12289[12] = inst_12221);
(statearr_12289[6] = inst_12214__$1);
(statearr_12289[7] = inst_12213__$1);
(statearr_12289[8] = inst_12212__$1);
(statearr_12289[9] = inst_12211__$1);
return statearr_12289;
})();var statearr_12290_12330 = state_12271__$1;(statearr_12290_12330[2] = null);
(statearr_12290_12330[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 11))
{var inst_12225 = (state_12271[13]);var inst_12211 = (state_12271[9]);var inst_12225__$1 = cljs.core.seq.call(null,inst_12211);var state_12271__$1 = (function (){var statearr_12291 = state_12271;(statearr_12291[13] = inst_12225__$1);
return statearr_12291;
})();if(inst_12225__$1)
{var statearr_12292_12331 = state_12271__$1;(statearr_12292_12331[1] = 13);
} else
{var statearr_12293_12332 = state_12271__$1;(statearr_12293_12332[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 12))
{var inst_12245 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12294_12333 = state_12271__$1;(statearr_12294_12333[2] = inst_12245);
(statearr_12294_12333[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 13))
{var inst_12225 = (state_12271[13]);var inst_12227 = cljs.core.chunked_seq_QMARK_.call(null,inst_12225);var state_12271__$1 = state_12271;if(inst_12227)
{var statearr_12295_12334 = state_12271__$1;(statearr_12295_12334[1] = 16);
} else
{var statearr_12296_12335 = state_12271__$1;(statearr_12296_12335[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 14))
{var state_12271__$1 = state_12271;var statearr_12297_12336 = state_12271__$1;(statearr_12297_12336[2] = null);
(statearr_12297_12336[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 15))
{var inst_12243 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12298_12337 = state_12271__$1;(statearr_12298_12337[2] = inst_12243);
(statearr_12298_12337[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 16))
{var inst_12225 = (state_12271[13]);var inst_12229 = cljs.core.chunk_first.call(null,inst_12225);var inst_12230 = cljs.core.chunk_rest.call(null,inst_12225);var inst_12231 = cljs.core.count.call(null,inst_12229);var inst_12211 = inst_12230;var inst_12212 = inst_12229;var inst_12213 = inst_12231;var inst_12214 = 0;var state_12271__$1 = (function (){var statearr_12299 = state_12271;(statearr_12299[6] = inst_12214);
(statearr_12299[7] = inst_12213);
(statearr_12299[8] = inst_12212);
(statearr_12299[9] = inst_12211);
return statearr_12299;
})();var statearr_12300_12338 = state_12271__$1;(statearr_12300_12338[2] = null);
(statearr_12300_12338[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 17))
{var inst_12225 = (state_12271[13]);var inst_12234 = cljs.core.first.call(null,inst_12225);var inst_12235 = cljs.core.async.muxch_STAR_.call(null,inst_12234);var inst_12236 = cljs.core.async.close_BANG_.call(null,inst_12235);var inst_12237 = cljs.core.next.call(null,inst_12225);var inst_12211 = inst_12237;var inst_12212 = null;var inst_12213 = 0;var inst_12214 = 0;var state_12271__$1 = (function (){var statearr_12301 = state_12271;(statearr_12301[14] = inst_12236);
(statearr_12301[6] = inst_12214);
(statearr_12301[7] = inst_12213);
(statearr_12301[8] = inst_12212);
(statearr_12301[9] = inst_12211);
return statearr_12301;
})();var statearr_12302_12339 = state_12271__$1;(statearr_12302_12339[2] = null);
(statearr_12302_12339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 18))
{var inst_12240 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12303_12340 = state_12271__$1;(statearr_12303_12340[2] = inst_12240);
(statearr_12303_12340[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 19))
{var state_12271__$1 = state_12271;var statearr_12304_12341 = state_12271__$1;(statearr_12304_12341[2] = null);
(statearr_12304_12341[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 20))
{var state_12271__$1 = state_12271;var statearr_12305_12342 = state_12271__$1;(statearr_12305_12342[2] = null);
(statearr_12305_12342[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 21))
{var inst_12264 = (state_12271[2]);var state_12271__$1 = (function (){var statearr_12306 = state_12271;(statearr_12306[15] = inst_12264);
return statearr_12306;
})();var statearr_12307_12343 = state_12271__$1;(statearr_12307_12343[2] = null);
(statearr_12307_12343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 22))
{var inst_12261 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12308_12344 = state_12271__$1;(statearr_12308_12344[2] = inst_12261);
(statearr_12308_12344[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 23))
{var inst_12249 = (state_12271[10]);var inst_12253 = (state_12271[2]);var inst_12254 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12249);var state_12271__$1 = (function (){var statearr_12309 = state_12271;(statearr_12309[16] = inst_12253);
return statearr_12309;
})();var statearr_12310_12345 = state_12271__$1;(statearr_12310_12345[2] = inst_12254);
(statearr_12310_12345[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12272 === 24))
{try{var inst_12251 = (state_12271[11]);var inst_12201 = (state_12271[5]);var inst_12257 = cljs.core.async.muxch_STAR_.call(null,inst_12251);var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12271__$1,25,inst_12257,inst_12201);
}catch (e12311){if((e12311 instanceof Object))
{var ex__8776__auto__ = e12311;var statearr_12312_12346 = state_12271;(statearr_12312_12346[1] = 23);
(statearr_12312_12346[2] = ex__8776__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12311;
} else
{return null;
}
}
}} else
{if((state_val_12272 === 25))
{try{var inst_12259 = (state_12271[2]);var state_12271__$1 = state_12271;var statearr_12315_12347 = state_12271__$1;(statearr_12315_12347[2] = inst_12259);
(statearr_12315_12347[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12313){if((e12313 instanceof Object))
{var ex__8776__auto__ = e12313;var statearr_12314_12348 = state_12271;(statearr_12314_12348[1] = 23);
(statearr_12314_12348[2] = ex__8776__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12313;
} else
{return null;
}
}
}} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_12317 = (new Array(17));(statearr_12317[0] = state_machine__8783__auto__);
(statearr_12317[1] = 1);
return statearr_12317;
});
var state_machine__8783__auto____1 = (function (state_12271){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_12271);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_12271){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_12271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_12318 = f__8833__auto__.call(null);(statearr_12318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto___12319);
return statearr_12318;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,java.util.Arrays.copyOf.call(null,rets,cnt));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8832__auto___12479 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_12451){var state_val_12452 = (state_12451[1]);if((state_val_12452 === 1))
{var state_12451__$1 = state_12451;var statearr_12453_12480 = state_12451__$1;(statearr_12453_12480[2] = null);
(statearr_12453_12480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 2))
{var inst_12415 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12416 = 0;var state_12451__$1 = (function (){var statearr_12454 = state_12451;(statearr_12454[5] = inst_12415);
(statearr_12454[6] = inst_12416);
return statearr_12454;
})();var statearr_12455_12481 = state_12451__$1;(statearr_12455_12481[2] = null);
(statearr_12455_12481[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 3))
{var inst_12449 = (state_12451[2]);var state_12451__$1 = state_12451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12451__$1,inst_12449);
} else
{if((state_val_12452 === 4))
{var inst_12416 = (state_12451[6]);var inst_12418 = (inst_12416 < cnt);var state_12451__$1 = state_12451;if(cljs.core.truth_(inst_12418))
{var statearr_12456_12482 = state_12451__$1;(statearr_12456_12482[1] = 6);
} else
{var statearr_12457_12483 = state_12451__$1;(statearr_12457_12483[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 5))
{var inst_12435 = (state_12451[2]);var state_12451__$1 = (function (){var statearr_12458 = state_12451;(statearr_12458[7] = inst_12435);
return statearr_12458;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12451__$1,12,dchan);
} else
{if((state_val_12452 === 6))
{var state_12451__$1 = state_12451;var statearr_12459_12484 = state_12451__$1;(statearr_12459_12484[2] = null);
(statearr_12459_12484[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 7))
{var state_12451__$1 = state_12451;var statearr_12460_12485 = state_12451__$1;(statearr_12460_12485[2] = null);
(statearr_12460_12485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 8))
{var inst_12433 = (state_12451[2]);var state_12451__$1 = state_12451;var statearr_12461_12486 = state_12451__$1;(statearr_12461_12486[2] = inst_12433);
(statearr_12461_12486[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 9))
{var inst_12416 = (state_12451[6]);var inst_12428 = (state_12451[2]);var inst_12429 = (inst_12416 + 1);var inst_12416__$1 = inst_12429;var state_12451__$1 = (function (){var statearr_12462 = state_12451;(statearr_12462[6] = inst_12416__$1);
(statearr_12462[8] = inst_12428);
return statearr_12462;
})();var statearr_12463_12487 = state_12451__$1;(statearr_12463_12487[2] = null);
(statearr_12463_12487[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 10))
{var inst_12420 = (state_12451[2]);var inst_12421 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12451__$1 = (function (){var statearr_12464 = state_12451;(statearr_12464[9] = inst_12420);
return statearr_12464;
})();var statearr_12465_12488 = state_12451__$1;(statearr_12465_12488[2] = inst_12421);
(statearr_12465_12488[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 11))
{try{var inst_12416 = (state_12451[6]);var inst_12424 = chs__$1.call(null,inst_12416);var inst_12425 = done.call(null,inst_12416);var inst_12426 = cljs.core.async.take_BANG_.call(null,inst_12424,inst_12425);var state_12451__$1 = state_12451;var statearr_12468_12489 = state_12451__$1;(statearr_12468_12489[2] = inst_12426);
(statearr_12468_12489[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
}catch (e12466){if((e12466 instanceof Object))
{var ex__8776__auto__ = e12466;var statearr_12467_12490 = state_12451;(statearr_12467_12490[1] = 10);
(statearr_12467_12490[2] = ex__8776__auto__);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12466;
} else
{return null;
}
}
}} else
{if((state_val_12452 === 12))
{var inst_12437 = (state_12451[10]);var inst_12437__$1 = (state_12451[2]);var inst_12438 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12437__$1);var state_12451__$1 = (function (){var statearr_12469 = state_12451;(statearr_12469[10] = inst_12437__$1);
return statearr_12469;
})();if(cljs.core.truth_(inst_12438))
{var statearr_12470_12491 = state_12451__$1;(statearr_12470_12491[1] = 13);
} else
{var statearr_12471_12492 = state_12451__$1;(statearr_12471_12492[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 13))
{var inst_12440 = cljs.core.async.close_BANG_.call(null,out);var state_12451__$1 = state_12451;var statearr_12472_12493 = state_12451__$1;(statearr_12472_12493[2] = inst_12440);
(statearr_12472_12493[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 14))
{var inst_12437 = (state_12451[10]);var inst_12442 = cljs.core.apply.call(null,f,inst_12437);var state_12451__$1 = state_12451;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12451__$1,16,out,inst_12442);
} else
{if((state_val_12452 === 15))
{var inst_12447 = (state_12451[2]);var state_12451__$1 = state_12451;var statearr_12473_12494 = state_12451__$1;(statearr_12473_12494[2] = inst_12447);
(statearr_12473_12494[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12452 === 16))
{var inst_12444 = (state_12451[2]);var state_12451__$1 = (function (){var statearr_12474 = state_12451;(statearr_12474[11] = inst_12444);
return statearr_12474;
})();var statearr_12475_12495 = state_12451__$1;(statearr_12475_12495[2] = null);
(statearr_12475_12495[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_12477 = (new Array(12));(statearr_12477[0] = state_machine__8783__auto__);
(statearr_12477[1] = 1);
return statearr_12477;
});
var state_machine__8783__auto____1 = (function (state_12451){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_12451);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_12451){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_12451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_12478 = f__8833__auto__.call(null);(statearr_12478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto___12479);
return statearr_12478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8832__auto___12595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8833__auto__ = (function (){var switch__8782__auto__ = (function (state_12575){var state_val_12576 = (state_12575[1]);if((state_val_12576 === 1))
{var inst_12546 = cljs.core.vec.call(null,chs);var inst_12547 = inst_12546;var state_12575__$1 = (function (){var statearr_12577 = state_12575;(statearr_12577[5] = inst_12547);
return statearr_12577;
})();var statearr_12578_12596 = state_12575__$1;(statearr_12578_12596[2] = null);
(statearr_12578_12596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12576 === 2))
{var inst_12547 = (state_12575[5]);var inst_12549 = cljs.core.count.call(null,inst_12547);var inst_12550 = (inst_12549 > 0);var state_12575__$1 = state_12575;if(cljs.core.truth_(inst_12550))
{var statearr_12579_12597 = state_12575__$1;(statearr_12579_12597[1] = 4);
} else
{var statearr_12580_12598 = state_12575__$1;(statearr_12580_12598[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12576 === 3))
{var inst_12573 = (state_12575[2]);var state_12575__$1 = state_12575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12575__$1,inst_12573);
} else
{if((state_val_12576 === 4))
{var inst_12547 = (state_12575[5]);var state_12575__$1 = state_12575;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12575__$1,7,inst_12547);
} else
{if((state_val_12576 === 5))
{var inst_12569 = cljs.core.async.close_BANG_.call(null,out);var state_12575__$1 = state_12575;var statearr_12581_12599 = state_12575__$1;(statearr_12581_12599[2] = inst_12569);
(statearr_12581_12599[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12576 === 6))
{var inst_12571 = (state_12575[2]);var state_12575__$1 = state_12575;var statearr_12582_12600 = state_12575__$1;(statearr_12582_12600[2] = inst_12571);
(statearr_12582_12600[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12576 === 7))
{var inst_12555 = (state_12575[6]);var inst_12554 = (state_12575[7]);var inst_12554__$1 = (state_12575[2]);var inst_12555__$1 = cljs.core.nth.call(null,inst_12554__$1,0,null);var inst_12556 = cljs.core.nth.call(null,inst_12554__$1,1,null);var inst_12557 = (inst_12555__$1 == null);var state_12575__$1 = (function (){var statearr_12583 = state_12575;(statearr_12583[6] = inst_12555__$1);
(statearr_12583[7] = inst_12554__$1);
(statearr_12583[8] = inst_12556);
return statearr_12583;
})();if(cljs.core.truth_(inst_12557))
{var statearr_12584_12601 = state_12575__$1;(statearr_12584_12601[1] = 8);
} else
{var statearr_12585_12602 = state_12575__$1;(statearr_12585_12602[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12576 === 8))
{var inst_12555 = (state_12575[6]);var inst_12554 = (state_12575[7]);var inst_12547 = (state_12575[5]);var inst_12556 = (state_12575[8]);var inst_12559 = (function (){var c = inst_12556;var v = inst_12555;var vec__12552 = inst_12554;var cs = inst_12547;return ((function (c,v,vec__12552,cs,inst_12555,inst_12554,inst_12547,inst_12556,state_val_12576){
return (function (p1__12496_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12496_SHARP_);
});
;})(c,v,vec__12552,cs,inst_12555,inst_12554,inst_12547,inst_12556,state_val_12576))
})();var inst_12560 = cljs.core.filterv.call(null,inst_12559,inst_12547);var inst_12547__$1 = inst_12560;var state_12575__$1 = (function (){var statearr_12586 = state_12575;(statearr_12586[5] = inst_12547__$1);
return statearr_12586;
})();var statearr_12587_12603 = state_12575__$1;(statearr_12587_12603[2] = null);
(statearr_12587_12603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12576 === 9))
{var inst_12555 = (state_12575[6]);var state_12575__$1 = state_12575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12575__$1,11,out,inst_12555);
} else
{if((state_val_12576 === 10))
{var inst_12567 = (state_12575[2]);var state_12575__$1 = state_12575;var statearr_12589_12604 = state_12575__$1;(statearr_12589_12604[2] = inst_12567);
(statearr_12589_12604[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12576 === 11))
{var inst_12547 = (state_12575[5]);var inst_12564 = (state_12575[2]);var tmp12588 = inst_12547;var inst_12547__$1 = tmp12588;var state_12575__$1 = (function (){var statearr_12590 = state_12575;(statearr_12590[5] = inst_12547__$1);
(statearr_12590[9] = inst_12564);
return statearr_12590;
})();var statearr_12591_12605 = state_12575__$1;(statearr_12591_12605[2] = null);
(statearr_12591_12605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__8782__auto__){
return (function() {
var state_machine__8783__auto__ = null;
var state_machine__8783__auto____0 = (function (){var statearr_12593 = (new Array(10));(statearr_12593[0] = state_machine__8783__auto__);
(statearr_12593[1] = 1);
return statearr_12593;
});
var state_machine__8783__auto____1 = (function (state_12575){while(true){
var result__8784__auto__ = switch__8782__auto__.call(null,state_12575);if(cljs.core.keyword_identical_QMARK_.call(null,result__8784__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8784__auto__;
}
break;
}
});
state_machine__8783__auto__ = function(state_12575){
switch(arguments.length){
case 0:
return state_machine__8783__auto____0.call(this);
case 1:
return state_machine__8783__auto____1.call(this,state_12575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8783__auto____0;
state_machine__8783__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8783__auto____1;
return state_machine__8783__auto__;
})()
;})(switch__8782__auto__))
})();var state__8834__auto__ = (function (){var statearr_12594 = f__8833__auto__.call(null);(statearr_12594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8832__auto___12595);
return statearr_12594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8834__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
