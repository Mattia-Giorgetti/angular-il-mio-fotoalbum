import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Picture } from '../shared/Picture.model';



@Injectable({
  providedIn: 'root'
})
export class PicsServiceService {


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  getAllPics(searchValue: string){
      return this.http.get<Picture[]>('http://localhost:8080/api/photos', {
        params: new HttpParams().set('q', searchValue)
      });
  }
  getSinglePic(id: number){
      return this.http.get<Picture>(`http://localhost:8080/api/photos/${id}`);
  }

}
