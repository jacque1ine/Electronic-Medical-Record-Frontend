import http from "../http-common";

class calendarDataService {
    create(data) {
        return http.post("/calendar", data);
    }
    findAll() {
        return http.get("/calendar")
    }
    get(id) {
        return http.get(`/calendar/${id}`);
    }
    update(id, data) {
        return http.put(`/calendar/${id}`, data);
    }
    delete(id) {
        return http.delete(`/calendar/${id}`);
    }
}

export default new calendarDataService();