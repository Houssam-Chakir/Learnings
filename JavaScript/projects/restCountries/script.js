'use strict';

import xmlHandler from "./xml.js";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
xmlHandler('morocco', countriesContainer)
xmlHandler('palestine', countriesContainer)
