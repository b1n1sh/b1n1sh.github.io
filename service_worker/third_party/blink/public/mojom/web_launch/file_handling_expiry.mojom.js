// third_party/blink/public/mojom/web_launch/file_handling_expiry.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/web_launch/file_handling_expiry.mojom';
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
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }



  function FileHandlingExpiry_RequestOriginTrialExpiryTime_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileHandlingExpiry_RequestOriginTrialExpiryTime_Params.prototype.initDefaults_ = function() {
  };
  FileHandlingExpiry_RequestOriginTrialExpiryTime_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileHandlingExpiry_RequestOriginTrialExpiryTime_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileHandlingExpiry_RequestOriginTrialExpiryTime_Params.encodedSize = codec.kStructHeaderSize + 0;

  FileHandlingExpiry_RequestOriginTrialExpiryTime_Params.decode = function(decoder) {
    var packed;
    var val = new FileHandlingExpiry_RequestOriginTrialExpiryTime_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FileHandlingExpiry_RequestOriginTrialExpiryTime_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileHandlingExpiry_RequestOriginTrialExpiryTime_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.prototype.initDefaults_ = function() {
    this.expiryTime = null;
  };
  FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.expiryTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.expiryTime =
        decoder.decodeStructPointer(time$.Time);
    return val;
  };

  FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(time$.Time, val.expiryTime);
  };
  var kFileHandlingExpiry_RequestOriginTrialExpiryTime_Name = 0;

  function FileHandlingExpiryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FileHandlingExpiry,
                                                   handleOrPtrInfo);
  }

  function FileHandlingExpiryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FileHandlingExpiry, associatedInterfacePtrInfo);
  }

  FileHandlingExpiryAssociatedPtr.prototype =
      Object.create(FileHandlingExpiryPtr.prototype);
  FileHandlingExpiryAssociatedPtr.prototype.constructor =
      FileHandlingExpiryAssociatedPtr;

  function FileHandlingExpiryProxy(receiver) {
    this.receiver_ = receiver;
  }
  FileHandlingExpiryPtr.prototype.requestOriginTrialExpiryTime = function() {
    return FileHandlingExpiryProxy.prototype.requestOriginTrialExpiryTime
        .apply(this.ptr.getProxy(), arguments);
  };

  FileHandlingExpiryProxy.prototype.requestOriginTrialExpiryTime = function() {
    var params_ = new FileHandlingExpiry_RequestOriginTrialExpiryTime_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFileHandlingExpiry_RequestOriginTrialExpiryTime_Name,
          codec.align(FileHandlingExpiry_RequestOriginTrialExpiryTime_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FileHandlingExpiry_RequestOriginTrialExpiryTime_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FileHandlingExpiryStub(delegate) {
    this.delegate_ = delegate;
  }
  FileHandlingExpiryStub.prototype.requestOriginTrialExpiryTime = function() {
    return this.delegate_ && this.delegate_.requestOriginTrialExpiryTime && this.delegate_.requestOriginTrialExpiryTime();
  }

  FileHandlingExpiryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FileHandlingExpiryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFileHandlingExpiry_RequestOriginTrialExpiryTime_Name:
      var params = reader.decodeStruct(FileHandlingExpiry_RequestOriginTrialExpiryTime_Params);
      this.requestOriginTrialExpiryTime().then(function(response) {
        var responseParams =
            new FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams();
        responseParams.expiryTime = response.expiryTime;
        var builder = new codec.MessageV1Builder(
            kFileHandlingExpiry_RequestOriginTrialExpiryTime_Name,
            codec.align(FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFileHandlingExpiryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFileHandlingExpiry_RequestOriginTrialExpiryTime_Name:
        if (message.expectsResponse())
          paramsClass = FileHandlingExpiry_RequestOriginTrialExpiryTime_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFileHandlingExpiryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFileHandlingExpiry_RequestOriginTrialExpiryTime_Name:
        if (message.isResponse())
          paramsClass = FileHandlingExpiry_RequestOriginTrialExpiryTime_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FileHandlingExpiry = {
    name: 'blink.mojom.FileHandlingExpiry',
    kVersion: 0,
    ptrClass: FileHandlingExpiryPtr,
    proxyClass: FileHandlingExpiryProxy,
    stubClass: FileHandlingExpiryStub,
    validateRequest: validateFileHandlingExpiryRequest,
    validateResponse: validateFileHandlingExpiryResponse,
  };
  FileHandlingExpiryStub.prototype.validator = validateFileHandlingExpiryRequest;
  FileHandlingExpiryProxy.prototype.validator = validateFileHandlingExpiryResponse;
  exports.FileHandlingExpiry = FileHandlingExpiry;
  exports.FileHandlingExpiryPtr = FileHandlingExpiryPtr;
  exports.FileHandlingExpiryAssociatedPtr = FileHandlingExpiryAssociatedPtr;
})();