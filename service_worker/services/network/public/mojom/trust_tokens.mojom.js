// services/network/public/mojom/trust_tokens.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/trust_tokens.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');
  var origin$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/origin.mojom', '../../../../url/mojom/origin.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }


  var TrustTokenProtocolVersion = {};
  TrustTokenProtocolVersion.kTrustTokenV2Pmb = 0;
  TrustTokenProtocolVersion.kTrustTokenV2Voprf = 1;
  TrustTokenProtocolVersion.MIN_VALUE = 0;
  TrustTokenProtocolVersion.MAX_VALUE = 1;

  TrustTokenProtocolVersion.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  TrustTokenProtocolVersion.toKnownEnumValue = function(value) {
    return value;
  };

  TrustTokenProtocolVersion.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var TrustTokenOperationStatus = {};
  TrustTokenOperationStatus.kOk = 0;
  TrustTokenOperationStatus.kInvalidArgument = 1;
  TrustTokenOperationStatus.kFailedPrecondition = 2;
  TrustTokenOperationStatus.kResourceExhausted = 3;
  TrustTokenOperationStatus.kAlreadyExists = 4;
  TrustTokenOperationStatus.kUnavailable = 5;
  TrustTokenOperationStatus.kBadResponse = 6;
  TrustTokenOperationStatus.kInternalError = 7;
  TrustTokenOperationStatus.kUnknownError = 8;
  TrustTokenOperationStatus.kOperationSuccessfullyFulfilledLocally = 9;
  TrustTokenOperationStatus.MIN_VALUE = 0;
  TrustTokenOperationStatus.MAX_VALUE = 9;

  TrustTokenOperationStatus.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  TrustTokenOperationStatus.toKnownEnumValue = function(value) {
    return value;
  };

  TrustTokenOperationStatus.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var TrustTokenOperationType = {};
  TrustTokenOperationType.kIssuance = 0;
  TrustTokenOperationType.kRedemption = 1;
  TrustTokenOperationType.kSigning = 2;
  TrustTokenOperationType.MIN_VALUE = 0;
  TrustTokenOperationType.MAX_VALUE = 2;

  TrustTokenOperationType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  TrustTokenOperationType.toKnownEnumValue = function(value) {
    return value;
  };

  TrustTokenOperationType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var TrustTokenRefreshPolicy = {};
  TrustTokenRefreshPolicy.kUseCached = 0;
  TrustTokenRefreshPolicy.kRefresh = 1;
  TrustTokenRefreshPolicy.MIN_VALUE = 0;
  TrustTokenRefreshPolicy.MAX_VALUE = 1;

  TrustTokenRefreshPolicy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  TrustTokenRefreshPolicy.toKnownEnumValue = function(value) {
    return value;
  };

  TrustTokenRefreshPolicy.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var TrustTokenSignRequestData = {};
  TrustTokenSignRequestData.kOmit = 0;
  TrustTokenSignRequestData.kHeadersOnly = 1;
  TrustTokenSignRequestData.kInclude = 2;
  TrustTokenSignRequestData.MIN_VALUE = 0;
  TrustTokenSignRequestData.MAX_VALUE = 2;

  TrustTokenSignRequestData.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  TrustTokenSignRequestData.toKnownEnumValue = function(value) {
    return value;
  };

  TrustTokenSignRequestData.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function TrustTokenParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustTokenParams.prototype.initDefaults_ = function() {
    this.type = 0;
    this.refreshPolicy = TrustTokenRefreshPolicy.kUseCached;
    this.signRequestData = TrustTokenSignRequestData.kOmit;
    this.includeTimestampHeader = false;
    this.issuers = null;
    this.additionalSignedHeaders = null;
    this.possiblyUnsafeAdditionalSigningData = null;
  };
  TrustTokenParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 48}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenParams.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, TrustTokenOperationType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenParams.refreshPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, TrustTokenRefreshPolicy);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenParams.signRequestData
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, TrustTokenSignRequestData);
    if (err !== validator.validationError.NONE)
        return err;



    // validate TrustTokenParams.issuers
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(origin$.Origin), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenParams.additionalSignedHeaders
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenParams.possiblyUnsafeAdditionalSigningData
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 32, true)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustTokenParams.encodedSize = codec.kStructHeaderSize + 40;

  TrustTokenParams.decode = function(decoder) {
    var packed;
    var val = new TrustTokenParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(new codec.Enum(TrustTokenOperationType));
    val.refreshPolicy =
        decoder.decodeStruct(new codec.Enum(TrustTokenRefreshPolicy));
    val.signRequestData =
        decoder.decodeStruct(new codec.Enum(TrustTokenSignRequestData));
    packed = decoder.readUint8();
    val.includeTimestampHeader = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.issuers =
        decoder.decodeArrayPointer(new codec.PointerTo(origin$.Origin));
    val.additionalSignedHeaders =
        decoder.decodeArrayPointer(codec.String);
    val.possiblyUnsafeAdditionalSigningData =
        decoder.decodeStruct(codec.NullableString);
    return val;
  };

  TrustTokenParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.refreshPolicy);
    encoder.encodeStruct(codec.Int32, val.signRequestData);
    packed = 0;
    packed |= (val.includeTimestampHeader & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(origin$.Origin), val.issuers);
    encoder.encodeArrayPointer(codec.String, val.additionalSignedHeaders);
    encoder.encodeStruct(codec.NullableString, val.possiblyUnsafeAdditionalSigningData);
  };
  function HasTrustTokensResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HasTrustTokensResult.prototype.initDefaults_ = function() {
    this.status = 0;
    this.hasTrustTokens = false;
  };
  HasTrustTokensResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HasTrustTokensResult.validate = function(messageValidator, offset) {
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


    // validate HasTrustTokensResult.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, TrustTokenOperationStatus);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  HasTrustTokensResult.encodedSize = codec.kStructHeaderSize + 8;

  HasTrustTokensResult.decode = function(decoder) {
    var packed;
    var val = new HasTrustTokensResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(new codec.Enum(TrustTokenOperationStatus));
    packed = decoder.readUint8();
    val.hasTrustTokens = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  HasTrustTokensResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HasTrustTokensResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    packed = 0;
    packed |= (val.hasTrustTokens & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function TrustTokenVerificationKey(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustTokenVerificationKey.prototype.initDefaults_ = function() {
    this.body = null;
    this.expiry = null;
  };
  TrustTokenVerificationKey.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenVerificationKey.validate = function(messageValidator, offset) {
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


    // validate TrustTokenVerificationKey.body
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenVerificationKey.expiry
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustTokenVerificationKey.encodedSize = codec.kStructHeaderSize + 16;

  TrustTokenVerificationKey.decode = function(decoder) {
    var packed;
    var val = new TrustTokenVerificationKey();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.body =
        decoder.decodeStruct(codec.String);
    val.expiry =
        decoder.decodeStructPointer(time$.Time);
    return val;
  };

  TrustTokenVerificationKey.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenVerificationKey.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.body);
    encoder.encodeStructPointer(time$.Time, val.expiry);
  };
  function TrustTokenKeyCommitmentResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  TrustTokenKeyCommitmentResult.Os = {};
  TrustTokenKeyCommitmentResult.Os.kAndroid = 0;
  TrustTokenKeyCommitmentResult.Os.MIN_VALUE = 0;
  TrustTokenKeyCommitmentResult.Os.MAX_VALUE = 0;

  TrustTokenKeyCommitmentResult.Os.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
      return true;
    }
    return false;
  };

  TrustTokenKeyCommitmentResult.Os.toKnownEnumValue = function(value) {
    return value;
  };

  TrustTokenKeyCommitmentResult.Os.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback = {};
  TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback.kWebIssuance = 0;
  TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback.kReturnWithError = 1;
  TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback.MIN_VALUE = 0;
  TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback.MAX_VALUE = 1;

  TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback.toKnownEnumValue = function(value) {
    return value;
  };

  TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  TrustTokenKeyCommitmentResult.prototype.initDefaults_ = function() {
    this.protocolVersion = 0;
    this.id = 0;
    this.batchSize = 0;
    this.unavailableLocalOperationFallback = 0;
    this.keys = null;
    this.requestIssuanceLocallyOn = null;
  };
  TrustTokenKeyCommitmentResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenKeyCommitmentResult.validate = function(messageValidator, offset) {
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


    // validate TrustTokenKeyCommitmentResult.protocolVersion
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, TrustTokenProtocolVersion);
    if (err !== validator.validationError.NONE)
        return err;




    // validate TrustTokenKeyCommitmentResult.keys
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(TrustTokenVerificationKey), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenKeyCommitmentResult.requestIssuanceLocallyOn
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, new codec.Enum(TrustTokenKeyCommitmentResult.Os), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenKeyCommitmentResult.unavailableLocalOperationFallback
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TrustTokenKeyCommitmentResult.encodedSize = codec.kStructHeaderSize + 32;

  TrustTokenKeyCommitmentResult.decode = function(decoder) {
    var packed;
    var val = new TrustTokenKeyCommitmentResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.protocolVersion =
        decoder.decodeStruct(new codec.Enum(TrustTokenProtocolVersion));
    val.id =
        decoder.decodeStruct(codec.Int32);
    val.batchSize =
        decoder.decodeStruct(codec.Int32);
    val.unavailableLocalOperationFallback =
        decoder.decodeStruct(new codec.Enum(TrustTokenKeyCommitmentResult.UnavailableLocalOperationFallback));
    val.keys =
        decoder.decodeArrayPointer(new codec.PointerTo(TrustTokenVerificationKey));
    val.requestIssuanceLocallyOn =
        decoder.decodeArrayPointer(new codec.Enum(TrustTokenKeyCommitmentResult.Os));
    return val;
  };

  TrustTokenKeyCommitmentResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenKeyCommitmentResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.protocolVersion);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.encodeStruct(codec.Int32, val.batchSize);
    encoder.encodeStruct(codec.Int32, val.unavailableLocalOperationFallback);
    encoder.encodeArrayPointer(new codec.PointerTo(TrustTokenVerificationKey), val.keys);
    encoder.encodeArrayPointer(new codec.Enum(TrustTokenKeyCommitmentResult.Os), val.requestIssuanceLocallyOn);
  };
  function FulfillTrustTokenIssuanceRequest(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  FulfillTrustTokenIssuanceRequest.prototype.initDefaults_ = function() {
    this.issuer = null;
    this.request = null;
  };
  FulfillTrustTokenIssuanceRequest.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FulfillTrustTokenIssuanceRequest.validate = function(messageValidator, offset) {
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


    // validate FulfillTrustTokenIssuanceRequest.issuer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FulfillTrustTokenIssuanceRequest.request
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FulfillTrustTokenIssuanceRequest.encodedSize = codec.kStructHeaderSize + 16;

  FulfillTrustTokenIssuanceRequest.decode = function(decoder) {
    var packed;
    var val = new FulfillTrustTokenIssuanceRequest();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.issuer =
        decoder.decodeStructPointer(origin$.Origin);
    val.request =
        decoder.decodeStruct(codec.String);
    return val;
  };

  FulfillTrustTokenIssuanceRequest.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FulfillTrustTokenIssuanceRequest.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.issuer);
    encoder.encodeStruct(codec.String, val.request);
  };
  function FulfillTrustTokenIssuanceAnswer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }

  FulfillTrustTokenIssuanceAnswer.Status = {};
  FulfillTrustTokenIssuanceAnswer.Status.kOk = 0;
  FulfillTrustTokenIssuanceAnswer.Status.kNotFound = 1;
  FulfillTrustTokenIssuanceAnswer.Status.kUnknownError = 2;
  FulfillTrustTokenIssuanceAnswer.Status.MIN_VALUE = 0;
  FulfillTrustTokenIssuanceAnswer.Status.MAX_VALUE = 2;

  FulfillTrustTokenIssuanceAnswer.Status.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  FulfillTrustTokenIssuanceAnswer.Status.toKnownEnumValue = function(value) {
    return value;
  };

  FulfillTrustTokenIssuanceAnswer.Status.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  FulfillTrustTokenIssuanceAnswer.prototype.initDefaults_ = function() {
    this.status = 0;
    this.response = null;
  };
  FulfillTrustTokenIssuanceAnswer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  FulfillTrustTokenIssuanceAnswer.validate = function(messageValidator, offset) {
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


    // validate FulfillTrustTokenIssuanceAnswer.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, FulfillTrustTokenIssuanceAnswer.Status);
    if (err !== validator.validationError.NONE)
        return err;


    // validate FulfillTrustTokenIssuanceAnswer.response
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  FulfillTrustTokenIssuanceAnswer.encodedSize = codec.kStructHeaderSize + 16;

  FulfillTrustTokenIssuanceAnswer.decode = function(decoder) {
    var packed;
    var val = new FulfillTrustTokenIssuanceAnswer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(new codec.Enum(FulfillTrustTokenIssuanceAnswer.Status));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.response =
        decoder.decodeStruct(codec.String);
    return val;
  };

  FulfillTrustTokenIssuanceAnswer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(FulfillTrustTokenIssuanceAnswer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.String, val.response);
  };
  function TrustTokenOperationResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TrustTokenOperationResult.prototype.initDefaults_ = function() {
    this.type = 0;
    this.status = 0;
    this.issuer = null;
    this.topLevelOrigin = null;
    this.issuedTokenCount = 0;
  };
  TrustTokenOperationResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TrustTokenOperationResult.validate = function(messageValidator, offset) {
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


    // validate TrustTokenOperationResult.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, TrustTokenOperationType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenOperationResult.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, TrustTokenOperationStatus);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenOperationResult.issuer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TrustTokenOperationResult.topLevelOrigin
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, origin$.Origin, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  TrustTokenOperationResult.encodedSize = codec.kStructHeaderSize + 32;

  TrustTokenOperationResult.decode = function(decoder) {
    var packed;
    var val = new TrustTokenOperationResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.type =
        decoder.decodeStruct(new codec.Enum(TrustTokenOperationType));
    val.status =
        decoder.decodeStruct(new codec.Enum(TrustTokenOperationStatus));
    val.issuer =
        decoder.decodeStructPointer(origin$.Origin);
    val.topLevelOrigin =
        decoder.decodeStructPointer(origin$.Origin);
    val.issuedTokenCount =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  TrustTokenOperationResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TrustTokenOperationResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.encodeStructPointer(origin$.Origin, val.issuer);
    encoder.encodeStructPointer(origin$.Origin, val.topLevelOrigin);
    encoder.encodeStruct(codec.Int32, val.issuedTokenCount);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function StoredTrustTokensForIssuer(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  StoredTrustTokensForIssuer.prototype.initDefaults_ = function() {
    this.issuer = null;
    this.count = 0;
  };
  StoredTrustTokensForIssuer.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  StoredTrustTokensForIssuer.validate = function(messageValidator, offset) {
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


    // validate StoredTrustTokensForIssuer.issuer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  StoredTrustTokensForIssuer.encodedSize = codec.kStructHeaderSize + 16;

  StoredTrustTokensForIssuer.decode = function(decoder) {
    var packed;
    var val = new StoredTrustTokensForIssuer();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.issuer =
        decoder.decodeStructPointer(origin$.Origin);
    val.count =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  StoredTrustTokensForIssuer.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(StoredTrustTokensForIssuer.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.issuer);
    encoder.encodeStruct(codec.Int32, val.count);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function HasTrustTokensAnswerer_HasTrustTokens_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HasTrustTokensAnswerer_HasTrustTokens_Params.prototype.initDefaults_ = function() {
    this.issuer = null;
  };
  HasTrustTokensAnswerer_HasTrustTokens_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HasTrustTokensAnswerer_HasTrustTokens_Params.validate = function(messageValidator, offset) {
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


    // validate HasTrustTokensAnswerer_HasTrustTokens_Params.issuer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, origin$.Origin, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HasTrustTokensAnswerer_HasTrustTokens_Params.encodedSize = codec.kStructHeaderSize + 8;

  HasTrustTokensAnswerer_HasTrustTokens_Params.decode = function(decoder) {
    var packed;
    var val = new HasTrustTokensAnswerer_HasTrustTokens_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.issuer =
        decoder.decodeStructPointer(origin$.Origin);
    return val;
  };

  HasTrustTokensAnswerer_HasTrustTokens_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HasTrustTokensAnswerer_HasTrustTokens_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(origin$.Origin, val.issuer);
  };
  function HasTrustTokensAnswerer_HasTrustTokens_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.prototype.initDefaults_ = function() {
    this.result = null;
  };
  HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.result
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, HasTrustTokensResult, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new HasTrustTokensAnswerer_HasTrustTokens_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.result =
        decoder.decodeStructPointer(HasTrustTokensResult);
    return val;
  };

  HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(HasTrustTokensResult, val.result);
  };
  var kHasTrustTokensAnswerer_HasTrustTokens_Name = 1803545543;

  function HasTrustTokensAnswererPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(HasTrustTokensAnswerer,
                                                   handleOrPtrInfo);
  }

  function HasTrustTokensAnswererAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        HasTrustTokensAnswerer, associatedInterfacePtrInfo);
  }

  HasTrustTokensAnswererAssociatedPtr.prototype =
      Object.create(HasTrustTokensAnswererPtr.prototype);
  HasTrustTokensAnswererAssociatedPtr.prototype.constructor =
      HasTrustTokensAnswererAssociatedPtr;

  function HasTrustTokensAnswererProxy(receiver) {
    this.receiver_ = receiver;
  }
  HasTrustTokensAnswererPtr.prototype.hasTrustTokens = function() {
    return HasTrustTokensAnswererProxy.prototype.hasTrustTokens
        .apply(this.ptr.getProxy(), arguments);
  };

  HasTrustTokensAnswererProxy.prototype.hasTrustTokens = function(issuer) {
    var params_ = new HasTrustTokensAnswerer_HasTrustTokens_Params();
    params_.issuer = issuer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kHasTrustTokensAnswerer_HasTrustTokens_Name,
          codec.align(HasTrustTokensAnswerer_HasTrustTokens_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(HasTrustTokensAnswerer_HasTrustTokens_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(HasTrustTokensAnswerer_HasTrustTokens_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function HasTrustTokensAnswererStub(delegate) {
    this.delegate_ = delegate;
  }
  HasTrustTokensAnswererStub.prototype.hasTrustTokens = function(issuer) {
    return this.delegate_ && this.delegate_.hasTrustTokens && this.delegate_.hasTrustTokens(issuer);
  }

  HasTrustTokensAnswererStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  HasTrustTokensAnswererStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kHasTrustTokensAnswerer_HasTrustTokens_Name:
      var params = reader.decodeStruct(HasTrustTokensAnswerer_HasTrustTokens_Params);
      this.hasTrustTokens(params.issuer).then(function(response) {
        var responseParams =
            new HasTrustTokensAnswerer_HasTrustTokens_ResponseParams();
        responseParams.result = response.result;
        var builder = new codec.MessageV1Builder(
            kHasTrustTokensAnswerer_HasTrustTokens_Name,
            codec.align(HasTrustTokensAnswerer_HasTrustTokens_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(HasTrustTokensAnswerer_HasTrustTokens_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateHasTrustTokensAnswererRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kHasTrustTokensAnswerer_HasTrustTokens_Name:
        if (message.expectsResponse())
          paramsClass = HasTrustTokensAnswerer_HasTrustTokens_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateHasTrustTokensAnswererResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kHasTrustTokensAnswerer_HasTrustTokens_Name:
        if (message.isResponse())
          paramsClass = HasTrustTokensAnswerer_HasTrustTokens_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var HasTrustTokensAnswerer = {
    name: 'network.mojom.HasTrustTokensAnswerer',
    kVersion: 0,
    ptrClass: HasTrustTokensAnswererPtr,
    proxyClass: HasTrustTokensAnswererProxy,
    stubClass: HasTrustTokensAnswererStub,
    validateRequest: validateHasTrustTokensAnswererRequest,
    validateResponse: validateHasTrustTokensAnswererResponse,
  };
  HasTrustTokensAnswererStub.prototype.validator = validateHasTrustTokensAnswererRequest;
  HasTrustTokensAnswererProxy.prototype.validator = validateHasTrustTokensAnswererResponse;
  exports.TrustTokenProtocolVersion = TrustTokenProtocolVersion;
  exports.TrustTokenOperationStatus = TrustTokenOperationStatus;
  exports.TrustTokenOperationType = TrustTokenOperationType;
  exports.TrustTokenRefreshPolicy = TrustTokenRefreshPolicy;
  exports.TrustTokenSignRequestData = TrustTokenSignRequestData;
  exports.TrustTokenParams = TrustTokenParams;
  exports.HasTrustTokensResult = HasTrustTokensResult;
  exports.TrustTokenVerificationKey = TrustTokenVerificationKey;
  exports.TrustTokenKeyCommitmentResult = TrustTokenKeyCommitmentResult;
  exports.FulfillTrustTokenIssuanceRequest = FulfillTrustTokenIssuanceRequest;
  exports.FulfillTrustTokenIssuanceAnswer = FulfillTrustTokenIssuanceAnswer;
  exports.TrustTokenOperationResult = TrustTokenOperationResult;
  exports.StoredTrustTokensForIssuer = StoredTrustTokensForIssuer;
  exports.HasTrustTokensAnswerer = HasTrustTokensAnswerer;
  exports.HasTrustTokensAnswererPtr = HasTrustTokensAnswererPtr;
  exports.HasTrustTokensAnswererAssociatedPtr = HasTrustTokensAnswererAssociatedPtr;
})();