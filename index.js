function getLong(a, b) {
    const _aln = a.toString().split('.')[1] ? a.toString().split('.')[1].length : 0;
    const _bln = b.toString().split('.')[1] ? b.toString().split('.')[1].length : 0;
    const long = _aln > _bln ? _aln : _bln;
    return long;
}
// 加
function sum(a, b) {
    const long = getLong(a, b);
    return (a * (10 ** long) + b * (10 ** long)) / (10**long);
}
// 减
function sub(a, b) {
    const long = getLong(a, b);
    return (a * (10 ** long) - b * (10 ** long)) / (10**long);
}
// 乘
function mul(a, b) {
    const long = getLong(a, b);
    return (a * (10 ** long) * (b * (10 ** long))) / (10**long) / (10**long);
}
// 除
function div(a, b) {
    const long = getLong(a, b);
    return (a * (10 ** long) / (b * (10 ** long)));
}
