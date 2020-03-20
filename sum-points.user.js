// ==UserScript==
// @name         AtCoder Problems Sum Points
// @namespace    https://github.com/thaim/atcoder-problems-sum-points
// @version      0.1.0
// @description  Add new column to show sum of points in AtCoder Problems
// @author       thaim
// @match        https://kenkoooo.com/atcoder/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  //FIXME
  setTimeout(addSum, 1000);

  function addSum() {
    var table = document.getElementsByClassName('table')[0];

    var thead = table.children[0];
    var rowPoint = table.rows[0];
    var rowTotalCount = table.rows[1];
    var thSum = rowPoint.insertCell(1);
    thSum.innerHTML = 'Sum';
    var thSumPoints = rowTotalCount.insertCell(1);
    thSumPoints.innerHTML = sumRow(table.rows[0], table.rows[1]);

    var tbody = table.children[1];
    for(var i=0; i<tbody.children.length; i++) {
      var tdSum = table.rows[i+2].insertCell(1);
      tdSum.innerHTML = sumRow(table.rows[0], table.rows[i+2]);
    }
  }

  function sumRow(score, count) {
    var sum = 0;

    for (var i=2; i<count.childElementCount; i++) {
      sum += Number(score.cells[i].innerText)*Number(count.cells[i].innerText);
    }

    return sum;
  }
})();
