import 'mocha';
import {assert} from 'chai';
import {List, ListNode} from "./List";
import {DoubleList, DoubleListNode} from './DoubleList'

describe('single list', function() {
    it('can add an item to an empty list, and it can be found', () => {
        let list = new List();
        list.add('Number 1');

        assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
    });

    it('can add two items to the list and both can be found', () => {
        let list = new List();
        list.add('Number 1');
        list.add('Number 2');

        assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
        assert.equal(list.findNodeWithValue('Number 2').value, 'Number 2');
    });

    it('will not be able to find members which arent there', () => {
        let list = new List();
        list.add('Number 1');
        list.add('Number 2');

        assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
        assert.isNull(list.findNodeWithValue('Number 3'));

    });

    it('can remove an item from the end of a list',() => {
        let list = new List();
        list.add("Josh");
        list.add("Ben");
        list.remove(list.findNodeWithValue('Ben'));
        assert.equal(list.findNodeWithValue('Josh').value, 'Josh');
        assert.isNull(list.findNodeWithValue('Ben'));
    });

    it('can remove an item from the begining of the list', () => {
        let list = new List();
        list.add("Josh");
        list.add("Ben");
        list.remove(list.findNodeWithValue('Josh'));
        assert.equal(list.findNodeWithValue('Ben').value, 'Ben');
        assert.isNull(list.findNodeWithValue('Josh'));
    });

    it('can remove an item from the middle of a list',() => {
        let list = new List();
        list.add("Josh");
        list.add("Ben");
        list.add("Rupert");
        list.remove(list.findNodeWithValue('Ben'));
        assert.equal(list.findNodeWithValue('Josh').value, 'Josh');
        assert.isNull(list.findNodeWithValue('Ben'));
    })

    it('can list the values of the entire list', () => {
        let list = new List();
        list.add("Josh");
        list.add("Ben");
        list.add("Rupert");
        assert.deepEqual(list.values(), ["Josh", "Ben", "Rupert"])
    });

    it('will list an empty array when asked for the values of an empty list', () =>{
        let list = new List();
        assert.deepEqual(list.values(), [])
    })
});


describe('Double list', function() {
    it('can add an item to an empty list, and it can be found', () => {
        let list = new DoubleList();
        list.add('Number 1');

        assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
    });

    it('can add two items to the list and both can be found', () => {
        let list = new DoubleList();
        list.add('Number 1');
        list.add('Number 2');

        assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
        assert.equal(list.findNodeWithValue('Number 2').value, 'Number 2');
    });

    it('will not be able to find members which arent there', () => {
        let list = new DoubleList();
        list.add('Number 1');
        list.add('Number 2');

        assert.equal(list.findNodeWithValue('Number 1').value, 'Number 1');
        assert.isNull(list.findNodeWithValue('Number 3'));

    });

    it('can remove an item from the end of a list',() => {
        let list = new DoubleList();
        list.add("Josh");
        list.add("Ben");
        list.remove(list.findNodeWithValue('Ben'));
        assert.equal(list.findNodeWithValue('Josh').value, 'Josh');
        assert.isNull(list.findNodeWithValue('Ben'));
    });

    it('can remove an item from the begining of the list', () => {
        let list = new DoubleList();
        list.add("Josh");
        list.add("Ben");
        list.remove(list.findNodeWithValue('Josh'));
        assert.equal(list.findNodeWithValue('Ben').value, 'Ben');
        assert.isNull(list.findNodeWithValue('Josh'));
    });

    it('can remove an item from the middle of a list',() => {
        let list = new DoubleList();
        list.add("Josh");
        list.add("Ben");
        list.add("Rupert");
        list.remove(list.findNodeWithValue('Ben'));
        assert.equal(list.findNodeWithValue('Josh').value, 'Josh');
        assert.isNull(list.findNodeWithValue('Ben'));
    });

    it('can list the values of the entire list', () => {
        let list = new DoubleList();
        list.add("Josh");
        list.add("Ben");
        list.add("Rupert");
        assert.deepEqual(list.values(), ["Josh", "Ben", "Rupert"])
    });

    it('will list an empty array when asked for the values of an empty list', () =>{
        let list = new DoubleList();
        assert.deepEqual(list.values(), [])
    })
});