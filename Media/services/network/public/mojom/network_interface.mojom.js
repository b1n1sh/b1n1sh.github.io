// services/network/public/mojom/network_interface.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/network_interface.mojom';
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
  var ip_address$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address.mojom', 'ip_address.mojom.js');
  }
  var network_change_manager$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/network_change_manager.mojom', 'network_change_manager.mojom.js');
  }



  function NetworkInterface(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  NetworkInterface.prototype.initDefaults_ = function() {
    this.name = null;
    this.friendlyName = null;
    this.interfaceIndex = 0;
    this.type = 0;
    this.address = null;
    this.prefixLength = 0;
    this.ipAddressAttributes = 0;
  };
  NetworkInterface.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  NetworkInterface.validate = function(messageValidator, offset) {
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


    // validate NetworkInterface.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkInterface.friendlyName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate NetworkInterface.type
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 20, network_change_manager$.ConnectionType);
    if (err !== validator.validationError.NONE)
        return err;


    // validate NetworkInterface.address
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, ip_address$.IPAddress, false);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  NetworkInterface.encodedSize = codec.kStructHeaderSize + 40;

  NetworkInterface.decode = function(decoder) {
    var packed;
    var val = new NetworkInterface();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.name =
        decoder.decodeStruct(codec.String);
    val.friendlyName =
        decoder.decodeStruct(codec.String);
    val.interfaceIndex =
        decoder.decodeStruct(codec.Uint32);
    val.type =
        decoder.decodeStruct(new codec.Enum(network_change_manager$.ConnectionType));
    val.address =
        decoder.decodeStructPointer(ip_address$.IPAddress);
    val.prefixLength =
        decoder.decodeStruct(codec.Uint32);
    val.ipAddressAttributes =
        decoder.decodeStruct(codec.Int32);
    return val;
  };

  NetworkInterface.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(NetworkInterface.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.friendlyName);
    encoder.encodeStruct(codec.Uint32, val.interfaceIndex);
    encoder.encodeStruct(codec.Int32, val.type);
    encoder.encodeStructPointer(ip_address$.IPAddress, val.address);
    encoder.encodeStruct(codec.Uint32, val.prefixLength);
    encoder.encodeStruct(codec.Int32, val.ipAddressAttributes);
  };
  exports.NetworkInterface = NetworkInterface;
})();