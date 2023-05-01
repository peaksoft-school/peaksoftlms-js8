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
      COURSES: 'instructorcourses',
   },
   student: {
      COURSES: 'mycourses',
   },
}
