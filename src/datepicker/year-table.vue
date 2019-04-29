<template>
	<div class="date-picker-content-year">
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
</template>

<script>
  import { getFirstDay, getLastDay, getYearMonthDay, range } from "./utils"
	import GInput from '../input/input'
	import GPopover from '../popover/popover'
	import GIcon from '../icon/icon'
  import dayTable from './day-table'
  import monthTable from './month-table'
  export default {
    name: "date-picker",
	  props: {
      value: {
        type: Date
      },
      display: {
        type: Object
      }
	  },
	  components: {
      GInput,
		  GPopover,
      GIcon,
      dayTable,
      monthTable
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
		  }
	  },
	  methods: {
      getVisibleYear(row, col) {
        return this.visibleYears[row * 3 + col]
      },
      handleYearChange(year) {
        this.$emit('yearChange', year)
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
.date-picker-content-year {
	padding: 8px 12px;
	width: 240px;
	.not-in-range {
		color: $gray-color;
	}
}
</style>