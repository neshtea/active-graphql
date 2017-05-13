// Compiled by ClojureScript 1.9.521 {}
goog.provide('active_graphql.core');
goog.require('cljs.core');
goog.require('active.clojure.record');
goog.require('active.clojure.lens');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.directive = (function (name,arguments$,__meta,__extmap,__hash){
this.name = name;
this.arguments$ = arguments$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32540,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32542 = (((k32540 instanceof cljs.core.Keyword))?k32540.fqn:null);
switch (G__32542) {
case "name":
return self__.name;

break;
case "arguments":
return self__.arguments$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32540,else__28484__auto__);

}
});

active_graphql.core.directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.directive{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arguments","arguments",-1182834456),self__.arguments$],null))], null),self__.__extmap));
});

active_graphql.core.directive.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32539){
var self__ = this;
var G__32539__$1 = this;
return (new cljs.core.RecordIter((0),G__32539__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arguments","arguments",-1182834456)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.directive(self__.name,self__.arguments$,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arguments","arguments",-1182834456),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.directive(self__.name,self__.arguments$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32539){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32543 = cljs.core.keyword_identical_QMARK_;
var expr__32544 = k__28489__auto__;
if(cljs.core.truth_(pred__32543.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32544))){
return (new active_graphql.core.directive(G__32539,self__.arguments$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32543.call(null,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),expr__32544))){
return (new active_graphql.core.directive(self__.name,G__32539,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.directive(self__.name,self__.arguments$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32539),null));
}
}
});

active_graphql.core.directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arguments","arguments",-1182834456),self__.arguments$],null))], null),self__.__extmap));
});

active_graphql.core.directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32539){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.directive(self__.name,self__.arguments$,G__32539,self__.__extmap,self__.__hash));
});

active_graphql.core.directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"arguments","arguments",457697071,null)], null);
});

active_graphql.core.directive.cljs$lang$type = true;

active_graphql.core.directive.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/directive");
});

active_graphql.core.directive.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/directive");
});

active_graphql.core.__GT_directive = (function active_graphql$core$__GT_directive(name,arguments$){
return (new active_graphql.core.directive(name,arguments$,null,null,null));
});

active_graphql.core.map__GT_directive = (function active_graphql$core$map__GT_directive(G__32541){
return (new active_graphql.core.directive(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32541),new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(G__32541),null,cljs.core.dissoc.call(null,G__32541,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arguments","arguments",-1182834456)),null));
});


/**
 * Is object a `directive` record? See [[active-graphql.core/make-directive]].
 */
active_graphql.core.directive_QMARK_ = (function active_graphql$core$directive_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.directive);
});

/**
 * Construct a `directive` record.
 * 
 * `name`: access via [[active-graphql.core/directive-name]]
 * `arguments`: access via [[active-graphql.core/directive-arguments]]
 */
active_graphql.core.make_directive = (function active_graphql$core$make_directive(name,arguments$){
return (new active_graphql.core.directive(name,arguments$,null,null,null));
});



/**
 * Access `name` field from a [[directive]] record. See [[active-graphql.core/make-directive]].
 */
active_graphql.core.directive_name = (function active_graphql$core$directive_name(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.directive,rec__29340__auto__,active_graphql.core.directive_name);

return rec__29340__auto__.name;
});

/**
 * Access `arguments` field from a [[directive]] record. See [[active-graphql.core/make-directive]].
 */
active_graphql.core.directive_arguments = (function active_graphql$core$directive_arguments(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.directive,rec__29340__auto__,active_graphql.core.directive_arguments);

return rec__29340__auto__.arguments;
});
active_graphql.core.directive__GT_string = (function active_graphql$core$directive__GT_string(d){
return "";
});
active_graphql.core.directives_QMARK_ = (function active_graphql$core$directives_QMARK_(xs){
return cljs.core.every_QMARK_.call(null,active_graphql.core.directive_QMARK_,xs);
});
active_graphql.core.directives__GT_string = (function active_graphql$core$directives__GT_string(ds){
return "";
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.named_type = (function (name,null_QMARK_,__meta,__extmap,__hash){
this.name = name;
this.null_QMARK_ = null_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.named_type.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.named_type.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32548,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32550 = (((k32548 instanceof cljs.core.Keyword))?k32548.fqn:null);
switch (G__32550) {
case "name":
return self__.name;

break;
case "null?":
return self__.null_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32548,else__28484__auto__);

}
});

active_graphql.core.named_type.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.named-type{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"null?","null?",1275152357),self__.null_QMARK_],null))], null),self__.__extmap));
});

active_graphql.core.named_type.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.named_type.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32547){
var self__ = this;
var G__32547__$1 = this;
return (new cljs.core.RecordIter((0),G__32547__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"null?","null?",1275152357)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.named_type.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.named_type.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.named_type(self__.name,self__.null_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.named_type.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.named_type.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.named_type.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.named_type.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"null?","null?",1275152357),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.named_type(self__.name,self__.null_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.named_type.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32547){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32551 = cljs.core.keyword_identical_QMARK_;
var expr__32552 = k__28489__auto__;
if(cljs.core.truth_(pred__32551.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32552))){
return (new active_graphql.core.named_type(G__32547,self__.null_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32551.call(null,new cljs.core.Keyword(null,"null?","null?",1275152357),expr__32552))){
return (new active_graphql.core.named_type(self__.name,G__32547,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.named_type(self__.name,self__.null_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32547),null));
}
}
});

active_graphql.core.named_type.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"null?","null?",1275152357),self__.null_QMARK_],null))], null),self__.__extmap));
});

active_graphql.core.named_type.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32547){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.named_type(self__.name,self__.null_QMARK_,G__32547,self__.__extmap,self__.__hash));
});

active_graphql.core.named_type.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.named_type.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"null?","null?",-1379283412,null)], null);
});

active_graphql.core.named_type.cljs$lang$type = true;

active_graphql.core.named_type.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/named-type");
});

active_graphql.core.named_type.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/named-type");
});

active_graphql.core.__GT_named_type = (function active_graphql$core$__GT_named_type(name,null_QMARK_){
return (new active_graphql.core.named_type(name,null_QMARK_,null,null,null));
});

active_graphql.core.map__GT_named_type = (function active_graphql$core$map__GT_named_type(G__32549){
return (new active_graphql.core.named_type(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32549),new cljs.core.Keyword(null,"null?","null?",1275152357).cljs$core$IFn$_invoke$arity$1(G__32549),null,cljs.core.dissoc.call(null,G__32549,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"null?","null?",1275152357)),null));
});


/**
 * Is object a `named-type` record? See [[active-graphql.core/make-named-type]].
 */
active_graphql.core.named_type_QMARK_ = (function active_graphql$core$named_type_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.named_type);
});

/**
 * Construct a `named-type` record.
 * 
 * `name`: access via [[active-graphql.core/named-type-name]]
 * `null?`: access via [[active-graphql.core/named-type-null?]]
 */
active_graphql.core.make_named_type = (function active_graphql$core$make_named_type(name,null_QMARK_){
return (new active_graphql.core.named_type(name,null_QMARK_,null,null,null));
});



/**
 * Access `name` field from a [[named-type]] record. See [[active-graphql.core/make-named-type]].
 */
active_graphql.core.named_type_name = (function active_graphql$core$named_type_name(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.named_type,rec__29340__auto__,active_graphql.core.named_type_name);

return rec__29340__auto__.name;
});

/**
 * Access `null?` field from a [[named-type]] record. See [[active-graphql.core/make-named-type]].
 */
active_graphql.core.named_type_null_QMARK_ = (function active_graphql$core$named_type_null_QMARK_(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.named_type,rec__29340__auto__,active_graphql.core.named_type_null_QMARK_);

return rec__29340__auto__.null_QMARK_;
});
active_graphql.core.named_type__GT_string = (function active_graphql$core$named_type__GT_string(nt){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.named_type_name.call(null,nt)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active_graphql.core.named_type_null_QMARK_.call(null,nt))?null:"!"))].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.list_type = (function (type,null_QMARK_,__meta,__extmap,__hash){
this.type = type;
this.null_QMARK_ = null_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.list_type.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.list_type.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32556,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32558 = (((k32556 instanceof cljs.core.Keyword))?k32556.fqn:null);
switch (G__32558) {
case "type":
return self__.type;

break;
case "null?":
return self__.null_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32556,else__28484__auto__);

}
});

active_graphql.core.list_type.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.list-type{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"null?","null?",1275152357),self__.null_QMARK_],null))], null),self__.__extmap));
});

active_graphql.core.list_type.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.list_type.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32555){
var self__ = this;
var G__32555__$1 = this;
return (new cljs.core.RecordIter((0),G__32555__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"null?","null?",1275152357)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.list_type.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.list_type.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.list_type(self__.type,self__.null_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.list_type.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.list_type.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.list_type.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.list_type.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"null?","null?",1275152357),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.list_type(self__.type,self__.null_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.list_type.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32555){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32559 = cljs.core.keyword_identical_QMARK_;
var expr__32560 = k__28489__auto__;
if(cljs.core.truth_(pred__32559.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__32560))){
return (new active_graphql.core.list_type(G__32555,self__.null_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32559.call(null,new cljs.core.Keyword(null,"null?","null?",1275152357),expr__32560))){
return (new active_graphql.core.list_type(self__.type,G__32555,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.list_type(self__.type,self__.null_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32555),null));
}
}
});

active_graphql.core.list_type.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"null?","null?",1275152357),self__.null_QMARK_],null))], null),self__.__extmap));
});

active_graphql.core.list_type.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32555){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.list_type(self__.type,self__.null_QMARK_,G__32555,self__.__extmap,self__.__hash));
});

active_graphql.core.list_type.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.list_type.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"null?","null?",-1379283412,null)], null);
});

active_graphql.core.list_type.cljs$lang$type = true;

active_graphql.core.list_type.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/list-type");
});

active_graphql.core.list_type.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/list-type");
});

active_graphql.core.__GT_list_type = (function active_graphql$core$__GT_list_type(type,null_QMARK_){
return (new active_graphql.core.list_type(type,null_QMARK_,null,null,null));
});

active_graphql.core.map__GT_list_type = (function active_graphql$core$map__GT_list_type(G__32557){
return (new active_graphql.core.list_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__32557),new cljs.core.Keyword(null,"null?","null?",1275152357).cljs$core$IFn$_invoke$arity$1(G__32557),null,cljs.core.dissoc.call(null,G__32557,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"null?","null?",1275152357)),null));
});


