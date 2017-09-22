// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/ItemSelector.html":'\r\n\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"setting-tab-container"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"tabNode"\x3e\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content mycontent-tab" data-dojo-attach-point\x3d"mycontentTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main mycontent-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"mycontentSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onMyContentSearch" style\x3d"position:absolute;width:100%;top:0;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"mycontentItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\'style\x3d"top:50px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content organization-tab" data-dojo-attach-point\x3d"organizationTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main organization-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"organizationSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onOrganizationSearch" style\x3d"position:absolute;width:100%;top:0;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"organizationItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\' style\x3d"top:50px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content group-tab" data-dojo-attach-point\x3d"groupTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main group-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"groups-section" style\x3d"position:absolute;width:100%;top:50px;" data-dojo-attach-point\x3d"groupsSection"\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.groups}:\x3c/span\x3e\r\n\t\t\t\t\t\x3cselect class\x3d"groups-select" data-dojo-attach-point\x3d"groupsSelect"\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"nodata"\x3e${nls.noneGroups}\x3c/option\x3e\r\n\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"groupSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onGroupSearch" style\x3d"position:absolute;width:100%;top:0;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"groupItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\' style\x3d"top:85px;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"tab-content public-tab" data-dojo-attach-point\x3d"publicTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"tab-content-main public-tab-content-main"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicSearch" data-dojo-type\x3d"jimu/dijit/Search" data-dojo-props\x3d\'searchWhenInput:false\' data-dojo-attach-event\x3d"onSearch:_onPublicSearch" style\x3d"position:absolute;width:100%;top:0;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"public-search-radios"\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"portalPublicRaido" type\x3d"radio" name\x3d"publicSearchRadio" class\x3d"jimu-float-leading portal-public-radio jimu-radio-btn" /\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"portalPublicLabel" class\x3d"jimu-float-leading portal-public-label"\x3ePortal\x3c/label\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"onlinePublicRaido" type\x3d"radio" name\x3d"publicSearchRadio" class\x3d"jimu-float-leading online-public-radio jimu-radio-btn" /\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"onlinePublicLabel" class\x3d"jimu-float-leading online-public-label"\x3eArcGIS Online\x3c/label\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicItemSection" class\x3d"public-item-section"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicPortalItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"publicOnlineItemTable" data-dojo-type\x3d"jimu/dijit/_ItemTable" data-dojo-props\x3d\'types:${_itemTypes},typeKeywords:${_typeKeywords}\'\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"signin-section" data-dojo-attach-point\x3d"signinSection" style\x3d"display:none;"\x3e\r\n\t\t\x3cdiv class\x3d"signin-tip"\x3e${nls.signInTip}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/topic dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/ItemSelector.html dojo/Evented dojo/_base/lang dojo/_base/config dojo/_base/array dojo/_base/html dojo/_base/Deferred dojo/promise/all dojo/query dojo/on jimu/utils jimu/portalUtils jimu/tokenUtils jimu/portalUrlUtils jimu/dijit/ViewStack jimu/dijit/Search jimu/dijit/TabContainer3 jimu/dijit/_ItemTable".split(" "),function(p,x,q,r,t,u,v,c,l,g,d,y,z,k,e,h,m,n,f,A,B,w,C){return p([q,
r,t,v],{templateString:u,declaredClass:"jimu.dijit.ItemSelector",baseClass:"jimu-item-selector",tab:null,_user:null,_group:null,_allPublicPortalQuery:null,_filterPublicPortalQuery:null,_allPublicOnlineQuery:null,_filterPublicOnlineQuery:null,_allOrganizationQuery:null,_filterOrganizationQuery:null,_allMyContentQuery:null,_filterMyContentQuery:null,_allGroupQuery:null,_filterGroupQuery:null,_isPublicTabShow:!1,_signIn:!1,_itemTypeQueryString:"",_typeKeywordQueryString:"",portalUrl:null,itemTypes:"",
typeKeywords:"",showOnlineItems:!0,onlyShowOnlineFeaturedItems:!1,postMixInProperties:function(){this.portalUrl=f.getStandardPortalUrl(this.portalUrl);this.showOnlineItems=!1===this.showOnlineItems?!1:!0;this.itemTypes&&0<this.itemTypes.length||(this.itemTypes=[]);this._itemTypes="";g.forEach(this.itemTypes,c.hitch(this,function(a,b){this._itemTypes+='"'+a+'"';b!==this.itemTypes.length-1&&(this._itemTypes+=",")}));this._itemTypes="["+this._itemTypes+"]";this.typeKeywords&&0<this.typeKeywords.length||
(this.typeKeywords=[]);this._typeKeywords="";g.forEach(this.typeKeywords,c.hitch(this,function(a,b){this._typeKeywords+='"'+a+'"';b!==this.typeKeywords.length-1&&(this._typeKeywords+=",")}));this._typeKeywords="["+this._typeKeywords+"]";this.nls=window.jimuNls.itemSelector},postCreate:function(){this.inherited(arguments);var a=this._getPortalUrl();this.portal=m.getPortal(a);this._initOptions();this._initSearchQuery();this._initTabs();this._initPortalRadio();this._initItemTables();this._initPublic();
this._initPrivate();this._updateUIbySignIn()},_initOptions:function(){this._itemTypeQueryString=h.getItemQueryStringByTypes(this.itemTypes);this._typeKeywordQueryString=h.getItemQueryStringByTypeKeywords(this.typeKeywords)},_initTabs:function(){this.tab=new w({tabs:[{title:this.nls.myContent,content:this.mycontentTabNode},{title:this.nls.myOrganization,content:this.organizationTabNode},{title:this.nls.myGroup,content:this.groupTabNode},{title:this.nls.publicMap,content:this.publicTabNode}]},this.tabNode);
this.own(e(this.tab,"tabChanged",c.hitch(this,function(a){d.setStyle(this.signinSection,"display","none");a!==this.nls.publicMap?(this._isPublicTabShow=!1,this._updateUIbySignIn()):this._isPublicTabShow=!0})))},_updateUIbySignIn:function(){d.setStyle(this.signinSection,"display","none");var a=k(".organization-tab-content-main,.group-tab-content-main,.mycontent-tab-content-main",this.domNode);n.userHaveSignInPortal(this._getPortalUrl())?a.style("display","block"):(a.style("display","none"),this._isPublicTabShow||
d.setStyle(this.signinSection,"display","block"))},_initPortalRadio:function(){h.combineRadioCheckBoxWithLabel(this.portalPublicRaido,this.portalPublicLabel);h.combineRadioCheckBoxWithLabel(this.onlinePublicRaido,this.onlinePublicLabel);var a=this._getPortalUrl(),a=f.getServerByUrl(a);this.portalPublicRaido.disabled=!1;this.onlinePublicRaido.disabled=!1;this.portalPublicRaido.checked=!0;var b=!1;f.isArcGIScom(a)?(b=!0,this.portalPublicLabel.innerHTML="ArcGIS.com"):(this.portalPublicLabel.innerHTML=
a,b=this.showOnlineItems?!1:!0);b&&(this.onlinePublicRaido.disabled=!0,d.setStyle(this.onlinePublicRaido,"display","none"),d.setStyle(this.onlinePublicLabel,"display","none"))},_initSearchQuery:function(){var a="esri_"+(l.locale&&l.locale.slice(0,2)||"en").toLowerCase(),b=g.filter("esri_he esri_fr esri_ja esri_nl esri_th esri_tr esri_nb esri_ro esri_it esri_pl esri_po esri_ru esri_pt esri_en esri_ar esri_et esri_es esri_ko esri_cs esri_da esri_zh esri_sv esri_lt esri_fi esri_lv esri_de esri_vi".split(" "),
c.hitch(this,function(b){return b!==a})),d="";g.forEach(b,c.hitch(this,function(a){d+=" -owner:"+a+" "}));b=" ";this.portal&&this.portal.user&&this.portal.user.orgId&&(b=" orgid:"+this.portal.user.orgId+" ");b=b+this._itemTypeQueryString+" AND access:public "+d+" "+this._typeKeywordQueryString;this._allPublicPortalQuery=this._getQuery({sortField:"numViews",sortOrder:"desc",q:b});this._filterPublicPortalQuery=this._getQuery({q:b,basicQ:b});this._allPublicOnlineQuery=this._getQuery({sortField:"numViews",
sortOrder:"desc",q:(this.onlyShowOnlineFeaturedItems?' (group:"c755678be14e4a0984af36a15f5b643e"  OR group:"b8787a74b4d74f7fb9b8fac918735153") ':" ")+this._itemTypeQueryString+" AND access:public "+this._typeKeywordQueryString});this._filterPublicOnlineQuery=this._getQuery({q:this._itemTypeQueryString+" AND access:public "+this._typeKeywordQueryString});this._allOrganizationQuery=this._getQuery();this._filterOrganizationQuery=this._getQuery();this._allMyContentQuery=this._getQuery();this._filterMyContentQuery=
this._getQuery();this._allGroupQuery=this._getQuery();this._filterGroupQuery=this._getQuery()},_getQuery:function(a){return c.mixin({start:1,num:16,f:"json"},a||{})},_getPortalUrl:function(){return f.getStandardPortalUrl(this.portalUrl)},_initItemTables:function(){"function"===typeof this.onCreateItemContent&&(this.mycontentItemTable.onCreateItemContent=this.onCreateItemContent,this.organizationItemTable.onCreateItemContent=this.onCreateItemContent,this.groupItemTable.onCreateItemContent=this.onCreateItemContent,
this.publicPortalItemTable.onCreateItemContent=this.onCreateItemContent,this.publicOnlineItemTable.onCreateItemContent=this.onCreateItemContent);this.own(e(this.publicPortalItemTable,"item-dom-clicked",c.hitch(this,this._onItemDomClicked)));this.own(e(this.publicOnlineItemTable,"item-dom-clicked",c.hitch(this,this._onItemDomClicked)));this.own(e(this.organizationItemTable,"item-dom-clicked",c.hitch(this,this._onItemDomClicked)));this.own(e(this.groupItemTable,"item-dom-clicked",c.hitch(this,this._onItemDomClicked)));
this.own(e(this.mycontentItemTable,"item-dom-clicked",c.hitch(this,this._onItemDomClicked)));this.own(e(this.publicPortalItemTable,"update",c.hitch(this,this._onItemTableUpdate)));this.own(e(this.publicOnlineItemTable,"update",c.hitch(this,this._onItemTableUpdate)));this.own(e(this.organizationItemTable,"update",c.hitch(this,this._onItemTableUpdate)));this.own(e(this.groupItemTable,"update",c.hitch(this,this._onItemTableUpdate)));this.own(e(this.mycontentItemTable,"update",c.hitch(this,this._onItemTableUpdate)));
var a=this._getPortalUrl();this.portalPublicRaido.disabled||(this.publicPortalItemTable.set("portalUrl",a),this.publicPortalItemTable.searchAllItems(this._allPublicPortalQuery),this.publicPortalItemTable.set("filteredQuery",this._filterPublicPortalQuery));this.onlinePublicRaido.disabled||(this.publicOnlineItemTable.set("portalUrl",window.location.protocol+"//www.arcgis.com"),this.publicOnlineItemTable.searchAllItems(this._allPublicOnlineQuery),this.publicOnlineItemTable.set("filteredQuery",this._filterPublicOnlineQuery))},
_initPublic:function(){this.own(e(this.portalPublicRaido,"click",c.hitch(this,this._onPublicRaidoClicked)));this.own(e(this.onlinePublicRaido,"click",c.hitch(this,this._onPublicRaidoClicked)));this._onPublicRaidoClicked()},_onPublicRaidoClicked:function(){this.portalPublicRaido.checked?(this.publicPortalItemTable.show(),this.publicOnlineItemTable.hide()):this.onlinePublicRaido.checked&&(this.publicPortalItemTable.hide(),this.publicOnlineItemTable.show())},_onPublicSearch:function(a){(a=a&&c.trim(a))?
(this.publicPortalItemTable.showFilterItemsSection(),this.publicOnlineItemTable.showFilterItemsSection(),this.portalPublicRaido.checked?(this._filterPublicPortalQuery.q=a+" "+this._filterPublicPortalQuery.basicQ,this._filterPublicPortalQuery.start=1,this.publicPortalItemTable.searchFilteredItems(this._filterPublicPortalQuery)):this.onlinePublicRaido.checked&&(this._filterPublicOnlineQuery.q=a+" "+this._itemTypeQueryString+" AND access:public "+this._typeKeywordQueryString,this._filterPublicOnlineQuery.start=
1,this.publicOnlineItemTable.searchFilteredItems(this._filterPublicOnlineQuery))):(this.publicPortalItemTable.showAllItemsSection(),this.publicOnlineItemTable.showAllItemsSection())},_initPrivate:function(){this._resetPortalMaps();this.own(e(this.groupsSelect,"change",c.hitch(this,this._onGroupsSelectChange)));var a=f.getServerByUrl(this._getPortalUrl());f.isArcGIScom(a)&&(a="ArcGIS.com");n.userHaveSignInPortal(this._getPortalUrl())&&this._onSignIn()},_onOrganizationSearch:function(a){if(a=a&&c.trim(a)){if(this._allOrganizationQuery){var b=
this._allOrganizationQuery.q;b&&(this._filterOrganizationQuery.q=a+" "+b,this._filterOrganizationQuery.start=1,this.organizationItemTable.searchFilteredItems(this._filterOrganizationQuery))}}else this.organizationItemTable.showAllItemsSection()},_onMyContentSearch:function(a){if(a=a&&c.trim(a)){if(this._allMyContentQuery){var b=this._allMyContentQuery.q;b&&(this._filterMyContentQuery.q=a+" "+b,this._filterMyContentQuery.start=1,this.mycontentItemTable.searchFilteredItems(this._filterMyContentQuery))}}else this.mycontentItemTable.showAllItemsSection()},
_onGroupSearch:function(a){if(a=a&&c.trim(a)){if(this._allGroupQuery){var b=this._allGroupQuery.q;b&&(this._filterGroupQuery.q=a+" "+b,this._filterGroupQuery.start=1,this.groupItemTable.searchFilteredItems(this._filterGroupQuery))}}else this.groupItemTable.showAllItemsSection()},_onSignIn:function(){this._updateUIbySignIn();if(!this._signIn){this._signIn=!0;var a=this._getPortalUrl();m.getPortal(a).getUser().then(c.hitch(this,function(a){this.domNode&&(this._resetPortalMaps(),this._searchOrganization(a),
this._searchMyContent(a),this._searchGroups(a))}))}},_onSignOut:function(){this._signIn=!1;this._resetPortalMaps();this._updateUIbySignIn()},_resetPortalMaps:function(){this.organizationItemTable.clear();this.mycontentItemTable.clear();this._resetGroupsSection()},_searchOrganization:function(a){this.organizationItemTable.clear();a=" orgid:"+a.orgId+" AND "+this._itemTypeQueryString+" AND (access:org OR access:public) "+this._typeKeywordQueryString;var b=this._getPortalUrl();this._allOrganizationQuery=
this._getQuery({q:a});this._filterOrganizationQuery=this._getQuery({q:a});this.organizationItemTable.set("portalUrl",b);this.organizationItemTable.searchAllItems(this._allOrganizationQuery)},_searchMyContent:function(a){this.mycontentItemTable.clear();var b=this._getPortalUrl();a="owner:"+a.username+" AND "+this._itemTypeQueryString+" "+this._typeKeywordQueryString;this._allMyContentQuery=this._getQuery({q:a});this._filterMyContentQuery=this._getQuery({q:a});this.mycontentItemTable.set("portalUrl",
b);this.mycontentItemTable.searchAllItems(this._allMyContentQuery)},_searchGroups:function(a){this._resetGroupsSection();d.setStyle(this.groupsSection,"display","block");a=a.getGroups();if(0<a.length){d.setStyle(this.groupSearch.domNode,"display","block");this.groupItemTable.show();d.empty(this.groupsSelect);for(var b=0;b<a.length;b++){var c=a[b];d.create("option",{value:c.id,innerHTML:c.title},this.groupsSelect)}this._onGroupsSelectChange()}this._updateUIbyGroups(a.length)},_resetGroupsSection:function(){d.setStyle(this.groupsSection,
"display","none");d.empty(this.groupsSelect);d.create("option",{value:"nodata",innerHTML:this.nls.noneGroups},this.groupsSelect);this.groupItemTable.clear();d.setStyle(this.groupSearch.domNode,"display","none");this.groupItemTable.hide();this._updateUIbyGroups(0)},_updateUIbyGroups:function(a){0===a?d.setStyle(this.groupsSection,"top","15px"):d.setStyle(this.groupsSection,"top","50px")},_onGroupsSelectChange:function(){var a=this.groupsSelect.value;this.groupItemTable.clear();if("nodata"===a)d.setStyle(this.groupSearch,
"display","none"),this.groupItemTable.hide();else{d.setStyle(this.groupSearch,"display","block");this.groupItemTable.show();var b=this._getPortalUrl(),a="group:"+a+" AND "+this._itemTypeQueryString+" "+this._typeKeywordQueryString;this._allGroupQuery=this._getQuery({q:a});this._filterGroupQuery=this._getQuery({q:a});this.groupItemTable.set("portalUrl",b);this.groupItemTable.searchAllItems(this._allGroupQuery)}},_onItemTableUpdate:function(){this.emit("update")},_onItemDomClicked:function(a){var b=
d.hasClass(a,"jimu-state-active");k(".item.jimu-state-active",this.domNode).removeClass("jimu-state-active");b&&d.addClass(a,"jimu-state-active");(a=this.getSelectedItem())?this.emit("item-selected",a):this.emit("none-item-selected")},getSelectedItem:function(){var a=null,b=k(".item.jimu-state-active",this.domNode);0<b.length&&(a=c.mixin({},b[0].item));return a}})});