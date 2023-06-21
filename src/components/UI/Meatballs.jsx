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
import { putGroupRequest } from '../../api/groupService'
import { getGroup } from '../../redux/reducers/group/groupThunk'
import ModalGroup from '../addModal/ModalGroup'

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
   const [groupModal, setGroupModal] = useState(false)
   const [courseData, setCourseData] = useState({})
   const [groups, setGroups] = useState({})

   const finallyArrayIcons = propsIcons || arrayIcon

   const closeModal = () => {
      setOpenModal(false)
      setGroupModal(false)
   }

   const submitHandler = async (data) => {
      data.courseId = courseData.id
      try {
         await putCourses(data)
         dispatch(asyncGetCourses({ pageSize: '8', pagination: '1' }))
         closeModal()
      } catch (error) {
         console.log(error)
      }
   }

   const groupSubmitHandler = async (data) => {
      data.groupId = groups.id
      try {
         await putGroupRequest(data)
         dispatch(getGroup({ pageSize: '8', pagination: '1' }))
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
         <ModalGroup
            data={groupSubmitHandler}
            open={groupModal}
            onClose={closeModal}
            title="Редактирование группы"
            placeholder="группы"
            groupId={groups.id}
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
                        item.func(
                           items,
                           dispatch,
                           setOpenModal,
                           setCourseData,
                           setGroupModal,
                           setGroups
                        )
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
