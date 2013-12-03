//var db;
//var dbCreated = false;

//var scroll = new iScroll('wrapper', { vScrollbar: false, hScrollbar:false, hScroll: false });

//document.addEventListener("deviceready", onDeviceReady, false);
//
//function onDeviceReady() {
//    db = window.openDatabase("municipios", "1.0", "Viva Sinaloa", 200000);
//    if (dbCreated)
//    	db.transaction(getEmployees, transaction_error);
//    else
//    	db.transaction(populateDB, transaction_error, populateDB_success);
//}

function transaction_error(tx, error) {
    alert("Database Error: " + error);
}
//
//function populateDB_success() {
//	dbCreated = true;
//    db.transaction(getEmployees, transaction_error);
//}
//
//function getEmployees(tx) {
//	var sql = "select e.id, e.firstName, e.lastName, e.title, e.picture, count(r.id) reportCount " + 
//				"from employee e left join employee r on r.managerId = e.id " +
//				"group by e.id order by e.lastName, e.firstName";
//	tx.executeSql(sql, [], getEmployees_success);
//}

//function getEmployees_success(tx, results) {
//	$('#busy').hide();
//    var len = results.rows.length;
//    for (var i=0; i<len; i++) {
//    	var employee = results.rows.item(i);
//		$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
//				'<img src="pics/' + employee.picture + '" class="list-icon"/>' +
//				'<p class="line1">' + employee.firstName + ' ' + employee.lastName + '</p>' +
//				'<p class="line2">' + employee.title + '</p>' +
//				'<span class="bubble">' + employee.reportCount + '</span></a></li>');
//    }
////	setTimeout(function(){
////		scroll.refresh();
////	},100);
////	db = null;
//}

function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS clima');
	tx.executeSql('DROP TABLE IF EXISTS gastronomia');
    tx.executeSql('DROP TABLE IF EXISTS diversion');
    tx.executeSql('DROP TABLE IF EXISTS emergencia');
    tx.executeSql('CREATE TABLE IF NOT EXISTS clima(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,iframe,js)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS gastronomia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS diversion(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,actividad,horario,direccion,contactos,coordenadas,descripcion)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS emergencia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,servicio,telefono,domicilio,municipio,coordenadas,img)');


////clima
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C01','<div id="TT_RyBkEkkEEffcdQGA7AqzjzjjDWlALfI16jhjxjcikEe"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_RyBkEkkEEffcdQGA7AqzjzjjDWlALfI16jhjxjcikEe"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C02','<div id="TT_tChkk1kEkBUc88IU7AqzjjDzzWuU1zD16jhjBDZyE1e"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_tChkk1kEkBUc88IU7AqzjjDzzWuU1zD16jhjBDZyE1e"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C03','<div id="TT_vCeEEEEkEMrBnQGKKfqjDzzDDWaK1ptEpzhzxjZiEku"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_vCeEEEEkEMrBnQGKKfqjDzzDDWaK1ptEpzhzxjZiEku"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C04','<div id="TT_RihE1kEkkBB9YFsUKAVjzjDDzWnUTz11JzxDxzsC11W"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_RihE1kEkkBB9YFsUKAVjzjDDzWnUTz11JzxDxzsC11W"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C05','<div id="TT_vCBEEkE1kCjBEFGA7AqjDjzzjWaALf11JjxzxzsyEEu"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_vCBEEkE1kCjBEFGA7AqjDjzzjWaALf11JjxzxzsyEEu"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C06','<div id="TT_vihEEE1k1B8BYFhU7fVDjjDzD6aU1zWE6zhjhDciE1W"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_vihEEE1k1B8BYFhU7fVDjjDzD6aU1zWE6zhjhDciE1W"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C07','<div id="TT_tCeEk1kkknKa4FhK7AVjjjjzD6uK1pl1JjBDxzsyk1W"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_tCeEk1kkknKa4FhK7AVjjjjzD6uK1pl1JjBDxzsyk1W"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C08','<div id="TT_Ryh11kkk18U9YFsUjfqDjjzzjWlUMzz1pjxzxjciEkW"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_Ryh11kkk18U9YFsUjfqDjjzzjWlUMzz1pjxzxjciEkW"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C09','<div id="TT_tCBEkkEkEhA9EehAKfVzjjzDDWuATfd1pzhjhjsik1W"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_tCBEkkEkEhA9EehAKfVzjjzDDWuATfd1pzhjhjsik1W"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C10','<div id="TT_Rie11EEkkrrB48hK7AqDzDjzD6aK1pM1pDxDBzZCEke"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_Rie11EEkkrrB48hK7AqDzDjzD6aK1pM1pDxDBzZCEke"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C11','<div id="TT_vihE1kkEkcY9Y8GUjAVzzzzzzWuULz8EpzBDxjcCkkW"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_vihE1kkEkcY9Y8GUjAVzzzzzzWuULz8EpzBDxjcCkkW"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C12','<div id="TT_vihk1k11kaDBYFsUKAqjDjzjD6uULzzkJjBDBzcC11W"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_vihk1k11kaDBYFsUKAqjDjzjD6uULzzkJjBDBzcC11W"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C13','<div id="TT_RCe1EE1EEQMc4esKKAVjjDDjDWaK1pQE6jhjBjZC11W"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_RCe1EE1EEQMc4esKKAVjjDDjDWaK1pQE6jhjBjZC11W"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C14','<div id="TT_tieEEkkkEtSc4eGKjfqjDzzjzWlKLpM1pzBjhjsyEku"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_tieEEkkkEtSc4eGKjfqjDzzjzWlKLpM1pzBjhjsyEku"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C15','<div id="TT_Rih1kkkkkaYaYeGUKfVDzjzzz6lUMz8kJDhjxDZyEke"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_Rih1kkkkkaYaYeGUKfVDzjzzz6lUMz8kJDhjxDZyEke"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C16','<div id="TT_vihkEkkE1a1aYeIU7AVzzDjjz6nUMzD1pDxjxDcC11u"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_vihkEkkE1a1aYeIU7AVzzDjjz6nUMzD1pDxjxDcC11u"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C17','<div id="TT_RCekk1EEkQ4Bp8sKKfVjjjjDjWlKMplEpzhDBzZykkW"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_RCekk1EEkQ4Bp8sKKfVjjjjDjWlKMplEpzhDBzZykkW"></script>']);
tx.executeSql('INSERT INTO clima(clave,iframe,js) VALUES(?,?,?)',['C18','<div id="TT_vCeEE1E11KQc48GK7fVzzDzjzWlKTpQkpzhzBDsCkku"></div>','<script type="text/javascript" src="http://www.tutiempo.net/widget/eltiempo_vCeEE1E11KQc48GK7fVzzDzjzWlKTpQkpzhzBDsCkku"></script>']);

