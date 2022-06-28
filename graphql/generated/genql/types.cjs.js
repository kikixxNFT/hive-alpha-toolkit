module.exports = {
    "scalars": [
        0,
        2,
        3,
        6,
        7
    ],
    "types": {
        "DateTime": {},
        "Mutation": {
            "createRaffle": [
                5,
                {
                    "discord_link": [
                        2
                    ],
                    "mint_date": [
                        2
                    ],
                    "mint_price": [
                        2
                    ],
                    "name": [
                        2,
                        "String!"
                    ],
                    "official_link": [
                        2
                    ],
                    "raffle_time": [
                        2
                    ],
                    "registration_closes": [
                        2
                    ],
                    "twitter_link": [
                        2
                    ],
                    "url": [
                        2,
                        "String!"
                    ]
                }
            ],
            "deleteRaffleById": [
                5,
                {
                    "id": [
                        3,
                        "ID!"
                    ]
                }
            ],
            "updateRaffleById": [
                5,
                {
                    "discord_link": [
                        2
                    ],
                    "id": [
                        3,
                        "ID!"
                    ],
                    "mint_date": [
                        2
                    ],
                    "mint_price": [
                        2
                    ],
                    "name": [
                        2
                    ],
                    "official_link": [
                        2
                    ],
                    "raffle_time": [
                        2
                    ],
                    "registration_closes": [
                        2
                    ],
                    "twitter_link": [
                        2
                    ],
                    "url": [
                        2
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "String": {},
        "ID": {},
        "Query": {
            "getRaffleById": [
                5,
                {
                    "id": [
                        2,
                        "String!"
                    ]
                }
            ],
            "getRaffles": [
                5,
                {
                    "sortBy": [
                        7
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Raffle": {
            "createdAt": [
                0
            ],
            "discord_link": [
                2
            ],
            "id": [
                3
            ],
            "mint_date": [
                2
            ],
            "mint_price": [
                2
            ],
            "name": [
                2
            ],
            "official_link": [
                2
            ],
            "raffle_time": [
                2
            ],
            "registration_closed": [
                6
            ],
            "registration_closes": [
                2
            ],
            "twitter_link": [
                2
            ],
            "updatedAt": [
                0
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {},
        "SortOrder": {}
    }
}