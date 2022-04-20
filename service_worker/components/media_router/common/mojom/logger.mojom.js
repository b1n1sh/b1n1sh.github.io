// components/media_router/common/mojom/logger.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/media_router/common/mojom/logger.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }


  var LogCategory = {};
  LogCategory.kDiscovery = 0;
  LogCategory.kRoute = 1;
  LogCategory.kMirroring = 2;
  LogCategory.kUi = 3;
  LogCategory.MIN_VALUE = 0;
  LogCategory.MAX_VALUE = 3;

  LogCategory.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  LogCategory.toKnownEnumValue = function(value) {
    return value;
  };

  LogCategory.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function Logger_LogInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Logger_LogInfo_Params.prototype.initDefaults_ = function() {
    this.category = 0;
    this.component = null;
    this.message = null;
    this.sinkId = null;
    this.mediaSource = null;
    this.sessionId = null;
  };
  Logger_LogInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Logger_LogInfo_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogInfo_Params.category
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, LogCategory);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogInfo_Params.component
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogInfo_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogInfo_Params.sinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogInfo_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogInfo_Params.sessionId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Logger_LogInfo_Params.encodedSize = codec.kStructHeaderSize + 48;

  Logger_LogInfo_Params.decode = function(decoder) {
    var packed;
    var val = new Logger_LogInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.category =
        decoder.decodeStruct(new codec.Enum(LogCategory));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.component =
        decoder.decodeStruct(codec.String);
    val.message =
        decoder.decodeStruct(codec.String);
    val.sinkId =
        decoder.decodeStruct(codec.String);
    val.mediaSource =
        decoder.decodeStruct(codec.String);
    val.sessionId =
        decoder.decodeStruct(codec.String);
    return val;
  };

  Logger_LogInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Logger_LogInfo_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.category);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.component);
    encoder.encodeStruct(codec.String, val.message);
    encoder.encodeStruct(codec.String, val.sinkId);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeStruct(codec.String, val.sessionId);
  };
  function Logger_LogWarning_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Logger_LogWarning_Params.prototype.initDefaults_ = function() {
    this.category = 0;
    this.component = null;
    this.message = null;
    this.sinkId = null;
    this.mediaSource = null;
    this.sessionId = null;
  };
  Logger_LogWarning_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Logger_LogWarning_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogWarning_Params.category
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, LogCategory);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogWarning_Params.component
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogWarning_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogWarning_Params.sinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogWarning_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogWarning_Params.sessionId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Logger_LogWarning_Params.encodedSize = codec.kStructHeaderSize + 48;

  Logger_LogWarning_Params.decode = function(decoder) {
    var packed;
    var val = new Logger_LogWarning_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.category =
        decoder.decodeStruct(new codec.Enum(LogCategory));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.component =
        decoder.decodeStruct(codec.String);
    val.message =
        decoder.decodeStruct(codec.String);
    val.sinkId =
        decoder.decodeStruct(codec.String);
    val.mediaSource =
        decoder.decodeStruct(codec.String);
    val.sessionId =
        decoder.decodeStruct(codec.String);
    return val;
  };

  Logger_LogWarning_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Logger_LogWarning_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.category);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.component);
    encoder.encodeStruct(codec.String, val.message);
    encoder.encodeStruct(codec.String, val.sinkId);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeStruct(codec.String, val.sessionId);
  };
  function Logger_LogError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Logger_LogError_Params.prototype.initDefaults_ = function() {
    this.category = 0;
    this.component = null;
    this.message = null;
    this.sinkId = null;
    this.mediaSource = null;
    this.sessionId = null;
  };
  Logger_LogError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Logger_LogError_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogError_Params.category
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, LogCategory);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogError_Params.component
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogError_Params.message
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogError_Params.sinkId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogError_Params.mediaSource
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Logger_LogError_Params.sessionId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 40, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  Logger_LogError_Params.encodedSize = codec.kStructHeaderSize + 48;

  Logger_LogError_Params.decode = function(decoder) {
    var packed;
    var val = new Logger_LogError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.category =
        decoder.decodeStruct(new codec.Enum(LogCategory));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.component =
        decoder.decodeStruct(codec.String);
    val.message =
        decoder.decodeStruct(codec.String);
    val.sinkId =
        decoder.decodeStruct(codec.String);
    val.mediaSource =
        decoder.decodeStruct(codec.String);
    val.sessionId =
        decoder.decodeStruct(codec.String);
    return val;
  };

  Logger_LogError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Logger_LogError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.category);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.component);
    encoder.encodeStruct(codec.String, val.message);
    encoder.encodeStruct(codec.String, val.sinkId);
    encoder.encodeStruct(codec.String, val.mediaSource);
    encoder.encodeStruct(codec.String, val.sessionId);
  };
  var kLogger_LogInfo_Name = 1827363803;
  var kLogger_LogWarning_Name = 1355540231;
  var kLogger_LogError_Name = 1831956638;

  function LoggerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(Logger,
                                                   handleOrPtrInfo);
  }

  function LoggerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        Logger, associatedInterfacePtrInfo);
  }

  LoggerAssociatedPtr.prototype =
      Object.create(LoggerPtr.prototype);
  LoggerAssociatedPtr.prototype.constructor =
      LoggerAssociatedPtr;

  function LoggerProxy(receiver) {
    this.receiver_ = receiver;
  }
  LoggerPtr.prototype.logInfo = function() {
    return LoggerProxy.prototype.logInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  LoggerProxy.prototype.logInfo = function(category, component, message, sinkId, mediaSource, sessionId) {
    var params_ = new Logger_LogInfo_Params();
    params_.category = category;
    params_.component = component;
    params_.message = message;
    params_.sinkId = sinkId;
    params_.mediaSource = mediaSource;
    params_.sessionId = sessionId;
    var builder = new codec.MessageV0Builder(
        kLogger_LogInfo_Name,
        codec.align(Logger_LogInfo_Params.encodedSize));
    builder.encodeStruct(Logger_LogInfo_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LoggerPtr.prototype.logWarning = function() {
    return LoggerProxy.prototype.logWarning
        .apply(this.ptr.getProxy(), arguments);
  };

  LoggerProxy.prototype.logWarning = function(category, component, message, sinkId, mediaSource, sessionId) {
    var params_ = new Logger_LogWarning_Params();
    params_.category = category;
    params_.component = component;
    params_.message = message;
    params_.sinkId = sinkId;
    params_.mediaSource = mediaSource;
    params_.sessionId = sessionId;
    var builder = new codec.MessageV0Builder(
        kLogger_LogWarning_Name,
        codec.align(Logger_LogWarning_Params.encodedSize));
    builder.encodeStruct(Logger_LogWarning_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LoggerPtr.prototype.logError = function() {
    return LoggerProxy.prototype.logError
        .apply(this.ptr.getProxy(), arguments);
  };

  LoggerProxy.prototype.logError = function(category, component, message, sinkId, mediaSource, sessionId) {
    var params_ = new Logger_LogError_Params();
    params_.category = category;
    params_.component = component;
    params_.message = message;
    params_.sinkId = sinkId;
    params_.mediaSource = mediaSource;
    params_.sessionId = sessionId;
    var builder = new codec.MessageV0Builder(
        kLogger_LogError_Name,
        codec.align(Logger_LogError_Params.encodedSize));
    builder.encodeStruct(Logger_LogError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function LoggerStub(delegate) {
    this.delegate_ = delegate;
  }
  LoggerStub.prototype.logInfo = function(category, component, message, sinkId, mediaSource, sessionId) {
    return this.delegate_ && this.delegate_.logInfo && this.delegate_.logInfo(category, component, message, sinkId, mediaSource, sessionId);
  }
  LoggerStub.prototype.logWarning = function(category, component, message, sinkId, mediaSource, sessionId) {
    return this.delegate_ && this.delegate_.logWarning && this.delegate_.logWarning(category, component, message, sinkId, mediaSource, sessionId);
  }
  LoggerStub.prototype.logError = function(category, component, message, sinkId, mediaSource, sessionId) {
    return this.delegate_ && this.delegate_.logError && this.delegate_.logError(category, component, message, sinkId, mediaSource, sessionId);
  }

  LoggerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLogger_LogInfo_Name:
      var params = reader.decodeStruct(Logger_LogInfo_Params);
      this.logInfo(params.category, params.component, params.message, params.sinkId, params.mediaSource, params.sessionId);
      return true;
    case kLogger_LogWarning_Name:
      var params = reader.decodeStruct(Logger_LogWarning_Params);
      this.logWarning(params.category, params.component, params.message, params.sinkId, params.mediaSource, params.sessionId);
      return true;
    case kLogger_LogError_Name:
      var params = reader.decodeStruct(Logger_LogError_Params);
      this.logError(params.category, params.component, params.message, params.sinkId, params.mediaSource, params.sessionId);
      return true;
    default:
      return false;
    }
  };

  LoggerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateLoggerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLogger_LogInfo_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Logger_LogInfo_Params;
      break;
      case kLogger_LogWarning_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Logger_LogWarning_Params;
      break;
      case kLogger_LogError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = Logger_LogError_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLoggerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var Logger = {
    name: 'media_router.mojom.Logger',
    kVersion: 0,
    ptrClass: LoggerPtr,
    proxyClass: LoggerProxy,
    stubClass: LoggerStub,
    validateRequest: validateLoggerRequest,
    validateResponse: null,
  };
  LoggerStub.prototype.validator = validateLoggerRequest;
  LoggerProxy.prototype.validator = null;
  exports.LogCategory = LogCategory;
  exports.Logger = Logger;
  exports.LoggerPtr = LoggerPtr;
  exports.LoggerAssociatedPtr = LoggerAssociatedPtr;
})();