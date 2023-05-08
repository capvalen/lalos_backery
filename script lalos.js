<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

<!-- Modal -->
<div class="modal fade" id="modalVenta" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Pedido a la Panadería Lalos</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="mb-1">Esta por realizar un pedido de:</p>
				<div id="canasta">
					
				</div>
				<div class="row">
					<div class="col-5"></div>
					<div class="col">
						<p class="mb-1"><b>Sub-Total: S/ <span id="suma"></span></b></p>
					</div>
				</div>
				<div class="mas">
					<div class="row">
						<div class="col m-3 p-3 text-center" data-bs-dismiss="modal">
							<b>+ Agregar más tortas</b>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<p class="mb-0"><b>Instrucciones de pago:</b></p>
						<p class="mb-1">Realice el pago por QR</p>
						<img src="https://panaderialalos.com/wp-content/uploads/2023/05/pago_qr.jpg" alt="">
						<p class="mb-1 mt-2">O puede realizar un depósito a los bancos</p>
						<ul>
							<li><b>Cuentas Corrientes de: <b>Inversiones Velasquez</b></b></li>
							<li>BCP (Soles): 1939852489088</li>
							<li>BBVA (Soles) 001102370200626779</li>
							<li>Interbank (Soles) 5003002865050</li>
						</ul>
					</div>
				</div>
				
				<p class="mt-3"><b>Importante para ser atentido:</b> puede rellenar el formulario de abajo o escribir al Whatsapp: <a href="https://wa.me/51947142089">947142089</a> con su voucher de pago</p>
				<div class="row my-2 ">
					<div class="col">
						<p class="mb-1"><b>Datos del cliente</b></p>
						<label for="">Nombres</label>
						<input type="text" class="form-control mb-2" autocomplete="off" placeholder="Nombres" id="txtNombre">
						<div class="row row-cols-2">
							<div class="col">
								<label for="">Celular</label>
								<input type="text" class="form-control mb-2" autocomplete="off" placeholder="Celular" id="txtCelular">
							</div>
							<div class="col">
								<label for="">Correo</label>
								<input type="text" class="form-control mb-2" autocomplete="off" placeholder="Correo" id="txtCorreo">
							</div>
						</div>
						<p class="mb-1"><b>Sobre el delivery</b></p>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="delivery" id="enTienda" checked onclick="cambiarValor('tienda')">
							<label class="form-check-label" for="enTienda">
								Recojo en tienda
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="delivery" id="aDomicilio" onclick="cambiarValor('domicilio')">
							<label class="form-check-label" for="aDomicilio" >
								Entrega a domicilio
							</label>
						</div>
						<div id="divTienda">
							<div class="row row-cols-2">
								<div class="col">
									<label for="">Fecha de recojo</label>
									<input type="date" class="form-control mb-2" value="2023-05-14" id="dtpFechaRecojo">
								</div>
								<div class="col">
									<label for="">Hora</label>
									<input type="time" class="form-control mb-2" min="09:00" max="21:00" value="12:00" id="dtpHoraRecojo">
								</div>
							</div>
						</div>
						<div class="d-none " id="divDomicilio">
							<p class="text-danger px-3 fst-italic"><small>*El servicio de delivery sólo comprende Huancayo Metropolitano (Huancayo, El Tambo y Chilca). No incluye Alrededores.</small></p>
							<div class="row row-cols-2">
								<div class="col">
									<label for="">Lugar de entrega</label>
									<select class="form-select mb-2" id="sltLugar" onchange="agregarDelivery()">
										<option value="1">Huancayo</option>
										<option value="2">El Tambo</option>
										<option value="3">Chilca</option>
									</select>
								</div>
								<div class="col">
									<label for="">Costo de delivery</label>
									<p class="mb-1"><b>S/ <span id="costoDelivery"></span></b></p>
								</div>
							</div>
							<div class="row row-cols-2">
								<div class="col">
									<label for="">Fecha de entrega</label>
									<input type="date" class="form-control mb-2" value="2023-05-14" id="dtpFechaDomicilio">
								</div>
								<div class="col">
									<label for="">Hora</label>
									<input type="time" class="form-control mb-2" min="09:00" max="21:00" value="12:00" id="dtpHoraDomicilio">
								</div>
							</div>
							<div class="row col">
								<label for="">Persona encargada que recepcionará el pedido</label>
								<input type="text" class="form-control mb-2" placeholder="Nombre de encargado" autocomplete="off" id="txtNombreDomicilio">
								<label for="">Dirección del domicilio</label>
								<input type="text" class="form-control mb-2" placeholder="Dirección del domicilio" autocomplete="off" id="txtDireccionDomicilio">
								<label for="">Referencia</label>
								<input type="text" class="form-control mb-2" placeholder="Referencia" autocomplete="off" id="txtReferenciaDomicilio">
							</div>
						</div>
					</div>
				</div>
				<div class="row mt-3">
					<div class="col text-center">
						<p><b><small>Total a pagar</small> S/ <span id="totales"></span></b></p>
					</div>
				</div>
				<div class="row my-3">
					<div class="col">
						<p><b>Sobre el pago</b></p>
						<label for="">¿Tiene detalles adicionales?</label>
						<input type="text" class="form-control mb-2" placeholder="Datos extras" autocomplete="off" id="txtDetalles">
						<label for="">Por favor adjunte su comprobante de pago <span class="fst-italic">(Captura de pantalla o PDF)</span></label>
						<input type="file" class="form-control mb-2" id="archivo" ref="archivo" accept="image/*, .pdf, .PDF" onchange="subirArchivo()">
						<span class="d-none" id="spanSubiendo">... Subiendo comprobante ...</span>
						<span class="d-none" id="spanAdjuntado"> <span class="px-2 my-1 btnBorrar" onclick="borrarAdjunto()"><img src="https://panaderialalos.com/wp-content/uploads/2023/05/remove.png" width="18px" alt=""></span> <a id="linkAdjunto" target="_blank" href="">Archivo adjuntado</a></span>
					</div>
				</div>

				<div class="row ">
					<div class="col d-grid d-flex justify-content-end">
						<button class="btn btn-outline-primary" onclick="hacerPedido()"><b>Realizar pedido a Lalos</b></button>
					</div>
				</div>


      </div>
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="modalEspera" data-bs-backdrop="static" data-bs-keyboard="false"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
       	<p class="lead">Procesando</p>
				<p>Estamos enviando su información, espere un momento.</p>
      </div>
      
    </div>
  </div>
