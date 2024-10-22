export class FormatDate {
	public static reloadDate(date: string) {
		const dateObject: Date = new Date(date);
		const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('ru', {day: 'numeric', month: 'long'});
		return formatter.format(dateObject);
	}
}
