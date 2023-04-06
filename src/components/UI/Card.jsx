import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { ReactComponent as Icons } from '../../assets/icons/Frame.svg'

const Cards = ({ title, content, image, data }) => {
   return (
      <CardStyled>
         <CardMedia component="img" alt="projects" height="171" image={image} />
         <DivStyled>
            <CardContent>{title}</CardContent>
            <CardContent>{data}</CardContent>
         </DivStyled>
         <CardContent>{content}</CardContent>
         <CardActionStyled>
            <Icons />
         </CardActionStyled>
      </CardStyled>
   )
}

export default Cards

const DivStyled = styled.div({
   display: 'flex',
})

const CardStyled = styled(Card)({
   maxWidth: 270,
   height: 311,
   borderRadius: 10,
})

const CardActionStyled = styled(CardActions)({
   marginLeft: 230,
   marginTop: 30,
})
