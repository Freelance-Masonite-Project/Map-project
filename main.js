$(document).ready(()=>{
   var locations = [
      {
         "Country": "Canada",
         "Name": "Calgary",
         "Notes": "RES, Entry",
         "Street": "6693 30th St. SE ",
         "City": "Calgary",
         "State": "AB",
         "Zip": "T2C 1N6",
         "Telephone #": "403-720-6136",
         "Plant Manager": "Gord Hagelin*",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Ponsamy Gounder"
         },
         "lat": 50.993294,
         "lng": -113.984215
      },
      {
         "Country": "Canada",
         "Name": "Harring (London)",
         "Notes": "ARCH",
         "Street": "3799 Commerce Rd",
         "City": "London ",
         "State": "ON",
         "Zip": "N6N1P9",
         "Telephone #": "519-644-2444\n888-689-0683",
         "Plant Manager": "Michael Plaisier",
         "Division Leader": "Frank McDermott*",
         "Plant Safety Coord": {
            "Mgr": "OPEN - "
         },
         "lat": 42.935333,
         "lng": -81.16895
      },
      {
         "Country": "Canada",
         "Name": "Lac Megantic",
         "Notes": "RES, Int. E",
         "Street": "4180 Villeneuve St.",
         "City": "Lac Megantic",
         "State": "QC",
         "Zip": "G6B 2C3",
         "Telephone #": "819-583-5885",
         "Plant Manager": "Alain Veillette",
         "Division Leader": "Benoit Martine",
         "Plant Safety Coord": {
            "Mgr": "Marie-Josee Vallee"
         },
         "lat": 45.572628,
         "lng": -70.87359
      },
      {
         "Country": "Canada",
         "Name": "Langley (Aldergrove)",
         "Notes": "RES, Entry",
         "Street": " 5827 274th Street, Unit 101",
         "City": "Aldergrove",
         "State": "BC",
         "Zip": "V4W 0B8",
         "Telephone #": "604-857-4270",
         "Plant Manager": "Gord Hagelin*",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Ponsamy Gounder"
         },
         "lat": 49.007020,
         "lng": -122.492510
      },
      {
         "Country": "Canada",
         "Name": "Megantic Manufacturing",
         "Notes": "COMP, ARCH",
         "Street": "6184 Notre-Dame St.",
         "City": "Lac Megantic",
         "State": "QC",
         "Zip": "G6B 3B5",
         "Telephone #": "819-583-1550",
         "Plant Manager": "Daniel Hamann",
         "Division Leader": "Frank McDermott*",
         "Plant Safety Coord": {
            "Mgr": "Carl Mimeault "
         },
         "lat": 45.572628,
         "lng": -70.87359
      },
      {
         "Country": "Canada",
         "Name": "Sacre-Coeur / Sacopan",
         "Notes": "COMP, RES",
         "Street": "652 Chemin du Moulin",
         "City": "Sacre-Coeur",
         "State": "QC",
         "Zip": "G0T 1Y0",
         "Telephone #": "418-236-1414 ",
         "Plant Manager": "Frederic Savard",
         "Division Leader": "Reed Morren",
         "Plant Safety Coord": {
            "Mgr": "Frederic Savard"
         },
         "lat": 48.28885,
         "lng": -69.89235
      },
      {
         "Country": "Canada",
         "Name": "St. Ephrem/Baillargeon",
         "Notes": "ARCH",
         "Street": "430 Route 108 Ouest",
         "City": "Saint-Ephrem-De-Beauce",
         "State": "QC",
         "Zip": "G0M 1R0",
         "Telephone #": "418-484-5666",
         "Plant Manager": "Denis Chiasson",
         "Division Leader": "Marc Kincade",
         "Plant Safety Coord": {
            "Mgr": "Anita Marois"
         },
         "lat": 46.055504,
         "lng": -70.95515
      },
      {
         "Country": "Canada",
         "Name": "St-Romuald / Celco",
         "Notes": "RES, Entry",
         "Street": "445 1st Ave.",
         "City": "St. Romuald",
         "State": "QC",
         "Zip": "G6W 5M6",
         "Telephone #": "418-839-0062",
         "Plant Manager": "Jean-Francois LaFrance",
         "Division Leader": "Benoit Martine",
         "Plant Safety Coord": {
            "Mgr": "Jean Franois LaFrance / Marie-Josee Bourassa"
         },
         "lat": 45.785236,
         "lng": -71.09292
      },
      {
         "Country": "Canada",
         "Name": "Surrey (Aldergrove)",
         "Notes": "RES, Entry",
         "Street": "5827 274th Street, Unit 102 ",
         "City": "Aldergrove",
         "State": "BC",
         "Zip": "V4W 0B8",
         "Telephone #": "604-857-4270",
         "Plant Manager": "Gord Hagelin*",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Ponsamy Gounder"
         },
         "lat": 49.108504,
         "lng": -122.463811
      },
      {
         "Country": "Canada",
         "Name": "Toronto",
         "Notes": "HQ",
         "Street": "2771 Rutherford Rd.",
         "City": "Concord",
         "State": "ON",
         "Zip": "L4K 2N6",
         "Telephone #": "905-482-2370",
         "Plant Manager": "Richard Drouin",
         "Division Leader": "Wes Co",
         "Plant Safety Coord": {
            "Mgr": "Rick Leo "
         },
         "lat": 43.83161,
         "lng": -79.52471
      },
      {
         "Country": "Canada",
         "Name": "Toronto",
         "Notes": "RES, DF, THD",
         "Street": "2771 Rutherford Rd.",
         "City": "Concord",
         "State": "ON",
         "Zip": "L4K 2N6",
         "Telephone #": "905-482-2370",
         "Plant Manager": "Shawn Kord",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "Zhao Li"
         },
         "lat": 43.83161,
         "lng": -79.52471
      },
      {
         "Country": "Canada",
         "Name": "Windsor ",
         "Notes": "RES, S&R",
         "Street": "350 rue Parc Industriel",
         "City": "Windsor",
         "State": "QC",
         "Zip": "J1S 2T2",
         "Telephone #": "819-845-2739",
         "Plant Manager": "Richard Lessard\n",
         "Division Leader": "Benoit Martine",
         "Plant Safety Coord": {
            "Mgr": "Marie-Pier Bellemare"
         },
         "lat": 45.55725,
         "lng": -72.000786
      },
      {
         "Country": "Canada",
         "Name": "Yarrow",
         "Notes": "RES, Int. W",
         "Street": "41916 Yarrow Central Rd.",
         "City": "Chilliwack",
         "State": "BC",
         "Zip": "V2R 5H8",
         "Telephone #": "604-823-6223",
         "Plant Manager": "Gord Hagelin",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Jennifer Strong"
         },
         "lat": 49.080536,
         "lng": -122.06566
      },
      {
         "Country": "Chile",
         "Name": "Cabrero (Skin & Cutstock)",
         "Notes": "COMP, RES",
         "Street": "Ruta 146  Km 1.5",
         "City": "Cabrero",
         "State": "Octava Region",
         "Zip": "",
         "Telephone #": "56-43-2404410",
         "Plant Manager": "Leonardo Cid",
         "Division Leader": "Benoit Martine",
         "Plant Safety Coord": {
            "Mgr": "Francisco Mora  "
         },
         "lat": -37.0333,
         "lng":  -72.4
      },
      {
         "Country": "Chile",
         "Name": "Chillan",
         "Notes": "RES, S&R",
         "Street": "Panamericana norte Km 5: #3530",
         "City": "Chillan",
         "State": "Octava Region",
         "Zip": "",
         "Telephone #": "56-42-2207700",
         "Plant Manager": "Jorge Osorio",
         "Division Leader": "Benoit Martine",
         "Plant Safety Coord": {
            "Mgr": "Alvaro Inostroza "
         },
         "lat": -36.594915,
         "lng":  -72.067418
      },
      {
         "Country": "Chile",
         "Name": "Santiago Door Plant",
         "Notes": "COMP, RES",
         "Street": "Los Boldos 117, Comuna de Lampa",
         "City": "Region Metropolitana",
         "State": "Santiago",
         "Zip": "",
         "Telephone #": "56-2-27834300",
         "Plant Manager": "Carlos Pedreros\nInterim",
         "Division Leader": "Benoit Martine",
         "Plant Safety Coord": {
            "Mgr": "Yussef Srain"
         },
         "lat": -33.279345,
         "lng":  -70.887937
      },
      {
         "Country": "China",
         "Name": "Shangai",
         "Notes": "",
         "Street": "No. 2 Taizhong (S)Road, Rm 315  ",
         "City": "Waigaoqiao Free Trade Zone",
         "State": "Shanghai",
         "Zip": "200131",
         "Telephone #": "86-21-50481343",
         "Plant Manager": "",
         "Division Leader": "N/A",
         "Plant Safety Coord": {
            "Mgr": "N/A"
         },
         "lat": 31.349951,
         "lng":  121.582691
      },
      {
         "Country": "Czech",
         "Name": "Jihlava/Masonite CZ ",
         "Notes": "COMP, Europe",
         "Street": "Hruskove Dvory 82",
         "City": "Jihlava",
         "State": "Czech Republic",
         "Zip": "586 02",
         "Telephone #": "420-567-121-414",
         "Plant Manager": "Pavel Satny",
         "Division Leader": "Cormac Kearns",
         "Plant Safety Coord": {
            "Mgr": "Marta Svobodova"
         },
         "lat": 49.820468,
         "lng":  14.354724
      },
      {
         "Country": "Czech",
         "Name": "Uherske Hradiste/Masonite",
         "Notes": "COMP, Europe",
         "Street": "Vésky 11",
         "City": " Uherské Hradišt? ",
         "State": "Czech Republic",
         "Zip": "686 01",
         "Telephone #": "420-567-121-414",
         "Plant Manager": "Pavel Satny",
         "Division Leader": "Cormac Kearns",
         "Plant Safety Coord": {
            "Mgr": "Marta Svobodova"
         },
         "lat": 49.0667,
         "lng":  17.4833
      },
      {
         "Country": "Ireland",
         "Name": "Carrick-on-Shannon",
         "Notes": "COMP, Europe",
         "Street": "Derryoughter, Drumsna",
         "City": "Carrick-on-Shannon",
         "State": "Co. Leitrim",
         "Zip": "N41 CC94",
         "Telephone #": "353-71-96-59563",
         "Plant Manager": "Kieran Rooney",
         "Division Leader": "Cormac Kearns",
         "Plant Safety Coord": {
            "Mgr": "Aisling Cox"
         },
         "lat": 53.942,
         "lng":  -8.087
      },
      {
         "Country": "Malaysia",
         "Name": "Magna Foremost",
         "Notes": "Joint Venture",
         "Street": "Lot 814, Jepak Industrial Estate",
         "City": "Bintulu",
         "State": "Sarawak",
         "Zip": "97013",
         "Telephone #": "60 86-333099",
         "Plant Manager": "Lionel Liew",
         "Division Leader": "Cormac Kearns",
         "Plant Safety Coord": {
            "Mgr": ""
         },
         "lat": 3.12381,
         "lng":  113.024019
      },
      {
         "Country": "Mexico",
         "Name": "Monterrey",
         "Notes": "RES, Int. W",
         "Street": "Carretera Monterrey-Laredo Km. 23",
         "City": "Cienega de Flores",
         "State": "Nuevo Leon",
         "Zip": "65550",
         "Telephone #": "5281 820 8900",
         "Plant Manager": "Jose Luis Oyervides ",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Arturo Castillo"
         },
         "lat": 25.959658,
         "lng":  -100.173778
      },
      {
         "Country": "Mexico",
         "Name": "Tijuana",
         "Notes": "RES, Int. W",
         "Street": "Calle Acapulco #9851, Parque Industrial Pacifico IV",
         "City": "Tijuana",
         "State": "Baja California",
         "Zip": "22643",
         "Telephone #": "521-664-484-7659",
         "Plant Manager": "Reynaldo Serrano",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Adela Avila"
         },
         "lat": 32.476725,
         "lng":  116.989979
      },
      {
         "Country": "UK",
         "Name": "Fibercill/Dudley",
         "Notes": "UK",
         "Street": "The Moorings, Hurst Business Park, Brierley Hill",
         "City": "Dudley",
         "State": "West Midlands",
         "Zip": "DY5 1UF",
         "Telephone #": "44 01384 482221",
         "Plant Manager": "Simon Brum",
         "Division Leader": "Cormac Kearns",
         "Plant Safety Coord": {
            "Mgr": "Diane Smith"
         },
         "lat": 52.467735,
         "lng": -2.130834
      },
      {
         "Country": "UK",
         "Name": "Nottinghamshire/Door Stop International/Huthwaite",
         "Notes": "UK",
         "Street": "Export Dr.",
         "City": "Huthwaite",
         "State": "Nottinghamshire",
         "Zip": "NG17 6AF",
         "Telephone #": "44 7990004118",
         "Plant Manager": "Mike Rodgers",
         "Division Leader": "Paul Conway",
         "Plant Safety Coord": {
            "Mgr": "Shantay Baugh"
         },
         "lat": 53.128472,
         "lng": -1.301703
      },
      {
         "Country": "UK",
         "Name": "Premdor",
         "Notes": "UK",
         "Street": "Birthwaite Business Park Huddersfield Rd.",
         "City": "Darton",
         "State": "Barnsley",
         "Zip": "S75 5JS",
         "Telephone #": "44 7741384145",
         "Plant Manager": "Matt Cook (Jan 2019)",
         "Division Leader": "Cormac Kearns",
         "Plant Safety Coord": {
            "Mgr": "Victoria Hill"
         },
         "lat": 53.58801,
         "lng": -1.542581
      },
      {
         "Country": "UK",
         "Name": "Solidor/DW3",
         "Notes": "UK",
         "Street": "Solidor House, Smithpool Rd.",
         "City": "Fenton",
         "State": "Stoke on Trent",
         "Zip": "ST4 4PW",
         "Telephone #": "44 7808039690",
         "Plant Manager": "Neil Bancroft",
         "Division Leader": "Cormac Kearns",
         "Plant Safety Coord": {
            "Mgr": "Peter Skinner"
         },
         "lat": 53.008117,
         "lng":  -2.178499
      },
      {
         "Country": "USA",
         "Name": "Algoma",
         "Notes": "Sales Office",
         "Street": "821 Parker Ave.",
         "City": "Algoma",
         "State": "WI",
         "Zip": "54201",
         "Telephone #": "",
         "Plant Manager": "Mike Stepp",
         "Division Leader": "",
         "Plant Safety Coord": {
            "Mgr": "N/A"
         },
         "lat": 44.606117,
         "lng": -87.45157
      },
      {
         "Country": "USA",
         "Name": "Binghamton",
         "Notes": "RES, DIS",
         "Street": "28 Track Drive",
         "City": "Binghamton",
         "State": "NY",
         "Zip": "13904",
         "Telephone #": "607-775-0615",
         "Plant Manager": "Mike Acri",
         "Division Leader": "David Perkins",
         "Plant Safety Coord": {
            "Mgr": "Rick Leo "
         },
         "lat": 42.10424,
         "lng": -75.83543
      },
      {
         "Country": "USA",
         "Name": "Birchwood",
         "Notes": "COMP, ARCH",
         "Street": "600 E. Hwy 48",
         "City": "Birchwood",
         "State": "WI",
         "Zip": "54817",
         "Telephone #": "715-354-3441",
         "Plant Manager": "Craig Brye",
         "Division Leader": "Frank McDermott*",
         "Plant Safety Coord": {
            "Mgr": "Jessica Harshman"
         },
         "lat": 45.660366,
         "lng": -91.54699
      },
      {
         "Country": "USA",
         "Name": "Branchburg",
         "Notes": "RES, DIS",
         "Street": "210 Industrial Parkway",
         "City": "Branchburg",
         "State": "NJ",
         "Zip": "8876",
         "Telephone #": "908-526-7555",
         "Plant Manager": "Aaron Goldberg",
         "Division Leader": "David Perkins",
         "Plant Safety Coord": {
            "Mgr": "Rick Leo "
         },
         "lat": 40.599870,
         "lng": -74.716300
      },
      {
         "Country": "USA",
         "Name": "Charlotte",
         "Notes": "RES, Entry",
         "Street": "7300 Reames Rd.",
         "City": "Charlotte",
         "State": "NC",
         "Zip": "28216",
         "Telephone #": " 704-599-0235",
         "Plant Manager": "Frank McGuire",
         "Division Leader": "Reed Morren",
         "Plant Safety Coord": {
            "Mgr": "David Dean/Part time"
         },
         "lat": 35.32003,
         "lng": -80.850525
      },
      {
         "Country": "USA",
         "Name": "Dickson",
         "Notes": "RES, Entry",
         "Street": "One Premdor Dr.",
         "City": "Dickson",
         "State": "TN",
         "Zip": "37055",
         "Telephone #": "615-446-6220",
         "Plant Manager": "Craig Meade",
         "Division Leader": "Reed Morren",
         "Plant Safety Coord": {
            "Mgr": "Autumn Clark"
         },
         "lat": 36.14146,
         "lng": -87.396416
      },
      {
         "Country": "USA",
         "Name": "Greenville",
         "Notes": "RES, Int. W",
         "Street": "6308 Industrial Dr.",
         "City": "Greenville",
         "State": "TX",
         "Zip": "75402",
         "Telephone #": "903-454-9500",
         "Plant Manager": "Robert Taliaferro",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Scott Hottendorf"
         },
         "lat": 33.129005,
         "lng": -96.14784
      },
      {
         "Country": "USA",
         "Name": "Haleyville",
         "Notes": "RES, Int. E",
         "Street": "210 Haleyville Industrial Rd.",
         "City": "Haleyville",
         "State": "AL",
         "Zip": "35565",
         "Telephone #": "205-486-9216 ",
         "Plant Manager": "Daniel Donaldson",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Dwayne Satterwhite"
         },
         "lat": 34.22649,
         "lng": -87.62141
      },
      {
         "Country": "USA",
         "Name": "Howell/USA Wood Door Mid-West",
         "Notes": "ARCH",
         "Street": "5665 Sterling Dr.",
         "City": "Howell",
         "State": "MI",
         "Zip": "48843",
         "Telephone #": "517-545-5811",
         "Plant Manager": "Carl Ammerman",
         "Division Leader": "Todd Apple",
         "Plant Safety Coord": {
            "Mgr": "Jeff Peters"
         },
         "lat": 42.570377,
         "lng": -83.8402
      },
      {
         "Country": "USA",
         "Name": "Jefferson City ",
         "Notes": "ARCH",
         "Street": "506 Municipal Dr.",
         "City": "Jefferson City",
         "State": "TN",
         "Zip": "37760",
         "Telephone #": "865-471-6300 ",
         "Plant Manager": "Joe Carter",
         "Division Leader": "Marc Kincade",
         "Plant Safety Coord": {
            "Mgr": "Gentry Rice"
         },
         "lat": 36.134354,
         "lng": -83.48813
      },
      {
         "Country": "USA",
         "Name": "Kirkwood",
         "Notes": "RES, DF, Lowes",
         "Street": "970 US Rt. 11",
         "City": "Kirkwood",
         "State": "NY",
         "Zip": "13795",
         "Telephone #": "607-775-2450 ",
         "Plant Manager": "Ivan Cavero",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "Scott Holloway"
         },
         "lat": 42.08598,
         "lng": -75.82109
      },
      {
         "Country": "USA",
         "Name": "Lake Charles",
         "Notes": "LMI",
         "Street": "1949 Merganser St.",
         "City": "Lake Charles",
         "State": "LA",
         "Zip": "70615",
         "Telephone #": "337-721-7676",
         "Plant Manager": "Dennis Markwood",
         "Division Leader": "David Perkins",
         "Plant Safety Coord": {
            "Mgr": ""
         },
         "lat": 30.216625,
         "lng": -93.16453
      },
      {
         "Country": "USA",
         "Name": "Laurel",
         "Notes": "COMP, RES",
         "Street": "1001 S. 4th Ave.",
         "City": "Laurel",
         "State": "MS",
         "Zip": "39440",
         "Telephone #": "601-422-2200",
         "Plant Manager": "George (GT) Vann",
         "Division Leader": "Reed Morren",
         "Plant Safety Coord": {
            "Mgr": "Noah Kofman"
         },
         "lat": 31.67894,
         "lng": -89.13102
      },
      {
         "Country": "USA",
         "Name": "Lawrenceville",
         "Notes": "RES, DF, THD",
         "Street": "4005 Newpoint Pl. NW Suite 100",
         "City": "Lawrenceville",
         "State": "GA",
         "Zip": "30043",
         "Telephone #": "678-377-7900",
         "Plant Manager": "Brian Akers",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "Andrea Flores"
         },
         "lat": 33.969948,
         "lng": -84.09021
      },
      {
         "Country": "USA",
         "Name": "Leominster",
         "Notes": "RES, DIS",
         "Street": "248 Industrial Road",
         "City": "Leominster",
         "State": "MA",
         "Zip": "1453",
         "Telephone #": "978-534-4056",
         "Plant Manager": "Tammy Bureau",
         "Division Leader": "David Perkins",
         "Plant Safety Coord": {
            "Mgr": "Rick Leo "
         },
         "lat": 42.557255,
         "lng": -71.751366
      },
      {
         "Country": "USA",
         "Name": "Marietta",
         "Notes": "HOG, THD Sales",
         "Street": "1831-B W. Oak Pkwy.",
         "City": "Marietta",
         "State": "GA",
         "Zip": "30062",
         "Telephone #": "N/A",
         "Plant Manager": "Brock Ryall",
         "Division Leader": "Wes Co",
         "Plant Safety Coord": {
            "Mgr": "N/A"
         },
         "lat": 33.9889,
         "lng": -84.525276
      },
      {
         "Country": "USA",
         "Name": "Marshfield",
         "Notes": "COMP, ARCH",
         "Street": "1401 E. 4th St.",
         "City": "Marshfield",
         "State": "WI",
         "Zip": "54449",
         "Telephone #": "715-383-5485",
         "Plant Manager": "Ryan Gengler ",
         "Division Leader": "Marc Kincade",
         "Plant Safety Coord": {
            "Mgr": "Jennifer Luepke "
         },
         "lat": 44.659992,
         "lng": -90.157646
      },
      {
         "Country": "USA",
         "Name": "Mason City",
         "Notes": "Sales Office",
         "Street": "111 West State Street, Suite #502",
         "City": "Mason City",
         "State": "IA",
         "Zip": "50401",
         "Telephone #": "N/A",
         "Plant Manager": "Christine Douglas ",
         "Division Leader": "Jay Phillips",
         "Plant Safety Coord": {
            "Mgr": "Angela Keeling"
         },
         "lat": 43.151237,
         "lng": -93.203735
      },
      {
         "Country": "USA",
         "Name": "Mason City/Graham",
         "Notes": "ARCH",
         "Street": "2510 19th SW",
         "City": "Mason City",
         "State": "IA",
         "Zip": "50401",
         "Telephone #": "641-450-3720",
         "Plant Manager": "William (Bill) Zimmerle",
         "Division Leader": "Marc Kincade",
         "Plant Safety Coord": {
            "Mgr": "Angela Keeling"
         },
         "lat": 43.134872,
         "lng": -93.238365
      },
      {
         "Country": "USA",
         "Name": "Mechanicsburg",
         "Notes": "RES, DIS",
         "Street": "299 Mulberry Drive",
         "City": "Mechanicsburg",
         "State": "PA",
         "Zip": "17050",
         "Telephone #": "866-717-7660",
         "Plant Manager": "Mike Acri",
         "Division Leader": "David Perkins",
         "Plant Safety Coord": {
            "Mgr": "Rick Leo "
         },
         "lat": 40.216583,
         "lng": -77.02978
      },
      {
         "Country": "USA",
         "Name": "Mesquite",
         "Notes": "RES, DF, THD",
         "Street": "2300 Skyline Dr. Suite 100",
         "City": "Mesquite",
         "State": "TX",
         "Zip": "75149",
         "Telephone #": "209-235-3281",
         "Plant Manager": "Sergio Blanco",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "Donny Beauvais"
         },
         "lat": 32.77661,
         "lng": -96.635506
      },
      {
         "Country": "USA",
         "Name": "Moreno Valley",
         "Notes": "RES, DF, THD",
         "Street": "25100 Globe St.",
         "City": "Moreno Valley",
         "State": "CA",
         "Zip": "92551",
         "Telephone #": "951-243-3582",
         "Plant Manager": "Jim Beeman",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "Carlos Ortiz"
         },
         "lat": 33.86381,
         "lng": -117.22502
      },
      {
         "Country": "USA",
         "Name": "North Platte",
         "Notes": "RES, Int. W",
         "Street": "1120 Industrial Ave.",
         "City": "North Platte",
         "State": "NE",
         "Zip": "69101",
         "Telephone #": "308-534-1102",
         "Plant Manager": "Rick Hill",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Ken Gordon"
         },
         "lat": 41.12415,
         "lng": -100.739075
      },
      {
         "Country": "USA",
         "Name": "Northumberland ",
         "Notes": "ARCH",
         "Street": "980 Point Township Dr.",
         "City": "Northumberland",
         "State": "PA",
         "Zip": "17837",
         "Telephone #": "570-473-3557",
         "Plant Manager": "David Briede",
         "Division Leader": "Marc Kincade",
         "Plant Safety Coord": {
            "Mgr": "Kohl Knopp"
         },
         "lat": 40.915096,
         "lng": -76.75657
      },
      {
         "Country": "USA",
         "Name": "Pan Pacific",
         "Notes": "Joint Venture",
         "Street": "610 W. State Hwy. 3 Unit A    ",
         "City": "Broken Bow",
         "State": "OK",
         "Zip": "74728  ",
         "Telephone #": "(580) 314-6246",
         "Plant Manager": "Ed McDonald",
         "Division Leader": "Clare Doyle",
         "Plant Safety Coord": {
            "Mgr": ""
         },
         "lat": 34.02668,
         "lng": -94.743355
      },
      {
         "Country": "USA",
         "Name": "Pittsburg",
         "Notes": "RES, Entry",
         "Street": "911 E. Jefferson St.",
         "City": "Pittsburg",
         "State": "KS",
         "Zip": "66762",
         "Telephone #": "620-231-8200",
         "Plant Manager": "Steve Cox",
         "Division Leader": "Reed Morren",
         "Plant Safety Coord": {
            "Mgr": "Jason Neukirk/           Part time"
         },
         "lat": 37.400764,
         "lng": -94.69105
      },
      {
         "Country": "USA",
         "Name": "Selinsgrove",
         "Notes": "RES, DIS",
         "Street": "2689 Rte. 522 South",
         "City": " Selinsgrove",
         "State": "PA",
         "Zip": "17870",
         "Telephone #": "570-374-2155",
         "Plant Manager": "Charlie Matusheski",
         "Division Leader": "David Perkins",
         "Plant Safety Coord": {
            "Mgr": "Rick Leo "
         },
         "lat": 40.805042,
         "lng": -76.91646
      },
      {
         "Country": "USA",
         "Name": "Sierra Lumber",
         "Notes": "COMP, RES",
         "Street": "375 W. Hazelton Ave.",
         "City": "Stockton",
         "State": "CA",
         "Zip": "95203",
         "Telephone #": "209-943-7777",
         "Plant Manager": "",
         "Division Leader": "",
         "Plant Safety Coord": {
            "Mgr": ""
         },
         "lat": 37.946186,
         "lng": -121.295456
      },
      {
         "Country": "USA",
         "Name": "Springfield/Maiman",
         "Notes": "ARCH (S&R)",
         "Street": "3839 E. Mustard Way",
         "City": "Springfield",
         "State": "MO",
         "Zip": "65803",
         "Telephone #": "417-616-8244 x3444",
         "Plant Manager": "John McCarty",
         "Division Leader": "Frank McDermott*",
         "Plant Safety Coord": {
            "Mgr": "Amanda (MJ) Plumb"
         },
         "lat": 37.245266,
         "lng": -93.21353
      },
      {
         "Country": "USA",
         "Name": "Springfield/Maiman",
         "Notes": "ARCH (Therm)",
         "Street": "3900 E. Mustard Way",
         "City": "Springfield",
         "State": "MO",
         "Zip": "65803",
         "Telephone #": "417-616-8244 x3444",
         "Plant Manager": "Dana Levarn",
         "Division Leader": "Frank McDermott*",
         "Plant Safety Coord": {
            "Mgr": "Amanda (MJ) Plumb"
         },
         "lat": 37.244255,
         "lng": -93.21336
      },
      {
         "Country": "USA",
         "Name": "Stanley",
         "Notes": "RES, Int. E",
         "Street": "280 Donovan Rd.",
         "City": "Stanley",
         "State": "VA",
         "Zip": "22851",
         "Telephone #": "540-778-2211",
         "Plant Manager": "Kil Whitfield",
         "Division Leader": "Reed Morren",
         "Plant Safety Coord": {
            "Mgr": "Tim Jackson"
         },
         "lat": 38.567955,
         "lng": -78.510086
      },
      {
         "Country": "USA",
         "Name": "Stockton",
         "Notes": "RES, DF, THD",
         "Street": "3632 Petersen Road",
         "City": "Stockton",
         "State": "CA",
         "Zip": "95215",
         "Telephone #": "209-942-5626",
         "Plant Manager": "Maisoon Kelaita",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "Emmanual Scott"
         },
         "lat": 37.935497,
         "lng": -121.23128
      },
      {
         "Country": "USA",
         "Name": "Stockton",
         "Notes": "Res, Int. W",
         "Street": "433 W. Scotts Ave.",
         "City": "Stockton",
         "State": "CA",
         "Zip": "95203",
         "Telephone #": "209-235-3281",
         "Plant Manager": "N/A",
         "Division Leader": "N/A",
         "Plant Safety Coord": {
            "Mgr": "N/A"
         },
         "lat": 37.94511,
         "lng": -121.29491
      },
      {
         "Country": "USA",
         "Name": "Thorofare/USA Wood Door North",
         "Notes": "LMI",
         "Street": "1475 Imperial Way",
         "City": "West Deptford",
         "State": "NJ",
         "Zip": "8066",
         "Telephone #": "856-384-9663",
         "Plant Manager": "Howard Richards",
         "Division Leader": "Todd Apple",
         "Plant Safety Coord": {
            "Mgr": "Tom Decker"
         },
         "lat": 39.830837,
         "lng": -75.20066
      },
      {
         "Country": "USA",
         "Name": "Thorp / Birchwood",
         "Notes": "COMP, ARCH",
         "Street": "508 E. Grant St.",
         "City": "Thorp",
         "State": "WI",
         "Zip": "54771",
         "Telephone #": "715-669-3291",
         "Plant Manager": "Craig Brye",
         "Division Leader": "Frank McDermott*",
         "Plant Safety Coord": {
            "Mgr": "Jessica Harshman"
         },
         "lat": 44.96454,
         "lng": -90.79186
      },
      {
         "Country": "USA",
         "Name": "USA Wood Door - Southwest",
         "Notes": "ARCH",
         "Street": "3709 E. Randol Mill Rd. Suite 200",
         "City": "Arlington",
         "State": "TX",
         "Zip": "76011",
         "Telephone #": "972-602-4491",
         "Plant Manager": "Howard Richards\nAntonio Rojas-Rosales (on site OPS)",
         "Division Leader": "Todd Apple",
         "Plant Safety Coord": {
            "Mgr": "Rojas/Mendoza"
         },
         "lat": 32.75199,
         "lng": -97.0412
      },
      {
         "Country": "USA",
         "Name": "Vandalia",
         "Notes": "RES, DF, Lowes",
         "Street": "3250 Old Springfield Rd.",
         "City": "Vandalia",
         "State": "OH",
         "Zip": "45377",
         "Telephone #": "937-454-9207",
         "Plant Manager": "Aaron Sheehan",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "Jodi Hoover"
         },
         "lat": 39.91227,
         "lng": -84.22819
      },
      {
         "Country": "USA",
         "Name": "Verdi",
         "Notes": "COMP",
         "Street": "375 Cabela Drive",
         "City": "Verdi",
         "State": "NV",
         "Zip": "89523",
         "Telephone #": "209-943-7777",
         "Plant Manager": "Russ Tharp",
         "Division Leader": "Ben White",
         "Plant Safety Coord": {
            "Mgr": "Ed Tourville"
         },
         "lat": 39.51639,
         "lng": -119.96775
      },
      {
         "Country": "USA",
         "Name": "Wahpeton",
         "Notes": "COMP, RES",
         "Street": "2441 15th St. N.",
         "City": "Wahpeton",
         "State": "ND",
         "Zip": "58075",
         "Telephone #": "701-642-1152 ",
         "Plant Manager": "Andrew Sunderland",
         "Division Leader": "Reed Morren",
         "Plant Safety Coord": {
            "Mgr": "Mike Kugler"
         },
         "lat": 46.29624,
         "lng": -96.62299
      },
      {
         "Country": "USA",
         "Name": "Walkerton",
         "Notes": "RES, Int. E",
         "Street": "105 Industrial Park Drive.",
         "City": "Walkerton",
         "State": "IN",
         "Zip": "46574",
         "Telephone #": "317-864-7724",
         "Plant Manager": "Dominic Basciano",
         "Division Leader": "Reed Morren",
         "Plant Safety Coord": {
            "Mgr": "Ronald Pete Garrett\nInterim"
         },
         "lat": 41.466503,
         "lng": -86.49305
      },
      {
         "Country": "USA",
         "Name": "West Chicago / MIC",
         "Notes": "MIC",
         "Street": "1955 Powis Rd.",
         "City": "West Chicago",
         "State": "IL",
         "Zip": "60185",
         "Telephone #": "630-584-6330",
         "Plant Manager": "Steve Swartzmiller",
         "Division Leader": "Cory Sorice",
         "Plant Safety Coord": {
            "Mgr": ""
         },
         "lat": 41.919525,
         "lng": -88.23787
      },
      {
         "Country": "USA",
         "Name": "Westminster/Fyrewerks",
         "Notes": "COMP, ARCH",
         "Street": "12250 N. Pecos Street, Suite 400",
         "City": "Westminster",
         "State": "CO",
         "Zip": "80234",
         "Telephone #": "303-255-3717",
         "Plant Manager": "Ken Majors",
         "Division Leader": "Graham Thayer",
         "Plant Safety Coord": {
            "Mgr": "Brandon Welty"
         },
         "lat": 39.830822,
         "lng": -105.03747
      },
      {
         "Country": "USA",
         "Name": "Winchester",
         "Notes": "RES, DF, Lowes",
         "Street": "130 West Brooke Dr.",
         "City": "Winchester",
         "State": "VA",
         "Zip": "22603",
         "Telephone #": "540-665-3083",
         "Plant Manager": "Gary Meeks",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "Randy Lawrence"
         },
         "lat": 39.20053,
         "lng": -78.15062
      },
      {
         "Country": "USA",
         "Name": "Tampa/Ybor - Mason",
         "Notes": "HQ",
         "Street": "1242 E 5th Avenue",
         "City": "Tampa",
         "State": "FL",
         "Zip": "3606",
         "Telephone #": "813-262-8266",
         "Plant Manager": "",
         "Division Leader": "Howard Heckes",
         "Plant Safety Coord": {
            "Mgr": ""
         },
         "lat": 27.959005,
         "lng": -82.445274
      },
      {
         "Country": "USA",
         "Name": "Tampa/Ybor - Larmen",
         "Notes": "Digital, GBS",
         "Street": "1205 E. 5th Ave.",
         "City": "Tampa",
         "State": "FL",
         "Zip": "33605",
         "Telephone #": "813-262-8266",
         "Plant Manager": "",
         "Division Leader": "Howard Heckes",
         "Plant Safety Coord": {
            "Mgr": ""
         },
         "lat": 27.958632,
         "lng": -82.44597
      },
      {
         "Country": "USA",
         "Name": "Yulee",
         "Notes": "RES, DF, THD",
         "Street": "86550 Gene Lassere Blvd.",
         "City": "Yulee",
         "State": "FL",
         "Zip": "32097",
         "Telephone #": "904-225-3889",
         "Plant Manager": "Blair Stelp",
         "Division Leader": "Darryl Burt",
         "Plant Safety Coord": {
            "Mgr": "David Horsedaniel"
         },
         "lat": 30.635944,
         "lng": -81.56318
      },
      {
         "Country": "",
         "Name": "",
         "Notes": "",
         "Street": "",
         "City": "",
         "State": "",
         "Zip": "",
         "Telephone #": "",
         "Plant Manager": "*Interim",
         "Division Leader": "",
         "Plant Safety Coord": {
            "Mgr": ""
         }
      }
   ];


   //gets data from clicked marker
   function displayMarkerData(data){
      var raw = data.target._popup._content.split('');
      //loop that gets address form marker
      var ison = false;
      var target_address = "";
      for(var i=0; i<raw.length; i++)
      {
         if(ison){
            target_address = target_address + raw[i];
         }
         if(raw[i] == ">" && raw[i-1] == "a"){ison = true;}
         if((raw.length-i)==5){ison=false;}
      }

      //searches through json to find correct location
      for(var i = 0; i<locations.length; i++){
         var address = locations[i]['Street'] + ' ' + locations[i]['City'] +' ' + locations[i]['State'] + ', ' + locations[i]['Country'];
         if(address == target_address){
            console.log(locations[i]);
            $('#address').html(address);
            $('#Catagories').html(locations[i]["Notes"].toString());
         }
      }
   }

   //checks wether a location has target catagories
   function isEqual(target, check){
      var counter = 0;
      for(var i=0; i<check.length; i++)
      {
         for(var j=0; j<target.length; j++)
         {
            if(check[i] == target[j]){counter++;}
         }
      }
      if(counter == target.length){return true;}
      else{return false;}
   }

   //clears map
   function clearMap(){
      for(var i=0; i<active_markers.length; i++)
      {
         map.removeLayer(active_markers[i]);
      }
   }

   function placeAllMarkers(){
      //creates marks for USA locations with popups
      for(var i =0; i<locations.length; i++){
         if(locations[i]['Country'] == 'USA' || locations[i]['Country'] == 'Canada'){
              var address = locations[i]['Street'] + ' ' + locations[i]['City'] +' ' + locations[i]['State'] + ', ' + locations[i]['Country'];
              var marker = L.marker([locations[i].lat, locations[i].lng], {riseOnHover:true,}).addTo(map)
                     .bindPopup(`Location: ${locations[i].City}<br>Address: <a>${address}</a>`);
              active_markers.push(marker);
              marker.on('click', displayMarkerData);
         }else{
             //console.log(locations[i]['Street'] + ' ' + locations[i]['City'] +' ' + locations[i]['State'] + ', ' + locations[i]['Country']);
         }
     }
   }

   function searchLocations(){
      //finds all current active cats
      var target_cats = [];
      var active = $('.active');
      for(var i =0; i<active.length; i++)
      {
         target_cats.push(active[i].id);
      }
      
      clearMap(); //clears map

      //iterates through location json and puts new markers
      if(target_cats.length == 0){
         placeAllMarkers();
      }else{
         for(var i = 0; i<locations.length; i++)
         {
            var loc_cats = locations[i].Notes.split(', ');
            loc_cats.sort();
            target_cats.sort();
            if(isEqual(target_cats, loc_cats)){
               if(locations[i]['Country'] == 'USA' || locations[i]['Country'] == 'Canada' ){
                  var address = locations[i]['Street'] + ' ' + locations[i]['City'] +' ' + locations[i]['State'] + ', ' + locations[i]['Country'];
                  var marker = L.marker([locations[i].lat, locations[i].lng], {riseOnHover:true,}).addTo(map)
                        .bindPopup(`Location: ${locations[i].City}<br>Address: <a>${address}</a>`);
                  active_markers.push(marker);
                  marker.on('click', displayMarkerData);
               }
            }
         }
      }
   }

   //Initiates map
   var map = L.map('map', {
       center: [38.7139, -97.4146],
       zoom: 4,
       // maxZoom: 4.6,
       minZoom: 3,
       // zoomControl: false,
       // dragging: false,
       // doubleClickZoom: false,
       // zoomSnap: .1
   });

   const active_markers = [];
   
   placeAllMarkers();
   
   //Sets tile layer
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
       }).addTo(map);

   
   //catagory btn select
   $('.cat-btn').on('click', function(){
      if($(this).hasClass('active')){
         $(this).removeClass('active');
      }else{
         $(this).addClass('active');
      }
      searchLocations();
   });
//d
});
