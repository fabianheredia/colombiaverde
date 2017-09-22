// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/Deferred jimu/portalUtils jimu/portalUrlUtils jimu/Role esri/kernel ./PortalAnalysis".split(" "),function(h,d,k,g,l,m,n,p){var b=null,f=h([],{userRole:null,userPortalUrl:null,portalAnalysis:null,portalSelf:null,portalUrl:null,constructor:function(a){this.portalUrl=a},_clearLoadedInfo:function(){this.portalUrl=this.portalSelf=this.portalAnalysis=this.userPortalUrl=this.userRole=null},loadPrivileges:function(a){a&&this.portalUrl!==a&&(this._clearLoadedInfo(),
this.portalUrl=a);if(this._privilegeLoaded())return a=new k,a.resolve(!0),a;a=g.getPortal(this.portalUrl);return a.haveSignIn()?this._loadUserInfo(a):this._signIn(a)},_signIn:function(a){return a.loadSelfInfo().then(d.hitch(this,function(a){var c=g.getPortal(a.portalHostname);return null===c?!1:null===c.credential?this._loadUserInfo(c):c.signIn().then(d.hitch(this,function(a){return this._loadUserInfo(c,a)}),function(){return!1})}),function(){return!1})},_registerOrgCredential:function(a,e){e=l.getStandardPortalUrl(e);
var c=d.clone(a.toJson()),b=e+"/sharing/rest";c.server=b;c.resources=[b];n.id.registerToken(c)},_loadUserInfo:function(a,b){return a.loadSelfInfo().then(d.hitch(this,function(a){this.userPortalUrl=a.urlKey?a.urlKey+"."+a.customBaseUrl:this.portalUrl;return a&&a.user?(this.userRole=new m({id:a.user.roleId?a.user.roleId:a.user.role,role:a.user.role}),a.user.privileges&&this.userRole.setPrivileges(a.user.privileges),this.portalSelf=a,b&&this._registerOrgCredential(b,this.userPortalUrl),this.portalAnalysis=
new p(this.userRole,this.portalSelf),!0):!1}),function(){return!1})},_privilegeLoaded:function(){return null!==this.portalSelf},getUser:function(){return this._privilegeLoaded()?this.portalSelf.user:null},isAdmin:function(){return this._privilegeLoaded()?this.userRole.isAdmin():!1},getUserPortal:function(){return this._privilegeLoaded()?this.userPortalUrl:null},isPortal:function(){return null!==this.portalSelf&&!0===this.portalSelf.isPortal},canPerformAnalysis:function(){return null!==this.portalAnalysis&&
this.portalAnalysis.canPerformAnalysis()},hasPrivileges:function(a){return null!==this.portalAnalysis&&this.portalAnalysis.hasPrivileges(a)}});f.getInstance=function(a){null===b&&(b=new f(a));return b};return f});