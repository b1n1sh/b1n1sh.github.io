// sandbox/policy/mojom/sandbox.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'sandbox/policy/mojom/sandbox.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('sandbox.mojom');


  var Sandbox = {};
  Sandbox.kService = 0;
  Sandbox.kUtility = 1;
  Sandbox.kAudio = 2;
  Sandbox.kCdm = 3;
  Sandbox.kNetwork = 4;
  Sandbox.kNoSandbox = 5;
  Sandbox.kGpu = 6;
  Sandbox.kPrintCompositor = 7;
  Sandbox.kSpeechRecognition = 8;
  Sandbox.kPrintBackend = 9;
  Sandbox.MIN_VALUE = 0;
  Sandbox.MAX_VALUE = 9;

  Sandbox.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return true;
    }
    return false;
  };

  Sandbox.toKnownEnumValue = function(value) {
    return value;
  };

  Sandbox.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.Sandbox = Sandbox;
})();