////gastronomia  
//ahome español
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Restaurante Santa Anita','Gabriel leyva y Miguel Hidalgo','25.789370361019625,-108.99567246437073','Lunes-Domingo 7:00am-11:00pm','816 7046','Cocina Internacional','Cocina regional']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Patio 618','Canuto Ibarra 618 sur, 81248 Los Mochis','25.7904657,-108.985882','Lunes-Miércoles 7:30-23:30 Jueves-Sábado 7:30-13:30 Domingos 8:00-18-00','812 4370','Cocina Internacional','Cafeteria']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Manzara Gaudir','Antonio Rosales 569 Centro, Los Mochis, Sinaloa 81200','25.7911099,-108.9995277','Lunes-Domingo 9:30-11:00pm','815 1818','Cocina Internacional','Ensaladas y extensa cava de vinos y cerveza']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Mr. Owen´s ','Gabriel leyva y lazaro cardenas','25.797620561768806,-108.98949265480042','Lunes – Miércoles de 6:00am-12:00pm  Jueves- Sábado de 6:00am-1:00pm','818 1042','Cocina Internacional','Cortes finos y vinos.']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Restaurante España','Alvaro Obregon 525 pte','25.789196476596704,-108.99698138237','Lunes-Sábado 7:00hrs.- 23:00 hrs. Domingos de 7:00hrs -19:00hrs','8122221','Cocina Mediterranea','Desayunos, cocina internacional']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','El Farallon','Alvaro Obregon y angel flores','25.788916972943166,-108.99660587310791','Lunes a Domingo 13:00-23:30 hrs.','8121273','Mariscos','Comida Japonesa y Bar']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','El Marinero','A. LOPEZ MATEOS 1798 NTE JIQUILPAN, AHOME, C.P 81220 - SIN ','25.8010349,-108.9870832','Lunes-Domingo   8:00am-8:00pm','812 9294','Pescados y Mariscos','Mariscada Fria ']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Sushiko','Plaza Campanario, Heriberto valdez 1300','25.803299606801428,-108.9994490146637','Lunes a Viernes de 00:00 a 12:00 Sábados de 00:00 a 12:00     Domingos de 00:00 a 12:00','8182043','Cocina Japonesa','Kobe Roll, Onigiri, Yakimeshi Tokio, Mango Roll']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Sushi Arao','Sushi Arao Plaza Encuentro','27.080116,-109.4626709','Martes - Jueves 1:00 a 11:30 pm Viernes - Sábado 1:00 pm a 12:00 am Domingo 1:00 a 10:00 pm.   ','8150745','Comida Japonesa','Sushis']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Sushi House','H Valdez Pte 844, 81240 ','25.7999682,-108.9940154','lunes a domingo 1-11 pm ','817 2533','Comida Japonesa','Sushis']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','El Leñador','Antonio Rosales y Blvd. Conferano 985 sin 81200, plaza punto Mochis, Ahome, Sin','25.91194,-109.1735','Lunes-Domingo 12:00pm 11:00pm ','817 3322','Carnes y cortes finos','Cocina Mexicana']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Cazadores Steak´s','Lázaro Cárdenas #317','25.913922,-109.1595662','Lunes a Domingo de 12: 30 pm- 12:00 am','812 8695','Carnes y cortes finos','Cocina Mexicana']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Tacos Bachomo','Heriberto Valdez #1651, esq. Con Isla Magdalena, Fracc. Cuauhtécmoc','25.91194,-109.1735','Abierto de 12:00pm a 1:00am','812 2221','Tacos de al pastor y de carne asada.','Ensaladas y órdenes de Cabreria, costillita BBQ, alambre. ']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Tacos Rosales','Boulevard A. Rosales 228, Primer Cuadro, 81200 Ahome, Sinaloa','25.7911099,-108.9995277','Lunes-Domingo 7:00am-3:00pm','8 818 2952','Tacos de carne adobada','Tacos']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Palacio Chino ','Rosales 330, 81200 Los Mochis, Sinaloa ','25.7922942,-108.9989591','Lunes a Viernes de 00:00 a 23:00 Sábados de 00:00 a 23:00  Domingos de 00:00 a 23:00','818-14-19','Cocina China','Comida cantonesa']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Restaurante Cantón','Bienestar 38 OTE.','25.8133682,-97.5090628','Lunes- 11:30-9:00 Miércoles- Domingo 11:30-9:00','-','Cocina China ','Comida cantonesa']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','D´Giovanni','ZARAGOZA 1970LAS FUENTES, AHOME, C.P 81223 - SIN ','25.8074481,-108.9803431','Martes-Sábado    12:30pm- 11:00pm y Domingos 12:30-10:00pm','812 0066','Cocina Italiana','Ensaladas y Vinos']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','La Tratoria','Heriberto Valdez 1300 CP81240','25.803187,-108.9991597','Lunes-Jueves 16:00-0:00 Viernes-Domingo 13:00-0:00','818 2043','Cocina Italiana','Ensaladas y vinos']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Papizzas','Blvd. Rosales esq. Blvd. Centenario, Plaza Punto Los Mochis','25.7828744,-109.0036054','','815 9070','Cocina Italiana','Pappizzas']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Chopped','Plaza encuentro, Col. Centro','','Lunes-Domingo 10:00am-12:00pm','818 0007','Cocina Saludable','Paninis y Ensaladas']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Todo Natural','Blvd. Rosales casi esq. Con Centenario. Sucursal Plaza Encuentro','27.080116,-109.4626709','Lunes-Sábado de 7:00hrs.- 16:00 hrs. ','812 0422','Cocina Saludable','Desayunos, paninis y licuados']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Citrik','Av. Licenciado Benito Juárez #210 CP 81200','25.7929096,-108.9888537','Lunes-Domingo 7:00-22:00','668 165 6227','Cocina Saludable','Paninis y Ensaladas']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','La Purisima &Juice Bar','Obregon #1112 pte.','25.7988391,-108.9986992','Lunes-Domingo 6:30am-4:00pm','812 3890','Cocina Saludable','Paninis, Ensaladas y Licuados']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Alsano','','','','818 1801','Cocina Saludable','Paninis y Ensaladas']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Jarros & Tarros','','','','','','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Cafetria','','','','','Cafetería','Ensaladas, Paninis, Postres']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Sucre','Av. Alvaro Obregon #1432A cp 81200','25.7929096,-108.9888537','Lunes-Viernes   8:00am-12:30pm y 4:30pm-11:00pm  Sabado-Domingo de 9:00am-1:00pm','812 4265','Cafetería','Ensaladas, Paninis, Postres']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Emilio´s ',' Licenciado Benito Juárez, Centro, 81200 Los Mochis, Sinaloa','25.7886554,-108.9895772','','165 3695','Cafetería','Ensaladas, Paninis, Postres']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Oasis Café','Gabriel Leyva #65 Sur, cp 81200','25.7929096,-108.9888537','','812 1853','Antojitos Locales','Pay de queso, uvolas, empanadas']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Raspados de Doña Licha','Sucursal Centro: Allende y Juarez cp 81223 Sucursal Scally: Blvd. Jiquilpan entre Blvd. Rio Fuerte y Rio Sinaloa','Sucursal Centro: 25.8046675,-108.9754812 Sucursal Scally: 25.8015382,-108.9953277',' 12:00pm-9:00pm','815 5225','Antojitos Locales','Raspados']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Tosti House','Blvd. Rosales #192 Sur ','24.7907765,-107.3999378','Lunes-Domingo 12:00pm-10:0pm','(668) 3 95  37 45','Antojitos Locales','Papas preparadas, elotes etc.']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Nieve del Tio Sam','Avenida Morelos y Guerrero #602 Col.:Centro C. P.: 81200','25.7931279,-108.9953112','Lunes-Viernes 10:00am-11:00pm','812 4994','Antojitos Locales','Nieve de Garrafa']);
//choix español
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','RESTAURANT “DON JACOBO”','Carretera Choix- El Fuerte, Km 1, Choix Sin.','26.700396,-108.3315','8:OO AM- 3:00 PM','(698) 1 07 07 95','filete montado','Mariscos y carnes']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','MARISCOS “LA PALMA”','Carretera Choix- El Fuerte a 300 m de la entrada, Choix Sin','26.707858,-108.328886','9.00 AM - 4:00 PM','(698) 86 6 07 59','Molcajete','Mariscos y carnes']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','MARISCOS AZUL','Calle: Elias Calle y 5 de febrero, Col Conchas, Choix Sin','26.706442,-108.32906','9.00 AM - 4:00 PM','(698) 8 60 19 60','Mariscada, Filete relleno y Filete montado.','Mariscos y carnes']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','MARISCOS “EL MOJINO”','Obregón # 32, Col Centro Choix Sin','26.711295,-108.323196','9.00 AM - 4:00 PM','(698) 1 02 29 33','filete montado','Mariscos Frios y calientes']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','POLLOS “EL CHUY I”','Vicente Guerrero y Álvaro Obregón frente a Banamex','26.708542,-108.329358','8:00 AM- 6:00 PM','(698) 86 6 03 24','Pollo y Carne asada','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','MARISCOS “RAFA I”','Vicente Guerrero e Ignacio Allende Col Centro, Choix Sin','26.708708,-108.326026','8:00 AM - 3:00 PM','(698) 8 89 13 28','Mariscada y campechana','Mariscos Frios']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','MARISCOS “DON JOEL II”','Blvd Vicente Guerrero S/N Col, Centro, Choix Sin','26.708728,-108.327893','9:00 AM- 5:00 PM','(698) 1 03 33 01','mariscos fríos','Campechana']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','BIRRIERIA PAULITA','Calle Rosales No. 8','26.708225,-108.323371','8:00 AM - 2:00 PM','(698) 104 24 49','lengua guisada','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','BIRRIERIA CABRITOS TATEMADOS','Colonia Centro entre Rosales y Guerrero','26.708606,-108.323062','8:00 AM - 2:00 PM','(698) 107 38 56','cabrito tatemado','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','PAPAS Y TORTAS','Calle Francisco R Serrano','26.709103,-108.323139','8:00 PM - 8:00 PM','(698) 107 05 81','tortas y hamburguesas','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','BIRRIERIA ALEX ','Vicente Guerrero','26.708724,-108.323306','8:00 AM - 2:00 PM','','birria, cabeza y barbacoa','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','BIRRIA DOÑA MARÍA','Francisco I Madero, frente a primaria 20 de Noviembre','26.708897,-108.325069','8:00 AM - 2:00 PM','','birria y cabeza','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','MARISCOS CHEBETO’S','Francisco I Madero S/N','26.70904,-108.325076','8:OO AM- 3:00 PM','(698) 108 58 27','chicharrones de lobina','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G07E','MARISCOS “EL CONEJO”','Blvd. José Ángel Espinoza Ferrusquilla, Choix, Sin','26.703088,-108.329772','8:OO AM- 3:00 PM','(698) 109 11 88','Ceviche de pescado','']);
//guasave español
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restaurant el Faro de Guasave','Blvd. 20 de Noviembre s/n Col. San Francisco C.P. 81014','25.587001,-108.469945','10:00 AM a 7:00 PM','tel: 687 8715635 cel: 687133121','Salmón salsa agave',' Mariscada fria']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restaurant de Mariscos la Bahía de Miguel','Dirección.-  Ave. Vicente Guerrero no. 292 col. centro ','25.563891,-108.464604','9:00 AM a 7:00 PM','Tel.- 687 87 12898','Camarones a La Miguelito','Parrillada Bahia']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','El Granero Restaurante (Hotel El Sembrador)','Dirección: Emiliano Zapata S/N C.P. 81000','25.563407,-108.464647','8:00 AM a 8:00 PM','Tel: (687)87 1 83 00 / (687) 183 09','Camarones al Granero ','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restaurante La Campiña ','Blvd. Central  No. 182','25.569398,-108.466879','9:00 AM a 7:00 PM','Tel. 01(687)87-2-81-71','Filete Migñon la Campiña','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restaurant Finca Don Lencho  ','Dirección: Km 2 Carretera a Nio Guasave Sinaloa','25.586459,-108.427927','9:00 AM a 7:00 PM','Tel:01(687) 87 1 44 44','Codorniz y carne de venado ','Tilapia empapelada']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restaurante Escolleras','Blvd. Tiburon  S/N Boca del Río Guasave','25.284544,-108.49526 ','9:00 AM a 6:00 PM','Tel: 01 (687) 87  76033','Tostada Especial','']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restaurante el Gabacho','Blvd. Tiburon  S/N Playa Las Glorias Guasave ','25.291228,-108.508177','9:00 AM a 6:00 PM','Tel: 01 (687) 121 07 33','Pescado Frito Especial ','filete especial']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restante el Profe ','Blvd. Tiburon  S/N Playa Las Glorias Guasave ','25.29118,-108.508049','9:00 AM a 6:00 PM','Tel: 01 (687) 110 9340','Filete al horno  ','Camarones Zarandeados']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restaurante Palomas Mar ','Av. Del Mar   S/N Playa Las Glorias ','25.291665,-108.515376','9:00 AM a 6:00 PM','Tel: 01 (687) 136 4279','Camarones palomas ','Filete Helpy']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Restaurante Mr. Moro','Blvd. Tiburon  S/N Playa Las Glorias Guasave ','25.296922,-108.524549','9:00 AM a 6:00 PM','Tel: 01 (687) 857 9969','Migñon de camaron ','Camarones rellenos']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)', ['G11E','Mar de Cortez','Av. Del Mar   S/N Playa Las Glorias ','25.291587,-108.515269','9:00 AM a 6:00 PM','Tel:01 (687) 129 7454','Chicharrones de Botete ','Pescado zarandeados']);
//fin gastronomia
////diversion
//ahome español
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Cerro de la memoria','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.80664998110525,-108.96858215332031','Hace poco tiempo la fe católica llevó a la cima del cerro una gigantesca estatua de la Virgen del Valle, quien es visitada constantemente por los creyentes.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Puerto de Topolobampo','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.599384035660474,-109.05303955078125','Topolobampo es una gran bahía formada por muchas ensenadas, islas y esteros, todas bañadas por el Mar de Cortés. Fue fundado en 1886 por el Americano, Albert K. Owen. Aquí podrás empezar tu recorrido turístico a bordo de lanchas dirigidas por locales.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Isla El Farallon','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.43579246205943,-109.37679290771484','Es una saliente rocosa marina, la 2a. más grande del mundo en su género, se encuentra incrustada en medio del Mar de Cortés, es considerada como patrimonio de la humanidad. Se le reconoce como un santuario y hábitat natural para cientos de focas y lobos marinos que se albergan durante los meses de octubre a abril, además de delfines y toninas que permanecen todo el año.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Isla de Pajaros','','','Sr. Guadalupe  Elguezebal: 6681 015185','25.618888581489173,-109.0121841430664','Se localiza en las inmediaciones de la bahía de Topolobampo; en esta isla viven diferentes especies de patos, garzas, pelícanos y otras aves.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','El Pechocho','','','Sr. Guadalupe  Elguezebal: 6681 015185','25.519340841755884,-109.0616226196289','El Pechocho es un delfín muy amistoso que después de quedar solo en el refugio natural entre esteros y manglares de la Bahía de Ohuira cerca de Topolobampo al norte del estado de Sinaloa.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','El Maviri','','','Sr. Guadalupe  Elguezebal: 6681 015185','25.579587280591976,-109.11603927612305','La isla del Cerro del Maviri tiene más de dos kilómetros de litoral, se conecta por un puente con la carretera escénica que viene de Topolobampo. Es un mirador natural para admirar el Mar de Cortés, el extraordinario paisaje de la Bahía de Topolobampo y su fondo de montañas.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Cueva de los Murcielagos','','','Sinaloa Tours : 8184993<br/>SoleiTours: 8122005 ','25.599492402566405,-109.09286499023438','Santuario Natural donde se puede apreciar una espectacular salida de miles de murciélagos de la cueva por la tarde-noche rumbo a los sitios de alimentación. La cueva se encuentra ubicada en una isla que esta unida a la playa de El Maviri por un puente carretero, a su vez se une por una carretera a Topolobampo y Los Mochis.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Centro Ecoturistico El Muellecito','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.599404676758496,-108.97012710571289','Cuenta con el servicio de cabañas equipadas con energía eléctrica y alternativa (solar), así como un restaurante y el servicio de acceso terrestre y por agua deleitando a los visitantes con platillos tradicionales']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Centro Ecoturistico El Tupchi','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.565473126155176,-108.85695934295654','Está en un lugar único dentro del territorio indígena Mayo ubicado en la comunidad  del ejido Carrizo Grande en el municipio de Ahome Sinaloa. Cuenta con los servicios de hospedaje y alimentación así como diferentes actividades que se desarrollan en el entorno de la naturaleza.']);
//ahome ingles
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','Cerro de la memoria','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.80664998110525,-108.96858215332031','Not long ago the Catholic faith led to the top of the hill a giant statue of the Virgen del Valle, who is constantly visited by believers.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','Port Of Topolobampo','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.599384035660474,-109.05303955078125','Topolobampo is a large bay formed by many inlets, islands and estuaries, all bathed in the Sea of Cortez. It was founded in 1886 by American, Albert K. Owen. Here you can start your tour in boats run by local.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','Farallon Island','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.43579246205943,-109.37679290771484','It is a marine rocky ledge, the 2nd. world´s largest of its kind, is embedded in the middle of the Sea of Cortez, is considered World Heritage. He is recognized as a sanctuary and habitat for hundreds of seals and sea lions are housed during the months of October to April, as well as dolphins and porpoises that remain all year.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','Bird Island','','','Sr. Guadalupe  Elguezebal: 6681 015185','25.618888581489173,-109.0121841430664','It is located in the vicinity of the Bay of Topolobampo, on this island live different species of ducks, herons, pelicans and other birds.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','The Pechocho dolphin','','','Sr. Guadalupe  Elguezebal: 6681 015185','25.519340841755884,-109.0616226196289','The Pechocho is a very friendly dolphin. After being left alone in the natural refuge among mangrove swamps of Ohuira Bay north near to Topolobampo Sinaloa.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','El Maviri Island','','','Sr. Guadalupe  Elguezebal: 6681 015185','25.579587280591976,-109.11603927612305','The island Maviri Hill has more than two miles of shoreline, is connected by bridge to the scenic road that comes from Topolobampo. It is a natural viewpoint to admire the Sea of ??Cortez, the extraordinary scenery of the Bay of Topolobampo and mountain backdrop.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','Bat Cave','','','Sinaloa Tours : 8184993<br/>SoleiTours: 8122005 ','25.599492402566405,-109.09286499023438','Natural sanctuary where you can enjoy a spectacular departure of thousands of bats in the cave for the evening towards feeding sites. The cave is located on an island that is attached to the beach of El Maviri by a road bridge in turn is connected by a road to Topolobampo and Los Mochis.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','El Muellecito Ecotourism Lodges','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.599404676758496,-108.97012710571289','Service has cabins equipped with electric and alternative energy (solar) as well as a restaurant and the service road and water access. Delighting the visitors with traditional dishes.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01I','El Tupchi Ecotourism Lodges','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.565473126155176,-108.85695934295654','It is a unique place within the Indian territory Mayo located in the community of Carrizo Large ejido in the municipality of Ahome Sinaloa.It offers services such as accommodation, food and different activities taking place in the environment of nature.']);

