class List{
    first: ListNode;

    add(value: string) {
        if (this.first == undefined){
            this.first = new ListNode(value);
        } else {
            let final = this.findFinal();
            final.setNextNode(new ListNode(value))
        }
    };

    findNodeWithValue(value: string){
        let thisNode = this.first;
        let next = thisNode.nextNode;
        while (thisNode != undefined){
            if (thisNode.value === value){
                return thisNode
            }
            thisNode = next;
            next = thisNode.nextNode;
        }
        return null;
    }

    remove(node: ListNode){
        let found = false;
        let thisNode = this.first;
        let nextNode = thisNode.nextNode;
        while(!found){

            if (nextNode === node){
                found = true;
                break;
            } else if (nextNode == undefined){
                return null;
            }
            thisNode = nextNode;
            nextNode = thisNode.nextNode;
        }
        thisNode.setNextNode(nextNode.nextNode);
    }

    values() {
        let allValues = [];
        let thisNode = this.first;
        let nextNode = thisNode.nextNode;
        while (thisNode != undefined){
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

    private findFinal(){
      let thisNode = this.first;
      let nextNode = thisNode.nextNode;
      while (nextNode != undefined){
          thisNode = nextNode;
          nextNode = thisNode.nextNode;
      }
      return thisNode

    }
}


class ListNode{
    value: string;
    nextNode: ListNode | undefined;

    constructor(value: string){
        this.value = value;
    }

    setNextNode(newNode: ListNode){
        this.nextNode = newNode;
    }

}

function tests(){
    let list = new List();
    list.add('blah');
    list.add('bloo');
    list.add('blee');
    list.add('foo');

    console.log(list);
    console.log(list.values());
    let bloo = list.findNodeWithValue('bloo');
    list.remove(bloo);
    console.log(list);
    console.log(list.values());
    let foo = list.findNodeWithValue('foo');
    list.remove(foo);
    console.log(list.values());
    list.add('seven');
    console.log(list.values());

}

tests();