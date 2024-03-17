import Templates from '../common/Templates'
import Profile from './profile';
import { Suspense, lazy } from 'react';
import YoutubeIFrame from './YoutubeIFrame';

const PlaceholderContents = lazy(() => import('./PlaceholderContents'))

const Index = () => {
  return (
    <Templates>
      <Profile/>

      {/* 
        * TODO 4.
        * [리액트 개발자 도구 - Components Suspend 기능 사용해보기]
      */}
      <Suspense fallback={'loading...'}>
        <PlaceholderContents />
      </Suspense>

      {/* 
        * TODO 2.
        * [네트워크 패널 - 네트워크 옵션 사용하기]
      */}
      {/* <YoutubeIFrame /> */}
    </Templates>
  )
}

export default Index;
