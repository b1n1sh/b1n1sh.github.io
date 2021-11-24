// chrome/browser/ui/webui/internals/user_education/user_education_internals.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/internals/user_education/user_education_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojom.userEducationInternals');



  function UserEducationInternalsPageHandler_GetTutorials_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UserEducationInternalsPageHandler_GetTutorials_Params.prototype.initDefaults_ = function() {
  };
  UserEducationInternalsPageHandler_GetTutorials_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UserEducationInternalsPageHandler_GetTutorials_Params.validate = function(messageValidator, offset) {
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

  UserEducationInternalsPageHandler_GetTutorials_Params.encodedSize = codec.kStructHeaderSize + 0;

  UserEducationInternalsPageHandler_GetTutorials_Params.decode = function(decoder) {
    var packed;
    var val = new UserEducationInternalsPageHandler_GetTutorials_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  UserEducationInternalsPageHandler_GetTutorials_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UserEducationInternalsPageHandler_GetTutorials_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function UserEducationInternalsPageHandler_GetTutorials_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UserEducationInternalsPageHandler_GetTutorials_ResponseParams.prototype.initDefaults_ = function() {
    this.tutorialIds = null;
  };
  UserEducationInternalsPageHandler_GetTutorials_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UserEducationInternalsPageHandler_GetTutorials_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate UserEducationInternalsPageHandler_GetTutorials_ResponseParams.tutorialIds
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UserEducationInternalsPageHandler_GetTutorials_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  UserEducationInternalsPageHandler_GetTutorials_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new UserEducationInternalsPageHandler_GetTutorials_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tutorialIds =
        decoder.decodeArrayPointer(codec.String);
    return val;
  };

  UserEducationInternalsPageHandler_GetTutorials_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UserEducationInternalsPageHandler_GetTutorials_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.String, val.tutorialIds);
  };
  function UserEducationInternalsPageHandler_StartTutorial_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UserEducationInternalsPageHandler_StartTutorial_Params.prototype.initDefaults_ = function() {
    this.tutorialId = null;
  };
  UserEducationInternalsPageHandler_StartTutorial_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UserEducationInternalsPageHandler_StartTutorial_Params.validate = function(messageValidator, offset) {
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


    // validate UserEducationInternalsPageHandler_StartTutorial_Params.tutorialId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UserEducationInternalsPageHandler_StartTutorial_Params.encodedSize = codec.kStructHeaderSize + 8;

  UserEducationInternalsPageHandler_StartTutorial_Params.decode = function(decoder) {
    var packed;
    var val = new UserEducationInternalsPageHandler_StartTutorial_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.tutorialId =
        decoder.decodeStruct(codec.String);
    return val;
  };

  UserEducationInternalsPageHandler_StartTutorial_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UserEducationInternalsPageHandler_StartTutorial_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.tutorialId);
  };
  var kUserEducationInternalsPageHandler_GetTutorials_Name = 1560653943;
  var kUserEducationInternalsPageHandler_StartTutorial_Name = 1736976239;

  function UserEducationInternalsPageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(UserEducationInternalsPageHandler,
                                                   handleOrPtrInfo);
  }

  function UserEducationInternalsPageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        UserEducationInternalsPageHandler, associatedInterfacePtrInfo);
  }

  UserEducationInternalsPageHandlerAssociatedPtr.prototype =
      Object.create(UserEducationInternalsPageHandlerPtr.prototype);
  UserEducationInternalsPageHandlerAssociatedPtr.prototype.constructor =
      UserEducationInternalsPageHandlerAssociatedPtr;

  function UserEducationInternalsPageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  UserEducationInternalsPageHandlerPtr.prototype.getTutorials = function() {
    return UserEducationInternalsPageHandlerProxy.prototype.getTutorials
        .apply(this.ptr.getProxy(), arguments);
  };

  UserEducationInternalsPageHandlerProxy.prototype.getTutorials = function() {
    var params_ = new UserEducationInternalsPageHandler_GetTutorials_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kUserEducationInternalsPageHandler_GetTutorials_Name,
          codec.align(UserEducationInternalsPageHandler_GetTutorials_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(UserEducationInternalsPageHandler_GetTutorials_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(UserEducationInternalsPageHandler_GetTutorials_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  UserEducationInternalsPageHandlerPtr.prototype.startTutorial = function() {
    return UserEducationInternalsPageHandlerProxy.prototype.startTutorial
        .apply(this.ptr.getProxy(), arguments);
  };

  UserEducationInternalsPageHandlerProxy.prototype.startTutorial = function(tutorialId) {
    var params_ = new UserEducationInternalsPageHandler_StartTutorial_Params();
    params_.tutorialId = tutorialId;
    var builder = new codec.MessageV0Builder(
        kUserEducationInternalsPageHandler_StartTutorial_Name,
        codec.align(UserEducationInternalsPageHandler_StartTutorial_Params.encodedSize));
    builder.encodeStruct(UserEducationInternalsPageHandler_StartTutorial_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function UserEducationInternalsPageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  UserEducationInternalsPageHandlerStub.prototype.getTutorials = function() {
    return this.delegate_ && this.delegate_.getTutorials && this.delegate_.getTutorials();
  }
  UserEducationInternalsPageHandlerStub.prototype.startTutorial = function(tutorialId) {
    return this.delegate_ && this.delegate_.startTutorial && this.delegate_.startTutorial(tutorialId);
  }

  UserEducationInternalsPageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUserEducationInternalsPageHandler_StartTutorial_Name:
      var params = reader.decodeStruct(UserEducationInternalsPageHandler_StartTutorial_Params);
      this.startTutorial(params.tutorialId);
      return true;
    default:
      return false;
    }
  };

  UserEducationInternalsPageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUserEducationInternalsPageHandler_GetTutorials_Name:
      var params = reader.decodeStruct(UserEducationInternalsPageHandler_GetTutorials_Params);
      this.getTutorials().then(function(response) {
        var responseParams =
            new UserEducationInternalsPageHandler_GetTutorials_ResponseParams();
        responseParams.tutorialIds = response.tutorialIds;
        var builder = new codec.MessageV1Builder(
            kUserEducationInternalsPageHandler_GetTutorials_Name,
            codec.align(UserEducationInternalsPageHandler_GetTutorials_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(UserEducationInternalsPageHandler_GetTutorials_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateUserEducationInternalsPageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUserEducationInternalsPageHandler_GetTutorials_Name:
        if (message.expectsResponse())
          paramsClass = UserEducationInternalsPageHandler_GetTutorials_Params;
      break;
      case kUserEducationInternalsPageHandler_StartTutorial_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UserEducationInternalsPageHandler_StartTutorial_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUserEducationInternalsPageHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kUserEducationInternalsPageHandler_GetTutorials_Name:
        if (message.isResponse())
          paramsClass = UserEducationInternalsPageHandler_GetTutorials_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var UserEducationInternalsPageHandler = {
    name: 'mojom.user_education_internals.UserEducationInternalsPageHandler',
    kVersion: 0,
    ptrClass: UserEducationInternalsPageHandlerPtr,
    proxyClass: UserEducationInternalsPageHandlerProxy,
    stubClass: UserEducationInternalsPageHandlerStub,
    validateRequest: validateUserEducationInternalsPageHandlerRequest,
    validateResponse: validateUserEducationInternalsPageHandlerResponse,
  };
  UserEducationInternalsPageHandlerStub.prototype.validator = validateUserEducationInternalsPageHandlerRequest;
  UserEducationInternalsPageHandlerProxy.prototype.validator = validateUserEducationInternalsPageHandlerResponse;
  exports.UserEducationInternalsPageHandler = UserEducationInternalsPageHandler;
  exports.UserEducationInternalsPageHandlerPtr = UserEducationInternalsPageHandlerPtr;
  exports.UserEducationInternalsPageHandlerAssociatedPtr = UserEducationInternalsPageHandlerAssociatedPtr;
})();