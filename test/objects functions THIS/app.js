//OBJECTS FUNCTIONS AND THIS


//these function is attached to the global execution context object
function a() {
    console.log(this);
    this.newvariable = 'hello';
}


var b = function() {
    console.log(this);
}


a();

// we can get to newvariable because it has been attached to the global namespace
// NOT the function a()
console.log(newvariable);

b();



var c = {
    name: 'The c object',
    log: function() {
        var self = this;

        self.name = 'Updated c object';
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();