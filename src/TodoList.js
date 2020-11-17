import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
// import store from './store'
import { connect } from 'react-redux'
import { inputValue, addList, deleteList, getList } from './store/actionCreator'
// import axios from 'axios'
// import fetch from 'fetch'
class TodoList extends Component {
    //consturctor  是生命周期  
    constructor() {
        super() //关系到this指向
        this.btn1 = React.createRef()
        // this.state = store.getState()
        // store.subscribe(this.handleStoreChange.bind(this))
    }
    //render 第一次执行会将数据保存一份，再次执行的时候，render会将这次的虚拟dom与缓存中的虚拟dom进行对比，也叫diff算法
    //只要 state/props中的值改变，就会触发
    render() {
        console.log('执行render')
        return (
            <Fragment>
                <div className='todolist'>
                    <div className='tool'>
                        <label htmlFor="input">请输入:</label>
                        <input id='input' value={this.props.inputValue} onChange={this.handleInputChange.bind(this)} />
                        <button onClick={this.handleButtonClick.bind(this)} ref={this.btn1}>添加</button>
                        <button onClick={this.handleTestRequest.bind(this)} ref={(btn) => (this.btn = btn)}>请求测试</button>
                    </div>
                    <ul>
                        {
                            this.props.list.map((_, index) => (
                                // <li key={index}>
                                //     <span>{_}</span>
                                //     <span onClick={this.handleListDelete.bind(this,index)}>x</span>
                                // </li>
                                <TodoItem value={_} key={index} handleDelete={this.handleListDelete.bind(this, index)}></TodoItem>
                            ))
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
    handleInputChange(e) {
        inputValue(e.target.value)
    }
    handleButtonClick() {
        if (!this.props.inputValue) {
            return
        }
        addList(this.props.inputValue)
    }
    handleListDelete(index) {
        deleteList(index)
    }
    handleStoreChange() {
        //着中国方式会报错，后续再解决
        // this.setState(store.getState())
    }
    //使用fetch
    async handleTestRequest() {
        let result = await fetch('./data.json')
        let data = await result.json()
        console.log(data)
    }
    //可以在当前生命周期中获取真实的dom
    //可以进行数据交互
    //可以对插件进行实例化 
    componentDidMount() {
        console.log('执行componentDidMount')
        // const action = getList()
        // store.dispatch(action)

        //ref
        console.log('这是ref', this.btn)
        console.log('这也是ref', this.btn1.current)
    }
    //可以获取数据更新后的dom
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("执行componentDidUpdate")
    }
    //可以做事件的解绑、数据的移除
    componentWillUnmount() {
        console.log('执行componentWillUnmount')
    }
    //17 新增生命周期
    //是一个static方法，内部不允许使用this
    //通过返回对象来更新state,如果某些props的情况不需要更新state,就返回null
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        console.log(prevState)
        console.log('执行getDerivedStateFromProps')
        return null
    }
    //组件更新前的快照
    //它的返回值会作为第三个参数传给componentDidUpdate的参数中
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('执行getSnapshotBeforeUpdate')
        return null
    }
    //捕捉错误，类似try catch
    componendDidCatch(error, info) {

    }
    //总结
    //第一次进入执行的生命周期 constructor、componentWillMount(react17 移除 )、render、componentDidMount
    //废除的生命周期 componentWillMount，componentwillReceiveProps，componentWillUpdate
    //新增的生命周期 getDerivedStateFromProps，getSnapshotBeforeUpdate，componendDidCatch
}

const mapStateToProps = (state) => ({
    inputValue: state.inputValue,
    list: state.list
})
const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)