export const USER_ROLES = {
   ADMIN: 'ADMIN',
   INSTRUCTOR: 'INSTRUCTOR',
   STUDENT: 'STUDENT',
}

export const CURRENT_PATH = {
   admin: {
      ADMIN: 'admin',
      GROUPS: 'groups',
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
   },
   student: {
      STUDENT: 'student',
      COURSES: 'mycourses',
      COURSES_DETAIL: 'mycourses/:coursesId',
   },
   auth: {
      FORGOT_PASSWORD: 'forgot_password',
   },
}

export const JWT_TOKEN_KEY = 'PEAKSOFT_LMS_JWT_TOKEN_KEY&'
export const USER_INFO = 'USER_INFO@'
