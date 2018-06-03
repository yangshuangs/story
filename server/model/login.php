<?php

	/**
	* 登录逻辑模型
	*/
	class LoginModel extends WebBase {

		/** 
	     * 构造函数
	     */  
		function __construct(){
			//调用父类构造函数
			$result = parent::__construct();
			if (!$result){
				echo json_encode($result, JSON_UNESCAPED_UNICODE);
				die();
			}
		}

		/** 
	     * 登录
	     *
	     */  
		function login(){
			$_POST = json_decode(file_get_contents("php://input"), true);
			if (isset($_POST['code']) 
				&& isset($_POST['rawData']) 
				&& isset($_POST['signature'])){
				$code		 = $_POST['code'];
				$rawData	 = $_POST['rawData'];
				$signature	 = $_POST['signature'];
				$result = $this->login_session($code, $rawData, $signature);
			} else {
				$result['success'] = false;
				$result['msg'] = '参数错误';
			}
			echo json_encode($result, JSON_UNESCAPED_UNICODE);
		}

		/** 
	     * 检查登录状态过期
	     *
	     */  
		function check(){
			$_POST = json_decode(file_get_contents("php://input"), true);
			if (isset($_POST['session'])){
				$session 	= $_POST['session'];
				$result = $this->check_session($session);
			} else {
				$result['success'] = false;
				$result['msg'] = '参数错误';
			}
			echo json_encode($result, JSON_UNESCAPED_UNICODE);
		}
		
		/** 
	     * 析构函数
	     *  
	     */  
		function __destruct(){

		}
		
	}
?>