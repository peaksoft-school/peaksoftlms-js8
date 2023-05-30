import { styled } from '@mui/material'
import { SideBar } from '../../../layout/SideBar'
import { USER_ROLES } from '../../../utlis/constants/commons'
import IconButton from '../../../components/UI/IconButton'
import { ReactComponent as IconProfil } from '../../../assets/icons/Profile (1).svg'
// import { ReactComponent as IconDot } from '../../../assets/icons/tri tochka.svg'
import Cards from '../../../components/UI/Card'

export const Courses = () => {
   const dates = [
      {
         img: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
         name: 'Data Engineer',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat  ',
      },
      {
         img: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
         name: 'Data Engineer',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut   ',
      },
      {
         img: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
         name: 'Data Engineer',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
      },
      {
         img: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
         name: 'Data Engineer',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
      },
      {
         img: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
         name: 'Data Engineer',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
      },
      {
         img: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
         name: 'Data Engineer',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
      },
      {
         img: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
         name: 'Data Engineer',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
      },
      {
         img: 'https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png',
         name: 'Data Engineer',
         title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ...  ',
      },
   ]
   // useEffect(() => {
   //    GetCoursesRequest()
   // }, [GetCoursesRequest])
   return (
      <Container>
         <ContainerSideBar>
            <SideBar role={USER_ROLES.INSTRUCTOR} />
         </ContainerSideBar>
         <ContainerContent>
            <div>
               <HeaderContainer>
                  <IconButton icon={<IconProfil />} />
                  <InstructorContent>Инструктор </InstructorContent>
               </HeaderContainer>

               {/* <Hr /> */}
            </div>
            <CardContainer>
               {dates.map((date) => {
                  return (
                     <LessonCard>
                        <Cards
                           image={date.img}
                           content={date.title}
                           title={date.name}
                        />
                     </LessonCard>
                  )
               })}
            </CardContainer>
         </ContainerContent>
      </Container>
   )
}

const Container = styled('div')`
   display: flex;
   /* flex-direction: row; */
`
const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const LessonCard = styled('div')`
   width: 270px;
   margin-top: 24px;
`
const ContainerSideBar = styled('div')`
   /* background: #bc0e0e; */
`
const ContainerContent = styled('div')`
   margin-right: 40px;
   margin-left: 260px;
   width: 1140vw;
   border: 2px solid red;
`

const HeaderContainer = styled('div')`
   display: flex;
   justify-content: end;
   padding-right: 35px;
   margin-top: 23px;
   border-bottom: 2px solid #c4c4c4;
   /* width: 1140px; */
`
const InstructorContent = styled('p')`
   padding-left: 23px;
`
