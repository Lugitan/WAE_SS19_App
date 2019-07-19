"use strict";

import HttpService from './HttpService';

export default class TeamService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/team/search/a" }

    //todo: return array
    static getTeams(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}