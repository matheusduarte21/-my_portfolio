const ul = document.querySelector('nav ul');
function ShowNavBar(){
    if(ul.classList.contains('open')){
      ul.classList.remove('open')

    }else{
      ul.classList.add('open')
    }

}

  let scrooPos = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  window.addEventListener('scroll', function(){
    let newScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if(newScrollPos > scrooPos){
      ul.classList.remove('open');
    }
  })

  let links = ul.getElementsByTagName('a');
  for(let i = 0; i <links.length; i++){
    links[i].addEventListener('click',fecharNavbar)
  }

  function fecharNavbar() {
    ul.classList.remove('open');
  }

  function escreverNome() {
    var nome = "Olá, meu nome é Matheus, o seu novo desenvolvedor front-end!";
    var index = 0;
    var intervalo = setInterval(adicionarLetra, 100);
  
    function adicionarLetra() {
      if (index < nome.length) {
        document.getElementById("nome").textContent += nome.charAt(index);
        index++;
      } else {
        clearInterval(intervalo);
      }
    }
  }
  escreverNome()

  document.getElementById("btnDownload").addEventListener("click", function() {

    var url = "https://drive.google.com/file/d/1NWmli3_R8s7txY6Saz8GORFwcuW-q1kT/view?usp=drive_link"
  
    var link = document.createElement("a");
    link.href = url;
    link.download = "curriculoTech.pdf"; 
    link.target = "_blank";
    link.click();
  });

  function scrollToSection() {
    var section = document.getElementById("sobre-mim"); // 
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  }

  function scrollToSectionProjetos() {
    var section = document.getElementById("projetos"); // 
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  }
