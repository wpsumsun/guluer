<template>
	<div class="date-picker-wrapper" ref="wrapper">
		<g-popover position="bottom" :container="wrapper">
			<g-input :value="formatValue"></g-input>
			<template slot="content">
				<div class="date-picker-app">
					<div class="date-picker-header">
						<div class="date-picker-header-left">
							<span class="prev-year" @click="modifyYear(-1)"><g-icon name="left-left"></g-icon></span>
							<span v-show="mode === 'day'" class="prev-month" @click="modifyMonth(-1)"><g-icon name="left"></g-icon></span>
						</div>
						<div class="date-picker-header-middle">
							<template v-if="mode === 'day'">
								<span class="date-picker-year-select" @click="handleModeChange('year')">{{ display.year }}年</span>
								<span class="date-picker-month-select"@click="handleModeChange('month')">{{ display.month + 1 }}月</span>
							</template>
							<template v-if="mode === 'year'">
								<span>{{ startYear }}年 - {{ endYear }}年</span>
							</template>
							<template v-if="mode === 'month'">
								<span @click="handleModeChange('year')">{{ display.year }}年</span>
							</template>
						</div>
						<div class="date-picker-header-right">
							<span v-show="mode === 'day'"  class="next-month" @click="modifyMonth(1)"><g-icon name="right"></g-icon></span>
							<span class="next-year" @click="modifyYear(1)"><g-icon name="right-right"></g-icon></span>
						</div>
					</div>
					<div class="date-picker-content" v-show="mode === 'day'">
						<table class="date-picker-day-table">
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
										:class="{
											notCurrentMonth: !isCurrentMonth(getVisibleDay(rowIndex, columnIndex)),
											active: isSelected(getVisibleDay(rowIndex, columnIndex)),
											today: isToday(getVisibleDay(rowIndex, columnIndex))
										}"
										@click="onClickCell(getVisibleDay(rowIndex, columnIndex))">
										{{ getVisibleDay(rowIndex, columnIndex).getDate() }}
									</div>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
					<div class="date-picker-content-month" v-show="mode === 'month'">
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
					<div class="date-picker-content-year" v-show="mode === 'year'">
						<table class="date-picker-day-table">
							<tr v-for="yearRowIndex in range(0, 4)">
								<td v-for="yearColIndex in range(0, 3)">
									<div
										class="date-picker-month-cell"
										:class="{ 'not-in-range': getVisibleYear(yearRowIndex, yearColIndex) < startYear || getVisibleYear(yearRowIndex, yearColIndex) > endYear }"
										@click="handleYearChange(getVisibleYear(yearRowIndex, yearColIndex))">
										{{ getVisibleYear(yearRowIndex, yearColIndex) }}
									</div>
								</td>
							</tr>
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
      let [year, month] = getYearMonthDay(this.value)
      return {
        mode: 'day',
        wrapper: null,
        weekdays: ['一', '二', '三', '四', '五', '六', '日'],
	      monthsMapping: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	      display: { year, month }
      }
	  },
	  computed: {
      visibleYears() {
        const { year } = this.display
	      const years = []
        for (let i = 0; i < 12; i++) {
          years.push(Math.floor(year / 10) * 10 + i - 1)
        }
        return years
      },
		  startYear() {
        const { year } = this.display
        return Math.floor(year / 10) * 10
		  },
		  endYear() {
        const { year } = this.display
        return Math.floor(year / 10) * 10 + 9
		  },
      formatValue() {
        let [year, month, day] = getYearMonthDay(this.value)
	      month = month + 1
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
	      const { year, month } = this.display
        const date = new Date(year, month, 1)
				const firstDay = getFirstDay(date)
	      const firstWeekday = firstDay.getDay() || 7
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
      handleMonthChange(index) {
        this.$set(this.display, 'month', index)
	      this.mode = 'day'
      },
      handleYearChange(year) {
        this.$set(this.display, 'year', year)
	      this.mode = 'month'
      },
      modifyMonth(diff) {
        const { year: oldYear, month: oldMonth } = this.display
        const [ year, month ] = getYearMonthDay(new Date(oldYear, oldMonth + diff))
        this.display = { year, month }
      },
      modifyYear(diff) {
        const { year: oldYear, month: oldMonth } = this.display
        if (this.mode === 'day') {
          const [ year, month ] = getYearMonthDay(new Date(oldYear + diff, oldMonth))
          this.display = { year, month }
        } else if (this.mode === 'year') {
          const yearDiff = diff > 0 ? 10 : -10
	        this.$set(this.display, 'year', oldYear + yearDiff)
        } else {
          this.$set(this.display, 'year', oldYear + diff)
        }
      },
      isCurrentMonth(date) {
        const { year, month } = this.display
        let [year1, month1] = getYearMonthDay(date)
	      let [year2, month2] = getYearMonthDay(new Date(year, month))
        return year1 === year2 && month1 === month2
      },
      isSelected(date) {
        let [year1, month1, day1] = getYearMonthDay(date)
	      let [year2, month2, day2] = getYearMonthDay(this.value)
        return year1 === year2 && month1 === month2 && day1 === day2
      },
		  isToday(date) {
        let [year1, month1, day1] = getYearMonthDay(date)
	      let [year2, month2, day2] = getYearMonthDay(new Date())
        return year1 === year2 && month1 === month2 && day1 === day2
      },
      onClickCell(date) {
        this.$emit('input', date)
      },
      getVisibleDay(row, col) {
        return this.visibleDate[7*row + col]
      },
		  getVisibleYear(row, col) {
        return this.visibleYears[row * 3 + col]
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
	user-select:none;
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
				>span {
					cursor: pointer;
					margin: 0 2px;
					&:hover {
						color: $blue-light;
					}
				}
			}
		}
	}
	.date-picker-content {
		padding: 8px 12px;
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
	}
	.date-picker-content-month {
		padding: 8px 12px;
		width: 240px;
	}
	.date-picker-content-year {
		padding: 8px 12px;
		width: 240px;
		.not-in-range {
			color: $gray-color;
		}
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
}
</style>