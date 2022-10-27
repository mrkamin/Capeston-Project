const bars = document.querySelector('.nav-container-parnav > .bars');
const ul = document.querySelector('.nav-container-parnav-ul');
// ============================================================================
bars.addEventListener('click', () => {
  if (bars.classList.contains('change')) {
    bars.classList.remove('change');
    ul.classList.remove('change');
  } else {
    bars.classList.add('change');
    ul.classList.add('change');
  }
});