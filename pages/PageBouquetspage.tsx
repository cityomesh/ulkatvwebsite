
// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaSearch } from "react-icons/fa";

// interface Rate {
//   id: number;
//   months: number;
//   price: string;
// }

// interface BouqueItem {
//   id: number;
//   name: string;
//   type_lbl: string;
//   rate: Rate[];
// }

// const categories = [
//   "Telugu", "English", "Hindi", "Tamil", "Kannada", "Marathi", "Odia", "Assamese",
//   "Bhojpuri", "Urdu", "Rajasthani", "Bengali", "Punjabi", "Malayalam",
// ];

// const subcategories = ["Entertainment", "Kids", "Movies", "News", "Sports"];

// const teluguChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD SAPTAGIRI", "DD YADAGIRI", "ETV", "ETV HD", "ETV PLUS", "ETV PLUS HD", "GARUDA TV", "STAR MAA HD", "STAR Maa TV", "STUDIO ONE", "STUDIO ONE PLUS", "STUDIO YUVA", "Subhavaartha Tv","SVBC TTD", "T NEWS", "Gemini TV", "GEMINI TV HD" ,"Vanitha Tv", "VISSA TV", "Zee Telugu", "Zee Telugu HD"
//   ],
//   Kids: [
//     "ETV BAL BHARAT TELUGU",  "ETV BAL BHARAT TELUGU HD", "SONY YAY", "POGO TELUGU", "Kushi TV"
//   ],
//   News: [
//     "10 TV", "6 TV", "99TV", "ABN NEWS", "BIG TV", "CVR NEWS", "ETV ANDHRAPRADESH", "ETV TELANGANA", "HMTV", "I NEWS", "Mahaa Max", "Mahaa News", "News 360 Telugu", "NEWS9 TODAY TELUGU", "NTV", "PRIME9 NEWS", "RAJ NEWS TELUGU", "Sakshi Tv", "STUDIO N NEWS", "Swatantra TV", "TV 5 News", "TV9 Telugu", "V6 News", "Zee Telugu News"
//   ],
//   Movies: [
//     "ETV CINEMA", "ETV CINEMA HD", "star Maa Gold", "STAR MAA MOVIES", "STAR MAA MOVIES HD", "Gemini Movies", "GEMINI MOVIES HD", "Zee Cinemalu", "Zee Cinemalu HD"
//   ],
//   Sports: [
//     "STAR SPORTS 1 TELUGU",   "STAR SPORTS 1 TELUGU HD", "Star Sports 2 HD Telugu","Star Sports 2 Telugu"
//   ]
// };
// const englishChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "ARIRANG HD", "ASIANET SUVARNA NEWS", "ZEE CAFE", "Colors infinity", "DISNEY INTERNATIONAL HD", "Star Movies Select", "THE HISTORY CHANNEL", "DD KISAN", "DISCOVERY TAMIL", "HI DOST", "Investigation Discovery", "INVESTIGATION DISCOVERY HD", "MOVIES NOW", "MOVIES NOW HD", "NEWS 7 TAMIL", "News Nation", "NEWS STATE MP", "News State UP UK", "RAJ NEWS KANNADA", "SAAM TV", "Sadhna Gold", "Sadhna Plus", "SANGEET BHOJPURI", "Sangeet Marathi", "Sanskar", "SANTVANI TV", "Sarv Dharm Sangam", "Sathiyam Tv", "Satsang", "Shemaroo Marathibana", "Shraddha Mh1", "Shubh", "Shubhsandesh", "Sri Sankara Tv", "STV HARYANA NEWS", "Subharti", "SVBC3 KANNADA TTD", "Swara Sagar", "Swaraj Express SMBC", "Thanthi Tv" , "TUNE6 MUSIC", "TV 100", "TV5 KANNADA", "TV9 Kannada", "TV9 Mumbai", "Vaanavil", "Vasanth Tv", "VELICHAM PLUS","VENDHAR", "Zee Cafe HD"
//   ],
//   Kids: [
//     "CBeebies", "Disney Channel", "DISNEY CHANNEL HD", "DISNEY JUNIOR", "HUNGAMA TV", "NICK JR", "SUPER HUNGAMA", "DISCOVERY KIDS", "ETV BAL BHARAT ENGLISH HD", "Gubbare", "Pogo"
//   ],
//   Movies: [
//     "&Flix", "&Flix HD", "&Prive HD", "STAR MOVIES", "STAR MOVIES HD", "STAR MOVIES SELECT HD", "MN+HD", "MNX", "MNX HD", "ROMEDY NOW", "SONY PIX", "SONY PIX HD"
//   ],
//   News: [
//     "ABC Australia", "ALJazeera English HD", "BBC NEWS", "Channel News Asia HD", "CNN INTERNATIONAL", "CNBC TV18", "CNBC Tv18 Prime HD", "CNN News18", "CVR NEWS ENGLISH", "DD INDIA", "DD INDIA HD", "DD NEWS", "DD News HD", "DW", "INDIA TODAY", "MIRROR NOW", "NDTV 24X7", "NDTV PROFIT", "NewsX", "NHK WORLD JAPAN", "REPUBLIC TV ENGLISH", "RUSSIA TODAY HD", "TIMES NOW", "TIMES NOW NAVBHARAT HD", "TIMES NOW WORLD HD", "Tv5 Monde Asie", "Wion"
//   ],
//   Sports: [
//     "1 Sports", "STAR SPORTS 1", "STAR SPORTS 2", "STAR SPORTS 3", "STAR SPORTS SELECT 1", "STAR SPORTS SELECT 2", "EUROSPORT", "EUROSPORT HD", "STAR SPORTS SELECT HD 1", "Sony Sports Ten 1", "Sony Sports Ten 2", "Sony Sports Ten 4",
//     "Sony Sports Ten 5"
//   ]
// };
// const hindiChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "SUN NEO", "dangal", "DD BHARATI", "DD Bihar", "DD Chattisgarh", "DD HARYANA", "DD JHARKHAND", "DD MADHYA PRADESH", "DD MEGHALAYA", "DD NATIONAL", "DD NATIONAL HD", "DD Rajasthan", "DD SIKKIM", "DD UTTAR PRADESH", "DD UTTARAKHAND", "GYANDARSHAN 2", "Ishara TV", "Colors", "Colors Cineplex Superhits", "COLORS HD", "COLORS RISHTEY", "STAR BHARAT", "NEWS 24", "STAR BHARAT HD", "STAR PLUS", "STAR PLUS HD", "STAR UTSAV", "SHEMAROO TV", "SHUBH CINEMA", "SONY PAL", "SONY SAB", "SONY SAB HD", "SONY SET", "SONY SET HD", "The Q India", "TV9 BHARATHVARSH", "& TV", "&TV HD", "BIG MAGIC", "ZEE ANMOL", "ZEE TV", "ZEE TV HD", "ZOOM",
//   ],
//   Movies: [
//     "& PICTURES", "B4U KADAK", "B4U Movies", "BFLIX_MOVIES", "Colors Cineplex Bollywood", "Dhamaal", "DHAMAKA MOVIES B4U", "DHINCHAAK", "DHINCHAAK 2", "Dil Se Movies", "ENTER 10", "Goldmines", "Goldmines Bollywood", "GOLDMINES MOVIES", "Manoranjan Grand", "MOVIE PLUS", "COLORS CINEPLEX", "COLORS CINEPLEX HD", "STAR GOLD", "STAR GOLD 2", "STAR GOLD 2 HD", "STAR GOLD HD", "STAR GOLD ROMANCE", "STAR GOLD SELECT", "STAR GOLD SELECT HD", "Star Gold Thrills", "RAAPCHICK", "Shemaroo Classic", "STAR UTSAV MOVIES", "SONY MAX", "SONY MAX 1", "SONY MAX 2", "SONY MAX HD", "SONY WAH", "& Pictures HD", "&Xplore Hd", "ZEE ACTION", "ZEE ANMOL CINEMA", "ZEE ANMOL CINEMA 2", "ZEE BOLLYWOOD", "ZEE CINEMA", 
//     "ZEE CINEMA HD", "Zee Classic",
//   ],
//   Kids: [
//     "ETV BAL BHARAT HINDI HD", "NICK", "NICK HD+", "Sonic",
//   ],
//   News: [
//     "4TV NEWS", "AAJ TAK", "AAJ TAK HD", "ABP NEWS", "APN", "BANSAL", "BHARAT EXPRESS", "BHARAT SAMACHAR","BHARAT24", "DD ARUNPRABHA", "DD SANSAD TV", "DD SANSAD TV HD", "DD Sansad Tv Rajyasabha", "DD Sansad1 HD", "ET NOW SWADESH", "GOOD NEWS TODAY", "HINDI KHABAR", "IBC24", "IND 24", "INDIA AHEAD", "India News", "INDIA NEWS HARYANA", "INDIA NEWS MP", "INDIA NEWS RAJASTHAN", "India News UP", "INDIA TV PRIME HD", "INDIA VOICE", "IndiaTV", "INH24X7", "JANATA TV", "JK_24X7_NEWS", "K NEWS", "KHABRE ABHITAK", "LIVING INDIA NEWS", "NDTV INDIA", "NDTV MPCG", "NDTV RAJASTHAN", "NEPAL 1", "Network 10", "NEWS 1 INDIA", "Republic TV Bharat", "CNBC AWAAZ", "NEWS18 BIHAR/JHARKHAND", "NEWS18 INDIA", "News18 Mp Chattisgarh", "NEWS18 RAJASTHAN", "NEWS18 UP/UK", "Times Now Navabharat","TV 24", "tv Anaadi news", "VIP NEWS", "ZEE BHARAT", "ZEE BIHAR JHARKHAND", "Zee Delhi Ncr Haryana", "Zee MP Chattisgarh", "ZEE BUSINESS", "ZEE NEWS HD", "Zee Rajasthan News", "Zee UP/UK", "Zee News",
//   ],
//   Sports: [
//     "Sony Sports Ten 3", "STAR SPORTS 1 HINDI", "STAR SPORTS 1 HINDI HD", "Star Sports 2 HD Hindi", "Star Sports 2 Hindi", "STAR SPORTS KHEL",
//   ],
// };
// const tamilChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD PODHIGAI", "DD PUDUCHERRY", "JAYA TV HD", "KALAIGNAR", "MAKKAL TV", "MOONTV", "Peppers Tv", "Polimer Tv", "COLORS TAMIL", "COLORS TAMIL HD", "VIJAY", "VIJAY HD", "VIJAY SUPER", "Vijay Super HD", "Adithya TV", "SUN TV", "SUN TV HD", "Zee Tamil", "Zee Tamil HD",
//   ],
//   Kids: [
//     "ETV BAL BHARAT TAMIL HD", "KALAIGNAR CHITHIRAM", "Chutti TV",
//   ],
//   Movies: [
//     "Zee Thirai", "Zee Thirai HD", "J MOVIES", "KALAIGNAR MURASU", "KTV", "KTV HD",
//   ],
//   News: [
//     "JAYA PLUS", "KALAIGNAR SEITHIGAL", "Madhimugam", "MALAI MURUSU TV", "MALAR TV", "NewsJ", "PUTHIYATHALAIMURAI", "NEWS18 TAMIL", "Sun News", "WIN TV",
//   ],
//   Sports: [
//     "STAR SPORTS 1 TAMIL", "Star Sports 1 Tamil HD", "Star Sports 2 HD Tamil", "Star Sports 2 Tamil",
//   ],
// };
// const kannadaChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD CHANDANA", "UDAYA HD","UDAYA TV", "Kasthuri TV", "SIRI KANNADA ALL Time","COLORS KANNADA","Colors Kannada Cinema", "COLORS KANNADA HD", "COLORS SUPER", "STAR SUVARNA", "STAR SUVARNA HD","Zee Kannada","Zee Kannada HD",
//   ],
//   Kids: [
//     "CHINTU TV", "ETV BAL BHARAT KANNADA HD",
//   ],
//   Movies: [
//     "udaya movies", "Public Movies", "STAR SUVARNA PLUS", "Zee Picchar", "Zee Picchar HD",
//   ],
//   News: [
//     "Kasthuri News", "News 1st Kannada", "POWER TV", "PRAJAA KANNADA NEWS", "Public Tv", "REPUBLIC KANNADA", "NEWS18 KANNADA", "Zee Kannada News",
//   ],
//   Sports: [
//     "STAR SPORTS 1 KANNADA", "Star Sports 2 Kannada",
//   ],
// };
// const marathiChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD GOA", "DD SAHYADRI", "SUN MARATHI", "SONY MARATHI", "COLORS MARATHI", "COLORS MARATHI HD", "STAR PRAVAH", "STAR PRAVAH HD", "Zee Marathi", "Zee Marathi HD", "Zee Yuva",
//   ],
//   Kids: [
//     "ETV BAL BHARAT MARATHI HD",
//   ],
//   Movies: [
//     "STAR PRAVAH PICTURE", "STAR PRAVAH PICTURE HD", "Zee Talkies", "Zee Talkies HD",
//   ],
//   News: [
//     "Abp Majha", "JAI MAHARASTRA", "MKN News", "NDTV MARATHI", "NEWS18 LOKMAT", "Zee 24 Taas",
//   ],
//   Sports: [
//     "STAR SPORTS 1 MARATHI",
//   ],
// };
// const odiaChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD ODIA", "Manjari TV", "Sidharth TV", "Star Kiran", "TARANG TV","Zee Sarthak",
//   ],
//   Kids: [
//     "ETV BAL BHARAT ODIA HD",
//   ],
//   Movies: [
//     "Alankar", "Sidharth Gold",
//   ],
//   News: [
//     "Kalinga", "Kanak News", "NANDIGHOSHA TV", "OTV", "Prameya News 7", "NEWS18 ODIA",
//   ],
//   Music: [
//     "TARANG MUSIC",
//   ],
// };
// const assameseChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD Assam", "DD Tripura","Jonack","News Live Bangla","Ramdhenu","Rang TV", "Rengoni",
//   ],
//   Kids: [
//     "ETV BAL BHARAT ASSAMESE HD",
//   ],
//   Movies: [
//     "POPULAR TV",
//   ],
//   News: [
//     "NEWS18 ASSAM NE", "ASSAM TALKS", "DA NEWS PLUS", "DY365","NE News","News Live","NEWS TIME ASSAM","NKTV PLUS","Prag News", "PRARTHAM KHABHAR 24X7",
//   ],
//   Infotainment: [
//     "DD Mizoram",
//   ],
// };
// const bhojpuriChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "B4U Bhojpuri", "ShowBox",
//   ],
//   Movies: [
//     "Zee Biskope", "Bhojpuri Cinema", "DABANGG", "Filmachi Bhojpuri", "Oscar Movies Bhojpuri",
//   ],
// };
// const urduChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD KASHIR",
//   ],
//   News: [
//     "DD URDU", "GULISTAN NEWS", "Munsif Tv", "NEWS18 JKLH", "SALAAM TV",
//   ],
// };
// const rajasthaniChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "Gangaur",
//   ],
// };
// const bengaliChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "Zee Bangla", "Zee Bangla HD", "Aakash Aath", "Sun Bangla", "COLORS BANGLA", "COLORS BANGLA HD", "STAR JALSHA","STAR JALSHA HD", "DD BANGLA", "Enterr10 Bangla", "News Time Bangla", "Ruposhi Bangla", "SangeetBangla", "SONY AATH", "TV9 Bangla",
//   ],
//   Kids: [
//     "ETV BAL BHARAT BENGALI HD",
//   ],
//   Movies: [
//     "Zee Bangla Cinema", "COLORS BANGLA CINEMA", "JALSHA MOVIES", "JALSHA MOVIES HD", "KHUSHBOO BANGLA",
//   ],
//   News: [
//     "Abp Ananda", "NEWS18 BANGLA", "KOLKATA TV", "NEWS HOUR", "REPUBLIC BANGLA", "RPLUS", "Zee 24 Ghanta",
//   ],
//   Music: [
//     "Dhoom music", "RONGEEN",
//   ],
// };

