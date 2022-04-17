function carrega() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    let data = JSON.parse(this.responseText);
    let bio = `
        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="card" style="width: 18rem;">
                <img src="${data.avatar_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.bio}</p>
                    <a href="${data.html_url}" class="btn btn-primary">Acessar Perfil</a>
                </div>
            </div>
        </div>
    <div class="row justify-content-center">
    <div class="col-9 banner1 text-center">Site contendo meus repositorios no github
    </div>
    </div>`;
    document.getElementById("perfil").innerHTML = bio;
  };
  xhr.open(
    "GET",
    "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
  );
  xhr.send();
}

carrega();
