import styled from '@emotion/styled'
import CardMedia from '@mui/material/CardMedia'
import { useState } from 'react'
// import { Box } from '@mui/material'
import { Tooltip, Zoom } from '@mui/material'
import { Meatballs } from './Meatballs'

const Cards = ({ title, content, image, date, id, navigate, openModal }) => {
   const [anchorEl, setAnchorEl] = useState(null)
   // const [isShow, setIsShow] = useState(false)
   // const des = item.description.split(' ').slice(0, 10).join(' ')

   const item = {
      title,
      content,
      image,
      date,
      id,
   }

   function truncateText(text, maxLength) {
      if (text.length > maxLength) {
         return `${text.slice(0, maxLength)}...`
      }
      return text
   }

   const truncatedDescription = truncateText(content, 70)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   // const isShowHandler = () => {
   //    setIsShow((prev) => !prev)
   // }

   return (
      <CardContainer>
         <CardMedia
            onClick={() => navigate(id)}
            component="img"
            alt="projects"
            height="171"
            image={image}
         />
         <DateContainer>
            <DataEngineer>{title}</DataEngineer>
            <Date>{date}</Date>
         </DateContainer>
         <DescriptionContainer>
            <Tooltip
               TransitionComponent={Zoom}
               title={content}
               placement="right-end"
            >
               <Description>{truncatedDescription}</Description>
            </Tooltip>
         </DescriptionContainer>

         <MeatballsContainer>
            <Meatballs
               items={item}
               open={Boolean(anchorEl)}
               onClick={handleClick}
               onClose={handleClose}
               anchorEl={anchorEl}
               openModal={openModal}
            />
         </MeatballsContainer>
      </CardContainer>
   )
}

export default Cards

const CardContainer = styled('div')(() => ({
   border: '1px solid ',
   width: '230px',
   borderRadius: '10px',

   img: {
      borderRadius: '10px 10px 0px 0px',
   },
}))

const DateContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-around',
   alignItems: 'center',
}))

const DataEngineer = styled('span')(() => ({
   fontFamily: 'Open Sans',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '18px',
   lineHeight: '25px',
   color: '#1D293F',
   margin: '15px 0 0',
}))

const Date = styled('span')(() => ({
   fontFamily: 'Open Sans',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '12px',
   lineHeight: '140.1%',
   color: '#1D293F',
   margin: '15px 0 0',
}))

const Description = styled('p')(() => ({
   fontFamily: 'Open Sans',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '22px',
   color: '#1D293F',
   margin: '10px 0',
}))

const DescriptionContainer = styled('div')(() => ({
   whiteSpace: 'pre-wrap',
   padding: '0px 5px',
}))

const MeatballsContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   paddingLeft: '240px',
}))
