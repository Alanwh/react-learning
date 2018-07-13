React 组件 ===== React 元素
### 1. React.createElement()
   在接收第二个参数后(属性列表)，接收一个动态参数，它表示所创建元素的子元素。

### 2. ReactDOM.render(React元素，DOM元素);

### 3. React.Component
   该类定义了一个单一的实例函数 —— render()，并使函数返回虚拟 DOM 对象

### 4. this.setState()
    参数是函数返回json或者是json

### 5. 生命周期
    创建阶段(Mounting) -> 该阶段的函数只执行一次  
#### constructor()   
* 作用：1 获取props 2 初始化state  
* 说明：通过 constructor() 的参数props获取  
* 设置state和props  
#### componentWillMount()   
* 说明：组件被挂载到页面之前调用，其在render()之前被调用，因此在这方法里同步地设置状态将不会触发重渲染  
* 注意：无法获取页面中的DOM对象  
* 注意：可以调用 setState() 方法来改变状态值  
* 用途：发送ajax请求获取数据  
#### render()   
* 作用：渲染组件到页面中，无法获取页面中的DOM对象  
* 注意：不要在render方法中调用 setState() 方法，否则会递归渲染  
* 原因说明：状态改变会重新调用render()，render()又重新改变状态  
#### componentDidMount()  
* 组件已经挂载到页面中  
* 可以进行DOM操作，比如：获取到组件内部的DOM对象  
* 可以发送请求获取数据  
* 可以通过 setState() 修改状态的值  
* 注意：在这里修改状态会重新渲染  
    运行阶段(Updating) -> 该阶段的函数执行多次,每当组件的props或者state改变的时候,都会触发运行阶段的函数  
    componentWillReceiveProps()   
    shouldComponentUpdate()   
    componentWillUpdate()   
    render()   
    componentDidUpdate()  
    componentWillUnmount()  

### 6. 通过静态属性 defaultProps 来初始化props  

### 7. fetch 基本使用  
* 通过fetch请求回来的数据，是一个Promise对象.  
* 调用then()方法，通过参数response，获取到响应对象  
* 调用 response.json() 方法，解析服务器响应数据  
* 再次调用then()方法，通过参数data，就获取到数据了  

### context 
* 一个组件的 context 只有它的子组件能够访问
* getChildContext 方法子树的 context 对象
* 必须提供 childContextTypes 作为 context 的声明和验证。
* 任意深度的子组件都可以通过 contextTypes 来声明你想要的 context 里面的哪些状态，然后可以通过 this.context 访问到那些状态。

模块（组件）之间需要共享数据 <---> 数据可能被任意修改导致不可预料的结果

### react-redux
* Actions
* Reducers
* Store

### connect
* 可以把一些可复用的逻辑放在高阶组件当中
* 高阶组件包装的新组件和原来组件之间通过 props 传递信息，减少代码的重复程度


告诉高级组件我们需要什么数据，高阶组件才能正确地去取数据
### mapStateToProps 
* 相当于告知了 Connect 应该如何去 store 里面取数据，然后可以把这个函数的返回结果传给被包装的组件

### mapDispatchToProps

### Provider
* 它就是一个容器组件，会把嵌套的内容原封不动作为自己的子组件渲染出来。
* 它还会把外界传给它的 props.store 放到 context，这样子组件 connect 的时候都可以获取到。

### 基本流程
* 1.UI组件Example,
    只接受this.props数据,包括reducer出来的数据state,以及dispatch方法.
* 2.容器组件
    const store = createStore(reducer);
    通过mapStateToProps将reducer返回的state作为this.props传入.
    通过mapDispatchToProps将action作为this.props传入.
    通过connect方法将这两个方法与Example组件连接起来,返回一个容器组件.

### UI组件 
* 只负责UI的呈现,不带有任何业务逻辑
* 没有状态(即不使用this.state这个变量)
* 所有数据都由参数(this.props)提供
* 不适用任何redux的API

### 容器组件
* 负责管理数据和业务逻辑,不负责UI的呈现
* 带有内部状态
* 使用redux的API