/**
 * Is object a `list-type` record? See [[active-graphql.core/make-list-type]].
 */
active_graphql.core.list_type_QMARK_ = (function active_graphql$core$list_type_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.list_type);
});

/**
 * Construct a `list-type` record.
 * 
 * `type`: access via [[active-graphql.core/list-type-type]]
 * `null?`: access via [[active-graphql.core/list-type-null?]]
 */
active_graphql.core.make_list_type = (function active_graphql$core$make_list_type(type,null_QMARK_){
return (new active_graphql.core.list_type(type,null_QMARK_,null,null,null));
});



/**
 * Access `type` field from a [[list-type]] record. See [[active-graphql.core/make-list-type]].
 */
active_graphql.core.list_type_type = (function active_graphql$core$list_type_type(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.list_type,rec__29340__auto__,active_graphql.core.list_type_type);

return rec__29340__auto__.type;
});

/**
 * Access `null?` field from a [[list-type]] record. See [[active-graphql.core/make-list-type]].
 */
active_graphql.core.list_type_null_QMARK_ = (function active_graphql$core$list_type_null_QMARK_(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.list_type,rec__29340__auto__,active_graphql.core.list_type_null_QMARK_);

return rec__29340__auto__.null_QMARK_;
});
active_graphql.core.list_type__GT_string = (function active_graphql$core$list_type__GT_string(lt){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.type__GT_string.call(null,active_graphql.core.list_type_type.call(null,lt))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(active_graphql.core.list_type_null_QMARK_.call(null,lt))?null:"!"))].join('');
});
active_graphql.core.non_null_type_QMARK_ = (function active_graphql$core$non_null_type_QMARK_(obj){
if(cljs.core.truth_(active_graphql.core.named_type_QMARK_.call(null,obj))){
return cljs.core.not.call(null,active_graphql.core.named_type_null_QMARK_.call(null,obj));
} else {
if(cljs.core.truth_(active_graphql.core.list_type_QMARK_.call(null,obj))){
return cljs.core.not.call(null,active_graphql.core.list_type_null_QMARK_.call(null,obj));
} else {
return false;

}
}
});
active_graphql.core.type_QMARK_ = (function active_graphql$core$type_QMARK_(obj){
var or__27854__auto__ = active_graphql.core.named_type_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto__)){
return or__27854__auto__;
} else {
var or__27854__auto____$1 = active_graphql.core.list_type_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto____$1)){
return or__27854__auto____$1;
} else {
return active_graphql.core.non_null_type_QMARK_.call(null,obj);
}
}
});
active_graphql.core.type__GT_string = (function active_graphql$core$type__GT_string(t){
if(cljs.core.truth_(active_graphql.core.named_type_QMARK_.call(null,t))){
return active_graphql.core.named_type__GT_string.call(null,t);
} else {
if(cljs.core.truth_(active_graphql.core.list_type_QMARK_.call(null,t))){
return active_graphql.core.list_type__GT_string.call(null,t);
} else {
return null;
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.variable = (function (name,__meta,__extmap,__hash){
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32564,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32566 = (((k32564 instanceof cljs.core.Keyword))?k32564.fqn:null);
switch (G__32566) {
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32564,else__28484__auto__);

}
});

active_graphql.core.variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.variable{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

active_graphql.core.variable.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32563){
var self__ = this;
var G__32563__$1 = this;
return (new cljs.core.RecordIter((0),G__32563__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.variable(self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.variable(self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32563){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32567 = cljs.core.keyword_identical_QMARK_;
var expr__32568 = k__28489__auto__;
if(cljs.core.truth_(pred__32567.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32568))){
return (new active_graphql.core.variable(G__32563,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.variable(self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32563),null));
}
});

active_graphql.core.variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

active_graphql.core.variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32563){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.variable(self__.name,G__32563,self__.__extmap,self__.__hash));
});

active_graphql.core.variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

active_graphql.core.variable.cljs$lang$type = true;

active_graphql.core.variable.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/variable");
});

active_graphql.core.variable.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/variable");
});

active_graphql.core.__GT_variable = (function active_graphql$core$__GT_variable(name){
return (new active_graphql.core.variable(name,null,null,null));
});

active_graphql.core.map__GT_variable = (function active_graphql$core$map__GT_variable(G__32565){
return (new active_graphql.core.variable(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32565),null,cljs.core.dissoc.call(null,G__32565,new cljs.core.Keyword(null,"name","name",1843675177)),null));
});


/**
 * Is object a `variable` record? See [[active-graphql.core/make-variable]].
 */
active_graphql.core.variable_QMARK_ = (function active_graphql$core$variable_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.variable);
});

/**
 * Construct a `variable` record.
 * 
 * `name`: access via [[active-graphql.core/variable-name]]
 */
active_graphql.core.make_variable = (function active_graphql$core$make_variable(name){
return (new active_graphql.core.variable(name,null,null,null));
});


/**
 * Access `name` field from a [[variable]] record. See [[active-graphql.core/make-variable]].
 */
active_graphql.core.variable_name = (function active_graphql$core$variable_name(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.variable,rec__29340__auto__,active_graphql.core.variable_name);

return rec__29340__auto__.name;
});
active_graphql.core.variable__GT_string = (function active_graphql$core$variable__GT_string(v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.variable_name.call(null,v))].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.default_value = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.default_value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.default_value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32572,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32574 = (((k32572 instanceof cljs.core.Keyword))?k32572.fqn:null);
switch (G__32574) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32572,else__28484__auto__);

}
});

active_graphql.core.default_value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.default-value{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.default_value.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.default_value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32571){
var self__ = this;
var G__32571__$1 = this;
return (new cljs.core.RecordIter((0),G__32571__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.default_value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.default_value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.default_value(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.default_value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.default_value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.default_value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.default_value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.default_value(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.default_value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32571){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32575 = cljs.core.keyword_identical_QMARK_;
var expr__32576 = k__28489__auto__;
if(cljs.core.truth_(pred__32575.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32576))){
return (new active_graphql.core.default_value(G__32571,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.default_value(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32571),null));
}
});

active_graphql.core.default_value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.default_value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32571){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.default_value(self__.value,G__32571,self__.__extmap,self__.__hash));
});

active_graphql.core.default_value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.default_value.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

active_graphql.core.default_value.cljs$lang$type = true;

active_graphql.core.default_value.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/default-value");
});

active_graphql.core.default_value.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/default-value");
});

active_graphql.core.__GT_default_value = (function active_graphql$core$__GT_default_value(value){
return (new active_graphql.core.default_value(value,null,null,null));
});

active_graphql.core.map__GT_default_value = (function active_graphql$core$map__GT_default_value(G__32573){
return (new active_graphql.core.default_value(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32573),null,cljs.core.dissoc.call(null,G__32573,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
 * Is object a `default-value` record? See [[active-graphql.core/make-default-value]].
 */
active_graphql.core.default_value_QMARK_ = (function active_graphql$core$default_value_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.default_value);
});

/**
 * Construct a `default-value` record.
 * 
 * `value`: access via [[active-graphql.core/default-value-value]]
 */
active_graphql.core.make_default_value = (function active_graphql$core$make_default_value(value){
return (new active_graphql.core.default_value(value,null,null,null));
});


/**
 * Access `value` field from a [[default-value]] record. See [[active-graphql.core/make-default-value]].
 */
active_graphql.core.default_value_value = (function active_graphql$core$default_value_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.default_value,rec__29340__auto__,active_graphql.core.default_value_value);

return rec__29340__auto__.value;
});
active_graphql.core.default_value__GT_string = (function active_graphql$core$default_value__GT_string(dv){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.default_value_value.call(null,dv))].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.variable_definition = (function (variable,type,_QMARK_default_value,__meta,__extmap,__hash){
this.variable = variable;
this.type = type;
this._QMARK_default_value = _QMARK_default_value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.variable_definition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.variable_definition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32580,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32582 = (((k32580 instanceof cljs.core.Keyword))?k32580.fqn:null);
switch (G__32582) {
case "variable":
return self__.variable;

break;
case "type":
return self__.type;

break;
case "?default-value":
return self__._QMARK_default_value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32580,else__28484__auto__);

}
});

active_graphql.core.variable_definition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.variable-definition{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?default-value","?default-value",229165835),self__._QMARK_default_value],null))], null),self__.__extmap));
});

active_graphql.core.variable_definition.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.variable_definition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32579){
var self__ = this;
var G__32579__$1 = this;
return (new cljs.core.RecordIter((0),G__32579__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"?default-value","?default-value",229165835)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.variable_definition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.variable_definition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.variable_definition(self__.variable,self__.type,self__._QMARK_default_value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.variable_definition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.variable_definition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.variable_definition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.variable_definition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"?default-value","?default-value",229165835),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.variable_definition(self__.variable,self__.type,self__._QMARK_default_value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.variable_definition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32579){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32583 = cljs.core.keyword_identical_QMARK_;
var expr__32584 = k__28489__auto__;
if(cljs.core.truth_(pred__32583.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__32584))){
return (new active_graphql.core.variable_definition(G__32579,self__.type,self__._QMARK_default_value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32583.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__32584))){
return (new active_graphql.core.variable_definition(self__.variable,G__32579,self__._QMARK_default_value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32583.call(null,new cljs.core.Keyword(null,"?default-value","?default-value",229165835),expr__32584))){
return (new active_graphql.core.variable_definition(self__.variable,self__.type,G__32579,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.variable_definition(self__.variable,self__.type,self__._QMARK_default_value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32579),null));
}
}
}
});

active_graphql.core.variable_definition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?default-value","?default-value",229165835),self__._QMARK_default_value],null))], null),self__.__extmap));
});

active_graphql.core.variable_definition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32579){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.variable_definition(self__.variable,self__.type,self__._QMARK_default_value,G__32579,self__.__extmap,self__.__hash));
});

active_graphql.core.variable_definition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.variable_definition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"?default-value","?default-value",1869697362,null)], null);
});

active_graphql.core.variable_definition.cljs$lang$type = true;

active_graphql.core.variable_definition.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/variable-definition");
});

active_graphql.core.variable_definition.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/variable-definition");
});

