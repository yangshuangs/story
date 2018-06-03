<?php

/**
* 类型控制器
*/
class MineController
{
	//模板名称
	public $template='mine';
	
	public function main(array $var_array){

		//找到模型位置
		$target = SERVER_ROOT.'/model/'.$this->template.'.php';
		if (file_exists($target)) {
			//存在实例化模型
			include_once($target);
			$class=ucfirst($this->template).'Model';
			if (class_exists($class)) {
				$model=new $class();
				//传递参数
				$action=$var_array[1];
				if (strlen($action)>0) {
					$model->$action();
				}else{
					$error=new ErrorController;
					$error->main(false,'模型动作错误');
					die();
				}
			}else{
				$error=new ErrorController;
				$error->main(false,'匹配模型失败，模型没有被创建');
				die();
			}
		}else{
			//不存在则跳转错误页面
				$error = new ErrorController;
				$error->main(false, "匹配模型失败，找不到对应模型。");
				die();
		}
	}
}