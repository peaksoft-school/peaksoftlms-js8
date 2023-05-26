import { Button, Menu, MenuItem } from '@mui/material'
import styled from '@emotion/styled'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import EditIcon from '../../assets/icons/edit.svg'
import DeleteIcon from '../../assets/icons/delete.svg'
import FixedIcon from '../../assets/icons/fixed.svg'
import GroupModal from './GroupModal'
import { deleteCourseById, putCourses } from '../../api/courseService'
import { asyncGetCourses } from '../../redux/reducers/course/CourseThunk'

const arrayIcon = [
   {
      icon: FixedIcon,
      title: 'Назначить учителя',
      func: async () => {},
   },
   {
      icon: EditIcon,
      title: 'Редактировать',
      func: (item, _, setOpenModal, setCourseData) => {
         setOpenModal(true)
         setCourseData(item)
      },
   },
   {
      icon: DeleteIcon,
      title: 'Удалить',
      func: async (item, dispatch) => {
         try {
            await deleteCourseById(item.id)
            dispatch(asyncGetCourses({ pageSize: '9', pagination: '1' }))
         } catch (error) {
            console.log(error)
         }
      },
   },
]

export const Meatballs = ({
   open,
   anchorEl,
   onClick,
   onClose,
   arrayIcon: propsIcons,
   items,
   ...restProps
}) => {
   const dispatch = useDispatch()
   const [openModal, setOpenModal] = useState(false)
   const [courseData, setCourseData] = useState({})

   const finallyArrayIcons = propsIcons || arrayIcon

   const closeModal = () => {
      setOpenModal(false)
   }

   const submitHandler = async (data) => {
      data.id = courseData.id
      try {
         await putCourses(data)
         dispatch(asyncGetCourses({ pageSize: '9', pagination: '1' }))
         closeModal()
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div>
         <GroupModal
            data={submitHandler}
            open={openModal}
            onClose={closeModal}
            title="Редактирование курса"
            placeholder="курса"
            courseId={courseData.id}
         />
         <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={onClick}
            {...restProps}
         >
            <MenuIcon />
         </Button>
         <Menu
            id="demo-positioned-menu"
            anchorEl={anchorEl}
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={onClose}
            {...restProps}
         >
            {finallyArrayIcons.map((item) => {
               return (
                  <StyledMenuItem
                     onClick={() =>
                        item.func(items, dispatch, setOpenModal, setCourseData)
                     }
                     key={item.title}
                  >
                     <img src={item.icon} alt="" />
                     {item.title}
                  </StyledMenuItem>
               )
            })}
         </Menu>
      </div>
   )
}

const StyledMenuItem = styled(MenuItem)(() => ({
   gap: '15px',
   '&:hover': {
      color: 'blue',
   },
}))
