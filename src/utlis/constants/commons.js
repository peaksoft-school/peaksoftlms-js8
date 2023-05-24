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
   },
   auth: {
      FORGOT_PASSWORD: 'forgot_password',
   },
}

export const JWT_TOKEN_KEY = 'PEAKSOFT_LMS_JWT_TOKEN_KEY&'
export const USER_INFO = 'USER_INFO@'
