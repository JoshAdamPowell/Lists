export class DoubleList {
    first: DoubleListNode;
    last: DoubleListNode;

    add(value: string) {
        if (this.first == undefined) {
            this.first = new DoubleListNode(value);
            this.last = this.first;
        } else {
            let final = this.findFinal();
            let newNode = new DoubleListNode(value);
            final.nextNode = newNode;
            newNode.previousNode = final;
            this.last = newNode
        }
    };

    findNodeWithValue(value: string) {
        let thisNode = this.first;
        let next = thisNode.nextNode;
        while (thisNode != undefined) {
            if (thisNode.value === value) {
                return thisNode
            }
            if (next == undefined){
                break;
            }
            thisNode = next;
            next = thisNode.nextNode;

        }
        return null;
    }

    remove(node: DoubleListNode) {
        let found = false;
        let thisNode = this.first;
        let nextNode = thisNode.nextNode;
        if (thisNode === node){
            this.first = node.nextNode;
        }
        while (!found) {

            if (nextNode === node) {
                found = true;
                break;
            } else if (nextNode == undefined) {
                return null;
            }
            thisNode = nextNode;
            nextNode = thisNode.nextNode;
        }
        thisNode.nextNode = nextNode.nextNode;
    }

    values() {
        let allValues = [];
        let thisNode = this.first;
        if (thisNode == undefined){
            return [];
        }
        let nextNode = thisNode.nextNode;
        while (thisNode != undefined) {
            console.log(thisNode.value);
            allValues.push(thisNode.value);
            if (thisNode.nextNode) {
                thisNode = nextNode;
                nextNode = thisNode.nextNode;
            } else {
                break;
            }
        }
        return allValues;
    }

    private findFinal() {
        let thisNode = this.first;
        let nextNode = thisNode.nextNode;
        while (nextNode != undefined) {
            thisNode = nextNode;
            nextNode = thisNode.nextNode;
        }
        return thisNode

    }
}


export class DoubleListNode {
    value: string;
    nextNode: DoubleListNode | undefined;
    previousNode: DoubleListNode | undefined;

    constructor(value: string) {
        this.value = value;
    }

}
