
const COUNTRIES = 1;
const MAIN_BOARD = 2;
const SHEETS = [COUNTRIES, MAIN_BOARD];
const TABLE = "table";

const ALL_CELLS = {
	COUNTRIES : {
		1 : {
			'type' : RED_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [83.18, 10.05],
					"next" : [1]
				},
				1 : {
					"action" : FREE_CARD,
					"location" : [87.5, 15.8],
					"next" : [2]
				},
				2 : {
					"action" : CARDS,
					"location" : [80.85, 19.57],
					"next" : [3]
				},
				3 : {
					"action" : SALOON,
					"location" : [85.88, 26.76],
					"next" : []
				},
			},
			'points' : 1,
			"location" : [78.87, 6.28],
			'nextTo' : [2, 3]
		},
		2 : {
			'type' : YELLOW_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [70.96, 18.14],
					"next" : [1, 2]
				},
				1 : {
					"action" : TIPI,
					"location" : [63.96, 18.86],
					"next" : []
				},
				2 : {
					"action" : WANTED,
					"location" : [70.6, 7.53],
					"next" : [3]
				},
				3 : {
					"action" : NOTHING,
					"location" : [61.08, 6.82],
					"next" : []
				},
			},
			'points' : 6,
			"location" : [59.64, 11.85],
			'nextTo' : [1, 4]
		},
		3 : {
			'type' : GREEN_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [81.57, 38.09],
					"next" : [1, 2]
				},
				1 : {
					"action" : NOTHING,
					"location" : [76.18, 33.41],
					"next" : []
				},
				2 : {
					"action" : CARDS,
					"location" : [90.37, 36.29],
					"next" : []
				}
			},
			'points' : 6,
			"location" : [77.07, 28.02],
			'nextTo' : [1, 4, 5]
		},
		4 : {
			'type' : BLUE_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [64.31, 31.26],
					"next" : [1, 2]
				},
				1 : {
					"action" : NUGGETS,
					"location" : [55.15, 20.29],
					"next" : []
				},
				2 : {
					"action" : FREE_CARD,
					"location" : [66.11, 37.55],
					"next" : []
				}
			},
			'points' : 2,
			"location" : [53.17, 14.0],
			'nextTo' : [2, 3, 5, 6]
		},
		5 : {
			'type' : YELLOW_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [84.44, 50.84],
					"next" : [1, 2]
				},
				1 : {
					"action" : NOTHING,
					"location" : [87.5, 58.93],
					"next" : []
				},
				2 : {
					"action" : NUGGETS,
					"location" : [78.87, 45.09],
					"next" : [3]
				},
				3 : {
					"action" : CARDS,
					"location" : [60.9, 52.64],
					"next" : [4]
				},
				4 : {
					"action" : FREE_CARD,
					"location" : [58.92, 63.06],
					"next" : [5]
				},
				5 : {
					"action" : TIPI,
					"location" : [58.38, 75.11],
					"next" : []
				}
			},
			'points' : 10,
			"location" : [61.62, 45.81],
			'nextTo' : [3, 4, 7, 8, 9]
		},
		6 : {
			'type' : YELLOW_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [35.92, 37.73],
					"next" : [1, 3]
				},
				1 : {
					"action" : NUGGETS,
					"location" : [45.27, 39.88],
					"next" : [2]
				},
				2 : {
					"action" : NUGGETS,
					"location" : [52.09, 33.77],
					"next" : []
				},
				3 : {
					"action" : TIPI,
					"location" : [44.91, 25.33],
					"next" : [4]
				},
				4 : {
					"action" : NOTHING,
					"location" : [45.09, 14.0],
					"next" : []
				}
			},
			'points' : 8,
			"location" : [36.1, 25.33],
			'nextTo' : [4, 9, 10, 11]
		},
		7 : {
			'type' : GREEN_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [64.49, 67.02],
					"next" : [1]
				},
				1 : {
					"action" : FREE_CARD,
					"location" : [73.84, 60.55],
					"next" : [2]
				},
				2 : {
					"action" : NOTHING,
					"location" : [77.43, 55.16],
					"next" : []
				}
			},
			'points' : 5,
			"location" : [71.32, 54.08],
			'nextTo' : [5, 8]
		},
		8 : {
			'type' : BLUE_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [85.88, 75.11],
					"next" : [1, 2]
				},
				1 : {
					"action" : FREE_CARD,
					"location" : [85.34, 67.38],
					"next" : []
				},
				2 : {
					"action" : TIPI,
					"location" : [78.87, 74.21],
					"next" : [3]
				},
				3 : {
					"action" : WANTED,
					"location" : [66.29, 74.75],
					"next" : []
				}
			},
			'points' : 4,
			"location" : [80.85, 63.78],
			'nextTo' : [5, 7]
		},
		9 : {
			'type' : GREEN_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [50.48, 63.06],
					"next" : [1, 2]
				},
				1 : {
					"action" : NOTHING,
					"location" : [49.4, 74.57],
					"next" : []
				},
				2 : {
					"action" : TIPI,
					"location" : [52.27, 51.56],
					"next" : []
				}
			},
			'points' : 4,
			"location" : [44.91, 49.41],
			'nextTo' : [5, 6, 12, 13]
		},
		10 : {
			'type' : GREEN_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [33.76, 16.88],
					"next" : [1, 2, 3]
				},
				1 : {
					"action" : NOTHING,
					"location" : [33.94, 8.07],
					"next" : []
				},
				2 : {
					"action" : TIPI,
					"location" : [26.76, 12.21],
					"next" : []
				},
				3 : {
					"action" : WANTED,
					"location" : [40.05, 7.17],
					"next" : []
				}
			},
			'points' : 6,
			"location" : [21.9, 6.46],
			'nextTo' : [6, 14]
		},
		11 : {
			'type' : BLUE_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [11.48, 38.8],
					"next" : [1]
				},
				1 : {
					"action" : CARDS,
					"location" : [20.29, 38.62],
					"next" : [2, 3]
				},
				2 : {
					"action" : FREE_CARD,
					"location" : [26.22, 42.22],
					"next" : []
				},
				3 : {
					"action" : NUGGETS,
					"location" : [25.86, 30.9],
					"next" : []
				}
			},
			'points' : 3,
			"location" : [12.74, 30.0],
			'nextTo' : [6, 12, 14]
		},
		12 : {
			'type' : YELLOW_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [27.65, 53.0],
					"next" : [1, 2]
				},
				1 : {
					"action" : NOTHING,
					"location" : [35.2, 51.2],
					"next" : []
				},
				2 : {
					"action" : CARDS,
					"location" : [21.36, 55.88],
					"next" : [3]
				},
				3 : {
					"action" : CARDS,
					"location" : [13.1, 50.84],
					"next" : []
				}
			},
			'points' : 7,
			"location" : [19.39, 48.69],
			'nextTo' : [9, 11, 15]
		},
		13 : {
			'type' : BLUE_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [41.49, 70.97],
					"next" : [1, 2]
				},
				1 : {
					"action" : CARDS,
					"location" : [34.48, 68.46],
					"next" : [3]
				},
				2 : {
					"action" : FREE_CARD,
					"location" : [36.64, 76.18],
					"next" : []
				},
				3 : {
					"action" : WANTED,
					"location" : [43.11, 61.45],
					"next" : []
				}
			},
			'points' : 3,
			"location" : [33.05, 62.53],
			'nextTo' : [9, 15]
		},
		14 : {
			'type' : YELLOW_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [11.66, 16.88],
					"next" : [1, 2]
				},
				1 : {
					"action" : NOTHING,
					"location" : [23.16, 18.14],
					"next" : []
				},
				2 : {
					"action" : CARDS,
					"location" : [19.21, 24.97],
					"next" : []
				}
			},
			'points' : 7,
			"location" : [12.74, 9.33],
			'nextTo' : [10, 11]
		},
		15 : {
			'type' : RED_COUNTRY,
			'legs' : {
				0 : {
					"action" : FLAG,
					"location" : [19.57, 77.26],
					"next" : [1, 2]
				},
				1 : {
					"action" : TIPI,
					"location" : [14.71, 68.28],
					"next" : []
				},
				2 : {
					"action" : NUGGETS,
					"location" : [27.47, 76.54],
					"next" : [3]
				},
				3 : {
					"action" : SALOON,
					"location" : [22.62, 68.46],
					"next" : []
				}
			},
			'points' : 3,
			"location" : [14.36, 59.47],
			'nextTo' : [12, 13]
		},
		16 : {
			'type' : RAILROAD,
			"location" : [75.28, 83.73],
			'points' : 4,
			"legs" : {
				0 : {
					"action" : NUGGETS,
					"location" : [28.01, 89.48],
					"next" : [1, 3]
				},
				1 : {
					"action" : DISCOVERY,
					"location" : [39.69, 85.35],
					"next" : [2],
					"destroy" : [3, 4]
				},
				2 : {
					"action" : CARDS,
					"location" : [47.96, 84.81],
					"next" : [5]
				},
				3 : {
					"action" : FREE_CARD,
					"location" : [42.57, 90.74],
					"next" : [4],
					"destroy" : [1, 2]
				},
				4 : {
					"action" : NUGGETS,
					"location" : [50.3, 90.92],
					"next" : [5]
				},
				5 : {
					"action" : DISCOVERY,
					"location" : [61.44, 90.2],
					"next" : [6, 7]
				},
				6 : {
					"action" : NUGGETS,
					"location" : [68.99, 84.27],
					"next" : [],
					"destroy" : [7]
				},
				7 : {
					"action" : CARDS,
					"location" : [73.48, 90.56],
					"next" : [],
					"destroy" : [6]
				},
			}
		}
	},
	MAIN_BOARD : {
		RED_COUNTRY : {
			'type' : TABLE,
			'points' : 0,
			"legs" : {
				11 : {
					"action" : NOTHING,
					"location" : [9.5, 12.75],
					'points' : 0,
				},
				12 : {
					"action" : NOTHING,
					"location" : [12.74, 12.75],
					'points' : 4,
				},
				21 : {
					"action" : NOTHING,
					"location" : [9.68, 15.8],
					'points' : 0,
				},
				22 : {
					"action" : NOTHING,
					"location" : [12.74, 15.62],
					'points' : 4,
				},
				31 : {
					"action" : NOTHING,
					"location" : [9.5, 19.04],
					'points' : 0,
				},
				32 : {
					"action" : NOTHING,
					"location" : [12.74, 19.04],
					'points' : 4,
				},
				41 : {
					"action" : NOTHING,
					"location" : [9.32, 22.27],
					'points' : 0,
				},
				42 : {
					"action" : NOTHING,
					"location" : [12.56, 21.91],
					'points' : 4,
				},
			},
		},
		BLUE_COUNTRY : {
			'type' : TABLE,
			'points' : 4,
			"location" : [32.33, 8.43],
			"legs" : {
				11 : {
					"action" : NOTHING,
					"location" : [22.98, 15.26],
					'points' : 1,
				},
				12 : {
					"action" : NOTHING,
					"location" : [26.22, 15.8],
					'points' : 3,
				},
				13 : {
					"action" : NOTHING,
					"location" : [29.63, 16.16],
					'points' : 6,
				},
				14 : {
					"action" : NOTHING,
					"location" : [32.87, 16.34],
					'points' : 10,
				},
				21 : {
					"action" : NOTHING,
					"location" : [22.26, 18.86],
					'points' : 1,
				},
				22 : {
					"action" : NOTHING,
					"location" : [25.68, 19.04],
					'points' : 3,
				},
				23 : {
					"action" : NOTHING,
					"location" : [29.09, 19.22],
					'points' : 6,
				},
				24 : {
					"action" : NOTHING,
					"location" : [32.15, 19.75],
					'points' : 10,
				},
				31 : {
					"action" : NOTHING,
					"location" : [21.54, 22.09],
					'points' : 1,
				},
				32 : {
					"action" : NOTHING,
					"location" : [24.96, 22.45],
					'points' : 3,
				},
				33 : {
					"action" : NOTHING,
					"location" : [28.37, 22.81],
					'points' : 6,
				},
				34 : {
					"action" : NOTHING,
					"location" : [31.79, 22.81],
					'points' : 10,
				},
				41 : {
					"action" : NOTHING,
					"location" : [21.36, 25.68],
					'points' : 1,
				},
				42 : {
					"action" : NOTHING,
					"location" : [24.78, 25.86],
					'points' : 3,
				},
				43 : {
					"action" : NOTHING,
					"location" : [28.01, 26.22],
					'points' : 6,
				},
				44 : {
					"action" : NOTHING,
					"location" : [30.71, 26.58],
					'points' : 10,
				},
			}
		},
		GREEN_COUNTRY : {
			'type' : TABLE,
			'points' : 6,
			"location" : [51.38, 9.87],
			"legs" : {
				11 : {
					"action" : NOTHING,
					"location" : [41.85, 18.32],
					'points' : 1,
				},
				12 : {
					"action" : NOTHING,
					"location" : [45.09, 18.32],
					'points' : 2,
				},
				13 : {
					"action" : NOTHING,
					"location" : [48.68, 17.96],
					'points' : 4,
				},
				14 : {
					"action" : NOTHING,
					"location" : [52.09, 17.6],
					'points' : 7,
				},
				21 : {
					"action" : NOTHING,
					"location" : [41.85, 22.09],
					'points' : 1,
				},
				22 : {
					"action" : NOTHING,
					"location" : [45.45, 21.91],
					'points' : 2,
				},
				23 : {
					"action" : NOTHING,
					"location" : [48.86, 21.55],
					'points' : 4,
				},
				24 : {
					"action" : NOTHING,
					"location" : [52.09, 21.01],
					'points' : 7,
				},
				31 : {
					"action" : NOTHING,
					"location" : [42.03, 25.15],
					'points' : 1,
				},
				32 : {
					"action" : NOTHING,
					"location" : [45.27, 25.15],
					'points' : 2,
				},
				33 : {
					"action" : NOTHING,
					"location" : [49.22, 24.97],
					'points' : 4,
				},
				34 : {
					"action" : NOTHING,
					"location" : [52.63, 24.43],
					'points' : 7,
				},
				41 : {
					"action" : NOTHING,
					"location" : [42.39, 28.56],
					'points' : 1,
				},
				42 : {
					"action" : NOTHING,
					"location" : [45.45, 28.2],
					'points' : 2,
				},
				43 : {
					"action" : NOTHING,
					"location" : [49.04, 28.38],
					'points' : 4,
				},
				44 : {
					"action" : NOTHING,
					"location" : [52.45, 28.2],
					'points' : 7,
				},
			}
		},
		YELLOW_COUNTRY : {
			'type' : TABLE,
			'points' : 8,
			"location" : [75.28, 8.43],
			"legs" : {
				11 : {
					"action" : NOTHING,
					"location" : [61.98, 15.62],
					'points' : 1,
				},
				12 : {
					"action" : NOTHING,
					"location" : [65.57, 15.44],
					'points' : 2,
				},
				13 : {
					"action" : NOTHING,
					"location" : [69.35, 15.44],
					'points' : 3,
				},
				14 : {
					"action" : NOTHING,
					"location" : [73.3, 15.62],
					'points' : 4,
				},
				15 : {
					"action" : NOTHING,
					"location" : [76.89, 15.62],
					'points' : 5,
				},
				21 : {
					"action" : NOTHING,
					"location" : [61.98, 18.86],
					'points' : 1,
				},
				22 : {
					"action" : NOTHING,
					"location" : [65.21, 18.86],
					'points' : 2,
				},
				23 : {
					"action" : NOTHING,
					"location" : [69.35, 18.86],
					'points' : 3,
				},
				24 : {
					"action" : NOTHING,
					"location" : [73.12, 18.86],
					'points' : 4,
				},
				25 : {
					"action" : NOTHING,
					"location" : [76.54, 18.86],
					'points' : 5,
				},
				31 : {
					"action" : NOTHING,
					"location" : [61.8, 22.45],
					'points' : 1,
				},
				32 : {
					"action" : NOTHING,
					"location" : [65.03, 22.27],
					'points' : 2,
				},
				33 : {
					"action" : NOTHING,
					"location" : [68.99, 22.45],
					'points' : 3,
				},
				34 : {
					"action" : NOTHING,
					"location" : [72.58, 22.63],
					'points' : 4,
				},
				35 : {
					"action" : NOTHING,
					"location" : [76.18, 22.45],
					'points' : 5,
				},
				41 : {
					"action" : NOTHING,
					"location" : [61.62, 26.04],
					'points' : 1,
				},
				42 : {
					"action" : NOTHING,
					"location" : [64.85, 26.22],
					'points' : 2,
				},
				43 : {
					"action" : NOTHING,
					"location" : [68.81, 25.86],
					'points' : 3,
				},
				44 : {
					"action" : NOTHING,
					"location" : [72.76, 26.04],
					'points' : 4,
				},
				45 : {
					"action" : NOTHING,
					"location" : [76.71, 26.04],
					'points' : 5,
				},
			}
		},
		WANTED : {
			'type' : TABLE,
			'points' : [15, 10],
			"location" : [[61.8, 73.85], [74.56, 74.39]],
			"legs" : {
				11 : {
					"action" : NOTHING,
					"location" : [63.6, 80.86],
					'points' : 0,
				},
				12 : {
					"action" : FREE_CARD,
					"location" : [67.19, 81.22],
					'points' : 0,
				},
				13 : {
					"action" : NOTHING,
					"location" : [73.84, 81.22],
					'points' : 0,
				},
				14 : {
					"action" : NOTHING,
					"location" : [73.84, 81.57],
					'points' : 0,
				},
				21 : {
					"action" : NOTHING,
					"location" : [63.24, 84.63],
					'points' : 0,
				},
				22 : {
					"action" : FREE_CARD,
					"location" : [66.83, 84.81],
					'points' : 0,
				},
				23 : {
					"action" : NOTHING,
					"location" : [70.42, 84.99],
					'points' : 0,
				},
				24 : {
					"action" : NOTHING,
					"location" : [74.02, 84.99],
					'points' : 0,
				},
				31 : {
					"action" : NOTHING,
					"location" : [63.24, 88.04],
					'points' : 0,
				},
				32 : {
					"action" : FREE_CARD,
					"location" : [66.65, 88.58],
					'points' : 0,
				},
				33 : {
					"action" : NOTHING,
					"location" : [70.42, 88.76],
					'points' : 0,
				},
				34 : {
					"action" : NOTHING,
					"location" : [73.66, 88.76],
					'points' : 0,
				},
				41 : {
					"action" : NOTHING,
					"location" : [63.24, 91.64],
					'points' : 0,
				},
				42 : {
					"action" : FREE_CARD,
					"location" : [66.29, 91.82],
					'points' : 0,
				},
				43 : {
					"action" : NOTHING,
					"location" : [70.25, 92.0],
					'points' : 0,
				},
				44 : {
					"action" : NOTHING,
					"location" : [73.66, 92.18],
					'points' : 0,
				},
			}
		},
		SALOON : {
			'type' : TABLE,
			'points' : [9, 5],
			"location" : [[44.37, 75.29], [51.91, 74.75]],
			"legs" : {
				11 : {
					"action" : NOTHING,
					"location" : [48.32, 81.4],
					'points' : 0,
				},
				12 : {
					"action" : NOTHING,
					"location" : [51.56, 80.86],
					'points' : 0,
				},
				21 : {
					"action" : NOTHING,
					"location" : [48.14, 84.99],
					'points' : 0,
				},
				22 : {
					"action" : NOTHING,
					"location" : [51.73, 84.63],
					'points' : 0,
				},
				31 : {
					"action" : NOTHING,
					"location" : [48.5, 88.4],
					'points' : 0,
				},
				32 : {
					"action" : NOTHING,
					"location" : [52.09, 88.04],
					'points' : 0,
				},
				41 : {
					"action" : NOTHING,
					"location" : [48.68, 91.82],
					'points' : 0,
				},
				42 : {
					"action" : NOTHING,
					"location" : [52.09, 91.64],
					'points' : 0,
				},
			},
		},
		TIPI : {
			'type' : TABLE,
			"points" : [[6, 4], [9, 6]],
			"location" : {
				[[8.96, 70.43], [8.6, 77.26]],
				[[35.56, 70.97], [35.92, 77.08]]
			},
			"legs" : {
				11 : {
					"action" : POINTS,
					"location" : [9.5, 83.01],
					'points' : 0,
					'next' : []
				},
				12 : {
					"action" : DISCOVERY,
					"location" : [13.64, 83.01],
					'points' : 0,
					'next' : [11]
				},
				13 : {
					"action" : FREE_CARD,
					"location" : [17.77, 83.01],
					'points' : 0,
					'next' : [12]
				},
				14 : {
					"action" : NUGGETS,
					"location" : [22.44, 83.01],
					'points' : 0,
					'next' : [13, 15]
				},
				15 : {
					"action" : CARDS,
					"location" : [26.93, 83.01],
					'points' : 0,
					'next' : [16]
				},
				16 : {
					"action" : FREE_CARD,
					"location" : [30.71, 83.01],
					'points' : 0,
					'next' : [17]
				},
				17 : {
					"action" : POINTS,
					"location" : [34.3, 83.01],
					'points' : 0,
					'next' : []
				},
				21 : {
					"action" : POINTS,
					"location" : [9.5, 86.97],
					'points' : 0,
					'next' : []
				},
				22 : {
					"action" : DISCOVERY,
					"location" : [13.64, 86.97],
					'points' : 0,
					'next' : [11]
				},
				23 : {
					"action" : FREE_CARD,
					"location" : [17.77, 86.97],
					'points' : 0,
					'next' : [12]
				},
				24 : {
					"action" : NUGGETS,
					"location" : [22.44, 86.97],
					'points' : 0,
					'next' : [13, 15]
				},
				25 : {
					"action" : CARDS,
					"location" : [26.93, 86.97],
					'points' : 0,
					'next' : [16]
				},
				26 : {
					"action" : FREE_CARD,
					"location" : [30.71, 86.97],
					'points' : 0,
					'next' : [17]
				},
				27 : {
					"action" : POINTS,
					"location" : [34.3, 86.97],
					'points' : 0,
					'next' : []
				},
				31 : {
					"action" : POINTS,
					"location" : [9.5, 90.74],
					'points' : 0,
					'next' : []
				},
				32 : {
					"action" : DISCOVERY,
					"location" : [13.64, 90.74],
					'points' : 0,
					'next' : [11]
				},
				33 : {
					"action" : FREE_CARD,
					"location" : [17.77, 90.74],
					'points' : 0,
					'next' : [12]
				},
				34 : {
					"action" : NUGGETS,
					"location" : [22.44, 90.74],
					'points' : 0,
					'next' : [13, 15]
				},
				35 : {
					"action" : CARDS,
					"location" : [26.93, 90.74],
					'points' : 0,
					'next' : [16]
				},
				36 : {
					"action" : FREE_CARD,
					"location" : [30.71, 90.74],
					'points' : 0,
					'next' : [17]
				},
				37 : {
					"action" : POINTS,
					"location" : [34.3, 90.74],
					'points' : 0,
					'next' : []
				},
				41 : {
					"action" : POINTS,
					"location" : [9.5, 95.41],
					'points' : 0,
					'next' : []
				},
				42 : {
					"action" : DISCOVERY,
					"location" : [13.64, 95.41],
					'points' : 0,
					'next' : [11]
				},
				43 : {
					"action" : FREE_CARD,
					"location" : [17.77, 95.41],
					'points' : 0,
					'next' : [12]
				},
				44 : {
					"action" : NUGGETS,
					"location" : [22.44, 95.41],
					'points' : 0,
					'next' : [13, 15]
				},
				45 : {
					"action" : CARDS,
					"location" : [26.93, 95.41],
					'points' : 0,
					'next' : [16]
				},
				46 : {
					"action" : FREE_CARD,
					"location" : [30.71, 95.41],
					'points' : 0,
					'next' : [17]
				},
				47 : {
					"action" : POINTS,
					"location" : [34.3, 95.41],
					'points' : 0,
					'next' : []
				},
			}
		},
		"sums" : {
			'type' : TABLE,
			11 : [91.27, 12.03],
			12 : [91.45, 17.6],
			13 : [91.45, 22.63],
			14 : [91.81, 27.48],

			21 : [90.55, 39.52],
			22 : [90.37, 46.17],
			23 : [90.73, 52.64],
			24 : [90.55, 59.47],

			31 : [91.27, 75.46],
			32 : [91.09, 82.11],
			33 : [91.27, 88.22],
			34 : [91.27, 94.51],
		},
		"scores" : {
			'type' : TABLE,
			10 : [11.84, 38.09],
			11 : [18.65, 38.09],
			12 : [25.46, 38.09],
			13 : [32.27, 38.09],
			14 : [39.08, 38.09],
			15 : [45.88, 38.09],
			16 : [52.69, 38.09],
			17 : [59.50, 38.09],
			18 : [66.31, 38.09],
			19 : [73.12, 38.09],
			20 : [11.84, 45.22],
			21 : [18.65, 45.22],
			22 : [25.46, 45.22],
			23 : [32.27, 45.22],
			24 : [39.08, 45.22],
			25 : [45.88, 45.22],
			26 : [52.69, 45.22],
			27 : [59.50, 45.22],
			28 : [66.31, 45.22],
			29 : [73.12, 45.22],
			30 : [11.84, 52.34],
			31 : [18.65, 52.34],
			32 : [25.46, 52.34],
			33 : [32.27, 52.34],
			34 : [39.08, 52.34],
			35 : [45.88, 52.34],
			36 : [52.69, 52.34],
			37 : [59.50, 52.34],
			38 : [66.31, 52.34],
			39 : [73.12, 52.34],
			40 : [11.84, 59.47],
			41 : [18.65, 59.47],
			42 : [25.46, 59.47],
			43 : [32.27, 59.47],
			44 : [39.08, 59.47],
			45 : [45.88, 59.47],
			46 : [52.69, 59.47],
			47 : [59.50, 59.47],
			48 : [66.31, 59.47],
			49 : [73.12, 59.47],
		}
	}
};
