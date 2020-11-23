import View from './View.js';

class ResultsView extends View{

	_parentElement = document.querySelector('.results');
	_errorMessage = "Could not find this user on GitHub"
	_message = '';


	_generateMarkup(){
		return `<li class="preview">
				<a class="preview__link preview__link--active" href="#${this._userData.login}">
				<figure class="preview__fig">
					<img src="${this._userData.avatar_url}" alt="User Avatar" />
				</figure>
				<div class="preview__data">
					<h4 class="preview__title">${this._userData.name}</h4>
					<div class="preview__user-generated">
					</div>
				</div>
				</a>
			</li>`
	}

}

export default new ResultsView();