module.exports = {
	disableEmoji: false,
	format: '{type}{scope}: {emoji}{subject}',
	list: ['feat', 'fix', 'refactor', 'perf', 'chore', 'docs', 'style', 'test', 'ci'],
	maxMessageLength: 64,
	minMessageLength: 3,
	questions: ['type', 'subject', 'body', 'breaking', 'issues'],
	types: {
		chore: {
			description: 'Изменения процесса сборки или вспомогательного инструмента',
			emoji: '🤖',
			value: 'chore'
		},
		ci: {
			description: 'Настройка CI и работа со скриптами',
			emoji: '🎡',
			value: 'ci'
		},
		docs: {
			description: 'Обновление документации',
			emoji: '✏️',
			value: 'docs'
		},
		feat: {
			description: 'Добавление нового функционала',
			emoji: '🎸',
			value: 'feat'
		},
		fix: {
			description: 'Исправление ошибок',
			emoji: '🐛',
			value: 'fix'
		},
		perf: {
			description: 'Изменения направленные на улучшение производительности',
			emoji: '⚡️',
			value: 'perf'
		},
		refactor: {
			description: 'Правки кода без исправления ошибок или добавления новых функций',
			emoji: '💡',
			value: 'refactor'
		},
		release: {
			description: 'Новый релиз',
			emoji: '🏹',
			value: 'release'
		},
		style: {
			description: 'Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
			emoji: '💄',
			value: 'style'
		},
		test: {
			description: 'Добавление тестов',
			emoji: '💍',
			value: 'test'
		}
	},
	messages: {
		type: 'Выберите тип изменения, которое вы вносите:',
		subject: 'Напишите краткое описание изменения в повелительном наклонении:\n',
		body: 'Напишите более подробное описание изменения:\n ',
		breaking: 'Перечислите все важные изменения:\n',
		issues: 'Задачи, которые закрывает этот коммит, например, TASK#123:'
	}
};
