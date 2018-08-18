<template>
	<div class="tabs-pane" :class="classList" v-if="active">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	  name: 'g-tabs-pane',
		inject: ['eventBus'],
		props: {
	    name: {
	      type: String,
		    require: true
	    }
		},
		data() {
	    return {
	      active: false
	    }
		},
    computed: {
      classList() {
        return {
          active: this.active
        }
      },
    },
    created() {
      this.eventBus&&this.eventBus.$on('update:selected', (selected) => {
        this.active = (selected === this.name)
      })
    },

	}
</script>

<style lang="scss" scoped>
.tabs-pane {
	padding: 1em;
	&.active {
	}
}
</style>