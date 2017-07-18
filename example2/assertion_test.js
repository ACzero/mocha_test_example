var expect = require('chai').expect;

describe('assertion example', function(){
  it('a', function(){
    expect('foo').to.be.a('string');
    expect(1).to.be.a('number');
  });

  it('any', function(){
    expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
  });

  it('eql', function(){
    expect({a: 1}).to.eql({a: 1});
  });

  it('chain', function(){
    expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1});
  });

  it('throw', function(){
    expect(function(){
      throw new TypeError('Illegal salmon!');
    }).to.throw(TypeError);
  })

  it('increase', function(){
    var foo = 1;
    var change_foo = function () { foo += 2 };
    var getFoo = function() { return foo };

    expect(change_foo).to.increase(getFoo).by(2);
  });
});