//choix español
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07E','La bajada de los boteros','Lunes a Domingo 8:00 am-6:00 pm.','A 150 km de la Plazuela Municipal','Dirección de turismo:  01 698 86 6 0112','26.7078,-108.320307','Los Boteros eran jóvenes que cargaban botes de agua en burros recorrían a diario toda la urbanidad de la Villa de Choix y algunos de sus barrios, proveyendo a los vecinos del agua para beber, cocinar y regar, pues para tanto servía el vital liquido que estos jóvenes llevaban desde el rio, directamente a la vecindad.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07E','Presa Luis Donaldo Colosio','Lunes a Viernes de 9:00 am- 4:00 pm','A 17 km de la cabecera municipal ','CFE, EL FUERTE: 01 698 893 11 81','26.844276,-108.368914','La construcción de la Presa “Luis Donaldo Colosio” (Huites) representa un importante atractivo  turístico para nacionales y extranjeros que gusten de la pesca deportiva entre otras actividades.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07E','Juibaca','Lunes a Domingo 8:00 am-6:00 pm.','A 300 metros del puente “Huites” ','Dirección de turismo:  01 698 86 6 0112',' 26.832680°,-108.375187°','Las albercas de aguas termales, en Agua Caliente de Baca, a un lado de la estación de ferrocarril de la ruta chihuahua-Pacifico, dan la bienvenida a los visitantes nacionales y extranjeros.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07E','Baca','SEMANA SANTA, DIA DE SAN MIGUEL ARCANGEL, EL 27 Y 28 DE  DE SEPTIEMBRE..','A 15 Kilometros de la Cabecera Municipal','Dirección de turismo:  01 698 86 6 0112','26.797114,-108.449137','Esta comunidad cuenta con un centro ceremonial de gran importancia,  aquí las fiestas tradicionales son: el día de San Miguel y Semana Santa.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07E','Agua caliente de Baca','LUNES A DOMINGO LAS 24 HORAS ','A un lado de la estación de ferrocarril de la ruta chihuahua-Pacifico.','Orlando León Cel: 6981040542','26.803674,-108.428974','En las comunidades de Aguacaliente de Baca y Aguacaliente Grande, se encuentran veneros de Aguas Termales retenidas en diques o represas para que las personas que deseen sumergirse y recrearse en ellas lo hagan.']);
//choix ingles
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07I','The Descent of the Boteros','Lunes a Domingo 8:00 am-6:00 pm.','A 150 km de la Plazuela Municipal','Dirección de turismo:  01 698 86 6 0112','26.7078,-108.320307','The Boteros were young mans who carried water bottles daily to all the civility of the town of Choix and some neighborhoods, providing residents of water for drinking, cooking and showering, because for the vital liquid served both these young men carried from the river, directly to the neighborhood.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07I','Dam Luis Donaldo Colosio (Huites).','Lunes a Viernes de 9:00 am- 4:00 pm','A 17 km de la cabecera municipal ','CFE, EL FUERTE: 01 698 893 11 81','26.844276,-108.368914','The construction of the dam "Luis Donaldo Colosio" (Huites) is a major attraction for locals and foreigners who enjoy sport fishing and other activities.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07I','Juibaca','Lunes a Domingo 8:00 am-6:00 pm.','A 300 metros del puente “Huites” ','Dirección de turismo:  01 698 86 6 0112',' 26.832680°,-108.375187°','The hot spring pools at Agua Caliente de Baca, next to the railway station of the Chihuahua-Pacific route, are the perfect welcome the locals and foreign visitors.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07I','Baca','SEMANA SANTA, DIA DE SAN MIGUEL ARCANGEL, EL 27 Y 28 DE  DE SEPTIEMBRE..','A 15 Kilometros de la Cabecera Municipal','Dirección de turismo:  01 698 86 6 0112','26.797114,-108.449137','This community has a very important ceremonial center, traditional festivals here are the day of St.Mike and holy week.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D07I','Hot water Caliente de Baca ','LUNES A DOMINGO LAS 24 HORAS ','A un lado de la estación de ferrocarril de la ruta chihuahua-Pacifico.','Orlando León Cel: 6981040542','26.803674,-108.428974','In Aguacaliente communities and Aguacaliente Baca Grande, are springs of Hot Springs in dikes or dams retained for people who want to immerse and indulge in them do so.']);

