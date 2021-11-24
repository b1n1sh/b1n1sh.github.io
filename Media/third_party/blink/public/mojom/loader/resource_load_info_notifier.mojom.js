// third_party/blink/public/mojom/loader/resource_load_info_notifier.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/resource_load_info_notifier.mojom';
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
  var fetch_api$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/fetch_api.mojom', '../../../../../services/network/public/mojom/fetch_api.mojom.js');
  }
  var url_loader$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader.mojom', '../../../../../services/network/public/mojom/url_loader.mojom.js');
  }
  var url_loader_completion_status$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader_completion_status.mojom', '../../../../../services/network/public/mojom/url_loader_completion_status.mojom.js');
  }
  var url_request$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_request.mojom', '../../../../../services/network/public/mojom/url_request.mojom.js');
  }
  var url_response_head$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_response_head.mojom', '../../../../../services/network/public/mojom/url_response_head.mojom.js');
  }
  var resource_load_info$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/resource_load_info.mojom', 'resource_load_info.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.prototype.initDefaults_ = function() {
    this.redirectInfo = null;
    this.redirectResponse = null;
  };
  ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.validate = function(messageValidator, offset) {
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


    // validate ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.redirectInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url_loader$.URLRequestRedirectInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.redirectResponse
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url_response_head$.URLResponseHead, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.encodedSize = codec.kStructHeaderSize + 16;

  ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.decode = function(decoder) {
    var packed;
    var val = new ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.redirectInfo =
        decoder.decodeStructPointer(url_loader$.URLRequestRedirectInfo);
    val.redirectResponse =
        decoder.decodeStructPointer(url_response_head$.URLResponseHead);
    return val;
  };

  ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url_loader$.URLRequestRedirectInfo, val.redirectInfo);
    encoder.encodeStructPointer(url_response_head$.URLResponseHead, val.redirectResponse);
  };
  function ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.responseUrl = null;
    this.head = null;
    this.requestDestination = 0;
    this.previewsState = 0;
  };
  ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.validate = function(messageValidator, offset) {
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



    // validate ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.responseUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.head
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url_response_head$.URLResponseHead, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.requestDestination
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 24, fetch_api$.RequestDestination);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.encodedSize = codec.kStructHeaderSize + 32;

  ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.decode = function(decoder) {
    var packed;
    var val = new ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId =
        decoder.decodeStruct(codec.Int64);
    val.responseUrl =
        decoder.decodeStructPointer(url$.Url);
    val.head =
        decoder.decodeStructPointer(url_response_head$.URLResponseHead);
    val.requestDestination =
        decoder.decodeStruct(new codec.Enum(fetch_api$.RequestDestination));
    val.previewsState =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.requestId);
    encoder.encodeStructPointer(url$.Url, val.responseUrl);
    encoder.encodeStructPointer(url_response_head$.URLResponseHead, val.head);
    encoder.encodeStruct(codec.Int32, val.requestDestination);
    encoder.encodeStruct(codec.Int32, val.previewsState);
  };
  function ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
    this.transferSizeDiff = 0;
  };
  ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params.validate = function(messageValidator, offset) {
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



    return validator.validationError.NONE;
  };

  ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params.encodedSize = codec.kStructHeaderSize + 16;

  ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params.decode = function(decoder) {
    var packed;
    var val = new ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId =
        decoder.decodeStruct(codec.Int64);
    val.transferSizeDiff =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.requestId);
    encoder.encodeStruct(codec.Int32, val.transferSizeDiff);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.prototype.initDefaults_ = function() {
    this.resourceLoadInfo = null;
    this.status = null;
  };
  ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.validate = function(messageValidator, offset) {
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


    // validate ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.resourceLoadInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, resource_load_info$.ResourceLoadInfo, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url_loader_completion_status$.URLLoaderCompletionStatus, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.encodedSize = codec.kStructHeaderSize + 16;

  ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.decode = function(decoder) {
    var packed;
    var val = new ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.resourceLoadInfo =
        decoder.decodeStructPointer(resource_load_info$.ResourceLoadInfo);
    val.status =
        decoder.decodeStructPointer(url_loader_completion_status$.URLLoaderCompletionStatus);
    return val;
  };

  ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(resource_load_info$.ResourceLoadInfo, val.resourceLoadInfo);
    encoder.encodeStructPointer(url_loader_completion_status$.URLLoaderCompletionStatus, val.status);
  };
  function ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params.prototype.initDefaults_ = function() {
    this.requestId = 0;
  };
  ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params.validate = function(messageValidator, offset) {
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

  ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params.encodedSize = codec.kStructHeaderSize + 8;

  ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params.decode = function(decoder) {
    var packed;
    var val = new ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.requestId =
        decoder.decodeStruct(codec.Int64);
    return val;
  };

  ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.requestId);
  };
  function ResourceLoadInfoNotifier_Clone_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ResourceLoadInfoNotifier_Clone_Params.prototype.initDefaults_ = function() {
    this.pendingResourceLoadInfoNotifier = new bindings.InterfaceRequest();
  };
  ResourceLoadInfoNotifier_Clone_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ResourceLoadInfoNotifier_Clone_Params.validate = function(messageValidator, offset) {
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


    // validate ResourceLoadInfoNotifier_Clone_Params.pendingResourceLoadInfoNotifier
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ResourceLoadInfoNotifier_Clone_Params.encodedSize = codec.kStructHeaderSize + 8;

  ResourceLoadInfoNotifier_Clone_Params.decode = function(decoder) {
    var packed;
    var val = new ResourceLoadInfoNotifier_Clone_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pendingResourceLoadInfoNotifier =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ResourceLoadInfoNotifier_Clone_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ResourceLoadInfoNotifier_Clone_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.pendingResourceLoadInfoNotifier);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Name = 0;
  var kResourceLoadInfoNotifier_NotifyResourceResponseReceived_Name = 1;
  var kResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Name = 2;
  var kResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Name = 3;
  var kResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Name = 4;
  var kResourceLoadInfoNotifier_Clone_Name = 5;

  function ResourceLoadInfoNotifierPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(ResourceLoadInfoNotifier,
                                                   handleOrPtrInfo);
  }

  function ResourceLoadInfoNotifierAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        ResourceLoadInfoNotifier, associatedInterfacePtrInfo);
  }

  ResourceLoadInfoNotifierAssociatedPtr.prototype =
      Object.create(ResourceLoadInfoNotifierPtr.prototype);
  ResourceLoadInfoNotifierAssociatedPtr.prototype.constructor =
      ResourceLoadInfoNotifierAssociatedPtr;

  function ResourceLoadInfoNotifierProxy(receiver) {
    this.receiver_ = receiver;
  }
  ResourceLoadInfoNotifierPtr.prototype.notifyResourceRedirectReceived = function() {
    return ResourceLoadInfoNotifierProxy.prototype.notifyResourceRedirectReceived
        .apply(this.ptr.getProxy(), arguments);
  };

  ResourceLoadInfoNotifierProxy.prototype.notifyResourceRedirectReceived = function(redirectInfo, redirectResponse) {
    var params_ = new ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params();
    params_.redirectInfo = redirectInfo;
    params_.redirectResponse = redirectResponse;
    var builder = new codec.MessageV0Builder(
        kResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Name,
        codec.align(ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params.encodedSize));
    builder.encodeStruct(ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ResourceLoadInfoNotifierPtr.prototype.notifyResourceResponseReceived = function() {
    return ResourceLoadInfoNotifierProxy.prototype.notifyResourceResponseReceived
        .apply(this.ptr.getProxy(), arguments);
  };

  ResourceLoadInfoNotifierProxy.prototype.notifyResourceResponseReceived = function(requestId, responseUrl, head, requestDestination, previewsState) {
    var params_ = new ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params();
    params_.requestId = requestId;
    params_.responseUrl = responseUrl;
    params_.head = head;
    params_.requestDestination = requestDestination;
    params_.previewsState = previewsState;
    var builder = new codec.MessageV0Builder(
        kResourceLoadInfoNotifier_NotifyResourceResponseReceived_Name,
        codec.align(ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params.encodedSize));
    builder.encodeStruct(ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ResourceLoadInfoNotifierPtr.prototype.notifyResourceTransferSizeUpdated = function() {
    return ResourceLoadInfoNotifierProxy.prototype.notifyResourceTransferSizeUpdated
        .apply(this.ptr.getProxy(), arguments);
  };

  ResourceLoadInfoNotifierProxy.prototype.notifyResourceTransferSizeUpdated = function(requestId, transferSizeDiff) {
    var params_ = new ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params();
    params_.requestId = requestId;
    params_.transferSizeDiff = transferSizeDiff;
    var builder = new codec.MessageV0Builder(
        kResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Name,
        codec.align(ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params.encodedSize));
    builder.encodeStruct(ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ResourceLoadInfoNotifierPtr.prototype.notifyResourceLoadCompleted = function() {
    return ResourceLoadInfoNotifierProxy.prototype.notifyResourceLoadCompleted
        .apply(this.ptr.getProxy(), arguments);
  };

  ResourceLoadInfoNotifierProxy.prototype.notifyResourceLoadCompleted = function(resourceLoadInfo, status) {
    var params_ = new ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params();
    params_.resourceLoadInfo = resourceLoadInfo;
    params_.status = status;
    var builder = new codec.MessageV0Builder(
        kResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Name,
        codec.align(ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params.encodedSize));
    builder.encodeStruct(ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ResourceLoadInfoNotifierPtr.prototype.notifyResourceLoadCanceled = function() {
    return ResourceLoadInfoNotifierProxy.prototype.notifyResourceLoadCanceled
        .apply(this.ptr.getProxy(), arguments);
  };

  ResourceLoadInfoNotifierProxy.prototype.notifyResourceLoadCanceled = function(requestId) {
    var params_ = new ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params();
    params_.requestId = requestId;
    var builder = new codec.MessageV0Builder(
        kResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Name,
        codec.align(ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params.encodedSize));
    builder.encodeStruct(ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  ResourceLoadInfoNotifierPtr.prototype.clone = function() {
    return ResourceLoadInfoNotifierProxy.prototype.clone
        .apply(this.ptr.getProxy(), arguments);
  };

  ResourceLoadInfoNotifierProxy.prototype.clone = function(pendingResourceLoadInfoNotifier) {
    var params_ = new ResourceLoadInfoNotifier_Clone_Params();
    params_.pendingResourceLoadInfoNotifier = pendingResourceLoadInfoNotifier;
    var builder = new codec.MessageV0Builder(
        kResourceLoadInfoNotifier_Clone_Name,
        codec.align(ResourceLoadInfoNotifier_Clone_Params.encodedSize));
    builder.encodeStruct(ResourceLoadInfoNotifier_Clone_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function ResourceLoadInfoNotifierStub(delegate) {
    this.delegate_ = delegate;
  }
  ResourceLoadInfoNotifierStub.prototype.notifyResourceRedirectReceived = function(redirectInfo, redirectResponse) {
    return this.delegate_ && this.delegate_.notifyResourceRedirectReceived && this.delegate_.notifyResourceRedirectReceived(redirectInfo, redirectResponse);
  }
  ResourceLoadInfoNotifierStub.prototype.notifyResourceResponseReceived = function(requestId, responseUrl, head, requestDestination, previewsState) {
    return this.delegate_ && this.delegate_.notifyResourceResponseReceived && this.delegate_.notifyResourceResponseReceived(requestId, responseUrl, head, requestDestination, previewsState);
  }
  ResourceLoadInfoNotifierStub.prototype.notifyResourceTransferSizeUpdated = function(requestId, transferSizeDiff) {
    return this.delegate_ && this.delegate_.notifyResourceTransferSizeUpdated && this.delegate_.notifyResourceTransferSizeUpdated(requestId, transferSizeDiff);
  }
  ResourceLoadInfoNotifierStub.prototype.notifyResourceLoadCompleted = function(resourceLoadInfo, status) {
    return this.delegate_ && this.delegate_.notifyResourceLoadCompleted && this.delegate_.notifyResourceLoadCompleted(resourceLoadInfo, status);
  }
  ResourceLoadInfoNotifierStub.prototype.notifyResourceLoadCanceled = function(requestId) {
    return this.delegate_ && this.delegate_.notifyResourceLoadCanceled && this.delegate_.notifyResourceLoadCanceled(requestId);
  }
  ResourceLoadInfoNotifierStub.prototype.clone = function(pendingResourceLoadInfoNotifier) {
    return this.delegate_ && this.delegate_.clone && this.delegate_.clone(pendingResourceLoadInfoNotifier);
  }

  ResourceLoadInfoNotifierStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Name:
      var params = reader.decodeStruct(ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params);
      this.notifyResourceRedirectReceived(params.redirectInfo, params.redirectResponse);
      return true;
    case kResourceLoadInfoNotifier_NotifyResourceResponseReceived_Name:
      var params = reader.decodeStruct(ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params);
      this.notifyResourceResponseReceived(params.requestId, params.responseUrl, params.head, params.requestDestination, params.previewsState);
      return true;
    case kResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Name:
      var params = reader.decodeStruct(ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params);
      this.notifyResourceTransferSizeUpdated(params.requestId, params.transferSizeDiff);
      return true;
    case kResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Name:
      var params = reader.decodeStruct(ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params);
      this.notifyResourceLoadCompleted(params.resourceLoadInfo, params.status);
      return true;
    case kResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Name:
      var params = reader.decodeStruct(ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params);
      this.notifyResourceLoadCanceled(params.requestId);
      return true;
    case kResourceLoadInfoNotifier_Clone_Name:
      var params = reader.decodeStruct(ResourceLoadInfoNotifier_Clone_Params);
      this.clone(params.pendingResourceLoadInfoNotifier);
      return true;
    default:
      return false;
    }
  };

  ResourceLoadInfoNotifierStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateResourceLoadInfoNotifierRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params;
      break;
      case kResourceLoadInfoNotifier_NotifyResourceResponseReceived_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params;
      break;
      case kResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params;
      break;
      case kResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params;
      break;
      case kResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params;
      break;
      case kResourceLoadInfoNotifier_Clone_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = ResourceLoadInfoNotifier_Clone_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateResourceLoadInfoNotifierResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var ResourceLoadInfoNotifier = {
    name: 'blink.mojom.ResourceLoadInfoNotifier',
    kVersion: 0,
    ptrClass: ResourceLoadInfoNotifierPtr,
    proxyClass: ResourceLoadInfoNotifierProxy,
    stubClass: ResourceLoadInfoNotifierStub,
    validateRequest: validateResourceLoadInfoNotifierRequest,
    validateResponse: null,
  };
  ResourceLoadInfoNotifierStub.prototype.validator = validateResourceLoadInfoNotifierRequest;
  ResourceLoadInfoNotifierProxy.prototype.validator = null;
  exports.ResourceLoadInfoNotifier = ResourceLoadInfoNotifier;
  exports.ResourceLoadInfoNotifierPtr = ResourceLoadInfoNotifierPtr;
  exports.ResourceLoadInfoNotifierAssociatedPtr = ResourceLoadInfoNotifierAssociatedPtr;
})();