	import icons from 'url:../../img/icons.svg';

	export default class View{

		_userData;
		_reposData;
		_followersData;
		
		render(userData,reposData={},followersData={}){

			this._userData = userData;
			this._reposData = reposData;
			this._followersData = followersData;
			const markup = this._generateMarkup();
			this._clear();
			this._parentElement.insertAdjacentHTML('afterbegin',markup);
		}

		_clear(){
			this._parentElement.innerHTML = "";
		}
	
		renderSpinner = function(){

			const markup = `<div class="spinner">
			<svg>
				<use href="${icons}#icon-loader"></use>
			</svg>
			</div>`
	this._clear();
	this._parentElement.insertAdjacentHTML('afterbegin',markup);

	}

		renderError = function(message = this._errorMessage){
		const markup = `<div class="error">
				<div>
				<svg>
					<use href="${icons}#icon-alert-triangle"></use>
				</svg>
				</div>
				<p>${message}</p>
			</div>`
			
			this._clear();
			this._parentElement.insertAdjacentHTML('afterbegin',markup);
	}

	}