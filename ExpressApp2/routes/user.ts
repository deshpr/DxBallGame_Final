/*
 * GET users listing.
 */
import express = require('express');

export function list(req: express.Request, res: express.Response) {
    res.send("respond with a resource");
};

export function game(req: express.Request, res: express.Response) {
    res.render('game', {
        title: 'Dx Ball!'
    })
}