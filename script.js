
let allTotal = 0;
function addToCart(element){
	let mainEl = element.closest('.single-item');
	let price = mainEl.querySelector('.price').innerText;
	let name = mainEl.querySelector('h3').innerText;
	let quantity= mainEl.querySelector('input').value;
	console.log(quantity);

	let cartItems = document.querySelector('.cart-items');
	
	if(parseInt(quantity) > 0){
		let button = mainEl.querySelector('button').disabled = true;
		price = price.substring(1);
		price = parseInt(price);
		
		quantity = parseInt(quantity);
		
		let total = price * quantity;
		allTotal+=total;
		// cartItems.innerHTML += '<div class="cart-single-item"> <h3>${name}</h3> </div>';
	cartItems.innerHTML += '<div class="cart-single-item"> Производ: <h3>' + name + "</h3> <p>Цена: $" + price + " X Количина: " + quantity + "kg = Вкупно: <span>" + total + '</span><button onclick="removeFromCart(this)" class="remove-item">Отстрани</button></p></div>';
	


	document.querySelector('.total').innerText = "Вкупно: " + allTotal;

	}

	else {
		alert('Изберете количина');
	}

	console.log(quantity);

}

function removeFromCart(element){
	let mainEl = element.closest('.cart-single-item');
	let nazivKosnica= mainEl.querySelector('h3').innerText;
	let vegetables = document.querySelectorAll('.single-item');
	
	let price = mainEl.querySelector('p span').innerText;
	price = parseInt(price);
	allTotal-=price;
	document.querySelector('.total').innerText= "Вкупно: " + allTotal;

	vegetables.forEach(function(vege){
		let itemName = vege.querySelector('.si-content h3').innerText;
		if( itemName === nazivKosnica){
			vege.querySelector('.actions input').value = 0;
			vege.querySelector('.actions button').removeAttribute('disabled');
		}
	});

	
	mainEl.remove();
	



}