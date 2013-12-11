    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
	//	navigator.splashscreen.hide();         
		//document.addEventListener("offline", onOffline, false);    
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(populateDB);
        checkConnection();
        
 }



 var online;
 function checkConnection() {
        var networkState = navigator.network.connection.type;
        var states = {};
    states[Connection.UNKNOWN]  = '1';
    states[Connection.ETHERNET] = '1';
    states[Connection.WIFI]     = '1';
    states[Connection.CELL_2G]  = '1';
    states[Connection.CELL_3G]  = '1';
    states[Connection.CELL_4G]  = '1';
    states[Connection.NONE]     = '0';
    online=states[networkState];
    if (online=='0'){showAlert();}
    }
        
function showAlert() {
    navigator.notification.alert(
    'Algunas caracteristicas no estaran disponibles',     // mensaje (message)
    'Sin internet',            // titulo (title)
    'Cerrar'                // nombre del botón (buttonName)
    );
    }


function transaction_error(tx, error) {
    alert("Database Error: " + error);
}
function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS clima');
	tx.executeSql('DROP TABLE IF EXISTS gastronomia');
    tx.executeSql('DROP TABLE IF EXISTS diversion');
    tx.executeSql('DROP TABLE IF EXISTS emergencia');
    tx.executeSql('DROP TABLE IF EXISTS historicos');
    tx.executeSql('DROP TABLE IF EXISTS undia');
    tx.executeSql('CREATE TABLE IF NOT EXISTS clima(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,iframe,js)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS gastronomia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS diversion(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,actividad,horario,direccion,contactos,coordenadas,descripcion)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS emergencia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,servicio,telefono,domicilio,municipio,coordenadas,img)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS historicos(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,lugar,horario,direccion,coordenadas,descripcion,imagen)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS undia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,hora,actividad)');
    
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

//cosala español
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G05E','"El pueblito restaurante"','Gabriel Leyva y Rosales S/N Centro, Cosalá','24.411663141420927,-106.69067322869722','7 am - 10 pm','(696)102-21-51','Asado a la plaza','Gorditas con asientos, enchiladas, tostadas, pollo en salsa de chabacano.']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G05E','El Merendero ','Arteaga No. 5 Cosalá, Sinaloa ','24.410769213149777,-106.69235229154054','7 am - 10 pm','(696) 965-02-36','Camarones al Merendero','Asado, costillitas de puerco en chile colorado, pollo en jugo de verduras, mole.']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G05E','La Finca ','Calle 5 de Mayo Esq. Con Belisario Dominguez Col. Centro, Cosalá','24.41257171776732,-106.69023871083681','8 am - 10 pm','(696)96-5-09-76','Combinación La finca (chorizo, chilaquiles, tamal de elote y frijoles)','Asado, mole, chorizo, chilorio, salpicon, barbacoa.']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G05E','Quinta Minera ','Miguel Hidalgo y Costilla 92  Cosala, 80700 Cosalá, Sinaloa','24.41133585694141,-106.69182657857363','8am - 10 pm','01 696 965 0222','Costillitas de puerco con nopales','Cazuela, menudo, gorditas, tostadas, tacos dorados.']);
//cosala ingles
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G05I','"El pueblito restaurante"','Gabriel Leyva y Rosales S/N Centro, Cosalá','24.411663141420927,-106.69067322869722','8am - 10 pm','(696)102-21-51','Asado a la plaza','Gorditas with asientos, chiken with appricot sauce, meat tostadas ']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G05I','El Merendero ','Arteaga No. 5 Cosalá, Sinaloa ','24.410769213149777,-106.69235229154054','8am - 10 pm','(696) 965-02-36','Merendero shrimps ','Asado,pork ribs in red chili, chiken in fruit juice, mole.']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G05I','La Finca ','Calle 5 de Mayo Esq. Con Belisario Dominguez Col. Centro, Cosalá','24.41257171776732,-106.69023871083681','8am - 10 pm','(696)96-5-09-76',' La finca combination (chorizo, chilaquiles,corn tamal  and beans)','Asado, mole, chorizo, chilorio, salpicon, barbacoa']);
tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G05I','Quinta Minera ','Miguel Hidalgo y Costilla 92  Cosala, 80700 Cosalá, Sinaloa',' 24.41133585694141,-106.69182657857363','8am - 10 pm','01 696 965 0222','Pork ribs with nopales ','Cazuela, menudo, gorditas, tostadas, tacos dorados.']);

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

