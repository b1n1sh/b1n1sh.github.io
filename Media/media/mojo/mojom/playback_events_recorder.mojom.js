// media/mojo/mojom/playback_events_recorder.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/playback_events_recorder.mojom';
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
  var media_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/media_types.mojom', 'media_types.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojom/geometry.mojom', '../../../ui/gfx/geometry/mojom/geometry.mojom.js');
  }



  function PlaybackEventsRecorder_OnPlaying_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnPlaying_Params.prototype.initDefaults_ = function() {
  };
  PlaybackEventsRecorder_OnPlaying_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnPlaying_Params.validate = function(messageValidator, offset) {
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

  PlaybackEventsRecorder_OnPlaying_Params.encodedSize = codec.kStructHeaderSize + 0;

  PlaybackEventsRecorder_OnPlaying_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnPlaying_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PlaybackEventsRecorder_OnPlaying_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnPlaying_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PlaybackEventsRecorder_OnPaused_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnPaused_Params.prototype.initDefaults_ = function() {
  };
  PlaybackEventsRecorder_OnPaused_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnPaused_Params.validate = function(messageValidator, offset) {
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

  PlaybackEventsRecorder_OnPaused_Params.encodedSize = codec.kStructHeaderSize + 0;

  PlaybackEventsRecorder_OnPaused_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnPaused_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PlaybackEventsRecorder_OnPaused_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnPaused_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PlaybackEventsRecorder_OnSeeking_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnSeeking_Params.prototype.initDefaults_ = function() {
  };
  PlaybackEventsRecorder_OnSeeking_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnSeeking_Params.validate = function(messageValidator, offset) {
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

  PlaybackEventsRecorder_OnSeeking_Params.encodedSize = codec.kStructHeaderSize + 0;

  PlaybackEventsRecorder_OnSeeking_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnSeeking_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PlaybackEventsRecorder_OnSeeking_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnSeeking_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PlaybackEventsRecorder_OnEnded_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnEnded_Params.prototype.initDefaults_ = function() {
  };
  PlaybackEventsRecorder_OnEnded_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnEnded_Params.validate = function(messageValidator, offset) {
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

  PlaybackEventsRecorder_OnEnded_Params.encodedSize = codec.kStructHeaderSize + 0;

  PlaybackEventsRecorder_OnEnded_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnEnded_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PlaybackEventsRecorder_OnEnded_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnEnded_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PlaybackEventsRecorder_OnError_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnError_Params.prototype.initDefaults_ = function() {
    this.status = 0;
  };
  PlaybackEventsRecorder_OnError_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnError_Params.validate = function(messageValidator, offset) {
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


    // validate PlaybackEventsRecorder_OnError_Params.status
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.PipelineStatus);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PlaybackEventsRecorder_OnError_Params.encodedSize = codec.kStructHeaderSize + 8;

  PlaybackEventsRecorder_OnError_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnError_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStruct(new codec.Enum(media_types$.PipelineStatus));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  PlaybackEventsRecorder_OnError_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnError_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.status);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function PlaybackEventsRecorder_OnBuffering_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnBuffering_Params.prototype.initDefaults_ = function() {
  };
  PlaybackEventsRecorder_OnBuffering_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnBuffering_Params.validate = function(messageValidator, offset) {
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

  PlaybackEventsRecorder_OnBuffering_Params.encodedSize = codec.kStructHeaderSize + 0;

  PlaybackEventsRecorder_OnBuffering_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnBuffering_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PlaybackEventsRecorder_OnBuffering_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnBuffering_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PlaybackEventsRecorder_OnBufferingComplete_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnBufferingComplete_Params.prototype.initDefaults_ = function() {
  };
  PlaybackEventsRecorder_OnBufferingComplete_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnBufferingComplete_Params.validate = function(messageValidator, offset) {
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

  PlaybackEventsRecorder_OnBufferingComplete_Params.encodedSize = codec.kStructHeaderSize + 0;

  PlaybackEventsRecorder_OnBufferingComplete_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnBufferingComplete_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PlaybackEventsRecorder_OnBufferingComplete_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnBufferingComplete_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PlaybackEventsRecorder_OnNaturalSizeChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnNaturalSizeChanged_Params.prototype.initDefaults_ = function() {
    this.size = null;
  };
  PlaybackEventsRecorder_OnNaturalSizeChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnNaturalSizeChanged_Params.validate = function(messageValidator, offset) {
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


    // validate PlaybackEventsRecorder_OnNaturalSizeChanged_Params.size
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PlaybackEventsRecorder_OnNaturalSizeChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  PlaybackEventsRecorder_OnNaturalSizeChanged_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnNaturalSizeChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.size =
        decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  PlaybackEventsRecorder_OnNaturalSizeChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnNaturalSizeChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.size);
  };
  function PlaybackEventsRecorder_OnPipelineStatistics_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PlaybackEventsRecorder_OnPipelineStatistics_Params.prototype.initDefaults_ = function() {
    this.stats = null;
  };
  PlaybackEventsRecorder_OnPipelineStatistics_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PlaybackEventsRecorder_OnPipelineStatistics_Params.validate = function(messageValidator, offset) {
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


    // validate PlaybackEventsRecorder_OnPipelineStatistics_Params.stats
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.PipelineStatistics, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PlaybackEventsRecorder_OnPipelineStatistics_Params.encodedSize = codec.kStructHeaderSize + 8;

  PlaybackEventsRecorder_OnPipelineStatistics_Params.decode = function(decoder) {
    var packed;
    var val = new PlaybackEventsRecorder_OnPipelineStatistics_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.stats =
        decoder.decodeStructPointer(media_types$.PipelineStatistics);
    return val;
  };

  PlaybackEventsRecorder_OnPipelineStatistics_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PlaybackEventsRecorder_OnPipelineStatistics_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.PipelineStatistics, val.stats);
  };
  var kPlaybackEventsRecorder_OnPlaying_Name = 566535103;
  var kPlaybackEventsRecorder_OnPaused_Name = 805004633;
  var kPlaybackEventsRecorder_OnSeeking_Name = 1755070921;
  var kPlaybackEventsRecorder_OnEnded_Name = 276902930;
  var kPlaybackEventsRecorder_OnError_Name = 1923049600;
  var kPlaybackEventsRecorder_OnBuffering_Name = 1818192228;
  var kPlaybackEventsRecorder_OnBufferingComplete_Name = 1975772178;
  var kPlaybackEventsRecorder_OnNaturalSizeChanged_Name = 155493737;
  var kPlaybackEventsRecorder_OnPipelineStatistics_Name = 1799597395;

  function PlaybackEventsRecorderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PlaybackEventsRecorder,
                                                   handleOrPtrInfo);
  }

  function PlaybackEventsRecorderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PlaybackEventsRecorder, associatedInterfacePtrInfo);
  }

  PlaybackEventsRecorderAssociatedPtr.prototype =
      Object.create(PlaybackEventsRecorderPtr.prototype);
  PlaybackEventsRecorderAssociatedPtr.prototype.constructor =
      PlaybackEventsRecorderAssociatedPtr;

  function PlaybackEventsRecorderProxy(receiver) {
    this.receiver_ = receiver;
  }
  PlaybackEventsRecorderPtr.prototype.onPlaying = function() {
    return PlaybackEventsRecorderProxy.prototype.onPlaying
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onPlaying = function() {
    var params_ = new PlaybackEventsRecorder_OnPlaying_Params();
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnPlaying_Name,
        codec.align(PlaybackEventsRecorder_OnPlaying_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnPlaying_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlaybackEventsRecorderPtr.prototype.onPaused = function() {
    return PlaybackEventsRecorderProxy.prototype.onPaused
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onPaused = function() {
    var params_ = new PlaybackEventsRecorder_OnPaused_Params();
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnPaused_Name,
        codec.align(PlaybackEventsRecorder_OnPaused_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnPaused_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlaybackEventsRecorderPtr.prototype.onSeeking = function() {
    return PlaybackEventsRecorderProxy.prototype.onSeeking
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onSeeking = function() {
    var params_ = new PlaybackEventsRecorder_OnSeeking_Params();
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnSeeking_Name,
        codec.align(PlaybackEventsRecorder_OnSeeking_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnSeeking_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlaybackEventsRecorderPtr.prototype.onEnded = function() {
    return PlaybackEventsRecorderProxy.prototype.onEnded
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onEnded = function() {
    var params_ = new PlaybackEventsRecorder_OnEnded_Params();
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnEnded_Name,
        codec.align(PlaybackEventsRecorder_OnEnded_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnEnded_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlaybackEventsRecorderPtr.prototype.onError = function() {
    return PlaybackEventsRecorderProxy.prototype.onError
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onError = function(status) {
    var params_ = new PlaybackEventsRecorder_OnError_Params();
    params_.status = status;
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnError_Name,
        codec.align(PlaybackEventsRecorder_OnError_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnError_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlaybackEventsRecorderPtr.prototype.onBuffering = function() {
    return PlaybackEventsRecorderProxy.prototype.onBuffering
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onBuffering = function() {
    var params_ = new PlaybackEventsRecorder_OnBuffering_Params();
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnBuffering_Name,
        codec.align(PlaybackEventsRecorder_OnBuffering_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnBuffering_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlaybackEventsRecorderPtr.prototype.onBufferingComplete = function() {
    return PlaybackEventsRecorderProxy.prototype.onBufferingComplete
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onBufferingComplete = function() {
    var params_ = new PlaybackEventsRecorder_OnBufferingComplete_Params();
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnBufferingComplete_Name,
        codec.align(PlaybackEventsRecorder_OnBufferingComplete_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnBufferingComplete_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlaybackEventsRecorderPtr.prototype.onNaturalSizeChanged = function() {
    return PlaybackEventsRecorderProxy.prototype.onNaturalSizeChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onNaturalSizeChanged = function(size) {
    var params_ = new PlaybackEventsRecorder_OnNaturalSizeChanged_Params();
    params_.size = size;
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnNaturalSizeChanged_Name,
        codec.align(PlaybackEventsRecorder_OnNaturalSizeChanged_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnNaturalSizeChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  PlaybackEventsRecorderPtr.prototype.onPipelineStatistics = function() {
    return PlaybackEventsRecorderProxy.prototype.onPipelineStatistics
        .apply(this.ptr.getProxy(), arguments);
  };

  PlaybackEventsRecorderProxy.prototype.onPipelineStatistics = function(stats) {
    var params_ = new PlaybackEventsRecorder_OnPipelineStatistics_Params();
    params_.stats = stats;
    var builder = new codec.MessageV0Builder(
        kPlaybackEventsRecorder_OnPipelineStatistics_Name,
        codec.align(PlaybackEventsRecorder_OnPipelineStatistics_Params.encodedSize));
    builder.encodeStruct(PlaybackEventsRecorder_OnPipelineStatistics_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function PlaybackEventsRecorderStub(delegate) {
    this.delegate_ = delegate;
  }
  PlaybackEventsRecorderStub.prototype.onPlaying = function() {
    return this.delegate_ && this.delegate_.onPlaying && this.delegate_.onPlaying();
  }
  PlaybackEventsRecorderStub.prototype.onPaused = function() {
    return this.delegate_ && this.delegate_.onPaused && this.delegate_.onPaused();
  }
  PlaybackEventsRecorderStub.prototype.onSeeking = function() {
    return this.delegate_ && this.delegate_.onSeeking && this.delegate_.onSeeking();
  }
  PlaybackEventsRecorderStub.prototype.onEnded = function() {
    return this.delegate_ && this.delegate_.onEnded && this.delegate_.onEnded();
  }
  PlaybackEventsRecorderStub.prototype.onError = function(status) {
    return this.delegate_ && this.delegate_.onError && this.delegate_.onError(status);
  }
  PlaybackEventsRecorderStub.prototype.onBuffering = function() {
    return this.delegate_ && this.delegate_.onBuffering && this.delegate_.onBuffering();
  }
  PlaybackEventsRecorderStub.prototype.onBufferingComplete = function() {
    return this.delegate_ && this.delegate_.onBufferingComplete && this.delegate_.onBufferingComplete();
  }
  PlaybackEventsRecorderStub.prototype.onNaturalSizeChanged = function(size) {
    return this.delegate_ && this.delegate_.onNaturalSizeChanged && this.delegate_.onNaturalSizeChanged(size);
  }
  PlaybackEventsRecorderStub.prototype.onPipelineStatistics = function(stats) {
    return this.delegate_ && this.delegate_.onPipelineStatistics && this.delegate_.onPipelineStatistics(stats);
  }

  PlaybackEventsRecorderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPlaybackEventsRecorder_OnPlaying_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnPlaying_Params);
      this.onPlaying();
      return true;
    case kPlaybackEventsRecorder_OnPaused_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnPaused_Params);
      this.onPaused();
      return true;
    case kPlaybackEventsRecorder_OnSeeking_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnSeeking_Params);
      this.onSeeking();
      return true;
    case kPlaybackEventsRecorder_OnEnded_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnEnded_Params);
      this.onEnded();
      return true;
    case kPlaybackEventsRecorder_OnError_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnError_Params);
      this.onError(params.status);
      return true;
    case kPlaybackEventsRecorder_OnBuffering_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnBuffering_Params);
      this.onBuffering();
      return true;
    case kPlaybackEventsRecorder_OnBufferingComplete_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnBufferingComplete_Params);
      this.onBufferingComplete();
      return true;
    case kPlaybackEventsRecorder_OnNaturalSizeChanged_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnNaturalSizeChanged_Params);
      this.onNaturalSizeChanged(params.size);
      return true;
    case kPlaybackEventsRecorder_OnPipelineStatistics_Name:
      var params = reader.decodeStruct(PlaybackEventsRecorder_OnPipelineStatistics_Params);
      this.onPipelineStatistics(params.stats);
      return true;
    default:
      return false;
    }
  };

  PlaybackEventsRecorderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validatePlaybackEventsRecorderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPlaybackEventsRecorder_OnPlaying_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnPlaying_Params;
      break;
      case kPlaybackEventsRecorder_OnPaused_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnPaused_Params;
      break;
      case kPlaybackEventsRecorder_OnSeeking_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnSeeking_Params;
      break;
      case kPlaybackEventsRecorder_OnEnded_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnEnded_Params;
      break;
      case kPlaybackEventsRecorder_OnError_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnError_Params;
      break;
      case kPlaybackEventsRecorder_OnBuffering_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnBuffering_Params;
      break;
      case kPlaybackEventsRecorder_OnBufferingComplete_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnBufferingComplete_Params;
      break;
      case kPlaybackEventsRecorder_OnNaturalSizeChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnNaturalSizeChanged_Params;
      break;
      case kPlaybackEventsRecorder_OnPipelineStatistics_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = PlaybackEventsRecorder_OnPipelineStatistics_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePlaybackEventsRecorderResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var PlaybackEventsRecorder = {
    name: 'media.mojom.PlaybackEventsRecorder',
    kVersion: 0,
    ptrClass: PlaybackEventsRecorderPtr,
    proxyClass: PlaybackEventsRecorderProxy,
    stubClass: PlaybackEventsRecorderStub,
    validateRequest: validatePlaybackEventsRecorderRequest,
    validateResponse: null,
  };
  PlaybackEventsRecorderStub.prototype.validator = validatePlaybackEventsRecorderRequest;
  PlaybackEventsRecorderProxy.prototype.validator = null;
  exports.PlaybackEventsRecorder = PlaybackEventsRecorder;
  exports.PlaybackEventsRecorderPtr = PlaybackEventsRecorderPtr;
  exports.PlaybackEventsRecorderAssociatedPtr = PlaybackEventsRecorderAssociatedPtr;
})();