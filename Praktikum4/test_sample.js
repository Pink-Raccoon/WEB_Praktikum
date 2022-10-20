const describe=function() {
    let {scriptOfSample} = require('./script-of-sample')
  
    beforeEach(function() {
    })
  
    it("should be able to identify latin characters", function() {
      expect(scriptOfSample("A", SCRIPTS)).toEqual("Latin")
    })
  
    it("should be able to identify han characters", function() {
      expect(scriptOfSample("英", SCRIPTS)).toEqual("Han")
    })
  
    it("should be able to identify cyrillic characters", function() {
      expect(scriptOfSample("я", SCRIPTS)).toEqual("Cyrillic")
    })
  
    it("should be able to identify arabic characters", function() {
      expect(scriptOfSample("مساء الخير", SCRIPTS)).toEqual("Arabic")
    })
  
    it("should be able to reject unknown characters", function() {
      expect(scriptOfSample(".", SCRIPTS)).toEqual("unknown")
    })
  
  
  }
  console.log(describe())