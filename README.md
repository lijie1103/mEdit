## mEdit

一款适用于手机端的简单的富文本编辑器插件


## 使用方法（usage）

1、dom结构

	    <div id='edit-container'></div>
	    
2、引用css和js 
(basic)

	    <link rel="stylesheet" href="css/mEdit.css">
	    <script src="js/mEdit.min.js"></script>
	    
3、初始化（init）

	    mEdit.initMEdit(el, option)
4、控制遮罩层和编辑器显示的生效代码（调用showEdit()方法即可显示）

	     mEdit.showEdit()
        
## API

参数 | 默认值 | 是否必填 | 
----|------|----|
el | dom元素  | 必填 | 
options  | 对象 | 选填 |

### options参数
参数 | 类型 | 默认值| 说明
----|------|----|----
val | string | 空 | 可渲染默认值
succFun  | function | 空|支持回调函数

## demo
查看 [demo](https://github.com/lijie1103/mEdit/tree/master/demo).