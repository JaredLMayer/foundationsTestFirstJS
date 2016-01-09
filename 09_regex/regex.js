var findACount = function(str) {
    var count = 0;
    var aRegEx = /a/i;

    for (var i = 0; i < str.length; i++) {
        if (aRegEx.test(str[i])) {
            count++;
        }
    }
    return count;
}

var areaCodeFinder = function(str) {
    return parseInt(str.match(/\d{3}/));
}

function adjustUrlParameter(url, param) {
    var id = /\??ID=\d{3}/g
    var type = /TYPE/
    if (type.test(param)) {
        return url + "&" + param
    } else if (id.test(url)) {
        url = url.replace(id, "?" + param)
    } else {
        url += "?" + param
    }
    return url
}

function stringPlusPlus(string) {
    var num = 0
    if (/[1-9]+/.test(string)) {
        num = /[1-9]+/.exec(string)
        num = Number(num[0])
        if (/9$/.test(string)) {
            num++
            return string.replace(/0[1-9]+/, num)
        }
        num++
        return string.replace(/[1-9]+/, num)
    }
    if (/0$/.test(string)) {
        num++
        return string.replace(/0$/, num)
    } else {
        return string + "1"
    }
}