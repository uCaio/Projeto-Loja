document.addEventListener("DOMContentLoaded", function() {
    const sizes = document.querySelectorAll('.product-size');
    sizes.forEach(size => {
        size.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove a seleção de todos
            sizes.forEach(s => {
                s.style.backgroundColor = "";
                s.style.color = "";
            });
            // Adiciona a seleção ao clicado
            this.style.backgroundColor = "#52c4db";
            this.style.color = "#000";
            this.style.borderRadius = "50px";

            // Define o valor selecionado no input hidden
            selecionarTamanho(this.innerText);
        });
    });
});

function selecionarTamanho(tamanho) {
    const inputTamanho = document.getElementById('inputTamanhoSelecionado');
    inputTamanho.value = tamanho;
}
