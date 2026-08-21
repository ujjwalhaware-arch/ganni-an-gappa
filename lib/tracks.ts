export interface Track {
  id: number | string;
  title: string;
  artist: string;
  film?: string;
  year?: number | string;
  duration: string;
  videoId: string;
  fallbackVideoIds?: string[];
}

export interface Playlist {
  id: string;
  name: string;
  marathiName: string;
  description: string;
  tracks: Track[];
}

export const PLAYLISTS: Playlist[] = [
  {
    "id": "golden-era",
    "name": "सुवर्णकाळ",
    "marathiName": "सदाबहार सुवर्णकाळ",
    "description": "लतादीदी, आशाताई, सुधीर फडके आणि हृदयनाथ मंगेशकर यांच्या आवाजातील अजरामर सदाबहार मराठी गाणी.",
    "tracks": [
      {
        "id": "g1",
        "title": "मी डोलकर (Mi Dolkar)",
        "artist": "Lata Mangeshkar, Hemant Kumar",
        "film": "Non-Film",
        "duration": "3:45",
        "videoId": "J9wlXHdXtks",
        "fallbackVideoIds": [
          "c0bnAkuBJX0"
        ]
      },
      {
        "id": "g2",
        "title": "गोरी गोरी पान (Gori Gori Paan)",
        "artist": "Asha Bhosle",
        "film": "Kilbil",
        "duration": "3:45",
        "videoId": "5GWK9xJqOVE",
        "fallbackVideoIds": [
          "DsJ0q9GLsW0"
        ]
      },
      {
        "id": "g3",
        "title": "रेशमाच्या रेघांनी (Reshmachya Reghani)",
        "artist": "Asha Bhosle",
        "film": "Maratha Tituka Melvava",
        "duration": "3:45",
        "videoId": "5TMAOGI1ZPI",
        "fallbackVideoIds": [
          "Uz9iHMXBqQg"
        ]
      },
      {
        "id": "g4",
        "title": "या चिमण्यांनो (Ya Chimnyano)",
        "artist": "Lata Mangeshkar",
        "film": "Bhavgeet",
        "duration": "3:45",
        "videoId": "0qqy48B8-aI",
        "fallbackVideoIds": [
          "4ciI9jaHKYw"
        ]
      },
      {
        "id": "g5",
        "title": "सूर तेच छेडीता गीत उरले तेच जुने (Sur Tech Chhedita)",
        "artist": "Lata Mangeshkar",
        "film": "Songadya",
        "duration": "3:45",
        "videoId": "yOnvhIktpNw",
        "fallbackVideoIds": [
          "0pYcGS6Qd0M"
        ]
      },
      {
        "id": "g6",
        "title": "काटा रुते कुणाला (Kata Rute Kunala)",
        "artist": "Pt. Jitendra Abhisheki",
        "film": "Hey Bandh Reshmache",
        "duration": "3:45",
        "videoId": "TeNAk_yYmjw",
        "fallbackVideoIds": [
          "3bVbAD-Ws6E"
        ]
      },
      {
        "id": "g7",
        "title": "जिवलगा राहिले रे दूर (Jivalaga Rahile Re Door)",
        "artist": "Asha Bhosle",
        "film": "Molkarin",
        "duration": "3:45",
        "videoId": "DQNxigVPh1s",
        "fallbackVideoIds": [
          "ZqWicqtpXIY"
        ]
      },
      {
        "id": "g8",
        "title": "सांग तू माझाच ना (Sang Tu Mazach Na)",
        "artist": "Suresh Wadkar, Anuradha Paudwal",
        "film": "Maza Pati Karodpati",
        "duration": "3:45",
        "videoId": "EpIjOygCrJk",
        "fallbackVideoIds": [
          "qdsy0p6hTDY"
        ]
      },
      {
        "id": "g9",
        "title": "एक लाजरा न् साजरा मुखडा (Ek Lajara N Sajra)",
        "artist": "Asha Bhosle",
        "film": "Shikarla Jave",
        "duration": "3:45",
        "videoId": "5v3H_NwnyJY",
        "fallbackVideoIds": [
          "3_Fr-XpqhZ4"
        ]
      },
      {
        "id": "g10",
        "title": "मला हो म्हणतात लवंगी मिरची (Lavangi Mirchi)",
        "artist": "Asha Bhosle",
        "film": "Rangalya Ratri Tevha",
        "duration": "3:45",
        "videoId": "A-rcF92ipA0",
        "fallbackVideoIds": [
          "xS8PiSJltb8"
        ]
      },
      {
        "id": "g11",
        "title": "काय बाई सांगू (Kay Bai Sangu)",
        "artist": "Asha Bhosle",
        "film": "Pinjara",
        "duration": "3:45",
        "videoId": "yKQu5LrEqmE",
        "fallbackVideoIds": [
          "OZfRBGocMdo"
        ]
      },
      {
        "id": "g12",
        "title": "मुंगळा मुंगळा (Mungla Mungla)",
        "artist": "Usha Mangeshkar",
        "film": "Fatkadi",
        "duration": "3:45",
        "videoId": "XDF5ujPrp9Y",
        "fallbackVideoIds": [
          "eQDnzmA7_bo"
        ]
      },
      {
        "id": "g13",
        "title": "या गो दांड्यावरुन वाजतगाजत (Ya Go Dandyavarun)",
        "artist": "Sudhir Phadke, Asha Bhosle",
        "film": "Dahi Handi",
        "duration": "3:45",
        "videoId": "kSQIGweWUE8",
        "fallbackVideoIds": [
          "AzZwfvFx1Yo"
        ]
      },
      {
        "id": "g14",
        "title": "देवा तुझ्या गाभाऱ्याला (Deva Tujhya Gabharyala)",
        "artist": "Adarsh Shinde, Kirti Killedar",
        "film": "Duniyadari",
        "duration": "3:45",
        "videoId": "cRKNTAbnYRs",
        "fallbackVideoIds": [
          "5OJCAxaNvzg"
        ]
      },
      {
        "id": "g15",
        "title": "अपर्णा तुझे नाव (Aparna Tujhe Naav)",
        "artist": "Suresh Wadkar",
        "film": "Bhavgeet",
        "duration": "3:45",
        "videoId": "-36wt4cIXYI",
        "fallbackVideoIds": [
          "gAOp4SPmptY"
        ]
      },
      {
        "id": "g16",
        "title": "निळ्या अभाळी कातरवेळी (Nilya Abhali Katarveli)",
        "artist": "Lata Mangeshkar",
        "film": "Bhavgeet",
        "duration": "3:45",
        "videoId": "2Y4qQEqEb4k",
        "fallbackVideoIds": [
          "tQHLURxOdo4"
        ]
      },
      {
        "id": "g17",
        "title": "आई तुझी आठवण येते (Aai Tujhi Aathvan Yete)",
        "artist": "Pralhad Shinde",
        "film": "Bhavgeet",
        "duration": "3:45",
        "videoId": "mpbVtJlKbFo",
        "fallbackVideoIds": [
          "l_DGiBV3HhA"
        ]
      },
      {
        "id": "g18",
        "title": "आम्ही ठाकर ठाकर (Aamhi Thakar Thakar)",
        "artist": "Anand Shinde",
        "film": "Folk",
        "duration": "3:45",
        "videoId": "7TfPPLO_XmI",
        "fallbackVideoIds": [
          "fteskx0fC0I"
        ]
      },
      {
        "id": "g19",
        "title": "रुणुझुणू रुणुझुणू रे भ्रमरा (Runujhunu Runujhunu)",
        "artist": "Lata Mangeshkar",
        "film": "Bhavgeet",
        "duration": "3:45",
        "videoId": "7Z3d77D95HU",
        "fallbackVideoIds": [
          "kLAHVhAPc9A"
        ]
      }
    ]
  },
  {
    "id": "lavani-folk",
    "name": "लावणी & लोकगीते",
    "marathiName": "ठसकेबाज लावणी व लोकगीते",
    "description": "वाजले की बारा, कसं काय पाटील, सोळावं वरीस आणि महाराष्ट्राच्या संस्कृतीचा अस्सल ठसका.",
    "tracks": [
      {
        "id": "l1",
        "title": "वाजले की बारा (Wajle Ki Bara)",
        "artist": "Bela Shende",
        "film": "Natarang",
        "duration": "3:45",
        "videoId": "7R7QJkznJGU",
        "fallbackVideoIds": [
          "58AKflkzvLY"
        ]
      },
      {
        "id": "l2",
        "title": "कसं काय पाटील बरं हाय का (Kasa Kay Patil)",
        "artist": "Surekha Punekar",
        "film": "Lavani",
        "duration": "3:45",
        "videoId": "trDee9J31RM",
        "fallbackVideoIds": [
          "EeuldhfudhI"
        ]
      },
      {
        "id": "l3",
        "title": "नाचू कीर्तनाचे रंगी (Naachu Kirtanache Rangi)",
        "artist": "Lata Mangeshkar",
        "film": "Sant Tukaram",
        "duration": "3:45",
        "videoId": "suLift8G4xA",
        "fallbackVideoIds": [
          "KHwu7IbPAAU"
        ]
      },
      {
        "id": "l4",
        "title": "फड सांभाळ तुऱ्याला गं (Phad Sambhal Turyala)",
        "artist": "Usha Mangeshkar",
        "film": "Pinjara",
        "duration": "3:45",
        "videoId": "X52U9sRqoBY",
        "fallbackVideoIds": [
          "EBcfPB7SMhw"
        ]
      },
      {
        "id": "l5",
        "title": "सोळावं वरीस धोक्याचं (Solav Varis Dhokyach)",
        "artist": "Usha Mangeshkar",
        "film": "Songadya",
        "duration": "3:45",
        "videoId": "Y-2LM8xxGus",
        "fallbackVideoIds": [
          "tUD7BJ1yxZg"
        ]
      },
      {
        "id": "l6",
        "title": "पोरी जरा जपून दांडा धर (Pori Jara Japun Danda)",
        "artist": "Anand Shinde",
        "film": "Folk",
        "duration": "3:45",
        "videoId": "KLmmtA8obD4",
        "fallbackVideoIds": [
          "_jUpN6u3Udk"
        ]
      },
      {
        "id": "l7",
        "title": "बाई मी लय भारी (Bai Mi Lai Bhari)",
        "artist": "Kavita Nikam",
        "film": "Folk",
        "duration": "3:45",
        "videoId": "l4Wh4d3Nb6Q",
        "fallbackVideoIds": [
          "C8kyubrvCbA"
        ]
      },
      {
        "id": "l8",
        "title": "सांगते ऐका (Sangte Aika)",
        "artist": "Sulochana Chavan",
        "film": "Sangte Aika",
        "duration": "3:45",
        "videoId": "yOKW7BWk-40",
        "fallbackVideoIds": [
          "96w8iU3c7aQ"
        ]
      },
      {
        "id": "l9",
        "title": "या रावजी बसा भावजी (Ya Raoji Basa Bhavji)",
        "artist": "Roshan Satarkar",
        "film": "Chandanachi Choli",
        "duration": "3:45",
        "videoId": "cp1hEnACA-g",
        "fallbackVideoIds": [
          "8aEEFsXQr0k"
        ]
      },
      {
        "id": "l10",
        "title": "वाजवा रे वाजवा (Vajva Re Vajva)",
        "artist": "Bela Shende",
        "film": "Folk",
        "duration": "3:45",
        "videoId": "87Q-Q-m_jeE",
        "fallbackVideoIds": [
          "7sKmXuxghV8"
        ]
      },
      {
        "id": "l11",
        "title": "गुलाबाची कळी (Gulabachi Kali)",
        "artist": "Vaishali Samant, Amitraj",
        "film": "Tu Hi Re",
        "duration": "3:45",
        "videoId": "mqPLj0frBO8",
        "fallbackVideoIds": [
          "V8_kgkYyccQ"
        ]
      },
      {
        "id": "l12",
        "title": "मला जाऊ द्या ना घरी (Mala Jau Dya Na Ghari)",
        "artist": "Vaishali Samant",
        "film": "Aga Bai Arrecha",
        "duration": "3:45",
        "videoId": "caOW45WlZ7I",
        "fallbackVideoIds": [
          "JWfF9ICqgFY"
        ]
      },
      {
        "id": "l13",
        "title": "अरे संगच सोडून पळाला बाई (Are Sangach Sodun)",
        "artist": "Shakuntala Jadhav",
        "film": "Lavani",
        "duration": "3:45",
        "videoId": "_RfFH74wojY",
        "fallbackVideoIds": [
          "EqfnmwRtE4E"
        ]
      },
      {
        "id": "l14",
        "title": "होऊ दे खर्च (Hou De Kharch)",
        "artist": "Anand Shinde",
        "film": "Lokdhara",
        "duration": "3:45",
        "videoId": "SGWJw7cihkE",
        "fallbackVideoIds": [
          "zgRVMioEYJ4"
        ]
      },
      {
        "id": "l15",
        "title": "लाडी लाडी लाडात लाडी गं (Ladi Ladi Ladat)",
        "artist": "Uttara Kelkar",
        "film": "Lavani",
        "duration": "3:45",
        "videoId": "ADrU6kxcIsk",
        "fallbackVideoIds": [
          "-zbrYZG-iwk"
        ]
      }
    ]
  },
  {
    "id": "movie-hits",
    "name": "चित्रपट संगीत",
    "marathiName": "ब्लॉकबस्टर चित्रपट गाणी",
    "description": "सैराट, नटरंग, दुनियादारी, जोगवा आणि टाइमपास या सुपरहिट चित्रपटांमधील अवीट गोडीची गाणी.",
    "tracks": [
      {
        "id": "m1",
        "title": "झिंगाट (Zingaat)",
        "artist": "Ajay-Atul",
        "film": "Sairat",
        "duration": "3:45",
        "videoId": "luhVm60Wiro",
        "fallbackVideoIds": [
          "5AeX7Ddq4ts"
        ]
      },
      {
        "id": "m2",
        "title": "याड लागलं (Yaad Lagla)",
        "artist": "Ajay Gogavale",
        "film": "Sairat",
        "duration": "3:45",
        "videoId": "VmU1ZsXUbG0",
        "fallbackVideoIds": [
          "z0zj7SKYqyE"
        ]
      },
      {
        "id": "m3",
        "title": "सैराट झालं जी (Sairat Zaala Ji)",
        "artist": "Ajay Gogavale, Chinmayi",
        "film": "Sairat",
        "duration": "3:45",
        "videoId": "AQ-P5RR7r40",
        "fallbackVideoIds": [
          "sww-SpjStBk"
        ]
      },
      {
        "id": "m4",
        "title": "अप्सरा आली (Apsara Aali)",
        "artist": "Bela Shende, Ajay-Atul",
        "film": "Natarang",
        "duration": "3:45",
        "videoId": "mW67u_hWiSo",
        "fallbackVideoIds": [
          "8dLcnEWmSDs"
        ]
      },
      {
        "id": "m5",
        "title": "खेळ मांडला (Khel Mandala)",
        "artist": "Ajay Gogavale",
        "film": "Natarang",
        "duration": "3:45",
        "videoId": "HY8Y_uqnVzU",
        "fallbackVideoIds": [
          "tnup0Y0Q0iM"
        ]
      },
      {
        "id": "m6",
        "title": "मन उधाण वाऱ्याचे (Man Udhan Varyache)",
        "artist": "Shankar Mahadevan",
        "film": "Aga Bai Arrecha",
        "duration": "3:45",
        "videoId": "2JZTIVd4XN0",
        "fallbackVideoIds": [
          "tF6m9cNH894"
        ]
      },
      {
        "id": "m7",
        "title": "जिव रंगला (Jeev Rangla)",
        "artist": "Hariharan, Shreya Ghoshal",
        "film": "Jogwa",
        "duration": "3:45",
        "videoId": "en60_iC0u2M",
        "fallbackVideoIds": [
          "CslqU1QKYxY"
        ]
      },
      {
        "id": "m8",
        "title": "कोंबडी पळाली (Kombdi Palali)",
        "artist": "Anand Shinde, Vaishali Samant",
        "film": "Jatra",
        "duration": "3:45",
        "videoId": "piORdqwIfwY",
        "fallbackVideoIds": [
          "evrXXXx6Kq0"
        ]
      },
      {
        "id": "m9",
        "title": "आपला मानूस (Apla Manus)",
        "artist": "Ajay Gogavale",
        "film": "Ventilator",
        "duration": "3:45",
        "videoId": "rRxAuSqn4wk",
        "fallbackVideoIds": [
          "Yi_elkhw4vI"
        ]
      },
      {
        "id": "m10",
        "title": "वाट पाहते मी वाट पाहते (Vaat Pahate)",
        "artist": "Bela Shende",
        "film": "Natarang",
        "duration": "3:45",
        "videoId": "lQBKXT6BNG0",
        "fallbackVideoIds": [
          "kjhLXTgOPSU"
        ]
      },
      {
        "id": "m11",
        "title": "मोरया मोरया (Morya Morya)",
        "artist": "Ajay Gogavale",
        "film": "Deool",
        "duration": "3:45",
        "videoId": "DPH4r-nRNE0",
        "fallbackVideoIds": [
          "02OE0s_6GF8"
        ]
      },
      {
        "id": "m12",
        "title": "देवा तू आहे तरी कुठे (Deva Tu Ahe Tari)",
        "artist": "Swanand Kirkire",
        "film": "Deool",
        "duration": "3:45",
        "videoId": "98M0vTztL-Q",
        "fallbackVideoIds": [
          "4lY8I_6b7KI"
        ]
      },
      {
        "id": "m13",
        "title": "फुलपाखरू (Fulpakhru)",
        "artist": "Jasraj Joshi",
        "film": "Fandry",
        "duration": "3:45",
        "videoId": "FxGvi8O3mxM",
        "fallbackVideoIds": [
          "ET7JalQFxlM"
        ]
      },
      {
        "id": "m14",
        "title": "हृदयी वसंत फुलताना (Hrudayi Vasant Phultana)",
        "artist": "Suresh Wadkar, Asha Bhosle",
        "film": "Ashi Hi Banwa Banwi",
        "duration": "3:45",
        "videoId": "ZsXH5AFvYxk",
        "fallbackVideoIds": [
          "iazsz_EuS2s"
        ]
      },
      {
        "id": "m15",
        "title": "लई भारी (Lai Bhari) Title Track",
        "artist": "Ajay Gogavale, Ajay-Atul",
        "film": "Lai Bhaari",
        "duration": "3:45",
        "videoId": "uWi5aOuSmN4",
        "fallbackVideoIds": [
          "VpMDnNg1bRQ"
        ]
      },
      {
        "id": "m16",
        "title": "दिल दरबारी (Dil Darbari)",
        "artist": "Kunal Ganjawala, Bela Shende",
        "film": "Lai Bhaari",
        "duration": "3:45",
        "videoId": "6EI0ruuLx3c",
        "fallbackVideoIds": [
          "uWi5aOuSmN4"
        ]
      },
      {
        "id": "m17",
        "title": "जिंकुया दिल (Zinkuya Dil)",
        "artist": "Rohan Pradhan",
        "film": "Timepass",
        "duration": "3:45",
        "videoId": "GaNAr_C50ZM",
        "fallbackVideoIds": [
          "bluUmsWbvsk"
        ]
      },
      {
        "id": "m18",
        "title": "मला वेड लागले प्रेमाचे (Mala Ved Lagle)",
        "artist": "Swapnil Bandodkar, Ketaki Mategaonkar",
        "film": "Timepass",
        "duration": "3:45",
        "videoId": "PdR2og6V3DM",
        "fallbackVideoIds": [
          "I1sDYBVc8sQ"
        ]
      },
      {
        "id": "m19",
        "title": "सांग तू आहेस का (Sang Tu Ahes Ka)",
        "artist": "Arijit Singh",
        "film": "Timepass 2",
        "duration": "3:45",
        "videoId": "ZGiz23LuHGM",
        "fallbackVideoIds": [
          "d4vOQp8GQso"
        ]
      },
      {
        "id": "m20",
        "title": "बकेट लिस्ट (Bucket List) Title Song",
        "artist": "Shreya Ghoshal, Rohan Pradhan",
        "film": "Bucket List",
        "duration": "3:45",
        "videoId": "SorwScjbOPs",
        "fallbackVideoIds": [
          "kELHQK-__Zw"
        ]
      },
      {
        "id": "m21",
        "title": "मन पाखरू पाखरू (Man Pakharu Pakharu)",
        "artist": "Swapnil Bandodkar",
        "film": "Mi Shivajiraje Bhosale Boltoy",
        "duration": "3:45",
        "videoId": "1lNcgn8mZKk",
        "fallbackVideoIds": [
          "8zZpYnP7B2Y"
        ]
      },
      {
        "id": "m22",
        "title": "काय राव तुम्ही पण (Kay Rao Tumhi Pan)",
        "artist": "Adarsh Shinde, Bela Shende",
        "film": "Poshter Girl",
        "duration": "3:45",
        "videoId": "Lmth1xC4h7g",
        "fallbackVideoIds": [
          "H3hUZ0aY0YQ"
        ]
      },
      {
        "id": "m23",
        "title": "जागो मोहन प्यारे (Jago Mohan Pyare)",
        "artist": "Rahul Deshpande",
        "film": "Katyar Kaljat Ghusli",
        "duration": "3:45",
        "videoId": "SV2_m-KDKNI",
        "fallbackVideoIds": [
          "vAkq7jXztYA"
        ]
      },
      {
        "id": "m24",
        "title": "सूरत पिया की (Surat Piya Ki)",
        "artist": "Rahul Deshpande, Mahesh Kale",
        "film": "Katyar Kaljat Ghusli",
        "duration": "3:45",
        "videoId": "c-hjEAXOMoY",
        "fallbackVideoIds": [
          "SzjLKDcZxxI"
        ]
      },
      {
        "id": "m25",
        "title": "मन मंदिरा (Man Mandira)",
        "artist": "Shankar Mahadevan",
        "film": "Katyar Kaljat Ghusli",
        "duration": "3:45",
        "videoId": "nXbQ-dItErg",
        "fallbackVideoIds": [
          "KrvEmATU2tU"
        ]
      },
      {
        "id": "m26",
        "title": "या भूवरी (Ya Bhuvari)",
        "artist": "Arijit Singh",
        "film": "Katyar Kaljat Ghusli",
        "duration": "3:45",
        "videoId": "3Dwlv1nfEIE",
        "fallbackVideoIds": [
          "iAAi9DPMG4E"
        ]
      },
      {
        "id": "m27",
        "title": "घागर घागर (Ghagar Ghagar)",
        "artist": "Vaishali Samant",
        "film": "Pinga Marathi",
        "duration": "3:45",
        "videoId": "d8lOzH5BUqc",
        "fallbackVideoIds": [
          "PhQmojg9v7Y"
        ]
      },
      {
        "id": "m28",
        "title": "रंग माझा वेगळा (Rang Maza Vegla)",
        "artist": "Suresh Wadkar",
        "film": "Classic",
        "duration": "3:45",
        "videoId": "Jg0Qd8Yavts",
        "fallbackVideoIds": [
          "xmKkGnltcrg"
        ]
      }
    ]
  },
  {
    "id": "modern-pop",
    "name": "पॉप & ट्रेंडिंग",
    "marathiName": "मॉडर्न मराठी पॉप",
    "description": "गुलाबी साडी, बहरला हा मधुमास, वेड लावला आणि संजू राठोड यांची सध्याची सर्वात गाजलेली गाणी.",
    "tracks": [
      {
        "id": "p1",
        "title": "गुलाबी साडी (Gulabi Sadi)",
        "artist": "Sanju Rathod, G-Spark",
        "film": "Single",
        "duration": "3:45",
        "videoId": "B_6d3RBiEN0",
        "fallbackVideoIds": [
          "_-zdCXBjL5k"
        ]
      },
      {
        "id": "p2",
        "title": "बहरला हा मधुमास (Baharla Ha Madhumas)",
        "artist": "Ajay-Atul, Shreya Ghoshal",
        "film": "Maharashtra Shahir",
        "duration": "3:45",
        "videoId": "Eipq_IC7NYA",
        "fallbackVideoIds": [
          "nZaDmhlMBOE"
        ]
      },
      {
        "id": "p3",
        "title": "वेड लावला (Ved Lavlay)",
        "artist": "Riteish Deshmukh, Salman Khan, Ajay-Atul",
        "film": "Ved",
        "duration": "3:45",
        "videoId": "tlunj_2Wojo",
        "fallbackVideoIds": [
          "yMU-eRbPpR8"
        ]
      },
      {
        "id": "p4",
        "title": "कशी ही अवस्था (Kashi Hi Avastha)",
        "artist": "Ajay Gogavale",
        "film": "Ved",
        "duration": "3:45",
        "videoId": "xJxUoAQeVXQ",
        "fallbackVideoIds": [
          "aoZIg7xKPNw"
        ]
      },
      {
        "id": "p5",
        "title": "नौवारी पाहिजे (Nauvari Pahije)",
        "artist": "Sanju Rathod",
        "film": "Single",
        "duration": "3:45",
        "videoId": "MnGAYS-v7lQ",
        "fallbackVideoIds": [
          "TUpxNrU9aQ4"
        ]
      },
      {
        "id": "p6",
        "title": "शेकी (Shaky)",
        "artist": "Sanju Rathod ft. Isha Malviya",
        "film": "Single",
        "duration": "3:45",
        "videoId": "sUf2PtEZris",
        "fallbackVideoIds": [
          "3h7ElItmgWs"
        ]
      },
      {
        "id": "p7",
        "title": "काली बिंदी (Kali Bindi)",
        "artist": "Sanju Rathod",
        "film": "Single",
        "duration": "3:45",
        "videoId": "R-SmeE-0rdg",
        "fallbackVideoIds": [
          "z32hQlPgV10"
        ]
      },
      {
        "id": "p8",
        "title": "काही केल्या (Kahi Kelya)",
        "artist": "Jasraj Joshi, Priyanka Barve",
        "film": "Muramba",
        "duration": "3:45",
        "videoId": "u927xNUPM6A",
        "fallbackVideoIds": [
          "AQSFtaC_WFQ"
        ]
      },
      {
        "id": "p9",
        "title": "जिवाभावाचा (Jivabhavacha)",
        "artist": "Ajay-Atul, Vaishali Samant",
        "film": "Baipan Bhari Deva",
        "duration": "3:45",
        "videoId": "5AxjZQUOGZQ",
        "fallbackVideoIds": [
          "fFrWFK_0eHg"
        ]
      },
      {
        "id": "p10",
        "title": "भुलेश्वर (Bhuleshwar)",
        "artist": "Bela Shende",
        "film": "Baipan Bhari Deva",
        "duration": "3:45",
        "videoId": "eGPizcmztSs",
        "fallbackVideoIds": [
          "2tPdrOVc-XI"
        ]
      },
      {
        "id": "p11",
        "title": "सैया सुपारी (Saiya Supari)",
        "artist": "Vaishali Made",
        "film": "Single",
        "duration": "3:45",
        "videoId": "QExrQAAydsI",
        "fallbackVideoIds": [
          "oVM3SWbtq54"
        ]
      },
      {
        "id": "p12",
        "title": "गोंधळात गोंधळ (Gondhalat Gondhal)",
        "artist": "Adarsh Shinde",
        "film": "Bandishala",
        "duration": "3:45",
        "videoId": "skOWpX4FiQ8",
        "fallbackVideoIds": [
          "zqvkgoEGArE"
        ]
      },
      {
        "id": "p13",
        "title": "रात्रीस खेळ चाले (Ratris Khel Chale)",
        "artist": "Zee Marathi",
        "film": "TV Series",
        "duration": "3:45",
        "videoId": "sX82H46iKPg",
        "fallbackVideoIds": [
          "ShLSlKTFPyw"
        ]
      },
      {
        "id": "p14",
        "title": "ती सध्या काय करते (Ti Saddhya Kay Karte)",
        "artist": "Abhay Jodhpurkar, Arya Ambekar",
        "film": "Ti Saddhya Kay Karte",
        "duration": "3:45",
        "videoId": "o416zM22IaY",
        "fallbackVideoIds": [
          "brBokVUqhyg"
        ]
      },
      {
        "id": "p15",
        "title": "गच्चीवरती गप्पा (Gacchivarti Gappa)",
        "artist": "Avadhoot Gupte",
        "film": "Single",
        "duration": "3:45",
        "videoId": "4vDMoggjr-Y",
        "fallbackVideoIds": [
          "lLQpdXhfusc"
        ]
      },
      {
        "id": "p16",
        "title": "ऐरणीच्या देवा (Airanichya Deva Remix)",
        "artist": "Lata Mangeshkar, Remix",
        "film": "Sadhi Manasa",
        "duration": "3:45",
        "videoId": "vHZnbf6CeYE",
        "fallbackVideoIds": [
          "8aTGUrolfBE"
        ]
      },
      {
        "id": "p17",
        "title": "मन वढाय वढाय (Mann Vadhay Vadhay)",
        "artist": "Arya Ambekar",
        "film": "TV Title",
        "duration": "3:45",
        "videoId": "aDCtagSZSxw",
        "fallbackVideoIds": [
          "HdA48cYi1co"
        ]
      },
      {
        "id": "p18",
        "title": "जीव झाला येडा पिसा (Jeev Jhala Yeda Pisa)",
        "artist": "Swapnil Bandodkar",
        "film": "TV Title",
        "duration": "3:45",
        "videoId": "yARpIB0UPH4",
        "fallbackVideoIds": [
          "FC5HqX3_EEA"
        ]
      },
      {
        "id": "p19",
        "title": "सांगू कशी मी (Sangu Kashi Mi)",
        "artist": "Ketaki Mategaonkar",
        "film": "Single",
        "duration": "3:45",
        "videoId": "U6ENOEJDjUo",
        "fallbackVideoIds": [
          "AcYM4nFfCfs"
        ]
      },
      {
        "id": "p20",
        "title": "तुझ्या माझ्या संसाराला (Tujhya Majhya Sansarala)",
        "artist": "Zee Marathi",
        "film": "TV Title",
        "duration": "3:45",
        "videoId": "9evy4emT4rQ",
        "fallbackVideoIds": [
          "eCePurTqm3k"
        ]
      },
      {
        "id": "p21",
        "title": "स्वराज्यरक्षक संभाजी (Swarajyarakshak Sambhaji)",
        "artist": "Adarsh Shinde",
        "film": "TV Title",
        "duration": "3:45",
        "videoId": "WfwcUsdgdTU",
        "fallbackVideoIds": [
          "jUYgN8pkkjg"
        ]
      },
      {
        "id": "p22",
        "title": "गोष्ट छोटी डोंगराएवढी (Goshta Chhoti)",
        "artist": "Avadhoot Gupte",
        "film": "Movie",
        "duration": "3:45",
        "videoId": "vz8aiYRqHPM",
        "fallbackVideoIds": [
          "ySwSH4JjMGA"
        ]
      },
      {
        "id": "p23",
        "title": "खुलेआम इश्क (Khuleaam Ishq)",
        "artist": "Kunal Ganjawala, Sonali Sonawane",
        "film": "Single",
        "duration": "3:45",
        "videoId": "VSGlvDazzOA",
        "fallbackVideoIds": [
          "h3ABnUkhxMc"
        ]
      },
      {
        "id": "p24",
        "title": "नौवरी (Nauvari)",
        "artist": "Bela Shende, Dr. Vivek Ingle",
        "film": "Single",
        "duration": "3:45",
        "videoId": "K9YZCVrYgOE",
        "fallbackVideoIds": [
          "Q5MtXJ3DbcU"
        ]
      },
      {
        "id": "p25",
        "title": "उड्डाण (Udhaan)",
        "artist": "Keval Walanj, Sneha Mahadik",
        "film": "Single",
        "duration": "3:45",
        "videoId": "gVpJs9URvWQ",
        "fallbackVideoIds": [
          "km13JBcQO9c"
        ]
      },
      {
        "id": "p26",
        "title": "वंदन हो (Vandan Ho)",
        "artist": "Rahul Deshpande",
        "film": "Sangeet Manapmaan",
        "duration": "3:45",
        "videoId": "zeNgfu30N28",
        "fallbackVideoIds": [
          "QPnwAFoTQNg"
        ]
      },
      {
        "id": "p27",
        "title": "सूरत पिया की New (Surat Piya Ki)",
        "artist": "Mahesh Kale",
        "film": "Sangeet Manapmaan",
        "duration": "3:45",
        "videoId": "c-hjEAXOMoY",
        "fallbackVideoIds": [
          "PSpDPE8KTBs"
        ]
      },
      {
        "id": "p28",
        "title": "येडा यंग यंग (Yeda Yung Yung)",
        "artist": "DSA",
        "film": "Indie Pop",
        "duration": "3:45",
        "videoId": "Ym4ti89tItw",
        "fallbackVideoIds": [
          "ewxyXyq4R9A"
        ]
      },
      {
        "id": "p29",
        "title": "दु:ख दूर करितो मल्हारी (Dukh Dur Karito)",
        "artist": "Anand Shinde",
        "film": "Devotional",
        "duration": "3:45",
        "videoId": "qj-wRJooZoA",
        "fallbackVideoIds": [
          "y3qOSb63K2E"
        ]
      },
      {
        "id": "p30",
        "title": "वाजती येडूची हलगी (Vajati Yeduchi Halgi)",
        "artist": "Adarsh Shinde",
        "film": "Folk",
        "duration": "3:45",
        "videoId": "TnzJ2YrWKow",
        "fallbackVideoIds": [
          "usJfqwmf4AY"
        ]
      },
      {
        "id": "p31",
        "title": "आई शिवरायांना आवाज देती (Aai Shivrayana)",
        "artist": "Santosh Naik",
        "film": "Patriotic",
        "duration": "3:45",
        "videoId": "7a6Yluo3fBo",
        "fallbackVideoIds": [
          "0Vo2VOyDa5Y"
        ]
      },
      {
        "id": "p32",
        "title": "तारप्याचा ताल भारी (Tarpyacha Taal)",
        "artist": "Tribal Folk Fusion",
        "film": "Single",
        "duration": "3:45",
        "videoId": "Eg_EAYKPeig",
        "fallbackVideoIds": [
          "JNzQfYvbG2U"
        ]
      },
      {
        "id": "p33",
        "title": "तुला माझा हात सोडला (Tu Maza Hat Sodla)",
        "artist": "Pravin Koli",
        "film": "Indie",
        "duration": "3:45",
        "videoId": "8Gcd-B2XpQs",
        "fallbackVideoIds": [
          "OKnRohDLawk"
        ]
      },
      {
        "id": "p34",
        "title": "मुरांबा (Muramba Title)",
        "artist": "Jasraj Joshi",
        "film": "Muramba",
        "duration": "3:45",
        "videoId": "WWaxrRGhjEE",
        "fallbackVideoIds": [
          "es1_9f2mNws"
        ]
      },
      {
        "id": "p35",
        "title": "दशावतार (Dashavatar Title)",
        "artist": "Avadhoot Gupte",
        "film": "Dashavatar",
        "duration": "3:45",
        "videoId": "6790BYqG7YU",
        "fallbackVideoIds": [
          "N1gr6Ei4U5E"
        ]
      },
      {
        "id": "p36",
        "title": "फसक्लास दाभाडे (Fussclass Dabhade)",
        "artist": "Adarsh Shinde",
        "film": "Movie",
        "duration": "3:45",
        "videoId": "vQeaRFZtVaA",
        "fallbackVideoIds": [
          "LlciTU17up8"
        ]
      },
      {
        "id": "p37",
        "title": "गुलकंद (Gulkand Title)",
        "artist": "Marathi Pop",
        "film": "Gulkand",
        "duration": "3:45",
        "videoId": "hRxt11mwR_k",
        "fallbackVideoIds": [
          "7PAqPlGzXNU"
        ]
      },
      {
        "id": "p38",
        "title": "आता थांबायचं नाय (Aata Thambaycha Naay)",
        "artist": "Adarsh Shinde",
        "film": "Anthem",
        "duration": "3:45",
        "videoId": "kigZKt4YUks",
        "fallbackVideoIds": [
          "7i1ApLDwpEY"
        ]
      },
      {
        "id": "p39",
        "title": "पुन्हा शिवाजीराजे भोसले (Punha Shivajiraje)",
        "artist": "Sukhwinder Singh",
        "film": "Theme",
        "duration": "3:45",
        "videoId": "a4MY4Tob4Gg",
        "fallbackVideoIds": [
          "PCpnkuTmSn4"
        ]
      },
      {
        "id": "p40",
        "title": "झपुक झुपुक (Zapuk Zupuk)",
        "artist": "Adarsh Shinde",
        "film": "Hit",
        "duration": "3:45",
        "videoId": "IvUN5vqglmI",
        "fallbackVideoIds": [
          "YoSzup7NfzI"
        ]
      },
      {
        "id": "p41",
        "title": "नाच गं घुमा (Nach Ga Ghuma Title)",
        "artist": "Vaishali Samant",
        "film": "Nach Ga Ghuma",
        "duration": "3:45",
        "videoId": "GFxA7Gg8kYc",
        "fallbackVideoIds": [
          "cK8ea2m7TFI"
        ]
      },
      {
        "id": "p42",
        "title": "नवरा माझा नवसाचा 2 (Navra Mazha 2)",
        "artist": "Sonu Nigam, Sachin Pilgaonkar",
        "film": "Movie",
        "duration": "3:45",
        "videoId": "Gb2qsci_a3o",
        "fallbackVideoIds": [
          "1atjqTTDLuY"
        ]
      },
      {
        "id": "p43",
        "title": "धर्मवीर 2 (Dharmaveer 2)",
        "artist": "Hariharan, Manish Rajgire",
        "film": "Dharmaveer 2",
        "duration": "3:45",
        "videoId": "vuo-fT9_0ak",
        "fallbackVideoIds": [
          "OGw9XIgPcZs"
        ]
      },
      {
        "id": "p44",
        "title": "जुना फर्निचर (Juna Furniture)",
        "artist": "Mahesh Kale",
        "film": "Juna Furniture",
        "duration": "3:45",
        "videoId": "d5oZgOjj0xU",
        "fallbackVideoIds": [
          "Ip2oLsUcHEM"
        ]
      },
      {
        "id": "p45",
        "title": "शिवरायांचा छावा (Shivrayancha Chhava)",
        "artist": "Avadhoot Gupte",
        "film": "Movie",
        "duration": "3:45",
        "videoId": "Gcxcb_sAByE",
        "fallbackVideoIds": [
          "DjhcjVQT_NU"
        ]
      },
      {
        "id": "p46",
        "title": "ओले आले (Ole Aale Title)",
        "artist": "Sachin-Jigar",
        "film": "Ole Aale",
        "duration": "3:45",
        "videoId": "bmeBERy1gDg",
        "fallbackVideoIds": [
          "pjUbJ3IHNNo"
        ]
      },
      {
        "id": "p47",
        "title": "फुलवंती (Phullwanti Title)",
        "artist": "Shreya Ghoshal, Ajay-Atul",
        "film": "Phullwanti",
        "duration": "3:45",
        "videoId": "ifH__dw6Rz8",
        "fallbackVideoIds": [
          "6g69J5k7VcE"
        ]
      },
      {
        "id": "p48",
        "title": "छत्रपती संभाजी (Chhatrapati Sambhaji)",
        "artist": "Theme Track",
        "film": "Epic",
        "duration": "3:45",
        "videoId": "-88W7FIXXD4",
        "fallbackVideoIds": [
          "EHdBFmhu56E"
        ]
      },
      {
        "id": "p49",
        "title": "घरात गणपती (Gharat Ganpati Title)",
        "artist": "Adarsh Shinde, Pravin Koli",
        "film": "Gharat Ganpati",
        "duration": "3:45",
        "videoId": "jl9kHKoSijU",
        "fallbackVideoIds": [
          "zrbQKLFaMgU"
        ]
      },
      {
        "id": "p50",
        "title": "अलियाड पलियाड (Alyad Palyad)",
        "artist": "Theme",
        "film": "Alyad Palyad",
        "duration": "3:45",
        "videoId": "fKy1y1Xhq9o",
        "fallbackVideoIds": [
          "v2YHwuu4n5U"
        ]
      }
    ]
  },
  {
    "id": "devotional",
    "name": "भक्तिगीते",
    "marathiName": "भावगीते व भक्तिगीते",
    "description": "सुखकर्ता दुःखहर्ता, गणराज रंगी नाचतो आणि भारूड-अभंग यांचा पवित्र भक्तिरस.",
    "tracks": [
      {
        "id": "d1",
        "title": "सुखकर्ता दुःखहर्ता (Sukhkarta Dukhharta Aarti)",
        "artist": "Lata Mangeshkar",
        "film": "Aarti",
        "duration": "3:45",
        "videoId": "v4yld6Dbhgc",
        "fallbackVideoIds": [
          "817G-i_w4kU"
        ]
      },
      {
        "id": "d2",
        "title": "गणराज रंगी नाचतो (Ganraj Rangi Naachto)",
        "artist": "Lata Mangeshkar",
        "film": "Devotional",
        "duration": "3:45",
        "videoId": "egz1xOLfKRA",
        "fallbackVideoIds": [
          "XHhFq6vCeYY"
        ]
      },
      {
        "id": "d3",
        "title": "देवा तुझ्या द्वारी आलो (Deva Tujhya Dwaari Aalo)",
        "artist": "Suresh Wadkar",
        "film": "Abhang",
        "duration": "3:45",
        "videoId": "peqgsw2JnD0",
        "fallbackVideoIds": [
          "SkHEUVKuu-I"
        ]
      },
      {
        "id": "d4",
        "title": "विठ्ठला तू वेडा कुंभार (Vitthala Tu Veda Kumbhar)",
        "artist": "Sudhir Phadke",
        "film": "Prapanch",
        "duration": "3:45",
        "videoId": "TNRHLirqUtk",
        "fallbackVideoIds": [
          "ZmRYdlwHoZQ"
        ]
      },
      {
        "id": "d5",
        "title": "माझे माहेर पंढरी (Majhe Maher Pandhari)",
        "artist": "Pt. Bhimsen Joshi",
        "film": "Abhang",
        "duration": "3:45",
        "videoId": "MHTz8OEYqTw",
        "fallbackVideoIds": [
          "TVVd5nYrgbI"
        ]
      },
      {
        "id": "d6",
        "title": "ज्ञानोबा तुकाराम (Gyanoba Tukaram)",
        "artist": "Pt. Bhimsen Joshi",
        "film": "Sant Vani",
        "duration": "3:45",
        "videoId": "mQlgS0-4Y50",
        "fallbackVideoIds": [
          "GAUHcQiOv-k"
        ]
      },
      {
        "id": "d7",
        "title": "पांडुरंग हरी (Pandurang Hari)",
        "artist": "Ajit Kadkade",
        "film": "Abhang",
        "duration": "3:45",
        "videoId": "Mj_sLE1gaj0",
        "fallbackVideoIds": [
          "GR1dMYbyghs"
        ]
      },
      {
        "id": "d8",
        "title": "जय जय स्वामी समर्थ (Jai Jai Swami Samarth)",
        "artist": "Anuradha Paudwal",
        "film": "Bhajan",
        "duration": "3:45",
        "videoId": "qNpo_va6EH8",
        "fallbackVideoIds": [
          "0Dbp8vyzPr0"
        ]
      }
    ]
  },
  {
    "id": "regional-konkani",
    "name": "कोकणी & लोकसंस्कृती",
    "marathiName": "कोकणी व कोळीगीते",
    "description": "हि चाल तुरू तुरू, रुपेरी वाळू, सण आयलो गो आणि सागरतीराची कोळी संस्कृती.",
    "tracks": [
      {
        "id": "k1",
        "title": "हि चाल तुरू तुरू (Hi Chaal Turu Turu)",
        "artist": "Jaywant Kulkarni",
        "film": "Chala Re Chala",
        "duration": "3:45",
        "videoId": "chGJn7E4wlc",
        "fallbackVideoIds": [
          "L-7IgNmh25s"
        ]
      },
      {
        "id": "k2",
        "title": "सण आयलो गो (San Aaylo Go)",
        "artist": "Konkani Folk",
        "film": "Utsav",
        "duration": "3:45",
        "videoId": "FSChLUqoj60",
        "fallbackVideoIds": [
          "e7EN6DQFNsE"
        ]
      },
      {
        "id": "k3",
        "title": "रुपेरी वाळू - Original (Ruperi Valut Old)",
        "artist": "Lata Mangeshkar, Hemant Kumar",
        "film": "Koli Geet",
        "duration": "3:45",
        "videoId": "J4s__qsMwGc",
        "fallbackVideoIds": [
          "ozdSO09vwxo"
        ]
      },
      {
        "id": "k4",
        "title": "रुपेरी वाळू - New Version (Ruperi Valut New)",
        "artist": "Keval Walanj, Sneha Mahadik",
        "film": "Fusion",
        "duration": "3:45",
        "videoId": "FPZd7basRos",
        "fallbackVideoIds": [
          "DBaY28nyPmE"
        ]
      },
      {
        "id": "k5",
        "title": "मोगरा फुलला (Mogra Phulala)",
        "artist": "Lata Mangeshkar, Hridaynath Mangeshkar",
        "film": "Bhavgeet",
        "duration": "3:45",
        "videoId": "W2DGUX1xAks",
        "fallbackVideoIds": [
          "Gqdttec5SAo"
        ]
      },
      {
        "id": "k6",
        "title": "रिमझिम पाऊस (Rimjhim Paaus)",
        "artist": "Mahesh Kale",
        "film": "Monsoon",
        "duration": "3:45",
        "videoId": "yAxtrYod6so",
        "fallbackVideoIds": [
          "r85e2JsQQls"
        ]
      },
      {
        "id": "k7",
        "title": "कोकणा मेवा (Kokana Mewa)",
        "artist": "Pravin Koli, Sanju Rathod",
        "film": "Single",
        "duration": "3:45",
        "videoId": "ViqUMM8Hq64",
        "fallbackVideoIds": [
          "NJhiHGavpWg"
        ]
      },
      {
        "id": "k8",
        "title": "मराठी बाणा (Marathi Bana)",
        "artist": "Adarsh Shinde",
        "film": "Anthem",
        "duration": "3:45",
        "videoId": "ZJHp3M3dVPw",
        "fallbackVideoIds": [
          "Pg_ov47WFU4"
        ]
      },
      {
        "id": "k9",
        "title": "आम्ही मराठी (Aamhi Marathi)",
        "artist": "Shankar Mahadevan",
        "film": "Anthem",
        "duration": "3:45",
        "videoId": "7eNebzGIcKg",
        "fallbackVideoIds": [
          "Etx9osxe9zw"
        ]
      },
      {
        "id": "k10",
        "title": "जय भवानी जय शिवाजी (Jai Bhavani Jai Shivaji)",
        "artist": "Ajay-Atul",
        "film": "Tanhaji",
        "duration": "3:45",
        "videoId": "hw3YelL41Ao",
        "fallbackVideoIds": [
          "j4Y3vqxdQdo"
        ]
      },
      {
        "id": "k11",
        "title": "कोकणी गाणी - माझा कोकण (Majha Konkan)",
        "artist": "Pravin Koli",
        "film": "Koli",
        "duration": "3:45",
        "videoId": "8iVbizk15d4",
        "fallbackVideoIds": [
          "I6iSPLbeFxU"
        ]
      },
      {
        "id": "k12",
        "title": "गणपती बाप्पा मोरया (Ganpati Bappa Morya)",
        "artist": "Swapnil Bandodkar",
        "film": "Devotional",
        "duration": "3:45",
        "videoId": "CmN-6jJhYqQ",
        "fallbackVideoIds": [
          "K9SzRhWpUb4"
        ]
      },
      {
        "id": "k13",
        "title": "उधळ हो (Udhal Ho)",
        "artist": "Adarsh Shinde, Ajay-Atul",
        "film": "Maharashtra Shahir",
        "duration": "3:45",
        "videoId": "ZSDAL2wHqLw",
        "fallbackVideoIds": [
          "QCIc5fnj4NM"
        ]
      }
    ]
  }
];
