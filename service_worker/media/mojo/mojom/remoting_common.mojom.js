// media/mojo/mojom/remoting_common.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/remoting_common.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');


  var RemotingStopReason = {};
  RemotingStopReason.ROUTE_TERMINATED = 0;
  RemotingStopReason.LOCAL_PLAYBACK = 1;
  RemotingStopReason.SOURCE_GONE = 2;
  RemotingStopReason.MESSAGE_SEND_FAILED = 3;
  RemotingStopReason.DATA_SEND_FAILED = 4;
  RemotingStopReason.UNEXPECTED_FAILURE = 5;
  RemotingStopReason.SERVICE_GONE = 6;
  RemotingStopReason.USER_DISABLED = 7;
  RemotingStopReason.MIN_VALUE = 0;
  RemotingStopReason.MAX_VALUE = 7;

  RemotingStopReason.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  RemotingStopReason.toKnownEnumValue = function(value) {
    return value;
  };

  RemotingStopReason.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RemotingStartFailReason = {};
  RemotingStartFailReason.CANNOT_START_MULTIPLE = 0;
  RemotingStartFailReason.ROUTE_TERMINATED = 1;
  RemotingStartFailReason.INVALID_ANSWER_MESSAGE = 2;
  RemotingStartFailReason.REMOTING_NOT_PERMITTED = 3;
  RemotingStartFailReason.MIN_VALUE = 0;
  RemotingStartFailReason.MAX_VALUE = 3;

  RemotingStartFailReason.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  RemotingStartFailReason.toKnownEnumValue = function(value) {
    return value;
  };

  RemotingStartFailReason.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RemotingSinkFeature = {};
  RemotingSinkFeature.RENDERING = 0;
  RemotingSinkFeature.CONTENT_DECRYPTION = 1;
  RemotingSinkFeature.MIN_VALUE = 0;
  RemotingSinkFeature.MAX_VALUE = 1;

  RemotingSinkFeature.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  RemotingSinkFeature.toKnownEnumValue = function(value) {
    return value;
  };

  RemotingSinkFeature.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RemotingSinkAudioCapability = {};
  RemotingSinkAudioCapability.CODEC_BASELINE_SET = 0;
  RemotingSinkAudioCapability.CODEC_AAC = 1;
  RemotingSinkAudioCapability.CODEC_OPUS = 2;
  RemotingSinkAudioCapability.MIN_VALUE = 0;
  RemotingSinkAudioCapability.MAX_VALUE = 2;

  RemotingSinkAudioCapability.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  RemotingSinkAudioCapability.toKnownEnumValue = function(value) {
    return value;
  };

  RemotingSinkAudioCapability.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var RemotingSinkVideoCapability = {};
  RemotingSinkVideoCapability.SUPPORT_4K = 0;
  RemotingSinkVideoCapability.CODEC_BASELINE_SET = 1;
  RemotingSinkVideoCapability.CODEC_H264 = 2;
  RemotingSinkVideoCapability.CODEC_VP8 = 3;
  RemotingSinkVideoCapability.CODEC_VP9 = 4;
  RemotingSinkVideoCapability.CODEC_HEVC = 5;
  RemotingSinkVideoCapability.MIN_VALUE = 0;
  RemotingSinkVideoCapability.MAX_VALUE = 5;

  RemotingSinkVideoCapability.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  RemotingSinkVideoCapability.toKnownEnumValue = function(value) {
    return value;
  };

  RemotingSinkVideoCapability.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function RemotingSinkMetadata(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  RemotingSinkMetadata.prototype.initDefaults_ = function() {
    this.features = null;
    this.audioCapabilities = null;
    this.videoCapabilities = null;
    this.friendlyName = null;
  };
  RemotingSinkMetadata.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  RemotingSinkMetadata.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RemotingSinkMetadata.features
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(RemotingSinkFeature), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RemotingSinkMetadata.audioCapabilities
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, new codec.Enum(RemotingSinkAudioCapability), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RemotingSinkMetadata.videoCapabilities
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, new codec.Enum(RemotingSinkVideoCapability), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate RemotingSinkMetadata.friendlyName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  RemotingSinkMetadata.encodedSize = codec.kStructHeaderSize + 32;

  RemotingSinkMetadata.decode = function(decoder) {
    var packed;
    var val = new RemotingSinkMetadata();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.features =
        decoder.decodeArrayPointer(new codec.Enum(RemotingSinkFeature));
    val.audioCapabilities =
        decoder.decodeArrayPointer(new codec.Enum(RemotingSinkAudioCapability));
    val.videoCapabilities =
        decoder.decodeArrayPointer(new codec.Enum(RemotingSinkVideoCapability));
    val.friendlyName =
        decoder.decodeStruct(codec.String);
    return val;
  };

  RemotingSinkMetadata.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(RemotingSinkMetadata.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(RemotingSinkFeature), val.features);
    encoder.encodeArrayPointer(new codec.Enum(RemotingSinkAudioCapability), val.audioCapabilities);
    encoder.encodeArrayPointer(new codec.Enum(RemotingSinkVideoCapability), val.videoCapabilities);
    encoder.encodeStruct(codec.String, val.friendlyName);
  };
  exports.RemotingStopReason = RemotingStopReason;
  exports.RemotingStartFailReason = RemotingStartFailReason;
  exports.RemotingSinkFeature = RemotingSinkFeature;
  exports.RemotingSinkAudioCapability = RemotingSinkAudioCapability;
  exports.RemotingSinkVideoCapability = RemotingSinkVideoCapability;
  exports.RemotingSinkMetadata = RemotingSinkMetadata;
})();