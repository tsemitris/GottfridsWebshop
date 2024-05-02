// Variable to HTML
const websiteObjects = [
    {
        // Option(s)
        menuOptionsObject: [
            {
                name: 'Cart',
                underclass: 'cart'
            },
            {
                name: 'Language',
                underclass: 'lang'
            },
            {
                name: 'Theme',
                underclass: 'theme'
            },
        ],
        // Categorie(s)
        categoriesObject: [
            {
                name: 'Donut',
                href: '',
                mainPicture: [
                    {
                        imageUrl: 'assets/donut_store/leighann-blackwood-i9jaW9kX-kc-unsplash.jpg',
                        alt: '',
                    },
                ],
            },
            // {
            //     name: 'Coffee',
            //     href: '',
            //     mainPicture: [
            //         {
            //             imageUrl: 'assets/donut_store/nathan-dumlao-I_394sxx0ec-unsplash.jpg',
            //             alt: '',
            //         },
            //     ],
            // },
            // {
            //     name: 'Ice cream',
            //     href: '',
            //     mainPicture: [
            //         {
            //             imageUrl: 'assets/donut_store/julie-martins-9_JzprubLOs-unsplash.jpg',
            //             alt: '',
            //         },
            //     ],
            // },
        ],
        // Store image(s)
        storeImagesObject: [
            {
                imageUrl: 'assets/donut_store/original_images/store_image_one_unsplash.jpg',
                alt: '',
            },
            {
                imageUrl: 'assets/donut_store/original_images/store_image_two_unsplash.jpg',
                alt: '',
            },
        ],
        // Donut(s)
        productsObject: [
            {
                donuts: [
                    // ChocoBliss Ring
                    {
                        name: 'ChocoBliss Ring',
                        price: 22,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/Chocobliss_ring_donut_one_unsplash.jpg',
                                alt: 'A stack of three chocolate donuts on a white table.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/Chocobliss_ring_donut_one_unsplash_very_small_size.jpg',
                                        imageWidth: '173',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/Chocobliss_ring_donut_one_unsplash_small_size.jpg',
                                        imageWidth: '824',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/Chocobliss_ring_donut_one_unsplash_medium_size.jpg',
                                        imageWidth: '1728',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/Chocobliss_ring_donut_one_unsplash_large_size.jpg',
                                        imageWidth: '2592',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/Chocobliss_ring_donut_one_unsplash.jpg',
                                        imageWidth: '3456',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/Chocobliss_ring_donut_two_unsplash.jpg',
                                alt: 'Three chocolate donuts with colorful sprinkles arranged on a white table. A delicious treat for any sweet tooth.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/Chocobliss_ring_donut_two_unsplash_very_small_size.jpg',
                                        imageWidth: '173',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/Chocobliss_ring_donut_two_unsplash_small_size.jpg',
                                        imageWidth: '824',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/Chocobliss_ring_donut_two_unsplash_medium_size.jpg',
                                        imageWidth: '1728',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/Chocobliss_ring_donut_two_unsplash_large_size.jpg',
                                        imageWidth: '2592',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/Chocobliss_ring_donut_two_unsplash.jpg',
                                        imageWidth: '3456',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Malasweet Indulgence
                    {
                        name: 'Malasweet Indulgence',
                        price: 25,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/malassada_donut_one_unsplash.jpg',
                                alt: 'A tray of delicious donuts arranged neatly on a table, tempting with their colorful glazes and sprinkles.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/malassada_donut_one_unsplash_very_small_size.jpg',
                                        imageWidth: '194',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/malassada_donut_one_unsplash_small_size.jpg',
                                        imageWidth: '969',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/malassada_donut_one_unsplash_medium_size.jpg',
                                        imageWidth: '1939',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/malassada_donut_one_unsplash_large_size.jpg',
                                        imageWidth: '2908',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/malassada_donut_one_unsplash.jpg',
                                        imageWidth: '3877',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/malassada_donut_two_unsplash.jpg',
                                alt: 'A plate of colorful donuts arranged on a table, tempting with their delicious glaze and sprinkles.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/malassada_donut_two_unsplash_very_small_size.jpg',
                                        imageWidth: '84',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/malassada_donut_two_unsplash_small_size.jpg',
                                        imageWidth: '420',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/malassada_donut_two_unsplash_medium_size.jpg',
                                        imageWidth: '839',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/malassada_donut_two_unsplash_large_size.jpg',
                                        imageWidth: '1258',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/malassada_donut_two_unsplash.jpg',
                                        imageWidth: '1678',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Vanilla Dream Delight
                    {
                        name: 'Vanilla Dream Delight',
                        price: 22,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/vanilla_sprinkle_one_unsplash.jpg',
                                alt: 'A tray of colorful donuts topped with sprinkles, tempting and delicious treats for any occasion.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/vanilla_sprinkle_one_unsplash_very_small_size.jpg',
                                        imageWidth: '142',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/vanilla_sprinkle_one_unsplash_small_size.jpg',
                                        imageWidth: '712',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/vanilla_sprinkle_one_unsplash_medium_size.jpg',
                                        imageWidth: '1424',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/vanilla_sprinkle_one_unsplash_large_size.jpg',
                                        imageWidth: '2136',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/vanilla_sprinkle_one_unsplash.jpg',
                                        imageWidth: '2848',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/vanilla_sprinkle_two_unsplash.jpg',
                                alt: 'A colorful assortment of donuts adorned with sprinkles, creating a delightful treat for the eyes and taste buds.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/vanilla_sprinkle_two_unsplash_very_small_size.jpg',
                                        imageWidth: '142',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/vanilla_sprinkle_two_unsplash_small_size.jpg',
                                        imageWidth: '712',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/vanilla_sprinkle_two_unsplash_medium_size.jpg',
                                        imageWidth: '1424',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/vanilla_sprinkle_two_unsplash_large_size.jpg',
                                        imageWidth: '2136',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/vanilla_sprinkle_two_unsplash.jpg',
                                        imageWidth: '2848',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Oceanic Bliss Rings
                    {
                        name: 'Oceanic Bliss Rings',
                        price: 22,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/blue_frosted_donuts_one_unsplash.jpg',
                                alt: 'A tray of blue frosted donuts with colorful sprinkles, tempting and delicious treats for any occasion.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/blue_frosted_donuts_one_unsplash_very_small_size.jpg',
                                        imageWidth: '300',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/blue_frosted_donuts_one_unsplash_small_size.jpg',
                                        imageWidth: '1500',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/blue_frosted_donuts_one_unsplash_medium_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/blue_frosted_donuts_one_unsplash_large_size.jpg',
                                        imageWidth: '4500',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/blue_frosted_donuts_one_unsplash.jpg',
                                        imageWidth: '6000',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/blue_frosted_donuts_two_unsplash.jpg',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/blue_frosted_donuts_two_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/blue_frosted_donuts_two_unsplash_small_size.jpg',
                                        imageWidth: '1000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/blue_frosted_donuts_two_unsplash_medium_size.jpg',
                                        imageWidth: '2000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/blue_frosted_donuts_two_unsplash_large_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/blue_frosted_donuts_two_unsplash.jpg',
                                        imageWidth: '4000',
                                    },
                                ],
                                alt: 'Plate of blue frosted donuts with sprinkles.',
                            },
                        ],
                        imagePosition: 1,
                    },
                    // ChocoSplash Delight
                    {
                        name: 'ChocoSplash Delight',
                        price: 22,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/chocolate_sprinkle_one_unsplash.jpg',
                                alt: 'Three chocolate donuts with colorful sprinkles placed on a wooden table.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/chocolate_sprinkle_one_unsplash_very_small_size.jpg',
                                        imageWidth: '300',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/chocolate_sprinkle_one_unsplash_small_size.jpg',
                                        imageWidth: '1500',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/chocolate_sprinkle_one_unsplash_medium_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/chocolate_sprinkle_one_unsplash_large_size.jpg',
                                        imageWidth: '4500',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/chocolate_sprinkle_one_unsplash.jpg',
                                        imageWidth: '6000',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/chocolate_sprinkle_two_unsplash.jpg',
                                alt: 'A stack of three chocolate-frosted donuts with colorful sprinkles on top.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/chocolate_sprinkle_two_unsplash_very_small_size.jpg',
                                        imageWidth: '197',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/chocolate_sprinkle_two_unsplash_small_size.jpg',
                                        imageWidth: '984',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/chocolate_sprinkle_two_unsplash_medium_size.jpg',
                                        imageWidth: '1969',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/chocolate_sprinkle_two_unsplash_large_size.jpg',
                                        imageWidth: '2953',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/chocolate_sprinkle_two_unsplash.jpg',
                                        imageWidth: '3937',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Zesty Orange Zing Ring
                    {
                        name: 'Zesty Orange Zing Ring',
                        price: 25,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/zesty_orange_zing_ring_one_unsplash.jpg',
                                alt: 'A plate with two donuts and a popsicle, a delightful and colorful treat for a sweet tooth.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/zesty_orange_zing_ring_one_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/zesty_orange_zing_ring_one_unsplash_small_size.jpg',
                                        imageWidth: '1000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/zesty_orange_zing_ring_one_unsplash_medium_size.jpg',
                                        imageWidth: '2000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/zesty_orange_zing_ring_one_unsplash_large_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/zesty_orange_zing_ring_one_unsplash.jpg',
                                        imageWidth: '4000',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/zesty_orange_zing_ring_two_unsplash.jpg',
                                alt: 'A donut topped with fluffy whipped cream and garnished with slices of fresh orange.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/zesty_orange_zing_ring_two_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/zesty_orange_zing_ring_two_unsplash_small_size.jpg',
                                        imageWidth: '1000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/zesty_orange_zing_ring_two_unsplash_medium_size.jpg',
                                        imageWidth: '2000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/zesty_orange_zing_ring_two_unsplash_large_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/zesty_orange_zing_ring_two_unsplash.jpg',
                                        imageWidth: '4000',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Rosy Sprinkle Bliss Rings
                    {
                        name: 'Rosy Sprinkle Bliss Rings',
                        price: 25,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/rosy_sprinkle_bliss_rings_one_unsplash.jpg',
                                alt: 'Three pink donuts with colorful sprinkles arranged on a white plate.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/rosy_sprinkle_bliss_rings_one_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/rosy_sprinkle_bliss_rings_one_unsplash_small_size.jpg',
                                        imageWidth: '1000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/rosy_sprinkle_bliss_rings_one_unsplash_medium_size.jpg',
                                        imageWidth: '2000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/rosy_sprinkle_bliss_rings_one_unsplash_large_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/rosy_sprinkle_bliss_rings_one_unsplash.jpg',
                                        imageWidth: '4000',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/rosy_sprinkle_bliss_rings_two_unsplash.jpg',
                                alt: 'Three pink-frosted donuts stacked on top of each other.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/rosy_sprinkle_bliss_rings_two_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/rosy_sprinkle_bliss_rings_two_unsplash_small_size.jpg',
                                        imageWidth: '1000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/rosy_sprinkle_bliss_rings_two_unsplash_medium_size.jpg',
                                        imageWidth: '2000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/rosy_sprinkle_bliss_rings_two_unsplash_large_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/rosy_sprinkle_bliss_rings_two_unsplash.jpg',
                                        imageWidth: '4000',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Simple Sweetness Rounds
                    {
                        name: 'Simple Sweetness Rounds',
                        price: 20,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/simple_sweetness_rounds_one_unsplash.jpg',
                                alt: 'Donut ready to be enjoyed as a delicious treat.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/simple_sweetness_rounds_one_unsplash_very_small_size.jpg',
                                        imageWidth: '127',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/simple_sweetness_rounds_one_unsplash_small_size.jpg',
                                        imageWidth: '638',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/simple_sweetness_rounds_one_unsplash_medium_size.jpg',
                                        imageWidth: '1276',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/simple_sweetness_rounds_one_unsplash_large_size.jpg',
                                        imageWidth: '1913',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/simple_sweetness_rounds_one_unsplash.jpg',
                                        imageWidth: '2551',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/simple_sweetness_rounds_two_unsplash.jpg',
                                alt: 'A stack of donuts with one bite taken out, showcasing a delicious treat that is both tempting and mouthwatering.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/simple_sweetness_rounds_two_unsplash_very_small_size.jpg',
                                        imageWidth: '120',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/simple_sweetness_rounds_two_unsplash_small_size.jpg',
                                        imageWidth: '600',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/simple_sweetness_rounds_two_unsplash_medium_size.jpg',
                                        imageWidth: '1200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/simple_sweetness_rounds_two_unsplash_large_size.jpg',
                                        imageWidth: '1800',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/simple_sweetness_rounds_two_unsplash.jpg',
                                        imageWidth: '2400',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Blossom Glazed Circlets
                    {
                        name: 'Blossom Glazed Circlets',
                        price: 25,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/blossom_glazed_circlets_one_unsplash.jpg',
                                alt: 'A plate of donuts with pink frosting and flowers, a delightful treat for any occasion.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/blossom_glazed_circlets_one_unsplash_very_small_size.jpg',
                                        imageWidth: '125',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/blossom_glazed_circlets_one_unsplash_small_size.jpg',
                                        imageWidth: '625',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/blossom_glazed_circlets_one_unsplash_medium_size.jpg',
                                        imageWidth: '1250',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/blossom_glazed_circlets_one_unsplash_large_size.jpg',
                                        imageWidth: '1875',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/blossom_glazed_circlets_one_unsplash.jpg',
                                        imageWidth: '2500',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/blossom_glazed_circlets_two_unsplash.jpg',
                                alt: 'Donuts with floral decoration.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/blossom_glazed_circlets_two_unsplash_very_small_size.jpg',
                                        imageWidth: '125',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/blossom_glazed_circlets_two_unsplash_small_size.jpg',
                                        imageWidth: '625',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/blossom_glazed_circlets_two_unsplash_medium_size.jpg',
                                        imageWidth: '1250',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/blossom_glazed_circlets_two_unsplash_large_size.jpg',
                                        imageWidth: '1875',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/blossom_glazed_circlets_two_unsplash.jpg',
                                        imageWidth: '2500',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Sunset Striped Delights
                    {
                        name: 'Sunset Striped Delights',
                        price: 20,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/sunset_striped_delights_one_unsplash.jpg',
                                alt: 'Four striped donuts, white and orange.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/sunset_striped_delights_one_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/sunset_striped_delights_one_unsplash_small_size.jpg',
                                        imageWidth: '1004',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/sunset_striped_delights_one_unsplash_medium_size.jpg',
                                        imageWidth: '2008',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/sunset_striped_delights_one_unsplash_large_size.jpg',
                                        imageWidth: '3012',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/sunset_striped_delights_one_unsplash.jpg',
                                        imageWidth: '4016',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/sunset_striped_delights_two_unsplash.jpg',
                                alt: 'Striped donut, white and orange.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/sunset_striped_delights_two_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/sunset_striped_delights_two_unsplash_small_size.jpg',
                                        imageWidth: '1004',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/sunset_striped_delights_two_unsplash_medium_size.jpg',
                                        imageWidth: '2008',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/sunset_striped_delights_two_unsplash_large_size.jpg',
                                        imageWidth: '3012',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/sunset_striped_delights_two_unsplash.jpg',
                                        imageWidth: '4016',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                    // Pink Blush Ring Delight
                    {
                        name: 'Pink Blush Ring Delight',
                        price: 20,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/pink_blush_ring_delight_one_unsplash.jpg',
                                alt: 'Two donuts with pink icing and sprinkles on a plate.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/pink_blush_ring_delight_one_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/pink_blush_ring_delight_one_unsplash_small_size.jpg',
                                        imageWidth: '1000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/pink_blush_ring_delight_one_unsplash_medium_size.jpg',
                                        imageWidth: '2000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/pink_blush_ring_delight_one_unsplash_large_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/pink_blush_ring_delight_one_unsplash.jpg',
                                        imageWidth: '4000',
                                    },
                                ],
                            },
                            {
                                imageUrl: 'assets/products/donuts/original_size_images/pink_blush_ring_delight_two_unsplash.jpg',
                                alt: 'Donut with pink icing and sprinkles on a plate.',
                                optimizedImages: [
                                    {
                                        imageUrl: 'assets/products/donuts/very_small_size_images/pink_blush_ring_delight_two_unsplash_very_small_size.jpg',
                                        imageWidth: '200',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/small_size_images/pink_blush_ring_delight_two_unsplash_small_size.jpg',
                                        imageWidth: '1000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/medium_size_images/pink_blush_ring_delight_two_unsplash_medium_size.jpg',
                                        imageWidth: '2000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/large_size_images/pink_blush_ring_delight_two_unsplash_large_size.jpg',
                                        imageWidth: '3000',
                                    },
                                    {
                                        imageUrl: 'assets/products/donuts/original_size_images/pink_blush_ring_delight_two_unsplash.jpg',
                                        imageWidth: '4000',
                                    },
                                ],
                            },
                        ],
                        imagePosition: 1,
                    },
                ],
                coffees: [
                    {
                        name: 'test coffee',
                        price: 0,
                        category: '',
                        amount: 0,
                        rating: 1,
                        images: [
                            {
                                imageUrl: '',
                            },
                            {
                                imageUrl: '',
                            },
                        ],
                        imagePosition: 1,
                    },
                ],
                iceCreams: [
                    {
                        name: '',
                        price: 0,
                        category: '',
                        amount: 0,
                        rating: 1,
                        image: [
                            {
                                imageUrl: '',
                            },
                            {
                                imageUrl: '',
                            },
                        ],
                        imagePosition: 1,
                    },
                ],

            },
        ],
        paymentMethodsObject: [
            {
                paymentName: 'Card payment',
                value: 'card',
                imageUrl: '../assets/icons/credit_card.svg',
            },
            {
                paymentName: 'Invoice',
                value: 'invoice',
                imageUrl: '../assets/icons/invoice.svg',
            },
        ],

    },
];

let cartObject = [];

export {
    websiteObjects,
    cartObject,
};
