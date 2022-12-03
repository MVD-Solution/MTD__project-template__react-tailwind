import axios from 'axios';
import { Question } from '../types/Question';
const questionAxiosInstance = axios.create();

export const fetchQuestions = () => {
  return questionAxiosInstance.request<Promise<Question>>({
    url: 'localhost:3000/api/v1/questions',
    method: 'get',
  });
};
