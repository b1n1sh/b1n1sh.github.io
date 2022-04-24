// third_party/blink/public/mojom/ad_tagging/ad_frame.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/ad_tagging/ad_frame.mojom';
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


  var AdFrameType = {};
  AdFrameType.kNonAd = 0;
  AdFrameType.kChildAd = 1;
  AdFrameType.kRootAd = 2;
  AdFrameType.MIN_VALUE = 0;
  AdFrameType.MAX_VALUE = 2;

  AdFrameType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  AdFrameType.toKnownEnumValue = function(value) {
    return value;
  };

  AdFrameType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.AdFrameType = AdFrameType;
})();