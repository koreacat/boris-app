import styled from 'styled-components';

const YoutubeIFrame = () => {
  return (
    <YoutubeIFrameArea>
      <iframe width="600" height="600" src="https://www.youtube.com/embed/Ky8IkG9KnzQ" title="This Cat Is Broken #shorts" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </YoutubeIFrameArea>
  )
}

const YoutubeIFrameArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding: 24px;
  border: 1px solid #eee;
  gap: 24px;
`

export default YoutubeIFrame;