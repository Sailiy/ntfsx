<template>
    <div>
       <!-- <mu-flexbox>
            <mu-flexbox-item class="flex-demo">
                <h2>{{$t('messages.tab_about')}}</h2>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
            </mu-flexbox-item>
        </mu-flexbox>-->
        <div v-if="$i18n.locale=='zh'">
            <mu-row gutter>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
                <mu-col width="70" tablet="70" desktop="70">
                    <h3>请赞助我，让我能开发出更好的软件</h3>
                </mu-col>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
            </mu-row>
            <mu-row gutter>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
                <mu-col width="35" tablet="35" desktop="35">
                    &nbsp;&nbsp;微信<br>
                    <img src="../assets/wx.png" width="150px" height="150px" alt="">
                </mu-col>
                <mu-col width="35" tablet="35" desktop="35">
                    &nbsp;&nbsp;支付宝<br>
                    <img src="../assets/zfb.png" width="150px" height="150px" alt="">

                </mu-col>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
            </mu-row>
            <mu-row gutter>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
                <mu-col width="70" tablet="70" desktop="70">
               <pre>
该项目依赖Mac系统的diskutil，mount，umount，mount_ntfs，open命令行工具，
如果遇到问题，请先检查这些工具是否工作正常。
                   <br>
该项目已经在github上开源，欢迎开发者加入，完善功能。
Github地址：<a href="javascript:void(0)" @click="open('https://github.com/Sailiy/ntfsx')">https://github.com/Sailiy/ntfsx</a>
                   <br>
我的能力不仅仅如此，如果你能给我提供好的工作机会,
请发邮件到：<a href="mailto:sailiy@126.com">sailiy@126.com</a>
                   <br>
感谢electron，vue，electron-vue，muse-ui，element-ui的开发者们。
               </pre>
                </mu-col>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
            </mu-row>
        </div>
        <div v-if="$i18n.locale=='en'">
            <mu-row gutter>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
                <mu-col width="70" tablet="70" desktop="70">
                    <h3>Please sponsor me so that I can develop better software</h3>
                </mu-col>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
            </mu-row>
            <mu-row gutter>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
                <mu-col width="35" tablet="35" desktop="35">
                    &nbsp;&nbsp;WeChat<br>
                    <img src="../assets/wx.png" width="150px" height="150px" alt="">
                </mu-col>
                <mu-col width="35" tablet="35" desktop="35">
                    &nbsp;&nbsp;AliPay<br>
                    <img src="../assets/zfb.png" width="150px" height="150px" alt="">

                </mu-col>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
            </mu-row>
            <mu-row gutter>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
                <mu-col width="70" tablet="70" desktop="70">
               <pre>
The project relies on the Mac system diskutil, mount, umount, mount_ntfs, open, command line tool,If you have problems, check to see if these tools are working properly.
                   <br>
The project has been open source on github and welcomes developers to join and improve functionality.
Making address: <a href="javascript:void(0)" @click="open('https://github.com/Sailiy/ntfsx')">https://github.com/Sailiy/ntfsx</a>
                   <br>
My ability is not only that, if you can give me good job opportunities.
Please email to: <a href="mailto:sailiy@126.com">sailiy@126.com</a>
                   <br>
Thanks to the developers of electron, vue, electronic-vue, Muse-UI, element-UI.
               </pre>
                </mu-col>
                <mu-col width="15" tablet="15" desktop="15"></mu-col>
            </mu-row>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false
            }
        },
        methods: {
            open(link){
                this.$electron.shell.openExternal(link);
            }
        }
    }
</script>

<style scoped>

</style>
