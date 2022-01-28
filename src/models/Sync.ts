import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number
};

export class Sync<T extends HasId> {

  constructor(public rootUrl: string) { }

  fecth = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save = (data: T): AxiosPromise => {
    const { id } = data;
    console.log('... id ... ', id)
    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      // post
      return axios.post('${this.rootUrl}', data)
    }
  }

}