//cosala español
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05E','Museo de minería e historia','9am- 7 pm','Gabriel Leyva S/N col. Centro','Imelda : 6969651119','24.411891672149235, -106.69166947956546','Conocer el pasado cosalteco ha encontrado la mejor forma en el Museo de Minería e Historia. Este caserón del siglo XVIII ilustra en cinco salas los orígenes y desarrollo histórico del municipio mediante la exhibición de objetos arqueológicos y paleontológicos, así como una interesante colección de pinturas y objetos antiguos.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05E','Reserva ecológica de Nuestra Señora','Miércoles a Domingo de 9 am -5 pm','Mineral de Nuestra Señora de la Candelaria','Yamel Rubio: 6672018719','24.402850588567144, -106.61009430547182  ','La Reserva Ecológica del Mineral de Nuestra Señora presenta un escenario tapizado por árboles de todo tipo, donde han hecho su hábitat definitivo infinidad de aves, mariposas y mamíferos. En la misma zona se localiza un aviario que alberga cerca de 136 especies, entre las que se hallan la guacamaya verde, pitorreales, carpinteros, garzas, aguilillas y muchas más.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05E','Cascadas de Vado Hondo','9am-6 pm','Desviación a 12 km antes de llegar a Cosalá','','24.390914479320593, -106.76329518909915','Balneario esculpido por la naturaleza, un conjunto de tres cascadas escalonadas se ofrece para atravesarlo en una tirolesa de 400 metros que culmina en los puentes colgantes sobre añejos sabinos, tepehuajes e higueras. Está equipado con juegos infantiles, asadores y personal experto en las tirolesas.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05E','Gruta México','Se recomienda ir de día','A 17 kilometros del pueblo','Imelda : 6969651119','24.468773489528317, -106.76638126035158','Las entrañas de la Tierra esconden secretos que son causa de asombro y misterio, y en las Gruta México hallarás la oportunidad de descifrarlos. Distantes del pueblo 17 km por caminos agrestes y paisajes caprichosas.encantadores, en estas frías y enormes cavidades que llegan a alcanzar más de 250 metros de profundidad, observarás enormes estalactitas y múltiples formaciones ']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05E','Charco Azúl','Se recomienda ir de día','A 17 kilometros del pueblo','Imelda : 6969651119','24.468773489528317, -106.76638126035158','Aquí, la cristalina corriente que brota del interior de un cerro, se ha abierto paso hasta desembocar en una pequeña cascada con un bellísimo estanque de agua azul turquesa.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05E','Sindicatura "El Rodeo"','Se recomienda ir en la mañana ','A 5 kilómetros del pueblo','Imelda : 6969651119','24.38404614053341, -106.71082734723512','Destreza manual. En algunas localidades como El Rodeo se han vuelto especialistas en trabajos de talabartería (sillas de montar, cintos, fustes, huaraches) y jarciería (hamacas, morrales, cordeles).']);
//cosala ingles
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05I','Museo de minería e historia','9am- 7 pm','Gabriel Leyva S/N col. Centro','Imelda : 6969651119','24.411891672149235, -106.69166947956546','Set in a large home from the 18th century, this museum’s five rooms exhibit the origins and historical development of the municipality. Learn as you explore the archaeological and paleontological objects on display as well as an interesting collection of paintings and other antique objects.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05I',' Nuestra Señora´s ecological reserve','Wednesday to Sunday  9 am -5 pm','Mineral de Nuestra Señora de la Candelaria','Yamel Rubio: 6672018719','24.402850588567144, -106.61009430547182  ','The Mineral de Nuestra Señora Ecological Reserve is blanketed in trees of all kinds. An endless number of birds, mammals and butterflies have come to call this park home. In the same region you will discover an aviary that houses nearly 136 species, among which we find the green macaw, Imperial Woodpecker, woodpeckers, herons, hawks and many others.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05I','Vado Hondo Falls','9:00 to 18:00 hrs','Deflection 12 km before Cosalá, Sinaloa','','24.390914479320593,-106.76329518909915','This natural wonder is comprised of three staggered waterfalls. Get your adrenaline pumping as you tackle the tirolesa zip-line that crosses the falls 400 meters (1,312 feet) above the ground. You can also find playground equipment, barbecue areas and expert personnel to assist with the zip-lines.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05I','México caves','Reccomended to go before 17:00 hrs ','17 kilometers from town','Imelda : 6969651119','24.468773489528317, -106.76638126035158','In the México Cave, you will have the perfect opportunity to uncover them. Seventeen kilometers (11 miles) of rural roads will bring you to these enormous, chilly chasms that can reach more than 250 meters (820 feet) into the ground. Here, you can admire giant stalactites and many whimsical formations. ']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05I','Charco Azúl','Reccomended to go before 17:00 hrs ','17 kilometers from town','Imelda : 6969651119','24.468773489528317, -106.76638126035158','Another unusual and stunning natural wonder: the Charco Azúl. Here, a crystal-clear stream springs forth from a hill, creating a small waterfall that flows down the hillside and opens up into a breathtaking turquoise blue pool.']);
tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D05I','"El Rodeo"','Reccomended to go in the morning','5 kilometers from town ','Imelda : 6969651119','24.38404614053341, -106.71082734723512','Skilled Hands. In some towns such as El Rodeo, the locals have become specialists in leatherworks (saddles, belts, saddletrees, huarache sandals) and crafts using natural fibers (hammocks, knapsacks, ropes)']);


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
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Cruz Roja','812-6117','Guillermo Prieto 701  Centro, 81200 Los Mochis, Sinaloa','Ahome','25.793587946254974,-108.98969650268555','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Hospital','816 9000','Bouelvard Jiquilpan 639  Sector Fatima, 81700 Los Mochis, Sinaloa','Ahome','25.790419458353274,-108.9858341217041','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Policía','815 6391','Blvd. Centenario y Blvd. Macario Gaxiola ','Ahome','25.768005785430802,-108.99171352386475','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Turismo','815 2706','Plaza punto, blvd. Rosales esquina con centenario','Ahome','25.78431666051942,-109.00349378585815','<img src="img/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Farmacias','815 7779','Blvd. Rosales esquina con H. Valdez ','Ahome','25.799619431200615,-108.99393439292908','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Taxis','812 1597','Leyva 370 centro, Los Mochis.','Ahome','25.78964664358165,-108.99484634399414','<img src="img/ico_emer4.png" />']);
//ahome ingles
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Cruz Roja','812-6117','Guillermo Prieto 701  Centro, 81200 Los Mochis, Sinaloa','Ahome','25.793587946254974,-108.98969650268555','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Hospital','816 9000','Bouelvard Jiquilpan 639  Sector Fatima, 81700 Los Mochis, Sinaloa','Ahome','25.790419458353274,-108.9858341217041','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Policía','815 6391','Blvd. Centenario y Blvd. Macario Gaxiola ','Ahome','25.768005785430802,-108.99171352386475','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Turismo','815 2706','Plaza punto, blvd. Rosales esquina con centenario','Ahome','25.78431666051942,-109.00349378585815','<img src="img/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Farmacias','815 7779','Blvd. Rosales esquina con H. Valdez ','Ahome','25.799619431200615,-108.99393439292908','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01I','Taxis','812 1597','Leyva 370 centro, Los Mochis.','Ahome','25.78964664358165,-108.99484634399414','<img src="img/ico_emer4.png" />']);

