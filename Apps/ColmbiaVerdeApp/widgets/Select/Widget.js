// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"jimu/dijit/FeatureSetChooserForMultipleLayers":function(){define("dojo/on dojo/sniff dojo/mouse dojo/query dojo/Evented dojo/_base/html dojo/_base/lang dojo/_base/array dojo/promise/all dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/FeatureSetChooserForMultipleLayers.html dijit/popup dijit/TooltipDialog jimu/utils jimu/dijit/DrawBox jimu/dijit/_FeatureSetChooserCore".split(" "),function(k,c,h,g,f,e,b,l,m,n,u,r,p,v,q,
x,a,y,w){return n([u,r,p,f],{baseClass:"jimu-multiple-layers-featureset-chooser",templateString:v,drawBox:null,_instances:null,_tooltipDialogTimeoutId1:-1,_tooltipDialogClientX1:-1,_tooltipDialogTimeoutId2:-1,_tooltipDialogClientX2:-1,_tooltipTimeout:1E3,_currentGeoTypeInfo:null,_geoTypeInfos:null,map:null,updateSelection:!1,fullyWithin:!1,geoTypes:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.featureSetChooser;var d=["EXTENT","POLYGON","CIRCLE","POLYLINE"];
this.geoTypes&&0<this.geoTypes.length&&(this.geoTypes=l.filter(this.geoTypes,b.hitch(this,function(a){return 0<=d.indexOf(a)})));this.geoTypes&&0!==this.geoTypes.length||(this.geoTypes=["EXTENT"])},postCreate:function(){this.inherited(arguments);this._instances=[];g(".select-text",this.domNode)[0].innerHTML=this.nls.select;g(".clear-text",this.domNode)[0].innerHTML=window.jimuNls.common.clear;g(".draw-item-rectangle .draw-text",this.domNode)[0].innerHTML=this.nls.selectByRectangle;g(".draw-item-polygon .draw-text",
this.domNode)[0].innerHTML=this.nls.selectByPolygon;g(".draw-item-circle .draw-text",this.domNode)[0].innerHTML=this.nls.selectByCircle;g(".draw-item-polyline .draw-text",this.domNode)[0].innerHTML=this.nls.selectByLine;this._initTooltipDialogs();this._initDrawBox();this._geoTypeInfos=[];0===this.geoTypes.length&&this.geoTypes.push("EXTENT");1===this.geoTypes.length?e.addClass(this.domNode,"single-geotype"):e.addClass(this.domNode,"multiple-geotypes");var d={EXTENT:[this.rectangleItem,this.drawBox.extentIcon],
POLYGON:[this.polygonItem,this.drawBox.polygonIcon],CIRCLE:[this.circleItem,this.drawBox.circleIcon],POLYLINE:[this.polylineItem,this.drawBox.polylineIcon]};l.forEach(["EXTENT","POLYGON","CIRCLE","POLYLINE"],b.hitch(this,function(a){var t=d[a],c=t[0];0<=this.geoTypes.indexOf(a)?(a={geoType:a,dom1:t[0],dom2:t[1]},this._geoTypeInfos.push(a),this.own(k(c,"click",b.hitch(this,this._onDrawItemClicked,a)))):e.addClass(c,"hidden")}));this.own(k(this.btnSelect,"click",b.hitch(this,function(){a.simulateClickEvent(this._currentGeoTypeInfo.dom2);
this._hideDrawItems()})));this._setCurrentGeoInfo(this._geoTypeInfos[0]);this.deactivate()},_initTooltipDialogs:function(){var d=c("mac")?"\u2318":"Ctrl",a="- "+this.nls.newSelectionTip+" ("+this.nls.dragMouse+")",t="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.dragBox+")",A="- "+this.nls.removeSelectionTip+" ("+d+"+"+this.nls.dragBox+")",f="- "+this.nls.newSelectionTip+" ("+this.nls.drawShap+")",l="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.darw+")",y="- "+this.nls.removeSelectionTip+" ("+
d+"+"+this.nls.darw+")",d=e.create("div",{innerHTML:'\x3cdiv class\x3d"title"\x3e\x3c/div\x3e\x3cdiv class\x3d"item new-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item add-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item remove-selection-item"\x3e\x3c/div\x3e',"class":"dialog-content"}),w=g(".title",d)[0],m=g(".new-selection-item",d)[0],n=g(".add-selection-item",d)[0],p=g(".remove-selection-item",d)[0];this.tooltipDialog1=new x({content:d});e.addClass(this.tooltipDialog1.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");
this.own(k(this.btnSelect,"mousemove",b.hitch(this,function(a){this._tooltipDialogClientX1=a.clientX})));this.own(k(this.btnSelect,h.enter,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._tooltipDialogTimeoutId1=setTimeout(b.hitch(this,function(){if(this.tooltipDialog1){var d=this._currentGeoTypeInfo.geoType;"EXTENT"===d?(m.innerHTML=a,n.innerHTML=t,p.innerHTML=A,w.innerHTML=this.nls.selectByRectangle):(m.innerHTML=f,n.innerHTML=l,p.innerHTML=
y,"POLYGON"===d?w.innerHTML=this.nls.selectByPolygon:"CIRCLE"===d?w.innerHTML=this.nls.selectByCircle:"POLYLINE"===d&&(w.innerHTML=this.nls.selectByLine));q.open({parent:this.getParent(),popup:this.tooltipDialog1,around:this.btnSelect,position:["below"]});0<=this._tooltipDialogClientX1&&(this.tooltipDialog1.domNode.parentNode.style.left=this._tooltipDialogClientX1+"px")}}),this._tooltipTimeout)})));this.own(k(this.btnSelect,h.leave,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);
this._tooltipDialogTimeoutId1=-1;this._hideTooltipDialog(this.tooltipDialog1)})));d=e.create("div",{innerHTML:this.nls.unselectAllSelectionTip,"class":"dialog-content"});this.tooltipDialog2=new x({content:d});e.addClass(this.tooltipDialog2.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(k(this.btnClear,"mousemove",b.hitch(this,function(d){this._tooltipDialogClientX2=d.clientX})));this.own(k(this.btnClear,h.enter,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);
this._tooltipDialogTimeoutId2=-1;this._tooltipDialogTimeoutId2=setTimeout(b.hitch(this,function(){this.tooltipDialog2&&(q.open({parent:this.getParent(),popup:this.tooltipDialog2,around:this.btnClear,position:["below"]}),0<=this._tooltipDialogClientX2&&(this.tooltipDialog2.domNode.parentNode.style.left=this._tooltipDialogClientX2+"px"))}),this._tooltipTimeout)})));this.own(k(this.btnClear,h.leave,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._hideTooltipDialog(this.tooltipDialog2)})))},
_onArrowClicked:function(d){d.stopPropagation();this._isDrawItemsVisible()?this._hideDrawItems():this._showDrawItems()},_setCurrentGeoInfo:function(d){var c=this._currentGeoTypeInfo&&this._currentGeoTypeInfo.geoType;this._currentGeoTypeInfo&&e.removeClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this._currentGeoTypeInfo=d;e.addClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this.isActive()?c!==this._currentGeoTypeInfo.geoType&&a.simulateClickEvent(this._currentGeoTypeInfo.dom2):
a.simulateClickEvent(this._currentGeoTypeInfo.dom2)},_isDrawItemsVisible:function(){return!e.hasClass(this.drawItems,"hidden")},_showDrawItems:function(){e.removeClass(this.drawItems,"hidden")},_hideDrawItems:function(){e.addClass(this.drawItems,"hidden")},_onDrawItemClicked:function(d,a){a.stopPropagation();this._hideDrawItems();this._setCurrentGeoInfo(d)},_initDrawBox:function(){this.drawBox=new y({map:this.map,showClear:!0,keepOneGraphic:!0,deactivateAfterDrawing:!1,geoTypes:this.geoTypes});this.own(k(this.drawBox,
"user-clear",b.hitch(this,this._onDrawBoxUserClear)));this.own(k(this.drawBox,"draw-end",b.hitch(this,this._onDrawEnd)));this.own(k(this.drawBox,"draw-activate",b.hitch(this,function(){this.map.infoWindow.hide();e.addClass(this.currentDrawItem,"pressed");e.addClass(this.btnSelect,"selected");g(".draw-item.selected",this.drawItems).removeClass("selected");e.addClass(this._currentGeoTypeInfo.dom1,"selected")})));this.own(k(this.drawBox,"draw-deactivate",b.hitch(this,function(){e.removeClass(this.currentDrawItem,
"pressed");e.removeClass(this.btnSelect,"selected");g(".draw-item.selected",this.drawItems).removeClass("selected")})));this.own(k(this.btnClear,"click",b.hitch(this,function(){a.simulateClickEvent(this.drawBox.btnClear)})))},disable:function(){this.drawBox.disable();e.addClass(this.domNode,"disabled")},enable:function(){this.drawBox.enable();e.removeClass(this.domNode,"disabled")},isActive:function(){return this.drawBox.isActive()},activate:function(){if(!this.isActive()){var d=this._currentGeoTypeInfo;
d||(d=this._geoTypeInfos[0]);this._setCurrentGeoInfo(d)}},deactivate:function(){this.drawBox.deactivate()},setFeatureLayers:function(d){var a=l.filter(this._instances,b.hitch(this,function(a){return 0>d.indexOf(a.featureLayer)}));l.forEach(a,b.hitch(this,function(a){this._removeInstance(a)}));var c=l.map(this._instances,b.hitch(this,function(a){return a.featureLayer}));l.forEach(d,b.hitch(this,function(a){0>c.indexOf(a)&&this.addFeatureLayer(a)}))},addFeatureLayer:function(a){"esri.layers.FeatureLayer"!==
a.declaredClass||this._findInstanceByLayer(a)||(a=new w({map:this.map,featureLayer:a,drawBox:this.drawBox,updateSelection:this.updateSelection,fullyWithin:this.fullyWithin}),this._instances.push(a))},removeFeatureLayer:function(a){"esri.layers.FeatureLayer"===a.declaredClass&&(a=this._findInstanceByLayer(a))&&this._removeInstance(a)},_removeInstance:function(a){if(a){var d=this._instances.indexOf(a);0<=d&&(a.destroy(),this._instances.splice(d,1))}},_findInstanceByLayer:function(a){var d=null;l.some(this._instances,
b.hitch(this,function(c){return c.featureLayer===a?(d=c,!0):!1}));return d},clear:function(a){l.forEach(this._instances,b.hitch(this,function(d){d.clear(a)}))},destroy:function(){this._hideTooltipDialog(this.tooltipDialog1);this._hideTooltipDialog(this.tooltipDialog2);l.forEach(this._instances,b.hitch(this,function(a){a.destroy()}));this._instances=[];this.drawBox&&this.drawBox.destroy();this.drawBox=null;this.inherited(arguments)},_hideTooltipDialog:function(a){a&&q.close(a)},_onDrawBoxUserClear:function(){this.clear(!0);
this.emit("user-clear")},_onDrawEnd:function(){this.drawBox.clear();0<this._instances.length&&setTimeout(b.hitch(this,function(){if(0<this._instances.length){this.emit("loading");this.disable();var d=l.map(this._instances,b.hitch(this,function(a){return a.getFeatures()}));m(d).always(b.hitch(this,function(){this.enable();this._currentGeoTypeInfo&&a.simulateClickEvent(this._currentGeoTypeInfo.dom2);this.emit("unloading")}))}}),50)}})})},"jimu/dijit/_FeatureSetChooserCore":function(){define("dojo/on dojo/sniff dojo/Evented dojo/Deferred dojo/_base/lang dojo/_base/array dojo/_base/declare jimu/utils jimu/symbolUtils jimu/SelectionManager jimu/LayerInfos/LayerInfos esri/graphic esri/tasks/query esri/tasks/QueryTask esri/layers/FeatureLayer esri/symbols/jsonUtils".split(" "),
function(k,c,h,g,f,e,b,l,m,n,u,r,p,v,q,x){return b([h],{baseClass:"jimu-featureset-chooser-core",_middleFeatureLayer:null,_isLoading:!1,_def:null,_isDestroyed:!1,_handles:null,selectionManager:null,layerInfosObj:null,map:null,featureLayer:null,drawBox:null,updateSelection:!1,fullyWithin:!1,constructor:function(a){f.mixin(this,a);this.layerInfosObj=u.getInstanceSync();this.selectionManager=n.getInstance();this.featureLayer.getSelectionSymbol()||this.selectionManager.setSelectionSymbol(this.featureLayer);
a=l.getFeatureLayerDefinition(this.featureLayer);delete a.id;this._middleFeatureLayer=new q({layerDefinition:a,featureSet:null},{id:"featureLayer_"+l.getRandomString()});a=null;var c=this._middleFeatureLayer.geometryType;"esriGeometryPoint"===c?a=m.getDefaultMarkerSymbol():"esriGeometryPolyline"===c?a=m.getDefaultLineSymbol():"esriGeometryPolygon"===c&&(a=x.fromJson({style:"esriSFSSolid",color:[79,129,189,77],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}}));
this._middleFeatureLayer.setSelectionSymbol(a);a=k(this.drawBox,"user-clear",f.hitch(this,this._onDrawBoxUserClear));c=k(this.drawBox,"draw-end",f.hitch(this,this._onDrawEnd));this._handles=[a,c]},hideMiddleFeatureLayer:function(){if(this._middleFeatureLayer){this._middleFeatureLayer.hide();var a=this.selectionManager.getDisplayLayer(this._middleFeatureLayer.id);a&&a.hide()}},showMiddleFeatureLayer:function(){if(this._middleFeatureLayer){this._middleFeatureLayer.show();var a=this.selectionManager.getDisplayLayer(this._middleFeatureLayer.id);
a&&a.show()}},clear:function(a){this.drawBox.clear();this._clearMiddleFeatureLayer();a&&this.selectionManager.clearSelection(this.featureLayer)},getFeatures:function(){var a=new g,c=f.hitch(this,function(){var c=this.syncGetFeatures();a.resolve(c)}),b=f.hitch(this,function(c){a.reject(c)});1===this._getDeferredStatus(this._def)?this._def.then(c,b):c();return a},syncGetFeatures:function(){return(this.updateSelection?this.featureLayer:this._middleFeatureLayer).getSelectedFeatures()},isLoading:function(){return 1===
this._getDeferredStatus(this._def)},_onLoading:function(){this.drawBox.deactivate();this.emit("loading")},_onUnloading:function(){this.emit("unloading")},_getDeferredStatus:function(a){var c=0;return c=a?a.isResolved()?2:a.isRejected()?-1:1:0},_onDrawEnd:function(a,b,e,d,k,t){console.log(b,e);if(this.isLoading())throw"should not draw when loading";if(this.featureLayer.visible){var h=new g;this._def=h;var l=q.SELECTION_NEW;d&&(l=q.SELECTION_ADD);c("mac")?t&&(l=q.SELECTION_SUBTRACT):k&&(l=q.SELECTION_SUBTRACT);
this._onLoading();this._getFeaturesByGeometry(a.geometry).then(f.hitch(this,function(a){this.selectionManager.updateSelectionByFeatures(this.updateSelection?this.featureLayer:this._middleFeatureLayer,a,l);this._onUnloading();h.resolve(a)}),f.hitch(this,function(a){console.error(a);this._onUnloading();h.reject(a)}))}},_getFeaturesByGeometry:function(a){var c=new g,b=[];if(this.featureLayer.getMap())a=this.selectionManager.getClientFeaturesByGeometry(this.featureLayer,a,this.fullyWithin),0<a.length&&
(b=e.map(a,f.hitch(this,function(a){return new r(a.toJson())}))),c.resolve(b);else{b=new p;b.geometry=a;b.outSpatialReference=this.map.spatialReference;b.returnGeometry=!0;b.spatialRelationship=this.fullyWithin?p.SPATIAL_REL_CONTAINS:p.SPATIAL_REL_INTERSECTS;(a=this.featureLayer.getDefinitionExpression())||(a="1\x3d1");var d=this.layerInfosObj.getLayerInfoById(this.featureLayer.id);d&&(d=d.getFilter())&&(a="("+a+") AND ("+d+")");a&&(b.where=a);b.outFields=["*"];(new v(this.featureLayer.url)).execute(b).then(f.hitch(this,
function(a){c.resolve(a.features)}),f.hitch(this,function(a){c.reject(a)}))}return c},_onDrawBoxUserClear:function(){this.clear()},_clearMiddleFeatureLayer:function(){this._middleFeatureLayer&&(this._middleFeatureLayer.clear(),this.selectionManager.clearSelection(this._middleFeatureLayer))},destroy:function(){this._isDestroyed||(e.forEach(this._handles,f.hitch(this,function(a){a.remove()})),this._handles=null,this.clear());this._isDestroyed=!0}})})},"widgets/Select/layerUtil":function(){define(["dojo/_base/array",
"dojo/promise/all","dojo/Deferred"],function(k,c,h){return{getLayerInfoArray:function(g){var f=new h,e=[];g.traversal(function(c){e.push(c)});g=k.map(e,function(c){return c.getLayerType()});c(g).then(function(c){var b=[];k.forEach(c,function(c,g){"FeatureLayer"===c&&b.push(e[g])});f.resolve(b)});return f}}})},"widgets/Select/SelectableLayerItem":function(){define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/event dojo/on dojo/Evented dojo/dom-geometry jimu/utils jimu/dijit/FeatureActionPopupMenu dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SelectableLayerItem.html ./ClearSelectionAction".split(" "),
function(k,c,h,g,f,e,b,l,m,n,u,r,p,v){return k([n,u,r,e],{baseClass:"selectable-layer-item",templateString:p,layerName:"layer",layerVisible:!0,checked:!1,allowExport:!1,inited:!1,postCreate:function(){this.inherited(arguments);this.popupMenu=m.getInstance()},init:function(b){this.featureLayer=b;b=this.featureLayer.getSelectedFeatures().length;this.layerName=this.layerInfo.title||"layer";this.selectedCountNode.innerHTML=b;0<b?c.removeClass(this.domNode,"no-action"):c.addClass(this.domNode,"no-action");
this.own(f(this.featureLayer,"selection-complete",h.hitch(this,function(){var b=this.featureLayer.getSelectedFeatures().length;this.selectedCountNode.innerHTML=b;0===b?c.addClass(this.domNode,"no-action"):c.removeClass(this.domNode,"no-action")})));this.own(f(this.featureLayer,"selection-clear",h.hitch(this,function(){this.selectedCountNode.innerHTML=0;c.addClass(this.domNode,"no-action")})));this.layerNameNode.innerHTML=this.layerName;this.layerNameNode.title=this.layerName;this.layerVisible||c.addClass(this.domNode,
"invisible");this.checked?c.addClass(this.selectableCheckBox,"checked"):c.removeClass(this.selectableCheckBox,"checked");this.own(f(this.selectableCheckBox,"click",h.hitch(this,this._toggleChecked)));this.own(f(this.layerContent,"click",h.hitch(this,this._toggleContent)));this.own(f(this.actionBtn,"click",h.hitch(this,this._showActions)));this.inited=!0;this.emit("inited")},isLayerVisible:function(){return this.layerVisible},isChecked:function(){return this.checked},updateLayerVisibility:function(){var b=
this.layerInfo.isShowInMap()&&this.layerInfo.isInScale();b!==this.layerVisible&&((this.layerVisible=b)?c.removeClass(this.domNode,"invisible"):c.addClass(this.domNode,"invisible"),this.emit("stateChange",{visible:this.layerVisible,layerInfo:this.layerInfo}))},_toggleChecked:function(b){g.stop(b);c.toggleClass(this.selectableCheckBox,"checked");this.checked=c.hasClass(this.selectableCheckBox,"checked");this.emit("stateChange",{checked:this.checked,layerInfo:this.layerInfo})},_toggleContent:function(b){g.stop(b);
c.hasClass(this.domNode,"no-action")||this.emit("switchToDetails",this)},_showActions:function(f){g.stop(f);if(!c.hasClass(this.domNode,"no-action")){var e=this.featureLayer.getSelectedFeatures(),a=l.toFeatureSet(e);this.popupMenu.prepareActions(a,this.allowExport).then(h.hitch(this,function(){var a=b.position(f.target);0<e.length&&this.popupMenu.appendAction(new v({folderUrl:this.folderUrl,data:this.featureLayer}));this.popupMenu.show(a,this.nls.actionsTitle)}))}}})})},"widgets/Select/ClearSelectionAction":function(){define(["dojo/_base/declare",
"jimu/BaseFeatureAction","jimu/SelectionManager"],function(k,c,h){return k(c,{name:"ClearSelection",iconClass:"icon-clear-selection",constructor:function(){this.label=window.jimuNls.featureActions.ClearSelection},isFeatureSupported:function(c){return 0<c.features.length&&c.geometryType},onExecute:function(c){h.getInstance().clearSelection(c)},getIcon:function(c){return this.folderUrl+"images/"+this.name+"_"+c+"."+this.iconFormat}})})},"widgets/Select/FeatureItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/event dojo/on dojo/dom-geometry dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./FeatureItem.html jimu/utils jimu/symbolUtils jimu/dijit/FeatureActionPopupMenu jimu/featureActions/PanTo jimu/featureActions/ShowPopup".split(" "),
function(k,c,h,g,f,e,b,l,m,n,u,r,p,v){return k([b,l],{baseClass:"graphic-item",templateString:m,allowExport:!1,postCreate:function(){this.inherited(arguments);var b;this.featureLayer&&this.featureLayer.renderer&&this.featureLayer.renderer.getSymbol?b=this.featureLayer.renderer.getSymbol(this.graphic):this.graphic.symbol&&(b=this.graphic.symbol);b&&(b=u.createSymbolNode(b,{width:36,height:36}),h.place(b,this.iconNode));this.popupMenu=r.getInstance();this.nameNode.innerHTML=this.graphic.attributes[this.displayField]||
this.graphic.attributes[this.objectIdField];this.nameNode.title=this.graphic.attributes[this.displayField]||this.graphic.attributes[this.objectIdField];this.own(f(this.actionBtn,"click",c.hitch(this,this._showActions)));this.own(f(this.iconNode,"click",c.hitch(this,this._highlight)));this.own(f(this.nameNode,"click",c.hitch(this,this._highlight)))},_highlight:function(){var c=n.toFeatureSet([this.graphic]),b=new p({map:this.map});(new v({map:this.map})).onExecute(c);b.onExecute(c)},_showActions:function(b){g.stop(b);
var f=n.toFeatureSet([this.graphic]);this.popupMenu.prepareActions(f,this.allowExport).then(c.hitch(this,function(){var a=e.position(b.target);this.popupMenu.show(a)}))}})})},"widgets/Select/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:jimu/dijit/templates/FeatureSetChooserForMultipleLayers.html":'\x3cdiv class\x3d"jimu-not-selectable"\x3e\r\n  \x3cdiv class\x3d"draw-item-btn"\x3e\r\n    \x3cdiv class\x3d"current-draw-item" data-dojo-attach-point\x3d"currentDrawItem"\x3e\r\n      \x3cdiv class\x3d"btn-select" data-dojo-attach-point\x3d"btnSelect"\x3e\r\n        \x3cdiv class\x3d"select-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"select-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"arrow jimu-float-trailing" data-dojo-attach-event\x3d"click:_onArrowClicked"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"draw-items hidden" data-dojo-attach-point\x3d"drawItems"\x3e\r\n      \x3cdiv class\x3d"draw-item draw-item-rectangle" data-dojo-attach-point\x3d"rectangleItem"\x3e\r\n        \x3cdiv class\x3d"draw-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"draw-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"draw-item draw-item-polygon" data-dojo-attach-point\x3d"polygonItem"\x3e\r\n        \x3cdiv class\x3d"draw-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"draw-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"draw-item draw-item-circle" data-dojo-attach-point\x3d"circleItem"\x3e\r\n        \x3cdiv class\x3d"draw-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"draw-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"draw-item draw-item-polyline" data-dojo-attach-point\x3d"polylineItem"\x3e\r\n        \x3cdiv class\x3d"draw-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"draw-text"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"btn-clear" data-dojo-attach-point\x3d"btnClear"\x3e\r\n    \x3cdiv class\x3d"clear-icon"\x3e\x3c/div\x3e\x3cdiv class\x3d"clear-text"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/SelectableLayerItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-row" data-dojo-attach-point\x3d"layerContent"\x3e\r\n    \x3cdiv class\x3d"selectable-check" title\x3d"${nls.toggleSelectability}"\r\n         data-dojo-attach-point\x3d"selectableCheckBox"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-name jimu-ellipsis" data-dojo-attach-point\x3d"layerNameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"selected-num" data-dojo-attach-point\x3d"selectedCountNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"popup-menu-button" title\x3d"${nls.showActions}"\r\n    data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/FeatureItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"feature-item-row"\x3e\r\n    \x3cdiv class\x3d"feature-icon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"light-label label-node jimu-ellipsis" data-dojo-attach-point\x3d"nameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"action-btn popup-menu-button" title\x3d"${nls.showActions}"\r\n     data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/Select/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-node" data-dojo-attach-point\x3d"layerListNode"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"select-dijit-container" data-dojo-attach-point\x3d"selectDijitNode"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"seperator"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-nodes" \x3e\r\n      \x3cdiv class\x3d"layer-items" data-dojo-attach-point\x3d"layerItemsNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"details-node" data-dojo-attach-point\x3d"detailsNode"\x3e\r\n    \x3cdiv class\x3d"header"\x3e\r\n      \x3cdiv class\x3d"switch-back jimu-float-leading" data-dojo-attach-point\x3d"switchBackBtn"\x3e\r\n        \x3cdiv class\x3d"feature-action" data-dojo-attach-point\x3d"switchBackIcon"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"layer-name jimu-ellipsis" data-dojo-attach-point\x3d"selectedLayerName"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"content" data-dojo-attach-point\x3d"featureContent"\x3e\r\n\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/css/style.css":'.jimu-widget-select {width: 100%; height: 100%; min-width: 280px; overflow: hidden;}.jimu-widget-select .jimu-viewstack {height: 100%;}.jimu-widget-select .jimu-viewstack .view {position: relative;}.jimu-widget-select .seperator {width: 100%; height: 1px; background: #D7D7D7; margin: 20px 0;}.jimu-widget-select .title {font-family: "Avenir Light"; font-size: 12px; line-height: 16px; color: #000000; margin: 20px 0;}.jimu-widget-select .normal-label, .jimu-widget-select .light-label, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .selectable-layer-item .layer-row .selected-num, .jimu-widget-select .medium-label {line-height: 36px; height: 36px; font-size: 12px; color: #000000;}.jimu-widget-select .light-label, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .selectable-layer-item .layer-row .selected-num {font-family: "Avenir Light";}.jimu-widget-select .medium-label {font-family: "Avenir Medium";}.jimu-widget-select .layer-nodes {position: absolute; top: 65px; bottom: 0; width: 100%; overflow: auto;}.jimu-widget-select .selectable-layer-item {width: 100%; height: 36px; position: relative;}.jimu-widget-select .selectable-layer-item .layer-row {height: 36px; position: relative; cursor: pointer;}.jimu-widget-select .selectable-layer-item .layer-row \x3e div {display: inline-block;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check {width: 36px; height: 36px; cursor: pointer; background: url(images/unchecked.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check:hover {background: url(images/unchecked_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check.checked {background: url(images/checked.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .selectable-check.checked:hover {background: url(images/checked_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item .layer-row .layer-name {margin: 0 5px; position: absolute; left: 36px; right: 72px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .layer-name {left: 72px; right: 36px;}.jimu-widget-select .selectable-layer-item .layer-row .selected-num {width: 36px; margin: 0 5px; text-align: center; position: absolute; right: 36px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .selected-num {right: auto; left: 36px;}.jimu-widget-select .selectable-layer-item .layer-row .popup-menu-button {position: absolute; right: 0;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .popup-menu-button {right: auto; left: 0;}.jimu-widget-select .selectable-layer-item:hover {background-color: #E5E5E5;}.jimu-widget-select .selectable-layer-item:hover .selected-num {font-weight: bold;}.jimu-widget-select .selectable-layer-item.no-action .selected-num {font-weight: normal;}.jimu-widget-select .selectable-layer-item.no-action:hover {background-color: #FFFFFF;}.jimu-widget-select .selectable-layer-item.no-action .layer-row {cursor: default;}.jimu-widget-select .selectable-layer-item.no-action .selected-num {color: #B7B7B7;}.jimu-widget-select .selectable-layer-item.no-action .selected-num:hover {font-weight: normal;}.jimu-widget-select .selectable-layer-item.no-action .popup-menu-button {background: url(images/more_disabled.svg) no-repeat center; cursor: default; background-color: #FFFFFF;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check {background: url(images/unchecked_invisible.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check:hover {background: url(images/unchecked_invisible_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check.checked {background: url(images/checked_invisible.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check.checked:hover {background: url(images/checked_invisible_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .layer-name {color: #B7B7B7;}.jimu-widget-select .details-node {widows: 100%;}.jimu-widget-select .details-node .header {height: 40px; text-align: center;}.jimu-widget-select .details-node .header .switch-back {width: 40px; height: 40px;}.jimu-widget-select .details-node .header .switch-back .feature-action {margin: 12px;}.jimu-widget-select .details-node .header .layer-name {font-family: "Avenir Medium"; font-size: 14px; font-size: 14px; color: #000000; height: 40px; line-height: 40px;}.jimu-widget-select .details-node .content {position: absolute; top: 40px; bottom: 0; width: 100%; overflow: auto;}.jimu-widget-select .details-node .content .graphic-item {height: 36px; width: 100%; position: relative;}.jimu-widget-select .details-node .content .graphic-item:hover {background: #E5E5E5;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row {position: relative; height: 36px; cursor: pointer;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .feature-icon {position: absolute; left: 0; width: 36px; height: 36px;}.jimu-rtl .jimu-widget-select .details-node .content .graphic-item .feature-item-row .feature-icon {left: auto; right: 0;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .action-btn {position: absolute; right: 0;}.jimu-rtl .jimu-widget-select .details-node .content .graphic-item .feature-item-row .action-btn {right: auto; left: 0;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .label-node {position: absolute; left: 36px; right: 36px; margin: 0 10px;}',
"*now":function(k){k(['dojo/i18n!*preload*widgets/Select/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/promise/all dijit/_WidgetsInTemplateMixin esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/symbols/jsonUtils esri/Color jimu/BaseWidget jimu/WidgetManager jimu/dijit/ViewStack jimu/dijit/FeatureSetChooserForMultipleLayers jimu/LayerInfos/LayerInfos jimu/SelectionManager ./layerUtil ./SelectableLayerItem ./FeatureItem jimu/dijit/LoadingShelter".split(" "),function(k,
c,h,g,f,e,b,l,m,n,u,r,p,v,q,x,a,y,w,d,z){return k([p,b],{baseClass:"jimu-widget-select",postMixInProperties:function(){this.inherited(arguments);c.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);var b=new r(this.config.selectionColor);this.defaultPointSymbol=new l(l.STYLE_CIRCLE,16,null,b);this.defaultLineSymbol=new m(m.STYLE_SOLID,b,2);this.defaultFillSymbol=new n(n.STYLE_SOLID,this.defaultLineSymbol,new r([b.r,b.g,b.b,.3]));this.layerMapper={};this.layerObjectArray=
[];this.layerItems=[];this.selectDijit=new x({map:this.map,updateSelection:!0,fullyWithin:"wholly"===this.config.selectionMode,geoTypes:this.config.geometryTypes||["EXTENT"]});h.place(this.selectDijit.domNode,this.selectDijitNode);this.selectDijit.startup();this.own(f(this.selectDijit,"user-clear",c.hitch(this,this._clearAllSelections)));this.own(f(this.selectDijit,"loading",c.hitch(this,function(){this.shelter.show()})));this.own(f(this.selectDijit,"unloading",c.hitch(this,function(){this.shelter.hide()})));
this.viewStack=new q({viewType:"dom",views:[this.layerListNode,this.detailsNode]});h.place(this.viewStack.domNode,this.domNode);this.own(f(this.switchBackBtn,"click",c.hitch(this,this._switchToLayerList)));window.isRTL?h.addClass(this.switchBackIcon,"icon-arrow-forward"):h.addClass(this.switchBackIcon,"icon-arrow-back");this._switchToLayerList();var d=a.getInstanceSync();w.getLayerInfoArray(d).then(c.hitch(this,function(a){this._initLayers(a)}));this.own(f(d,"layerInfosChanged",c.hitch(this,function(){this.shelter.show();
w.getLayerInfoArray(d).then(c.hitch(this,function(a){this._initLayers(a)}))})));this.own(f(d,"layerInfosIsShowInMapChanged",c.hitch(this,this._layerVisibilityChanged)));this.own(f(this.map,"zoom-end",c.hitch(this,this._layerVisibilityChanged)))},onDeActive:function(){this.selectDijit.isActive()&&this.selectDijit.deactivate();this._restoreSelectionSymbol()},onActive:function(){this._setSelectionSymbol();this.selectDijit.isActive()||this.selectDijit.activate()},onOpen:function(){v.getInstance().activateWidget(this)},
onDestroy:function(){this.selectDijit.isActive()&&this.selectDijit.deactivate();this._clearAllSelections()},_initLayers:function(a){this.layerObjectArray=[];this.layerItems=[];this.selectionSymbols={};h.empty(this.layerItemsNode);this.shelter.show();e(this._obtainLayerObjects(a)).then(c.hitch(this,function(b){g.forEach(b,c.hitch(this,function(b,g){if(b&&b.objectIdField&&b.geometryType){var e=a[g],t=e.isShowInMap()&&e.isInScale(),e=new d({layerInfo:e,checked:t,layerVisible:t,folderUrl:this.folderUrl,
allowExport:this.config?this.config.allowExport:!1,map:this.map,nls:this.nls});this.own(f(e,"switchToDetails",c.hitch(this,this._switchToDetails)));this.own(f(e,"stateChange",c.hitch(this,function(){this.shelter.show();this.selectDijit.setFeatureLayers(this._getSelectableLayers());this.shelter.hide()})));e.init(b);h.place(e.domNode,this.layerItemsNode);e.startup();this.layerItems.push(e);this.layerObjectArray.push(b);b.getSelectionSymbol()||this._setDefaultSymbol(b);e=b.getSelectionSymbol();this.selectionSymbols[b.id]=
e.toJson()}}));this.selectDijit.setFeatureLayers(this._getSelectableLayers());this._setSelectionSymbol();this.shelter.hide()}))},_setSelectionSymbol:function(){g.forEach(this.layerObjectArray,function(a){this._setDefaultSymbol(a)},this)},_setDefaultSymbol:function(a){"esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType?a.setSelectionSymbol(this.defaultPointSymbol):"esriGeometryPolyline"===a.geometryType?a.setSelectionSymbol(this.defaultLineSymbol):"esriGeometryPolygon"===
a.geometryType?a.setSelectionSymbol(this.defaultFillSymbol):console.warn("unknown geometryType: "+a.geometryType)},_restoreSelectionSymbol:function(){g.forEach(this.layerObjectArray,function(a){var b=this.selectionSymbols[a.id];b&&a.setSelectionSymbol(u.fromJson(b))},this)},_layerVisibilityChanged:function(){g.forEach(this.layerItems,function(a){a.updateLayerVisibility()},this)},_getSelectableLayers:function(){var a=[];g.forEach(this.layerItems,function(b){b.isLayerVisible()&&b.isChecked()&&a.push(b.featureLayer)},
this);return a},_clearAllSelections:function(){var a=y.getInstance();g.forEach(this.layerObjectArray,function(b){a.clearSelection(b)})},_obtainLayerObjects:function(a){return g.map(a,function(a){return a.getLayerObject()})},_switchToDetails:function(a){h.empty(this.featureContent);this.viewStack.switchView(1);this.selectedLayerName.innerHTML=a.layerName;this.selectedLayerName.title=a.layerName;a.layerInfo.getLayerObject().then(c.hitch(this,function(a){var b=a.getSelectedFeatures();0<b.length&&g.forEach(b,
c.hitch(this,function(b){b=new z({graphic:b,map:this.map,featureLayer:a,displayField:a.displayField,objectIdField:a.objectIdField,allowExport:this.config?this.config.allowExport:!1,nls:this.nls});h.place(b.domNode,this.featureContent);b.startup()}))}))},_switchToLayerList:function(){this.viewStack.switchView(0)}})});