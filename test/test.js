function Foo() {
}



describe("Foo", function () {
    var foo;

    beforeEach(function () {

        foo = new Foo();
    });
    describe("#clone", function () {
      
        beforeEach(function (done) {
            console.log(done());
            //done();
        });
        it("clones the object", function () {
        });
    });
    describe("#equals", function () {
        it("returns true when the object passed is the same", function () {
        });
        beforeEach(()=> console.log('beforeEachGG'))
        afterEach('after',()=>console.log('afterEach'))
        it("returns false, when...", function () {
        });
    });
    afterEach(function () {
        // Destroy the foo that was created.
        // foo.destroy();
    });

});

function Bar() {
}

describe("Bar", function () {
    describe("#clone", function () {
        it("clones the object", function () {
        });
    });
});