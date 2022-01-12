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
  }























}
