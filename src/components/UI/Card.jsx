import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { ReactComponent as Icons } from '../../assets/icons/frames.svg'
import { Meatballs } from './Meatballs'

const Cards = ({ title, content, image, date }) => {
   return (
      <CardStyled>
         <CardMedia component="img" alt="projects" height="171" image={image} />
         <DivStyled>
            <CardContent>{title}</CardContent>
            <CardContent>{date}</CardContent>
         </DivStyled>

         <StyledCartContent>{content}</StyledCartContent>
         <CardActionStyled>
            <Icons />
            <Meatballs />
            okn;olknljkfdniskjv;n fdkj, jasnmdfnxjcklsn xlk.f,mvdfl kc.,
         </CardActionStyled>
      </CardStyled>
   )
}

export default Cards

const DivStyled = styled.div({
   display: 'flex',
   maxWidth: 234,
   height: 18,
   marginLeft: 18,
   marginRight: 18,
   marginTop: 16,
})

const CardStyled = styled(Card)({
   maxWidth: 270,
   height: 350,
   borderRadius: 10,
})

const CardActionStyled = styled(CardActions)({
   marginLeft: 228,
   marginBottom: 8,
})

const StyledCartContent = styled(CardContent)`
   display: flex;
   margin-left: 18px;
   margin-right: 18px;
   margin-top: 10px;
   .MuiTypography-root {
      white-space: pre-wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 234;
      height: 66px;
   }
`
