import http from "../http-common";

class labRecordDataService {
    //create new labRecord
    create(data) {
        return http.post("/labRecords", data);
    }
    //find all labRecords
    findAll() {
        return http.get("/labRecords")
    }
    //get a labRecord by id
    get(id) {
        return http.get(`/labRecords/${id}`);
    }
    //update a specific labRecord by id
    update(id, data) {
        return http.put(`/labRecords/${id}`, data);
    }
    //update a specific labRecord by id
    delete(id) {
        return http.delete(`/labRecords/${id}`);
    }
    //delete all labRecords
    deleteAll() {
        return http.delete("/labRecords")
    }
    //get labRecord by patient health card number
    findByPatientHCNumber(patientHCNumber){
        return http.get(`/labRecords?title=${patientHCNumber}`)
    }

    //get a labRecord by dateIssued
    findByDateIssued(dateIssued){
        return http.get(`/labRecords?title=${dateIssued}`)
    }
}

export default new labRecordDataService();