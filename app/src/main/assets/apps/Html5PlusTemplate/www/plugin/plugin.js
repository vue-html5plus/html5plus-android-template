document.addEventListener("plusready", function() {
    // 声明的JS“扩展插件别名”
    var _BARCODE = 'Plugin',
    B = window.plus.bridge;

    window.plus.test = {
        showToast: function(message) {
            return B.exec(_BARCODE, "showToast", [message]);
        },
        test: function (Argus, successCallback, errorCallback ) {
            var success = typeof successCallback !== 'function' ? null : function(args) { successCallback(args); },
            fail = typeof errorCallback !== 'function' ? null : function(code) { errorCallback(code); };
            callbackID = B.callbackId(success, fail);
            return B.exec(_BARCODE, "showToast", [callbackID, Argus]);
        }
    };
}, true);