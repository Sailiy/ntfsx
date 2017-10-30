<template>
    <div>
        <mu-flexbox>
            <mu-flexbox-item class="flex-demo">
                <h2>{{$t('messages.tab_setting')}}</h2>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
            </mu-flexbox-item>
        </mu-flexbox>
        <mu-list>
            <mu-list-item :title="$t('messages.general')" toggleNested>
                <mu-list-item slot="nested"  @click="handleLanguage" :title="$t('messages.language')"/>
                <mu-list-item slot="nested"  @click="" :title="$t('messages.auto_refresh')">
                    <mu-switch disabled slot="right"/>
                </mu-list-item>
            </mu-list-item>
            <mu-list-item :title="$t('messages.advanced_setting')" toggleNested>
                <mu-list-item slot="nested" @click="" :title="$t('messages.ntfs_support')"/>
            </mu-list-item>
        </mu-list>
        <mu-dialog :open="dialog" :title="$t('messages.tab_setting')" @close="close">
            <mu-select-field  v-model="language_default" :maxHeight="300">
                <mu-menu-item v-for="item, index in list" :key="item.text" :title="item.text" :value="item.val"/>
            </mu-select-field>
            <mu-flat-button slot="actions" @click="handLanguageChange" primary :label="$t('messages.ok')"/>
            <mu-flat-button slot="actions" primary @click="close" :label="$t('messages.cancel')"/>
        </mu-dialog>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                list:this.$t('languages'),
                language_default:localStorage.lang,
                dialog: false
            }
        },
        methods: {
            handleLanguage(){
                this.dialog = true
            },
            handLanguageChange(){
                localStorage.lang = this.language_default;
                this.$i18n.locale = this.language_default;
                this.close();
            },
            close(){
                this.dialog = false
            }
        }
    }
</script>

<style scoped>

</style>
