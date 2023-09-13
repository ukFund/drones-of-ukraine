import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { switchMap } from 'rxjs';
import { IpService } from 'src/app/services/ip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public imageObject: Object[] = [
    {
      image: 'assets/drones-image-1.jpeg',
      thumbImage: 'assets/drones-image-1.jpeg',
    },
    {
      image: 'assets/drones-image-2.jpeg',
      thumbImage: 'assets/drones-image-2.jpeg',
    },
    {
      image: 'assets/drones-image-3.jpeg',
      thumbImage: 'assets/drones-image-3.jpeg',
    },
    {
      image: 'assets/drones-image-4.jpeg',
      thumbImage: 'assets/drones-image-4.jpeg',
    },
    {
      image: 'assets/drones-image-5.jpeg',
      thumbImage: 'assets/drones-image-5.jpeg',
    },
    {
      image: 'assets/drones-image-7.jpeg',
      thumbImage: 'assets/drones-image-7.jpeg',
    },
  ];

  constructor(private _ipService: IpService) {}

  public ngOnInit(): void {
    this._ipService
      .getMyIp()
      .pipe(
        switchMap((value) =>
          this._ipService.create({
            ip: value.ip,
          })
        )
      )
      .subscribe();
  }
}
