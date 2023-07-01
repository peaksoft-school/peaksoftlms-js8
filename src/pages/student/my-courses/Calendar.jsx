import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ruLocale from '@fullcalendar/core/locales/ru'
import styled from '@emotion/styled'
import Header from '../../../components/UI/Header'

const Calendar = () => {
   return (
      <>
         <Header />
         <CalendarStyled>
            <FullCalendar
               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
               initialView="dayGridMonth"
               locales={{
                  ru: ruLocale,
               }}
               locale="ru"
               headerToolbar={{
                  start: 'today prev,next',
                  center: 'title',
                  end: 'dayGridMonth,timeGridWeek,timeGridDay',
               }}
            />
         </CalendarStyled>
      </>
   )
}

export default Calendar

const CalendarStyled = styled('div')({
   width: '77%',
   marginTop: '40px',
   marginLeft: '270px',
   backgroundColor: '#FFF',
   borderRadius: '20px',
})
