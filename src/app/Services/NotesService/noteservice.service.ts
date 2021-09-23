import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

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
  GetNote(){
    let data = this.userDetails.UserId;
    return this.httpService.post(`${environment.baseUrl}/api/GetNotes?userId=${data}`,null,true,this.header);
  }
}
