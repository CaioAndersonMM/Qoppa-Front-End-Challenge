document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('userForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const data = {
            username: username,
            email: email,
            password: password
        };

        const URL = 'http://localhost:3000/singUp'; 

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na solicitação à API');
            }
            return response.text();
        })
        .then(apidata => {
            alert("✅ Reconhecido! Parabéns!")
            console.log('Cadastro realizado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao enviar dados para a API:', error);
            alert('Erro ao cadastrar. Por favor, tente novamente.');
        });
    });
});