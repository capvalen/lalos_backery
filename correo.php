<?php
<!-- ini_set( 'display_errors', 1 );
error_reporting( E_ALL ); -->

require __DIR__. '/PHPMailer/src/Exception.php';
require __DIR__. '/PHPMailer/src/PHPMailer.php';
require __DIR__. '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$recepcion = '';
if($_POST["delivery"]=="1"):
    $recepcion = "<p><strong>Encargado que recepciona: </strong> <span>{$_POST['encargado']}</span></p>
		<p><strong>Dirección de entrega: </strong> <span>{$_POST['direccion']}</span></p>
		<p><strong>Referencia: </strong> <span>{$_POST['referencia']}</span></p>";
endif;
$modalidad = $_POST['delivery']==0 ? 'Recojo en tienda':'Delivery';
$detalles = '';
for($i=0; $i < count($productos); $i++ ) {
    $detalles .="<li>{$productos[$i]['cantidad']} und. {$productos[$i]['nombre']} = S/ {$productos[$i]['precio']}</li>";
}
$detalles.= "<p><strong>Precio por torta(s): </strong> <span>S/ {$_POST['precio_productos']}</span></p>
<p><strong>Precio de delivery: </strong> <span>S/ {$_POST['precio_delivery']}</span></p>
<p><strong>Total a pagar: </strong> <span>S/ {$_POST['total']}</span></p>";
$zona = '';
switch($_POST['zona']){
    case '1': $zona = '- Huancayo'; break;
    case '2': $zona = '- El Tambo'; break;
    case '3': $zona = '- Chilca'; break;
}
										
try {
		//Server settings
		$mail->SMTPDebug =0; // SMTP::DEBUG_SERVER;                      //Enable verbose debug output
		$mail->isSMTP();                                            //Send using SMTP
		$mail->Host       = 'mail.panaderialalos.com';                     //Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
		$mail->Username   = 'ventas@panaderialalos.com';                     //SMTP username
		$mail->Password   = ';db7F7GI[#76';                               //SMTP password
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
		$mail->Port       = 465;                                   //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

		//Recipients
		$mail->setFrom('ventas@panaderialalos.com', "Ventas Panadería Lalos");
		$mail->addAddress("infocat2.0@gmail.com");     //Add a recipient
		//$mail->addAddress($_POST['correo']);     //Add a recipient
		//$mail->addCC('caja.lalos.2022@gmail.com');     //Add a recipient
		
		//Content
		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = 'Pedido recibido de '.$_POST['nombre'];
		$mail->Body    = /*html*/"<table width='100%' height='100%' style='min-width:348px' border='0' cellspacing='0' cellpadding='0' lang='es'>
			<tbody>
				<tr>
				<td align='center'>
					<table border='0' cellspacing='0' cellpadding='0' style='padding-bottom:20px;max-width:516px;min-width:220px'>
					<tbody>
						<tr>
							<td width='8' style='width:8px'></td>
							<td align='center'>
								<div style='border-style:solid;border-width:thin;border-color:#dadce0;border-radius:8px;padding:20px 20px; font-family:Roboto,Arial,sans-serif;'>
									<div style='text-align:center;'><img src='https://panaderialalos.com/wp-content/uploads/2021/03/logo-lalos.png' style='width: 150px;'></div>
									<h1 style='text-align:center;'>Panadería Lalos<h1>
									<div style='font-family:Roboto-Regular,Arial,sans-serif;font-size:14px;color:rgba(0,0,0,0.87);line-height:20px;padding:0px 20px;font-weight: 400;text-align:left;'>
										<p>Se ha recibido una reserva con los detalles: </p>
										<p><strong>Cliente: </strong> <span>{$_POST['nombre']}</span></p>
										<p><strong>Celular: </strong> <span>{$_POST['celular']}</span></p>
										<p><strong>Correo: </strong> <span>{$_POST['correo']}</span></p>
										<p><strong>Modalidad: </strong> <span> {$modalidad} {$zona}</span></p>
										<p><strong>Fecha y hora de entrega: </strong> <span>{$_POST['fecha']} {$_POST['hora']}</span></p>
										{$recepcion}
										<p><strong>Comentarios adicionales: </strong> <span>{$_POST['detalles']}</span></p>
										<p><strong>Detalles del pedido:</strong></p>
										<ul>
										{$detalles}
										</ul>
										<div style='padding-top:32px;text-align:center'>
											<a href='https://panaderialalos.com/promocion_mayo_2023_archivos/{$_POST['comprobante']}' target='_blank' style='line-height: 16px;color: #ffffff;font-weight: 400;text-decoration: none;font-size: 14px;display: inline-block;padding: 10px 24px;background-color: #0e5de1;border-radius: 5px;	min-width: 90px;'>Ver comprobante de pago</a>
										</div>
										<div style='padding-top:32px;text-align:center'>
											<a href='https://wa.me/51{$_POST['celular']}?text=Hemos recibido y confirmado su pedido. Gracias' target='_blank' style='line-height: 16px;color: #ffffff;font-weight: 400;text-decoration: none;font-size: 14px;display: inline-block;padding: 10px 24px;background-color: #0e5de1;border-radius: 5px;	min-width: 90px;'>Contactar al cliente</a>
										</div>
	
										<div>
											<p><small>Este es un sistema automático de aviso, por favor no responda este mensaje.</small></p>
										</div>
										
									</div>
								</div>
							</td>
							<td width='8' style='width:8px'></td>
						</tr>
					</tbody>
					</table>
				</td>
				</tr>
			</tbody>
			</table>";
		$mail->CharSet = 'UTF-8';
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

		$mail->send();
		echo 'Mensaje entregado';
} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}