//guasave español
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11E','Playa Las Glorias ','N/A','Carretera Guasave-Las Glorias, a 40 Km de la ciudad de Guasave ','Dirección de Turismo: (687) 87 2 92 34','25.295264,-108.512821','Ubicada frente al Golfo de California a 40 km de la cabecera municipal, donde podrá disfrutar de las hermosas aguas, tranquilas y limpias.  Aquí podrá degustar el tradicional y famoso pescado zarandeado que es la especialidad de la región. Cuenta con los servicios de agua potable, energía eléctrica y acceso por carretera, restaurantes y hotel']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11E','Tamazula','De Martes a domingo 9:00 a 12:00 y de 3:00 a 6:00','Tamazula, Guasave, Sinaloa, a 20 Km de la Ciudad de Guasave','','25.447692,-108.451924','Es cabecera de la Sindicatura del mismo nombre, pueblo explorado por los españoles en 1532 al mando de Diego Hurtado de Mendoza. Tamazula es un vocablo de origen Nahoa cuyo topónimo significa “Lugar Abundante de Sapos”. Fue fundado por Tribus Mayos y Yaquis en una época no determinada de la era prehispánica.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11E','Bahia de Navachiste','N/A','Salidas a la Bahía, desde Campo pesquero el Huitussi y Campo pesquero el Cerro Cabezón, Guasave.','','25.513939, -108.801212','Es una extensión de numerosas islas entre las que destaca la Isla del Carrizo o “Navachiste”, corazón del Festival Interamericano de Poetas, que se realiza cada año en semana santa. Puedes realizar diferentes excursiones  a las montañas, así como exploración de cuevas. Descifrar petroglifos, recolectar almejas y admirar la belleza del paisaje desde sus montañas.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11E','Isla de los Pajaros','N/A','Salida de La Pitahaya Guasave Sinaloa ','','25.386837,-108.725395','La Isla de Los Pájaros, es un santuario de diferentes especies de aves como pelícanos, espátulas rosadas, gaviotas, águilas pescadoras, cormoranes, águilas caracara, martín pescador, ibis blanco y negro.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11E','Reserva Ecologica la Uba','Lunes a domingo 9:00 a 18:00 Hrs','Carretera Guasavito-Casablanca, Guasave ','','25.498814,-108.453187','Se localiza en la sindicatura de El Burrión, es un área que ha quedado fuera del aprovechamiento agrícola, teniendo a la fecha, representantes florísticos y faunísticos silvestres que no se encuentran en sus alrededores y que requieren su protección, conservación y desarrollo, que además de ser atractivo paisajístico puede ser de apoyo en actividades culturales y de investigación.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11E','Laguna Uyaqui','N/A','Valle de Huyaqui Guasave Sinaloa','','25.392575,-108.333921','En los alrededores de Guasave se encuentran dos lagunas: Uyqui y Chamicari, aunque por el albergue con que cuenta, Uyaqui es más visitada. Ésta laguna destaca por su promoción del turismo cinegético, ya que se practica la cacería de pato y otras especies, además de la pesca deportiva, pudiendo capturar mojarra y lobina.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11E','Rivera del Río Sinaloa','N/A','Malecon de Guasave','','25.56964,-108.457761','También resulta atractivo recorrer la ribera del río Sinaloa o Petatlán pues se puede apreciar de esta forma el paisaje natural.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11E','Cultivo de ostión - La Pitahaya','Lunes a sábado -  9:00 a 18:00 Hrs','Salida de La Pitahaya Guasave Sinaloa ','','25.386837,-108.725395','Breve plática sobre los moluscos bivalbos en general, recorrido para conocer la granja de ostión y el proceso del cultivo del ostión, posteriormente una degustación.']);
//guasave ingles
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11I','Playa Las Glorias ','N/A','Carretera Guasave-Las Glorias, a 40 Km de la ciudad de Guasave ','Dirección de Turismo: (687) 87 2 92 34','25.295264,-108.512821','Located on the Gulf of California at 40 km from the county seat, where you can enjoy the beautiful waters, quiet and clean. Here you can taste the traditional and famous grilled fish is the specialty of the region. It has potable water services, electricity and road access, restaurants and hotel.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11I','Tamazula','De Martes a domingo 9:00 a 12:00 y de 3:00 a 6:00','Tamazula, Guasave, Sinaloa, a 20 Km de la Ciudad de Guasave','','25.447692,-108.451924','Is head of the Syndicate of the same name, village explored by the Spanish in 1532 under the command of Diego Hurtado de Mendoza. Tamazula is a word whose origin Nahoa toponym means "Abundant Toads Place". It was founded by Tribes Mayos and Yaquis at a time determined not pre-Hispanic era.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11I','Bay Navachiste','N/A','Salidas a la Bahía, desde Campo pesquero el Huitussi y Campo pesquero el Cerro Cabezón, Guasave.','','25.513939, -108.801212','It is an extension of many islands among which Reed Island or "Navachiste" American Heart Poetry Festival, held every year at Easter. You can make different trips to the mountains, and cave exploration. Deciphering petroglyphs, collect clams and admire the beauty of the landscape from the mountains.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11I','Bird Island','N/A','Salida de La Pitahaya Guasave Sinaloa ','','25.386837,-108.725395','The Birds Island is a sanctuary for different species of birds like pelicans, roseate spoonbills, gulls, ospreys, cormorants, eagles caracara, kingfisher, white ibis and black.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11I','Ecological Reserve Uba','Lunes a domingo 9:00 a 18:00 Hrs','Carretera Guasavito-Casablanca, Guasave ','','25.498814,-108.453187','It is located in the receivership of The Burrión, is an area that has been left out of agricultural use, having to date, representatives wild flora and fauna not found in the surrounding area and that require protection, conservation and development, in addition to be attractive landscape can be supportive in cultural and research activities.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11I','Uyaqui Lagoon','N/A','Valle de Huyaqui Guasave Sinaloa','','25.392575,-108.333921','Guasave around two lagoons are: Uyqui and Chamicare, although the hostel it has, Uyaqui is accessed. This lake is noted for its promotion of hunting tourism, as it is practiced duck hunting and other species, in addition to fishing, can catch crappie and bass. ']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11I','Rivera del Río Sinaloa','N/A','Malecon de Guasave','','25.56964,-108.457761','It is also attractive riverside walk the Sinaloa or Petatlán as can be seen in this way the natural landscape.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D11I','Oyster farmer - La Pitahaya','Lunes a sábado -  9:00 a 18:00 Hrs','Salida de La Pitahaya Guasave Sinaloa ','','25.386837,-108.725395','Small summary about oysters, a tour between the farmer and the process of harverst at the end you can try one!']);