active_graphql.core.__GT_variable_definition = (function active_graphql$core$__GT_variable_definition(variable,type,_QMARK_default_value){
return (new active_graphql.core.variable_definition(variable,type,_QMARK_default_value,null,null,null));
});

active_graphql.core.map__GT_variable_definition = (function active_graphql$core$map__GT_variable_definition(G__32581){
return (new active_graphql.core.variable_definition(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__32581),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__32581),new cljs.core.Keyword(null,"?default-value","?default-value",229165835).cljs$core$IFn$_invoke$arity$1(G__32581),null,cljs.core.dissoc.call(null,G__32581,new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"?default-value","?default-value",229165835)),null));
});


/**
 * Is object a `variable-definition` record? See [[active-graphql.core/make-variable-definition]].
 */
active_graphql.core.variable_definition_QMARK_ = (function active_graphql$core$variable_definition_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.variable_definition);
});

/**
 * Construct a `variable-definition` record.
 * 
 * `variable`: access via [[active-graphql.core/variable-definition-variable]]
 * `type`: access via [[active-graphql.core/variable-definition-type]]
 * `?default-value`: access via [[active-graphql.core/variable-definition-?default-value]]
 */
active_graphql.core.make_variable_definition = (function active_graphql$core$make_variable_definition(variable,type,_QMARK_default_value){
return (new active_graphql.core.variable_definition(variable,type,_QMARK_default_value,null,null,null));
});




/**
 * Access `variable` field from a [[variable-definition]] record. See [[active-graphql.core/make-variable-definition]].
 */
active_graphql.core.variable_definition_variable = (function active_graphql$core$variable_definition_variable(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.variable_definition,rec__29340__auto__,active_graphql.core.variable_definition_variable);

return rec__29340__auto__.variable;
});

/**
 * Access `type` field from a [[variable-definition]] record. See [[active-graphql.core/make-variable-definition]].
 */
active_graphql.core.variable_definition_type = (function active_graphql$core$variable_definition_type(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.variable_definition,rec__29340__auto__,active_graphql.core.variable_definition_type);

return rec__29340__auto__.type;
});

/**
 * Access `?default-value` field from a [[variable-definition]] record. See [[active-graphql.core/make-variable-definition]].
 */
active_graphql.core.variable_definition__QMARK_default_value = (function active_graphql$core$variable_definition__QMARK_default_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.variable_definition,rec__29340__auto__,active_graphql.core.variable_definition__QMARK_default_value);

return rec__29340__auto__._QMARK_default_value;
});
active_graphql.core.variable_definition__GT_string = (function active_graphql$core$variable_definition__GT_string(vd){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.variable__GT_string.call(null,active_graphql.core.variable_definition_variable.call(null,vd))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.type__GT_string.call(null,active_graphql.core.variable_definition_type.call(null,vd))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = active_graphql.core.variable_definition__QMARK_default_value.call(null,vd);
if(cljs.core.truth_(temp__4657__auto__)){
var dv = temp__4657__auto__;
return active_graphql.core.default_value__GT_string.call(null,dv);
} else {
return null;
}
})())].join('');
});
active_graphql.core.variable_definitions_QMARK_ = (function active_graphql$core$variable_definitions_QMARK_(obj){
return (cljs.core.sequential_QMARK_.call(null,obj)) && (cljs.core.every_QMARK_.call(null,active_graphql.core.variable_definition_QMARK_,obj));
});
active_graphql.core.variable_definitions__GT_string = (function active_graphql$core$variable_definitions__GT_string(vds){
return cljs.core.apply.call(null,cljs.core.str,"(",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,active_graphql.core.variable_definition__GT_string,vds)),")");
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.int_value = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.int_value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.int_value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32588,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32590 = (((k32588 instanceof cljs.core.Keyword))?k32588.fqn:null);
switch (G__32590) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32588,else__28484__auto__);

}
});

active_graphql.core.int_value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.int-value{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.int_value.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.int_value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32587){
var self__ = this;
var G__32587__$1 = this;
return (new cljs.core.RecordIter((0),G__32587__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.int_value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.int_value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.int_value(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.int_value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.int_value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.int_value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.int_value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.int_value(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.int_value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32587){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32591 = cljs.core.keyword_identical_QMARK_;
var expr__32592 = k__28489__auto__;
if(cljs.core.truth_(pred__32591.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32592))){
return (new active_graphql.core.int_value(G__32587,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.int_value(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32587),null));
}
});

active_graphql.core.int_value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.int_value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32587){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.int_value(self__.value,G__32587,self__.__extmap,self__.__hash));
});

active_graphql.core.int_value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.int_value.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

active_graphql.core.int_value.cljs$lang$type = true;

active_graphql.core.int_value.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/int-value");
});

active_graphql.core.int_value.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/int-value");
});

active_graphql.core.__GT_int_value = (function active_graphql$core$__GT_int_value(value){
return (new active_graphql.core.int_value(value,null,null,null));
});

active_graphql.core.map__GT_int_value = (function active_graphql$core$map__GT_int_value(G__32589){
return (new active_graphql.core.int_value(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32589),null,cljs.core.dissoc.call(null,G__32589,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
 * Is object a `int-value` record? See [[active-graphql.core/make-int-value]].
 */
active_graphql.core.int_value_QMARK_ = (function active_graphql$core$int_value_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.int_value);
});

/**
 * Construct a `int-value` record.
 * 
 * `value`: access via [[active-graphql.core/int-value-value]]
 */
active_graphql.core.make_int_value = (function active_graphql$core$make_int_value(value){
return (new active_graphql.core.int_value(value,null,null,null));
});


/**
 * Access `value` field from a [[int-value]] record. See [[active-graphql.core/make-int-value]].
 */
active_graphql.core.int_value_value = (function active_graphql$core$int_value_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.int_value,rec__29340__auto__,active_graphql.core.int_value_value);

return rec__29340__auto__.value;
});
active_graphql.core.int_value__GT_string = (function active_graphql$core$int_value__GT_string(iv){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.int_value_value.call(null,iv))].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.float_value = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.float_value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.float_value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32596,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32598 = (((k32596 instanceof cljs.core.Keyword))?k32596.fqn:null);
switch (G__32598) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32596,else__28484__auto__);

}
});

active_graphql.core.float_value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.float-value{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.float_value.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.float_value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32595){
var self__ = this;
var G__32595__$1 = this;
return (new cljs.core.RecordIter((0),G__32595__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.float_value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.float_value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.float_value(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.float_value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.float_value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.float_value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.float_value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.float_value(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.float_value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32595){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32599 = cljs.core.keyword_identical_QMARK_;
var expr__32600 = k__28489__auto__;
if(cljs.core.truth_(pred__32599.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32600))){
return (new active_graphql.core.float_value(G__32595,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.float_value(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32595),null));
}
});

active_graphql.core.float_value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.float_value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32595){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.float_value(self__.value,G__32595,self__.__extmap,self__.__hash));
});

active_graphql.core.float_value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.float_value.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

active_graphql.core.float_value.cljs$lang$type = true;

active_graphql.core.float_value.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/float-value");
});

active_graphql.core.float_value.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/float-value");
});

active_graphql.core.__GT_float_value = (function active_graphql$core$__GT_float_value(value){
return (new active_graphql.core.float_value(value,null,null,null));
});

active_graphql.core.map__GT_float_value = (function active_graphql$core$map__GT_float_value(G__32597){
return (new active_graphql.core.float_value(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32597),null,cljs.core.dissoc.call(null,G__32597,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
 * Is object a `float-value` record? See [[active-graphql.core/make-float-value]].
 */
active_graphql.core.float_value_QMARK_ = (function active_graphql$core$float_value_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.float_value);
});

/**
 * Construct a `float-value` record.
 * 
 * `value`: access via [[active-graphql.core/float-value-value]]
 */
active_graphql.core.make_float_value = (function active_graphql$core$make_float_value(value){
return (new active_graphql.core.float_value(value,null,null,null));
});


/**
 * Access `value` field from a [[float-value]] record. See [[active-graphql.core/make-float-value]].
 */
active_graphql.core.float_value_value = (function active_graphql$core$float_value_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.float_value,rec__29340__auto__,active_graphql.core.float_value_value);

return rec__29340__auto__.value;
});
active_graphql.core.float_value__GT_string = (function active_graphql$core$float_value__GT_string(fv){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.float_value_value.call(null,fv))].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.boolean_value = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.boolean_value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.boolean_value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32604,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32606 = (((k32604 instanceof cljs.core.Keyword))?k32604.fqn:null);
switch (G__32606) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32604,else__28484__auto__);

}
});

active_graphql.core.boolean_value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.boolean-value{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.boolean_value.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.boolean_value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32603){
var self__ = this;
var G__32603__$1 = this;
return (new cljs.core.RecordIter((0),G__32603__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.boolean_value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.boolean_value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.boolean_value(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.boolean_value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.boolean_value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.boolean_value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.boolean_value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.boolean_value(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.boolean_value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32603){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32607 = cljs.core.keyword_identical_QMARK_;
var expr__32608 = k__28489__auto__;
if(cljs.core.truth_(pred__32607.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32608))){
return (new active_graphql.core.boolean_value(G__32603,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.boolean_value(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32603),null));
}
});

active_graphql.core.boolean_value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.boolean_value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32603){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.boolean_value(self__.value,G__32603,self__.__extmap,self__.__hash));
});

active_graphql.core.boolean_value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.boolean_value.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

active_graphql.core.boolean_value.cljs$lang$type = true;

active_graphql.core.boolean_value.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/boolean-value");
});

active_graphql.core.boolean_value.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/boolean-value");
});

active_graphql.core.__GT_boolean_value = (function active_graphql$core$__GT_boolean_value(value){
return (new active_graphql.core.boolean_value(value,null,null,null));
});

