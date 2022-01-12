var  dwen_zheng = {
  chunk: function(array, size) {
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
  },

  // *******
  compact: function(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0)  result.push(array[i])
    }
    return result
  },

  // ********
 drop: function(array,n = 1) {
  for (let i = 0; i < n; i++) {
    array.shift(array[i])
  }
  return array
 },

  // ********
  dropRight: function(array,n = 1) {
    for (let i = 0; i < n; i++) {
      array.pop()
    }
    return array
  },

  // ********
  fill: function(array,value,start = 0,end = array.length){
  //遍历start - end 并替换
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  // ********
  isBoolean: function(value) {
    if (value === true || value === false || value.val === true || value.val === false) return true
    else return false
  },

  // ********
  head: function(array) {
    return array[0]
  },

  // ********
  indexOf: function(array,value,fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) return i
    }
  },

  // ********
  initial: function(array) {
   if(!array) return []
   var result = []
   for (var i = 0; i < array.length - 1; i++) {
     result.push(array[i])
   }
   return result
  },

  // ********
  join: function(array, separator = ',') {
    var result = ''
    for (var i = 0; i < array.length - 1; i++) {
      result += array[i] + separator
    }
    result += array[array.length - 1]
    return result
  },
// ********
  last: function(array) {
    return array[array.length - 1]
  },

  // ******
  reverse: function(array,values) {
    var len = array.length
    for (var i = 0; i < len / 2; i++) {
      var t = array[i]
      array[i] = array[len - i - 1]
      array[len - i - 1] = t
    }
    return array
  }





















}
