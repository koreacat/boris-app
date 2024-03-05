import Templates from '../common/Templates'
import Profile from './Profile';
import PlaceholderContents from './PlaceholderContents';
import YoutubeIFrame from './YoutubeIFrame';

const Index = () => {
  return (
    <Templates>
      <Profile/>
      <PlaceholderContents />
      {/* <YoutubeIFrame /> */}
    </Templates>
  )
}

export default Index;
