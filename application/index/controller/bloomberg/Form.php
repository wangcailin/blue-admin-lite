<?php

namespace app\index\controller\bloomberg;

use app\common\controller\Frontend;

/**
 * 彭博表单管理
 *
 * @icon fa fa-circle-o
 */
class Form extends Frontend
{
    
    /**
     * BloombergForm模型对象
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('BloombergForm');

    }

    public function index()
    {
        return $this->view->fetch();
    }

    public function submit()
    {
        $data = input();
        $data['ip'] = get_proxy_ip();
        $this->model->save($data);
        return 1;
    }

}
