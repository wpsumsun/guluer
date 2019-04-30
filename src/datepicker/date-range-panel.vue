<template>
	<div class="date-picker-range-wrapper">
		<div class="date-picker-range-left">
			<div class="date-picker-app">
				<div class="date-picker-header">
					<div class="date-picker-header-left">
						<span class="prev-year" @click="modifyYear(-1)"><g-icon name="left-left"></g-icon></span>
						<span class="prev-month" @click="modifyMonth(-1)"><g-icon name="left"></g-icon></span>
					</div>
					<div class="date-picker-header-middle">
						<span class="date-picker-year-select">{{ display.year }}年</span>
						<span class="date-picker-month-select">{{ display.month + 1 }}月</span>
					</div>
					<div class="date-picker-header-right">
					</div>
				</div>
				<day-table
					:value="value"
					:type="type"
					:hoverDate.sync="hoverDate"
					:display="display"
					:date-range="dateRange"
					@dayChange="handleDayChange">
				</day-table>
			</div>
		</div>
		<div class="date-picker-range-right">
			<div class="date-picker-app">
				<div class="date-picker-header">
					<div class="date-picker-header-left">
					</div>
					<div class="date-picker-header-middle">
						<span class="date-picker-year-select">{{ nextDisplay.year }}年</span>
						<span class="date-picker-month-select">{{ nextDisplay.month + 1 }}月</span>
					</div>
					<div class="date-picker-header-right">
						<span class="next-month" @click="modifyMonth(1)"><g-icon name="right"></g-icon></span>
						<span class="next-year" @click="modifyYear(1)"><g-icon name="right-right"></g-icon></span>
					</div>
				</div>
				<day-table
					:value="value"
					:type="type"
					:hoverDate.sync="hoverDate"
					:date-range="dateRange"
					:display="nextDisplay"
					@dayChange="handleDayChange">
				</day-table>
			</div>
		</div>
	</div>
</template>

<script>
  import { getFirstDay, getLastDay, getYearMonthDay, range } from "./utils"
	import GInput from '../input/input'
	import GPopover from '../popover/popover'
	import GIcon from '../icon/icon'
  import dayTable from './day-table'
  import monthTable from './month-table'
  import yearTable from './year-table'
  export default {
    name: "date",
	  props: {
      value: {
        type: [Date, String]
      },
		  display: {
        type: Object
		  },
		  type: {
        type: String
		  }
	  },
	  components: {
      GInput,
		  GPopover,
      GIcon,
      dayTable,
      monthTable,
      yearTable
	  },
	  data() {
      return {
        dateRange: [],
	      hoverDate: '',
      }
	  },
	  computed: {
      nextDisplay() {
	      let [year, month] = getYearMonthDay(new Date(this.display.year, this.display.month + 1))
	      return { year, month }
      },
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
        if (!this.value) return
        let [year, month, day] = getYearMonthDay(this.value)
	      month = month + 1
        month = month < 10 ? `0${month}` : month
        day = day < 10 ? `0${day}` : day
	      return `${year}-${month}-${day}`
      },
      year() {
        if (!this.value) return
        return this.value.getFullYear()
      },
		  month() {
        if (!this.value) return
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
      modifyMonth(diff) {
        const { year: oldYear, month: oldMonth } = this.display
        const [ year, month ] = getYearMonthDay(new Date(oldYear, oldMonth + diff))
        this.$emit('update:display', { year, month })
      },
      modifyYear(diff) {
        const { year: oldYear, month: oldMonth } = this.display
	      let displayCopy = JSON.parse(JSON.stringify(this.display))
        if (this.mode === 'day') {
          const [ year, month ] = getYearMonthDay(new Date(oldYear + diff, oldMonth))
          displayCopy = { year, month }
        } else if (this.mode === 'year') {
          const yearDiff = diff > 0 ? 10 : -10
	        displayCopy.year = oldYear + yearDiff
        } else {
          displayCopy.year = oldYear + diff
        }
        this.$emit('update:display', displayCopy)
      },
      handleDayChange(date) {
        // this.$emit('dayChange', date)
	      if (!this.dateRange.length) {
	        this.dateRange.push(date)
	      } else {
          this.dateRange.push(date)
		      this.dateRange.sort((a, b) => a.getTime() - b.getTime())
          this.$emit('dayChange', this.dateRange)
	      }
      }
	  }
  }
</script>

<style scoped lang="scss">
@import "../styles/var";
.date-picker-range-wrapper {
	display: flex;
}
.date-picker-wrapper {
	user-select:none;
	/deep/ .guluer-popover-content-wrapper {
		padding: 0;
		width: auto;
	}
	&.daterange-picker-wrapper {
		/deep/ .guluer-popover-content-wrapper {
			max-width: none;
		}
	}
	.date-range-wrapper {
		display: flex;
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
	.operation-wrapper {
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid $border-color;
	}
}
</style>