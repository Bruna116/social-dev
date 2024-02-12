import styled from 'styled-components'
import moment from 'moment'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import Menu from '../navigation/Menu'

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

const StyledUsername = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  fint-size: 12px;
`

const ContainerText = styled.div`
  margin-top: 20px;
`

const ContainerMenu = styled.div`
  float: right;
`

function Post ({ text, user, date, isOwner, id }) {
  const { mutate } = useSWRConfig()

  const handleEdit = async () => {
    console.log("EDITAR PUBLICAÇÃO")
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        data: {
          id
        }
      })
      if (response.status === 200)
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PostContainer>
      {
        isOwner && 
        <ContainerMenu>
          <Menu 
            options={[
              {
                text: 'editar publicação',
                onClick: handleEdit
              },
              {
                text: 'deletar publicação',
                onClick: handleDelete
              }
            ]}
          />
      </ContainerMenu>
      } 
      <StyledUsername>@{user}</StyledUsername>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <ContainerText>
        {text}
      </ContainerText>
    </PostContainer>
  )
}

export default Post