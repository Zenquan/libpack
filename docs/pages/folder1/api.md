## Classes

<dl>
<dt><a href="#Mime">Mime</a></dt>
<dd></dd>
<dt><a href="#Test">Test</a></dt>
<dd></dd>
</dl>

<a name="Mime"></a>

## Mime
**Kind**: global class  
**Field**: 2021/01/16  

* [Mime](#Mime)
    * [new Mime()](#new_Mime_new)
    * [.lookup(url)](#Mime+lookup)

<a name="new_Mime_new"></a>

### new Mime()
作用：媒体类型的处理

<a name="Mime+lookup"></a>

### mime.lookup(url)
作用：媒体类型的判断

**Kind**: instance method of [<code>Mime</code>](#Mime)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 图片的链接 |

**Example**  
```js
const shareUrl = 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/09/run-challenge/assets/img/share.jpg'
const mimeInstance = new Mime();
mimeInstance.lookup(shareUrl) // 'image/jpg'
```
<a name="Test"></a>

## Test
**Kind**: global class  
**Field**: 2021/01/16  

* [Test](#Test)
    * [new Test()](#new_Test_new)
    * [.test(url)](#Test+test)

<a name="new_Test_new"></a>

### new Test()
作用：测试

<a name="Test+test"></a>

### test.test(url)
作用：媒体类型的判断

**Kind**: instance method of [<code>Test</code>](#Test)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 图片的链接 |

**Example**  
```js
```
