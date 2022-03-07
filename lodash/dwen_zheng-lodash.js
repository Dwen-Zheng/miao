var  dwen_zheng = function() {

  function iteratee(predicate) {  // 将 predicate 转为函数
    if (typeof predicate === 'string') {
      predicate = property(predicate)
    }
    if (Array.isArray(predicate)) {
      predicate = matchesProperty(...predicate)
    }
    if (typeof predicate === 'object') {
      predicate = matches(predicate)
    }
    return predicate  // 不是以上类型，就返回本身（函数）
  }
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
  function concat(array,...values) {
    for(let value of values) {
      if(Array.isArray(value)) {
        array.push(...value)
      } else {

        array.push(value)
      }
    }
    return array
  }

    /**创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
   * @param {Array} 要查询的数组
   * @param {number} 要去除的元素个数
   * @return {Array} 返回array剩余切片
   */
  function dropRight(array,n = 1) {
    let res = array
    for(let i = 0; i < n; i++) {
      res.pop()
    }
    return res
  }

  /**创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。 predicate 会传入3个参数： (value, index, array)。
   * @param {Array} 要查询的数组
   * @param {function} 这个函数会在每一次迭代调用。
   * @param {number} The index to search from
   * @return {number} 返回找到元素的 索引值（index），否则返回 -1。
   */

  function findindex(array,){
  }

  /**
   * @param {*} 用来比较的值
   * @param {*} 另一个用来比较的值
   * @return {boolean} 如果 两个值完全相同，那么返回 true，否则返回 false。。
   */
  function isEqual(value,other) {
    if(typeof value !== typeof other) return false
    //数组情况
    if(Array.isArray(value)){
     if( value.length !== other.length ) {//长度不相等则false
       return false
      } else {
        for(let i = 0; i < value.length; i++) {//遍历数组
          if(Array.isArray(value[i])) {
            isEqual(value[i],other[i])
          } else {
            if(value[i] !== other[i]) return false
          }
        }
      }
    } else if(typeof value == 'object') { // 为对象时
      for(let key in value) {
        if(value.key !== other.key) return false
      }
    }else if(value !== other) {return false}
    return true
  }

   /**
   * @param {*} 用来比较的值
   * @param {*} 另一个用来比较的值
   * @param {function} 用来定制比较值的函数。
   * @return {boolean} 如果 两个值完全相同，那么返回 true，否则返回 false。。
   */

   function  isEqualWith(value,other,customizer) {
     if(value == other) return true
     if(customizer(value) !== customizer(other)) return false
     return true
   }

   /**
   * @param {*} 要检查的值
   * @return {boolean} 如果 value 是一个函数，那么返回 true，否则返回 false。
   */
   function isFunction(value) {
     if(typeof valud == 'function' || value == null) return true
     return false
   }


   /**
   * @param {Array/object} 一个用来迭代的集合
   * @param {Array|Function|Object|string} 每次迭代调用的函数
   * @return {Array} 返回一个新的过滤后的数组
   */
   function filter(collection,predicate) {
     let res = []
     predicate =iteratee(predicate)
     collection.forEach(it => {
       if(predicate(it)) {
         res.push(it)
       }
      })
     return res
   }

   /**
   * @param {Array/object} 一个用来迭代的集合
   * @param {Array|Function|Object|string} 每次迭代调用的函数
   * @param {number} 开始搜索的索引位置
   * @return {*} 返回匹配元素，否则返回 undefined
   */
   function find(collection, predicate) {
    predicate = iteratee(predicate)
      for(let key in collection) {
        if(predicate(collection[key])) {
          return collection
        }
      }
      return undefined
   }

   /**
   * @param {Array/object} 一个用来迭代的集合
   * @param {Function} 每次迭代调用的函数
   * @return {*} 返回集合
   */

   function forEach(collection, iter) {
       for(let key in collection) {
         iter(collection[key], key, collection )
       }
       return collection
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
    concat,
    findindex,
    isEqual,
    isEqualWith,
    isFunction,
    filter,
    find,
    iteratee,
    forEach,
  }

}()
