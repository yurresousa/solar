let html = document.querySelector("html");
let banner = document.querySelector("#banner")
banner.style.height = ((html.clientHeight)-20)+"px";

// animar a lampada do sobre
// Selecione o elemento que deseja observar
const sobre = document.querySelector('.lampadaAnimada');

// Crie uma função de retorno de chamada para lidar com as entradas observadas
const callback = (entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      // O elemento entrou na tela
      // Faça alguma ação desejada aqui, como disparar um evento
        sobre.classList = " animate__animated  animate__rotateInDownLeft animate__slower"
        setInterval(()=>{
            sobre.classList = ""
        },2500)
    }
  });
};

// Crie uma instância do IntersectionObserver com a função de retorno de chamada
const observador = new IntersectionObserver(callback);

// Inicie a observação do elemento
observador.observe(sobre);



