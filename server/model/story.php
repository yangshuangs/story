<?php
include_once('DBM.php');
/**
* 品牌逻辑模型
*/
class StoryModel extends DBM
{
	
	function __construct()
	{
		$result=parent::__construct();
		if (!$result) {
			echo json_encode($result,JSON_UNESCAPED_UNICODE);
			die();
		}
	}
    //首页中显示数据
	public function show(){
    $_POST = json_decode(file_get_contents("php://input"), true);
		$sql="select id,name,picture from t_story where categoryid={$_POST['id']}";
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

//热门故事
 public function hot(){
   $sql="select id,name,picture from t_story order by hot desc limit 3";
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
 
	//故事或儿歌详情
	public function detail(){
    $_POST = json_decode(file_get_contents("php://input"), true);
		$sql="select * from t_story where id={$_POST['id']}";
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