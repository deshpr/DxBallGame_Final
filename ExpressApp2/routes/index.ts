/*
 * GET home page.
 */
import express = require('express');

export function index(req: express.Request, res: express.Response) {
    
    res.render('index', {
        title: 'This is my tutle',
        recipes: ['Rahul', 'Such', 'Bill', 'Chris']
    })
    //res.render('index', { title: 'Express' });
};