// const punjabiChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "BALLE BALLE", "DD PUNJABI","Zee Punjabi"
//   ],
//   Kids: [
//     "ETV BAL BHARAT PUNJABI HD"
//   ],
//   Movies: [
//     "PITARA", "POPCORN MOVIES", "PTC Punjabi Gold", "Tabbar Hits"
//   ],
//   News: [
//     "Chardikla Time Tv", "India News Punjab", "Mh ONE News", "PTC NEWS", "News18 Punjab/Haryana", "ZEE Punjab Hr Hp"
//   ]
// };

// const malayalamChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "Amrita Tv", "ATE", "DD MALAYALAM", "FLOWERS TV", "SURYA HD", "Jaihind Tv", "Jeevan Tv", "KAIRALI TV", "KAUMUDY","KERALA VISION", "Surya TV", "Mazhavil Manorama", "Mazhavil Manorama Hd", "SAFARI", "Shalom Television", "Asianet",
//     "ASIANET HD", "ASIANET PLUS", "WE", "Zee Keralam", "Zee Keralam HD",
//   ],
//   Kids: [
//     "ETV BAL BHARAT MALAYALAM HD", "KOCHU TV",
//   ],
//   Movies: [
//     "SURYA MOVIES", "Asianet Movies", "Asianet Movies HD",
//   ],
//   News: [
//     "24 NEWS", "Asianet News", "KairaliNews", "Manorama News", "MATRABHUMI NEWS", "MEDIA ONE", "RAJ NEWS MALAYALAM","REPORTER", "NEWS18 KERALA",
//   ],
//   Comedy: [
//     "SURYA COMEDY",
//   ],
// };


// const tabs = ["Languages", "Channels", "Broadcaster Packs", "Ulka Bouquets"];

// const channelImages: Record<string, string> = {
//   "CHITTI TV": "/CHITTI TV .jpeg",
//   "NTV": "/NTV.png",
//   "ETV ABHIRUCHI": "/ETV ABHIRUCHI.png",
//   "ETV ANDHRAPRADESH": "/ETV ANDHRAPRADESH.png",
//   "ETV BAL BHARAT ENGLISH HD": "/ETV BAL BHARAT.png",
//   "ETV CINEMA HD": "/ETV CINEMA HD.png",
//   "ETV CINEMA SD": "/ETV CINEMA SD.png",
//   "ETV HD": "/ETV HD.png",
//   "ETV LIFE": "/ETV LIFE.png",
//   "ETV PLUS HD": "/ETV PLUS HD.png",
//   "ETV PLUS SD": "/ETV PLUS SD.png",
//   "ETV PLUS": "/ETV_Plus.png",
//   "ETV TELANGANA": "/ETV TELENGANA.png",
//   "ETV TELUGU": "/Etv Telugu.png",
//   "ETV CINEMA": "/ETV Cinema.png",
//   "Big Magic": "/BIG MAGIC.png",
//   "&Flix": "/&Flix.png",
//   "&Flix HD": "/&Flix HD.png",
//   "&Pictures": "/& PICTURES.png",
//   "&Pictures HD": "/&Pictures HD.png",
//   "&PICTURES SD": "/&PICTURES SD.png",
//   "&Prive HD": "/&Prive HD.png",
//   "&Tv HD": "/&Tv HD.png",
//   "&Xplor HD": "/&Xplor HD.png",
//   "Zee Action": "/Zee Action.png",
//   "Zee Anmol": "/Zee Anmol.png",
//   "Zee Anmol Cinema": "/Zee Anmol Cinema.png",
//   "Zee Bangla": "/Zee Bangla.png",
//   "Zee Bangla Cinema": "/Zee Bangla Cinema.png",
//   "Zee Bangla HD": "/Zee Bangla HD.png",
//   "BISCOPE": "/BISCOPE.png",
//   "Zee Bollywood": "/Zee Bollywood.png",
//   "Zee Cafe": "/Zee Cafe.png",
//   "Zee Cafe HD": "/Zee Cafe HD.png",
//   "Zee Cinema": "/Zee Cinema.png",
//   "Zee Cinema HD": "/Zee Cinema HD.png",
//   "Zee Cinemalu": "/Zee Cinemalu.png",
//   "Zee Cinemalu HD": "/Zee Cinemalu HD.png",
//   "Zee Classic": "/Zee Classic.png",
//   "Zee_Ganga": "/Zee_Ganga.png",
//   "Zee Kannada": "/Zee Kannada.png",
//   "Zee Kannada HD": "/Zee Kannada HD.png",
//   "Zee Keralam": "/Zee Keralam.png",
//   "Zee Keralam HD": "/Zee Keralam HD.png",
//   "Zee Marathi": "/Zee Marathi.png",
//   "Zee Marathi HD": "/Zee Marathi HD.png",
//   "Zee Picchar": "/Zee Picchar.png",
//   "Zee Picchar HD": "/Zee Picchar HD.png",
//   "Zee Punjabi": "/Zee Punjabi.png",
//   "Zee Sarthak": "/Zee Sarthak.png",
//   "Zee Talkies": "/Zee Talkies.png",
//   "Zee Talkies HD": "/Zee Talkies HD.png",
//   "Zee Talkies SD": "/Zee Talkies SD.png",
//   "Zee Tamil": "/Zee Tamil.png",
//   "Zee Tamil HD": "/Zee Tamil HD.png",
//   "Zee Telugu": "/Zee Telugu.png",
//   "Zee Telugu HD": "/Zee Telugu HD.png",
//   "Zee Thirai": "/Zee Thirai.png",
//   "Zee Thirai HD": "/Zee Thirai HD.png",
//   "Zee Tv": "/Zee Tv.png",
//   "Zee Tv HD": "/Zee Tv HD.png",
//   "Zee Yuva": "/Zee Yuva.png",
//   "Zee Zest": "/Zee Zest.png",
//   "Zee Zest HD": "/Zee Zest HD.png",
//   "ZING": "/ZING.png",
//   "& TV": "/& TV.png",
//   "Zee Biskope": "/Zee Biskope.png",
//   "STAR PRAVAH PICTURE": "/STAR PRAVAH PICTURE.png",
//   "STAR PRAVAH PICTURE HD": "/STAR PRAVAH PICTURE HD.png",
//   "star gold 2": "/StarrGold.webp",
//   "Asianet Movies": "/Asianet-Movies.png",
//   "Asianet Plus": "/Asianet-PlusB.png",
//   "BINDAAS": "/BINDAAS.png",
//   "Jalsa Movies": "/JalsaMovies.png",
//   "JALSHA MOVIES HD": "/JALSHA MOVIES HD.png",
//   "MAA MOVIES HD": "/MAA MOVIES HD.png",
//   "MAA MUSIC": "/MAA MUSIC.png",
//   "NGC": "/NGC.png",
//   "STAR GOLD 2 HD": "/STAR GOLD2 HD.png",
//   "STAR GOLD ROMANCE": "/STAR GOLD ROMANCE.png",
//   "STAR GOLD SELECT": "/STAR GOLD SELECT.png",
//   "STAR GOLD SELECT HD": "/STAR GOLD SELECT HD.png",
//   "STAR GOLD THRILLS": "/STAR GOLD THRILLS.png",
//   "STAR KIRAN HD": "/STAR KIRAN HD.png",
//   "STAR MAA MOVIES HD": "/STAR MAA MOVIES HD.png",
//   "STAR MOVIES": "/STAR MOVIES.png",
//   "STAR MOVIES SELECT": "/STAR MOVIES SELECT.png",
//   "STAR PRAVAH HD": "/STAR PRAVAH HD.png",
//   "STAR SPORTS1 TAMIL": "/STAR SPORTS1 TAMIL.png",
//   "STAR SPORTS1 TAMIL HD": "/STAR SPORTS1 TAMIL H.png",
//   "STAR UTSAV": "/STAR UTSAV.png",
//   "STAR UTSAV MOVIES": "/STAR UTSAV MOVIES.png",
//   "SUVARNA HD": "/SUVARNA HD.png",
//   "SUVARNA PLUS": "/SUVARNA PLUS.png",
//   "SUVARNA PLUS COPY": "/SUVARNA PLUS (copy).png",
//   "VIJAY SUPER": "/VIJAY SUPER.png",
//   "VIJAY SUPER HD": "/VIJAY SUPER HD.png",
//   "VIJAY TAKKAR": "/VIJAY TAKKAR.png",
//   "ET NOW": "/ET Now.png",
//   "ET NOW SWADESH": "/ET NOW SWADESH.png",
//   "MIRROR NOW": "/MIRROR NOW.png",
//   "MN+HD": "/MN+ HD.png",
//   "MNX": "/MNX.png",
//   "MNX HD": "/MNX_HD.png",
//   "MOVIES NOW HD": "/MOVIES NOW HD.png",
//   "MOVIES NOW": "/MOVIES NOW SD.png",
//   "ROMEDY NOW": "/ROMEDY NOW.png",
//   "TIMES NOW": "/TIMES NOW.png",
//   "TIMES NOW NABHARAT": "/TIMES NOW NABHARAT.png",
//   "ZOOM": "/ZOOM.png",
//   "SET HD": "/SET HD.png",
//   "SONY AATH": "/SONY AATH.png",
//   "SONY BBC EARTH HD": "/SONY BBC EARTH HD.png",
//   "SONY BBC EARTH SD": "/SONY BBC EARTH SD.png",
//   "SONY BBC EARTH": "/SONYBBCEARTH.png",
//   "SONY MAX HD": "/SONY MAX HD.png",
//   "SONY MAX SD": "/SONY MAX SD.png",
//   "SONY PAL": "/SONY PAL.png",
//   "SONY PIX HD": "/SONY PIX HD.png",
//   "SONY PIX SD": "/SONY PIX SD.png",
//   "SONY SAB": "/SONY SAB.png",
//   "SONY SAB HD": "/SONY SAB HD.png",
//   "Sony SET HD": "/Sony SET HD.png",
//   "Sony SET": "/SONY SET SD.png",
//   "SONY TEN1 HD": "/SONY TEN1 HD.png",
//   "SONY TEN1 SD": "/SONY TEN1 SD.png",
//   "SONY TEN2 SD": "/SONY TEN2 SD.png",
//   "SONY TEN3 HD": "/SONY TEN3HD.png",
//   "SONY TEN3 SD": "/SONY TEN3 SD.png",
//   "SONY TEN5 HD": "/SONY TEN5 HD.png",
//   "SONY TEN5 SD": "/SONY TEN5 SD.png",
//   "SONY SPORTS 2": "/SONY SPORTS 2.png",
//   "SONY SPORTS 5": "/SONY SPORTS 5.png",
//   "SONY WAH": "/SONY WAH.png",
//   "SONY YAY": "/SONY YAY.png",
//   "SONY MARATHI": "/SONY MARATHI.png",
//   "GEMINI COMEDY": "/GEMINI COMEDY.png",
//   "GEMINI LIFE": "/GEMINI LIFE.png",
//   "GEMINI MOVIES": "/GEMINI MOVIES.png",
//   "GEMINI MOVIES HD": "/GEMINI MOVIES HD.png",
//   "GEMINI MUSIC": "/GEMINI MUSIC.png",
//   "GEMINI MUSIC HD": "/GEMINI MUSIC HD.png",
//   "GEMINI TV": "/GEMINI TV.png",
//   "GEMINI TV HD": "/GEMINI TV HD.png",
//   "SUN MARATHI": "/SUN MARATHI.png",
//   "SUN MUSIC": "/SUN MUSIC.png",
//   "SURYA COMEDY": "/SURYA COMEDY.png",
//   "SURYA MOVIES": "/SURYA MOVIES.png",
//   "SURYA MUSIC": "/SURYA MUSIC.png",
//   "SURYA TV": "/SURYA TV.png",
//   "SURYA TV HD": "/SURYA TV HD.png",
//   "UDAYA COMEDY": "/UDAYA COMEDY.png",
//   "UDAYA MOVIES": "/UDAYA MOVIES.png",
//   "UDAYA MUSIC": "/UDAYA MUSIC.png",
//   "UDAYA TV": "/UDAYA TV.png",
//   "UDAYA TV HD": "/UDAYA TV HD.png",
//   "ABN": "/ABN.png",
// };

// const fetchBouqueData = async (): Promise<BouqueItem[] | null> => {
//   try {
//     const token = localStorage.getItem("access_token");
//     if (!token) throw new Error("No access token found.");

