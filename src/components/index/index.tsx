import Templates from '../common/Templates'
import YoutubeIFrame from './YoutubeIFrame';
import PlaceholderContents from './PlaceholderContents';
import Profile from './Profile';

const Index = () => {
  return (
    <Templates>
      <Profile/>
      <PlaceholderContents />
      <YoutubeIFrame />
    </Templates>
  )
}

export default Index;
