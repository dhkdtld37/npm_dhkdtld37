// 중첩 객체 및 배열 구조 분해 할당

const metadata = {
	title : "Scratchpad",
	translations: [ {
		locale: "de",
		localization_tags: [],
		title: "JS1"
	}, {
		locale: "de",
		localization_tags: [],
		title: "JS2"
	} ],
	url: "/en-US/docs/Tools/Scratchpad"
};

const { title: engTitle, translations: [{ title: t1 }, { title: t2 }] } = metadata;
console.log(engTitle, t1, t2); 		// "Scratchpad" "JS1", "JS2"


