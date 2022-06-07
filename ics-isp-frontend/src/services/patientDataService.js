import http from "../http-common";

class patientDataService {
    create(data) {
        try{
            return http.post("/patient", data);
        }catch(ex){
            console.log(ex.message);
        }
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
    updatePresc(HCNumber,prescName) {
        return http.put(`/patient/${HCNumber}/${prescName}`);
    }
}

export default new patientDataService();