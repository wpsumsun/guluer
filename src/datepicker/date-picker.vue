<template>
	<div class="date-picker-wrapper" :class="{ 'daterange-picker-wrapper': type==='daterange' }" ref="wrapper">
		<g-popover @onClose="onClose" ref="popover" position="bottom" :container="wrapper">
			<g-input ref="input" @input="onInput" @change="onChange" :value="formatValue"></g-input>
			<template slot="content">
				<date-panel
					v-if="type==='date'"
					:value="value"
					:display.sync="display"
					@dayChange="handleDayChange">
				</date-panel>
				<date-range-panel
					v-if="type==='daterange'"
					:value="value"
					:type="type"
					:display.sync="display"
					@dayChange="handleDayChange">
				</date-range-panel>
			</template>
		</g-popover>
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
  import datePanel from './date-panel'
  import dateRangePanel from './date-range-panel'
  export default {
    name: "date-picker",
	  props: {
      value: {
        type: [Date, String, Array]
      },
		  type: {
        type: String,
			  default: 'date'
		  }
	  },
	  components: {
      GInput,
		  GPopover,
      GIcon,
      dayTable,
      monthTable,
      yearTable,
      datePanel,
      dateRangePanel
	  },
	  data() {
      let [year, month] = getYearMonthDay(this.value ? (this.value instanceof Array ? (this.value[0] ? this.value[0] : new Date()) : this.value ) : new Date())
      return {
        mode: 'day',
        wrapper: null,
        weekdays: ['一', '二', '三', '四', '五', '六', '日'],
	      monthsMapping: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	      display: { year, month }
      }
	  },
	  computed: {
      nextDisplay() {
        if (this.type !== 'daterange') return
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
        if (this.type === 'date') {
          let [year, month, day] = getYearMonthDay(this.value)
          month = month + 1
          month = month < 10 ? `0${month}` : month
          day = day < 10 ? `0${day}` : day
          return `${year}-${month}-${day}`
        } else if (this.type === 'daterange') {
          if (this.value && this.value.length) {
            const range = this.value.map(v => {
              let [year, month, day] = getYearMonthDay(v)
              month = month + 1
              month = month < 10 ? `0${month}` : month
              day = day < 10 ? `0${day}` : day
	            return [year, month, day]
            })
	          const [[year1, month1, day1], [year2, month2, day2]] = range
	          return `${year1}-${month1}-${day1}~${year2}-${month2}-${day2}`
          }
        }
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
      onInput(value) {
	      const reg = /^\d{4}-\d{2}-\d{2}$/
	      if (reg.test(value)) {
          let [year, month, day] = value.split('-')
		      month = month - 1
		      year = year - 0
		      this.display = { year, month }
		      this.$emit('input', new Date(year, month, day))
	      }
      },
      onChange(value) {
        this.$refs.input.setRawValue(this.formatValue)
      },
      onClose() {
        this.mode = 'day'
      },
      setToday() {
        this.$emit('input', new Date())
	      this.$refs.popover.close()
      },
      setEmpty() {
        this.$emit('input', null)
      },
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
        if (!this.value) return
        let [year1, month1, day1] = getYearMonthDay(date)
	      let [year2, month2, day2] = getYearMonthDay(this.value)
        return year1 === year2 && month1 === month2 && day1 === day2
      },
		  isToday(date) {
        let [year1, month1, day1] = getYearMonthDay(date)
	      let [year2, month2, day2] = getYearMonthDay(new Date())
        return year1 === year2 && month1 === month2 && day1 === day2
      },
      handleDayChange(date) {
        this.$emit('input', date)
        this.$refs.popover.close()
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