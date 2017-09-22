// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/LocateButton":function(){define("require dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../config dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/LocateButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style dojo/dom-attr ../geometry/webMercatorUtils ../geometry/Point ../SpatialReference ../graphic ../symbols/PictureMarkerSymbol ../tasks/ProjectParameters".split(" "),function(f,p,q,c,k,g,m,
e,v,w,t,n,x,y,h,u,r,z,A,B,C,D,E){f=q("esri.dijit.LocateButton",[e,w,p],{templateString:x,options:{theme:"LocateButton",map:null,visible:!0,highlightLocation:!0,symbol:new D(f.toUrl("./images/sdk_gps_location.png"),28,28),infoTemplate:null,scale:null,useTracking:!1,clearOnTrackingStop:!1,setScale:!0,centerAt:!0,timeout:15E3,graphicsLayer:null,geolocationOptions:{maximumAge:0,timeout:15E3,enableHighAccuracy:!0}},constructor:function(a,d){var b=c.mixin({},this.options,a);this.domNode=d;this._i18n=y;
var e=navigator.geolocation,l=window.hasOwnProperty("isSecureContext"),l=l&&window.isSecureContext||!l&&"https:"===window.location.protocol;l&&e||(b.visible=!1);e||console.log("LocateButton::navigator.geolocation unsupported.");l||console.log("LocateButton::navigator.geolocation requires a secure origin.");this.set("map",b.map);this.set("theme",b.theme);this.set("visible",b.visible);this.set("scale",b.scale);this.set("highlightLocation",b.highlightLocation);this.set("symbol",b.symbol);this.set("infoTemplate",
b.infoTemplate);this.set("geolocationOptions",b.geolocationOptions);this.set("useTracking",b.useTracking);this.set("setScale",b.setScale);this.set("centerAt",b.centerAt);this.set("timeout",b.timeout);this.set("graphicsLayer",b.graphicsLayer);this.set("clearOnTrackingStop",b.clearOnTrackingStop);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this.watch("tracking",this._locate);this.watch("useTracking",c.hitch(this,function(){this.get("tracking")&&!this.get("useTracking")&&
this._stopTracking();this._setTitle()}));this._css={container:"locateContainer",locate:"zoomLocateButton",loading:"loading",tracking:"tracking"}},postCreate:function(){this.inherited(arguments);this.own(t(this._locateNode,v,c.hitch(this,this.locate)))},startup:function(){this.inherited(arguments);this.get("map")||(this.set("visible",!1),console.log("LocateButton::map required"));if(this.get("map").loaded)this._init();else t.once(this.get("map"),"load",c.hitch(this,function(){this._init()}))},destroy:function(){this.clear();
this._graphicsEvent&&this._graphicsEvent.remove();this._removeWatchPosition();this.inherited(arguments)},clear:function(){var a=this.get("highlightGraphic"),d=this.get("graphicsLayer");a&&(d?d.remove(a):this.get("map").graphics.remove(a),this.set("highlightGraphic",null))},locate:function(){this.get("useTracking")&&this.set("tracking",!this.get("tracking"));return this._locate()},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_setTitle:function(){this.get("useTracking")?
this.get("tracking")?r.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.stopTracking):r.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.tracking):r.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.title)},_removeWatchPosition:function(){this.get("watchId")&&(navigator.geolocation.clearWatch(this.get("watchId")),this.set("watchId",null));this._removePrivateVars()},_stopTracking:function(){h.remove(this._locateNode,this._css.tracking);this._removeWatchPosition();
this.get("clearOnTrackingStop")&&this.clear();this._hideLoading()},_positionToObject:function(a){return a?{coords:c.mixin({},a.coords),timestamp:a.timestamp}:{}},_startTracking:function(){h.add(this._locateNode,this._css.tracking);this._removeWatchPosition();var a=navigator.geolocation.watchPosition(c.hitch(this,function(a){a=this._positionToObject(a);this._setPosition(a).then(c.hitch(this,function(a){this._locateEvent(a)}),c.hitch(this,function(a){a||(a=Error("LocateButton::Error setting the position."));
this._locateError(a)}))}),c.hitch(this,function(a){this.set("tracking",!1);a||(a=Error("LocateButton::Could not get tracking position."));this._locateError(a)}),this.get("geolocationOptions"));this.set("watchId",a)},_removePrivateVars:function(){this._scale=this._position=this._graphic=null},_getCurrentPosition:function(){var a=new n;this._removePrivateVars();var d=setTimeout(c.hitch(this,function(){clearTimeout(d);a.reject(Error("LocateButton::time expired for getting location."))}),this.get("timeout"));
navigator.geolocation.getCurrentPosition(c.hitch(this,function(b){b=this._positionToObject(b);clearTimeout(d);this._setPosition(b).then(c.hitch(this,function(b){a.resolve(b)}),c.hitch(this,function(b){b||(b=Error("LocateButton::Error setting map position."));a.reject(b)}))}),c.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));a.reject(b)}),this.get("geolocationOptions"));return a.promise},_locate:function(){var a=new n;this._showLoading();if(navigator.geolocation)this.get("useTracking")?
this.get("tracking")?(this._startTracking(),a.resolve({tracking:!0})):(this._stopTracking(),a.resolve({tracking:!1})):this._getCurrentPosition().then(c.hitch(this,function(b){this._locateEvent(b);a.resolve(b)}),c.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));this._locateError(b);a.reject(b)}));else{var d=Error("LocateButton::geolocation unsupported");this._locateError(d);a.reject(d)}this._setTitle();return a.promise},_projectPoint:function(a){var d=new n,b=this.get("map").spatialReference,
e=b.wkid;b.isWebMercator()?(a=z.geographicToWebMercator(a),d.resolve(a)):m.defaults.geometryService&&4326!==e?(e=new E,e.geometries=[a],e.outSR=b,m.defaults.geometryService.project(e).then(c.hitch(this,function(a){a&&a.length?d.resolve(a[0]):d.reject(Error("LocateButton::Point was not projected."))}),function(a){a||(a=Error("LocateButton::please specify a geometry service on esri/config to project."));d.reject(a)})):d.resolve(a);return d.promise},_getScale:function(a){var d=this.get("scale");return a&&
a.coords?d||a.coords.accuracy||5E4:d||5E4},_createPoint:function(a){var d;a&&a.coords&&(d=new A([a.coords.longitude,a.coords.latitude],new B({wkid:4326})));return d},_setPosition:function(a){var d=new n,b,e;this._removePrivateVars();if((this._position=a)&&a.coords){if(b=this._createPoint(a))this._graphic=e=this._createGraphic(b,a);var f=this._getScale(a);this._scale=f;b?this._projectPoint(b).then(c.hitch(this,function(b){this._graphic=e=this._createGraphic(b,a);var g={graphic:e,scale:f,position:a};
this.get("setScale")&&this.get("map").setScale(f);this.get("centerAt")?this.get("map").centerAt(b).then(c.hitch(this,function(){d.resolve(g)}),c.hitch(this,function(a){a||(a=Error("LocateButton::Could not center map."));d.reject(a)})):d.resolve(g)}),c.hitch(this,function(a){a||(a=Error("LocateButton::Error projecting point."));d.reject(a)})):(b=Error("LocateButton::Invalid point"),d.reject(b))}else b=Error("LocateButton::Invalid position"),d.reject(b);return d.promise},_createGraphic:function(a,d){var b;
a&&(b={position:d},b=new C(a,this.get("symbol"),b,this.get("infoTemplate")));return b},_locateEvent:function(a){if(a.graphic){var d=this.get("highlightGraphic"),b=this.get("graphicsLayer");d?(d.setGeometry(a.graphic.geometry),d.setAttributes(a.graphic.attributes),d.setInfoTemplate(a.graphic.infoTemplate),d.setSymbol(a.graphic.symbol)):(d=a.graphic,this.get("highlightLocation")&&(b?b.add(d):this.get("map").graphics.add(d)));this.set("highlightGraphic",d)}this._hideLoading();this.emit("locate",a)},
_locateError:function(a){a={graphic:this._graphic,scale:this._scale,position:this._position,error:a};this._hideLoading();this.emit("locate",a)},_showLoading:function(){this.get("useTracking")||h.add(this._locateNode,this._css.loading)},_hideLoading:function(){this.get("useTracking")||h.remove(this._locateNode,this._css.loading)},_init:function(){this._visible();this._setTitle();this.get("tracking")&&this.get("useTracking")&&this._locate();this.set("loaded",!0);this.emit("load",{})},_updateThemeWatch:function(a,
d,b){h.remove(this.domNode,d);h.add(this.domNode,b)},_visible:function(){this.get("visible")?u.set(this.domNode,"display","block"):u.set(this.domNode,"display","none")}});k("extend-esri")&&c.setObject("dijit.LocateButton",f,g);return f})},"widgets/MyLocation/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/LocateButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv class\x3d"${_css.container}"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_locateNode" role\x3d"button" class\x3d"${_css.locate}" tabindex\x3d"0"\x3e\x3cspan\x3e${_i18n.widgets.locateButton.locate.button}\x3c/span\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/MyLocation/css/style.css":'.jimu-widget-mylocation{border-radius: 5px; background-color: #ccc; background-color: rgba(0,0,0,0.2);}.jimu-widget-mylocation.onCenter {background-color: #000;}.jimu-widget-mylocation .place-holder {padding: 2px; width: 30px; height: 30px; background-color: #666; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer; -webkit-border-radius: 5px; -moz-border-radius: 5px; -o-border-radius: 5px; border-radius: 5px; background-image: url("images/locate.png"); background-position: center center; background-repeat: no-repeat;}.jimu-widget-mylocation .place-holder.locating{background-image: url("images/loading.gif");}.jimu-widget-mylocation .place-holder.tracking{background-image: url("images/stop.png") !important; background-color: #000;}.jimu-widget-mylocation .place-holder.nohttps{background-image: url("images/locate_disabled.png") !important;}.jimu-widget-mylocation .nohttps:hover{background-color: rgba(0,0,0,0) !important;}.jimu-widget-mylocation .place-holder{background-color: rgba(0,0,0,0);}.jimu-widget-mylocation.onLocate .place-holder{background-color: rgba(0,0,0,0.4);}.jimu-widget-mylocation.onCenter .place-holder{background-color: #000;}.jimu-widget-mylocation .place-holder:hover{background-color: rgba(0,0,0,0.4);}',
"*now":function(f){f(['dojo/i18n!*preload*widgets/MyLocation/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidget esri/dijit/LocateButton dojo/_base/html dojo/on dojo/_base/lang jimu/utils jimu/dijit/Message dojo/touch".split(" "),function(f,p,q,c,k,g,m){f=f([p],{name:"MyLocation",baseClass:"jimu-widget-mylocation",startup:function(){this.inherited(arguments);this.placehoder=c.create("div",{"class":"place-holder",title:this.label},this.domNode);this.isNeedHttpsButNot=m.isNeedHttpsButNot();!0===this.isNeedHttpsButNot?(console.log("LocateButton::navigator.geolocation requires a secure origin."),
c.addClass(this.placehoder,"nohttps"),c.setAttr(this.placehoder,"title",this.nls.httpNotSupportError)):window.navigator.geolocation?(this.own(k(this.placehoder,"click",g.hitch(this,this.onLocationClick))),this.own(k(this.map,"zoom-end",g.hitch(this,this._scaleChangeHandler)))):c.setAttr(this.placehoder,"title",this.nls.browserError)},onLocationClick:function(){c.hasClass(this.domNode,"onCenter")||c.hasClass(this.domNode,"locating")?(c.removeClass(this.domNode,"onCenter"),c.removeClass(this.placehoder,
"tracking"),this._destroyGeoLocate()):(this._createGeoLocate(),this.geoLocate.locate(),c.addClass(this.placehoder,"locating"))},_scaleChangeHandler:function(){var c=this.map.getScale();c&&this.geoLocate&&this.geoLocate.useTracking&&(this.geoLocate.scale=c)},onLocateOrError:function(c){if(c.error)this.onLocateError(c);else this.onLocate(c)},onLocate:function(e){c.removeClass(this.placehoder,"locating");this.geoLocate.useTracking&&c.addClass(this.placehoder,"tracking");if(e.error)this.onLocateError(e);
else c.addClass(this.domNode,"onCenter"),this.neverLocate=!1},onLocateError:function(e){console.error(e.error);c.removeClass(this.placehoder,"locating");c.removeClass(this.domNode,"onCenter");c.removeClass(this.placehoder,"tracking")},_createGeoLocate:function(){var c=this.config.locateButton;c.map=this.map;"undefined"===typeof this.config.locateButton.useTracking&&(c.useTracking=!0);c.centerAt=!0;c.setScale=!0;var f={maximumAge:0,timeout:15E3,enableHighAccuracy:!0};c.geolocationOptions&&(c.geolocationOptions=
g.mixin(f,c.geolocationOptions));this.geoLocate=new q(c);this.geoLocate.startup();this.geoLocate.own(k(this.geoLocate,"locate",g.hitch(this,this.onLocateOrError)))},_destroyGeoLocate:function(){this.geoLocate&&(this.geoLocate.clear(),this.geoLocate.destroy());this.geoLocate=null},destroy:function(){this._destroyGeoLocate();this.inherited(arguments)}});f.inPanel=!1;f.hasUIFile=!1;return f});