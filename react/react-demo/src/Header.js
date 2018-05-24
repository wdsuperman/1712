import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
class Header extends Component {
  handelClick = () => {
    //点击事件实现路由（页面）的跳转
    //被当做路由的组件 会默认接收到很多props 里面有三大属性 location match history
    //Header 组件并不是路由组件 怎么使用这些 props 需要使用 withRouter 包裹一下该组件 这个组件就会接收到路由传递的 props 了
    // this.props.history.push('/')
    this.props.history.goBack()
  }
  render() {
    return (
      <Top>
        <Link to="/">
          <svg
            t="1527064042554"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="720"
            width="50"
            height="50"
          >
            <defs>
              <style type="text/css" />
            </defs>
            <path
              d="M512 128c64 0 115.2 19.2 160 64 44.8 44.8 64 96 64 160 0 19.2 0 32 6.4 44.8 6.4 19.2 12.8 32 12.8 44.8 0 32 12.8 57.6 32 83.2 25.6 32 38.4 51.2 44.8 76.8 0 0 0 6.4 0 6.4 12.8 38.4 19.2 64 12.8 96-32 12.8-57.6 32-76.8 64-19.2 38.4-19.2 83.2 0 115.2 0 0 0 0 0 0-6.4 6.4-19.2 12.8-51.2 12.8-12.8 0-19.2-6.4-32-6.4-6.4 0-19.2 0-25.6 0-6.4 0-6.4 0-12.8 0-6.4 0-6.4 0-6.4 0 0 0 0 0 0 0C576 857.6 569.6 832 524.8 832L492.8 832c-44.8 0-83.2 25.6-102.4 57.6 0 0-6.4 0-12.8 0-6.4 0-12.8 0-19.2 0-6.4 0-19.2 0-25.6 0-51.2 0-70.4-6.4-76.8-6.4 0 0 0 0 0 0 19.2-38.4 19.2-83.2 0-121.6-19.2-32-44.8-51.2-76.8-64-6.4-25.6 0-57.6 12.8-89.6 0-6.4 12.8-12.8 12.8-19.2C224 556.8 256 512 256 448L256 441.6c0 0 0-12.8 12.8-32 6.4-19.2 12.8-38.4 12.8-57.6 0-51.2 25.6-108.8 76.8-160C403.2 147.2 448 128 512 128M512 0C416 0 332.8 32 262.4 102.4 198.4 172.8 153.6 256 153.6 352 140.8 377.6 128 409.6 128 441.6L128 448c0 32-51.2 76.8-64 115.2-19.2 57.6-25.6 108.8-19.2 153.6 6.4 51.2 32 83.2 64 96 6.4 0 19.2 6.4 25.6 6.4-12.8 19.2-19.2 38.4-19.2 64 0 38.4 19.2 76.8 64 102.4 38.4 25.6 89.6 32 147.2 32 12.8 0 32 0 44.8 0 44.8 0 89.6 6.4 115.2-57.6l32 0c32 64 83.2 57.6 128 57.6 12.8 0-12.8 0 51.2 0L697.6 1024c64 0 108.8-12.8 147.2-38.4 38.4-25.6 57.6-51.2 57.6-96 0-25.6-12.8-57.6-25.6-57.6 0 0 0 0 0 0 6.4 0 19.2-6.4 25.6-12.8 38.4-12.8 57.6-44.8 64-96 6.4-44.8 0-96-19.2-153.6-12.8-44.8-38.4-83.2-70.4-121.6 0-32-6.4-57.6-19.2-89.6 0-96-32-179.2-102.4-249.6C691.2 32 608 0 512 0L512 0z"
              p-id="721"
              fill="#f4ea2a"
            />
          </svg>
        </Link>
        <button onClick={this.handelClick}>首页</button>
      </Top>
    )
  }
}

export default withRouter(Header)

const Top = styled.div`
  width: 600px;
  height: 80px;
  background-color: #697a7d;
  margin: 0 auto;
`