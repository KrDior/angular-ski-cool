export interface InstructorInfo {
	name: string;
	title: string;
	description: string;
}

export const LanguageList = ['French', 'English', 'German', 'Spanish'];

export const ResortList = ['Resort_1', 'Resort_2'];

export const DisciplineList = ['Ski', 'Snowboarding'];

export const LessonList = ['Free ride', 'Relaxing'];

export const InstructorsList = ['Mike Nike', 'Tomass Marnics'];

export const LessonDurationList = ['2 hours', '5 hours'];

export const instructorsData: InstructorInfo[] = [
	{
		name: 'Tomass Marnics',
		title: 'Trainer',
		description: `Tomass is Russian, who originally comes from Latvia. He lives the majority of the year in Switzerland. He has been professional athlete all his life. First his passion was judo, after that he was a member of the Latvian national team in beach volleyball. Since 2003 he’s been professional extreme kayaker; he is the member of the Adidas Sickline Team, which is the only one professional kayak team in the whole world.\n
		Tomass began skiing when he was 5 and since that time he skied in such destinations like Russia, Ukraine, Germany, Austria, Switzerland, Italy, Slovakia, USA, Japan and Canada. Tomass worked as a trainer for NRLI (National Russian league of instructors- 2013-2017) for many years and he was as well official representative of NRLI in ISIA Technical Commission (International Ski Instructors Association). He also holds ISIA card and he is qualified United States Ski Association alpine ski coach. He is UPS method certified ski teacher and holds BASI (British Association of Snowsport Instructors) qualification in cross-country skiing.\n
		He studied psychology in university, which helps him to find a right contact with the people. Speaks Russian, Latvian and English. Learning Italian.Tomass is very stable and strong in his mind and this is a big part of his success in extreme sports.`,
	},
	{
		name: 'Mike Nike',
		title: 'Trainer',
		description: `Tomass is Russian, who originally comes from Latvia. He lives the majority of the year in Switzerland. He has been professional athlete all his life. First his passion was judo, after that he was a member of the Latvian national team in beach volleyball. Since 2003 he’s been professional extreme kayaker; he is the member of the Adidas Sickline Team, which is the only one professional kayak team in the whole world.\n
		Tomass began skiing when he was 5 and since that time he skied in such destinations like Russia, Ukraine, Germany, Austria, Switzerland, Italy, Slovakia, USA, Japan and Canada. Tomass worked as a trainer for NRLI (National Russian league of instructors- 2013-2017) for many years and he was as well official representative of NRLI in ISIA Technical Commission (International Ski Instructors Association). He also holds ISIA card and he is qualified United States Ski Association alpine ski coach. He is UPS method certified ski teacher and holds BASI (British Association of Snowsport Instructors) qualification in cross-country skiing.\n
		He studied psychology in university, which helps him to find a right contact with the people. Speaks Russian, Latvian and English. Learning Italian.Tomass is very stable and strong in his mind and this is a big part of his success in extreme sports.`,
	},
];
