"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
    }
    List.prototype.add = function (value) {
        if (this.first == undefined) {
            this.first = new ListNode(value);
        }
        else {
            var final = this.findFinal();
            final.nextNode = new ListNode(value);
        }
    };
    ;
    List.prototype.findNodeWithValue = function (value) {
        var thisNode = this.first;
        var next = thisNode.nextNode;
        while (thisNode != undefined) {
            if (thisNode.value === value) {
                return thisNode;
            }
            if (next == undefined) {
                break;
            }
            thisNode = next;
            next = thisNode.nextNode;
        }
        return null;
    };
    List.prototype.remove = function (node) {
        var found = false;
        var thisNode = this.first;
        var nextNode = thisNode.nextNode;
        if (thisNode === node) {
            this.first = node.nextNode;
        }
        while (!found) {
            if (nextNode === node) {
                found = true;
                break;
            }
            else if (nextNode == undefined) {
                return null;
            }
            thisNode = nextNode;
            nextNode = thisNode.nextNode;
        }
        thisNode.nextNode = nextNode.nextNode;
    };
    List.prototype.values = function () {
        var allValues = [];
        var thisNode = this.first;
        if (thisNode == undefined) {
            return [];
        }
        var nextNode = thisNode.nextNode;
        while (thisNode != undefined) {
            console.log(thisNode.value);
            allValues.push(thisNode.value);
            if (thisNode.nextNode) {
                thisNode = nextNode;
                nextNode = thisNode.nextNode;
            }
            else {
                break;
            }
        }
        return allValues;
    };
    List.prototype.findFinal = function () {
        var thisNode = this.first;
        var nextNode = thisNode.nextNode;
        while (nextNode != undefined) {
            thisNode = nextNode;
            nextNode = thisNode.nextNode;
        }
        return thisNode;
    };
    return List;
}());
exports.List = List;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
function tests() {
    var list = new List();
    list.values();
    list.add('blah');
    list.add('bloo');
    list.add('blee');
    list.add('foo');
    console.log(list.values());
    list.remove(list.findNodeWithValue('blah'));
    console.log(list.values());
}
tests();
