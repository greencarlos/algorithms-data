class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }

    addNode(val){
        var node = new ListNode(val);
        var runner = this;
        while (runner.next){
            runner = runner.next;
        }
        runner.next = node;
        return this;
    }

}

function printReverse(node){
    var runner = node;
    if(runner.next){
        printReverse(runner.next);
    }
    console.log(runner.val);
    return;
}

var test =  new ListNode(10)
test.addNode(5).addNode(7).addNode(3);
printReverse(test);
