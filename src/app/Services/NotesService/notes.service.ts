import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpServiceService) { }
  header ={
    Headers:{Authorization: "Bearer " + localStorage.getItem('token')}
  };
  CreateNote(data: any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/register`, data, true, this.header);
  }
}
