// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/shared/BaseVersionManager"],function(e){function d(){this.versions=[{version:"1.0",upgrader:function(a){return a}},{version:"1.1",upgrader:function(a){return a}},{version:"1.2",upgrader:function(a){return a}},{version:"1.3",upgrader:function(a){return a}},{version:"1.4",upgrader:function(a){return a}},{version:"2.0Beta",upgrader:function(a){return a}},{version:"2.0",upgrader:function(a){return a}},{version:"2.0.1",upgrader:function(a){return a}},{version:"2.1",upgrader:function(a){return a}},
{version:"2.2",upgrader:function(a){return a}},{version:"2.3",upgrader:function(a){return a}},{version:"2.4",upgrader:function(a){return a}},{version:"2.5",upgrader:function(a){return a}},{version:"2.6",upgrader:function(a){for(var c=a.dijits,d,b=0;b<c.length;b++)"chart"===c[b].type&&(d=c[b].config.sortOrder,c[b].config.sortOrder={isLabelAxis:!0,isAsc:d?"asc"===d:!0},"feature"===c[b].config.mode&&(c[b].config.sortOrder.field=c[b].config.labelField),c[b].config.maxLabels=void 0,c[b].config.nullValue=
"feature"===c[b].config.mode||"count"===c[b].mode?void 0:!0,c[b].config.dateConfig=void 0,c[b].config.useLayerSymbology=void 0);return a}}]}d.prototype=new e;return d.prototype.constructor=d});