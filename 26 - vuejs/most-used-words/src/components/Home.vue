<template>
  <v-container>
    <v-form>
        <v-file-input
            label="Selecione as legendas"
            prepend-icon="mdi-message-text"
            append-outer-icon="mdi-send"
            outlined
            multiple
            chips
            v-model="files"
            @click:append-outer="processSubtitles"
        />
    </v-form>
    <div class="pills">
        <Pill
            v-for="word in groupedWords" 
            :key="word.name"
            :name="word.name"
            :amount="word.amount"
        />
    </div>
  </v-container>
</template>

<script>
import {ipcRenderer} from 'electron'
import Pill from './Pill'
const PROCESS_CHANNEL = 'process-subtitles'
export default {
    name:'HomeDisplay',
    components:{Pill},
    data:()=>({
        files:[],
        groupedWords:[]
    }),
    methods:{
        processSubtitles(){
            const paths = this.files.map(f=> f.path)
            ipcRenderer.on(PROCESS_CHANNEL, (event, resp)=>{
                this.groupedWords = resp
            })
            ipcRenderer.send(PROCESS_CHANNEL, paths)
        }
    }
}
</script>

<style>
.pills{
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
}
</style>