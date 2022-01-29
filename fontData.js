//====================================================================================================
//====================================================================================================
//FONT DATA
//====================================================================================================
//====================================================================================================

var OpenTypeFeatureNames = {
	'liga':	'Standard Ligatures',
	'dlig': 'Discretionary Ligatures',
	'swsh': 'Swash',
	'salt': 'Stylistic Alternates',
	'titl': 'Titling',
	'tnum': 'Tabular Figures',
	'onum': 'Oldstyle Figures',
	'smcp':	'Small Capitals'
}

var FontCollectionData = {

//====================================================================================================
'Fraunces': { 
	name:			'Fraunces', 
	style:			'108 styles (variable)', 
	link:			'Google Fonts', 
	linkURL:		'https://fonts.google.com/specimen/Fraunces',
	displayStyle:	"font-variation-settings: 'wght' 600, 'opsz' 36, 'SOFT' 100, 'WONK' 1;",
	sizeAdjust:		1,
	//----------------------------------------------------------------------------------------------------
	sampleString:	'Art Nouveau is a French style that featured sinewy line work and was heavily informed by forms and patterns appearing in nature.',
	sampleStyle:	{
		sizeI:		7,
		weightI: 	7,
		italicI:	1,
		tracking:	0, // in 1/1000 em
		leading:	1.05,
		align:		'left',
		variable:	{
			'wght':		300,
			'opsz':		144,
			'SOFT':		50,
			'WONK':		1
		},
		openType:	{
			'liga':	1,
			'ss01': 0
		}
	},
	//----------------------------------------------------------------------------------------------------
	fontProps:		{
		weights:	[],
		hasItalic:	true,
		isVariable:	true,
		axis:		{
			'wght':		{
				axisName:	'Weight',
				axisMax:	900,
				axisMin:	100,
				axisStep:	10
			},
			'opsz':		{
				axisName:	'Optical Size',
				axisMax:	144,
				axisMin:	9,
				axisStep:	1
			},
			'SOFT':		{
				axisName:	'Soften',
				axisMax:	100,
				axisMin:	0,
				axisStep:	1
			},
			'WONK':		{
				axisName:	'Wonk',
				axisMax:	1,
				axisMin:	0,
				axisStep:	1
			},
		}
	},
	//----------------------------------------------------------------------------------------------------
	description:	'',
	designer:		'',
	foundry:		'Undercase Type',
	release:		'',
},

//====================================================================================================
	'HeptaSlab': { 
		name:			'Hepta Slab', 
		style:			'9 styles (variable)', 
		link:			'Google Fonts', 
		linkURL:		'https://fonts.google.com/specimen/Hepta+Slab',
		displayStyle:	"font-variation-settings: 'wght' 500;",
		sizeAdjust:		0.95,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'The Bruce Type Foundry in New York was founded in 1813, and lasted until 1901. It has a colorful history, and plays a pivotal role in the history of typography through its introduction and improvement of the stereotyping process.',
		sampleString2:	'The Bruce Type Foundry in New York was founded in 1813, and lasted until 1901, when it was acquired by ATF. It has a colorful history, and plays a pivotal role in the history of typography through its introduction and improvement of the stereotyping process.',
		sampleStyle:	{
			sizeI:		7,
			weightI: 	7,
			italicI:	0,
			tracking:	0, // in 1/1000 em
			leading:	1.05,
			align:		'left',
			variable:	{
				'wght':		700
			},
			openType:	{
				'liga':	1,
				'dlig':	1,
				'salt': 0,
				'smcp': 0,
				'ss01': 0,
				'ss02': 0,
				'ss03': 0,
				'ss04': 0
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	false,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	900,
					axisMin:	100,
					axisStep:	10
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Mike LaGattuta',
		foundry:		'',
		release:		'',
	},

//====================================================================================================
	'Minipax': { 
		name:			'Minipax', 
		style:			'4 styles', 
		link:			'Velvetyne', 
		linkURL:		'https://velvetyne.fr/fonts/minipax/',
		displayStyle:	"",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'The Ministry of Truth — Minitrue, in Newspeak... was startlingly different from any other object in sight.',
		sampleString2:	'War Is Peace.\nFreedom Is Slavery.\nIgnorance Is Strength.',
		sampleString3:	'The story takes place in an imagined future, the year 1984, when much of the world has fallen victim to perpetual war, omnipresent government surveillance, historical negationism, and propaganda.',
		sampleStyle:	{
			sizeI:		8,
			weightI: 	4,
			italicI:	0,
			tracking:	0,
			leading:	1,
			align:		'left',
			variable:	{},
			openType:	{
				'liga':	1,
				'dlig':	1,
				'salt': 0,
				'smcp': 0
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[4,5,6,7],
			hasItalic:	false,
			isVariable:	false,
			axis:		{}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Raphaël Ronot',
		foundry:		'Velvetyne',
		release:		'2019',
	},

//====================================================================================================
	'WorkSans': { 
		name:			'Work Sans', 
		style:			'18 styles (variable)', 
		link:			'GitHub', 
		linkURL:		'http://weiweihuanghuang.github.io/Work-Sans/',
		displayStyle:	"letter-spacing: -0.03em; font-variation-settings: 'wght' 400;",
		sizeAdjust:		1.05,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'If you are cursed with an unconquerable craving for work, call Workaholics Synonymous, and a reformed worker will aid you back to happy idleness.',
		sampleStyle:	{
			sizeI:		7,
			weightI: 	3,
			italicI:	1,
			tracking:	-10, // in 1/1000 em
			leading:	0.85,
			align:		'left',
			variable:	{
				'wght':		900
			},
			openType:	{
				'liga':	1,
				'dlig':	1,
				'salt': 0,
				'smcp': 0,
				'swsh': 0
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	true,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	900,
					axisMin:	100,
					axisStep:	10
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Wei Huang',
		foundry:		'',
		release:		'',
	},

//====================================================================================================
	/*'SpaceGrotesk': { 
		name:			'Space Grotesk', 
		style:			'5 styles (variable)', 
		link:			'Florian Karsten', 
		linkURL:		'https://fonts.floriankarsten.com/space-grotesk',
		displayStyle:	'font-weight: 700;',
		sizeAdjust:		1,
		sampleString:	'',
		sampleSizeI:	5,
		description:	'',
		designer:		'',
		foundry:		'',
		release:		'',
	},*/
	/*'SpaceGrotesk': { 
		name:			'Space Grotesk', 
		style:			'5 styles', 
		link:			'Florian Karsten', 
		linkURL:		'https://fonts.floriankarsten.com/space-grotesk',
		displayStyle:	"font-weight: 500;",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'Voyager 1 became the first human-made object to leave our Solar System into interstellar space.',
		sampleStyle:	{
			sizeI:		9,
			weightI: 	7,
			italicI:	0,
			tracking:	0, // in 1/1000 em
			leading:	0.8,
			align:		'left',
			variable:	{},
			openType:	{}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[3,4,5,6,7],
			hasItalic:	false,
			isVariable:	false,
			axis:		{}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Florian Karsten',
		foundry:		'',
		release:		'',
	},*/
	'SpaceGrotesk': { 
		name:			'Space Grotesk', 
		style:			'5 styles (variable)', 
		link:			'Florian Karsten', 
		linkURL:		'https://fonts.floriankarsten.com/space-grotesk',
		displayStyle:	"font-variation-settings: 'wght' 500;",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'Voyager 1 became the first human-made object to leave our Solar System into interstellar space.',
		sampleStyle:	{
			sizeI:		9,
			weightI: 	7,
			italicI:	0,
			tracking:	0, // in 1/1000 em
			leading:	0.8,
			align:		'left',
			variable:	{
				'wght':		700
			},
			openType:	{
				'liga':	1,
				'salt': 0,
				'ss01': 0,
				'ss02': 0,
				'ss03': 0,
				'ss04': 0,
				'ss05': 0
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	false,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	700,
					axisMin:	300,
					axisStep:	10
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Florian Karsten',
		foundry:		'',
		release:		'',
	},

//====================================================================================================
	/*'Metropolis': {
		name:			'Metropolis', 
		style:			'18 styles', 
		link:			'GitHub', 
		linkURL:		'https://github.com/chrismsimpson/Metropolis',
		displayStyle:	'font-weight: 500;',
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString2:	'The TAIPEI–KEELUNG–TAOYUAN metropolitan area is the is the political, economic, and cultural center of the Taiwanese.',
		sampleString:	'A metropolis is a large city or conurbation which is a significant economic, political, and cultural center for a country or region, and an important hub for regional or international connections, commerce, and communications.',
		sampleStyle:	{
			sizeI:		4,
			weightI: 	7,
			italicI:	0,
			tracking:	-10, // in 1/1000 em
			leading:	1.05,
			align:		'left',
			variable:	{},
			openType:	{}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[1, 2, 3, 4, 5, 6, 7, 8, 9],
			hasItalic:	true,
			isVariable:	false,
			axis:		{}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Chris Simpson',
		foundry:		'',
		release:		'',
	},*/

//====================================================================================================
	/*'Spectral': { 
		name:			'Spectral', 
		style:			'14 styles', 
		link:			'Production Type', 
		linkURL:		'https://www.productiontype.com/family/spectral',
		displayStyle:	'font-weight: 300; font-style: italic; font-feature-settings:\'dlig\';',
		sizeAdjust:		1,
		sampleString:	'',
		sampleSizeI:	5,
		description:	'',
		designer:		'',
		foundry:		'',
		release:		'',
	},*/
	'Spectral': {
		name:			'Spectral', 
		style:			'14 styles', 
		link:			'Production Type', 
		linkURL:		'https://www.productiontype.com/family/spectral',
		displayStyle:	"font-weight: 400; font-style: normal; font-feature-settings:'dlig';",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'A spectrum of colors can be observed when white light is dispersed through a prism.',
		sampleStyle:	{
			sizeI:		6,
			weightI: 	2,
			italicI:	1,
			tracking:	0, // in 1/1000 em
			leading:	1,
			align:		'left',
			variable:	{},
			openType:	{
				'liga':	1,
				'dlig':	1,
				'smcp': 0
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[2, 3, 4, 5, 6, 7, 8],
			hasItalic:	true,
			isVariable:	false,
			axis:		{}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Jean-Baptiste Levée',
		foundry:		'Production Type',
		release:		'',
	},

//====================================================================================================
	/*'DMSans': { 
		name:			'DM Sans', 
		style:			'6 styles', 
		link:			'Google Fonts', 
		linkURL:		'https://fonts.google.com/specimen/DM+Sans',
		displayStyle:	'font-weight: 500;',
		sizeAdjust:		1,
		sampleString:	'',
		sampleSizeI:	5,
		description:	'',
		designer:		'',
		foundry:		'',
		release:		'',
	},*/

//====================================================================================================
	/*'CrimsonPro': { 
		name:			'Crimson Pro', 
		style:			'16 styles (variable)', 
		link:			'Google Fonts',
		linkURL:		'https://fonts.google.com/specimen/Crimson+Pro',
		displayStyle:	'font-weight: 500;',
		sizeAdjust:		1.1,
		sampleString:	'',
		sampleSizeI:	5,
		description:	'',
		designer:		'',
		foundry:		'',
		release:		'',
	},*/

//====================================================================================================
	/*'Inter': { 
		name:			'Inter', 
		style:			'16 styles (variable)', 
		link:			'Inter',
		linkURL:		'https://rsms.me/inter/',
		displayStyle:	'font-weight: 700;',
		sizeAdjust:		1,
		sampleString:	'',
		sampleSizeI:	5,
		description:	'',
		designer:		'',
		foundry:		'',
		release:		'',
	},*/

//====================================================================================================
	/*'Spartan': { 
		name:			'Spartan', 
		style:			'9 styles (variable)', 
		link:			'Google Fonts',
		linkURL:		'https://fonts.google.com/specimen/Spartan',
		displayStyle:	'font-weight: 400; letter-spacing: -0.05em;',
		sizeAdjust:		0.9,
		sampleString:	'',
		sampleSizeI:	5,
		description:	'',
		designer:		'',
		foundry:		'',
		release:		'',
	},*/
	
//====================================================================================================
	'Recursive': { 
		name:			'Recursive', 
		style:			'64 styles (variable)', 
		link:			'Recursive', 
		linkURL:		'https://www.recursive.design/',
		displayStyle:	"font-variation-settings: 'wght' 500, 'slnt' 0, 'MONO' 0, 'CASL' 1;",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString2:	"function recursive(typeface){\n    var aNewTypeface = 'by Stephon Nixon',\n        foundry      = 'Arrow Type';\n    workInProgress(typeface);\n    if ( isVariable ) {\n         axis.length = 5;\n    }\n}\nrecursive(Recursive Sans & Mono);",
		sampleString:	'In programming, “recursion” is when a function calls itself, using its own output as an input to yield powerful results.',
		sampleString3:	"function recursive(typeface){\n    var aNewTypeface = 'by Stephon Nixon',\n        foundry      = 'Arrow Type';\n    workInProgress(typeface);\n    if ( variable && axis.length == 5 ) {\n        axis[wght] = 'Weight';\n        axis[slnt] = 'Slant';\n        axis[MONO] = 'Monospace';\n        axis[CASL] = 'Casual';\n        axis[CRSV] = 'Cursive';\n    } else {\n        recursive(typeface);\n    }\n}\nrecursive(Recursive Sans & Mono);",
		sampleStyle:	{
			sizeI:		4,
			weightI: 	7,
			italicI:	0,
			tracking:	0, // in 1/1000 em
			leading:	1.15,
			align:		'left',
			variable:	{
				'wght':		800,
				'slnt':		-15,
				'MONO':		1,
				'CASL':		1,
				'CRSV':		0.5,
			},
			openType:	{}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	false,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	1000,
					axisMin:	300,
					axisStep:	10
				},
				'slnt':		{
					axisName:	'Slant',
					axisMax:	0,
					axisMin:	-15,
					axisStep:	0.1
				},
				'MONO':		{
					axisName:	'Monospace',
					axisMax:	1,
					axisMin:	0,
					axisStep:	0.01
				},
				'CASL':		{
					axisName:	'Casual',
					axisMax:	1,
					axisMin:	0,
					axisStep:	0.01
				},
				'CRSV':		{
					axisName:	'Cursive',
					axisMax:	1,
					axisMin:	0,
					axisStep:	0.5
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Mike LaGattuta',
		foundry:		'',
		release:		'',
	},
	
//====================================================================================================
	'Newsreader': { 
		name:			'Newsreader', 
		style:			'42 styles (variable)', 
		link:			'Production Type', 
		linkURL:		'https://www.productiontype.com/family/newsreader',
		displayStyle:	"font-variation-settings: 'wght' 600, 'opsz' 72;",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'For centuries newspapers were printed on paper and supplied physically to readers.',
		sampleStyle:	{
			sizeI:		5,
			weightI: 	7,
			italicI:	0,
			tracking:	0, // in 1/1000 em
			leading:	1.15,
			align:		'left',
			variable:	{
				'wght':		800,
				'opsz':		72,
			},
			openType:	{
				'liga':	1
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	true,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	800,
					axisMin:	200,
					axisStep:	10
				},
				'opsz':		{
					axisName:	'Optical Size',
					axisMax:	72,
					axisMin:	6,
					axisStep:	1
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Hugues Gentile',
		foundry:		'',
		release:		'',
	},
	
//====================================================================================================
	'Inter': { 
		name:			'Inter', 
		style:			'18 styles (variable)', 
		link:			'Inter', 
		linkURL:		'https://rsms.me/inter/',
		displayStyle:	"font-variation-settings: 'wght' 600, 'slnt' 0;",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'In Euclidean geometry, when two lines in a plane are not parallel, their intersection is the point at which they meet.',
		sampleStyle:	{
			sizeI:		6,
			weightI: 	7,
			italicI:	0,
			tracking:	0, // in 1/1000 em
			leading:	1,
			align:		'left',
			variable:	{
				'wght':		800,
				'slnt':		0,
			},
			openType:	{
				'salt':	0,
				'ss01': 0,
				'ss02': 0
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	false,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	900,
					axisMin:	100,
					axisStep:	10
				},
				'slnt':		{
					axisName:	'Slant',
					axisMax:	0,
					axisMin:	-10,
					axisStep:	0.1
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Rasmus Andersson',
		foundry:		'',
		release:		'',
	},
	
//====================================================================================================
	'Commissioner': { 
		name:			'Commissioner', 
		style:			'54 styles (variable)', 
		link:			'Google Fonts', 
		linkURL:		'https://fonts.google.com/specimen/Commissioner',
		displayStyle:	"font-variation-settings: 'wght' 500, 'slnt' 0, 'FLAR' 100, 'VOLM' 100;",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'In acoustics, loudness is the subjective perception of sound pressure.',
		sampleStyle:	{
			sizeI:		7,
			weightI: 	7,
			italicI:	0,
			tracking:	0, // in 1/1000 em
			leading:	1,
			align:		'left',
			variable:	{
				'wght':		900,
				'slnt':		0,
				'FLAR':		100,
				'VOLM':		100,
			},
			openType:	{
				'liga':	1
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	false,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	900,
					axisMin:	100,
					axisStep:	10
				},
				'slnt':		{
					axisName:	'Slant',
					axisMax:	0,
					axisMin:	-12,
					axisStep:	0.1
				},
				'FLAR':		{
					axisName:	'Flare',
					axisMax:	100,
					axisMin:	0,
					axisStep:	1
				},
				'VOLM':		{
					axisName:	'Volume',
					axisMax:	100,
					axisMin:	0,
					axisStep:	1
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Kostas Bartsokas',
		foundry:		'',
		release:		'',
	},

//====================================================================================================
	'Lexend': { 
		name:			'Lexend', 
		style:			'9 styles (variable)', 
		link:			'Google Fonts', 
		linkURL:		'https://fonts.google.com/specimen/Lexend',
		displayStyle:	"font-variation-settings: 'wght' 500;",
		sizeAdjust:		1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'What if we could change the way the world reads, starting with a font designed to adjust specifically for your needs?',
		sampleStyle:	{
			sizeI:		5,
			weightI: 	5,
			italicI:	0,
			tracking:	0,
			leading:	1.15,
			align:		'left',
			variable:	{
				'wght':		500
			},
			openType:	{
				'ss01':	1
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	false,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	900,
					axisMin:	100,
					axisStep:	10
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Bonnie Shaver-Troup',
		foundry:		'',
		release:		'',
	},
	
//====================================================================================================
	'Crimson Pro': { 
		name:			'Crimson Pro', 
		style:			'16 styles (variable)', 
		link:			'Google Fonts', 
		linkURL:		'https://fonts.google.com/specimen/Crimson+Pro',
		displayStyle:	"font-variation-settings: 'wght' 400;",
		sizeAdjust:		1.1,
		//----------------------------------------------------------------------------------------------------
		sampleString:	'Crimson is a rich, deep red color, inclining to purple. It originally meant the color of the kermes dye produced from a scale insect, Kermes vermilio, but the name is now sometimes also used as a generic term for slightly bluish-red colors that are between red and rose.',
		sampleStyle:	{
			sizeI:		4,
			weightI: 	7,
			italicI:	0,
			tracking:	0, // in 1/1000 em
			leading:	1.15,
			align:		'left',
			variable:	{
				'wght':		400
			},
			openType:	{
				'liga':	1,
				'dlig': 1
			}
		},
		//----------------------------------------------------------------------------------------------------
		fontProps:		{
			weights:	[],
			hasItalic:	true,
			isVariable:	true,
			axis:		{
				'wght':		{
					axisName:	'Weight',
					axisMax:	900,
					axisMin:	200,
					axisStep:	10
				}
			}
		},
		//----------------------------------------------------------------------------------------------------
		description:	'',
		designer:		'Jacques Le Bailly',
		foundry:		'',
		release:		'',
	},
};
