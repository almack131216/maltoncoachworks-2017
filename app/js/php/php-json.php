<?php

/* require the user as the parameter */
if(isset($_GET['user'])) {

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

	/* INTRO TEXTS */
	$ctrlSQL="itemDetailsCtrl";

	/* about intro */	
	$itemID=514;
	include('sql.php');
	$query = $ctrlQuery;	
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	$aboutArr = mysql_fetch_assoc($result);

	/* main intro */
	$itemID=506;
	include('sql.php');
	$query = $ctrlQuery;	
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	$introArr = mysql_fetch_assoc($result);
	
	/* testimonials intro */
	$itemID=508;
	include('sql.php');
	$query = $ctrlQuery;	
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	$introTestimonialsArr = mysql_fetch_assoc($result);

	/* portfolio intro */
	$itemID=76;
	include('sql.php');
	$query = $ctrlQuery;	
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	$introPortfolioArr = mysql_fetch_assoc($result);

	/* services intro */
	$itemID=67;
	include('sql.php');
	$query = $ctrlQuery;	
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	$introServicesArr = mysql_fetch_assoc($result);

	/* carousel */
	$ctrlSQL="itemDetailsCtrl";
	$itemID = 504;
	$sqlLimit = 4;
	include('sql.php');
	$query = $ctrlQuery;	
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	$carouselArr = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$carouselArr[] = $post;
		}
	}

	/* grab the PORTFOLIO posts from the db */
	//$query = "SELECT id,name,image_large FROM catalogue WHERE category=6 AND subcategory=1 ORDER BY position_insubcat ASC LIMIT 3";
	$ctrlSQL="block_1Ctrl";
	$categoryID=6;
	$subcategoryID=1;
	$sqlLimit=3;
	include('sql.php');
	$query = $ctrlQuery;
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	
	/* create one master array of the PORTFOLIO records */
	$portfolioArr = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$portfolioArr[] = $post;
		}
	}
    
    /* grab the TESTIMONIALS posts from the db */
	//$query = "SELECT id,name,image_large FROM catalogue WHERE category=8 AND subcategory=15 ORDER BY upload_date DESC LIMIT 4";
	$ctrlSQL="block_2Ctrl";
	$categoryID=8;
	$subcategoryID=15;
	$sqlLimit=4;
	include('sql.php');
	$query = $ctrlQuery;
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);
	
	/* create one master array of the TESTIMONIALS records */
	$testimonialsArr = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$testimonialsArr[] = $post;
		}
	}
    
    /* grab the CLASSIFIEDS posts from the db */
    mysql_select_db(__CSC__,$link) or die('Cannot select the DB');//switch database
	//$query = "SELECT id,name,image_large,detail_1 AS year,price,price_details AS priceDetails FROM catalogue WHERE category=2 ORDER BY upload_date DESC LIMIT 3";
	$ctrlSQL="block_3Ctrl";
	$categoryID=2;
	$subcategoryID=null;
	$sqlLimit=3;
	include('sql.php');
	$query = $ctrlQuery;
	$result = mysql_query($query,$link) or die('Errant query:  '.$query);

	/* create one master array of the CLASSIFIEDS records */
	$classifiedsArr = array();
	if(mysql_num_rows($result)) {
		while($post = mysql_fetch_assoc($result)) {
			$classifiedsArr[] = $post;
		}
	}

	/* output in necessary format */
    header('Content-type: application/json');
    $response = json_encode(
        array(	'about'=>$aboutArr,
				'banner_carousel'=>$carouselArr,
				'intro'=>$introArr,
				'intro_testimonials'=>$introTestimonialsArr,
				'intro_portfolio'=>$introPortfolioArr,
				'intro_services'=>$introServicesArr,				
				'portfolio'=>$portfolioArr,
				'testimonials'=>$testimonialsArr,
				'classifieds'=>$classifiedsArr
             ));
    
    echo $response;

    $fp = fopen('results.json', 'w');
	fwrite($fp, $response);
	fclose($fp);
    
	/* disconnect from the db */
	@mysql_close($link);
}

?>