////emergencias
//ahome español
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Cruz Roja','812-6117','Guillermo Prieto 701  Centro, 81200 Los Mochis, Sinaloa','Ahome','25.793587946254974,-108.98969650268555','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Hospital','816 9000','Bouelvard Jiquilpan 639  Sector Fatima, 81700 Los Mochis, Sinaloa','Ahome','25.790419458353274,-108.9858341217041','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Policía','815 6391','Blvd. Centenario y Blvd. Macario Gaxiola ','Ahome','25.768005785430802,-108.99171352386475','<img src="img/fuerte/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Turismo','815 2706','Plaza punto, blvd. Rosales esquina con centenario','Ahome','25.78431666051942,-109.00349378585815','<img src="img/fuerte/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Farmacias','815 7779','Blvd. Rosales esquina con H. Valdez ','Ahome','25.799619431200615,-108.99393439292908','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Taxis','812 1597','Leyva 370 centro, Los Mochis.','Ahome','25.78964664358165,-108.99484634399414','<img src="img/fuerte/ico_emer4.png" />']);
//ahome ingles
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Cruz Roja','812-6117','Guillermo Prieto 701  Centro, 81200 Los Mochis, Sinaloa','Ahome','25.793587946254974,-108.98969650268555','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Hospital','816 9000','Bouelvard Jiquilpan 639  Sector Fatima, 81700 Los Mochis, Sinaloa','Ahome','25.790419458353274,-108.9858341217041','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Policía','815 6391','Blvd. Centenario y Blvd. Macario Gaxiola ','Ahome','25.768005785430802,-108.99171352386475','<img src="img/fuerte/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Turismo','815 2706','Plaza punto, blvd. Rosales esquina con centenario','Ahome','25.78431666051942,-109.00349378585815','<img src="img/fuerte/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Farmacias','815 7779','Blvd. Rosales esquina con H. Valdez ','Ahome','25.799619431200615,-108.99393439292908','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Taxis','812 1597','Leyva 370 centro, Los Mochis.','Ahome','25.78964664358165,-108.99484634399414','<img src="img/fuerte/ico_emer4.png" />']);

