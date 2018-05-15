(function () {

  let body = document.querySelector('body');


  if (body.classList.contains('index')) {
    document.querySelector('button.login').addEventListener('click', function () {
      document.querySelector('form.connexion').classList.add('show');
      document.querySelector('form.inscription').classList.add('hide');
      document.querySelector('button.submit').innerHTML = 'SE CONNECTER';
      document.querySelector('.login-google p').innerHTML = 'Se connecter avec google+';
    });

    document.querySelector('button.signin').addEventListener('click', function () {
      document.querySelector('form.connexion').classList.remove('show');
      document.querySelector('form.inscription').classList.remove('hide');
      document.querySelector('button.submit').innerHTML = 'S\'INSCRIRE';
      document.querySelector('.login-google p').innerHTML = 'S\'inscrire avec google+';
    });
  }

  if (!body.classList.contains('index')) {
    document.querySelector('.menuButton').addEventListener('click', function () {
      document.querySelector('.menuButton img.menuClosed').classList.toggle('on');
      document.querySelector('.menuButton img.menuOpened').classList.toggle('on');
      document.querySelector('nav.menu').classList.toggle('on');
      document.querySelector('main').classList.toggle('on');
    });
  }


}());