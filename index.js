class Compute {
    constructor(initNum) {
        this.result = initNum ? initNum : 0;
    }

    // 加
    add(...args) {
        if (args.length === 0) {
            return this;
        }
        args.forEach(item => {
            item = Number(item);
            if (isNaN(item)) {
                throw 'please input numbers';
            }
            const long = getLong(this.result, item);
            this.result = (this.result * (10 ** long) + item * (10 ** long)) / (10 ** long);
        });
        return this;
    }
    // 减
    sub(...args) {
        if (args.length === 0) {
            return this;
        }
        args.forEach(item => {
            item = Number(item);
            if (isNaN(item)) {
                throw 'please input numbers';
            }
            const long = getLong(this.result, item);
            this.result = (this.result * (10 ** long) - item * (10 ** long)) / (10 ** long);
        });
        return this;
    }
    // 乘
    mul(...args) {
        if (args.length === 0) {
            return this;
        }
        args.forEach(item => {
            item = Number(item);
            if (isNaN(item)) {
                throw 'please input numbers';
            }
            const long = getLong(this.result, item);
            this.result = (this.result * (10 ** long) * (item * (10 ** long))) / (10 ** long) / (10 ** long);
        });
        return this;
    }
    // 除
    div(...args) {
        if (args.length === 0) {
            return this;
        }
        args.forEach(item => {
            item = Number(item);
            if (isNaN(item)) {
                throw 'please input numbers';
            }
            const long = getLong(this.result, item);
            this.result = (this.result * (10 ** long) / (item * (10 ** long)));
        });
        return this;
    }
    // 获得结果
    getValue() {
        return this.result;
    }
}
function getLong(a, b) {
    if (a < 0) {
        a = Number(a.toString().substring(1));
    }
    if (b < 0) {
        b = Number(b.toString().substring(1));
    }
    const _aln = a.toString().split('.')[1] ? a.toString().split('.')[1].length : 0;
    const _bln = b.toString().split('.')[1] ? b.toString().split('.')[1].length : 0;
    const long = _aln > _bln ? _aln : _bln;
    return long;
}