active_graphql.core.map__GT_boolean_value = (function active_graphql$core$map__GT_boolean_value(G__32605){
return (new active_graphql.core.boolean_value(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32605),null,cljs.core.dissoc.call(null,G__32605,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
 * Is object a `boolean-value` record? See [[active-graphql.core/make-boolean-value]].
 */
active_graphql.core.boolean_value_QMARK_ = (function active_graphql$core$boolean_value_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.boolean_value);
});

/**
 * Construct a `boolean-value` record.
 * 
 * `value`: access via [[active-graphql.core/boolean-value-value]]
 */
active_graphql.core.make_boolean_value = (function active_graphql$core$make_boolean_value(value){
return (new active_graphql.core.boolean_value(value,null,null,null));
});


/**
 * Access `value` field from a [[boolean-value]] record. See [[active-graphql.core/make-boolean-value]].
 */
active_graphql.core.boolean_value_value = (function active_graphql$core$boolean_value_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.boolean_value,rec__29340__auto__,active_graphql.core.boolean_value_value);

return rec__29340__auto__.value;
});
active_graphql.core.boolean_value__GT_string = (function active_graphql$core$boolean_value__GT_string(bv){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.boolean_value_value.call(null,bv))].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.string_value = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.string_value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.string_value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32612,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32614 = (((k32612 instanceof cljs.core.Keyword))?k32612.fqn:null);
switch (G__32614) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32612,else__28484__auto__);

}
});

active_graphql.core.string_value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.string-value{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.string_value.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.string_value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32611){
var self__ = this;
var G__32611__$1 = this;
return (new cljs.core.RecordIter((0),G__32611__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.string_value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.string_value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.string_value(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.string_value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.string_value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.string_value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.string_value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.string_value(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.string_value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32611){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32615 = cljs.core.keyword_identical_QMARK_;
var expr__32616 = k__28489__auto__;
if(cljs.core.truth_(pred__32615.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32616))){
return (new active_graphql.core.string_value(G__32611,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.string_value(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32611),null));
}
});

active_graphql.core.string_value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.string_value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32611){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.string_value(self__.value,G__32611,self__.__extmap,self__.__hash));
});

active_graphql.core.string_value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.string_value.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

active_graphql.core.string_value.cljs$lang$type = true;

active_graphql.core.string_value.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/string-value");
});

active_graphql.core.string_value.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/string-value");
});

active_graphql.core.__GT_string_value = (function active_graphql$core$__GT_string_value(value){
return (new active_graphql.core.string_value(value,null,null,null));
});

active_graphql.core.map__GT_string_value = (function active_graphql$core$map__GT_string_value(G__32613){
return (new active_graphql.core.string_value(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32613),null,cljs.core.dissoc.call(null,G__32613,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
 * Is object a `string-value` record? See [[active-graphql.core/make-string-value]].
 */
active_graphql.core.string_value_QMARK_ = (function active_graphql$core$string_value_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.string_value);
});

/**
 * Construct a `string-value` record.
 * 
 * `value`: access via [[active-graphql.core/string-value-value]]
 */
active_graphql.core.make_string_value = (function active_graphql$core$make_string_value(value){
return (new active_graphql.core.string_value(value,null,null,null));
});


/**
 * Access `value` field from a [[string-value]] record. See [[active-graphql.core/make-string-value]].
 */
active_graphql.core.string_value_value = (function active_graphql$core$string_value_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.string_value,rec__29340__auto__,active_graphql.core.string_value_value);

return rec__29340__auto__.value;
});
active_graphql.core.string_value__GT_string = (function active_graphql$core$string_value__GT_string(sv){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.string_value_value.call(null,sv)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.null_value = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.null_value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.null_value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32620,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32622 = k32620;
switch (G__32622) {
default:
return cljs.core.get.call(null,self__.__extmap,k32620,else__28484__auto__);

}
});

active_graphql.core.null_value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.null-value{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

active_graphql.core.null_value.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.null_value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32619){
var self__ = this;
var G__32619__$1 = this;
return (new cljs.core.RecordIter((0),G__32619__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.null_value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.null_value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.null_value(self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.null_value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.null_value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.null_value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.null_value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.null_value(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.null_value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32619){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32623 = cljs.core.keyword_identical_QMARK_;
var expr__32624 = k__28489__auto__;
return (new active_graphql.core.null_value(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32619),null));
});

active_graphql.core.null_value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

active_graphql.core.null_value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32619){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.null_value(G__32619,self__.__extmap,self__.__hash));
});

active_graphql.core.null_value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.null_value.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

active_graphql.core.null_value.cljs$lang$type = true;

active_graphql.core.null_value.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/null-value");
});

active_graphql.core.null_value.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/null-value");
});

active_graphql.core.__GT_null_value = (function active_graphql$core$__GT_null_value(){
return (new active_graphql.core.null_value(null,null,null));
});

active_graphql.core.map__GT_null_value = (function active_graphql$core$map__GT_null_value(G__32621){
return (new active_graphql.core.null_value(null,cljs.core.dissoc.call(null,G__32621),null));
});


/**
 * Is object a `null-value` record? See [[active-graphql.core/make-null-value]].
 */
active_graphql.core.null_value_QMARK_ = (function active_graphql$core$null_value_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.null_value);
});

/**
 * Construct a `null-value` record.
 */
active_graphql.core.make_null_value = (function active_graphql$core$make_null_value(){
return (new active_graphql.core.null_value(null,null,null));
});

active_graphql.core.null_value__GT_string = (function active_graphql$core$null_value__GT_string(nv){
return "null";
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.enum_value = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.enum_value.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.enum_value.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32628,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32630 = (((k32628 instanceof cljs.core.Keyword))?k32628.fqn:null);
switch (G__32630) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32628,else__28484__auto__);

}
});

active_graphql.core.enum_value.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.enum-value{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.enum_value.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.enum_value.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32627){
var self__ = this;
var G__32627__$1 = this;
return (new cljs.core.RecordIter((0),G__32627__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.enum_value.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.enum_value.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.enum_value(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.enum_value.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.enum_value.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.enum_value.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.enum_value.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.enum_value(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.enum_value.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32627){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32631 = cljs.core.keyword_identical_QMARK_;
var expr__32632 = k__28489__auto__;
if(cljs.core.truth_(pred__32631.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32632))){
return (new active_graphql.core.enum_value(G__32627,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.enum_value(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32627),null));
}
});

active_graphql.core.enum_value.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.enum_value.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32627){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.enum_value(self__.value,G__32627,self__.__extmap,self__.__hash));
});

active_graphql.core.enum_value.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.enum_value.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

active_graphql.core.enum_value.cljs$lang$type = true;

active_graphql.core.enum_value.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/enum-value");
});

active_graphql.core.enum_value.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/enum-value");
});

active_graphql.core.__GT_enum_value = (function active_graphql$core$__GT_enum_value(value){
return (new active_graphql.core.enum_value(value,null,null,null));
});

active_graphql.core.map__GT_enum_value = (function active_graphql$core$map__GT_enum_value(G__32629){
return (new active_graphql.core.enum_value(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32629),null,cljs.core.dissoc.call(null,G__32629,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
 * Is object a `enum-value` record? See [[active-graphql.core/make-enum-value]].
 */
active_graphql.core.enum_value_QMARK_ = (function active_graphql$core$enum_value_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.enum_value);
});

/**
 * Construct a `enum-value` record.
 * 
 * `value`: access via [[active-graphql.core/enum-value-value]]
 */
active_graphql.core.make_enum_value = (function active_graphql$core$make_enum_value(value){
return (new active_graphql.core.enum_value(value,null,null,null));
});


/**
 * Access `value` field from a [[enum-value]] record. See [[active-graphql.core/make-enum-value]].
 */
active_graphql.core.enum_value_value = (function active_graphql$core$enum_value_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.enum_value,rec__29340__auto__,active_graphql.core.enum_value_value);

return rec__29340__auto__.value;
});
active_graphql.core.enum_value__GT_string = (function active_graphql$core$enum_value__GT_string(ev){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.enum_value_value.call(null,ev))].join('');
});
active_graphql.core.list_value_QMARK_ = (function active_graphql$core$list_value_QMARK_(obj){
return ((obj == null)) || ((cljs.core.seq.call(null,obj)) && (cljs.core.every_QMARK_.call(null,active_graphql.core.value_QMARK_,obj)));
});
active_graphql.core.list_value__GT_string = (function active_graphql$core$list_value__GT_string(lv){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.map.call(null,active_graphql.core.value__GT_string,lv)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.object_field = (function (name,value,__meta,__extmap,__hash){
this.name = name;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.object_field.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.object_field.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32636,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32638 = (((k32636 instanceof cljs.core.Keyword))?k32636.fqn:null);
switch (G__32638) {
case "name":
return self__.name;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32636,else__28484__auto__);

}
});

active_graphql.core.object_field.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.object-field{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.object_field.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.object_field.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32635){
var self__ = this;
var G__32635__$1 = this;
return (new cljs.core.RecordIter((0),G__32635__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.object_field.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.object_field.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.object_field(self__.name,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.object_field.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.object_field.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.object_field.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.object_field.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.object_field(self__.name,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.object_field.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32635){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32639 = cljs.core.keyword_identical_QMARK_;
var expr__32640 = k__28489__auto__;
if(cljs.core.truth_(pred__32639.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32640))){
return (new active_graphql.core.object_field(G__32635,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32639.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32640))){
return (new active_graphql.core.object_field(self__.name,G__32635,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.object_field(self__.name,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32635),null));
}
}
});

active_graphql.core.object_field.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.object_field.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32635){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.object_field(self__.name,self__.value,G__32635,self__.__extmap,self__.__hash));
});

active_graphql.core.object_field.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.object_field.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

active_graphql.core.object_field.cljs$lang$type = true;

active_graphql.core.object_field.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/object-field");
});

active_graphql.core.object_field.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/object-field");
});

active_graphql.core.__GT_object_field = (function active_graphql$core$__GT_object_field(name,value){
return (new active_graphql.core.object_field(name,value,null,null,null));
});

active_graphql.core.map__GT_object_field = (function active_graphql$core$map__GT_object_field(G__32637){
return (new active_graphql.core.object_field(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32637),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32637),null,cljs.core.dissoc.call(null,G__32637,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
 * Is object a `object-field` record? See [[active-graphql.core/make-object-field]].
 */
active_graphql.core.object_field_QMARK_ = (function active_graphql$core$object_field_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.object_field);
});

/**
 * Construct a `object-field` record.
 * 
 * `name`: access via [[active-graphql.core/object-field-name]]
 * `value`: access via [[active-graphql.core/object-field-value]]
 */
active_graphql.core.make_object_field = (function active_graphql$core$make_object_field(name,value){
return (new active_graphql.core.object_field(name,value,null,null,null));
});



/**
 * Access `name` field from a [[object-field]] record. See [[active-graphql.core/make-object-field]].
 */
active_graphql.core.object_field_name = (function active_graphql$core$object_field_name(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.object_field,rec__29340__auto__,active_graphql.core.object_field_name);

return rec__29340__auto__.name;
});

