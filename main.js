
(function(Application, GUI, Dialogs, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // APPLICATION
  /////////////////////////////////////////////////////////////////////////////

  function AppAgileDeviceManagerInterface(args, metadata) {
    Application.apply(this, ['AppAgileDeviceManagerInterface', args, metadata, {
      src: '',
      title: metadata.name,
      icon: metadata.icon,
      width: 960,
      height: 640,
      allow_resize: true,
      allow_restore: true,
      allow_maximize: true
    }]);

     var src = document.location.protocol + "//" + document.location.hostname + ":2000";

    this.options.src = src;
  }

  AppAgileDeviceManagerInterface.prototype = Object.create(Application.prototype);

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.AppAgileDeviceManagerInterface = OSjs.Applications.AppAgileDeviceManagerInterface || {};
  OSjs.Applications.AppAgileDeviceManagerInterface.Class = AppAgileDeviceManagerInterface;

})(OSjs.Helpers.IFrameApplication, OSjs.GUI, OSjs.Dialogs, OSjs.Utils, OSjs.API, OSjs.VFS);
