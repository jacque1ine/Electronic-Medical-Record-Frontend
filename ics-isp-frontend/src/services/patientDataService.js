import http from "../http-common";

class patientDataService {
    create(data) {
        return http.post("/patient", data);
    }
    findAll() {
        return http.get("/patient")
    }
    get(HCNumber) {
        return http.get(`/patient/${HCNumber}`);
    }
    update(HCNumber, data) {
        return http.put(`/patient/${HCNumber}`, data);
    }
    delete(HCNumber) {
        return http.delete(`/patient/${HCNumber}`);
    }
}

export default new patientDataService();