//     const response = await fetch(
//       "https://partners.ulka.tv/api/railtel.php/v1/operator-bouque?expand=boxtype_lbl,type_lbl,status_lbl,created_by_lbl&filter[operator_id]=4&vr=railtel1.1",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     const data = await response.json();
//     if (data.success) return data.data as BouqueItem[];
//     else throw new Error(data.message || "Failed to fetch data.");
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// };

// const BouquePage = () => {
//   const [selectedTab, setSelectedTab] = useState("Languages");
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
//   const [bouqueData, setBouqueData] = useState<BouqueItem[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showAllChannels, setShowAllChannels] = useState(false);

//   const typeMapping: Record<string, "Alacarte" | "Add On" | "Base"> = {
//     Channels: "Alacarte",
//     "Broadcaster Packs": "Add On",
//     "Ulka Bouquets": "Base",
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       const storedData = localStorage.getItem("bouqueData");
//       if (storedData) {
//         setBouqueData(JSON.parse(storedData));
//       }

//       const data = await fetchBouqueData();
//       if (data) {
//         setBouqueData(data);
//         localStorage.setItem("bouqueData", JSON.stringify(data));
//       }
//     };
//     loadData();
//   }, []);

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory(null);
//       setSelectedSubcategory(null);
//     } else {
//       setSelectedCategory(category);
//       setSelectedSubcategory(subcategories[0]);
//     }
//   };

//   const filteredBouqueData = bouqueData.filter(
//     (item) =>
//       item.type_lbl.toLowerCase().replace(/\s+/g, "") ===
//         typeMapping[selectedTab as keyof typeof typeMapping]?.toLowerCase().replace(/\s+/g, "") &&
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-4 sm:p-10 md:p-40  mt-[2rem] bg-white text-black">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-4">Ulka Subscription Plans</h1>
//         <p className="text-gray-600 mb-6">View all the broadcaster packs available on ULKA TV</p>
//         <div className="flex flex-wrap justify-center gap-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setSelectedTab(tab)}
//               className={`px-6 py-3 rounded-md font-medium ${
//                 selectedTab === tab ? "bg-black text-white" : "bg-red-500 text-black"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {selectedTab === "Languages" && (
//         <div className="flex flex-col items-center mt-10">
//           {categories.map((category) => (
//             <div key={category} className="w-full max-w-8xl mb-4">
//               <button
//                 className={`w-full flex justify-between items-center px-4 py-4 text-sm font-medium rounded-md ${
//                   selectedCategory === category ? "bg-black text-white" : "bg-gray-200 text-black"
//                 }`}
//                 onClick={() => {
//                   handleCategoryClick(category);
//                   setShowAllChannels(false); // Reset Read More state on category change
//                 }}
//               >
//                 <span>{category}</span>
//                 <span className="text-xl font-bold">
//                   {selectedCategory === category ? "+" : "−"}
//                 </span>
//               </button>

//               {selectedCategory === category && (
//                 <>
//                   <div className="flex flex-wrap gap-2 mt-4 px-4">
//                     {subcategories.map((sub) => (
//                       <button
//                         key={sub}
//                         className={`px-4 py-2 text-[15px] rounded-md border ${
//                           selectedSubcategory === sub
//                             ? "bg-red-600 text-white"
//                             : "bg-gray-100 text-black"
//                         }`}
//                         onClick={() => {
//                           setSelectedSubcategory(sub);
//                           setShowAllChannels(false); // Reset Read More on subcategory change
//                         }}
//                       >
//                         {sub}
//                       </button>
//                     ))}
//                   </div>

//                   {selectedSubcategory && (
//                     <div className="mt-3 p-4 bg-white rounded-md border border-gray-200">
//                       {/* Filter channels based on category & subcategory */}
//                       {(() => {
//                         const filteredChannels =
//                           category === "Telugu" && teluguChannelsBySubcategory[selectedSubcategory]
//                             ? bouqueData.filter((item) =>
//                                 teluguChannelsBySubcategory[selectedSubcategory].some(
//                                   (channelName) =>
//                                     channelName.toLowerCase() === item.name.toLowerCase()
//                                 )
//                               )
//                             : category === "English" && englishChannelsBySubcategory[selectedSubcategory]
//                             ? bouqueData.filter((item) =>
//                                 englishChannelsBySubcategory[selectedSubcategory].some(
//                                   (channelName) =>
//                                     channelName.toLowerCase() === item.name.toLowerCase()
//                                 )
//                               )
//                             : category === "Hindi" && hindiChannelsBySubcategory[selectedSubcategory]
//                             ? bouqueData.filter((item) =>
//                                 hindiChannelsBySubcategory[selectedSubcategory].some(
//                                   (channelName) =>
//                                     channelName.toLowerCase() === item.name.toLowerCase()
//                                 )
//                               )

//                               : category === "Tamil" && tamilChannelsBySubcategory[selectedSubcategory]
//                               ? bouqueData.filter((item) =>
//                                   tamilChannelsBySubcategory[selectedSubcategory].some(
//                                     (channelName) =>
//                                       channelName.toLowerCase() === item.name.toLowerCase()
//                                   )
//                                 )

//                               : category === "Kannada" && kannadaChannelsBySubcategory[selectedSubcategory]
//                               ? bouqueData.filter((item) =>
//                                   kannadaChannelsBySubcategory[selectedSubcategory].some(
//                                     (channelName) =>
//                                       channelName.toLowerCase() === item.name.toLowerCase()
//                                   )
//                                 )
                                
//                                 : category === "Marathi" && marathiChannelsBySubcategory[selectedSubcategory]
//                                 ? bouqueData.filter((item) =>
//                                     marathiChannelsBySubcategory[selectedSubcategory].some(
//                                       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                     )
//                                   )

//                                 : category === "Odia" && odiaChannelsBySubcategory[selectedSubcategory]
//                                 ? bouqueData.filter((item) =>
//                                     odiaChannelsBySubcategory[selectedSubcategory].some(
//                                       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                     )
//                                   )
//                                   : category === "Assamese" && assameseChannelsBySubcategory[selectedSubcategory]
//                                   ? bouqueData.filter((item) =>
//                                       assameseChannelsBySubcategory[selectedSubcategory].some(
//                                         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                       )
//                                     )
//                                   : category === "Bhojpuri" && bhojpuriChannelsBySubcategory[selectedSubcategory]
//                                   ? bouqueData.filter((item) =>
//                                       bhojpuriChannelsBySubcategory[selectedSubcategory].some(
//                                         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                       )
//                                     )
//                                   : category === "Urdu" && urduChannelsBySubcategory[selectedSubcategory]
//                                   ? bouqueData.filter((item) =>
//                                       urduChannelsBySubcategory[selectedSubcategory].some(
//                                         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                       )
//                                     )
//                                   : category === "Rajasthani" && rajasthaniChannelsBySubcategory[selectedSubcategory]
//                                   ? bouqueData.filter((item) =>
//                                       rajasthaniChannelsBySubcategory[selectedSubcategory].some(
//                                         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                       )
//                                     )                                                                                     
//                                     : category === "Bengali" && bengaliChannelsBySubcategory[selectedSubcategory]
//                                     ? bouqueData.filter((item) =>
//                                         bengaliChannelsBySubcategory[selectedSubcategory].some(
//                                           (channelName) =>
//                                             channelName.toLowerCase() === item.name.toLowerCase()
//                                         )
//                                       )
//                                     : category === "Punjabi" && punjabiChannelsBySubcategory[selectedSubcategory]
//                                     ? bouqueData.filter((item) =>
//                                       punjabiChannelsBySubcategory[selectedSubcategory].some(
//                                           (channelName) =>
//                                             channelName.toLowerCase() === item.name.toLowerCase()
//                                         )
//                                       )
//                                     : category === "Malayalam" && malayalamChannelsBySubcategory[selectedSubcategory]
//                                     ? bouqueData.filter((item) =>
//                                       malayalamChannelsBySubcategory[selectedSubcategory].some(
//                                           (channelName) =>
//                                             channelName.toLowerCase() === item.name.toLowerCase()
//                                         )
//                                       )
//                                   : [];  
                                                                                    
//                         return (
//                           <>
//                             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
//                               {(showAllChannels ? filteredChannels : filteredChannels.slice(0, 14)).map(
//                                 (channel, index) => (
//                                   <div
//                                     key={index}
//                                     className="text-center border p-2 rounded-md bg-gray-50"
//                                   >
//                                     <Image
//                                       src={channelImages[channel.name] || "/placeholder.png"}
//                                       alt={channel.name}
//                                       width={80}
//                                       height={50}
//                                       className="mx-auto object-contain"
//                                     />
//                                     <p className="mt-2 text-sm font-semibold">{channel.name}</p>
//                                     {channel.rate.length > 0 && (
//                                       <p className="text-xs text-gray-600">
//                                         MRP: ₹{Number(channel.rate[0].price).toFixed(0)} / month
//                                       </p>
//                                     )}
//                                   </div>
//                                 )
//                               )}
//                             </div>

//                             {/* Read More / Show Less */}
//                             {filteredChannels.length > 14 && (
//                               <div className="mt-4 text-center">
//                                 <button
//                                   onClick={() => setShowAllChannels(!showAllChannels)}
//                                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                                 >
//                                   {showAllChannels ? "Show Less" : "Read More"}
//                                 </button>
//                               </div>
//                             )}
//                           </>
//                         );
//                       })()}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}


//       {["Channels", "Broadcaster Packs", "Ulka Bouquets"].includes(selectedTab) && (
//         <div className="mt-10">
//           <div className="relative w-full max-w-8xl mx-auto mb-8">
//             <FaSearch className="absolute left-3 top-3 text-black" />
//             <input
//               type="text"
//               placeholder="Search channel..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-2 pl-10 border rounded-md"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
//             {filteredBouqueData.map((item) => (
//               <div
//                 key={item.id}
//                 className={`p-4 border rounded-md text-center ${
//                   selectedTab === "Broadcaster Packs"
//                     ? "bg-blue-100"
//                     : selectedTab === "Ulka Bouquets"
//                     ? "bg-red-100"
//                     : "bg-white"
//                 }`}
//               >
//                 {/* Show image only for Channels */}
//                 {selectedTab === "Channels" && (
//                   <img
//                     src={channelImages[item.name] || "/placeholder.png"}
//                     alt={item.name}
//                     className="w-25 h-24 mx-auto mb-2 object-contain"
//                   />
//                 )}

//                 <p className="font-semibold mb-2">{item.name}</p>
//                 {item.rate.length > 0 && (
//                   <p className="text-sm text-gray-700">
//                     MRP: ₹{Number(item.rate[0].price).toFixed(0)} / month
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BouquePage;



// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaSearch } from "react-icons/fa";

// interface Rate {
//   id: number;
//   months: number;
//   price: string;
// }

// interface BouqueItem {
//   id: number;
//   name: string;
//   type_lbl: string;
//   rate: Rate[];
// }

// const categories = [
//   "Telugu", "English", "Hindi", "Tamil", "Kannada", "Marathi", "Odia", "Assamese",
//   "Bhojpuri", "Urdu", "Rajasthani", "Bengali", "Punjabi", "Malayalam",
// ];

// const subcategories = ["Entertainment", "Kids", "Movies", "News", "Sports"];

