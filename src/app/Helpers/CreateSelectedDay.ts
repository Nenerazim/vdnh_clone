import {ref} from 'vue';
import {FormatDate} from '@app/Helpers/FormatDate';

export class CreateSelectedDay {
	static selectedDates = ref<string[]>([]);
	static visibleData = ref<string>('на сегодня');
	public static handleDateClick(date: string) {
		switch (true) {
			case this.selectedDates.value.length < 2 && !this.selectedDates.value.includes(date):
				this.selectedDates.value.push(date);
				this.selectedDates.value.sort((a, b) => {
					return new Date(a).getTime() - new Date(b).getTime();
				});
				break;
			default:
				this.selectedDates.value = [date];
				break;
		}
		this.updateVisibleData();
	}

	public static updateVisibleData() {
		const day = this.selectedDates.value;
		this.visibleData.value =
			day.length < 2 ? `на ${FormatDate.reloadDate(day[0])}` : `c ${FormatDate.reloadDate(day[0])} по ${FormatDate.reloadDate(day[1])}`;
	}

	public static betweenDate(date: string) {
		const [startDate, endDate] = this.selectedDates.value;
		return new Date(date) > new Date(startDate) && new Date(date) < new Date(endDate);
	}
}
