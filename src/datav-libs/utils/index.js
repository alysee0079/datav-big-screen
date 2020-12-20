export function debounce(delav, callback) {
  let task
  return function() {
    clearTimeout(task)
    task = setTimeout(() => {
      callback.apply(this, arguments)
    }, delav)
  }
}
