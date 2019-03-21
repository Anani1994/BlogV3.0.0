(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{314:function(t,s,e){"use strict";e.r(s);var n=e(472),a=e(388);for(var i in a)"default"!==i&&function(t){e.d(s,t,function(){return a[t]})}(i);var r=e(0),c=Object(r.a)(a.default,n.a,n.b,!1,null,null,null);c.options.__file="src/views/articles/frontend/JS/JS-06.vue",s.default=c.exports},387:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{toTop:this.$util.toTop}}}},388:function(t,s,e){"use strict";e.r(s);var n=e(387),a=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(s,t,function(){return n[t]})}(i);s.default=a.a},472:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BoWen",[e("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[e("Steps",{attrs:{direction:"vertical"}},[e("Step",{attrs:{title:"函数",content:"JavaScript 中的函数",status:"wait"},nativeOn:{click:function(s){t.toTop("#JS-06-1",30)}}}),e("Step",{attrs:{title:"理解参数",content:"理解参数",status:"wait"},nativeOn:{click:function(s){t.toTop("#JS-06-2",30)}}}),e("Step",{attrs:{title:"没有重载",content:"没有重载",status:"wait"},nativeOn:{click:function(s){t.toTop("#JS-06-3",30)}}})],1)],1),e("div",{staticClass:"px-1"},[e("div",{staticClass:"py-3 text-center"},[e("h1",[e("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JS-函数")],1),e("p",{staticClass:"pt-1"},[t._v("通过函数可以封装任意多条语句，而且可以在任何地方、任何时候调用执行")])]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-06-1"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 函数")],1),e("Divider"),e("p",[t._v("ECMAScript 中的函数使用 function 关键字来声明，后跟一组参数以及函数体。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v("function functionName(arg0, arg1, ..., argN) { statements }")])]),e("p",[t._v("函数可以通过其函数名来调用，后面还要加上一对圆括号和参数。")]),e("p",[t._v("ECMAScript 中的函数在定义时不必指定是否返回值。实际上，任何函数在任何时候都可以通过 return 语句后跟要返回的值来实现返回值。")]),e("p",[t._v("函数会在执行完 return 语句之后停止并立即退出。")]),e("p",[t._v("return 语句也可以不带有任何返回值。在这种情况下，函数在停止执行后将返回undefined 值。")]),e("p",[t._v("严格模式对函数有一些限制，如果发生以下情况，就会导致语法错误，代码无法执行："),e("ul",{staticClass:"ml-1 text-warn"},[e("li",[t._v("不能把函数命名为eval 或arguments；")]),e("li",[t._v("不能把参数命名为eval 或arguments；")]),e("li",[t._v("不能出现两个命名参数同名的情况。")])])]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-06-2"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 理解参数")],1),e("Divider"),e("p",[t._v("ECMAScript 函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。")]),e("p",[t._v("即便你定义的函数只接收两个参数，在调用这个函数时你可以传递任意个参数，甚至是不传递参数。")]),e("p",[t._v("原因是 ECMAScript 中的参数在内部是用一个数组来表示的。函数接收到的始终都是这个数组，而不关心数组中包含哪些参数（如果有参数的话）。")]),e("p",{staticClass:"text-info"},[t._v("在函数体内可以通过 arguments 对象来访问这个参数数组，从而获取传递给函数的每一个参数。")]),e("p",{staticClass:"text-warn"},[t._v("arguments 对象只是与数组类似（它并不是 Array 的实例），，因为可以使用方括号语法访问它的每一个元素。")]),e("p",[t._v("通过访问 arguments 对象的 length 属性可以获知有多少个参数传递给了函数。")]),e("p",{staticClass:"text-success"},[t._v("命名参数只提供便利，但不是必需的。")]),e("p",{staticClass:"text-success"},[t._v("没有传递值的命名参数将自动被赋予 undefined 值。这就跟定义了变量但又没有初始化一样。")]),e("p",[t._v("arguments 它的值永远与对应命名参数的值保持同步。但是，这两个值它们的内存空间是独立的，只是它们的值会同步。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v("function test(num1, num2) { \n    arguments[1] = 10;\n    console.log(arguments[0] + num2);\n}\ntest(5,20) // 15\ntest(5); // NaN")])]),e("p",[t._v("需要记住的是，如果只传入了一个参数，那么为 arguments[1] 设置的值不会反应到命名参数中。这是因为 arguments 对象的长度是由传入的参数个数决定的，不是由定义函数时的命名参数的个数决定的。")]),e("p",{staticClass:"text-warn"},[t._v("严格模式下：通过 arguments[] 的形式无法改变参数的值，2、重写 arguments 的值会导致语法错误。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v("function test(num1, num2) { \n    arguments[1] = 10;\n    console.log(arguments[0] + num2);\n}\ntest(5,20) // 25\ntest(5); // NaN")])]),e("p",{staticClass:"text-warn"},[t._v("严格模式下：重写 arguments 的值会导致语法错误。")]),e("p",{staticClass:"text-success"},[t._v("ECMAScript 中的所有参数传递的都是值，不可能通过引用传递参数。")]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-06-3"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 没有重载")],1),e("Divider"),e("p",[t._v("ECMAScirpt 函数没有签名，因为其参数是由包含零或多个值的数组来表示的。")]),e("p",[t._v("由于不存在函数签名的特性，ECMAScript 函数不能重载。")]),e("p",[t._v("如果在 ECMAScript 中定义了两个名字相同的函数，则该名字只属于后定义的函数。")]),e("p",[t._v("通过检查传入函数中参数的类型和数量并作出不同的反应，可以模仿方法的重载。")]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[e("code",{staticClass:"js"},[t._v("function saySomething() { \n    // 根据传入参数的个数执行不同的代码\n    if (arguments.length == 1) {\n        console.log(arguments[0]);\n    } else if (arguments.length == 2) {\n        console.log(arguments[0] + arguments[1]);\n    }\n}\nsaySomething('Hello');\nsaySomething('Hello', 'world');")])]),e("p",{staticClass:"text-right"},[t._v("参考资料：JavaScript 高级程序设计（第三版）")]),e("FooterDivider")],1)])},a=[];n._withStripped=!0,e.d(s,"a",function(){return n}),e.d(s,"b",function(){return a})}}]);