(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(t){function n(n){return"boolean"==typeof n&&(n={add:n,update:n}),"object"!=typeof n&&(n={}),n=t.extend(!0,{},t[r].defaults[c],n),n.count&&(t[r].deprecated('the option "count" for counters','the option "update"'),n.update=n.count),n}function e(t){return t}function o(){d=!0,a=t[r]._c,s=t[r]._d,u=t[r]._e,a.add("counter noresults"),i=t[r].glbl}var a,s,u,i,r="mmenu",c="counters",d=!1;t[r].prototype["_addon_"+c]=function(){d||o(),this.opts[c]=n(this.opts[c]),this.conf[c]=e(this.conf[c]);var u=this,i=this.opts[c];if(this.conf[c],this.__refactorClass(t("em",this.$menu),this.conf.classNames[c].counter,"counter"),i.add&&t("."+a.panel,this.$menu).each(function(){var n=t(this),e=n.data(s.parent);if(e){var o=t('<em class="'+a.counter+'" />'),u=e.find("> a."+a.subopen);u.parent().find("em."+a.counter).length||u.before(o)}}),i.update){var r=t("em."+a.counter,this.$menu);r.each(function(){var n=t(this),e=t(n.next().attr("href"),u.$menu);if(e.is("."+a.list)||(e=e.find("> ."+a.list)),e.length){var o=function(){var t=e.children().not("."+a.label).not("."+a.subtitle).not("."+a.hidden).not("."+a.search).not("."+a.noresults);n.html(t.length)};o(),u._update(o)}})}},t[r].addons=t[r].addons||[],t[r].addons.push(c),t[r].defaults[c]={add:!1,update:!1},t[r].configuration.classNames[c]={counter:"Counter"}}(jQuery);
}));