// const teluguChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD SAPTAGIRI", "DD YADAGIRI", "ETV", "ETV HD", "ETV PLUS", "ETV PLUS HD", "GARUDA TV", "STAR MAA HD", "STAR Maa TV", "STUDIO ONE", "STUDIO ONE PLUS", "STUDIO YUVA", "Subhavaartha Tv","SVBC TTD", "T NEWS", "Gemini TV", "GEMINI TV HD" ,"Vanitha Tv", "VISSA TV", "Zee Telugu", "Zee Telugu HD"
//   ],
//   Kids: [
//     "ETV BAL BHARAT TELUGU",  "ETV BAL BHARAT TELUGU HD", "SONY YAY", "POGO TELUGU", "Kushi TV"
//   ],
//   News: [
//     "10 TV", "6 TV", "99TV", "ABN NEWS", "BIG TV", "CVR NEWS", "ETV ANDHRAPRADESH", "ETV TELANGANA", "HMTV", "I NEWS", "Mahaa Max", "Mahaa News", "News 360 Telugu", "NEWS9 TODAY TELUGU", "NTV", "PRIME9 NEWS", "RAJ NEWS TELUGU", "Sakshi Tv", "STUDIO N NEWS", "Swatantra TV", "TV 5 News", "TV9 Telugu", "V6 News", "Zee Telugu News"
//   ],
//   Movies: [
//     "ETV CINEMA", "ETV CINEMA HD", "star Maa Gold", "STAR MAA MOVIES", "STAR MAA MOVIES HD", "Gemini Movies", "GEMINI MOVIES HD", "Zee Cinemalu", "Zee Cinemalu HD"
//   ],
//   Sports: [
//     "STAR SPORTS 1 TELUGU",   "STAR SPORTS 1 TELUGU HD", "Star Sports 2 HD Telugu","Star Sports 2 Telugu"
//   ]
// };
// const englishChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "ARIRANG HD", "ASIANET SUVARNA NEWS", "ZEE CAFE", "Colors infinity", "DISNEY INTERNATIONAL HD", "Star Movies Select", "THE HISTORY CHANNEL", "DD KISAN", "DISCOVERY TAMIL", "HI DOST", "Investigation Discovery", "INVESTIGATION DISCOVERY HD", "MOVIES NOW", "MOVIES NOW HD", "NEWS 7 TAMIL", "News Nation", "NEWS STATE MP", "News State UP UK", "RAJ NEWS KANNADA", "SAAM TV", "Sadhna Gold", "Sadhna Plus", "SANGEET BHOJPURI", "Sangeet Marathi", "Sanskar", "SANTVANI TV", "Sarv Dharm Sangam", "Sathiyam Tv", "Satsang", "Shemaroo Marathibana", "Shraddha Mh1", "Shubh", "Shubhsandesh", "Sri Sankara Tv", "STV HARYANA NEWS", "Subharti", "SVBC3 KANNADA TTD", "Swara Sagar", "Swaraj Express SMBC", "Thanthi Tv" , "TUNE6 MUSIC", "TV 100", "TV5 KANNADA", "TV9 Kannada", "TV9 Mumbai", "Vaanavil", "Vasanth Tv", "VELICHAM PLUS","VENDHAR", "Zee Cafe HD"
//   ],
//   Kids: [
//     "CBeebies", "Disney Channel", "DISNEY CHANNEL HD", "DISNEY JUNIOR", "HUNGAMA TV", "NICK JR", "SUPER HUNGAMA", "DISCOVERY KIDS", "ETV BAL BHARAT ENGLISH HD", "Gubbare", "Pogo"
//   ],
//   Movies: [
//     "&Flix", "&Flix HD", "&Prive HD", "STAR MOVIES", "STAR MOVIES HD", "STAR MOVIES SELECT HD", "MN+HD", "MNX", "MNX HD", "ROMEDY NOW", "SONY PIX", "SONY PIX HD"
//   ],
//   News: [
//     "ABC Australia", "ALJazeera English HD", "BBC NEWS", "Channel News Asia HD", "CNN INTERNATIONAL", "CNBC TV18", "CNBC Tv18 Prime HD", "CNN News18", "CVR NEWS ENGLISH", "DD INDIA", "DD INDIA HD", "DD NEWS", "DD News HD", "DW", "INDIA TODAY", "MIRROR NOW", "NDTV 24X7", "NDTV PROFIT", "NewsX", "NHK WORLD JAPAN", "REPUBLIC TV ENGLISH", "RUSSIA TODAY HD", "TIMES NOW", "TIMES NOW NAVBHARAT HD", "TIMES NOW WORLD HD", "Tv5 Monde Asie", "Wion"
//   ],
//   Sports: [
//     "1 Sports", "STAR SPORTS 1", "STAR SPORTS 2", "STAR SPORTS 3", "STAR SPORTS SELECT 1", "STAR SPORTS SELECT 2", "EUROSPORT", "EUROSPORT HD", "STAR SPORTS SELECT HD 1", "Sony Sports Ten 1", "Sony Sports Ten 2", "Sony Sports Ten 4",
//     "Sony Sports Ten 5"
//   ]
// };
// const hindiChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "SUN NEO", "dangal", "DD BHARATI", "DD Bihar", "DD Chattisgarh", "DD HARYANA", "DD JHARKHAND", "DD MADHYA PRADESH", "DD MEGHALAYA", "DD NATIONAL", "DD NATIONAL HD", "DD Rajasthan", "DD SIKKIM", "DD UTTAR PRADESH", "DD UTTARAKHAND", "GYANDARSHAN 2", "Ishara TV", "Colors", "Colors Cineplex Superhits", "COLORS HD", "COLORS RISHTEY", "STAR BHARAT", "NEWS 24", "STAR BHARAT HD", "STAR PLUS", "STAR PLUS HD", "STAR UTSAV", "SHEMAROO TV", "SHUBH CINEMA", "SONY PAL", "SONY SAB", "SONY SAB HD", "SONY SET", "SONY SET HD", "The Q India", "TV9 BHARATHVARSH", "& TV", "&TV HD", "BIG MAGIC", "ZEE ANMOL", "ZEE TV", "ZEE TV HD", "ZOOM",
//   ],
//   Movies: [
//     "& PICTURES", "B4U KADAK", "B4U Movies", "BFLIX_MOVIES", "Colors Cineplex Bollywood", "Dhamaal", "DHAMAKA MOVIES B4U", "DHINCHAAK", "DHINCHAAK 2", "Dil Se Movies", "ENTER 10", "Goldmines", "Goldmines Bollywood", "GOLDMINES MOVIES", "Manoranjan Grand", "MOVIE PLUS", "COLORS CINEPLEX", "COLORS CINEPLEX HD", "STAR GOLD", "STAR GOLD 2", "STAR GOLD 2 HD", "STAR GOLD HD", "STAR GOLD ROMANCE", "STAR GOLD SELECT", "STAR GOLD SELECT HD", "Star Gold Thrills", "RAAPCHICK", "Shemaroo Classic", "STAR UTSAV MOVIES", "SONY MAX", "SONY MAX 1", "SONY MAX 2", "SONY MAX HD", "SONY WAH", "& Pictures HD", "&Xplore Hd", "ZEE ACTION", "ZEE ANMOL CINEMA", "ZEE ANMOL CINEMA 2", "ZEE BOLLYWOOD", "ZEE CINEMA", 
//     "ZEE CINEMA HD", "Zee Classic",
//   ],
//   Kids: [
//     "ETV BAL BHARAT HINDI HD", "NICK", "NICK HD+", "Sonic",
//   ],
//   News: [
//     "4TV NEWS", "AAJ TAK", "AAJ TAK HD", "ABP NEWS", "APN", "BANSAL", "BHARAT EXPRESS", "BHARAT SAMACHAR","BHARAT24", "DD ARUNPRABHA", "DD SANSAD TV", "DD SANSAD TV HD", "DD Sansad Tv Rajyasabha", "DD Sansad1 HD", "ET NOW SWADESH", "GOOD NEWS TODAY", "HINDI KHABAR", "IBC24", "IND 24", "INDIA AHEAD", "India News", "INDIA NEWS HARYANA", "INDIA NEWS MP", "INDIA NEWS RAJASTHAN", "India News UP", "INDIA TV PRIME HD", "INDIA VOICE", "IndiaTV", "INH24X7", "JANATA TV", "JK_24X7_NEWS", "K NEWS", "KHABRE ABHITAK", "LIVING INDIA NEWS", "NDTV INDIA", "NDTV MPCG", "NDTV RAJASTHAN", "NEPAL 1", "Network 10", "NEWS 1 INDIA", "Republic TV Bharat", "CNBC AWAAZ", "NEWS18 BIHAR/JHARKHAND", "NEWS18 INDIA", "News18 Mp Chattisgarh", "NEWS18 RAJASTHAN", "NEWS18 UP/UK", "Times Now Navabharat","TV 24", "tv Anaadi news", "VIP NEWS", "ZEE BHARAT", "ZEE BIHAR JHARKHAND", "Zee Delhi Ncr Haryana", "Zee MP Chattisgarh", "ZEE BUSINESS", "ZEE NEWS HD", "Zee Rajasthan News", "Zee UP/UK", "Zee News",
//   ],
//   Sports: [
//     "Sony Sports Ten 3", "STAR SPORTS 1 HINDI", "STAR SPORTS 1 HINDI HD", "Star Sports 2 HD Hindi", "Star Sports 2 Hindi", "STAR SPORTS KHEL",
//   ],
// };
// const tamilChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD PODHIGAI", "DD PUDUCHERRY", "JAYA TV HD", "KALAIGNAR", "MAKKAL TV", "MOONTV", "Peppers Tv", "Polimer Tv", "COLORS TAMIL", "COLORS TAMIL HD", "VIJAY", "VIJAY HD", "VIJAY SUPER", "Vijay Super HD", "Adithya TV", "SUN TV", "SUN TV HD", "Zee Tamil", "Zee Tamil HD",
//   ],
//   Kids: [
//     "ETV BAL BHARAT TAMIL HD", "KALAIGNAR CHITHIRAM", "Chutti TV",
//   ],
//   Movies: [
//     "Zee Thirai", "Zee Thirai HD", "J MOVIES", "KALAIGNAR MURASU", "KTV", "KTV HD",
//   ],
//   News: [
//     "JAYA PLUS", "KALAIGNAR SEITHIGAL", "Madhimugam", "MALAI MURUSU TV", "MALAR TV", "NewsJ", "PUTHIYATHALAIMURAI", "NEWS18 TAMIL", "Sun News", "WIN TV",
//   ],
//   Sports: [
//     "STAR SPORTS 1 TAMIL", "Star Sports 1 Tamil HD", "Star Sports 2 HD Tamil", "Star Sports 2 Tamil",
//   ],
// };
// const kannadaChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD CHANDANA", "UDAYA HD","UDAYA TV", "Kasthuri TV", "SIRI KANNADA ALL Time","COLORS KANNADA","Colors Kannada Cinema", "COLORS KANNADA HD", "COLORS SUPER", "STAR SUVARNA", "STAR SUVARNA HD","Zee Kannada","Zee Kannada HD",
//   ],
//   Kids: [
//     "CHINTU TV", "ETV BAL BHARAT KANNADA HD",
//   ],
//   Movies: [
//     "udaya movies", "Public Movies", "STAR SUVARNA PLUS", "Zee Picchar", "Zee Picchar HD",
//   ],
//   News: [
//     "Kasthuri News", "News 1st Kannada", "POWER TV", "PRAJAA KANNADA NEWS", "Public Tv", "REPUBLIC KANNADA", "NEWS18 KANNADA", "Zee Kannada News",
//   ],
//   Sports: [
//     "STAR SPORTS 1 KANNADA", "Star Sports 2 Kannada",
//   ],
// };
// const marathiChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD GOA", "DD SAHYADRI", "SUN MARATHI", "SONY MARATHI", "COLORS MARATHI", "COLORS MARATHI HD", "STAR PRAVAH", "STAR PRAVAH HD", "Zee Marathi", "Zee Marathi HD", "Zee Yuva",
//   ],
//   Kids: [
//     "ETV BAL BHARAT MARATHI HD",
//   ],
//   Movies: [
//     "STAR PRAVAH PICTURE", "STAR PRAVAH PICTURE HD", "Zee Talkies", "Zee Talkies HD",
//   ],
//   News: [
//     "Abp Majha", "JAI MAHARASTRA", "MKN News", "NDTV MARATHI", "NEWS18 LOKMAT", "Zee 24 Taas",
//   ],
//   Sports: [
//     "STAR SPORTS 1 MARATHI",
//   ],
// };
// const odiaChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD ODIA", "Manjari TV", "Sidharth TV", "Star Kiran", "TARANG TV","Zee Sarthak",
//   ],
//   Kids: [
//     "ETV BAL BHARAT ODIA HD",
//   ],
//   Movies: [
//     "Alankar", "Sidharth Gold",
//   ],
//   News: [
//     "Kalinga", "Kanak News", "NANDIGHOSHA TV", "OTV", "Prameya News 7", "NEWS18 ODIA",
//   ],
//   Music: [
//     "TARANG MUSIC",
//   ],
// };
// const assameseChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD Assam", "DD Tripura","Jonack","News Live Bangla","Ramdhenu","Rang TV", "Rengoni",
//   ],
//   Kids: [
//     "ETV BAL BHARAT ASSAMESE HD",
//   ],
//   Movies: [
//     "POPULAR TV",
//   ],
//   News: [
//     "NEWS18 ASSAM NE", "ASSAM TALKS", "DA NEWS PLUS", "DY365","NE News","News Live","NEWS TIME ASSAM","NKTV PLUS","Prag News", "PRARTHAM KHABHAR 24X7",
//   ],
//   Infotainment: [
//     "DD Mizoram",
//   ],
// };
// const bhojpuriChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "B4U Bhojpuri", "ShowBox",
//   ],
//   Movies: [
//     "Zee Biskope", "Bhojpuri Cinema", "DABANGG", "Filmachi Bhojpuri", "Oscar Movies Bhojpuri",
//   ],
// };
// const urduChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "DD KASHIR",
//   ],
//   News: [
//     "DD URDU", "GULISTAN NEWS", "Munsif Tv", "NEWS18 JKLH", "SALAAM TV",
//   ],
// };
// const rajasthaniChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "Gangaur",
//   ],
// };
// const bengaliChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "Zee Bangla", "Zee Bangla HD", "Aakash Aath", "Sun Bangla", "COLORS BANGLA", "COLORS BANGLA HD", "STAR JALSHA","STAR JALSHA HD", "DD BANGLA", "Enterr10 Bangla", "News Time Bangla", "Ruposhi Bangla", "SangeetBangla", "SONY AATH", "TV9 Bangla",
//   ],
//   Kids: [
//     "ETV BAL BHARAT BENGALI HD",
//   ],
//   Movies: [
//     "Zee Bangla Cinema", "COLORS BANGLA CINEMA", "JALSHA MOVIES", "JALSHA MOVIES HD", "KHUSHBOO BANGLA",
//   ],
//   News: [
//     "Abp Ananda", "NEWS18 BANGLA", "KOLKATA TV", "NEWS HOUR", "REPUBLIC BANGLA", "RPLUS", "Zee 24 Ghanta",
//   ],
//   Music: [
//     "Dhoom music", "RONGEEN",
//   ],
// };

// const punjabiChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "BALLE BALLE", "DD PUNJABI","Zee Punjabi"
//   ],
//   Kids: [
//     "ETV BAL BHARAT PUNJABI HD"
//   ],
//   Movies: [
//     "PITARA", "POPCORN MOVIES", "PTC Punjabi Gold", "Tabbar Hits"
//   ],
//   News: [
//     "Chardikla Time Tv", "India News Punjab", "Mh ONE News", "PTC NEWS", "News18 Punjab/Haryana", "ZEE Punjab Hr Hp"
//   ]
// };

// const malayalamChannelsBySubcategory: Record<string, string[]> = {
//   Entertainment: [
//     "Amrita Tv", "ATE", "DD MALAYALAM", "FLOWERS TV", "SURYA HD", "Jaihind Tv", "Jeevan Tv", "KAIRALI TV", "KAUMUDY","KERALA VISION", "Surya TV", "Mazhavil Manorama", "Mazhavil Manorama Hd", "SAFARI", "Shalom Television", "Asianet",
//     "ASIANET HD", "ASIANET PLUS", "WE", "Zee Keralam", "Zee Keralam HD",
//   ],
//   Kids: [
//     "ETV BAL BHARAT MALAYALAM HD", "KOCHU TV",
//   ],
//   Movies: [
//     "SURYA MOVIES", "Asianet Movies", "Asianet Movies HD",
//   ],
//   News: [
//     "24 NEWS", "Asianet News", "KairaliNews", "Manorama News", "MATRABHUMI NEWS", "MEDIA ONE", "RAJ NEWS MALAYALAM","REPORTER", "NEWS18 KERALA",
//   ],
//   Comedy: [
//     "SURYA COMEDY",
//   ],
// };


// const tabs = ["Channels", "Broadcaster Packs", "Ulka Bouquets"];

