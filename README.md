# js_operation
js四则运算小数精准度
# 使用方法
由于只是一个简单的四则运算封装,所以模块请自行处理
```
// node导出
module.exports = class Compute...

// es6导出
export default class Compute...

// 使用
node引入
const Cal = require('./cal.js');

// es6引入
import Cal from './cal.js');

// 使用 链式
new Cal(0.1).add(0.2).getValue(); // 0.3
new Cal(0.1).add(0.2).sub(0.1).getValue(); // 0.2
new Cal().add(0.1, 0.2).getValue(); // 0.3
new Cal(1).add(0.1, 0.2).getValue(); // 1.3
```