//cosala español
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Cruz Roja','01 696 9650318','Carretera Internacional s/n Magisteria','Cosalá','24.410869352970398,-106.69567286630098','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Hospital','01 696 96 5 0111 /0311','Calle Guerrero s/n Col Centro','Cosalá','24.41078060090469,-106.69084176920319','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Policía','01 696 9650 340/060','Rosales s/n Zona Centro','Cosalá','24.41213941209543,-106.69082879682009','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Turismo','01696 965 11 19','Rosales y Gabriel Leyva s/n Zona Centro','Cosalá','24.411809686435234,-106.69169783254091','<img src="img/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Farmacias','16969650827','Gabriel Leyva Solano s/n','Cosalá','24.4115165962365,-106.69256686826174','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Taxis','045 696 108 92 78','Gabriel Leyva Solano s/n','Cosalá','24.411719317029853,-106.69163345952455','<img src="img/ico_emer4.png" />']);
//cosala ingles
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Cruz Roja','01 696 9650318','Carretera Internacional s/n    Magisteria','Cosalá','24.410869352970398,-106.69567286630098','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Hospital','01 696 96 5 0111 /0311','Calle Guerrero s/n Col Centro','Cosalá','24.41078060090469,-106.69084176920319','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Policía','01 696 9650 340/060','Rosales s/n Zona Centro','Cosalá','24.41213941209543,-106.69082879682009','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Turismo','01696 965 11 19','Rosales y Gabriel Leyva s/n Zona Centro','Cosalá','24.411809686435234,-106.69169783254091','<img src="img/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Farmacias','16969650827','Gabriel Leyva Solano s/n','Cosalá','24.4115165962365,-106.69256686826174','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Taxis','045 696 108 92 78','Gabriel Leyva Solano s/n','Cosalá','24.411719317029853,-106.69163345952455','<img src="img/ico_emer4.png" />']);

//choix español
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Cruz Roja','698 866 0777','CLL 20 DE NOVIEMBRE 80, CHOIX CENTRO','Choix','26.712622,-108.323923','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Hospital','698 866 0015','20 de Noviembre 1  Centro, 81700 Choix, Sinaloa','Choix','26.712837,-108.323482','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Policía','698 866 01 21','Blvd. José Ángel Espinoza Ferrusquilla, Choix, Sin','Choix','26.704561,-108.329392','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Turismo','698 8660043','Calle Juarez # 5 col. Centro','Choix','26.706782,-108.321647','<img src="img/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Farmacias','698 866 0026','Vicente Guerrero 14 Centro, Choix','Choix','26.708983,-108.32277','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Taxis',' 698 86 6 0112','calle Francisco R. Serrano Col. Centro','Choix','26.708253,-108.323001','<img src="img/ico_emer4.png" />']);
//choix ingles
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Cruz Roja','698 866 0777','CLL 20 DE NOVIEMBRE 80, CHOIX CENTRO','Choix','26.712622,-108.323923','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Hospital','698 866 0015','20 de Noviembre 1  Centro, 81700 Choix, Sinaloa','Choix','26.712837,-108.323482','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Policía','698 866 01 21','Blvd. José Ángel Espinoza Ferrusquilla, Choix, Sin','Choix','26.704561,-108.329392','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Turismo','698 8660043','Calle Juarez # 5 col. Centro','Choix','26.706782,-108.321647','<img src="img/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Farmacias','698 866 0026','Vicente Guerrero 14 Centro, Choix','Choix','26.708983,-108.32277','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07I','Taxis',' 698 86 6 0112','calle Francisco R. Serrano Col. Centro','Choix','26.708253,-108.323001','<img src="img/ico_emer4.png" />']);

