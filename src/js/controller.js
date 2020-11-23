import * as model from './model.js';
import userView from './views/userView.js';
import searchView from './views/searchView.js';
import userListView from './views/userListView.js'
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if(module.hot){
	module.hot.accept();
}

const controlUsers = async function(){
	
	try{

		const id = window.location.hash.slice(1);
		//Guard clause to make sure we are not stuck when we dont have a id
		if(!id) return;

		//Rendering spinner before the api is fetched
		userView.renderSpinner();

		//Loading User Details
		await model.loadUsers(id);

		//Rendering User Detail
		userView.render(model.state.userData,model.state.reposData,model.state.followersData);

		
		
		
	
	}catch(err){
		console.error(err);
	}
};

const controlUserList = async function(){

	try{

		//Loading User List of first page
		await model.loadUserResults();

		//Rendering Data
		userListView.render(model.getUserListPage());
		paginationView.render(model.state.userDataList);

		

	}catch(err){
		
		console.log(err);
	}
}
controlUserList();

const controlSearchList = async function(){

	try{

		//Render spinner till the time api fetches and renders data
		resultsView.renderSpinner();

		//Retrieve query user types in to search for a git user in the search bar
		const query = searchView.getQuery();

		//Guard Clause
		if(!query) return;
		
		//Loading Search List
		await model.searchUserList(query);

		//Rendering Search List
		resultsView.render(model.state.searchDataList.results);

	}catch(err){


	}

}

const controlPagination = function(goToPage){

	   //Rendering new Data
		userListView.render(model.getUserListPage(goToPage));
		paginationView.render(model.state.userDataList);
}

//Handling Events using Publisher/Subscriber design pattern
 const init = function(){
	userView.addHandlerRender(controlUsers);
	searchView.addHandlerSearch(controlSearchList);
	userListView.addHandlerRender(controlUserList);
	paginationView.addHandlerClick(controlPagination);
 }
 init();