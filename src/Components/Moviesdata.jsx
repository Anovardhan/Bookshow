const Moviesdata = [
  {
    id: 1,
    name: "Salaar: Cease Fire - Part 1",
    rating: 6.4,
    type: "action-drama",
    votes: 100,
    date: "22 dec 2023",
    certificate: "uA",
    about:
      "In 1985, Deva and Vardha are inseparable companions in Khansaar. A twist of fate forces Deva to leave the city, vowing to return when his friend needs him.",
    cast: [
      {
        id: 1,
        realname: "uppalapati prabhas",
        castname: "deva",
        born: "23 oct 1979",
        birthplace: "hyderabad",
        occupation: "actor",
        about:
          "Known as the Rebel Star, Prabhas is one of the top actors in Indian cinema.",
        cimage:
          "https://imgs.search.brave.com/mB6XN4VN2sHmkI0iiQY1HP8H75eb2ZEBH5KCUDseQW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1qQXlPVFl6/TlRJek5sNUJNbDVC/YW5CblhrRnRaVGd3/TURZNU1EY3lNVElA/LmpwZw",
      },
      {
        id: 2,
        realname: "prithviraj sukumaran",
        castname: "vardha",
        born: "16 oct 1982",
        birthplace: "kerala",
        occupation: "actor",
        about:
          "Prithviraj is a renowned Malayalam actor and filmmaker with a strong fan base.",
        cimage:
          "https://upload.wikimedia.org/wikipedia/commons/4/48/Prithviraj_at_Aiyyaa_event.jpg",
      },
      {
        id: 3,
        realname: "shruti haasan",
        castname: "aadhya",
        born: "28 jan 1986",
        birthplace: "chennai",
        occupation: "actress",
        about:
          "Shruti Haasan is a versatile actress and singer in Indian cinema.",
        cimage:
          "https://imgs.search.brave.com/q35Gsrql2-1m_OUv9bvyl4t_JSEQNyq-lOlZHRjUWII/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzVkL1No/cnV0aV9IYWFzYW5f/YXRfdGhlX3NwZWNp/YWxfc2NyZWVuaW5n/X29mX3RoZV9zaG9y/dF9maWxtX0Rldmlf/JTI4MzIlMjkuanBn/LzUxMnB4LVNocnV0/aV9IYWFzYW5fYXRf/dGhlX3NwZWNpYWxf/c2NyZWVuaW5nX29m/X3RoZV9zaG9ydF9m/aWxtX0RldmlfJTI4/MzIlMjkuanBn",
      },
      {
        id: 4,
        realname: "jagapathi babu",
        castname: "raja mannar",
        born: "12 feb 1962",
        birthplace: "machilipatnam",
        occupation: "actor",
        about:
          "Jagapathi Babu is a senior actor known for powerful villainous roles.",
        cimage:
          "https://imgs.search.brave.com/krMVCCcu2Od2JU4WxtWU8L4ZuzNwyUTyNe6TzWNBkKg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpXWm1abVl5/WlRBdE16WXdZeTAw/WkROa0xUaGlaR010/WTJNM01EQm1NMkkz/TmpnelhrRXlYa0Zx/Y0djQC5qcGc",
      },
      {
        id: 5,
        realname: "easwari rao",
        castname: "deva's mother",
        born: "13 jun 1973",
        birthplace: "tamil nadu",
        occupation: "actress",
        about: "Easwari Rao is known for playing strong emotional characters.",
        cimage:
          "https://imgs.search.brave.com/f9YC1JxP7nZ-vHyYdRepIsAnvSbnMtolAv3nOqySTfo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVtb3ZpZWRi/Lm9yZy90L3AvdzMw/MF9hbmRfaDQ1MF9i/ZXN0djIvZmp5dlE0/NVlaY292eTJFZ2oy/ZXV4OFVpdUhVLmpw/Zw",
      },
      {
        id: 6,
        realname: "bobby simha",
        castname: "villain leader",
        born: "6 nov 1983",
        birthplace: "kodaikanal",
        occupation: "actor",
        about:
          "Bobby Simha is a National Award-winning actor known for intense roles.",
        cimage:
          "https://imgs.search.brave.com/jt_-7mgYKpbTCgOih-rQ64k9LftsRvYtXMn2esIA-I4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzJlL0Jv/YmJ5X1NpbWhhX2F0/X1VydW1lZW5fQXVk/aW9fTGF1bmNoXy5q/cGcvNTEycHgtQm9i/YnlfU2ltaGFfYXRf/VXJ1bWVlbl9BdWRp/b19MYXVuY2hfLmpw/Zw",
      },
    ],
    fav: true,
    reviews: [
      { user: "ravi", review: "High-octane action and visuals!", rat: 5 },
      { user: "ananya", review: "Prabhas is back with a bang!", rat: 3 },
      { user: "kiran", review: "Loved the friendship angle.", rat: 3 },
      { user: "swathi", review: "Power-packed performances.", rat: 5 },
      {
        user: "deepak",
        review: "BGM and cinematography are top-notch.",
        rat: 5,
      },
      { user: "lavanya", review: "A bit long, but totally worth it!", rat: 5 },
    ],
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg",
    image2:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg",
    languages: ["telugu", "hindi", "tamil"],
    print: "2D, IMAX-2D",
    duration: "2hrs 55min",
    bookings: true,
    tickets: [
      {
        date: "12-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
          {
            name: "Sudarshan 35mm ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
      {
        date: "13-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Hi Nanna",
    rating: 8.2,
    type: "romantic-drama",
    votes: 85,
    date: "7 Dec 2023",
    certificate: "U",
    about:
      "A heartwarming tale of a single father and his daughter whose lives take a turn when a mysterious woman enters their world.",
    cast: [
      {
        id: 1,
        realname: "Nani",
        castname: "Viraj",
        born: "24 Feb 1984",
        birthplace: "Hyderabad",
        occupation: "actor",
        about: "Nani is known for his natural acting style in Telugu cinema.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nani-7485-1654492137.jpg",
      },
      {
        id: 2,
        realname: "Mrunal Thakur",
        castname: "Yashna",
        born: "1 Aug 1992",
        birthplace: "Maharashtra",
        occupation: "actress",
        about: "Mrunal is a rising star in both Hindi and South Indian films.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mrunal-thakur-1044080-18-12-2019-02-06-58.jpg",
      },
      {
        id: 3,
        realname: "Baby Kiara Khanna",
        castname: "Mahi",
        born: "unknown",
        birthplace: "India",
        occupation: "child actress",
        about: "Kiara played the adorable daughter in the film Hi Nanna.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shruti-haasan-29670-18-09-2017-05-02-43.jpg",
      },
    ],
    fav: true,
    reviews: [
      { user: "sneha", review: "Emotional and beautifully shot!", rat: 5 },
      { user: "rajesh", review: "Nani’s performance is so genuine.", rat: 4 },
      {
        user: "meera",
        review: "Loved the bond between father and daughter.",
        rat: 5,
      },
      { user: "vinay", review: "Music and visuals are magical.", rat: 4 },
      { user: "tanya", review: "Mrunal is a delight to watch.", rat: 4 },
    ],
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hi-nanna-et00364503-1701678655.jpg",
    image2:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hi-nanna-et00364503-1701678655.jpg",
    languages: ["telugu", "hindi", "tamil"],
    print: "2D",
    duration: "2hrs 25min",
    bookings: true,
    tickets: [
      {
        date: "12-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
      {
        date: "13-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Kalki 2898 AD",
    rating: 8.8,
    type: "sci-fi-mythological",
    votes: 120,
    date: "9 May 2024",
    certificate: "uA",
    about:
      "In a dystopian future, the final avatar of Vishnu, Kalki, rises to restore dharma and battle darkness threatening humanity.",
    cast: [
      {
        id: 1,
        realname: "Prabhas",
        castname: "Kalki",
        born: "23 Oct 1979",
        birthplace: "Hyderabad",
        occupation: "actor",
        about: "Prabhas plays the futuristic avatar of Vishnu.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg",
      },
      {
        id: 2,
        realname: "Deepika Padukone",
        castname: "Padma",
        born: "5 Jan 1986",
        birthplace: "Copenhagen",
        occupation: "actress",
        about: "Deepika plays a key role aiding Kalki’s journey.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg",
      },
      {
        id: 3,
        realname: "Amitabh Bachchan",
        castname: "Ashwatthama",
        born: "11 Oct 1942",
        birthplace: "Allahabad",
        occupation: "actor",
        about: "Big B portrays the immortal warrior Ashwatthama.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amitabh-bachchan-138-12-09-2017-02-34-37.jpg",
      },
    ],
    fav: true,
    reviews: [
      { user: "sahil", review: "Mind-blowing visuals!", rat: 5 },
      { user: "jyoti", review: "A mythological marvel.", rat: 4 },
      { user: "naveen", review: "Prabhas is back in style.", rat: 5 },
    ],
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg",
    image2:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kalki-2898-ad-et00352941-1718275859.jpg",
    languages: ["telugu", "hindi", "tamil"],
    print: "2D, IMAX-2D",
    duration: "2hrs 50min",
    bookings: true,
    tickets: [
      {
        date: "12-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
      {
        date: "13-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Guntur Kaaram",
    rating: 6.9,
    type: "action-family-drama",
    votes: 95,
    date: "12 Jan 2024",
    certificate: "uA",
    about:
      "A fiery young man from Guntur fights against injustice while discovering secrets from his past.",
    cast: [
      {
        id: 1,
        realname: "Mahesh Babu",
        castname: "Ram",
        born: "9 Aug 1975",
        birthplace: "Chennai",
        occupation: "actor",
        about: "Mahesh Babu shines as the spicy and intense Guntur guy.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mahesh-babu-36982-20-12-2017-04-21-05.jpg",
      },
      {
        id: 2,
        realname: "Sreeleela",
        castname: "Amulya",
        born: "14 Jun 2001",
        birthplace: "Detroit",
        occupation: "actress",
        about: "Sreeleela plays Mahesh Babu’s love interest.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sree-leela-1265576-14-02-2019-02-06-22.jpg",
      },
    ],
    fav: true,
    reviews: [
      { user: "arun", review: "Massy scenes with good emotion.", rat: 4 },
      { user: "geetha", review: "Loved Mahesh's style!", rat: 4 },
      { user: "santosh", review: "Action and sentiment blend well.", rat: 3 },
    ],
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/guntur-kaaram-et00310760-1686726453.jpg",
    image2:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/guntur-kaaram-et00310760-1686726453.jpg",
    languages: ["telugu", "hindi"],
    print: "2D",
    duration: "2hrs 35min",
    bookings: true,
    tickets: [
      {
        date: "12-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
      {
        date: "13-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    name: "Baahubali: The Beginning",
    rating: 8.2,
    type: "epic-action-drama",
    votes: 200,
    date: "10 July 2015",
    certificate: "uA",
    about:
      "In ancient India, Shivudu discovers his true heritage and begins a journey to reclaim the Mahishmati kingdom.",
    cast: [
      {
        id: 1,
        realname: "Prabhas",
        castname: "Amarendra/Mahendra Baahubali",
        born: "23 Oct 1979",
        birthplace: "Hyderabad",
        occupation: "actor",
        about:
          "Prabhas portrayed both father and son with immense strength and grace.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prabhas-1708-1686915417.jpg",
      },
      {
        id: 2,
        realname: "Rana Daggubati",
        castname: "Bhallaladeva",
        born: "14 Dec 1984",
        birthplace: "Chennai",
        occupation: "actor",
        about: "Rana played the powerful and ruthless antagonist Bhallaladeva.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rana-daggubati-16342-1654347262.jpg",
      },
      {
        id: 3,
        realname: "Anushka Shetty",
        castname: "Devasena",
        born: "7 Nov 1981",
        birthplace: "Mangalore",
        occupation: "actress",
        about: "Anushka portrayed the brave and dignified princess Devasena.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anushka-shetty-4217-18-09-2017-05-34-42.jpg",
      },
      {
        id: 4,
        realname: "Tamannaah Bhatia",
        castname: "Avanthika",
        born: "21 Dec 1989",
        birthplace: "Mumbai",
        occupation: "actress",
        about: "Tamannaah played the rebel warrior Avanthika.",
        cimage:
          "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tamannaah-bhatia-16842-20-12-2017-04-21-12.jpg",
      },
    ],
    fav: true,
    reviews: [
      {
        user: "vikas",
        review: "A visual spectacle and emotional epic.",
        rat: 5,
      },
      { user: "megha", review: "Loved the grandeur and music.", rat: 4 },
      { user: "rahul", review: "Prabhas and Rana were phenomenal!", rat: 5 },
    ],
    image:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baahubali-the-beginning-part-i-et00031217-05-11-2020-06-57-14.jpg",
    image2:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/baahubali-the-beginning-part-i-et00031217-05-11-2020-06-57-14.jpg",
    languages: ["telugu", "hindi", "tamil", "malayalam"],
    print: "2D, IMAX-2D",
    duration: "2hrs 39min",
    bookings: true,
    tickets: [
      {
        date: "12-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
          {
            name: "Sandhya 70mm & 35mm",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "RTC cross Roads​",
          },
        ],
      },
      {
        date: "13-04-2025",
        theaters: [
          {
            name: "Prasads Multiplex (IMAX)",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Khairtabad",
          },
          {
            name: "Mallikarjuna Theatre ",
            shows: ["11:30", "2:30", "5:30", "9:30"],
            cancel: false,
            prices: [{ upperbalcony: 250, lowerbalcony: 150, secondclass: 50 }],
            place: "Hyder Nagar​",
          },
        ],
      },
    ],
  },
];

export default Moviesdata;
