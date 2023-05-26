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
      COURSES: 'instructorcourses',
   },
   student: {
      COURSES: 'mycourses',
   },
}
