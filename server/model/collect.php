<?php
include_once('DBM.php');
/**
* 故事逻辑模型
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

  public function list(){
    echo 1;
  }
//  public function list(){
//    $_POST = json_decode(file_get_contents("php://input"), true);
//    $session = $_POST['session'];
//    $result = $this->check_session($session);
//    if($result['success']){
//      $openid = $this->logged_user_openid();
//      if($openid!=false){
//        $sql = "select * from t_collect where openid=".$openid;
//        $t = $this->query($sql);
//        if($t!=false){
//         $result['success']=true;
//         $result['msg']='获取成功';
//         $result['number']=count($t);
//         $result['data']=!count($t)?array():$t;
//       }else{
//         $result['success']=false;
//         $result['msg']='获取失败';
// 	   	}
//     }else{
//        $result['success']=false;
//        $result['msg']='openid获取失败';
//     }
//   }else{
//     $result['success']=false;
//     $result['msg']='参数错误';
//   }
// }

// public function add(){
//    $_POST = json_decode(file_get_contents("php://input"), true);
//    $session = $_POST['session'];
//    $result = $this->check_session($session);
//    if($result['success']){
//      $openid = $this->logged_user_openid();
//      if($openid!=false){
//        $sql1 = "insert into t_collect(openid,storyid) valuse(".$openid.",".$_POST['id'].")";
//        $t = $this->query($sql);
//        if($t!=false){
//         $result['success']=true;
//         $result['msg']='收藏成功';
//       }else{
//         $result['success']=false;
//         $result['msg']='收藏失败';
// 	   	}
//     }else{
//        $result['success']=false;
//        $result['msg']='openid获取失败';
//     }
//   }else{
//     $result['success']=false;
//     $result['msg']='参数错误';
//   }
//   echo json_encode($result,JSON_UNESCAPED_UNICODE);
// }

// 	//取消收藏
// 	public function delete(){
//     $_POST = json_decode(file_get_contents("php://input"), true);
//     $session = $_POST['session'];
//     $result = $this->check_session($session);
//     if($result['success']){
//      $openid = $this->logged_user_openid();
//      if($openid!=false){
//        $sql1 = "delete from t_collect where storyid=".$_POST['id'];
//        $t = $this->query($sql);
//        if($t!=false){
//         $result['success']=true;
//         $result['msg']='取消收藏成功';
//       }else{
//         $result['success']=false;
//         $result['msg']='取消收藏失败';
// 	   	}
//     }else{
//        $result['success']=false;
//        $result['msg']='openid获取失败';
//     }
//   }else{
//     $result['success']=false;
//     $result['msg']='参数错误';
//   }
//   echo json_encode($result,JSON_UNESCAPED_UNICODE);
// }

}