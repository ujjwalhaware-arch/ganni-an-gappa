export interface Track {
  id: number;
  title: string;
  artist: string;
  film?: string;
  year: number;
  duration: string;
  videoId: string;
  // Optional list of fallback video IDs (audio-only uploads or alternate uploads)
  fallbackVideoIds?: string[];
}

export interface Playlist {
  name: string;
  description: string;
  tracks: Track[];
}

export const GOLD_NOSTALGIA_TRACKS: Track[] = [
  { id: 1, title: "Blue Eyes", artist: "Yo Yo Honey Singh", year: 2013, duration: "3:39", videoId: "NbyHNASFi6U" },
  { id: 2, title: "Lahore", artist: "Guru Randhawa", year: 2017, duration: "3:30", videoId: "dZ0fwJojhrs" },
  { id: 3, title: "Brown Rang", artist: "Yo Yo Honey Singh", year: 2012, duration: "3:01", videoId: "eizmCZv3aKI" },
  { id: 4, title: "High Rated Gabru", artist: "Guru Randhawa", year: 2017, duration: "3:34", videoId: "hjWf8A0YNSE" },
  { id: 5, title: "Angreji Beat", artist: "Yo Yo Honey Singh ft. Gippy Grewal", year: 2011, duration: "3:29", videoId: "YEf_hnXBbyI" },
  { id: 6, title: "Prada", artist: "Jass Manak", year: 2018, duration: "3:06", videoId: "PjTU0DmBWiU" },
  { id: 7, title: "Yaar Anmulle", artist: "Sharry Mann", year: 2010, duration: "4:06", videoId: "6ZVcYC4yLfk" },
  { id: 8, title: "Suit Suit", artist: "Guru Randhawa ft. Arjun", year: 2016, duration: "3:16", videoId: "uQ763VvqiEM" },
  { id: 9, title: "Dil Chori", artist: "Yo Yo Honey Singh", film: "Sonu Ke Titu Ki Sweety", year: 2018, duration: "3:37", videoId: "xWi8nDUjHGA" },
  { id: 10, title: "Lehenga", artist: "Jass Manak", year: 2019, duration: "3:18", videoId: "RKioDWlajvo" },
  { id: 11, title: "Lungi Dance", artist: "Yo Yo Honey Singh", film: "Chennai Express", year: 2013, duration: "3:34", videoId: "69CEiHfS_mc" },
  { id: 12, title: "Ban Ja Rani", artist: "Guru Randhawa", film: "Tumhari Sulu", year: 2017, duration: "3:46", videoId: "hlvbDjksdCg" },
  { id: 13, title: "Millionaire", artist: "Yo Yo Honey Singh", year: 2024, duration: "3:19", videoId: "XO8wew38VM8" },
  { id: 14, title: "Chhote Chhote Peg", artist: "Yo Yo Honey Singh", film: "Sonu Ke Titu Ki Sweety", year: 2018, duration: "3:24", videoId: "xvYBg6MWPbM" },
  { id: 15, title: "Downtown", artist: "Guru Randhawa", year: 2018, duration: "3:48", videoId: "klzyuLXNsGE" },
  { id: 16, title: "Made in India", artist: "Guru Randhawa", year: 2018, duration: "3:31", videoId: "pnMQLrS5sTE" }
];

