import View from './View.js';


class UserListView extends View{

	_parentElement = document.querySelector('.results');

	addHandlerRender(handler){
    ['load'].forEach(ev => window.addEventListener(ev,handler));

  }

  _generateMarkup(){
	  
	  return this._userData.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(target){

	
	return  `<li class="preview">
				<a class="preview__link preview__link--active" href="#${target.login}">
				<figure class="preview__fig">
					<img src="${target.avatar_url}" alt="User Avatar" />
				</figure>
				<div class="preview__data">
					<h4 class="preview__title">${target.login}</h4>
					<div class="preview__user-generated">
					</div>
				</div>
				</a>
			</li>`
  }
}

export default new UserListView();