import { axiosInstance } from "../config/AxiosInstance";

class GenderService {
  get(user) {
    return axiosInstance.get(`gender`);
  }
}

export default new GenderService();
