export type Academic = {
    name: string;
    bio?: string;
    school: string;
    grad: string | number;
    parents: Academic[];
};

export const TREE: Academic = {
	"name": "Eric Schkufza",
    "bio": "I am an engineering co-founder at Graft. Prior to that I was a principal applied scientist at Amazon, and a senior researcher at the VMware Research Group. I graduated from Stanford University with a PhD in Computer Science in 2015. My advisor was Professor Alex Aiken. I am interested in programming languages and compilers as they relate to high-performance computing, typically in the context of hardware accelerators. My work focuses on the optimization of machine code, often in the absence of its original source.",
	"school": "Stanford University",
	"grad": 2015,
	"parents": [
	{
		"grad": 1988,
		"school": "Cornell University",
		"name": "Alex Aiken",
		"parents": [
		{
			"grad": "",
			"school": "Yale University",
			"name": "Alex Nicolau",
			"parents": [
			{
				"grad": "",
				"school": "New York University",
				"name": "Joseph Fisher",
				"parents": [	
				{
					"grad": "1952",
					"school": "Yale University",
					"name": "Jacob T. Schwartz ",
					"parents": [
					{
						"grad": "1936",
						"school": "Brown University",
						"name": "Nelson Dunford ",
						"parents": [
						{
							"grad": "1917",
							"school": "St. Petersburg State University",
							"name": "Jacob David Tamarkin ",
							"parents": [
							{
								"grad": "1884",
								"school": "St. Petersburg State University",
								"name": "Andrei Andreyevich Markov ",
								"parents": [
								{
									"grad": "1849",
									"school": "St. Petersburg State University",
									"name": "Pafnuty Lvovich Chebyshev ",
									"parents": [
									{
										"grad": "1834",
										"school": "Kazan State University and Moscow State University",
										"name": "Nikolai Dmitrievich Brashman ",
										"parents": [
										{
											"grad": "",
											"school": "Charles University",
											"name": "Joseph Johann von Littrow ",
											"parents": []
										},
										{
											"grad": "",
											"school": "",
											"name": "Nikolai Ivanovich Lobachevsky ",
											"parents": [
											{
												"grad": "1799",
												"school": "Friedrich-Schiller-Universitat Jena",
												"name": "Johann Martin Christian Bartels ",
												"parents": [
												{
													"grad": "1786",
													"school": "Georg-August-Universitat Gottingen",
													"name": "Johann Friedrich Pfaff ",
													"parents": [
													{
														"grad": "1739",
														"school": "Universitat Leipzig",
														"name": "Abraham Gotthelf Kastner ",
														"parents": [
														{
															"grad": "1713",
															"school": "Martin-Luther-Universitat Halle-Wittenberg",
															"name": "Christian August Hausen ",
															"parents": [
															{
																"grad": "1685",
																"school": "Universitat Leipzig",
																"name": "Johann Christoph Wichmannshausen ",
																"parents": [
																{
																	"grad": "1665",
																	"school": "Universitat Leipzig",
																	"name": "Otto Mencke ",
																	"parents": [
																	{
																		"grad": "1643",
																		"school": "Universitat Leipzig",
																		"name": "Jakob Thomasius ",
																		"parents": [
																		{
																			"grad": "1622",
																			"school": "Universitat Leipzig",
																			"name": "Friedrich Leibniz ",
																			"parents": []
																		}
																		]
																	}
																	]
																}
																]
															},
															{
																"grad": "1686, 1709",
																"school": "Martin-Luther-Universitat Halle-Wittenberg / Eberhard-Karls-Universitat Tubingen",
																"name": "Johann Andreas Planer ",
																"parents": [
																{
																	"grad": "1683",
																	"school": "Martin-Luther-Universitat Halle-Wittenberg",
																	"name": "Johann Pasch ",
																	"parents": [
																	{
																		"grad": "1661, 1687",
																		"school": "Martin-Luther-Universitat Halle-Wittenberg",
																		"name": "Michael Walther, Jr. ",
																		"parents": [
																		{
																			"grad": "1651 1657",
																			"school": "Martin-Luther-Universitat Halle-Wittenberg Martin-Luther-Universitat Halle-Wittenberg",
																			"name": "Aegidius Strauch ",
																			"parents": [
																			{
																				"grad": "1632",
																				"school": "Universitat Rostock",
																				"name": "Abraham Klein (Calovius) ",
																				"parents": []
																			}
																			]
																		},
																		{
																			"grad": "1643, 1644",
																			"school": "Universitat Helmstedt / Martin-Luther-Universitat Halle-Wittenberg",
																			"name": "Johann Andreas Quenstedt ",
																			"parents": [
																			{
																				"grad": "1607",
																				"school": "Universitat Helmstedt",
																				"name": "Georg Calixt ",
																				"parents": [
																				{
																					"grad": "1560, 1566",
																					"school": "Martin-Luther-Universitat Halle-Wittenberg / Universitat Leipzig / Universita di Pisa",
																					"name": "Johannes Caselius ",
																					"parents": [
																					{
																						"grad": "1511, 1514",
																						"school": "Ruprecht-Karls-Universitat Heidelberg / Eberhard-Karls-Universitat Tubingen",
																						"name": "Philipp Melanchthon ",
																						"parents": [
																						{
																							"grad": "1476",
																							"school": "Universitat Ingolstadt",
																							"name": "Johannes Stoffler ",
																							"parents": []
																						},
																						{
																							"grad": "1477, 1481",
																							"school": "Universitat Basel / Universite de Poitiers",
																							"name": "Johann (Johannes Kapnion) Reuchlin ",
																							"parents": [
																							{
																								"grad": "1444",
																								"school": "Universita di Padova",
																								"name": "Johannes Argyropoulos ",
																								"parents": [
																								{
																									"grad": "1436",
																									"school": "Mystras",
																									"name": "Basilios Bessarion ",
																									"parents": [
																									{
																										"grad": "1380, 1393",
																										"school": "",
																										"name": "Georgios Plethon Gemistos ",
																										"parents": [
																										{
																											"grad": "",
																											"school": "",
																											"name": "Demetrios Kydones ",
																											"parents": [
																											{
																												"grad": "1363",
																												"school": "",
																												"name": "Nilos Kabasilas ",
																												"parents": [
																												{
																													"grad": "",
																													"school": "",
																													"name": "Gregory Palamas ",
																													"parents": []
																												}
																												]
																											}
																											]
																										},
																										{
																											"grad": "",
																											"school": "",
																											"name": "Elissaeus Judaeus ",
																											"parents": []
																										}
																										]
																									}
																									]
																								}
																								]
																							},
																							{
																								"grad": "",
																								"school": "",
																								"name": "Jacob ben Jehiel Loans ",
																								"parents": []
																							}
																							]
																						}
																						]
																					}
																					]
																				},
																				{
																					"grad": "1592",
																					"school": "Universitat Helmstedt",
																					"name": "Cornelius Martini ",
																					"parents": [
																					{
																						"grad": "1582,1596",
																						"school": "Universitat Viadrina Frankfurt an der Oder / Universitat Breslau / Universitat Helmstedt",
																						"name": "Duncan Liddel ",
																						"parents": [
																						{
																							"grad": "1580",
																							"school": "Universitat Basel",
																							"name": "John Craig ",
																							"parents": [
																							{
																								"grad": "1553 1559",
																								"school": "College de France Universita di Padova",
																								"name": "Theodor Zwinger ",
																								"parents": [
																								{
																									"grad": "1536",
																									"school": "College de Navarre",
																									"name": "Petrus (Pierre de La Ramee) Ramus ",
																									"parents": [
																									{
																										"grad": "1527",
																										"school": "Universite Catholique de Louvain",
																										"name": "Johannes (Johann Sturm) Sturmius ",
																										"parents": [
																										{
																											"grad": "1515, 1521",
																											"school": "Universite Catholique de Louvain",
																											"name": "Nicolas (Nicolaes Cleynaerts) Clenard ",
																											"parents": [
																											{
																												"grad": "1502 1519",
																												"school": "College de Montaigu Katholieke Universiteit Leuven",
																												"name": "Jacobus (Jacques Masson) Latomus ",
																												"parents": [
																												{
																													"grad": "1474, 1490",
																													"school": "College Sainte-Barbe / College de Montaigu",
																													"name": "Jan Standonck ",
																													"parents": []
																												}
																												]
																											},
																											{
																												"grad": "1519",
																												"school": "Universite Catholique de Louvain / Universitat Ingolstadt",
																												"name": "Jan (Johannes Campensis) van Campen ",
																												"parents": [
																												{
																													"grad": "",
																													"school": "",
																													"name": "Matthaeus Adrianus ",
																													"parents": []
																												}
																												]
																											}
																											]
																										},
																										{
																											"grad": "1527, 1532",
																											"school": "Universite Catholique de Louvain / College de Treguier",
																											"name": "Johannes Winter von Andernach ",
																											"parents": [
																											{
																												"grad": "1513",
																												"school": "Universite de Paris",
																												"name": "Rutger Rescius ",
																												"parents": [
																												{
																													"grad": "1499, 1508",
																													"school": "Universita di Padova",
																													"name": "Girolamo (Hieronymus Aleander) Aleandro ",
																													"parents": [
																													{
																														"grad": "",
																														"school": "",
																														"name": "Moses Perez ",
																														"parents": []
																													},
																													{
																														"grad": "1493",
																														"school": "Universita di Firenze",
																														"name": "Scipione Fortiguerra ",
																														"parents": [
																														{
																															"grad": "1477",
																															"school": "Universita di Firenze",
																															"name": "Angelo Poliziano ",
																															"parents": [
																															{
																																"grad": "1462",
																																"school": "Universita di Firenze",
																																"name": "Marsilio Ficino ",
																																"parents": []
																															},
																															{
																																"grad": "",
																																"school": "",
																																"name": "Cristoforo Landino ",
																																"parents": []
																															}
																															]
																														}
																														]
																													}
																													]
																												}
																												]
																											},
																											{
																												"grad": "1530",
																												"school": "Universite de Paris / Universite de Montpellier",
																												"name": "Jacobus (Jacques Dubois) Sylvius ",
																												"parents": [
																												{
																													"grad": "1516",
																													"school": "Universite de Paris",
																													"name": "Francois Dubois ",
																													"parents": []
																												},
																												{
																													"grad": "",
																													"school": "",
																													"name": "Jean Tagault ",
																													"parents": []
																												}
																												]
																											}
																											]
																										}
																										]
																									},
																									{
																										"grad": "1521",
																										"school": "Universite de Paris",
																										"name": "Jacques Toussain ",
																										"parents": [
																										{
																											"grad": "1486, 1491",
																											"school": "Universite d'Orleans / Universite de Paris",
																											"name": "Guillaume Bude ",
																											"parents": [
																											{
																												"grad": "",
																												"school": "",
																												"name": "Georgius Hermonymus ",
																												"parents": []
																											},
																											{
																												"grad": "1472",
																												"school": "Universita di Padova",
																												"name": "Janus Lascaris ",
																												"parents": [
																												{
																													"grad": "1452",
																													"school": "Mystras / Accademia Romana",
																													"name": "Demetrios Chalcocondyles ",
																													"parents": [
																													{
																														"grad": "1433",
																														"school": "Constantinople / Universita di Mantova",
																														"name": "Theodoros Gazes ",
																														"parents": [
																														{
																															"grad": "1416",
																															"school": "Universita di Padova",
																															"name": "Vittorino da Feltre ",
																															"parents": [
																															{
																																"grad": "1408",
																																"school": "",
																																"name": "Guarino da Verona ",
																																"parents": [
																																{
																																	"grad": "",
																																	"school": "",
																																	"name": "Manuel Chrysoloras ",
																																	"parents": []
																																}
																																]
																															}
																															]
																														}
																														]
																													}
																													]
																												}
																												]
																											}
																											]
																										}
																										]
																									}
																									]
																								},
																								{
																									"grad": "",
																									"school": "Universita di Padova",
																									"name": "Vittore Trincavelli ",
																									"parents": [
																									{
																										"grad": "1487",
																										"school": "Universita di Padova",
																										"name": "Pietro Pomponazzi ",
																										"parents": [
																										{
																											"grad": "",
																											"school": "Universita di Padova",
																											"name": "Nicoletto Vernia ",
																											"parents": [
																											{
																												"grad": "",
																												"school": "",
																												"name": "Gaetano da Thiene ",
																												"parents": []
																											}
																											]
																										},
																										{
																											"grad": "",
																											"school": "Universita di Padova",
																											"name": "Pietro Roccabonella ",
																											"parents": [
																											{
																												"grad": "",
																												"school": "",
																												"name": "Sigismondo Polcastro ",
																												"parents": []
																											}
																											]
																										}
																										]
																									}
																									]
																								}
																								]
																							}
																							]
																						},
																						{
																							"grad": "1566",
																							"school": "Universitat Leipzig / Martin-Luther-Universitat Halle-Wittenberg",
																							"name": "Paul Wittich ",
																							"parents": [
																							{
																								"grad": "1555",
																								"school": "Universitat Leipzig",
																								"name": "Valentin Thau ",
																								"parents": [
																								{
																									"grad": "1543",
																									"school": "Martin-Luther-Universitat Halle-Wittenberg",
																									"name": "Johannes Hommel ",
																									"parents": [
																									{
																										"grad": "1535",
																										"school": "Martin-Luther-Universitat Halle-Wittenberg",
																										"name": "Erasmus Reinhold ",
																										"parents": [
																										{
																											"grad": "1520, 1524",
																											"school": "Albert-Ludwigs-Universitat Freiburg im Breisgau / Universitat Wien",
																											"name": "Jakob Milich ",
																											"parents": [
																											{
																												"grad": "1497 /1506 1506",
																												"school": "College de Montaigu University of Turin",
																												"name": "Desiderius Erasmus ",
																												"parents": [
																												{
																													"grad": "1474",
																													"school": "",
																													"name": "Alexander Hegius ",
																													"parents": [
																													{
																														"grad": "1478",
																														"school": "Universita degli Studi di Ferrara",
																														"name": "Rudolf Agricola ",
																														"parents": []
																													},
																													{
																														"grad": "",
																														"school": "",
																														"name": "Thomas a Kempis ",
																														"parents": []
																													}
																													]
																												}
																												]
																											},
																											{
																												"grad": "1501",
																												"school": "Albert-Ludwigs-Universitat Freiburg im Breisgau",
																												"name": "Ulrich Zasius ",
																												"parents": []
																											}
																											]
																										}
																										]
																									}
																									]
																								}
																								]
																							}
																							]
																						}
																						]
																					}
																					]
																				}
																				]
																			},
																			{
																				"grad": "1630",
																				"school": "Martin-Luther-Universitat Halle-Wittenberg",
																				"name": "Christoph Notnagel ",
																				"parents": [
																				{
																					"grad": "1600, 1610",
																					"school": "Martin-Luther-Universitat Halle-Wittenberg",
																					"name": "Ambrosius Rhodius ",
																					"parents": [
																					{
																						"grad": "1583, 1600",
																						"school": "Martin-Luther-Universitat Halle-Wittenberg",
																						"name": "Melchior Jostel ",
																						"parents": [
																						{
																							"grad": "1570",
																							"school": "Martin-Luther-Universitat Halle-Wittenberg",
																							"name": "Valentin (Valentinus Otho) Otto ",
																							"parents": [
																							{
																								"grad": "1535",
																								"school": "Martin-Luther-Universitat Halle-Wittenberg",
																								"name": "Georg Joachim von Leuchen Rheticus ",
																								"parents": [
																								{
																									"grad": "1515",
																									"school": "Martin-Luther-Universitat Halle-Wittenberg",
																									"name": "Johannes Volmar ",
																									"parents": [
																									{
																										"grad": "1509",
																										"school": "Martin-Luther-Universitat Halle-Wittenberg",
																										"name": "Bonifazius Erasmi ",
																										"parents": []
																									}
																									]
																								},
																								{
																									"grad": "1499",
																									"school": "Uniwersytet Jagiellonski / Universita di Bologna / Universita degli Studi di Ferrara / Universita di Padova",
																									"name": "Nicolaus (Mikoaj Kopernik) Copernicus ",
																									"parents": [
																									{
																										"grad": "1489",
																										"school": "Uniwersytet Jagiellonski",
																										"name": "Leonhard (Leonard Vitreatoris z Dobczyc) von Dobschuctz ",
																										"parents": []
																									},
																									{
																										"grad": "1483",
																										"school": "Universita di Firenze",
																										"name": "Domenico Maria Novara da Ferrara ",
																										"parents": [
																										{
																											"grad": "1457",
																											"school": "Universitat Leipzig / Universitat Wien",
																											"name": "Johannes Muller Regiomontanus ",
																											"parents": [
																											{
																												"grad": "1440",
																												"school": "Universitat Wien",
																												"name": "Georg von Peuerbach ",
																												"parents": [
																												{
																													"grad": "1406",
																													"school": "Universitat Wien",
																													"name": "Johannes von Gmunden ",
																													"parents": [
																													{
																														"grad": "1363, 1375",
																														"school": "Universite de Paris",
																														"name": "Heinrich von Langenstein ",
																														"parents": []
																													}
																													]
																												}
																												]
																											}
																											]
																										},
																										{
																											"grad": "",
																											"school": "",
																											"name": " Luca Pacioli ",
																											"parents": []
																										}
																										]
																									}
																									]
																								}
																								]
																							}
																							]
																						},
																						{
																							"grad": "1562, 1578",
																							"school": "Martin-Luther-Universitat Halle-Wittenberg",
																							"name": "Andreas Schato ",
																							"parents": [
																							{
																								"grad": "1544",
																								"school": "Martin-Luther-Universitat Halle-Wittenberg",
																								"name": "Sebastian (Theodoricus) Dietrich ",
																								"parents": []
																							},
																							{
																								"grad": "1564, 1574",
																								"school": "Martin-Luther-Universitat Halle-Wittenberg / Universita di Padova",
																								"name": "Salomon Alberti ",
																								"parents": [
																								{
																									"grad": "1545",
																									"school": "Martin-Luther-Universitat Halle-Wittenberg",
																									"name": "Caspar Peucer ",
																									"parents": []
																								},
																								{
																									"grad": "1559",
																									"school": "Universita di Padova",
																									"name": "Hieronymus (Girolamo Fabrici d'Acquapendente) Fabricius ",
																									"parents": [
																									{
																										"grad": "1547",
																										"school": "Universita di Padova / Universita degli Studi di Ferrara",
																										"name": "Gabriele Falloppio ",
																										"parents": [
																										{
																											"grad": "1520",
																											"school": "Universita degli Studi di Ferrara",
																											"name": "Antonio Musa Brasavola ",
																											"parents": [
																											{
																												"grad": "1446 1453",
																												"school": "Scuola Pubblica di Vicenza Universita di Padova",
																												"name": "Niccolo Leoniceno ",
																												"parents": [
																												{
																													"grad": "",
																													"school": "Universita di Mantova",
																													"name": "Ognibene (Omnibonus Leonicenus) Bonisoli da Lonigo ",
																													"parents": []
																												},
																												{
																													"grad": "",
																													"school": "",
																													"name": " Pelope ",
																													"parents": []
																												}
																												]
																											}
																											]
																										},
																										{
																											"grad": "1544",
																											"school": "Universita di Padova",
																											"name": "Matteo Realdo (Renaldus Columbus) Colombo ",
																											"parents": [
																											{
																												"grad": "1537",
																												"school": "Universite Catholique de Louvain / Universita di Padova",
																												"name": "Andreas (Andries van Wesel) Vesalius ",
																												"parents": [
																												{
																													"grad": "1529, 1536",
																													"school": "Universite Catholique de Louvain",
																													"name": "Gemma (Jemme Reinerszoon) Frisius ",
																													"parents": [
																													{
																														"grad": "1513, 1530",
																														"school": "Universite Catholique de Louvain",
																														"name": "Petrus (Pieter de Corte) Curtius ",
																														"parents": [
																														{
																															"grad": "1504, 1515",
																															"school": "Universite Catholique de Louvain",
																															"name": "Maarten (Martinus Dorpius) van Dorp ",
																															"parents": [
																															{
																																"grad": "1485",
																																"school": "Universite Catholique de Louvain",
																																"name": "Leo Outers ",
																																"parents": []
																															}
																															]
																														}
																														]
																													}
																													]
																												},
																												{
																													"grad": "",
																													"school": "Universita di Padova Universita degli Studi di Ferrara",
																													"name": "Giovanni Battista della Monte ",
																													"parents": [
																													{
																														"grad": "1486",
																														"school": "Universita di Firenze",
																														"name": "Marco Musuro ",
																														"parents": []
																													}
																													]
																												}
																												]
																											}
																											]
																										}
																										]
																									}
																									]
																								}
																								]
																							}
																							]
																						}
																						]
																					},
																					{
																						"grad": "1576, 1591",
																						"school": "Martin-Luther-Universitat Halle-Wittenberg",
																						"name": "Ernestus Hettenbach ",
																						"parents": []
																					}
																					]
																				}
																				]
																			}
																			]
																		}
																		]
																	}
																	]
																},
																{
																	"grad": "1684, 1686",
																	"school": "Eberhard-Karls-Universitat Tubingen",
																	"name": "Rudolf Jakob Camerarius ",
																	"parents": [
																	{
																		"grad": "1644, 1650",
																		"school": "Friedrich-Schiller-Universitat Jena / Universitat Basel",
																		"name": "Georg Balthasar Metzger ",
																		"parents": [
																		{
																			"grad": "1638, 1640",
																			"school": "Friedrich-Schiller-Universitat Jena",
																			"name": "Johann Georg Macasius ",
																			"parents": [
																			{
																				"grad": "1634",
																				"school": "Universitat Erfurt",
																				"name": "Johannes Musaeus ",
																				"parents": [
																				{
																					"grad": "1629",
																					"school": "Martin-Luther-Universitat Halle-Wittenberg",
																					"name": "Georg Groffhain ",
																					"parents": [
																					{
																						"grad": "1613 1617",
																						"school": "Martin-Luther-Universitat Halle-Wittenberg Martin-Luther-Universitat Halle-Wittenberg",
																						"name": "Paul Rober ",
																						"parents": [
																						{
																							"grad": "1590",
																							"school": "Martin-Luther-Universitat Halle-Wittenberg",
																							"name": "Wolfgang Franz ",
																							"parents": [
																							{
																								"grad": "",
																								"school": "",
																								"name": "Heinrich Maius ",
																								"parents": []
																							}
																							]
																						}
																						]
																					},
																					{
																						"grad": "1596",
																						"school": "Universitat Helmstedt",
																						"name": "Jacobus Martini ",
																						"parents": []
																					}
																					]
																				}
																				]
																			},
																			{
																				"grad": "1640",
																				"school": "Friedrich-Schiller-Universitat Jena",
																				"name": "Balthasar Widmarcter ",
																				"parents": [
																				{
																					"grad": "1625",
																					"school": "Martin-Luther-Universitat Halle-Wittenberg / Universita di Padova",
																					"name": "Werner Rolfinck ",
																					"parents": [
																					{
																						"grad": "1594, 1599",
																						"school": "Martin-Luther-Universitat Halle-Wittenberg",
																						"name": "Daniel Sennert ",
																						"parents": [
																						{
																							"grad": "1588, 1591",
																							"school": "Universitat Leipzig / Universita di Padova",
																							"name": "Jan Jessenius ",
																							"parents": []
																						}
																						]
																					},
																					{
																						"grad": "1603",
																						"school": "Universite Catholique de Louvain / Universita di Padova",
																						"name": "Adriaan van den Spieghel ",
																						"parents": []
																					}
																					]
																				}
																				]
																			}
																			]
																		},
																		{
																			"grad": "1613",
																			"school": "Universitat Basel",
																			"name": "Emmanuel Stupanus ",
																			"parents": [
																			{
																				"grad": "1584",
																				"school": "Universitat Basel",
																				"name": "Petrus Ryff ",
																				"parents": []
																			}
																			]
																		}
																		]
																	},
																	{
																		"grad": "1663",
																		"school": "Eberhard-Karls-Universitat Tubingen",
																		"name": "Elias Rudolph Camerarius, Sr. ",
																		"parents": []
																	}
																	]
																}
																]
															}
															]
														}
														]
													},
													{
														"grad": "",
														"school": "Handelsakademie Hamburg",
														"name": "Johann Elert Bode ",
														"parents": [
														{
															"grad": "1752",
															"school": "Georg-August-Universitat Gottingen",
															"name": "Johann Georg Busch ",
															"parents": [
															{
																"grad": "1726, 1734",
																"school": "Friedrich-Schiller-Universitat Jena",
																"name": "Johann Andreas Segner ",
																"parents": [
																{
																	"grad": "1721",
																	"school": "Friedrich-Schiller-Universitat Jena",
																	"name": "Georg Erhard Hamberger ",
																	"parents": [
																	{
																		"grad": "1694",
																		"school": "Friedrich-Schiller-Universitat Jena",
																		"name": "Johann Adolph Wedel ",
																		"parents": [
																		{
																			"grad": "1667",
																			"school": "Friedrich-Schiller-Universitat Jena / Universiteit Leiden",
																			"name": "Georg Wolffgang Wedel ",
																			"parents": [
																			{
																				"grad": "1634, 1637",
																				"school": "Universiteit Leiden / Universitat Basel",
																				"name": "Franciscus de le Boe Sylvius ",
																				"parents": [
																				{
																					"grad": "1619, 1622",
																					"school": "Universiteit Leiden / Universita di Padova",
																					"name": "Adolph Vorstius ",
																					"parents": [
																					{
																						"grad": "1601/1603/1611",
																						"school": "University of St. Andrews / Universitat Helmstedt / Universiteit Leiden ",
																						"name": "Gilbert Jacchaeus ",
																						"parents": [
																						{
																							"grad": "1582",
																							"school": "Philipps-Universitat Marburg / Universiteit Leiden",
																							"name": "Jacobus (Jacob Harmensz.) Arminius ",
																							"parents": [
																							{
																								"grad": "1572",
																								"school": "Universitat zu Koln / Ruprecht-Karls-Universitat Heidelberg",
																								"name": "Rudolph (Snel van Royen) Snellius ",
																								"parents": [
																								{
																									"grad": "",
																									"school": "Martin-Luther-Universitat Halle-Wittenberg / Universitat Erfurt",
																									"name": "Valentine Naibod ",
																									"parents": []
																								},
																								{
																									"grad": "1549 1561",
																									"school": "University of Cambridge Ruprecht-Karls-Universitat Heidelberg",
																									"name": "Immanuel Tremellius ",
																									"parents": [
																									{
																										"grad": "1515",
																										"school": "University of Cambridge",
																										"name": "Thomas Cranmer ",
																										"parents": []
																									}
																									]
																								}
																								]
																							}
																							]
																						}
																						]
																					}
																					]
																				}
																				]
																			}
																			]
																		}
																		]
																	}
																	]
																},
																{
																	"grad": "1704",
																	"school": "Friedrich-Schiller-Universitat Jena",
																	"name": "Simon Paul Hilscher ",
																	"parents": [
																	{
																		"grad": "1671",
																		"school": "Universiteit Leiden",
																		"name": "Rudolf Wilhelm Krause ",
																		"parents": []
																	}
																	]
																}
																]
															}
															]
														}
														]
													}
													]
												},
												{
													"grad": "1765",
													"school": "Georg-August-Universitat Gottingen",
													"name": "Georg Christoph Lichtenberg ",
													"parents": []
												}
												]
											}
											]
										}
										]
									}
									]
								}
								]
							}
							]
						}
						]
					}
					]
				}
				]
			}
			]
		}
		]
	}
]
}
