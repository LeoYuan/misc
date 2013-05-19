var add = window.util.add;
var sub = window.util.sub;
var multi = window.util.multi;
var divide = window.util.divide;

describe('Addition', function() {
  it('单位数 + 多位数', function () {
    expect('103').toEqual(add('101', '2'));
    expect('100').toEqual(add('99', '1'));
  });

  it('多位数 + 多位数', function () {
    expect('123').toEqual(add('101', '22'));
    expect('100').toEqual(add('89', '11'));
    expect('999').toEqual(add('488', '511'));
    expect('1000').toEqual(add('889', '111'));
  });
});

describe('Substraction', function() {
  it('多位数 - 单位数', function () {
    expect('99').toEqual(sub('101', '2'));
    expect('98').toEqual(sub('99', '1'));
  });

  it('单位数 - 多位数', function () {
    expect('-20').toEqual(sub('2', '22'));
    expect('-100').toEqual(sub('1', '101'));
    expect('-278').toEqual(sub('233', '511'));
  });

  it('多位数 - 多位数', function () {
    expect('89').toEqual(sub('111', '22'));
    expect('78').toEqual(sub('89', '11'));
    expect('-23').toEqual(sub('488', '511'));
    expect('778').toEqual(sub('889', '111'));
  });
});

describe('Multiplication', function() {
  it('单位数 * 多位数', function () {
    expect('202').toEqual(multi('101', '2'));
    expect('99').toEqual(multi('99', '1'));
  });

  it('多位数 * 多位数', function () {
    expect('2222').toEqual(multi('101', '22'));
    expect('979').toEqual(multi('89', '11'));
    expect('249368').toEqual(multi('488', '511'));
    expect('98679').toEqual(multi('889', '111'));
  });
});