/**
 * Access `value` field from a [[object-field]] record. See [[active-graphql.core/make-object-field]].
 */
active_graphql.core.object_field_value = (function active_graphql$core$object_field_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.object_field,rec__29340__auto__,active_graphql.core.object_field_value);

return rec__29340__auto__.value;
});
active_graphql.core.object_field__GT_string = (function active_graphql$core$object_field__GT_string(of){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.object_field_name.call(null,of)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.object_field_value.call(null,of))].join('');
});
active_graphql.core.object_value_QMARK_ = (function active_graphql$core$object_value_QMARK_(obj){
return ((obj == null)) || ((cljs.core.seq.call(null,obj)) && (cljs.core.every_QMARK_.call(null,active_graphql.core.object_field_QMARK_,obj)));
});
active_graphql.core.object_value__GT_string = (function active_graphql$core$object_value__GT_string(ov){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.call(null,active_graphql.core.object_field__GT_string,ov)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
});
active_graphql.core.value_QMARK_ = (function active_graphql$core$value_QMARK_(obj){
var or__27854__auto__ = active_graphql.core.variable_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto__)){
return or__27854__auto__;
} else {
var or__27854__auto____$1 = active_graphql.core.int_value_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto____$1)){
return or__27854__auto____$1;
} else {
var or__27854__auto____$2 = active_graphql.core.float_value_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto____$2)){
return or__27854__auto____$2;
} else {
var or__27854__auto____$3 = active_graphql.core.string_value_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto____$3)){
return or__27854__auto____$3;
} else {
var or__27854__auto____$4 = active_graphql.core.boolean_value_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto____$4)){
return or__27854__auto____$4;
} else {
var or__27854__auto____$5 = active_graphql.core.null_value_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto____$5)){
return or__27854__auto____$5;
} else {
var or__27854__auto____$6 = active_graphql.core.enum_value_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto____$6)){
return or__27854__auto____$6;
} else {
var or__27854__auto____$7 = active_graphql.core.list_value_QMARK_.call(null,obj);
if(cljs.core.truth_(or__27854__auto____$7)){
return or__27854__auto____$7;
} else {
return active_graphql.core.object_value_QMARK_.call(null,obj);
}
}
}
}
}
}
}
}
});
active_graphql.core.value__GT_string = (function active_graphql$core$value__GT_string(obj){
if(cljs.core.truth_(active_graphql.core.variable_QMARK_.call(null,obj))){
return active_graphql.core.variable__GT_string.call(null,obj);
} else {
if(cljs.core.truth_(active_graphql.core.int_value_QMARK_.call(null,obj))){
return active_graphql.core.int_value__GT_string.call(null,obj);
} else {
if(cljs.core.truth_(active_graphql.core.float_value_QMARK_.call(null,obj))){
return active_graphql.core.float_value__GT_string.call(null,obj);
} else {
if(cljs.core.truth_(active_graphql.core.string_value_QMARK_.call(null,obj))){
return active_graphql.core.string_value__GT_string.call(null,obj);
} else {
if(cljs.core.truth_(active_graphql.core.boolean_value_QMARK_.call(null,obj))){
return active_graphql.core.boolean_value__GT_string.call(null,obj);
} else {
if(cljs.core.truth_(active_graphql.core.null_value_QMARK_.call(null,obj))){
return active_graphql.core.null_value__GT_string.call(null,obj);
} else {
if(cljs.core.truth_(active_graphql.core.enum_value_QMARK_.call(null,obj))){
return active_graphql.core.enum_value__GT_string.call(null,obj);
} else {
if(cljs.core.truth_(active_graphql.core.list_value_QMARK_.call(null,obj))){
return active_graphql.core.list_value__GT_string.call(null,obj);
} else {
if(cljs.core.truth_(active_graphql.core.object_value_QMARK_.call(null,obj))){
return active_graphql.core.object_field__GT_string.call(null,obj);
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
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.alias = (function (name,__meta,__extmap,__hash){
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.alias.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.alias.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32644,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32646 = (((k32644 instanceof cljs.core.Keyword))?k32644.fqn:null);
switch (G__32646) {
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32644,else__28484__auto__);

}
});

active_graphql.core.alias.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.alias{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

active_graphql.core.alias.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.alias.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32643){
var self__ = this;
var G__32643__$1 = this;
return (new cljs.core.RecordIter((0),G__32643__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.alias.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.alias.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.alias(self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.alias.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.alias.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.alias.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.alias.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.alias(self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.alias.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32643){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32647 = cljs.core.keyword_identical_QMARK_;
var expr__32648 = k__28489__auto__;
if(cljs.core.truth_(pred__32647.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32648))){
return (new active_graphql.core.alias(G__32643,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.alias(self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32643),null));
}
});

active_graphql.core.alias.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

active_graphql.core.alias.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32643){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.alias(self__.name,G__32643,self__.__extmap,self__.__hash));
});

active_graphql.core.alias.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.alias.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

active_graphql.core.alias.cljs$lang$type = true;

active_graphql.core.alias.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/alias");
});

active_graphql.core.alias.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/alias");
});

active_graphql.core.__GT_alias = (function active_graphql$core$__GT_alias(name){
return (new active_graphql.core.alias(name,null,null,null));
});

active_graphql.core.map__GT_alias = (function active_graphql$core$map__GT_alias(G__32645){
return (new active_graphql.core.alias(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32645),null,cljs.core.dissoc.call(null,G__32645,new cljs.core.Keyword(null,"name","name",1843675177)),null));
});


/**
 * Is object a `alias` record? See [[active-graphql.core/make-alias]].
 */
active_graphql.core.alias_QMARK_ = (function active_graphql$core$alias_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.alias);
});

/**
 * Construct a `alias` record.
 * 
 * `name`: access via [[active-graphql.core/alias-name]]
 */
active_graphql.core.make_alias = (function active_graphql$core$make_alias(name){
return (new active_graphql.core.alias(name,null,null,null));
});


/**
 * Access `name` field from a [[alias]] record. See [[active-graphql.core/make-alias]].
 */
active_graphql.core.alias_name = (function active_graphql$core$alias_name(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.alias,rec__29340__auto__,active_graphql.core.alias_name);

return rec__29340__auto__.name;
});
active_graphql.core.alias__GT_string = (function active_graphql$core$alias__GT_string(a){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.alias_name.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.argument = (function (name,value,__meta,__extmap,__hash){
this.name = name;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.argument.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.argument.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32652,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32654 = (((k32652 instanceof cljs.core.Keyword))?k32652.fqn:null);
switch (G__32654) {
case "name":
return self__.name;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32652,else__28484__auto__);

}
});

active_graphql.core.argument.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.argument{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.argument.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.argument.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32651){
var self__ = this;
var G__32651__$1 = this;
return (new cljs.core.RecordIter((0),G__32651__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.argument.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.argument.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.argument(self__.name,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.argument.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.argument.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.argument.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.argument.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.argument(self__.name,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.argument.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32651){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32655 = cljs.core.keyword_identical_QMARK_;
var expr__32656 = k__28489__auto__;
if(cljs.core.truth_(pred__32655.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32656))){
return (new active_graphql.core.argument(G__32651,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32655.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32656))){
return (new active_graphql.core.argument(self__.name,G__32651,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.argument(self__.name,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32651),null));
}
}
});

active_graphql.core.argument.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

active_graphql.core.argument.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32651){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.argument(self__.name,self__.value,G__32651,self__.__extmap,self__.__hash));
});

active_graphql.core.argument.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.argument.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

active_graphql.core.argument.cljs$lang$type = true;

active_graphql.core.argument.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/argument");
});

active_graphql.core.argument.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/argument");
});

active_graphql.core.__GT_argument = (function active_graphql$core$__GT_argument(name,value){
return (new active_graphql.core.argument(name,value,null,null,null));
});

active_graphql.core.map__GT_argument = (function active_graphql$core$map__GT_argument(G__32653){
return (new active_graphql.core.argument(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32653),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32653),null,cljs.core.dissoc.call(null,G__32653,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
 * Is object a `argument` record? See [[active-graphql.core/make-argument]].
 */
active_graphql.core.argument_QMARK_ = (function active_graphql$core$argument_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.argument);
});

/**
 * Construct a `argument` record.
 * 
 * `name`: access via [[active-graphql.core/argument-name]]
 * `value`: access via [[active-graphql.core/argument-value]]
 */
active_graphql.core.make_argument = (function active_graphql$core$make_argument(name,value){
return (new active_graphql.core.argument(name,value,null,null,null));
});



/**
 * Access `name` field from a [[argument]] record. See [[active-graphql.core/make-argument]].
 */
active_graphql.core.argument_name = (function active_graphql$core$argument_name(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.argument,rec__29340__auto__,active_graphql.core.argument_name);

return rec__29340__auto__.name;
});

/**
 * Access `value` field from a [[argument]] record. See [[active-graphql.core/make-argument]].
 */
active_graphql.core.argument_value = (function active_graphql$core$argument_value(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.argument,rec__29340__auto__,active_graphql.core.argument_value);

return rec__29340__auto__.value;
});
active_graphql.core.argument__GT_string = (function active_graphql$core$argument__GT_string(a){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.argument_name.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.value__GT_string.call(null,active_graphql.core.argument_value.call(null,a)))].join('');
});
active_graphql.core.arguments_QMARK_ = (function active_graphql$core$arguments_QMARK_(xs){
return cljs.core.every_QMARK_.call(null,active_graphql.core.argument_QMARK_,xs);
});
active_graphql.core.arguments__GT_string = (function active_graphql$core$arguments__GT_string(as){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.map.call(null,active_graphql.core.argument__GT_string,as)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.selection = (function (field,fragment_spread,inline_fragment,__meta,__extmap,__hash){
this.field = field;
this.fragment_spread = fragment_spread;
this.inline_fragment = inline_fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.selection.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.selection.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32660,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32662 = (((k32660 instanceof cljs.core.Keyword))?k32660.fqn:null);
switch (G__32662) {
case "field":
return self__.field;

break;
case "fragment-spread":
return self__.fragment_spread;

break;
case "inline-fragment":
return self__.inline_fragment;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32660,else__28484__auto__);

}
});

active_graphql.core.selection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.selection{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",-1302436500),self__.field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment-spread","fragment-spread",1586935629),self__.fragment_spread],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inline-fragment","inline-fragment",-981243648),self__.inline_fragment],null))], null),self__.__extmap));
});

