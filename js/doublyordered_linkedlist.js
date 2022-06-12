class doublyordered_linkedlist extends LinkedList {

    constructor() {
    super();
    }

    insert(position, value) {
    throw new Error('impossivel inserir a posição da lista ordenada');
    }

    append(value) {
    if (this._isInvalid(value)) {
        throw new Error('Valor inválido');
    }

    const node = new Node(value);

    while(cursor !== null && cursor.content < content){
        previous = cursor;
        cursor = cursor.next;
    }

    if( cursor !== null){
        if(previous !== null){
            cursor.previous = node;
            node.next = cursor;
            cursor = node;
        }else{
            node.next = cursor;
            node.previous = previous;
            previous.proximo = node;
            cursor.previous = node;
        }
    }else{
        if(previous === null){
            cursor = node;
        }else{
            node.previous = previous;
            previous.next = node;
        }
    }
    }
}