//guasave español
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Cruz Roja','(687) 872 0423','Avenida Doctor de la Torre y Boulevard Alfonso G. Calderón.','Guasave','25.560489,-108.467245','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Hospital IMSS','(687) 872 0603','Boulevard 16 de Septiembre y Macario Gaxiola','Guasave','25.569572,-108.462578','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Policía','(687) 872 1232','Carretera León Fonseca SN, Ocoro, 81103 Guasave, Sinaloa ?','Guasave','25.588849,-108.461446','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Turismo','(687) 872 9234','Av. Lazaro Cárdenas No. 109, Colonia del Bosque','Guasave','25.564796,-108.471118','<img src="img/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Taxis','687 872 0309','16 de Septiembre 1038  Centro, 81000 Guasave, Sinaloa','Guasave','25.577479,-108.463597','<img src="img/ico_emer4.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Bomberos ','687 872-0422','Francisco González Bocanegra y López Mateos, colonia Ángel Flores, C.P. 81000','Guasave','25.560416,-108.467857','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Policía Municipal de Tránsito','(687) 872 1818','Adolfo López Mateos y F. Ángeles','Guasave','25.565091,-108.471365','<img src="img/ico_emer2.png" />']);
//guasave ingles
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Cruz Roja','(687) 872 0423','Avenida Doctor de la Torre y Boulevard Alfonso G. Calderón.','Guasave','25.560489,-108.467245','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Hospital IMSS','(687) 872 0603','Boulevard 16 de Septiembre y Macario Gaxiola','Guasave','25.569572,-108.462578','<img src="img/ico_emer1.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Policía','(687) 872 1232','Carretera León Fonseca SN, Ocoro, 81103 Guasave, Sinaloa ?','Guasave','25.588849,-108.461446','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Turismo','(687) 872 9234','Av. Lazaro Cárdenas No. 109, Colonia del Bosque','Guasave','25.564796,-108.471118','<img src="img/ico_emer3.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Taxis','687 872 0309','16 de Septiembre 1038  Centro, 81000 Guasave, Sinaloa','Guasave','25.577479,-108.463597','<img src="img/ico_emer4.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Bomberos ','687 872-0422','Francisco González Bocanegra y López Mateos, colonia Ángel Flores, C.P. 81000','Guasave','25.560416,-108.467857','<img src="img/ico_emer2.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11I','Policía Municipal de Tránsito','(687) 872 1818','Adolfo López Mateos y F. Ángeles','Guasave','25.565091,-108.471365','<img src="img/ico_emer2.png" />']);

