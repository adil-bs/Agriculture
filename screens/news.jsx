import React from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import TrendingNews from '../components/trendingNews';
import NewsCard from '../components/newsCard';

export default function News() {   
  const data = {
    "status": "ok",
    "total_hits": 6969,
    "page": 1,
    "total_pages": 70,
    "page_size": 100,
    "articles": [
      {
      "title": "Is Elon Musk Changing His Name? New Post On 'X' Sparks Rumour",
      "author": "Anjali Thakur",
      "authors": [
        "Anjali Thakur"
      ],
      "published_date": "2023-09-26 05:05:11",
      "published_date_precision": "full",
      "updated_date": null,
      "updated_date_precision": null,
      "link": "https://www.ndtv.com/world-news/is-elon-musk-changing-his-name-new-post-on-x-sparks-rumour-4424012#pfrom=home-ndtv_featured",
      "domain_url": "ndtv.com",
      "full_domain_url": "ndtv.com",
      "name_source": "NDTV",
      "is_headline": false,
      "paid_content": false,
      "parent_url": "https://www.ndtv.com",
      "country": "IN",
      "rights": "ndtv.com",
      "rank": 920,
      "media": "https://c.ndtvimg.com/2023-09/4dau661g_elon-musk-reuters_625x300_13_September_23.jpg",
      "language": "en",
      "description": "His post has since received more than 3 million views with a flurry of comments on X.",
      "content": "Billionaire Elon Musk, the founder and owner of Tesla, X.com, SpaceX, Neuralink and The Boring Company's recent post on 'X' is going viral. He wrote on X, \"Nobody-that's my name\". His post has since received more than 3 million views with a flurry of comments on X. See the post here: Nobody—that's my name — Elon Musk (@elonmusk) September 26, 2023 While some users asked Mr Musk if he was \"okay\", others started a meme fest. A user wrote, \"You good bro?\" Another user commented, \"Hi Nobody.\" \"When Elon makes a post, millions of phones ding around the world and people rush to respond and get his attention,\" the third user wrote. \"Tomorrow is another day,\" the fourth user wrote. \"Everybody - that's my name,\" the fifth user commented. Meanwhile, earlier, billionaire Elon Musk stated that he is buying the iPhone 15 and many of us would agree with his reason. Mr Musk said, \"The beauty of iPhone pictures & video is incredible.\" Elon Musk is ranked as the world's richest person by Forbes and Bloomberg Billionaires Index, with a total net worth of $236 billion. Unlike other billionaires and usual investment stories, Mr Musk undertook some risky investment options which ultimately made him the richest private citizen on the planet since 2021. Mr Musk's ownership share in electric vehicle manufacturer Tesla and his holdings in SpaceX and the Boring Company are responsible for his startling increase in fortune. However, Tesla has been the main source of his wealth, with the company's stock rising by more than 1,100 per cent in the last five years as investors rewarded it for its rise in vehicle sales.",
      "word_count": 275,
      "is_opinion": false,
      "twitter_account": "@ndtv",
      "all_links": [
        "https://www.jiosaavn.com/featured/new-music-this-week/Ns2UZo9qDvI",
        "https://www.ndtvgames.com/#pfrom=ndtv-globalnav",
        "https://www.gadgets360.com/mobiles/phone-finder",
        "https://mpcg.ndtv.in",
        "https://twitter.com/elonmusk/status/1706510175144649057?ref_src=twsrc%5Etfw",
        "https://ndtv.in/videos/live/channel/ndtvindia",
        "https://hotdeals360.com/beauty/best-glycolic-acid-toners-for-blemish-free-glowing-skin-4394322",
        "https://hotdeals360.com/beauty/best-glitter-lip-glosses-that-are-trending-in-the-world-of-beauty-4398727",
        "https://rajasthan.ndtv.in",
        "https://www.whatsapp.com/channel/0029Va4lixw7z4kcvZI9JM12",
        "https://twitter.com/ndtv",
        "https://www.instagram.com/ndtv/",
        "https://www.facebook.com/ndtv",
        "https://www.gadgets360.com/#pfrom=ndtv-globalnav",
        "https://rajasthan.ndtv.in/livetv-ndtvrajasthan",
        "https://www.jiosaavn.com",
        "https://www.whosthat360.com/finance/anushka-rathod-avoid-this-common-mistake-when-investing-in-mutual-funds-4408067",
        "https://www.gadgets360.com/internet/news/flipkart-big-billion-days-sale-2023-instant-bank-discount-details-teased-offers-deals-4417000",
        "https://ndtv.in/#pfrom=ndtv-globalnav",
        "https://mpcg.ndtv.in/livetv-ndtvmpcg",
        "https://www.gadgets360.com/internet/features/amazon-great-indian-festival-sale-date-october-10-leak-deals-discounts-offers-4420830"
      ],
      "all_domain_links": [
        "instagram.com",
        "whatsapp.com",
        "twitter.com",
        "gadgets360.com",
        "hotdeals360.com",
        "whosthat360.com",
        "ndtvgames.com",
        "jiosaavn.com",
        "ndtv.in",
        "facebook.com"
      ],
      "nlp": {
        "theme": "Business",
        "summary": "Elon Musk is the founder and owner of Tesla, X.com, SpaceX, Neuralink and The Boring Company. He wrote on X, \"Nobody-that's my name\". His post has since received more than 3 million views. He is ranked as the world's richest person with a net worth of $236 billion.",
        "sentiment": {
          "title": 0,
          "content": 0
        },
        "ner_PER": [
          {
            "entity_name": "Elon Musk",
            "count": 4
          },
          {
            "entity_name": "Musk",
            "count": 4
          },
          {
            "entity_name": "Elon",
            "count": 1
          }
        ],
        "ner_ORG": [
          {
            "entity_name": "Tesla",
            "count": 3
          },
          {
            "entity_name": "SpaceX",
            "count": 2
          },
          {
            "entity_name": "X.com",
            "count": 1
          },
          {
            "entity_name": "Neuralink",
            "count": 1
          },
          {
            "entity_name": "The Boring Company",
            "count": 1
          },
          {
            "entity_name": "Forbes",
            "count": 1
          },
          {
            "entity_name": "Boring Company",
            "count": 1
          }
        ],
        "ner_MISC": [
          {
            "entity_name": "iPhone 15",
            "count": 1
          },
          {
            "entity_name": "iPhone",
            "count": 1
          },
          {
            "entity_name": "Bloomberg Billionaires Index",
            "count": 1
          }
        ],
        "ner_LOC": []
      },
      "id": "c63576c21d9da5d27e13424f023d4ef8",
      "score": 23.87998
    },
    {
      "title": "Is Elon Musk Changing His Name? New Post On 'X' Sparks Rumour",
      "author": "Anjali Thakur",
      "authors": [
        "Anjali Thakur"
      ],
      "published_date": "2023-09-26 05:05:11",
      "published_date_precision": "full",
      "updated_date": null,
      "updated_date_precision": null,
      "link": "https://www.ndtv.com/world-news/is-elon-musk-changing-his-name-new-post-on-x-sparks-rumour-4424012#pfrom=home-ndtv_featured",
      "domain_url": "ndtv.com",
      "full_domain_url": "ndtv.com",
      "name_source": "NDTV",
      "is_headline": false,
      "paid_content": false,
      "parent_url": "https://www.ndtv.com",
      "country": "IN",
      "rights": "ndtv.com",
      "rank": 920,
      "media": "https://c.ndtvimg.com/2023-09/4dau661g_elon-musk-reuters_625x300_13_September_23.jpg",
      "language": "en",
      "description": "His post has since received more than 3 million views with a flurry of comments on X.",
      "content": "Billionaire Elon Musk, the founder and owner of Tesla, X.com, SpaceX, Neuralink and The Boring Company's recent post on 'X' is going viral. He wrote on X, \"Nobody-that's my name\". His post has since received more than 3 million views with a flurry of comments on X. See the post here: Nobody—that's my name — Elon Musk (@elonmusk) September 26, 2023 While some users asked Mr Musk if he was \"okay\", others started a meme fest. A user wrote, \"You good bro?\" Another user commented, \"Hi Nobody.\" \"When Elon makes a post, millions of phones ding around the world and people rush to respond and get his attention,\" the third user wrote. \"Tomorrow is another day,\" the fourth user wrote. \"Everybody - that's my name,\" the fifth user commented. Meanwhile, earlier, billionaire Elon Musk stated that he is buying the iPhone 15 and many of us would agree with his reason. Mr Musk said, \"The beauty of iPhone pictures & video is incredible.\" Elon Musk is ranked as the world's richest person by Forbes and Bloomberg Billionaires Index, with a total net worth of $236 billion. Unlike other billionaires and usual investment stories, Mr Musk undertook some risky investment options which ultimately made him the richest private citizen on the planet since 2021. Mr Musk's ownership share in electric vehicle manufacturer Tesla and his holdings in SpaceX and the Boring Company are responsible for his startling increase in fortune. However, Tesla has been the main source of his wealth, with the company's stock rising by more than 1,100 per cent in the last five years as investors rewarded it for its rise in vehicle sales.",
      "word_count": 275,
      "is_opinion": false,
      "twitter_account": "@ndtv",
      "all_links": [
        "https://www.jiosaavn.com/featured/new-music-this-week/Ns2UZo9qDvI",
        "https://www.ndtvgames.com/#pfrom=ndtv-globalnav",
        "https://www.gadgets360.com/mobiles/phone-finder",
        "https://mpcg.ndtv.in",
        "https://twitter.com/elonmusk/status/1706510175144649057?ref_src=twsrc%5Etfw",
        "https://ndtv.in/videos/live/channel/ndtvindia",
        "https://hotdeals360.com/beauty/best-glycolic-acid-toners-for-blemish-free-glowing-skin-4394322",
        "https://hotdeals360.com/beauty/best-glitter-lip-glosses-that-are-trending-in-the-world-of-beauty-4398727",
        "https://rajasthan.ndtv.in",
        "https://www.whatsapp.com/channel/0029Va4lixw7z4kcvZI9JM12",
        "https://twitter.com/ndtv",
        "https://www.instagram.com/ndtv/",
        "https://www.facebook.com/ndtv",
        "https://www.gadgets360.com/#pfrom=ndtv-globalnav",
        "https://rajasthan.ndtv.in/livetv-ndtvrajasthan",
        "https://www.jiosaavn.com",
        "https://www.whosthat360.com/finance/anushka-rathod-avoid-this-common-mistake-when-investing-in-mutual-funds-4408067",
        "https://www.gadgets360.com/internet/news/flipkart-big-billion-days-sale-2023-instant-bank-discount-details-teased-offers-deals-4417000",
        "https://ndtv.in/#pfrom=ndtv-globalnav",
        "https://mpcg.ndtv.in/livetv-ndtvmpcg",
        "https://www.gadgets360.com/internet/features/amazon-great-indian-festival-sale-date-october-10-leak-deals-discounts-offers-4420830"
      ],
      "all_domain_links": [
        "instagram.com",
        "whatsapp.com",
        "twitter.com",
        "gadgets360.com",
        "hotdeals360.com",
        "whosthat360.com",
        "ndtvgames.com",
        "jiosaavn.com",
        "ndtv.in",
        "facebook.com"
      ],
      "nlp": {
        "theme": "Business",
        "summary": "Elon Musk is the founder and owner of Tesla, X.com, SpaceX, Neuralink and The Boring Company. He wrote on X, \"Nobody-that's my name\". His post has since received more than 3 million views. He is ranked as the world's richest person with a net worth of $236 billion.",
        "sentiment": {
          "title": 0,
          "content": 0
        },
        "ner_PER": [
          {
            "entity_name": "Elon Musk",
            "count": 4
          },
          {
            "entity_name": "Musk",
            "count": 4
          },
          {
            "entity_name": "Elon",
            "count": 1
          }
        ],
        "ner_ORG": [
          {
            "entity_name": "Tesla",
            "count": 3
          },
          {
            "entity_name": "SpaceX",
            "count": 2
          },
          {
            "entity_name": "X.com",
            "count": 1
          },
          {
            "entity_name": "Neuralink",
            "count": 1
          },
          {
            "entity_name": "The Boring Company",
            "count": 1
          },
          {
            "entity_name": "Forbes",
            "count": 1
          },
          {
            "entity_name": "Boring Company",
            "count": 1
          }
        ],
        "ner_MISC": [
          {
            "entity_name": "iPhone 15",
            "count": 1
          },
          {
            "entity_name": "iPhone",
            "count": 1
          },
          {
            "entity_name": "Bloomberg Billionaires Index",
            "count": 1
          }
        ],
        "ner_LOC": []
      },
      "id": "c63576c21d9da5d27e13424f023d4ff8",
      "score": 23.87998
    },
    {
      "title": "Is Elon Musk Changing His Name? New Post On 'X' Sparks Rumour",
      "author": "Anjali Thakur",
      "authors": [
        "Anjali Thakur"
      ],
      "published_date": "2023-09-26 05:05:11",
      "published_date_precision": "full",
      "updated_date": null,
      "updated_date_precision": null,
      "link": "https://www.ndtv.com/world-news/is-elon-musk-changing-his-name-new-post-on-x-sparks-rumour-4424012#pfrom=home-ndtv_featured",
      "domain_url": "ndtv.com",
      "full_domain_url": "ndtv.com",
      "name_source": "NDTV",
      "is_headline": false,
      "paid_content": false,
      "parent_url": "https://www.ndtv.com",
      "country": "IN",
      "rights": "ndtv.com",
      "rank": 920,
      "media": "https://c.ndtvimg.com/2023-09/4dau661g_elon-musk-reuters_625x300_13_September_23.jpg",
      "language": "en",
      "description": "His post has since received more than 3 million views with a flurry of comments on X.",
      "content": "Billionaire Elon Musk, the founder and owner of Tesla, X.com, SpaceX, Neuralink and The Boring Company's recent post on 'X' is going viral. He wrote on X, \"Nobody-that's my name\". His post has since received more than 3 million views with a flurry of comments on X. See the post here: Nobody—that's my name — Elon Musk (@elonmusk) September 26, 2023 While some users asked Mr Musk if he was \"okay\", others started a meme fest. A user wrote, \"You good bro?\" Another user commented, \"Hi Nobody.\" \"When Elon makes a post, millions of phones ding around the world and people rush to respond and get his attention,\" the third user wrote. \"Tomorrow is another day,\" the fourth user wrote. \"Everybody - that's my name,\" the fifth user commented. Meanwhile, earlier, billionaire Elon Musk stated that he is buying the iPhone 15 and many of us would agree with his reason. Mr Musk said, \"The beauty of iPhone pictures & video is incredible.\" Elon Musk is ranked as the world's richest person by Forbes and Bloomberg Billionaires Index, with a total net worth of $236 billion. Unlike other billionaires and usual investment stories, Mr Musk undertook some risky investment options which ultimately made him the richest private citizen on the planet since 2021. Mr Musk's ownership share in electric vehicle manufacturer Tesla and his holdings in SpaceX and the Boring Company are responsible for his startling increase in fortune. However, Tesla has been the main source of his wealth, with the company's stock rising by more than 1,100 per cent in the last five years as investors rewarded it for its rise in vehicle sales.",
      "word_count": 275,
      "is_opinion": false,
      "twitter_account": "@ndtv",
      "all_links": [
        "https://www.jiosaavn.com/featured/new-music-this-week/Ns2UZo9qDvI",
        "https://www.ndtvgames.com/#pfrom=ndtv-globalnav",
        "https://www.gadgets360.com/mobiles/phone-finder",
        "https://mpcg.ndtv.in",
        "https://twitter.com/elonmusk/status/1706510175144649057?ref_src=twsrc%5Etfw",
        "https://ndtv.in/videos/live/channel/ndtvindia",
        "https://hotdeals360.com/beauty/best-glycolic-acid-toners-for-blemish-free-glowing-skin-4394322",
        "https://hotdeals360.com/beauty/best-glitter-lip-glosses-that-are-trending-in-the-world-of-beauty-4398727",
        "https://rajasthan.ndtv.in",
        "https://www.whatsapp.com/channel/0029Va4lixw7z4kcvZI9JM12",
        "https://twitter.com/ndtv",
        "https://www.instagram.com/ndtv/",
        "https://www.facebook.com/ndtv",
        "https://www.gadgets360.com/#pfrom=ndtv-globalnav",
        "https://rajasthan.ndtv.in/livetv-ndtvrajasthan",
        "https://www.jiosaavn.com",
        "https://www.whosthat360.com/finance/anushka-rathod-avoid-this-common-mistake-when-investing-in-mutual-funds-4408067",
        "https://www.gadgets360.com/internet/news/flipkart-big-billion-days-sale-2023-instant-bank-discount-details-teased-offers-deals-4417000",
        "https://ndtv.in/#pfrom=ndtv-globalnav",
        "https://mpcg.ndtv.in/livetv-ndtvmpcg",
        "https://www.gadgets360.com/internet/features/amazon-great-indian-festival-sale-date-october-10-leak-deals-discounts-offers-4420830"
      ],
      "all_domain_links": [
        "instagram.com",
        "whatsapp.com",
        "twitter.com",
        "gadgets360.com",
        "hotdeals360.com",
        "whosthat360.com",
        "ndtvgames.com",
        "jiosaavn.com",
        "ndtv.in",
        "facebook.com"
      ],
      "nlp": {
        "theme": "Business",
        "summary": "Elon Musk is the founder and owner of Tesla, X.com, SpaceX, Neuralink and The Boring Company. He wrote on X, \"Nobody-that's my name\". His post has since received more than 3 million views. He is ranked as the world's richest person with a net worth of $236 billion.",
        "sentiment": {
          "title": 0,
          "content": 0
        },
        "ner_PER": [
          {
            "entity_name": "Elon Musk",
            "count": 4
          },
          {
            "entity_name": "Musk",
            "count": 4
          },
          {
            "entity_name": "Elon",
            "count": 1
          }
        ],
        "ner_ORG": [
          {
            "entity_name": "Tesla",
            "count": 3
          },
          {
            "entity_name": "SpaceX",
            "count": 2
          },
          {
            "entity_name": "X.com",
            "count": 1
          },
          {
            "entity_name": "Neuralink",
            "count": 1
          },
          {
            "entity_name": "The Boring Company",
            "count": 1
          },
          {
            "entity_name": "Forbes",
            "count": 1
          },
          {
            "entity_name": "Boring Company",
            "count": 1
          }
        ],
        "ner_MISC": [
          {
            "entity_name": "iPhone 15",
            "count": 1
          },
          {
            "entity_name": "iPhone",
            "count": 1
          },
          {
            "entity_name": "Bloomberg Billionaires Index",
            "count": 1
          }
        ],
        "ner_LOC": []
      },
      "id": "c63576c21e9da5d27e13424f023d4ef8",
      "score": 23.87998
    },
    {
      "title": "Is Elon Musk Changing His Name? New Post On 'X' Sparks Rumour",
      "author": "Anjali Thakur",
      "authors": [
        "Anjali Thakur"
      ],
      "published_date": "2023-09-26 05:05:11",
      "published_date_precision": "full",
      "updated_date": null,
      "updated_date_precision": null,
      "link": "https://www.ndtv.com/world-news/is-elon-musk-changing-his-name-new-post-on-x-sparks-rumour-4424012#pfrom=home-ndtv_featured",
      "domain_url": "ndtv.com",
      "full_domain_url": "ndtv.com",
      "name_source": "NDTV",
      "is_headline": false,
      "paid_content": false,
      "parent_url": "https://www.ndtv.com",
      "country": "IN",
      "rights": "ndtv.com",
      "rank": 920,
      "media": "https://c.ndtvimg.com/2023-09/4dau661g_elon-musk-reuters_625x300_13_September_23.jpg",
      "language": "en",
      "description": "His post has since received more than 3 million views with a flurry of comments on X.",
      "content": "Billionaire Elon Musk, the founder and owner of Tesla, X.com, SpaceX, Neuralink and The Boring Company's recent post on 'X' is going viral. He wrote on X, \"Nobody-that's my name\". His post has since received more than 3 million views with a flurry of comments on X. See the post here: Nobody—that's my name — Elon Musk (@elonmusk) September 26, 2023 While some users asked Mr Musk if he was \"okay\", others started a meme fest. A user wrote, \"You good bro?\" Another user commented, \"Hi Nobody.\" \"When Elon makes a post, millions of phones ding around the world and people rush to respond and get his attention,\" the third user wrote. \"Tomorrow is another day,\" the fourth user wrote. \"Everybody - that's my name,\" the fifth user commented. Meanwhile, earlier, billionaire Elon Musk stated that he is buying the iPhone 15 and many of us would agree with his reason. Mr Musk said, \"The beauty of iPhone pictures & video is incredible.\" Elon Musk is ranked as the world's richest person by Forbes and Bloomberg Billionaires Index, with a total net worth of $236 billion. Unlike other billionaires and usual investment stories, Mr Musk undertook some risky investment options which ultimately made him the richest private citizen on the planet since 2021. Mr Musk's ownership share in electric vehicle manufacturer Tesla and his holdings in SpaceX and the Boring Company are responsible for his startling increase in fortune. However, Tesla has been the main source of his wealth, with the company's stock rising by more than 1,100 per cent in the last five years as investors rewarded it for its rise in vehicle sales.",
      "word_count": 275,
      "is_opinion": false,
      "twitter_account": "@ndtv",
      "all_links": [
        "https://www.jiosaavn.com/featured/new-music-this-week/Ns2UZo9qDvI",
        "https://www.ndtvgames.com/#pfrom=ndtv-globalnav",
        "https://www.gadgets360.com/mobiles/phone-finder",
        "https://mpcg.ndtv.in",
        "https://twitter.com/elonmusk/status/1706510175144649057?ref_src=twsrc%5Etfw",
        "https://ndtv.in/videos/live/channel/ndtvindia",
        "https://hotdeals360.com/beauty/best-glycolic-acid-toners-for-blemish-free-glowing-skin-4394322",
        "https://hotdeals360.com/beauty/best-glitter-lip-glosses-that-are-trending-in-the-world-of-beauty-4398727",
        "https://rajasthan.ndtv.in",
        "https://www.whatsapp.com/channel/0029Va4lixw7z4kcvZI9JM12",
        "https://twitter.com/ndtv",
        "https://www.instagram.com/ndtv/",
        "https://www.facebook.com/ndtv",
        "https://www.gadgets360.com/#pfrom=ndtv-globalnav",
        "https://rajasthan.ndtv.in/livetv-ndtvrajasthan",
        "https://www.jiosaavn.com",
        "https://www.whosthat360.com/finance/anushka-rathod-avoid-this-common-mistake-when-investing-in-mutual-funds-4408067",
        "https://www.gadgets360.com/internet/news/flipkart-big-billion-days-sale-2023-instant-bank-discount-details-teased-offers-deals-4417000",
        "https://ndtv.in/#pfrom=ndtv-globalnav",
        "https://mpcg.ndtv.in/livetv-ndtvmpcg",
        "https://www.gadgets360.com/internet/features/amazon-great-indian-festival-sale-date-october-10-leak-deals-discounts-offers-4420830"
      ],
      "all_domain_links": [
        "instagram.com",
        "whatsapp.com",
        "twitter.com",
        "gadgets360.com",
        "hotdeals360.com",
        "whosthat360.com",
        "ndtvgames.com",
        "jiosaavn.com",
        "ndtv.in",
        "facebook.com"
      ],
      "nlp": {
        "theme": "Business",
        "summary": "Elon Musk is the founder and owner of Tesla, X.com, SpaceX, Neuralink and The Boring Company. He wrote on X, \"Nobody-that's my name\". His post has since received more than 3 million views. He is ranked as the world's richest person with a net worth of $236 billion.",
        "sentiment": {
          "title": 0,
          "content": 0
        },
        "ner_PER": [
          {
            "entity_name": "Elon Musk",
            "count": 4
          },
          {
            "entity_name": "Musk",
            "count": 4
          },
          {
            "entity_name": "Elon",
            "count": 1
          }
        ],
        "ner_ORG": [
          {
            "entity_name": "Tesla",
            "count": 3
          },
          {
            "entity_name": "SpaceX",
            "count": 2
          },
          {
            "entity_name": "X.com",
            "count": 1
          },
          {
            "entity_name": "Neuralink",
            "count": 1
          },
          {
            "entity_name": "The Boring Company",
            "count": 1
          },
          {
            "entity_name": "Forbes",
            "count": 1
          },
          {
            "entity_name": "Boring Company",
            "count": 1
          }
        ],
        "ner_MISC": [
          {
            "entity_name": "iPhone 15",
            "count": 1
          },
          {
            "entity_name": "iPhone",
            "count": 1
          },
          {
            "entity_name": "Bloomberg Billionaires Index",
            "count": 1
          }
        ],
        "ner_LOC": []
      },
      "id": "c63576c21d9ea5d27e13424f023d4ef8",
      "score": 23.87998
    },
    ],
    "user_input": {}
}
  return (
    <View style={{flex:1}}>
      <FlatList
        data={data.articles}
        renderItem={({item}) => <NewsCard data={item}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<TrendingNews data={data.articles}/>}
      />
    </View>
  );
}
const style = StyleSheet.create({})

