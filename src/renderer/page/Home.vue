<template>
    <div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="tab1" :title="$t('messages.tab_home')"/>
            <mu-tab value="tab2" :title="$t('messages.tab_setting')"/>
            <mu-tab value="tab3" :title="$t('messages.tab_about')"/>
        </mu-tabs>
        <div v-if="activeTab === 'tab1'">
            <DevicesList></DevicesList>
        </div>
        <div v-if="activeTab === 'tab2'">
            <Setting></Setting>
        </div>
        <div v-if="activeTab === 'tab3'">
            <About></About>
        </div>
    </div>
</template>

<script>
    import DevicesList from '@/components/DevicesList'
    import Setting from '@/components/Setting'
    import About from '@/components/About'

    export default {
        components: {
            DevicesList, Setting, About
        },
        data () {
            return {
                activeTab: 'tab1',
            }
        },
        mounted(){

        },
        methods: {
            handleTabChange (val) {
                this.activeTab = val
            },
            getSudoPwd(){

            }
        }
    }
</script>

<style scoped>

</style>