//choix español
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Cruz Roja','698 866 0777','CLL 20 DE NOVIEMBRE 80, CHOIX CENTRO','Choix','26.712622,-108.323923','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Hospital','698 866 0015','20 de Noviembre 1  Centro, 81700 Choix, Sinaloa','Choix','26.712837,-108.323482','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Policía','698 866 01 21','Blvd. José Ángel Espinoza Ferrusquilla, Choix, Sin','Choix','26.704561,-108.329392','<img src="img/fuerte/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Turismo','698 8660043','Calle Juarez # 5 col. Centro','Choix','26.706782,-108.321647','<img src="img/fuerte/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Farmacias','698 866 0026','Vicente Guerrero 14 Centro, Choix','Choix','26.708983,-108.32277','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Taxis',' 698 86 6 0112','calle Francisco R. Serrano Col. Centro','Choix','26.708253,-108.323001','<img src="img/fuerte/ico_emer4.png" />']);
//choix ingles
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Cruz Roja','698 866 0777','CLL 20 DE NOVIEMBRE 80, CHOIX CENTRO','Choix','26.712622,-108.323923','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Hospital','698 866 0015','20 de Noviembre 1  Centro, 81700 Choix, Sinaloa','Choix','26.712837,-108.323482','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Policía','698 866 01 21','Blvd. José Ángel Espinoza Ferrusquilla, Choix, Sin','Choix','26.704561,-108.329392','<img src="img/fuerte/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Turismo','698 8660043','Calle Juarez # 5 col. Centro','Choix','26.706782,-108.321647','<img src="img/fuerte/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Farmacias','698 866 0026','Vicente Guerrero 14 Centro, Choix','Choix','26.708983,-108.32277','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Taxis',' 698 86 6 0112','calle Francisco R. Serrano Col. Centro','Choix','26.708253,-108.323001','<img src="img/fuerte/ico_emer4.png" />']);

