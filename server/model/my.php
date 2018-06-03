<?php
include_once('DBM.php');
class MyModel extends DBM{
  function __construct(){
    $result=parent::__construct();
    if(!$result){
       echo json_encode($result,JSON_UNESCAPED_UNICODE);
       die();
    }
  }


  function list(){
    echo 1;
  }
}


?>