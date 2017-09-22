// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/resultrenderers/FeatureSetRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"output-label" data-dojo-attach-point\x3d"labelNode"\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"labelContent"\x3e${nls.drawnOnMap}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"clear-node" data-dojo-attach-point\x3d"clearNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"popup-menu-button" data-dojo-attach-point\x3d"exportNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-attr dojo/on dojo/dom-geometry dijit/_TemplatedMixin esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/graphicsUtils esri/renderers/SimpleRenderer esri/renderers/jsonUtils esri/InfoTemplate jimu/dijit/FeatureActionPopupMenu dojo/text!./FeatureSetRenderer.html ../BaseResultRenderer ../LayerOrderUtil ./defaultSymbol ../utils".split(" "),function(p,f,g,e,l,m,q,r,t,u,v,h,w,x,y,z,A,B,k,C){return p([A,r],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",
templateString:z,postCreate:function(){this.inherited(arguments);this.popupMenu=y.getInstance();this.value.features&&0<this.value.features.length?(this._displayText(),this._drawResultFeature(this.param,this.value)):(e.set(this.clearNode,"display","none"),e.set(this.exportNode,"display","none"),this.labelContent.innerHTML=this.nls.emptyResult)},destroy:function(){this.resultLayer&&this.map.removeLayer(this.resultLayer);this.inherited(arguments)},_displayText:function(){e.set(this.clearNode,"display",
"");l.set(this.clearNode,"title",this.nls.clear);this.own(m(this.clearNode,"click",f.hitch(this,function(){this.resultLayer&&(this.map.infoWindow.isShowing&&this.map.infoWindow.hide(),this.resultLayer.clear(),this.map.removeLayer(this.resultLayer));e.set(this.exportNode,"display","none");e.set(this.clearNode,"display","none");this.labelContent.innerHTML=this.nls.cleared})));e.set(this.exportNode,"display","");l.set(this.exportNode,"title",this.nls.exportOutput);this.own(m(this.exportNode,"click",
f.hitch(this,this._showActions)))},_showActions:function(a){this.popupMenu.prepareActions(this.value,this.config.showExportButton).then(f.hitch(this,function(){var b=q.position(a.target);this.popupMenu.show(b)}))},_drawResultFeature:function(a,b){var c,d=C.useDynamicSchema(a,this.config);if(!a.popup||d)a.popup={enablePopup:!0,title:"",fields:[]};a.popup.enablePopup&&(c=new x(a.popup.title||"${Non-Exist-Field}",this._generatePopupContent(b,d)));if(this.config.shareResults&&!d){if(!a.defaultValue||
!a.defaultValue.geometryType)throw Error("Output parameter default value does not provide enough information to draw feature layer.");a.defaultValue.name=a.name;this.resultLayer=new u({layerDefinition:a.defaultValue,featureSet:null},{id:this.widgetUID+a.name,infoTemplate:c})}else this.resultLayer=new t({id:this.widgetUID+a.name,infoTemplate:c});g.forEach(b.features,function(a){this.resultLayer.add(a)},this);this.resultLayer.title=a.label||a.name;c=a.renderer;d||!c?"esriGeometryPoint"===b.geometryType||
"esriGeometryMultipoint"===b.geometryType?c=new h(k.pointSymbol):"esriGeometryPolyline"===b.geometryType?c=new h(k.lineSymbol):"esriGeometryPolygon"===b.geometryType&&(c=new h(k.polygonSymbol)):c=w.fromJson(c);this.resultLayer.setRenderer(c);this._addResultLayer(a.name);try{if(b.features&&0<b.features.length&&b.features[0].geometry){var n=v.graphicsExtent(b.features);n&&(this.resultLayer.fullExtent=n.expand(1.4),this.map.setExtent(this.resultLayer.fullExtent))}}catch(D){console.error(D)}},_addResultLayer:function(a){var b=
new B(this.config,this.map);try{b.calculateLayerIndex(a,this.widgetUID).then(f.hitch(this,function(a){-1!==a?this.map.addLayer(this.resultLayer,a):this.map.addLayer(this.resultLayer)}))}catch(c){console.error(c.message),console.warn("Draw result feature set on the top of map"),this.map.addLayer(this.resultLayer)}},_generatePopupContent:function(a,b){var c="",d;d=!b&&this.param.popup.fields&&0<this.param.popup.fields.length?g.filter(this.param.popup.fields,f.hitch(this,function(a){return!1!==a.visible})):
a.fields;g.forEach(d,function(a){c+='\x3ctr valign\x3d"top"\x3e\x3ctd class\x3d"attr-name"\x3e'+a.alias+'\x3c/td\x3e\x3ctd class\x3d"attr-value"\x3e${'+a.name+"}\x3c/td\x3e\x3c/tr\x3e"});return'\x3cdiv class\x3d"geoprocessing-popup"\x3e\x3ctable class\x3d"geoprocessing-popup-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3ctbody\x3e'+c+"\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e"}})});