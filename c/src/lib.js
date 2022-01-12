if (typeof mergeInto !== 'undefined') mergeInto(LibraryManager.library, {
    js_alert: function(s) {
        alert(UTF8ToString(s));
    }
});
