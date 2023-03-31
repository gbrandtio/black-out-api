import IError from '../models/IErrorDto';
import express from 'express';
var request = require('request');


/**
 * Performs a request to DEDDIE in order to retrieve the outages
 * of a specific prefecture. The request must contain the [prefectureId]
 * parameter in order for this endpoint to return appropriate data.
 * 
 * @param req request.
 * @param res response.
 */
async function fetch(req: any, res: express.Response) {
    let prefectureId = req.params.prefectureId;
    request('https://siteapps.deddie.gr/Outages2Public/?Length=4&PrefectureID='+prefectureId, function (error: any, response: { statusCode: number; }, body: any) {
        if (!error && response.statusCode == 200) {
            res.status(200).send(body);
        }
        else {
            res.status(500).send(error);
        }
    })
}

export default {
    fetch
}