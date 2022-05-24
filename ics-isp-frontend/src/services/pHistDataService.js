import http from "../http-common";

class pHistDataService {
    create(data) {
        return http.post("/patientHistory", data);
    }
    findAll() {
        return http.get("/patientHistory")
    }
    get(patientHCNumber) {
        return http.get(`/patientHistory/${patientHCNumber}`);
    }
    update(patientHCNumber, data) {
        return http.put(`/patientHistory/${patientHCNumber}`, data);
    }
    delete(patientHCNumber) {
        return http.delete(`/patientHistory/${patientHCNumber}`);
    }
}

export default new pHistDataService();