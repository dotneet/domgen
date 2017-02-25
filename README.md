# domgen

domgen helps to create DOM element.

## Install

```bash
npm install --save domgen
```

## Usage

The domgen signature is:

```
domgen(elementName, attributes, children)
```

Examples:

```js
// simple example
document.body.appendChild(
    domgen('p', {style:'color:orange;'}, 'Text')
)

// Natural class notation.
// You can also write like this: class: 'classA classB'
document.body.appendChild(
    domgen('p', {class:['classA','classB']}, 'Text that have classes')
)

// You can set children recursively.
document.body.appendChild(
    domgen('p', null, [domgen('span', null, 'Child Element Text Node')])
)

// Event
function onClickButton () {
  alert('click!')
}
document.body.appendChild(
    domgen('button', {onclick: onClickButton}, 'Click Me')
)

```

## License

MIT

