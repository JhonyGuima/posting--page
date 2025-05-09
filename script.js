  const form = document.querySelector('#post-form');
    const titulo = document.querySelector('#titulo');
    const conteudo = document.querySelector('#conteudo');
    const tituloRenderizar = document.querySelector('#renderizador-titulo');
    const conteudoRenderizar = document.querySelector('#renderizador-conteudo');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const data = {
        title: titulo.value,
        body: conteudo.value,
        
      };

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(post => {
        
        tituloRenderizar.innerHTML = post.title;
        conteudoRenderizar.innerHTML = post.body;

        
        titulo.value = '';
        conteudo.value = '';
      })
      .catch(error => {
        alert('Ocorreu um erro ao postar!');
        console.error(error);
      });
    });