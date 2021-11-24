// chrome/browser/ui/webui/new_tab_page/foo/foo.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/new_tab_page/foo/foo.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('foo.mojom');



  function FooDataItem(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FooDataItem.prototype.initDefaults_ = function() {
    this.label = null;
    this.value = null;
    this.imageUrl = null;
  };
  FooDataItem.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FooDataItem.validate = function(messageValidator, offset) {
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


    // validate FooDataItem.label
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FooDataItem.value
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FooDataItem.imageUrl
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FooDataItem.encodedSize = codec.kStructHeaderSize + 24;

  FooDataItem.decode = function(decoder) {
    var packed;
    var val = new FooDataItem();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.label =
        decoder.decodeStruct(codec.String);
    val.value =
        decoder.decodeStruct(codec.String);
    val.imageUrl =
        decoder.decodeStruct(codec.String);
    return val;
  };

  FooDataItem.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FooDataItem.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.label);
    encoder.encodeStruct(codec.String, val.value);
    encoder.encodeStruct(codec.String, val.imageUrl);
  };
  function FooHandler_GetData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FooHandler_GetData_Params.prototype.initDefaults_ = function() {
  };
  FooHandler_GetData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FooHandler_GetData_Params.validate = function(messageValidator, offset) {
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

  FooHandler_GetData_Params.encodedSize = codec.kStructHeaderSize + 0;

  FooHandler_GetData_Params.decode = function(decoder) {
    var packed;
    var val = new FooHandler_GetData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  FooHandler_GetData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FooHandler_GetData_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function FooHandler_GetData_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FooHandler_GetData_ResponseParams.prototype.initDefaults_ = function() {
    this.data = null;
  };
  FooHandler_GetData_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FooHandler_GetData_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FooHandler_GetData_ResponseParams.data
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(FooDataItem), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FooHandler_GetData_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FooHandler_GetData_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FooHandler_GetData_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.data =
        decoder.decodeArrayPointer(new codec.PointerTo(FooDataItem));
    return val;
  };

  FooHandler_GetData_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FooHandler_GetData_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(FooDataItem), val.data);
  };
  var kFooHandler_GetData_Name = 1712120972;

  function FooHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FooHandler,
                                                   handleOrPtrInfo);
  }

  function FooHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FooHandler, associatedInterfacePtrInfo);
  }

  FooHandlerAssociatedPtr.prototype =
      Object.create(FooHandlerPtr.prototype);
  FooHandlerAssociatedPtr.prototype.constructor =
      FooHandlerAssociatedPtr;

  function FooHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  FooHandlerPtr.prototype.getData = function() {
    return FooHandlerProxy.prototype.getData
        .apply(this.ptr.getProxy(), arguments);
  };

  FooHandlerProxy.prototype.getData = function() {
    var params_ = new FooHandler_GetData_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFooHandler_GetData_Name,
          codec.align(FooHandler_GetData_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FooHandler_GetData_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FooHandler_GetData_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FooHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  FooHandlerStub.prototype.getData = function() {
    return this.delegate_ && this.delegate_.getData && this.delegate_.getData();
  }

  FooHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FooHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFooHandler_GetData_Name:
      var params = reader.decodeStruct(FooHandler_GetData_Params);
      this.getData().then(function(response) {
        var responseParams =
            new FooHandler_GetData_ResponseParams();
        responseParams.data = response.data;
        var builder = new codec.MessageV1Builder(
            kFooHandler_GetData_Name,
            codec.align(FooHandler_GetData_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FooHandler_GetData_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFooHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFooHandler_GetData_Name:
        if (message.expectsResponse())
          paramsClass = FooHandler_GetData_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFooHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFooHandler_GetData_Name:
        if (message.isResponse())
          paramsClass = FooHandler_GetData_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FooHandler = {
    name: 'foo.mojom.FooHandler',
    kVersion: 0,
    ptrClass: FooHandlerPtr,
    proxyClass: FooHandlerProxy,
    stubClass: FooHandlerStub,
    validateRequest: validateFooHandlerRequest,
    validateResponse: validateFooHandlerResponse,
  };
  FooHandlerStub.prototype.validator = validateFooHandlerRequest;
  FooHandlerProxy.prototype.validator = validateFooHandlerResponse;
  exports.FooDataItem = FooDataItem;
  exports.FooHandler = FooHandler;
  exports.FooHandlerPtr = FooHandlerPtr;
  exports.FooHandlerAssociatedPtr = FooHandlerAssociatedPtr;
})();