export const MOOSE_AND_DILJIT_TRACKS: Track[] = [
  { id: 1, title: "295", artist: "Sidhu Moose Wala", year: 2021, duration: "4:30", videoId: "n_FCrCQ6-bA" },
  { id: 2, title: "Lover", artist: "Diljit Dosanjh", year: 2021, duration: "3:14", videoId: "mH_LFkWxpI0" },
  { id: 3, title: "So High", artist: "Sidhu Moose Wala", year: 2017, duration: "3:53", videoId: "GgmFC8y8q3k" },
  { id: 4, title: "G.O.A.T.", artist: "Diljit Dosanjh", year: 2020, duration: "3:43", videoId: "cl0a3i2wFcc" },
  { id: 5, title: "Legend", artist: "Sidhu Moose Wala", year: 2019, duration: "3:02", videoId: "YZAFd9o3RYQ" },
  { id: 6, title: "Born to Shine", artist: "Diljit Dosanjh", year: 2020, duration: "3:33", videoId: "dCmp56tSSmA" },
  { id: 7, title: "The Last Ride", artist: "Sidhu Moose Wala", year: 2022, duration: "4:24", videoId: "6xoB4ZiKKn0" },
  { id: 8, title: "Naina", artist: "Diljit Dosanjh ft. Badshah", film: "Crew", year: 2024, duration: "3:00", videoId: "3u6lLWGjFLY" },
  { id: 9, title: "Levels", artist: "Sidhu Moose Wala ft. Sunny Malton", year: 2022, duration: "3:48", videoId: "tpFljbJxZiw" },
  { id: 10, title: "Clash", artist: "Diljit Dosanjh", year: 2020, duration: "2:54", videoId: "KX06ksuS6Xo" },
  { id: 11, title: "Jatt Da Muqabala", artist: "Sidhu Moose Wala", year: 2018, duration: "3:24", videoId: "HYhdyu-_mgk" },
  { id: 12, title: "Do You Know", artist: "Diljit Dosanjh", year: 2016, duration: "3:39", videoId: "P-DhwN87JDY" },
  { id: 13, title: "Old Skool", artist: "Sidhu Moose Wala ft. Prem Dhillon", year: 2020, duration: "4:14", videoId: "hBlO1i_WTiY" },
  { id: 14, title: "5 Taara", artist: "Diljit Dosanjh", year: 2015, duration: "3:09", videoId: "GU2bvpy0W60" },
  { id: 15, title: "Bambiha Bole", artist: "Sidhu Moose Wala ft. Amrit Maan", year: 2020, duration: "5:01", videoId: "hpVNMjpjiJc" },
  { id: 16, title: "Lemonade", artist: "Diljit Dosanjh", year: 2022, duration: "3:11", videoId: "ZVgergj8Xe4" },
  { id: 17, title: "Same Beef", artist: "Sidhu Moose Wala ft. Bohemia", year: 2019, duration: "4:23", videoId: "qk2WMmiiVFE" },
  { id: 18, title: "Kylie + Kareena", artist: "Diljit Dosanjh", year: 2019, duration: "3:15", videoId: "jn5lSTm20j4" },
  { id: 19, title: "Tibeyan Da Putt", artist: "Sidhu Moose Wala", year: 2020, duration: "5:17", videoId: "twCHVhk8iMU" },
  { id: 20, title: "Proper Patola", artist: "Diljit Dosanjh ft. Badshah", year: 2013, duration: "2:54", videoId: "GVhmynWOPoM" },
  { id: 21, title: "Chorni", artist: "Sidhu Moose Wala ft. DIVINE", year: 2023, duration: "3:02", videoId: "seEO3--Sy3c" },
  { id: 22, title: "Tu Juliet Jatt Di", artist: "Diljit Dosanjh", film: "Jatt & Juliet 3", year: 2024, duration: "3:17", videoId: "CXL8De-xk7c" }
];

