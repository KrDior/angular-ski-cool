export interface InstructorInfo {
	name: string;
	title: string;
	description: string;
}

export const LanguageList = [
	'LanguageList.French',
	'LanguageList.English',
	'LanguageList.German',
	'LanguageList.Spanish',
];

export const ResortList = ['Resort_1', 'Resort_2'];

export const DisciplineList = ['Ski', 'Snowboarding'];

export const LessonList = ['FreeRide', 'Relaxing'];

export const InstructorsList = ['Mike Nike', 'Tomass Marnics'];

export const LessonDurationList = ['2 hours', '5 hours'];

export const NatureOfRequestList = [
	'NatureOfRequestList.question1',
	'NatureOfRequestList.question2',
	'NatureOfRequestList.question3',
	'NatureOfRequestList.question4',
	'NatureOfRequestList.question5',
];

export const instructorsData: InstructorInfo[] = [
	{
		name: 'Tomass Marnics',
		title: 'InstructorsData.Trainer',
		description: 'InstructorsData.TomassMarnics.Description',
	},
	{
		name: 'Mike Nike',
		title: 'InstructorsData.Trainer',
		description: 'InstructorsData.MikeNike.Description',
	},
];
