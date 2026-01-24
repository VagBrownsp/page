 function goToPage2() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
  }

  function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    const resultado = document.getElementById('resultado');
    const whatsapp = document.getElementById('whatsappBtn');

    // Reset visual
    resultado.classList.add('hidden');
    resultado.classList.remove('piscando');
    whatsapp.classList.add('hidden');

    if (!cpfValido(cpf)) {
      alert('Digite um CPF válido');
      return;
    }

    // Etapa 1: simulando consulta
    resultado.innerText = 'Pesquisando...';
    resultado.style.color = '#ca8a04';
    resultado.classList.remove('hidden');
    resultado.classList.add('piscando');

    // Delay para parecer consulta real
    setTimeout(() => {
      resultado.innerText = 'COM CHANCES DE APROVAÇÃO';
      resultado.style.color = '#16a34a';
      resultado.classList.remove('piscando');
      whatsapp.classList.remove('hidden');
      
    }, 2000);
  }

  function cpfValido(cpf) {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    return resto === parseInt(cpf.charAt(10));
  }

