<?php


	class DB {
		private $con = false;
		private $data = array();

		public function __construct() {

            $dbName = "mcw";
			if($_REQUEST['ctrlSQL']=="block_3Ctrl") $dbName = "csc2";

			if($_SERVER['HTTP_HOST']=="localhost"){
				define("__HOST__", "localhost");
				define("__USER__", "root");
				define("__PASS__", "");
				define("__BASE__", "stemmvog_".$dbName);
			}elseif($_SERVER['HTTP_HOST'] == "www.maltoncoachworks.co.uk"){
				define("__HOST__", "localhost");
				define("__USER__", "stemmvog_admin");
				define("__PASS__", "rRX].#]_zS^W");//VH1=&{e8mOdP
				define("__BASE__", "stemmvog_".$dbName);
			}elseif($_SERVER['HTTP_HOST'] == "www.amactive.net"){
				define("__HOST__", "localhost");
				define("__USER__", "wqmmozeb_almack");
				define("__PASS__", "vGY$1;.A(!NK");
				define("__BASE__", "wqmmozeb_".$dbName);
			}

			$this->con = mysqli_connect(__HOST__, __USER__, __PASS__, __BASE__);
			
			if(!$this->con) {
				die("DB connection failed:" . $con->connection_error);
			}
		}
        
        public function qryPop() {
            global $ctrlQuery;

            
			$qry = $this->con->query($ctrlQuery);
			if($qry->num_rows > 0) {
				while($row = $qry->fetch_object()) {
                    //if($row['snippet']) $row['snippet'] = strip_tags($row['snippet']);
                    //$row['name'] = mysql_real_escape_string($row['name']);
                    $this->data[] = $row;
				}
			} else {
				$this->data[] = null;
			}
			//$this->con->close();
		}

        
        public function qryFire($sql=null) {
			if($sql == null) {
				$this->qryPop();
			} else {
				$this->con->query($sql);
				$this->qryPop();	
			}
            $this->con->close();
            //mysqli_close($this->con)
            return $this->data;           
		}
	}
?>