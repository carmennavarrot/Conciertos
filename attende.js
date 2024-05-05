const result = document.querySelector('.js_result');

const token = localStorage.getItem('token');

if (!token) {
  console.log(token);
  result.classList.remove('hidden');
} else { 
  fetch('https://conciertos.onrender.com//concerts/One', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

const logout = document.querySelector('.js-logout');

function handleClickLogout(event) {
  localStorage.removeItem('token');
}
logout.addEventListener('click', handleClickLogout);
