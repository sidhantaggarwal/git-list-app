import {async} from 'regenerator-runtime';
import {API_URL} from './config.js';
import {getJSON, getJSONSince} from './helpers.js';
import {RES_PER_PAGE} from './config.js';
import {INITIAL_PAGE} from './config.js';

export const state = {
	userData : {},
	reposData : {},
	followersData : {},
	userDataList : {
		pageNum: 1,
		results: [],
		resultsPerPage: RES_PER_PAGE
	},
	searchDataList: {
		query:'',
		results:[]
	},
	// url:{
	// 	urlNext:''
	
}

export const loadUsers = async function(id){
	try{
	const data = await getJSON(`${API_URL}/${id}`)
	state.userData  = data;


	const repodata = await getJSON(`${API_URL}/${id}/repos`)
	state.reposData  = repodata;


	const followdata = await getJSON(`${API_URL}/${id}/followers`)
	state.followersData  = followdata;
	
	}catch(err){
		console.error(err);
	}
	
};

export const loadUserResults = async function(){

	try{	

		const data = await getJSON(`${API_URL}?page=1&per_page=100`)
		state.userDataList.results  = data;
	}catch(err){

	}
};

export const searchUserList = async function (query){
	try{

		state.searchDataList.query = query;
		const data = await getJSON(`${API_URL}/${query}`)
		state.searchDataList.results = data;

	}catch(err){

		
	}
};

export const getUserListPage = function(page = state.userDataList.pageNum){

	state.userDataList.pageNum = page;
	const start = (page-1)*state.userDataList.resultsPerPage;
	const end = page*state.userDataList.resultsPerPage;

	return state.userDataList.results.slice(start,end);

}



