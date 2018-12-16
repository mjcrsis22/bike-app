import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class BikesService {

	apiLink: any;
	data: any;

	constructor(public http: Http) {
		this.getApiLink();
		this.data = null;
	}

	getApiLink() {

		if (this.apiLink) {
			return Promise.resolve(this.apiLink);
		}

		return new Promise(resolve => {
			this.http.get('https://api.mlab.com/api/1/databases/pers-bike-db/collections/service-information?q={"type": "url"}&apiKey=BZ8fitJYtraLl_86XjJSOhLOj8eEhWZJ')
				.pipe(map(res => res.json()))
				.subscribe(data => {
					this.apiLink = data[0].value;
					resolve(this.apiLink);
				});
		});

	}

	getBikes(){

		if (this.data) {
			return Promise.resolve(this.data);
		}

		return new Promise(resolve => {

			this.getApiLink()
				.then((apiLink) => {
					this.http.get(apiLink + '/bikes/')
						.pipe(map(res => res.json()))
						.subscribe(data => {
							this.data = data;
							resolve(this.data);
						});
				});
		});

	}

	getBike(id){

		return new Promise(resolve => {

			let headers = new Headers();
			headers.append('Content-Type', 'application/json');

			this.http.get(this.apiLink + '/bikes/get/' + id)
				.pipe(map(res => res.json()))
				.subscribe(data => {
					resolve(data);
				});
		});

	}

	createBike(Bike){

		this.data = null;

		return new Promise(resolve => {

			let headers = new Headers();
			headers.append('Content-Type', 'application/json');

			this.http.post(this.apiLink + '/bikes/add/', JSON.stringify(Bike), {headers: headers})
				.pipe(map(res => res.json()))
				.subscribe(data => {
					resolve(data);
				});
		});

	}

	editBike(Bike){

		this.data = null;

		return new Promise(resolve => {

			let headers = new Headers();
			headers.append('Content-Type', 'application/json');

			this.http.put(this.apiLink + '/bikes/edit/', JSON.stringify(Bike), {headers: headers})
				.pipe(map(res => res.json()))
				.subscribe(data => {
					resolve(data);
				});
		});

	}

	deleteBike(id){

		this.data = null;

		return new Promise(resolve => {

			let headers = new Headers();
			headers.append('Content-Type', 'application/json');

			this.http.delete(this.apiLink + '/bikes/delete/' + id)
				.pipe(map(res => res.json()))
				.subscribe(data => {
					resolve(data);
				});
		});

	}
}
