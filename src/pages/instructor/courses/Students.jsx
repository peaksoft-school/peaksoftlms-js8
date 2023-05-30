import { Grid } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import { SideBar } from '../../../layout/SideBar'
import { USER_ROLES } from '../../../utlis/constants/commons'
import { AppTable } from '../../../utlis/constants/Table'
import IconButton from '../../../components/UI/IconButton'
import { ReactComponent as IconProfil } from '../../../assets/icons/Profile (1).svg'
import { ReactComponent as IconChevrons } from '../../../assets/icons/Chevrons.svg'
import { ReactComponent as PeopleAltIcon } from '../../../assets/icons/peopleAltIcon.svg'

const Students = () => {
   //    const data = [
   //       {
   //          title: 'iorkldf',
   //          titl: 'iorkldf',
   //          tit: 'iorkldf',
   //       },
   //       {
   //          title: 'iorkldf',
   //          titl: 'iorkldf',
   //          tit: 'iorkldf',
   //       },
   //    ]
   return (
      <Grid display="flex">
         <StyledContainerSidebar>
            <SideBar role={USER_ROLES.INSTRUCTOR} />
         </StyledContainerSidebar>
         <StyledContainerContent>
            <StyledHeaderContainer>
               <ContainerMaterialAndStudents>
                  <MaterialAndStudentsParagraf>
                     Материалы
                  </MaterialAndStudentsParagraf>

                  <MaterialAndStudentsParagraf>
                     Студенты
                  </MaterialAndStudentsParagraf>
               </ContainerMaterialAndStudents>
               <ContainerIcons>
                  <IconButton icon={<IconProfil />} />
                  <InstructorParagraf>Инструктор</InstructorParagraf>
                  <IconButton icon={<IconChevrons />} />
               </ContainerIcons>
            </StyledHeaderContainer>
            <div>
               <p>uifdhjbvuidjkzhfnoiejld</p>
               <StyledButtonContainer>
                  <IconButton icon={<PeopleAltIcon />} />
                  <StyledButtonText>Добавить группу в курс</StyledButtonText>
               </StyledButtonContainer>
            </div>

            <StyledTableContainet>
               table
               <AppTable />
            </StyledTableContainet>
         </StyledContainerContent>
      </Grid>
   )
}

export default Students

const StyledButtonContainer = styled('div')`
   display: flex;
   padding: 10px 24px 10px 16px;
   gap: 8px;
   background: #3772ff;
   border-radius: 8px;
   width: 236px;
   margin-top: 34px;
`
const StyledButtonText = styled('p')`
   color: #ffffff;
   font-size: 14px;
   line-height: 20px;
   font-weight: 600;
   letter-spacing: 0.001em;
`
const StyledContainerSidebar = styled(Grid)`
   /* margin-right: 260px; */
   /* margin-left: 40px; */
`
const StyledContainerContent = styled(Grid)`
   font-family: 'Open Sans';
   font-style: normal;
   margin-right: 40px;
   margin-left: 260px;
   width: 1140vw;
   border: 2px solid red;
   /* border: 1px solid red; */
`
const StyledTableContainet = styled('div')`
   background-color: #ffffff;
   margin-top: 24px;
`
const StyledHeaderContainer = styled('div')`
   display: flex;
   justify-content: end;
   margin-top: 23px;
   /* width: 1240px; */
   border-bottom: 2px solid #c4c4c4;
`
const ContainerMaterialAndStudents = styled('div')`
   display: flex;
   width: 14.125rem;
   justify-content: space-between;
`
const ContainerIcons = styled('div')`
   display: flex;
   margin-left: 379px;
   margin-bottom: 22px;
   width: 10.6875rem;
   justify-content: space-between;
`
const MaterialAndStudentsParagraf = styled('p')`
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;

   color: #000000;
`
const InstructorParagraf = styled('p')`
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;

   color: #232323;
`
