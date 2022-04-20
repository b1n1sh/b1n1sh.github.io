// third_party/blink/public/mojom/worker/shared_worker_creation_context_type.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/worker/shared_worker_creation_context_type.mojom';
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


  var SharedWorkerCreationContextType = {};
  SharedWorkerCreationContextType.kNonsecure = 0;
  SharedWorkerCreationContextType.kSecure = 1;
  SharedWorkerCreationContextType.MIN_VALUE = 0;
  SharedWorkerCreationContextType.MAX_VALUE = 1;

  SharedWorkerCreationContextType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  SharedWorkerCreationContextType.toKnownEnumValue = function(value) {
    return value;
  };

  SharedWorkerCreationContextType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.SharedWorkerCreationContextType = SharedWorkerCreationContextType;
})();