// const channelImages: Record<string, string> = {
//   "CHITTI TV": "/CHITTI TV .jpeg",
//   "NTV": "/NTV.png",
//   "ETV ABHIRUCHI": "/ETV ABHIRUCHI.png",
//   "ETV ANDHRAPRADESH": "/ETV ANDHRAPRADESH.png",
//   "ETV BAL BHARAT ENGLISH HD": "/ETV BAL BHARAT.png",
//   "ETV CINEMA HD": "/ETV CINEMA HD.png",
//   "ETV CINEMA SD": "/ETV CINEMA SD.png",
//   "ETV HD": "/ETV HD.png",
//   "ETV LIFE": "/ETV LIFE.png",
//   "ETV PLUS HD": "/ETV PLUS HD.png",
//   "ETV PLUS SD": "/ETV PLUS SD.png",
//   "ETV PLUS": "/ETV_Plus.png",
//   "ETV TELANGANA": "/ETV TELENGANA.png",
//   "ETV TELUGU": "/Etv Telugu.png",
//   "ETV CINEMA": "/ETV Cinema.png",
//   "Big Magic": "/BIG MAGIC.png",
//   "&Flix": "/&Flix.png",
//   "&Flix HD": "/&Flix HD.png",
//   "&Pictures": "/& PICTURES.png",
//   "&Pictures HD": "/&Pictures HD.png",
//   "&PICTURES SD": "/&PICTURES SD.png",
//   "&Prive HD": "/&Prive HD.png",
//   "&Tv HD": "/&Tv HD.png",
//   "&Xplor HD": "/&Xplor HD.png",
//   "Zee Action": "/Zee Action.png",
//   "Zee Anmol": "/Zee Anmol.png",
//   "Zee Anmol Cinema": "/Zee Anmol Cinema.png",
//   "Zee Bangla": "/Zee Bangla.png",
//   "Zee Bangla Cinema": "/Zee Bangla Cinema.png",
//   "Zee Bangla HD": "/Zee Bangla HD.png",
//   "BISCOPE": "/BISCOPE.png",
//   "Zee Bollywood": "/Zee Bollywood.png",
//   "Zee Cafe": "/Zee Cafe.png",
//   "Zee Cafe HD": "/Zee Cafe HD.png",
//   "Zee Cinema": "/Zee Cinema.png",
//   "Zee Cinema HD": "/Zee Cinema HD.png",
//   "Zee Cinemalu": "/Zee Cinemalu.png",
//   "Zee Cinemalu HD": "/Zee Cinemalu HD.png",
//   "Zee Classic": "/Zee Classic.png",
//   "Zee_Ganga": "/Zee_Ganga.png",
//   "Zee Kannada": "/Zee Kannada.png",
//   "Zee Kannada HD": "/Zee Kannada HD.png",
//   "Zee Keralam": "/Zee Keralam.png",
//   "Zee Keralam HD": "/Zee Keralam HD.png",
//   "Zee Marathi": "/Zee Marathi.png",
//   "Zee Marathi HD": "/Zee Marathi HD.png",
//   "Zee Picchar": "/Zee Picchar.png",
//   "Zee Picchar HD": "/Zee Picchar HD.png",
//   "Zee Punjabi": "/Zee Punjabi.png",
//   "Zee Sarthak": "/Zee Sarthak.png",
//   "Zee Talkies": "/Zee Talkies.png",
//   "Zee Talkies HD": "/Zee Talkies HD.png",
//   "Zee Talkies SD": "/Zee Talkies SD.png",
//   "Zee Tamil": "/Zee Tamil.png",
//   "Zee Tamil HD": "/Zee Tamil HD.png",
//   "Zee Telugu": "/Zee Telugu.png",
//   "Zee Telugu HD": "/Zee Telugu HD.png",
//   "Zee Thirai": "/Zee Thirai.png",
//   "Zee Thirai HD": "/Zee Thirai HD.png",
//   "Zee Tv": "/Zee Tv.png",
//   "Zee Tv HD": "/Zee Tv HD.png",
//   "Zee Yuva": "/Zee Yuva.png",
//   "Zee Zest": "/Zee Zest.png",
//   "Zee Zest HD": "/Zee Zest HD.png",
//   "ZING": "/ZING.png",
//   "& TV": "/& TV.png",
//   "Zee Biskope": "/Zee Biskope.png",
//   "STAR PRAVAH PICTURE": "/STAR PRAVAH PICTURE.png",
//   "STAR PRAVAH PICTURE HD": "/STAR PRAVAH PICTURE HD.png",
//   "star gold 2": "/StarrGold.webp",
//   "Asianet Movies": "/Asianet-Movies.png",
//   "Asianet Plus": "/Asianet-PlusB.png",
//   "BINDAAS": "/BINDAAS.png",
//   "Jalsa Movies": "/JalsaMovies.png",
//   "JALSHA MOVIES HD": "/JALSHA MOVIES HD.png",
//   "MAA MOVIES HD": "/MAA MOVIES HD.png",
//   "MAA MUSIC": "/MAA MUSIC.png",
//   "NGC": "/NGC.png",
//   "STAR GOLD 2 HD": "/STAR GOLD2 HD.png",
//   "STAR GOLD ROMANCE": "/STAR GOLD ROMANCE.png",
//   "STAR GOLD SELECT": "/STAR GOLD SELECT.png",
//   "STAR GOLD SELECT HD": "/STAR GOLD SELECT HD.png",
//   "STAR GOLD THRILLS": "/STAR GOLD THRILLS.png",
//   "STAR KIRAN HD": "/STAR KIRAN HD.png",
//   "STAR MAA MOVIES HD": "/STAR MAA MOVIES HD.png",
//   "STAR MOVIES": "/STAR MOVIES.png",
//   "STAR MOVIES SELECT": "/STAR MOVIES SELECT.png",
//   "STAR PRAVAH HD": "/STAR PRAVAH HD.png",
//   "STAR SPORTS1 TAMIL": "/STAR SPORTS1 TAMIL.png",
//   "STAR SPORTS1 TAMIL HD": "/STAR SPORTS1 TAMIL H.png",
//   "STAR UTSAV": "/STAR UTSAV.png",
//   "STAR UTSAV MOVIES": "/STAR UTSAV MOVIES.png",
//   "SUVARNA HD": "/SUVARNA HD.png",
//   "SUVARNA PLUS": "/SUVARNA PLUS.png",
//   "SUVARNA PLUS COPY": "/SUVARNA PLUS (copy).png",
//   "VIJAY SUPER": "/VIJAY SUPER.png",
//   "VIJAY SUPER HD": "/VIJAY SUPER HD.png",
//   "VIJAY TAKKAR": "/VIJAY TAKKAR.png",
//   "ET NOW": "/ET Now.png",
//   "ET NOW SWADESH": "/ET NOW SWADESH.png",
//   "MIRROR NOW": "/MIRROR NOW.png",
//   "MN+HD": "/MN+ HD.png",
//   "MNX": "/MNX.png",
//   "MNX HD": "/MNX_HD.png",
//   "MOVIES NOW HD": "/MOVIES NOW HD.png",
//   "MOVIES NOW": "/MOVIES NOW SD.png",
//   "ROMEDY NOW": "/ROMEDY NOW.png",
//   "TIMES NOW": "/TIMES NOW.png",
//   "TIMES NOW NABHARAT": "/TIMES NOW NABHARAT.png",
//   "ZOOM": "/ZOOM.png",
//   "SET HD": "/SET HD.png",
//   "SONY AATH": "/SONY AATH.png",
//   "SONY BBC EARTH HD": "/SONY BBC EARTH HD.png",
//   "SONY BBC EARTH SD": "/SONY BBC EARTH SD.png",
//   "SONY BBC EARTH": "/SONYBBCEARTH.png",
//   "SONY MAX HD": "/SONY MAX HD.png",
//   "SONY MAX SD": "/SONY MAX SD.png",
//   "SONY PAL": "/SONY PAL.png",
//   "SONY PIX HD": "/SONY PIX HD.png",
//   "SONY PIX SD": "/SONY PIX SD.png",
//   "SONY SAB": "/SONY SAB.png",
//   "SONY SAB HD": "/SONY SAB HD.png",
//   "Sony SET HD": "/Sony SET HD.png",
//   "Sony SET": "/SONY SET SD.png",
//   "SONY TEN1 HD": "/SONY TEN1 HD.png",
//   "SONY TEN1 SD": "/SONY TEN1 SD.png",
//   "SONY TEN2 SD": "/SONY TEN2 SD.png",
//   "SONY TEN3 HD": "/SONY TEN3HD.png",
//   "SONY TEN3 SD": "/SONY TEN3 SD.png",
//   "SONY TEN5 HD": "/SONY TEN5 HD.png",
//   "SONY TEN5 SD": "/SONY TEN5 SD.png",
//   "SONY SPORTS 2": "/SONY SPORTS 2.png",
//   "SONY SPORTS 5": "/SONY SPORTS 5.png",
//   "SONY WAH": "/SONY WAH.png",
//   "SONY YAY": "/SONY YAY.png",
//   "SONY MARATHI": "/SONY MARATHI.png",
//   "GEMINI COMEDY": "/GEMINI COMEDY.png",
//   "GEMINI LIFE": "/GEMINI LIFE.png",
//   "GEMINI MOVIES": "/GEMINI MOVIES.png",
//   "GEMINI MOVIES HD": "/GEMINI MOVIES HD.png",
//   "GEMINI MUSIC": "/GEMINI MUSIC.png",
//   "GEMINI MUSIC HD": "/GEMINI MUSIC HD.png",
//   "GEMINI TV": "/GEMINI TV.png",
//   "GEMINI TV HD": "/GEMINI TV HD.png",
//   "SUN MARATHI": "/SUN MARATHI.png",
//   "SUN MUSIC": "/SUN MUSIC.png",
//   "SURYA COMEDY": "/SURYA COMEDY.png",
//   "SURYA MOVIES": "/SURYA MOVIES.png",
//   "SURYA MUSIC": "/SURYA MUSIC.png",
//   "SURYA TV": "/SURYA TV.png",
//   "SURYA TV HD": "/SURYA TV HD.png",
//   "UDAYA COMEDY": "/UDAYA COMEDY.png",
//   "UDAYA MOVIES": "/UDAYA MOVIES.png",
//   "UDAYA MUSIC": "/UDAYA MUSIC.png",
//   "UDAYA TV": "/UDAYA TV.png",
//   "UDAYA TV HD": "/UDAYA TV HD.png",
//   "ABN": "/ABN.png",
// };

// const fetchBouqueData = async (): Promise<BouqueItem[] | null> => {
//   try {
//     const token = localStorage.getItem("access_token");
//     if (!token) throw new Error("No access token found.");

//     const response = await fetch(
//       "https://partners.ulka.tv/api/railtel.php/v1/operator-bouque?expand=boxtype_lbl,type_lbl,status_lbl,created_by_lbl&filter[operator_id]=4&vr=railtel1.1",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     const data = await response.json();
//     if (data.success) return data.data as BouqueItem[];
//     else throw new Error(data.message || "Failed to fetch data.");
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// };

// const BouquePage = () => {
//   const [selectedTab, setSelectedTab] = useState("Channels");
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
//   const [bouqueData, setBouqueData] = useState<BouqueItem[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showAllChannels, setShowAllChannels] = useState(false);

//   const typeMapping: Record<string, "Alacarte" | "Add On" | "Base"> = {
//     Channels: "Alacarte",
//     "Broadcaster Packs": "Add On",
//     "Ulka Bouquets": "Base",
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       const storedData = localStorage.getItem("bouqueData");
//       if (storedData) {
//         setBouqueData(JSON.parse(storedData));
//       }

//       const data = await fetchBouqueData();
//       if (data) {
//         setBouqueData(data);
//         localStorage.setItem("bouqueData", JSON.stringify(data));
//       }
//     };
//     loadData();
//   }, []);

//   const handleCategoryClick = (category: string) => {
//     if (selectedCategory === category) {
//       setSelectedCategory(null);
//       setSelectedSubcategory(null);
//     } else {
//       setSelectedCategory(category);
//       setSelectedSubcategory(subcategories[0]);
//     }
//   };

//   const filteredBouqueData = bouqueData.filter(
//     (item) =>
//       item.type_lbl.toLowerCase().replace(/\s+/g, "") ===
//         typeMapping[selectedTab as keyof typeof typeMapping]?.toLowerCase().replace(/\s+/g, "") &&
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-4 sm:p-10 md:p-40  mt-[2rem] bg-white text-black">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-4">Ulka Subscription Plans</h1>
//         <p className="text-gray-600 mb-6">View all the broadcaster packs available on ULKA TV</p>
//         <div className="flex flex-wrap justify-center gap-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setSelectedTab(tab)}
//               className={`px-6 py-3 rounded-md font-medium ${
//                 selectedTab === tab ? "bg-black text-white" : "bg-red-500 text-black"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {selectedTab === "Channels" && (
//         <div className="flex flex-col items-center mt-10">
//           {categories.map((category) => (
//             <div key={category} className="w-full max-w-8xl mb-4">
//               <button
//                 className={`w-full flex justify-between items-center px-4 py-4 text-sm font-medium rounded-md ${
//                   selectedCategory === category ? "bg-black text-white" : "bg-gray-200 text-black"
//                 }`}
//                 onClick={() => {
//                   handleCategoryClick(category);
//                   setShowAllChannels(false); // Reset Read More state on category change
//                 }}
//               >
//                 <span>{category}</span>
//                 <span className="text-xl font-bold">
//                   {selectedCategory === category ? "+" : "−"}
//                 </span>
//               </button>

//               {selectedCategory === category && (
//                 <>
//                   <div className="flex flex-wrap gap-2 mt-4 px-4">
//                     {subcategories.map((sub) => (
//                       <button
//                         key={sub}
//                         className={`px-4 py-2 text-[15px] rounded-md border ${
//                           selectedSubcategory === sub
//                             ? "bg-red-600 text-white"
//                             : "bg-gray-100 text-black"
//                         }`}
//                         onClick={() => {
//                           setSelectedSubcategory(sub);
//                           setShowAllChannels(false); // Reset Read More on subcategory change
//                         }}
//                       >
//                         {sub}
//                       </button>
//                     ))}
//                   </div>

