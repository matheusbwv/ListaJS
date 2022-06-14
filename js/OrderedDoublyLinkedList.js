class OrderedDoublyLinkedList extends LinkedList {
constructor() {
    super();
}

insert(position, value,indexvalue) {
    throw new Error("Não é possível escolher a posição em lista ordenada");
}

append(value) {
    const node = new Node(value);
    let cursor = this.head;
    let previous = null;
    if (this._isInvalid(value)) {
    throw new Error("Valor inválido");
    }
    if (this.head === null) {
    this.head = node;
    } else {
    while (cursor !== null && cursor.content < value) {
        previous = cursor;
        cursor = cursor.next;
    }
    
    if( cursor !== null){
        if(previous !== null){
            node.previous = cursor.previous;
            cursor.previous.next = node;
            cursor.previous = node;
            node.next = cursor;
            cursor = node;
        }else{
            node.next = cursor;
            node.previous = null;
            this.head = node;
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
toString(separator = "-") {
    let cursor = this.head;
    let text = "";
    while (cursor) {
    text += cursor.content + separator;
    cursor = cursor.next;
    }
    const lastSeparatorIndex = text.length - separator.length;
    console.log(text);
    console.log(this);

    return text.slice(0, lastSeparatorIndex);
}
remove(value) {
    let cursor = this.head;
    let i = 0;
    let previous = null;
    while (cursor) {
        if (cursor.content === value) {
            if (previous) {
                previous.next = cursor.next;
                if (cursor.next) {
                    cursor.next.previous = previous;
                }
            } else {
                this.head = cursor.next;
            }
            this.length--;
            return;
        }
        previous = cursor;
        cursor = cursor.next;
        i++
    }
    throw new Error('Valor não encontrado');
}
remove(value) {
    let cursor = this.head;
    let i = 0;
    while (cursor) {
        if (cursor.content === value) {
            return this.removeAt(i + 1);
        }
        cursor = cursor.next;
        i++
    }
    throw new Error('Valor não encontrado');

}
}

