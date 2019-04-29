<template>
	<div class="date-picker-content-month">
		<table class="date-picker-day-table">
			<tbody>
			<tr v-for="monthRowIndex in range(0, 4)">
				<td v-for="monthColIndex in range(0, 3)">
					<div class="date-picker-month-cell" @click="handleMonthChange(monthRowIndex * 3 + monthColIndex)">
						{{ monthsMapping[monthRowIndex * 3 + monthColIndex] }}
					</div>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
  import { getFirstDay, getLastDay, getYearMonthDay, range } from "./utils"
  export default {
    name: "month-table",
	  props: {
      value: {
        type: Date
      },
      display: {
        type: Object
      }
	  },
	  data() {
      return {
        weekdays: ['一', '二', '三', '四', '五', '六', '日'],
	      monthsMapping: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      }
	  },
	  methods: {
      handleMonthChange(index) {
        this.$emit('monthChange', index)
      },
      range(begin, end) {
        return range(begin, end)
      }
	  }
  }
</script>

<style scoped lang="scss">
@import "../styles/var";
.date-picker-day-table {
	width: 100%;
	th {
		color: $color;
		font-weight: normal;
	}
	td {
		color: rgba(0,0,0,0.65);
		padding: 0 4px;
		height: 30px;
		cursor: pointer;
	}
	&-cell {
		width: 24px;
		height: 24px;
		line-height: 22px;
		text-align: center;
		border: 1px solid transparent;
		box-sizing: border-box;
		border-radius: 50%;
		&.notCurrentMonth {
			color: $gray-color;
		}
		&:not(th):hover {
			background: $hover-ligth-blue;
		}
		&.active {
			background: $blue-light;
		}
		&.today {
			border: 1px solid $blue-light;
		}
	}
}
.date-picker-content-month {
	padding: 8px 12px;
	width: 240px;
}
.date-picker-day-table {
	width: 100%;
	td {
		text-align: center;
	}
	.date-picker-month-cell {
		display: inline-flex;
		line-height: 24px;
		padding: 4px 8px;
		cursor: pointer;
		&:hover {
			background: $hover-ligth-blue;
			color: $blue-light;
		}
	}
}
</style>