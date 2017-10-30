/**
 * Created by zhaoyu on 2017/10/29.
 */
import enLocale from 'element-ui/lib/locale/lang/zh-CN'
export default {
    languages: [{
        text: 'Chinese',
        val: 'zh'
    }, {
        text: 'English',
        val: 'en'
    }],
    messages: {
        tab_home: '主页',
        tab_setting: '设置',
        tab_about: '关于',
        refresh_button: "刷新设备列表",
        title: "设备列表",
        mount_open:"挂载并打开",
        mount:"挂载",
        open_finder:"在Finder中打开",
        info:"属性",
        tab_key_value:"值",
        ok:"确定",
        cancel:"取消",
        general:"常规设置",
        language:"语言设置",
        auto_refresh:"自动刷新设备列表(暂不支持)",
        advanced_setting:"高级设置",
        ntfs_support:"永久开启NTFS支持(暂不支持)",
        please_input_sudo:"请输入管理员(sudo)密码：",
        prompt:"提示",
        error:"错误",
        mount_ok:"挂载成功",
        open_ok:"打开成功"
    },
    ...enLocale
}