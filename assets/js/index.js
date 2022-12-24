//banner

//let banner = ["./assets/img/unhas1.jpg", "./assets/img/unhas2.jpg", "./assets/img/unhas3.jpg", "./assets/img/unhas4.jpg", "./assets/img/unhas5.jpg"];



let img = document.querySelectorAll('.img-banner');

let bannerAtual = 0;

function trocaBanner() {
	img[bannerAtual].classList.remove('selected');
	console.log(bannerAtual);
	bannerAtual++;
	if (bannerAtual === img.length) {
		bannerAtual = 0;
		img[bannerAtual].classList.add('selected');
		return;
	}
	
	img[bannerAtual].classList.add('selected');
}

setInterval(trocaBanner, 4000)



//menu mouse over

const linkMenu = document.querySelectorAll('.header-nav__item');

for (let x = 0; x < linkMenu.length; x++) {
	linkMenu[x].addEventListener('mouseover', () => {
		linkMenu[x].classList.add('shrink')
	});

}