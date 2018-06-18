cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "mo-force-app-close.plugin",
    "file": "plugins/mo-force-app-close/www/plugin.js",
    "pluginId": "mo-force-app-close",
    "clobbers": [
      "MOForceAppClose"
    ],
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "es6-promise-plugin": "4.1.0",
  "cordova-plugin-screen-orientation": "2.0.2",
  "mo-force-app-close": "1.0.0"
};
// BOTTOM OF METADATA
});