active_graphql.core.selection.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.selection.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32659){
var self__ = this;
var G__32659__$1 = this;
return (new cljs.core.RecordIter((0),G__32659__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"fragment-spread","fragment-spread",1586935629),new cljs.core.Keyword(null,"inline-fragment","inline-fragment",-981243648)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.selection.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.selection.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.selection(self__.field,self__.fragment_spread,self__.inline_fragment,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.selection.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.selection.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.selection.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.selection.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inline-fragment","inline-fragment",-981243648),null,new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"fragment-spread","fragment-spread",1586935629),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.selection(self__.field,self__.fragment_spread,self__.inline_fragment,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.selection.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32659){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32663 = cljs.core.keyword_identical_QMARK_;
var expr__32664 = k__28489__auto__;
if(cljs.core.truth_(pred__32663.call(null,new cljs.core.Keyword(null,"field","field",-1302436500),expr__32664))){
return (new active_graphql.core.selection(G__32659,self__.fragment_spread,self__.inline_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32663.call(null,new cljs.core.Keyword(null,"fragment-spread","fragment-spread",1586935629),expr__32664))){
return (new active_graphql.core.selection(self__.field,G__32659,self__.inline_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32663.call(null,new cljs.core.Keyword(null,"inline-fragment","inline-fragment",-981243648),expr__32664))){
return (new active_graphql.core.selection(self__.field,self__.fragment_spread,G__32659,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.selection(self__.field,self__.fragment_spread,self__.inline_fragment,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32659),null));
}
}
}
});

active_graphql.core.selection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"field","field",-1302436500),self__.field],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment-spread","fragment-spread",1586935629),self__.fragment_spread],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inline-fragment","inline-fragment",-981243648),self__.inline_fragment],null))], null),self__.__extmap));
});

active_graphql.core.selection.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32659){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.selection(self__.field,self__.fragment_spread,self__.inline_fragment,G__32659,self__.__extmap,self__.__hash));
});

active_graphql.core.selection.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.selection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"field","field",338095027,null),new cljs.core.Symbol(null,"fragment-spread","fragment-spread",-1067500140,null),new cljs.core.Symbol(null,"inline-fragment","inline-fragment",659287879,null)], null);
});

active_graphql.core.selection.cljs$lang$type = true;

active_graphql.core.selection.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/selection");
});

active_graphql.core.selection.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/selection");
});

active_graphql.core.__GT_selection = (function active_graphql$core$__GT_selection(field,fragment_spread,inline_fragment){
return (new active_graphql.core.selection(field,fragment_spread,inline_fragment,null,null,null));
});

active_graphql.core.map__GT_selection = (function active_graphql$core$map__GT_selection(G__32661){
return (new active_graphql.core.selection(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(G__32661),new cljs.core.Keyword(null,"fragment-spread","fragment-spread",1586935629).cljs$core$IFn$_invoke$arity$1(G__32661),new cljs.core.Keyword(null,"inline-fragment","inline-fragment",-981243648).cljs$core$IFn$_invoke$arity$1(G__32661),null,cljs.core.dissoc.call(null,G__32661,new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"fragment-spread","fragment-spread",1586935629),new cljs.core.Keyword(null,"inline-fragment","inline-fragment",-981243648)),null));
});


/**
 * Is object a `selection` record? See [[active-graphql.core/make-selection]].
 */
active_graphql.core.selection_QMARK_ = (function active_graphql$core$selection_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.selection);
});

/**
 * Construct a `selection` record.
 * 
 * `field`: access via [[active-graphql.core/selection-field]]
 * `fragment-spread`: access via [[active-graphql.core/selection-fragment-spread]]
 * `inline-fragment`: access via [[active-graphql.core/selection-inline-fragment]]
 */
active_graphql.core.make_selection = (function active_graphql$core$make_selection(field,fragment_spread,inline_fragment){
return (new active_graphql.core.selection(field,fragment_spread,inline_fragment,null,null,null));
});




/**
 * Access `field` field from a [[selection]] record. See [[active-graphql.core/make-selection]].
 */
active_graphql.core.selection_field = (function active_graphql$core$selection_field(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.selection,rec__29340__auto__,active_graphql.core.selection_field);

return rec__29340__auto__.field;
});

/**
 * Access `fragment-spread` field from a [[selection]] record. See [[active-graphql.core/make-selection]].
 */
active_graphql.core.selection_fragment_spread = (function active_graphql$core$selection_fragment_spread(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.selection,rec__29340__auto__,active_graphql.core.selection_fragment_spread);

return rec__29340__auto__.fragment_spread;
});

/**
 * Access `inline-fragment` field from a [[selection]] record. See [[active-graphql.core/make-selection]].
 */
active_graphql.core.selection_inline_fragment = (function active_graphql$core$selection_inline_fragment(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.selection,rec__29340__auto__,active_graphql.core.selection_inline_fragment);

return rec__29340__auto__.inline_fragment;
});
active_graphql.core.selection__GT_string = (function active_graphql$core$selection__GT_string(sel){
return active_graphql.core.field__GT_string.call(null,active_graphql.core.selection_field.call(null,sel));
});
active_graphql.core.selection_set_QMARK_ = (function active_graphql$core$selection_set_QMARK_(obj){
return (cljs.core.seq.call(null,obj)) && (cljs.core.every_QMARK_.call(null,active_graphql.core.selection_QMARK_,obj));
});
active_graphql.core.selection_set__GT_string = (function active_graphql$core$selection_set__GT_string(sel_set){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.map.call(null,active_graphql.core.selection__GT_string,sel_set)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.field = (function (_QMARK_alias,name,_QMARK_arguments,_QMARK_directives,_QMARK_selection_set,__meta,__extmap,__hash){
this._QMARK_alias = _QMARK_alias;
this.name = name;
this._QMARK_arguments = _QMARK_arguments;
this._QMARK_directives = _QMARK_directives;
this._QMARK_selection_set = _QMARK_selection_set;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.field.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.field.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32668,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32670 = (((k32668 instanceof cljs.core.Keyword))?k32668.fqn:null);
switch (G__32670) {
case "?alias":
return self__._QMARK_alias;

break;
case "name":
return self__.name;

break;
case "?arguments":
return self__._QMARK_arguments;

break;
case "?directives":
return self__._QMARK_directives;

break;
case "?selection-set":
return self__._QMARK_selection_set;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32668,else__28484__auto__);

}
});

active_graphql.core.field.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.field{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?alias","?alias",1663844789),self__._QMARK_alias],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?arguments","?arguments",-1207715232),self__._QMARK_arguments],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?directives","?directives",1590321076),self__._QMARK_directives],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?selection-set","?selection-set",845758233),self__._QMARK_selection_set],null))], null),self__.__extmap));
});

active_graphql.core.field.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.field.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32667){
var self__ = this;
var G__32667__$1 = this;
return (new cljs.core.RecordIter((0),G__32667__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?alias","?alias",1663844789),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"?arguments","?arguments",-1207715232),new cljs.core.Keyword(null,"?directives","?directives",1590321076),new cljs.core.Keyword(null,"?selection-set","?selection-set",845758233)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.field.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.field.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.field(self__._QMARK_alias,self__.name,self__._QMARK_arguments,self__._QMARK_directives,self__._QMARK_selection_set,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.field.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.field.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.field.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.field.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?arguments","?arguments",-1207715232),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"?directives","?directives",1590321076),null,new cljs.core.Keyword(null,"?alias","?alias",1663844789),null,new cljs.core.Keyword(null,"?selection-set","?selection-set",845758233),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.field(self__._QMARK_alias,self__.name,self__._QMARK_arguments,self__._QMARK_directives,self__._QMARK_selection_set,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.field.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32667){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32671 = cljs.core.keyword_identical_QMARK_;
var expr__32672 = k__28489__auto__;
if(cljs.core.truth_(pred__32671.call(null,new cljs.core.Keyword(null,"?alias","?alias",1663844789),expr__32672))){
return (new active_graphql.core.field(G__32667,self__.name,self__._QMARK_arguments,self__._QMARK_directives,self__._QMARK_selection_set,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32671.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__32672))){
return (new active_graphql.core.field(self__._QMARK_alias,G__32667,self__._QMARK_arguments,self__._QMARK_directives,self__._QMARK_selection_set,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32671.call(null,new cljs.core.Keyword(null,"?arguments","?arguments",-1207715232),expr__32672))){
return (new active_graphql.core.field(self__._QMARK_alias,self__.name,G__32667,self__._QMARK_directives,self__._QMARK_selection_set,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32671.call(null,new cljs.core.Keyword(null,"?directives","?directives",1590321076),expr__32672))){
return (new active_graphql.core.field(self__._QMARK_alias,self__.name,self__._QMARK_arguments,G__32667,self__._QMARK_selection_set,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32671.call(null,new cljs.core.Keyword(null,"?selection-set","?selection-set",845758233),expr__32672))){
return (new active_graphql.core.field(self__._QMARK_alias,self__.name,self__._QMARK_arguments,self__._QMARK_directives,G__32667,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.field(self__._QMARK_alias,self__.name,self__._QMARK_arguments,self__._QMARK_directives,self__._QMARK_selection_set,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32667),null));
}
}
}
}
}
});

active_graphql.core.field.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?alias","?alias",1663844789),self__._QMARK_alias],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?arguments","?arguments",-1207715232),self__._QMARK_arguments],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?directives","?directives",1590321076),self__._QMARK_directives],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?selection-set","?selection-set",845758233),self__._QMARK_selection_set],null))], null),self__.__extmap));
});

active_graphql.core.field.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32667){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.field(self__._QMARK_alias,self__.name,self__._QMARK_arguments,self__._QMARK_directives,self__._QMARK_selection_set,G__32667,self__.__extmap,self__.__hash));
});

active_graphql.core.field.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.field.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?alias","?alias",-990590980,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"?arguments","?arguments",432816295,null),new cljs.core.Symbol(null,"?directives","?directives",-1064114693,null),new cljs.core.Symbol(null,"?selection-set","?selection-set",-1808677536,null)], null);
});

