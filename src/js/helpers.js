import {TIMEOUT_SEC} from './config.js';
import parseLinkHeader from 'parse-link-header';


const timeout = function(s) {
	return new Promise((_,reject) => {
		setTimeout(() => {
			reject(new Error("Request took too long"));
		},s*1000);
	});
};

export const getJSON = async function(url){
	try{
	const response = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);
	const data = await response.json();
	if(!response.ok) throw new Error(`Getting a Response From API Failed (${response.status})`);
	return data;
	}catch(error){
		throw error;
	}
}

export const getJSONSince = async function (url){
	try{
	const response = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);
	const data = await response.json();

	if (response.ok){
	const parsedlinkHeader = parseLinkHeader(response.headers.get('Link'));
	parsedlinkHeader.next.per_page=20;
	return data;
	}
	if(!response.ok) throw new Error(`Getting a Response From API Failed (${response.status})`);
	return data;
	}catch(error){
		throw error;
	}
}