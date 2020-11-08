import React, { memo, useEffect } from "react"
import { connect } from "react-redux"
import { forceCheck } from 'react-lazyload'
import { renderRoutes } from 'react-router-config'
import Slider from "@/components/slider"
import RecommendList from "@/components/list"
import Scroll from "@/components/scroll"
import Loading from '../../baseUI/loading/index'
import { actionCreators } from "./store"
import { Content } from "./style"

const Recommend = memo(function (props) {
  const { bannerList, recommendList, enterLoading } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props

  useEffect(() => {
    if (!bannerList.size){
      getBannerDataDispatch ()
    }
    if (!recommendList.size){
      getRecommendListDataDispatch ()
    }
    //eslint-disable-next-line
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []

  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      { enterLoading ? <Loading></Loading> : null }
      { renderRoutes (props.route.routes) }
    </Content>
  )
})

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn(["recommend", "bannerList"]),
  recommendList: state.getIn(["recommend", "recommendList"]),
  enterLoading: state.getIn (['recommend', 'enterLoading'])
})
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreators.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionCreators.getRecommendList())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
