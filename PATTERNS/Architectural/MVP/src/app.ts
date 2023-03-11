interface ICookieModel {
	addCookie(): void;
	getCookieCount(): number;
}

interface IPresenter {
	initialize(): void;
	toGrabCookie(): void;
}

interface IView {
	toSetCookieCount(n: number): void;
}

class CookieModel implements ICookieModel {
	private cookieCount: number;

	constructor() {
		this.cookieCount = 0;
	}

	addCookie(): void {
		this.cookieCount++;
	}

	getCookieCount(): number {
		return this.cookieCount;
	}
}

class Presenter implements IPresenter {
	private view: IView;
	private cookieModel: ICookieModel;

	constructor() {
		this.view = new View(document, this);
		this.cookieModel = new CookieModel();

		this.initialize();
	}

	// Sync View and Model
	initialize(): void {
		this.view.toSetCookieCount(this.cookieModel.getCookieCount());
	}

	toGrabCookie(): void {
		// Call Model function to update data.
		this.cookieModel.addCookie();

		// Call View function to update UI.
		this.view.toSetCookieCount(this.cookieModel.getCookieCount());
	}
}

class View implements IView {
	DOM: Document;
	presenter: IPresenter;
	
	constructor(DOM: Document, presenter: Presenter) {
		this.presenter = presenter;
		this.DOM = DOM;
		this.DOM
			.getElementById("grabCookie")
			.addEventListener("click", toGrabCookie);

		let self = this;


		function toGrabCookie() {
			self.presenter.toGrabCookie();
		}
	}

	// DOM Manipulation
	toSetCookieCount(cookieCount: number) {
		this.DOM.getElementById("cookieCount").innerHTML = cookieCount.toString();
	}
}

const presenter: IPresenter = new Presenter();