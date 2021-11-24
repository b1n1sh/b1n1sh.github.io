// gpu/ipc/common/gpu_preferences.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'gpu/ipc/common/gpu_preferences.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gpu.mojom');
  var message_pump_type$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/message_pump_type.mojom', '../../../mojo/public/mojom/base/message_pump_type.mojom.js');
  }
  var buffer_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/buffer_types.mojom', '../../../ui/gfx/mojom/buffer_types.mojom.js');
  }


  var VulkanImplementationName = {};
  VulkanImplementationName.kNone = 0;
  VulkanImplementationName.kNative = 1;
  VulkanImplementationName.kForcedNative = 2;
  VulkanImplementationName.kSwiftshader = 3;
  VulkanImplementationName.kLast = 3;
  VulkanImplementationName.MIN_VALUE = 0;
  VulkanImplementationName.MAX_VALUE = 3;

  VulkanImplementationName.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  VulkanImplementationName.toKnownEnumValue = function(value) {
    return value;
  };

  VulkanImplementationName.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var GrContextType = {};
  GrContextType.kGL = 0;
  GrContextType.kVulkan = 1;
  GrContextType.kMetal = 2;
  GrContextType.kDawn = 3;
  GrContextType.kLast = 3;
  GrContextType.MIN_VALUE = 0;
  GrContextType.MAX_VALUE = 3;

  GrContextType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  GrContextType.toKnownEnumValue = function(value) {
    return value;
  };

  GrContextType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var DawnBackendValidationLevel = {};
  DawnBackendValidationLevel.kDisabled = 0;
  DawnBackendValidationLevel.kPartial = 1;
  DawnBackendValidationLevel.kFull = 2;
  DawnBackendValidationLevel.MIN_VALUE = 0;
  DawnBackendValidationLevel.MAX_VALUE = 2;

  DawnBackendValidationLevel.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  DawnBackendValidationLevel.toKnownEnumValue = function(value) {
    return value;
  };

  DawnBackendValidationLevel.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function GpuPreferences(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuPreferences.prototype.initDefaults_ = function() {
    this.disableAcceleratedVideoDecode = false;
    this.disableAcceleratedVideoEncode = false;
    this.gpuStartupDialog = false;
    this.disableGpuWatchdog = false;
    this.gpuSandboxStartEarly = false;
    this.enableLowLatencyDxva = false;
    this.enableZeroCopyDxgiVideo = false;
    this.enableNv12DxgiVideo = false;
    this.enableMediaFoundationVeaOnWindows7 = false;
    this.disableSoftwareRasterizer = false;
    this.logGpuControlListDecisions = false;
    this.compileShaderAlwaysSucceeds = false;
    this.disableGlErrorLimit = false;
    this.disableGlslTranslator = false;
    this.disableShaderNameHashing = false;
    this.enableGpuCommandLogging = false;
    this.enableGpuDebugging = false;
    this.enableGpuServiceLoggingGpu = false;
    this.enableGpuDriverDebugLogging = false;
    this.disableGpuProgramCache = false;
    this.enforceGlMinimums = false;
    this.disableGpuShaderDiskCache = false;
    this.enableThreadedTextureMailboxes = false;
    this.glShaderIntermOutput = false;
    this.enableAndroidSurfaceControl = false;
    this.enableGpuServiceLogging = false;
    this.enableGpuServiceTracing = false;
    this.usePassthroughCmdDecoder = false;
    this.disableBiplanarGpuMemoryBuffersForVideoFrames = false;
    this.ignoreGpuBlocklist = false;
    this.enableOopRasterization = false;
    this.disableOopRasterization = false;
    this.forceGpuMemAvailableBytes = 0;
    this.forceGpuMemDiscardableLimitBytes = 0;
    this.forceMaxTextureSize = 0;
    this.gpuProgramCacheSize = 0;
    this.enableOopRasterizationDdl = false;
    this.watchdogStartsBackgrounded = false;
    this.enableVulkanProtectedMemory = false;
    this.disableVulkanSurface = false;
    this.disableVulkanFallbackToGlForTesting = false;
    this.enableMetal = false;
    this.enableGpuBenchmarkingExtension = false;
    this.enableWebgpu = false;
    this.enableWebgpuSpirv = false;
    this.forceWebgpuCompat = false;
    this.enableGpuBlockedTimeMetric = false;
    this.enablePerfDataCollection = false;
    this.enableNativeGpuMemoryBuffers = false;
    this.textureTargetExceptionList = null;
    this.grContextType = 0;
    this.useVulkan = 0;
    this.vulkanHeapMemoryLimit = 0;
    this.vulkanSyncCpuMemoryLimit = 0;
    this.enableDawnBackendValidation = 0;
    this.messagePumpType = 0;
    this.enabledDawnFeaturesList = null;
    this.disabledDawnFeaturesList = null;
  };
  GpuPreferences.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuPreferences.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 80}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



































    // validate GpuPreferences.textureTargetExceptionList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(buffer_types$.BufferUsageAndFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;







    // validate GpuPreferences.grContextType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 32, GrContextType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuPreferences.useVulkan
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 36, VulkanImplementationName);
    if (err !== validator.validationError.NONE)
        return err;












    // validate GpuPreferences.enableDawnBackendValidation
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 48, DawnBackendValidationLevel);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuPreferences.enabledDawnFeaturesList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 56, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate GpuPreferences.disabledDawnFeaturesList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 64, 8, codec.String, false, [0, 0], 0);
    if (err !== validator.validationError.NONE)
        return err;




    // validate GpuPreferences.messagePumpType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 52, message_pump_type$.MessagePumpType);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  GpuPreferences.encodedSize = codec.kStructHeaderSize + 72;

  GpuPreferences.decode = function(decoder) {
    var packed;
    var val = new GpuPreferences();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.disableAcceleratedVideoDecode = (packed >> 0) & 1 ? true : false;
    val.disableAcceleratedVideoEncode = (packed >> 1) & 1 ? true : false;
    val.gpuStartupDialog = (packed >> 2) & 1 ? true : false;
    val.disableGpuWatchdog = (packed >> 3) & 1 ? true : false;
    val.gpuSandboxStartEarly = (packed >> 4) & 1 ? true : false;
    val.enableLowLatencyDxva = (packed >> 5) & 1 ? true : false;
    val.enableZeroCopyDxgiVideo = (packed >> 6) & 1 ? true : false;
    val.enableNv12DxgiVideo = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.enableMediaFoundationVeaOnWindows7 = (packed >> 0) & 1 ? true : false;
    val.disableSoftwareRasterizer = (packed >> 1) & 1 ? true : false;
    val.logGpuControlListDecisions = (packed >> 2) & 1 ? true : false;
    val.compileShaderAlwaysSucceeds = (packed >> 3) & 1 ? true : false;
    val.disableGlErrorLimit = (packed >> 4) & 1 ? true : false;
    val.disableGlslTranslator = (packed >> 5) & 1 ? true : false;
    val.disableShaderNameHashing = (packed >> 6) & 1 ? true : false;
    val.enableGpuCommandLogging = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.enableGpuDebugging = (packed >> 0) & 1 ? true : false;
    val.enableGpuServiceLoggingGpu = (packed >> 1) & 1 ? true : false;
    val.enableGpuDriverDebugLogging = (packed >> 2) & 1 ? true : false;
    val.disableGpuProgramCache = (packed >> 3) & 1 ? true : false;
    val.enforceGlMinimums = (packed >> 4) & 1 ? true : false;
    val.disableGpuShaderDiskCache = (packed >> 5) & 1 ? true : false;
    val.enableThreadedTextureMailboxes = (packed >> 6) & 1 ? true : false;
    val.glShaderIntermOutput = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.enableAndroidSurfaceControl = (packed >> 0) & 1 ? true : false;
    val.enableGpuServiceLogging = (packed >> 1) & 1 ? true : false;
    val.enableGpuServiceTracing = (packed >> 2) & 1 ? true : false;
    val.usePassthroughCmdDecoder = (packed >> 3) & 1 ? true : false;
    val.disableBiplanarGpuMemoryBuffersForVideoFrames = (packed >> 4) & 1 ? true : false;
    val.ignoreGpuBlocklist = (packed >> 5) & 1 ? true : false;
    val.enableOopRasterization = (packed >> 6) & 1 ? true : false;
    val.disableOopRasterization = (packed >> 7) & 1 ? true : false;
    val.forceGpuMemAvailableBytes =
        decoder.decodeStruct(codec.Uint32);
    val.forceGpuMemDiscardableLimitBytes =
        decoder.decodeStruct(codec.Uint32);
    val.forceMaxTextureSize =
        decoder.decodeStruct(codec.Uint32);
    val.gpuProgramCacheSize =
        decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.enableOopRasterizationDdl = (packed >> 0) & 1 ? true : false;
    val.watchdogStartsBackgrounded = (packed >> 1) & 1 ? true : false;
    val.enableVulkanProtectedMemory = (packed >> 2) & 1 ? true : false;
    val.disableVulkanSurface = (packed >> 3) & 1 ? true : false;
    val.disableVulkanFallbackToGlForTesting = (packed >> 4) & 1 ? true : false;
    val.enableMetal = (packed >> 5) & 1 ? true : false;
    val.enableGpuBenchmarkingExtension = (packed >> 6) & 1 ? true : false;
    val.enableWebgpu = (packed >> 7) & 1 ? true : false;
    packed = decoder.readUint8();
    val.enableWebgpuSpirv = (packed >> 0) & 1 ? true : false;
    val.forceWebgpuCompat = (packed >> 1) & 1 ? true : false;
    val.enableGpuBlockedTimeMetric = (packed >> 2) & 1 ? true : false;
    val.enablePerfDataCollection = (packed >> 3) & 1 ? true : false;
    val.enableNativeGpuMemoryBuffers = (packed >> 4) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    val.textureTargetExceptionList =
        decoder.decodeArrayPointer(new codec.PointerTo(buffer_types$.BufferUsageAndFormat));
    val.grContextType =
        decoder.decodeStruct(new codec.Enum(GrContextType));
    val.useVulkan =
        decoder.decodeStruct(new codec.Enum(VulkanImplementationName));
    val.vulkanHeapMemoryLimit =
        decoder.decodeStruct(codec.Uint32);
    val.vulkanSyncCpuMemoryLimit =
        decoder.decodeStruct(codec.Uint32);
    val.enableDawnBackendValidation =
        decoder.decodeStruct(new codec.Enum(DawnBackendValidationLevel));
    val.messagePumpType =
        decoder.decodeStruct(new codec.Enum(message_pump_type$.MessagePumpType));
    val.enabledDawnFeaturesList =
        decoder.decodeArrayPointer(codec.String);
    val.disabledDawnFeaturesList =
        decoder.decodeArrayPointer(codec.String);
    return val;
  };

  GpuPreferences.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuPreferences.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.disableAcceleratedVideoDecode & 1) << 0
    packed |= (val.disableAcceleratedVideoEncode & 1) << 1
    packed |= (val.gpuStartupDialog & 1) << 2
    packed |= (val.disableGpuWatchdog & 1) << 3
    packed |= (val.gpuSandboxStartEarly & 1) << 4
    packed |= (val.enableLowLatencyDxva & 1) << 5
    packed |= (val.enableZeroCopyDxgiVideo & 1) << 6
    packed |= (val.enableNv12DxgiVideo & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.enableMediaFoundationVeaOnWindows7 & 1) << 0
    packed |= (val.disableSoftwareRasterizer & 1) << 1
    packed |= (val.logGpuControlListDecisions & 1) << 2
    packed |= (val.compileShaderAlwaysSucceeds & 1) << 3
    packed |= (val.disableGlErrorLimit & 1) << 4
    packed |= (val.disableGlslTranslator & 1) << 5
    packed |= (val.disableShaderNameHashing & 1) << 6
    packed |= (val.enableGpuCommandLogging & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.enableGpuDebugging & 1) << 0
    packed |= (val.enableGpuServiceLoggingGpu & 1) << 1
    packed |= (val.enableGpuDriverDebugLogging & 1) << 2
    packed |= (val.disableGpuProgramCache & 1) << 3
    packed |= (val.enforceGlMinimums & 1) << 4
    packed |= (val.disableGpuShaderDiskCache & 1) << 5
    packed |= (val.enableThreadedTextureMailboxes & 1) << 6
    packed |= (val.glShaderIntermOutput & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.enableAndroidSurfaceControl & 1) << 0
    packed |= (val.enableGpuServiceLogging & 1) << 1
    packed |= (val.enableGpuServiceTracing & 1) << 2
    packed |= (val.usePassthroughCmdDecoder & 1) << 3
    packed |= (val.disableBiplanarGpuMemoryBuffersForVideoFrames & 1) << 4
    packed |= (val.ignoreGpuBlocklist & 1) << 5
    packed |= (val.enableOopRasterization & 1) << 6
    packed |= (val.disableOopRasterization & 1) << 7
    encoder.writeUint8(packed);
    encoder.encodeStruct(codec.Uint32, val.forceGpuMemAvailableBytes);
    encoder.encodeStruct(codec.Uint32, val.forceGpuMemDiscardableLimitBytes);
    encoder.encodeStruct(codec.Uint32, val.forceMaxTextureSize);
    encoder.encodeStruct(codec.Uint32, val.gpuProgramCacheSize);
    packed = 0;
    packed |= (val.enableOopRasterizationDdl & 1) << 0
    packed |= (val.watchdogStartsBackgrounded & 1) << 1
    packed |= (val.enableVulkanProtectedMemory & 1) << 2
    packed |= (val.disableVulkanSurface & 1) << 3
    packed |= (val.disableVulkanFallbackToGlForTesting & 1) << 4
    packed |= (val.enableMetal & 1) << 5
    packed |= (val.enableGpuBenchmarkingExtension & 1) << 6
    packed |= (val.enableWebgpu & 1) << 7
    encoder.writeUint8(packed);
    packed = 0;
    packed |= (val.enableWebgpuSpirv & 1) << 0
    packed |= (val.forceWebgpuCompat & 1) << 1
    packed |= (val.enableGpuBlockedTimeMetric & 1) << 2
    packed |= (val.enablePerfDataCollection & 1) << 3
    packed |= (val.enableNativeGpuMemoryBuffers & 1) << 4
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(buffer_types$.BufferUsageAndFormat), val.textureTargetExceptionList);
    encoder.encodeStruct(codec.Int32, val.grContextType);
    encoder.encodeStruct(codec.Int32, val.useVulkan);
    encoder.encodeStruct(codec.Uint32, val.vulkanHeapMemoryLimit);
    encoder.encodeStruct(codec.Uint32, val.vulkanSyncCpuMemoryLimit);
    encoder.encodeStruct(codec.Int32, val.enableDawnBackendValidation);
    encoder.encodeStruct(codec.Int32, val.messagePumpType);
    encoder.encodeArrayPointer(codec.String, val.enabledDawnFeaturesList);
    encoder.encodeArrayPointer(codec.String, val.disabledDawnFeaturesList);
  };
  exports.VulkanImplementationName = VulkanImplementationName;
  exports.GrContextType = GrContextType;
  exports.DawnBackendValidationLevel = DawnBackendValidationLevel;
  exports.GpuPreferences = GpuPreferences;
})();