define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'bloomberg/form/index',
                    del_url: 'bloomberg/form/del',
                    multi_url: 'bloomberg/form/multi',
                    table: 'bloomberg_form',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'uname', title: __('Uname')},
                        {field: 'gress', title: __('Gress')},
                        {field: 'city', title: __('City'), searchList: {'1': __('Beijing'), '2': __('Shanghai')}, formatter: Controller.api.formatter.city},
                        {field: 'department', title: __('Department')},
                        {field: 'ip', title: __('Ip')},
                        {field: 'create_time', title: __('Create_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ],
                search:false,
                searchFormVisible: true
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            },
            formatter: {
                city: function (value, row, index) {
                    switch(value)
                    {
                        case 1:
                            value = '<span class="label label-success">Beijing</span>';
                            break;
                        case 2:
                            value = '<span class="label label-info">Shanghai</span>';
                            break;
                    }
                    return value;
                }
            }
        }
    };
    return Controller;
});