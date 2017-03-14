<?php

// $user = 'root';
// $pass = '';
// $db = 'stemmvog_mcw';

// $db = new mysqli('localhost', $user, $pass, $db) or die("Unable to connect");

   if($_SERVER['HTTP_HOST']=="localhost"){
        define("__HOST__", "localhost");
        define("__USER__", "root");
        define("__PASS__", "");
        define("__BASE__", "stemmvog_mcw");
        define("__CSC__", "stemmvog_csc2");
    }elseif($_SERVER['HTTP_HOST'] == "www.maltoncoachworks.co.uk"){
        define("__HOST__", "localhost");
        define("__USER__", "stemmvog_admin");
        define("__PASS__", "rRX].#]_zS^W");//VH1=&{e8mOdP
        define("__BASE__", "stemmvog_mcw");
        define("__CSC__", "stemmvog_csc2");
    }elseif($_SERVER['HTTP_HOST'] == "www.amactive.net"){
        define("__HOST__", "localhost");
        define("__USER__", "wqmmozeb_almack");
        define("__PASS__", "vGY$1;.A(!NK");
        define("__BASE__", "wqmmozeb_mcw");
        define("__CSC__", "wqmmozeb_csc2");
    }

	/* connect to the db */
	$link = mysql_connect(__HOST__,__USER__,__PASS__) or die('Cannot connect to the DB');
	mysql_select_db(__BASE__,$link) or die('Cannot select the DB');

$q = "SELECT * FROM catalogue WHERE id=504 OR id_xtra=504 ORDER BY id DESC";
$r = mysql_query($q);
if(mysql_num_rows($r)) {
		while($post = mysql_fetch_assoc($r)) {
			echo "<BR>".$post['image_large'];
		}
	}
echo "<br><br>Great work! " . $_SERVER['HTTP_HOST'];

?>