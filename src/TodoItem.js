import React,{ Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return (
            <li>
                {/* 接收传来的value */}
                <span dangerouslySetInnerHTML={{__html:this.props.value}}></span>
                {/* 子组件向父组件传值，通过父组件传来的函数回传给父组件 */}
                <span onClick={this.handleDelete.bind(this)}>x</span>
            </li>
        )
    }
    handleDelete(){
        //通过接收的函数回传给父组件
        this.props.handleDelete(this.props.index)
    }
}

TodoItem.propTypes = {
    value:PropTypes.string,
    list:PropTypes.array
}
TodoItem.defaultProps = {
    value:'ly'
}
export default TodoItem