// media/mojo/mojom/interface_factory.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/interface_factory.mojom';
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
  var audio_decoder$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/audio_decoder.mojom', 'audio_decoder.mojom.js');
  }
  var decryptor$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/decryptor.mojom', 'decryptor.mojom.js');
  }
  var content_decryption_module$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/content_decryption_module.mojom', 'content_decryption_module.mojom.js');
  }
  var media_log$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/media_log.mojom', 'media_log.mojom.js');
  }
  var renderer$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/renderer.mojom', 'renderer.mojom.js');
  }
  var renderer_extensions$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/renderer_extensions.mojom', 'renderer_extensions.mojom.js');
  }
  var video_decoder$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/video_decoder.mojom', 'video_decoder.mojom.js');
  }
  var token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/token.mojom', '../../../mojo/public/mojom/base/token.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }



  function InterfaceFactory_CreateAudioDecoder_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InterfaceFactory_CreateAudioDecoder_Params.prototype.initDefaults_ = function() {
    this.audioDecoder = new bindings.InterfaceRequest();
  };
  InterfaceFactory_CreateAudioDecoder_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InterfaceFactory_CreateAudioDecoder_Params.validate = function(messageValidator, offset) {
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


    // validate InterfaceFactory_CreateAudioDecoder_Params.audioDecoder
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InterfaceFactory_CreateAudioDecoder_Params.encodedSize = codec.kStructHeaderSize + 8;

  InterfaceFactory_CreateAudioDecoder_Params.decode = function(decoder) {
    var packed;
    var val = new InterfaceFactory_CreateAudioDecoder_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.audioDecoder =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  InterfaceFactory_CreateAudioDecoder_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InterfaceFactory_CreateAudioDecoder_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.audioDecoder);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function InterfaceFactory_CreateVideoDecoder_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InterfaceFactory_CreateVideoDecoder_Params.prototype.initDefaults_ = function() {
    this.videoDecoder = new bindings.InterfaceRequest();
  };
  InterfaceFactory_CreateVideoDecoder_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InterfaceFactory_CreateVideoDecoder_Params.validate = function(messageValidator, offset) {
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


    // validate InterfaceFactory_CreateVideoDecoder_Params.videoDecoder
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InterfaceFactory_CreateVideoDecoder_Params.encodedSize = codec.kStructHeaderSize + 8;

  InterfaceFactory_CreateVideoDecoder_Params.decode = function(decoder) {
    var packed;
    var val = new InterfaceFactory_CreateVideoDecoder_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.videoDecoder =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  InterfaceFactory_CreateVideoDecoder_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InterfaceFactory_CreateVideoDecoder_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.videoDecoder);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function InterfaceFactory_CreateDefaultRenderer_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InterfaceFactory_CreateDefaultRenderer_Params.prototype.initDefaults_ = function() {
    this.audioDeviceId = null;
    this.renderer = new bindings.InterfaceRequest();
  };
  InterfaceFactory_CreateDefaultRenderer_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InterfaceFactory_CreateDefaultRenderer_Params.validate = function(messageValidator, offset) {
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


    // validate InterfaceFactory_CreateDefaultRenderer_Params.audioDeviceId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate InterfaceFactory_CreateDefaultRenderer_Params.renderer
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InterfaceFactory_CreateDefaultRenderer_Params.encodedSize = codec.kStructHeaderSize + 16;

  InterfaceFactory_CreateDefaultRenderer_Params.decode = function(decoder) {
    var packed;
    var val = new InterfaceFactory_CreateDefaultRenderer_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.audioDeviceId =
        decoder.decodeStruct(codec.String);
    val.renderer =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  InterfaceFactory_CreateDefaultRenderer_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InterfaceFactory_CreateDefaultRenderer_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.audioDeviceId);
    encoder.encodeStruct(codec.InterfaceRequest, val.renderer);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function InterfaceFactory_CreateCdm_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InterfaceFactory_CreateCdm_Params.prototype.initDefaults_ = function() {
    this.keySystem = null;
    this.cdmConfig = null;
  };
  InterfaceFactory_CreateCdm_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InterfaceFactory_CreateCdm_Params.validate = function(messageValidator, offset) {
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


    // validate InterfaceFactory_CreateCdm_Params.keySystem
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate InterfaceFactory_CreateCdm_Params.cdmConfig
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, content_decryption_module$.CdmConfig, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InterfaceFactory_CreateCdm_Params.encodedSize = codec.kStructHeaderSize + 16;

  InterfaceFactory_CreateCdm_Params.decode = function(decoder) {
    var packed;
    var val = new InterfaceFactory_CreateCdm_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.keySystem =
        decoder.decodeStruct(codec.String);
    val.cdmConfig =
        decoder.decodeStructPointer(content_decryption_module$.CdmConfig);
    return val;
  };

  InterfaceFactory_CreateCdm_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InterfaceFactory_CreateCdm_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.keySystem);
    encoder.encodeStructPointer(content_decryption_module$.CdmConfig, val.cdmConfig);
  };
  function InterfaceFactory_CreateCdm_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  InterfaceFactory_CreateCdm_ResponseParams.prototype.initDefaults_ = function() {
    this.cdm = new content_decryption_module$.ContentDecryptionModulePtr();
    this.cdmContext = null;
    this.errorMessage = null;
  };
  InterfaceFactory_CreateCdm_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  InterfaceFactory_CreateCdm_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate InterfaceFactory_CreateCdm_ResponseParams.cdm
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate InterfaceFactory_CreateCdm_ResponseParams.cdmContext
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, content_decryption_module$.CdmContext, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate InterfaceFactory_CreateCdm_ResponseParams.errorMessage
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  InterfaceFactory_CreateCdm_ResponseParams.encodedSize = codec.kStructHeaderSize + 24;

  InterfaceFactory_CreateCdm_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new InterfaceFactory_CreateCdm_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.cdm =
        decoder.decodeStruct(new codec.NullableInterface(content_decryption_module$.ContentDecryptionModulePtr));
    val.cdmContext =
        decoder.decodeStructPointer(content_decryption_module$.CdmContext);
    val.errorMessage =
        decoder.decodeStruct(codec.String);
    return val;
  };

  InterfaceFactory_CreateCdm_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(InterfaceFactory_CreateCdm_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.NullableInterface(content_decryption_module$.ContentDecryptionModulePtr), val.cdm);
    encoder.encodeStructPointer(content_decryption_module$.CdmContext, val.cdmContext);
    encoder.encodeStruct(codec.String, val.errorMessage);
  };
  var kInterfaceFactory_CreateAudioDecoder_Name = 1907315140;
  var kInterfaceFactory_CreateVideoDecoder_Name = 1966808699;
  var kInterfaceFactory_CreateDefaultRenderer_Name = 339261620;
  var kInterfaceFactory_CreateCdm_Name = 701832271;

  function InterfaceFactoryPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(InterfaceFactory,
                                                   handleOrPtrInfo);
  }

  function InterfaceFactoryAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        InterfaceFactory, associatedInterfacePtrInfo);
  }

  InterfaceFactoryAssociatedPtr.prototype =
      Object.create(InterfaceFactoryPtr.prototype);
  InterfaceFactoryAssociatedPtr.prototype.constructor =
      InterfaceFactoryAssociatedPtr;

  function InterfaceFactoryProxy(receiver) {
    this.receiver_ = receiver;
  }
  InterfaceFactoryPtr.prototype.createAudioDecoder = function() {
    return InterfaceFactoryProxy.prototype.createAudioDecoder
        .apply(this.ptr.getProxy(), arguments);
  };

  InterfaceFactoryProxy.prototype.createAudioDecoder = function(audioDecoder) {
    var params_ = new InterfaceFactory_CreateAudioDecoder_Params();
    params_.audioDecoder = audioDecoder;
    var builder = new codec.MessageV0Builder(
        kInterfaceFactory_CreateAudioDecoder_Name,
        codec.align(InterfaceFactory_CreateAudioDecoder_Params.encodedSize));
    builder.encodeStruct(InterfaceFactory_CreateAudioDecoder_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  InterfaceFactoryPtr.prototype.createVideoDecoder = function() {
    return InterfaceFactoryProxy.prototype.createVideoDecoder
        .apply(this.ptr.getProxy(), arguments);
  };

  InterfaceFactoryProxy.prototype.createVideoDecoder = function(videoDecoder) {
    var params_ = new InterfaceFactory_CreateVideoDecoder_Params();
    params_.videoDecoder = videoDecoder;
    var builder = new codec.MessageV0Builder(
        kInterfaceFactory_CreateVideoDecoder_Name,
        codec.align(InterfaceFactory_CreateVideoDecoder_Params.encodedSize));
    builder.encodeStruct(InterfaceFactory_CreateVideoDecoder_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  InterfaceFactoryPtr.prototype.createDefaultRenderer = function() {
    return InterfaceFactoryProxy.prototype.createDefaultRenderer
        .apply(this.ptr.getProxy(), arguments);
  };

  InterfaceFactoryProxy.prototype.createDefaultRenderer = function(audioDeviceId, renderer) {
    var params_ = new InterfaceFactory_CreateDefaultRenderer_Params();
    params_.audioDeviceId = audioDeviceId;
    params_.renderer = renderer;
    var builder = new codec.MessageV0Builder(
        kInterfaceFactory_CreateDefaultRenderer_Name,
        codec.align(InterfaceFactory_CreateDefaultRenderer_Params.encodedSize));
    builder.encodeStruct(InterfaceFactory_CreateDefaultRenderer_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  InterfaceFactoryPtr.prototype.createCdm = function() {
    return InterfaceFactoryProxy.prototype.createCdm
        .apply(this.ptr.getProxy(), arguments);
  };

  InterfaceFactoryProxy.prototype.createCdm = function(keySystem, cdmConfig) {
    var params_ = new InterfaceFactory_CreateCdm_Params();
    params_.keySystem = keySystem;
    params_.cdmConfig = cdmConfig;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kInterfaceFactory_CreateCdm_Name,
          codec.align(InterfaceFactory_CreateCdm_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(InterfaceFactory_CreateCdm_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(InterfaceFactory_CreateCdm_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function InterfaceFactoryStub(delegate) {
    this.delegate_ = delegate;
  }
  InterfaceFactoryStub.prototype.createAudioDecoder = function(audioDecoder) {
    return this.delegate_ && this.delegate_.createAudioDecoder && this.delegate_.createAudioDecoder(audioDecoder);
  }
  InterfaceFactoryStub.prototype.createVideoDecoder = function(videoDecoder) {
    return this.delegate_ && this.delegate_.createVideoDecoder && this.delegate_.createVideoDecoder(videoDecoder);
  }
  InterfaceFactoryStub.prototype.createDefaultRenderer = function(audioDeviceId, renderer) {
    return this.delegate_ && this.delegate_.createDefaultRenderer && this.delegate_.createDefaultRenderer(audioDeviceId, renderer);
  }
  InterfaceFactoryStub.prototype.createCdm = function(keySystem, cdmConfig) {
    return this.delegate_ && this.delegate_.createCdm && this.delegate_.createCdm(keySystem, cdmConfig);
  }

  InterfaceFactoryStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kInterfaceFactory_CreateAudioDecoder_Name:
      var params = reader.decodeStruct(InterfaceFactory_CreateAudioDecoder_Params);
      this.createAudioDecoder(params.audioDecoder);
      return true;
    case kInterfaceFactory_CreateVideoDecoder_Name:
      var params = reader.decodeStruct(InterfaceFactory_CreateVideoDecoder_Params);
      this.createVideoDecoder(params.videoDecoder);
      return true;
    case kInterfaceFactory_CreateDefaultRenderer_Name:
      var params = reader.decodeStruct(InterfaceFactory_CreateDefaultRenderer_Params);
      this.createDefaultRenderer(params.audioDeviceId, params.renderer);
      return true;
    default:
      return false;
    }
  };

  InterfaceFactoryStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kInterfaceFactory_CreateCdm_Name:
      var params = reader.decodeStruct(InterfaceFactory_CreateCdm_Params);
      this.createCdm(params.keySystem, params.cdmConfig).then(function(response) {
        var responseParams =
            new InterfaceFactory_CreateCdm_ResponseParams();
        responseParams.cdm = response.cdm;
        responseParams.cdmContext = response.cdmContext;
        responseParams.errorMessage = response.errorMessage;
        var builder = new codec.MessageV1Builder(
            kInterfaceFactory_CreateCdm_Name,
            codec.align(InterfaceFactory_CreateCdm_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(InterfaceFactory_CreateCdm_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateInterfaceFactoryRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kInterfaceFactory_CreateAudioDecoder_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = InterfaceFactory_CreateAudioDecoder_Params;
      break;
      case kInterfaceFactory_CreateVideoDecoder_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = InterfaceFactory_CreateVideoDecoder_Params;
      break;
      case kInterfaceFactory_CreateDefaultRenderer_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = InterfaceFactory_CreateDefaultRenderer_Params;
      break;
      case kInterfaceFactory_CreateCdm_Name:
        if (message.expectsResponse())
          paramsClass = InterfaceFactory_CreateCdm_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateInterfaceFactoryResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kInterfaceFactory_CreateCdm_Name:
        if (message.isResponse())
          paramsClass = InterfaceFactory_CreateCdm_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var InterfaceFactory = {
    name: 'media.mojom.InterfaceFactory',
    kVersion: 0,
    ptrClass: InterfaceFactoryPtr,
    proxyClass: InterfaceFactoryProxy,
    stubClass: InterfaceFactoryStub,
    validateRequest: validateInterfaceFactoryRequest,
    validateResponse: validateInterfaceFactoryResponse,
  };
  InterfaceFactoryStub.prototype.validator = validateInterfaceFactoryRequest;
  InterfaceFactoryProxy.prototype.validator = validateInterfaceFactoryResponse;
  exports.InterfaceFactory = InterfaceFactory;
  exports.InterfaceFactoryPtr = InterfaceFactoryPtr;
  exports.InterfaceFactoryAssociatedPtr = InterfaceFactoryAssociatedPtr;
})();