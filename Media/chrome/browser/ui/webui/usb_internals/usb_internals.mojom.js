// chrome/browser/ui/webui/usb_internals/usb_internals.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/usb_internals/usb_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojom');
  var usb_manager$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/usb_manager.mojom', '../../../../../services/device/public/mojom/usb_manager.mojom.js');
  }
  var usb_manager_test$ =
      mojo.internal.exposeNamespace('device.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/device/public/mojom/usb_manager_test.mojom', '../../../../../services/device/public/mojom/usb_manager_test.mojom.js');
  }



  function UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.validate = function(messageValidator, offset) {
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


    // validate UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.decode = function(decoder) {
    var packed;
    var val = new UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function UsbInternalsPageHandler_BindTestInterface_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  UsbInternalsPageHandler_BindTestInterface_Params.prototype.initDefaults_ = function() {
    this.receiver = new bindings.InterfaceRequest();
  };
  UsbInternalsPageHandler_BindTestInterface_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  UsbInternalsPageHandler_BindTestInterface_Params.validate = function(messageValidator, offset) {
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


    // validate UsbInternalsPageHandler_BindTestInterface_Params.receiver
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  UsbInternalsPageHandler_BindTestInterface_Params.encodedSize = codec.kStructHeaderSize + 8;

  UsbInternalsPageHandler_BindTestInterface_Params.decode = function(decoder) {
    var packed;
    var val = new UsbInternalsPageHandler_BindTestInterface_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receiver =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  UsbInternalsPageHandler_BindTestInterface_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(UsbInternalsPageHandler_BindTestInterface_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.receiver);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kUsbInternalsPageHandler_BindUsbDeviceManagerInterface_Name = 1091698943;
  var kUsbInternalsPageHandler_BindTestInterface_Name = 388744578;

  function UsbInternalsPageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(UsbInternalsPageHandler,
                                                   handleOrPtrInfo);
  }

  function UsbInternalsPageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        UsbInternalsPageHandler, associatedInterfacePtrInfo);
  }

  UsbInternalsPageHandlerAssociatedPtr.prototype =
      Object.create(UsbInternalsPageHandlerPtr.prototype);
  UsbInternalsPageHandlerAssociatedPtr.prototype.constructor =
      UsbInternalsPageHandlerAssociatedPtr;

  function UsbInternalsPageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  UsbInternalsPageHandlerPtr.prototype.bindUsbDeviceManagerInterface = function() {
    return UsbInternalsPageHandlerProxy.prototype.bindUsbDeviceManagerInterface
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbInternalsPageHandlerProxy.prototype.bindUsbDeviceManagerInterface = function(receiver) {
    var params_ = new UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kUsbInternalsPageHandler_BindUsbDeviceManagerInterface_Name,
        codec.align(UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params.encodedSize));
    builder.encodeStruct(UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  UsbInternalsPageHandlerPtr.prototype.bindTestInterface = function() {
    return UsbInternalsPageHandlerProxy.prototype.bindTestInterface
        .apply(this.ptr.getProxy(), arguments);
  };

  UsbInternalsPageHandlerProxy.prototype.bindTestInterface = function(receiver) {
    var params_ = new UsbInternalsPageHandler_BindTestInterface_Params();
    params_.receiver = receiver;
    var builder = new codec.MessageV0Builder(
        kUsbInternalsPageHandler_BindTestInterface_Name,
        codec.align(UsbInternalsPageHandler_BindTestInterface_Params.encodedSize));
    builder.encodeStruct(UsbInternalsPageHandler_BindTestInterface_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function UsbInternalsPageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  UsbInternalsPageHandlerStub.prototype.bindUsbDeviceManagerInterface = function(receiver) {
    return this.delegate_ && this.delegate_.bindUsbDeviceManagerInterface && this.delegate_.bindUsbDeviceManagerInterface(receiver);
  }
  UsbInternalsPageHandlerStub.prototype.bindTestInterface = function(receiver) {
    return this.delegate_ && this.delegate_.bindTestInterface && this.delegate_.bindTestInterface(receiver);
  }

  UsbInternalsPageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kUsbInternalsPageHandler_BindUsbDeviceManagerInterface_Name:
      var params = reader.decodeStruct(UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params);
      this.bindUsbDeviceManagerInterface(params.receiver);
      return true;
    case kUsbInternalsPageHandler_BindTestInterface_Name:
      var params = reader.decodeStruct(UsbInternalsPageHandler_BindTestInterface_Params);
      this.bindTestInterface(params.receiver);
      return true;
    default:
      return false;
    }
  };

  UsbInternalsPageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateUsbInternalsPageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kUsbInternalsPageHandler_BindUsbDeviceManagerInterface_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UsbInternalsPageHandler_BindUsbDeviceManagerInterface_Params;
      break;
      case kUsbInternalsPageHandler_BindTestInterface_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = UsbInternalsPageHandler_BindTestInterface_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateUsbInternalsPageHandlerResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var UsbInternalsPageHandler = {
    name: 'mojom.UsbInternalsPageHandler',
    kVersion: 0,
    ptrClass: UsbInternalsPageHandlerPtr,
    proxyClass: UsbInternalsPageHandlerProxy,
    stubClass: UsbInternalsPageHandlerStub,
    validateRequest: validateUsbInternalsPageHandlerRequest,
    validateResponse: null,
  };
  UsbInternalsPageHandlerStub.prototype.validator = validateUsbInternalsPageHandlerRequest;
  UsbInternalsPageHandlerProxy.prototype.validator = null;
  exports.UsbInternalsPageHandler = UsbInternalsPageHandler;
  exports.UsbInternalsPageHandlerPtr = UsbInternalsPageHandlerPtr;
  exports.UsbInternalsPageHandlerAssociatedPtr = UsbInternalsPageHandlerAssociatedPtr;
})();