import { Component, OnDestroy, OnInit } from '@angular/core';
import { PicsServiceService } from 'src/app/services/pics.service';
import { Picture } from 'src/app/shared/Picture.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.scss']
})
export class PicListComponent implements OnInit {

  constructor(private picService: PicsServiceService){}

  searchBar!: FormGroup;

  searchValue = '';

  pictures: Picture[] = [];

  isLoading: boolean = false;

  errorMsg: null | string = null;

  ngOnInit(): void {
    this.searchBar = new FormGroup({
      'queryString' : new FormControl('')
    });
    this.fetchPictures();
  }

  fetchPictures(){
    this.isLoading = true;
    setTimeout(()=>{
      this.picService.getAllPics(this.searchValue).subscribe(pics => {
        this.isLoading = false;
        this.pictures = pics
        }, error => {
          this.isLoading = false;
          this.errorMsg = 'Something went wrong. Please try later';
        })
    }, 1000)


  }

  onSearchPics(){
    this.searchValue = this.searchBar.value.queryString ?? '';
    this.fetchPictures();
  }

}
