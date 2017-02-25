;(function () {

  var domgen  = function (tag,attrs,children) {
    var elem = document.createElement(tag)
    var classes = null
    if (attrs) {
      classes = attrs.class
      delete attrs.class
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key]
        if (key.indexOf('on') === 0 && typeof value === 'function') {
          var eventName = key.substr(2)
          elem.addEventListener(eventName, value)
        } else {
          elem.setAttribute(key, attrs[key])
        }
      })
    }
    if (classes) {
      if (Array.isArray(classes)) {
        classes.forEach(function (c) { elem.classList.add(c) })
      } else {
        elem.className = classes.toString()
      }
    }
    if (children) {
      const addChild = function (child) {
        if (typeof(child) === 'string') {
          elem.appendChild(document.createTextNode(child))
        } else {
          elem.appendChild(child)
        }
      }
      if (Array.isArray(children)) {
        children.forEach(function (c) { addChild(c) })
      } else {
        addChild(children)
      }
    }
    return elem
  }

  if (typeof exports == "object") {
    module.exports = domgen
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return domgen  })
  } else if (window) {
    window.domgen = domgen
  }
})()
