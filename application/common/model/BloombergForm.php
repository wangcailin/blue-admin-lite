<?php

namespace app\common\model;

use think\Model;

class BloombergForm extends Model
{
    // 表名
    protected $name = 'bloomberg_form';

    // 自动写入时间戳字段
    protected $autoWriteTimestamp = true;

    // 定义时间戳字段名
    protected $createTime = 'create_time';
    protected $updateTime = false;

    public $cityList = [1 => 'Beijing', 2 => 'Shanghai'];
    
    // 追加属性
    protected $append = [
        'create_time_text'
    ];


    protected static function init()
    {
        BloombergForm::beforeInsert(function ($data) {
            $data['ip'] = get_proxy_ip();
            return $data;
        });
    }



    public function getCreateTimeTextAttr($value, $data)
    {
        $value = $value ? $value : $data['create_time'];
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setCreateTimeAttr($value)
    {
        return $value && !is_numeric($value) ? strtotime($value) : $value;
    }


}
