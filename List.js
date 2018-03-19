var List = /** @class */ (function () {
    function List() {
    }
    List.prototype.add = function (value) {
        if (this.first == undefined) {
            this.first = new ListNode(value);
        }
        else {
            var final = this.findFinal();
            final.setNextNode(new ListNode(value));
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
            thisNode = next;
            next = thisNode.nextNode;
        }
        return null;
    };
    List.prototype.remove = function (node) {
        var found = false;
        var thisNode = this.first;
        var nextNode = thisNode.nextNode;
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
        thisNode.setNextNode(nextNode.nextNode);
    };
    List.prototype.values = function () {
        var allValues = [];
        var thisNode = this.first;
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
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    ListNode.prototype.setNextNode = function (newNode) {
        this.nextNode = newNode;
    };
    return ListNode;
}());
function tests() {
    var list = new List();
    list.add('blah');
    list.add('bloo');
    list.add('blee');
    list.add('foo');
    console.log(list);
    console.log(list.values());
    var bloo = list.findNodeWithValue('bloo');
    list.remove(bloo);
    console.log(list);
    console.log(list.values());
    var foo = list.findNodeWithValue('foo');
    list.remove(foo);
    console.log(list.values());
    list.add('seven');
    console.log(list.values());
}
tests();
