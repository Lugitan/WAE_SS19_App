"use strict";

import HttpService from './HttpService';

export default class ArticleService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/article" }

    static getArticles(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}