////historicos
//ahome español
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','Jardín Botánico Benjamín F. Johnston ','Lunes a Domingo de 05:00 a 21:00 horas','Rosales sin numero. Col. Americana Los Mochis Sinaloa','25.78837406424281,-109.00188446044922','La apertura de este bello lugar al publico fue el 6 de mayo de 1963, desde entonces cuenta con un magnifico centro de observación, estudio y esparcimiento.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','Iglesia Sagrado Corazón de Jesus ','-','Gral. Alvaro Obregón s/n','25.790344753105945,-108.99885892868042','Construcción de estilo ecléctico semi-clásico, se encuentra ubicada frente a la Plazuela 27 de Septiembre.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','Plazuela 27 de Septiembre','-','Gral. Alvaro Obregón s/n','25.790228831138283,-108.99797916412354','La plazuela cuenta con un kiosco en el centro, donde podemos escuchar grupos de rock y músicos diversos durante los fines de semana. Por su ubicación en el corazón mismo de Los Mochis, es la sede de diversos espectáculos y celebraciones culturales, cívicas y religiosas. ','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','Casa de la Cultura de Conrado Espinoza ','Mar a Sáb 9 a 19 hr, Dom 10 a 13 hr (cierra Lun)','Cerro de la memoria s/n','25.80572272975189,-108.97098541259766','Histórico edificio ubicado al pie del cerro de La Memoria, en La Pérgola, construido bajo la dirección del Profesor Conrado Espinoza, con la ayuda de la ciudadanía integrada en la Sociedad Fomentadora de Instrucción y Educación, y por la United Sugar Company, a fin de fomentar la educación entre la niñez de la región.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','Museo del Valle del Fuerte ','Mar a Sáb 9 a 19 hr, Dom 10 a 13 hr (cierra Lun)','Alvaro Obregón y Antonio Rosales','25.79024815147408,-108.99969577789307','El Museo Regional del Valle del Fuerte inició sus funciones el 3 de marzo de 1990. Fue construida en 1903 por el arquitecto Ascencio López.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','La Casa Azul','Mar a Sáb 9 a 19 hr, Dom 10 a 13 hr (cierra Lun)','Benito Juarez y Carretera Ahome - La Florida','25.92241363730155,-109.17648553848267','Construida por su propietario el Sr. Demetrio Peiro Y Aragón, quien a inicios de 1913 habita la casa y ponen una tienda, a la cual denominan “El Conejo Azul','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','San Miguel Zapotitlán','-','A 15 km de Los Mochis  por la carretera internacional al norte. ','25.947770107019252,-109.05346870422363','Es uno de las mas grandes centros ceremoniales de la comunidad indígena en el Estado de Sinaloa y el más grande en el municipio de Ahome,  San Miguel Zapotitlán es famosa por sus grandes fiestas ceremoniales indígenas, celebradas entre los meses de Marzo y Abril.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','Ahome Pueblo Señorial','-','A 20 Km de Los Mochis por la carretera estatal Los Mochis - Ahome','25.9189880597865,-109.16849255561829','Pueblo Señorial, con una gran historia de más de 400 años, cercano a la Ciudad de Los Mochis, La fundación del poblado de Ahome fue el 15 de agosto de 1605','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','Centro Ceremonial Yoreme','-','A 3 Km de Ahome Pueblo Señorial ','25.931975778964215,-109.19010043144226','El Centro Ceremonial Yoreme se encuentra ubicado en el poblado la Florida, el centro Ceremonial es muy famoso en época de Cuaresma, donde cada viernes se reúnen un grupo de judíos,  para representar la pasión y muerte de Jesucristo','imagen']);
//ahome ingles
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','Benjamin F. Botanical Garden Johnston','Lunes a Domingo de 05:00 a 21:00 horas','Rosales sin numero. Col. Americana Los Mochis Sinaloa','25.78837406424281,-109.00188446044922','The opening of this beautiful place to the public was the May 6, 1963, since then has a magnificent center of observation, study and recreation.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','Church of the Sacred Heart','-','Gral. Alvaro Obregón s/n','25.790344753105945,-108.99885892868042','Construction with a semi eclectic classic style, is located in front of the Plaza September 27','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','Plazuela September 27','-','Gral. Alvaro Obregón s/n','25.790228831138283,-108.99797916412354','The square has a kiosk in the center, where you can enjoy rock bands and different musicians during weekends. The location in the heart of Los Mochis, is home to several shows and cultural events, civic and religious. ','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','House of Culture Conrado Espinoza','Mar a Sáb 9 a 19 hr, Dom 10 a 13 hr (cierra Lun)','Cerro de la memoria s/n','25.80572272975189,-108.97098541259766','Historic building located at the foot of the hill of Memory, at La Pergola, built under the direction of the professor Conrado Espinoza, with the help of the citizenship of the society Training and Education, and the United Sugar Company, in order to promote education among children in the region.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','Fort Valley Museum','Mar a Sáb 9 a 19 hr, Dom 10 a 13 hr (cierra Lun)','Alvaro Obregón y Antonio Rosales','25.79024815147408,-108.99969577789307','The Regional Museum of Fort Valley started operations on March 3, 1990. It was built in 1903 by architect Ascencio López.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','The Blue House','Mar a Sáb 9 a 19 hr, Dom 10 a 13 hr (cierra Lun)','Benito Juarez y Carretera Ahome - La Florida','25.92241363730155,-109.17648553848267','Built by its owner Mr. Demetrio Peiro and Aragon, whox in the early 1913 inhabits the house and put a shop, which called "The Blue Rabbit.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','San Miguel Zapotitlán','-','A 15 km de Los Mochis  por la carretera internacional al norte. ','25.947770107019252,-109.05346870422363','It is one of the largest ceremonial centers of the Indian community in the state of Sinaloa and the largest in the municipality of Ahome, San Miguel Zapotitlán is famous for its large indigenous ceremonial feast held between the months of March and April.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','La Villa de Ahome Pueblo Señorial','-','A 20 Km de Los Mochis por la carretera estatal Los Mochis - Ahome','25.9189880597865,-109.16849255561829','With a history of over 400 years, close to the city of Los Mochis, the foundation of the town of Ahome was the August 15, 1605','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01I','Ceremonial Center Yoreme','-','A 3 Km de Ahome Pueblo Señorial ','25.931975778964215,-109.19010043144226','Yoreme Ceremonial Center is located in the town of la Florida, the center is very famous Ceremonial during Lent, where every friday they meet a group of jews, to represent the passion and death of Jesus Christ.','imagen']);