//                   {selectedSubcategory && (
//                     <div className="mt-3 p-4 bg-white rounded-md border border-gray-200">
//                       {(() => {
//                         const filteredChannels =
//                           category === "Telugu" && teluguChannelsBySubcategory[selectedSubcategory]
//                             ? bouqueData.filter((item) =>
//                                 teluguChannelsBySubcategory[selectedSubcategory].some(
//                                   (channelName) =>
//                                     channelName.toLowerCase() === item.name.toLowerCase()
//                                 )
//                               )
//                             : category === "English" && englishChannelsBySubcategory[selectedSubcategory]
//                             ? bouqueData.filter((item) =>
//                                 englishChannelsBySubcategory[selectedSubcategory].some(
//                                   (channelName) =>
//                                     channelName.toLowerCase() === item.name.toLowerCase()
//                                 )
//                               )
//                             : category === "Hindi" && hindiChannelsBySubcategory[selectedSubcategory]
//                             ? bouqueData.filter((item) =>
//                                 hindiChannelsBySubcategory[selectedSubcategory].some(
//                                   (channelName) =>
//                                     channelName.toLowerCase() === item.name.toLowerCase()
//                                 )
//                               )

//                               : category === "Tamil" && tamilChannelsBySubcategory[selectedSubcategory]
//                               ? bouqueData.filter((item) =>
//                                   tamilChannelsBySubcategory[selectedSubcategory].some(
//                                     (channelName) =>
//                                       channelName.toLowerCase() === item.name.toLowerCase()
//                                   )
//                                 )

//                               : category === "Kannada" && kannadaChannelsBySubcategory[selectedSubcategory]
//                               ? bouqueData.filter((item) =>
//                                   kannadaChannelsBySubcategory[selectedSubcategory].some(
//                                     (channelName) =>
//                                       channelName.toLowerCase() === item.name.toLowerCase()
//                                   )
//                                 )
                                
//                                 : category === "Marathi" && marathiChannelsBySubcategory[selectedSubcategory]
//                                 ? bouqueData.filter((item) =>
//                                     marathiChannelsBySubcategory[selectedSubcategory].some(
//                                       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                     )
//                                   )

//                                 : category === "Odia" && odiaChannelsBySubcategory[selectedSubcategory]
//                                 ? bouqueData.filter((item) =>
//                                     odiaChannelsBySubcategory[selectedSubcategory].some(
//                                       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                     )
//                                   )
//                                   : category === "Assamese" && assameseChannelsBySubcategory[selectedSubcategory]
//                                   ? bouqueData.filter((item) =>
//                                       assameseChannelsBySubcategory[selectedSubcategory].some(
//                                         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                       )
//                                     )
//                                   : category === "Bhojpuri" && bhojpuriChannelsBySubcategory[selectedSubcategory]
//                                   ? bouqueData.filter((item) =>
//                                       bhojpuriChannelsBySubcategory[selectedSubcategory].some(
//                                         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                       )
//                                     )
//                                   : category === "Urdu" && urduChannelsBySubcategory[selectedSubcategory]
//                                   ? bouqueData.filter((item) =>
//                                       urduChannelsBySubcategory[selectedSubcategory].some(
//                                         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                       )
//                                     )
//                                   : category === "Rajasthani" && rajasthaniChannelsBySubcategory[selectedSubcategory]
//                                   ? bouqueData.filter((item) =>
//                                       rajasthaniChannelsBySubcategory[selectedSubcategory].some(
//                                         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
//                                       )
//                                     )                                                                                     
//                                     : category === "Bengali" && bengaliChannelsBySubcategory[selectedSubcategory]
//                                     ? bouqueData.filter((item) =>
//                                         bengaliChannelsBySubcategory[selectedSubcategory].some(
//                                           (channelName) =>
//                                             channelName.toLowerCase() === item.name.toLowerCase()
//                                         )
//                                       )
//                                     : category === "Punjabi" && punjabiChannelsBySubcategory[selectedSubcategory]
//                                     ? bouqueData.filter((item) =>
//                                       punjabiChannelsBySubcategory[selectedSubcategory].some(
//                                           (channelName) =>
//                                             channelName.toLowerCase() === item.name.toLowerCase()
//                                         )
//                                       )
//                                     : category === "Malayalam" && malayalamChannelsBySubcategory[selectedSubcategory]
//                                     ? bouqueData.filter((item) =>
//                                       malayalamChannelsBySubcategory[selectedSubcategory].some(
//                                           (channelName) =>
//                                             channelName.toLowerCase() === item.name.toLowerCase()
//                                         )
//                                       )
//                                   : [];  
                                                                                    
//                         return (
//                           <>
//                             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
//                               {(showAllChannels ? filteredChannels : filteredChannels.slice(0, 14)).map(
//                                 (channel, index) => (
//                                   <div
//                                     key={index}
//                                     className="text-center border p-2 rounded-md bg-gray-50"
//                                   >
//                                     <Image
//                                       src={channelImages[channel.name] || "/placeholder.png"}
//                                       alt={channel.name}
//                                       width={80}
//                                       height={50}
//                                       className="mx-auto object-contain"
//                                     />
//                                     <p className="mt-2 text-sm font-semibold">{channel.name}</p>
//                                     {channel.rate.length > 0 && (
//                                       <p className="text-xs text-gray-600">
//                                         MRP: ₹{Number(channel.rate[0].price).toFixed(0)} / month
//                                       </p>
//                                     )}
//                                   </div>
//                                 )
//                               )}
//                             </div>

//                             {/* Read More / Show Less */}
//                             {filteredChannels.length > 14 && (
//                               <div className="mt-4 text-center">
//                                 <button
//                                   onClick={() => setShowAllChannels(!showAllChannels)}
//                                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                                 >
//                                   {showAllChannels ? "Show Less" : "Read More"}
//                                 </button>
//                               </div>
//                             )}
//                           </>
//                         );
//                       })()}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}


//       {["Broadcaster Packs", "Ulka Bouquets"].includes(selectedTab) && (
//         <div className="mt-10">
//           <div className="relative w-full max-w-8xl mx-auto mb-8">
//             <FaSearch className="absolute left-3 top-3 text-black" />
//             <input
//               type="text"
//               placeholder="Search channel..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-2 pl-10 border rounded-md"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
//             {filteredBouqueData.map((item) => (
//               <div
//                 key={item.id}
//                 className={`p-4 border rounded-md text-center ${
//                   selectedTab === "Broadcaster Packs"
//                     ? "bg-blue-100"
//                     : selectedTab === "Ulka Bouquets"
//                     ? "bg-red-100"
//                     : "bg-white"
//                 }`}
//               >
//                 {/* Show image only for Channels */}
//                 {selectedTab === "Channels" && (
//                   <img
//                     src={channelImages[item.name] || "/placeholder.png"}
//                     alt={item.name}
//                     className="w-25 h-24 mx-auto mb-2 object-contain"
//                   />
//                 )}

//                 <p className="font-semibold mb-2">{item.name}</p>
//                 {item.rate.length > 0 && (
//                   <p className="text-sm text-gray-700">
//                     MRP: ₹{Number(item.rate[0].price).toFixed(0)} / month
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BouquePage;





"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

interface Rate {
  id: number;
  months: number;
  drp: string;
}

interface BouqueItem {
  id: number;
  name: string;
  type_lbl: string;
  rate: Rate[];
}

const categories = [
  "Telugu", "English", "Hindi", "Tamil", "Kannada", "Marathi", "Odia", "Assamese",
  "Bhojpuri", "Urdu", "Bengali", "Punjabi", "Malayalam", "Sports",
];

const subcategories = ["Entertainment", "Kids", "Movies", "News", "Sports", "Music", "Comedy", "LifeStyle", "Spiritual", "Infotainment",];

const teluguChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "Zee Telugu", "GEMINI TV",  "ETV", "MAA TV",  "ETV PLUS", "MAA HD", "ETV HD", "GEMINI TV HD", "Zee Telugu HD", "GEMINI MOVIES HD",
  ],
  Kids: [
    "ETV BAL BHARATH TELUGU HD", "KUSHI TV", "ETV BAL BHARATH TELUGU", "POGO TELUGU",
  ],
  News: [
    "ETV ANDHRAPRADESH","ETV TELANGANA",
  ],
  Movies: [
     "GEMINI MOVIES", "GEMINI MOVIES HD","ETV CINEMA", "Zee Cinemalu",  "Zee Cinemalu HD", "ETV PLUS HD", "ETV CINEMA HD", "MAA MOVIES HD", "MAA MOVIES", "MAA GOLD", 
  ],
  Sports: [
    "Sony Sports Ten 4 Telugu",  "STAR SPORTS 1 TELUGU HD","STAR SPORTS 1 TELUGU", "Sony Sports Ten 4 TAMIL",
  ],
  Music: [
    "GEMINI MUSIC HD","GEMINI MUSIC","MAA MUSIC",
  ],
  Comedy: [
    "GEMINI COMEDY",
  ],
  LifeStyle: [
    "GEMINI LIFE", "ETV ABHIRUCHI",
  ],
  Spiritual: [
   "ETV LIFE" ,
  ],
};
const englishChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "Zee Cafe HD", "Disney International HD", "COLORS INFINITY HD", "COLORS INFINITY", "Zee Cafe",
  ],
  Kids: [
    "DISCOVERY KIDS", "DISNEY CHANNEL", "DISNEY JUNIOR", "NICK Jr", "HUNGAMA TV", "POGO", "Sonic", "HUNGAMA TV", "NICK", "GUBBARE", "ETV BAL BHARAT ENGLISH HD", "Nick HD +",
  ],
  Movies: [
    "MNX HD", "MN+HD", "MOVIES NOW HD", "STAR MOVIES SELECT HD", "SONY PIX HD", "STAR MOVIES HD", "&Prive HD", "&Flix HD", "&Flix", "STAR MOVIES", "Movies Now", "Mnx", "Romedy Now", "SONY PIX", "Star Movies Select"
  ],
  News: ["CNBC TV 18 PRIME HD", "Times Now World HD", "CNN INTERNATIONAL", "Ndtv 24X7", "Times Now", "India Today", "Cnn News 18", "Mirror Now", "Ndtv Profit", "CNBC TV 18", "Et Now", "BBC  NEWS", "WION"
  ],
  Infotainment: ["Discovery Turbo", "National Geographic", "Nat Geo Wild", "DISCOVERY CHANNEL", "ANIMAL PLANET", "Discovery Science", "SONY BBC EARTH", "Investigation Discovery", "ZEE ZEST", "ZEE ZEST HD", "SONY BBC EARTH HD", "Animal Planet HD world", "Discovery HD", "NAT GEO WILD HD", "NATIONAL GEOGRAPHIC HD"
  ],
  LifeStyle: ["Ndtv Good Times", "TLC", "travelxp", "travelxp HD", "TLC HD World"
  ],
};
const hindiChannelsBySubcategory: Record<string, string[]> = {
  Entertainment:["& Tv", "Zee Tv", "Colors", "STAR PLUS", "STAR BHARAT", "SONY SET", "SONY SAB", "ZEE Anmol", "Big Magic", "EPIC TV", "Ishara TV", "SONY SAB HD", "SONY SET HD", "STAR BHARAT HD", "STAR PLUS HD", "Colors HD", "Zee TV HD", "&Tv HD"
  ],

  Infotainment: ["HISTORY TV18", "HISTORY TV 18 HD"],
  Movies: [
    "STAR GOLD", "SONY MAX", "Zee Cinema", "STAR GOLD ROMANCE", "STAR GOLD THRILL","Zee Bollywood", "&Pictures", "Zee Action", "STAR GOLD SELECT", "COLORS CINEPLEX", "Zee Anmol Cinema", "ZEE ANMOL CINEMA 2", "MAX2", "star gold 2", "Zee Classic", "SONY MAX1", "&Xplor HD", "STAR GOLD 2 HD", "COLORS CINEPLEX HD", "SONY MAX HD", "STAR GOLD SELECT HD", "& Pictures HD", "Zee Cinema HD", "STAR GOLD HD"
  ],
  Kids: ["ETV BAL BHARAT HINDI HD", "DISNEY CHANNEL HD", "Cartoon Network", "HUNGAMA TV", "SONY YAY"],
  News: [
    "ZEE BIHAR JHARKHAND", "ZEE UP UK", "NEWS 18 PUNJAB", "Zee Business", "CNBC AWAAZ", "NEWS 18 UP/UK", "NEWS 18 BIHAR/JHARKHAND", "NEWS 18 RAJASTHAN", "ZEE Rajasthan News", "News18 Mp Chattisgarh", "Zee Mp Chattisgarh", "ET NOW SWADESH", "Zee Delhi Ncr Haryana", "ZEE BHARAT", "ZEE NEWS HD", "TIMES NOW NAVBHARAT HD", "AAJTAK HD"
  ],
  LifeStyle: ["Foodxp"],
  Music: [ "ShowBox", "MTV", "Zing", "ZOOM", "Mtv HD" ],
};
const tamilChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "KALAIGNAR", "Colors Tamil", "Sun Tv", "VIJAY", "Zee Tamil", "VIJAY SUPER", "VIJAY HD", "Zee Tamil HD", "Jaya TV HD", "VIJAY HD", "Sun Tv HD", "Colors Tamil HD",
  ],
  Kids: ["ETV BAL BHARAT TAMIL HD", "KALAIGNAR CHITHIRAM", "Chutti Tv", "Adithya Tv" ],

  LifeStyle: ["SUN LIFE"],
  Comedy: [
    "KALAIGNAR SIRIPPOLI",
  ],
  Music: ["KALAIGNAR ISAI ARUVI", "Sun Music", "Jaya Max", "Vijay Takkar","Sun Music HD"],
  Movies: [
    "Zee Thirai", "Zee Thirai HD", "J MOVIES", "KALAIGNAR MURASU", "KTV", "KTV HD",
  ],
  News: [
    "KALAIGNAR SEITHIGAL", "NEWS 18 TAMILNADU", "SUN NEWS", "JAYA PLUS"
  ],


};
const kannadaChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "Udaya Tv", "Colors Kannada", "STAR SUVARNA", "Zee Kannada", "Colors Super", "Zee Kannada HD", "STAR SUVARNA HD",
    "Colors Kannada HD", "Udaya HD",
  ],
  Kids: [
    "Chintu Tv", "ETV BAL BHARAT KANNADA HD",
  ],
  Movies: [
    "Udaya Movies", "SUVARNA PLUS", "Colors Kannada Cinema", "Zee Picchar","Zee Picchar HD",
  ],
  News: [
    "NEWS 18 KANNADA","Zee Kannada News",
  ],
  Music: [
    "Udaya Music",
  ],
  Comedy: [
    "Udaya Comedy",
  ],
};
const marathiChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "STAR PRAVAH HD",
    "Zee Marathi HD",
    "Colors Marathi HD",
    "Colors Marathi",
    "Zee Marathi",
    "STAR PRAVAH",
    "Zee Yuva",
    "SONY MARATHI",
  ],
  Kids: [
    "ETV BAL BHARAT MARATHI HD",
  ],
  Movies: [
    "Star Pravah Picture HD",
    "Zee Talkies HD",
    "Zee Talkies",
    "Star Pravah Picture",
  ],
  News: [
    "NEWS 18 LOKMAT",
    "Zee 24 Taas",
  ],
};
const odiaChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "Zee Sarthak", "TARANG TV", "Sidharth TV", "STAR KIRAN"
  ],
  Kids: [
    "ETV BAL BHARAT ODIA HD"
  ],
  Movies: [
    "Alankar", "Sidharth Gold"
  ],
  News: [
    "News18 Odia"
  ],
  Music: [
    "Tarang Music"
  ],
  Spiritual: [
    "Prathana Life", "Sidharth Bhakti", "Jay Jagannath"
  ],
};
const assameseChannelsBySubcategory: Record<string, string[]> = {
  Kids: [
    "ETV BAL BHARAT ASSAMESE HD",
  ],
  News: [
    "NEWS18 ASSAM NE",
  ],
};
const bhojpuriChannelsBySubcategory: Record<string, string[]> = {
  Movies: [
    "Zee Biskope","Filmachi Bhojpuri",
  ],
};
const urduChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "SALAAM TV",
  ],
  News: [
    "NEWS18 JKLH",
  ],
};
const bengaliChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "COLORS BANGLA", "Zee Bangla", "STAR JALSHA", "SONY AATH", "STAR JALSHA HD", "Zee Bangla HD", "Colors Bangla HD",
  ],
  Kids: [
    "ETV BAL BHARAT BENGALI HD",
  ],
  Movies: [
    "JALSHA MOVIES", "Zee Bangla Cinema", "COLORS BANGLA","JALSHA MOVIES HD",
  ],
  News: [
    "ZEE 24 GHANTA", "NEWS 18 BANGLA",
  ],
};

const punjabiChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "Zee Punjabi"
  ],
  Kids: [
    "ETV BAL BHARAT PUNJABI HD"
  ],
  News: [
    "ZEE Punjab Hr Hp"
  ]
};

const malayalamChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "SURYA TV", "ASIANET", "ASIANET PLUS", "Zee Keralam", "Flowers", "Zee Keralam HD", "ASIANET HD", "SURYA HD",
  ],
  Kids: [
    "ETV BAL BHARAT MALAYALAM HD", "KOCHU TV",
  ],
  Movies: [
    "Surya Movies", "ASIANET MOVIES", "Asianet Movies HD",
  ],
  News: [
    "NEWS 18 KERALA",
  ],
  Comedy: [
    "SURYA COMEDY",
  ],
  Music: [
    "SURYA MUSIC",
  ],
};

const sportsChannelsBySubcategory: Record<string, string[]> = {
  Entertainment: [
    "Star Sports 1 Tamil HD",
    "Star Sports 2 HD Hindi",
    "EUROSPORT HD",
    "STAR SPORTS SELECT HD 2",
    "Star Sports Select HD1",
    "STAR SPORTS 1 HD HINDI",
    "Star Sports HD2",
    "Star Sports HD1",
    "Sony Sports Ten 3 HD",
    "Sony Sports Ten 5 HD",
    "Sony Sports Ten 2 HD",
    "Sony Sports Ten 1 HD",
    "Star Sports 2 HD Telugu",
    "Star Sports 2 HD Tamil",
    "STAR SPORTS 1 TAMIL",
    "Sony Sports Ten 5",
    "Sony Sports Ten 1",
    "Sony Sports Ten 2",
    "Sony Sports Ten 3",
    "STAR SPORTS 1",
    "STAR SPORTS 2",
    "STAR SPORTS 3",
    "STAR SPORTS 1 HINDI",
    "STAR SPORTS SELECT 1",
    "STAR SPORTS SELECT 2",
    "STAR SPORTS 1 KANNADA",
    "Star Sports 2 Kannada",
    "EUROSPORT",
    "Star Sports 2 Hindi",
    "Star Sports 2 HD Tamil",
    "Star Sports 2 Telugu",
    "STAR SPORTS 1 TELUGU",
    "STAR SPORTS KHEL"
  ]
};
const tabs = ["Channels", "Broadcaster Packs", "Ulka Bouquets"];

const channelImages: Record<string, string> = {
  "CHITTI TV": "/CHITTI TV .jpeg",
  "MAA GOLD": "/MAA GOLD.png",
  "POGO TELUGU": "/POGO Telugu.png",
  "KUSHI TV": "/KUSHITVTELUGU.png",
  "MAA MOVIES": "/StarMaaMovies.png",
  "NTV": "/NTV.png",
  "ETV": "/ETV.png",
  "ETV BAL BHARATH TELUGU HD": "/ETV Bal Bharat telugu HD.png",
  "ETV BAL BHARATH TELUGU": "/ETV Bal Bharat telugu.png",

  "MAA HD": "/Maa tv HD.png",
  "MAA TV": "/MAA TV.png",
  "ETV ABHIRUCHI": "/ETV ABHIRUCHI.png",
  "ETV ANDHRAPRADESH": "/ETV ANDHRAPRADESH.png",
  "ETV BAL BHARAT ENGLISH HD": "/ETV BAL BHARAT.png",
  "ETV CINEMA HD": "/ETV CINEMA HD.png",
  "ETV CINEMA SD": "/ETV CINEMA SD.png",
  "ETV HD": "/ETV HD.png",
  "ETV LIFE": "/ETV LIFE.png",
  "ETV PLUS HD": "/ETV PLUS HD.png",
  "ETV PLUS SD": "/ETV PLUS SD.png",
  "ETV PLUS": "/ETV_Plus.png",
  "ETV TELANGANA": "/ETV TELENGANA.png",
  "ETV TELUGU": "/Etv Telugu.png",
  "ETV CINEMA": "/ETV Cinema.png",
  "Big Magic": "/BIG MAGIC.png",
  "&Flix": "/&Flix.png",
  "&Flix HD": "/&Flix HD.png",
  "&Pictures": "/& PICTURES.png",
  "&Pictures HD": "/&Pictures HD.png",
  "&PICTURES SD": "/&PICTURES SD.png",
  "&Prive HD": "/&Prive HD.png",
  "&Tv HD": "/&Tv HD.png",
  "&Xplor HD": "/&Xplor HD.png",
  "Zee Action": "/Zee Action.png",
  "Zee Anmol": "/Zee Anmol.png",
  "Zee Anmol Cinema": "/Zee Anmol Cinema.png",
  "Zee Bangla": "/Zee Bangla.png",
  "Zee Bangla Cinema": "/Zee Bangla Cinema.png",
  "Zee Bangla HD": "/Zee Bangla HD.png",
  "BISCOPE": "/BISCOPE.png",
  "Zee Bollywood": "/Zee Bollywood.png",
  "Zee Cafe": "/Zee Cafe.png",
  "Zee Cafe HD": "/Zee Cafe HD.png",
  "Zee Cinema": "/Zee Cinema.png",
  "Zee Cinema HD": "/Zee Cinema HD.png",
  "Zee Cinemalu": "/Zee Cinemalu.png",
  "Zee Cinemalu HD": "/Zee Cinemalu HD.png",
  "Zee Classic": "/Zee Classic.png",
  "Zee_Ganga": "/Zee_Ganga.png",
  "Zee Kannada": "/Zee Kannada.png",
  "Zee Kannada HD": "/Zee Kannada HD.png",
  "Zee Keralam": "/Zee Keralam.png",
  "Zee Keralam HD": "/Zee Keralam HD.png",
  "Zee Marathi": "/Zee Marathi.png",
  "Zee Marathi HD": "/Zee Marathi HD.png",
  "Zee Picchar": "/Zee Picchar.png",
  "Zee Picchar HD": "/Zee Picchar HD.png",
  "Zee Punjabi": "/Zee Punjabi.png",
  "Zee Sarthak": "/Zee Sarthak.png",
  "Zee Talkies": "/Zee Talkies.png",
  "Zee Talkies HD": "/Zee Talkies HD.png",
  "Zee Talkies SD": "/Zee Talkies SD.png",
  "Zee Tamil": "/Zee Tamil.png",
  "Zee Tamil HD": "/Zee Tamil HD.png",
  "Zee Telugu": "/Zee Telugu.png",
  "Zee Telugu HD": "/Zee Telugu HD.png",
  "Zee Thirai": "/Zee Thirai.png",
  "Zee Thirai HD": "/Zee Thirai HD.png",
  "Zee Tv": "/Zee Tv.png",
  "Zee Tv HD": "/Zee Tv HD.png",
  "Zee Yuva": "/Zee Yuva.png",
  "Zee Zest": "/Zee Zest.png",
  "Zee Zest HD": "/Zee Zest HD.png",
  "ZING": "/ZING.png",
  "& TV": "/& TV.png",
  "Zee Biskope": "/Zee Biskope.png",
  "STAR PRAVAH PICTURE": "/STAR PRAVAH PICTURE.png",
  "STAR PRAVAH PICTURE HD": "/STAR PRAVAH PICTURE HD.png",
  "star gold 2": "/StarrGold.webp",
  "Asianet Movies": "/Asianet-Movies.png",
  "Asianet Plus": "/Asianet-PlusB.png",
  "BINDAAS": "/BINDAAS.png",
  "Jalsa Movies": "/JalsaMovies.png",
  "JALSHA MOVIES HD": "/JALSHA MOVIES HD.png",
  "MAA MOVIES HD": "/MAA MOVIES HD.png",
  "MAA MUSIC": "/MAA MUSIC.png",
  "NGC": "/NGC.png",
  "STAR GOLD 2 HD": "/STAR GOLD2 HD.png",
  "STAR GOLD ROMANCE": "/STAR GOLD ROMANCE.png",
  "STAR GOLD SELECT": "/STAR GOLD SELECT.png",
  "STAR GOLD SELECT HD": "/STAR GOLD SELECT HD.png",
  "STAR GOLD THRILLS": "/STAR GOLD THRILLS.png",
  "STAR KIRAN HD": "/STAR KIRAN HD.png",
  "STAR MAA MOVIES HD": "/STAR MAA MOVIES HD.png",
  "STAR MOVIES": "/STAR MOVIES.png",
  "STAR MOVIES SELECT": "/STAR MOVIES SELECT.png",
  "STAR PRAVAH HD": "/STAR PRAVAH HD.png",
  "STAR SPORTS1 TAMIL": "/STAR SPORTS1 TAMIL.png",
  "STAR SPORTS1 TAMIL HD": "/STAR SPORTS1 TAMIL H.png",
  "STAR UTSAV": "/STAR UTSAV.png",
  "STAR UTSAV MOVIES": "/STAR UTSAV MOVIES.png",
  "SUVARNA HD": "/SUVARNA HD.png",
  "SUVARNA PLUS": "/SUVARNA PLUS.png",
  "SUVARNA PLUS COPY": "/SUVARNA PLUS (copy).png",
  "VIJAY SUPER": "/VIJAY SUPER.png",
  "VIJAY SUPER HD": "/VIJAY SUPER HD.png",
  "VIJAY TAKKAR": "/VIJAY TAKKAR.png",
  "ET NOW": "/ET Now.png",
  "ET NOW SWADESH": "/ET NOW SWADESH.png",
  "MIRROR NOW": "/MIRROR NOW.png",
  "MN+HD": "/MN+ HD.png",
  "MNX": "/MNX.png",
  "MNX HD": "/MNX_HD.png",
  "MOVIES NOW HD": "/MOVIES NOW HD.png",
  "MOVIES NOW": "/MOVIES NOW SD.png",
  "ROMEDY NOW": "/ROMEDY NOW.png",
  "TIMES NOW": "/TIMES NOW.png",
  "TIMES NOW NABHARAT": "/TIMES NOW NABHARAT.png",
  "ZOOM": "/ZOOM.png",
  "SET HD": "/SET HD.png",
  "SONY AATH": "/SONY AATH.png",
  "SONY BBC EARTH HD": "/SONY BBC EARTH HD.png",
  "SONY BBC EARTH SD": "/SONY BBC EARTH SD.png",
  "SONY BBC EARTH": "/SONYBBCEARTH.png",
  "SONY MAX HD": "/SONY MAX HD.png",
  "SONY MAX SD": "/SONY MAX SD.png",
  "SONY PAL": "/SONY PAL.png",
  "SONY PIX HD": "/SONY PIX HD.png",
  "SONY PIX SD": "/SONY PIX SD.png",
  "SONY SAB": "/SONY SAB.png",
  "SONY SAB HD": "/SONY SAB HD.png",
  "Sony SET HD": "/Sony SET HD.png",
  "Sony SET": "/SONY SET SD.png",
  "SONY TEN1 HD": "/SONY TEN1 HD.png",
  "SONY TEN1 SD": "/SONY TEN1 SD.png",
  "SONY TEN2 SD": "/SONY TEN2 SD.png",
  "SONY TEN3 HD": "/SONY TEN3HD.png",
  "SONY TEN3 SD": "/SONY TEN3 SD.png",
  "SONY TEN5 HD": "/SONY TEN5 HD.png",
  "SONY TEN5 SD": "/SONY TEN5 SD.png",
  "SONY SPORTS 2": "/SONY SPORTS 2.png",
  "SONY SPORTS 5": "/SONY SPORTS 5.png",
  "SONY WAH": "/SONY WAH.png",
  "SONY YAY": "/SONY YAY.png",
  "SONY MARATHI": "/SONY MARATHI.png",
  "GEMINI COMEDY": "/GEMINI COMEDY.png",
  "GEMINI LIFE": "/GEMINI LIFE.png",
  "GEMINI MOVIES": "/GEMINI MOVIES.png",
  "GEMINI MOVIES HD": "/GEMINI MOVIES HD.png",
  "GEMINI MUSIC": "/GEMINI MUSIC.png",
  "GEMINI MUSIC HD": "/GEMINI MUSIC HD.png",
  "GEMINI TV": "/GEMINI TV.png",
  "GEMINI TV HD": "/GEMINI TV HD.png",
  "SUN MARATHI": "/SUN MARATHI.png",
  "SUN MUSIC": "/SUN MUSIC.png",
  "SURYA COMEDY": "/SURYA COMEDY.png",
  "SURYA MOVIES": "/SURYA MOVIES.png",
  "SURYA MUSIC": "/SURYA MUSIC.png",
  "SURYA TV": "/SURYA TV.png",
  "SURYA TV HD": "/SURYA TV HD.png",
  "UDAYA COMEDY": "/UDAYA COMEDY.png",
  "UDAYA MOVIES": "/UDAYA MOVIES.png",
  "UDAYA MUSIC": "/UDAYA MUSIC.png",
  "UDAYA TV": "/UDAYA TV.png",
  "UDAYA TV HD": "/UDAYA TV HD.png",
  "ABN": "/ABN.png",
};

