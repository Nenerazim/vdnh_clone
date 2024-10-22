import type {IContacts} from '@app/Interfaces/Contacts';

export const MockContscts: IContacts = {
	color: '230,60,70',
	settings: {
		name: 'Контакты',
		title: 'Руководство',
		items: [
			{
				title: 'Пресс-служба',
				description: 'Описание',
				'communication-methods': [],
				btn: [
					{
						text: 'Бланк аккредитации',
						href: '/blank',
						type: 'link'
					},
					{
						text: 'Заявка на проведение мероприятия',
						href: '/btn',
						type: 'button'
					}
				]
			}
		],
		peoples: [
			{
				img_url: 'https://s3.vdnh.ru/content-management/2024/05/03/4d42acd2052f4f4aa84b3a5de70651dbbd7629e5.png',
				alt: 'alt',
				title: 'Сергей Юрьевич Шогуров',
				description: 'wq'
			},
			{
				img_url: 'https://s3.vdnh.ru/content-management/2024/05/03/64b64b6efaee8010753226897cfc1f4d881ba19c.png',
				alt: 'alt',
				title: 'Сергей Юрьевич Шогуров',
				description: 'ssaaa'
			}
		]
	}
};
