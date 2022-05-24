import http from "../http-common";

class noteDataService {
    //create new note
    create(data) {
        return http.post("/notes", data);
    }
    //find all notes
    findAll() {
        return http.get("/notes")
    }
    //get a note by id
    get(id) {
        return http.get(`/notes/${id}`);
    }
    //update a specific note by id
    update(id, data) {
        return http.put(`/notes/${id}`, data);
    }
    //update a specific note by id
    delete(id) {
        return http.delete(`/notes/${id}`);
    }
    //delete all notes
    deleteAll() {
        return http.delete("/notes")
    }
    //get note by patient health card number
    findByPatientHCNumber(patientHCNumber){
        return http.get(`/notes?title=${patientHCNumber}`)
    }
    //get a note by doctorID
    findByDoctorID(doctorID){
        return http.get(`/notes?title=${doctorID}`)
    }
}

export default new noteDataService();