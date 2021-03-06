import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  userDetails= JSON.parse(localStorage.getItem('UserDetails')!);
  constructor(private httpService: HttpServiceService) { }
  header ={
    Headers:{Authorization: "Bearer " + this.userDetails.Token}
  };
  CreateNote(data: any)
  { data.UserId= this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/CreateNote`, data, true, this.header);
  }
  GetNotes(){
    let data = this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/GetNotes?userId=${data}`,null,true,this.header);
  }
  ArchiveNotes()
   {let data = this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/GetFromArchieve?userId=${data}`, null, true, this.header);
  }
  ReminderNotes() {
    let data = this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/GetAllRemainders?userId=${data}`, null, true, this.header);
  }
  TrashNotes()
  {let data = this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/GetFromTrash?userId=${data}`, null, true, this.header);
  }
  UpdateNote(note:any)
  {
    return this.httpService.post(`${environment.baseUrl}/api/Update`,note,true, this.header);
  }
  MoveToTrash(id:any)
  {
    let params = new HttpParams().set('noteId',id);
    return this.httpService.post(`${environment.baseUrl}/api/IsDelete`,params,true,this.header);
  }
  
}
