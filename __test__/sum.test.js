var sum = require('../src/sum');

describe('sum',function(){
	it('should return 3 when sum 1 with 2', function(){
		var expectedValue = 3;
		var actual = sum(1,2);
		expect(actual).toBe(expectedValue);
	});
});

describe("unit test life cycle with Jest", function(){

	beforeAll(function() {console.log("Before All"); });

	afterAll(function() {console.log("After All eiei"); });

	beforeEach(function() {console.log("Before Each"); });

	afterEach(function() {console.log("After Each"); });

	it("Run test", function(){
		console.log("Test Cases");
		expect(true).toBe(true);
	});

	it("Run test1", function(){
		console.log("Test Cases1");
		expect(true).toBe(true);
	});

});