// import GroupModal from '../../components/UI/GroupModal'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'
import { SideBar } from '../../layout/SideBar'
import { getPagination } from '../../api/adminService'
import GroupModal from '../../components/UI/GroupModal'
import Button from '../../components/UI/Button'
import { ReactComponent as Profile } from '../../assets/icons/Profile.svg'
import IconButton from '../../components/UI/IconButton'

const massive = [
   {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Data Engineer',
      deccription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
   },
   {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Data Engineer',
      deccription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
   },
   {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Data Engineer',
      deccription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
   },
   {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Data Engineer',
      deccription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
   },
   {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Data Engineer',
      deccription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
   },
   {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Data Engineer',
      deccription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
   },
   {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Data Engineer',
      deccription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
   },
   {
      url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      title: 'Data Engineer',
      deccription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
   },
]

export const Courses = () => {
   const dispatch = useDispatch()
   const [showModal, setShowModal] = useState(false)
   const [age, setAge] = useState('')

   const handleChange = (event) => {
      setAge(event.target.value)
   }

   useEffect(() => {
      dispatch(getPagination())
   }, [])

   const submitHandler = (data) => {
      // dispatch(postCourse(data))
      console.log(data)
   }
   const closeModalHandler = () => {
      setShowModal(false)
   }

   return (
      <>
         <MenuStyled>
            <IconButton icon={<Profile />} />
            <FormControl sx={{ m: 1 }}>
               <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  variant="standard"
                  sx={{ border: 'none' }}
               >
                  <MenuItem value="">
                     <p>Администратор</p>
                  </MenuItem>
                  <MenuItem>Выйти</MenuItem>
               </Select>
            </FormControl>
         </MenuStyled>
         <StyledHr />
         <Styledbtn>
            <ButtonStyled onClick={() => setShowModal(true)}>
               {' '}
               + Создать курс
            </ButtonStyled>
         </Styledbtn>
         <StyledContainer>
            {massive.map((item) => (
               <p>
                  <img src={item.url} alt="dsfd" />
                  <h3>{item.title}</h3>
                  <main>{item.deccription}</main>
                  <SideBar role="ADMIN" />
               </p>
            ))}

            <GroupModal
               data={submitHandler}
               open={showModal}
               onClose={closeModalHandler}
            />
         </StyledContainer>
      </>
   )
}
const StyledHr = styled('hr')({
   width: '78%',
   marginTop: '-6px',
   marginLeft: '260px',
})
const MenuStyled = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: '-12px',
})
const Styledbtn = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
})
const ButtonStyled = styled(Button)({
   width: '177px',
   height: '40px',
   padding: '10px, 24px, 10px, 16px',
   marginTop: '10px',
   marginRight: '9px',
})
const StyledContainer = styled('div')({
   display: 'grid',
   gridTemplateColumns: 'repeat(4, 172px)',
   gridAutoRows: '200px',
   gap: '80px',
   marginLeft: '260px',
   '& p': {
      borderRadius: '10px',
      width: '235px',
      height: '260px',
      border: '1px solid black',
   },
   '& img': {
      borderRadius: '10px 10px 0px 0px;',
      width: '235px',
      height: '140px',
   },
   '& h3': {
      marginTop: '-7px',
      padding: '12px',
      fontWeight: '600',
      fontSize: '18px',
   },
   '& main': {
      marginTop: '-23px',
      marginLeft: '13px',
      fontFamily: 'Open Sans',
      fontSize: '14px',
      color: '#1D293F',
   },
})
