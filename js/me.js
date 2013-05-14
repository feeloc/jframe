window.require = function (src, callBack, charset) {
    var doc = document,
        oHead = doc.getElementsByTagName('head')[0],
        oScript = doc.createElement('script'),
        bReady = false;
    if (bReady) {
        setTimeout(function () {
            callBack && callBack();
        }, 200);
        return;
    }
    oScript.setAttribute('type', 'text/javascript');
    charset && oScript.setAttribute('charset', charset);
    oScript.onreadystatechange = oScript.readyState = oScript.error = function () {
        oScript.onreadystatechange = oScript.readyState = oScript.error = null;
        setTimeout(function () {
            bReady = true;
        }, 100);
    };
    oScript.src = src;
    oHead.appendChild(oScript);
    setTimeout(function(){
        callBack && callBack();
    },500);
};