const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.onclick = function () {
  let x = document.getElementById('input').value;
  input.select();
  let txt = document.execCommand('copy');
  alert(`copied: ${x}`)
}
