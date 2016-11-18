/*var sub = require('./sub');
var $ = require('jquery');
var moment = require('moment');
require('./style/main.scss');
var app = document.createElement('div');
app.innerHTML = '<h1>Hellow world</h1>';
document.body.appendChild(app);
app.appendChild(sub());
$('body').append('<p>'+ moment().format() + '</p>');
*/
import './style/main.scss';
import generateText from './sub';
//import $ from 'jquery';
import moment from 'moment';
import './plugin.js';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) =>{
    $('body').append('<p>' + number + ' now is '+moment().format()+'</p>');
    $('p').greenify();
});
app.innerHTML = '<h1>Hello world</h1>';
document.body.appendChild(app);
app.appendChild(generateText());
