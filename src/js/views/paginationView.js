import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View{

	_parentElement = document.querySelector('.pagination');

	addHandlerClick(handler){
		this._parentElement.addEventListener('click',function(e){

			const btn = e.target.closest('.btn--inline');
            if (!btn) return;

            const goToPage = +btn.dataset.goto;
			handler(goToPage);
			
		})

	}

	_generateMarkup(){

		const numPages = Math.ceil(this._userData.results.length / this._userData.resultsPerPage);
		//On Page 1
		if(this._userData.pageNum === 1 && numPages > 1){

			return `<button data-goto="${this._userData.pageNum+1}" class="btn--inline pagination__btn--next">
				<span>Page ${this._userData.pageNum+1}</span>
				<svg class="search__icon">
				<use href="${icons}#icon-arrow-right"></use>
				</svg>
			</button>`

		}

		//On last page
		if(this._userData.pageNum === numPages && numPages > 1){

			return `<button data-goto = "${this._userData.pageNum-1}" class="btn--inline pagination__btn--prev">
				<svg class="search__icon">
				<use href="${icons}#icon-arrow-left"></use>
				</svg>
				<span>Page ${this._userData.pageNum-1}</span>
			</button>`

		}

		//On other page
		if(this._userData.pageNum < numPages){

			return `<button data-goto = "${this._userData.pageNum-1}" class="btn--inline pagination__btn--prev">
				<svg class="search__icon">
				<use href="${icons}#icon-arrow-left"></use>
				</svg>
				<span>Page ${this._userData.pageNum-1}</span>
			</button>
			<button data-goto="${this._userData.pageNum+1}" class="btn--inline pagination__btn--next">
				<span>Page ${this._userData.pageNum+1}</span>
				<svg class="search__icon">
				<use href="${icons}#icon-arrow-right"></use>
				</svg>
			</button>`

		}
	}
}

export default new PaginationView();