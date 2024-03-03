import styled from 'styled-components';
import useJsonPlaceholder from '../../hooks/useJsonPlaceholder';

const PlaceholderContents = () => {
  const data = useJsonPlaceholder();

  return (
    <PlaceholderContentsArea>
      <h2>Contents</h2>
      <p>{data?.name}</p>
      <p>{data?.body}</p>
      <p>{data?.email}</p>
    </PlaceholderContentsArea>
  )
}

const PlaceholderContentsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding: 24px;
  border: 1px solid #eee;
  gap: 24px;
`

export default PlaceholderContents;