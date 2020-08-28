import axios from 'axios'

class SchoolDataService {

  retrieveAllSchool() {
    return axios.get(`http://localhost:8080/retrieveAllSchool`)
  }

  retrieveAllForTeacher() {
    return axios.get(`http://localhost:8080/retrieveAllForTeacher`)
  }

  retrieveAllForStudent() {
    return axios.get(`http://localhost:8080/retrieveAllForStudent`)
  }

  findSchoolByID(SchoolID) {
    return axios.get(`http://localhost:8080/school/${SchoolID}`)
  }

  retrievePasswordByEmail(email) {
    return axios.get(`http://localhost:8080/password/${email}`)
  }

  findTypeByEmail(email) {
    return axios.get(`http://localhost:8080/type/${email}`)
  }

  addSchool(theSchool) {
    return axios.post(`http://localhost:8080/addSchool`, theSchool)
  }

  updateSchool(updateSchool) {
    return axios.put(`http://localhost:8080/updateSchool`, updateSchool)
  }

  deleteSchool(schoolId) {
    return axios.delete(`http://localhost:8080/deleteSchool/${schoolId}`)
  }

}

export default new SchoolDataService()
