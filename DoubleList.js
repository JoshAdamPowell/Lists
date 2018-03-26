"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleList = /** @class */ (function () {
    function DoubleList() {
    }
    DoubleList.prototype.add = function (value) {
        if (this.first == undefined) {
            this.first = new DoubleListNode(value);
            this.last = this.first;
        }
        else {
            var final = this.findFinal();
            var newNode = new DoubleListNode(value);
            final.nextNode = newNode;
            newNode.previousNode = final;
            this.last = newNode;
        }
    };
    ;
    DoubleList.prototype.findNodeWithValue = function (value) {
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
    DoubleList.prototype.remove = function (node) {
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
    DoubleList.prototype.values = function () {
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
    DoubleList.prototype.findFinal = function () {
        var thisNode = this.first;
        var nextNode = thisNode.nextNode;
        while (nextNode != undefined) {
            thisNode = nextNode;
            nextNode = thisNode.nextNode;
        }
        return thisNode;
    };
    return DoubleList;
}());
exports.DoubleList = DoubleList;
var DoubleListNode = /** @class */ (function () {
    function DoubleListNode(value) {
        this.value = value;
    }
    return DoubleListNode;
}());
exports.DoubleListNode = DoubleListNode;