active_graphql.core.field.cljs$lang$type = true;

active_graphql.core.field.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/field");
});

active_graphql.core.field.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/field");
});

active_graphql.core.__GT_field = (function active_graphql$core$__GT_field(_QMARK_alias,name,_QMARK_arguments,_QMARK_directives,_QMARK_selection_set){
return (new active_graphql.core.field(_QMARK_alias,name,_QMARK_arguments,_QMARK_directives,_QMARK_selection_set,null,null,null));
});

active_graphql.core.map__GT_field = (function active_graphql$core$map__GT_field(G__32669){
return (new active_graphql.core.field(new cljs.core.Keyword(null,"?alias","?alias",1663844789).cljs$core$IFn$_invoke$arity$1(G__32669),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__32669),new cljs.core.Keyword(null,"?arguments","?arguments",-1207715232).cljs$core$IFn$_invoke$arity$1(G__32669),new cljs.core.Keyword(null,"?directives","?directives",1590321076).cljs$core$IFn$_invoke$arity$1(G__32669),new cljs.core.Keyword(null,"?selection-set","?selection-set",845758233).cljs$core$IFn$_invoke$arity$1(G__32669),null,cljs.core.dissoc.call(null,G__32669,new cljs.core.Keyword(null,"?alias","?alias",1663844789),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"?arguments","?arguments",-1207715232),new cljs.core.Keyword(null,"?directives","?directives",1590321076),new cljs.core.Keyword(null,"?selection-set","?selection-set",845758233)),null));
});


/**
 * Is object a `field` record? See [[active-graphql.core/make-field]].
 */
active_graphql.core.field_QMARK_ = (function active_graphql$core$field_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.field);
});

/**
 * Construct a `field` record.
 * 
 * `?alias`: access via [[active-graphql.core/field-?alias]]
 * `name`: access via [[active-graphql.core/field-name]]
 * `?arguments`: access via [[active-graphql.core/field-?arguments]], lens [[active-graphql.core/field-?arguments-lens]]
 * `?directives`: access via [[active-graphql.core/field-?directives]], lens [[active-graphql.core/field-?directives-lens]]
 * `?selection-set`: access via [[active-graphql.core/field-?selection-set]], lens [[active-graphql.core/field-?selection-set-lens]]
 */
active_graphql.core.make_field = (function active_graphql$core$make_field(_QMARK_alias,name,_QMARK_arguments,_QMARK_directives,_QMARK_selection_set){
return (new active_graphql.core.field(_QMARK_alias,name,_QMARK_arguments,_QMARK_directives,_QMARK_selection_set,null,null,null));
});






/**
 * Access `?alias` field from a [[field]] record. See [[active-graphql.core/make-field]].
 */
active_graphql.core.field__QMARK_alias = (function active_graphql$core$field__QMARK_alias(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.field,rec__29340__auto__,active_graphql.core.field__QMARK_alias);

return rec__29340__auto__._QMARK_alias;
});

/**
 * Access `name` field from a [[field]] record. See [[active-graphql.core/make-field]].
 */
active_graphql.core.field_name = (function active_graphql$core$field_name(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.field,rec__29340__auto__,active_graphql.core.field_name);

return rec__29340__auto__.name;
});

/**
 * Access `?arguments` field from a [[field]] record. See [[active-graphql.core/make-field]].
 */
active_graphql.core.field__QMARK_arguments = (function active_graphql$core$field__QMARK_arguments(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.field,rec__29340__auto__,active_graphql.core.field__QMARK_arguments);

return rec__29340__auto__._QMARK_arguments;
});

/**
 * Lens for the `?arguments` field from a [[field]] record.See [[active-graphql.core/make-field]].
 */
active_graphql.core.field__QMARK_arguments_lens = active.clojure.lens.lens.call(null,active_graphql.core.field__QMARK_arguments,(function (data__29341__auto__,v__29342__auto__){
return active_graphql.core.make_field.call(null,active_graphql.core.field__QMARK_alias.call(null,data__29341__auto__),active_graphql.core.field_name.call(null,data__29341__auto__),v__29342__auto__,active_graphql.core.field__QMARK_directives.call(null,data__29341__auto__),active_graphql.core.field__QMARK_selection_set.call(null,data__29341__auto__));
}));

/**
 * Access `?directives` field from a [[field]] record. See [[active-graphql.core/make-field]].
 */
active_graphql.core.field__QMARK_directives = (function active_graphql$core$field__QMARK_directives(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.field,rec__29340__auto__,active_graphql.core.field__QMARK_directives);

return rec__29340__auto__._QMARK_directives;
});

/**
 * Lens for the `?directives` field from a [[field]] record.See [[active-graphql.core/make-field]].
 */
active_graphql.core.field__QMARK_directives_lens = active.clojure.lens.lens.call(null,active_graphql.core.field__QMARK_directives,(function (data__29341__auto__,v__29342__auto__){
return active_graphql.core.make_field.call(null,active_graphql.core.field__QMARK_alias.call(null,data__29341__auto__),active_graphql.core.field_name.call(null,data__29341__auto__),active_graphql.core.field__QMARK_arguments.call(null,data__29341__auto__),v__29342__auto__,active_graphql.core.field__QMARK_selection_set.call(null,data__29341__auto__));
}));

/**
 * Access `?selection-set` field from a [[field]] record. See [[active-graphql.core/make-field]].
 */
active_graphql.core.field__QMARK_selection_set = (function active_graphql$core$field__QMARK_selection_set(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.field,rec__29340__auto__,active_graphql.core.field__QMARK_selection_set);

return rec__29340__auto__._QMARK_selection_set;
});

/**
 * Lens for the `?selection-set` field from a [[field]] record.See [[active-graphql.core/make-field]].
 */
active_graphql.core.field__QMARK_selection_set_lens = active.clojure.lens.lens.call(null,active_graphql.core.field__QMARK_selection_set,(function (data__29341__auto__,v__29342__auto__){
return active_graphql.core.make_field.call(null,active_graphql.core.field__QMARK_alias.call(null,data__29341__auto__),active_graphql.core.field_name.call(null,data__29341__auto__),active_graphql.core.field__QMARK_arguments.call(null,data__29341__auto__),active_graphql.core.field__QMARK_directives.call(null,data__29341__auto__),v__29342__auto__);
}));
active_graphql.core.field__GT_string = (function active_graphql$core$field__GT_string(f){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = active_graphql.core.field__QMARK_alias.call(null,f);
if(cljs.core.truth_(temp__4657__auto__)){
var alias = temp__4657__auto__;
return active_graphql.core.alias__GT_string.call(null,alias);
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.field_name.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = active_graphql.core.field__QMARK_arguments.call(null,f);
if(cljs.core.truth_(temp__4657__auto__)){
var args = temp__4657__auto__;
return active_graphql.core.arguments__GT_string.call(null,args);
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = active_graphql.core.field__QMARK_selection_set.call(null,f);
if(cljs.core.truth_(temp__4657__auto__)){
var sel_set = temp__4657__auto__;
return active_graphql.core.selection_set__GT_string.call(null,sel_set);
} else {
return null;
}
})())].join('');
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active_graphql.core.operation_definition = (function (type,_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set,__meta,__extmap,__hash){
this.type = type;
this._QMARK_name = _QMARK_name;
this._QMARK_variable_definitions = _QMARK_variable_definitions;
this._QMARK_directives = _QMARK_directives;
this.selection_set = selection_set;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active_graphql.core.operation_definition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active_graphql.core.operation_definition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k32676,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__32678 = (((k32676 instanceof cljs.core.Keyword))?k32676.fqn:null);
switch (G__32678) {
case "type":
return self__.type;

break;
case "?name":
return self__._QMARK_name;

break;
case "?variable-definitions":
return self__._QMARK_variable_definitions;

break;
case "?directives":
return self__._QMARK_directives;

break;
case "selection-set":
return self__.selection_set;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32676,else__28484__auto__);

}
});

active_graphql.core.operation_definition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active-graphql.core.operation-definition{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?name","?name",410171863),self__._QMARK_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?variable-definitions","?variable-definitions",1647417077),self__._QMARK_variable_definitions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?directives","?directives",1590321076),self__._QMARK_directives],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selection-set","selection-set",1274849415),self__.selection_set],null))], null),self__.__extmap));
});

active_graphql.core.operation_definition.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active_graphql.core.operation_definition.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32675){
var self__ = this;
var G__32675__$1 = this;
return (new cljs.core.RecordIter((0),G__32675__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"?name","?name",410171863),new cljs.core.Keyword(null,"?variable-definitions","?variable-definitions",1647417077),new cljs.core.Keyword(null,"?directives","?directives",1590321076),new cljs.core.Keyword(null,"selection-set","selection-set",1274849415)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active_graphql.core.operation_definition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active_graphql.core.operation_definition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active_graphql.core.operation_definition(self__.type,self__._QMARK_name,self__._QMARK_variable_definitions,self__._QMARK_directives,self__.selection_set,self__.__meta,self__.__extmap,self__.__hash));
});

active_graphql.core.operation_definition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

active_graphql.core.operation_definition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active_graphql.core.operation_definition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active_graphql.core.operation_definition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection-set","selection-set",1274849415),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"?directives","?directives",1590321076),null,new cljs.core.Keyword(null,"?variable-definitions","?variable-definitions",1647417077),null,new cljs.core.Keyword(null,"?name","?name",410171863),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active_graphql.core.operation_definition(self__.type,self__._QMARK_name,self__._QMARK_variable_definitions,self__._QMARK_directives,self__.selection_set,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active_graphql.core.operation_definition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__32675){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__32679 = cljs.core.keyword_identical_QMARK_;
var expr__32680 = k__28489__auto__;
if(cljs.core.truth_(pred__32679.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__32680))){
return (new active_graphql.core.operation_definition(G__32675,self__._QMARK_name,self__._QMARK_variable_definitions,self__._QMARK_directives,self__.selection_set,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32679.call(null,new cljs.core.Keyword(null,"?name","?name",410171863),expr__32680))){
return (new active_graphql.core.operation_definition(self__.type,G__32675,self__._QMARK_variable_definitions,self__._QMARK_directives,self__.selection_set,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32679.call(null,new cljs.core.Keyword(null,"?variable-definitions","?variable-definitions",1647417077),expr__32680))){
return (new active_graphql.core.operation_definition(self__.type,self__._QMARK_name,G__32675,self__._QMARK_directives,self__.selection_set,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32679.call(null,new cljs.core.Keyword(null,"?directives","?directives",1590321076),expr__32680))){
return (new active_graphql.core.operation_definition(self__.type,self__._QMARK_name,self__._QMARK_variable_definitions,G__32675,self__.selection_set,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32679.call(null,new cljs.core.Keyword(null,"selection-set","selection-set",1274849415),expr__32680))){
return (new active_graphql.core.operation_definition(self__.type,self__._QMARK_name,self__._QMARK_variable_definitions,self__._QMARK_directives,G__32675,self__.__meta,self__.__extmap,null));
} else {
return (new active_graphql.core.operation_definition(self__.type,self__._QMARK_name,self__._QMARK_variable_definitions,self__._QMARK_directives,self__.selection_set,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__32675),null));
}
}
}
}
}
});

