export type ICalendar = {month?: string; dayOfWeek: string; dayOfMonth: number; date: string};

export class Calendar {
	private static dayAssociations: Record<number, string> = {
		0: 'Пн',
		1: 'Вт',
		2: 'Ср',
		3: 'Чт',
		4: 'Пт',
		5: 'Сб',
		6: 'Вс'
	};

	private static monthAssociations: Record<number, string> = {
		0: 'Январь',
		1: 'Февраль',
		2: 'Март',
		3: 'Апрель',
		4: 'Май',
		5: 'Июнь',
		6: 'Июль',
		7: 'Август',
		8: 'Сентябрь',
		9: 'Октябрь',
		10: 'Ноябрь',
		11: 'Декабрь'
	};

	public static generateCalendarArray(monthIncrement = false) {
		const calendar: ICalendar[] = [];
		const today = new Date();
		const month = monthIncrement ? today.getMonth() + 1 : today.getMonth();
		const year = today.getFullYear();
		let monthData: number | string = month + 1;

		if (monthData < 10) {
			monthData = '0' + monthData;
		}

		for (let i = monthIncrement ? 1 : today.getDate() || 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
			const dayOfWeek = new Date(year, month, i).getDay();
			calendar.length === 0
				? calendar.push({
						month: this.monthAssociations[month],
						dayOfWeek: this.dayAssociations[dayOfWeek],
						dayOfMonth: i,
						date: `${year}-${monthData}-${i}`
					})
				: calendar.push({
						dayOfWeek: this.dayAssociations[dayOfWeek],
						dayOfMonth: i,
						date: `${year}-${monthData}-${i}`
					});
		}

		return calendar;
	}
}
