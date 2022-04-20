// third_party/blink/public/mojom/widget/visual_properties.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/widget/visual_properties.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var browser_controls_params$ =
      mojo.internal.exposeNamespace('cc.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'cc/mojom/browser_controls_params.mojom', '../../../../../cc/mojom/browser_controls_params.mojom.js');
  }
  var local_surface_id$ =
      mojo.internal.exposeNamespace('viz.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/viz/public/mojom/compositing/local_surface_id.mojom', '../../../../../services/viz/public/mojom/compositing/local_surface_id.mojom.js');
  }
  var display_mode$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/manifest/display_mode.mojom', '../manifest/display_mode.mojom.js');
  }
  var screen_info$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/widget/screen_info.mojom', 'screen_info.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }



  function VisualProperties(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VisualProperties.prototype.initDefaults_ = function() {
    this.screenInfo = null;
    this.autoResizeEnabled = false;
    this.scrollFocusedNodeIntoView = false;
    this.isFullscreenGranted = false;
    this.isPinchGestureActive = false;
    this.displayMode = display_mode$.DisplayMode.kUndefined;
    this.minSizeForAutoResize = null;
    this.maxSizeForAutoResize = null;
    this.newSize = null;
    this.visibleViewportSize = null;
    this.compositorViewportPixelRect = null;
    this.browserControlsParams = null;
    this.localSurfaceId = null;
    this.captureSequenceNumber = 0;
    this.pageScaleFactor = 1;
    this.zoomLevel = 0;
    this.compositingScaleFactor = 1;
    this.rootWidgetWindowSegments = null;
  };
  VisualProperties.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VisualProperties.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 112}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualProperties.screenInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, screen_info$.ScreenInfo, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VisualProperties.minSizeForAutoResize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualProperties.maxSizeForAutoResize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualProperties.newSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualProperties.visibleViewportSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualProperties.compositorViewportPixelRect
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, geometry$.Rect, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VisualProperties.browserControlsParams
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, browser_controls_params$.BrowserControlsParams, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VisualProperties.localSurfaceId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 64, local_surface_id$.LocalSurfaceId, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VisualProperties.displayMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, display_mode$.DisplayMode);
    if (err !== validator.validationError.NONE)
        return err;






    // validate VisualProperties.rootWidgetWindowSegments
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 96, 8, new codec.PointerTo(geometry$.Rect), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VisualProperties.encodedSize = codec.kStructHeaderSize + 104;

  VisualProperties.decode = function(decoder) {
    var packed;
    var val = new VisualProperties();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.screenInfo =
        decoder.decodeStructPointer(screen_info$.ScreenInfo);
    packed = decoder.readUint8();
    val.autoResizeEnabled = (packed >> 0) & 1 ? true : false;
    val.scrollFocusedNodeIntoView = (packed >> 1) & 1 ? true : false;
    val.isFullscreenGranted = (packed >> 2) & 1 ? true : false;
    val.isPinchGestureActive = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.displayMode =
        decoder.decodeStruct(new codec.Enum(display_mode$.DisplayMode));
    val.minSizeForAutoResize =
        decoder.decodeStructPointer(geometry$.Size);
    val.maxSizeForAutoResize =
        decoder.decodeStructPointer(geometry$.Size);
    val.newSize =
        decoder.decodeStructPointer(geometry$.Size);
    val.visibleViewportSize =
        decoder.decodeStructPointer(geometry$.Size);
    val.compositorViewportPixelRect =
        decoder.decodeStructPointer(geometry$.Rect);
    val.browserControlsParams =
        decoder.decodeStructPointer(browser_controls_params$.BrowserControlsParams);
    val.localSurfaceId =
        decoder.decodeStructPointer(local_surface_id$.LocalSurfaceId);
    val.captureSequenceNumber =
        decoder.decodeStruct(codec.Uint32);
    val.pageScaleFactor =
        decoder.decodeStruct(codec.Float);
    val.zoomLevel =
        decoder.decodeStruct(codec.Double);
    val.compositingScaleFactor =
        decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.rootWidgetWindowSegments =
        decoder.decodeArrayPointer(new codec.PointerTo(geometry$.Rect));
    return val;
  };

  VisualProperties.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VisualProperties.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(screen_info$.ScreenInfo, val.screenInfo);
    packed = 0;
    packed |= (val.autoResizeEnabled & 1) << 0
    packed |= (val.scrollFocusedNodeIntoView & 1) << 1
    packed |= (val.isFullscreenGranted & 1) << 2
    packed |= (val.isPinchGestureActive & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.displayMode);
    encoder.encodeStructPointer(geometry$.Size, val.minSizeForAutoResize);
    encoder.encodeStructPointer(geometry$.Size, val.maxSizeForAutoResize);
    encoder.encodeStructPointer(geometry$.Size, val.newSize);
    encoder.encodeStructPointer(geometry$.Size, val.visibleViewportSize);
    encoder.encodeStructPointer(geometry$.Rect, val.compositorViewportPixelRect);
    encoder.encodeStructPointer(browser_controls_params$.BrowserControlsParams, val.browserControlsParams);
    encoder.encodeStructPointer(local_surface_id$.LocalSurfaceId, val.localSurfaceId);
    encoder.encodeStruct(codec.Uint32, val.captureSequenceNumber);
    encoder.encodeStruct(codec.Float, val.pageScaleFactor);
    encoder.encodeStruct(codec.Double, val.zoomLevel);
    encoder.encodeStruct(codec.Float, val.compositingScaleFactor);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(geometry$.Rect), val.rootWidgetWindowSegments);
  };
  exports.VisualProperties = VisualProperties;
})();