import axios from 'axios';
export default async function handler(req, res) {
    if (req.method === 'GET') {
        var options = {
            method: 'GET',
            url: 'https://student_talwadker_dineshii:oLzw772DWB@api.meteomatics.com/2023-09-04T12:00:00ZP3D:PT1H/moon_light:p/50,10/json',
        };
        axios
            .request(options)
            .then(function (response) {
                const { data } = response;
                const { value } = data;
                res.status(200).json(value);
            })
            .catch(function (error) {
                console.error(error);
            });
    } else {
        res.status(400);
    }
}