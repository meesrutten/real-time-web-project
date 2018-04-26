
const testData = [47.68, 9.17, 0.015728264767662276, 39.1, -84.51, 0.020620933449459502, 51.38, -2.36, 0.004354731287463497, 37.69, -97.34, 0.006967570059941595, 33.1, -96.67, 0.004457195553050874, 41.6, -73.09, 0.004277883088272965, 52.94, -73.55, 0.0232337722219376, 52.21, 0.12, 0.08330344792253702, 22.54, 114.06, 0.009298632102054408, 31.55, -97.15, 0.0056355346073057025, 38.24, -108.56, 0.005584302474512014, 32.78, -96.8, 0.06985501306419387, 46.2, 6.14, 0.011475997745786157, 47.56, 7.59, 0.017623853681028742, 37.97, -122.53, 0.014421845381423229, 56.26, 9.5, 0.08496849223833189, 43.46, -80.52, 0.028356985501306418, 43.3, 5.37, 0.005379373943337261, 37.87, -122.27, 0.07815461857677135, 38.54, -121.74, 0.008197141246990112, 33.42, -111.83, 0.004918284748194068, 14.06, 108.28, 0.010630667554690302, 46.99, 6.93, 0.008222757313386956, 4.57, -74.3, 0.017085916286695015, 37.29, -121.95, 0.005481838208924637, 42.39, -71.1, 0.01542087197090015, -38.42, -63.62, 0.02892053896203699, 55.75, 37.62, 0.24491521082022644, 51.53, 46.02, 0.004713356217019314, 41.39, -74.21, 0.007198114657513193, 22.27, 113.58, 0.004226650955479277, 55.38, -3.44, 0.28218658742763464, 44.08, -103.23, 0.009554792766022849, 30.7, 51.55, 0.005302525744146729, 48.02, 37.8, 0.005302525744146729, 45.76, 4.84, 0.07518315487473744, 42.99, -81.24, 0.005866079204877299, 4.21, 101.98, 0.007940980583021671, 42.73, -84.56, 0.005968543470464676, 31.3, 120.59, 0.0047645883498130025, 60.13, 18.64, 0.1326656078692556, 53.98, -6.71, 0.004815820482606691, 40.64, 22.94, 0.005430606076130949, 59.94, 30.31, 0.10115784620113735, 51.92, 4.48, 0.01905835339925201, -27.21, -49.64, 0.0077360520518469185, 49.44, 7.75, 0.010912444285055587, -33.47, -70.64, 0.025206209334494595, 50.78, 6.08, 0.013781443721502126, 45.87, -74.08, 0.008069060915005892, 58.41, 15.62, 0.010015881961166043, 21.03, 105.85, 0.015062247041344332, 22.4, 114.11, 0.0649367283159998, 39.32, -111.09, 0.021824888570111174, 49.4, 8.67, 0.011168604949024028, 33.75, -84.39, 0.12649213586761618, 41.71, 44.79, 0.006967570059941595, 40.01, -105.27, 0.05171883805522824, 60.47, 8.47, 0.053947435831753675, 34.15, -118.14, 0.011885854808135662, 35.75, -81.68, 0.004585275885035094, 42.65, -73.76, 0.005097597212971976, 65.01, 25.47, 0.004841436549003535, 46.78, 23.6, 0.014268148983042165, -27.67, 121.63, 0.006045391669655208, 41.88, -87.63, 0.27760131154259954, 40.23, -111.66, 0.018008094676981404, 49.84, 24.03, 0.004482811619447718, 29.94, -90.08, 0.009913417695578667, 37.55, -121.99, 0.004585275885035094, 48.11, -1.68, 0.01554895230288437, 46.73, -94.69, 0.028023976638147447, 25.27, 55.31, 0.005404990009734105, 35.91, -79.08, 0.009887801629181823, 37.96, -91.83, 0.0065064808647984015, 46.82, 8.23, 0.11657871817203751, 23.63, -102.55, 0.029509708489164403, 38.85, -77.31, 0.005276909677749885, 47.53, -122.03, 0.034658537834930066, 4.6, -74.08, 0.004815820482606691, 41.89, 12.48, 0.04154925969568113, 39.17, -86.53, 0.009708489164403915, 59.44, 24.75, 0.014216916850248475, 33.79, -117.85, 0.00425226702187612, 53.12, 18.01, 0.0056355346073057025, 30.59, 114.31, 0.0044059634202571855, -33.92, 18.42, 0.030380654746657104, 54.35, 18.65, 0.00512321327936882, 48.21, 16.37, 0.08668476868692043, 46.95, 7.44, 0.013038577795993647, 22.22, -159.54, 0.004636508017828782, 30.27, 120.16, 0.06181156821558482, 47.52, 14.55, 0.039269429786362005, 50.5, 4.47, 0.10085045340437522, 37.68, -121.77, 0.009016855371689123, 36.97, -122.03, 0.01462677391259798, 44.98, -93.27, 0.07702751165531022, 40.42, -3.7, 0.11314616527486039, 37.45, -122.18, 0.012398176136072544, 54.53, 15.26, 0.015651416568471747, 41.6, -93.61, 0.005609918540908858, 41.79, -88.15, 0.005071981146575132, 54.98, -1.62, 0.005533070341718326, 41.22, -111.97, 0.0041241866898919, 48.63, 2.44, 0.004226650955479277, 40.71, -74.01, 0.5443157948665402, 47.75, -120.74, 0.0045084276858445614, -1.29, 36.82, 0.0066857933295763105, 31.05, 34.85, 0.056124801475485424, 46.88, -96.79, 0.02556483426405041, 64.14, -21.9, 0.007505507454275321, 47.61, -122.33, 0.35754905476714993, 37.35, -121.96, 0.04910599928275014, 54.32, 10.12, 0.00837645371176802, 38.95, -92.33, 0.011783390542548287, 41.01, 28.98, 0.04067831343818843, 50.06, 19.94, 0.06055638096213945, 52.73, 15.24, 0.013422818791946308, 32.31, -64.75, 0.006173472001639428, 52.09, 5.11, 0.03219939546083304, 47.16, 19.5, 0.025462369998463037, 42.36, -71.06, 0.3079819662892566, 9.75, -83.75, 0.0062503202008299605, 37.09, -95.71, 0.16924535068394897, 52.95, -1.16, 0.005353757876940417, 56.05, 12.69, 0.004329115221066653, 6.24, -75.58, 0.01931451406322045, 48.14, 11.58, 0.09582970439059378, 50.85, 4.35, 0.023080075823556534, 60.21, 24.66, 0.012065167272913572, -7.29, 112.73, 0.006301552333623649, -26.2, 28.05, 0.006199088068036272, 23.68, 90.36, 0.007070034325528972, 51.22, 4.4, 0.005148829345765664, 35.69, 139.69, 0.3800655771299759, 42.37, -72.52, 0.01229571187048517, 52.41, 16.93, 0.018904657000870947, 56.84, 60.6, 0.007146882524719504, -34.6, -58.38, 0.07449152108202264, 25.09, 121.56, 0.06283621087145858, 35.77, -78.64, 0.05425482862851581, 34.42, -119.7, 0.02605153952559045, 47.68, -122.21, 0.0060710077360520516, 40.79, -77.86, 0.00837645371176802, 37.26, 13.92, 0.008222757313386956, 44.48, -73.21, 0.007172498591116348, 32.72, -117.16, 0.08578820636303089, 43.59, -79.64, 0.004610891951431938, 34.23, -102.41, 0.04080639377017265, 45.19, 5.72, 0.028638762231671704, 35.68, -82.01, 0.004790204416209847, 42.28, -83.74, 0.04139556329730007, 52.36, -1.17, 0.06647369229981044, 41.39, 2.17, 0.10853527332342845, 53.55, 9.99, 0.08714585788206362, 40.44, -80.0, 0.08081868948204314, 56.16, 10.2, 0.022772683026794405, 50.91, -1.4, 0.0099902658947692, 53.48, -2.25, 0.039269429786362005, 42.37, -71.11, 0.13522721450894, 39.55, -105.78, 0.01393514011988319, 39.74, -104.98, 0.0968287309800707, 41.87, 12.57, 0.11248014754854245, 49.88, 8.65, 0.0069419539935447515, 50.82, -0.14, 0.022081049234079615, -35.28, 149.13, 0.01711153235309186, 51.26, 7.15, 0.0058916952712741435, 51.21, 3.22, 0.005609918540908858, -14.24, -51.93, 0.12008811926840514, 45.1, 15.2, 0.025206209334494595, 37.42, -122.17, 0.014703622111788514, 34.85, -82.39, 0.007274962856703725, 40.12, -88.24, 0.006890721860751063, 32.78, -79.93, 0.010451355089912392, 48.86, 2.35, 0.5826118141298222, 49.99, 36.23, 0.020851478047031097, 43.58, 7.13, 0.005071981146575132, 42.89, -78.88, 0.02218351349966699, 30.44, -84.28, 0.005174445412162509, -34.88, -56.18, 0.027101798247861058, 39.53, -119.81, 0.006275936267226804, 49.45, 11.08, 0.009144935703673343, 40.06, -74.41, 0.04085762590296634, 37.56, -122.33, 0.014037604385470567, -25.28, -54.09, 0.00425226702187612, 43.07, -89.4, 0.05225677544956196, 38.98, -122.84, 0.004354731287463497, -34.93, 138.6, 0.02366924535068395, 37.75, -122.42, 0.008094676981402735, 13.06, 80.25, 0.04021722424304524, 23.89, 45.08, 0.005533070341718326, 35.99, -78.9, 0.0290998514268149, 12.97, 77.59, 0.1130949331420667, 15.87, 100.99, 0.009042471438085968, 0.31, 32.58, 0.005917311337670987, 46.52, 6.63, 0.02961217275475178, 53.36, -2.09, 0.00425226702187612, -8.05, -34.88, 0.004738972283416159, 33.45, -112.07, 0.03099544034018136, 45.47, 9.19, 0.02979148521952969, 18.22, -66.59, 0.005994159536861519, 32.07, 34.78, 0.01011834622675342, 38.73, -9.15, 0.02036477278549106, 33.72, -117.83, 0.012884881397612583, 63.83, 20.26, 0.005225677544956196, 55.95, -3.19, 0.07149444131359188, -0.79, 113.92, 0.014652389978994826, 55.6, 13.0, 0.018879040934474102, 49.76, -123.76, 0.0041241866898919, 19.08, 72.88, 0.02761411957579794, 42.73, -73.69, 0.012628720733644141, 36.15, -95.99, 0.01011834622675342, 51.45, -0.97, 0.0049951329473846, 40.46, -3.75, 0.04103693836774425, 27.66, -81.52, 0.009836569496388135, 29.95, -90.07, 0.00768481991905323, 46.23, 2.21, 0.2669706439879092, 47.04, -122.9, 0.005097597212971976, 35.01, 135.77, 0.015011014908550642, 46.16, -1.15, 0.005712382806496235, 57.71, 11.97, 0.06588452277268303, 41.84, -71.41, 0.004585275885035094, 37.39, -5.98, 0.012475024335263077, 26.82, 30.8, 0.005379373943337261, 33.59, 130.4, 0.007377427122291101, 51.05, -114.06, 0.01636866642758338, 35.86, 139.65, 0.005071981146575132, 47.37, 8.54, 0.09534299912905374, -30.56, 22.94, 0.028331369434909576, 42.96, -85.67, 0.020749013781443722, 6.42, -66.59, 0.009298632102054408, 53.27, -9.06, 0.006480864798401558, 64.96, -19.02, 0.004585275885035094, 37.71, -122.25, 0.041702956094062195, 38.88, -77.11, 0.013730211588708439, 35.05, -85.31, 0.00781290025103745, 47.81, 13.06, 0.00812029304779958, 40.3, -111.69, 0.006019775603258364, 43.05, -76.15, 0.00468774015062247, 54.6, -5.83, 0.005328141810543573, 52.39, 13.07, 0.005225677544956196, 41.82, -71.41, 0.01298734566319996, 61.52, 105.32, 0.11604078077770377, 34.52, -105.87, 0.005353757876940417, 34.02, -118.49, 0.015881961166043342, 32.85, -117.27, 0.0045084276858445614, 52.52, 13.41, 0.32837235514114455, 48.46, 35.05, 0.004713356217019314, 49.26, 2.48, 0.007915364516624827, -41.29, 174.78, 0.033403350581484706, 51.45, -2.59, 0.029560940621958093, 51.97, 5.66, 0.004201034889082433, 43.7, 7.27, 0.010605051488293459, 45.8, 126.53, 0.009862185562784979, 34.69, 135.81, 0.005840463138480455, 42.44, -76.5, 0.007146882524719504, -5.09, -42.8, 0.005251293611353041, 43.86, 18.41, 0.0045084276858445614, 35.15, -90.05, 0.006788257595163686, -43.53, 172.64, 0.027562887443004253, 35.47, -97.52, 0.011117372816230339, 35.91, -79.06, 0.014575541779804293, 55.68, 12.57, 0.07444028894922895, 51.48, -3.18, 0.005866079204877299, 51.23, 6.77, 0.01931451406322045, 46.15, 15.0, 0.010220810492340797, 43.62, -116.21, 0.010656283621087146, 34.27, -116.39, 0.005225677544956196, 30.46, -91.14, 0.008888775039704902, 34.69, 135.18, 0.004969516880987755, 52.37, 4.9, 0.1265689840668067, 56.47, 84.97, 0.004354731287463497, 56.13, -106.35, 0.10313028331369435, 28.45, -82.59, 0.0082483733797838, 45.42, -75.7, 0.0631948358010144, 31.95, -102.17, 0.006045391669655208, 48.76, -122.49, 0.011783390542548287, 43.06, 141.35, 0.01180900660894513, 43.16, -77.61, 0.051257748860085044, -32.93, 151.77, 0.005174445412162509, 44.47, -73.17, 0.005046365080178288, 43.65, -79.38, 0.24301962190686, 27.95, -82.46, 0.02105640657820585, 51.92, 19.15, 0.09360110661406834, 37.8, -122.27, 0.06281059480506174, -6.91, 107.61, 0.020441620984681594, 39.29, -76.61, 0.0371176802090271, 58.38, 26.73, 0.01080998001946821, 34.96, -116.42, 0.011194221015420872, 52.01, 4.71, 0.014421845381423229, 31.55, 74.34, 0.004329115221066653, 55.03, 82.92, 0.010502587222706082, 59.33, 18.06, 0.1457298017316461, 33.68, -117.79, 0.012679952866437829, 33.52, -86.8, 0.015113479174138019, 32.22, -110.93, 0.01367897945591475, 44.56, -123.26, 0.011578462011373533, 51.05, 3.73, 0.007889748450227984, 48.31, 14.29, 0.01124545314821456, 51.51, -0.12, 0.671064091398125, 50.93, 11.59, 0.00468774015062247, 39.47, -87.41, 0.0041241866898919, 27.77, -82.64, 0.0044059634202571855, 44.05, -123.09, 0.012270095804088324, 55.7, 13.19, 0.014140068651057944, 25.79, -80.23, 0.02241405809723859, 44.43, 26.1, 0.047953276294892155, 12.88, 121.77, 0.024284030944208206, 44.56, -72.58, 0.004354731287463497, 7.87, 80.77, 0.005379373943337261, 50.45, 30.52, 0.08952815205697014, 43.6, 7.01, 0.006455248732004713, 40.27, -86.13, 0.02840821763410011, 55.86, -4.25, 0.004201034889082433, 53.8, -1.55, 0.007607971719862698, 31.97, -99.9, 0.03967928684871151, -37.81, 144.96, 0.17910753624673395, 44.62, 33.53, 0.004636508017828782, 30.28, -81.4, 0.006813873661560531, 37.23, -80.41, 0.022106665300476457, 52.28, -1.58, 0.004815820482606691, 38.97, -95.24, 0.01168092627696091, 51.44, 5.47, 0.019007121266458323, 42.7, 23.32, 0.02748603924381372, 33.95, -83.38, 0.004892668681797223, 40.81, -96.68, 0.009196167836467033, 19.43, -99.13, 0.011271069214611405, 34.14, -118.26, 0.005148829345765664, 37.36, -122.03, 0.023771709616271324, 35.53, 139.7, 0.00455965981863825, 40.43, -86.91, 0.007915364516624827, 52.22, 6.89, 0.00425226702187612, 38.98, -76.49, 0.004534043752241406, 37.49, -122.24, 0.005661150673702546, 48.38, 31.17, 0.08035760028689995, 51.34, 12.37, 0.01918643373123623, 38.3, -77.46, 0.008991239305292279, 28.54, -81.38, 0.020313540652697373, 35.23, -80.84, 0.031687074132896155, 28.64, 77.22, 0.02279829909319125, 35.96, -83.92, 0.006378400532814181, 14.08, -87.22, 0.007531123520672166, 34.05, -111.09, 0.013422818791946308, 38.83, -104.82, 0.010092730160356576, 49.82, 15.47, 0.04075516163737897, 53.73, -127.65, 0.005379373943337261, 33.02, -96.7, 0.005737998872893078, 48.58, 7.75, 0.008017828782212204, 43.6, 1.44, 0.03542701982683539, 49.82, 6.13, 0.004790204416209847, 39.61, -105.02, 0.004277883088272965, 53.96, -1.08, 0.0062503202008299605, 31.79, -7.09, 0.004892668681797223, 14.6, 120.98, 0.008863158973308059, 49.24, 7.0, 0.009657257031610226, 47.21, 7.54, 0.004534043752241406, 50.74, 7.1, 0.022106665300476457, 35.93, -86.87, 0.004662124084225627, 43.8, -120.55, 0.016266202161996004, 51.05, 13.74, 0.018853424868077256, 39.05, -76.64, 0.012500640401659921, 22.33, 87.32, 0.00724934679030688, 60.17, 24.94, 0.07433782468364158, 33.49, -111.93, 0.011834622675341975, 58.6, 25.01, 0.011988319073723039, 56.95, 24.11, 0.016138121830011783, 54.99, 73.37, 0.006199088068036272, 44.49, 11.34, 0.009657257031610226, 47.22, -1.55, 0.02241405809723859, 41.2, -77.19, 0.02679440545109893, 38.8, -77.05, 0.00568676674009939, 53.38, -1.47, 0.01229571187048517, 40.36, -74.67, 0.012193247604897792, 45.56, 5.92, 0.010195194425943951, -32.52, -55.77, 0.006199088068036272, 38.25, -85.76, 0.006737025462369999, 51.24, -2.39, 0.0041498027562887445, 32.73, -97.32, 0.005276909677749885, -25.27, 133.78, 0.08007582355653466, 10.96, -74.8, 0.0052000614785593525, 59.91, 10.75, 0.09575285619140325, 53.54, 9.99, 0.004277883088272965, 41.5, -81.7, 0.02405348634663661, 48.0, 7.84, 0.0058916952712741435, 13.73, 100.52, 0.010348890824325017, 33.38, -117.25, 0.016266202161996004, 49.49, 8.47, 0.01055381935549977, 47.5, 19.04, 0.037553153337773454, 53.71, 27.95, 0.006532096931195245, 51.75, -1.26, 0.036374814283518624, 41.66, -91.53, 0.020569701316665814, 33.43, -111.94, 0.0077360520518469185, 35.76, -79.02, 0.026435780521543113, -27.47, 153.02, 0.08163840360674215, 40.69, -89.59, 0.018008094676981404, 42.05, -87.69, 0.005584302474512014, -22.9, -43.21, 0.0740048158204826, 24.48, 118.09, 0.0045084276858445614, -31.95, 115.86, 0.03376197551104052, 49.01, 8.38, 0.04713356217019315, 50.88, 4.7, 0.004354731287463497, 50.94, 6.96, 0.049131615349146986, 48.15, 17.11, 0.005353757876940417, 49.9, -97.14, 0.006839489727957375, 34.05, -118.24, 0.21986269788411292, 10.49, -66.9, 0.013499666991136841, 56.86, 35.91, 0.007018802192735284, 47.66, -117.43, 0.004815820482606691, 41.78, -87.6, 0.005712382806496235, 51.25, -85.32, 0.013704595522311593, 41.25, -96.0, 0.006275936267226804, 37.34, -121.89, 0.05666273886981915, 36.2, 138.25, 0.21704493058046007, 50.11, 8.68, 0.008094676981402735, 61.5, 23.76, 0.005533070341718326, 31.3, 121.5, 0.005302525744146729, 49.2, 16.61, 0.02492443260412931, 33.69, -78.89, 0.00855576617654593, 44.84, -0.58, 0.011988319073723039, 35.2, -91.83, 0.010528203289102925, 45.64, -122.66, 0.0041498027562887445, 39.95, -75.16, 0.09314001741892515, 37.54, -77.44, 0.017265228751472923, 38.9, -77.04, 0.36776986525949074, 43.78, -88.79, 0.029842717352323377, 60.39, 5.32, 0.02279829909319125, 41.55, -8.43, 0.007889748450227984, 42.77, -70.85, 0.004175418822685588, 33.95, -93.85, 0.005789231005686767, 35.79, -78.78, 0.004610891951431938, 48.78, 9.18, 0.031635842000102464, 40.74, -74.03, 0.008299605512577489, 53.54, -113.49, 0.027204262513448436, 42.41, -71.38, 0.03852656386085353, 42.33, -72.64, 0.009349864234848097, 32.06, 118.8, 0.0264870126543368, 51.17, 10.45, 0.44782007274962854, 51.11, 17.04, 0.01636866642758338, 39.96, -83.0, 0.052769096777498845, 63.43, 10.4, 0.019724371125569958, -35.68, -71.54, 0.009196167836467033, 38.58, -121.49, 0.02123571904298376, 35.45, 139.64, 0.005917311337670987, 36.78, -119.42, 0.11422204006352785, 37.43, -78.66, 0.018392335672934065, 53.93, -116.58, 0.004610891951431938, 47.41, 4.72, 0.009144935703673343, 47.67, -122.12, 0.027947128438956914, 23.7, 120.96, 0.0568676674009939, 48.43, -123.37, 0.037834930068138733, 43.25, -79.87, 0.0045084276858445614, 40.65, -73.95, 0.128823197909729, 46.06, 14.51, 0.01480608637737589, 61.92, 25.75, 0.07472206567959425, 35.86, 104.2, 0.15738511194221017, 42.64, -71.33, 0.004943900814590911, 40.42, -82.91, 0.014191300783851632, 36.11, -115.17, 0.005968543470464676, -33.87, 151.21, 0.13440750038424099, 29.42, -98.49, 0.04096009016855372, 54.71, 20.51, 0.0041241866898919, 41.7, -73.92, 0.005046365080178288, 52.49, -1.89, 0.019083969465648856, 37.37, -122.04, 0.038219171064091395, 57.04, 8.5, 0.006608945130385778, 47.61, -122.2, 0.01593319329883703, 55.78, -2.35, 0.008581382242942774, 39.1, -76.85, 0.0055586864081151694, 37.39, -122.11, 0.004790204416209847, 38.96, -77.36, 0.00568676674009939, 45.94, 24.97, 0.02705056611506737, 53.35, -6.26, 0.047748347763717405, 39.1, -94.58, 0.022644602694810185, 41.45, -71.52, 0.00981095342999129, -1.95, 30.06, 0.004790204416209847, 43.72, 10.4, 0.005225677544956196, 52.13, 5.29, 0.18763768635688305, 48.67, 19.7, 0.009606024898816538, 41.42, -73.28, 0.0041498027562887445, 40.76, -111.89, 0.04815820482606691, 33.54, -84.23, 0.005328141810543573, 45.77, 4.89, 0.006737025462369999, 52.23, 21.01, 0.053870587632563145, 44.82, 20.46, 0.007838516317434294, 40.52, -75.78, 0.004943900814590911, 53.08, 8.8, 0.012910497464009426, 52.27, 10.53, 0.008837542906911215, 45.07, 7.69, 0.005071981146575132, 30.27, -97.74, 0.2539832983247093, 45.51, -73.55, 0.1591013883907987, 42.73, 25.49, 0.018392335672934065, 18.52, 73.86, 0.024975664736922996, -23.55, -46.64, 0.14959782775756955, 20.59, 78.96, 0.07479891387878478, 6.93, 79.86, 0.0054562221425277935, 39.92, 32.85, 0.006045391669655208, -36.85, 174.76, 0.03865464419283775, 48.69, 6.18, 0.007172498591116348, 39.4, -8.22, 0.048209436958860596, 54.09, 18.78, 0.005097597212971976, -30.03, -51.23, 0.015830729033249655, 54.69, 25.28, 0.010886828218658743, 53.9, 27.57, 0.07976843075977252, 35.11, -106.61, 0.01454992571340745, 37.57, 126.98, 0.056432194272247556, 38.84, -120.9, 0.006839489727957375, 52.67, -8.63, 0.005789231005686767, 40.64, -8.65, 0.011066140683436651, 50.89, 5.98, 0.006429632665607869, 36.84, -76.3, 0.004277883088272965, 33.1, -96.83, 0.018264255340949845, 45.25, -69.45, 0.004790204416209847, 25.91, -97.43, 0.009759721297197602, 46.8, -71.24, 0.004226650955479277, 42.37, -83.35, 0.0044059634202571855, 40.73, -74.08, 0.00425226702187612, 56.88, 24.6, 0.011194221015420872, 39.9, 116.41, 0.325836364567857, 23.13, 113.26, 0.017188380552282393, 45.81, 15.98, 0.019724371125569958, 36.17, -86.78, 0.03921819765356832, 29.65, -82.32, 0.008709462574926994, 29.76, -95.37, 0.029765869153132844, 3.14, 101.69, 0.015267175572519083, 1.35, 103.82, 0.08763256314360367, 34.69, 135.5, 0.028818074696449612, 55.17, 23.88, 0.011475997745786157, 39.77, -86.16, 0.025103745068907217, 37.77, -122.42, 1.0, 35.28, -120.66, 0.0066857933295763105, 39.47, -0.38, 0.004815820482606691, 55.79, 49.11, 0.0047645883498130025, 35.6, -82.55, 0.0058148470720836105, 42.02, -93.63, 0.014447461447820073, 50.63, 3.06, 0.012859265331215739, 41.31, -72.93, 0.011347917413801936, 38.96, 35.24, 0.014780470310979047, 42.81, -1.65, 0.00425226702187612, 42.33, -83.05, 0.012705568932834675, 60.45, 22.26, 0.004175418822685588, 31.49, 120.31, 0.0041498027562887445, -40.9, 174.89, 0.054664685690865314, 50.08, 14.44, 0.09378041907884625, -6.21, 106.85, 0.03132844920334033, 43.04, -87.91, 0.013141042061581024, 30.33, -81.66, 0.005737998872893078, 41.29, 36.33, 0.006583329063988934, 49.79, 9.95, 0.005840463138480455, 32.83, -79.83, 0.004201034889082433, 44.94, -73.1, 0.034786618166914286, 37.32, -122.03, 0.007710435985450075, 31.23, 121.47, 0.18382089246375327, 43.01, -123.89, 0.006711409395973154, 52.13, -3.78, 0.004610891951431938, 37.44, -122.14, 0.06352784466417337, 51.76, 19.46, 0.00655771299759209, 43.55, -96.7, 0.004892668681797223, 52.04, -0.76, 0.012065167272913572, 59.86, 17.64, 0.012090783339310416, 53.41, -8.24, 0.02904861929402121, 43.61, 3.88, 0.015036630974947488, 53.76, -2.7, 0.009913417695578667, 35.91, 127.77, 0.02105640657820585, 54.74, 55.96, 0.0045084276858445614, 23.71, 90.41, 0.010272042625134484, 38.63, -90.2, 0.035503868026025925, 38.04, -84.5, 0.006993186126338439, 52.41, -1.52, 0.008043444848609048, 38.03, -78.48, 0.017777550079409805, -12.05, -77.06, 0.020390388851887903, 35.44, 139.64, 0.12485270761821815, 37.39, -122.08, 0.15625800502074902, 62.24, 25.75, 0.011322301347405092, 45.52, -122.68, 0.2424560684461294, 17.39, 78.49, 0.02105640657820585, 40.11, -88.21, 0.01080998001946821, 41.49, -99.9, 0.007198114657513193, 44.31, -85.6, 0.032686100722373074, 41.16, -8.62, 0.007607971719862698, 55.16, 61.4, 0.004713356217019314, 56.49, -4.2, 0.01155284594497669, 37.94, -122.35, 0.018699728469696194, 68.97, 33.08, 0.005148829345765664, 52.38, 9.73, 0.009170551770070187, 39.07, 21.82, 0.0273579589118295, 40.23, -75.52, 0.006532096931195245, 49.26, -123.11, 0.12298273477124853, 37.98, 23.73, 0.03850094779445668];

export default testData;