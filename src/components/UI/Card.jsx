import styled from '@emotion/styled'
import CardMedia from '@mui/material/CardMedia'
import { useState } from 'react'
import { Tooltip, Zoom } from '@mui/material'
import { Meatballs } from './Meatballs'

const Cards = ({
   title,
   content,
   image,
   date,
   id,
   navigate,
   openModal,
   meatballsVisible = true,
}) => {
   const [anchorEl, setAnchorEl] = useState(null)

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
   return (
      <CardContainer iner>
         <CardMedia
            onClick={() => navigate({ id, title })}
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
            {meatballsVisible ? (
               <Meatballs
                  items={item}
                  open={Boolean(anchorEl)}
                  onClick={handleClick}
                  onClose={handleClose}
                  anchorEl={anchorEl}
                  openModal={openModal}
               />
            ) : null}
         </MeatballsContainer>
      </CardContainer>
   )
}

export default Cards

const CardContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   width: '230px',
   borderRadius: '10px',
   backgroundColor: ' #FFFFFF',
   minHeight: '310px',
   maxHeight: 'auto',
   img: {
      borderRadius: '10px 10px 0px 0px',
   },
   padding: '0 0 21px 0',
   overflow: 'hidden',
}))

const DateContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap: '20px',
   padding: '0 10px',
}))

const DataEngineer = styled('span')(() => ({
   fontFamily: 'Open Sans',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '18px',
   lineHeight: '25px',
   color: '#1D293F',
   margin: '15px 0 0',
   overflow: 'hidden',
   whiteSpace: 'nowrap',
   textOverflow: 'ellipsis',
}))

const Date = styled('span')(() => ({
   fontFamily: 'Open Sans',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '12px',
   lineHeight: '140.1%',
   color: '#1D293F',
   margin: '15px 0 0',
   marginLeft: '-0px',
   whiteSpace: 'nowrap',
}))

const Description = styled('p')(() => ({
   fontFamily: 'Open Sans',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '22px',
   color: '#66666',
   margin: '10px 0',
}))

const DescriptionContainer = styled('div')(() => ({
   whiteSpace: 'pre-wrap',
   padding: '0px 10px',
   maxWidth: '230px',
}))

const MeatballsContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'flex-end',
}))
