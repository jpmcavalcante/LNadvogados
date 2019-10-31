function toggleFAB(fabi){
	if(document.querySelector(fabi).classList.contains('show')){
  	document.querySelector(fabi).classList.remove('show');
  }else{
  	document.querySelector(fabi).classList.add('show');
  }
}

document.querySelector('.fabi .main').addEventListener('click', function(){
	toggleFAB('.fabi');
});

document.querySelectorAll('.fabi ul li button').forEach((item)=>{
	item.addEventListener('click', function(){
		toggleFAB('.fabi');
	});
});