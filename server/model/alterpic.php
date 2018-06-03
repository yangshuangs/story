<?php
include_once('DBM.php');
/**
* 轮播图逻辑模型
*/
class AlterpicModel extends DBM
{
	
	function __construct()
	{
		$result=parent::__construct();
		if (!$result) {
			echo json_encode($result,JSON_UNESCAPED_UNICODE);
			die();
		}
	}

 //所有图片 四张
	public function show(){
		$sql="select * from t_alterpic limit 4";
		$t=$this->query($sql);
		if ($t!==false) {
			$result['success']=true;
			$result['msg']='获取成功';
			$result['number']=count($t);
			$result['data']=!count($t)?array():$t;
		}else{
			$result['success']=false;
			$result['msg']='获取失败';
		}
		echo json_encode($result,JSON_UNESCAPED_UNICODE);
  }
}