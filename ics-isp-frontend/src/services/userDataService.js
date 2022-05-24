import http from "../http-common";

class userDataService {
    //create new user
    create(data) {
        return http.post("/users", data);
    }
    //find all users
    findAll() {
        return http.get("/users")
    }
    //get a user by id
    get(id) {
        return http.get(`/users/${id}`);
    }
    //update a specific user by id
    update(id, data) {
        return http.put(`/users/${id}`, data);
    }
    //update a specific user by id
    delete(id) {
        return http.delete(`/users/${id}`);
    }
    //delete all users
    deleteAll() {
        return http.delete("/users")
    }

    //get a user by their doctorID
    findByDoctorID(doctorID){
        return http.get(`/users?title=${doctorID}`)
    }

    findBySignInID(signInID){
        return http.get(`/users?title=${signInID}`)
    }

    findByPassword(password){
        return http.get(`/users?title=${password}`)
    }

    findByDoctorFirstName(doctorFirstName){
        return http.get(`/users?title=${doctorFirstName}`)
    }

    findByDoctorLastName(doctorLastName){
        return http.get(`/users?title=${doctorLastName}`)
    }
}

export default new userDataService();