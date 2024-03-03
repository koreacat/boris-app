import styled from 'styled-components';
import Templates from '../common/Templates'

const Index = () => {

  return (
    <Templates>
      <ProfileArea>
      </ProfileArea>
    </Templates>
  )
}

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 1px solid #eee;
  gap: 24px;
`

export default Index;
