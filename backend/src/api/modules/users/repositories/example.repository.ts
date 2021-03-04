import { AxiosInstance } from 'axios';

interface Request {
  id?: string;
  headers?: object;
}

interface SaveDataRequest extends Request {
  data: object;
}

class ExampleRepository {
  api: AxiosInstance
  constructor(api: AxiosInstance){
    this.api = api
  }
  public async getAll() {
    const response = await this.api.get('/todos');

    return response.data;
  }

  public async getById({ id }: Request) {
    const response = await this.api.get(`/todos/${id}`);

    return response.data;
  }

  public async delete({ id }: Request) {
    await this.api.delete(`/todos/${id}`);
  }

  public async post({ data }: SaveDataRequest) {
    const response = await this.api.post(`/todos`, data);

    return response.data;
  }

  public async put({ id, data }: SaveDataRequest) {
    const response = await this.api.post(`/todos/${id}`, data);

    return response.data;
  }
}

export default ExampleRepository;

