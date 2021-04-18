import { axiosInstance } from "../config/AxiosInstance";

class MovieService {
  create(data) {
    return axiosInstance.post(`/movie/create`, data);
  }

  get() {
    return axiosInstance.get(`/movie`);
  }

  rate(id, data) {
    return axiosInstance.put(`/movie/rate/${id}`, data);
  }

  delete(id) {
    return axiosInstance.delete(`/movie/delete/${id}`);
  }
}

export default new MovieService();
