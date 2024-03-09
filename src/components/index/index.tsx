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
        * TODO
        * [리액트 개발자 도구 - Suspend 기능]
      */}
      <Suspense fallback={'loading...'}>
        <PlaceholderContents />
      </Suspense>

      {/* 
        * TODO
        * [네트워크 패널 - 프레임별 그룹 지정]
      */}
      {/* <YoutubeIFrame /> */}
    </Templates>
  )
}

export default Index;
