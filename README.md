## mEdit
---
一款适用于手机端的简单的富文本编辑器插件


## 使用方法（usage）
---
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
        
## 参数设置

参数 | 默认值 | 是否必填 | 说明
----|------|----|----
el | dom元素  | 必填 | 
option | 对象 | 必填 |{val:'',succFun:function(){}}val可渲染默认值,succFun可接收回调

## demo

查看[demo]:./demo

	  <!DOCTYPE html>
		<html>

		<head>
    		<meta charset="utf-8">
    		<meta name="viewport" content="width=device-width,initial-scale = 1.0,user-scalable=no">
    		<title></title>
		</head>
		<link rel="stylesheet" href="./mEdit.css">
		<style>
    	* {
       		 margin: 0;
    	    	padding: 0;
    }

    	html,
    	body {
        	width: 100%;
        	height: 100%;
    	}

    	#content {
        	position: relative;
        	height: 100%;
    	}

    	.btn_add {
        	position: fixed;
        	bottom: 20px;
        	left: 50%;
        	margin-left: -20px;
        	font-size: 16px;
        	color: #fff;
        	background: #57a7ff;
        	padding: 6px 14px;
        	border-radius: 4px;
        	cursor: pointer;
    	}
		</style>

		<body>
    	<div id="content">
        	<div id='edit-container'></div>
        	<a class='btn_add' onclick='javascript:showEdit();'>添加</a class='btn_add'>
    	</div>
    	<script src="./dist/js/mEdit.min.js"></script>
    	<script>
       		var el = document.getElementById('edit-container')
        	mEdit.initMEdit(el,
            {
                val: '',
                succFun: function (html) {
                    console.log(html)
                }
            }
        	)
        	function showEdit() {
            mEdit.showEdit()
        	}
    	</script>
		</body>


	</html>


    



