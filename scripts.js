document.addEventListener("DOMContentLoaded", function () {
  // Carregar nome do usuário
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("username").textContent = username;
  }

  // Carregar transações
  if (document.querySelector(".transaction-list")) {
    fetch("get_transacoes.php")
      .then((response) => response.json())
      .then((data) => {
        const transactionList = document.querySelector(".transaction-list");
        data.forEach((transacao) => {
          const div = document.createElement("div");
          div.classList.add("transaction");
          div.innerHTML = `
                        <p>${transacao.descricao}</p>
                        <p>${transacao.valor}</p>
                        <p>${transacao.data}</p>
                        <p>${transacao.categoria_nome}</p>
                    `;
          transactionList.appendChild(div);
        });
      });
  }
});
