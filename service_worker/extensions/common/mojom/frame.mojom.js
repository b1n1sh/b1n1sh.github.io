// extensions/common/mojom/frame.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'extensions/common/mojom/frame.mojom';
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



  function LocalFrame_SetFrameName_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LocalFrame_SetFrameName_Params.prototype.initDefaults_ = function() {
    this.frameName = null;
  };
  LocalFrame_SetFrameName_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LocalFrame_SetFrameName_Params.validate = function(messageValidator, offset) {
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


    // validate LocalFrame_SetFrameName_Params.frameName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  LocalFrame_SetFrameName_Params.encodedSize = codec.kStructHeaderSize + 8;

  LocalFrame_SetFrameName_Params.decode = function(decoder) {
    var packed;
    var val = new LocalFrame_SetFrameName_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameName =
        decoder.decodeStruct(codec.String);
    return val;
  };

  LocalFrame_SetFrameName_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LocalFrame_SetFrameName_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.frameName);
  };
  function LocalFrame_SetSpatialNavigationEnabled_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LocalFrame_SetSpatialNavigationEnabled_Params.prototype.initDefaults_ = function() {
    this.spatialNavEnabled = false;
  };
  LocalFrame_SetSpatialNavigationEnabled_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LocalFrame_SetSpatialNavigationEnabled_Params.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  LocalFrame_SetSpatialNavigationEnabled_Params.encodedSize = codec.kStructHeaderSize + 8;

  LocalFrame_SetSpatialNavigationEnabled_Params.decode = function(decoder) {
    var packed;
    var val = new LocalFrame_SetSpatialNavigationEnabled_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.spatialNavEnabled = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  LocalFrame_SetSpatialNavigationEnabled_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LocalFrame_SetSpatialNavigationEnabled_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.spatialNavEnabled & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function LocalFrame_SetTabId_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LocalFrame_SetTabId_Params.prototype.initDefaults_ = function() {
    this.tabId = 0;
  };
  LocalFrame_SetTabId_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LocalFrame_SetTabId_Params.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  LocalFrame_SetTabId_Params.encodedSize = codec.kStructHeaderSize + 8;

  LocalFrame_SetTabId_Params.decode = function(decoder) {
    var packed;
    var val = new LocalFrame_SetTabId_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tabId =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  LocalFrame_SetTabId_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LocalFrame_SetTabId_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.tabId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function LocalFrame_AppWindowClosed_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  LocalFrame_AppWindowClosed_Params.prototype.initDefaults_ = function() {
    this.sendOnclosed = false;
  };
  LocalFrame_AppWindowClosed_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  LocalFrame_AppWindowClosed_Params.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  LocalFrame_AppWindowClosed_Params.encodedSize = codec.kStructHeaderSize + 8;

  LocalFrame_AppWindowClosed_Params.decode = function(decoder) {
    var packed;
    var val = new LocalFrame_AppWindowClosed_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.sendOnclosed = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  LocalFrame_AppWindowClosed_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(LocalFrame_AppWindowClosed_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.sendOnclosed & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kLocalFrame_SetFrameName_Name = 963403767;
  var kLocalFrame_SetSpatialNavigationEnabled_Name = 1289510109;
  var kLocalFrame_SetTabId_Name = 474885565;
  var kLocalFrame_AppWindowClosed_Name = 914130882;

  function LocalFramePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(LocalFrame,
                                                   handleOrPtrInfo);
  }

  function LocalFrameAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        LocalFrame, associatedInterfacePtrInfo);
  }

  LocalFrameAssociatedPtr.prototype =
      Object.create(LocalFramePtr.prototype);
  LocalFrameAssociatedPtr.prototype.constructor =
      LocalFrameAssociatedPtr;

  function LocalFrameProxy(receiver) {
    this.receiver_ = receiver;
  }
  LocalFramePtr.prototype.setFrameName = function() {
    return LocalFrameProxy.prototype.setFrameName
        .apply(this.ptr.getProxy(), arguments);
  };

  LocalFrameProxy.prototype.setFrameName = function(frameName) {
    var params_ = new LocalFrame_SetFrameName_Params();
    params_.frameName = frameName;
    var builder = new codec.MessageV0Builder(
        kLocalFrame_SetFrameName_Name,
        codec.align(LocalFrame_SetFrameName_Params.encodedSize));
    builder.encodeStruct(LocalFrame_SetFrameName_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LocalFramePtr.prototype.setSpatialNavigationEnabled = function() {
    return LocalFrameProxy.prototype.setSpatialNavigationEnabled
        .apply(this.ptr.getProxy(), arguments);
  };

  LocalFrameProxy.prototype.setSpatialNavigationEnabled = function(spatialNavEnabled) {
    var params_ = new LocalFrame_SetSpatialNavigationEnabled_Params();
    params_.spatialNavEnabled = spatialNavEnabled;
    var builder = new codec.MessageV0Builder(
        kLocalFrame_SetSpatialNavigationEnabled_Name,
        codec.align(LocalFrame_SetSpatialNavigationEnabled_Params.encodedSize));
    builder.encodeStruct(LocalFrame_SetSpatialNavigationEnabled_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LocalFramePtr.prototype.setTabId = function() {
    return LocalFrameProxy.prototype.setTabId
        .apply(this.ptr.getProxy(), arguments);
  };

  LocalFrameProxy.prototype.setTabId = function(tabId) {
    var params_ = new LocalFrame_SetTabId_Params();
    params_.tabId = tabId;
    var builder = new codec.MessageV0Builder(
        kLocalFrame_SetTabId_Name,
        codec.align(LocalFrame_SetTabId_Params.encodedSize));
    builder.encodeStruct(LocalFrame_SetTabId_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  LocalFramePtr.prototype.appWindowClosed = function() {
    return LocalFrameProxy.prototype.appWindowClosed
        .apply(this.ptr.getProxy(), arguments);
  };

  LocalFrameProxy.prototype.appWindowClosed = function(sendOnclosed) {
    var params_ = new LocalFrame_AppWindowClosed_Params();
    params_.sendOnclosed = sendOnclosed;
    var builder = new codec.MessageV0Builder(
        kLocalFrame_AppWindowClosed_Name,
        codec.align(LocalFrame_AppWindowClosed_Params.encodedSize));
    builder.encodeStruct(LocalFrame_AppWindowClosed_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function LocalFrameStub(delegate) {
    this.delegate_ = delegate;
  }
  LocalFrameStub.prototype.setFrameName = function(frameName) {
    return this.delegate_ && this.delegate_.setFrameName && this.delegate_.setFrameName(frameName);
  }
  LocalFrameStub.prototype.setSpatialNavigationEnabled = function(spatialNavEnabled) {
    return this.delegate_ && this.delegate_.setSpatialNavigationEnabled && this.delegate_.setSpatialNavigationEnabled(spatialNavEnabled);
  }
  LocalFrameStub.prototype.setTabId = function(tabId) {
    return this.delegate_ && this.delegate_.setTabId && this.delegate_.setTabId(tabId);
  }
  LocalFrameStub.prototype.appWindowClosed = function(sendOnclosed) {
    return this.delegate_ && this.delegate_.appWindowClosed && this.delegate_.appWindowClosed(sendOnclosed);
  }

  LocalFrameStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kLocalFrame_SetFrameName_Name:
      var params = reader.decodeStruct(LocalFrame_SetFrameName_Params);
      this.setFrameName(params.frameName);
      return true;
    case kLocalFrame_SetSpatialNavigationEnabled_Name:
      var params = reader.decodeStruct(LocalFrame_SetSpatialNavigationEnabled_Params);
      this.setSpatialNavigationEnabled(params.spatialNavEnabled);
      return true;
    case kLocalFrame_SetTabId_Name:
      var params = reader.decodeStruct(LocalFrame_SetTabId_Params);
      this.setTabId(params.tabId);
      return true;
    case kLocalFrame_AppWindowClosed_Name:
      var params = reader.decodeStruct(LocalFrame_AppWindowClosed_Params);
      this.appWindowClosed(params.sendOnclosed);
      return true;
    default:
      return false;
    }
  };

  LocalFrameStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateLocalFrameRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kLocalFrame_SetFrameName_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LocalFrame_SetFrameName_Params;
      break;
      case kLocalFrame_SetSpatialNavigationEnabled_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LocalFrame_SetSpatialNavigationEnabled_Params;
      break;
      case kLocalFrame_SetTabId_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LocalFrame_SetTabId_Params;
      break;
      case kLocalFrame_AppWindowClosed_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = LocalFrame_AppWindowClosed_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateLocalFrameResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var LocalFrame = {
    name: 'extensions.mojom.LocalFrame',
    kVersion: 0,
    ptrClass: LocalFramePtr,
    proxyClass: LocalFrameProxy,
    stubClass: LocalFrameStub,
    validateRequest: validateLocalFrameRequest,
    validateResponse: null,
  };
  LocalFrameStub.prototype.validator = validateLocalFrameRequest;
  LocalFrameProxy.prototype.validator = null;
  exports.LocalFrame = LocalFrame;
  exports.LocalFramePtr = LocalFramePtr;
  exports.LocalFrameAssociatedPtr = LocalFrameAssociatedPtr;
})();