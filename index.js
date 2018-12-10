class Compute {
    constructor(initNum) {
        this.result = initNum ? initNum : 0;
    }
    // 加
    add(num) {
        if (!num) {
            return this;
        }
        const long = getLong(this.result, num);
        this.result = (this.result * (10 ** long) + num * (10 ** long)) / (10 ** long);
        return this;
    }
    // 减
    sub(num) {
        if (!num) {
            return this;
        }
        const long = getLong(this.result, num);
        this.result = (this.result * (10 ** long) - num * (10 ** long)) / (10 ** long);
        return this;
    }
    // 乘
    mul(num) {
        if (!num) {
            return this;
        }
        const long = getLong(this.result, num);
        this.result = (this.result * (10 ** long) * (num * (10 ** long))) / (10 ** long) / (10 ** long);
        return this;
    }
    // 除
    div(num) {
        if (!num) {
            return this;
        }
        const long = getLong(this.result, num);
        this.result = (this.result * (10 ** long) / (num * (10 ** long)));
        return this;
    }
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
