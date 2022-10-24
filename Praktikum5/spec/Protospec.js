describe("parseToProto",function(){
    let {parseToProto} = require('../parse-to-proto')
    beforeEach(function(){
    })
    it("should join proto with obj", function() {
        let proto = {category:"animal"}
        let obj = parseToProto('{"type":"cat","name":"Mimi","age":3}',proto)       
        expect(obj.category).toEqual("animal")});
    it("should join proto with obj", function() {
        let proto = {category:"animal"}
        let obj = parseToProto('{"type":"cat","name":"Mimi","age":3}',proto)       
        expect(obj.age).toEqual(3)});
});
