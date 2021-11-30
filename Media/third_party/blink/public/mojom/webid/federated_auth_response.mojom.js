// third_party/blink/public/mojom/webid/federated_auth_response.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/webid/federated_auth_response.mojom';
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


  var ProvideIdTokenStatus = {};
  ProvideIdTokenStatus.kSuccess = 0;
  ProvideIdTokenStatus.kErrorTooManyResponses = 1;
  ProvideIdTokenStatus.kError = 2;
  ProvideIdTokenStatus.MIN_VALUE = 0;
  ProvideIdTokenStatus.MAX_VALUE = 2;

  ProvideIdTokenStatus.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  ProvideIdTokenStatus.toKnownEnumValue = function(value) {
    return value;
  };

  ProvideIdTokenStatus.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FederatedAuthResponse_ProvideIdToken_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FederatedAuthResponse_ProvideIdToken_Params.prototype.initDefaults_ = function() {
    this.idToken = null;
  };
  FederatedAuthResponse_ProvideIdToken_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FederatedAuthResponse_ProvideIdToken_Params.validate = function(messageValidator, offset) {
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


    // validate FederatedAuthResponse_ProvideIdToken_Params.idToken
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FederatedAuthResponse_ProvideIdToken_Params.encodedSize = codec.kStructHeaderSize + 8;

  FederatedAuthResponse_ProvideIdToken_Params.decode = function(decoder) {
    var packed;
    var val = new FederatedAuthResponse_ProvideIdToken_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.idToken =
        decoder.decodeStruct(codec.String);
    return val;
  };

  FederatedAuthResponse_ProvideIdToken_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FederatedAuthResponse_ProvideIdToken_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.idToken);
  };
  function FederatedAuthResponse_ProvideIdToken_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FederatedAuthResponse_ProvideIdToken_ResponseParams.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  FederatedAuthResponse_ProvideIdToken_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FederatedAuthResponse_ProvideIdToken_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate FederatedAuthResponse_ProvideIdToken_ResponseParams.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, ProvideIdTokenStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FederatedAuthResponse_ProvideIdToken_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  FederatedAuthResponse_ProvideIdToken_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new FederatedAuthResponse_ProvideIdToken_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(new codec.Enum(ProvideIdTokenStatus));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FederatedAuthResponse_ProvideIdToken_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FederatedAuthResponse_ProvideIdToken_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kFederatedAuthResponse_ProvideIdToken_Name = 0;

  function FederatedAuthResponsePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(FederatedAuthResponse,
                                                   handleOrPtrInfo);
  }

  function FederatedAuthResponseAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        FederatedAuthResponse, associatedInterfacePtrInfo);
  }

  FederatedAuthResponseAssociatedPtr.prototype =
      Object.create(FederatedAuthResponsePtr.prototype);
  FederatedAuthResponseAssociatedPtr.prototype.constructor =
      FederatedAuthResponseAssociatedPtr;

  function FederatedAuthResponseProxy(receiver) {
    this.receiver_ = receiver;
  }
  FederatedAuthResponsePtr.prototype.provideIdToken = function() {
    return FederatedAuthResponseProxy.prototype.provideIdToken
        .apply(this.ptr.getProxy(), arguments);
  };

  FederatedAuthResponseProxy.prototype.provideIdToken = function(idToken) {
    var params_ = new FederatedAuthResponse_ProvideIdToken_Params();
    params_.idToken = idToken;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kFederatedAuthResponse_ProvideIdToken_Name,
          codec.align(FederatedAuthResponse_ProvideIdToken_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(FederatedAuthResponse_ProvideIdToken_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(FederatedAuthResponse_ProvideIdToken_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function FederatedAuthResponseStub(delegate) {
    this.delegate_ = delegate;
  }
  FederatedAuthResponseStub.prototype.provideIdToken = function(idToken) {
    return this.delegate_ && this.delegate_.provideIdToken && this.delegate_.provideIdToken(idToken);
  }

  FederatedAuthResponseStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  FederatedAuthResponseStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kFederatedAuthResponse_ProvideIdToken_Name:
      var params = reader.decodeStruct(FederatedAuthResponse_ProvideIdToken_Params);
      this.provideIdToken(params.idToken).then(function(response) {
        var responseParams =
            new FederatedAuthResponse_ProvideIdToken_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kFederatedAuthResponse_ProvideIdToken_Name,
            codec.align(FederatedAuthResponse_ProvideIdToken_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(FederatedAuthResponse_ProvideIdToken_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateFederatedAuthResponseRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kFederatedAuthResponse_ProvideIdToken_Name:
        if (message.expectsResponse())
          paramsClass = FederatedAuthResponse_ProvideIdToken_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateFederatedAuthResponseResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kFederatedAuthResponse_ProvideIdToken_Name:
        if (message.isResponse())
          paramsClass = FederatedAuthResponse_ProvideIdToken_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var FederatedAuthResponse = {
    name: 'blink.mojom.FederatedAuthResponse',
    kVersion: 0,
    ptrClass: FederatedAuthResponsePtr,
    proxyClass: FederatedAuthResponseProxy,
    stubClass: FederatedAuthResponseStub,
    validateRequest: validateFederatedAuthResponseRequest,
    validateResponse: validateFederatedAuthResponseResponse,
  };
  FederatedAuthResponseStub.prototype.validator = validateFederatedAuthResponseRequest;
  FederatedAuthResponseProxy.prototype.validator = validateFederatedAuthResponseResponse;
  exports.ProvideIdTokenStatus = ProvideIdTokenStatus;
  exports.FederatedAuthResponse = FederatedAuthResponse;
  exports.FederatedAuthResponsePtr = FederatedAuthResponsePtr;
  exports.FederatedAuthResponseAssociatedPtr = FederatedAuthResponseAssociatedPtr;
})();