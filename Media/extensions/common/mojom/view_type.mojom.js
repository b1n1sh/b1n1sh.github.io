// extensions/common/mojom/view_type.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/view_type.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('extensions.mojom');


  var ViewType = {};
  ViewType.kInvalid = 0;
  ViewType.kAppWindow = 1;
  ViewType.kBackgroundContents = 2;
  ViewType.kComponent = 3;
  ViewType.kExtensionBackgroundPage = 4;
  ViewType.kExtensionDialog = 5;
  ViewType.kExtensionGuest = 6;
  ViewType.kExtensionPopup = 7;
  ViewType.kTabContents = 9;
  ViewType.MIN_VALUE = 0;
  ViewType.MAX_VALUE = 9;

  ViewType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 9:
      return true;
    }
    return false;
  };

  ViewType.toKnownEnumValue = function(value) {
    return value;
  };

  ViewType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ViewType = ViewType;
})();