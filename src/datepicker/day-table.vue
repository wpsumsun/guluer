<template>
	<div class="date-picker-content">
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
						@mouseover="handleMouseOver(getVisibleDay(rowIndex, columnIndex))"
						:class="{
											notCurrentMonth: !isCurrentMonth(getVisibleDay(rowIndex, columnIndex)),
											active: isSelected(getVisibleDay(rowIndex, columnIndex)),
											today: isToday(getVisibleDay(rowIndex, columnIndex)),
											'in-range': isInHoverRange(getVisibleDay(rowIndex, columnIndex))&&isCurrentMonth(getVisibleDay(rowIndex, columnIndex))
										}"
						@click="onClickCell(getVisibleDay(rowIndex, columnIndex))">
						{{ getVisibleDay(rowIndex, columnIndex).getDate() }}
					</div>
				</td>
			</tr>
			</tbody>
		</table>
		<div class="operation-wrapper" v-if="type === 'date'">
			<g-button @click="setToday">今天</g-button>
			<g-button @click="setEmpty">清除</g-button>
		</div>
	</div>
</template>

<script>
  import { getFirstDay, getLastDay, getYearMonthDay, range } from "./utils"
  import GButton from '../button/button'
  export default {
    name: "day-table",
    props: {
      value: {
        type: [Date, String, Array]
      },
	    display: {
        type: Object
	    },
	    type: {
        type: String,
		    default: 'date'
	    },
      dateRange: {
        type: Array,
	      default: () => []
      },
      hoverDate: {
        type: [Date, String]
      }
    },
    components: {
      GButton
    },
    data() {
      return {
        weekdays: ['一', '二', '三', '四', '五', '六', '日'],
        monthsMapping: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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
    methods: {
      handleMouseOver(date) {
        this.$emit('update:hoverDate', date)
      },
      setToday() {
        this.$emit('dayChange', new Date())
      },
      setEmpty() {
        this.$emit('dayChange', null)
      },
      isCurrentMonth(date) {
        const { year, month } = this.display
        let [year1, month1] = getYearMonthDay(date)
        let [year2, month2] = getYearMonthDay(new Date(year, month))
        return year1 === year2 && month1 === month2
      },
	    isInHoverRange(date) {
        if (!this.dateRange.length || !this.hoverDate) { return false }
        const timeStamp1 = this.dateRange[0].getTime()
        const timeStamp2 = this.hoverDate.getTime()
        const timeStamp3 = date.getTime()
		    if ((timeStamp3 >= timeStamp1 && timeStamp3 <= timeStamp2) || timeStamp3 >= timeStamp2 && timeStamp3 <= timeStamp1) {
		      return true
		    } else {
		      return false
		    }
	    },
      isSelected(date) {
        if (this.type === 'date') {
          if (!this.value) return
          let [year1, month1, day1] = getYearMonthDay(date)
          let [year2, month2, day2] = getYearMonthDay(this.value)
          return year1 === year2 && month1 === month2 && day1 === day2
        } else if (this.type === 'daterange') {
          if (!this.dateRange.length) return
          let [year1, month1, day1] = getYearMonthDay(date)
          let range = this.dateRange.map((date) => {
            let [year, month, day] = getYearMonthDay(date)
            return { year, month, day }
          })
          return !!range.filter(item => item.year === year1 && item.month === month1 && item.day === day1).length
        }
      },
      isToday(date) {
        let [year1, month1, day1] = getYearMonthDay(date)
        let [year2, month2, day2] = getYearMonthDay(new Date())
        return year1 === year2 && month1 === month2 && day1 === day2
      },
      onClickCell(date) {
        this.$emit('dayChange', date)
      },
      getVisibleDay(row, col) {
        return this.visibleDate[7*row + col]
      },
      range(begin, end) {
        return range(begin, end)
      }
    }
  }
</script>

<style scoped lang="scss">
	@import "../styles/var";
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
					background: $blue-light !important;
				}
				&.in-range {
					background: lighten($blue-light, 30%);
				}
				&.today {
					border: 1px solid $blue-light;
				}
			}
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
</style>