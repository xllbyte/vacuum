<template>
	<div>
		<n-log :rows="30" :log="logValue" />
		<n-space>
			<n-button type="success">
				<icon-ic-sharp-not-started class="text-24px" />
			</n-button>
			<n-button type="info">
				<icon-material-symbols-stop-circle-rounded class="text-24px" />
			</n-button>
			<n-button type="error">
				<icon-material-symbols-cleaning-bucket class="text-24px" />
			</n-button>
		</n-space>
	</div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {queryAllLog} from "@/service/api/user";
import {saveJson} from "@/service/api/home";
const logValue=ref("");
onMounted(async () => {
	const { data } = await queryAllLog();
	console.log(data)
	let logDetail="";
	if(data){
		for (let i = 0; i < data.length ; i++) {
			logDetail=logDetail+"`"+(i+1)+"`  "+data[i].userAction+"     时间为:"+data[i].createTime +"\n"
		}
	}
	logValue.value=logDetail
	console.log(logDetail)
})
</script>

<style scoped></style>
