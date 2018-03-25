const url = {
  join (url1, url2) {
    if (url1[url1.length - 1] === '/') {
      if (url2[0] === '/') {
        return `${url1.substring(0, url1.length - 1)}${url2}`
      } else {
        return `${url1}${url2}`
      }
    } else {
      if (url2[0] === '/') {
        return `${url1}${url2}`
      } else {
        return `${url1}/${url2}`
      }
    }
  }
}

export default url
