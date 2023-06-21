import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PicsServiceService } from 'src/app/services/pics.service';
import { Picture } from 'src/app/shared/Picture.model';

@Component({
  selector: 'app-pic-detail',
  templateUrl: './pic-detail.component.html',
  styleUrls: ['./pic-detail.component.scss']
})
export class PicDetailComponent implements OnInit, OnDestroy {
  pic$!: Picture;
  picSub!: Subscription;

  constructor(private picService: PicsServiceService , private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
   const id = +this.route.snapshot.paramMap.get('id')!;

   this.picSub = this.picService.getSinglePic(id).subscribe(res => this.pic$ = res);
  }

  navigateBack(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  ngOnDestroy(): void {
    this.picSub.unsubscribe();
  }
}
