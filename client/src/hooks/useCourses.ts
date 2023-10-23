import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useCourses(userId: string) {
      const [courses, setCourses] = useState([])

      useEffect(() => {

            if (!userId) return console.log('no user id')

            const fetchCourses = async () => {
                  const body = {
                        userId: userId
                  }
                  try {
                        const { data } = await axios.post('http://localhost:8080/api/users/getCourses', { body });
                        setCourses(data)
                  } catch (error) {
                        console.log(error)
                  }
            }

            if (userd)

            fetchCourses()
      }, [userId])

      return [courses, setCourses]
}