//cosala español
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H05E','Parroquia de Santa Ursula',' Todos los días de 7:00 a 19:00 horas','Arteaga SN, Cosala Centro, 80700','24.41133585694141,-106.69182657857363','La leyenda oral señala que los ricos mineros del siglo XVII, para salvar sus almas del infierno o del purgatorio, cooperaron para levantar el templo de Santa Úrsula, con barras de plata, marcos y tejos.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H05E','Capilla de Nuestra Señora de Guadalupe',' Todos los días de 7:00 a 19:00 horas','Calle Aquiles Serdán s/n  Cosala centro.','24.41133585694141,-106.69182657857363','Esta encantadora iglesia muestra una fachada de piedra en la que destaca la puerta de acceso tallada en cantera y un sencillo remate a manera colonial que se acompaña por una diminuta torre campanario. Aunque no existen detalles acerca de su construcción, por su estilo pudiera ser de finales del siglo XVIII.','imagen']);
//cosala ingles
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H05I','Parroquia de Santa Ursula','Every day 7:00 - 19:00 hours','Arteaga SN, Cosala Centro, 80700','24.41133585694141, -106.69182657857363','The oral legend says that wealthy miners of the  XVII century , to save their souls from hell or purgatory, cooperating to lift the church of Santa Ursula, with silver bars, frames and tiles.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H05I','Capilla de Nuestra Señora de Guadalupe','Every day 7:00 - 19:00 hours','Calle Aquiles Serdán s/n  Cosala centro.','24.41133585694141,-106.69182657857363','This lovely church shows a stone facade which highlights the gateway carved in stone and a simple kick to colonial way is accompanied by a tiny bell tower. Although no details about its construction, its style could be from the late XVII','imagen']);

//choix español
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H07E','Reloj El Mirador','8:00 am. A 6:00 pm','Calle Juarez # 5 col. Centro, Choix, Sin.','26.707054,-108.322758','El Museo Reloj Mirador inaugurado el año de 2001, ofrece al visitante la opción de admirar todo el entorno de nuestra ciudad, ya que tiene una altura aproximada de 17 metros, en sus cinco pisos y el vestíbulo mirador.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H07E','Baymena','Disponible las 24 horas','40 kilómetros al sur de la sindicatura central de Choix; colindando al sur  con la sindicatura de Yecorato, al sureste el punto de unión con Bacayopa, al oeste con la sindicatura de Agua Caliente Grande o Agua Caliente de los Gastelum y con el municipio del fuerte de Montesclaros al suroeste.','26.520503,-108.291873','En esta comunidad se encuentra el centro ceremonial o casa de la fiesta de los Baymenas y es depositario de un buen número de festividades en las cuales los lugareños realizan sus fiestas tradicionales, ataviados con sus trajes de Pascola, venado o Matachines','imagen']);
//choix ingles
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H07I','Clock Mirador.','8:00 am. A 6:00 pm','Calle Juarez # 5 col. Centro, Choix, Sin.','26.707054,-108.322758','The Mirador Clock Museum inaugurated in 2001, offers visitors the option to admire the environment of our city, it has an approximate height of 17 meters, in its five floors and lobby viewpoint.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H07I','Baymena ','Disponible las 24 horas','40 kilómetros al sur de la sindicatura central de Choix; colindando al sur  con la sindicatura de Yecorato, al sureste el punto de unión con Bacayopa, al oeste con la sindicatura de Agua Caliente Grande o Agua Caliente de los Gastelum y con el municipio del fuerte de Montesclaros al suroeste.','26.520503,-108.291873','This community is the ceremonial center or house party is the depositary Baymenas and a number of festivals in which the locals perform traditional festivals, dressed in their costumes Pascola, deer or matachines','imagen']);

//guasave español
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H11E','Sitio Arquelogico el Nio','N/A','Carretera a Bamoa, a 10 km de la cabecera municipal','25.624463,-108.399303','Nío es una localidad que se encuentra a 8 kilómetros de la cabecera municipal de Guasave.;  tiene edificada una iglesia del templo jesuita en cantera el cual quedo inconcluso por la expulsión de los jesuitas,  esta iglesia data de 1767.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H11E','Sitio Arquelogico Pueblo Viejo','N/A','Carretera a Bamoa, a 8 km de la cabecera municipal','25.615176,-108.414924','Templo levantado por los jesuitas probablemente entre 1750 y 1758. Una fuerte crecida del río Sinaloa afectó de tal modo los cimientos de la construcción que casi vino abajo, por lo que los frailes decidieron trasladarse a un pueblo cercano llamado El Nío, donde levantaron otro templo.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H11E','El Museo','Martes a domingo, de 10:00 a 6:00','Francisco I. Madero 2014','25.557745,-108.458027','Se ubica en el edificio donde estuvo la primera escuela de niñas “Heroína Antonia Nava”.  Este centro cultural fue fundado el 28 de Diciembre de 1996.','imagen']);
//guasave ingles
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H11E','Archaeological Site Nío','N/A','Carretera a Bamoa, a 10 km de la cabecera municipal','25.624463,-108.399303','Nio is a town that is located 8 kilometers from the county seat of Guasave.; Has built a church of the Jesuit church in stone which remained unfinished by the expulsion of the Jesuits, this church dates from 1767.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H11E','Old Pueblo Archaeological Site','N/A','Carretera a Bamoa, a 8 km de la cabecera municipal','25.615176,-108.414924','Temple built by the Jesuits between 1750 and 1758 probably. A El Fuerte Sinaloa River flood affected thereby building the foundations of almost collapsed, so the monks decided to move to a nearby town called El Nio, where they built another temple.','imagen']);
tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H11E','The Museum','Martes a domingo, de 10:00 a 6:00','Francisco I. Madero 2014','25.557745,-108.458027','Is located in the building where the first school for girls "Antonia Nava Heroin". This cultural center was founded on December 28, 1996.','imagen']);

