import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
    public telegramBotLink: string = 'https://telegramm-invite-channel-2kyegj25ap.data-relay.org';

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
            image: 'assets/drones-image-6.jpeg',
            thumbImage: 'assets/drones-image-6.jpeg',
        },
        {
            image: 'assets/drones-image-7.jpeg',
            thumbImage: 'assets/drones-image-7.jpeg',
        },
        {
            image: 'assets/drones-image-8.jpeg',
            thumbImage: 'assets/drones-image-8.jpeg',
        },
        {
            image: 'assets/drones-image-9.jpeg',
            thumbImage: 'assets/drones-image-9.jpeg',
        },
        {
            image: 'assets/drones-image-10.jpeg',
            thumbImage: 'assets/drones-image-10.jpeg',
        },
    ];

    public openInTelegram(): void {
        window.open(this.telegramBotLink, '_blank');
    }
}
