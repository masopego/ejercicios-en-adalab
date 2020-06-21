"use strict";

const age = 60;
const hoursperyear = 8760;

const totalHours = age * hoursperyear;

const text = document.querySelector(".text");

text.innerHTML = totalHours + " horas vividas en total";