////Actividad 24 horas
//ahome español
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','08:00 hrs.','Desayuno.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','09:00 hrs.','Visita al Jardin Botanico.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','10:00 hrs.','Museo regional valle del Fuerte.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','11:00 hrs.','Paseo por la plazuela 27 de septiembre y la iglesia Sagrado Corazón.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','12:00 hrs.','Salida a topolobampo.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','13:00 hrs.','Recorrido por el malecon y Paseo en lancha.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','14:00 hrs.','Isla de pajaros y Santuario de Delfines.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','15:00 hrs.','Comida en la Isla el Maviri.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','16:00 hrs.','*comida.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','17:00 hrs.','Regreso a Los mochis (parada en la cueva de los murcielagos).']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','18:00 hrs.','Visita a la pergola.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','19:00 hrs.','Cena.']);
//ahome ingles
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','08:00 hrs.','Desayuno.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','09:00 hrs.','Visita al Jardin Botanico.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','10:00 hrs.','Museo regional valle del Fuerte.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','11:00 hrs.','Paseo por la plazuela 27 de septiembre y la iglesia Sagrado Corazón.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','12:00 hrs.','Salida a topolobampo.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','13:00 hrs.','Recorrido por el malecon y Paseo en lancha.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','14:00 hrs.','Isla de pajaros y Santuario de Delfines.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','15:00 hrs.','Comida en la Isla el Maviri.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','16:00 hrs.','*comida.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','17:00 hrs.','Regreso a Los mochis (parada en la cueva de los murcielagos).']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','18:00 hrs.','Visita a la pergola.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01I','19:00 hrs.','Cena.']);

//cosala español
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','08:00 hrs.','Llegada al Pueblo y desayuno.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','09:00 hrs.','Traslado a la Reserva Ecológica.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','10:00 hrs.','Tirolesa.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','11:00 hrs.','Tirolesa.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','12:00 hrs.','Senderismo.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','13:00 hrs.','Visita a Museo y a las guacamayas.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','14:00 hrs.','Regreso al pueblo y comida.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','15:00 hrs.','Traslado a Vado Hondo.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','16:00 hrs.','Tiempo de recreación.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','17:00 hrs.','Tiempo de recreación.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','18:00 hrs.','Regreso al pueblo visita a museo.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','19:00 hrs.','Paseo por las calles del pueblo, plazuela y kiosko.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','20:00 hrs.','Cena y Descanso.']);
//cosala ingles
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','08:00 hrs.','Arrive to town and breakfast.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','09:00 hrs.','Transfer to the Ecological Reserve.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','10:00 hrs.','Zip line.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','11:00 hrs.','Zip line.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','12:00 hrs.','Hiking.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','13:00 hrs.','Visit to the museum and bird watching.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','14:00 hrs.','Back to town and Lunch.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','15:00 hrs.','Transfer to Vado Hondo.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','16:00 hrs.','Recreation time.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','17:00 hrs.','Recreation time.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','18:00 hrs.','Baack to town and visit to the Museum.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','19:00 hrs.','Walking through the village´s streets.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05I','20:00 hrs.','Dinner and rest.']);

//choix español
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','08:00 hrs.',' LLEGAR AL CENTRO REPRODUCTOR DE ALEVINES.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','10:00 hrs.',' VISITAR LAS INSTALACIONES DE LA PRESA LUIS DONALDO COLOSIO MURRIETA “HUITES”.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','12:00 hrs.','SALIR A AGUAS TERMALES DE AGUA CALIENTE DE BACA.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','13:00 hrs.','COMIDA.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','15:00 hrs.','LLEGAR  A LA CABECERA MUNICIPAL']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','16:00 hrs.','SALIDA A LA COMUNIDAD INDIGENA DE BAYMENA.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','17:00 hrs.','MUESTRA GASTRONOMICA.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','18:00 hrs.','DEMOSTRACIONES DE DANZAS INDIGENAS.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','20:00 hrs.','FIN DEL TOUR.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','','OTRO RECORRIDO']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','08:00 hrs.','Desayuno Baymena y Danza Indígena.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','09:30 hrs.','Recorrido por el vaso de la presa en lancha.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','11:30 hrs.','Aguas termales de Juibaca, Cortina, Rio y Puente Huites.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','13:00 hrs.','Comida tipica en Agua Caliente de Baca y Aguas termales.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','14:00 hrs.','Traslado a Las Cruces.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','14:30 hrs.','Cabañas.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','15:30 hrs.','Regreso a Cabecera municipal de Choix.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','16:30 hrs.','Recorrido por la cabecera municipal.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','18:00 hrs.','FIN DEL TOUR.']);
//choix español
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','08:00 hrs.',' LLEGAR AL CENTRO REPRODUCTOR DE ALEVINES.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','10:00 hrs.',' VISITAR LAS INSTALACIONES DE LA PRESA LUIS DONALDO COLOSIO MURRIETA “HUITES”.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','12:00 hrs.','SALIR A AGUAS TERMALES DE AGUA CALIENTE DE BACA.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','13:00 hrs.','COMIDA.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','15:00 hrs.','LLEGAR  A LA CABECERA MUNICIPAL']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','16:00 hrs.','SALIDA A LA COMUNIDAD INDIGENA DE BAYMENA.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','17:00 hrs.','MUESTRA GASTRONOMICA.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','18:00 hrs.','DEMOSTRACIONES DE DANZAS INDIGENAS.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','20:00 hrs.','FIN DEL TOUR.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','','OTRO RECORRIDO']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','08:00 hrs.','Desayuno Baymena y Danza Indígena.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','09:30 hrs.','Recorrido por el vaso de la presa en lancha.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','11:30 hrs.','Aguas termales de Juibaca, Cortina, Rio y Puente Huites.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','13:00 hrs.','Comida tipica en Agua Caliente de Baca y Aguas termales.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','14:00 hrs.','Traslado a Las Cruces.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','14:30 hrs.','Cabañas.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','15:30 hrs.','Regreso a Cabecera municipal de Choix.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','16:30 hrs.','Recorrido por la cabecera municipal.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07I','18:00 hrs.','FIN DEL TOUR.']);