export const NEW_WAVE_TRACKS: Track[] = [
  { id: 1, title: "Cheques", artist: "Shubh", year: 2023, duration: "3:03", videoId: "4tywp83zkmk" },
  { id: 2, title: "Brown Munde", artist: "AP Dhillon ft. Gurinder Gill", year: 2020, duration: "4:27", videoId: "VNs_cCtdbPc" },
  { id: 3, title: "Winning Speech", artist: "Karan Aujla", year: 2024, duration: "2:34", videoId: "vsWxs1tuwDk" },
  { id: 4, title: "We Rollin", artist: "Shubh", year: 2021, duration: "3:19", videoId: "hV8EGTjzD2s" },
  { id: 5, title: "Excuses", artist: "AP Dhillon ft. Gurinder Gill", year: 2020, duration: "2:56", videoId: "vX2cDW8LUWk" },
  { id: 6, title: "On Top", artist: "Karan Aujla", year: 2022, duration: "3:22", videoId: "aFWDOFg7X2A" },
  { id: 7, title: "Elevated", artist: "Shubh", year: 2022, duration: "3:20", videoId: "I1nX5EuvwzE" },
  { id: 8, title: "Insane", artist: "AP Dhillon ft. Gurinder Gill", year: 2021, duration: "3:26", videoId: "cqP8I5aaud8" },
  { id: 9, title: "Players", artist: "Karan Aujla ft. Badshah", year: 2022, duration: "2:52", videoId: "CeFQO9MQNqs" },
  { id: 10, title: "Still Rollin", artist: "Shubh", year: 2023, duration: "2:54", videoId: "0mCVpUDCkEk" },
  { id: 11, title: "Summer High", artist: "AP Dhillon", year: 2022, duration: "2:57", videoId: "nqUN530Rgtw" },
  { id: 12, title: "Chitta Kurta", artist: "Karan Aujla", year: 2019, duration: "3:30", videoId: "o9PY6NsB3_E" },
  { id: 13, title: "No Love", artist: "Shubh", year: 2022, duration: "2:50", videoId: "6RrEQJNZwPQ" },
  { id: 14, title: "Wavy", artist: "Karan Aujla", year: 2023, duration: "2:31", videoId: "XTp5jaRU3Ws" },
  { id: 15, title: "Baller", artist: "Shubh ft. Ikky", year: 2022, duration: "2:28", videoId: "xR3V5Ow2dTI" },
  { id: 16, title: "Try Me", artist: "Karan Aujla", year: 2023, duration: "3:00", videoId: "6wkwmDzZ3n4" },
  { id: 17, title: "King Shit", artist: "Shubh", year: 2023, duration: "3:22", videoId: "d2ofxg8pHfQ" },
  { id: 18, title: "52 Bars", artist: "Karan Aujla", year: 2023, duration: "3:02", videoId: "4DfVxVeqk2o" },
  { id: 19, title: "Admirin' You", artist: "Karan Aujla ft. Preston Pablo", year: 2023, duration: "3:37", videoId: "k85UB5b6pJU" },
  { id: 20, title: "Tauba Tauba", artist: "Karan Aujla", film: "Bad Newz", year: 2024, duration: "3:27", videoId: "LK7-_dgAVQE" }
];

export const OTHER_COLLABS_TRACKS: Track[] = [
  { id: 1, title: "Gears", artist: "Arjan Dhillon", year: 2022, duration: "2:46", videoId: "1GTuBPlSfc0" },
  { id: 2, title: "Greatest", artist: "Arjan Dhillon", year: 2023, duration: "2:56", videoId: "UqnxxAA52YQ" },
  { id: 3, title: "Hot Shit", artist: "Arjan Dhillon", year: 2023, duration: "3:10", videoId: "q1eNnYacKX0" },
  { id: 4, title: "Nazare", artist: "Gur Sidhu ft. Cheema Y", year: 2023, duration: "3:01", videoId: "4jyD5k-Y7Nc" },
  { id: 5, title: "Deewane", artist: "Navaan Sandhu ft. Bir", year: 2022, duration: "3:30", videoId: "B-2BCSxnyHA" },
  { id: 6, title: "The Finest", artist: "Navaan Sandhu", year: 2022, duration: "2:52", videoId: "Ld9hW_ztn_c" },
  { id: 7, title: "Famous Enough", artist: "Navaan Sandhu", year: 2023, duration: "3:02", videoId: "IdahfYlZhfI" },
  { id: 8, title: "Haseen", artist: "Talwiinder", year: 2022, duration: "3:30", videoId: "IltsOcCj1Ak" },
  { id: 9, title: "Jatt Disda", artist: "Sunanda Sharma", year: 2023, duration: "3:12", videoId: "2iaE1ayfc1I" }
];

export const PLAYLISTS: Playlist[] = [
  {
    name: "New Wave Hits",
    description: "Modern anthems from Karan Aujla, Shubh, AP Dhillon, and the current sound of Punjab.",
    tracks: NEW_WAVE_TRACKS
  },
  {
    name: "Moose & Diljit",
    description: "The definitive catalog of Punjab's biggest legends: Sidhu Moose Wala & Diljit Dosanjh.",
    tracks: MOOSE_AND_DILJIT_TRACKS
  },
  {
    name: "Gold Nostalgia",
    description: "Blast from the past with Yo Yo Honey Singh, Guru Randhawa, Sharry Mann, and classic vibes.",
    tracks: GOLD_NOSTALGIA_TRACKS
  },
  {
    name: "Vibe Mix",
    description: "Arjan Dhillon, Navaan Sandhu, Talwiinder, Gur Sidhu, and deep cuts.",
    tracks: OTHER_COLLABS_TRACKS
  }
];
