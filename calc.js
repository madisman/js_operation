var Compute = /** @class */ (function () {
    function Compute(initNum) {
        this.result = initNum ? initNum : 0;
    }
    // 加
    Compute.prototype.add = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0) {
            return this;
        }
        args.forEach(function (item) {
            item = Number(item);
            if (isNaN(item)) {
                throw 'please input numbers';
            }
            var long = getLong(_this.result, item);
            _this.result = (_this.result * (Math.pow(10, long)) + item * (Math.pow(10, long))) / (Math.pow(10, long));
        });
        return this;
    };
    // 减
    Compute.prototype.sub = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0) {
            return this;
        }
        args.forEach(function (item) {
            item = Number(item);
            if (isNaN(item)) {
                throw 'please input numbers';
            }
            var long = getLong(_this.result, item);
            _this.result = (_this.result * (Math.pow(10, long)) - item * (Math.pow(10, long))) / (Math.pow(10, long));
        });
        return this;
    };
    // 乘
    Compute.prototype.mul = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0) {
            return this;
        }
        args.forEach(function (item) {
            item = Number(item);
            if (isNaN(item)) {
                throw 'please input numbers';
            }
            var long = getLong(_this.result, item);
            _this.result = (_this.result * (Math.pow(10, long)) * (item * (Math.pow(10, long)))) / (Math.pow(10, long)) / (Math.pow(10, long));
        });
        return this;
    };
    // 除
    Compute.prototype.div = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0) {
            return this;
        }
        args.forEach(function (item) {
            item = Number(item);
            if (isNaN(item)) {
                throw 'please input numbers';
            }
            var long = getLong(_this.result, item);
            _this.result = (_this.result * (Math.pow(10, long)) / (item * (Math.pow(10, long))));
        });
        return this;
    };
    // 获得结果
    Compute.prototype.getValue = function () {
        return this.result;
    };
    return Compute;
}());
function getLong(a, b) {
    if (a < 0) {
        a = Number(a.toString().substring(1));
    }
    if (b < 0) {
        b = Number(b.toString().substring(1));
    }
    var _aln = a.toString().split('.')[1] ? a.toString().split('.')[1].length : 0;
    var _bln = b.toString().split('.')[1] ? b.toString().split('.')[1].length : 0;
    var long = _aln > _bln ? _aln : _bln;
    return long;
}
