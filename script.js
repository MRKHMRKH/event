function upper() {
    let x = document.getElementById("name");
    x.value = x.value.toUpperCase();
  }








document.addEventListener('DOMContentLoaded', function () {
    const game1 = document.querySelector('.game1.bgmi');
    const hov1 = document.getElementById('hov1');

    if (game1 && hov1) {
        game1.addEventListener('mouseover', function () {
            hov1.style.display = 'block';
        });

        game1.addEventListener('mouseout', function () {
            hov1.style.display = 'none';
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const game1 = document.querySelector('.game2.pes');
    const hov1 = document.getElementById('hov2');

    if (game1 && hov1) {
        game1.addEventListener('mouseover', function () {
            hov1.style.display = 'block';
        });

        game1.addEventListener('mouseout', function () {
            hov1.style.display = 'none';
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const game1 = document.querySelector('.game3.ff');
    const hov1 = document.getElementById('hov3');

    if (game1 && hov1) {
        game1.addEventListener('mouseover', function () {
            hov1.style.display = 'block';
        });

        game1.addEventListener('mouseout', function () {
            hov1.style.display = 'none';
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const game1 = document.querySelector('.game4.fifa');
    const hov1 = document.getElementById('hov4');

    if (game1 && hov1) {
        game1.addEventListener('mouseover', function () {
            hov1.style.display = 'block';
        });

        game1.addEventListener('mouseout', function () {
            hov1.style.display = 'none';
        });
    }
});


function handleRedirect() {
  
    window.location.href = '#home'; }

    function pageLoaded() {
        alert("Welcome to the tournaments");
    }

    function MYFunction() {
        alert("The form was reset");
      }