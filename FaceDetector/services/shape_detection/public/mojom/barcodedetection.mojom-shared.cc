// services/shape_detection/public/mojom/barcodedetection.mojom-shared.cc is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#include "services/shape_detection/public/mojom/barcodedetection.mojom-shared.h"

// Used to support stream output operator for enums.
// TODO(dcheng): Consider omitting this somehow if not needed.
#include <ostream>
#include <utility>

#include "base/compiler_specific.h"
#include "base/strings/stringprintf.h"
#include "mojo/public/cpp/bindings/lib/validate_params.h"
#include "mojo/public/cpp/bindings/lib/validation_errors.h"
#include "mojo/public/cpp/bindings/lib/validation_util.h"
#include "third_party/perfetto/include/perfetto/tracing/traced_value.h"

#include "services/shape_detection/public/mojom/barcodedetection.mojom-params-data.h"
namespace shape_detection {
namespace mojom {

static NOINLINE const char* BarcodeFormatToStringHelper(BarcodeFormat value) {
  // Defined in a helper function to ensure that Clang generates a lookup table.
  switch(value) {
    case BarcodeFormat::AZTEC:
      return "AZTEC";
    case BarcodeFormat::CODE_128:
      return "CODE_128";
    case BarcodeFormat::CODE_39:
      return "CODE_39";
    case BarcodeFormat::CODE_93:
      return "CODE_93";
    case BarcodeFormat::CODABAR:
      return "CODABAR";
    case BarcodeFormat::DATA_MATRIX:
      return "DATA_MATRIX";
    case BarcodeFormat::EAN_13:
      return "EAN_13";
    case BarcodeFormat::EAN_8:
      return "EAN_8";
    case BarcodeFormat::ITF:
      return "ITF";
    case BarcodeFormat::PDF417:
      return "PDF417";
    case BarcodeFormat::QR_CODE:
      return "QR_CODE";
    case BarcodeFormat::UNKNOWN:
      return "UNKNOWN";
    case BarcodeFormat::UPC_A:
      return "UPC_A";
    case BarcodeFormat::UPC_E:
      return "UPC_E";
    default:
      return nullptr;
  }
}

std::string BarcodeFormatToString(BarcodeFormat value) {
  const char *str = BarcodeFormatToStringHelper(value);
  if (!str) {
    return base::StringPrintf("Unknown BarcodeFormat value: %i", static_cast<int32_t>(value));
  }
  return str;
}

std::ostream& operator<<(std::ostream& os, BarcodeFormat value) {
  return os << BarcodeFormatToString(value);
}

namespace internal {


// static
bool BarcodeDetectionResult_Data::Validate(
    const void* data,
    mojo::internal::ValidationContext* validation_context) {
  if (!data)
    return true;
  if (!ValidateUnversionedStructHeaderAndSizeAndClaimMemory(
          data, 40, validation_context)) {
    return false;
  }

  // NOTE: The memory backing |object| may be smaller than |sizeof(*object)| if
  // the message comes from an older version.
  const BarcodeDetectionResult_Data* object = static_cast<const BarcodeDetectionResult_Data*>(data);
  ALLOW_UNUSED_LOCAL(object);

  if (!mojo::internal::ValidatePointerNonNullable(
          object->raw_value, 1, validation_context)) {
    return false;
  }
  const mojo::internal::ContainerValidateParams raw_value_validate_params(
      0, false, nullptr);
  if (!mojo::internal::ValidateContainer(object->raw_value, validation_context,
                                         &raw_value_validate_params)) {
    return false;
  }

  if (!mojo::internal::ValidatePointerNonNullable(
          object->bounding_box, 2, validation_context)) {
    return false;
  }
  if (!mojo::internal::ValidateStruct(object->bounding_box, validation_context))
    return false;


  if (!::shape_detection::mojom::internal::BarcodeFormat_Data
        ::Validate(object->format, validation_context))
    return false;

  if (!mojo::internal::ValidatePointerNonNullable(
          object->corner_points, 4, validation_context)) {
    return false;
  }
  const mojo::internal::ContainerValidateParams corner_points_validate_params(
      0, false, nullptr);
  if (!mojo::internal::ValidateContainer(object->corner_points, validation_context,
                                         &corner_points_validate_params)) {
    return false;
  }

  return true;
}

BarcodeDetectionResult_Data::BarcodeDetectionResult_Data()
    : header_({sizeof(*this), 0}) {}


// static
bool BarcodeDetection_Detect_Params_Data::Validate(
    const void* data,
    mojo::internal::ValidationContext* validation_context) {
  if (!data)
    return true;
  if (!ValidateUnversionedStructHeaderAndSizeAndClaimMemory(
          data, 16, validation_context)) {
    return false;
  }

  // NOTE: The memory backing |object| may be smaller than |sizeof(*object)| if
  // the message comes from an older version.
  const BarcodeDetection_Detect_Params_Data* object = static_cast<const BarcodeDetection_Detect_Params_Data*>(data);
  ALLOW_UNUSED_LOCAL(object);

  if (!mojo::internal::ValidatePointerNonNullable(
          object->bitmap_data, 1, validation_context)) {
    return false;
  }
  if (!mojo::internal::ValidateStruct(object->bitmap_data, validation_context))
    return false;

  return true;
}

BarcodeDetection_Detect_Params_Data::BarcodeDetection_Detect_Params_Data()
    : header_({sizeof(*this), 0}) {}


// static
bool BarcodeDetection_Detect_ResponseParams_Data::Validate(
    const void* data,
    mojo::internal::ValidationContext* validation_context) {
  if (!data)
    return true;
  if (!ValidateUnversionedStructHeaderAndSizeAndClaimMemory(
          data, 16, validation_context)) {
    return false;
  }

  // NOTE: The memory backing |object| may be smaller than |sizeof(*object)| if
  // the message comes from an older version.
  const BarcodeDetection_Detect_ResponseParams_Data* object = static_cast<const BarcodeDetection_Detect_ResponseParams_Data*>(data);
  ALLOW_UNUSED_LOCAL(object);

  if (!mojo::internal::ValidatePointerNonNullable(
          object->results, 1, validation_context)) {
    return false;
  }
  const mojo::internal::ContainerValidateParams results_validate_params(
      0, false, nullptr);
  if (!mojo::internal::ValidateContainer(object->results, validation_context,
                                         &results_validate_params)) {
    return false;
  }

  return true;
}

BarcodeDetection_Detect_ResponseParams_Data::BarcodeDetection_Detect_ResponseParams_Data()
    : header_({sizeof(*this), 0}) {}

}  // namespace internal
}  // namespace mojom
}  // namespace shape_detection

namespace perfetto {

// static
void TraceFormatTraits<::shape_detection::mojom::BarcodeFormat>::WriteIntoTrace(
   perfetto::TracedValue context, ::shape_detection::mojom::BarcodeFormat value) {
  return std::move(context).WriteString(::shape_detection::mojom::BarcodeFormatToString(value));
}

} // namespace perfetto