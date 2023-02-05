const obj = {
    name: 'ohad',

    printName: function () {
        console.log(this.name);
    },

    printNameDelay: function () {
        setTimeout((function () { console.log('print-delay',this.name) }).bind(this),2500);
    },
}


obj.printName();
obj.printNameDelay();
