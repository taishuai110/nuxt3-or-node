<template>
    <div class="">
        <el-upload  class="upload-demo"
            action="/home/123" >
            <el-button type="primary">Click to upload</el-button>
            <template #tip>
                <div class="el-upload__tip">
                    jpg/png files with a size less than 500KB.
                </div>
            </template>
        </el-upload>

        <!-- <form action="/before/before/webSocket/customerUploadFile?id=101" method="post" enctype="multipart/form-data">
            <input v-bind="file" type="file" name="myFile">
        </form>
        <button @click="sub">提交</button> -->
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import type { UploadProps, UploadUserFile } from 'element-plus'


// const file = ref();

// const sub = () => {
//     console.log(file);
// }

</script>

<style  scoped></style>
