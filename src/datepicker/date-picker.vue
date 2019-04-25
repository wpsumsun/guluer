<template>
	<div class="date-picker-wrapper" ref="wrapper">
		<g-popover position="bottom" :container="wrapper">
			<g-input :value="formatValue"></g-input>
			<template slot="content">
				<div class="date-picker-app">
					<div class="date-picker-header">
						<div class="date-picker-header-left">
							<span class="prev-year"><g-icon name="left-left"></g-icon></span>
							<span class="prev-month"><g-icon name="left"></g-icon></span>
						</div>
						<div class="date-picker-header-middle">
							<span class="date-picker-year-select" @click="handleModeChange('year')">{{ year }}年</span>
							<span class="date-picker-month-select"@click="handleModeChange('month')">{{ month }}月</span>
						</div>
						<div class="date-picker-header-right">
							<span class="next-month"><g-icon name="right"></g-icon></span>
							<span class="next-year"><g-icon name="right-right"></g-icon></span>
						</div>
					</div>
					<div class="date-picker-content">
						<table v-if="mode === 'day'" class="date-picker-day-table">
							<thead>
							<tr>
								<th class="date-picker-day-table-cell" v-for="weekday in weekdays">{{ weekday }}</th>
							</tr>
							</thead>
							<tbody>
							<tr v-for="rowIndex in range(0, 6)">
								<td v-for="columnIndex in range(0, 7)">
									<div
										class="date-picker-day-table-cell"
										:class="{ notCurrentMonth: !isCurrentMonth(getVisibleDay(rowIndex, columnIndex)) }"
										@click="onClickCell(getVisibleDay(rowIndex, columnIndex))">
										{{ getVisibleDay(rowIndex, columnIndex).getDate() }}
									</div>
								</td>
							</tr>
							</tbody>
						</table>
						<table v-if="mode === 'month'" class="date-picker-day-table">
							<tbody>
							<tr>
								<td>月</td>
							</tr>
							</tbody>
						</table>
						<table v-if="mode === 'year'" class="date-picker-day-table">
							<tbody>
							<tr>
								<td>年</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</template>
		</g-popover>
	</div>
</template>

<script>
  import { getFirstDay, getLastDay, getYearMonthDay, range } from "./utils"
	import GInput from '../input/input'
	import GPopover from '../popover/popover'
	import GIcon from '../icon/icon'
  export default {
    name: "date-picker",
	  props: {
      value: {
        type: Date,
	      default:() => new Date()
      }
	  },
	  components: {
      GInput,
		  GPopover,
      GIcon
	  },
	  data() {
      return {
        mode: 'day',
        wrapper: null,
        weekdays: ['一', '二', '三', '四', '五', '六', '日']
      }
	  },
	  computed: {
      formatValue() {
        let [year, month, day] = getYearMonthDay(this.value)
        month = month < 10 ? `0${month}` : month
        day = day < 10 ? `0${day}` : day
	      return `${year}-${month}-${day}`
      },
      year() {
        return this.value.getFullYear()
      },
		  month() {
        return this.value.getMonth() + 1
		  },
      visibleDate() {
        const oneDay = 1000 * 60 * 60 * 24
        const total = 7 * 6
        const date = this.value
				const firstDay = getFirstDay(date)
	      const lastDay = getLastDay(date)
	      const firstWeekday = firstDay.getDay() || 7
	      const [year, month, day] = getYearMonthDay(date)
        const Days = []
	      let start = firstDay - (firstWeekday - 1) * oneDay
        for (let i = 0; i < total; i++) {
          Days.push(new Date(start + i * oneDay))
        }
        return Days
      },
	  },
	  mounted() {
      this.wrapper = this.$refs.wrapper
	  },
	  methods: {
      isCurrentMonth(date) {
        let [year1, month1] = getYearMonthDay(date)
	      let [year2, month2] = getYearMonthDay(new Date())
        return year1 === year2 && month1 === month2
      },
      onClickCell(date) {
        this.$emit('input', date)
      },
      getVisibleDay(row, col) {
        return this.visibleDate[7*row + col]
      },
      range(begin, end) {
        return range(begin, end)
      },
      handleModeChange(mode) {
        this.mode = mode
      },
	  }
  }
</script>

<style scoped lang="scss">
@import "../styles/var";
.date-picker-wrapper {
	/deep/ .guluer-popover-content-wrapper {
		padding: 0;
		width: auto;
	}
	.date-picker-app {
		.date-picker-header {
			line-height: 40px;
			display: flex;
			border-bottom: 1px solid $border-color;
			padding: 0 8px;
			svg {
				width: 12px;
				fill: rgba(0,0,0,0.45);
				cursor: pointer;
			}
			.prev-year {
				margin-right: 10px;
			}
			.next-month {
				margin-right: 10px;
			}
			&-middle {
				margin: 0 auto;
			}
		}
	}
	.date-picker-content {
		padding: 8px 12px;
		.date-picker-day-table {
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
				width: 22px;
				height: 22px;
				line-height: 22px;
				text-align: center;
				border: 1px solid transparent;
				box-sizing: border-box;
				&.notCurrentMonth {
					color: $gray-color;
				}
				&:not(th):hover {
					background: $hover-ligth-blue;
				}
			}
		}
	}
}
</style>