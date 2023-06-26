export const cardName = (val) => {
   switch (val) {
      case 'Презентация':
         return 'presentation'
      case 'Задание':
         return 'task'
      case 'Ссылка':
         return 'link'
      case 'Видеоурок':
         return 'video-lesson'
      default:
         return val
   }
}
