 function fecharModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    console.log('clicou')
    sessionStorage.setItem('modalVisto', '1');
  }

  if (!sessionStorage.getItem('modalVisto')) {
    setTimeout(() => {
      document.getElementById('modal-overlay').style.display = 'flex';
    }, 20000);
  }

window.fecharModal = fecharModal