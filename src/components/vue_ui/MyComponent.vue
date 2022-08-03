<script>
export default {
  setup(){
    const greetingMessage = 'hello';
    return {greetingMessage};
  },
}
</script>

<template>
  <div>
  	<slot :text="greetingMessage" :count="99"></slot>
	</div>
</template>
