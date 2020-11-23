import icons from 'url:../../img/icons.svg';
import View from './View.js';

class UserView extends View{

  _parentElement = document.querySelector('.gituser');
  
	
	
	
  addHandlerRender(handler){
    ['hashchange','load'].forEach(ev => window.addEventListener(ev,handler));

  }

	_generateMarkup() {
    
		return `<figure class="gituser__fig">
          <img src="${this._userData.avatar_url}" alt="User Avatar" class="gituser__img" />
          <h1 class="gituser__title">
            <span>${this._userData.name}</span>
          </h1>
        </figure>

        <div class="gituser__details">
          <div class="gituser__info">
            <svg class="gituser__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="gituser__info-data gituser__info-data--minutes">${this._userData.followers}</span>
            <span class="gituser__info-text">Followers</span>
          </div>
          <div class="gituser__info">
            <svg class="gituser__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="gituser__info-data gituser__info-data--people">${this._userData.public_repos}</span>
            <span class="gituser__info-text">Repos</span>

            
            </div>
          </div>

         
        <div class="gituser__ingredients">
          <h2 class="heading--2">List of Repositories</h2>
		  <ul class="gituser__ingredient-list">
		  
		  	${this._reposData.map(repos => {
			return `
				<li class="gituser__ingredient">
              
			  <div class="gituser__description">
                <a href =${repos.html_url} target = _blank class="gituser__link"><span class="gituser__unit">${repos.name}</span></a>
                
              </div>
              
			`;}).join('')}

          </ul>
        </div>

        <div class="gituser__directions">
          <h2 class="heading--2">Followers</h2>
          <ul class="gituser__ingredient-list">
		  
		  	${this._followersData.map(fD => {
			return `
				<li class="gituser__followers">
              <svg class="gituser__icon">
                <use href="${icons}#icon-users"></use>
			  </svg>
			  
			  <div class="gituser__description">
                <a href =${fD.html_url} target = _blank class="gituser__link"><span class="gituser__unit">${fD.login}</span></a>
                
              </div>
              
			`;}).join('')}

          </ul>
        </div>
        </div>
        
      </div>
    </div>`
		
	
	

	}


}

export default new UserView();