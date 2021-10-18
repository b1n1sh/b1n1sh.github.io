// components/media_router/common/mojom/media_route_provider_id.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/media_router/common/mojom/media_route_provider_id.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mediaRouter.mojom');


  var MediaRouteProviderId = {};
  MediaRouteProviderId.WIRED_DISPLAY = 0;
  MediaRouteProviderId.CAST = 1;
  MediaRouteProviderId.DIAL = 2;
  MediaRouteProviderId.ANDROID_CAF = 3;
  MediaRouteProviderId.TEST = 4;
  MediaRouteProviderId.MIN_VALUE = 0;
  MediaRouteProviderId.MAX_VALUE = 4;

  MediaRouteProviderId.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  MediaRouteProviderId.toKnownEnumValue = function(value) {
    return value;
  };

  MediaRouteProviderId.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.MediaRouteProviderId = MediaRouteProviderId;
})();