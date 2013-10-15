goog.provide('crate.util');
goog.require('cljs.core');
goog.require('clojure.string');
crate.util._STAR_base_url_STAR_ = null;
/**
* @param {...*} var_args
*/
crate.util.as_str = (function() {
var as_str = null;
var as_str__0 = (function (){return "";
});
var as_str__1 = (function (x){if((function (){var or__3943__auto__ = (x instanceof cljs.core.Symbol);if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x instanceof cljs.core.Keyword);
}
})())
{return cljs.core.name.call(null,x);
} else
{return [cljs.core.str(x)].join('');
}
});
var as_str__2 = (function() { 
var G__13178__delegate = function (x,xs){return (function (s,more){while(true){
if(cljs.core.truth_(more))
{{
var G__13179 = [cljs.core.str(s),cljs.core.str(as_str.call(null,cljs.core.first.call(null,more)))].join('');
var G__13180 = cljs.core.next.call(null,more);
s = G__13179;
more = G__13180;
continue;
}
} else
{return s;
}
break;
}
}).call(null,as_str.call(null,x),xs);
};
var G__13178 = function (x,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__13178__delegate.call(this,x,xs);};
G__13178.cljs$lang$maxFixedArity = 1;
G__13178.cljs$lang$applyTo = (function (arglist__13181){
var x = cljs.core.first(arglist__13181);
var xs = cljs.core.rest(arglist__13181);
return G__13178__delegate(x,xs);
});
G__13178.cljs$core$IFn$_invoke$arity$variadic = G__13178__delegate;
return G__13178;
})()
;
as_str = function(x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return as_str__0.call(this);
case 1:
return as_str__1.call(this,x);
default:
return as_str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_str.cljs$lang$maxFixedArity = 1;
as_str.cljs$lang$applyTo = as_str__2.cljs$lang$applyTo;
as_str.cljs$core$IFn$_invoke$arity$0 = as_str__0;
as_str.cljs$core$IFn$_invoke$arity$1 = as_str__1;
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__2.cljs$core$IFn$_invoke$arity$variadic;
return as_str;
})()
;
/**
* Change special characters into HTML character entities.
*/
crate.util.escape_html = (function escape_html(text){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,crate.util.as_str.call(null,text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
* Prepends the base-url to the supplied URI.
*/
crate.util.to_uri = (function to_uri(uri){if(cljs.core.truth_(cljs.core.re_matches.call(null,/^\w+:.*/,uri)))
{return uri;
} else
{return [cljs.core.str(crate.util._STAR_base_url_STAR_),cljs.core.str(uri)].join('');
}
});
crate.util.url_encode_component = (function url_encode_component(s){return encodeURIComponent(crate.util.as_str.call(null,s));
});
/**
* Turn a map of parameters into a urlencoded string.
*/
crate.util.url_encode = (function url_encode(params){return clojure.string.join.call(null,"&",(function (){var iter__5714__auto__ = (function iter__13190(s__13191){return (new cljs.core.LazySeq(null,(function (){var s__13191__$1 = s__13191;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13191__$1);if(temp__4092__auto__)
{var s__13191__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13191__$2))
{var c__5712__auto__ = cljs.core.chunk_first.call(null,s__13191__$2);var size__5713__auto__ = cljs.core.count.call(null,c__5712__auto__);var b__13193 = cljs.core.chunk_buffer.call(null,size__5713__auto__);if((function (){var i__13192 = 0;while(true){
if((i__13192 < size__5713__auto__))
{var vec__13196 = cljs.core._nth.call(null,c__5712__auto__,i__13192);var k = cljs.core.nth.call(null,vec__13196,0,null);var v = cljs.core.nth.call(null,vec__13196,1,null);cljs.core.chunk_append.call(null,b__13193,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''));
{
var G__13198 = (i__13192 + 1);
i__13192 = G__13198;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13193),iter__13190.call(null,cljs.core.chunk_rest.call(null,s__13191__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13193),null);
}
} else
{var vec__13197 = cljs.core.first.call(null,s__13191__$2);var k = cljs.core.nth.call(null,vec__13197,0,null);var v = cljs.core.nth.call(null,vec__13197,1,null);return cljs.core.cons.call(null,[cljs.core.str(crate.util.url_encode_component.call(null,k)),cljs.core.str("="),cljs.core.str(crate.util.url_encode_component.call(null,v))].join(''),iter__13190.call(null,cljs.core.rest.call(null,s__13191__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5714__auto__.call(null,params);
})());
});
/**
* Creates a URL string from a variable list of arguments and an optional
* parameter map as the last argument. For example:
* (url "/group/" 4 "/products" {:page 9})
* => "/group/4/products?page=9"
* @param {...*} var_args
*/
crate.util.url = (function() { 
var url__delegate = function (args){var params = cljs.core.last.call(null,args);var args__$1 = cljs.core.butlast.call(null,args);return [cljs.core.str(crate.util.to_uri.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,args__$1)),cljs.core.str(((cljs.core.map_QMARK_.call(null,params))?[cljs.core.str("?"),cljs.core.str(crate.util.url_encode.call(null,params))].join(''):params))].join('')))].join('');
};
var url = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return url__delegate.call(this,args);};
url.cljs$lang$maxFixedArity = 0;
url.cljs$lang$applyTo = (function (arglist__13199){
var args = cljs.core.seq(arglist__13199);
return url__delegate(args);
});
url.cljs$core$IFn$_invoke$arity$variadic = url__delegate;
return url;
})()
;
