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

//********
 drop: function(array,n = 1) {
  for (let i = 0; i < n; i++) {
    array.shift(array[i])
  }
  return array
 }
























}
