import Templates from '../common/Templates'
import Profile from './profile';
import { Suspense, lazy } from 'react';
import YoutubeIFrame from './YoutubeIFrame';

const PlaceholderContents = lazy(() => import('./PlaceholderContents'))

const Index = () => {
  return (
    <Templates>
      <Profile/>
      <Suspense fallback={'loading...'}>
        <PlaceholderContents />
      </Suspense>
      {/* <YoutubeIFrame /> */}
    </Templates>
  )
}

export default Index;
