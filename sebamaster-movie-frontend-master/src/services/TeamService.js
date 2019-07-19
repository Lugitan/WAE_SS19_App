"use strict";

import HttpService from './HttpService';

export default class TeamService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/team/search" }

    //todo: return array
    /*static getTeams(team_name){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }*/
    static getTeams(team_name) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${TeamService.baseURL()}/${team_name}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving movie');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}