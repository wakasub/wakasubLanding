/**
 * Snapshot of the public data-plan feed, generated 2026-08-16T11:27:26.138Z.
 *
 * Two jobs:
 *  1. it renders on the server for the first paint (so the pricing table is in
 *     the HTML for crawlers), before `/api/data-plans` swaps in live prices;
 *  2. it is the fallback the proxy returns when the upstream API is unreachable.
 *
 * Regenerate by re-fetching the feed and rewriting the object below.
 */

import type { DataPlansPayload } from "./data-plans";

export const DATA_PLANS_SNAPSHOT: DataPlansPayload = {
  "meta": {
    "version": "1.0",
    "currency": "NGN",
    "generated_at": "2026-08-16T11:27:26.138Z",
    "count": 151
  },
  "networks": [
    {
      "network": "MTN",
      "types": [
        {
          "type": "COPERATE",
          "slug": "coperate",
          "plans": [
            {
              "id": "195",
              "name": "1.5GB 2-Day Plan",
              "size_mb": 1500,
              "size_label": "1.5GB",
              "validity": "2 DAYS",
              "price": 595,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Gifting",
          "slug": "gifting",
          "plans": [
            {
              "id": "9",
              "name": "75.0MB",
              "size_mb": 75,
              "size_label": "75MB",
              "validity": "1day",
              "price": 73,
              "offer_tag": null
            },
            {
              "id": "10",
              "name": "110.0MB",
              "size_mb": 110,
              "size_label": "110MB",
              "validity": "1day",
              "price": 98,
              "offer_tag": null
            },
            {
              "id": "11",
              "name": "230.0MB",
              "size_mb": 230,
              "size_label": "230MB",
              "validity": "3days",
              "price": 194,
              "offer_tag": null
            },
            {
              "id": "32",
              "name": "1.0GB",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": "1day",
              "price": 259,
              "offer_tag": "NEW"
            },
            {
              "id": "4",
              "name": "3.2GB",
              "size_mb": 3200,
              "size_label": "3.2GB",
              "validity": "2 days",
              "price": 985,
              "offer_tag": "BEST_SELLER"
            },
            {
              "id": "3",
              "name": "10.0GB",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "30 days",
              "price": 4380,
              "offer_tag": "BEST_SELLER"
            }
          ]
        },
        {
          "type": "SME",
          "slug": "sme",
          "plans": [
            {
              "id": "190",
              "name": "1GB SME",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": null,
              "price": 450,
              "offer_tag": null
            },
            {
              "id": "191",
              "name": "2GB SME ( 7DAYS VALIDITY)",
              "size_mb": 2000,
              "size_label": "2GB",
              "validity": "7 days",
              "price": 750,
              "offer_tag": null
            },
            {
              "id": "192",
              "name": "2GB SME( 1MONTH VALIDITY)",
              "size_mb": 2000,
              "size_label": "2GB",
              "validity": "1 month",
              "price": 850,
              "offer_tag": null
            },
            {
              "id": "193",
              "name": "3GB SME ( 1MONTH VALIDITY)",
              "size_mb": 3000,
              "size_label": "3GB",
              "validity": "1 month",
              "price": 1300,
              "offer_tag": null
            },
            {
              "id": "194",
              "name": "5GB SME ( 1MONTH VALIDITY )",
              "size_mb": 5000,
              "size_label": "5GB",
              "validity": "1 month",
              "price": 1550,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Monthly",
          "slug": "monthly",
          "plans": [
            {
              "id": "144",
              "name": "2GB + 2 Mins Monthly Plan - N1,500",
              "size_mb": 2000,
              "size_label": "2GB",
              "validity": "Monthly",
              "price": 1500,
              "offer_tag": null
            },
            {
              "id": "140",
              "name": "2.7GB + 2mins + 2GB All Night Streaming + 200MB YouTube Music, Monthly Plan - N2000",
              "size_mb": 2700,
              "size_label": "2.7GB",
              "validity": "Monthly",
              "price": 2000,
              "offer_tag": null
            },
            {
              "id": "170",
              "name": "2.7GB Xtra Bundle Monthly Plan",
              "size_mb": 2700,
              "size_label": "2.7GB",
              "validity": "Monthly",
              "price": 3000,
              "offer_tag": null
            },
            {
              "id": "35",
              "name": "MTN N2500 3.5GB +5mins Monthly Plan",
              "size_mb": 3500,
              "size_label": "3.5GB",
              "validity": "Monthly",
              "price": 2500,
              "offer_tag": null
            },
            {
              "id": "45",
              "name": "MTN N3000 6.75GB Monthly Plan",
              "size_mb": 6750,
              "size_label": "6.75GB",
              "validity": "Monthly",
              "price": 3000,
              "offer_tag": null
            },
            {
              "id": "123",
              "name": "7GB Monthly Plan - N3,500",
              "size_mb": 7000,
              "size_label": "7GB",
              "validity": "Monthly",
              "price": 3500,
              "offer_tag": null
            },
            {
              "id": "115",
              "name": "MTN N4,500 10GB + 10mins  - 30 days",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "30 days",
              "price": 4500,
              "offer_tag": null
            },
            {
              "id": "46",
              "name": "MTN 14.5GB Monthly Plan Monthly",
              "size_mb": 14500,
              "size_label": "14.5GB",
              "validity": "Monthly",
              "price": 5000,
              "offer_tag": null
            },
            {
              "id": "129",
              "name": "16.5GB Monthly Plan",
              "size_mb": 16500,
              "size_label": "16.5GB",
              "validity": "Monthly",
              "price": 6500,
              "offer_tag": null
            },
            {
              "id": "132",
              "name": "20GB Monthly Plan",
              "size_mb": 20000,
              "size_label": "20GB",
              "validity": "Monthly",
              "price": 7500,
              "offer_tag": null
            },
            {
              "id": "135",
              "name": "30GB Monthly Broadband Plan - N9,000",
              "size_mb": 30000,
              "size_label": "30GB",
              "validity": "Monthly",
              "price": 9000,
              "offer_tag": null
            },
            {
              "id": "38",
              "name": "30GB Monthly Broadband Plan - N9,000",
              "size_mb": 30000,
              "size_label": "30GB",
              "validity": "Monthly",
              "price": 9000,
              "offer_tag": null
            },
            {
              "id": "137",
              "name": "36GB Monthly Plan",
              "size_mb": 36000,
              "size_label": "36GB",
              "validity": "Monthly",
              "price": 11000,
              "offer_tag": null
            },
            {
              "id": "36",
              "name": "60GB Monthly HyNetFlex Plan - N14,500",
              "size_mb": 60000,
              "size_label": "60GB",
              "validity": "Monthly",
              "price": 14500,
              "offer_tag": null
            },
            {
              "id": "171",
              "name": "65GB Monthly Plan (30 Days) - N16,000",
              "size_mb": 65000,
              "size_label": "65GB",
              "validity": "30 days",
              "price": 16000,
              "offer_tag": null
            },
            {
              "id": "119",
              "name": "MTN N24,000 120GB  - 30days",
              "size_mb": 120000,
              "size_label": "120GB",
              "validity": "30 days",
              "price": 24000,
              "offer_tag": null
            },
            {
              "id": "42",
              "name": "MTN N35,000 165GB Monthly Data Plan (30 Days)",
              "size_mb": 165000,
              "size_label": "165GB",
              "validity": "30 days",
              "price": 35000,
              "offer_tag": null
            },
            {
              "id": "118",
              "name": "480GB 3-Month Plan - N90,000",
              "size_mb": 480000,
              "size_label": "480GB",
              "validity": "3 months",
              "price": 90000,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Others",
          "slug": "others",
          "plans": [
            {
              "id": "110",
              "name": "150GB 2-Month Plan",
              "size_mb": 150000,
              "size_label": "150GB",
              "validity": "2 months",
              "price": 40000,
              "offer_tag": null
            },
            {
              "id": "37",
              "name": "450GB 3-Month Broadband Plan - N75,000",
              "size_mb": 450000,
              "size_label": "450GB",
              "validity": "3 months",
              "price": 75000,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Router",
          "slug": "router",
          "plans": [
            {
              "id": "41",
              "name": "MTN N30,000 150GB + 2GB daily - 5G Router Data (30 Days)",
              "size_mb": 150000,
              "size_label": "150GB",
              "validity": "30 days",
              "price": 30000,
              "offer_tag": null
            },
            {
              "id": "43",
              "name": "MTN N37,500 200GB + 5GB Youtube/MSTeams/Zoom - 5G Router Data (30 Days)",
              "size_mb": 200000,
              "size_label": "200GB",
              "validity": "30 days",
              "price": 37500,
              "offer_tag": null
            },
            {
              "id": "44",
              "name": "MTN 1.5TB - N225,000 Broadband Router",
              "size_mb": 1500000,
              "size_label": "1.5TB",
              "validity": null,
              "price": 225000,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Weekly",
          "slug": "weekly",
          "plans": [
            {
              "id": "107",
              "name": "MTN N900 2.5GB - 2 days",
              "size_mb": 2500,
              "size_label": "2.5GB",
              "validity": "2 days",
              "price": 900,
              "offer_tag": null
            },
            {
              "id": "66",
              "name": "MTN N1000 3.2GB - 2 days",
              "size_mb": 3200,
              "size_label": "3.2GB",
              "validity": "2 days",
              "price": 1000,
              "offer_tag": null
            },
            {
              "id": "126",
              "name": "3.5GB Weekly Plan (7 Days) - N1,500",
              "size_mb": 3500,
              "size_label": "3.5GB",
              "validity": "7 days",
              "price": 1500,
              "offer_tag": null
            },
            {
              "id": "34",
              "name": "MTN N2500 6GB - 7 days",
              "size_mb": 6000,
              "size_label": "6GB",
              "validity": "7 days",
              "price": 2500,
              "offer_tag": null
            },
            {
              "id": "111",
              "name": "MTN N3,500 11GB  - 7 days",
              "size_mb": 11000,
              "size_label": "11GB",
              "validity": "7 days",
              "price": 3500,
              "offer_tag": null
            },
            {
              "id": "146",
              "name": "12.5GB + 36mins + 15 SMS, Weekly plan - 5500",
              "size_mb": 12500,
              "size_label": "12.5GB",
              "validity": "Weekly",
              "price": 5500,
              "offer_tag": null
            },
            {
              "id": "40",
              "name": "20GB Weekly Plan - 5,000 Naira",
              "size_mb": 20000,
              "size_label": "20GB",
              "validity": "Weekly",
              "price": 5000,
              "offer_tag": null
            }
          ]
        }
      ]
    },
    {
      "network": "AIRTEL",
      "types": [
        {
          "type": "AWOOF GIFTING",
          "slug": "awoof-gifting",
          "plans": [
            {
              "id": "183",
              "name": "4.0 GB - 2 day",
              "size_mb": 4000,
              "size_label": "4GB",
              "validity": "2 day",
              "price": 1020,
              "offer_tag": null
            },
            {
              "id": "184",
              "name": "7.0 GB - 7 days",
              "size_mb": 7000,
              "size_label": "7GB",
              "validity": "7 days",
              "price": 2100,
              "offer_tag": null
            },
            {
              "id": "185",
              "name": "10.0 GB - 30 days",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "30 days",
              "price": 3200,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "AWOOF PLANS",
          "slug": "awoof-plans",
          "plans": [
            {
              "id": "187",
              "name": "23GB-TESTING",
              "size_mb": 23000,
              "size_label": "23GB",
              "validity": "20 DAYS",
              "price": 3200,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Gifting",
          "slug": "gifting",
          "plans": [
            {
              "id": "186",
              "name": "75.0 MB - 1day",
              "size_mb": 75,
              "size_label": "75MB",
              "validity": "1day",
              "price": 73,
              "offer_tag": null
            },
            {
              "id": "18",
              "name": "75.0MB",
              "size_mb": 75,
              "size_label": "75MB",
              "validity": "1day",
              "price": 73,
              "offer_tag": null
            },
            {
              "id": "19",
              "name": "230.0MB",
              "size_mb": 230,
              "size_label": "230MB",
              "validity": "2 days",
              "price": 196,
              "offer_tag": null
            },
            {
              "id": "20",
              "name": "300.0MB",
              "size_mb": 300,
              "size_label": "300MB",
              "validity": "2days",
              "price": 296,
              "offer_tag": null
            },
            {
              "id": "22",
              "name": "500.0MB",
              "size_mb": 500,
              "size_label": "500MB",
              "validity": "7 days",
              "price": 493,
              "offer_tag": null
            },
            {
              "id": "21",
              "name": "1.5GB",
              "size_mb": 1500,
              "size_label": "1.5GB",
              "validity": "1day",
              "price": 490,
              "offer_tag": null
            },
            {
              "id": "23",
              "name": "1.5GB",
              "size_mb": 1500,
              "size_label": "1.5GB",
              "validity": "2days",
              "price": 590,
              "offer_tag": null
            },
            {
              "id": "24",
              "name": "2.0GB",
              "size_mb": 2000,
              "size_label": "2GB",
              "validity": "30 days",
              "price": 1470,
              "offer_tag": null
            },
            {
              "id": "12",
              "name": "5.0GB",
              "size_mb": 5000,
              "size_label": "5GB",
              "validity": "7days (1 week)",
              "price": 1478,
              "offer_tag": null
            },
            {
              "id": "8",
              "name": "10.0GB",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "7 days",
              "price": 2945,
              "offer_tag": null
            },
            {
              "id": "27",
              "name": "10.0GB",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "30 days",
              "price": 3900,
              "offer_tag": null
            },
            {
              "id": "7",
              "name": "18.0GB",
              "size_mb": 18000,
              "size_label": "18GB",
              "validity": "30 days",
              "price": 5850,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Monthly",
          "slug": "monthly",
          "plans": [
            {
              "id": "160",
              "name": "2GB Monthly Plan + Youtube & Social Plan (30 Days) - 1,500 Naira",
              "size_mb": 2000,
              "size_label": "2GB",
              "validity": "30 days",
              "price": 1500,
              "offer_tag": null
            },
            {
              "id": "98",
              "name": "3GB Monthly Plan + Youtube & Social Plan (30 Days)- 2,000 Naira",
              "size_mb": 3000,
              "size_label": "3GB",
              "validity": "30 days",
              "price": 2000,
              "offer_tag": null
            },
            {
              "id": "147",
              "name": "4GB Monthly Plan + Youtube & Social Plan (30 Days) - 2,500 Naira",
              "size_mb": 4000,
              "size_label": "4GB",
              "validity": "30 days",
              "price": 2500,
              "offer_tag": null
            },
            {
              "id": "94",
              "name": "8GB Monthly Plan + Youtube & Social Plan (30 Days) - 3,000 Naira",
              "size_mb": 8000,
              "size_label": "8GB",
              "validity": "30 days",
              "price": 3000,
              "offer_tag": null
            },
            {
              "id": "97",
              "name": "10GB Monthly Plan + Youtube & Social Plan (30 Days) - 4,000 Naira",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "30 days",
              "price": 4000,
              "offer_tag": null
            },
            {
              "id": "162",
              "name": "13GB MIFI 5 Data - MiFi Only (30 Days) - 5,000 Naira",
              "size_mb": 13000,
              "size_label": "13GB",
              "validity": "30 days",
              "price": 5000,
              "offer_tag": null
            },
            {
              "id": "99",
              "name": "13GB Monthly Plan + Youtube & Social Plan (30 Days) - 5,000 Naira",
              "size_mb": 13000,
              "size_label": "13GB",
              "validity": "30 days",
              "price": 5000,
              "offer_tag": null
            },
            {
              "id": "155",
              "name": "18GB Monthly Plan + Youtube & Social Plan (30 Days) - 6000 Naira",
              "size_mb": 18000,
              "size_label": "18GB",
              "validity": "30 days",
              "price": 6000,
              "offer_tag": null
            },
            {
              "id": "148",
              "name": "25GB Monthly Plan + Youtube & Social Plan (30 Days) - 8,000 Naira",
              "size_mb": 25000,
              "size_label": "25GB",
              "validity": "30 days",
              "price": 8000,
              "offer_tag": null
            },
            {
              "id": "100",
              "name": "35GB Monthly Plan + Youtube & Social Plan (30 Days) - 10,000 Naira",
              "size_mb": 35000,
              "size_label": "35GB",
              "validity": "30 days",
              "price": 10000,
              "offer_tag": null
            },
            {
              "id": "163",
              "name": "35GB MIFI 10 Data - MiFi Only (30 Days) - 10,000 Naira",
              "size_mb": 35000,
              "size_label": "35GB",
              "validity": "30 days",
              "price": 10000,
              "offer_tag": null
            },
            {
              "id": "101",
              "name": "60GB Monthly Plan + Youtube & Social Plan (30 Days) - 15,000 Naira",
              "size_mb": 60000,
              "size_label": "60GB",
              "validity": "30 days",
              "price": 15000,
              "offer_tag": null
            },
            {
              "id": "164",
              "name": "60GB MIFI 15 Data - MiFi Only (30 Days) - 15,000 Naira",
              "size_mb": 60000,
              "size_label": "60GB",
              "validity": "30 days",
              "price": 15000,
              "offer_tag": null
            },
            {
              "id": "145",
              "name": "100GB Monthly Plan + Youtube & Social Plan (30 Days) - 20,000 Naira",
              "size_mb": 100000,
              "size_label": "100GB",
              "validity": "30 days",
              "price": 20000,
              "offer_tag": null
            },
            {
              "id": "149",
              "name": "160GB Monthly Plan (30 Days) - 30,000 Naira",
              "size_mb": 160000,
              "size_label": "160GB",
              "validity": "30 days",
              "price": 30000,
              "offer_tag": null
            },
            {
              "id": "112",
              "name": "200GB Monthly Plan (90 Days) - 50,000 Naira",
              "size_mb": 200000,
              "size_label": "200GB",
              "validity": "90 days",
              "price": 50000,
              "offer_tag": null
            },
            {
              "id": "102",
              "name": "210GB Data (30 Days) - 40,000 Naira",
              "size_mb": 210000,
              "size_label": "210GB",
              "validity": "30 days",
              "price": 40000,
              "offer_tag": null
            },
            {
              "id": "103",
              "name": "350GB Monthly Plan + Youtube & Social Plan (120 Days) - 60,000 Naira",
              "size_mb": 350000,
              "size_label": "350GB",
              "validity": "120 days",
              "price": 60000,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Others",
          "slug": "others",
          "plans": [
            {
              "id": "158",
              "name": "1GB Social Plan Plan (3 Days) - 300 Naira",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": "3 days",
              "price": 300,
              "offer_tag": null
            },
            {
              "id": "81",
              "name": "1.5GB Social Plan - 500 Naira",
              "size_mb": 1500,
              "size_label": "1.5GB",
              "validity": null,
              "price": 500,
              "offer_tag": null
            },
            {
              "id": "142",
              "name": "5GB Binge Plan + Youtube & Social Platforms Data (2 Day) - 1,500 Naira",
              "size_mb": 5000,
              "size_label": "5GB",
              "validity": "2 days",
              "price": 1500,
              "offer_tag": null
            },
            {
              "id": "104",
              "name": "680GB Data (365 Days) - 100,000 Naira",
              "size_mb": 680000,
              "size_label": "680GB",
              "validity": "365 days",
              "price": 100000,
              "offer_tag": null
            },
            {
              "id": "154",
              "name": "500 Naira Binge Plan -",
              "size_mb": null,
              "size_label": null,
              "validity": null,
              "price": 500,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Router",
          "slug": "router",
          "plans": [
            {
              "id": "165",
              "name": "100GB Unlimited Uiltra 20 - Router Only (30 Days) - 20,000 Naira",
              "size_mb": 100000,
              "size_label": "100GB",
              "validity": "30 days",
              "price": 20000,
              "offer_tag": null
            },
            {
              "id": "166",
              "name": "Unlimited 20MBPS Data - Router Only (30 Days) - 30,000 Naira",
              "size_mb": null,
              "size_label": null,
              "validity": "30 days",
              "price": 30000,
              "offer_tag": null
            },
            {
              "id": "167",
              "name": "Unlimited 60MBPS Data - Router Only (30 Days) - 50,000 Naira",
              "size_mb": null,
              "size_label": null,
              "validity": "30 days",
              "price": 50000,
              "offer_tag": null
            },
            {
              "id": "168",
              "name": "Unlimited 60MBPS Data - Router Only (90 Days) - 80,000 Naira",
              "size_mb": null,
              "size_label": null,
              "validity": "90 days",
              "price": 80000,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Weekly",
          "slug": "weekly",
          "plans": [
            {
              "id": "128",
              "name": "500MB Weekly Plan (7 Days) - 500 Naira",
              "size_mb": 500,
              "size_label": "500MB",
              "validity": "7 days",
              "price": 500,
              "offer_tag": null
            },
            {
              "id": "75",
              "name": "1GB Weekly Plan (7 Days) - 800 Naira",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": "7 days",
              "price": 800,
              "offer_tag": null
            },
            {
              "id": "131",
              "name": "1.5GB Weekly Plan + Youtube & Social Plans (7 Days) - 1,000 Naira",
              "size_mb": 1500,
              "size_label": "1.5GB",
              "validity": "7 days",
              "price": 1000,
              "offer_tag": null
            },
            {
              "id": "134",
              "name": "3.5GB Weekly Plan + Youtube & Social Platform (7 Days) - 1,500 Naira",
              "size_mb": 3500,
              "size_label": "3.5GB",
              "validity": "7 days",
              "price": 1500,
              "offer_tag": null
            },
            {
              "id": "161",
              "name": "6GB Weekly Plan + Youtube & Social Platform (7 Days) - 2,500 Naira",
              "size_mb": 6000,
              "size_label": "6GB",
              "validity": "7 days",
              "price": 2500,
              "offer_tag": null
            },
            {
              "id": "152",
              "name": "10GB Weekly Plan + Youtube & Social Platform (7 Days) - 3000 Naira",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "7 days",
              "price": 3000,
              "offer_tag": null
            },
            {
              "id": "153",
              "name": "18GB Weekly Plan + Youtube & Social Platform (7 Days) - 5000 Naira",
              "size_mb": 18000,
              "size_label": "18GB",
              "validity": "7 days",
              "price": 5000,
              "offer_tag": null
            }
          ]
        }
      ]
    },
    {
      "network": "GLO",
      "types": [
        {
          "type": "14 Days",
          "slug": "14-days",
          "plans": [
            {
              "id": "69",
              "name": "Glo Data (SME) 200MB - 99 Naira - 14 days",
              "size_mb": 200,
              "size_label": "200MB",
              "validity": "14 days",
              "price": 99,
              "offer_tag": null
            },
            {
              "id": "71",
              "name": "Glo Data (SME) 500MB - 250 Naira - 14 days",
              "size_mb": 500,
              "size_label": "500MB",
              "validity": "14 days",
              "price": 250,
              "offer_tag": null
            },
            {
              "id": "177",
              "name": "Glo Data (SME) 1GB - 350 Naira - 14 days Night plan",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": "14 days",
              "price": 350,
              "offer_tag": null
            },
            {
              "id": "117",
              "name": "1.55GB - N500 Oneoff",
              "size_mb": 1550,
              "size_label": "1.55GB",
              "validity": null,
              "price": 500,
              "offer_tag": null
            },
            {
              "id": "90",
              "name": "1.8GB - Social Bundles N500",
              "size_mb": 1800,
              "size_label": "1.8GB",
              "validity": null,
              "price": 500,
              "offer_tag": null
            },
            {
              "id": "178",
              "name": "Glo Data (SME) 3GB - 1,040 Naira - 14 days Night plan",
              "size_mb": 3000,
              "size_label": "3GB",
              "validity": "14 days",
              "price": 1040,
              "offer_tag": null
            },
            {
              "id": "179",
              "name": "Glo Data (SME) 5GB - 1,730 Naira - 14 days Night plan",
              "size_mb": 5000,
              "size_label": "5GB",
              "validity": "14 days",
              "price": 1730,
              "offer_tag": null
            },
            {
              "id": "68",
              "name": "Glo Data (SME) 10GB - 3,460 Naira - 14 days Night plan",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "14 days",
              "price": 3460,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Monthly",
          "slug": "monthly",
          "plans": [
            {
              "id": "72",
              "name": "Glo Data (SME) 500MB - 250 Naira - 30 days",
              "size_mb": 500,
              "size_label": "500MB",
              "validity": "30 days",
              "price": 250,
              "offer_tag": null
            },
            {
              "id": "73",
              "name": "Glo Data (SME) 1GB - 495 Naira - 30 days",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": "30 days",
              "price": 495,
              "offer_tag": null
            },
            {
              "id": "47",
              "name": "Glo Data (SME) 2GB - 990 Naira - 30 days",
              "size_mb": 2000,
              "size_label": "2GB",
              "validity": "30 days",
              "price": 990,
              "offer_tag": null
            },
            {
              "id": "61",
              "name": "2.6GB - N1000 Oneoff",
              "size_mb": 2600,
              "size_label": "2.6GB",
              "validity": null,
              "price": 1000,
              "offer_tag": null
            },
            {
              "id": "180",
              "name": "Glo Data (SME) 3GB - 1,485 Naira - 30 days",
              "size_mb": 3000,
              "size_label": "3GB",
              "validity": "30 days",
              "price": 1485,
              "offer_tag": null
            },
            {
              "id": "48",
              "name": "Glo Data (SME) 3GB 5GB - 2,475 Naira - 30 days",
              "size_mb": 3000,
              "size_label": "3GB",
              "validity": "30 days",
              "price": 2475,
              "offer_tag": null
            },
            {
              "id": "60",
              "name": "5.2GB - N1500 Oneoff",
              "size_mb": 5200,
              "size_label": "5.2GB",
              "validity": null,
              "price": 1500,
              "offer_tag": null
            },
            {
              "id": "58",
              "name": "6.25GB - N2000 Oneoff",
              "size_mb": 6250,
              "size_label": "6.25GB",
              "validity": null,
              "price": 2000,
              "offer_tag": null
            },
            {
              "id": "59",
              "name": "7.25GB - N2500 Oneoff",
              "size_mb": 7250,
              "size_label": "7.25GB",
              "validity": null,
              "price": 2500,
              "offer_tag": null
            },
            {
              "id": "49",
              "name": "Glo Data (SME) 10GB - 4,950 Naira - 30 days",
              "size_mb": 10000,
              "size_label": "10GB",
              "validity": "30 days",
              "price": 4950,
              "offer_tag": null
            },
            {
              "id": "57",
              "name": "10.5GB - N3000 Oneoff",
              "size_mb": 10500,
              "size_label": "10.5GB",
              "validity": null,
              "price": 3000,
              "offer_tag": null
            },
            {
              "id": "55",
              "name": "12.5GB - N4000 Oneoff",
              "size_mb": 12500,
              "size_label": "12.5GB",
              "validity": null,
              "price": 4000,
              "offer_tag": null
            },
            {
              "id": "116",
              "name": "17GB - N5000 Oneoff",
              "size_mb": 17000,
              "size_label": "17GB",
              "validity": null,
              "price": 5000,
              "offer_tag": null
            },
            {
              "id": "78",
              "name": "20.5GB - N6000 Oneoff",
              "size_mb": 20500,
              "size_label": "20.5GB",
              "validity": null,
              "price": 6000,
              "offer_tag": null
            },
            {
              "id": "54",
              "name": "28GB - N8000 Oneoff",
              "size_mb": 28000,
              "size_label": "28GB",
              "validity": null,
              "price": 8000,
              "offer_tag": null
            },
            {
              "id": "53",
              "name": "42GB - N10000 Oneoff",
              "size_mb": 42000,
              "size_label": "42GB",
              "validity": null,
              "price": 10000,
              "offer_tag": null
            },
            {
              "id": "79",
              "name": "64GB - N15000 Oneoff",
              "size_mb": 64000,
              "size_label": "64GB",
              "validity": null,
              "price": 15000,
              "offer_tag": null
            },
            {
              "id": "80",
              "name": "107GB - N20000 Oneoff",
              "size_mb": 107000,
              "size_label": "107GB",
              "validity": null,
              "price": 20000,
              "offer_tag": null
            },
            {
              "id": "82",
              "name": "135GB - Mega N25000 Oneoff",
              "size_mb": 135000,
              "size_label": "135GB",
              "validity": null,
              "price": 25000,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Others",
          "slug": "others",
          "plans": [
            {
              "id": "76",
              "name": "300MB - GloMyG N100 OneOff",
              "size_mb": 300,
              "size_label": "300MB",
              "validity": null,
              "price": 100,
              "offer_tag": null
            },
            {
              "id": "84",
              "name": "350MB - Night N60 Oneoff",
              "size_mb": 350,
              "size_label": "350MB",
              "validity": null,
              "price": 60,
              "offer_tag": null
            },
            {
              "id": "86",
              "name": "500MB - N200 Oneoff",
              "size_mb": 500,
              "size_label": "500MB",
              "validity": null,
              "price": 200,
              "offer_tag": null
            },
            {
              "id": "85",
              "name": "750MB - Night N120 Oneoff",
              "size_mb": 750,
              "size_label": "750MB",
              "validity": null,
              "price": 120,
              "offer_tag": null
            },
            {
              "id": "88",
              "name": "1GB - Youtube Special N250",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": null,
              "price": 250,
              "offer_tag": null
            },
            {
              "id": "172",
              "name": "Glo MyG N300 1 GB OneOff (Whatsapp, Instagram, Snapchat, Boomplay, Audiomac, GloTV, Tiktok)",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": null,
              "price": 300,
              "offer_tag": null
            },
            {
              "id": "87",
              "name": "1GB - N300 Oneoff",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": null,
              "price": 300,
              "offer_tag": null
            },
            {
              "id": "74",
              "name": "1.1GB - N750 Oneoff",
              "size_mb": 1100,
              "size_label": "1.1GB",
              "validity": null,
              "price": 750,
              "offer_tag": null
            },
            {
              "id": "173",
              "name": "Glo MyG N500 1.5 GB OneOff (Whatsapp, Instagram, Snapchat, Boomplay, Audiomac, GloTV, Tiktok)",
              "size_mb": 1500,
              "size_label": "1.5GB",
              "validity": null,
              "price": 500,
              "offer_tag": null
            },
            {
              "id": "67",
              "name": "2GB - Special N500",
              "size_mb": 2000,
              "size_label": "2GB",
              "validity": null,
              "price": 500,
              "offer_tag": null
            },
            {
              "id": "89",
              "name": "3GB - Youtube Special N600",
              "size_mb": 3000,
              "size_label": "3GB",
              "validity": null,
              "price": 600,
              "offer_tag": null
            },
            {
              "id": "174",
              "name": "Glo MyG N1000 3.5 GB OneOff (Whatsapp, Instagram, Snapchat, Boomplay, Audiomac, GloTV, Tiktok)",
              "size_mb": 3500,
              "size_label": "3.5GB",
              "validity": null,
              "price": 1000,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Weekly",
          "slug": "weekly",
          "plans": [
            {
              "id": "91",
              "name": "135MB - Social Bundles N50 3days",
              "size_mb": 135,
              "size_label": "135MB",
              "validity": "3 days",
              "price": 50,
              "offer_tag": null
            },
            {
              "id": "83",
              "name": "335MB - Social Bundles N100",
              "size_mb": 335,
              "size_label": "335MB",
              "validity": null,
              "price": 100,
              "offer_tag": null
            },
            {
              "id": "182",
              "name": "Glo Data (SME)  1GB - 295 Naira - 3 days",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": "3 days",
              "price": 295,
              "offer_tag": null
            },
            {
              "id": "175",
              "name": "Glo Data (SME) 1GB - 345 Naira - 7 days",
              "size_mb": 1000,
              "size_label": "1GB",
              "validity": "7 days",
              "price": 345,
              "offer_tag": null
            },
            {
              "id": "105",
              "name": "1.1GB - Social Bundles N300",
              "size_mb": 1100,
              "size_label": "1.1GB",
              "validity": null,
              "price": 300,
              "offer_tag": null
            },
            {
              "id": "65",
              "name": "2.5GB - Weekend N500",
              "size_mb": 2500,
              "size_label": "2.5GB",
              "validity": null,
              "price": 500,
              "offer_tag": null
            },
            {
              "id": "181",
              "name": "Glo Data (SME) 3GB - 890 Naira - 3 days",
              "size_mb": 3000,
              "size_label": "3GB",
              "validity": "3 days",
              "price": 890,
              "offer_tag": null
            },
            {
              "id": "176",
              "name": "Glo Data (SME) 3GB - 1,040 Naira - 7 days",
              "size_mb": 3000,
              "size_label": "3GB",
              "validity": "7 days",
              "price": 1040,
              "offer_tag": null
            },
            {
              "id": "50",
              "name": "3.7GB - N1000 Oneoff",
              "size_mb": 3700,
              "size_label": "3.7GB",
              "validity": null,
              "price": 1000,
              "offer_tag": null
            },
            {
              "id": "51",
              "name": "9GB - N2000 Oneoff",
              "size_mb": 9000,
              "size_label": "9GB",
              "validity": null,
              "price": 2000,
              "offer_tag": null
            },
            {
              "id": "77",
              "name": "24GB - N5000 Oneoff",
              "size_mb": 24000,
              "size_label": "24GB",
              "validity": null,
              "price": 5000,
              "offer_tag": null
            }
          ]
        }
      ]
    },
    {
      "network": "9MOBILE",
      "types": [
        {
          "type": "Monthly",
          "slug": "monthly",
          "plans": [
            {
              "id": "121",
              "name": "9mobile 2GB - 1,000 Naira - 30 Days",
              "size_mb": 2000,
              "size_label": "2GB",
              "validity": "30 days",
              "price": 1000,
              "offer_tag": null
            },
            {
              "id": "136",
              "name": "T2 2.3GB - 1,200 Naira - 30 Days",
              "size_mb": 2300,
              "size_label": "2.3GB",
              "validity": "30 days",
              "price": 1200,
              "offer_tag": null
            },
            {
              "id": "127",
              "name": "T2 4.5GB - 2000 Naira - 30 Days",
              "size_mb": 4500,
              "size_label": "4.5GB",
              "validity": "30 days",
              "price": 2000,
              "offer_tag": null
            },
            {
              "id": "139",
              "name": "T2 5.2GB - 2,500 Naira - 30 days",
              "size_mb": 5200,
              "size_label": "5.2GB",
              "validity": "30 days",
              "price": 2500,
              "offer_tag": null
            },
            {
              "id": "124",
              "name": "T2 8.4GB - 4,000 Naira - 30 days",
              "size_mb": 8400,
              "size_label": "8.4GB",
              "validity": "30 days",
              "price": 4000,
              "offer_tag": null
            },
            {
              "id": "130",
              "name": "T2 11.4GB - 5,000 Naira - 30 Days",
              "size_mb": 11400,
              "size_label": "11.4GB",
              "validity": "30 days",
              "price": 5000,
              "offer_tag": null
            },
            {
              "id": "133",
              "name": "T2 6.2G - 3,000 Naira - 30 days",
              "size_mb": null,
              "size_label": null,
              "validity": "30 days",
              "price": 3000,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Others",
          "slug": "others",
          "plans": [
            {
              "id": "109",
              "name": "T2 650MB - 500 Naira - 3 days",
              "size_mb": 650,
              "size_label": "650MB",
              "validity": "3 days",
              "price": 500,
              "offer_tag": null
            }
          ]
        },
        {
          "type": "Weekly",
          "slug": "weekly",
          "plans": [
            {
              "id": "141",
              "name": "T2 N200 - 250MB Anytime Data Plan (7 Days)",
              "size_mb": 250,
              "size_label": "250MB",
              "validity": "7 days",
              "price": 200,
              "offer_tag": null
            }
          ]
        }
      ]
    }
  ]
};