//guasave español
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','08:00 hrs.','Salida de la Ciudad de Guasave rumbo a Boca del Río.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','09:00 hrs.','Desayuno en Boca del Rio.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','10:00 hrs.','Recorrido en lancha.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','11:00 hrs.','Salida a Playa Las Glorias.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','12:00 hrs.','Tiempo Libre.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','13:00 hrs.','Comida en Playa Las Glorias.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','14:00 hrs.','Salida hacia la Pitahaya.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','15:00 hrs.','Visita guiada por la granja de ostiones (La Pitahaya).']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','16:00 hrs.','Recorrido en lancha por la Bahía de Macapule.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','17:00 hrs.','Visita a la isla Macapule e Isla de los Pajarós.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','18:00 hrs.','Llegada a la Pitahaya y salida a Guasave.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','19:00 hrs.','Llegada a la ciudad de Guasave.']);
//guasave ingles
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','08:00 hrs.','Salida de la Ciudad de Guasave rumbo a Boca del Río']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','09:00 hrs.','Desayuno en Boca del Rio']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','10:00 hrs.','Recorrido en lancha.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','11:00 hrs.','Salida a Playa Las Glorias.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','12:00 hrs.','Tiempo Libre.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','13:00 hrs.','Comida en Playa Las Glorias.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','14:00 hrs.','Salida hacia la Pitahaya.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','15:00 hrs.','Visita guiada por la granja de ostiones (La Pitahaya).']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','16:00 hrs.','Recorrido en lancha por la Bahía de Macapule.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','17:00 hrs.','Visita a la isla Macapule e Isla de los Pajarós.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','18:00 hrs.','Llegada a la Pitahaya y salida a Guasave.']);
//tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11I','19:00 hrs.','Llegada a la ciudad de Guasave.']);

}
 var clave;
if(!clave){
    
//var url=location;
var valor=String(location).split('?');
var clm=String(valor[1]).split('');
var sc="C"+clm[0]+clm[1];
checkConnection();
loadclave(valor[1],sc);
console.log(sc);
}
function back(){
  var ie=clave.split('');
  if (ie[2]=='E'){
    $.mobile.navigate( '#municipios',{transition : 'slide'} );
  }else{
    $.mobile.navigate( '#municipios_ingles',{transition : 'slide'} );
  }
}

function loadclave(clv,clvcl){
    clave=clv;
    console.log(clvcl);
    if (online=='1'){
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
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
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
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
            $('#contgas').append("<div data-role='collapsible'><h3 ><span style='left: -30px;' data-icon='star' data-role='button' data-theme='b'></span><span>"+results.rows.item(i).restaurante+"</span></h3><ul style='padding: 0;font-size: small;'><li style='background:url(img/especialidad.png) no-repeat 50%,#E97A61 ;background-size: cover; text-align: center;color: #FFF;padding: 2px;'><h1>Especialidad:</h1><h2>"+results.rows.item(i).especialidad+"</h2></li><li style='margin-left: 10%;'><p style='margin: 1.5em 5px .6em;'>Direcci&oacute;n: <b>"+results.rows.item(i).direccion+"</b></p><p style='margin: 0.5em 5px .6em;'>Tel&eacute;fono: <b>"+results.rows.item(i).telefono+"</b></p></li></ul></div>");
        //uid=results.rows.item(i).clave;          
        }
        $("#contgas").collapsibleset( );
}

//diversion
function loaddiversion(){
    var clavediversion="D"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
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
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
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
//un dia
function loadundia(){
    var claveundia="A"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM emergencias',[],showundia1);
    }); 
}

function showundia1(tx, results){
    alert('ejecutando');
    var len = results.rows.length;
    console.log(len+'un dia');
    $("#contund").html('');
        for (var i=0; i<len; i++){
         $("#contund").append("<li><h2>"+results.rows.item(i).servicio+"</h2><h6>"+results.rows.item(i).direccion+"</h6></li>");
          }
        $("#contund").listview('refresh');
}