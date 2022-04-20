// extensions/common/mojom/url_pattern_set.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/url_pattern_set.mojom';
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



  function URLPattern(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLPattern.prototype.initDefaults_ = function() {
    this.validSchemes = 0;
    this.pattern = null;
  };
  URLPattern.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLPattern.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate URLPattern.pattern
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLPattern.encodedSize = codec.kStructHeaderSize + 16;

  URLPattern.decode = function(decoder) {
    var packed;
    var val = new URLPattern();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.validSchemes =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.pattern =
        decoder.decodeStruct(codec.String);
    return val;
  };

  URLPattern.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLPattern.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.validSchemes);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.pattern);
  };
  function URLPatternSet(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLPatternSet.prototype.initDefaults_ = function() {
    this.patterns = null;
  };
  URLPatternSet.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLPatternSet.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate URLPatternSet.patterns
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(URLPattern), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLPatternSet.encodedSize = codec.kStructHeaderSize + 8;

  URLPatternSet.decode = function(decoder) {
    var packed;
    var val = new URLPatternSet();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.patterns =
        decoder.decodeArrayPointer(new codec.PointerTo(URLPattern));
    return val;
  };

  URLPatternSet.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLPatternSet.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(URLPattern), val.patterns);
  };
  exports.URLPattern = URLPattern;
  exports.URLPatternSet = URLPatternSet;
})();