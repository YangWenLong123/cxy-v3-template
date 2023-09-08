## v-inputNumber

此指令限制用户只能输入数字，可以设置小数位数限制

| 属性名  | 说明     | 类型 | 默认值 |
| ------- | -------- | ---- | ------ |
| decimal | 小数位数 | 数字 | 2      |

​
在模板中使用

```js
<el-input v-model="inputValue1" v-inputNumber />
<el-input v-model="inputValue2" v-inputNumber="{ decimal: 3 }" />
```

​

## v-copy

此指令用于复制文本到剪贴板中，需要先安装vue3-clipboard

| 属性名   | 说明                          | 类型   | 默认值 |
| -------- | ----------------------------- | ------ | ------ |
| position | 相对目标元素的位置，可选'out' | string | -      |

模板中使用

```js
<div v-copy>222</div>
<div><el-tag v-copy="{ position: 'out' }">343434</el-tag></div>
```

## v-throttle

节流策略（throttle）,顾名思义，可以减少一段时间内事件的触发频率

此指令应用在按钮上，当用户重复点击按钮，指定时间内只执行一次操作或请求。

| 属性名 | 说明             | 类型 | 默认值 |
| ------ | ---------------- | ---- | ------ |
| time   | 时间间隔（毫秒） | 数字 | 1000   |

模板中使用

```js
<el-button type="primary" v-throttle @click="testThrottle(100)">
    点击我（间隔1秒）！
</el-button>
    <el-button type="primary" v-throttle="{ time: 3000 }" click="testThrottle(200)">点击我(间隔3秒)！
</el-button >
```

## v-debounce

防抖策略（debounce）是当事件被触发后，延迟n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。

| 属性名 | 说明             | 类型     | 默认值 |
| ------ | ---------------- | -------- | ------ |
| time   | 时间间隔（毫秒） | 数字     | 1000   |
| func   | 延迟执行的方法   | Function | -      |
