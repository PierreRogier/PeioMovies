import * as axios from "axios";

const apiMovie = axios.create({
    baseURL: "https://api.themoviedb.org/4",
});

apiMovie.interceptors.request.use((req) => {
    req.headers["Authorization"] =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDdmODFhYTY4Y2Q4ZmEwM2FkOTI4NTQ3NWU0YjQ1OCIsInN1YiI6IjVmY2Y2ZmJjYTY3MjU0MDAzZjdhNzAxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._aKrUDUyx_2g1EahFFe44oEJB9IoN6g9YSjFkfrvJuM";
    return req;
});

export default apiMovie;
