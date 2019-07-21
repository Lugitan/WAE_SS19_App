"use strict";

import HttpService from './HttpService';

export default class ArticleService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/gridLayouts" }

    static getDefaultGrid(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}