</div>
<!-- Modal -->
<div class="modal fade" id="modalGracias" data-bs-backdrop="static" data-bs-keyboard="false"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
       	<p class="lead text-center fw-bold">Gracias por su compra</p>
				<div class="w-75 text-center"><img src="https://panaderialalos.com/wp-content/uploads/2021/03/logo-lalos.png" alt=""></div>
				<p class="lead">Hemos enviado un correo electrónico con sus datos. Pronto recibirá un mensaje de confirmación de que su pedido se está atendiendo.</p>
				<button class="btn btn-primary" onclick="location.reload()">Gracias por su preferencia</button>
      </div>
      
    </div>
  </div>
</div>
<link rel="stylesheet" href="https://panaderialalos.com/promocion_mayo_2023_archivos/alertify.rtl.css"/>
<script src="https://panaderialalos.com/promocion_mayo_2023_archivos/alertify.min.js"></script>

<script>
	window.addEventListener("load", main);
	const modalVenta = new bootstrap.Modal('#modalVenta')
	const modalGracias = new bootstrap.Modal('#modalGracias')
	const modalEspera = new bootstrap.Modal('#modalEspera')
	const canasta = document.getElementById('canasta');
	const divTienda = document.getElementById('divTienda');
	const divDomicilio = document.getElementById('divDomicilio');

	var tortas = [
		{id:1, nombre: 'CHEESECAKE SUBLIME', precio: 50, foto: 'https://panaderialalos.com/wp-content/uploads/2023/05/1.jpg'},
		{id:2, nombre: 'PRINCESA PIE', precio: 50, foto: 'https://panaderialalos.com/wp-content/uploads/2023/05/2.jpg'},
		{id:3, nombre: 'MOUSSE TRIÁNGULO', precio: 45, foto: 'https://panaderialalos.com/wp-content/uploads/2023/05/3.jpg'},
		{id:4, nombre: 'RED VELVET', precio: 45, foto: 'https://panaderialalos.com/wp-content/uploads/2023/05/4.jpg'},
		{id:5, nombre: 'DRIP CAKE', precio: 40, foto: 'https://panaderialalos.com/wp-content/uploads/2023/05/5.jpg'}
	];
	var suma=0, delivery=0, adjunto='';
	var pedidos = [];
	var cliente = {
		nombre:'', celular: '', 
	}

	function main(){
		console.log('<-Script cargado->');
		var torta1 = document.getElementById('torta1');
		var torta2 = document.getElementById('torta2');
		var torta3 = document.getElementById('torta3');
		var torta4 = document.getElementById('torta4');
		var torta5 = document.getElementById('torta5');
		torta1.addEventListener('click', ()=> agregarPedido(0) );
		torta2.addEventListener('click', ()=> agregarPedido(1) );
		torta3.addEventListener('click', ()=> agregarPedido(2) );
		torta4.addEventListener('click', ()=> agregarPedido(3) );
		torta5.addEventListener('click', ()=> agregarPedido(4) );
		
		function agregarPedido(index){
			let repetido = pedidos.findIndex(pedido => pedido.id== tortas[index].id )
			if(repetido ==-1){
				pedidos.push( {id: tortas[index].id, nombre: tortas[index].nombre, precio: tortas[index].precio, foto: tortas[index].foto, cantidad:1})
				suma += tortas[index].precio;
			}else{
				pedidos[repetido].cantidad++;
				suma += pedidos[repetido].precio;
			}
			renderizar()
			//console.log('pedido total: S/', suma);
			modalVenta.show();
		}
		
	}
	function renderizar(){
		canasta.innerHTML ='';
		pedidos.forEach((pedido, index)=>{
			canasta.innerHTML += /*html*/`
			<div class="row">
				<div class="col-3 text-center">
					<img class="w-75" src="${pedido.foto}" height="50px" alt="">
				</div>
				<div class="col-2 d-flex align-items-center " >
					<input type="number" class="form-control mb-2 text-center" min=0 value="${pedido.cantidad}" onchange="modificarPedido(${index}, ${pedido.cantidad})">
				</div>
				<div class="col-5 d-flex align-items-center">
					<div>
						<p class="mb-0"><b>${pedido.nombre}</b></p> <p class="mb-0">
							<span class="px-2 my-1 btnBorrar" onclick="borrarTorta(${index})"><img src="https://panaderialalos.com/wp-content/uploads/2023/05/remove.png" width="18px" alt=""></span>
							<span>${pedido.cantidad} und.</span> = <span>S/ ${parseFloat(pedido.cantidad*pedido.precio).toFixed(2)}</span>
						</p>
					</div>
				</div>
			</div>`;
		});
		document.getElementById('suma').innerText=parseFloat(suma).toFixed(2);
		document.getElementById('totales').innerText = parseFloat(suma+delivery).toFixed(2)
	}
	function modificarPedido(index, anterior){
		let cantidad = event.target.value;
		if(cantidad>0){
			suma -= pedidos[index].cantidad*pedidos[index].precio
			pedidos[index].cantidad = cantidad;
			suma += pedidos[index].cantidad*pedidos[index].precio
			renderizar();
		}
	}
	function borrarTorta(index){
		suma -= pedidos[index].cantidad*pedidos[index].precio
		pedidos.splice(index,1);
		if(pedidos.length==0){
			suma = 0;
			modalVenta.hide();
		}
		renderizar();
	}
	function cambiarValor(lugar){
		if(lugar=='tienda'){
			divTienda.classList.remove('d-none')
			divDomicilio.classList.add('d-none')
			delivery=0;
		}
		if(lugar=='domicilio'){
			divDomicilio.classList.remove('d-none')
			divTienda.classList.add('d-none')
			document.getElementById('sltLugar').value=1
			delivery=8
			document.getElementById('costoDelivery').innerText = parseFloat(delivery).toFixed(2)
		}
		document.getElementById('totales').innerText = parseFloat(suma+delivery).toFixed(2)
	}
	function agregarDelivery() {
		delivery= document.getElementById('sltLugar').value==='1' ? 8:10;
		document.getElementById('costoDelivery').innerText = parseFloat(delivery).toFixed(2)
		document.getElementById('totales').innerText = parseFloat(suma+delivery).toFixed(2)
	}
	function subirArchivo(){
		let cajaArchivo = document.getElementById('archivo')
		if(cajaArchivo.files.length>0){
			cajaArchivo.classList.add('d-none');
			document.getElementById('spanSubiendo').classList.remove('d-none');
			document.getElementById('spanAdjuntado').classList.add('d-none');

			let formData = new FormData();
			formData.append('file', cajaArchivo.files[0]);
			fetch('https://panaderialalos.com/promocion_mayo_2023_archivos/subirArchivo.php',{
				method:'POST', body: formData
			}).then(response=>{
				response.text()
				.then(texto=>{
					if(texto.includes('comprobantes/')){
						adjunto = texto;
						document.getElementById('linkAdjunto').href="https://panaderialalos.com/promocion_mayo_2023_archivos/"+texto;
						document.getElementById('spanSubiendo').classList.add('d-none');
						document.getElementById('spanAdjuntado').classList.remove('d-none');
					}else{
						cajaArchivo.files[0] = ''
					}
				})
			})

		}else{
			document.getElementById('archivo').classList.remove('d-none');
			document.getElementById('spanSubiendo').classList.add('d-none');
			document.getElementById('spanAdjuntado').classList.add('d-none');
		}

	}
	function borrarAdjunto(){
		let datos = new FormData();
		datos.append('adjunto', adjunto)
		fetch('https://panaderialalos.com/promocion_mayo_2023_archivos/eliminarAdjunto.php',{
			body:datos, method:'POST'
		})
		.then(response=> response.text())
		.then(texto=> console.log(texto))

		document.getElementById('archivo').classList.remove('d-none');
		document.getElementById('archivo').value = ''
		document.getElementById('spanSubiendo').classList.add('d-none');
		document.getElementById('spanAdjuntado').classList.add('d-none');
	}
	function hacerPedido(){
		alertify.set('notifier','position', 'top-right');
		if( document.getElementById('txtNombre').value.trim()=='' ){
			alertify.notify('Olvidó agregar el nombre del cliente', 'error');
		}else if( document.getElementById('txtCelular').value.trim()=='' ||  document.getElementById('txtCorreo').value.trim()=='' ){
			alertify.notify('Los datos de celular y correo son obligatorios', 'error');
		}else if( document.getElementById('enTienda').checked && ( document.getElementById('dtpFechaRecojo').value=='' || document.getElementById('dtpHoraRecojo').value=='' ) ){
			alertify.notify('Debe seleccionar una fecha y hora válida de entrega', 'error');
		}else if( document.getElementById('aDomicilio').checked && ( document.getElementById('dtpFechaDomicilio').value=='' || document.getElementById('dtpHoraDomicilio').value=='' ) ){
			alertify.notify('Debe seleccionar una fecha y hora válida de entrega a domicilio', 'error');
		}else if( document.getElementById('aDomicilio').checked && ( document.getElementById('txtNombreDomicilio').value=='' || document.getElementById('txtDireccionDomicilio').value=='' || document.getElementById('txtReferenciaDomicilio').value=='' )){
			alertify.notify('Todos los campos del Delivery deben ser rellenados', 'error');
		}else if( document.getElementById('archivo').files.length==0 ){
			alertify.notify('Debe adjuntar un comprobante de pago Imágen o PDF', 'error');
		}else{
			modalVenta.hide();
			modalEspera.show();
			let datos = new FormData();
			datos.append('nombre', document.getElementById('txtNombre').value )
			datos.append('celular', document.getElementById('txtCelular').value )
			datos.append('correo', document.getElementById('txtCorreo').value )
			datos.append('delivery', document.getElementById('enTienda').checked ? 0: 1 )
			datos.append('zona', document.getElementById('enTienda').checked ? 0: document.getElementById('sltLugar').value )
			datos.append('precio_productos', suma )
			datos.append('precio_delivery', delivery )
			datos.append('total', suma+delivery )
			datos.append('fecha', document.getElementById('enTienda').checked ? document.getElementById('dtpFechaRecojo').value : document.getElementById('dtpFechaDomicilio').value )
			datos.append('hora', document.getElementById('enTienda').checked ? document.getElementById('dtpHoraRecojo').value : document.getElementById('dtpHoraDomicilio').value )
			datos.append('encargado', document.getElementById('txtNombreDomicilio').value )
			datos.append('direccion', document.getElementById('txtDireccionDomicilio').value )
			datos.append('referencia', document.getElementById('txtReferenciaDomicilio').value )
			datos.append('detalles', document.getElementById('txtDetalles').value )
			datos.append('comprobante', adjunto )
			datos.append('productos', JSON.stringify(pedidos) )
	
			fetch('https://panaderialalos.com/promocion_mayo_2023_archivos/hacerPedido.php',{
				body:datos, method:'POST'
			})
			.then(response=> response.text() )
			.then(texto => { console.log(texto)
				modalEspera.hide();
				if(texto =='ok'){
					modalGracias.show();
				}else{
					alert('Hubo un error enviado su información, contáctese vía Whatsapp, por favor')
				}
			})
		}
	}

</script>
<style>
	.btnBorrar{cursor: pointer;}
	.mas .col{
		border: 2px dashed #cb9046; color: #cb9046;
	}
	.mas .col:hover{
		background-color: #fffcf0; cursor: pointer;
	}
	.modal{
		font-family: "Gilroy", Sans-serif!important;
	}
	.btn-outline-primary{
		color: #325CA7;
		border-color: #325CA7;
	}
	.btn-outline-primary:hover{
		background-color: #325CA7!important;
	}
	small {
    font-size: .75em;
	}
	.alertify-notifier .ajs-message.ajs-error {
    background: #bd0000f2;
    color: white;
		text-align: center;border-radius: 8px;
}
</style>