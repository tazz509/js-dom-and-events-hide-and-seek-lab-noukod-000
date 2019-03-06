function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(cl, id) {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let secnode = node.children[0]

  while (secnode) {
    node = secnode
    secnode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < rankedList.length; ++i) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}
