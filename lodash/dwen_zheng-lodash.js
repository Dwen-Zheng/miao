var  dwen_zheng = function() {
  function chunk(array, size) {
    if (array.length <= size) return array
    let result = []
    let temp = []
    for (let i = 0; i < array.length; i++) {
      temp.push(array[i])
      if (temp.length == size) {
        result.push(temp)
        temp = []
      }
    }
    if (temp.length !== 0) result.push(temp)

    return result
  }

  // *******
  function compact(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0)  result.push(array[i])
    }
    return result
  }

  // ********
  function drop(array,n = 1) {
  for (let i = 0; i < n; i++) {
    array.shift(array[i])
  }
  return array
  }

  // ********
  function dropRight(array,n = 1) {
    for (let i = 0; i < n; i++) {
      array.pop()
    }
    return array
  }

  // ********
  function fill(array,value,start = 0,end = array.length){
  //遍历start - end 并替换
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  // ********
  function isBoolean(value) {
    if (value === true || value === false || value.val === true || value.val === false) return true
    else return false
  }

  // ********
  function head(array) {
    return array[0]
  }

  // ********
  function indexOf(array,value,fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) return i
    }
  }

  // ********
  function initial(array) {
   if(!array) return []
   var result = []
   for (var i = 0; i < array.length - 1; i++) {
     result.push(array[i])
   }
   return result
  }

  // ********
  function join(array, separator = ',') {
    var result = ''
    for (var i = 0; i < array.length - 1; i++) {
      result += array[i]  + '' +separator
    }
    result += array[array.length - 1]
    return result
  }
  // ********
  function last(array) {
    return array[array.length - 1]
  }

  // ******
  function reverse(array,values) {
    var len = array.length
    for (var i = 0; i < len / 2; i++) {
      var t = array[i]
      array[i] = array[len - i - 1]
      array[len - i - 1] = t
    }
    return array
  }


  /**
   * @param {Array} 要检查的数组
   * @param {...Array} 排除的值
   * @return {Array} 返回一个过滤值后的新数组
   */

  function difference(array,...values) {
    let set = new Set()
    for(let i = 0; i < values.length; i++) {
      values[i].forEach(item => set.add(item))
    }
    return array.filter(item => !set.has(item))
  }

  /**
   * @param {Array} 要检查的数组
   * @param {...Array} 排除的值
   * @param {...Array} 排除的值
   * @return {Array|Function|Object|string} iteratee 调用每个元素
   */
  function differenceBy(array,values,iteratee) {
    let array2 = array.map(item => iteratee(item))
    if(values.length == 1) { values2 = values.map(it =>iteratee(it))}
    let values2 = values.map(item => item.map(it =>iteratee(it)))
    let set = new Set()
    values2.forEach(item => item.forEach(it => set.add(it)))
    array2 = array2.filter(item => !set.has(item))
    return array.filter(item = array2.indexOf(iteratee(item)) !== -1)
  }


  /**
   * @param {Array} 被连接的数组
   * @param {...*} 连接的值
   * @return {Array} 返回连接后的新数组
   */
  function concat(array,values) {

  }














  return {
    chunk,
    compact,
    drop,
    dropRight,
    fill,
    isBoolean,
    head,
    indexOf,
    initial,
    join,
    last,
    reverse,
    difference,
    differenceBy,
  }

}()
