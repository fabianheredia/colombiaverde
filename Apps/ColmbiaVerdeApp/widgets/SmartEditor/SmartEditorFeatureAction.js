// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred jimu/BaseFeatureAction jimu/Role jimu/WidgetManager".split(" "),function(g,h,f,k,l,m,n){return g(l,{map:null,iconClass:"icon-edit",isFeatureSupported:function(a,b){var c=!1,d=b||f.getObject("_wabProperties.popupInfo.layerForActionWithEmptyFeatures",!1,this.map.infoWindow);if(!d)return c;var e=!1,c=this.appConfig.getConfigElementById(this.widgetId).config;c.editor.layerInfos?0===c.editor.layerInfos.length?e=!0:h.forEach(c.editor.layerInfos,
function(a){d.id===a.featureLayer.id&&(e=!0)}):e=!1;return c=e&&d.isEditable&&d.isEditable()?!0:!1},onExecute:function(a,b){var c=b||f.getObject("_wabProperties.popupInfo.layerForActionWithEmptyFeatures",!1,this.map.infoWindow),d=new k;n.getInstance().triggerWidgetOpen(this.widgetId).then(function(b){b.beginEditingByFeatures(a.features,c)});return d.promise},_checkEditPrivilege:function(a){var b=!0;a&&(b=new m({id:a.roleId?a.roleId:a.role,role:a.role}),a.privileges&&b.setPrivileges(a.privileges),
b=b.canEditFeatures());return b}})});