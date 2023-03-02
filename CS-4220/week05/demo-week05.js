// // -- Promises vs Callbacks and "Callback Hell" ---------------------------------------

// const downloadImage = () => {};
// const processImage = () => {};
// const saveImage = () => {};
// const uploadImage = () => {};

// const url = '';
// downloadImage(url, (error, image) => {
//     if (!error) {
//         // things to do for image download
//         processImage(image, (error, processed) => {
//             if (!error) {
//                 // things to do for image proccessing
//                 saveImage(processed, (error, saved) => {
//                     if (!error) {
//                         uploadImage(saved, (error, uploaded) => {
//                             if (!error) {
//                                 console.log('finally done');
//                             } else {
//                                 console.log(error);
//                             }
//                         });
//                     } else {
//                         console.log(error);
//                     }
//                 });
//             } else {
//                 console.log(error);
//             }
//         });
//     } else {
//         console.log(error);
//     }
// });

// downloadImage(url)
//     .then((image) => processImage(image))
//     .then((processed) => saveImage(processed))
//     .then((saved) => uploadImage(saved))
//     .then((uploaded) => {
//         console.log('finally done');
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// // -- Setup ---------------------------------------------------------------------------
const catalog = {
    elden_ring: {
        name: 'Elden Ring',
        size: '50 GB',
        download_time: 500,
        settings: {
            performance_mode: true,
            resolution: '3840 x 2160',
            field_of_view: 90
        }
    },
    bioshock: {
        name: 'Bioshock',
        size: '25 GB',
        download_time: 250,
        settings: {
            performance_mode: false,
            resolution: '1440 x 1080',
            field_of_view: 90
        }
    },
    destiny: {
        name: 'Destiny 2',
        size: '105 GB',
        download_time: 1050,
        settings: {
            performance_mode: true,
            resolution: '3840 x 2160',
            field_of_view: 110
        }
    },
    legend_of_zelda: {
        name: 'The Legend of Zelda: Breath of the Wild',
        size: '14 GB',
        download_time: 140,
        settings: {
            performance_mode: false,
            resolution: '1280 x 720',
            field_of_view: 48
        }
    }
};

// // -- Callbacks -------------------------------------------------------------------------------

// write function to mimic download time - accepts a game object and a callback function

// write function to select game - accepts a catalog object and selection as a string

// // -- Promises --------------------------------------------------------------------------------

// write function to mimic download time - accepts a game object

// write function to select game - accepts a catalog object and selection as a string

// // -- Async/Await with Promises ----------------------------------------------------------------

// write function to select game - accepts a catalog object and selection as a string
