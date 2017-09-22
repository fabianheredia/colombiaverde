// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:themes/DashboardTheme/panels/MobilePanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"map-area" data-dojo-attach-point\x3d"mapNode"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"splitter" data-dojo-attach-point\x3d"splitterNode"\x3e\r\n    \x3cdiv class\x3d"splitter_handler" data-dojo-attach-point\x3d"splitterHandler"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"widget-area" data-dojo-attach-point\x3d"widgetContainerNode"\x3e\r\n    \x3cdiv class\x3d"panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"panel-header"\x3e\r\n      \x3cdiv class\x3d"previous-arrow jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"previousArrow"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"next-arrow  jimu-float-trailing jimu-trailing-margin1" data-dojo-attach-point\x3d"nextArrow"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"label" data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"panel-footer" data-dojo-attach-point\x3d"footerNode"\x3e\r\n      \x3cdiv class\x3d"count jimu-float-trailing jimu-trailing-margin2" data-dojo-attach-point\x3d"countNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dijit/_WidgetBase dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/dom-class dojo/on dojo/query dojo/debounce dojo/Evented dojo/dnd/move dojo/_base/fx dojo/fx dijit/_TemplatedMixin dojo/text!./Panel.html".split(" "),function(u,m,v,w,q,n,c,p,r,x,y,z,A,g,t,B,C){return u([w,B,z],{baseClass:"jimu-dnd-mobile-panel",templateString:C,mobileLayout:1,layoutId:"",mapId:"",widgetIds:null,panels:null,currentIndex:0,leftPos:0,count:"",title:"",
widgetMode:0,layoutManager:null,_moveStartX:0,_moveStartY:0,postCreate:function(){this.inherited(arguments);this.setMobileLayout(this.mobileLayout);q.place(this.mapId,this.mapNode);this.own(r(this.previousArrow,"click",m.hitch(this,this._switchPrevious)));this.own(r(this.nextArrow,"click",m.hitch(this,this._switchNext)));this._initSplitter();c.set(this.footerNode,"opacity","0");this.resize()},clearPanels:function(){this.widgetIds=[];this.panels=[];q.empty(this.containerNode);c.set(this.containerNode,
"left",0);this.currentIndex=0;this._updateHeader(this.currentIndex-1,this.currentIndex)},setPanels:function(a,b){this.widgetIds=a;this.panels=b||{};this.currentIndex=0;1>=this.widgetIds.length?(c.set(this.previousArrow,"display","none"),c.set(this.nextArrow,"display","none")):(c.set(this.previousArrow,"display","block"),c.set(this.nextArrow,"display","block"));c.set(this.footerNode,"opacity","0");this._openPanel();this._updateHeader(this.currentIndex-1,this.currentIndex)},_openPanel:function(){var a=
this.widgetIds[this.currentIndex],b=this.panels[a],d;if(b&&b.domNode){if(0===x('div[data-widgetId\x3d"'+a+'"]',this.containerNode).length){var k=q.create("div",{"data-widgetId":a,"class":"dnd-mobile-container"},this.containerNode);b.placeAt(k)}this.layoutManager.panelManager.openPanel(b)}else this.layoutManager._loadDashboardWidget(this.widgetIds[this.currentIndex]).then(m.hitch(this,function(b){if(b){var d=q.create("div",{"data-widgetId":a,"class":"dnd-mobile-container"},this.containerNode);b.placeAt(d);
this.panels[a]=b;this.layoutManager.panelManager.openPanel(b);this.labelNode.innerHTML=b.config.label}}));v.forEach(this.widgetIds,m.hitch(this,function(b){b!==a&&(d=this.panels[b])&&this.layoutManager.panelManager.closePanel(d)}))},_initSplitter:function(){this.moveable&&this.moveable.destroy();this.moveable=new A.parentConstrainedMoveable(this.splitterNode,{area:"content",within:!0});this.own(r(this.moveable,"MoveStart",m.hitch(this,this.onMoveStart)));this.own(r(this.moveable,"Moving",y(m.hitch(this,
this.onMoving),50)));this.own(r(this.moveable,"MoveStop",m.hitch(this,this.onMoveStop)))},destroy:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null);var a=this.panels[this.widgetIds[this.currentIndex]];a&&this.layoutManager.panelManager.closePanel(a);q.empty(this.containerNode);this.inherited(arguments)},setMobileLayout:function(a){2===a?(this.mobileLayout=2,p.remove(this.domNode,"portrait"),p.add(this.domNode,"landscape")):(this.mobileLayout=1,p.remove(this.domNode,"landscape"),
p.add(this.domNode,"portrait"))},resize:function(){2===this.mobileLayout?this._restoreLandscapeLayout():this._restorePortraitLayout();var a=n.getMarginBox(this.widgetContainerNode);this.emit("resized",{left:a.l,top:a.t,width:a.w,height:a.h})},_updateHeader:function(a,b){if(this.widgetIds&&0<this.widgetIds.length){var d=this.widgetIds[b],k=this.widgetIds[a],f=this.panels[d],e=this.panels[k];this.countNode.innerHTML=b+1+"/"+this.widgetIds.length;a&&e&&(k=e.getWidgetById(k),k.onDeActive());if(f){if(d=
f.getWidgetById(d))d.onActive(),this.labelNode.innerHTML=d.label}else this.labelNode.innerHTML=""}else this.labelNode.innerHTML="",this.countNode.innerHTML="";0===b?p.add(this.previousArrow,"disabled"):p.remove(this.previousArrow,"disabled");b===this.widgetIds.length-1?p.add(this.nextArrow,"disabled"):p.remove(this.nextArrow,"disabled")},_switchPrevious:function(){0<this.currentIndex&&(this._updateHeader(this.currentIndex,this.currentIndex-1),this.currentIndex--,this._play())},_switchNext:function(){this.currentIndex<
this.widgetIds.length-1&&(this._updateHeader(this.currentIndex,this.currentIndex+1),this.currentIndex++,this._play())},_play:function(){var a=n.getMarginBox(this.containerNode);g.animateProperty({node:this.containerNode,duration:300,properties:{left:-this.currentIndex*a.w},onEnd:m.hitch(this,function(){c.set(this.footerNode,"opacity","1");g.animateProperty({node:this.footerNode,duration:2100,properties:{opacity:0}}).play()})}).play();this._openPanel()},onMoveStart:function(a){this._moveStartX=c.get(a.node,
"left");this._moveStartY=c.get(a.node,"top")},onMoving:function(a){if(a&&a.node){var b=c.get(a.node,"left")-this._moveStartX;a=c.get(a.node,"top")-this._moveStartY;1===this.mobileLayout?(c.set(this.widgetContainerNode,"top",this._moveStartY+a+16+"px"),c.set(this.splitterNode,"top",this._moveStartY+a+"px"),c.set(this.splitterNode,"left","0")):2===this.mobileLayout&&(c.set(this.widgetContainerNode,"left",this._moveStartX+b+16+"px"),c.set(this.splitterNode,"left",this._moveStartX+b+"px"),c.set(this.splitterNode,
"top","0"))}},onMoveStop:function(a){var b=c.get(a.node,"left")-this._moveStartX;a=c.get(a.node,"top")-this._moveStartY;1===this.mobileLayout?this._resizeWidgetVertically(a):2===this.mobileLayout&&this._resizeWidgetHorizontally(b)},_resizeWidgetVertically:function(a){var b=n.getMarginBox(this.layoutId),d=n.getMarginBox(this.containerNode).h/3,k=!1,f=[],d=150<d?150:d,e,c,l,h;if(0===this.widgetMode&&a<-d)this.widgetMode=2,e=0,c=.6*-b.h,l=.6*b.h,h=b.h-16,k=!0,this.emit("resized",{left:0,top:e+16,width:b.w,
height:h});else if(0===this.widgetMode&&a>d)this.widgetMode=1,e=b.h-16,l=b.h-16,c=0,h=.4*b.h-16,k=!0,this.emit("resized",{left:0,top:e+16,width:b.w,height:h});else if(1===this.widgetMode&&a<-d||2===this.widgetMode&&a>d)this.widgetMode=0,e=.6*b.h,l=.6*b.h,c=0,h=.4*b.h-16,k=!0,this.emit("resized",{left:0,top:e+16,width:b.w,height:h});k?(f.push(g.animateProperty({node:this.widgetContainerNode,duration:300,properties:{top:e+16,height:h}})),f.push(g.animateProperty({node:this.containerNode,duration:300,
properties:{left:-this.currentIndex*b.w,width:b.w}})),f.push(g.animateProperty({node:this.splitterNode,duration:300,properties:{top:e}})),f.push(g.animateProperty({node:this.mapNode,duration:300,properties:{height:l,top:c}})),t.combine(f).play()):this._restorePortraitLayout()},_resizeWidgetHorizontally:function(a){var b=n.getMarginBox(this.layoutId),d=n.getMarginBox(this.containerNode).w/3,k=!1,f=[],d=150<d?150:d,e,c,l,h;if(0===this.widgetMode&&a<-d)this.widgetMode=2,e=0,l=b.w-320-16,c=-l,h=b.w-16,
k=!0,this.emit("resized",{left:e+16,top:0,width:h,height:b.h});else if(0===this.widgetMode&&a>d)this.widgetMode=1,e=l=b.w-16,c=0,h=320,k=!0,this.emit("resized",{left:e+16,top:0,width:h,height:b.h});else if(1===this.widgetMode&&a<-d||2===this.widgetMode&&a>d)this.widgetMode=0,e=l=b.w-320-16,c=0,h=320,k=!0,this.emit("resized",{left:e+16,top:0,width:h,height:b.h});k?(f.push(g.animateProperty({node:this.widgetContainerNode,duration:300,properties:{left:e+16,width:h}})),f.push(g.animateProperty({node:this.containerNode,
duration:300,properties:{left:-this.currentIndex*h,width:h}})),f.push(g.animateProperty({node:this.splitterNode,duration:300,properties:{left:e}})),f.push(g.animateProperty({node:this.mapNode,duration:300,properties:{width:l,left:c}})),t.combine(f).play()):this._restoreLandscapeLayout()},_restorePortraitLayout:function(){var a=n.getMarginBox(this.layoutId),b=[],d,c,f,e;0===this.widgetMode?(d=.6*a.h,f=.6*a.h,c=0,e=a.h-f-16):2===this.widgetMode?(d=0,c=.6*-a.h,f=.6*a.h,e=a.h-16):1===this.widgetMode&&
(d=a.h-16,f=a.h-16,c=0,e=.4*a.h-16);b.push(g.animateProperty({node:this.widgetContainerNode,duration:300,properties:{left:0,top:d+16,height:e,width:a.w}}));b.push(g.animateProperty({node:this.containerNode,duration:300,properties:{left:-this.currentIndex*a.w,width:a.w}}));b.push(g.animateProperty({node:this.splitterNode,duration:300,properties:{top:d,left:0,width:a.w,height:16}}));b.push(g.animateProperty({node:this.mapNode,duration:300,properties:{height:f,width:a.w,top:c,left:0}}));t.combine(b).play()},
_restoreLandscapeLayout:function(){var a=n.getMarginBox(this.layoutId),b=[],d,c,f,e;0===this.widgetMode?(d=f=a.w-320-16,c=0,e=320):2===this.widgetMode?(d=0,f=a.w-320-16,c=-f,e=a.w-16):1===this.widgetMode&&(d=f=a.w-16,c=0,e=320);b.push(g.animateProperty({node:this.widgetContainerNode,duration:300,properties:{top:0,left:d+16,width:e,height:a.h}}));b.push(g.animateProperty({node:this.containerNode,duration:300,properties:{left:-this.currentIndex*e,width:e}}));b.push(g.animateProperty({node:this.splitterNode,
duration:300,properties:{left:d,top:0,height:a.h,width:16}}));b.push(g.animateProperty({node:this.mapNode,duration:300,properties:{width:f,height:a.h,left:c,top:0}}));t.combine(b).play()}})});