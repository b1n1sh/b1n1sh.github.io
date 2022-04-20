// third_party/blink/public/mojom/frame/intrinsic_sizing_info.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/frame/intrinsic_sizing_info.mojom';
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
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }



  function IntrinsicSizingInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  IntrinsicSizingInfo.prototype.initDefaults_ = function() {
    this.size = null;
    this.aspectRatio = null;
    this.hasWidth = false;
    this.hasHeight = false;
  };
  IntrinsicSizingInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  IntrinsicSizingInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IntrinsicSizingInfo.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.SizeF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate IntrinsicSizingInfo.aspectRatio
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.SizeF, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  IntrinsicSizingInfo.encodedSize = codec.kStructHeaderSize + 24;

  IntrinsicSizingInfo.decode = function(decoder) {
    var packed;
    var val = new IntrinsicSizingInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size =
        decoder.decodeStructPointer(geometry$.SizeF);
    val.aspectRatio =
        decoder.decodeStructPointer(geometry$.SizeF);
    packed = decoder.readUint8();
    val.hasWidth = (packed >> 0) & 1 ? true : false;
    val.hasHeight = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  IntrinsicSizingInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(IntrinsicSizingInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.SizeF, val.size);
    encoder.encodeStructPointer(geometry$.SizeF, val.aspectRatio);
    packed = 0;
    packed |= (val.hasWidth & 1) << 0
    packed |= (val.hasHeight & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.IntrinsicSizingInfo = IntrinsicSizingInfo;
})();