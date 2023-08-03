import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

	@ViewChild("innerContainer") 
	inner!: ElementRef<HTMLDivElement> ;
	container!: HTMLElement;

	@ViewChild("container")
	touchC!: ElementRef<HTMLElement>;

	@ViewChild("slide_status_container")
	slideStatusContainer: ElementRef<HTMLElement>;

	countSlide = 0;

	touchContainer!: HTMLElement;
	posDownX: number = 0;
	posUpX: number = 0;
	slide() {
		if (Math.abs(this.posDownX - this.posUpX) > 70) {
			if (this.posDownX > this.posUpX) this.next()
			else this.previous()
		}
	}
	
	ngAfterViewInit() {
		this.container = this.inner.nativeElement
		this.touchContainer = this.touchC.nativeElement;

		this.touchContainer.addEventListener('mousedown', (e) => {
			this.posDownX = e.clientX
		})
		
		this.touchContainer.addEventListener('mouseup', (e) => {
			this.posUpX = e.clientX
			this.slide()
		})
	}

	next() {
		if (this.container.scrollLeft < this.container.scrollWidth - this.container.getClientRects()[0].width) {
			this.container.scroll(this.container.scrollLeft + window.innerWidth, 0);
			this.countSlide++;
		} else {
			this.container.scroll(0, 0);
			this.countSlide = 0;
		}
		this.refreshCurrentSlideStatus();
	}
	
	previous() {
		if (this.container.scrollLeft > 0) {
			this.container.scroll(this.container.scrollLeft - window.innerWidth, 0);
			this.countSlide--;
		} else {
			this.countSlide = 2;
			this.container.scroll(this.container.scrollWidth - this.container.getClientRects()[0].width, 0);
		}
		this.refreshCurrentSlideStatus();
	}

	refreshCurrentSlideStatus() {
		let statusElements =  this.slideStatusContainer.nativeElement.querySelectorAll("div");
		for (let i = 0; i < statusElements.length; i++) {
			if (i == this.countSlide) {
				this.clearSlideStatus();
				statusElements[i].classList.add("active");
				break;
			}
		}
	}

	clearSlideStatus() {
		let statusElements =  this.slideStatusContainer.nativeElement.querySelectorAll("div");
		for (let i = 0; i < statusElements.length; i++) {
			statusElements[i].classList.remove("active");
		}
	}
  
}
