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
    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
    findByTime(time) {
        return http.get(`/tutorials?dateTime=${time}`);
    }
}

export default new calendarDataService();