//guasave español
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Cruz Roja','(687) 872 0423','Avenida Doctor de la Torre y Boulevard Alfonso G. Calderón.','Guasave','25.560489,-108.467245','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Hospital IMSS','(687) 872 0603','Boulevard 16 de Septiembre y Macario Gaxiola','Guasave','25.569572,-108.462578','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Policía','(687) 872 1232','Carretera León Fonseca SN, Ocoro, 81103 Guasave, Sinaloa ?','Guasave','25.588849,-108.461446','<img src="img/fuerte/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Turismo','(687) 872 9234','Av. Lazaro Cárdenas No. 109, Colonia del Bosque','Guasave','25.564796,-108.471118','<img src="img/fuerte/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Taxis','687 872 0309','16 de Septiembre 1038  Centro, 81000 Guasave, Sinaloa','Guasave','25.577479,-108.463597','<img src="img/fuerte/ico_emer4.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Bomberos ','687 872-0422','Francisco González Bocanegra y López Mateos, colonia Ángel Flores, C.P. 81000','Guasave','25.560416,-108.467857','<img src="img/fuerte/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Policía Municipal de Tránsito','(687) 872 1818','Adolfo López Mateos y F. Ángeles','Guasave','25.565091,-108.471365','<img src="img/fuerte/ico_emer2.png" />']);
//guasave ingles
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Cruz Roja','(687) 872 0423','Avenida Doctor de la Torre y Boulevard Alfonso G. Calderón.','Guasave','25.560489,-108.467245','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Hospital IMSS','(687) 872 0603','Boulevard 16 de Septiembre y Macario Gaxiola','Guasave','25.569572,-108.462578','<img src="img/fuerte/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Policía','(687) 872 1232','Carretera León Fonseca SN, Ocoro, 81103 Guasave, Sinaloa ?','Guasave','25.588849,-108.461446','<img src="img/fuerte/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Turismo','(687) 872 9234','Av. Lazaro Cárdenas No. 109, Colonia del Bosque','Guasave','25.564796,-108.471118','<img src="img/fuerte/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Taxis','687 872 0309','16 de Septiembre 1038  Centro, 81000 Guasave, Sinaloa','Guasave','25.577479,-108.463597','<img src="img/fuerte/ico_emer4.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Bomberos ','687 872-0422','Francisco González Bocanegra y López Mateos, colonia Ángel Flores, C.P. 81000','Guasave','25.560416,-108.467857','<img src="img/fuerte/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Policía Municipal de Tránsito','(687) 872 1818','Adolfo López Mateos y F. Ángeles','Guasave','25.565091,-108.471365','<img src="img/fuerte/ico_emer2.png" />']);




//tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas) VALUES(?,?,?)',[]);


}
var clave;
function loadclave(clv,clvcl){
    clave=clv;
    console.log(clvcl);
    if (online=='1'){
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM clima where clave=?',[clvcl],showclima);
    });
    }
}
function showclima(tx, results){
    var len = results.rows.length;
    console.log('mostrar '+len);
    for (var i=0; i<len; i++){
    $('#fiel').html(results.rows.item(i).iframe+"<br>"+results.rows.item(i).js).show();
}
}
//gastronomia
function loadgastronomia(){
    console.log(clave);
    var clavegastronomia="G"+clave;
     console.log(clavegastronomia);
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM gastronomia where clave=?',[clavegastronomia],showgastronomia);
    });
}
function showgastronomia(tx, results){
    var len = results.rows.length;
    console.log(len);
    $('#contgas').html('');
        for (var i=0; i<len; i++){
            $('#contgas').append("<div data-role='collapsible'><h3 ><span style='left: -30px;' data-icon='star' data-role='button' data-theme='b'></span><span>"+results.rows.item(i).restaurante+"</span></h3><ul style='padding: 0;font-size: small;'><li style='background:url(img/fuerte/especialidad.png) no-repeat 50%,#E97A61 ;background-size: 100%; text-align: center;color: #FFF;padding: 2px;'><h1>Especialidad:</h1><h2>"+results.rows.item(i).especialidad+"</h2></li><li style='margin-left: 10%;'><p style='margin: 1.5em 5px .6em;'>Direcci&oacute;n: <b>"+results.rows.item(i).direccion+"</b></p><p style='margin: 0.5em 0 .6em;'>Tel&eacute;fono: <b>"+results.rows.item(i).telefono+"</b></p></li></ul></div>");
        //uid=results.rows.item(i).clave;          
        }
        $("#contgas").collapsibleset( "refresh" );
}

//diversion
function loaddiversion(){
    var clavediversion="D"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM diversion where clave=?',[clavediversion],showdiversion);
    }); 
}

function showdiversion(tx, results){
    var len = results.rows.length;
    console.log(len);
    var inf;
    var info=clave.split("");
    if (info[2]=='I'){inf="Information";}else if(info[2]=='E'){inf="Información";}
    $('#contdiv').html('');
        for (var i=0; i<len; i++){
           $('#contdiv').append("<div data-role='collapsible'><h3>"+results.rows.item(i).actividad+"</h3><p>"+results.rows.item(i).descripcion+"</p><p>"+inf+":<br/><strong>"+results.rows.item(i).contactos+"</strong> </p></div>")         
        }
        $("#contdiv").collapsibleset( "refresh" );
}
//emergencia
function loademergencia(){
    var claveemergencia="E"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM emergencia where clave=?',[claveemergencia],showemergencia);
    }); 
}

function showemergencia(tx, results){
    var len = results.rows.length;
    console.log(len+'emergencia');
    $('#conteme').html('');
        for (var i=0; i<len; i++){
          $('#conteme').append("<li>"+results.rows.item(i).img+"<h1 style='margin-top: -10px;'>"+results.rows.item(i).servicio+"</h1><p>"+results.rows.item(i).domicilio+"<br />Tel: <b>"+results.rows.item(i).telefono+"</b></p></li>");
        }
        $("#conteme").listview('refresh');
}
