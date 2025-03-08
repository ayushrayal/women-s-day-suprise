function checkCode() {
    const code = document.getElementById('codeInput').value.toLowerCase();
  
    if (code === 'meghu2025') {
      window.location.href = 'meghu.html';
    } else if (code === 'sans2025') {
      window.location.href = 'sanskriti.html';
    } else if (code === 'geetu2025') {
      window.location.href = 'geetu.html';
    } else {
      alert('Invalid code! Please try again.');
    }
  }