const fetchBouqueData = async (): Promise<BouqueItem[] | null> => {
  try {
    const response = await fetch(
      "https://partners.ulka.tv/api/railtel.php/v1/operator-bouque?expand=boxtype_lbl,type_lbl,status_lbl,created_by_lbl&filter[operator_id]=4&vr=railtel1.1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    if (data.success) return data.data as BouqueItem[];
    else throw new Error(data.message || "Failed to fetch data.");
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};


const BouquePage = () => {
  const [selectedTab, setSelectedTab] = useState("Channels");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [bouqueData, setBouqueData] = useState<BouqueItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllChannels, setShowAllChannels] = useState(false);

  const typeMapping: Record<string, "Alacarte" | "Add On" | "Base"> = {
    Channels: "Alacarte",
    "Broadcaster Packs": "Add On",
    "Ulka Bouquets": "Base",
  };

  useEffect(() => {
    const loadData = async () => {
      const storedData = localStorage.getItem("bouqueData");
      if (storedData) {
        setBouqueData(JSON.parse(storedData));
      }

      const data = await fetchBouqueData();
      if (data) {
        setBouqueData(data);
        localStorage.setItem("bouqueData", JSON.stringify(data));
      }
    };
    loadData();
  }, []);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedSubcategory(subcategories[0]);
    }
  };

  const filteredBouqueData = bouqueData.filter(
    (item) =>
      item.type_lbl.toLowerCase().replace(/\s+/g, "") ===
        typeMapping[selectedTab as keyof typeof typeMapping]?.toLowerCase().replace(/\s+/g, "") &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-10 md:p-40  mt-[2rem] bg-white text-black">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-4">Ulka Subscription Plans</h1>
        <p className="text-gray-600 mb-6">View all the broadcaster packs available on ULKA TV</p>
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 rounded-md font-medium ${
                selectedTab === tab ? "bg-black text-white" : "bg-red-500 text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>



      {selectedTab === "Channels" && (
        <div className="flex flex-col items-center mt-10">
          {categories.map((category) => (
            <div key={category} className="w-full max-w-8xl mb-4">
              <button
                className={`w-full flex justify-between items-center px-4 py-4 text-sm font-medium rounded-md ${
                  selectedCategory === category ? "bg-black text-white" : "bg-gray-200 text-black"
                }`}
                onClick={() => {
                  handleCategoryClick(category);
                  setShowAllChannels(false); // Reset Read More state on category change
                }}
              >
                <span>{category}</span>
                <span className="text-xl font-bold">
                  {selectedCategory === category ? "−" : "+"}
                </span>
              </button>

              {selectedCategory === category && (
                <>
                <div className="flex flex-wrap items-center gap-2 mt-4 px-4">
                  {subcategories.map((sub) => (
                    <button
                      key={sub}
                      className={`px-4 py-2 text-[15px] rounded-md border ${
                        selectedSubcategory === sub
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-black"
                      }`}
                      onClick={() => {
                        setSelectedSubcategory(sub);
                        setShowAllChannels(false); // Reset Read More on subcategory change
                      }}
                    >
                      {sub}
                    </button>
                  ))}

                  {/* Search input */}
                  <div className="relative flex-grow max-w-sm ml-auto">
                    <FaSearch className="absolute left-3 top-3 text-black" />
                    <input
                      type="text"
                      placeholder="Search channels..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full p-2 pl-10 border rounded-md"
                    />
                  </div>
                </div>

                  {selectedSubcategory && (
                    <div className="mt-3 p-4 bg-white rounded-md border border-gray-200">
                      {(() => {
                        const filteredChannels =
                        category === "Telugu" && teluguChannelsBySubcategory[selectedSubcategory]
                          ? teluguChannelsBySubcategory[selectedSubcategory]
                              .map((channelName) => {
                                const apiChannel = bouqueData.find(
                                  (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                );
                                return (
                                  apiChannel || {
                                    id: -1,
                                    name: channelName,
                                    type_lbl: "Alacarte",
                                    rate: [],
                                  }
                                );
                              })
                              .filter((channel) =>
                                channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                              )
                            // : category === "English" && englishChannelsBySubcategory[selectedSubcategory]
                            // ? bouqueData.filter((item) =>
                            //     englishChannelsBySubcategory[selectedSubcategory].some(
                            //       (channelName) =>
                            //         channelName.toLowerCase() === item.name.toLowerCase()
                            //     )
                            //   )
                            // : category === "Hindi" && hindiChannelsBySubcategory[selectedSubcategory]
                            // ? bouqueData.filter((item) =>
                            //     hindiChannelsBySubcategory[selectedSubcategory].some(
                            //       (channelName) =>
                            //         channelName.toLowerCase() === item.name.toLowerCase()
                            //     )
                            //   )

                            : category === "English" && englishChannelsBySubcategory[selectedSubcategory]
                              ? englishChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                              : category === "Hindi" && hindiChannelsBySubcategory[selectedSubcategory]
                              ? hindiChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                              // : category === "Tamil" && tamilChannelsBySubcategory[selectedSubcategory]
                              // ? bouqueData.filter((item) =>
                              //     tamilChannelsBySubcategory[selectedSubcategory].some(
                              //       (channelName) =>
                              //         channelName.toLowerCase() === item.name.toLowerCase()
                              //     )
                              //   )

                              // : category === "Kannada" && kannadaChannelsBySubcategory[selectedSubcategory]
                              // ? bouqueData.filter((item) =>
                              //     kannadaChannelsBySubcategory[selectedSubcategory].some(
                              //       (channelName) =>
                              //         channelName.toLowerCase() === item.name.toLowerCase()
                              //     )
                              //   )
                                
                              //   : category === "Marathi" && marathiChannelsBySubcategory[selectedSubcategory]
                              //   ? bouqueData.filter((item) =>
                              //       marathiChannelsBySubcategory[selectedSubcategory].some(
                              //         (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
                              //       )
                              //     )

                              : category === "Tamil" && tamilChannelsBySubcategory[selectedSubcategory]
                              ? tamilChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                              : category === "Kannada" && kannadaChannelsBySubcategory[selectedSubcategory]
                              ? kannadaChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                              : category === "Marathi" && marathiChannelsBySubcategory[selectedSubcategory]
                              ? marathiChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                          
                                // : category === "Odia" && odiaChannelsBySubcategory[selectedSubcategory]
                                // ? bouqueData.filter((item) =>
                                //     odiaChannelsBySubcategory[selectedSubcategory].some(
                                //       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
                                //     )
                                //   )


                                  : category === "Odia" && odiaChannelsBySubcategory[selectedSubcategory]
                                  ? odiaChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                                  // : category === "Assamese" && assameseChannelsBySubcategory[selectedSubcategory]
                                  // ? bouqueData.filter((item) =>
                                  //     assameseChannelsBySubcategory[selectedSubcategory].some(
                                  //       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
                                  //     )
                                  //   )

                                  : category === "Assamese" && assameseChannelsBySubcategory[selectedSubcategory]
                                  ? assameseChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                                  // : category === "Bhojpuri" && bhojpuriChannelsBySubcategory[selectedSubcategory]
                                  // ? bouqueData.filter((item) =>
                                  //     bhojpuriChannelsBySubcategory[selectedSubcategory].some(
                                  //       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
                                  //     )
                                  //   )

                                  : category === "Bhojpuri" && bhojpuriChannelsBySubcategory[selectedSubcategory]
                                  ? bhojpuriChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )

                                  // : category === "Urdu" && urduChannelsBySubcategory[selectedSubcategory]
                                  // ? bouqueData.filter((item) =>
                                  //     urduChannelsBySubcategory[selectedSubcategory].some(
                                  //       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
                                  //     )
                                  //   )

                                  : category === "Urdu" && urduChannelsBySubcategory[selectedSubcategory]
                                  ? urduChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )

                                  // : category === "Rajasthani" && rajasthaniChannelsBySubcategory[selectedSubcategory]
                                  // ? bouqueData.filter((item) =>
                                  //     rajasthaniChannelsBySubcategory[selectedSubcategory].some(
                                  //       (channelName) => channelName.toLowerCase() === item.name.toLowerCase()
                                  //     )
                                  //   )                                                                                     
                                  : category === "Sports" && sportsChannelsBySubcategory[selectedSubcategory]
                                  ? sportsChannelsBySubcategory[selectedSubcategory]
                                  .map((channelName) => {
                                    const apiChannel = bouqueData.find(
                                      (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                    );
                                    return (
                                      apiChannel || {
                                        id: -1,
                                        name: channelName,
                                        type_lbl: "Alacarte",
                                        rate: [],
                                      }
                                    );
                                  })
                                  .filter((channel) =>
                                    channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                  )
                                  
                                    // : category === "Bengali" && bengaliChannelsBySubcategory[selectedSubcategory]
                                    // ? bouqueData.filter((item) =>
                                    //     bengaliChannelsBySubcategory[selectedSubcategory].some(
                                    //       (channelName) =>
                                    //         channelName.toLowerCase() === item.name.toLowerCase()
                                    //     )
                                    //   )

                                    : category === "Bengali" && bengaliChannelsBySubcategory[selectedSubcategory]
                                    ? bengaliChannelsBySubcategory[selectedSubcategory]
                                    .map((channelName) => {
                                      const apiChannel = bouqueData.find(
                                        (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                      );
                                      return (
                                        apiChannel || {
                                          id: -1,
                                          name: channelName,
                                          type_lbl: "Alacarte",
                                          rate: [],
                                        }
                                      );
                                    })
                                    .filter((channel) =>
                                      channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    // : category === "Punjabi" && punjabiChannelsBySubcategory[selectedSubcategory]
                                    // ? bouqueData.filter((item) =>
                                    //   punjabiChannelsBySubcategory[selectedSubcategory].some(
                                    //       (channelName) =>
                                    //         channelName.toLowerCase() === item.name.toLowerCase()
                                    //     )
                                    //   )

                                    : category === "Punjabi" && punjabiChannelsBySubcategory[selectedSubcategory]
                                    ? punjabiChannelsBySubcategory[selectedSubcategory]
                                    .map((channelName) => {
                                      const apiChannel = bouqueData.find(
                                        (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                      );
                                      return (
                                        apiChannel || {
                                          id: -1,
                                          name: channelName,
                                          type_lbl: "Alacarte",
                                          rate: [],
                                        }
                                      );
                                    })
                                    .filter((channel) =>
                                      channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                    // : category === "Malayalam" && malayalamChannelsBySubcategory[selectedSubcategory]
                                    // ? bouqueData.filter((item) =>
                                    //   malayalamChannelsBySubcategory[selectedSubcategory].some(
                                    //       (channelName) =>
                                    //         channelName.toLowerCase() === item.name.toLowerCase()
                                    //     )
                                    //   )

                                    : category === "Malayalam" && malayalamChannelsBySubcategory[selectedSubcategory]
                                    ? malayalamChannelsBySubcategory[selectedSubcategory]
                                    .map((channelName) => {
                                      const apiChannel = bouqueData.find(
                                        (item) => item.name.toLowerCase() === channelName.toLowerCase()
                                      );
                                      return (
                                        apiChannel || {
                                          id: -1,
                                          name: channelName,
                                          type_lbl: "Alacarte",
                                          rate: [],
                                        }
                                      );
                                    })
                                    .filter((channel) =>
                                      channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                                    )
                                  : [];  
                                                                                    
                        return (
                          <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                              {(showAllChannels ? filteredChannels : filteredChannels.slice(0, 14)).map(
                                (channel, index) => (
                                  <div
                                    key={index}
                                    className="text-center border p-2 rounded-md bg-gray-50"
                                  >
                                    <Image
                                      src={channelImages[channel.name] || "/placeholder.png"}
                                      alt={channel.name}
                                      width={80}
                                      height={50}
                                      className="mx-auto object-contain"
                                    />
                                    <p className="mt-2 text-sm font-semibold">{channel.name}</p>
                                    {channel.rate.length > 0 && (
                                      <p className="text-xs text-gray-600">
                                        MRP: ₹{Number(channel.rate[0].drp).toFixed(0)} / month
                                      </p>
                                    )}
                                  </div>
                                )
                              )}
                            </div>

                            {/* Read More / Show Less */}
                            {filteredChannels.length > 14 && (
                              <div className="mt-4 text-center">
                                <button
                                  onClick={() => setShowAllChannels(!showAllChannels)}
                                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                  {showAllChannels ? "Show Less" : "Read More"}
                                </button>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}


      {["Broadcaster Packs", "Ulka Bouquets"].includes(selectedTab) && (
        <div className="mt-10">
          <div className="relative w-full max-w-8xl mx-auto mb-8">
            <FaSearch className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              placeholder="Search channel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-10 border rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {filteredBouqueData.map((item) => (
              <div
                key={item.id}
                className={`p-4 border rounded-md text-center ${
                  selectedTab === "Broadcaster Packs"
                    ? "bg-blue-100"
                    : selectedTab === "Ulka Bouquets"
                    ? "bg-red-100"
                    : "bg-white"
                }`}
              >
                {/* Show image only for Channels */}
                {selectedTab === "Channels" && (
                  <img
                    src={channelImages[item.name] || "/placeholder.png"}
                    alt={item.name}
                    className="w-25 h-24 mx-auto mb-2 object-contain"
                  />
                )}

                <p className="font-semibold mb-2">{item.name}</p>
                {item.rate.length > 0 && (
                  <p className="text-sm text-gray-700">
                    MRP: ₹{Number(item.rate[0].drp).toFixed(0)} / month
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BouquePage;
