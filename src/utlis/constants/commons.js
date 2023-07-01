export const USER_ROLES = {
   ADMIN: 'ADMIN',
   INSTRUCTOR: 'INSTRUCTOR',
   STUDENT: 'STUDENT',
}

export const CURRENT_PATH = {
   admin: {
      ADMIN: 'admin',
      GROUPS: 'groups',
      GROUPS_DETAIL: 'groups/:groupId',
      COURSES: 'courses',
      COURSES_DETAIL: 'courses/:coursesId/detail',
      STUDENTS_DETAIL: 'courses/:coursesId/detail/:studentId/students',
      TEACHERS_DETAIL: 'courses/:coursesId/detail/:teacherId/teachers',
      INSTRUCTOR: 'instructors',
      STUDENTS: 'students',
   },
   instructor: {
      INSTRUCTOR: 'instructor',
      COURSES: 'courses',
      COURSES_DETAIL: 'courses/:courseId',
      MATERIALS: 'courses/:courseId',
   },
   student: {
      STUDENT: 'student',
      COURSES: 'mycourses',
      COURSES_DETAIL: 'mycourses/:coursesId',
      VIDEOS: 'mycourses/:coursesId/:lessonId/video-lesson',
      PRESENTATION: 'mycourses/:coursesId/:lessonId/presentation',
      LINK: 'mycourses/:coursesId/:lessonId/link',
      TASK: 'mycourses/:coursesId/:lessonId/task',
      CALENDAR: 'schedule',
   },
   auth: {
      FORGOT_PASSWORD: 'forgot_password',
   },
}

export const JWT_TOKEN_KEY = 'PEAKSOFT_LMS_JWT_TOKEN_KEY&'
export const USER_INFO = 'USER_INFO@'
