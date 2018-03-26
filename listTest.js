"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var List_1 = require("./List");
var DoubleList_1 = require("./DoubleList");
describe('single list', function () {
    it('can add an item to an empty list, and it can be found', function () {
        var list = new List_1.List();
        list.add('Number 1');
        chai_1.assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
    });
    it('can add two items to the list and both can be found', function () {
        var list = new List_1.List();
        list.add('Number 1');
        list.add('Number 2');
        chai_1.assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
        chai_1.assert.equal(list.findNodeWithValue('Number 2').value, 'Number 2');
    });
    it('will not be able to find members which arent there', function () {
        var list = new List_1.List();
        list.add('Number 1');
        list.add('Number 2');
        chai_1.assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
        chai_1.assert.isNull(list.findNodeWithValue('Number 3'));
    });
    it('can remove an item from the end of a list', function () {
        var list = new List_1.List();
        list.add("Josh");
        list.add("Ben");
        list.remove(list.findNodeWithValue('Ben'));
        chai_1.assert.equal(list.findNodeWithValue('Josh').value, 'Josh');
        chai_1.assert.isNull(list.findNodeWithValue('Ben'));
    });
    it('can remove an item from the begining of the list', function () {
        var list = new List_1.List();
        list.add("Josh");
        list.add("Ben");
        list.remove(list.findNodeWithValue('Josh'));
        chai_1.assert.equal(list.findNodeWithValue('Ben').value, 'Ben');
        chai_1.assert.isNull(list.findNodeWithValue('Josh'));
    });
    it('can remove an item from the middle of a list', function () {
        var list = new List_1.List();
        list.add("Josh");
        list.add("Ben");
        list.add("Rupert");
        list.remove(list.findNodeWithValue('Ben'));
        chai_1.assert.equal(list.findNodeWithValue('Josh').value, 'Josh');
        chai_1.assert.isNull(list.findNodeWithValue('Ben'));
    });
    it('can list the values of the entire list', function () {
        var list = new List_1.List();
        list.add("Josh");
        list.add("Ben");
        list.add("Rupert");
        chai_1.assert.deepEqual(list.values(), ["Josh", "Ben", "Rupert"]);
    });
    it('will list an empty array when asked for the values of an empty list', function () {
        var list = new List_1.List();
        chai_1.assert.deepEqual(list.values(), []);
    });
});
describe('Double list', function () {
    it('can add an item to an empty list, and it can be found', function () {
        var list = new DoubleList_1.DoubleList();
        list.add('Number 1');
        chai_1.assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
    });
    it('can add two items to the list and both can be found', function () {
        var list = new DoubleList_1.DoubleList();
        list.add('Number 1');
        list.add('Number 2');
        chai_1.assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
        chai_1.assert.equal(list.findNodeWithValue('Number 2').value, 'Number 2');
    });
    it('will not be able to find members which arent there', function () {
        var list = new DoubleList_1.DoubleList();
        list.add('Number 1');
        list.add('Number 2');
        chai_1.assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
        chai_1.assert.isNull(list.findNodeWithValue('Number 3'));
    });
    it('can remove an item from the end of a list', function () {
        var list = new DoubleList_1.DoubleList();
        list.add("Josh");
        list.add("Ben");
        list.remove(list.findNodeWithValue('Ben'));
        chai_1.assert.equal(list.findNodeWithValue('Josh').value, 'Josh');
        chai_1.assert.isNull(list.findNodeWithValue('Ben'));
    });
    it('can remove an item from the begining of the list', function () {
        var list = new DoubleList_1.DoubleList();
        list.add("Josh");
        list.add("Ben");
        list.remove(list.findNodeWithValue('Josh'));
        chai_1.assert.equal(list.findNodeWithValue('Ben').value, 'Ben');
        chai_1.assert.isNull(list.findNodeWithValue('Josh'));
    });
    it('can remove an item from the middle of a list', function () {
        var list = new DoubleList_1.DoubleList();
        list.add("Josh");
        list.add("Ben");
        list.add("Rupert");
        list.remove(list.findNodeWithValue('Ben'));
        chai_1.assert.equal(list.findNodeWithValue('Josh').value, 'Josh');
        chai_1.assert.isNull(list.findNodeWithValue('Ben'));
    });
    it('can list the values of the entire list', function () {
        var list = new DoubleList_1.DoubleList();
        list.add("Josh");
        list.add("Ben");
        list.add("Rupert");
        chai_1.assert.deepEqual(list.values(), ["Josh", "Ben", "Rupert"]);
    });
    it('will list an empty array when asked for the values of an empty list', function () {
        var list = new DoubleList_1.DoubleList();
        chai_1.assert.deepEqual(list.values(), []);
    });
});
