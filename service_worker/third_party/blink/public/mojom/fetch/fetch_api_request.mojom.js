// third_party/blink/public/mojom/fetch/fetch_api_request.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/fetch/fetch_api_request.mojom';
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
  var file_path$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/file_path.mojom', '../../../../../mojo/public/mojom/base/file_path.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var chunked_data_pipe_getter$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/chunked_data_pipe_getter.mojom', '../../../../../services/network/public/mojom/chunked_data_pipe_getter.mojom.js');
  }
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
  var serialized_blob$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/blob/serialized_blob.mojom', '../blob/serialized_blob.mojom.js');
  }
  var request_context_frame_type$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/request_context_frame_type.mojom', '../loader/request_context_frame_type.mojom.js');
  }
  var referrer$ =
      mojo.internal.exposeNamespace('blink.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'third_party/blink/public/mojom/loader/referrer.mojom', '../loader/referrer.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }


  var RequestContextType = {};
  RequestContextType.UNSPECIFIED = 0;
  RequestContextType.AUDIO = 1;
  RequestContextType.BEACON = 2;
  RequestContextType.CSP_REPORT = 3;
  RequestContextType.DOWNLOAD = 4;
  RequestContextType.EMBED = 5;
  RequestContextType.EVENT_SOURCE = 6;
  RequestContextType.FAVICON = 7;
  RequestContextType.FETCH = 8;
  RequestContextType.FONT = 9;
  RequestContextType.FORM = 10;
  RequestContextType.FRAME = 11;
  RequestContextType.HYPERLINK = 12;
  RequestContextType.IFRAME = 13;
  RequestContextType.IMAGE = 14;
  RequestContextType.IMAGE_SET = 15;
  RequestContextType.IMPORT = 16;
  RequestContextType.INTERNAL = 17;
  RequestContextType.LOCATION = 18;
  RequestContextType.MANIFEST = 19;
  RequestContextType.OBJECT = 20;
  RequestContextType.PING = 21;
  RequestContextType.PLUGIN = 22;
  RequestContextType.PREFETCH = 23;
  RequestContextType.SCRIPT = 24;
  RequestContextType.SERVICE_WORKER = 25;
  RequestContextType.SHARED_WORKER = 26;
  RequestContextType.SUBRESOURCE = 27;
  RequestContextType.SUBRESOURCE_WEBBUNDLE = 28;
  RequestContextType.STYLE = 29;
  RequestContextType.TRACK = 30;
  RequestContextType.VIDEO = 31;
  RequestContextType.WORKER = 32;
  RequestContextType.XML_HTTP_REQUEST = 33;
  RequestContextType.XSLT = 34;
  RequestContextType.MIN_VALUE = 0;
  RequestContextType.MAX_VALUE = 34;

  RequestContextType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
      return true;
    }
    return false;
  };

  RequestContextType.toKnownEnumValue = function(value) {
    return value;
  };

  RequestContextType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchCacheMode = {};
  FetchCacheMode.kDefault = 0;
  FetchCacheMode.kNoStore = 1;
  FetchCacheMode.kBypassCache = 2;
  FetchCacheMode.kValidateCache = 3;
  FetchCacheMode.kForceCache = 4;
  FetchCacheMode.kOnlyIfCached = 5;
  FetchCacheMode.kUnspecifiedOnlyIfCachedStrict = 6;
  FetchCacheMode.kUnspecifiedForceCacheMiss = 7;
  FetchCacheMode.MIN_VALUE = 0;
  FetchCacheMode.MAX_VALUE = 7;

  FetchCacheMode.isKnownEnumValue = function(value) {
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

  FetchCacheMode.toKnownEnumValue = function(value) {
    return value;
  };

  FetchCacheMode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var FetchImportanceMode = {};
  FetchImportanceMode.kImportanceLow = 0;
  FetchImportanceMode.kImportanceAuto = 1;
  FetchImportanceMode.kImportanceHigh = 2;
  FetchImportanceMode.MIN_VALUE = 0;
  FetchImportanceMode.MAX_VALUE = 2;

  FetchImportanceMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  FetchImportanceMode.toKnownEnumValue = function(value) {
    return value;
  };

  FetchImportanceMode.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function FetchAPIRequestHeaders(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FetchAPIRequestHeaders.prototype.initDefaults_ = function() {
    this.headers = null;
  };
  FetchAPIRequestHeaders.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FetchAPIRequestHeaders.validate = function(messageValidator, offset) {
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


    // validate FetchAPIRequestHeaders.headers
    err = messageValidator.validateMapPointer(offset + codec.kStructHeaderSize + 0, false, codec.String, codec.String, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FetchAPIRequestHeaders.encodedSize = codec.kStructHeaderSize + 8;

  FetchAPIRequestHeaders.decode = function(decoder) {
    var packed;
    var val = new FetchAPIRequestHeaders();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.headers =
        decoder.decodeMapPointer(codec.String, codec.String);
    return val;
  };

  FetchAPIRequestHeaders.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FetchAPIRequestHeaders.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeMapPointer(codec.String, codec.String, val.headers);
  };
  function FetchAPIRequestBody(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FetchAPIRequestBody.prototype.initDefaults_ = function() {
    this.elements = null;
    this.identifier = 0;
    this.containsSensitiveInfo = false;
  };
  FetchAPIRequestBody.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FetchAPIRequestBody.validate = function(messageValidator, offset) {
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


    // validate FetchAPIRequestBody.elements
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 16, url_loader$.DataElement, false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  FetchAPIRequestBody.encodedSize = codec.kStructHeaderSize + 24;

  FetchAPIRequestBody.decode = function(decoder) {
    var packed;
    var val = new FetchAPIRequestBody();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.elements =
        decoder.decodeArrayPointer(url_loader$.DataElement);
    val.identifier =
        decoder.decodeStruct(codec.Uint64);
    packed = decoder.readUint8();
    val.containsSensitiveInfo = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  FetchAPIRequestBody.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FetchAPIRequestBody.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(url_loader$.DataElement, val.elements);
    encoder.encodeStruct(codec.Uint64, val.identifier);
    packed = 0;
    packed |= (val.containsSensitiveInfo & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function FetchAPIRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FetchAPIRequest.prototype.initDefaults_ = function() {
    this.mode = fetch_api$.RequestMode.kNoCors;
    this.isMainResourceLoad = false;
    this.keepalive = false;
    this.isReload = false;
    this.isHistoryNavigation = false;
    this.destination = fetch_api$.RequestDestination.kEmpty;
    this.frameType = request_context_frame_type$.RequestContextFrameType.kNone;
    this.url = null;
    this.method = null;
    this.headers = null;
    this.blob = null;
    this.body = null;
    this.referrer = null;
    this.credentialsMode = fetch_api$.CredentialsMode.kOmit;
    this.cacheMode = FetchCacheMode.kDefault;
    this.redirectMode = fetch_api$.RedirectMode.kFollow;
    this.priority = url_loader$.RequestPriority.kIdle;
    this.integrity = null;
    this.fetchWindowId = null;
    this.devtoolsStackId = null;
  };
  FetchAPIRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FetchAPIRequest.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 112}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.mode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, fetch_api$.RequestMode);
    if (err !== validator.validationError.NONE)
        return err;



    // validate FetchAPIRequest.destination
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, fetch_api$.RequestDestination);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.frameType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, request_context_frame_type$.RequestContextFrameType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.method
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 24, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.headers
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, FetchAPIRequestHeaders, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.blob
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, serialized_blob$.SerializedBlob, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.body
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, FetchAPIRequestBody, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.referrer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 56, referrer$.Referrer, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.credentialsMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 64, fetch_api$.CredentialsMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.cacheMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 68, FetchCacheMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.redirectMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 72, fetch_api$.RedirectMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.integrity
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 80, true)
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.priority
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 76, url_loader$.RequestPriority);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FetchAPIRequest.fetchWindowId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 88, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;





    // validate FetchAPIRequest.devtoolsStackId
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 96, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FetchAPIRequest.encodedSize = codec.kStructHeaderSize + 104;

  FetchAPIRequest.decode = function(decoder) {
    var packed;
    var val = new FetchAPIRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.mode =
        decoder.decodeStruct(new codec.Enum(fetch_api$.RequestMode));
    packed = decoder.readUint8();
    val.isMainResourceLoad = (packed >> 0) & 1 ? true : false;
    val.keepalive = (packed >> 1) & 1 ? true : false;
    val.isReload = (packed >> 2) & 1 ? true : false;
    val.isHistoryNavigation = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.destination =
        decoder.decodeStruct(new codec.Enum(fetch_api$.RequestDestination));
    val.frameType =
        decoder.decodeStruct(new codec.Enum(request_context_frame_type$.RequestContextFrameType));
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.method =
        decoder.decodeStruct(codec.String);
    val.headers =
        decoder.decodeStructPointer(FetchAPIRequestHeaders);
    val.blob =
        decoder.decodeStructPointer(serialized_blob$.SerializedBlob);
    val.body =
        decoder.decodeStructPointer(FetchAPIRequestBody);
    val.referrer =
        decoder.decodeStructPointer(referrer$.Referrer);
    val.credentialsMode =
        decoder.decodeStruct(new codec.Enum(fetch_api$.CredentialsMode));
    val.cacheMode =
        decoder.decodeStruct(new codec.Enum(FetchCacheMode));
    val.redirectMode =
        decoder.decodeStruct(new codec.Enum(fetch_api$.RedirectMode));
    val.priority =
        decoder.decodeStruct(new codec.Enum(url_loader$.RequestPriority));
    val.integrity =
        decoder.decodeStruct(codec.NullableString);
    val.fetchWindowId =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.devtoolsStackId =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  FetchAPIRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FetchAPIRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.mode);
    packed = 0;
    packed |= (val.isMainResourceLoad & 1) << 0
    packed |= (val.keepalive & 1) << 1
    packed |= (val.isReload & 1) << 2
    packed |= (val.isHistoryNavigation & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.destination);
    encoder.encodeStruct(codec.Int32, val.frameType);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.method);
    encoder.encodeStructPointer(FetchAPIRequestHeaders, val.headers);
    encoder.encodeStructPointer(serialized_blob$.SerializedBlob, val.blob);
    encoder.encodeStructPointer(FetchAPIRequestBody, val.body);
    encoder.encodeStructPointer(referrer$.Referrer, val.referrer);
    encoder.encodeStruct(codec.Int32, val.credentialsMode);
    encoder.encodeStruct(codec.Int32, val.cacheMode);
    encoder.encodeStruct(codec.Int32, val.redirectMode);
    encoder.encodeStruct(codec.Int32, val.priority);
    encoder.encodeStruct(codec.NullableString, val.integrity);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.fetchWindowId);
    encoder.encodeStruct(codec.NullableString, val.devtoolsStackId);
  };
  exports.RequestContextType = RequestContextType;
  exports.FetchCacheMode = FetchCacheMode;
  exports.FetchImportanceMode = FetchImportanceMode;
  exports.FetchAPIRequestHeaders = FetchAPIRequestHeaders;
  exports.FetchAPIRequestBody = FetchAPIRequestBody;
  exports.FetchAPIRequest = FetchAPIRequest;
})();