active_graphql.core.operation_definition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?name","?name",410171863),self__._QMARK_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?variable-definitions","?variable-definitions",1647417077),self__._QMARK_variable_definitions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"?directives","?directives",1590321076),self__._QMARK_directives],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selection-set","selection-set",1274849415),self__.selection_set],null))], null),self__.__extmap));
});

active_graphql.core.operation_definition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__32675){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active_graphql.core.operation_definition(self__.type,self__._QMARK_name,self__._QMARK_variable_definitions,self__._QMARK_directives,self__.selection_set,G__32675,self__.__extmap,self__.__hash));
});

active_graphql.core.operation_definition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active_graphql.core.operation_definition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"?name","?name",2050703390,null),new cljs.core.Symbol(null,"?variable-definitions","?variable-definitions",-1007018692,null),new cljs.core.Symbol(null,"?directives","?directives",-1064114693,null),new cljs.core.Symbol(null,"selection-set","selection-set",-1379586354,null)], null);
});

active_graphql.core.operation_definition.cljs$lang$type = true;

active_graphql.core.operation_definition.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active-graphql.core/operation-definition");
});

active_graphql.core.operation_definition.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active-graphql.core/operation-definition");
});

active_graphql.core.__GT_operation_definition = (function active_graphql$core$__GT_operation_definition(type,_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set){
return (new active_graphql.core.operation_definition(type,_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set,null,null,null));
});

active_graphql.core.map__GT_operation_definition = (function active_graphql$core$map__GT_operation_definition(G__32677){
return (new active_graphql.core.operation_definition(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__32677),new cljs.core.Keyword(null,"?name","?name",410171863).cljs$core$IFn$_invoke$arity$1(G__32677),new cljs.core.Keyword(null,"?variable-definitions","?variable-definitions",1647417077).cljs$core$IFn$_invoke$arity$1(G__32677),new cljs.core.Keyword(null,"?directives","?directives",1590321076).cljs$core$IFn$_invoke$arity$1(G__32677),new cljs.core.Keyword(null,"selection-set","selection-set",1274849415).cljs$core$IFn$_invoke$arity$1(G__32677),null,cljs.core.dissoc.call(null,G__32677,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"?name","?name",410171863),new cljs.core.Keyword(null,"?variable-definitions","?variable-definitions",1647417077),new cljs.core.Keyword(null,"?directives","?directives",1590321076),new cljs.core.Keyword(null,"selection-set","selection-set",1274849415)),null));
});


/**
 * Is object a `operation-definition` record? See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition_QMARK_ = (function active_graphql$core$operation_definition_QMARK_(x__29343__auto__){
return (x__29343__auto__ instanceof active_graphql.core.operation_definition);
});

/**
 * Construct a `operation-definition` record.
 * 
 * `type`: access via [[active-graphql.core/operation-definition-?type]]
 * `?name`: access via [[active-graphql.core/operation-definition-?name]], lens [[active-graphql.core/operation-definition-?name-lens]]
 * `?variable-definitions`: access via [[active-graphql.core/operation-definition-?variable-definitions]], lens [[active-graphql.core/operation-definition-?variable-definitions-lens]]
 * `?directives`: access via [[active-graphql.core/operation-definition-?directives]], lens [[active-graphql.core/operation-definition-?directives-lens]]
 * `selection-set`: access via [[active-graphql.core/operation-definition-selection-set]]
 */
active_graphql.core.make_operation_definition = (function active_graphql$core$make_operation_definition(type,_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set){
return (new active_graphql.core.operation_definition(type,_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set,null,null,null));
});






/**
 * Access `type` field from a [[operation-definition]] record. See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition__QMARK_type = (function active_graphql$core$operation_definition__QMARK_type(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.operation_definition,rec__29340__auto__,active_graphql.core.operation_definition__QMARK_type);

return rec__29340__auto__.type;
});

/**
 * Access `?name` field from a [[operation-definition]] record. See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition__QMARK_name = (function active_graphql$core$operation_definition__QMARK_name(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.operation_definition,rec__29340__auto__,active_graphql.core.operation_definition__QMARK_name);

return rec__29340__auto__._QMARK_name;
});

/**
 * Lens for the `?name` field from a [[operation-definition]] record.See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition__QMARK_name_lens = active.clojure.lens.lens.call(null,active_graphql.core.operation_definition__QMARK_name,(function (data__29341__auto__,v__29342__auto__){
return active_graphql.core.make_operation_definition.call(null,active_graphql.core.operation_definition__QMARK_type.call(null,data__29341__auto__),v__29342__auto__,active_graphql.core.operation_definition__QMARK_variable_definitions.call(null,data__29341__auto__),active_graphql.core.operation_definition__QMARK_directives.call(null,data__29341__auto__),active_graphql.core.operation_definition_selection_set.call(null,data__29341__auto__));
}));

/**
 * Access `?variable-definitions` field from a [[operation-definition]] record. See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition__QMARK_variable_definitions = (function active_graphql$core$operation_definition__QMARK_variable_definitions(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.operation_definition,rec__29340__auto__,active_graphql.core.operation_definition__QMARK_variable_definitions);

return rec__29340__auto__._QMARK_variable_definitions;
});

/**
 * Lens for the `?variable-definitions` field from a [[operation-definition]] record.See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition__QMARK_variable_definitions_lens = active.clojure.lens.lens.call(null,active_graphql.core.operation_definition__QMARK_variable_definitions,(function (data__29341__auto__,v__29342__auto__){
return active_graphql.core.make_operation_definition.call(null,active_graphql.core.operation_definition__QMARK_type.call(null,data__29341__auto__),active_graphql.core.operation_definition__QMARK_name.call(null,data__29341__auto__),v__29342__auto__,active_graphql.core.operation_definition__QMARK_directives.call(null,data__29341__auto__),active_graphql.core.operation_definition_selection_set.call(null,data__29341__auto__));
}));

/**
 * Access `?directives` field from a [[operation-definition]] record. See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition__QMARK_directives = (function active_graphql$core$operation_definition__QMARK_directives(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.operation_definition,rec__29340__auto__,active_graphql.core.operation_definition__QMARK_directives);

return rec__29340__auto__._QMARK_directives;
});

/**
 * Lens for the `?directives` field from a [[operation-definition]] record.See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition__QMARK_directives_lens = active.clojure.lens.lens.call(null,active_graphql.core.operation_definition__QMARK_directives,(function (data__29341__auto__,v__29342__auto__){
return active_graphql.core.make_operation_definition.call(null,active_graphql.core.operation_definition__QMARK_type.call(null,data__29341__auto__),active_graphql.core.operation_definition__QMARK_name.call(null,data__29341__auto__),active_graphql.core.operation_definition__QMARK_variable_definitions.call(null,data__29341__auto__),v__29342__auto__,active_graphql.core.operation_definition_selection_set.call(null,data__29341__auto__));
}));

/**
 * Access `selection-set` field from a [[operation-definition]] record. See [[active-graphql.core/make-operation-definition]].
 */
active_graphql.core.operation_definition_selection_set = (function active_graphql$core$operation_definition_selection_set(rec__29340__auto__){
active.clojure.record.check_type.call(null,active_graphql.core.operation_definition,rec__29340__auto__,active_graphql.core.operation_definition_selection_set);

return rec__29340__auto__.selection_set;
});
active_graphql.core.make_query = (function active_graphql$core$make_query(_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set){
return active_graphql.core.make_operation_definition.call(null,"query",_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set);
});
active_graphql.core.make_mutation = (function active_graphql$core$make_mutation(_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set){
return active_graphql.core.make_operation_definition.call(null,"mutation",_QMARK_name,_QMARK_variable_definitions,_QMARK_directives,selection_set);
});
active_graphql.core.operation_definition__GT_string = (function active_graphql$core$operation_definition__GT_string(op_def){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.operation_definition_type.call(null,op_def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = active_graphql.core.operation_definition__QMARK_name.call(null,op_def);
if(cljs.core.truth_(temp__4657__auto__)){
var nom = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(nom),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = active_graphql.core.operation_definition__QMARK_variable_definitions.call(null,op_def);
if(cljs.core.truth_(temp__4657__auto__)){
var var_defs = temp__4657__auto__;
return active_graphql.core.variable_definitions__GT_string.call(null,var_defs);
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_graphql.core.selection_set__GT_string.call(null,active_graphql.core.operation_definition_selection_set.call(null,op_def)))].join('');
});
active_graphql.core.definition_QMARK_ = (function active_graphql$core$definition_QMARK_(obj){
return active_graphql.core.operation_definition_QMARK_.call(null,obj);
});
active_graphql.core.definition__GT_string = (function active_graphql$core$definition__GT_string(def){
if(cljs.core.truth_(active_graphql.core.operation_definition_QMARK_.call(null,def))){
return active_graphql.core.operation_definition__GT_string.call(null,def);
} else {
return null;
}
});
active_graphql.core.document_QMARK_ = (function active_graphql$core$document_QMARK_(xs){
return (cljs.core.seq.call(null,xs)) && (cljs.core.every_QMARK_.call(null,active_graphql.core.definition_QMARK_,xs));
});
active_graphql.core.document__GT_string = (function active_graphql$core$document__GT_string(doc){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,active_graphql.core.definition__GT_string,doc));
});

//# sourceMappingURL=core.js.map